/**
 * SetEntityMotionPacket
 * Unknown packet ID
 * No description
 */

export interface SetEntityMotionPacket {
  runtime_entity_id: Varint64;
  velocity: Vec3f;
  tick: Varint64;
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const SetEntityMotionPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "set_entity_motion",
  description: undefined,
};
