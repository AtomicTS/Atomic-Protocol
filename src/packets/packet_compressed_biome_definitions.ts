/**
 * CompressedBiomeDefinitionsPacket
 * Unknown packet ID
 * No description
 */

export interface CompressedBiomeDefinitionsPacket {
  raw_payload: ByteArray;
}

export type ByteArray = any;

export const CompressedBiomeDefinitionsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "compressed_biome_definitions",
    description: undefined,
  };
