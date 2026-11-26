import {
  SelectItemModalComponent
} from "./chunk-VNI6PO3O.js";
import {
  groupMembership
} from "./chunk-UMAYOC7F.js";
import {
  openedTabs
} from "./chunk-X2O3T64J.js";
import {
  reportLoadError
} from "./chunk-GVPYT7HY.js";
import {
  ActiveItemService
} from "./chunk-BMBCYN44.js";
import {
  openConfirmModal
} from "./chunk-6PURSEHW.js";
import {
  describeError,
  readError
} from "./chunk-HS2B2TZM.js";
import {
  isSubsystemUser,
  querySupportSystems,
  querySupportZones
} from "./chunk-RN3AWFUF.js";
import {
  collectPages
} from "./chunk-SBKLZZRV.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import {
  authority,
  loadMetadataBlocks
} from "./chunk-V3DC4H2S.js";
import {
  waitForDialog
} from "./chunk-OTF7M54K.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  groups_exports,
  groups_zones_exports,
  triggers_exports,
  zones_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow,
  orThrowPage
} from "./chunk-LD3K5ATK.js";
import {
  escapeHtml,
  unique
} from "./chunk-Y2QSYZTA.js";
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

// src/app/zones/zones-state.service.ts
var ZonesStateService = class _ZonesStateService {
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
    () => this.group_members.saving() || this._systems.isLoading() || this._triggers.isLoading() || this._metadata_count.isLoading() || this._children.isLoading() || this._groups.isLoading(),
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Active zone. `ActiveItemService` adds its settings of each encryption level */
  item = computed(
    () => this._service.activeOf("zones"),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _zone_id = computed(
    () => this.item()?.id || void 0,
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
    loader: async ({ params, abortSignal }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!item)
        return empty;
      if (!full) {
        return querySupportSystems({ zone_id: [item.id], limit: 1 }, { signal: abortSignal }).then(({ total }) => __spreadProps(__spreadValues({}, empty), { total })).catch(() => empty);
      }
      const data = await collectPages(querySupportSystems({ zone_id: [item.id], limit: 500 }, { signal: abortSignal })).catch(reportLoadError([]));
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
    params: () => ({
      item: this.item(),
      changed: this._change()
    }),
    loader: async ({ params, abortSignal }) => {
      const { item } = params;
      const empty = { data: [], total: 0 };
      if (!item || isSubsystemUser())
        return empty;
      const data = await zones_exports.triggerInstances({ id: item.id }, { signal: abortSignal }).then(orThrow).catch(reportLoadError([]));
      return { data, total: data.length };
    }
  }));
  triggers = computed(
    () => this._triggers.value()?.data || [],
    ...ngDevMode ? [{ debugName: "triggers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Count of metadata blocks. The metadata tab uses this load again */
  _metadata_count = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_metadata_count" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      item: this.item(),
      changed: this._change()
    }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!item)
        return 0;
      return loadMetadataBlocks(item.id).then((blocks) => blocks.length).catch(() => 0);
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
    loader: async ({ params, abortSignal }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!item)
        return empty;
      if (!full) {
        return querySupportZones({ parent_id: [item.id], limit: 1 }, { signal: abortSignal }).then(({ total }) => __spreadProps(__spreadValues({}, empty), { total })).catch(() => empty);
      }
      const data = await collectPages(querySupportZones({ parent_id: [item.id], limit: 500 }, { signal: abortSignal })).catch(reportLoadError([]));
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
    loader: async ({ params, abortSignal }) => {
      const { item, full } = params;
      const empty = { data: [], total: 0 };
      if (!item)
        return empty;
      const response = await groups_zones_exports.query({ zone_id: item.id, limit: full ? 1e3 : 1 }, { signal: abortSignal }).then(orThrowPage).catch(reportLoadError(empty));
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
    return this._service.activeOf("zones");
  }
  /** Zones have no domain, so groups of the current domain can be added */
  get authority_id() {
    return authority()?.id || void 0;
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_, signal2) => triggers_exports.query({ q: _ }, { signal: signal2 }).then(orThrowPage).then((resp) => resp.data)
      }
    });
    const details = await waitForDialog(ref, "action");
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
    return zones_exports.update({
      id: this.active_item.id,
      body: { triggers: triggers_list }
    }).then(orThrow);
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
      zone = await zones_exports.update({
        id: this.active_item.id,
        body: {
          triggers: this.active_item.triggers.filter((t) => t !== trigger.id)
        }
      }).then(orThrow);
    } catch (err) {
      return notifyError(`Error removing trigger ${trigger.id} from zone. Error: ${await readError(err)}`);
    } finally {
      details.close();
    }
    notifySuccess(`Successfully removed trigger from zone.`);
    if (zone)
      this._service.replaceItem(zone);
  }
  /** Group memberships of the active zone */
  group_members = groupMembership(this._dialog, {
    one: "ZONES.GROUP",
    many: "ZONES.GROUPS",
    search: "GROUPS.SEARCH",
    column: "GROUPS.SINGULAR",
    member_key: "group",
    route: "groups",
    no_permissions: "COMMON.DEFAULT",
    show_deny: true,
    rows: () => this.groups(),
    authority_id: () => this.authority_id,
    // The API lists the groups of the current domain only
    query: (q) => groups_exports.query({ q, limit: 20 }).then(orThrowPage).then((response) => [...response.data]),
    member_id: (row) => row.group_id,
    member_name: (row) => row.group?.name || row.group_id,
    member_detail: (row) => row.group_id,
    item_authority: (group) => group.authority_id,
    add: (group_id) => groups_zones_exports.create({
      body: { group_id, zone_id: this.active_item.id }
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
//# debugId=09d121f0-95f9-581c-99e8-a297b4caffe1
//# sourceMappingURL=chunk-QLMNMYCM.js.map
