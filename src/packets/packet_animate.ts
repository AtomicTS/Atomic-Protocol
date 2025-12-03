/**
 * AnimatePacket
 * Unknown packet ID
 * No description
 */

export interface AnimatePacket {
  action_id:
    | "none"
    | "swing_arm"
    | "unknown"
    | "wake_up"
    | "critical_hit"
    | "magic_critical_hit"
    | "row_right"
    | "row_left";
  runtime_entity_id: Varint64;
  data: number;
  payload:
    | { action_id: "row_right"; rowing_time: number }
    | { action_id: "row_left"; rowing_time: number };
}

export type Varint64 = any;

export const AnimatePacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "animate",
  description: undefined,
};
