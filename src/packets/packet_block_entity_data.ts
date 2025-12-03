/**
 * BlockEntityDataPacket
 * Unknown packet ID
 * No description
 */

export interface BlockEntityDataPacket {
  position: BlockCoordinates;
  nbt: Nbt;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export type Nbt = any;

export const BlockEntityDataPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "block_entity_data",
  description: undefined,
};
