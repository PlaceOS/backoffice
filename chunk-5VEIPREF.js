import {
  planDomainCascade,
  planZoneCascade,
  runCascade
} from "./chunk-UF4RIHSK.js";
import {
  HotkeysService
} from "./chunk-ML24CAVR.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  BackofficeUsersService
} from "./chunk-RPCO7W3D.js";
import {
  canAccessSection,
  canUseSupportAction,
  clearSupportModuleCache,
  hasSupportRole,
  hasSupportSubsystem,
  isSubsystemUser,
  querySupportModules,
  querySupportSystems,
  querySupportZones,
  selectSupportGroup,
  selected_support_group_id
} from "./chunk-BPSZRBL2.js";
import {
  NavigationEnd,
  Router
} from "./chunk-5N7DC3QB.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZYXD5WKE.js";
import {
  SettingsService
} from "./chunk-SHWF4MFV.js";
import {
  AsyncHandler
} from "./chunk-ZPWJKOG5.js";
import {
  waitForEvent,
  waitForSignalValue
} from "./chunk-ZXDSRNPN.js";
import {
  Dialog
} from "./chunk-CZLJS5TO.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import {
  $c,
  Bc,
  Dn,
  Du,
  Es,
  Eu,
  Fc,
  Gc,
  Hn,
  Ja,
  Jo,
  Ka,
  Lc,
  Mu,
  Nt,
  Nu,
  Pa,
  Pe,
  Qa,
  Ta,
  Ua,
  Us,
  Va,
  Vo,
  Xo,
  Yo,
  Za,
  _h,
  bc,
  de,
  eh,
  en,
  eu,
  ga,
  gc,
  gh,
  hr,
  ih,
  iu,
  jc,
  mc,
  mh,
  nu,
  ou,
  qa,
  qs,
  rh,
  ru,
  sh,
  su,
  th,
  tr,
  wu,
  xa,
  yc,
  yh
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml,
  log
} from "./chunk-DGKMQHVX.js";
import {
  Service,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-OGAUD6Z3.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/common/actions.ts
var domains = {
  query: (_) => Jo({
    q: _,
    fields: ["id", "name", "domain"].join(",")
  }),
  show: (_) => Vo(_),
  save: (item) => item.id ? Yo(item.id, item) : Xo(item),
  remove: (item) => eu(item.id),
  itemConstructor: tr,
  loadModal: () => import("./chunk-HKTLFV6O.js").then(
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
};
var drivers = {
  query: (_) => nu({
    q: _,
    fields: ["id", "name", "module_name"].join(",")
  }),
  show: (_) => su(_),
  save: (item) => item.id ? iu(item.id, item) : ru(item),
  remove: (item) => ou(item.id),
  itemConstructor: qs,
  loadModal: () => import("./chunk-OSCRS66Z.js").then(
    (m) => m.DriverFormComponent
  ),
  delete_message: ``,
  delete_extra: async (_) => {
    const query = {
      offset: 0,
      limit: 1,
      driver_id: _.id
    };
    const count = await mc(query).then(({ total }) => total).catch((_err) => 0);
    return count ? [
      "error",
      `${count} modules that rely on this driver will be <strong>immediately</strong> removed.`
    ] : null;
  },
  name: "DRIVERS"
};
var groups = {
  query: (_) => Eu({
    q: _,
    fields: ["id", "name", "description", "authority_id"].join(",")
  }),
  show: (_) => Mu(_),
  save: (item) => item.id ? Nu(item.id, item) : wu(item),
  remove: (item) => Du(item.id),
  itemConstructor: Hn,
  loadModal: () => import("./chunk-XU6NYYLU.js").then(
    (m) => m.GroupFormComponent
  ),
  delete_message: ``,
  name: "GROUPS"
};
var modules = {
  query: (_) => querySupportModules({
    q: _,
    fields: ["id", "name", "custom_name", "module_name"].join(",")
  }),
  show: (_) => gc(_),
  // The support group module list is cached, so drop it once this lands
  save: (item) => (item.id ? yc(item.id, item) : $c(item)).finally(
    clearSupportModuleCache
  ),
  remove: (item) => bc(item.id).finally(clearSupportModuleCache),
  itemConstructor: Es,
  loadModal: () => import("./chunk-LSLIVU5E.js").then(
    (m) => m.ModuleFormComponent
  ),
  delete_message: ``,
  name: "MODULES"
};
var repositories = {
  query: (_) => Fc({
    q: _,
    fields: ["id", "name", "repo_type"].join(",")
  }),
  show: (_) => Lc(_),
  save: (item) => item.id ? jc(item.id, item) : Gc(item),
  remove: (item) => Bc(item.id),
  itemConstructor: hr,
  loadModal: () => import("./chunk-ZBNOEOBD.js").then(
    (m) => m.RepositoryFormComponent
  ),
  delete_message: `'`,
  name: "REPOS"
};
var systems = {
  query: (_) => querySupportSystems({
    q: _,
    fields: ["id", "name", "display_name"].join(",")
  }),
  show: (_) => xa(_),
  save: saveSystem,
  remove: (item) => Ta(item.id),
  itemConstructor: Us,
  loadModal: () => import("./chunk-NICMRZ2T.js").then(
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
  if (item.id) return qa(item.id, form_data);
  const system = await Pa(form_data);
  await addLogicDriverModules(system, driver_ids);
  if (start_modules) await Ua(system.id);
  return system;
}
async function addLogicDriverModules(system, driver_ids) {
  if (!driver_ids.length) return;
  await Promise.all(
    [...new Set(driver_ids)].map(async (driver_id) => {
      const driver = await su(driver_id);
      if (driver.role !== Nt.Logic) return;
      await $c({
        driver_id: driver.id,
        control_system_id: system.id,
        name: driver.name || driver.module_name,
        uri: driver.default_uri,
        port: driver.default_port || 1,
        role: driver.role,
        alert_level: driver.alert_level,
        ignore_connected: driver.ignore_connected
      });
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
var triggers = {
  query: (_) => Qa({
    q: _,
    fields: ["id", "name", "display_name"].join(",")
  }),
  show: (_) => Ka(_),
  save: (item) => item.id ? Za(item.id, item) : Ja(item),
  remove: (item) => Va(item.id),
  itemConstructor: de,
  loadModal: () => import("./chunk-B3WW3NA7.js").then(
    (m) => m.TriggerFormComponent
  ),
  delete_message: ``,
  name: "TRIGGERS"
};
var users = {
  query: (_, options) => eh(__spreadProps(__spreadValues({}, options), {
    q: _,
    fields: [
      "id",
      "name",
      "email",
      "authority_id",
      "groups",
      "deleted"
    ].join(",")
  })),
  show: (_) => th(_),
  save: (item) => item.id ? sh(item.id, item) : ih(item),
  remove: (item) => rh(item.id),
  itemConstructor: Dn,
  loadModal: () => import("./chunk-RKOUD2YN.js").then((m) => m.UserFormComponent),
  delete_message: ``,
  name: "USERS"
};
var zones = {
  query: (_) => querySupportZones({
    q: _,
    fields: ["id", "name", "display_name", "tags"].join(",")
  }),
  show: (_) => _h(_),
  save: (item) => item.id ? mh(item.id, item) : gh(item),
  remove: (item) => yh(item.id),
  itemConstructor: en,
  loadModal: () => import("./chunk-TGTKB5ZO.js").then((m) => m.ZoneFormComponent),
  delete_message: ``,
  cascade: {
    label: "ZONES.DELETE_CASCADE",
    description: "ZONES.DELETE_CASCADE_DESC",
    resource_type: "zone",
    plan: (item) => planZoneCascade(item.id)
  },
  name: "ZONES"
};
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

// src/app/common/item.service.ts
var CASCADE_OPTION = "cascade";
var receiptItems = (resources) => resources.map((resource) => ({
  type: i18n(`CASCADE.TYPE_${resource.type.toUpperCase()}`),
  id: resource.id,
  name: resource.name
}));
var NO_COPY_TYPES = ["triggers"];
var NO_DUPLICATE_TYPES = [
  "users",
  "domains",
  "repositories",
  ...NO_COPY_TYPES
];
var SETTINGS_TYPES = /* @__PURE__ */ new Set([
  "drivers",
  "modules",
  "systems",
  "zones"
]);
var ActiveItemService = class _ActiveItemService extends AsyncHandler {
  _router = inject(Router);
  _settings = inject(SettingsService);
  _hotkey = inject(HotkeysService);
  _dialog = inject(Dialog);
  _user = inject(BackofficeUsersService);
  /** Whether active item is loading */
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list should show on mobile */
  _show_options = signal(
    false,
    ...ngDevMode ? [{ debugName: "_show_options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list should show on mobile */
  _search = signal(
    "",
    ...ngDevMode ? [{ debugName: "_search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _include_deleted = signal(
    false,
    ...ngDevMode ? [{ debugName: "_include_deleted" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _list_version = 0;
  include_deleted = this._include_deleted.asReadonly();
  /** Currently active item */
  _active_item = signal(
    null,
    ...ngDevMode ? [{ debugName: "_active_item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Currently active item */
  _next_query = signal(
    null,
    ...ngDevMode ? [{ debugName: "_next_query" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of items for the current type */
  _list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list is loading */
  _loading_list = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether active item is loading */
  _name = signal(
    null,
    ...ngDevMode ? [{ debugName: "_name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Type of the active item */
  _type;
  /** Number of items */
  _count = signal(
    0,
    ...ngDevMode ? [{ debugName: "_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _scope_version = 0;
  /** Id of the latest `setItem` call, so stale responses are dropped */
  _item_request = 0;
  /** Id of the latest settings refresh, so stale responses are dropped */
  _settings_request = 0;
  _items_changed = signal(
    0,
    ...ngDevMode ? [{ debugName: "_items_changed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  count = this._count.asReadonly();
  /**
   * Changes after any item is saved, duplicated, bulk added or removed, so
   * views that cache data derived from many items know to reload it
   */
  items_changed = this._items_changed.asReadonly();
  get total() {
    return this._count();
  }
  /** Signal for item loading state */
  loading = this._loading.asReadonly();
  /** Signal for item list loading state */
  loading_list = this._loading_list.asReadonly();
  /** Signal for list of items */
  list = this._list.asReadonly();
  /** Signal for active item */
  active_item$ = this._active_item.asReadonly();
  /** Signal for active item */
  item = this._active_item.asReadonly();
  /** Signal for list of items */
  list_items = () => this._list();
  /** Signal for whether the item list should show on mobile */
  show_options = this._show_options.asReadonly();
  /** Available API actions for the active type */
  get actions() {
    return ACTIONS[this._type];
  }
  get active_item() {
    return this._active_item();
  }
  get type() {
    return this._type;
  }
  /** Whether the active item can be copied, or duplicated without edits */
  canCopy(duplicate = false) {
    const blocked = duplicate ? NO_DUPLICATE_TYPES : NO_COPY_TYPES;
    return this.canMutate(2) && !blocked.includes(this._type);
  }
  canMutate(permission) {
    if (this._user.current()?.sys_admin)
      return true;
    return ["systems", "modules", "zones", "users"].includes(this.type) && isSubsystemUser() && canUseSupportAction(permission);
  }
  switchGroup(id) {
    if (id === selected_support_group_id() || !selectSupportGroup(id))
      return;
    this._scope_version++;
    this._active_item.set(null);
    this._next_query.set(null);
    this._list.set([]);
    this._count.set(0);
    this._search.set("");
    this._loading.set(false);
    this._loading_list.set(false);
    const section = canAccessSection(this.type) ? this.type : ["systems", "modules", "zones", "users"].find(canAccessSection);
    this._router.navigate(["/", section || "systems", "-"]);
    if (section === this.type)
      this.updateList();
  }
  moreItems() {
    this.updateList();
  }
  setIncludeDeleted(include) {
    if (this.type !== "users" || include === this._include_deleted())
      return;
    this._include_deleted.set(include);
    this.setSearch(this._search());
  }
  setSearch(str) {
    this._list_version++;
    this._search.set(str);
    this._loading_list.set(true);
    this._next_query.set(null);
    this._list.set([]);
    this.updateList();
  }
  constructor() {
    super();
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateType();
      }
    });
    this._hotkey.listen(["KeyN"], () => this.create());
    this._hotkey.listen(["KeyE"], () => this.edit());
    setTimeout(() => this.updateType(), 300);
  }
  /** Update the active item */
  async setItem(id) {
    const request = ++this._item_request;
    const user = await waitForSignalValue(this._user.user, (user2) => !!user2).catch(() => null);
    if (!user)
      return;
    if (!hasSupportRole() && !hasSupportSubsystem())
      return;
    const scope_version = this._scope_version;
    if ((!this.active_item || this.active_item.id !== id) && id.length > 2) {
      this._type = this._urlSegments()[0] ?? "";
      if (!this.type)
        return this.timeout("setItem", () => this.setItem(id));
      this._loading.set(true);
      this._active_item.set(null);
      const actions = this.actions;
      const [item, settings] = await Promise.all([
        actions.show(id).catch(() => notifyError(`Error loading ${id}`)),
        SETTINGS_TYPES.has(this._type) ? this.loadSettings(id) : null
      ]);
      if (scope_version !== this._scope_version || request !== this._item_request)
        return;
      this._active_item.set(item && settings ? new actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
        settings
      })) : item);
      const name = this._type[0].toUpperCase() + this._type.slice(1);
      this._name.set(name);
      this._settings.title = name;
      this._show_options.set(false);
      this._loading.set(false);
    }
  }
  toggleOptions() {
    this._show_options.set(!this._show_options());
  }
  create(item, copy = false) {
    if (!(copy ? this.canCopy() : this.canMutate(2)))
      return;
    item = item || this._active_item();
    const actions = Object.values(ACTIONS).find((v) => item instanceof v.itemConstructor) || this.actions;
    return this.edit(copy ? new actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
      id: "",
      name: `${item.name} (1)`
    })) : new actions.itemConstructor());
  }
  async bulkAdd() {
    if (!this.canMutate(2))
      return;
    const actions = this.actions;
    const { BulkItemModalComponent } = await import("./chunk-SAOT5FWS.js");
    this._settings.post("disable_uploads", true);
    const ref = this._dialog.open(BulkItemModalComponent, {
      height: "auto",
      width: "auto",
      maxHeight: "100vh",
      maxWidth: "100vw",
      data: {
        constr: actions.itemConstructor,
        name: this.type,
        save: actions.save
      }
    });
    ref.closed.subscribe(() => {
      this._settings.post("disable_uploads", false);
      this._items_changed.update((count) => count + 1);
    });
  }
  async edit(item, options = {}) {
    if (!this.canMutate((item || this.active_item)?.id ? 4 : 2))
      return;
    item = item || this._active_item();
    if (item) {
      const actions = Object.values(ACTIONS).find((v) => item instanceof v.itemConstructor) || this.actions;
      if (item.id && item !== this._active_item()) {
        item = await actions.show(item.id);
      }
      const component = await actions.loadModal();
      return new Promise((resolve) => {
        const ref = this._dialog.open(component, {
          data: __spreadValues({
            item: new actions.itemConstructor(__spreadValues({}, item))
          }, options)
        });
        waitForEvent(ref.componentInstance.event, (e) => e.reason === "done").then((event) => {
          resolve(event.metadata.item);
          this.replaceItem(event.metadata.item);
          if (event.metadata.item instanceof this.actions.itemConstructor) {
            this._router.navigate([
              `/${this._type}`,
              event.metadata.item.id,
              "about"
            ]);
          }
        });
      });
    }
  }
  async delete(force_removal = false) {
    if (force_removal && this.type !== "users")
      return;
    if (!this.canMutate(8))
      return;
    const item = this._active_item();
    if (!item)
      return;
    const actions = this.actions;
    const cascade = this._user.current()?.sys_admin ? actions.cascade : void 0;
    let plan = null;
    const { CONFIRM_METADATA, ConfirmModalComponent } = await import("./chunk-MB4VHGUZ.js");
    const ref = this._dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
      data: {
        title: i18n(force_removal ? "USERS.FORCE_DELETE" : `${actions.name}.DELETE`),
        content: i18n(force_removal ? "USERS.FORCE_DELETE_MSG" : `${actions.name}.DELETE_MSG`, {
          name: escapeHtml(item.display_name || item.name)
        }),
        extra: actions.delete_extra ? await actions.delete_extra(item) : null,
        options: cascade ? [
          {
            id: CASCADE_OPTION,
            label: i18n(cascade.label),
            description: i18n(cascade.description),
            details: async () => {
              plan = await cascade.plan(item);
              const { scope, summary, warnings } = plan;
              return { scope, summary, warnings };
            }
          }
        ] : void 0,
        icon: { type: "icon", content: "delete" },
        destructive: true
      }
    }));
    waitForEvent(ref.componentInstance.event, (e) => e.reason === "done").then(async (event) => {
      ref.componentInstance?.loading.set(i18n(`${actions.name}.DELETE_LOADING`));
      let outcome = null;
      const cascade_selected = !!event.metadata?.options?.[CASCADE_OPTION];
      if (cascade_selected && !plan) {
        ref.componentInstance?.loading.set("");
        return notifyError(i18n("CASCADE.PLAN_UNAVAILABLE"));
      }
      if (cascade_selected && plan) {
        ref.componentInstance?.disableClose();
        outcome = await runCascade(plan, (message) => ref.componentInstance?.loading.set(message));
        ref.componentInstance?.enableClose();
        if (outcome.failures.length) {
          ref.componentInstance?.loading.set("");
          ref.componentInstance?.result.set({
            title: i18n("CASCADE.RECEIPT_PARTIAL_TITLE"),
            items: receiptItems(outcome.removed),
            failed: receiptItems(outcome.failures.map((_) => _.resource)),
            skipped: receiptItems(outcome.skipped),
            note: i18n("CASCADE.RECEIPT_PARTIAL_NOTE", {
              name: item.name
            })
          });
          return notifyError(i18n("CASCADE.FAILED", {
            count: outcome.failures.length,
            // The status is what tells an admin
            // why an irreversible run stopped.
            // ts-client rejects with a raw
            // Response, which has no `.message`,
            // so the old fallback printed the
            // resource name as if it were the
            // reason — and the receipt already
            // names the resource anyway.
            error: describeError(outcome.failures[0].error)
          }, outcome.failures.length));
        }
        ref.componentInstance?.loading.set(i18n(`${actions.name}.DELETE_LOADING`));
      }
      await (force_removal ? rh(item.id, { force_removal: true }) : actions.remove(item)).then(() => {
        this._active_item.set(null);
        this.removeItem(item);
        this._router.navigate([
          `/${this._type}`,
          "-",
          "about"
        ]);
        if (outcome) {
          ref.componentInstance?.result.set({
            title: i18n("CASCADE.RECEIPT_TITLE"),
            items: receiptItems([
              ...outcome.removed,
              {
                type: cascade.resource_type,
                id: `${item.id}`,
                name: item.name
              }
            ]),
            note: i18n("CASCADE.RECEIPT_NOTE")
          });
          return;
        }
        notifySuccess(i18n(`${actions.name}.DELETE_SUCCESS`, {
          name: item.name
        }));
        ref.close();
      }).catch((err) => {
        ref.componentInstance?.loading.set("");
        if (outcome?.removed.length) {
          ref.componentInstance?.result.set({
            title: i18n("CASCADE.RECEIPT_PARTIAL_TITLE"),
            items: receiptItems(outcome.removed),
            failed: receiptItems([
              {
                type: cascade.resource_type,
                id: `${item.id}`,
                name: item.name
              }
            ]),
            note: i18n("CASCADE.RECEIPT_PARTIAL_NOTE", {
              name: item.name
            })
          });
        }
        notifyError(i18n(`${actions.name}.DELETE_ERROR`, {
          error: describeError(err)
        }));
      });
    }).catch((err) => {
      log("ITEM", "Delete flow failed", [describeError(err)], "error");
      ref.componentInstance?.loading.set("");
      notifyError(i18n(`${actions.name}.DELETE_ERROR`, {
        error: describeError(err)
      }));
    });
  }
  async duplicate() {
    if (!this.canCopy(true))
      return;
    const item = this._active_item();
    if (item) {
      const { DuplicateModalComponent } = await import("./chunk-L5SOA7UU.js");
      const ref = this._dialog.open(DuplicateModalComponent, {
        data: {
          item,
          save: this.actions.save
        }
      });
      ref.componentInstance.event.subscribe((e) => {
        if (e.reason === "done" && e.metadata?.[0]) {
          const copy = e.metadata[0];
          this._active_item.set(null);
          this.replaceItem(copy);
          this._router.navigate([`/${this._type}`, copy.id, "about"]);
        }
      });
    }
  }
  /**
   * Show a saved item in place of the active one with the same id, or as
   * the active item when there is none.
   */
  replaceItem(item) {
    this._items_changed.update((count) => count + 1);
    const current = this.active_item;
    if (!item?.id || current && current.id !== item.id)
      return;
    this._active_item.set(current?.settings && this.actions?.itemConstructor ? new this.actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
      settings: current.settings
    })) : item);
    const list = this._list().filter((i) => i.id !== item.id);
    list.push(item);
    list.sort((a, b) => a.name?.localeCompare(b.name));
    this._list.set(list);
    if (SETTINGS_TYPES.has(this._type))
      this.refreshSettings(`${item.id}`);
  }
  removeItem(item) {
    this._items_changed.update((count) => count + 1);
    if (item.id) {
      const list = this._list().filter((i) => i.id !== item.id);
      list.sort((a, b) => a.name?.localeCompare(b.name));
      this._count.set(this._count() - 1);
      this._list.set(list);
    }
  }
  /** Path segments of the current route, without query params or fragment */
  _urlSegments() {
    const tree = this._router.parseUrl(this._router.url);
    return tree.root.children["primary"]?.segments.map((_) => _.path) ?? [];
  }
  async updateType() {
    const url = this._urlSegments();
    const old_type = this._type;
    this._type = url[0] ?? "";
    if (old_type !== this._type) {
      this._include_deleted.set(false);
      this._list_version++;
      clearSupportModuleCache();
      log("Service", `Item type set to ${this._type}`);
      this._next_query.set(null);
      this._active_item.set(null);
      this._search.set("");
      const name = this._type[0]?.toUpperCase() + this._type.slice(1);
      this._name.set(name);
      this._settings.title = name;
      this._show_options.set(true);
      this.updateList();
    }
    if (this._type !== "admin" && url[1]) {
      await this.setItem(url[1]);
    }
    if (this._type === "admin") {
      this._active_item.set({ name: "PlaceOS Admin" });
    }
  }
  updateList() {
    const type = this._type;
    const search = this._search();
    const list_version = this._list_version;
    const scope_version = this._scope_version;
    this.timeout("update", async () => {
      if (!this.actions)
        return;
      const user = await waitForSignalValue(this._user.user, (user2) => !!user2).catch(() => null);
      if (!user) {
        this._loading_list.set(false);
        return;
      }
      if (list_version !== this._list_version || type !== this._type || scope_version !== this._scope_version || !hasSupportRole() && !hasSupportSubsystem())
        return;
      if (!canAccessSection(type)) {
        this._loading_list.set(false);
        return;
      }
      this._loading_list.set(true);
      let next = this._next_query();
      if (!next) {
        next = () => this.actions.query(search, type === "users" ? { include_deleted: this._include_deleted() } : void 0);
        this._list.set([]);
      }
      const resp = await next().catch((err) => {
        log("Service", `Error loading ${type} list.`, [err], "warn");
        return null;
      });
      if (scope_version !== this._scope_version || list_version !== this._list_version)
        return;
      if (!resp) {
        if (type === this._type) {
          this._next_query.set(null);
          this._loading_list.set(false);
          notifyError(`Error loading ${type} list.`);
        }
        return;
      }
      if (type === this._type) {
        this._next_query.set(resp.next || (() => Promise.resolve({
          data: [],
          total: resp.total,
          next: null
        })));
        this._count.set(resp.total);
        const incoming = new Set(resp.data.map((item) => item.id));
        const list = this._list().filter((i) => !incoming.has(i.id));
        const new_list = list.concat(resp.data);
        new_list.sort((a, b) => a.name?.localeCompare(b.name));
        this._list.set(new_list);
        this._loading_list.set(false);
      }
    }, search ? 300 : 10);
  }
  /**
   * Reload the active item's settings. Sets the item again only when they
   * changed, as state services reload everything each time it is set.
   */
  async refreshSettings(id) {
    const request = ++this._settings_request;
    const settings = await this.loadSettings(id);
    const active = this.active_item;
    if (!settings || request !== this._settings_request || active?.id !== id || !this.actions?.itemConstructor)
      return;
    const unchanged = settings.every((level, idx) => {
      const shown = active.settings?.[idx];
      return level.id === shown?.id && level.updated_at === shown?.updated_at && level.settings_string === shown?.settings_string && `${level.keys}` === `${shown?.keys}`;
    });
    if (unchanged)
      return;
    this._active_item.set(new this.actions.itemConstructor(__spreadProps(__spreadValues({}, active), {
      settings
    })));
  }
  /**
   * Settings of each encryption level for the item, with a blank entry for
   * missing levels. Resolves `null` if they cannot be loaded.
   */
  async loadSettings(id) {
    const response = await ga({ parent_id: id }).catch(() => null);
    if (!response)
      return null;
    return new Array(5).fill(0).map((_, idx) => response.data.find((_2) => _2.encryption_level === idx) || new Pe({ encryption_level: idx }));
  }
  static \u0275fac = function ActiveItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveItemService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _ActiveItemService, factory: _ActiveItemService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveItemService, [{
    type: Service
  }], () => [], null);
})();

export {
  ActiveItemService
};
//# debugId=09b732d0-c008-52b9-9b0e-17975429b209
//# sourceMappingURL=chunk-5VEIPREF.js.map
