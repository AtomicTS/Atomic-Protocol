/**
 * LevelChunkPacket
 * Unknown packet ID
 * No description
 */

export interface LevelChunkPacket {
  x: number;
  z: number;
  dimension: number;
  sub_chunk_count: number;
  highest_subchunk_count: { sub_chunk_count: "-2"; value: number };
  cache_enabled: boolean;
  blobs: { cache_enabled: "true"; hashes: number[] };
  payload: ByteArray;
}

export type ByteArray = any;

export const LevelChunkPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "level_chunk",
  description: undefined,
};
