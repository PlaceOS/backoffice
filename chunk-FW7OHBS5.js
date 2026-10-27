import {
  GroupBulkAddModalComponent
} from "./chunk-WMGWXJZY.js";
import {
  openedTabs
} from "./chunk-IJ7SWPKJ.js";
import {
  ActiveItemService
} from "./chunk-IYFGIRJZ.js";
import {
  GroupPermissionsModalComponent
} from "./chunk-FDHT3WOM.js";
import {
  openConfirmModal
} from "./chunk-R464B6VT.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-OLETOVUH.js";
import {
  waitForEvent
} from "./chunk-BS66IPO2.js";
import {
  MatDialog
} from "./chunk-4K4B4UVA.js";
import {
  i18n
} from "./chunk-V4STGI54.js";
import {
  escapeHtml
} from "./chunk-AOPYKUKV.js";
import {
  Hn,
  Ju,
  Ku,
  Vu,
  Wu,
  Xu,
  Zu,
  dh,
  ec,
  eh,
  tc
} from "./chunk-3QDC3AOP.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/groups/group-state.service.ts
var GroupStateService = class _GroupStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _changed = signal(
    0,
    ...ngDevMode ? [{ debugName: "_changed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Set while a bulk add runs */
  _saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "_saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = computed(
    () => this._state.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = computed(
    () => this._saving() || this._users.isLoading() || this._zones.isLoading(),
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _group_id = computed(
    () => {
      const item = this.item();
      return item instanceof Hn ? item.id : void 0;
    },
    ...ngDevMode ? [{ debugName: "_group_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Member lists only load once their tab is opened. Until then a single
  // row query gives the tab count.
  _opened_tabs = openedTabs(this._group_id);
  _load_users = computed(
    () => this._opened_tabs().has("users"),
    ...ngDevMode ? [{ debugName: "_load_users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _load_zones = computed(
    () => this._opened_tabs().has("zones"),
    ...ngDevMode ? [{ debugName: "_load_zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _users = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_users" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._changed(),
      full: this._load_users()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof Hn))
        return empty;
      const response = await Wu({
        group_id: item.id,
        limit: full ? 1e3 : 1
      }).catch((error) => {
        notifyError(i18n("GROUPS.USERS_LOAD_ERROR", {
          error: describeError(error)
        }));
        return empty;
      });
      if (!full)
        return __spreadProps(__spreadValues({}, empty), { total: response.total });
      return {
        total: response.total,
        data: [...response.data].sort((a, b) => (a.user?.name || a.user_id).localeCompare(b.user?.name || b.user_id))
      };
    }
  }));
  users = computed(
    () => this._users.value()?.data || [],
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zones" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._changed(),
      full: this._load_zones()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof Hn))
        return empty;
      const response = await Vu({
        group_id: item.id,
        limit: full ? 1e3 : 1
      }).catch((error) => {
        notifyError(i18n("GROUPS.ZONES_LOAD_ERROR", {
          error: describeError(error)
        }));
        return empty;
      });
      if (!full)
        return __spreadProps(__spreadValues({}, empty), { total: response.total });
      return {
        total: response.total,
        data: [...response.data].sort((a, b) => (a.zone?.name || a.zone_id).localeCompare(b.zone?.name || b.zone_id))
      };
    }
  }));
  zones = computed(
    () => this._zones.value()?.data || [],
    ...ngDevMode ? [{ debugName: "zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counts = computed(
    () => ({
      users: this._users.value()?.total || 0,
      zones: this._zones.value()?.total || 0
    }),
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_item() {
    return this._state.active_item;
  }
  async addUser(user) {
    if (!user?.id)
      return;
    try {
      await Ku({
        group_id: this.active_item.id,
        user_id: user.id
      });
    } catch (error) {
      return notifyError(i18n("GROUPS.USER_ADD_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("GROUPS.USER_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddUsers(existing_users = []) {
    const result = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "GROUPS.USERS_BULK",
        placeholder: "GROUPS.USER_SEARCH",
        empty_message: "GROUPS.USERS_BULK_EMPTY",
        show_permissions: true,
        permissions: this.active_item?.default_permissions,
        query_fn: (query) => eh({
          q: query,
          limit: 20,
          authority_id: this.active_item?.authority_id
        }).then((response) => response.data),
        exclude: (user) => {
          const authority_id = this.active_item?.authority_id;
          return !!existing_users.find((_) => _.user_id === user.id) || !!authority_id && user.authority_id !== authority_id;
        }
      },
      panelClass: "bulk-add-dialog",
      height: "auto",
      width: "auto",
      maxHeight: "calc(100vh - 2em)",
      maxWidth: "calc(100vw - 2em)"
    }).afterClosed());
    const users = result?.items;
    if (!users?.length)
      return;
    const permissions = +result.permissions || 0;
    this._saving.set(true);
    const results = await Promise.allSettled(users.map((user) => Ku({
      group_id: this.active_item.id,
      user_id: user.id,
      permissions
    })));
    this._saving.set(false);
    const failed = results.filter((_) => _.status === "rejected").length;
    if (failed) {
      notifyError(i18n("GROUPS.USERS_BULK_ERROR", { count: failed }));
    }
    const added = results.length - failed;
    if (added) {
      notifySuccess(i18n("GROUPS.USERS_BULK_SUCCESS", { count: added }));
    }
    this.changed();
  }
  async bulkAddZones(existing_zones = []) {
    const result = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "GROUPS.ZONES_BULK",
        placeholder: "GROUPS.ZONE_SEARCH",
        empty_message: "GROUPS.ZONES_BULK_EMPTY",
        query_fn: (query) => dh({
          q: query,
          limit: 20,
          authority_id: this.active_item?.authority_id
        }).then((response) => response.data),
        exclude: (zone) => {
          const authority_id = this.active_item?.authority_id;
          const zone_authority_id = zone.authority_id;
          return !!existing_zones.find((_) => _.zone_id === zone.id) || !!authority_id && !!zone_authority_id && zone_authority_id !== authority_id;
        }
      },
      panelClass: "bulk-add-dialog",
      height: "auto",
      width: "auto",
      maxHeight: "calc(100vh - 2em)",
      maxWidth: "calc(100vw - 2em)"
    }).afterClosed());
    const zones = result?.items;
    if (!zones?.length)
      return;
    this._saving.set(true);
    const results = await Promise.allSettled(zones.map((zone) => Xu({
      group_id: this.active_item.id,
      zone_id: zone.id
    })));
    this._saving.set(false);
    const failed = results.filter((_) => _.status === "rejected").length;
    if (failed) {
      notifyError(i18n("GROUPS.ZONES_BULK_ERROR", { count: failed }));
    }
    const added = results.length - failed;
    if (added) {
      notifySuccess(i18n("GROUPS.ZONES_BULK_SUCCESS", { count: added }));
    }
    this.changed();
  }
  async removeUser(item) {
    const details = await openConfirmModal({
      title: i18n("GROUPS.USER_REMOVE"),
      content: i18n("GROUPS.USER_REMOVE_MSG", {
        name: escapeHtml(item.user?.name || item.user_id)
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("GROUPS.USER_REMOVE_LOADING"));
    try {
      await Ju(item.user_id, item.group_id);
    } catch (error) {
      details.close();
      return notifyError(i18n("GROUPS.USER_REMOVE_ERROR", {
        error: describeError(error)
      }));
    }
    details.close();
    notifySuccess(i18n("GROUPS.USER_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateUser(item) {
    try {
      await Zu(item.user_id, item.group_id, {
        permissions: +item.permissions || 0
      });
    } catch (error) {
      return notifyError(i18n("GROUPS.USER_SAVE_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("GROUPS.USER_SAVE_SUCCESS"));
    this.changed();
  }
  async editUserPermissions(item) {
    const result = await waitForEvent(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "GROUPS.USER_PERMISSIONS",
        permissions: item.permissions
      }
    }).afterClosed());
    if (!result)
      return;
    await this.updateUser(__spreadProps(__spreadValues({}, item), { permissions: result.permissions }));
  }
  async addZone(zone) {
    if (!zone?.id)
      return;
    try {
      await Xu({
        group_id: this.active_item.id,
        zone_id: zone.id
      });
    } catch (error) {
      return notifyError(i18n("GROUPS.ZONE_ADD_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("GROUPS.ZONE_ADD_SUCCESS"));
    this.changed();
  }
  async removeZone(item) {
    const details = await openConfirmModal({
      title: i18n("GROUPS.ZONE_REMOVE"),
      content: i18n("GROUPS.ZONE_REMOVE_MSG", {
        name: escapeHtml(item.zone?.name || item.zone_id)
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("GROUPS.ZONE_REMOVE_LOADING"));
    try {
      await tc(item.group_id, item.zone_id);
    } catch (error) {
      details.close();
      return notifyError(i18n("GROUPS.ZONE_REMOVE_ERROR", {
        error: describeError(error)
      }));
    }
    details.close();
    notifySuccess(i18n("GROUPS.ZONE_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateZone(item) {
    try {
      await ec(item.group_id, item.zone_id, {
        permissions: +item.permissions || 0,
        deny: !!item.deny
      });
    } catch (error) {
      return notifyError(i18n("GROUPS.ZONE_SAVE_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("GROUPS.ZONE_SAVE_SUCCESS"));
    this.changed();
  }
  async editZonePermissions(item) {
    const result = await waitForEvent(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "GROUPS.ZONE_PERMISSIONS",
        permissions: item.permissions,
        deny: item.deny,
        show_deny: true
      }
    }).afterClosed());
    if (!result)
      return;
    await this.updateZone(__spreadProps(__spreadValues({}, item), {
      permissions: result.permissions,
      deny: result.deny
    }));
  }
  changed() {
    this._changed.set((/* @__PURE__ */ new Date()).valueOf());
  }
  static \u0275fac = function GroupStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _GroupStateService, factory: _GroupStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupStateService, [{
    type: Service
  }], null, null);
})();

export {
  GroupStateService
};
//# debugId=6c17f8f3-ce8e-51d6-8536-452ef6980e27
//# sourceMappingURL=chunk-FW7OHBS5.js.map
