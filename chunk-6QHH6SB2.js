import {
  GroupBulkAddModalComponent
} from "./chunk-NO3QJPXO.js";
import {
  openedTabs
} from "./chunk-DSIXUEND.js";
import {
  ActiveItemService
} from "./chunk-OQBGRCZD.js";
import {
  GroupPermissionsModalComponent
} from "./chunk-TKIVO3RR.js";
import {
  openConfirmModal
} from "./chunk-7QWEFWP7.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-PK5A7L3I.js";
import {
  waitForEvent
} from "./chunk-WZTE63Q5.js";
import {
  MatDialog
} from "./chunk-GAHHDLCB.js";
import {
  i18n
} from "./chunk-NBJYZGNA.js";
import {
  escapeHtml
} from "./chunk-AOPYKUKV.js";
import {
  Dn,
  Eu,
  Ju,
  Ku,
  Wu,
  Zu,
  ph,
  uc
} from "./chunk-NMVMT4VD.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-OQOLG7V4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/users/users-state.service.ts
var UsersStateService = class _UsersStateService {
  _service = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  /** Set while a bulk add runs */
  _saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "_saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = computed(
    () => this._saving() || this._metadata_count.isLoading() || this._groups.isLoading(),
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
  async addGroup(group) {
    if (!group?.id)
      return;
    try {
      await Ku({
        user_id: this.active_item.id,
        group_id: group.id
      });
    } catch (error) {
      return notifyError(i18n("USERS.GROUP_ADD_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("USERS.GROUP_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddGroups(existing_groups = []) {
    const result = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "USERS.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "USERS.GROUPS_BULK_EMPTY",
        query_fn: (query) => Eu({
          q: query,
          limit: 20,
          authority_id: this.active_item?.authority_id
        }).then((response) => response.data),
        exclude: (group) => {
          const authority_id = this.active_item?.authority_id;
          return !!existing_groups.find((_) => _.group_id === group.id) || !!authority_id && group.authority_id !== authority_id;
        }
      },
      height: "auto",
      width: "auto",
      maxHeight: "calc(100vh - 2em)",
      maxWidth: "calc(100vw - 2em)"
    }).afterClosed());
    const groups = result?.items;
    if (!groups?.length)
      return;
    const permissions = +result.permissions || 0;
    this._saving.set(true);
    const results = await Promise.allSettled(groups.map((group) => Ku(__spreadValues({
      user_id: this.active_item.id,
      group_id: group.id
    }, permissions ? { permissions } : {}))));
    this._saving.set(false);
    const failed = results.filter((_) => _.status === "rejected").length;
    if (failed) {
      notifyError(i18n("USERS.GROUPS_BULK_ERROR", { count: failed }));
    }
    const added = results.length - failed;
    if (added) {
      notifySuccess(i18n("USERS.GROUPS_BULK_SUCCESS", { count: added }));
    }
    this.changed();
  }
  async removeGroup(item) {
    const details = await openConfirmModal({
      title: i18n("USERS.GROUP_REMOVE"),
      content: i18n("USERS.GROUP_REMOVE_MSG", {
        name: escapeHtml(item.group?.name || item.group_id)
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("USERS.GROUP_REMOVE_LOADING"));
    try {
      await Ju(item.user_id, item.group_id);
    } catch (error) {
      details.close();
      return notifyError(i18n("USERS.GROUP_REMOVE_ERROR", {
        error: describeError(error)
      }));
    }
    details.close();
    notifySuccess(i18n("USERS.GROUP_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateGroup(item) {
    try {
      await Zu(item.user_id, item.group_id, {
        permissions: +item.permissions || 0
      });
    } catch (error) {
      return notifyError(i18n("USERS.GROUP_SAVE_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("USERS.GROUP_SAVE_SUCCESS"));
    this.changed();
  }
  async editGroupPermissions(item) {
    const result = await waitForEvent(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "USERS.GROUP_PERMISSIONS",
        permissions: item.permissions
      }
    }).afterClosed());
    if (!result)
      return;
    await this.updateGroup(__spreadProps(__spreadValues({}, item), { permissions: result.permissions }));
  }
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
//# debugId=2497c930-8a80-58a1-b665-9c8d150b3a58
//# sourceMappingURL=chunk-6QHH6SB2.js.map
