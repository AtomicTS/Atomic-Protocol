/**
 * UpdateTradePacket
 * Packet ID: 80
 * This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.
 */

export interface UpdateTradePacket {
  window_id: WindowID;
  window_type: WindowType;
  size: number;
  trade_tier: number;
  villager_unique_id: Varint64;
  entity_unique_id: Varint64;
  display_name: string;
  new_trading_ui: boolean;
  economic_trades: boolean;
  offers: Nbt;
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

export type WindowType =
  | "container"
  | "workbench"
  | "furnace"
  | "enchantment"
  | "brewing_stand"
  | "anvil"
  | "dispenser"
  | "dropper"
  | "hopper"
  | "cauldron"
  | "minecart_chest"
  | "minecart_hopper"
  | "horse"
  | "beacon"
  | "structure_editor"
  | "trading"
  | "command_block"
  | "jukebox"
  | "armor"
  | "hand"
  | "compound_creator"
  | "element_constructor"
  | "material_reducer"
  | "lab_table"
  | "loom"
  | "lectern"
  | "grindstone"
  | "blast_furnace"
  | "smoker"
  | "stonecutter"
  | "cartography"
  | "hud"
  | "jigsaw_editor"
  | "smithing_table"
  | "chest_boat"
  | "decorated_pot"
  | "crafter"
  | "none"
  | "inventory";

export type Varint64 = any;

export type Nbt = any;

export const UpdateTradePacketInfo: import("./metadata").PacketMetadata = {
  id: 80,
  name: "update_trade",
  description:
    "This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.",
};
