/**
 * ClientCameraAimAssistPacket
 * Packet ID: 321
 * Client-side activation of aim-assist
 */

export interface ClientCameraAimAssistPacket {
  preset_id: string;
  action: "set_from_camera_preset" | "clear";
  allow_aim_assist: boolean;
}

export const ClientCameraAimAssistPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 321,
    name: "client_camera_aim_assist",
    description: "Client-side activation of aim-assist",
  };
