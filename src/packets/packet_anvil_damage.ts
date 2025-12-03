/**
 * AnvilDamagePacket
 * Packet ID: 141
 * Requests an anvil to be damaged.
 */

export interface AnvilDamagePacket {
  damage: number;
  position: BlockCoordinates;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const AnvilDamagePacketInfo: import("./metadata").PacketMetadata = {
  id: 141,
  name: "anvil_damage",
  description: "Requests an anvil to be damaged.",
};
