/**
 * ClientStartItemCooldownPacket
 * Unknown packet ID
 * No description
 */

export interface ClientStartItemCooldownPacket {
  category: string;
  duration: number;
}

export const ClientStartItemCooldownPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "client_start_item_cooldown",
    description: undefined,
  };
