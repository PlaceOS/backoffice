import { Observable, BehaviorSubject } from 'rxjs';
import { HashMap } from '../utilities/types.utilities';

import { MockHttpRequestHandler } from '@placeos/ts-client';

/** Domain of the organisation */
export const DOMAIN = 'place.tech';
/** Endpoint where the staff API is located */
export const API = '/api/engine/v2';

const ENDPOINT_SUBJECTS: HashMap<BehaviorSubject<any[]>> = {};
const ENDPOINT_OBSERVABLES: HashMap<Observable<any[]>> = {};
/** List of available characters for IDs */
const AVAILABLE_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~'.split('');

export type FilterFn<T> = (item: T, query: HashMap) => boolean;

/**
 * Generate an ID with length
 * @param length Length of the ID
 */
export function generateID(length: number = 12, chars: string[] = AVAILABLE_CHARS) {
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
    return (ENDPOINT_SUBJECTS[endpoint] ? ENDPOINT_SUBJECTS[endpoint].getValue() : null) || [];
}

/**
 * Function the generate the bas
 * @param endpoint
 * @param data
 */
export function generateBasicHandlers<T = any>(
    endpoint: string,
    data: T[],
    filter: FilterFn<T> = (_: T, q: HashMap) => true
): Observable<T[]> {
    if (ENDPOINT_SUBJECTS[endpoint]) {
        ENDPOINT_SUBJECTS[endpoint].complete();
        delete ENDPOINT_SUBJECTS[endpoint];
        delete ENDPOINT_OBSERVABLES[endpoint];
    }
    console.log('Data:', endpoint, data);
    ENDPOINT_SUBJECTS[endpoint] = new BehaviorSubject<T[]>(data);
    ENDPOINT_OBSERVABLES[endpoint] = ENDPOINT_SUBJECTS[endpoint].asObservable();
    if (!window.control) {
        window.control = {};
    }
    if (!window.control.handlers) {
        window.control.handlers = [];
    }
    /** Add GET for index */
    window.control.handlers.push({
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
    window.control.handlers.push({
        path: `${endpoint}/:id`,
        metadata: data,
        method: 'GET',
        callback: (event) => {
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
            return list.find(
                (item) => item.id === event.route_params.id && filter(item, event.query_params)
            );
        },
    } as MockHttpRequestHandler);
    /** Add POST for item */
    window.control.handlers.push({
        path: `${endpoint}`,
        metadata: data,
        method: 'POST',
        callback: (event) => {
            const item = event.body;
            item.id = `item-${generateID()}`;
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
            list.push(item);
            ENDPOINT_SUBJECTS[endpoint].next(list);
            return item;
        },
    } as MockHttpRequestHandler);
    /** Add PATCH/PUT for item */
    const action = {
        path: `${endpoint}/:id`,
        metadata: data,
        method: 'POST',
        callback: (event) => {
            const item = event.body;
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
            const index = list.find((an_item) => an_item.id === event.query_params.id);
            if (index >= 0) {
                const old_item = list[index];
                list.splice(index, 1, { ...old_item, ...item });
                ENDPOINT_SUBJECTS[endpoint].next(list);
                return item;
            } else {
                throw { status: 404, message: 'Not found' };
            }
        },
    } as MockHttpRequestHandler;
    window.control.handlers.push(action);
    window.control.handlers.push({ ...action, method: 'PUT' });
    /** Add DELETE for item */
    window.control.handlers.push({
        path: `${endpoint}/:id`,
        metadata: data,
        method: 'DELETE',
        callback: (event) => {
            const item = event.body;
            const list = ENDPOINT_SUBJECTS[endpoint].getValue() || [];
            const index = list.find((an_item) => an_item.id === event.query_params.id);
            if (index >= 0) {
                list.splice(index, 1);
                ENDPOINT_SUBJECTS[endpoint].next(list);
                return item;
            } else {
                throw { status: 404, message: 'Not found' };
            }
        },
    } as MockHttpRequestHandler);

    return ENDPOINT_OBSERVABLES[endpoint];
}
