/**
 * SetDisplayObjectivePacket
 * Packet ID: 107
 * Sent from the server for 3rd party content to display current objectives and status
 */

export interface SetDisplayObjectivePacket {
  display_slot: string;
  objective_name: string;
  display_name: string;
  criteria_name: string;
  sort_order: number;
}

export const SetDisplayObjectivePacketInfo: import("./metadata").PacketMetadata =
  {
    id: 107,
    name: "set_display_objective",
    description:
      "Sent from the server for 3rd party content to display current objectives and status",
  };
