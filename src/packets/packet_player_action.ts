/**
 * PlayerActionPacket
 * Packet ID: 36
 * Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).
 */

export interface PlayerActionPacket {
  runtime_entity_id: Varint64;
  action: Action;
  position: BlockCoordinates;
  result_position: BlockCoordinates;
  face: number;
}

export type Varint64 = any;

export type Action =
  | "start_break"
  | "abort_break"
  | "stop_break"
  | "get_updated_block"
  | "drop_item"
  | "start_sleeping"
  | "stop_sleeping"
  | "respawn"
  | "jump"
  | "start_sprint"
  | "stop_sprint"
  | "start_sneak"
  | "stop_sneak"
  | "creative_player_destroy_block"
  | "dimension_change_ack"
  | "start_glide"
  | "stop_glide"
  | "build_denied"
  | "crack_break"
  | "change_skin"
  | "set_enchatnment_seed"
  | "swimming"
  | "stop_swimming"
  | "start_spin_attack"
  | "stop_spin_attack"
  | "interact_block"
  | "predict_break"
  | "continue_break"
  | "start_item_use_on"
  | "stop_item_use_on"
  | "handled_teleport"
  | "missed_swing"
  | "start_crawling"
  | "stop_crawling"
  | "start_flying"
  | "stop_flying"
  | "received_server_data"
  | "start_using_item";

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const PlayerActionPacketInfo: import("./metadata").PacketMetadata = {
  id: 36,
  name: "player_action",
  description:
    "Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).",
};
