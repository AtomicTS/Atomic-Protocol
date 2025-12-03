/**
 * SetHealthPacket
 * Packet ID: 42
 * This packet is sent to the client when the player is spawned in and when they respawn.
 */

export interface SetHealthPacket {
  health: number;
}

export const SetHealthPacketInfo: import("./metadata").PacketMetadata = {
  id: 42,
  name: "set_health",
  description:
    "This packet is sent to the client when the player is spawned in and when they respawn.",
};
