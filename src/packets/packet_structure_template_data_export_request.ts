/**
 * StructureTemplateDataExportRequestPacket
 * Unknown packet ID
 * No description
 */

export interface StructureTemplateDataExportRequestPacket {
  name: string;
  position: BlockCoordinates;
  settings: StructureBlockSettings;
  request_type:
    | "export_from_save"
    | "export_from_load"
    | "query_saved_structure"
    | "import_from_save";
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

export const StructureTemplateDataExportRequestPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "structure_template_data_export_request",
    description: undefined,
  };
