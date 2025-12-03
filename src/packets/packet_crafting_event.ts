/**
 * CraftingEventPacket
 * Unknown packet ID
 * No description
 */

export interface CraftingEventPacket {
  window_id: WindowID;
  recipe_type: "inventory" | "crafting" | "workbench";
  recipe_id: string;
  input: Item[];
  result: Item[];
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

export interface Item {
  network_id: number;
  payload: { network_id: "0"; value: void };
}

export const CraftingEventPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "crafting_event",
  description: undefined,
};
