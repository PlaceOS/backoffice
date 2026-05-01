import {
  ActiveItemService,
  DriverFormComponent
} from "./chunk-G7AXBZWT.js";
import {
  MatDialog
} from "./chunk-74RX4HV2.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-ZO77MJC7.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7Y7JYXTF.js";
import {
  BehaviorSubject,
  al,
  catchError,
  ci,
  debounceTime,
  dl,
  filter,
  ll,
  map,
  of,
  qo,
  shareReplay,
  startWith,
  switchMap,
  tap,
  tl,
  yi
} from "./chunk-VWBDUF7E.js";

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
    if (!(item instanceof qo) || item.repo_type === yi.Interface)
      return of(null);
    this._loading.next(true);
    return al(item.id, { limit: 2e3 }).pipe(catchError(() => []));
  }), tap(() => this._loading.next(false)), startWith([]), shareReplay(1));
  /** Get latest commit for the active repository */
  commit = this._state.active_item$.pipe(filter((i) => i instanceof qo), switchMap((item) => ll(item.id, { count: 1 })), catchError(() => []), map((details) => details[0]?.commit || "HEAD"));
  get active_item() {
    return this._state.active_item;
  }
  async pullLatestCommit() {
    const commit = await dl(this.active_item.id).toPromise().catch((err) => {
      notifyError(i18n("REPOS.GIT_PULL_ERROR", {
        error: JSON.stringify(err.response || err.message || i18n("REPOS.GIT_PULL_TIMEOUT"))
      }));
    });
    if (!commit)
      return;
    const repo = await tl(this.active_item.id).toPromise();
    if (repo)
      this._state.replaceItem(repo);
  }
  async newDriver(driver) {
    this._dialog.open(DriverFormComponent, {
      data: {
        item: new ci({
          name: "",
          module_name: "",
          repository_id: this.active_item.id,
          file_name: driver
        })
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
//# sourceMappingURL=chunk-5O56VOAZ.js.map
