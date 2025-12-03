/**
 * LessonProgressPacket
 * Packet ID: 183
 * Lesson Progress
 */

export interface LessonProgressPacket {
  action: number;
  score: number;
  identifier: string;
}

export const LessonProgressPacketInfo: import("./metadata").PacketMetadata = {
  id: 183,
  name: "lesson_progress",
  description: "Lesson Progress",
};
