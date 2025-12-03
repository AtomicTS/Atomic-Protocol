/**
 * ServerSettingsResponsePacket
 * Packet ID: 103
 * Server Settings Response
 */

export interface ServerSettingsResponsePacket {
  form_id: number;
  data: string;
}

export const ServerSettingsResponsePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 103,
    name: "server_settings_response",
    description: "Server Settings Response",
  };
