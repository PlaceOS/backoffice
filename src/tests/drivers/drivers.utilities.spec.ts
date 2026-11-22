/** @vitest-environment node */
import { createClient, type Client } from '@placeos/ts-client';
import { PlaceDriverRole } from '@placeos/ts-client/compat';
import { describe, expect, it, vi } from 'vitest';
import {
    generateDriverFormModel,
    recompileDriver,
} from '../../app/drivers/drivers.utilities';

const api = vi.hoisted(() => ({ client: null as Client | null }));
vi.mock('../../app/common/placeos', () => ({ apiClient: () => api.client }));

/** A client whose server answers each request with this text */
function textServer(status: number, text: string) {
    return createClient({
        base_url: '',
        auth: { kind: 'none' },
        fetch: async () =>
            new Response(text, {
                status,
                headers: { 'content-type': 'text/plain' },
            }),
    });
}

describe('recompileDriver', () => {
    it('gives the text of the server on success', async () => {
        api.client = textServer(200, 'OK');
        await expect(recompileDriver('driver-1')).resolves.toBe('OK');
    });

    it('rejects with the first 64 KB of a long compiler output, without a stall', async () => {
        const chunk = new TextEncoder().encode('x'.repeat(32 * 1024));
        api.client = createClient({
            base_url: '',
            auth: { kind: 'none' },
            fetch: async () => {
                let sent = 0;
                // Four chunks of 32 KB, as a server streams a long build log
                const body = new ReadableStream<Uint8Array>({
                    pull: (controller) => {
                        if (sent++ < 4) controller.enqueue(chunk);
                        else controller.close();
                    },
                });
                return new Response(body, {
                    status: 500,
                    headers: { 'content-type': 'text/plain' },
                });
            },
        });
        const error = await recompileDriver('driver-1').catch((e) => e);
        expect((error as Error).message).toBe('x'.repeat(64 * 1024));
    });

    it('rejects with the compiler output of a failed build', async () => {
        api.client = textServer(500, 'error: undefined method `power`');
        await expect(recompileDriver('driver-1')).rejects.toThrow(
            'error: undefined method `power`',
        );
    });
});

describe('drivers.utilities', () => {
    describe('generateDriverFormModel', () => {
        it('returns defaults', () => {
            expect(generateDriverFormModel()).toEqual({
                id: '',
                repository_id: '',
                file_name: '',
                commit: '',
                name: '',
                role: PlaceDriverRole.Logic,
                module_name: '',
                default_uri: '',
                default_port: 1,
                alert_level: 'medium',
                class_name: '',
                description: '',
                ignore_connected: false,
                settings: '',
            });
        });

        it('populates values from a driver', () => {
            const model = generateDriverFormModel({
                id: 'driver-1',
                repository_id: 'repo-1',
                file_name: 'driver.rb',
                commit: 'abc123',
                name: 'Display Driver',
                role: PlaceDriverRole.Device,
                module_name: 'Display',
                default_uri: 'tcp://1.2.3.4:23',
                default_port: 23,
                alert_level: 'high',
                class_name: 'DisplayDriver',
                description: 'Controls displays',
                ignore_connected: true,
            } as any);

            expect(model).toMatchObject({
                id: 'driver-1',
                repository_id: 'repo-1',
                role: PlaceDriverRole.Device,
                module_name: 'Display',
                default_port: 23,
                ignore_connected: true,
            });
        });
    });
});
