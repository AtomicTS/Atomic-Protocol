/**
 * JigsawStructureDataPacket
 * Packet ID: 313
 * Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.
 */

export interface JigsawStructureDataPacket {
  structure_data: Nbt;
}

export type Nbt = any;

export const JigsawStructureDataPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 313,
    name: "jigsaw_structure_data",
    description:
      "Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.",
  };
