/**
 * ModalFormRequestPacket
 * Packet ID: 100
 * Modal Form Request
 */

export interface ModalFormRequestPacket {
  form_id: number;
  data: string;
}

export const ModalFormRequestPacketInfo: import("./metadata").PacketMetadata = {
  id: 100,
  name: "modal_form_request",
  description: "Modal Form Request",
};
