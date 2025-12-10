/**
 * CommandOutputPacket
 * Unknown packet ID
 * No description
 */

export interface CommandOutputPacket {
  origin: CommandOrigin;
  output_type: string;
  success_count: I32le;
  messages: { message_id: string; internal: boolean; parameters: string[] }[];
  data: string | null;
}

export interface CommandOrigin {
  type:
    | "player"
    | "block"
    | "minecart_block"
    | "dev_console"
    | "test"
    | "automation_player"
    | "client_automation"
    | "dedicated_server"
    | "entity"
    | "virtual"
    | "game_argument"
    | "entity_server"
    | "precompiled"
    | "game_director_entity_server"
    | "script"
    | "executor";
  uuid: string;
  request_id: string;
  player_entity_id:
    | { type: "dev_console"; player_entity_id: number }
    | { type: "test"; player_entity_id: number };
}

export const CommandOutputPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "command_output",
  description: undefined,
};
