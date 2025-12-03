/**
 * ToggleCrafterSlotRequestPacket
 * Unknown packet ID
 * No description
 */

export interface ToggleCrafterSlotRequestPacket {
  position: Vec3li;
  slot: number;
  disabled: boolean;
}

export interface Vec3li {
  x: number;
  y: number;
  z: number;
}

export const ToggleCrafterSlotRequestPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "toggle_crafter_slot_request",
    description: undefined,
  };
