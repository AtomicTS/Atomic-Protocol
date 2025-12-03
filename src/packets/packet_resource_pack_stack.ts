/**
 * ResourcePackStackPacket
 * Unknown packet ID
 * No description
 */

export interface ResourcePackStackPacket {
  must_accept: boolean;
  behavior_packs: ResourcePackIdVersions;
  resource_packs: ResourcePackIdVersions;
  game_version: string;
  experiments: Experiments;
  experiments_previously_used: boolean;
  has_editor_packs: boolean;
}

export type ResourcePackIdVersions = {
  uuid: string;
  version: string;
  name: string;
}[];

export type Experiments = Experiment[];

export interface Experiment {
  name: string;
  enabled: boolean;
}

export const ResourcePackStackPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "resource_pack_stack",
    description: undefined,
  };
