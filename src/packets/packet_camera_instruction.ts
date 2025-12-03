/**
 * CameraInstructionPacket
 * Packet ID: 300
 * Used to send a CameraInstruction from the server to the specified clients.
 */

export interface CameraInstructionPacket {
  instruction_set: {
    runtime_id: number;
    ease_data: { type: EaseType; duration: number } | null;
    position: Vec3f | null;
    rotation: Vec2f | null;
    facing: Vec3f | null;
    offset: Vec2f | null;
    entity_offset: Vec3f | null;
    default: boolean | null;
    remove_ignore_starting_values: boolean;
  } | null;
  clear: boolean | null;
  fade: {
    fade_in_duration: number;
    wait_duration: number;
    fade_out_duration: number;
    color_rgb: Vec3f;
  } | null;
  target: { offset: Vec3f | null; entity_unique_id: number } | null;
  remove_target: boolean | null;
  fov: {
    field_of_view: number;
    ease_time: number;
    ease_type: EaseType;
    clear: boolean;
  } | null;
  spline: CameraSplineInstruction | null;
  attach_to_entity: number | null;
  detach_from_entity: boolean | null;
}

export type EaseType =
  | "Linear"
  | "Spring"
  | "InQuad"
  | "OutQuad"
  | "InOutQuad"
  | "InCubic"
  | "OutCubic"
  | "InOutCubic"
  | "InQuart"
  | "OutQuart"
  | "InOutQuart"
  | "InQuint"
  | "OutQuint"
  | "InOutQuint"
  | "InSine"
  | "OutSine"
  | "InOutSine"
  | "InExpo"
  | "OutExpo"
  | "InOutExpo"
  | "InCirc"
  | "OutCirc"
  | "InOutCirc"
  | "InBounce"
  | "OutBounce"
  | "InOutBounce"
  | "InBack"
  | "OutBack"
  | "InOutBack"
  | "InElastic"
  | "OutElastic"
  | "InOutElastic";

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export interface Vec2f {
  x: number;
  z: number;
}

export interface CameraSplineInstruction {
  total_time: number;
  ease_type: CameraSplineEaseType;
  curve: Vec3f[];
  progress_key_frames: Vec2f[];
  rotation_options: CameraRotationOption[];
}

export type CameraSplineEaseType = "catmull_rom" | "linear";

export interface CameraRotationOption {
  value: Vec3f;
  time: number;
}

export const CameraInstructionPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 300,
    name: "camera_instruction",
    description:
      "Used to send a CameraInstruction from the server to the specified clients.",
  };
