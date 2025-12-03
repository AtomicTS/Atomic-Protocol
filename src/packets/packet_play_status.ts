/**
 * PlayStatusPacket
 * Packet ID: 2
 * Describes the login status of the player
 */

export interface PlayStatusPacket {
  status:
    | "login_success"
    | "failed_client"
    | "failed_spawn"
    | "player_spawn"
    | "failed_invalid_tenant"
    | "failed_vanilla_edu"
    | "failed_edu_vanilla"
    | "failed_server_full"
    | "failed_editor_vanilla_mismatch"
    | "failed_vanilla_editor_mismatch";
}

export const PlayStatusPacketInfo: import("./metadata").PacketMetadata = {
  id: 2,
  name: "play_status",
  description: "Describes the login status of the player",
};
