
import { authority, PlaceModule } from '@placeos/ts-client';
import { PlaceResource } from '@placeos/ts-client/dist/esm/resources/resource';

import { AppComponentExtensions, HashMap } from "./types";

/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
export function toQueryString(map: HashMap) {
    let str = '';
    if (map) {
        for (const key in map) {
            if (map.hasOwnProperty(key) && map[key] !== undefined && map[key] !== null) {
                str += `${(str ? '&' : '')}${key}=${map[key]}`;
            }
        }
    }
    return str;
}

/**
 * Calculate the index of the module
 * @param module_list List of modules in the parent system
 * @param module Module to work out index
 */
export function calculateModuleIndex(module_list: PlaceModule[], module: PlaceModule): number {
    const driver = module.driver || { class_name: 'System' };
    const module_class = module.custom_name || driver.class_name;
    const modules_with_class = module_list.filter(mod => {
        const d = mod.driver || { class_name: 'System' };
        const mod_class = mod.custom_name || d.class_name;
        return mod_class === module_class;
    });
    return Math.max(1, modules_with_class.findIndex(mod => mod.id === module.id) + 1);
}

export function extensionsForItem(item: PlaceResource, type: string) {
    let authority_config = authority()?.config?.backoffice;
    console.log('Extensions Config:', authority_config)
    if (!authority_config || !item) return [];
    const app_extend = authority_config.extend || {};
    const extension_list: AppComponentExtensions = app_extend[type];
    if (!extension_list || !item) return [];
    const extensions = [];
    for (const name in extension_list) {
        let matches = 0;
        for (const condition of extension_list[name].conditions) {
            const [key, value] = condition;
            matches += item[key] && item[key] === value ? 1 : 0;
        }
        if (matches >= extension_list[name].conditions.length) {
            extensions.push({
                id: `extend/${name.split(' ').join('-').toLowerCase()}`,
                name,
                icon: extension_list[name].icon,
                query: { embed: extension_list[name].url },
            });
        }
    }
    console.log('Extensions:', extensions)
    return extensions;
}
