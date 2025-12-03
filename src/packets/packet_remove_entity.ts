/**
 * RemoveEntityPacket
 * Unknown packet ID
 * No description
 */

export interface RemoveEntityPacket {
  entity_id_self: number;
}

export const RemoveEntityPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "remove_entity",
  description: undefined,
};
