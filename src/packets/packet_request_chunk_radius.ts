/**
 * RequestChunkRadiusPacket
 * Packet ID: 69
 * The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.
 */

export interface RequestChunkRadiusPacket {
  chunk_radius: number;
  max_radius: number;
}

export const RequestChunkRadiusPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 69,
    name: "request_chunk_radius",
    description:
      "The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.",
  };
