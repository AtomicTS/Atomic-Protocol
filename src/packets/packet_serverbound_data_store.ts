/**
 * ServerboundDataStorePacket
 * Unknown packet ID
 * No description
 */

export interface ServerboundDataStorePacket {
  data_store_name: string;
  property: string;
  path: string;
  data_type: number;
  data:
    | { data_type: "0"; value: number }
    | { data_type: "1"; value: boolean }
    | { data_type: "2"; value: string };
  update_count: I32le;
}

export const ServerboundDataStorePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "serverbound_data_store",
    description: undefined,
  };
