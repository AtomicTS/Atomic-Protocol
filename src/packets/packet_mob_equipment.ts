/**
 * MobEquipmentPacket
 * Unknown packet ID
 * No description
 */

export interface MobEquipmentPacket {
  runtime_entity_id: Varint64;
  item: Item;
  slot: number;
  selected_slot: number;
  window_id: WindowID;
}

export type Varint64 = any;

export interface Item {
  network_id: number;
  payload: { network_id: "0"; value: void };
}

export type WindowID =
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

export const MobEquipmentPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "mob_equipment",
  description: undefined,
};
