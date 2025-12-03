/**
 * ServerboundDiagnosticsPacket
 * Packet ID: 315
 * Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).
 */

export interface ServerboundDiagnosticsPacket {
  average_frames_per_second: number;
  average_server_sim_tick_time: number;
  average_client_sim_tick_time: number;
  average_begin_frame_time: number;
  average_input_time: number;
  average_render_time: number;
  average_end_frame_time: number;
  average_remainder_time_percent: number;
  average_unaccounted_time_percent: number;
}

export const ServerboundDiagnosticsPacketInfo: import("./metadata").PacketMetadata =
  {
    id: 315,
    name: "serverbound_diagnostics",
    description:
      "Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).",
  };
