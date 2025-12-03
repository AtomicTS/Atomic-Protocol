/**
 * StartGamePacket
 * Unknown packet ID
 * No description
 */

export interface StartGamePacket {
  entity_id: number;
  runtime_entity_id: Varint64;
  player_gamemode: GameMode;
  player_position: Vec3f;
  rotation: Vec2f;
  seed: number;
  biome_type: number;
  biome_name: string;
  dimension: "overworld" | "nether" | "end";
  generator: number;
  world_gamemode: GameMode;
  hardcore: boolean;
  difficulty: number;
  spawn_position: BlockCoordinates;
  achievements_disabled: boolean;
  editor_world_type: "not_editor" | "project" | "test_level" | "realms_upload";
  created_in_editor: boolean;
  exported_from_editor: boolean;
  day_cycle_stop_time: number;
  edu_offer: number;
  edu_features_enabled: boolean;
  edu_product_uuid: string;
  rain_level: number;
  lightning_level: number;
  has_confirmed_platform_locked_content: boolean;
  is_multiplayer: boolean;
  broadcast_to_lan: boolean;
  xbox_live_broadcast_mode: number;
  platform_broadcast_mode: number;
  enable_commands: boolean;
  is_texturepacks_required: boolean;
  gamerules: GameRuleVarint[];
  experiments: Experiments;
  experiments_previously_used: boolean;
  bonus_chest: boolean;
  map_enabled: boolean;
  permission_level: PermissionLevel;
  server_chunk_tick_range: number;
  has_locked_behavior_pack: boolean;
  has_locked_resource_pack: boolean;
  is_from_locked_world_template: boolean;
  msa_gamertags_only: boolean;
  is_from_world_template: boolean;
  is_world_template_option_locked: boolean;
  only_spawn_v1_villagers: boolean;
  persona_disabled: boolean;
  custom_skins_disabled: boolean;
  emote_chat_muted: boolean;
  game_version: string;
  limited_world_width: number;
  limited_world_length: number;
  is_new_nether: boolean;
  edu_resource_uri: EducationSharedResourceURI;
  experimental_gameplay_override: boolean;
  chat_restriction_level: "none" | "dropped" | "disabled";
  disable_player_interactions: boolean;
  server_identifier: string;
  world_identifier: string;
  scenario_identifier: string;
  owner_identifier: string;
  level_id: string;
  world_name: string;
  premium_world_template_id: string;
  is_trial: boolean;
  rewind_history_size: number;
  server_authoritative_block_breaking: boolean;
  current_tick: number;
  enchantment_seed: number;
  block_properties: BlockProperties;
  multiplayer_correlation_id: string;
  server_authoritative_inventory: boolean;
  engine: string;
  property_data: Nbt;
  block_pallette_checksum: number;
  world_template_id: string;
  client_side_generation: boolean;
  block_network_ids_are_hashes: boolean;
  tick_death_systems: boolean;
  server_controlled_sound: boolean;
}

export type Varint64 = any;

export type GameMode =
  | "survival"
  | "creative"
  | "adventure"
  | "survival_spectator"
  | "creative_spectator"
  | "fallback"
  | "spectator";

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export interface Vec2f {
  x: number;
  z: number;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export interface GameRuleVarint {
  name: string;
  editable: boolean;
  type: "bool" | "int" | "float";
  value:
    | { type: "bool"; value: boolean }
    | { type: "int"; value: number }
    | { type: "float"; value: number };
}

export type Experiments = Experiment[];

export type PermissionLevel = "visitor" | "member" | "operator" | "custom";

export interface EducationSharedResourceURI {
  button_name: string;
  link_uri: string;
}

export type BlockProperties = { name: string; state: Nbt }[];

export type Nbt = any;

export interface Experiment {
  name: string;
  enabled: boolean;
}

export const StartGamePacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "start_game",
  description: undefined,
};
