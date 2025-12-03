/**
 * MoveEntityPacket
 * Unknown packet ID
 * No description
 */

export interface MoveEntityPacket {
  runtime_entity_id: Varint64;
  flags: number;
  position: Vec3f;
  rotation: Rotation;
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export interface Rotation {
  yaw: Byterot;
  pitch: Byterot;
  head_yaw: Byterot;
}

export type Byterot = any;

export const MoveEntityPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "move_entity",
  description: undefined,
};
