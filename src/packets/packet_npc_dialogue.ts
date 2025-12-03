/**
 * NpcDialoguePacket
 * Packet ID: 169
 * Sent from the server to client when remote firing an NPC dialogue window for a client
 */

export interface NpcDialoguePacket {
  entity_id: number;
  action_type: "open" | "close";
  dialogue: string;
  screen_name: string;
  npc_name: string;
  action_json: string;
}

export const NpcDialoguePacketInfo: import("./metadata").PacketMetadata = {
  id: 169,
  name: "npc_dialogue",
  description:
    "Sent from the server to client when remote firing an NPC dialogue window for a client",
};
