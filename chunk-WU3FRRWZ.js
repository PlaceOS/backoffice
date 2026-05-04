import {
  GroupBulkAddModalComponent,
  GroupPermissionsModalComponent
} from "./chunk-Y6QIPKJT.js";
import {
  ActiveItemService
} from "./chunk-LHURGCPM.js";
import {
  openConfirmModal
} from "./chunk-FJPPD2QF.js";
import {
  MatDialog
} from "./chunk-2I5OKOYD.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-I3SKV5XF.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RH6UOTOJ.js";
import {
  Ah,
  BehaviorSubject,
  Kn,
  _a,
  aa,
  ca,
  catchError,
  combineLatest,
  da,
  fh,
  filter,
  ha,
  la,
  lastValueFrom,
  map,
  oa,
  of,
  pa,
  shareReplay,
  switchMap
} from "./chunk-Y5GQFF5E.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/groups/group-state.service.ts
var GroupStateService = class _GroupStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _changed = new BehaviorSubject(0);
  _loading = new BehaviorSubject(false);
  item = this._state.item;
  loading = this._loading.asObservable();
  users = combineLatest([
    this._changed,
    this.item
  ]).pipe(filter(([, item]) => item instanceof Kn), switchMap(([, item]) => {
    this._loading.next(true);
    return oa({ group_id: item.id, limit: 1e3 }).pipe(catchError(() => of({ data: [] })));
  }), map((response) => {
    this._loading.next(false);
    return response.data.sort((a, b) => (a.user?.name || a.user_id).localeCompare(b.user?.name || b.user_id));
  }), shareReplay(1));
  zones = combineLatest([
    this._changed,
    this.item
  ]).pipe(filter(([, item]) => item instanceof Kn), switchMap(([, item]) => {
    this._loading.next(true);
    return ha({ group_id: item.id, limit: 1e3 }).pipe(catchError(() => of({ data: [] })));
  }), map((response) => {
    this._loading.next(false);
    return response.data.sort((a, b) => (a.zone?.name || a.zone_id).localeCompare(b.zone?.name || b.zone_id));
  }), shareReplay(1));
  counts = combineLatest([this._changed, this.item]).pipe(filter(([, item]) => item instanceof Kn), switchMap(async ([, item]) => {
    const [users, zones] = await Promise.all([
      lastValueFrom(oa({ group_id: item.id, limit: 1 }).pipe(map((response) => response.total))).catch(() => 0),
      lastValueFrom(ha({ group_id: item.id, limit: 1 }).pipe(map((response) => response.total))).catch(() => 0)
    ]);
    return { users, zones };
  }), shareReplay(1));
  get active_item() {
    return this._state.active_item;
  }
  async addUser(user) {
    if (!user?.id)
      return;
    await lastValueFrom(ca({ group_id: this.active_item.id, user_id: user.id })).catch((error) => {
      notifyError(i18n("GROUPS.USER_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("GROUPS.USER_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddUsers(existing_users = []) {
    const users = await lastValueFrom(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "GROUPS.USERS_BULK",
        placeholder: "GROUPS.USER_SEARCH",
        empty_message: "GROUPS.USERS_BULK_EMPTY",
        query_fn: (query) => fh({ q: query, limit: 20 }).pipe(map((response) => response.data)),
        exclude: (user) => !!existing_users.find((_) => _.user_id === user.id)
      },
      height: "auto",
      width: "auto",
      maxHeight: "calc(100vh - 2em)",
      maxWidth: "calc(100vw - 2em)"
    }).afterClosed());
    if (!users?.length)
      return;
    this._loading.next(true);
    const results = await Promise.allSettled(users.map((user) => lastValueFrom(ca({
      group_id: this.active_item.id,
      user_id: user.id
    }))));
    this._loading.next(false);
    const failed = results.filter((_) => _.status === "rejected").length;
    if (failed) {
      notifyError(i18n("GROUPS.USERS_BULK_ERROR", { count: failed }));
    }
    const added = results.length - failed;
    if (added) {
      notifySuccess(i18n("GROUPS.USERS_BULK_SUCCESS", { count: added }));
    }
    this.changed();
  }
  async bulkAddZones(existing_zones = []) {
    const zones = await lastValueFrom(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "GROUPS.ZONES_BULK",
        placeholder: "GROUPS.ZONE_SEARCH",
        empty_message: "GROUPS.ZONES_BULK_EMPTY",
        query_fn: (query) => Ah({ q: query, limit: 20 }).pipe(map((response) => response.data)),
        exclude: (zone) => !!existing_zones.find((_) => _.zone_id === zone.id)
      },
      height: "auto",
      width: "auto",
      maxHeight: "calc(100vh - 2em)",
      maxWidth: "calc(100vw - 2em)"
    }).afterClosed());
    if (!zones?.length)
      return;
    this._loading.next(true);
    const results = await Promise.allSettled(zones.map((zone) => lastValueFrom(pa({
      group_id: this.active_item.id,
      zone_id: zone.id
    }))));
    this._loading.next(false);
    const failed = results.filter((_) => _.status === "rejected").length;
    if (failed) {
      notifyError(i18n("GROUPS.ZONES_BULK_ERROR", { count: failed }));
    }
    const added = results.length - failed;
    if (added) {
      notifySuccess(i18n("GROUPS.ZONES_BULK_SUCCESS", { count: added }));
    }
    this.changed();
  }
  async removeUser(item) {
    const details = await openConfirmModal({
      title: i18n("GROUPS.USER_REMOVE"),
      content: i18n("GROUPS.USER_REMOVE_MSG", {
        name: item.user?.name || item.user_id
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("GROUPS.USER_REMOVE_LOADING"));
    await lastValueFrom(la(item.user_id, item.group_id)).catch((error) => {
      details.close();
      notifyError(i18n("GROUPS.USER_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("GROUPS.USER_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateUser(item) {
    await lastValueFrom(aa(item.user_id, item.group_id, {
      permissions: +item.permissions || 0
    })).catch((error) => {
      notifyError(i18n("GROUPS.USER_SAVE_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("GROUPS.USER_SAVE_SUCCESS"));
    this.changed();
  }
  async editUserPermissions(item) {
    const result = await lastValueFrom(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "GROUPS.USER_PERMISSIONS",
        permissions: item.permissions
      }
    }).afterClosed());
    if (!result)
      return;
    await this.updateUser(__spreadProps(__spreadValues({}, item), { permissions: result.permissions }));
  }
  async addZone(zone) {
    if (!zone?.id)
      return;
    await lastValueFrom(pa({ group_id: this.active_item.id, zone_id: zone.id })).catch((error) => {
      notifyError(i18n("GROUPS.ZONE_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("GROUPS.ZONE_ADD_SUCCESS"));
    this.changed();
  }
  async removeZone(item) {
    const details = await openConfirmModal({
      title: i18n("GROUPS.ZONE_REMOVE"),
      content: i18n("GROUPS.ZONE_REMOVE_MSG", {
        name: item.zone?.name || item.zone_id
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details.loading(i18n("GROUPS.ZONE_REMOVE_LOADING"));
    await lastValueFrom(_a(item.group_id, item.zone_id)).catch((error) => {
      details.close();
      notifyError(i18n("GROUPS.ZONE_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("GROUPS.ZONE_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateZone(item) {
    await lastValueFrom(da(item.group_id, item.zone_id, {
      permissions: +item.permissions || 0,
      deny: !!item.deny
    })).catch((error) => {
      notifyError(i18n("GROUPS.ZONE_SAVE_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("GROUPS.ZONE_SAVE_SUCCESS"));
    this.changed();
  }
  async editZonePermissions(item) {
    const result = await lastValueFrom(this._dialog.open(GroupPermissionsModalComponent, {
      data: {
        title: "GROUPS.ZONE_PERMISSIONS",
        permissions: item.permissions,
        deny: item.deny,
        show_deny: true
      }
    }).afterClosed());
    if (!result)
      return;
    await this.updateZone(__spreadProps(__spreadValues({}, item), {
      permissions: result.permissions,
      deny: result.deny
    }));
  }
  changed() {
    this._changed.next((/* @__PURE__ */ new Date()).valueOf());
  }
  static \u0275fac = function GroupStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GroupStateService, factory: _GroupStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  GroupStateService
};
//# sourceMappingURL=chunk-WU3FRRWZ.js.map
