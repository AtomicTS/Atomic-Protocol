/**
 * ClientboundMapItemDataPacket
 * Unknown packet ID
 * No description
 */

export interface ClientboundMapItemDataPacket {
  map_id: number;
  update_flags: UpdateMapFlags;
  dimension: number;
  locked: boolean;
  origin: Vec3i;
  included_in: { "update_flags.initialisation": "true"; value: number[] };
  scale: {
    "update_flags.initialisation || update_flags.decoration || update_flags.texture": "true";
    value: number;
  };
  tracked: {
    "update_flags.decoration": "true";
    objects: TrackedObject[];
    decorations: MapDecoration[];
  };
  texture: {
    "update_flags.texture": "true";
    width: number;
    height: number;
    x_offset: number;
    y_offset: number;
    pixels: number[];
  };
}

export type UpdateMapFlags = {
  "0": boolean;
  "1": boolean;
  "2": boolean;
  "3": boolean;
};

export interface Vec3i {
  x: number;
  y: number;
  z: number;
}

export interface TrackedObject {
  type: "entity" | "block";
  entity_unique_id: { type: "entity"; value: number };
  block_position: { type: "block"; value: BlockCoordinates };
}

export interface MapDecoration {
  type:
    | "marker_white"
    | "marker_green"
    | "marker_red"
    | "marker_blue"
    | "cross_white"
    | "triangle_red"
    | "square_white"
    | "marker_sign"
    | "marker_pink"
    | "marker_orange"
    | "marker_yellow"
    | "marker_teal"
    | "triangle_green"
    | "small_square_white"
    | "mansion"
    | "monument"
    | "no_draw"
    | "village_desert"
    | "village_plains"
    | "village_savanna"
    | "village_snowy"
    | "village_taiga"
    | "jungle_temple"
    | "witch_hut =>"
    | "marker_white"
    | "marker_green"
    | "marker_red"
    | "marker_blue"
    | "cross_white"
    | "triangle_red"
    | "square_white"
    | "marker_sign"
    | "marker_pink"
    | "marker_orange"
    | "marker_yellow"
    | "marker_teal"
    | "triangle_green"
    | "small_square_white"
    | "mansion"
    | "monument"
    | "no_draw"
    | "village_desert"
    | "village_plains"
    | "village_savanna"
    | "village_snowy"
    | "village_taiga"
    | "jungle_temple"
    | "witch_hut";
  rotation: number;
  x: number;
  y: number;
  label: string;
  color_abgr: number;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const ClientboundMapItemDataPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "clientbound_map_item_data",
    description: undefined,
  };
