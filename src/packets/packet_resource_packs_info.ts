/**
 * ResourcePacksInfoPacket
 * Unknown packet ID
 * No description
 */

export interface ResourcePacksInfoPacket {
  must_accept: boolean;
  has_addons: boolean;
  has_scripts: boolean;
  disable_vibrant_visuals: boolean;
  world_template: { uuid: string; version: string };
  texture_packs: TexturePackInfos;
}

export type TexturePackInfos = {
  uuid: string;
  version: string;
  size: number;
  content_key: string;
  sub_pack_name: string;
  content_identity: string;
  has_scripts: boolean;
  addon_pack: boolean;
  rtx_enabled: boolean;
  cdn_url: string;
}[];

export const ResourcePacksInfoPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "resource_packs_info",
    description: undefined,
  };
