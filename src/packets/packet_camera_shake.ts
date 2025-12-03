/**
 * CameraShakePacket
 * Packet ID: 159
 * Used to control trigger camera shake movements on the client's player camera
 */

export interface CameraShakePacket {
  intensity: number;
  duration: number;
  type: number;
  action: "add" | "stop";
}

export const CameraShakePacketInfo: import("./metadata").PacketMetadata = {
  id: 159,
  name: "camera_shake",
  description:
    "Used to control trigger camera shake movements on the client's player camera",
};
