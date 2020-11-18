
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
    const module_class = module.custom_name || module.name || driver.class_name;
    const modules_with_class = module_list.filter(mod => {
        const d = mod.driver || { class_name: 'System' };
        const mod_class = mod.custom_name || d.class_name;
        return mod_class === module_class;
    });
    return Math.max(1, modules_with_class.findIndex(mod => mod.id === module.id) + 1);
}

export function extensionsForItem(item: PlaceResource, type: string) {
    let authority_config = authority()?.config?.backoffice;
    if (!authority_config || !item) return [];
    const app_extend = authority_config.extend || {};
    const extension_list: AppComponentExtensions = app_extend[type];
    if (!extension_list || !item) return [];
    const extensions = [];
    for (const name in extension_list) {
        let matches = 0;
        for (const condition of extension_list[name].conditions) {
            const [key, type, value] = condition;
            switch (type) {
                case 'includes':
                    matches += item[key] && item[key].includes(value) ? 1 : 0;
                    break;
                case 'equals':
                    matches += item[key] && item[key] === value ? 1 : 0;
                    break;
                case 'true':
                case 'truthy':
                    matches += !!item[key] ? 1 : 0;
                    break;
                case 'false':
                case 'falsy':
                    matches += !item[key] ? 1 : 0;
                    break;
                default:
                    matches += 1;
            }
            matches += item[key] && item[key] === value ? 1 : 0;
        }
        if (matches >= extension_list[name].conditions.length) {
            let url = extension_list[name].url;
            for (const key in item) {
                if (item[key] && (typeof item[key] === 'string' || typeof item[key] === 'number')) {

                    if (typeof item[key] === 'string' && item[key].length > 128) continue;
                    url = url.replace(`{{${key}}}`, encodeURIComponent(`${item[key]}`));
                }
            }
            extensions.push({
                id: `extend/${name.split(' ').join('-').toLowerCase()}`,
                name,
                icon: extension_list[name].icon,
                query: { embed: url },
            });
        }
    }
    return extensions;
}
