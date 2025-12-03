/**
 * ContainerClosePacket
 * Packet ID: 47
 * After the game deletes the container manager on the client, the client sends this packet.
	Then the server deletes its container manager, and sends a packet back to the client that closes the container screen.
 */

export interface ContainerClosePacket {
  window_id: WindowID;
  window_type: WindowType;
  server: boolean;
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

export const ContainerClosePacketInfo: import("./metadata").PacketMetadata = {
  id: 47,
  name: "container_close",
  description:
    "After the game deletes the container manager on the client, the client sends this packet.\n\tThen the server deletes its container manager, and sends a packet back to the client that closes the container screen.",
};
