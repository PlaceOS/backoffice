import {
  GroupBulkAddModalComponent,
  GroupPermissionsModalComponent
} from "./chunk-KLOFI2NH.js";
import {
  ActiveItemService
} from "./chunk-I6GWWPM5.js";
import {
  openConfirmModal
} from "./chunk-23M27UMF.js";
import {
  MatDialog
} from "./chunk-LU7L7WA4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-MHS42KT3.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-6NLD6HWW.js";
import {
  $a,
  BehaviorSubject,
  Vc,
  Vn,
  aa,
  ca,
  catchError,
  combineLatest,
  debounceTime,
  filter,
  la,
  lastValueFrom,
  map,
  oa,
  of,
  shareReplay,
  switchMap
} from "./chunk-QVNOCU2N.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/users/users-state.service.ts
var UsersStateService = class _UsersStateService {
  _service = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  _change = new BehaviorSubject(false);
  loading = this._loading.asObservable();
  item = this._service.item;
  counts = combineLatest([
    this._service.active_item$,
    this._change
  ]).pipe(debounceTime(300), switchMap(async (d) => {
    const [item] = d;
    if (!(item instanceof Vn))
      return {};
    this._loading.next(true);
    const details = await Promise.all([
      $a(item.id).pipe(map((d2) => d2.length)).toPromise().catch((_err) => 0),
      lastValueFrom(oa({ user_id: item.id, limit: 1 }).pipe(map((response) => response.total))).catch(() => 0)
    ]);
    const [metadata, groups] = details;
    this._loading.next(false);
    return {
      metadata,
      groups
    };
  }));
  metadata = this.item.pipe(switchMap((item) => {
    if (!(item instanceof Vn))
      return of([]);
    return $a(item.id);
  }), catchError((_err) => []), shareReplay(1));
  groups = combineLatest([
    this._change,
    this.item
  ]).pipe(filter(([, item]) => item instanceof Vn), switchMap(([, item]) => {
    this._loading.next(true);
    return oa({ user_id: item.id, limit: 1e3 }).pipe(catchError(() => of({ data: [] })));
  }), map((response) => {
    this._loading.next(false);
    return response.data.sort((a, b) => (a.group?.name || a.group_id).localeCompare(b.group?.name || b.group_id));
  }), shareReplay(1));
  get active_item() {
    return this._service.active_item;
  }
  async addGroup(group) {
    if (!group?.id)
      return;
    await lastValueFrom(ca({ user_id: this.active_item.id, group_id: group.id })).catch((error) => {
      notifyError(i18n("USERS.GROUP_ADD_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("USERS.GROUP_ADD_SUCCESS"));
    this.changed();
  }
  async bulkAddGroups(existing_groups = []) {
    const groups = await lastValueFrom(this._dialog.open(GroupBulkAddModalComponent, {
      data: {
        title: "USERS.GROUPS_BULK",
        placeholder: "GROUPS.SEARCH",
        empty_message: "USERS.GROUPS_BULK_EMPTY",
        query_fn: (query) => Vc({
          q: query,
          limit: 20,
          authority_id: this.active_item?.authority_id
        }).pipe(map((response) => response.data)),
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
    this._loading.next(true);
    const results = await Promise.allSettled(groups.map((group) => lastValueFrom(ca({
      user_id: this.active_item.id,
      group_id: group.id
    }))));
    this._loading.next(false);
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
    await lastValueFrom(la(item.user_id, item.group_id)).catch((error) => {
      details.close();
      notifyError(i18n("USERS.GROUP_REMOVE_ERROR", { error }));
      throw error;
    });
    details.close();
    notifySuccess(i18n("USERS.GROUP_REMOVE_SUCCESS"));
    this.changed();
  }
  async updateGroup(item) {
    await lastValueFrom(aa(item.user_id, item.group_id, {
      permissions: +item.permissions || 0
    })).catch((error) => {
      notifyError(i18n("USERS.GROUP_SAVE_ERROR", { error }));
      throw error;
    });
    notifySuccess(i18n("USERS.GROUP_SAVE_SUCCESS"));
    this.changed();
  }
  async editGroupPermissions(item) {
    const result = await lastValueFrom(this._dialog.open(GroupPermissionsModalComponent, {
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
    this._change.next(!this._change.getValue());
  }
  constructor() {
    setTimeout(() => this._change.next(!this._change.getValue()), 1e3);
  }
  static \u0275fac = function UsersStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersStateService, factory: _UsersStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  UsersStateService
};
//# sourceMappingURL=chunk-42YHJXIZ.js.map
