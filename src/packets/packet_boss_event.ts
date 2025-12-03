/**
 * BossEventPacket
 * Unknown packet ID
 * No description
 */

export interface BossEventPacket {
  boss_entity_id: number;
  type:
    | "show_bar"
    | "register_player"
    | "hide_bar"
    | "unregister_player"
    | "set_bar_progress"
    | "set_bar_title"
    | "update_properties"
    | "texture"
    | "query";
  payload:
    | {
        type: "show_bar";
        title: string;
        filtered_title: string;
        progress: number;
        screen_darkening: number;
        color: number;
        overlay: number;
      }
    | { type: "register_player"; player_id: number }
    | { type: "unregister_player"; player_id: number }
    | { type: "query"; player_id: number }
    | { type: "set_bar_progress"; progress: number }
    | { type: "set_bar_title"; title: string; filtered_title: string }
    | {
        type: "update_properties";
        screen_darkening: number;
        color: number;
        overlay: number;
      }
    | { type: "texture"; color: number; overlay: number };
}

export const BossEventPacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "boss_event",
  description: undefined,
};
