import { EventEmitter } from '@angular/core';
import type { Page } from '@placeos/ts-client/compat';

/** Generic Dictionary type */
export interface HashMap<T = string> {
    [key: string]: T;
}

export interface AppComponentExtensions {
    [name: string]: AppComponentExtension;
}

/** Sections of backoffice that can show extension tabs */
export const EXTENSION_SECTIONS = [
    'admin',
    'systems',
    'modules',
    'zones',
    'drivers',
    'repositories',
    'triggers',
    'users',
    'domains',
] as const;

export type ExtensionSection = (typeof EXTENSION_SECTIONS)[number];

export type ExtensionConditions =
    | 'equals'
    | 'true'
    | 'truthy'
    | 'false'
    | 'falsy'
    | 'includes'
    | 'none';

/** Item field, operation and value to compare with */
export type ExtensionCondition = [string, ExtensionConditions, unknown];

/** Shared interface for form modal components opened via the CDK Dialog */
export interface FormModalComponent {
    event: EventEmitter<DialogEvent>;
    loading?: string;
}

export interface AppComponentExtension {
    /** URL to embed in the application extension */
    url: string;
    /** Conditions to allow the extension to show */
    conditions: ExtensionCondition[];
    /** Icon to draw of the associated tab */
    icon?: ApplicationIcon;
}

/** A page of a `query` call, from `.then(orThrowPage)` */
export type QueryResponse<T> = Promise<Page<readonly T[]>>;

/** A page with no next page, from data the app already has */
export function staticPage<T>(data: readonly T[]): Page<readonly T[]> {
    return { data, total: data.length, next_offset: null, next: null };
}

/**
 * Load every page of a query. Throws when the list does not complete within
 * `pages_max` pages, or when `next()` gives `null` because the offset did not
 * move. A partial list must not look complete, for example to a cascade delete.
 */
export async function collectPages<T>(
    response: QueryResponse<T>,
    pages_max = 1000,
): Promise<T[]> {
    let page = await response;
    const data = [...page.data];
    for (let pages = 1; page.next && page.data.length; pages++) {
        if (pages >= pages_max) {
            throw new Error(
                `The list did not complete within ${pages_max} pages`,
            );
        }
        const next = page.next();
        if (!next) throw new Error('The list did not move to the next page');
        page = await next;
        data.push(...page.data);
    }
    return data;
}

/** Map the items of a page, and of each page after it */
export function mapPage<T, U>(
    page: Page<readonly T[]>,
    fn: (item: T) => U,
): Page<readonly U[]> {
    const next = page.next;
    return {
        ...page,
        data: page.data.map(fn),
        next: next ? () => next()?.then((_) => mapPage(_, fn)) ?? null : null,
    };
}

/** Fields that each PlaceOS item has. Replaces the 6.x `PlaceResource` class */
export interface PlaceResource {
    readonly id: string;
    readonly name: string;
    readonly created_at?: number;
    readonly updated_at?: number;
    readonly version?: number;
}

/** Generic data type with identification details */
export interface Identity {
    id: string | number;
    name: string;
    [key: string]: unknown;
}

export interface AppLink {
    /** Identifier for the link */
    id?: string;
    /** Name of the tile */
    name: string;
    /** Application route the tile will navigate */
    route?: string;
    /** External link the tile will navigate */
    link?: string;
    /** Query parameters to add to the route being navigated to */
    query_params?: HashMap<string | number | boolean>;
    /** Icon associated with the tile */
    icon?: ApplicationIcon;
    /** List of sub-links */
    children?: AppLink[];
    /** Image URL to display with the link */
    background?: string;
    /** Callback function to respond to action */
    callback?: () => void;
    /**  */
    enable_on?: string;
}

export type FilterFn<T> = (_: T) => boolean;

export interface ApplicationIcon {
    /** Type of icon */
    type?: 'img' | 'icon';
    /** URL to the image used for the icon */
    src?: string;
    /** CSS class to add to icon element */
    class?: string;
    /** Contents to add to icon element */
    content?: string;
    /** Background color for icon */
    background?: string;
}

/** Generic event for dialog boxes */
export interface DialogEvent<T = unknown> {
    /** Reason the event was called */
    reason: 'action' | 'close' | 'reset' | 'loading' | 'done' | 'other';
    metadata?: T;
}

export interface Point {
    readonly x: number;
    readonly y: number;
}
