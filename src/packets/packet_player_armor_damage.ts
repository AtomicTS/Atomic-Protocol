/**
 * PlayerArmorDamagePacket
 * Packet ID: 149
 * Sent from server whenever the player's armor takes damage.
 */

export interface PlayerArmorDamagePacket {
  entries: ArmorDamageEntry[];
}

export interface ArmorDamageEntry {
  armor_slot: "helmet" | "chestplate" | "leggings" | "boots" | "body";
  damage: number;
}

export const PlayerArmorDamagePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 149,
    name: "player_armor_damage",
    description: "Sent from server whenever the player's armor takes damage.",
  };
