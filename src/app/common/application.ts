import { signal } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { log } from './general';

let _timer: ReturnType<typeof setInterval>;

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
