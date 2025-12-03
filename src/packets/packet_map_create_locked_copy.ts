/**
 * MapCreateLockedCopyPacket
 * Packet ID: 131
 * This is fired when the user locks a map item utilizing the Cartography Table in game.
 */

export interface MapCreateLockedCopyPacket {
  original_map_id: number;
  new_map_id: number;
}

export const MapCreateLockedCopyPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 131,
    name: "map_create_locked_copy",
    description:
      "This is fired when the user locks a map item utilizing the Cartography Table in game.",
  };
