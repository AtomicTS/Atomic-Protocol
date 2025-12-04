import type { IceServer } from "atomic-net";
import { SignalStructure } from "atomic-net";
import { EventEmitter, once } from "node:events";
import { Authflow } from "prismarine-auth";
import { RawData, WebSocket } from "ws";
import { config } from "../config/config";
import { Logger } from "../utils/logger";

const MessageType = {
    RequestPing: 0,
    Signal: 1,
    Credentials: 2
};

type MessageEnvelope =
    | { Type: 0; } // RequestPing from server
    | { Type: 1; From: string; Message: string; } // Signal
    | { Type: 2; From: "Server"; Message: string; };

type ParsedIceUrl = {
    scheme: "stun" | "stuns" | "turn" | "turns";
    hostname: string;
    port: number;
    transport?: "udp" | "tcp";
    isTurn: boolean;
};

export class NethernetSignal extends EventEmitter {
    public networkId: string;
    public authflow: Authflow;
    public version: string;
    public ws: WebSocket | null = null;
    public credentials: IceServer[] = [];

    private destroyed = false;

    constructor(networkId: string, authflow: Authflow, version: string) {
        super();
        this.networkId = networkId;
        this.authflow = authflow;
        this.version = version;
    }

    async connect() {
        if (this.ws?.readyState === WebSocket.OPEN) throw new Error('Already connected signaling server');
        this.destroyed = false;

        await this.init();
        await Promise.race([
            once(this, "credentials"),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timed out waiting for credentials")), 15000)
            )
        ]);
    }

    async destroy() {
        Logger.debug('Disconnecting from Signal', config.debug);

        this.destroyed = true;

        const ws = this.ws;
        this.ws = null;

        if (ws) {
            // Remove listeners to avoid leaks
            ws.removeAllListeners("open");
            ws.removeAllListeners("close");
            ws.removeAllListeners("error");
            ws.removeAllListeners("message");

            if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
                await new Promise<void>((resolve) => {
                    const done = () => resolve();
                    ws.once("close", done);
                    try {
                        ws.close(1000, "Normal Closure");
                    } catch {
                        resolve();
                    }
                });
            }
        }

    }

    async init() {
        const xbl = await this.authflow.getMinecraftBedrockServicesToken({ version: this.version });
        Logger.debug('Fetched XBL Token', config.debug);

        const address = `wss://signal.franchise.minecraft-services.net/ws/v1.0/signaling/${this.networkId}`;
        Logger.debug(`Connecting to Signal ${address}`, config.debug);

        const ws = new WebSocket(address, { headers: { Authorization: xbl.mcToken } });
        this.ws = ws;

        ws.on("open", () => this.onOpen());
        ws.on("close", (code, reason) => this.onClose(code, reason.toString()));
        ws.on("error", (err) => this.onError(err as Error));
        ws.on("message", (data) => this.onMessage(data as any));
    }

    private onOpen() {
        Logger.debug("Connected to Signal", config.debug);
    }

    private onError(err: any) {
        Logger.debug(`Signal Error: ${JSON.stringify(err, null, 2)}`, config.debug);
    }

    private async onClose(code: number, reason: string) {
        Logger.debug(`Signal Disconnected code=${code} reason=${reason}`, config.debug);

        if (this.destroyed) return;

        await this.destroy();
        this.emit("error", new Error(`Signal closed: ${code} ${reason}`));
    }

    private onMessage(res: RawData) {
        let message: MessageEnvelope | null = null;

        if (typeof res === "string") {
            try {
                message = JSON.parse(res) as MessageEnvelope;
            } catch (e) {
                Logger.debug(`Failed to parse message: ${String(e)}`, config.debug);
                return;
            }
        } else if (res instanceof Buffer) {
            try {
                message = JSON.parse(res.toString("utf8")) as MessageEnvelope;
            } catch (e) {
                Logger.debug(`Failed to parse binary message: ${String(e)}`, config.debug);
                return;
            }
        } else {
            Logger.debug(`Received non-text message ${typeof res}`, config.debug);
            return;
        }

        Logger.debug(`Received message ${JSON.stringify(message)}`, config.debug);

        switch (message.Type) {
            case MessageType.Credentials: {
                if ((message as any).From !== "Server") {
                    Logger.debug(`Ignoring credentials from non-Server ${JSON.stringify(message)}`, config.debug);
                    return;
                }
                this.credentials = parseTurnServers((message as any).Message);
                this.emit("credentials", this.credentials);
                break;
            }
            case MessageType.Signal: {
                const m = message as Extract<MessageEnvelope, { Type: 1; }>;
                try {
                    const signal = SignalStructure.fromString(m.Message);
                    signal.networkId = m.From;
                    this.emit("signal", signal);
                } catch (e) {
                    Logger.debug(`Failed to parse Signal: ${String(e)}`, config.debug);
                }
                break;
            }
            case MessageType.RequestPing: {
                try {
                    this.ws?.send(JSON.stringify({ Type: MessageType.RequestPing }));
                } catch { }
                break;
            }
            default:
                break;
        }
    }

    write(signal: SignalStructure) {
        if (!this.ws) throw new Error('WebSocket not connected');

        const message = JSON.stringify({
            Type: MessageType.Signal,
            To: signal.networkId,
            Message: signal.toString()
        });

        Logger.debug(`Sending Signal ${message}`, config.debug);
        this.ws.send(message);
    }
}

