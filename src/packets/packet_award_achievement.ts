/**
 * AwardAchievementPacket
 * Packet ID: 309
 * Contains the ID of the achievement to award
 */

export interface AwardAchievementPacket {
  achievement_id: number;
}

export const AwardAchievementPacketInfo: import("./metadata").PacketMetadata = {
  id: 309,
  name: "award_achievement",
  description: "Contains the ID of the achievement to award",
};
