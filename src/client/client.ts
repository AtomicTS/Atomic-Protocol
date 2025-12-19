import { Events } from "atomic-codec";
import { PacketViolationWarningPacket } from "atomic-codec/dist/packets/packet_violation_warning";
import { config } from "../config/config";
import { keyExchange } from "../handshake/keyExchange";
import login from "../handshake/login";
import loginVerify from "../handshake/loginVerify";
import { NethernetClient } from "../nethernet";
import { RaknetClient } from "../rak";
import { createDeserializer, createSerializer } from "../transforms/serializer";
import { ClientOptions, clientStatus } from "../types";
import { Errors } from "../utils/errors";
import { Logger } from "../utils/logger";
import { sendTelemetry } from "../utils/telemetry";
import { authenticate, AuthenticationType, createOfflineSession } from "./auth";
import { Connection } from "./connection";

export class Client extends Connection {
    public features: any;
    public options: ClientOptions;
    public startGameData: any;
    public clientRuntimeId: any;
    public tick = 0n;

    public connectTimeout!: NodeJS.Timeout;
    public viewDistance = 10;
    public accessToken!: string;
    public clientIdentityChain!: string;
    public clientUserChain!: string;
    public nethernet: any;
    public networkSettingsRequested = false;

    override on<K extends keyof Events>(event: K, listener: Events[K]): this {
        return super.on(event, listener);
    }

    override once<K extends keyof Events>(event: K, listener: Events[K]): this {
        return super.once(event, listener);
    }

    constructor(options: ClientOptions) {
        super();
        this.options = options;

        this.startGameData = {};
        this.clientRuntimeId = null;
        this.viewDistance = options.viewDistance ?? 10;

        if (this.options.transport === "nethernet") {
            this.nethernet = {};
        }

        if (!options.delayedInit) {
            this.init();
        };
    };

    public setStatus(value: number) {
        Logger.debug(`Status Update: ${this.status} -> ${value}`, this.options.debug);
        this.status = value;
    }

    public connect() {
        if (!this.connection) throw new Error('Connect not currently allowed');
        this.once('session', this._connect);

        if (this.options.offline) {
            Logger.debug("Offline Mode Enabled; Not Authenticating", config.debug);
            createOfflineSession(this, this.options);
        } else {
            authenticate(this, this.options);
        }

        this.sendQ = [];
        this.loop = setInterval(this.onTick, 20);
    };

    public disconnect(reason: string, hide: any = false) {
        if (this.status === clientStatus.Disconnected) return;
        this.write('disconnect', {
            hide_disconnect_screen: hide,
            message: reason,
            filtered_message: ''
        });
        this.close();
    };

    public close() {
        if (this.status !== clientStatus.Disconnected) this.emit('close');
        clearInterval(this.loop);
        clearTimeout(this.connectTimeout);
        this.sendQ = [];
        this.connection?.close();
        //this.removeAllListeners();
        this.setStatus(clientStatus.Disconnected);
        this.networkSettingsRequested = false;
    };

    public init() {
        if (this.options.protocolVersion !== config.protocol) throw Errors.invalidProtocol(this.options.protocolVersion);
        this.serializer = createSerializer();
        this.deserializer = createDeserializer();

        keyExchange(this);
        login(this, this.options);
        loginVerify(this, this.options);

        const host = this.options.host;
        const port = this.options.port;

        const networkId = this.options.networkId;

        if (this.options.transport === 'nethernet') {
            this.connection = new NethernetClient({ networkId });
            this.batchHeader = null;
            this.disableEncryption = true;
        } else if (this.options.transport === 'raknet') {
            this.connection = new RaknetClient({ useWorkers: true, host, port });
            this.batchHeader = 0xfe;
            this.disableEncryption = false;
        }

        this.emit('connect_allowed');
    };

    get entityId() {
        return this.startGameData.runtime_entity_id;
    };

    private onEncapsulated = (encapsulated: any, _inetAddr: any) => {
        const buffer = Buffer.from(encapsulated.buffer);
        process.nextTick(() => this.handle(buffer));
    };

