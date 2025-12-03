/**
 * CompletedUsingItemPacket
 * Packet ID: 142
 * Send server to client to complete the using item process. An example is when you finish drinking or eating.
 */

export interface CompletedUsingItemPacket {
  used_item_id: number;
  use_method:
    | "equip_armor"
    | "eat"
    | "attack"
    | "consume"
    | "throw"
    | "shoot"
    | "place"
    | "fill_bottle"
    | "fill_bucket"
    | "pour_bucket"
    | "use_tool"
    | "interact"
    | "retrieved"
    | "dyed"
    | "traded"
    | "brushing_completed"
    | "opened_vault";
}

export const CompletedUsingItemPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 142,
    name: "completed_using_item",
    description:
      "Send server to client to complete the using item process. An example is when you finish drinking or eating.",
  };
