/**
 * SetDifficultyPacket
 * Packet ID: 60
 * Set Difficulty
 */

export interface SetDifficultyPacket {
  difficulty: number;
}

export const SetDifficultyPacketInfo: import("./metadata").PacketMetadata = {
  id: 60,
  name: "set_difficulty",
  description: "Set Difficulty",
};
