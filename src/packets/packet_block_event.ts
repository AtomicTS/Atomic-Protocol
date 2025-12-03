/**
 * BlockEventPacket
 * Packet ID: 26
 * Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.
 */

export interface BlockEventPacket {
  position: BlockCoordinates;
  type: "sound" | "change_state";
  data: number;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const BlockEventPacketInfo: import("./metadata").PacketMetadata = {
  id: 26,
  name: "block_event",
  description:
    "Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.",
};
