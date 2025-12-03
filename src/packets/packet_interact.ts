/**
 * InteractPacket
 * Unknown packet ID
 * No description
 */

export interface InteractPacket {
  action_id:
    | "leave_vehicle"
    | "mouse_over_entity"
    | "npc_open"
    | "open_inventory";
  target_entity_id: Varint64;
  position:
    | { action_id: "mouse_over_entity"; value: Vec3f }
    | { action_id: "leave_vehicle"; value: Vec3f };
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const InteractPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "interact",
  description: undefined,
};
