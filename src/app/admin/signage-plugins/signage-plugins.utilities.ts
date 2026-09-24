import { required, SchemaFn } from '@angular/forms/signals';
import { SignagePlugin } from '@placeos/ts-client';

import {
    PluginLoadedPayload,
    resolveSignagePluginUrl,
    SIGNAGE_PLUGIN_API_VERSION,
} from './signage-plugin-embed.component';

export interface SignagePluginFormModel {
    name: string;
    description: string;
    plugin_type: SignagePlugin['plugin_type'];
    uri: string;
    playback_type: SignagePlugin['playback_type'];
    enabled: boolean;
    defaults: Record<string, unknown>;
}

export function generateSignagePluginFormModel(
    plugin?: SignagePlugin,
): SignagePluginFormModel {
    return {
        name: plugin?.name || '',
        description: plugin?.description || '',
        plugin_type: plugin?.plugin_type || 'plugin',
        uri: plugin?.uri || '',
        playback_type: plugin?.playback_type || 'static',
        enabled: plugin?.enabled ?? true,
        defaults: plugin?.defaults || {},
    };
}

export const applySignagePluginFormSchema: SchemaFn<SignagePluginFormModel> = (
    path,
) => {
    required(path.name);
    required(path.uri);
};

/**
 * Load a plugin in an off-screen iframe and wait for its `loaded` message.
 * The iframe has an opaque origin, so unknown repository files cannot reach
 * the backoffice session. Resolves the payload with `plugin.type` set to
 * `'plugin'` or `'widget'`. Resolves `null` if the URI is not a plugin:
 * no named `loaded` message before the timeout, a fatal error, or an abort.
 */
export function probeSignagePlugin(
    uri: string,
    options: { timeout_ms?: number; signal?: AbortSignal } = {},
): Promise<PluginLoadedPayload | null> {
    const url = resolveSignagePluginUrl(uri, document.baseURI);
    if (!url || options.signal?.aborted) return Promise.resolve(null);
    return new Promise((resolve) => {
        const frame = document.createElement('iframe');
        frame.setAttribute('sandbox', 'allow-scripts');
        frame.referrerPolicy = 'no-referrer';
        // Off screen instead of `display: none` so the plugin still renders
        frame.style.cssText =
            'position: fixed; left: -10000px; width: 1px; height: 1px; border: 0;';
        const finish = (result: PluginLoadedPayload | null) => {
            clearTimeout(timer);
            window.removeEventListener('message', onMessage);
            options.signal?.removeEventListener('abort', onAbort);
            frame.remove();
            resolve(result);
        };
        const onAbort = () => finish(null);
        const onMessage = (event: MessageEvent) => {
            // Origin is `'null'` for sandboxed frames, so match the window
            if (event.source !== frame.contentWindow) return;
            const msg = event.data;
            if (msg?.api !== SIGNAGE_PLUGIN_API_VERSION) return;
            if (msg.type === 'loaded') {
                const payload = msg.payload as PluginLoadedPayload;
                const name = payload?.plugin?.name;
                if (typeof name !== 'string' || !name.trim())
                    return finish(null);
                const type =
                    payload.plugin.type === 'widget' ? 'widget' : 'plugin';
                finish({ ...payload, plugin: { ...payload.plugin, type } });
            } else if (msg.type === 'error' && msg.payload?.fatal) {
                finish(null);
            }
        };
        const timer = setTimeout(onAbort, options.timeout_ms ?? 10000);
        window.addEventListener('message', onMessage);
        options.signal?.addEventListener('abort', onAbort);
        frame.src = url.href;
        document.body.appendChild(frame);
    });
}

/** Run `task` for each item with at most `limit` tasks in progress at once. */
export async function forEachWithLimit<T>(
    items: readonly T[],
    limit: number,
    task: (item: T) => Promise<void>,
): Promise<void> {
    let next = 0;
    const worker = async () => {
        while (next < items.length) await task(items[next++]);
    };
    const count = Math.max(1, Math.min(limit, items.length));
    await Promise.all(Array.from({ length: count }, worker));
}
