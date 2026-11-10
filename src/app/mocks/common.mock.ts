import { WritableSignal, signal } from '@angular/core';
import { HashMap } from '../common/types';

import { MockHttpRequest, registerMockEndpoint } from '@placeos/ts-client';

/** Domain of the organisation */
export const DOMAIN = 'place.tech';
/** Endpoint where the engine API is located */
export const API = '/api/engine/v2';
/** Endpoint where the staff API is located */
export const STAFF_API = '/api/staff/v1';

interface MockSubscription {
    unsubscribe(): void;
}

/** Signal that also tells listeners about each change */
export interface MockChangeSignal<T> extends WritableSignal<T> {
    subscribe(next: (value: T) => void): MockSubscription;
    dispose(): void;
}

/** Item with an ID, as stored by `generateBasicHandlers` */
export type MockItem = { id: string } & Record<string, unknown>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ENDPOINT_SIGNALS: HashMap<MockChangeSignal<any[]>> = {};

function createMockChangeSignal<T>(initial_value: T): MockChangeSignal<T> {
    const state = signal(initial_value) as MockChangeSignal<T>;
    const listeners = new Set<(value: T) => void>();
    const original_set = state.set.bind(state);
    const original_update = state.update.bind(state);
    const emit = () => {
        const value = state();
        for (const listener of listeners) listener(value);
    };
    state.set = (value: T) => {
        original_set(value);
        emit();
    };
    state.update = (update_fn: (value: T) => T) => {
        original_update(update_fn);
        emit();
    };
    state.subscribe = (next: (value: T) => void): MockSubscription => {
        listeners.add(next);
        next(state());
        return { unsubscribe: () => listeners.delete(next) };
    };
    state.dispose = () => listeners.clear();
    return state;
}

/** Session storage key prefix for mock data */
const STORAGE_PREFIX = 'PLACEOS.mocks.';

/**
 * Load data from session storage
 * @param key Storage key (without prefix)
 * @param fallback Fallback data if nothing in storage
 */
export function loadFromSession<T>(key: string, fallback: T): T {
    try {
        const stored = sessionStorage.getItem(`${STORAGE_PREFIX}${key}`);
        if (stored) return JSON.parse(stored);
    } catch (e) {
        console.warn(`Failed to load mock data from session: ${key}`, e);
    }
    return fallback;
}

/**
 * Save data to session storage
 * @param key Storage key (without prefix)
 * @param data Data to save
 */
export function saveToSession<T>(key: string, data: T): void {
    try {
        sessionStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(data));
    } catch (e) {
        console.warn(`Failed to save mock data to session: ${key}`, e);
    }
}

/**
 * Make a signal that keeps its value in session storage.
 * The seed is saved on first use, so random seed values stay the same
 * after a reload. Every `set` and `update` saves the new value.
 * @param key Storage key (without prefix)
 * @param seed Value used when session storage has none
 */
export function createMockStore<T>(key: string, seed: T): MockChangeSignal<T> {
    const store = createMockChangeSignal<T>(loadFromSession(key, seed));
    store.subscribe((value) => saveToSession(key, value));
    return store;
}

/** List of available characters for IDs */
const AVAILABLE_CHARS =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~'.split('');

export type FilterFn<T> = (item: T, query: HashMap) => boolean;

/**
 * Generate an ID with length. Uses the crypto API, as mock keys and
 * secrets are made with it too
 * @param length Length of the ID
 */
export function generateID(length = 12, chars: string[] = AVAILABLE_CHARS) {
    const values = crypto.getRandomValues(new Uint32Array(length));
    return Array.from(values, (value) => chars[value % chars.length]).join('');
}

/** Current time in seconds, which is what the API uses for timestamps */
export function now() {
    return Math.floor(Date.now() / 1000);
}

/** Error the handlers throw for an item that does not exist */
export function notFound(name = 'Item'): never {
    throw { status: 404, message: `${name} not found` };
}

/** Filter that matches `q` against the item name */
export function nameFilter(item: Record<string, unknown>, q: HashMap) {
    if (!q?.q) return true;
    return `${item.name || ''}`.toLowerCase().includes(`${q.q}`.toLowerCase());
}

/**
 * Get signal for changes to data on endpoint
 * @param endpoint Endpoint to listen to
 */
