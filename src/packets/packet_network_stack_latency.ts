/**
 * NetworkStackLatencyPacket
 * Packet ID: 115
 * Ping Packet
 */

export interface NetworkStackLatencyPacket {
  timestamp: number;
  needs_response: number;
}

export const NetworkStackLatencyPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 115,
    name: "network_stack_latency",
    description: "Ping Packet",
  };
