/**
 * ContainerSetDataPacket
 * Packet ID: 51
 * This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)
 */

export interface ContainerSetDataPacket {
  window_id: WindowID;
  property: number;
  value: number;
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

export const ContainerSetDataPacketInfo: import("./metadata").PacketMetadata = {
  id: 51,
  name: "container_set_data",
  description:
    'This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)',
};
