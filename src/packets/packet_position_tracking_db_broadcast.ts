/**
 * PositionTrackingDbBroadcastPacket
 * Unknown packet ID
 * No description
 */

export interface PositionTrackingDbBroadcastPacket {
  broadcast_action: "update" | "destory" | "not_found";
  tracking_id: number;
  nbt: Nbt;
}

export type Nbt = any;

export const PositionTrackingDbBroadcastPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "position_tracking_db_broadcast",
    description: undefined,
  };
