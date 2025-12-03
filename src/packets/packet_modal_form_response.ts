/**
 * ModalFormResponsePacket
 * Packet ID: 101
 * Fired in response to third party server request to show the custom UI screen.
 */

export interface ModalFormResponsePacket {
  form_id: number;
  has_response_data: boolean;
  data: { has_response_data: "true"; value: string };
  has_cancel_reason: boolean;
  payload: { has_cancel_reason: "true"; cancel_reason: "closed" | "busy" };
}

export const ModalFormResponsePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 101,
    name: "modal_form_response",
    description:
      "Fired in response to third party server request to show the custom UI screen.",
  };
