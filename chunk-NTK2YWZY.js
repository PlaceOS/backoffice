import {
  SelectItemModalComponent
} from "./chunk-AHT7LS3K.js";
import {
  GroupBulkAddModalComponent,
  GroupPermissionsModalComponent
} from "./chunk-C73Y7H3U.js";
import {
  ActiveItemService
} from "./chunk-6BPZMNFO.js";
import {
  openConfirmModal
} from "./chunk-MKUNKECS.js";
import {
  MatDialog
} from "./chunk-NKHB33NT.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-YQWUAWSB.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  unique,
  ɵɵdefineInjectable
} from "./chunk-46M7K5TF.js";
import {
  $a,
  Ah,
  BehaviorSubject,
  Cl,
  Dt,
  Oh,
  Ph,
  Vc,
  _a,
  catchError,
  combineLatest,
  da,
  debounceTime,
  first,
  ha,
  lastValueFrom,
  map,
  of,
  pa,
  rn,
  sh,
  shareReplay,
  startWith,
  switchMap
} from "./chunk-55CIHLAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/zones/zones-state.service.ts
var ZonesStateService = class _ZonesStateService {
  _service = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  _change = new BehaviorSubject(false);
  loading = this._loading.asObservable();
  item = this._service.active_item$;
  counts = combineLatest([
    this._service.active_item$,
    this._change
  ]).pipe(debounceTime(300), switchMap(async (d) => {
    const [item] = d;
    if (!(item instanceof rn))
      return {};
    this._loading.next(true);
    const details = await Promise.all([
      lastValueFrom(Cl({ zone_id: item.id, limit: 1 }).pipe(map((d2) => d2.total))).catch(() => 0),
      lastValueFrom(Oh(item.id).pipe(map((d2) => d2.total))).catch(() => 0),
      lastValueFrom($a(item.id).pipe(map((d2) => d2.length))).catch(() => 0),
      lastValueFrom(Ah({ parent_id: item.id, limit: 1 }).pipe(map((d2) => d2.total))).catch(() => 0),
      lastValueFrom(ha({ zone_id: item.id, limit: 1 }).pipe(map((d2) => d2.total))).catch(() => 0)
    ]);
    const [systems, triggers, metadata, children, groups] = details;
    this._loading.next(false);
    return {
      systems,
      triggers,
      metadata,
      children,
      groups
    };
  }));
  systems = this.item.pipe(switchMap((item) => {
    if (!(item instanceof rn))
      return of({ data: [] });
    return Cl({ zone_id: item.id }).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((list) => list.data), shareReplay(1));
  triggers = this.item.pipe(switchMap((item) => {
    if (!(item instanceof rn))
      return of({ data: [] });
    return Oh(item.id).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((list) => list.data), shareReplay(1));
  metadata = this.item.pipe(switchMap((item) => {
    if (!(item instanceof rn))
      return of([]);
    return $a(item.id).pipe(catchError(() => of([])), startWith([]));
  }), shareReplay(1));
  children = this.item.pipe(switchMap((item) => {
    if (!(item instanceof rn))
      return of({ data: [] });
    return Ah({ parent_id: item.id }).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((list) => list.data), shareReplay(1));
  groups = combineLatest([
    this._change,
    this.item
  ]).pipe(switchMap(([, item]) => {
    if (!(item instanceof rn))
      return of({ data: [] });
    this._loading.next(true);
    return ha({ zone_id: item.id, limit: 1e3 }).pipe(catchError(() => of({ data: [] })));
  }), map((response) => {
    this._loading.next(false);
    return response.data.sort((a, b) => (a.group?.name || a.group_id).localeCompare(b.group?.name || b.group_id));
  }), shareReplay(1));
  get active_item() {
    return this._service.active_item;
  }
  get authority_id() {
    return this.active_item?.authority_id || Dt()?.id || void 0;
  }
  constructor() {
    setTimeout(() => this._change.next(!this._change.getValue()), 1e3);
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => sh({ q: _ }).pipe(map((resp) => resp.data))
      }
    });
    const details = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "action"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (!details || !details.reason)
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
    return Ph(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      triggers: triggers_list
    })).toPromise();
  }
  async removeTrigger(trigger) {
    const details = await openConfirmModal({
      title: `Remove trigger`,
      content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details || !details.reason)
      return;
    const zone = await lastValueFrom(Ph(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      triggers: this.active_item.triggers.filter((t) => t !== trigger.id)
    }))).catch((err) => {
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
    await lastValueFrom(pa({ group_id: group.id, zone_id: this.active_item.id })).catch((error) => {
      notifyError(i18n("ZONES.GROUP_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("ZONES.GROUP_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddGroups(existing_groups = []) {
    const groups = await lastValueFrom(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "ZONES.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "ZONES.GROUPS_BULK_EMPTY",
        query_fn: (query) => Vc({
          q: query,
          limit: 20,
          authority_id: this.authority_id
        }).pipe(map((response) => response.data)),
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
    this._loading.next(true);
    const results = await Promise.allSettled(groups.map((group) => lastValueFrom(pa({
      group_id: group.id,
      zone_id: this.active_item.id
    }))));
    this._loading.next(false);
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
    await lastValueFrom(_a(item.group_id, item.zone_id)).catch((error) => {
      details.close();
      notifyError(i18n("ZONES.GROUP_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("ZONES.GROUP_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateGroup(item) {
    await lastValueFrom(da(item.group_id, item.zone_id, {
      permissions: +item.permissions || 0,
      deny: !!item.deny
    })).catch((error) => {
      notifyError(i18n("ZONES.GROUP_SAVE_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("ZONES.GROUP_SAVE_SUCCESS"));
    this.changed();
  }
  async editGroupPermissions(item) {
    const result = await lastValueFrom(this._dialog.open(GroupPermissionsModalComponent, {
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
    this._change.next(!this._change.getValue());
  }
  static \u0275fac = function ZonesStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZonesStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ZonesStateService, factory: _ZonesStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonesStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ZonesStateService
};
//# sourceMappingURL=chunk-NTK2YWZY.js.map
