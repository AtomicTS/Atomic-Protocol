/**
 * PlayerLocationPacket
 * Unknown packet ID
 * No description
 */

export interface PlayerLocationPacket {
  type: "coordinates" | "type_hide";
  entity_unique_id: Varint64;
  position: { type: "coordinates"; value: Vec3f };
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const PlayerLocationPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "player_location",
  description: undefined,
};
