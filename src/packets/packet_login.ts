/**
 * LoginPacket
 * Packet ID: 1
 * Sent once from client to server at login. About 100k.
 */

export interface LoginPacket {
  protocol_version: number;
  tokens: any;
}

export const LoginPacketInfo: import("./metadata").PacketMetadata = {
  id: 1,
  name: "login",
  description: "Sent once from client to server at login. About 100k.",
};
