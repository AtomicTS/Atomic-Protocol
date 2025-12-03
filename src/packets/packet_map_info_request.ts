/**
 * MapInfoRequestPacket
 * Packet ID: 68
 * In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.
 */

export interface MapInfoRequestPacket {
  map_id: number;
  client_pixels: { rgba: number; index: number }[];
}

export const MapInfoRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: 68,
  name: "map_info_request",
  description:
    "In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.",
};
