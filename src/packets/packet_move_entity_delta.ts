/**
 * MoveEntityDeltaPacket
 * Unknown packet ID
 * No description
 */

export interface MoveEntityDeltaPacket {
  runtime_entity_id: Varint64;
  flags: DeltaMoveFlags;
  x: { "flags.has_x": "true"; value: number };
  y: { "flags.has_y": "true"; value: number };
  z: { "flags.has_z": "true"; value: number };
  rot_x: { "flags.has_rot_x": "true"; value: number };
  rot_y: { "flags.has_rot_y": "true"; value: number };
  rot_z: { "flags.has_rot_z": "true"; value: number };
}

export type Varint64 = any;

export type DeltaMoveFlags = {
  has_x: boolean;
  has_y: boolean;
  has_z: boolean;
  has_rot_x: boolean;
  has_rot_y: boolean;
  has_rot_z: boolean;
  on_ground: boolean;
  teleport: boolean;
  force_move: boolean;
};

export const MoveEntityDeltaPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "move_entity_delta",
  description: undefined,
};
