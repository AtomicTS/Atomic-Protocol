/**
 * ClientCacheMissResponsePacket
 * Unknown packet ID
 * No description
 */

export interface ClientCacheMissResponsePacket {
  blobs: Blob[];
}

export interface Blob {
  hash: number;
  payload: ByteArray;
}

export type ByteArray = any;

export const ClientCacheMissResponsePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "client_cache_miss_response",
    description: undefined,
  };
