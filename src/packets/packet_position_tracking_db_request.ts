/**
 * PositionTrackingDbRequestPacket
 * Unknown packet ID
 * No description
 */

export interface PositionTrackingDbRequestPacket {
  action: "query";
  tracking_id: number;
}

export const PositionTrackingDbRequestPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "position_tracking_db_request",
    description: undefined,
  };
