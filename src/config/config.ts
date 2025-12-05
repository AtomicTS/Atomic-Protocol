
export const config = {
    debug: false,
    protocol: 860,
    minecraftVersion: "1.21.124",
    deviceModel: "AtomicTS",
    connectTimeout: 9000,
    autoInitPlayer: true,
    ignoredPackets: [
        0x91
    ],

    parties: {
        xbox: "http://xboxlive.com",
        realm: "https://pocket.realms.minecraft.net/"
    },
    realmHeaders: {
        "Cache-Control": "no-cache",
        Charset: "utf-8",
        "Content-Type": "application/json",
        "Client-Version": "1.21.124",
        "User-Agent": "MCPE/UWP",
        "Accept-Language": "en-US",
        "Accept-Encoding": "gzip, deflate, br"
    },
    endpoints: {
        worlds: "https://pocket.realms.minecraft.net/worlds",
        address: (realmId: number) => `https://pocket.realms.minecraft.net/worlds/${realmId}/join`,
        acceptInvite: (code: string) => `https://bedrock.frontendlegacy.realms.minecraft-services.net/invites/v1/link/accept/${code}`
    }
};

export const defaultOptions = {
    transport: "raknet",
    version: config.minecraftVersion,
    autoInitPlayer: true,
    connectTimeout: 9000,
    packets: [],

};
