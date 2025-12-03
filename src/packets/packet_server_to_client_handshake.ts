/**
 * ServerToClientHandshakePacket
 * Packet ID: 3
 * Server->Client Handshake
 */

export interface ServerToClientHandshakePacket {
  token: string;
}

export const ServerToClientHandshakePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 3,
    name: "server_to_client_handshake",
    description: "Server->Client Handshake",
  };
