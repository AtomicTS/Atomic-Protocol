/**
 * GameTestRequestPacket
 * Packet ID: 194
 * Internal Text Packet
 */

export interface GameTestRequestPacket {
  max_tests_per_batch: number;
  repetitions: number;
  rotation: "0deg" | "90deg" | "180deg" | "270deg" | "360deg";
  stop_on_error: boolean;
  position: BlockCoordinates;
  tests_per_row: number;
  name: string;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const GameTestRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: 194,
  name: "game_test_request",
  description: "Internal Text Packet",
};
