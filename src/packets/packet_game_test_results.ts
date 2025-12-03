/**
 * GameTestResultsPacket
 * Packet ID: 195
 * Game Test Results Packet
 */

export interface GameTestResultsPacket {
  succeeded: boolean;
  error: string;
  name: string;
}

export const GameTestResultsPacketInfo: import("./metadata").PacketMetadata = {
  id: 195,
  name: "game_test_results",
  description: "Game Test Results Packet",
};
