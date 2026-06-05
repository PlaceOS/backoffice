import { WritableSignal, signal } from '@angular/core';
import { HashMap } from '../common/types';

import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';

/** Domain of the organisation */
export const DOMAIN = 'place.tech';
/** Endpoint where the staff API is located */
export const API = '/api/engine/v2';

interface MockSubscription {
    unsubscribe(): void;
}

interface MockChangeSignal<T> extends WritableSignal<T> {
    subscribe(next: (value: T) => void): MockSubscription;
    dispose(): void;
}

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
export function loadFromSession<T>(key: string, fallback: T[]): T[] {
    try {
        const stored = sessionStorage.getItem(`${STORAGE_PREFIX}${key}`);
        if (stored) {
            return JSON.parse(stored);
        }
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
export function saveToSession<T>(key: string, data: T[]): void {
    try {
        sessionStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(data));
    } catch (e) {
        console.warn(`Failed to save mock data to session: ${key}`, e);
    }
}
/** List of available characters for IDs */
const AVAILABLE_CHARS =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~'.split('');

export type FilterFn<T> = (item: T, query: HashMap) => boolean;

/**
 * Generate an ID with length
 * @param length Length of the ID
 */
export function generateID(length = 12, chars: string[] = AVAILABLE_CHARS) {
    let id = '';
    while (id.length < length) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

/**
 * Get signal for changes to data on endpoint
 * @param endpoint Endpoint to listen to
 */
export function listenToHandlerChanges<T = unknown>(
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
    return (
        (ENDPOINT_SIGNALS[endpoint] ? ENDPOINT_SIGNALS[endpoint]() : null) || []
    );
}

/**
 * Derive a storage key from an endpoint path
 */
function endpointToStorageKey(endpoint: string): string {
    return endpoint.replace(/\//g, '_').replace(/^_/, '');
}

/**
 * Function to generate basic CRUD handlers with session persistence
 * @param endpoint API endpoint path
 * @param data Initial data (used as fallback if no session data)
 * @param filter Filter function for queries
 */
export function generateBasicHandlers<T = unknown>(
    endpoint: string,
    data: T[],
    filter: FilterFn<T> = (_: T, _q: HashMap) => true,
): MockChangeSignal<T[]> {
    const storage_key = endpointToStorageKey(endpoint);

    if (ENDPOINT_SIGNALS[endpoint]) {
        ENDPOINT_SIGNALS[endpoint].dispose();
        delete ENDPOINT_SIGNALS[endpoint];
    }

    // Load from session storage if available, otherwise use provided data
    const initial_data = loadFromSession<T>(storage_key, data);
    ENDPOINT_SIGNALS[endpoint] = createMockChangeSignal<T[]>(initial_data);

    /** Add GET for index */
    registerMockEndpoint({
        path: `${endpoint}`,
        metadata: data,
        method: 'GET',
        callback: (event) => {
            const list = [...(ENDPOINT_SIGNALS[endpoint]() || [])];
            list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
            return list.filter((item) => filter(item, event.query_params));
        },
    } as MockHttpRequestHandler);

    /** Add GET for show */
    registerMockEndpoint({
        path: `${endpoint}/:id`,
        metadata: data,
        method: 'GET',
        callback: (event) => {
            const list = ENDPOINT_SIGNALS[endpoint]() || [];
            return list.find(
                (item) =>
                    item.id === event.route_params.id &&
                    filter(item, event.query_params),
            );
        },
    } as MockHttpRequestHandler);

    /** Add POST for item */
    registerMockEndpoint({
        path: `${endpoint}`,
        metadata: data,
        method: 'POST',
        callback: (event) => {
            const item = { ...event.body };
            item.id = `item-${generateID()}`;
            item.created_at = Date.now() / 1000;
            item.updated_at = Date.now() / 1000;
            const list = [...(ENDPOINT_SIGNALS[endpoint]() || [])];
            list.push(item);
            ENDPOINT_SIGNALS[endpoint].set(list);
            saveToSession(storage_key, list);
            return item;
        },
    } as MockHttpRequestHandler);

    /** Add PATCH/PUT for item */
    const action = {
        path: `${endpoint}/:id`,
        metadata: data,
        method: 'PATCH',
        callback: (event) => {
            const item = event.body;
            const list = [...(ENDPOINT_SIGNALS[endpoint]() || [])];
            const index = list.findIndex(
                (an_item) => an_item.id === event.route_params.id,
            );
            if (index >= 0) {
                const old_item = list[index];
                const updated_item = {
                    ...old_item,
                    ...item,
                    updated_at: Date.now() / 1000,
                };
                list.splice(index, 1, updated_item);
                ENDPOINT_SIGNALS[endpoint].set(list);
                saveToSession(storage_key, list);
                return updated_item;
            } else {
                throw { status: 404, message: 'Not found' };
            }
        },
    } as MockHttpRequestHandler;
    registerMockEndpoint(action);
    registerMockEndpoint({ ...action, method: 'PUT' });

    /** Add DELETE for item */
    registerMockEndpoint({
        path: `${endpoint}/:id`,
        metadata: data,
        method: 'DELETE',
        callback: (event) => {
            const list = [...(ENDPOINT_SIGNALS[endpoint]() || [])];
            const index = list.findIndex(
                (an_item) => an_item.id === event.route_params.id,
            );
            if (index >= 0) {
                const deleted_item = list[index];
                list.splice(index, 1);
                ENDPOINT_SIGNALS[endpoint].set(list);
                saveToSession(storage_key, list);
                return deleted_item;
            } else {
                throw { status: 404, message: 'Not found' };
            }
        },
    } as MockHttpRequestHandler);

    return ENDPOINT_SIGNALS[endpoint];
}
