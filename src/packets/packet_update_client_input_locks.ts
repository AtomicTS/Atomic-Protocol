/**
 * UpdateClientInputLocksPacket
 * Packet ID: 196
 * UpdateClientInputLocksPacket
 */

export interface UpdateClientInputLocksPacket {
  locks: InputLockFlags;
  position: Vec3f;
}

export type InputLockFlags = {
  move: boolean;
  jump: boolean;
  sneak: boolean;
  mount: boolean;
  dismount: boolean;
  rotation: boolean;
};

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const UpdateClientInputLocksPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 196,
    name: "update_client_input_locks",
    description: "UpdateClientInputLocksPacket",
  };
