/**
 * UpdateBlockPropertiesPacket
 * Unknown packet ID
 * No description
 */

export interface UpdateBlockPropertiesPacket {
  nbt: Nbt;
}

export type Nbt = any;

export const UpdateBlockPropertiesPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "update_block_properties",
    description: undefined,
  };
