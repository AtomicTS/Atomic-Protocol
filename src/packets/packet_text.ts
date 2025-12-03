/**
 * TextPacket
 * Unknown packet ID
 * No description
 */

export interface TextPacket {
  type:
    | "raw"
    | "chat"
    | "translation"
    | "popup"
    | "jukebox_popup"
    | "tip"
    | "system"
    | "whisper"
    | "announcement"
    | "json_whisper"
    | "json"
    | "json_announcement";
  needs_translation: boolean;
  payload:
    | { type: "chat"; source_name: string; message: string }
    | { type: "whisper"; source_name: string; message: string }
    | { type: "announcement"; source_name: string; message: string }
    | { type: "raw"; message: string }
    | { type: "tip"; message: string }
    | { type: "system"; message: string }
    | { type: "json_whisper"; message: string }
    | { type: "json"; message: string }
    | { type: "json_announcement"; message: string }
    | { type: "translation"; message: string; parameters: string[] }
    | { type: "popup"; message: string; parameters: string[] }
    | { type: "jukebox_popup"; message: string; parameters: string[] };
  xuid: string;
  platform_chat_id: string;
  filtered_message: string;
}

export const TextPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "text",
  description: undefined,
};
