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
    id: string;
    name: string;
}

/** Generic type for a filter function */
export type FilterFn<T = any> = (_: T) => boolean;

/** Generic type for a comparison function */
export type CompareFn<T = any> = (a: T, b: T) => number;

export interface EngineServiceLike extends HashMap {
    /** API Route of the service */
    readonly _api_route: string;
    /** Whether new items can be created for the service */
    readonly can_create: boolean;
    /** Whether items can be edited for the service */
    readonly can_edit: boolean;
    /** Total number of items */
    readonly total: number;
    /** Total number of filtered items */
    readonly last_total: number;
}
