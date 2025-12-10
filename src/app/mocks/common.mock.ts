import { BehaviorSubject, Observable } from 'rxjs';
import { HashMap } from '../common/types';

import {
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';

/** Domain of the organisation */
export const DOMAIN = 'place.tech';
/** Endpoint where the staff API is located */
export const API = '/api/engine/v2';

const ENDPOINT_SUBJECTS: HashMap<BehaviorSubject<any[]>> = {};
const ENDPOINT_OBSERVABLES: HashMap<Observable<any[]>> = {};

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
 * Get obsevable for changes to data on endpoint
 * @param endpoint Endpoint to listen to
 */
export function listenToHandlerChanges(endpoint: string): Observable<any> {
    return ENDPOINT_OBSERVABLES[endpoint];
}

/**
 * Get list of data from endpoint
 * @param endpoint Endpoint to grab data for
 */
export function endpointData(endpoint: string): any[] {
    return (
        (ENDPOINT_SUBJECTS[endpoint]
            ? ENDPOINT_SUBJECTS[endpoint].getValue()
            : null) || []
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
): Observable<T[]> {
    const storage_key = endpointToStorageKey(endpoint);

    if (ENDPOINT_SUBJECTS[endpoint]) {
        ENDPOINT_SUBJECTS[endpoint].complete();
        delete ENDPOINT_SUBJECTS[endpoint];
        delete ENDPOINT_OBSERVABLES[endpoint];
    }

    // Load from session storage if available, otherwise use provided data
    const initial_data = loadFromSession<T>(storage_key, data);
    ENDPOINT_SUBJECTS[endpoint] = new BehaviorSubject<T[]>(initial_data);
    ENDPOINT_OBSERVABLES[endpoint] = ENDPOINT_SUBJECTS[endpoint].asObservable();

    /** Add GET for index */
    registerMockEndpoint({
        path: `${endpoint}`,
        metadata: data,
        method: 'GET',
        callback: (event) => {
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
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
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
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
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
            list.push(item);
            ENDPOINT_SUBJECTS[endpoint].next(list);
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
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
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
                ENDPOINT_SUBJECTS[endpoint].next(list);
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
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
            const index = list.findIndex(
                (an_item) => an_item.id === event.route_params.id,
            );
            if (index >= 0) {
                const deleted_item = list[index];
                list.splice(index, 1);
                ENDPOINT_SUBJECTS[endpoint].next(list);
                saveToSession(storage_key, list);
                return deleted_item;
            } else {
                throw { status: 404, message: 'Not found' };
            }
        },
    } as MockHttpRequestHandler);

    return ENDPOINT_OBSERVABLES[endpoint];
}
