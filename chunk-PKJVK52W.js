import {
  Iu,
  Tu,
  computed,
  ga,
  lc,
  signal,
  uh
} from "./chunk-Z45QSLBL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
async function collectPages(response) {
  let page = await response;
  const data = [...page.data];
  for (let i = 0; page.next && i < 1e3; i++) {
    page = await page.next();
    data.push(...page.data);
  }
  if (page.next)
    throw new Error("Too many resource pages");
  return data;
}
async function loadSupportAccess(user) {
  access.set({ user: null, groups: [] });
  selected_id.set("");
  storage_key = `BACKOFFICE.support_group.${user.authority_id}.${user.id}`;
  const groups = await (user.sys_admin ? collectPages(Tu({ limit: 200 })).then((groups2) => groups2.map((group) => ({ group, permissions: 255 }))) : Iu({ subsystem: "support" })).catch(() => []);
  const available = groups.filter(({ group, permissions }) => group.subsystems.includes("support") && permissions > 0).sort((a, b) => a.group.name.localeCompare(b.group.name));
  access.set({ user, groups: available });
  let saved = "";
  try {
    saved = localStorage.getItem(storage_key) || "";
  } catch {
  }
  selected_id.set(available.some(({ group }) => group.id === saved) ? saved : user.sys_admin || user.support ? "" : available[0]?.group.id || "");
}
function canUseSupportAction(permission) {
  return active_groups().some(({ permissions }) => (permissions & (permission | 64)) !== 0);
}
function querySupportSystems(options = {}) {
  if (selected_id() && !hasSupportRole() && !(selected_support_group()?.permissions & 1)) {
    return Promise.resolve({ data: [], total: 0, next: null });
  }
  return ga(__spreadValues(__spreadValues(__spreadValues({}, options), isSubsystemUser() ? { subsystem: "support" } : {}), selected_id() ? { group_id: selected_id() } : {}));
}
function querySupportZones(options = {}) {
  if (!isSubsystemUser() && !selected_id() || options.parent_id) {
    return uh(options);
  }
  const groups = active_groups().filter(({ permissions }) => hasSupportRole() || !!(permissions & 1));
  return Promise.all(groups.map(async ({ group }) => {
    const query = __spreadProps(__spreadValues({}, options), { group_id: group.id });
    return collectPages(uh(query));
  })).then((results) => {
    const data = [
      ...new Map(results.flat().map((zone) => [zone.id, zone])).values()
    ];
    data.sort((a, b) => a.name.localeCompare(b.name));
    return { data, total: data.length, next: null };
  });
}
async function querySupportModules(options = {}) {
  if (!selected_id() || options.control_system_id)
    return lc(options);
  const requested_group = selected_id();
  const systems = await collectPages(querySupportSystems({ limit: 200 }));
  const modules = [];
  for (let index = 0; index < systems.length; index += 8) {
    if (requested_group !== selected_id())
      return { data: [], total: 0, next: null };
    const pages = await Promise.all(systems.slice(index, index + 8).map((system) => collectPages(lc({ control_system_id: system.id })).catch((error) => {
      if (error && typeof error === "object" && "status" in error && error.status === 403)
        return [];
      throw error;
    })));
    modules.push(...pages.flat());
  }
  const search = (options.q || "").toLowerCase();
  const data = [
    ...new Map(modules.map((module) => [module.id, module])).values()
  ].filter((module) => !search || [module.name, module.custom_name, module.id].some((value) => value?.toLowerCase().includes(search)));
  return { data, total: data.length, next: null };
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
  querySupportModules
};
//# sourceMappingURL=chunk-PKJVK52W.js.map
