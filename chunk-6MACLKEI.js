import {
  kt
} from "./chunk-Q7FFLWMX.js";

// src/app/common/api.ts
function toQueryString(map) {
  let str = "";
  if (map) {
    for (const key in map) {
      if (map.hasOwnProperty(key) && map[key] !== void 0 && map[key] !== null) {
        str += `${str ? "&" : ""}${key}=${encodeURIComponent(map[key] instanceof Object ? JSON.stringify(map[key]) : map[key])}`;
      }
    }
  }
  return str;
}
function calculateModuleIndex(module_list, module) {
  const driver = module.driver || { class_name: "System" };
  const module_class = module.custom_name || module.name || driver.class_name;
  const modules_with_class = module_list.filter((mod) => {
    const d = mod.driver || { class_name: "System" };
    const mod_class = mod.custom_name || mod.name || d.class_name;
    return mod_class === module_class;
  });
  return Math.max(1, modules_with_class.findIndex((mod) => mod.id === module.id) + 1);
}
function extensionsForItem(item, type) {
  let authority_config = kt()?.config?.backoffice;
  if (!authority_config || !item)
    return [];
  const app_extend = authority_config.extend || {};
  const extension_list = app_extend[type];
  if (!extension_list || !item)
    return [];
  const extensions = [];
  for (const name in extension_list) {
    let matches = 0;
    for (const condition of extension_list[name].conditions) {
      const [key, type2, value] = condition;
      switch (type2) {
        case "includes":
          matches += item[key] && item[key].includes(value) ? 1 : 0;
          break;
        case "equals":
          matches += item[key] && item[key] === value ? 1 : 0;
          break;
        case "true":
        case "truthy":
          matches += !!item[key] ? 1 : 0;
          break;
        case "false":
        case "falsy":
          matches += !item[key] ? 1 : 0;
          break;
        default:
          matches += 1;
      }
    }
    if (matches >= extension_list[name].conditions.length) {
      let url = extension_list[name].url;
      for (const key in item) {
        if (item[key] && (typeof item[key] === "string" || typeof item[key] === "number")) {
          if (typeof item[key] === "string" && item[key].length > 128)
            continue;
          url = url.replace(`{{${key}}}`, encodeURIComponent(`${item[key]}`));
        }
      }
      extensions.push({
        id: `extend/${name.split(" ").join("-").toLowerCase()}`,
        name,
        icon: extension_list[name].icon,
        query: { embed: url }
      });
    }
  }
  return extensions;
}

export {
  toQueryString,
  calculateModuleIndex,
  extensionsForItem
};
//# sourceMappingURL=chunk-6MACLKEI.js.map
