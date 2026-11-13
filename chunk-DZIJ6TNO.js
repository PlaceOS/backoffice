import {
  groupMembership
} from "./chunk-F6G2Y5FY.js";
import {
  openedTabs
} from "./chunk-X2O3T64J.js";
import {
  ActiveItemService
} from "./chunk-6JCD3XP2.js";
import {
  openConfirmModal
} from "./chunk-BGDKOWYJ.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-2DKDRFBI.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import {
  Dn,
  Eu,
  Ju,
  Ku,
  Wu,
  Zu,
  ph,
  uc
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
} from "./chunk-DGKMQHVX.js";
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

// src/app/users/users-state.service.ts
var UsersStateService = class _UsersStateService {
  _service = inject(ActiveItemService);
  _dialog = inject(Dialog);
  _change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = computed(
    () => this.group_members.saving() || this._metadata_count.isLoading() || this._groups.isLoading(),
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = this._service.item;
  // The metadata tab loads its own list, so only the count is needed here
  _metadata_count = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_metadata_count" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this._service.active_item$(),
      change: this._change()
    }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Dn))
        return 0;
      return uc(item.id).then((d) => d.length).catch((_err) => 0);
    }
  }));
  counts = computed(
    () => ({
      metadata: this._metadata_count.value() || 0,
      groups: this._groups.value()?.total || 0
    }),
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _user_id = computed(
    () => {
      const item = this.item();
      return item instanceof Dn ? item.id : void 0;
    },
    ...ngDevMode ? [{ debugName: "_user_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // The group list only loads once its tab is opened. Until then a single
  // row query gives the tab count.
  _opened_tabs = openedTabs(this._user_id);
  _load_groups = computed(
    () => this._opened_tabs().has("groups"),
    ...ngDevMode ? [{ debugName: "_load_groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_groups" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      change: this._change(),
      full: this._load_groups()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof Dn))
        return empty;
      const response = await Wu({
        user_id: item.id,
        limit: full ? 1e3 : 1
      }).catch((error) => {
        notifyError(i18n("USERS.GROUPS_LOAD_ERROR", {
          error: describeError(error)
        }));
        return empty;
      });
      if (!full)
        return __spreadProps(__spreadValues({}, empty), { total: response.total });
      return {
        total: response.total,
        data: [...response.data].sort((a, b) => (a.group?.name || a.group_id).localeCompare(b.group?.name || b.group_id))
      };
    }
  }));
  groups = computed(
    () => this._groups.value()?.data || [],
    ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_item() {
    return this._service.active_item;
  }
  /** Group memberships of the active user */
  group_members = groupMembership(this._dialog, {
    one: "USERS.GROUP",
    many: "USERS.GROUPS",
    search: "GROUPS.SEARCH",
    column: "GROUPS.SINGULAR",
    member_key: "group",
    route: "groups",
    no_permissions: "COMMON.DEFAULT",
    rows: () => this.groups(),
    authority_id: () => this.active_item?.authority_id,
    query: (q, authority_id) => Eu({ q, limit: 20, authority_id }).then((response) => response.data),
    member_id: (row) => row.group_id,
    member_name: (row) => row.group?.name || row.group_id,
    member_detail: (row) => row.group_id,
    item_authority: (group) => group.authority_id,
    add: (group_id) => Ku({ user_id: this.active_item.id, group_id }),
    remove: (row) => Ju(row.user_id, row.group_id),
    update: (row, { permissions }) => Zu(row.user_id, row.group_id, { permissions }),
    changed: () => this.changed()
  });
  /** Restore the selected user after confirmation. */
  async revive() {
    const item = this.active_item;
    if (!item?.id || !item.deleted || !this._service.canMutate(4))
      return;
    const details = await openConfirmModal({
      title: i18n("USERS.REVIVE"),
      content: i18n("USERS.REVIVE_MSG", {
        name: escapeHtml(item.name)
      }),
      confirm_text: i18n("USERS.REVIVE"),
      icon: { type: "icon", content: "restore_from_trash" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("USERS.REVIVE_LOADING"));
    try {
      await ph(item.id);
      if (this._service.active_item === item) {
        this._service.replaceItem(new Dn(__spreadProps(__spreadValues({}, item), { deleted: false })));
      }
      this.changed();
      notifySuccess(i18n("USERS.REVIVE_SUCCESS"));
    } catch (error) {
      notifyError(i18n("USERS.REVIVE_ERROR", { error: describeError(error) }));
    } finally {
      details.close();
    }
  }
  changed() {
    this._change.set(Date.now());
  }
  static \u0275fac = function UsersStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _UsersStateService, factory: _UsersStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersStateService, [{
    type: Service
  }], null, null);
})();

export {
  UsersStateService
};
//# debugId=b05cb647-73af-5abd-b722-9154b7ca8d2d
//# sourceMappingURL=chunk-DZIJ6TNO.js.map
