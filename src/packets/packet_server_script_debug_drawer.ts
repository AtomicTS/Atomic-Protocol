/**
 * ServerScriptDebugDrawerPacket
 * Unknown packet ID
 * No description
 */

export interface ServerScriptDebugDrawerPacket {
  shapes: {
    network_id: Varint64;
    shape_type: "line" | "box" | "sphere" | "circle" | "text" | "arrow" | null;
    location: Vec3f | null;
    scale: number | null;
    rotation: Vec3f | null;
    time_left: number | null;
    color: number | null;
    text: string | null;
    box_bound: Vec3f | null;
    line_end_location: Vec3f | null;
    arrow_head_length: number | null;
    arrow_head_radius: number | null;
    segment_count: number | null;
  }[];
}

export type Varint64 = any;

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const ServerScriptDebugDrawerPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "server_script_debug_drawer",
    description: undefined,
  };
