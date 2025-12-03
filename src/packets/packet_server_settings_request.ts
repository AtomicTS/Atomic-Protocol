/**
 * ServerSettingsRequestPacket
 * Packet ID: 102
 * Sent during the initialization of world settings on the client.
 */

export interface ServerSettingsRequestPacket {}

export const ServerSettingsRequestPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 102,
    name: "server_settings_request",
    description:
      "Sent during the initialization of world settings on the client.",
  };
