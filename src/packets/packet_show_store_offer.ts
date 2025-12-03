/**
 * ShowStoreOfferPacket
 * Packet ID: 91
 * Used for redirecting a user to the right offer.
 */

export interface ShowStoreOfferPacket {
  offer_uuid: string;
  redirect_type: "marketplace" | "dressing_room" | "third_party_server_page";
}

export const ShowStoreOfferPacketInfo: import("./metadata").PacketMetadata = {
  id: 91,
  name: "show_store_offer",
  description: "Used for redirecting a user to the right offer.",
};
