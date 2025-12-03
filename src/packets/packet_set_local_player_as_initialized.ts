/**
 * SetLocalPlayerAsInitializedPacket
 * Packet ID: 113
 * Set Local Player As Initialized
 */

export interface SetLocalPlayerAsInitializedPacket {
  runtime_entity_id: Varint64;
}

export type Varint64 = any;

export const SetLocalPlayerAsInitializedPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 113,
    name: "set_local_player_as_initialized",
    description: "Set Local Player As Initialized",
  };
