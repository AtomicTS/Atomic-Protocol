/**
 * UpdateSoftEnumPacket
 * Packet ID: 114
 * This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)
 */

export interface UpdateSoftEnumPacket {
  enum_type: string;
  options: string[];
  action_type: "add" | "remove" | "update";
}

export const UpdateSoftEnumPacketInfo: import("./metadata").PacketMetadata = {
  id: 114,
  name: "update_soft_enum",
  description:
    "This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)",
};
