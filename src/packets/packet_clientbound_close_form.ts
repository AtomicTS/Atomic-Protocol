/**
 * ClientboundCloseFormPacket
 * Packet ID: 310
 * Sent from the server to client to force close all server forms on the stack and return to the HUD screen.
 */

export interface ClientboundCloseFormPacket {}

export const ClientboundCloseFormPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 310,
    name: "clientbound_close_form",
    description:
      "Sent from the server to client to force close all server forms on the stack and return to the HUD screen.",
  };
