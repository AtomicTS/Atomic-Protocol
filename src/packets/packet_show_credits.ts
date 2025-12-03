/**
 * ShowCreditsPacket
 * Packet ID: 75
 * Starts on server when the credits screen should pop up.
 */

export interface ShowCreditsPacket {
  runtime_entity_id: Varint64;
  status: number;
}

export type Varint64 = any;

export const ShowCreditsPacketInfo: import("./metadata").PacketMetadata = {
  id: 75,
  name: "show_credits",
  description: "Starts on server when the credits screen should pop up.",
};
