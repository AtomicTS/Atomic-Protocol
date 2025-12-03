/**
 * MovePlayerPacket
 * Unknown packet ID
 * No description
 */

export interface MovePlayerPacket {
  runtime_id: number;
  position: Vec3f;
  pitch: number;
  yaw: number;
  head_yaw: number;
  mode: "normal" | "reset" | "teleport" | "rotation";
  on_ground: boolean;
  ridden_runtime_id: number;
  teleport: {
    mode: "teleport";
    cause: "unknown" | "projectile" | "chorus_fruit" | "command" | "behavior";
    source_entity_type: LegacyEntityType;
  };
  tick: Varint64;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export type LegacyEntityType =
  | "chicken"
  | "cow"
  | "pig"
  | "sheep"
  | "wolf"
  | "villager"
  | "mooshroom"
  | "squid"
  | "rabbit"
  | "bat"
  | "iron_golem"
  | "snow_golem"
  | "ocelot"
  | "horse"
  | "donkey"
  | "mule"
  | "skeleton_horse"
  | "zombie_horse"
  | "polar_bear"
  | "llama"
  | "parrot"
  | "dolphin"
  | "zombie"
  | "creeper"
  | "skeleton"
  | "spider"
  | "zombie_pigman"
  | "slime"
  | "enderman"
  | "silverfish"
  | "cave_spider"
  | "ghast"
  | "magma_cube"
  | "blaze"
  | "zombie_villager"
  | "witch"
  | "stray"
  | "husk"
  | "wither_skeleton"
  | "guardian"
  | "elder_guardian"
  | "npc"
  | "wither"
  | "ender_dragon"
  | "shulker"
  | "endermite"
  | "agent"
  | "vindicator"
  | "phantom"
  | "armor_stand"
  | "tripod_camera"
  | "player"
  | "item"
  | "tnt"
  | "falling_block"
  | "moving_block"
  | "xp_bottle"
  | "xp_orb"
  | "eye_of_ender_signal"
  | "ender_crystal"
  | "fireworks_rocket"
  | "thrown_trident"
  | "turtle"
  | "cat"
  | "shulker_bullet"
  | "fishing_hook"
  | "chalkboard"
  | "dragon_fireball"
  | "arrow"
  | "snowball"
  | "egg"
  | "painting"
  | "minecart"
  | "fireball"
  | "splash_potion"
  | "ender_pearl"
  | "leash_knot"
  | "wither_skull"
  | "boat"
  | "wither_skull_dangerous"
  | "lightning_bolt"
  | "small_fireball"
  | "area_effect_cloud"
  | "hopper_minecart"
  | "tnt_minecart"
  | "chest_minecart"
  | "command_block_minecart"
  | "lingering_potion"
  | "llama_spit"
  | "evocation_fang"
  | "evocation_illager"
  | "vex"
  | "ice_bomb"
  | "balloon"
  | "pufferfish"
  | "salmon"
  | "drowned"
  | "tropicalfish"
  | "cod"
  | "panda";

export type Varint64 = any;

export const MovePlayerPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "move_player",
  description: undefined,
};
