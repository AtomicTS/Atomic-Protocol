/**
 * FilterTextPacketPacket
 * Unknown packet ID
 * No description
 */

export interface FilterTextPacketPacket {
  text: string;
  from_server: boolean;
}

export const FilterTextPacketPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "filter_text_packet",
  description: undefined,
};
