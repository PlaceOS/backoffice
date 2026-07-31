import {
  SelectItemModalComponent
} from "./chunk-FFEL5HRK.js";
import {
  GroupBulkAddModalComponent,
  GroupPermissionsModalComponent
} from "./chunk-DKLBPKQ4.js";
import {
  ActiveItemService
} from "./chunk-P2JPBNYN.js";
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
  unique
} from "./chunk-Y2VDX4KN.js";
import {
  Cu,
  Eu,
  Hu,
  Pt,
  Qt,
  Sa,
  Service,
  Tu,
  Uu,
  Wa,
  Xc,
  Za,
  computed,
  inject,
  ja,
  lu,
  resource,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/zones/zones-state.service.ts
var ZonesStateService = class _ZonesStateService {
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
  item = computed(
    () => this._service.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Qt))
        return {};
      this._loading.set(true);
      try {
        const details = await Promise.all([
          Xc({ zone_id: item.id, limit: 1 }).then((d) => d.total).catch(() => 0),
          Za(item.id).then((d) => d.total).catch(() => 0),
          Hu(item.id).then((d) => d.length).catch(() => 0),
          ja({ parent_id: item.id, limit: 1 }).then((d) => d.total).catch(() => 0),
          Uu({ zone_id: item.id, limit: 1 }).then((d) => d.total).catch(() => 0)
        ]);
        const [systems, triggers, metadata, children, groups] = details;
        return {
          systems,
          triggers,
          metadata,
          children,
          groups
        };
      } finally {
        this._loading.set(false);
      }
    }
  }));
  counts = computed(
    () => this._counts.value() || {
      systems: 0,
      triggers: 0,
      metadata: 0,
      children: 0,
      groups: 0
    },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _systems = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_systems" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Qt))
        return [];
      const response = await Xc({ zone_id: item.id }).catch(() => ({ data: [] }));
      return response.data;
    }
  }));
  systems = computed(
    () => this._systems.value() || [],
    ...ngDevMode ? [{ debugName: "systems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _triggers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_triggers" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Qt))
        return [];
      const response = await Za(item.id).catch(() => ({
        data: []
      }));
      return response.data;
    }
  }));
  triggers = computed(
    () => this._triggers.value() || [],
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _metadata = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_metadata" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Qt))
        return [];
      return Hu(item.id).catch(() => []);
    }
  }));
  metadata = computed(
    () => this._metadata.value() || [],
    ...ngDevMode ? [{ debugName: "metadata" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _children = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_children" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Qt))
        return [];
      const response = await ja({ parent_id: item.id }).catch(() => ({ data: [] }));
      return response.data;
    }
  }));
  children = computed(
    () => this._children.value() || [],
    ...ngDevMode ? [{ debugName: "children" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _groups = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_groups" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof Qt))
        return [];
      this._loading.set(true);
      try {
        const response = await Uu({
          zone_id: item.id,
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
  get authority_id() {
    return this.active_item?.authority_id || Pt()?.id || void 0;
  }
  constructor() {
    setTimeout(() => this.changed(), 1e3);
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => Sa({ q: _ }).then((resp) => resp.data)
      }
    });
    const details = await Promise.race([
      waitForEvent(ref.componentInstance.event, (_) => _.reason === "action"),
      waitForEvent(ref.afterClosed())
    ]);
    if (!details?.reason)
      return ref.close();
    const zone = await this.addTrigger(ref.componentInstance.item);
    ref.close();
    if (zone)
      this._service.replaceItem(zone);
  }
  async addTrigger(trigger) {
    const triggers_list = unique([
      ...this.active_item.triggers,
      trigger.id
    ]);
    return Wa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      triggers: triggers_list
    }));
  }
  async removeTrigger(trigger) {
    const details = await openConfirmModal({
      title: `Remove trigger`,
      content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details?.reason)
      return;
    const zone = await Wa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      triggers: this.active_item.triggers.filter((t) => t !== trigger.id)
    })).catch((err) => {
      details.close();
      notifyError(`Error removing trigger ${trigger.id} from zone. Error: ${err.statusText || err.message || err}`);
      throw err;
    });
    details.close();
    notifySuccess(`Successfully removed trigger from zone.`);
    if (zone)
      this._service.replaceItem(zone);
  }
  async addGroup(group) {
    if (!group?.id)
      return;
    await Tu({
      group_id: group.id,
      zone_id: this.active_item.id
    }).catch((error) => {
      notifyError(i18n("ZONES.GROUP_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("ZONES.GROUP_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddGroups(existing_groups = []) {
    const groups = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "ZONES.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "ZONES.GROUPS_BULK_EMPTY",
        query_fn: (query) => lu({
          q: query,
          limit: 20,
          authority_id: this.authority_id
        }).then((response) => response.data),
        exclude: (group) => {
          const authority_id = this.authority_id;
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
    const results = await Promise.allSettled(groups.map((group) => Tu({
      group_id: group.id,
      zone_id: this.active_item.id
    })));
    this._loading.set(false);
    const failed = results.filter((_) => _.status === "rejected").length;
    if (failed) {
      notifyError(i18n("ZONES.GROUPS_BULK_ERROR", { count: failed }));
    }
    const added = results.length - failed;
    if (added) {
      notifySuccess(i18n("ZONES.GROUPS_BULK_SUCCESS", { count: added }));
    }
    this.changed();
  }
  async removeGroup(item) {
    const details = await openConfirmModal({
      title: i18n("ZONES.GROUP_REMOVE"),
      content: i18n("ZONES.GROUP_REMOVE_MSG", {
        name: item.group?.name || item.group_id
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("ZONES.GROUP_REMOVE_LOADING"));
    await Cu(item.group_id, item.zone_id).catch((error) => {
      details.close();
      notifyError(i18n("ZONES.GROUP_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("ZONES.GROUP_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateGroup(item) {
    await Eu(item.group_id, item.zone_id, {
      permissions: +item.permissions || 0,
      deny: !!item.deny
    }).catch((error) => {
      notifyError(i18n("ZONES.GROUP_SAVE_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("ZONES.GROUP_SAVE_SUCCESS"));
    this.changed();
  }
  async editGroupPermissions(item) {
    const result = await waitForEvent(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "ZONES.GROUP_PERMISSIONS",
        permissions: item.permissions,
        deny: item.deny,
        show_deny: true
      }
    }).afterClosed());
    if (!result)
      return;
    await this.updateGroup(__spreadProps(__spreadValues({}, item), {
      permissions: result.permissions,
      deny: result.deny
    }));
  }
  changed() {
    this._change.set(Date.now());
  }
  static \u0275fac = function ZonesStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZonesStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _ZonesStateService, factory: _ZonesStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonesStateService, [{
    type: Service
  }], () => [], null);
})();

export {
  ZonesStateService
};
//# sourceMappingURL=chunk-GF6OUO5Y.js.map
