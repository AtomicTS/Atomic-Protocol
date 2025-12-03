/**
 * ItemStackResponsePacket
 * Unknown packet ID
 * No description
 */

export interface ItemStackResponsePacket {
  responses: ItemStackResponses;
}

export type ItemStackResponses = {
  status: "ok" | "error";
  request_id: number;
  payload: {
    status: "ok";
    containers: {
      slot_type: FullContainerName;
      slots: {
        slot: number;
        hotbar_slot: number;
        count: number;
        item_stack_id: number;
        custom_name: string;
        filtered_custom_name: string;
        durability_correction: number;
      }[];
    }[];
  };
}[];

export interface FullContainerName {
  container_id: ContainerSlotType;
  dynamic_container_id: number | null;
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

export const ItemStackResponsePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "item_stack_response",
    description: undefined,
  };
