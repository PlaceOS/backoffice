/**
 * Assortment of useful types and interfaces
 */


/** Interface for a generic key value object */
export interface HashMap<T = any> {
    [name: string]: T;
}

/** Interface for key value pairs */
export interface Pair<T = any, U = string> {
    key: U;
    value: T
}

/** Generic interface for objects with identification details */
export interface Identity extends HashMap {
    id: string | number;
    name: string;
}

/** Generic type for a filter function */
export type FilterFn<T = any> = (_: T) => boolean;

/** Generic type for a comparison function */
export type CompareFn<T = any> = (a: T, b: T) => number;

export interface EngineServiceLike<T = any> extends HashMap {
    /** Whether new items can be created for the service */
    readonly can_create?: boolean;
    /** Whether items can be edited for the service */
    readonly can_edit?: boolean;
    /** Total number of items */
    readonly total: number;
    /** Total number of filtered items */
    readonly last_total: number;
    /** Search for items through the API request */
    query: (query?: HashMap) => Promise<T[]>;
    /** Get item details through the API request */
    show: (id: string, query?: HashMap) => Promise<T>;
    /** Add new item through the API request */
    add: (fields: HashMap, query?: HashMap) => Promise<T>;
    /** Update existing item through the API request */
    update: (id: string, fields: HashMap, query?: HashMap) => Promise<T>;
    /** Remove existing item through the API request */
    delete: (id: string, query?: HashMap) => Promise<void>;
}

/** Generic event for dialog boxes */
export interface DialogEvent {
    /** Reason the event was called */
    reason: 'action' | 'close' | 'reset' | 'loading' | 'done' | 'other',
    metadata?: any;
}

/** Coordinates pair for the map */
export interface Point {
    /** Coordinate on the X axis */
    readonly x: number;
    /** Coordinate on the Y axis */
    readonly y: number;
}
