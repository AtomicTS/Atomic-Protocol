/**
 * RequestNetworkSettingsPacket
 * Packet ID: 193
 * Requests tunable options from host to client (compression threshold and algorithm).
 */

export interface RequestNetworkSettingsPacket {
  client_protocol: number;
}

export const RequestNetworkSettingsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 193,
    name: "request_network_settings",
    description:
      "Requests tunable options from host to client (compression threshold and algorithm).",
  };
