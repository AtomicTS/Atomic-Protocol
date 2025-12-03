/**
 * PurchaseReceiptPacket
 * Packet ID: 92
 * Sent from client to server
 */

export interface PurchaseReceiptPacket {
  receipts: string[];
}

export const PurchaseReceiptPacketInfo: import("./metadata").PacketMetadata = {
  id: 92,
  name: "purchase_receipt",
  description: "Sent from client to server",
};
