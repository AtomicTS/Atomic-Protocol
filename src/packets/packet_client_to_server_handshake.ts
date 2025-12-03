/**
 * ClientToServerHandshakePacket
 * Packet ID: 4
 * Sets up encryption and authenticates in educational version once at level startup from client.
 */

export interface ClientToServerHandshakePacket {}

export const ClientToServerHandshakePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 4,
    name: "client_to_server_handshake",
    description:
      "Sets up encryption and authenticates in educational version once at level startup from client.",
  };
