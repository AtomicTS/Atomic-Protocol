/**
 * AgentActionPacket
 * Unknown packet ID
 * No description
 */

export interface AgentActionPacket {
  request_id: string;
  action_type:
    | "none"
    | "attack"
    | "collect"
    | "destroy"
    | "detect_redstone"
    | "detect_obstacle"
    | "drop"
    | "drop_all"
    | "inspect"
    | "inspect_data"
    | "inspect_item_count"
    | "inspect_item_detail"
    | "inspect_item_space"
    | "interact"
    | "move"
    | "place_block"
    | "till"
    | "transfer_item_to"
    | "turn";
  body: string;
}

export const AgentActionPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "agent_action",
  description: undefined,
};
