/**
 * SetCommandsEnabledPacket
 * Packet ID: 59
 * This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands
 */

export interface SetCommandsEnabledPacket {
  enabled: boolean;
}

export const SetCommandsEnabledPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 59,
    name: "set_commands_enabled",
    description:
      "This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands",
  };
