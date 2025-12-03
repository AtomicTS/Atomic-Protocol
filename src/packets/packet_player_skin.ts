/**
 * PlayerSkinPacket
 * Unknown packet ID
 * No description
 */

export interface PlayerSkinPacket {
  uuid: string;
  skin: Skin;
  skin_name: string;
  old_skin_name: string;
  is_verified: boolean;
}

export interface Skin {
  skin_id: string;
  play_fab_id: string;
  skin_resource_pack: string;
  skin_data: SkinImage;
  animations: {
    skin_image: SkinImage;
    animation_type: number;
    animation_frames: number;
    expression_type: number;
  }[];
  cape_data: SkinImage;
  geometry_data: string;
  geometry_data_version: string;
  animation_data: string;
  cape_id: string;
  full_skin_id: string;
  arm_size: string;
  skin_color: string;
  personal_pieces: {
    piece_id: string;
    piece_type: string;
    pack_id: string;
    is_default_piece: boolean;
    product_id: string;
  }[];
  piece_tint_colors: { piece_type: string; colors: string[] }[];
  premium: boolean;
  persona: boolean;
  cape_on_classic: boolean;
  primary_user: boolean;
  overriding_player_appearance: boolean;
}

export interface SkinImage {
  width: number;
  height: number;
  data: ByteArray;
}

export type ByteArray = any;

export const PlayerSkinPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "player_skin",
  description: undefined,
};
