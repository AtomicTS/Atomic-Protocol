/**
 * UpdateClientOptionsPacket
 * Packet ID: 323
 * Sync the player's options (mostly settings) to the server.
 */

export interface UpdateClientOptionsPacket {
  graphics_mode: "simple" | "fancy" | "advanced" | "ray_traced" | null;
}

export const UpdateClientOptionsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 323,
    name: "update_client_options",
    description: "Sync the player's options (mostly settings) to the server.",
  };
