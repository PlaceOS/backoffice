import {
  GroupBulkAddModalComponent
} from "./chunk-M4JDJJ7X.js";
import {
  ActiveItemService
} from "./chunk-E74E3JF6.js";
import {
  openConfirmModal
} from "./chunk-62B5GM77.js";
import {
  GroupPermissionsModalComponent
} from "./chunk-RSLNITUZ.js";
import {
  describeError
} from "./chunk-G3IJGLD4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-AYJXTTVT.js";
import {
  waitForEvent
} from "./chunk-WCEMOYFJ.js";
import {
  MatDialog
} from "./chunk-EZWGQADM.js";
import {
  i18n
} from "./chunk-5OMVQZOP.js";
import {
  escapeHtml
} from "./chunk-SXYVSUAR.js";
import {
  Bu,
  Gu,
  Lu,
  On,
  Tu,
  Wu,
  ch,
  sc
} from "./chunk-P3FA5CPP.js";
import {
  Service,
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-RDM3X2TD.js";
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
    () => this._saving() || this._counts.isLoading() || this._groups.isLoading(),
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = this._service.item;
  _counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this._service.active_item$(),
      change: this._change()
    }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof On))
        return {};
      const details = await Promise.all([
        sc(item.id).then((d) => d.length).catch((_err) => 0),
        Lu({ user_id: item.id, limit: 1 }).then((response) => response.total).catch(() => 0)
      ]);
      const [metadata, groups] = details;
      return {
        metadata,
        groups
      };
    }
  }));
  counts = computed(
    () => this._counts.value() || { metadata: 0, groups: 0 },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _metadata = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_metadata" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      change: this._change()
    }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof On))
        return [];
      return sc(item.id).catch((_err) => []);
    }
  }));
  metadata = computed(
    () => this._metadata.value() || [],
    ...ngDevMode ? [{ debugName: "metadata" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_groups" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), change: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof On))
        return [];
      const response = await Lu({
        user_id: item.id,
        limit: 1e3
      }).catch((error) => {
        notifyError(i18n("USERS.GROUPS_LOAD_ERROR", {
          error: describeError(error)
        }));
        return { data: [] };
      });
      return response.data.sort((a, b) => (a.group?.name || a.group_id).localeCompare(b.group?.name || b.group_id));
    }
  }));
  groups = computed(
    () => this._groups.value() || [],
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
      await Gu({
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
        query_fn: (query) => Tu({
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
    const results = await Promise.allSettled(groups.map((group) => Gu(__spreadValues({
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
      await Wu(item.user_id, item.group_id);
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
      await Bu(item.user_id, item.group_id, {
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
      await ch(item.id);
      if (this._service.active_item === item) {
        this._service.replaceItem(new On(__spreadProps(__spreadValues({}, item), { deleted: false })));
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
  constructor() {
    setTimeout(() => this.changed(), 1e3);
  }
  static \u0275fac = function UsersStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _UsersStateService, factory: _UsersStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersStateService, [{
    type: Service
  }], () => [], null);
})();

export {
  UsersStateService
};
//# sourceMappingURL=chunk-6D6SZCUO.js.map
