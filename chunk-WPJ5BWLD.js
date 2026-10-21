import {
  SelectItemModalComponent
} from "./chunk-2LW3Q3FB.js";
import {
  GroupBulkAddModalComponent
} from "./chunk-NO3QJPXO.js";
import {
  openedTabs
} from "./chunk-DSIXUEND.js";
import {
  reportLoadError
} from "./chunk-Q5T2NYU2.js";
import {
  ActiveItemService
} from "./chunk-4SKKX7ZQ.js";
import {
  GroupPermissionsModalComponent
} from "./chunk-TKIVO3RR.js";
import {
  openConfirmModal
} from "./chunk-7QWEFWP7.js";
import {
  describeError,
  readError
} from "./chunk-T3O7QHHC.js";
import {
  collectPages,
  isSubsystemUser,
  querySupportSystems,
  querySupportZones
} from "./chunk-P3BK5ZDJ.js";
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
  escapeHtml,
  unique
} from "./chunk-AOPYKUKV.js";
import {
  $h,
  Eu,
  Mt,
  Qa,
  Vu,
  Xu,
  ec,
  en,
  mh,
  tc,
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
    () => this._saving() || this._systems.isLoading() || this._triggers.isLoading() || this._metadata_count.isLoading() || this._children.isLoading() || this._groups.isLoading(),
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
  _zone_id = computed(
    () => {
      const item = this.item();
      return item instanceof en ? item.id : void 0;
    },
    ...ngDevMode ? [{ debugName: "_zone_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Lists that can be long only load once their tab is opened. Until then
  // a single row query gives the tab count.
  _opened_tabs = openedTabs(this._zone_id);
  _load_systems = computed(
    () => this._opened_tabs().has("systems"),
    ...ngDevMode ? [{ debugName: "_load_systems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _load_children = computed(
    () => this._opened_tabs().has("children"),
    ...ngDevMode ? [{ debugName: "_load_children" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _load_groups = computed(
    () => this._opened_tabs().has("groups"),
    ...ngDevMode ? [{ debugName: "_load_groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counts = computed(
    () => ({
      systems: this._systems.value()?.total || 0,
      triggers: this._triggers.value()?.total || 0,
      metadata: this._metadata_count.value() || 0,
      children: this._children.value()?.total || 0,
      groups: this._groups.value()?.total || 0
    }),
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _systems = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_systems" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._change(),
      full: this._load_systems()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof en))
        return empty;
      if (!full) {
        return querySupportSystems({ zone_id: item.id, limit: 1 }).then(({ total }) => __spreadProps(__spreadValues({}, empty), { total })).catch(() => empty);
      }
      const data = await collectPages(querySupportSystems({ zone_id: item.id, limit: 500 })).catch(reportLoadError([]));
      return { data, total: data.length };
    }
  }));
  systems = computed(
    () => this._systems.value()?.data || [],
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
      const empty = { data: [], total: 0 };
      if (!(item instanceof en) || isSubsystemUser())
        return empty;
      return $h(item.id).catch(reportLoadError(empty));
    }
  }));
  triggers = computed(
    () => this._triggers.value()?.data || [],
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** The metadata tab loads its own list, so only the count is needed */
  _metadata_count = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_metadata_count" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._change() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof en))
        return 0;
      return uc(item.id).then((list) => list.length).catch(() => 0);
    }
  }));
  _children = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_children" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._change(),
      full: this._load_children()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof en))
        return empty;
      if (!full) {
        return querySupportZones({ parent_id: item.id, limit: 1 }).then(({ total }) => __spreadProps(__spreadValues({}, empty), { total })).catch(() => empty);
      }
      const data = await collectPages(querySupportZones({ parent_id: item.id, limit: 500 })).catch(reportLoadError([]));
      return { data, total: data.length };
    }
  }));
  children = computed(
    () => this._children.value()?.data || [],
    ...ngDevMode ? [{ debugName: "children" }] : (
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
      changed: this._change(),
      full: this._load_groups()
    }),
    loader: async ({ params }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!(item instanceof en))
        return empty;
      const response = await Vu({
        zone_id: item.id,
        limit: full ? 1e3 : 1
      }).catch(reportLoadError(empty));
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
  get authority_id() {
    return this.active_item?.authority_id || Mt()?.id || void 0;
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => Qa({ q: _ }).then((resp) => resp.data)
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
    return mh(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
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
      zone = await mh(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
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
      await Xu({
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
    const result = await waitForEvent(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "ZONES.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "ZONES.GROUPS_BULK_EMPTY",
        query_fn: (query) => Eu({
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
    const groups = result?.items;
    if (!groups?.length)
      return;
    this._saving.set(true);
    const results = await Promise.allSettled(groups.map((group) => Xu({
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
      await tc(item.group_id, item.zone_id);
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
      await ec(item.group_id, item.zone_id, {
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
  }], null, null);
})();

export {
  ZonesStateService
};
//# debugId=6fa389bc-283d-5fcd-8fee-d6d4740b2e08
//# sourceMappingURL=chunk-WPJ5BWLD.js.map
