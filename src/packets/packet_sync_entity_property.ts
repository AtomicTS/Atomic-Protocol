/**
 * SyncEntityPropertyPacket
 * Unknown packet ID
 * No description
 */

export interface SyncEntityPropertyPacket {
  nbt: Nbt;
}

export type Nbt = any;

export const SyncEntityPropertyPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "sync_entity_property",
    description: undefined,
  };
