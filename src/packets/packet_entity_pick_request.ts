/**
 * EntityPickRequestPacket
 * Unknown packet ID
 * No description
 */

export interface EntityPickRequestPacket {
  runtime_entity_id: number;
  selected_slot: number;
  with_data: boolean;
}

export const EntityPickRequestPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "entity_pick_request",
    description: undefined,
  };
