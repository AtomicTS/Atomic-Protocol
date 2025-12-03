/**
 * SpawnExperienceOrbPacket
 * Packet ID: 66
 * Spawn Experience Orb
 */

export interface SpawnExperienceOrbPacket {
  position: Vec3f;
  count: number;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const SpawnExperienceOrbPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 66,
    name: "spawn_experience_orb",
    description: "Spawn Experience Orb",
  };
