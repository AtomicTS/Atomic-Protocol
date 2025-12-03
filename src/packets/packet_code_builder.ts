/**
 * CodeBuilderPacket
 * Packet ID: 150
 * Code Builder Packet
 */

export interface CodeBuilderPacket {
  url: string;
  should_open_code_builder: boolean;
}

export const CodeBuilderPacketInfo: import("./metadata").PacketMetadata = {
  id: 150,
  name: "code_builder",
  description: "Code Builder Packet",
};
