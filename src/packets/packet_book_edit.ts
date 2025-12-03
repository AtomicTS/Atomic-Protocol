/**
 * BookEditPacket
 * Unknown packet ID
 * No description
 */

export interface BookEditPacket {
  type: "replace_page" | "add_page" | "delete_page" | "swap_pages" | "sign";
  slot: number;
  payload:
    | {
        type: "replace_page";
        page_number: number;
        text: string;
        photo_name: string;
      }
    | {
        type: "add_page";
        page_number: number;
        text: string;
        photo_name: string;
      }
    | { type: "delete_page"; page_number: number }
    | { type: "swap_pages"; page1: number; page2: number }
    | { type: "sign"; title: string; author: string; xuid: string };
}

export const BookEditPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "book_edit",
  description: undefined,
};
