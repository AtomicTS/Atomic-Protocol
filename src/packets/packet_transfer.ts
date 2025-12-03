/**
 * TransferPacket
 * Packet ID: 85
 * Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.
 */

export interface TransferPacket {
  server_address: string;
  port: number;
  reload_world: boolean;
}

export const TransferPacketInfo: import("./metadata").PacketMetadata = {
  id: 85,
  name: "transfer",
  description:
    "Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.",
};
