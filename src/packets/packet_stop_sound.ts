/**
 * StopSoundPacket
 * Packet ID: 87
 * Allows you to stop a sound or all sounds on all clients, only used in a /command
 */

export interface StopSoundPacket {
  name: string;
  stop_all: boolean;
  stop_music_legacy: boolean;
}

export const StopSoundPacketInfo: import("./metadata").PacketMetadata = {
  id: 87,
  name: "stop_sound",
  description:
    "Allows you to stop a sound or all sounds on all clients, only used in a /command",
};
