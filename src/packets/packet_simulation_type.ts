/**
 * SimulationTypePacket
 * Packet ID: 168
 * Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)
 */

export interface SimulationTypePacket {
  type: "game" | "editor" | "test" | "invalid";
}

export const SimulationTypePacketInfo: import("./metadata").PacketMetadata = {
  id: 168,
  name: "simulation_type",
  description:
    "Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)",
};
