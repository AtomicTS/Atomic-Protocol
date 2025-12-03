/**
 * AgentAnimationPacket
 * Packet ID: 304
 * Broadcasted to other players when an Agent performs an animation so it gets properly replicated.
 */

export interface AgentAnimationPacket {
  animation: "arm_swing" | "shrug";
  entity_runtime_id: Varint64;
}

export type Varint64 = any;

export const AgentAnimationPacketInfo: import("./metadata").PacketMetadata = {
  id: 304,
  name: "agent_animation",
  description:
    "Broadcasted to other players when an Agent performs an animation so it gets properly replicated.",
};
