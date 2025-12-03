/**
 * NetworkSettingsPacket
 * Packet ID: 143
 * Sends tunable options from host to client (compression threshold and algorithm)
 */

export interface NetworkSettingsPacket {
  compression_threshold: number;
  compression_algorithm: "deflate" | "snappy";
  client_throttle: boolean;
  client_throttle_threshold: number;
  client_throttle_scalar: number;
}

export const NetworkSettingsPacketInfo: import("./metadata").PacketMetadata = {
  id: 143,
  name: "network_settings",
  description:
    "Sends tunable options from host to client (compression threshold and algorithm)",
};
