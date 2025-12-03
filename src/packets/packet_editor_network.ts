/**
 * EditorNetworkPacket
 * Packet ID: 190
 * General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.
 */

export interface EditorNetworkPacket {
  route_to_manager: boolean;
  payload: Nbt;
}

export type Nbt = any;

export const EditorNetworkPacketInfo: import("./metadata").PacketMetadata = {
  id: 190,
  name: "editor_network",
  description:
    "General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.",
};
