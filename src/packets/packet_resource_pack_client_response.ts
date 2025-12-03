/**
 * ResourcePackClientResponsePacket
 * Unknown packet ID
 * No description
 */

export interface ResourcePackClientResponsePacket {
  response_status:
    | "none"
    | "refused"
    | "send_packs"
    | "have_all_packs"
    | "completed";
  resourcepackids: ResourcePackIds;
}

export type ResourcePackIds = string[];

export const ResourcePackClientResponsePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "resource_pack_client_response",
    description: undefined,
  };
