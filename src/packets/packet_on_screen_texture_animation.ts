/**
 * OnScreenTextureAnimationPacket
 * Packet ID: 130
 * On-Screen Texture Animation
 */

export interface OnScreenTextureAnimationPacket {
  animation_type: number;
}

export const OnScreenTextureAnimationPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 130,
    name: "on_screen_texture_animation",
    description: "On-Screen Texture Animation",
  };
