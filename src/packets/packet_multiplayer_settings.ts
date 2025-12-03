/**
 * MultiplayerSettingsPacket
 * Packet ID: 139
 * Syncs multiplayer settings
 */

export interface MultiplayerSettingsPacket {
  action_type:
    | "enable_multiplayer"
    | "disable_multiplayer"
    | "refresh_join_code";
}

export const MultiplayerSettingsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 139,
    name: "multiplayer_settings",
    description: "Syncs multiplayer settings",
  };
