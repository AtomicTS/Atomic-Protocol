/**
 * OpenSignPacket
 * Packet ID: 303
 * Sent from the server so that the client knows to open the sign screen.
 */

export interface OpenSignPacket {
  position: BlockCoordinates;
  is_front: boolean;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export const OpenSignPacketInfo: import("./metadata").PacketMetadata = {
  id: 303,
  name: "open_sign",
  description:
    "Sent from the server so that the client knows to open the sign screen.",
};
