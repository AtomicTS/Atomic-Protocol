/**
 * SetPlayerGameTypePacket
 * Packet ID: 62
 * Set Player Game Type
 */

export interface SetPlayerGameTypePacket {
  gamemode: GameMode;
}

export type GameMode =
  | "survival"
  | "creative"
  | "adventure"
  | "survival_spectator"
  | "creative_spectator"
  | "fallback"
  | "spectator";

export const SetPlayerGameTypePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 62,
    name: "set_player_game_type",
    description: "Set Player Game Type",
  };
