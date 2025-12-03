/**
 * BiomeDefinitionListPacket
 * Unknown packet ID
 * No description
 */

export interface BiomeDefinitionListPacket {
  biome_definitions: BiomeDefinition[];
  string_list: string[];
}

export interface BiomeDefinition {
  name_index: number;
  biome_id: number;
  temperature: number;
  downfall: number;
  snow_foliage: number;
  depth: number;
  scale: number;
  map_water_colour: number;
  rain: boolean;
  tags: number[] | null;
  chunk_generation: BiomeChunkGeneration | null;
}

export interface BiomeChunkGeneration {
  climate: BiomeClimate | null;
  consolidated_features: BiomeConsolidatedFeature[] | null;
  mountain_parameters: BiomeMountainParameters | null;
  surface_material_adjustments: BiomeElementData[] | null;
  surface_materials: BiomeSurfaceMaterial | null;
  has_default_overworld_surface: boolean | null;
  has_swamp_surface: boolean;
  has_frozen_ocean_surface: boolean;
  has_end_surface: boolean;
  mesa_surface: BiomeMesaSurface | null;
  capped_surface: BiomeCappedSurface | null;
  overworld_rules: BiomeOverworldRules | null;
  multi_noise_rules: BiomeMultiNoiseRules | null;
  legacy_rules: BiomeConditionalTransformation[] | null;
  replacements_data: BiomeReplacementData[] | null;
}

export interface BiomeClimate {
  temperature: number;
  downfall: number;
  snow_accumulation_min: number;
  snow_accumulation_max: number;
}

export interface BiomeConsolidatedFeature {
  scatter: BiomeScatterParameter;
  feature: number;
  identifier: number;
  pass: number;
  can_use_internal: boolean;
}

export interface BiomeMountainParameters {
  steep_block: number;
  north_slopes: boolean;
  south_slopes: boolean;
  west_slopes: boolean;
  east_slopes: boolean;
  top_slide_enabled: boolean;
}

export interface BiomeElementData {
  noise_frequency_scale: number;
  noise_lower_bound: number;
  noise_upper_bound: number;
  height_min_type: number;
  height_min: number;
  height_max_type: number;
  height_max: number;
  adjusted_materials: BiomeSurfaceMaterial;
}

export interface BiomeSurfaceMaterial {
  top_block: number;
  mid_block: number;
  sea_floor_block: number;
  foundation_block: number;
  sea_block: number;
  sea_floor_depth: number;
}

export interface BiomeMesaSurface {
  clay_material: number;
  hard_clay_material: number;
  bryce_pillars: boolean;
  has_forest: boolean;
}

export interface BiomeCappedSurface {
  floor_blocks: number[];
  ceiling_blocks: number[];
  sea_block: number | null;
  foundation_block: number | null;
  beach_block: number | null;
}

export interface BiomeOverworldRules {
  hills_transformations: BiomeWeight[];
  mutate_transformations: BiomeWeight[];
  river_transformations: BiomeWeight[];
  shore_transformations: BiomeWeight[];
  pre_hills_edge_transformations: BiomeConditionalTransformation[];
  post_shore_edge_transformations: BiomeConditionalTransformation[];
  climate_transformations: BiomeTemperatureWeight[];
}

export interface BiomeMultiNoiseRules {
  temperature: number;
  humidity: number;
  altitude: number;
  weirdness: number;
  weight: number;
}

export interface BiomeConditionalTransformation {
  weighted_biomes: BiomeWeight[];
  condition_json: number;
  min_passing_neighbours: number;
}

export interface BiomeReplacementData {
  biome: number;
  dimension: number;
  target_biomes: number[];
  amount: number;
  noise_frequency_scale: number;
  replacement_index: number;
}

export interface BiomeWeight {
  biome: number;
  weight: number;
}

export interface BiomeTemperatureWeight {
  temperature: number;
  weight: number;
}

export interface BiomeScatterParameter {
  coordinates: BiomeCoordinate[];
  evaluation_order: "xyz" | "xzy" | "yxz" | "yzx" | "zxy" | "zyx";
  chance_percent_type: number;
  chance_percent: number;
  chance_numerator: number;
  chance_denominator: number;
  iterations_type: number;
  iterations: number;
}

export interface BiomeCoordinate {
  min_value_type: number;
  min_value: number;
  max_value_type: number;
  max_value: number;
  grid_offset: number;
  grid_step_size: number;
  distribution:
    | "single_valued"
    | "uniform"
    | "gaussian"
    | "inverse_gaussian"
    | "fixed_grid"
    | "jittered_grid"
    | "triangle";
}

export const BiomeDefinitionListPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "biome_definition_list",
    description: undefined,
  };
