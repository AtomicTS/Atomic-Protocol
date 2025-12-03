/**
 * PlayerAuthInputPacket
 * Unknown packet ID
 * No description
 */

export interface PlayerAuthInputPacket {
  pitch: number;
  yaw: number;
  position: Vec3f;
  move_vector: Vec2f;
  head_yaw: number;
  input_data: InputFlag;
  input_mode: "unknown" | "mouse" | "touch" | "game_pad" | "motion_controller";
  play_mode:
    | "normal"
    | "teaser"
    | "screen"
    | "viewer"
    | "reality"
    | "placement"
    | "living_room"
    | "exit_level"
    | "exit_level_living_room"
    | "num_modes";
  interaction_model: "touch" | "crosshair" | "classic";
  interact_rotation: Vec2f;
  tick: Varint64;
  delta: Vec3f;
  transaction: {
    "input_data.item_interact": "true";
    legacy: TransactionLegacy;
    actions: TransactionActions;
    data: TransactionUseItem;
  };
  item_stack_request: {
    "input_data.item_stack_request": "true";
    value: ItemStackRequest;
  };
  payload: {
    "input_data.client_predicted_vehicle": "true";
    vehicle_rotation: Vec2f;
    predicted_vehicle: number;
  };
  block_action: {
    "input_data.block_action": "true";
    value: {
      action: Action;
      payload:
        | { action: "start_break"; position: Vec3i; face: number }
        | { action: "abort_break"; position: Vec3i; face: number }
        | { action: "crack_break"; position: Vec3i; face: number }
        | { action: "predict_break"; position: Vec3i; face: number }
        | { action: "continue_break"; position: Vec3i; face: number };
    }[];
  };
  analogue_move_vector: Vec2f;
  camera_orientation: Vec3f;
  raw_move_vector: Vec2f;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export interface Vec2f {
  x: number;
  z: number;
}

export type InputFlag = {
  "0": boolean;
  "1": boolean;
  "2": boolean;
  "3": boolean;
  "4": boolean;
  "5": boolean;
  "6": boolean;
  "7": boolean;
  "8": boolean;
  "9": boolean;
  "10": boolean;
  "11": boolean;
  "12": boolean;
  "13": boolean;
  "14": boolean;
  "15": boolean;
  "16": boolean;
  "17": boolean;
  "18": boolean;
  "19": boolean;
  "20": boolean;
  "21": boolean;
  "22": boolean;
  "23": boolean;
  "24": boolean;
  "25": boolean;
  "26": boolean;
  "27": boolean;
  "28": boolean;
  "29": boolean;
  "30": boolean;
  "31": boolean;
  "32": boolean;
  "33": boolean;
  "34": boolean;
  "35": boolean;
  "36": boolean;
  "37": boolean;
  "38": boolean;
  "39": boolean;
  "40": boolean;
  "41": boolean;
  "42": boolean;
  "43": boolean;
  "44": boolean;
  "45": boolean;
  "46": boolean;
  "47": boolean;
  "48": boolean;
  "49": boolean;
  "50": boolean;
  "51": boolean;
  "52": boolean;
  "53": boolean;
  "54": boolean;
  "55": boolean;
  "56": boolean;
  "57": boolean;
  "58": boolean;
  "59": boolean;
  "60": boolean;
  "61": boolean;
  "62": boolean;
  "63": boolean;
  "64": boolean;
};

export type Varint64 = any;

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

export interface Vec3i {
  x: number;
  y: number;
  z: number;
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

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export interface Item {
  network_id: number;
  payload: { network_id: "0"; value: void };
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

export const PlayerAuthInputPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "player_auth_input",
  description: undefined,
};
