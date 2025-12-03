/**
 * LevelSoundEventOldPacket
 * Unknown packet ID
 * No description
 */

export interface LevelSoundEventOldPacket {
  sound_id: number;
  position: Vec3f;
  block_id: number;
  entity_type: number;
  is_baby_mob: boolean;
  is_global: boolean;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const LevelSoundEventOldPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "level_sound_event_old",
    description: undefined,
  };
