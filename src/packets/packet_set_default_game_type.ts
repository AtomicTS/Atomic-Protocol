/**
 * SetDefaultGameTypePacket
 * Packet ID: 105
 * Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.
 */

export interface SetDefaultGameTypePacket {
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

export const SetDefaultGameTypePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 105,
    name: "set_default_game_type",
    description:
      "Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.",
  };
