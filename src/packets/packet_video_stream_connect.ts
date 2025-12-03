/**
 * VideoStreamConnectPacket
 * Unknown packet ID
 * No description
 */

export interface VideoStreamConnectPacket {
  server_uri: string;
  frame_send_frequency: number;
  action: "none" | "close";
  resolution_x: number;
  resolution_y: number;
}

export const VideoStreamConnectPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "video_stream_connect",
    description: undefined,
  };
