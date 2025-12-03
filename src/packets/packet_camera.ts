/**
 * CameraPacket
 * Packet ID: 73
 * Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.
 */

export interface CameraPacket {
  camera_entity_unique_id: number;
  target_player_unique_id: number;
}

export const CameraPacketInfo: import("./metadata").PacketMetadata = {
  id: 73,
  name: "camera",
  description:
    "Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.",
};
