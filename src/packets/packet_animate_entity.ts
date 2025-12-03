/**
 * AnimateEntityPacket
 * Packet ID: 158
 * The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.
 */

export interface AnimateEntityPacket {
  animation: string;
  next_state: string;
  stop_condition: string;
  stop_condition_version: number;
  controller: string;
  blend_out_time: number;
  runtime_entity_ids: Varint64[];
}

export type Varint64 = any;

export const AnimateEntityPacketInfo: import("./metadata").PacketMetadata = {
  id: 158,
  name: "animate_entity",
  description:
    "The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.",
};
