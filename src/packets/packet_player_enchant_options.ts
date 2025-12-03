/**
 * PlayerEnchantOptionsPacket
 * Unknown packet ID
 * No description
 */

export interface PlayerEnchantOptionsPacket {
  options: EnchantOption[];
}

export interface EnchantOption {
  cost: number;
  slot_flags: number;
  equip_enchants: Enchant[];
  held_enchants: Enchant[];
  self_enchants: Enchant[];
  name: string;
  option_id: number;
}

export interface Enchant {
  id: number;
  level: number;
}

export const PlayerEnchantOptionsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "player_enchant_options",
    description: undefined,
  };
