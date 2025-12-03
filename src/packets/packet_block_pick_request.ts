/**
 * BlockPickRequestPacket
 * Packet ID: 34
 * Player picks up a block in the world; client to server.
 */

export interface BlockPickRequestPacket {
  x: number;
  y: number;
  z: number;
  add_user_data: boolean;
  selected_slot: number;
}

export const BlockPickRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: 34,
  name: "block_pick_request",
  description: "Player picks up a block in the world; client to server.",
};
