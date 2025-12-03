/**
 * SpawnParticleEffectPacket
 * Packet ID: 118
 * Tell client to spawn a particle effect.
 */

export interface SpawnParticleEffectPacket {
  dimension: number;
  entity_id: number;
  position: Vec3f;
  particle_name: string;
  molang_variables: string | null;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const SpawnParticleEffectPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 118,
    name: "spawn_particle_effect",
    description: "Tell client to spawn a particle effect.",
  };
