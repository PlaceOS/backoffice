import {
  planDomainCascade,
  planZoneCascade
} from "./chunk-VBAORMUC.js";
import {
  validateIpAddress,
  validateURI
} from "./chunk-WKU6NAJG.js";
import {
  httpError
} from "./chunk-HS2B2TZM.js";
import {
  clearSupportModuleCache,
  querySupportModules,
  querySupportSystems,
  querySupportZones
} from "./chunk-CVX3C457.js";
import {
  mapPage
} from "./chunk-SBKLZZRV.js";
import {
  newItem,
  toBody,
  toJsonBody
} from "./chunk-TXVXL5KT.js";
import {
  max,
  min,
  required,
  validate
} from "./chunk-SSVO7UC4.js";
import {
  Authority,
  ControlSystem,
  Driver,
  Group,
  Module,
  Repository,
  Trigger,
  UserAdminMetadataResponse,
  Zone,
  domains_exports,
  drivers_exports,
  groups_exports,
  modules_exports,
  repositories_exports,
  systems_exports,
  triggers_exports,
  users_exports,
  zones_exports
} from "./chunk-PRQVSGD2.js";
import {
  PlaceDriverRole,
  orThrow,
  orThrowPage
} from "./chunk-LD3K5ATK.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/modules/modules.utilities.ts
function generateModuleFormModel(mod) {
  return {
    id: mod?.id || "",
    ip: mod?.ip || "",
    port: mod?.port || 0,
    tls: mod?.tls || false,
    udp: mod?.udp || false,
    makebreak: mod?.makebreak || false,
    ignore_connected: mod?.ignore_connected || false,
    alert_level: mod?.alert_level || "medium",
    uri: mod?.uri || "",
    notes: mod?.notes || "",
    name: mod?.name || "",
    custom_name: mod?.custom_name || "",
    // `null` (not `undefined`) so signal forms materialise the field,
    // otherwise `form.driver`/`form.system`/`form.edge` are undefined and
    // their template controls never render for new modules.
    // The API sends the name of the system, but not its id. Without the
    // name, `null` makes the form load the system
    system: mod?.control_system_id && mod.control_system?.name ? newItem(ControlSystem, {
      id: mod.control_system_id,
      name: mod.control_system.name
    }) : null,
    control_system_id: mod?.control_system_id || "",
    role: mod?.role ?? PlaceDriverRole.Logic,
    driver: null,
    driver_id: mod?.driver_id || "",
    edge: null,
    edge_id: mod?.edge_id || ""
  };
}
var applyModuleFormSchema = (path) => {
  required(path.driver_id);
  min(path.port, 1, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH;
    }
  });
  max(path.port, 65535, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH;
    }
  });
  validate(
    path.ip,
    ({ value }) => validateIpAddress({ value: value() }) ? { kind: "pattern", message: "Invalid IP address" } : void 0
  );
  validate(path.uri, ({ value, valueOf }) => {
    const role = valueOf(path.role);
    const uses_uri = role === PlaceDriverRole.Service || role === PlaceDriverRole.Websocket;
    return uses_uri && validateURI({ value: value() }) ? { kind: "pattern", message: "Invalid URI" } : void 0;
  });
  required(path.uri, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === PlaceDriverRole.Service || role === PlaceDriverRole.Websocket;
    }
  });
  required(path.ip, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH;
    }
  });
  required(path.port, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH;
    }
  });
  required(path.system, {
    when({ valueOf }) {
      return valueOf(path.role) === PlaceDriverRole.Logic;
    }
  });
};
function moduleBody(item) {
  const body = __spreadValues({}, toBody(Module, item));
  delete body.driver;
  delete body.control_system;
  delete body.error_timestamp;
  delete body.has_runtime_error;
  if (!body.control_system_id) delete body.control_system_id;
  return body;
}
var SHORT_ERROR_LENGTH = 64;
function shortModuleError(error) {
  const message = typeof error === "string" ? error : httpError(error)?.message;
  return message && message.length < SHORT_ERROR_LENGTH ? message : null;
}

