import {
  ACTIONS
} from "./chunk-L53BB3NN.js";
import {
  runCascade
} from "./chunk-SYZRTR66.js";
import {
  HotkeysService
} from "./chunk-SVCRV2SB.js";
import {
  describeError
} from "./chunk-N7V3DZSR.js";
import {
  BackofficeUsersService
} from "./chunk-OXU3CTMC.js";
import {
  canAccessSection,
  canUseSupportAction,
  clearSupportModuleCache,
  hasSupportRole,
  hasSupportSubsystem,
  isSubsystemUser,
  selectSupportGroup,
  selected_support_group_id
} from "./chunk-X3HUV4CQ.js";
import {
  staticPage
} from "./chunk-TVHKFUKR.js";
import {
  NavigationEnd,
  Router
} from "./chunk-LL56AHAM.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import {
  SettingsService
} from "./chunk-S6ATYSOE.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import {
  newItem,
  settingsLevels,
  withEmptyLists
} from "./chunk-PXU3R4CZ.js";
import {
  waitForEvent,
  waitForSignalValue
} from "./chunk-OTF7M54K.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  i18n
} from "./chunk-MSK6KGG6.js";
import {
  settings_exports,
  users_exports
} from "./chunk-K7DUQFI6.js";
import {
  orThrow,
  orThrowPage
} from "./chunk-4MDDUS4W.js";
import {
  escapeHtml,
  log
} from "./chunk-Y2QSYZTA.js";
import {
  Service,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
  /**
   * The active item, when the active section is `type`. `null` for other
   * sections. Use it in place of `instanceof` checks of the 6.x classes.
   */
  activeOf(type) {
    const item = this._active_item();
    return this._type === type && item ? item : null;
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
        actions.show(id).then((loaded) => withEmptyLists(actions.schema, loaded)).catch(() => notifyError(`Error loading ${id}`)),
        SETTINGS_TYPES.has(this._type) ? this.loadSettings(id) : null
      ]);
      if (scope_version !== this._scope_version || request !== this._item_request)
        return;
      this._active_item.set(item && settings ? __spreadProps(__spreadValues({}, item), { settings }) : item);
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
    const actions = this.actions;
    return this.edit(copy ? __spreadProps(__spreadValues({}, item), { id: "", name: `${item.name} (1)` }) : newItem(actions.schema));
  }
  async bulkAdd() {
    if (!this.canMutate(2))
      return;
    const actions = this.actions;
    const { BulkItemModalComponent } = await import("./chunk-FYZ4QIFX.js");
    this._settings.post("disable_uploads", true);
    const ref = this._dialog.open(BulkItemModalComponent, {
      height: "auto",
      width: "auto",
      maxHeight: "100vh",
      maxWidth: "100vw",
      data: {
        schema: actions.schema,
        name: this.type,
        save: actions.save
      }
    });
    ref.closed.subscribe(() => {
      this._settings.post("disable_uploads", false);
      this._items_changed.update((count) => count + 1);
    });
  }
  /**
   * Open the form of an item and save it.
   * @param item Item to edit. Defaults to the active item
   * @param options Extra data for the form
   * @param type Type of `item` when it is not the type of the section,
   * such as a module on the system page
   */
  async edit(item, options = {}, type = this._type) {
    if (!this.canMutate((item || this.active_item)?.id ? 4 : 2))
      return;
    item = item || this._active_item();
    if (item) {
      const section = this._type;
      const scope_version = this._scope_version;
      const actions = ACTIONS[type];
      if (item.id && item !== this._active_item()) {
        item = await actions.show(item.id);
      }
      const component = await actions.loadModal();
      return new Promise((resolve) => {
        const ref = this._dialog.open(component, {
          data: __spreadValues({
            item: __spreadValues({}, item)
          }, options)
        });
        waitForEvent(ref.componentInstance.event, (e) => e.reason === "done").then((event) => {
          resolve(event.metadata.item);
          const saved = event.metadata.item;
          if (type !== section || this._type !== section || this._scope_version !== scope_version) {
            this._items_changed.update((count) => count + 1);
            return;
          }
          this.replaceItem(saved);
          this._router.navigate([`/${section}`, saved.id, "about"]);
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
    const { CONFIRM_METADATA, ConfirmModalComponent } = await import("./chunk-UEF3KFZF.js");
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
      await (force_removal ? users_exports.destroy({ id: item.id, force_removal: true }).then(orThrow) : actions.remove(item)).then(() => {
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
      const { DuplicateModalComponent } = await import("./chunk-P4MLLB3T.js");
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
    const schema = this.actions?.schema;
    if (schema)
      item = withEmptyLists(schema, item);
    this._active_item.set(current?.settings ? __spreadProps(__spreadValues({}, item), { settings: current.settings }) : item);
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
      const resp = await (next() ?? Promise.resolve(__spreadProps(__spreadValues({}, staticPage([])), {
        total: this._count()
      }))).catch((err) => {
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
        this._next_query.set(resp.next || (() => Promise.resolve(__spreadProps(__spreadValues({}, staticPage([])), {
          total: resp.total
        }))));
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
    if (!settings || request !== this._settings_request || active?.id !== id)
      return;
    const unchanged = settings.every((level, idx) => {
      const shown = active.settings?.[idx];
      return level.id === shown?.id && level.updated_at === shown?.updated_at && level.settings_string === shown?.settings_string && `${level.keys}` === `${shown?.keys}`;
    });
    if (unchanged)
      return;
    this._active_item.set(__spreadProps(__spreadValues({}, active), { settings }));
  }
  /**
   * Settings of each encryption level for the item, with a blank entry for
   * missing levels. Resolves `null` if they cannot be loaded.
   */
  async loadSettings(id) {
    const response = await settings_exports.query({ parent_id: [id] }).then(orThrowPage).catch(() => null);
    return response ? settingsLevels(response.data) : null;
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
//# debugId=fd0622ad-9007-5cf6-881d-35fae8967d13
//# sourceMappingURL=chunk-YMOLTP5M.js.map
