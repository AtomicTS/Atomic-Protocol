/**
 * SetLastHurtByPacket
 * Packet ID: 96
 * Any time a player is hit, the id of the last mob that attacked them is sent to the client
 */

export interface SetLastHurtByPacket {
  entity_type: number;
}

export const SetLastHurtByPacketInfo: import("./metadata").PacketMetadata = {
  id: 96,
  name: "set_last_hurt_by",
  description:
    "Any time a player is hit, the id of the last mob that attacked them is sent to the client",
};
