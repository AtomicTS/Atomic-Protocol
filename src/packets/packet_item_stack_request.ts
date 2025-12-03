/**
 * ItemStackRequestPacket
 * Unknown packet ID
 * No description
 */

export interface ItemStackRequestPacket {
  requests: ItemStackRequest[];
}

export interface ItemStackRequest {
  request_id: number;
  actions: {
    type_id:
      | "take"
      | "place"
      | "swap"
      | "drop"
      | "destroy"
      | "consume"
      | "create"
      | "place_in_container"
      | "take_out_container"
      | "lab_table_combine"
      | "beacon_payment"
      | "mine_block"
      | "craft_recipe"
      | "craft_recipe_auto"
      | "craft_creative"
      | "optional"
      | "craft_grindstone_request"
      | "craft_loom_request"
      | "non_implemented"
      | "results_deprecated";
    payload:
      | {
          type_id: "take";
          count: number;
          source: StackRequestSlotInfo;
          destination: StackRequestSlotInfo;
        }
      | {
          type_id: "place";
          count: number;
          source: StackRequestSlotInfo;
          destination: StackRequestSlotInfo;
        }
      | {
          type_id: "place_in_container";
          count: number;
          source: StackRequestSlotInfo;
          destination: StackRequestSlotInfo;
        }
      | {
          type_id: "take_out_container";
          count: number;
          source: StackRequestSlotInfo;
          destination: StackRequestSlotInfo;
        }
      | {
          type_id: "swap";
          source: StackRequestSlotInfo;
          destination: StackRequestSlotInfo;
        }
      | {
          type_id: "drop";
          count: number;
          source: StackRequestSlotInfo;
          randomly: boolean;
        }
      | { type_id: "destroy"; count: number; source: StackRequestSlotInfo }
      | { type_id: "consume"; count: number; source: StackRequestSlotInfo }
      | { type_id: "create"; result_slot_id: number }
      | {
          type_id: "beacon_payment";
          primary_effect: number;
          secondary_effect: number;
        }
      | {
          type_id: "mine_block";
          hotbar_slot: number;
          predicted_durability: number;
          network_id: number;
        }
      | {
          type_id: "craft_recipe";
          recipe_network_id: number;
          times_crafted: number;
        }
      | {
          type_id: "craft_recipe_auto";
          recipe_network_id: number;
          times_crafted_2: number;
          times_crafted: number;
          ingredients: RecipeIngredient[];
        }
      | { type_id: "craft_creative"; item_id: number; times_crafted: number }
      | {
          type_id: "optional";
          recipe_network_id: number;
          filtered_string_index: number;
        }
      | {
          type_id: "craft_grindstone_request";
          recipe_network_id: number;
          times_crafted: number;
          cost: number;
        }
      | {
          type_id: "craft_loom_request";
          pattern: string;
          times_crafted: number;
        }
      | { type_id: "non_implemented"; value: void }
      | {
          type_id: "results_deprecated";
          result_items: ItemLegacy[];
          times_crafted: number;
        };
  }[];
  custom_names: string[];
  cause:
    | "chat_public"
    | "chat_whisper"
    | "sign_text"
    | "anvil_text"
    | "book_and_quill_text"
    | "command_block_text"
    | "block_actor_data_text"
    | "join_event_text"
    | "leave_event_text"
    | "slash_command_chat"
    | "cartography_text"
    | "kick_command"
    | "title_command"
    | "summon_command";
}

export interface StackRequestSlotInfo {
  slot_type: FullContainerName;
  slot: number;
  stack_id: number;
}

export interface RecipeIngredient {
  type:
    | "invalid"
    | "int_id_meta"
    | "molang"
    | "item_tag"
    | "string_id_meta"
    | "complex_alias";
  payload:
    | {
        type: "int_id_meta";
        network_id: number;
        metadata: { network_id: "0"; value: void };
      }
    | { type: "molang"; expression: string; version: number }
    | { type: "item_tag"; tag: string }
    | { type: "string_id_meta"; name: string; metadata: number }
    | { type: "complex_alias"; name: string };
  count: number;
}

export interface ItemLegacy {
  network_id: number;
  payload: { network_id: "0"; value: void };
}

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

export const ItemStackRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "item_stack_request",
  description: undefined,
};
