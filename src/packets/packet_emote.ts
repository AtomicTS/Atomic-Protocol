/**
 * EmotePacket
 * Packet ID: 138
 * A client sends this to the server to notify other clients about the emote.
 */

export interface EmotePacket {
  entity_id: Varint64;
  emote_id: string;
  emote_length_ticks: number;
  xuid: string;
  platform_id: string;
  flags: "server_side" | "mute_chat";
}

export type Varint64 = any;

export const EmotePacketInfo: import("./metadata").PacketMetadata = {
  id: 138,
  name: "emote",
  description:
    "A client sends this to the server to notify other clients about the emote.",
};
