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
