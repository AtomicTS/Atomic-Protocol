/**
 * CameraAimAssistPacket
 * Packet ID: 316
 * CameraAimAssist
 */

export interface CameraAimAssistPacket {
  preset_id: string;
  view_angle: Vec2f;
  distance: number;
  target_mode: "angle" | "distance";
  action: "set" | "clear";
  show_debug_render: boolean;
}

export interface Vec2f {
  x: number;
  z: number;
}

export const CameraAimAssistPacketInfo: import("./metadata").PacketMetadata = {
  id: 316,
  name: "camera_aim_assist",
  description: "CameraAimAssist",
};
