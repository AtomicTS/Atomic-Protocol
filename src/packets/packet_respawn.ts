/**
 * RespawnPacket
 * Packet ID: 45
 * Sent as a handshake between the client and server to respawn the player.
 */

export interface RespawnPacket {
  position: Vec3f;
  state: number;
  runtime_entity_id: Varint64;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export type Varint64 = any;

export const RespawnPacketInfo: import("./metadata").PacketMetadata = {
  id: 45,
  name: "respawn",
  description:
    "Sent as a handshake between the client and server to respawn the player.",
};
