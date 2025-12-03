/**
 * FeatureRegistryPacket
 * Packet ID: 191
 * This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.
 */

export interface FeatureRegistryPacket {
  features: { name: string; options: string }[];
}

export const FeatureRegistryPacketInfo: import("./metadata").PacketMetadata = {
  id: 191,
  name: "feature_registry",
  description:
    "This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.",
};
