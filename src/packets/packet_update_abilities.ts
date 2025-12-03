/**
 * UpdateAbilitiesPacket
 * Unknown packet ID
 * No description
 */

export interface UpdateAbilitiesPacket {
  entity_unique_id: number;
  permission_level: PermissionLevel;
  command_permission: CommandPermissionLevel;
  abilities: AbilityLayers[];
}

export type PermissionLevel = "visitor" | "member" | "operator" | "custom";

export type CommandPermissionLevel =
  | "normal"
  | "operator"
  | "automation"
  | "host"
  | "owner"
  | "internal";

export interface AbilityLayers {
  type:
    | "cache"
    | "base"
    | "spectator"
    | "commands"
    | "editor"
    | "loading_screen";
  allowed: AbilitySet;
  enabled: AbilitySet;
  fly_speed: number;
  vertical_fly_speed: number;
  walk_speed: number;
}

export type AbilitySet = {
  "0": boolean;
  "1": boolean;
  "2": boolean;
  "3": boolean;
  "4": boolean;
  "5": boolean;
  "6": boolean;
  "7": boolean;
  "8": boolean;
  "9": boolean;
  "10": boolean;
  "11": boolean;
  "12": boolean;
  "13": boolean;
  "14": boolean;
  "15": boolean;
  "16": boolean;
  "17": boolean;
  "18": boolean;
  "19": boolean;
  "20": boolean;
};

export const UpdateAbilitiesPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "update_abilities",
  description: undefined,
};
