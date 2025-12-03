/**
 * AddPaintingPacket
 * Packet ID: 22
 * Sends the information for a new painting actor from server to client.
 */

export interface AddPaintingPacket {
  entity_id_self: number;
  runtime_entity_id: Varint64;
  coordinates: Vec3f;
  direction: number;
  title: string;
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const AddPaintingPacketInfo: import("./metadata").PacketMetadata = {
  id: 22,
  name: "add_painting",
  description:
    "Sends the information for a new painting actor from server to client.",
};
