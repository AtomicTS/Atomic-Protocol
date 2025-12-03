/**
 * UpdateAdventureSettingsPacket
 * Packet ID: 188
 * UpdateAdventureSettingsPacket
 */

export interface UpdateAdventureSettingsPacket {
  no_pvm: boolean;
  no_mvp: boolean;
  immutable_world: boolean;
  show_name_tags: boolean;
  auto_jump: boolean;
}

export const UpdateAdventureSettingsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 188,
    name: "update_adventure_settings",
    description: "UpdateAdventureSettingsPacket",
  };
