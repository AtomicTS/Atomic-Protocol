/**
 * CreatePhotoPacket
 * Packet ID: 171
 * Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.
 */

export interface CreatePhotoPacket {
  entity_unique_id: number;
  photo_name: string;
  item_name: string;
}

export const CreatePhotoPacketInfo: import("./metadata").PacketMetadata = {
  id: 171,
  name: "create_photo",
  description:
    "Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.",
};
