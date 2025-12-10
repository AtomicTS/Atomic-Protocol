/**
 * TextPacket
 * Unknown packet ID
 * No description
 */

export interface TextPacket {
  needs_translation: boolean;
  category: "message_only" | "author_and_message" | "message_and_params";
  payload:
    | {
        category: "message_only";
        name_raw: string;
        name_tip: string;
        name_system: string;
        name_object_whisper: string;
        name_object_announcement: string;
        name_object: string;
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
        message: string;
      }
    | {
        category: "author_and_message";
        name_chat: string;
        name_whisper: string;
        name_announcement: string;
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
        source_name: string;
        message: string;
      }
    | {
        category: "message_and_params";
        name_translate: string;
        name_popup: string;
        name_jukebox_popup: string;
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
        message: string;
        parameters: string[];
      };
  xuid: string;
  platform_chat_id: string;
  filtered_message: string | null;
}

export const TextPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "text",
  description: undefined,
};
