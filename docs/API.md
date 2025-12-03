# Atomic Protocol API

Atomic Protocol is a streamlined, TypeScript-first Bedrock client focused on fast connects and strongly typed packets. This guide covers the small public surface area and the events you will most often use.

## Quick Start

```ts
import { Authflow } from "prismarine-auth";
import { createClient } from "atomic-protocol";

const authflow = new Authflow("atomic-profile", "./.minecraft"); // caches tokens locally

const client = createClient({
  host: "play.example.com",
  port: 19132,
  authflow,
  debug: true,
});

client.on("join", () => console.log("Spawned into the world"));
client.on("text", (packet) => console.log(`[chat] ${packet.message}`));
```

## `createClient(options): Client`

Creates and returns a `Client` instance. It will:
- Optionally ping the server to discover the advertised port (`followPort`) and log MOTD info.
- Handle Realms lookups when `realmId` (and optional `inviteCode`) are supplied.
- Initialize encryption/compression, request network settings, and perform login.

You can also instantiate `new Client(options)` directly, but `createClient` wraps the recommended connection flow.

### Connection Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `host` | `string` | required unless `realmId`/`networkId` | Target server host. |
| `port` | `number` | `19132` | Target server port. |
| `authflow` | `Authflow` | required | Auth from `prismarine-auth` used to fetch Xbox + PlayFab tokens. |
| `protocolVersion` | `number` | `860` | Must match the server protocol; mismatches throw before connect. |
| `version` | `string` | `1.21.124` | Minecraft version string stored in the login chain. |
| `debug` | `boolean` | `false` | Emit verbose connection logs. |
| `connectTimeout` | `number` | `9000` | ms to wait for the RakNet/Nethernet connect phase. |
| `skinData` | `object` | built-in Steve skin | Optional overrides for the login skin payload. |
| `viewDistance` | `number` | `10` | Chunk radius requested after login. |
| `delayedInit` | `boolean` | `false` | If `true`, call `client.init()` yourself after construction. |
| `skipPing` | `boolean` | `false` | Skip the pre-connect server ping. |
| `followPort` | `boolean` | `true` (when not joining Realms) | If the server advertises a different port, connect to it. |
| `packets` | `string[]` | `[]` (emit all) | If provided, only these packet names will emit events. |
| `transport` | `"raknet" \| "nethernet"` | `"raknet"` | Use RakNet or Nethernet transport. |
| `networkId` | `bigint` | — | Nethernet network identifier. Set automatically for Realms with Nethernet. |
| `useSignalling` | `boolean` | `false` | Enable Nethernet signalling updates. Auto-enabled for Nethernet Realms. |
| `autoReconnect` | `boolean` | `false` | Reserved for future use; reconnect loop not implemented yet. |
| `realmId` | `number` | — | Join a Realms world by id. Host/port or Nethernet `networkId` are fetched for you. |
| `inviteCode` | `string` | — | Optional invite code to auto-accept before joining a Realm. |

All packet names and field shapes match the protocol spec. The definitions live in `dist/Events.d.ts` and `dist/packets/*`, so TypeScript will guide the payload structure.

## Realm and Nethernet Support

Joining a Realm:

```ts
const client = createClient({
  realmId: 123456,
  inviteCode: "abcdef",
  authflow,
});
```

The client will fetch the Realm address, pick RakNet or Nethernet automatically, and enable signalling when required. When using Nethernet directly, you can pass `networkId` and `useSignalling: true`.

## Protocol Reference

Atomic Protocol follows the Bedrock 1.21.124 protocol (`protocolVersion: 860`). For packet names and fields, consult `Events..d.ts` file or `src/packets` directory.
