/**
 * LevelEventGenericPacket
 * Packet ID: 124
 * LevelEventGenericPacket
 */

export interface LevelEventGenericPacket {
  event_id: number;
  nbt: NbtLoop;
}

export type NbtLoop = any;

export const LevelEventGenericPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 124,
    name: "level_event_generic",
    description: "LevelEventGenericPacket",
  };
