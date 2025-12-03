/**
 * SubchunkPacket
 * Unknown packet ID
 * No description
 */

export interface SubchunkPacket {
  cache_enabled: boolean;
  dimension: number;
  origin: Vec3i;
  entries:
    | { cache_enabled: "true"; value: SubChunkEntryWithCaching }
    | { cache_enabled: "false"; value: SubChunkEntryWithoutCaching };
}

export interface Vec3i {
  x: number;
  y: number;
  z: number;
}

export type SubChunkEntryWithCaching = {
  dx: number;
  dy: number;
  dz: number;
  result:
    | "undefined"
    | "success"
    | "chunk_not_found"
    | "invalid_dimension"
    | "player_not_found"
    | "y_index_out_of_bounds"
    | "success_all_air";
  payload: { result: "success_all_air"; value: void };
  heightmap_type: HeightMapDataType;
  heightmap: { heightmap_type: "has_data"; value: any };
  render_heightmap_type: HeightMapDataType;
  render_heightmap: { render_heightmap_type: "has_data"; value: any };
  blob_id: number;
}[];

export type SubChunkEntryWithoutCaching = {
  dx: number;
  dy: number;
  dz: number;
  result:
    | "undefined"
    | "success"
    | "chunk_not_found"
    | "invalid_dimension"
    | "player_not_found"
    | "y_index_out_of_bounds"
    | "success_all_air";
  payload: ByteArray;
  heightmap_type: HeightMapDataType;
  heightmap: { heightmap_type: "has_data"; value: any };
  render_heightmap_type: HeightMapDataType;
  render_heightmap: { render_heightmap_type: "has_data"; value: any };
}[];

export type ByteArray = any;

export type HeightMapDataType =
  | "no_data"
  | "has_data"
  | "too_high"
  | "too_low"
  | "all_copied";

export const SubchunkPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "subchunk",
  description: undefined,
};
