/**
 * ClientCacheBlobStatusPacket
 * Unknown packet ID
 * No description
 */

export interface ClientCacheBlobStatusPacket {
  misses: number;
  haves: number;
  missing: number[];
  have: number[];
}

export const ClientCacheBlobStatusPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "client_cache_blob_status",
    description: undefined,
  };
