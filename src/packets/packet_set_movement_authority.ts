/**
 * SetMovementAuthorityPacket
 * Unknown packet ID
 * No description
 */

export interface SetMovementAuthorityPacket {
  movement_authority: "client" | "server" | "server_with_rewind";
}

export const SetMovementAuthorityPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "set_movement_authority",
    description: undefined,
  };
