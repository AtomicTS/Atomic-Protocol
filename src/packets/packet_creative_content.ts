/**
 * CreativeContentPacket
 * Unknown packet ID
 * No description
 */

export interface CreativeContentPacket {
  groups: {
    category:
      | "all"
      | "construction"
      | "nature"
      | "equipment"
      | "items"
      | "item_command_only";
    name: string;
    icon_item: ItemLegacy;
  }[];
  items: { entry_id: number; item: ItemLegacy; group_index: number }[];
}

export interface ItemLegacy {
  network_id: number;
  payload: { network_id: "0"; value: void };
}

export const CreativeContentPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "creative_content",
  description: undefined,
};
