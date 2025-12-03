/**
 * RequestAbilityPacket
 * Packet ID: 184
 * Sent from client to server. Used to request an ability change.
 */

export interface RequestAbilityPacket {
  ability:
    | "build"
    | "mine"
    | "doors_and_switches"
    | "open_containers"
    | "attack_players"
    | "attack_mobs"
    | "operator_commands"
    | "teleport"
    | "invulnerable"
    | "flying"
    | "may_fly"
    | "instant_build"
    | "lightning"
    | "fly_speed"
    | "walk_speed"
    | "muted"
    | "world_builder"
    | "no_clip"
    | "ability_count";
  value_type: "bool" | "float";
  bool_value: boolean;
  float_val: number;
}

export const RequestAbilityPacketInfo: import("./metadata").PacketMetadata = {
  id: 184,
  name: "request_ability",
  description: "Sent from client to server. Used to request an ability change.",
};
