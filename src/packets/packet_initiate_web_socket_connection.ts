/**
 * InitiateWebSocketConnectionPacket
 * Unknown packet ID
 * No description
 */

export interface InitiateWebSocketConnectionPacket {
  server: string;
}

export const InitiateWebSocketConnectionPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "initiate_web_socket_connection",
    description: undefined,
  };
