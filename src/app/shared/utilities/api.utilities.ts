import { EngineModule } from '@acaprojects/ts-composer';

import { HashMap } from "./types.utilities";

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
export function calculateModuleIndex(module_list: EngineModule[], module: EngineModule): number {
    const driver = module.driver || { class_name: 'System' };
    const module_class = module.custom_name || driver.class_name;
    const modules_with_class = module_list.filter((mod) => {
        const d = mod.driver || { class_name: 'System' };
        const mod_class = mod.custom_name || d.class_name;
        return mod_class === module_class;
    });
    return Math.max(1, modules_with_class.findIndex((mod) => mod.id === module.id) + 1);
}
