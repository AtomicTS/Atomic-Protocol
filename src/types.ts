
//@ts-ignore
import { Authflow } from "prismarine-auth";

//Consts

export const clientStatus = {
    Disconnected: 0,
    Connecting: 1,
    Authenticating: 2,
    Initializing: 3,
    Initialized: 4
};

export const PUBLIC_KEY = 'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAECRXueJeTDqNRRgJi/vlRufByu/2G0i2Ebt6YMar5QX/R0DIIyrJMcUpruK4QveTfJSTp3Shlq4Gk34cD/4GUWwkv0DVuzeuB+tXija7HBxii03NHDbPAD0AKnLr2wdAp';

//Interfaces

export interface Token {
    userXUID: string;
    userHash: string;
    XSTSToken: string;
    expiresOn: string;
}

export interface Tokens {
    realms: Token;
    bedrock: Token;
    mcToken: {
        token: string;
        expiresOn: string;
    };
}

export interface ClientOptions {
    host?: string;
    port?: number;
    realmId?: number;
    inviteCode?: string;
    authflow: Authflow | Tokens;

    protocolVersion?: number;
    version?: string;

    debug?: boolean;
    connectTimeout?: number;
    skinData?: any;

    delayedInit?: boolean;
    followPort?: boolean;
    viewDistance?: number;
    skipPing?: boolean;
    offline?: boolean;

    packets?: string[];
    ignoredPackets?: number[];
    telemetry?: boolean;

    username?: string;
    profilesFolder?: string;

    //Nethernet
    networkId?: bigint;
    transport?: string;
    useSignalling?: boolean;
}

export enum CompressionAlgorithm {
    None = "none",
    Zlib = "zlib",
    Gzip = "gzip"
}