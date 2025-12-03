/**
 * SetSpawnPositionPacket
 * Packet ID: 43
 * When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)
 */

export interface SetSpawnPositionPacket {
  spawn_type: "player" | "world";
  player_position: BlockCoordinates;
  dimension: number;
  world_position: BlockCoordinates;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const SetSpawnPositionPacketInfo: import("./metadata").PacketMetadata = {
  id: 43,
  name: "set_spawn_position",
  description:
    "When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)",
};
