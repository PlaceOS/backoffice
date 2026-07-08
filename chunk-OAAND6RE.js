import {
  GroupBulkAddModalComponent,
  GroupPermissionsModalComponent
} from "./chunk-DKLBPKQ4.js";
import {
  ActiveItemService
} from "./chunk-OUN3FKCL.js";
import {
  openConfirmModal
} from "./chunk-UVXXRHB2.js";
import {
  MatDialog
} from "./chunk-AQMMFGML.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  waitForEvent
} from "./chunk-Y4WYMPD6.js";
import {
  i18n
} from "./chunk-ZCVCPEH7.js";
import {
  Cu,
  Eu,
  Ia,
  Pn,
  Pu,
  Ru,
  Service,
  Tu,
  Uu,
  computed,
  inject,
  ja,
  qu,
  resource,
  setClassMetadata,
  signal,
  xu,
  ɵɵdefineService
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
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
  loading = this._loading.asReadonly();
  _users = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_users" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Pn))
        return [];
      this._loading.set(true);
      try {
        const response = await xu({
          group_id: item.id,
          limit: 1e3
        }).catch(() => ({ data: [] }));
        return response.data.sort((a, b) => (a.user?.name || a.user_id).localeCompare(b.user?.name || b.user_id));
      } finally {
        this._loading.set(false);
      }
    }
  }));
  users = computed(
    () => this._users.value() || [],
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _zones = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zones" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Pn))
        return [];
      this._loading.set(true);
      try {
        const response = await Uu({
          group_id: item.id,
          limit: 1e3
        }).catch(() => ({ data: [] }));
        return response.data.sort((a, b) => (a.zone?.name || a.zone_id).localeCompare(b.zone?.name || b.zone_id));
      } finally {
        this._loading.set(false);
      }
    }
  }));
  zones = computed(
    () => this._zones.value() || [],
    ...ngDevMode ? [{ debugName: "zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Pn))
        return {};
      const [users, zones] = await Promise.all([
        xu({ group_id: item.id, limit: 1 }).then((response) => response.total).catch(() => 0),
        Uu({ group_id: item.id, limit: 1 }).then((response) => response.total).catch(() => 0)
      ]);
      return { users, zones };
    }
  }));
  counts = computed(
    () => this._counts.value() || { users: 0, zones: 0 },
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
    await qu({
      group_id: this.active_item.id,
      user_id: user.id
    }).catch((error) => {
      notifyError(i18n("GROUPS.USER_ADD_ERROR", { error }));
      throw error;
    });
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
        query_fn: (query) => Ia({
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
    this._loading.set(true);
    const results = await Promise.allSettled(users.map((user) => qu({
      group_id: this.active_item.id,
      user_id: user.id,
      permissions
    })));
    this._loading.set(false);
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
        query_fn: (query) => ja({
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
    this._loading.set(true);
    const results = await Promise.allSettled(zones.map((zone) => Tu({
      group_id: this.active_item.id,
      zone_id: zone.id
    })));
    this._loading.set(false);
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
        name: item.user?.name || item.user_id
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("GROUPS.USER_REMOVE_LOADING"));
    await Ru(item.user_id, item.group_id).catch((error) => {
      details.close();
      notifyError(i18n("GROUPS.USER_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("GROUPS.USER_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateUser(item) {
    await Pu(item.user_id, item.group_id, {
      permissions: +item.permissions || 0
    }).catch((error) => {
      notifyError(i18n("GROUPS.USER_SAVE_ERROR", { error }));
      throw error;
    });
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
    await Tu({
      group_id: this.active_item.id,
      zone_id: zone.id
    }).catch((error) => {
      notifyError(i18n("GROUPS.ZONE_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("GROUPS.ZONE_ADD_SUCCESS"));
    this.changed();
  }
  async removeZone(item) {
    const details = await openConfirmModal({
      title: i18n("GROUPS.ZONE_REMOVE"),
      content: i18n("GROUPS.ZONE_REMOVE_MSG", {
        name: item.zone?.name || item.zone_id
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("GROUPS.ZONE_REMOVE_LOADING"));
    await Cu(item.group_id, item.zone_id).catch((error) => {
      details.close();
      notifyError(i18n("GROUPS.ZONE_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("GROUPS.ZONE_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateZone(item) {
    await Eu(item.group_id, item.zone_id, {
      permissions: +item.permissions || 0,
      deny: !!item.deny
    }).catch((error) => {
      notifyError(i18n("GROUPS.ZONE_SAVE_ERROR", { error }));
      throw error;
    });
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
//# sourceMappingURL=chunk-OAAND6RE.js.map
