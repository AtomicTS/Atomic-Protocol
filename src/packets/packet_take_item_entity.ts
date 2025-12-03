/**
 * TakeItemEntityPacket
 * Unknown packet ID
 * No description
 */

export interface TakeItemEntityPacket {
  runtime_entity_id: Varint64;
  target: number;
}

export type Varint64 = any;

export const TakeItemEntityPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "take_item_entity",
  description: undefined,
};
