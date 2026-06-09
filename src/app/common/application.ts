import { signal } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { log } from './general';

let _timer: ReturnType<typeof setInterval>;
let _last_chunk_load_reload_key = '';
const CHUNK_LOAD_RELOAD_KEY = 'BACKOFFICE.chunk_load_reload';

export const updateAvailable = signal(false);

export function hasNewVersion() {
    return updateAvailable();
}

/**
 * Setup handler for cache change events
 * @param cache Angular Service worker service
 * @param interval Time interval to check the cache for changes
 */
export function setupCache(cache: SwUpdate, interval: number = 5 * 60 * 1000) {
    if (cache.isEnabled) {
        if (_timer) clearInterval(_timer);
        _timer = setInterval(() => {
            log('CACHE', `Checking for updates...`);
            checkForUpdate(cache);
        }, interval);
    }
}

export function clearCacheCheck() {
    if (_timer) clearInterval(_timer);
}

export function isChunkLoadError(error: unknown): boolean {
    const checked = new Set<unknown>();
    const stack: unknown[] = [error];

    while (stack.length) {
        const current = stack.shift();
        if (!current || checked.has(current)) continue;
        checked.add(current);

        if (typeof current === 'string' && isChunkLoadErrorMessage(current)) {
            return true;
        }
        if (current instanceof Error) {
            if (isChunkLoadErrorMessage(current.name)) return true;
            if (isChunkLoadErrorMessage(current.message)) return true;
        }
        if (typeof current === 'object') {
            const record = current as Record<string, unknown>;
            stack.push(record['ngOriginalError']);
            stack.push(record['error']);
            stack.push(record['cause']);
            stack.push(record['message']);
            stack.push(record['name']);
        }
    }

    return false;
}

export function reloadApplicationOnChunkLoadError(
    error: unknown,
    reload: () => void = () => location.reload(),
): boolean {
    if (!isChunkLoadError(error)) return false;

    const reload_key = getChunkLoadReloadKey(error);
    if (getLastChunkLoadReloadKey() === reload_key) {
        return true;
    }
    setLastChunkLoadReloadKey(reload_key);
    log('ROUTER', 'Lazy route chunk failed to load. Reloading application...');
    reload();
    return true;
}

/**
 * Notify the user when a new version is available.
 *
 */
async function checkForUpdate(cache: SwUpdate) {
    if (cache.isEnabled && (await cache.checkForUpdate())) {
        log('CACHE', `Newer application version is available.`);
        updateAvailable.set(true);
    }
}

function isChunkLoadErrorMessage(message: string): boolean {
    return /ChunkLoadError|Loading chunk [\w-]+ failed|Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(
        message,
    );
}

function getChunkLoadReloadKey(error: unknown): string {
    const message = extractErrorMessage(error);
    return `${location.pathname}${location.search}${location.hash}:${message}`;
}

function extractErrorMessage(error: unknown): string {
    if (!error) return 'unknown';
    if (typeof error === 'string') return error;
    if (error instanceof Error) return `${error.name}:${error.message}`;
    if (typeof error === 'object') {
        const record = error as Record<string, unknown>;
        return extractErrorMessage(
            record['ngOriginalError'] ||
                record['error'] ||
                record['cause'] ||
                record['message'] ||
                record['name'],
        );
    }
    return String(error);
}

function getLastChunkLoadReloadKey(): string {
    try {
        return (
            sessionStorage.getItem(CHUNK_LOAD_RELOAD_KEY) ||
            _last_chunk_load_reload_key
        );
    } catch {
        return _last_chunk_load_reload_key;
    }
}

function setLastChunkLoadReloadKey(key: string) {
    _last_chunk_load_reload_key = key;
    try {
        sessionStorage.setItem(CHUNK_LOAD_RELOAD_KEY, key);
    } catch {
        // The in-memory key still prevents reload loops in storage-restricted contexts.
    }
}
