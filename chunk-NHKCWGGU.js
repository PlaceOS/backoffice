import {
  ActiveItemService,
  DriverFormComponent
} from "./chunk-SQYX7RDA.js";
import {
  MatDialog
} from "./chunk-YDTR7R4T.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import {
  i18n
} from "./chunk-BSW7AGOT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-H6LO5TZR.js";
import {
  BehaviorSubject,
  Br,
  Fc,
  Ic,
  Nc,
  Wc,
  Yr,
  catchError,
  debounceTime,
  filter,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  tap,
  uo
} from "./chunk-BKO4HWAT.js";

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
    if (!(item instanceof uo) || item.repo_type === Yr.Interface)
      return of(null);
    this._loading.next(true);
    return Nc(item.id, { limit: 2e3 }).pipe(catchError(() => []));
  }), tap(() => this._loading.next(false)), startWith([]), shareReplay(1));
  /** Get latest commit for the active repository */
  commit = this._state.active_item$.pipe(filter((i) => i instanceof uo), switchMap((item) => Fc(item.id, { count: 1 })), catchError(() => []), map((details) => details[0]?.commit || "HEAD"));
  get active_item() {
    return this._state.active_item;
  }
  async pullLatestCommit() {
    const commit = await Wc(this.active_item.id).toPromise().catch((err) => {
      notifyError(i18n("REPOS.GIT_PULL_ERROR", {
        error: JSON.stringify(err.response || err.message || i18n("REPOS.GIT_PULL_TIMEOUT"))
      }));
    });
    if (!commit)
      return;
    const repo = await Ic(this.active_item.id).toPromise();
    if (repo)
      this._state.replaceItem(repo);
  }
  async newDriver(driver) {
    this._dialog.open(DriverFormComponent, {
      data: {
        item: new Br({
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
//# sourceMappingURL=chunk-NHKCWGGU.js.map
