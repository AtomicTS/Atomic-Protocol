/**
 * CraftingDataPacket
 * Unknown packet ID
 * No description
 */

export interface CraftingDataPacket {
  recipes: Recipes;
  potion_type_recipes: PotionTypeRecipes;
  potion_container_recipes: PotionContainerChangeRecipes;
  material_reducers: MaterialReducer[];
  clear_recipes: boolean;
}

export type Recipes = {
  type:
    | "shapeless"
    | "shaped"
    | "furnace"
    | "furnace_with_metadata"
    | "multi"
    | "shulker_box"
    | "shapeless_chemistry"
    | "shaped_chemistry"
    | "smithing_transform"
    | "smithing_trim";
  recipe:
    | {
        type: "shapeless";
        recipe_id: LatinString;
        input: RecipeIngredient[];
        output: ItemLegacy[];
        uuid: string;
        block: string;
        priority: number;
        unlocking_requirement: RecipeUnlockingRequirement;
        network_id: number;
      }
    | {
        type: "shulker_box";
        recipe_id: LatinString;
        input: RecipeIngredient[];
        output: ItemLegacy[];
        uuid: string;
        block: string;
        priority: number;
        unlocking_requirement: RecipeUnlockingRequirement;
        network_id: number;
      }
    | {
        type: "shapeless_chemistry";
        recipe_id: LatinString;
        input: RecipeIngredient[];
        output: ItemLegacy[];
        uuid: string;
        block: string;
        priority: number;
        unlocking_requirement: RecipeUnlockingRequirement;
        network_id: number;
      }
    | {
        type: "shaped";
        recipe_id: LatinString;
        width: number;
        height: number;
        input: RecipeIngredient[][];
        output: ItemLegacy[];
        uuid: string;
        block: string;
        priority: number;
        assume_symmetry: boolean;
        unlocking_requirement: RecipeUnlockingRequirement;
        network_id: number;
      }
    | {
        type: "shaped_chemistry";
        recipe_id: LatinString;
        width: number;
        height: number;
        input: RecipeIngredient[][];
        output: ItemLegacy[];
        uuid: string;
        block: string;
        priority: number;
        assume_symmetry: boolean;
        unlocking_requirement: RecipeUnlockingRequirement;
        network_id: number;
      }
    | { type: "furnace"; input_id: number; output: ItemLegacy; block: string }
    | {
        type: "furnace_with_metadata";
        input_id: number;
        input_meta: number;
        output: ItemLegacy;
        block: string;
      }
    | { type: "multi"; uuid: string; network_id: number }
    | {
        type: "smithing_transform";
        recipe_id: LatinString;
        template: RecipeIngredient;
        base: RecipeIngredient;
        addition: RecipeIngredient;
        result: ItemLegacy;
        tag: string;
        network_id: number;
      }
    | {
        type: "smithing_trim";
        recipe_id: LatinString;
        template: RecipeIngredient;
        input: RecipeIngredient;
        addition: RecipeIngredient;
        block: string;
        network_id: number;
      };
}[];

export type PotionTypeRecipes = {
  input_item_id: number;
  input_item_meta: number;
  ingredient_id: number;
  ingredient_meta: number;
  output_item_id: number;
  output_item_meta: number;
}[];

export type PotionContainerChangeRecipes = {
  input_item_id: number;
  ingredient_id: number;
  output_item_id: number;
}[];

export interface MaterialReducer {
  mix: number;
  items: { network_id: number; count: number };
}

export type LatinString = any;

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

export interface RecipeUnlockingRequirement {
  context:
    | "none"
    | "always_unlocked"
    | "player_in_water"
    | "player_has_many_items";
  ingredients: { context: "none"; value: RecipeIngredient[] };
}

export const CraftingDataPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "crafting_data",
  description: undefined,
};
