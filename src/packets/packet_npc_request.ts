/**
 * NpcRequestPacket
 * Packet ID: 98
 * Used for a number of interactions with the NPC Component
 */

export interface NpcRequestPacket {
  runtime_entity_id: Varint64;
  request_type:
    | "set_actions"
    | "execute_action"
    | "execute_closing_commands"
    | "set_name"
    | "set_skin"
    | "set_interaction_text"
    | "execute_opening_commands";
  command: string;
  action_type:
    | "set_actions"
    | "execute_action"
    | "execute_closing_commands"
    | "set_name"
    | "set_skin"
    | "set_interact_text"
    | "execute_opening_commands";
  scene_name: string;
}

export type Varint64 = any;

export const NpcRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: 98,
  name: "npc_request",
  description: "Used for a number of interactions with the NPC Component",
};
