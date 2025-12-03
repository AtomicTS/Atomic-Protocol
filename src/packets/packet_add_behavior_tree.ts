/**
 * AddBehaviorTreePacket
 * Packet ID: 89
 * Add Behavior Tree
 */

export interface AddBehaviorTreePacket {
  behaviortree: string;
}

export const AddBehaviorTreePacketInfo: import("./metadata").PacketMetadata = {
  id: 89,
  name: "add_behavior_tree",
  description: "Add Behavior Tree",
};
