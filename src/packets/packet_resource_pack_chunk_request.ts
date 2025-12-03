/**
 * ResourcePackChunkRequestPacket
 * Packet ID: 84
 * Resource Pack Chunk Request
 */

export interface ResourcePackChunkRequestPacket {
  pack_id: string;
  chunk_index: number;
}

export const ResourcePackChunkRequestPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 84,
    name: "resource_pack_chunk_request",
    description: "Resource Pack Chunk Request",
  };
