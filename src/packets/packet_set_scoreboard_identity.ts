/**
 * SetScoreboardIdentityPacket
 * Unknown packet ID
 * No description
 */

export interface SetScoreboardIdentityPacket {
  action: "register_identity" | "clear_identity";
  entries: {
    scoreboard_id: number;
    entity_unique_id: { "../action": "register_identity"; value: number };
  }[];
}

export const SetScoreboardIdentityPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "set_scoreboard_identity",
    description: undefined,
  };
