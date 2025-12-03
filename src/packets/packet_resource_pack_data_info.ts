/**
 * ResourcePackDataInfoPacket
 * Packet ID: 82
 * Resource Pack Data Info
 */

export interface ResourcePackDataInfoPacket {
  pack_id: string;
  max_chunk_size: number;
  chunk_count: number;
  size: number;
  hash: ByteArray;
  is_premium: boolean;
  pack_type:
    | "addon"
    | "cached"
    | "copy_protected"
    | "behavior"
    | "persona_piece"
    | "resources"
    | "skins"
    | "world_template";
}

export type ByteArray = any;

export const ResourcePackDataInfoPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 82,
    name: "resource_pack_data_info",
    description: "Resource Pack Data Info",
  };
