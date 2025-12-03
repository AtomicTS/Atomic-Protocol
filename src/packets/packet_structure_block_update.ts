/**
 * StructureBlockUpdatePacket
 * Unknown packet ID
 * No description
 */

export interface StructureBlockUpdatePacket {
  position: BlockCoordinates;
  structure_name: string;
  filtered_structure_name: string;
  data_field: string;
  include_players: boolean;
  show_bounding_box: boolean;
  structure_block_type: number;
  settings: StructureBlockSettings;
  redstone_save_mode: number;
  should_trigger: boolean;
  water_logged: boolean;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export interface StructureBlockSettings {
  palette_name: string;
  ignore_entities: boolean;
  ignore_blocks: boolean;
  non_ticking_players_and_ticking_areas: boolean;
  size: BlockCoordinates;
  structure_offset: BlockCoordinates;
  last_editing_player_unique_id: number;
  rotation: "none" | "90_deg" | "180_deg" | "270_deg";
  mirror: "none" | "x_axis" | "z_axis" | "both_axes";
  animation_mode: "none" | "layers" | "blocks";
  animation_duration: number;
  integrity: number;
  seed: number;
  pivot: Vec3f;
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const StructureBlockUpdatePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "structure_block_update",
    description: undefined,
  };
