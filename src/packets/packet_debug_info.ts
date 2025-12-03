/**
 * DebugInfoPacket
 * Packet ID: 155
 * The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.
 */

export interface DebugInfoPacket {
  player_unique_id: number;
  data: ByteArray;
}

export type ByteArray = any;

export const DebugInfoPacketInfo: import("./metadata").PacketMetadata = {
  id: 155,
  name: "debug_info",
  description:
    "The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.",
};
