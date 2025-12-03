/**
 * DeathInfoPacket
 * Packet ID: 189
 * Sent from the server to client when player dies (Level::onPlayerDeath).
 */

export interface DeathInfoPacket {
  cause: string;
  messages: string[];
}

export const DeathInfoPacketInfo: import("./metadata").PacketMetadata = {
  id: 189,
  name: "death_info",
  description:
    "Sent from the server to client when player dies (Level::onPlayerDeath).",
};
