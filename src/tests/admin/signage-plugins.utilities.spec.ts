import type { SignagePlugin } from '@placeos/ts-client';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
    generateSignagePluginFormModel,
    probeSignagePlugin,
} from '../../app/admin/signage-plugins/signage-plugins.utilities';

describe('signage-plugins.utilities', () => {
    describe('generateSignagePluginFormModel', () => {
        it('defaults to a plugin', () => {
            expect(generateSignagePluginFormModel().plugin_type).toBe('plugin');
        });

        it('preserves the plugin type', () => {
            const plugin = { plugin_type: 'widget' } as SignagePlugin;

            expect(generateSignagePluginFormModel(plugin).plugin_type).toBe(
                'widget',
            );
        });
    });

    describe('probeSignagePlugin', () => {
        const loaded = {
            plugin: { name: 'weather', version: '1.0.0', type: 'widget' },
            capabilities: {},
            config_schema: {},
        };

        /** Post a message to the window as if it came from the probe iframe */
        const reply = (
            data: unknown,
            source = document.querySelector('iframe')?.contentWindow,
        ) =>
            window.dispatchEvent(
                new MessageEvent('message', {
                    data,
                    origin: 'null',
                    source,
                }),
            );

        afterEach(() => vi.useRealTimers());

        it('resolves the loaded payload and removes the iframe', async () => {
            const result = probeSignagePlugin('/plugins/weather.html');
            reply({
                api: 'signage-plugin/v1',
                type: 'loaded',
                payload: loaded,
            });

            await expect(result).resolves.toEqual(loaded);
            expect(document.querySelector('iframe')).toBeNull();
        });

        it('defaults an unknown plugin type to plugin', async () => {
            const result = probeSignagePlugin('/plugins/weather.html');
            reply({
                api: 'signage-plugin/v1',
                type: 'loaded',
                payload: { ...loaded, plugin: { name: 'old', version: '1' } },
            });

            await expect(result).resolves.toMatchObject({
                plugin: { name: 'old', type: 'plugin' },
            });
        });

        it('resolves null when the plugin has no name', async () => {
            const result = probeSignagePlugin('/plugins/weather.html');
            reply({
                api: 'signage-plugin/v1',
                type: 'loaded',
                payload: { ...loaded, plugin: { name: ' ', version: '1' } },
            });

            await expect(result).resolves.toBeNull();
        });

        it('ignores messages from other windows', async () => {
            vi.useFakeTimers();
            const result = probeSignagePlugin('/plugins/weather.html', {
                timeout_ms: 100,
            });
            reply(
                { api: 'signage-plugin/v1', type: 'loaded', payload: loaded },
                window,
            );
            vi.advanceTimersByTime(100);

            await expect(result).resolves.toBeNull();
        });

        it('resolves null on a fatal error', async () => {
            const result = probeSignagePlugin('/plugins/weather.html');
            reply({
                api: 'signage-plugin/v1',
                type: 'error',
                payload: { code: 'X', message: 'X', fatal: true },
            });

            await expect(result).resolves.toBeNull();
        });

        it('resolves null when aborted', async () => {
            const controller = new AbortController();
            const result = probeSignagePlugin('/plugins/weather.html', {
                signal: controller.signal,
            });
            controller.abort();

            await expect(result).resolves.toBeNull();
            expect(document.querySelector('iframe')).toBeNull();
        });
    });
});
