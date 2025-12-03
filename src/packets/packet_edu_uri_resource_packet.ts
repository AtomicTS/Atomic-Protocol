/**
 * EduUriResourcePacketPacket
 * Unknown packet ID
 * No description
 */

export interface EduUriResourcePacketPacket {
  resource: EducationSharedResourceURI;
}

export interface EducationSharedResourceURI {
  button_name: string;
  link_uri: string;
}

export const EduUriResourcePacketPacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "edu_uri_resource_packet",
    description: undefined,
  };
