/**
 * ScriptMessagePacket
 * Packet ID: 177
 * Used to send custom messages between client and server.
 */

export interface ScriptMessagePacket {
  message_id: string;
  data: string;
}

export const ScriptMessagePacketInfo: import("./metadata").PacketMetadata = {
  id: 177,
  name: "script_message",
  description: "Used to send custom messages between client and server.",
};