function parseTurnServers(dataString: string): IceServer[] {
    const iceServers: IceServer[] = [];
    try {
        const data = JSON.parse(dataString);
        Logger.debug("Parsed Turn Servers payload", config.debug);

        const list = Array.isArray(data?.TurnAuthServers) ? data.TurnAuthServers : [];
        for (const server of list) {
            const urls = Array.isArray(server?.Urls) ? server.Urls : [];
            const username = typeof server?.Username === "string" ? server.Username : undefined;
            const password = typeof server?.Password === "string"
                ? server.Password
                : (typeof server?.Credential === "string" ? server.Credential : undefined);

            for (const rawUrl of urls) {
                if (typeof rawUrl !== "string") continue;
                const parsed = parseIceUrl(rawUrl);
                if (!parsed) continue;

                const candidates = new Set<string>();
                candidates.add(formatIceUrl(parsed));

                if (parsed.isTurn) {
                    if (parsed.transport !== "tcp") {
                        candidates.add(formatIceUrl({ ...parsed, transport: "tcp" }));
                    }
                    if (parsed.scheme !== "turns") {
                        candidates.add(formatIceUrl({ ...parsed, scheme: "turns", port: 5349, transport: "tcp" }));
                    }
                }

                for (const url of candidates) {
                    if (parsed.isTurn) {
                        iceServers.push({
                            urls: url,
                            username,
                            credential: password
                        });
                    } else {
                        iceServers.push({ urls: url });
                    }
                }
            }
        }
    } catch (e) {
        Logger.debug(`Failed to parse TURN servers: ${String(e)}`, config.debug);
    }
    return iceServers;
}

function parseIceUrl(url: string): ParsedIceUrl | null {
    const match = url.trim().match(/^(?<scheme>stuns?|turns?)(?::\/\/|:)?(?<host>[^:?\s]+)(?::(?<port>\d+))?(?:\?(?<query>.*))?$/i);
    if (!match || !match.groups) {
        return null;
    }

    const scheme = match.groups.scheme.toLowerCase() as ParsedIceUrl["scheme"];
    const hostname = match.groups.host;
    const port = match.groups.port ? parseInt(match.groups.port, 10) : defaultPortForScheme(scheme);
    if (!hostname || Number.isNaN(port)) {
        return null;
    }

    const isTurn = scheme.startsWith("turn");
    let transport: ParsedIceUrl["transport"];

    if (scheme === "turns") {
        transport = "tcp";
    }

    if (isTurn) {
        const params = new URLSearchParams(match.groups.query ?? "");
        const requested = params.get("transport")?.toLowerCase();
        if (requested === "tcp") {
            transport = "tcp";
        } else if (!transport) {
            transport = "udp";
        }
    }

    return { scheme, hostname, port, transport, isTurn };
}

function formatIceUrl(parsed: ParsedIceUrl): string {
    const protocol = parsed.scheme;
    const base = `${protocol}:${parsed.hostname}:${parsed.port}`;
    if (!parsed.isTurn) {
        return base;
    }

    const transport = parsed.transport ?? "udp";
    return `${base}?transport=${transport}`;
}

function defaultPortForScheme(scheme: string): number {
    switch (scheme) {
        case "stuns":
        case "turns":
            return 5349;
        default:
            return 3478;
    }
}
