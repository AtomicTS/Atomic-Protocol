import { config } from "../config/config";

interface TelemetryData {
    event: string;
    timestamp: number;
    version: string;
    protocol: number;
    rumtime: {
        node: string;
        os: string;
        arch: string;
    };
    error: {
        message: string;
        stack: string;
        name: string;
    };
    context: any;
}

export const sendTelemetry = async (err: Error, context?: object) => {
    if (!config.telemetry) return;

    const payload = {
        event: "Packet Crash",
        timestamp: Date.now(),
        protocol: config.protocol,
        version: config.minecraftVersion,
        rumtime: {
            arch: process.arch,
            node: process.version,
            os: process.platform
        },
        error: {
            message: err.message,
            name: err.name,
            stack: err.stack
        },
        context
    } as TelemetryData;

    try {
        await fetch("https://api.supernetwork.dev/atomic/telemetry", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch {
    }
};