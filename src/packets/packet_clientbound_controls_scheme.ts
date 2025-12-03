/**
 * ClientboundControlsSchemePacket
 * Unknown packet ID
 * No description
 */

export interface ClientboundControlsSchemePacket {
  scheme:
    | "locked_player_relative_strafe"
    | "camera_relative"
    | "camera_relative_strafe"
    | "player_relative"
    | "player_relative_strafe";
}

export const ClientboundControlsSchemePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "clientbound_controls_scheme",
    description: undefined,
  };
