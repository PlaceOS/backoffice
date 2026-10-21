import {
  Mt
} from "./chunk-3QDC3AOP.js";

// src/app/common/api.ts
function toQueryString(map) {
  let str = "";
  if (map) {
    for (const key in map) {
      if (Object.prototype.hasOwnProperty.call(map, key) && map[key] !== void 0 && map[key] !== null) {
        const value = map[key];
        str += `${str ? "&" : ""}${key}=${encodeURIComponent(
          typeof value === "object" && value !== null ? JSON.stringify(value) : `${value}`
        )}`;
      }
    }
  }
  return str;
}
function allowedEmbedUrl(embed, allowed_urls, base = location.origin) {
  const resolve = (value) => {
    try {
      const url2 = new URL(value, base);
      return ["http:", "https:"].includes(url2.protocol) ? url2.href : null;
    } catch {
      return null;
    }
  };
  const url = embed ? resolve(embed) : null;
  if (!url) return null;
  return allowed_urls.some((allowed) => resolve(allowed) === url) ? url : null;
}
function calculateModuleIndex(module_list, module) {
  const driver = module.driver || { class_name: "System" };
  const module_class = module.custom_name || module.name || driver.class_name;
  const modules_with_class = module_list.filter((mod) => {
    const d = mod.driver || { class_name: "System" };
    const mod_class = mod.custom_name || mod.name || d.class_name;
    return mod_class === module_class;
  });
  return Math.max(
    1,
    modules_with_class.findIndex((mod) => mod.id === module.id) + 1
  );
}
var MAX_PLACEHOLDER_LENGTH = 128;
var DEFAULT_EXTENSION_ICON = { content: "extension" };
function matchesCondition(item, [key, operation, value]) {
  const field = item[key];
  switch (operation) {
    case "includes":
      if (typeof field === "string") return field.includes(`${value}`);
      return Array.isArray(field) && field.includes(value);
    case "equals":
      return field !== void 0 && field !== null && `${field}` === `${value}`;
    case "true":
    case "truthy":
      return !!field;
    case "false":
    case "falsy":
      return !field;
    default:
      return true;
  }
}
function resolveExtensionUrl(url, item) {
  return url.replace(/{{(\w+)}}/g, (placeholder, key) => {
    const value = item[key];
    const is_usable = typeof value === "number" || typeof value === "string" && value.length <= MAX_PLACEHOLDER_LENGTH;
    return is_usable ? encodeURIComponent(`${value}`) : placeholder;
  });
}
function extensionsForItem(item, type) {
  const extend = Mt()?.config?.backoffice?.extend || {};
  if (!item) return [];
  const tabs = [];
  for (const [name, extension] of Object.entries(extend[type] || {})) {
    if (!extension?.url) continue;
    const conditions = extension.conditions || [];
    if (!conditions.every((_) => matchesCondition(item, _))) continue;
    tabs.push({
      id: `extend/${name.split(" ").join("-").toLowerCase()}`,
      name,
      icon: extension.icon || DEFAULT_EXTENSION_ICON,
      query: { embed: resolveExtensionUrl(extension.url, item) }
    });
  }
  return tabs;
}

export {
  toQueryString,
  allowedEmbedUrl,
  calculateModuleIndex,
  extensionsForItem
};
//# debugId=890936eb-8db6-5355-9774-620efd7306f0
//# sourceMappingURL=chunk-ZGCO6CER.js.map
