/**
 * PlaySoundPacket
 * Packet ID: 86
 * This packet is only used via command or script event. This is for 3rd party content.
 */

export interface PlaySoundPacket {
  name: string;
  coordinates: BlockCoordinates;
  volume: number;
  pitch: number;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const PlaySoundPacketInfo: import("./metadata").PacketMetadata = {
  id: 86,
  name: "play_sound",
  description:
    "This packet is only used via command or script event. This is for 3rd party content.",
};
