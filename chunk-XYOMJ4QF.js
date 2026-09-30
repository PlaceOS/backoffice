import {
  SelectItemModalComponent
} from "./chunk-22GMDJDT.js";
import {
  GroupBulkAddModalComponent
} from "./chunk-TCD34GHE.js";
import {
  ActiveItemService
} from "./chunk-OCX3MX3N.js";
import {
  openConfirmModal
} from "./chunk-EVOAWPGI.js";
import {
  GroupPermissionsModalComponent
} from "./chunk-ASHZ6BYG.js";
import {
  waitForEvent
} from "./chunk-T65YNYD6.js";
import {
  collectPages,
  isSubsystemUser,
  querySupportSystems,
  querySupportZones
} from "./chunk-F34GYKGE.js";
import {
  describeError,
  readError
} from "./chunk-G3IJGLD4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  MatDialog
} from "./chunk-BKGOEYCZ.js";
import {
  i18n
} from "./chunk-Q56IG7JO.js";
import {
  escapeHtml,
  unique
} from "./chunk-SXYVSUAR.js";
import {
  Ju,
  Mt,
  Qu,
  Service,
  Tu,
  Vu,
  Xt,
  Zu,
  _h,
  computed,
  inject,
  ja,
  ph,
  resource,
  sc,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-6NXCBA4X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DPH5AP7B.js";

// src/app/zones/zones-state.service.ts
var ZonesStateService = class _ZonesStateService {
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
      if (!(item instanceof Xt))
        return {};
      const details = await Promise.all([
        querySupportSystems({ zone_id: item.id, limit: 1 }).then((d) => d.total).catch(() => 0),
        (isSubsystemUser() ? Promise.resolve({ data: [], total: 0 }) : _h(item.id)).then((d) => d.total).catch(() => 0),
        sc(item.id).then((d) => d.length).catch(() => 0),
        querySupportZones({ parent_id: item.id, limit: 1 }).then((d) => d.total).catch(() => 0),
        Qu({ zone_id: item.id, limit: 1 }).then((d) => d.total).catch(() => 0)
      ]);
      const [systems, triggers, metadata, children, groups] = details;
      return {
        systems,
        triggers,
        metadata,
        children,
        groups
      };
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
      if (!(item instanceof Xt))
        return [];
      return collectPages(querySupportSystems({ zone_id: item.id, limit: 500 })).catch(() => []);
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
      if (!(item instanceof Xt))
        return [];
      const response = await (isSubsystemUser() ? Promise.resolve({ data: [], total: 0 }) : _h(item.id)).catch(() => ({
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
      if (!(item instanceof Xt))
        return [];
      return sc(item.id).catch(() => []);
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
      if (!(item instanceof Xt))
        return [];
      return collectPages(querySupportZones({ parent_id: item.id, limit: 500 })).catch(() => []);
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
      if (!(item instanceof Xt))
        return [];
      const response = await Qu({
        zone_id: item.id,
        limit: 1e3
      }).catch(() => ({ data: [] }));
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
  get authority_id() {
    return this.active_item?.authority_id || Mt()?.id || void 0;
  }
  constructor() {
    setTimeout(() => this.changed(), 1e3);
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => ja({ q: _ }).then((resp) => resp.data)
      }
    });
    const details = await Promise.race([
      waitForEvent(ref.componentInstance.event, (_) => _.reason === "action"),
      waitForEvent(ref.afterClosed())
    ]);
    if (details?.reason !== "action")
      return ref.close();
    try {
      const zone = await this.addTrigger(ref.componentInstance.item);
      if (zone)
        this._service.replaceItem(zone);
    } catch (err) {
      notifyError(`Error adding trigger to zone. Error: ${describeError(err)}`);
    } finally {
      ref.close();
    }
  }
  async addTrigger(trigger) {
    const triggers_list = unique([
      ...this.active_item.triggers,
      trigger.id
    ]);
    return ph(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      triggers: triggers_list
    }));
  }
  async removeTrigger(trigger) {
    const details = await openConfirmModal({
      title: `Remove trigger`,
      content: `<p>Are you sure you want remove trigger "${escapeHtml(trigger.name)}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    let zone;
    try {
      zone = await ph(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
        triggers: this.active_item.triggers.filter((t) => t !== trigger.id)
      }));
    } catch (err) {
      return notifyError(`Error removing trigger ${trigger.id} from zone. Error: ${await readError(err)}`);
    } finally {
      details.close();
    }
    notifySuccess(`Successfully removed trigger from zone.`);
    if (zone)
      this._service.replaceItem(zone);
  }
  async addGroup(group) {
    if (!group?.id)
      return;
    try {
      await Zu({
        group_id: group.id,
        zone_id: this.active_item.id
      });
    } catch (error) {
      return notifyError(i18n("ZONES.GROUP_ADD_ERROR", { error: describeError(error) }));
    }
    notifySuccess(i18n("ZONES.GROUP_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddGroups(existing_groups = []) {
    const groups = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "ZONES.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "ZONES.GROUPS_BULK_EMPTY",
        query_fn: (query) => Tu({
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
    this._saving.set(true);
    const results = await Promise.allSettled(groups.map((group) => Zu({
      group_id: group.id,
      zone_id: this.active_item.id
    })));
    this._saving.set(false);
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
        name: escapeHtml(item.group?.name || item.group_id)
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("ZONES.GROUP_REMOVE_LOADING"));
    try {
      await Vu(item.group_id, item.zone_id);
    } catch (error) {
      details.close();
      return notifyError(i18n("ZONES.GROUP_REMOVE_ERROR", {
        error: describeError(error)
      }));
    }
    details.close();
    notifySuccess(i18n("ZONES.GROUP_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateGroup(item) {
    try {
      await Ju(item.group_id, item.zone_id, {
        permissions: +item.permissions || 0,
        deny: !!item.deny
      });
    } catch (error) {
      return notifyError(i18n("ZONES.GROUP_SAVE_ERROR", { error: describeError(error) }));
    }
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
//# sourceMappingURL=chunk-XYOMJ4QF.js.map
