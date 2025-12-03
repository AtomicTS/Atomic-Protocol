/**
 * NetworkChunkPublisherUpdatePacket
 * Packet ID: 121
 * Tells clients to update the chunk view for the local player.
 */

export interface NetworkChunkPublisherUpdatePacket {
  coordinates: BlockCoordinates;
  radius: number;
  saved_chunks: { x: number; z: number }[];
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const NetworkChunkPublisherUpdatePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 121,
    name: "network_chunk_publisher_update",
    description: "Tells clients to update the chunk view for the local player.",
  };
