/**
 * RemoveVolumeEntityPacket
 * Packet ID: 167
 * Sends a volume entity to be removed from server to client.
 */

export interface RemoveVolumeEntityPacket {
  entity_id: Varint64;
}

export type Varint64 = any;

export const RemoveVolumeEntityPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 167,
    name: "remove_volume_entity",
    description: "Sends a volume entity to be removed from server to client.",
  };
