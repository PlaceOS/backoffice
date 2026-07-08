import {
  GroupBulkAddModalComponent,
  GroupPermissionsModalComponent
} from "./chunk-DKLBPKQ4.js";
import {
  ActiveItemService
} from "./chunk-MUWBKZMA.js";
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
  Hu,
  Pu,
  Ru,
  Service,
  computed,
  inject,
  lu,
  qn,
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

// src/app/users/users-state.service.ts
var UsersStateService = class _UsersStateService {
  _service = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
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
  loading = this._loading.asReadonly();
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
      if (!(item instanceof qn))
        return {};
      this._loading.set(true);
      const details = await Promise.all([
        Hu(item.id).then((d) => d.length).catch((_err) => 0),
        xu({ user_id: item.id, limit: 1 }).then((response) => response.total).catch(() => 0)
      ]);
      const [metadata, groups] = details;
      this._loading.set(false);
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
      if (!(item instanceof qn))
        return [];
      return Hu(item.id).catch((_err) => []);
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
      if (!(item instanceof qn))
        return [];
      this._loading.set(true);
      try {
        const response = await xu({
          user_id: item.id,
          limit: 1e3
        }).catch(() => ({ data: [] }));
        return response.data.sort((a, b) => (a.group?.name || a.group_id).localeCompare(b.group?.name || b.group_id));
      } finally {
        this._loading.set(false);
      }
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
    await qu({
      user_id: this.active_item.id,
      group_id: group.id
    }).catch((error) => {
      notifyError(i18n("USERS.GROUP_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("USERS.GROUP_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddGroups(existing_groups = []) {
    const groups = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "USERS.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "USERS.GROUPS_BULK_EMPTY",
        query_fn: (query) => lu({
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
    if (!groups?.length)
      return;
    this._loading.set(true);
    const results = await Promise.allSettled(groups.map((group) => qu({
      user_id: this.active_item.id,
      group_id: group.id
    })));
    this._loading.set(false);
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
        name: item.group?.name || item.group_id
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("USERS.GROUP_REMOVE_LOADING"));
    await Ru(item.user_id, item.group_id).catch((error) => {
      details.close();
      notifyError(i18n("USERS.GROUP_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("USERS.GROUP_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateGroup(item) {
    await Pu(item.user_id, item.group_id, {
      permissions: +item.permissions || 0
    }).catch((error) => {
      notifyError(i18n("USERS.GROUP_SAVE_ERROR", { error }));
      throw error;
    });
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
//# sourceMappingURL=chunk-5V6R3AAS.js.map