    public readPacket(packet: any, buf: any) {
        if (config.ignoredPackets.includes(packet[0])
            || this.options.ignoredPackets?.includes(packet[0])) return;

        // if (packet[0] === 79) Logger.warn(buf.toString("hex"));
        Logger.debug(`Received Packet: ${packet[0]}`, config.debug);
        const des = this.deserializer.parsePacketBuffer(packet) as unknown as { data: { name: string, params: any; }; };
        const pakData = { name: des.data.name, params: des.data.params };

        //Startup
        switch (des.data.name) {
            case 'server_to_client_handshake':
                this.emit('client.server_handshake', des.data.params);
                break;
            case "network_settings": {
                const compressionAlgorithm = pakData.params.compression_algorithm ?? 'deflate';
                this.compressionAlgorithm = compressionAlgorithm;
                this.compressionHeader = compressionAlgorithm === 'snappy' ? 1 : 0;
                this.compressionThreshold = pakData.params.compression_threshold ?? this.compressionThreshold;
                this.compressionReady = true;
                if (this.status === clientStatus.Connecting) this.sendLogin();
                break;
            }
            case 'disconnect':
                this.emit(des.data.name, des.data.params);
                this.onDisconnectRequest(des.data.params);
                break;
            case 'start_game':
                this.startGameData = pakData.params;
                break;
            case 'play_status':
                if (this.status === clientStatus.Authenticating) {
                    this.emit('join');
                    this.setStatus(clientStatus.Initializing);
                }
                this.onPlayStatus(pakData.params);
                break;
            case "packet_violation_warning":
                const violation = pakData.params as PacketViolationWarningPacket;
                Logger.debug(`Packet Violation Warning: id=${violation.packet_id}; severity=${violation.severity}; type=${violation.violation_type}; reason=${violation.reason}`, config.debug);
                sendTelemetry({
                    message: `Packet Violation Warning: id=${violation.packet_id}; severity=${violation.severity}; type=${violation.violation_type}; reason=${violation.reason}`,
                    name: "Packet Violation"
                });
                break;
            default:
                if (this.status !== clientStatus.Initializing && this.status !== clientStatus.Initialized) {
                    console.error(`Can't accept ${des.data.name}, client not authenticated yet : ${this.status}`);
                    break;
                }
        }

        //Required Client Emits
        switch (des.data.name) {
            case "resource_packs_info": this.emit("resource_packs_info", des.data.params); break;
            case "resource_pack_stack": this.emit("resource_pack_stack", des.data.params); break;
        }

        // 1. Emit all packets if array is ommitted
        // 2. Emit only specific packets specified in the array
        if (!this.options.packets?.length) {
            this.emit(des.data.name, des.data.params);
        } else if (this.options.packets?.includes(des.data.name)) {
            this.emit(des.data.name, des.data.params);
        }
    };

    _connect = async () => {
        this.connection.onConnected = () => {
            this.setStatus(clientStatus.Connecting);
            if (!this.networkSettingsRequested) {
                this.networkSettingsRequested = true;
                this.queue('request_network_settings', { client_protocol: Number(this.options.protocolVersion) });
            }
        };
        this.connection.onCloseConnection = (reason: any) => {
            Logger.debug(`Server closed connection: ${reason}`, this.status === clientStatus.Disconnected && config.debug);
            // if (!wasManual && this.autoReconnect) {
            //     const delay = Math.min(30000, 2000 * Math.max(1, ++this.reconnectAttempts));
            //     Logger.debug(`Scheduling Nethernet reconnect in ${delay}ms`);
            //     this.scheduleReconnect(delay);
            // }
        };

        this.connection.onEncapsulated = this.onEncapsulated;

        this.connection.connect();
        this.connectTimeout = setTimeout(() => {
            if (this.status === clientStatus.Disconnected) {
                this.connection.close();
                this.emit('error', Error('connect timed out'));
            };
        }, this.options.connectTimeout || config.connectTimeout);
    };

    async sendLogin() {
        this.setStatus(clientStatus.Authenticating);

        //@ts-ignore
        this.createClientChain(null, this.options.offline);
        const token = await this.getMultiplayerSessionToken();

        // Removed "MC-Data Feature" - Unnecessary Backwards Compatibility
        const authType = this.options.offline ? AuthenticationType.SelfSigned : AuthenticationType.Full;
        const accessTokens = Array.isArray(this.accessToken) ? this.accessToken : [this.accessToken];
        const chain = [this.clientIdentityChain, ...accessTokens];

        const encodedLoginPayload = JSON.stringify({
            AuthenticationType: authType,
            Token: token ?? "",
            Certificate: JSON.stringify({ chain })
        });

        //@ts-ignore
        this.write('login', {
            protocol_version: config.protocol,
            tokens: {
                identity: encodedLoginPayload,
                client: this.clientUserChain
            }
        });
    };


    onDisconnectRequest(packet: any) {
        this.emit('kick', packet);
        this.close();
    };

    onPlayStatus(statusPacket: { status: string; }) {
        if (this.status === clientStatus.Initializing && statusPacket.status === 'player_spawn') {
            this.setStatus(clientStatus.Initialized);
            this.emit("spawn");
            if (this.entityId) this.on('start_game', () => this.write('set_local_player_as_initialized', { runtime_entity_id: this.entityId }));
            else this.write('set_local_player_as_initialized', { runtime_entity_id: this.entityId });
        };
    };

    async getMultiplayerSessionToken() {
        try {
            const authflow = this.options.authflow as any;
            const usesAuthflow = typeof authflow?.getXboxToken === "function";
            const auth = usesAuthflow
                ? (await authflow.getMinecraftBedrockServicesToken({ version: config.minecraftVersion })).mcToken
                : authflow.mcToken.token ?? authflow;

            const response = await fetch(
                "https://authorization.franchise.minecraft-services.net/api/v1.0/multiplayer/session/start",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: auth,
                        "Accept-Encoding": "identity",
                    },
                    body: JSON.stringify({
                        //@ts-ignore
                        publicKey: this.clientX509,
                    }),
                },
            );

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Multiplayer session start failed: ${response.status} ${response.statusText} - ${text}`,);
            }

            const json = (await response.json()) as { result: { signedToken: string; }; };
            return json.result.signedToken;
        } catch (error) {
            Logger.error(`Error while getting Multiplayer Session Token: ${error instanceof Error ? error.message : String(error)}`,);
        }
    }
};
