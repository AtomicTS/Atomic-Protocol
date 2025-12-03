/**
 * CodeBuilderSourcePacket
 * Packet ID: 178
 * This is EDU exclusive, used in getInterface() of WebviewSystem
 */

export interface CodeBuilderSourcePacket {
  operation: "none" | "get" | "set" | "reset";
  category: "none" | "code_status" | "instantiation";
  code_status:
    | "none"
    | "not_started"
    | "in_progress"
    | "paused"
    | "error"
    | "succeeded";
}

export const CodeBuilderSourcePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 178,
    name: "code_builder_source",
    description:
      "This is EDU exclusive, used in getInterface() of WebviewSystem",
  };
