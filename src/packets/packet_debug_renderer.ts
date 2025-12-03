/**
 * DebugRendererPacket
 * Unknown packet ID
 * No description
 */

export interface DebugRendererPacket {
  type: "clear" | "add_cube";
  payload:
    | { type: "clear"; value: void }
    | {
        type: "add_cube";
        text: string;
        position: Vec3f;
        red: number;
        green: number;
        blue: number;
        alpha: number;
        duration: number;
      };
}

export interface Vec3f {
  x: number;
  y: number;
  z: number;
}

export const DebugRendererPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "debug_renderer",
  description: undefined,
};
