/**
 * MotionPredictionHintsPacket
 * Packet ID: 157
 * It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.
 */

export interface MotionPredictionHintsPacket {
  entity_runtime_id: Varint64;
  velocity: Vec3f;
  on_ground: boolean;
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const MotionPredictionHintsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 157,
    name: "motion_prediction_hints",
    description:
      "It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.",
  };
