/**
 * InventorySlotPacket
 * Unknown packet ID
 * No description
 */

export interface InventorySlotPacket {
  window_id: WindowIDVarint;
  slot: number;
  container: FullContainerName;
  storage_item: Item;
  item: Item;
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

export interface FullContainerName {
  container_id: ContainerSlotType;
  dynamic_container_id: number | null;
}

export interface Item {
  network_id: number;
  payload: { network_id: "0"; value: void };
}

export type ContainerSlotType =
  | "anvil_input"
  | "anvil_material"
  | "anvil_result"
  | "smithing_table_input"
  | "smithing_table_material"
  | "smithing_table_result"
  | "armor"
  | "container"
  | "beacon_payment"
  | "brewing_input"
  | "brewing_result"
  | "brewing_fuel"
  | "hotbar_and_inventory"
  | "crafting_input"
  | "crafting_output"
  | "recipe_construction"
  | "recipe_nature"
  | "recipe_items"
  | "recipe_search"
  | "recipe_search_bar"
  | "recipe_equipment"
  | "recipe_book"
  | "enchanting_input"
  | "enchanting_lapis"
  | "furnace_fuel"
  | "furnace_ingredient"
  | "furnace_output"
  | "horse_equip"
  | "hotbar"
  | "inventory"
  | "shulker"
  | "trade_ingredient1"
  | "trade_ingredient2"
  | "trade_result"
  | "offhand"
  | "compcreate_input"
  | "compcreate_output"
  | "elemconstruct_output"
  | "matreduce_input"
  | "matreduce_output"
  | "labtable_input"
  | "loom_input"
  | "loom_dye"
  | "loom_material"
  | "loom_result"
  | "blast_furnace_ingredient"
  | "smoker_ingredient"
  | "trade2_ingredient1"
  | "trade2_ingredient2"
  | "trade2_result"
  | "grindstone_input"
  | "grindstone_additional"
  | "grindstone_result"
  | "stonecutter_input"
  | "stonecutter_result"
  | "cartography_input"
  | "cartography_additional"
  | "cartography_result"
  | "barrel"
  | "cursor"
  | "creative_output"
  | "smithing_table_template"
  | "crafter"
  | "dynamic"
  | "registry";

export const InventorySlotPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "inventory_slot",
  description: undefined,
};
