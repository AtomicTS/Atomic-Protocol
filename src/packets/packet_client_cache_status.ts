/**
 * ClientCacheStatusPacket
 * Packet ID: 129
 * It is sent by the Client once, at login, to communicate if it supports the cache or not.
 */

export interface ClientCacheStatusPacket {
  enabled: boolean;
}

export const ClientCacheStatusPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 129,
    name: "client_cache_status",
    description:
      "It is sent by the Client once, at login, to communicate if it supports the cache or not.",
  };
