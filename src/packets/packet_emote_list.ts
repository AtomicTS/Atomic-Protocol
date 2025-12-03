/**
 * EmoteListPacket
 * Packet ID: 152
 * Allows clients to download emotes that other clients have equipped.
 */

export interface EmoteListPacket {
  player_id: Varint64;
  emote_pieces: string[];
}

export type Varint64 = any;

export const EmoteListPacketInfo: import("./metadata").PacketMetadata = {
  id: 152,
  name: "emote_list",
  description:
    "Allows clients to download emotes that other clients have equipped.",
};
