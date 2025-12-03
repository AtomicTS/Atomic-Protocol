/**
 * RemoveObjectivePacket
 * Packet ID: 106
 * Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.
 */

export interface RemoveObjectivePacket {
  objective_name: string;
}

export const RemoveObjectivePacketInfo: import("./metadata").PacketMetadata = {
  id: 106,
  name: "remove_objective",
  description:
    "Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.",
};
