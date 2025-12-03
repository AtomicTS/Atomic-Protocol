/**
 * SetEntityLinkPacket
 * Unknown packet ID
 * No description
 */

export interface SetEntityLinkPacket {
  link: Link;
}

export interface Link {
  ridden_entity_id: number;
  rider_entity_id: number;
  type: number;
  immediate: boolean;
  rider_initiated: boolean;
  angular_velocity: number;
}

export const SetEntityLinkPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "set_entity_link",
  description: undefined,
};
