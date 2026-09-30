import { EventEmitter } from '@angular/core';

/** Generic Dictionary type */
export interface HashMap<T = string> {
    [key: string]: T;
}

export interface AppComponentExtensions {
    [name: string]: AppComponentExtension;
}

export type ExtensionConditions =
    | 'equals'
    | 'true'
    | 'truthy'
    | 'false'
    | 'falsy'
    | 'includes'
    | 'none';

/** Shared interface for form modal components opened via MatDialog */
export interface FormModalComponent {
    event: EventEmitter<DialogEvent>;
    loading?: string;
}

export interface AppComponentExtension {
    /** URL to embed in the application extension */
    url: string;
    /** Conditions to allow the extension to show */
    conditions: [string, ExtensionConditions, unknown][];
    /** Icon to draw of the associated tab */
    icon?: ApplicationIcon;
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
