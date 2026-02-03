import {
  ActiveItemService
} from "./chunk-WJDEALFU.js";
import {
  ItemCreateUpdateModalComponent
} from "./chunk-4O3ZDLGN.js";
import {
  MatDialog
} from "./chunk-MNFEZLRO.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-CZ2LCIXT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-TUZQ7R7Y.js";
import {
  BehaviorSubject,
  Cu,
  Fc,
  Hr,
  Mc,
  Rc,
  Vr,
  catchError,
  debounceTime,
  filter,
  io,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  tap,
  wc
} from "./chunk-74QWELJT.js";

// src/app/repositories/repositories-state.service.ts
var RepositoriesStateService = class _RepositoriesStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  loading = this._loading.asObservable();
  /** Active module */
  item = this._state.item;
  /** List of available drivers for repository */
  driver_list = this._state.active_item$.pipe(debounceTime(300), switchMap((item) => {
    if (!(item instanceof io) || item.repo_type === Vr.Interface)
      return of(null);
    this._loading.next(true);
    return Rc(item.id, { limit: 2e3 }).pipe(catchError(() => []));
  }), tap(() => this._loading.next(false)), startWith([]), shareReplay(1));
  /** Get latest commit for the active repository */
  commit = this._state.active_item$.pipe(filter((i) => i instanceof io), switchMap((item) => Mc(item.id, { count: 1 })), catchError(() => []), map((details) => details[0]?.commit || "HEAD"));
  get active_item() {
    return this._state.active_item;
  }
  async pullLatestCommit() {
    const commit = await Fc(this.active_item.id).toPromise().catch((err) => {
      notifyError(i18n("REPOS.GIT_PULL_ERROR", {
        error: JSON.stringify(err.response || err.message || i18n("REPOS.GIT_PULL_TIMEOUT"))
      }));
    });
    if (!commit)
      return;
    const repo = await wc(this.active_item.id).toPromise();
    if (repo)
      this._state.replaceItem(repo);
  }
  async newDriver(driver) {
    this._dialog.open(ItemCreateUpdateModalComponent, {
      data: {
        item: new Hr({
          name: "",
          module_name: "",
          repository_id: this.active_item.id,
          file_name: driver
        }),
        name: "DRIVERS.NEW",
        save: (item) => Cu(item)
      }
    });
  }
  static \u0275fac = function RepositoriesStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoriesStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RepositoriesStateService, factory: _RepositoriesStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoriesStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RepositoriesStateService
};
//# sourceMappingURL=chunk-SLR3NYGA.js.map
