import { execSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";

// Paths
const ROOT = path.resolve(__dirname, "..");
const PROTOCOL = path.join(ROOT, "config", "protocol.json");
const GEN_DIR = path.join(ROOT, "packets");
const EVENTS_FILE = path.join(ROOT, "Events.d.ts");
const METADATA_FILE = path.join(GEN_DIR, "metadata.ts");

const MOJANG_REPO = "https://github.com/Mojang/bedrock-protocol-docs.git";

const TEMP_DIR = path.resolve(
    process.cwd(),
    ".mojang-temp-" + crypto.randomBytes(4).toString("hex")
);

const MOJANG_JSON_DIR = path.join(TEMP_DIR, "json");


// Mojang clone helpers
function cloneMojangDocs() {
    console.log("Cloning Mojang protocol docs...");

    execSync(`git clone --depth=1 ${MOJANG_REPO} "${TEMP_DIR}"`, {
        stdio: "ignore",
    });

    if (!fs.existsSync(MOJANG_JSON_DIR)) {
        throw new Error("Mojang docs clone succeeded but /json directory not found.");
    }

    console.log("Mojang docs ready:", MOJANG_JSON_DIR);
}

function cleanupMojangDocs() {
    console.log("Cleaning temp Mojang clone...");
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
}

// Load Atomic protocol
const protocol = JSON.parse(fs.readFileSync(PROTOCOL, "utf8"));
const types: Record<string, any> = protocol.types ?? {};

if (!fs.existsSync(GEN_DIR)) fs.mkdirSync(GEN_DIR, { recursive: true });

// Helpers: naming
const toPascal = (name: string) =>
    name
        .split(/[_\s]+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("");

const toPacketName = (name: string) =>
    toPascal(name.replace(/^packet_/, "")) + "Packet";

const toEventKey = (packetName: string) => packetName.replace(/^packet_/, "");

// Property name helpers
const IDENT = /^[A-Za-z_$][\w$]*$/;
const formatProp = (name?: string) => {
    if (!name) return "payload";
    return IDENT.test(name) ? name : JSON.stringify(name);
};

// Primitive <-> TS type mapping
const PRIMITIVES = new Set([
    "i8", "i16", "i32", "i64", "u8", "u16", "u32", "u64",
    "varint", "zigzag32", "zigzag64",
    "varint128",
    "li8", "li16", "li32", "li64", "lu8", "lu16", "lu32", "lu64",
    "f32", "f64", "lf32", "lf64",
    "bool", "string", "uuid", "buffer", "void", "native"
]);

const mapPrimitive = (t: string): string => {
    switch (t) {
        case "bool": return "boolean";
        case "string":
        case "uuid": return "string";
        case "buffer": return "Buffer";
        case "varint128": return "bigint";
        case "void": return "void";
        case "native": return "any";
        default:
            return PRIMITIVES.has(t) ? "number" : toPascal(t);
    }
};

function tsType(node: any): string {
    if (typeof node === "string") {
        return mapPrimitive(node);
    }

    if (Array.isArray(node)) {
        const [kind, def] = node;
        return handleKind(kind, def);
    }

    if (node && typeof node === "object" && node.type) {
        return handleKind(node.type, node);
    }

    return "any";
}

function handleKind(kind: string, def: any): string {
    switch (kind) {
        case "container":
            return `{${(def || [])
                .map((f: any) => `  ${formatProp(f.name)}: ${tsType(f.type)};`)
                .join("\n")}}`;

        case "array": {
            const inner = tsType(def.type);
            return inner.includes("|") ? `(${inner})[]` : `${inner}[]`;
        }

        case "option":
            return `${tsType(def)} | null`;

        case "switch": {
            const compare = def.compareTo || def.compare_to || "type";
            const variants = Object.entries(def.fields || {});

            if (variants.length === 0) return "any";

            return variants.map(([value, payload]) => {
                const body = tsType(payload);
                const key = formatProp(compare);
                if (body.startsWith("{")) {
                    return `{ ${key}: ${JSON.stringify(value)}; ${body.slice(1)}`;
                } else {
                    return `{ ${key}: ${JSON.stringify(value)}; value: ${body} }`;
                }
            }).join(" | ");
        }

        case "mapper":
            return (
                Object.values(def.mappings || {})
                    .map((v: any) => JSON.stringify(v))
                    .join(" | ")
                || "string"
            );

        case "bitflags": {
            const flags = Array.isArray(def)
                ? def
                : Object.keys(def.flags || {});

            return `{${flags
                .map((f: string) => `  ${formatProp(f)}: boolean;`)
                .join("\n")}}`;
        }

        default:
            return "any";
    }
}

// Reference collection
function collectReferences(node: any, acc: Set<string>) {
    if (typeof node === "string") {
        if (!PRIMITIVES.has(node)) acc.add(node);
        return;
    }

    if (Array.isArray(node)) {
        const [kind, def] = node;

        switch (kind) {
            case "container":
                (def || []).forEach((f: any) => collectReferences(f.type, acc));
                break;
            case "array":
                collectReferences(def.type, acc);
                break;
            case "option":
                collectReferences(def, acc);
                break;
            case "switch":
                Object.values(def.fields || {}).forEach((c: any) =>
                    collectReferences(c, acc)
                );
                break;
            case "mapper":
                // no nested type references here
                break;
            case "bitflags":
                break;
        }
        return;
    }

    if (node && typeof node === "object" && node.type) {
        collectReferences([node.type, node], acc);
    }
}

// Atomic packet ID extraction
function extractAtomicId(typeName: string, def: any, protocolRoot: any): number | undefined {
    if (protocolRoot.packetIds) {
        const key = toEventKey(typeName);
        const id = protocolRoot.packetIds[key];
        if (typeof id === "number") return id;
    }

    if (Array.isArray(def) && def[0] === "container") {
        for (const f of def[1]) {
            if (typeof f.id === "number") return f.id;
        }
    }

    if (typeof def?.id === "number") return def.id;
    if (typeof def?.packet_id === "number") return def.packet_id;

    return undefined;
}

// Mojang JSON: load & extract metadata
type MojangMeta = {
    id?: any;
    name?: string;
    description?: string;
};

function extractMojangMeta(json: any): { id?: number; name?: string; description?: string; direction?: string; } {
    if (!json || typeof json !== "object") return {};

    const meta = json.$metaProperties ?? {};
    const cereal = meta["[cereal:packet]"];
    const description = json.description;

    return {
        id: cereal,
        description,
    };
}

function loadMojangDocs(dir: string): Map<string, MojangMeta & { name: string; }> {
    const map = new Map<string, MojangMeta & { name: string; }>();

    for (const file of fs.readdirSync(dir)) {
        if (!file.endsWith(".json")) continue;

        const base = file.replace(/\.json$/, "");
        const name = base
            .replace(/Packet$/, "")
            .replace(/[A-Z]/g, m => "_" + m.toLowerCase())
            .replace(/^_/, "");

        const key = `packet_${name}`;
        const json = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));

        const meta = extractMojangMeta(json);
        if (meta.id || meta.description) {
            map.set(key, { ...meta, name });
        }
    }
    return map;
}

