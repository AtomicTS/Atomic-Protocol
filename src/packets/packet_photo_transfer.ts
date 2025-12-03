/**
 * PhotoTransferPacket
 * Packet ID: 99
 * There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.
 */

export interface PhotoTransferPacket {
  image_name: string;
  image_data: string;
  book_id: string;
  photo_type: number;
  source_type: number;
  owner_entity_unique_id: number;
  new_photo_name: string;
}

export const PhotoTransferPacketInfo: import("./metadata").PacketMetadata = {
  id: 99,
  name: "photo_transfer",
  description:
    "There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.",
};
