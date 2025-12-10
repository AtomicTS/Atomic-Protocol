/**
 * AvailableCommandsPacket
 * Unknown packet ID
 * No description
 */

export interface AvailableCommandsPacket {
  values_len: number;
  _enum_type: any;
  enum_values: string[];
  chained_subcommand_values: string[];
  suffixes: string[];
  enums: { name: string; values: number[] }[];
  chained_subcommands: {
    name: string;
    values: { index: number; value: number }[];
  }[];
  command_data: {
    name: string;
    description: string;
    flags: number;
    permission_level: string;
    alias: number;
    chained_subcommand_offsets: number[];
    overloads: {
      chaining: boolean;
      parameters: {
        parameter_name: string;
        symbol: number;
        optional: boolean;
        options: CommandFlags;
      }[];
    }[];
  }[];
  dynamic_enums: { name: string; values: string[] }[];
  enum_constraints: {
    value_index: number;
    enum_index: number;
    constraints: {
      constraint:
        | "cheats_enabled"
        | "operator_permissions"
        | "host_permissions";
    }[];
  }[];
}

export type CommandFlags = any;

export const AvailableCommandsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "available_commands",
    description: undefined,
  };
