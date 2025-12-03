/**
 * SettingsCommandPacket
 * Packet ID: 140
 * Requests a setting to be changed through commands.
 */

export interface SettingsCommandPacket {
  command_line: string;
  suppress_output: boolean;
}

export const SettingsCommandPacketInfo: import("./metadata").PacketMetadata = {
  id: 140,
  name: "settings_command",
  description: "Requests a setting to be changed through commands.",
};
