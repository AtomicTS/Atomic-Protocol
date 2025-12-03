/**
 * UpdateAttributesPacket
 * Unknown packet ID
 * No description
 */

export interface UpdateAttributesPacket {
  runtime_entity_id: Varint64;
  attributes: PlayerAttributes;
  tick: Varint64;
}

export type Varint64 = any;

export type PlayerAttributes = {
  min: number;
  max: number;
  current: number;
  default_min: number;
  default_max: number;
  default: number;
  name: string;
  modifiers: {
    id: string;
    name: string;
    amount: number;
    operation: number;
    operand: number;
    serializable: boolean;
  }[];
}[];

export const UpdateAttributesPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "update_attributes",
  description: undefined,
};
