/**
 * CurrentStructureFeaturePacket
 * Packet ID: 314
 * Informs the client of which Structure Feature they are currently occupying.
 */

export interface CurrentStructureFeaturePacket {
  current_feature: string;
}

export const CurrentStructureFeaturePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 314,
    name: "current_structure_feature",
    description:
      "Informs the client of which Structure Feature they are currently occupying.",
  };