// src/app/common/actions.ts
function crudActions(api, schema, fields) {
  return {
    query: (q, { signal } = {}) => api.query({ q, fields }, { signal }).then(orThrowPage),
    show: (id, signal) => api.show({ id }, { signal }).then(orThrow),
    save: (item) => item.id ? api.update({ id: item.id, body: toBody(schema, item) }).then(orThrow) : api.create({ body: toBody(schema, item) }).then(orThrow),
    remove: (item) => api.destroy({ id: item.id }).then(orThrow),
    schema
  };
}
var domains = __spreadProps(__spreadValues({}, crudActions(domains_exports, Authority, ["id", "name", "domain"])), {
  loadModal: () => import("./chunk-VMA53UDN.js").then(
    (m) => m.DomainFormComponent
  ),
  delete_message: ``,
  cascade: {
    label: "DOMAINS.DELETE_CASCADE",
    description: "DOMAINS.DELETE_CASCADE_DESC",
    resource_type: "domain",
    plan: (item) => planDomainCascade(item)
  },
  name: "DOMAINS"
});
var drivers = __spreadProps(__spreadValues({}, crudActions(drivers_exports, Driver, ["id", "name", "module_name"])), {
  loadModal: () => import("./chunk-MD76RPE5.js").then(
    (m) => m.DriverFormComponent
  ),
  delete_message: ``,
  delete_extra: async (_) => {
    const count = await modules_exports.query({ offset: 0, limit: 1, driver_id: _.id }).then(orThrowPage).then(({ total }) => total).catch((_err) => 0);
    return count ? [
      "error",
      `${count} modules that rely on this driver will be <strong>immediately</strong> removed.`
    ] : null;
  },
  name: "DRIVERS"
});
var groups = __spreadProps(__spreadValues({}, crudActions(groups_exports, Group, [
  "id",
  "name",
  "description",
  "authority_id"
])), {
  loadModal: () => import("./chunk-WHQDI4HP.js").then(
    (m) => m.GroupFormComponent
  ),
  delete_message: ``,
  name: "GROUPS"
});
var modules = {
  query: (_, { signal } = {}) => querySupportModules(
    {
      q: _,
      fields: ["id", "name", "custom_name", "module_name"]
    },
    { signal }
  ),
  show: (_, signal) => modules_exports.show({ id: _ }, { signal }).then(orThrow),
  // The support group module list is cached, so drop it once this lands
  save: (item) => (item.id ? modules_exports.update({ id: item.id, body: moduleBody(item) }).then(orThrow) : modules_exports.create({
    // The server gives a missing port 0, which a device
    // module refuses. 6.x sent 1, as a bulk import does here
    body: moduleBody(__spreadProps(__spreadValues({}, item), { port: item.port || 1 }))
  }).then(orThrow)).finally(clearSupportModuleCache),
  remove: (item) => modules_exports.destroy({ id: item.id }).then(orThrow).finally(clearSupportModuleCache),
  schema: Module,
  loadModal: () => import("./chunk-3VKQCKAS.js").then(
    (m) => m.ModuleFormComponent
  ),
  delete_message: ``,
  name: "MODULES"
};
var repositories = __spreadProps(__spreadValues({}, crudActions(repositories_exports, Repository, ["id", "name", "repo_type"])), {
  loadModal: () => import("./chunk-MRNHXLUZ.js").then(
    (m) => m.RepositoryFormComponent
  ),
  delete_message: ``,
  name: "REPOS"
});
var systems = {
  query: (_, { signal } = {}) => querySupportSystems(
    {
      q: _,
      fields: ["id", "name", "display_name"]
    },
    { signal }
  ),
  show: (_, signal) => systems_exports.show({ sys_id: _ }, { signal }).then(orThrow),
  save: saveSystem,
  remove: (item) => systems_exports.destroy({ sys_id: item.id }).then(orThrow),
  schema: ControlSystem,
  loadModal: () => import("./chunk-SOW5YWR4.js").then(
    (m) => m.SystemFormComponent
  ),
  delete_message: ``,
  name: "SYSTEMS"
};
async function saveSystem(item) {
  const _a = item, { modules: modules2, start_modules } = _a, system_data = __objRest(_a, ["modules", "start_modules"]);
  const { module_ids, driver_ids } = splitModuleIds(modules2);
  const form_data = __spreadProps(__spreadValues({}, system_data), {
    support_url: processURL(item, item.support_url || "")
  });
  if (modules2 !== void 0) {
    form_data.modules = module_ids;
  }
  if (item.id)
    return systems_exports.update({
      sys_id: item.id,
      version: form_data.version ?? 0,
      body: toBody(ControlSystem, form_data)
    }).then(orThrow);
  const system = await systems_exports.create({ body: toBody(ControlSystem, form_data) }).then(orThrow);
  await addLogicDriverModules(system, driver_ids);
  if (start_modules)
    await systems_exports.start({ sys_id: system.id }).then(orThrow);
  return system;
}
async function addLogicDriverModules(system, driver_ids) {
  if (!driver_ids.length) return;
  await Promise.all(
    [...new Set(driver_ids)].map(async (driver_id) => {
      const driver = await drivers_exports.show({ id: driver_id }).then(orThrow);
      if (driver.role !== PlaceDriverRole.Logic) return;
      await modules_exports.create({
        body: {
          driver_id: driver.id,
          control_system_id: system.id,
          name: driver.name || driver.module_name,
          uri: driver.default_uri,
          port: driver.default_port || 1,
          role: driver.role,
          alert_level: driver.alert_level,
          ignore_connected: driver.ignore_connected
        }
      }).then(orThrow);
    })
  );
}
function splitModuleIds(modules2) {
  const ids = parseIdList(modules2);
  return {
    module_ids: ids.filter((id) => !id.startsWith("driver-")),
    driver_ids: ids.filter((id) => id.startsWith("driver-"))
  };
}
function parseIdList(value) {
  if (Array.isArray(value)) return value.filter((id) => !!id);
  if (typeof value !== "string") return [];
  const trimmed = value.trim();
  if (!trimmed) return [];
  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) return parseIdList(parsed);
  } catch {
  }
  return trimmed.replace(/^\[/, "").replace(/\]$/, "").split(/[\s,]+/).map((id) => id.replace(/^['"]|['"]$/g, "")).filter((id) => !!id);
}
function processURL(system, url) {
  for (const key in system) {
    url = url.replace(new RegExp(`{{${key}}}`, "g"), `${system[key]}`);
  }
  url = url.replace(new RegExp(`{{origin}}`, "g"), location.origin);
  url = url.replace(new RegExp(`{{host}}`, "g"), location.host);
  url = url.replace(new RegExp(`{{pathname}}`, "g"), location.pathname);
  return url;
}
var triggers = __spreadProps(__spreadValues({}, crudActions(triggers_exports, Trigger, ["id", "name", "display_name"])), {
  loadModal: () => import("./chunk-2EAKBGDT.js").then(
    (m) => m.TriggerFormComponent
  ),
  delete_message: ``,
  name: "TRIGGERS"
});
var users = {
  query: (_, _a = {}) => {
    var _b = _a, { signal } = _b, options = __objRest(_b, ["signal"]);
    return users_exports.query(
      __spreadProps(__spreadValues({}, options), {
        q: _,
        fields: [
          "id",
          "name",
          "email",
          "authority_id",
          "groups",
          "deleted"
        ]
      }),
      { signal }
    ).then(orThrowPage).then((page) => mapPage(page, toUser));
  },
  show: (_, signal) => users_exports.show({ id: _ }, { signal }).then(orThrow).then(toUser),
  save: (item) => item.id ? users_exports.update({ id: item.id, body: toJsonBody(item) }).then(orThrow).then(toUser) : users_exports.create({ body: toJsonBody(item) }).then(orThrow).then(toUser),
  remove: (item) => users_exports.destroy({ id: item.id }).then(orThrow),
  schema: UserAdminMetadataResponse,
  loadModal: () => import("./chunk-W2EPBNAG.js").then((m) => m.UserFormComponent),
  delete_message: ``,
  name: "USERS"
};
var ZONE_FIELDS = ["id", "name", "display_name", "tags"];
var zones = __spreadProps(__spreadValues({}, crudActions(zones_exports, Zone, ZONE_FIELDS)), {
  // The zone list of a support user or a selected group starts at its group zones
  query: (_, { signal } = {}) => querySupportZones({ q: _, fields: ZONE_FIELDS }, { signal }),
  loadModal: () => import("./chunk-VA7VCZXX.js").then((m) => m.ZoneFormComponent),
  delete_message: ``,
  cascade: {
    label: "ZONES.DELETE_CASCADE",
    description: "ZONES.DELETE_CASCADE_DESC",
    resource_type: "zone",
    plan: (item) => planZoneCascade(item.id)
  },
  name: "ZONES"
});
var toUser = (user) => newItem(UserAdminMetadataResponse, user);
var ACTIONS = {
  domains,
  drivers,
  groups,
  modules,
  repositories,
  systems,
  triggers,
  users,
  zones
};

export {
  generateModuleFormModel,
  applyModuleFormSchema,
  shortModuleError,
  ACTIONS
};
//# debugId=5285f6f1-c088-5280-8557-feb07fa481a2
//# sourceMappingURL=chunk-SAEX3KVK.js.map
