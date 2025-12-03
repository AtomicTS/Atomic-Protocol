/**
 * CorrectPlayerMovePredictionPacket
 * Packet ID: 161
 * Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.
 */

export interface CorrectPlayerMovePredictionPacket {
  prediction_type: "player" | "vehicle";
  position: Vec3f;
  delta: Vec3f;
  rotation: Vec2f;
  angular_velocity: number | null;
  on_ground: boolean;
  tick: Varint64;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export interface Vec2f {
  x: number;
  z: number;
}

export type Varint64 = any;

export const CorrectPlayerMovePredictionPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 161,
    name: "correct_player_move_prediction",
    description:
      "Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.",
  };
