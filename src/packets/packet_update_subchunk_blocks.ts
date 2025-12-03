/**
 * UpdateSubchunkBlocksPacket
 * Unknown packet ID
 * No description
 */

export interface UpdateSubchunkBlocksPacket {
  x: number;
  y: number;
  z: number;
  blocks: BlockUpdate[];
  extra: BlockUpdate[];
}

export interface BlockUpdate {
  position: BlockCoordinates;
  runtime_id: number;
  flags: number;
  entity_unique_id: number;
  transition_type: "entity" | "create" | "destroy";
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const UpdateSubchunkBlocksPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "update_subchunk_blocks",
    description: undefined,
  };