// Helper type inlining per packet

/**
 * Collect all transitive helper types used by a packet (excluding other packets).
 */
function collectHelperTypesForPacket(typeName: string): Set<string> {
    const rootDef = types[typeName];
    const result = new Set<string>();

    if (!rootDef) return result;

    collectReferences(rootDef, result);

    const queue = [...result];

    while (queue.length > 0) {
        const ref = queue.pop()!;
        if (ref.startsWith("packet_")) {
            result.delete(ref);
            continue;
        }

        const def = types[ref];
        if (!def) continue;

        const innerRefs = new Set<string>();
        collectReferences(def, innerRefs);

        for (const inner of innerRefs) {
            if (!PRIMITIVES.has(inner) && !result.has(inner)) {
                result.add(inner);
                queue.push(inner);
            }
        }
    }

    for (const r of [...result]) {
        if (r.startsWith("packet_")) result.delete(r);
    }

    return result;
}

function generateHelperTypes(helperNames: Set<string>): string {
    const lines: string[] = [];

    for (const typeName of helperNames) {
        const def = types[typeName];
        if (!def) continue;

        const ifaceName = toPascal(typeName);

        if (Array.isArray(def) && def[0] === "container") {
            const fields = def[1]
                .map((f: any) => `  ${formatProp(f.name)}: ${tsType(f.type)};`)
                .join("\n");

            lines.push(`
export interface ${ifaceName} {
${fields}
}
`);
        } else {
            lines.push(`
export type ${ifaceName} = ${tsType(def)};
`);
        }
    }

    return lines.join("\n");
}

