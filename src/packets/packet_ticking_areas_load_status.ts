/**
 * TickingAreasLoadStatusPacket
 * Packet ID: 179
 * Used to inform the client that the server is waiting for ticking areas to finish preloading.
 */

export interface TickingAreasLoadStatusPacket {
  preload: boolean;
}

export const TickingAreasLoadStatusPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 179,
    name: "ticking_areas_load_status",
    description:
      "Used to inform the client that the server is waiting for ticking areas to finish preloading.",
  };
