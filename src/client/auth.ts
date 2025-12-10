import { Authflow } from "prismarine-auth";
import { config } from "../config/config";
import { ClientOptions, Token } from "../types";
import { Errors } from "../utils/errors";
import { Logger } from "../utils/logger";
import { Client } from "./client";

export enum AuthenticationType {
    Full = 0,
    Guest = 1,
    SelfSigned = 2
}
export const realmAuth = async (options: ClientOptions) => {
    return new Promise(async (resolve, reject) => {
        try {
            //Conditional auth token acquisition
            const authflow = options.authflow as any;
            const usesAuthflow = typeof authflow?.getXboxToken === "function";
            const auth = usesAuthflow
                ? await authflow.getXboxToken(config.parties.realm, true)
                : authflow.realms ?? authflow;
            if (!auth?.XSTSToken || !auth?.userHash) throw Errors.noTokens();

            if (options.inviteCode) await acceptInvite(options.inviteCode!);
            await OptIn(options);

            const getAddress = async (realmId: number) => {
                Logger.debug(`Fetching realm: ${realmId}'s address`, options.debug);

                const fetchResponse = await fetch(config.endpoints.address(realmId), {
                    method: "GET",
                    headers: {
                        Authorization: `XBL3.0 x=${auth.userHash};${auth.XSTSToken}`,
                        ...config.realmHeaders
                    }
                });

                if (!fetchResponse.ok) throw Errors.noRealm(fetchResponse.status, fetchResponse.statusText);

                const json = await fetchResponse.json();

                if (json.networkProtocol === "NETHERNET") {
                    return json.address;
                }

                const [host, port] = json?.address?.split(":");
                return { host, port };
            };

            async function acceptInvite(code: string) {
                const fetchResponse = await fetch(config.endpoints.acceptInvite(code), {
                    method: "POST",
                    headers: {
                        Authorization: `XBL3.0 x=${auth.userHash};${auth.XSTSToken}`,
                        ...config.realmHeaders
                    }
                });

                if (!fetchResponse.ok) throw Errors.inviteFailed();
            }

            const address = await getAddress(options.realmId!);
            if (!address) return; //Added return before deconstruct | Better Error Catching

            if (address?.host && address?.port) {
                const { host, port } = address;
                if (!host || !port) throw Errors.noRealm(404, "Not found");

                options.host = host;
                options.port = Number(port);
                options.transport = "raknet";
                resolve(null);
            } else {
                options.networkId = address;
                options.useSignalling = true;
                options.transport = "nethernet";
                resolve(null);
            }
        } catch (e) {
            console.log(e);
            reject(e);
        };
    });
};


interface Profile {
    name: string;
    uuid: string;
    xuid: number;
}

export const authenticate = async (client: Client, options: ClientOptions) => {
    try {
        const authflow = options.authflow as any;
        const usesAuthflow = typeof authflow?.getMinecraftBedrockToken === "function";

        let chains: any;

        if (usesAuthflow) {
            //@ts-ignore
            chains = chains = await authflow.getMinecraftBedrockToken(client.clientX509).catch((e: any) => {
                throw e;
            });
        } else {
            const response = await fetch(config.endpoints.authenticate, {
                method: "POST",
                headers: {
                    ...config.realmHeaders,
                    Authorization: `XBL3.0 x=${authflow.bedrock.userHash};${authflow.bedrock.XSTSToken}`
                },
                //@ts-ignore
                body: JSON.stringify({ clientX509: client.clientX509 })
            });

            if (!response.ok) throw Errors.noTokens();
        }

        const jwt = chains[1];
        const [_, payload, __] = jwt.split('.').map((k: any) => Buffer.from(k, 'base64'));
        const xboxProfile = JSON.parse(String(payload));

        const profile: Profile = {
            name: xboxProfile?.extraData?.displayName || 'Atomic Client',
            uuid: xboxProfile?.extraData?.identity || "dfcf5ca-206c-404a-aec4-f59fff264c9b",
            xuid: xboxProfile?.extraData?.XUID || 0
        };

        return postAuthenticate(client, profile, chains);
    } catch (e) {
        console.error(e);
        client.emit('error', e);
    }
};

function postAuthenticate(client: any, profile: Profile, chains: string) {
    client.profile = profile;
    client.username = profile.name;
    client.accessToken = chains;
    client.emit('session');
}

/**
 * Opts the player into realm story features for the given realm
 * @param options Contains the authflow/token data and the target `realmId`.
 * @returns Promise with request outcome, including status code and optional response body when failed.
 */
export async function OptIn(options: any) {
    //Conditional auth token acquisition
    const authflow = options.authflow as any;
    const usesAuthflow = typeof authflow?.getXboxToken === "function";
    const auth = usesAuthflow
        ? await authflow.getXboxToken(config.parties.realm, true)
        : authflow.realms ?? { ...(options.authflow as Token) };
    if (!auth.XSTSToken || !auth.userHash) throw Errors.noTokens();
    let attempt = 0;

    while (true) {
        attempt++;

        const ctrl = new AbortController();
        const to = setTimeout(() => ctrl.abort(), 10 * 1000);
        let resp: Response;
        try {
            resp = await fetch(`https://bedrock.frontendlegacy.realms.minecraft-services.net/worlds/${options.realmId}/stories/settings`, {
                method: "POST",
                headers: {
                    ...config.realmHeaders,
                    Authorization: `XBL3.0 x=${auth.userHash};${auth.XSTSToken}`,
                },
                body: JSON.stringify({
                    autostories: true,
                    coordinates: false,
                    notifications: false,
                    optInRequired: true,
                    playerOptIn: "OPT_IN",
                    realmOptIn: "OPT_IN",
                    timeline: true,
                }),
                signal: ctrl.signal
            });
        } catch (err: any) {
            clearTimeout(to);
            if (err?.name === "AbortError" && attempt <= 2 + 1) {
                await new Promise(r => setTimeout(r, 250 + (attempt - 1) * (attempt - 1) * 250));
                continue;
            }
            throw err;
        } finally {
            clearTimeout(to);
        }

        if (resp.status === 204) return { ok: true, status: 204 };
        if ((resp.status === 429 || (resp.status >= 500 && resp.status <= 599)) && attempt <= 2 + 1) {
            await new Promise(r => setTimeout(r, 250 + (attempt - 1) * (attempt - 1) * 250));
            continue;
        }

        let text: string | undefined;
        try { text = await resp.text(); } catch { }
        return { ok: false, status: resp.status, body: text };
    }
}