async function main() {
    // Mojang clone & metadata
    cloneMojangDocs();
    const mojangMeta = loadMojangDocs(MOJANG_JSON_DIR);
    cleanupMojangDocs();

    // Packet set
    const packets = Object.entries(types).filter(([k]) => k.startsWith("packet_"));

    // Packet metadata type
    const METADATA_HEADER = `
export interface PacketMetadata {
  id?: number;
  name: string;
  description?: string;
  direction?: string;
}

export const PACKET_METADATA: Record<string, PacketMetadata> = {
`;

    const metadataEntries: string[] = [];

    // Generate packet files
    for (const [typeName, def] of packets) {
        const iface = toPacketName(typeName);
        const eventKey = toEventKey(typeName);

        const atomicId = extractAtomicId(typeName, def, protocol);
        const mojang = mojangMeta.get(typeName);

        const id = atomicId ?? mojang?.id;
        const name = mojang?.name ?? eventKey;
        const description = mojang?.description;

        const jsDoc = `
/**
 * ${iface}
${id ? ` * Packet ID: ${id}` : " * Unknown packet ID"}
${description ? ` * ${description}` : " * No description"}
 */
`;

        let packetBody: string;

        if (Array.isArray(def) && def[0] === "container") {
            const fields = def[1].map((f: any) => {
                if (f.name) {
                    return `  ${formatProp(f.name)}: ${tsType(f.type)};`;
                }

                if (f.type && Array.isArray(f.type) && f.type[0] === "switch") {
                    return `  payload: ${tsType(f.type)};`;
                }

                return null;
            }).filter(Boolean).join("\n");

            packetBody = `
export interface ${iface} {
${fields}
}
`;
        } else {
            packetBody = `
export type ${iface} = ${tsType(def)};
`;
        }

        const helperTypes = collectHelperTypesForPacket(typeName);
        const helpersBlock = generateHelperTypes(helperTypes);

        const content = `
${jsDoc}
${packetBody}
${helpersBlock}
export const ${iface}Info: import("./metadata").PacketMetadata = {
  id: ${id ?? "undefined"},
  name: ${JSON.stringify(name)},
  description: ${description ? JSON.stringify(description) : "undefined"},
};
`;

        const formattedContent = await prettier.format(content, { parser: "typescript" });

        fs.writeFileSync(path.join(GEN_DIR, `${typeName}.ts`), formattedContent);

        metadataEntries.push(
            `  "${eventKey}": {
    id: ${id ?? "undefined"},
    name: ${JSON.stringify(name)},
    description: ${description ? JSON.stringify(description) : "undefined"}
  },`
        );
    }

    // Write metadata.ts
    fs.writeFileSync(
        METADATA_FILE,
        await prettier.format(METADATA_HEADER + metadataEntries.join("\n") + "\n};", { parser: "typescript" })
    );

    // Events.d.ts (with imports + descriptions)
    const imports = packets.map(([n]) =>
        `import type { ${toPacketName(n)} } from "./packets/${n}";`
    ).join("\n");

    const interfaceBody = packets.map(([n]) => {
        const ev = toEventKey(n);
        const iface = toPacketName(n);
        const mojang = mojangMeta.get(n);
        const atomicId = extractAtomicId(n, types[n], protocol);

        const id = atomicId ?? mojang?.id;
        const description = mojang?.description;

        const lines: string[] = [];
        lines.push("  /**");

        if (description) {
            lines.push(`   * ${description}`);
        } else {
            lines.push(`   * Event for ${iface}.`);
        }

        if (id != null) {
            lines.push(`   *`);
            lines.push(`   * Packet ID: ${id}`);
        }

        lines.push("   */");

        return `
${lines.join("\n")}
  "${ev}": (packet: ${iface}) => void;`;
    }).join("\n");

    const events = `
${imports}

export interface Events {
${interfaceBody}
  "session": () => void;
  "close": () => void;
  "error": () => void;
  "disconnect": () => void;
  "connect_allowed": () => void;
}
`;

    fs.writeFileSync(EVENTS_FILE, await prettier.format(events, { parser: "typescript" }));

    console.log(`Generated ${packets.length} packet files`);
    console.log(`Injected Mojang metadata for ${mojangMeta.size} packets`);
    console.log("Done.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
