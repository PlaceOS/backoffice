import {
  collectPages,
  staticPage
} from "./chunk-SBKLZZRV.js";
import {
  groups_exports,
  modules_exports,
  systems_exports,
  zones_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow,
  orThrowPage
} from "./chunk-LD3K5ATK.js";
import {
  computed,
  signal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/support-access.ts
var storage_key = "";
var selected_id = signal(
  "",
  ...ngDevMode ? [{ debugName: "selected_id" }] : (
    /* istanbul ignore next */
    []
  )
);
var access = signal(
  { user: null, groups: [] },
  ...ngDevMode ? [{ debugName: "access" }] : (
    /* istanbul ignore next */
    []
  )
);
var hasSupportRole = computed(
  () => !!(access().user?.sys_admin || access().user?.support),
  ...ngDevMode ? [{ debugName: "hasSupportRole" }] : (
    /* istanbul ignore next */
    []
  )
);
var hasSupportSubsystem = computed(
  () => access().groups.length > 0,
  ...ngDevMode ? [{ debugName: "hasSupportSubsystem" }] : (
    /* istanbul ignore next */
    []
  )
);
var isSubsystemUser = computed(
  () => hasSupportSubsystem() && !hasSupportRole(),
  ...ngDevMode ? [{ debugName: "isSubsystemUser" }] : (
    /* istanbul ignore next */
    []
  )
);
var support_groups = computed(
  () => access().groups,
  ...ngDevMode ? [{ debugName: "support_groups" }] : (
    /* istanbul ignore next */
    []
  )
);
var selected_support_group_id = selected_id.asReadonly();
var selected_support_group = computed(
  () => support_groups().find(({ group }) => group.id === selected_id()),
  ...ngDevMode ? [{ debugName: "selected_support_group" }] : (
    /* istanbul ignore next */
    []
  )
);
var active_groups = computed(
  () => {
    const selected = selected_support_group();
    return selected ? [selected] : support_groups();
  },
  ...ngDevMode ? [{ debugName: "active_groups" }] : (
    /* istanbul ignore next */
    []
  )
);
function selectSupportGroup(id) {
  if (id ? !support_groups().some(({ group }) => group.id === id) : !hasSupportRole())
    return false;
  selected_id.set(id);
  try {
    localStorage.setItem(storage_key, id);
  } catch {
  }
  return true;
}
function canAccessSection(section) {
  const user = access().user;
  if (user?.sys_admin)
    return true;
  if (["systems", "modules", "zones"].includes(section)) {
    return hasSupportRole() || active_groups().some(({ permissions }) => !!(permissions & 1));
  }
  if (["drivers", "triggers", "alerts", "metrics"].includes(section))
    return hasSupportRole();
  if (section === "users")
    return isSubsystemUser() && active_groups().some(({ permissions }) => !!(permissions & (1 | 2 | 4 | 8 | 64)));
  return false;
}
var load_version = 0;
function savedGroupId() {
  try {
    return localStorage.getItem(storage_key) || "";
  } catch {
    return "";
  }
}
function publishAccess(user, groups) {
  const available = groups.filter(({ group, permissions }) => !!group.subsystems?.includes("support") && permissions > 0).sort((a, b) => (a.group.name ?? "").localeCompare(b.group.name ?? ""));
  access.set({ user, groups: available });
  const saved = savedGroupId();
  selected_id.set(available.some(({ group }) => group.id === saved) ? saved : user.sys_admin || user.support ? "" : available[0]?.group.id || "");
}
async function loadSupportAccess(user) {
  const version = ++load_version;
  const previous = access();
  clearSupportModuleCache();
  storage_key = `BACKOFFICE.support_group.${user.authority_id}.${user.id}`;
  const groups = user.sys_admin ? collectPages(groups_exports.query({ limit: 1e3 }).then(orThrowPage)).then((groups2) => groups2.map((group) => ({ group, permissions: 255 }))) : groups_exports.current({ subsystem: "support" }).then(orThrow);
  if (user.sys_admin && !savedGroupId()) {
    access.set({
      user,
      groups: previous.user?.id === user.id ? previous.groups : []
    });
    selected_id.set("");
    groups.then((list2) => version === load_version && publishAccess(user, list2), () => void 0);
    return;
  }
  access.set({ user: null, groups: [] });
  selected_id.set("");
  const list = await groups.catch(() => []);
  if (version === load_version)
    publishAccess(user, list);
}
function canUseSupportAction(permission) {
  return active_groups().some(({ permissions }) => (permissions & (permission | 64)) !== 0);
}
function querySupportSystems(options = {}, call_options) {
  if (selected_id() && !hasSupportRole() && !(selected_support_group()?.permissions & 1)) {
    return Promise.resolve(staticPage([]));
  }
  return systems_exports.query(__spreadValues(__spreadValues(__spreadValues({}, options), isSubsystemUser() ? { subsystem: "support" } : {}), selected_id() ? { group_id: selected_id() } : {}), call_options).then(orThrowPage);
}
function querySupportZones(options = {}, call_options) {
  if (!isSubsystemUser() && !selected_id() || options.parent_id) {
    return zones_exports.query(options, call_options).then(orThrowPage);
  }
  const groups = active_groups().filter(({ permissions }) => hasSupportRole() || !!(permissions & 1));
  return Promise.all(groups.map(async ({ group }) => {
    const query = __spreadProps(__spreadValues({ limit: 1e3 }, options), { group_id: group.id });
    return collectPages(zones_exports.query(query, call_options).then(orThrowPage));
  })).then((results) => {
    const data = [
      ...new Map(results.flat().map((zone) => [zone.id, zone])).values()
    ];
    data.sort((a, b) => a.name.localeCompare(b.name));
    return staticPage(data);
  });
}
var module_cache = null;
function clearSupportModuleCache() {
  module_cache = null;
}
async function loadGroupModules(entry) {
  const superseded = () => module_cache !== entry || selected_id() !== entry.group_id;
  const systems = await collectPages(querySupportSystems({ limit: 1e3 }));
  const modules = [];
  for (let index = 0; index < systems.length; index += 8) {
    if (superseded())
      return [];
    const pages = await Promise.all(systems.slice(index, index + 8).map((system) => collectPages(modules_exports.query({ control_system_id: system.id }).then(orThrowPage)).catch((error) => {
      if (error && typeof error === "object" && "status" in error && error.status === 403)
        return [];
      throw error;
    })));
    modules.push(...pages.flat());
  }
  return [...new Map(modules.map((module) => [module.id, module])).values()];
}
async function querySupportModules(options = {}, call_options) {
  if (!selected_id() || options.control_system_id)
    return modules_exports.query(options, call_options).then(orThrowPage);
  const group_id = selected_id();
  let entry = module_cache;
  if (entry?.group_id !== group_id) {
    const next = { group_id, modules: null };
    module_cache = entry = next;
    next.modules = loadGroupModules(next);
    next.modules.catch(() => {
      if (module_cache === next)
        module_cache = null;
    });
  }
  const search = (options.q || "").toLowerCase();
  const data = (await entry.modules).filter((module) => !search || [module.name, module.custom_name, module.id].some((value) => value?.toLowerCase().includes(search)));
  return staticPage(data);
}

export {
  hasSupportRole,
  hasSupportSubsystem,
  isSubsystemUser,
  support_groups,
  selected_support_group_id,
  selected_support_group,
  selectSupportGroup,
  canAccessSection,
  loadSupportAccess,
  canUseSupportAction,
  querySupportSystems,
  querySupportZones,
  clearSupportModuleCache,
  querySupportModules
};
//# debugId=2e8c72a5-9b3c-58ae-b627-da356c519d4b
//# sourceMappingURL=chunk-CVX3C457.js.map
