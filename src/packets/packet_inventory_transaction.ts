/**
 * InventoryTransactionPacket
 * Unknown packet ID
 * No description
 */

export interface InventoryTransactionPacket {
  transaction: Transaction;
}

export interface Transaction {
  legacy: TransactionLegacy;
  transaction_type:
    | "normal"
    | "inventory_mismatch"
    | "item_use"
    | "item_use_on_entity"
    | "item_release";
  actions: TransactionActions;
  transaction_data:
    | { transaction_type: "normal"; value: void }
    | { transaction_type: "inventory_mismatch"; value: void }
    | { transaction_type: "item_use"; value: TransactionUseItem }
    | {
        transaction_type: "item_use_on_entity";
        entity_runtime_id: Varint64;
        action_type: "interact" | "attack";
        hotbar_slot: number;
        held_item: Item;
        player_pos: Vec3f;
        click_pos: Vec3f;
      }
    | {
        transaction_type: "item_release";
        action_type: "release" | "consume";
        hotbar_slot: number;
        held_item: Item;
        head_pos: Vec3f;
      };
}

export interface TransactionLegacy {
  legacy_request_id: number;
  legacy_transactions: { legacy_request_id: "0"; value: void };
}

export type TransactionActions = {
  source_type:
    | "container"
    | "global"
    | "world_interaction"
    | "creative"
    | "craft_slot"
    | "craft";
  payload:
    | { source_type: "container"; inventory_id: WindowIDVarint }
    | { source_type: "craft"; action: number }
    | { source_type: "world_interaction"; flags: number }
    | { source_type: "craft_slot"; action: number };
  slot: number;
  old_item: Item;
  new_item: Item;
}[];

export interface TransactionUseItem {
  action_type: "click_block" | "click_air" | "break_block" | "attack";
  trigger_type: "unknown" | "player_input" | "simulation_tick";
  block_position: BlockCoordinates;
  face: number;
  hotbar_slot: number;
  held_item: Item;
  player_pos: Vec3f;
  click_pos: Vec3f;
  block_runtime_id: number;
  client_prediction: "failure" | "success";
}

export type Varint64 = any;

export interface Item {
  network_id: number;
  payload: { network_id: "0"; value: void };
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export type WindowIDVarint =
  | "inventory"
  | "first"
  | "last"
  | "offhand"
  | "armor"
  | "creative"
  | "hotbar"
  | "fixed_inventory"
  | "ui"
  | "drop_contents"
  | "beacon"
  | "trading_output"
  | "trading_use_inputs"
  | "trading_input_2"
  | "trading_input_1"
  | "enchant_output"
  | "enchant_material"
  | "enchant_input"
  | "anvil_output"
  | "anvil_result"
  | "anvil_material"
  | "container_input"
  | "crafting_use_ingredient"
  | "crafting_result"
  | "crafting_remove_ingredient"
  | "crafting_add_ingredient"
  | "none";

export const InventoryTransactionPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "inventory_transaction",
    description: undefined,
  };
