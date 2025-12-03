/**
 * PlayerUpdateEntityOverridesPacket
 * Unknown packet ID
 * No description
 */

export interface PlayerUpdateEntityOverridesPacket {
  runtime_id: Varint64;
  property_index: number;
  type: "clear_all" | "remove" | "set_int" | "set_float";
  value:
    | { type: "set_int"; value: number }
    | { type: "set_float"; value: number };
}

export type Varint64 = any;

export const PlayerUpdateEntityOverridesPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "player_update_entity_overrides",
    description: undefined,
  };
