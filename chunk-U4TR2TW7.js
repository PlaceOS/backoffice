import {
  groupMembership
} from "./chunk-Y72IETCD.js";
import {
  openedTabs
} from "./chunk-X2O3T64J.js";
import {
  ActiveItemService
} from "./chunk-WP6GA2P2.js";
import {
  describeError
} from "./chunk-YCY3FSLN.js";
import {
  notifyError
} from "./chunk-V2X4XHND.js";
import {
  newItem
} from "./chunk-TXVXL5KT.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  i18n
} from "./chunk-UA77DMWK.js";
import {
  UserAdminMetadataResponse,
  groups_users_exports,
  groups_zones_exports,
  users_exports,
  zones_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow,
  orThrowPage
} from "./chunk-LD3K5ATK.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/groups/group-state.service.ts
var GroupStateService = class _GroupStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(Dialog);
  _changed = signal(
    0,
    ...ngDevMode ? [{ debugName: "_changed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = computed(
    () => this._state.activeOf("groups"),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = computed(
    () => this.user_members.saving() || this.zone_members.saving() || this._users.isLoading() || this._zones.isLoading(),
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _group_id = computed(
    () => this.item()?.id || void 0,
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
      if (!item)
        return empty;
      const response = await groups_users_exports.query({ group_id: item.id, limit: full ? 1e3 : 1 }).then(orThrowPage).catch((error) => {
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
      if (!item)
        return empty;
      const response = await groups_zones_exports.query({ group_id: item.id, limit: full ? 1e3 : 1 }).then(orThrowPage).catch((error) => {
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
    return this._state.activeOf("groups");
  }
  /** User memberships of the active group */
  user_members = groupMembership(this._dialog, {
    one: "GROUPS.USER",
    many: "GROUPS.USERS",
    search: "GROUPS.USER_SEARCH",
    column: "GROUPS.FIELD_USER",
    member_key: "user",
    route: "users",
    no_permissions: "COMMON.NONE",
    rows: () => this.users(),
    authority_id: () => this.active_item?.authority_id,
    query: (q, authority_id) => users_exports.query({ q, limit: 20, authority_id }).then(orThrowPage).then((response) => response.data.map((user) => newItem(UserAdminMetadataResponse, user))),
    member_id: (row) => row.user_id,
    member_name: (row) => row.user?.name || row.user_id,
    member_detail: (row) => row.user?.email,
    item_authority: (user) => user.authority_id,
    bulk_permissions: () => this.active_item?.default_permissions,
    add: (user_id, permissions) => groups_users_exports.create({
      body: __spreadValues({
        group_id: this.active_item.id,
        user_id
      }, permissions === void 0 ? {} : { permissions })
    }).then(orThrow),
    remove: (row) => groups_users_exports.destroy({ user_id: row.user_id, group_id: row.group_id }).then(orThrow),
    update: (row, { permissions }) => groups_users_exports.update({
      user_id: row.user_id,
      group_id: row.group_id,
      body: { permissions }
    }).then(orThrow),
    changed: () => this.changed()
  });
  /** Zone memberships of the active group */
  zone_members = groupMembership(this._dialog, {
    one: "GROUPS.ZONE",
    many: "GROUPS.ZONES",
    search: "GROUPS.ZONE_SEARCH",
    column: "GROUPS.FIELD_ZONE",
    member_key: "zone",
    route: "zones",
    no_permissions: "COMMON.DEFAULT",
    show_deny: true,
    rows: () => this.zones(),
    authority_id: () => this.active_item?.authority_id,
    // Zones have no domain, so the search is not filtered by it
    query: (q) => zones_exports.query({ q, limit: 20 }).then(orThrowPage).then((response) => [...response.data]),
    member_id: (row) => row.zone_id,
    member_name: (row) => row.zone?.name || row.zone_id,
    member_detail: (row) => row.zone_id,
    item_authority: () => void 0,
    add: (zone_id) => groups_zones_exports.create({
      body: { group_id: this.active_item.id, zone_id }
    }).then(orThrow),
    remove: (row) => groups_zones_exports.destroy({ group_id: row.group_id, zone_id: row.zone_id }).then(orThrow),
    update: (row, { permissions, deny }) => groups_zones_exports.update({
      group_id: row.group_id,
      zone_id: row.zone_id,
      body: {
        permissions,
        deny
      }
    }).then(orThrow),
    changed: () => this.changed()
  });
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
//# debugId=2ef9fda6-e1be-52b4-bb52-5ed833310fdf
//# sourceMappingURL=chunk-U4TR2TW7.js.map
