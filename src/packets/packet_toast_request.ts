/**
 * ToastRequestPacket
 * Packet ID: 186
 * Pushes a UI toast message to be displayed by the client
 */

export interface ToastRequestPacket {
  title: string;
  message: string;
}

export const ToastRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: 186,
  name: "toast_request",
  description: "Pushes a UI toast message to be displayed by the client",
};
