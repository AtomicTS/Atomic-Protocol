import { Events } from 'atomic-codec';
import { EventEmitter } from 'events';
import { config } from '../config/config';
import { NethernetClient } from '../nethernet';
import { RaknetClient } from '../rak';
import { createDecryptor, createEncryptor } from '../transforms/encryption';
import Framer from '../transforms/framer';
import { Codec, createDeserializer, createSerializer } from "../transforms/serializer";
import { clientStatus, CompressionAlgorithm } from '../types';
import { Logger } from "../utils/logger";

export class Connection extends EventEmitter {
    // Typed event helpers for packet/connection events.
    on<K extends keyof Events & (string | symbol)>(event: K, listener: Events[K]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.on(event, listener);
    }

    once<K extends keyof Events & (string | symbol)>(event: K, listener: Events[K]): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.once(event, listener);
    }

    emit<K extends keyof Events & (string | symbol)>(event: K, ...args: Parameters<Events[K]>): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: string | symbol, ...args: any[]): boolean {
        return super.emit(event, ...args);
    }

    public connection!: RaknetClient | NethernetClient;

    public encryptionEnabled = false;
    public disableEncryption = false;

    public compressionReady = false;
    public compressionAlgorithm: CompressionAlgorithm = CompressionAlgorithm.None;
    public compressionThreshold = 512;
    public compressionHeader = 0;
    public compressionLevel = 7;

    public batchHeader: number | null = 0xfe;
    public framer: Framer;

    decrypt: any;
    encrypt: any;

    #status = clientStatus.Disconnected;
    sendQ: Buffer[] = [];
    loop!: NodeJS.Timeout;
    serializer: Codec;
    deserializer: Codec;

    constructor() {
        super();
        this.serializer = createSerializer();
        this.deserializer = createDeserializer();
        this.framer = new Framer(this);
    };

    get status() {
        return this.#status;
    };

    set status(val: number) {
        this.emit('status', val);
        this.#status = val;
    };

    startEncryption(iv: any) {
        if (this.disableEncryption) return;
        this.encryptionEnabled = true;
        //@ts-ignore
        Logger.debug(`Started Encryption ${JSON.stringify({ iv: Array.from(iv || []), shared: !!this.sharedSecret })}`, config.debug);
        this.decrypt = createDecryptor(this, iv);
        this.encrypt = createEncryptor(this, iv);
    };

    write(name: any, params: any) {
        if (name === "command_request") {
            params ??= {};

            params.command ??= "";
            params.origin ??= {};

            params.origin.origin ??= "player";
            params.origin.uuid ??= "00000000-0000-0000-0000-000000000000";
            params.origin.request_id ??= "req";
            params.origin.player_entity_id ??= 1n;

            params.internal ??= false;
            params.version ??= "latest";
        }

        this.framer.reset(this);
        const packet = this.serializer.createPacketBuffer({ name, params });
        this.framer.addEncodedPacket(packet);

        if (this.encryptionEnabled) this.sendEncryptedBatch(this.framer);
        else this.sendDecryptedBatch(this.framer);
    };

    queue(name: any, params: any) {
        const packet = this.serializer.createPacketBuffer({ name, params });
        if (name === 'level_chunk') return; //The client does not need the world data...
        this.sendQ.push(packet);
    };

    _tick() {
        if (this.sendQ.length) {
            this.framer.reset(this);
            this.framer.addEncodedPackets(this.sendQ);
            this.sendQ = [];

            if (this.encryptionEnabled) this.sendEncryptedBatch(this.framer);
            else this.sendDecryptedBatch(this.framer);
        };
    };

    onTick = this._tick.bind(this);

    sendBuffer(buffer: Buffer, immediate?: boolean) {
        if (!immediate) return this.sendQ.push(buffer);
        this.framer.reset(this);
        this.framer.addEncodedPacket(buffer);
        if (this.encryptionEnabled) this.sendEncryptedBatch(this.framer);
        else this.sendDecryptedBatch(this.framer);
    };

    sendEncryptedBatch(batch: Framer) {
        const buf = batch.getBuffer();
        this.encrypt(buf);
    };

    sendDecryptedBatch(batch: Framer) {
        this.sendPackets(batch.encode(), true);
    };

    sendPackets(buffer: Buffer, immediate: boolean) {
        if (this?.connection?.connected === false || this.status === clientStatus.Disconnected) return;
        try {
            this.connection.sendReliable(buffer, immediate);
        } catch (e) {
            Logger.debug(`RakNet send failed: ${(e as Error).message}`, config.debug);
            this.connection?.close();
        };
    };

    onEncryptedPacket = (buf: Buffer) => {
        const packet = this.batchHeader ? Buffer.concat([Buffer.from([this.batchHeader]), buf]) : buf;
        this.sendPackets(packet, false);
    };

    onDecryptedPacket = (buf: Buffer) => {
        try {
            const packets = Framer.getPackets(buf, { label: "onDecryptedPacket" });
            packets.forEach((packet) => {
                //@ts-ignore
                this.readPacket(packet);
            });
        } catch (err) {
            Logger.debug(`[Framer] failed to decode decrypted batch length=${buf.byteLength}`, config.debug);
            this.emit("error", err as Error);
        }
    };

    handle(buffer: Buffer) {
        if (!this.batchHeader || buffer[0] === this.batchHeader) {
            if (this.encryptionEnabled) this.decrypt(buffer.slice(1));
            else {
                try {
                    const packets = Framer.decode(this, buffer);
                    for (let packet of packets) {
                        //@ts-ignore
                        this.readPacket(packet);
                    }
                } catch (err) {
                    Logger.debug(`[Framer] decode error batchLength=${buffer.byteLength} compression=${this.compressionAlgorithm} ready=${this.compressionReady}`, config.debug);
                    this.emit("error", err as Error);
                }
            };
        } else {
            this.emit("error", new Error(`bad packet header` + buffer[0]));
            (this as any).close?.();
            return;
        };
    };
};
