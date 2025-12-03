/**
 * UpdatePlayerGameTypePacket
 * Packet ID: 151
 * The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.
 */

export interface UpdatePlayerGameTypePacket {
  gamemode: GameMode;
  player_unique_id: number;
  tick: Varint64;
}

export type GameMode =
  | "survival"
  | "creative"
  | "adventure"
  | "survival_spectator"
  | "creative_spectator"
  | "fallback"
  | "spectator";

export type Varint64 = any;

export const UpdatePlayerGameTypePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 151,
    name: "update_player_game_type",
    description:
      "The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.",
  };
