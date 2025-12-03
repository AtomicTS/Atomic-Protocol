/**
 * SetTimePacket
 * Packet ID: 10
 * Set Time
 */

export interface SetTimePacket {
  time: number;
}

export const SetTimePacketInfo: import("./metadata").PacketMetadata = {
  id: 10,
  name: "set_time",
  description: "Set Time",
};
