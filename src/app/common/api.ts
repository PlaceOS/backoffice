import { authority, PlaceModule, PlaceResource } from '@placeos/ts-client';

import {
    AppComponentExtensions,
    ApplicationIcon,
    ExtensionCondition,
    HashMap,
} from './types';

/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
export function toQueryString(map: HashMap<unknown>) {
    let str = '';
    if (map) {
        for (const key in map) {
            if (
                Object.prototype.hasOwnProperty.call(map, key) &&
                map[key] !== undefined &&
                map[key] !== null
            ) {
                const value = map[key];
                str += `${str ? '&' : ''}${key}=${encodeURIComponent(
                    typeof value === 'object' && value !== null
                        ? JSON.stringify(value)
                        : `${value}`,
                )}`;
            }
        }
    }
    return str;
}

/**
 * Check an extension embed URL before it is loaded in an iframe.
 * Returns the resolved URL if it is http(s) and matches one of the
 * configured extension URLs for the item, else `null`.
 * @param embed URL from the `embed` query param
 * @param allowed_urls Extension URLs from `extensionsForItem`
 * @param base Base for relative URLs
 */
export function allowedEmbedUrl(
    embed: string,
    allowed_urls: string[],
    base = location.origin,
): string | null {
    const resolve = (value: string) => {
        try {
            const url = new URL(value, base);
            return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
        } catch {
            return null;
        }
    };
    const url = embed ? resolve(embed) : null;
    if (!url) return null;
    return allowed_urls.some((allowed) => resolve(allowed) === url)
        ? url
        : null;
}

/**
 * Calculate the index of the module
 * @param module_list List of modules in the parent system
 * @param module Module to work out index
 */
export function calculateModuleIndex(
    module_list: PlaceModule[],
    module: PlaceModule,
): number {
    const driver = module.driver || { class_name: 'System' };
    const module_class = module.custom_name || module.name || driver.class_name;
    const modules_with_class = module_list.filter((mod) => {
        const d = mod.driver || { class_name: 'System' };
        const mod_class = mod.custom_name || mod.name || d.class_name;
        return mod_class === module_class;
    });
    return Math.max(
        1,
        modules_with_class.findIndex((mod) => mod.id === module.id) + 1,
    );
}

/** Tab details for an extension. Compatible with `ItemTab` */
export interface ExtensionTab {
    id: string;
    name: string;
    icon: ApplicationIcon;
    /** Query params for the tab link. `embed` is the URL to load */
    query: { embed: string };
}

/** Longest item value that can replace a URL placeholder */
const MAX_PLACEHOLDER_LENGTH = 128;
const DEFAULT_EXTENSION_ICON: ApplicationIcon = { content: 'extension' };

/** Check one extension condition against the item */
function matchesCondition(
    item: PlaceResource,
    [key, operation, value]: ExtensionCondition,
): boolean {
    const field: unknown = item[key];
    switch (operation) {
        case 'includes':
            if (typeof field === 'string') return field.includes(`${value}`);
            return Array.isArray(field) && field.includes(value);
        case 'equals':
            // Compare as text, as the admin form saves all values as strings
            return (
                field !== undefined &&
                field !== null &&
                `${field}` === `${value}`
            );
        case 'true':
        case 'truthy':
            return !!field;
        case 'false':
        case 'falsy':
            return !field;
        default:
            return true;
    }
}

/**
 * Replace each `{{key}}` in the URL with the encoded value of that
 * item property. Placeholders without a short string or number value
 * are left as they are.
 */
function resolveExtensionUrl(url: string, item: PlaceResource): string {
    return url.replace(/{{(\w+)}}/g, (placeholder, key: string) => {
        const value: unknown = item[key];
        const is_usable =
            typeof value === 'number' ||
            (typeof value === 'string' &&
                value.length <= MAX_PLACEHOLDER_LENGTH);
        return is_usable ? encodeURIComponent(`${value}`) : placeholder;
    });
}

/**
 * List the extension tabs to show for an item. Extensions come from
 * the `backoffice.extend` config of the current domain.
 * @param item Active item of the section
 * @param type Section of backoffice, e.g. `systems`
 */
export function extensionsForItem(
    item: PlaceResource,
    type: string,
): ExtensionTab[] {
    const extend: HashMap<AppComponentExtensions> =
        authority()?.config?.backoffice?.extend || {};
    if (!item) return [];
    const tabs: ExtensionTab[] = [];
    for (const [name, extension] of Object.entries(extend[type] || {})) {
        if (!extension?.url) continue;
        const conditions = extension.conditions || [];
        if (!conditions.every((_) => matchesCondition(item, _))) continue;
        tabs.push({
            id: `extend/${name.split(' ').join('-').toLowerCase()}`,
            name,
            icon: extension.icon || DEFAULT_EXTENSION_ICON,
            query: { embed: resolveExtensionUrl(extension.url, item) },
        });
    }
    return tabs;
}
