/**
 * ClientMovementPredictionSyncPacket
 * Unknown packet ID
 * No description
 */

export interface ClientMovementPredictionSyncPacket {
  data_flags: bigint;
  bounding_box: { scale: number; width: number; height: number };
  movement_speed: number;
  underwater_movement_speed: number;
  lava_movement_speed: number;
  jump_strength: number;
  health: number;
  hunger: number;
  entity_runtime_id: Varint64;
  is_flying: boolean;
}

export type Varint64 = any;

export const ClientMovementPredictionSyncPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "client_movement_prediction_sync",
    description: undefined,
  };
