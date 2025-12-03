/**
 * AdventureSettingsPacket
 * Unknown packet ID
 * No description
 */

export interface AdventureSettingsPacket {
  flags: AdventureFlags;
  command_permission: CommandPermissionLevelVarint;
  action_permissions: ActionPermissions;
  permission_level: PermissionLevel;
  custom_stored_permissions: number;
  user_id: number;
}

export type AdventureFlags = {
  world_immutable: boolean;
  no_pvp: boolean;
  auto_jump: boolean;
  allow_flight: boolean;
  no_clip: boolean;
  world_builder: boolean;
  flying: boolean;
  muted: boolean;
};

export type CommandPermissionLevelVarint =
  | "normal"
  | "operator"
  | "automation"
  | "host"
  | "owner"
  | "internal";

export type ActionPermissions = {
  mine: boolean;
  doors_and_switches: boolean;
  open_containers: boolean;
  attack_players: boolean;
  attack_mobs: boolean;
  operator: boolean;
  teleport: boolean;
  build: boolean;
  default: boolean;
};

export type PermissionLevel = "visitor" | "member" | "operator" | "custom";

export const AdventureSettingsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "adventure_settings",
    description: undefined,
  };
