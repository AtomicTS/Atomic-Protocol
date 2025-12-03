/**
 * CommandBlockUpdatePacket
 * Unknown packet ID
 * No description
 */

export interface CommandBlockUpdatePacket {
  is_block: boolean;
  payload:
    | {
        is_block: "true";
        position: BlockCoordinates;
        mode: "impulse" | "repeat" | "chain";
        needs_redstone: boolean;
        conditional: boolean;
      }
    | { is_block: "false"; minecart_entity_runtime_id: Varint64 };
  command: string;
  last_output: string;
  name: string;
  filtered_name: string;
  should_track_output: boolean;
  tick_delay: number;
  execute_on_first_tick: boolean;
}

export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export type Varint64 = any;

export const CommandBlockUpdatePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "command_block_update",
    description: undefined,
  };
