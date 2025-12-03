/**
 * ScriptCustomEventPacket
 * Unknown packet ID
 * No description
 */

export interface ScriptCustomEventPacket {
  event_name: string;
  event_data: string;
}

export const ScriptCustomEventPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "script_custom_event",
    description: undefined,
  };
