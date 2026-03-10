import {
  SelectItemModalComponent
} from "./chunk-54PPKEVI.js";
import {
  ActiveItemService
} from "./chunk-XDYOMWYE.js";
import {
  openConfirmModal
} from "./chunk-FVY2HZHZ.js";
import {
  MatDialog
} from "./chunk-OSF25IC4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  unique,
  ɵɵdefineInjectable
} from "./chunk-E55B7SJP.js";
import {
  BehaviorSubject,
  Mn,
  Sa,
  Va,
  Wa,
  Zc,
  catchError,
  combineLatest,
  debounceTime,
  ec,
  first,
  ja,
  lastValueFrom,
  map,
  of,
  shareReplay,
  startWith,
  switchMap
} from "./chunk-WQVS62YG.js";
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
    if (!(item instanceof Mn))
      return {};
    this._loading.next(true);
    const details = await Promise.all([
      lastValueFrom(Zc({ zone_id: item.id, limit: 1 }).pipe(map((d2) => d2.total))).catch(() => 0),
      lastValueFrom(Va(item.id).pipe(map((d2) => d2.total))).catch(() => 0),
      lastValueFrom(ec(item.id).pipe(map((d2) => d2.length))).catch(() => 0),
      lastValueFrom(ja({ parent_id: item.id, limit: 1 }).pipe(map((d2) => d2.total))).catch(() => 0)
    ]);
    const [systems, triggers, metadata, children] = details;
    this._loading.next(false);
    return {
      systems,
      triggers,
      metadata,
      children
    };
  }));
  systems = this.item.pipe(switchMap((item) => {
    if (!(item instanceof Mn))
      return of({ data: [] });
    return Zc({ zone_id: item.id }).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((list) => list.data), shareReplay(1));
  triggers = this.item.pipe(switchMap((item) => {
    if (!(item instanceof Mn))
      return of({ data: [] });
    return Va(item.id).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((list) => list.data), shareReplay(1));
  metadata = this.item.pipe(switchMap((item) => {
    if (!(item instanceof Mn))
      return of([]);
    return ec(item.id).pipe(catchError(() => of([])), startWith([]));
  }), shareReplay(1));
  children = this.item.pipe(switchMap((item) => {
    if (!(item instanceof Mn))
      return of({ data: [] });
    return ja({ parent_id: item.id }).pipe(catchError(() => of({ data: [] })), startWith({ data: [] }));
  }), map((list) => list.data), shareReplay(1));
  get active_item() {
    return this._service.active_item;
  }
  constructor() {
    setTimeout(() => this._change.next(!this._change.getValue()), 1e3);
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => Sa({ q: _ }).pipe(map((resp) => resp.data))
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
    return Wa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
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
    const zone = await lastValueFrom(Wa(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
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
//# sourceMappingURL=chunk-WTGGAUXP.js.map
