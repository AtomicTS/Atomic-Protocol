/**
 * UpdateBlockPacket
 * Packet ID: 21
 * Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)
 */

export interface UpdateBlockPacket {
  position: BlockCoordinates;
  block_runtime_id: number;
  flags: UpdateBlockFlags;
  layer: number;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export type UpdateBlockFlags = {
  neighbors: boolean;
  network: boolean;
  no_graphic: boolean;
  unused: boolean;
  priority: boolean;
};

export const UpdateBlockPacketInfo: import("./metadata").PacketMetadata = {
  id: 21,
  name: "update_block",
  description:
    "Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)",
};
