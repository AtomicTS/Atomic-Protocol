/**
 * ChunkRadiusUpdatePacket
 * Unknown packet ID
 * No description
 */

export interface ChunkRadiusUpdatePacket {
  chunk_radius: number;
}

export const ChunkRadiusUpdatePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "chunk_radius_update",
    description: undefined,
  };
