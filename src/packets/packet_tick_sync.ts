/**
 * TickSyncPacket
 * Unknown packet ID
 * No description
 */

export interface TickSyncPacket {
  request_time: number;
  response_time: number;
}

export const TickSyncPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "tick_sync",
  description: undefined,
};
