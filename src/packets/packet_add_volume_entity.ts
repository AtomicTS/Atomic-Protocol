/**
 * AddVolumeEntityPacket
 * Packet ID: 166
 * Sends a volume entity's definition and components from server to client.
 */

export interface AddVolumeEntityPacket {
  runtime_id: Varint64;
  nbt: Nbt;
  encoding_identifier: string;
  instance_name: string;
  bounds: { min: BlockCoordinates; max: BlockCoordinates };
  dimension: number;
  engine_version: string;
}

export type Varint64 = any;

export type Nbt = any;

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const AddVolumeEntityPacketInfo: import("./metadata").PacketMetadata = {
  id: 166,
  name: "add_volume_entity",
  description:
    "Sends a volume entity's definition and components from server to client.",
};
