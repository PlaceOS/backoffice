import {
  ViewResponseModalComponent
} from "./chunk-DO5D7NVM.js";
import {
  ActiveItemService
} from "./chunk-6RRM36Z7.js";
import {
  MatDialog
} from "./chunk-6DCZX4UE.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-HV66NOZY.js";
import {
  $c,
  BehaviorSubject,
  Bu,
  Fu,
  Mr,
  au,
  catchError,
  debounceTime,
  filter,
  gu,
  map,
  of,
  shareReplay,
  startWith,
  switchMap,
  tap,
  wc,
  zu
} from "./chunk-K7VBXBIC.js";

// src/app/modules/module-state.service.ts
var ModuleStateService = class _ModuleStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  loading = this._loading.asObservable();
  /** Active module */
  item = this._state.item.pipe(filter((_) => _ instanceof Mr));
  /** Observable for associated settings of the active item */
  associated_settings = this._state.active_item$.pipe(debounceTime(300), switchMap((item) => {
    if (!item || !(item instanceof Mr))
      return [];
    return Bu(item.id);
  }));
  /** Driver associated with the active module */
  driver = this.item.pipe(switchMap((item) => au(item.driver_id)), shareReplay(1));
  /** System assoicated with the active module */
  system = this.item.pipe(switchMap((item) => item.system_id ? wc(item.system_id) : of(null)), shareReplay(1));
  edge = this.item.pipe(switchMap((item) => item.edge_id ? gu(item.edge_id) : of(null)), shareReplay(1));
  /** System assoicated with the active module */
  system_list = this.item.pipe(switchMap((item) => {
    this._loading.next(true);
    return $c({ module_id: item.id }).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((details) => details.data), tap((_) => this._loading.next(false)), shareReplay(1));
  get active_item() {
    return this._state.active_item;
  }
  async toggleModuleState() {
    const method = this.active_item.running ? zu : Fu;
    const error = await method(this.active_item.id).pipe(map((_) => null)).toPromise().catch((err) => err);
    if (error) {
      if (typeof error === "string" && error.length < 64) {
        notifyError(error);
      } else {
        notifyError(`Failed to ${this.active_item.running ? "stop" : "start"} device '${this.active_item.id}'.
View Error?`, "View", () => this.viewDetails(error));
      }
      return;
    }
    notifySuccess(`Module successfully ${this.active_item.running ? "stopped" : "started"}`);
    this.active_item.running = !this.active_item.running;
  }
  /** View Results of the execute */
  viewDetails(content) {
    this._dialog.open(ViewResponseModalComponent, {
      data: { content }
    });
  }
  static \u0275fac = function ModuleStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModuleStateService, factory: _ModuleStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ModuleStateService
};
//# sourceMappingURL=chunk-BZKODNHX.js.map
