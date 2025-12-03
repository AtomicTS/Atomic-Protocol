/**
 * SubchunkRequestPacket
 * Unknown packet ID
 * No description
 */

export interface SubchunkRequestPacket {
  dimension: number;
  origin: Vec3i;
  requests: { dx: number; dy: number; dz: number }[];
}

export interface Vec3i {
  x: number;
  y: number;
  z: number;
}

export const SubchunkRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "subchunk_request",
  description: undefined,
};