export function listenToHandlerChanges<T = MockItem>(
    endpoint: string,
): MockChangeSignal<T[]> {
    return ENDPOINT_SIGNALS[endpoint] as MockChangeSignal<T[]>;
}

/**
 * Get list of data from endpoint
 * @param endpoint Endpoint to grab data for
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function endpointData(endpoint: string): any[] {
    return ENDPOINT_SIGNALS[endpoint]?.() || [];
}

/**
 * Change fields of an item made by `generateBasicHandlers` and save it
 * @param endpoint Endpoint of the item
 * @param id ID of the item
 * @param changes Fields to change
 * @returns The changed item
 */
export function updateItem<T extends MockItem>(
    endpoint: string,
    id: string,
    changes: Partial<T>,
): T {
    const store = listenToHandlerChanges<T>(endpoint);
    const list = store?.() || [];
    const index = list.findIndex((item) => item.id === id);
    if (index < 0) return notFound();
    const item = { ...list[index], ...changes, updated_at: now() };
    store.set(list.map((old, idx) => (idx === index ? item : old)));
    return item;
}

/** Storage key of an endpoint, e.g. `api_engine_v2_zones` */
export function endpointToStorageKey(endpoint: string): string {
    return endpoint.replace(/\//g, '_').replace(/^_/, '');
}

export interface BasicHandlerOptions<T> {
    /** Selects the items for the query parameters of a request */
    filter?: FilterFn<T>;
    /**
     * Fills in server-side fields of created and updated items.
     * Updated items keep their old fields, so use
     * `{ field: makeValue(), ...item }` for fields made only on create
     */
    prepare?: (item: T) => T;
    /** Prefix of new IDs, e.g. `sys-`. Defaults to `item-` */
    id_prefix?: string;
}

/**
 * Register index, show, create, update and remove handlers for an endpoint.
 * Items persist in session storage under `endpointToStorageKey(endpoint)`.
 * The mock router uses the first handler that matches, so register fixed
 * paths such as `zones/tags` before you call this
 * @param endpoint API endpoint path
 * @param data Initial data (used when session storage has none)
 */
export function generateBasicHandlers<T = MockItem>(
    endpoint: string,
    data: T[],
    {
        filter = () => true,
        prepare = (item) => item,
        id_prefix = 'item-',
    }: BasicHandlerOptions<T> = {},
): MockChangeSignal<T[]> {
    ENDPOINT_SIGNALS[endpoint]?.dispose();
    const store = createMockStore<T[]>(endpointToStorageKey(endpoint), data);
    ENDPOINT_SIGNALS[endpoint] = store;
    type Item = T & MockItem;
    const list = () => store() as Item[];
    const indexOf = (event: MockHttpRequest) => {
        const index = list().findIndex((i) => i.id === event.route_params.id);
        return index >= 0 ? index : notFound();
    };

    registerMockEndpoint({
        path: endpoint,
        method: 'GET',
        callback: (event) =>
            [...list()]
                .sort((a, b) =>
                    `${a.name || ''}`.localeCompare(`${b.name || ''}`),
                )
                .filter((item) => filter(item, event.query_params)),
    });

    registerMockEndpoint({
        path: `${endpoint}/:id`,
        method: 'GET',
        callback: (event) => list()[indexOf(event)],
    });

    registerMockEndpoint({
        path: endpoint,
        method: 'POST',
        callback: (event) => {
            const item = prepare({
                ...event.body,
                id: `${id_prefix}${generateID()}`,
                created_at: now(),
                updated_at: now(),
            });
            store.set([...store(), item]);
            return item;
        },
    });

    for (const method of ['PATCH', 'PUT'] as const) {
        registerMockEndpoint({
            path: `${endpoint}/:id`,
            method,
            callback: (event) => {
                const index = indexOf(event);
                const item = prepare({
                    ...list()[index],
                    ...event.body,
                    id: event.route_params.id,
                    updated_at: now(),
                });
                store.set(
                    list().map((old, idx) => (idx === index ? item : old)),
                );
                return item;
            },
        });
    }

    registerMockEndpoint({
        path: `${endpoint}/:id`,
        method: 'DELETE',
        callback: (event) => {
            const index = indexOf(event);
            const item = list()[index];
            store.set(list().filter((_, idx) => idx !== index));
            return item;
        },
    });

    return store;
}
