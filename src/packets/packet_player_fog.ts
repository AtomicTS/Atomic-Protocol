/**
 * PlayerFogPacket
 * Packet ID: 160
 * Player Fog Packet
 */

export interface PlayerFogPacket {
  stack: string[];
}

export const PlayerFogPacketInfo: import("./metadata").PacketMetadata = {
  id: 160,
  name: "player_fog",
  description: "Player Fog Packet",
};
