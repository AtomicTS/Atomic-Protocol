/**
 * ChangeMobPropertyPacket
 * Packet ID: 182
 * packet containing data for changing mob property
 */

export interface ChangeMobPropertyPacket {
  entity_unique_id: number;
  property: string;
  bool_value: boolean;
  string_value: string;
  int_value: number;
  float_value: number;
}

export const ChangeMobPropertyPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 182,
    name: "change_mob_property",
    description: "packet containing data for changing mob property",
  };
