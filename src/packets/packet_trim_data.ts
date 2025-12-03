/**
 * TrimDataPacket
 * Unknown packet ID
 * No description
 */

export interface TrimDataPacket {
  patterns: { item_name: string; pattern: string }[];
  materials: { material: string; color: string; item_name: string }[];
}

export const TrimDataPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "trim_data",
  description: undefined,
};
