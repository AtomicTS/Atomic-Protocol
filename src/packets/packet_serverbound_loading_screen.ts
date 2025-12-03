/**
 * ServerboundLoadingScreenPacket
 * Packet ID: 312
 * Sent from the client to the server to message to the server about the state of the loading screen.
 */

export interface ServerboundLoadingScreenPacket {
  type: number;
  loading_screen_id: number | null;
}

export const ServerboundLoadingScreenPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 312,
    name: "serverbound_loading_screen",
    description:
      "Sent from the client to the server to message to the server about the state of the loading screen.",
  };
