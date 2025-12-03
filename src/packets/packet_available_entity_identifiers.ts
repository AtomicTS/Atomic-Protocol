/**
 * AvailableEntityIdentifiersPacket
 * Unknown packet ID
 * No description
 */

export interface AvailableEntityIdentifiersPacket {
  nbt: Nbt;
}

export type Nbt = any;

export const AvailableEntityIdentifiersPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "available_entity_identifiers",
    description: undefined,
  };
