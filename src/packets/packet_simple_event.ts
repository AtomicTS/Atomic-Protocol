/**
 * SimpleEventPacket
 * Packet ID: 64
 * This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).
 */

export interface SimpleEventPacket {
  event_type:
    | "uninitialized_subtype"
    | "enable_commands"
    | "disable_commands"
    | "unlock_world_template_settings";
}

export const SimpleEventPacketInfo: import("./metadata").PacketMetadata = {
  id: 64,
  name: "simple_event",
  description:
    "This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).",
};
