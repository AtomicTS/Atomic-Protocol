/**
 * HurtArmorPacket
 * Packet ID: 38
 * Hurt Armor
 */

export interface HurtArmorPacket {
  cause: number;
  damage: number;
  armor_slots: number;
}

export const HurtArmorPacketInfo: import("./metadata").PacketMetadata = {
  id: 38,
  name: "hurt_armor",
  description: "Hurt Armor",
};
