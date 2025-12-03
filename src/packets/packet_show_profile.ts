/**
 * ShowProfilePacket
 * Packet ID: 104
 * Show Profile
 */

export interface ShowProfilePacket {
  xuid: string;
}

export const ShowProfilePacketInfo: import("./metadata").PacketMetadata = {
  id: 104,
  name: "show_profile",
  description: "Show Profile",
};
