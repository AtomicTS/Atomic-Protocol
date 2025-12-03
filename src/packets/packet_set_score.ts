/**
 * SetScorePacket
 * Unknown packet ID
 * No description
 */

export interface SetScorePacket {
  action: "change" | "remove";
  entries: {
    scoreboard_id: number;
    objective_name: string;
    score: number;
    payload: {
      "../action": "change";
      entry_type: "player" | "entity" | "fake_player";
      entity_unique_id:
        | { entry_type: "player"; value: number }
        | { entry_type: "entity"; value: number };
      custom_name: { entry_type: "fake_player"; value: string };
    };
  }[];
}

export const SetScorePacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "set_score",
  description: undefined,
};
