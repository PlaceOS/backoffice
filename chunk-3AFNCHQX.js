import {
  SelectItemModalComponent
} from "./chunk-LD5EL63W.js";
import {
  ViewResponseModalComponent
} from "./chunk-6H43DY5K.js";
import {
  PlaceDebugService
} from "./chunk-N42GIG3R.js";
import {
  calculateModuleIndex
} from "./chunk-ASMAJT6N.js";
import {
  ActiveItemService
} from "./chunk-GHSRJZVM.js";
import {
  ItemCreateUpdateModalComponent
} from "./chunk-E5O3W4UK.js";
import {
  openConfirmModal
} from "./chunk-SMGQCLO4.js";
import {
  moveItemInArray
} from "./chunk-D26PSXGA.js";
import {
  MatDialog
} from "./chunk-MNFEZLRO.js";
import {
  AsyncHandler
} from "./chunk-3LEBC5GS.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  Injectable,
  inject,
  nextValueFrom,
  setClassMetadata,
  unique,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-TUZQ7R7Y.js";
import {
  $a,
  BehaviorSubject,
  Br,
  Lr,
  Ne,
  Sa,
  Zc,
  _a,
  combineLatest,
  da,
  dc,
  debounceTime,
  ea,
  ec,
  fa,
  fc,
  first,
  ia,
  lastValueFrom,
  ma,
  map,
  oa,
  of,
  pa,
  sa,
  shareReplay,
  startWith,
  switchMap,
  ta,
  tap,
  ua,
  uc,
  x
} from "./chunk-74QWELJT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/systems/system-state.service.ts
var SystemStateService = class _SystemStateService extends AsyncHandler {
  _state = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  _dialog = inject(MatDialog);
  /** Observable of the active item */
  item = this._state.active_item$;
  _loading = new BehaviorSubject({});
  _modules = new BehaviorSubject([]);
  _change = new BehaviorSubject(0);
  /** Observable for associated settings of the active item */
  associated_settings = this._state.active_item$.pipe(debounceTime(300), switchMap((item) => {
    if (!item || !(item instanceof Lr))
      return [];
    return ma(item.id);
  }), shareReplay(1));
  /** Observable of the counts of the active item */
  counts = combineLatest([
    this._state.active_item$,
    this._change
  ]).pipe(debounceTime(300), switchMap(async (_) => {
    const [item] = _;
    if (!item || !(item instanceof Lr))
      return {};
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      settings: true
    }));
    const details = await Promise.all([
      lastValueFrom(da(item.id).pipe(map((d) => d.total))).catch(() => 0),
      lastValueFrom(ec(item.id).pipe(map((d) => d.length))).catch(() => 0)
    ]);
    const [triggers, metadata] = details;
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      settings: false
    }));
    return {
      devices: item.modules.length,
      zones: item.zones.length,
      triggers,
      metadata
    };
  }));
  /** Observable for modules associated with system */
  modules = combineLatest([
    this.item,
    this._change
  ]).pipe(debounceTime(200), switchMap(([item]) => {
    this._modules.next([]);
    if (!item || !(item instanceof Lr))
      return of([]);
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      modules: true
    }));
    return uc({
      control_system_id: item.id,
      complete: true,
      limit: 200
    }).pipe(map((i) => [item, i.data]), startWith([item, []]));
  }), map(([item, modules]) => {
    modules.forEach((_) => _.connected = void 0);
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      modules: false
    }));
    modules.sort((a, b) => {
      const index_a = item.modules.indexOf(a.id) > -1 ? item.modules.indexOf(a.id) : 9999;
      const index_b = item.modules.indexOf(b.id) > -1 ? item.modules.indexOf(b.id) : 9999;
      return index_a - index_b;
    });
    this._modules.next(modules);
    return modules;
  }), shareReplay(1));
  /** Observable for debug state of the active modules */
  debug_state = combineLatest([
    this.modules,
    this._debug.changed
  ]).pipe(map(([modules]) => {
    return modules.reduce((mapping, device) => {
      mapping[device.id] = this._debug.isListening(device);
      return mapping;
    }, {});
  }));
  /** Observable for module bindings */
  module_bindings = this.modules.pipe(map((modules) => modules.map((mod) => `${mod.custom_name || mod.name || "Blank"}_${calculateModuleIndex(modules, mod)}`)), shareReplay(1));
  /** Observable for zones associated with system */
  zones = this._state.item.pipe(debounceTime(200), switchMap((item) => {
    if (!item || !(item instanceof Lr))
      return of([]);
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      zones: true
    }));
    return fa(item.id).pipe(map((i) => [item, i.data]), startWith([item, []]));
  }), map(([item, zones]) => {
    zones.sort((a, b) => item.zones.indexOf(a.id) - item.zones.indexOf(b.id));
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      zones: false
    }));
    return zones;
  }), startWith([]), shareReplay(1));
  /** Observable for triggers associated with system */
  triggers = combineLatest([
    this.item,
    this._change
  ]).pipe(debounceTime(200), switchMap(([item]) => {
    if (!item || !(item instanceof Lr)) {
      return of([]);
    }
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      triggers: true
    }));
    return da(item.id).pipe(map((i) => i.data), startWith([]));
  }), tap(() => this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
    triggers: false
  }))), shareReplay(1));
  /** Observable of the active item */
  loading = this._loading.asObservable();
  getModules = () => this._modules.getValue();
  /** Observable of the active item */
  get active_item() {
    return this._state.active_item || {};
  }
  /**
   * Open confirmation modal for stopping the active system
   */
  async startSystem() {
    const details = await this.confirm({
      title: "Start system?",
      content: `Are you sure you want to start this system?<br>All stopped modules within the system will boot up.`,
      icon: { type: "icon", class: "backoffice-controller-play" }
    });
    if (details && details.reason) {
      details.loading("Starting system...");
      const resp = await lastValueFrom(oa(this.active_item.id)).catch((err) => {
        notifyError(`Failed to start system: ${JSON.stringify(err.response || err.message || err)}`);
        return err;
      });
      if (resp) {
        notifySuccess(`Successfully started system`);
        this.timeout("change", () => this._change.next(Date.now()));
      }
      details.close();
    }
  }
  /**
   * Open confirmation modal for stopping the active system
   */
  async stopSystem() {
    const details = await this.confirm({
      title: "Stop system?",
      content: `Are you sure you want to stop this system?<br>All modules will be immediately stopped regardless of any other systems they may be in.`,
      icon: { type: "icon", class: "backoffice-controller-stop" }
    });
    if (!details || !details.reason)
      return;
    details.loading("Stopping system...");
    const resp = await lastValueFrom(ua(this.active_item.id)).catch((err) => {
      notifyError(`Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    console.log("RESP:", resp);
    if (resp) {
      notifySuccess(`Successfully stopped system`);
      this.timeout("change", () => this._change.next(Date.now()));
    }
    details.close();
  }
  toggleModuleDebug(device) {
    if (!device)
      return;
    if (this._debug.isListening(device)) {
      this._debug.unbind(device);
    } else {
      this._debug.bind(device, `${device.custom_name || device.name || "Blank"}_${calculateModuleIndex(this._modules.getValue(), device)}`);
    }
  }
  async newModule() {
    const mod = await this._state.edit(new Br({
      system: this.active_item,
      control_system_id: this.active_item.id
    })).catch((_err) => null);
    if (!mod)
      return;
    this.joinModule(mod.id);
  }
  async editModule(device) {
    await this._state.edit(device).catch((_err) => null);
    this._change.next(Date.now());
  }
  async addModuleToSystem(device) {
    if (device.control_system_id)
      return notifyError("Logic modules cannot be added to another system");
    const item = await nextValueFrom(this.item);
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "module to system",
        query_fn: (_) => Zc({ q: _ }).pipe(map((resp) => resp.data.filter((_2) => _2.id !== item.id)))
      }
    });
    const details = await Promise.race([
      lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "action"))),
      lastValueFrom(ref.afterClosed())
    ]);
    if (!details || !details.reason)
      return ref.close();
    const system = ref.componentInstance.item;
    if (!system)
      return;
    await lastValueFrom(ia(system.id, device.id)).catch((_e) => {
      ref.close();
      notifyError(`Error adding module to system "${system.display_name || system.name}". Error: ${JSON.stringify(_e.response || _e.message || _e)}`);
      throw _e;
    });
    this._change.next(Date.now());
    ref.close();
    notifySuccess(`Successfully added module to system "${system.display_name || system.name}".`);
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
    const t = await this.addTrigger(ref.componentInstance.item);
    ref.close();
    this._change.next(Date.now());
    return t;
  }
  async addTrigger(trigger) {
    const t = await lastValueFrom(pa(this.active_item.id, {
      control_system_id: this.active_item.id,
      enabled: true,
      important: false,
      trigger_id: trigger.id
    }));
    this.timeout("change", () => this._change.next(Date.now()));
    return t;
  }
  async editTrigger(trigger) {
    if (this.item && trigger) {
      const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
        data: {
          item: trigger,
          name: "Trigger",
          save: (item) => $a(item.id, item),
          external_save: true
        }
      });
      const details = await Promise.race([
        lastValueFrom(ref.componentInstance.event.pipe(first((_) => _.reason === "action"))),
        lastValueFrom(ref.afterClosed())
      ]);
      if (!details || !details.reason)
        return;
      ref.componentInstance.loading = "Saving trigger settings...";
      const url = `${x()}/systems/${this.active_item.id}/triggers/${trigger.id}`;
      const trig = await lastValueFrom(Ne(url, details.metadata)).catch((err) => {
        notifyError(`Error updating trigger settings. Error: ${JSON.stringify(err.response || err.message || err)}`);
        throw err;
      });
      ref.close();
      if (!trig)
        return trigger;
      notifySuccess(`Successfully updated trigger settings.`);
      this.timeout("change", () => this._change.next(Date.now()));
      return trig;
    }
  }
  async removeTrigger(trigger) {
    const details = await this.confirm({
      title: `Remove trigger`,
      content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
      icon: { type: "icon", content: "delete" }
    });
    if (!details || !details.reason)
      return;
    await lastValueFrom(_a(this.active_item.id, trigger.id)).catch((err) => {
      details.close();
      notifyError(`Error removing trigger ${trigger.id} from system. Error: ${err.statusText || err.message || err}`);
      throw err;
    });
    details.close();
    notifySuccess(`Successfully removed trigger from system.`);
    this._change.next(Date.now());
  }
  async reorderModules(fst, snd) {
    const details = await this.confirm({
      title: "Change order?",
      content: `Are you sure you want to change the module priority?<br>Settings will be updated immediately for the system.`,
      icon: { type: "icon", content: "layers" }
    });
    if (!details || !details.reason)
      return;
    details.loading("Updating module order...");
    const list = [...this.active_item.modules];
    moveItemInArray(list, fst, snd);
    const resp = await lastValueFrom(ta(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: list
    }))).catch((err) => {
      notifyError(`Failed to reorder system modules: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    details.close();
    if (resp instanceof Lr) {
      notifySuccess(`Successfully reordered system modules.`);
      if (resp)
        this._state.replaceItem(resp);
    }
  }
  async sortModulesByType(alphabetical = false) {
    const modules = this._modules.getValue();
    if (modules.length < 2)
      return;
    const details = await this.confirm({
      title: "Sort modules by class?",
      content: `Are you sure you want to sort modules by class?<br>Modules with the same class name will be grouped together.`,
      icon: { type: "icon", content: "sort" }
    });
    if (!details || !details.reason)
      return;
    details.loading("Sorting modules by class...");
    let sorted_modules = [];
    if (alphabetical) {
      sorted_modules = [...modules].sort((a, b) => {
        const class_a = (a.custom_name || a.name || a.driver?.class_name || "").toLowerCase();
        const class_b = (b.custom_name || b.name || b.driver?.class_name || "").toLowerCase();
        return class_a.localeCompare(class_b);
      });
    } else {
      const processed = /* @__PURE__ */ new Set();
      for (const mod_a of modules) {
        if (processed.has(mod_a))
          continue;
        const mod_class = mod_a.custom_name || mod_a.name || mod_a.driver?.class_name || "";
        sorted_modules.push(mod_a);
        processed.add(mod_a);
        for (const mod_b of modules) {
          if (processed.has(mod_b))
            continue;
          const mod_b_class = mod_b.custom_name || mod_b.name || mod_b.driver?.class_name || "";
          if (mod_class === mod_b_class) {
            sorted_modules.push(mod_b);
            processed.add(mod_b);
          }
        }
      }
    }
    const sorted_ids = sorted_modules.map((m) => m.id);
    const resp = await lastValueFrom(ta(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: sorted_ids
    }))).catch((err) => {
      notifyError(`Failed to sort system modules: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    details.close();
    if (resp instanceof Lr) {
      notifySuccess(`Successfully sorted system modules by class.`);
      if (resp)
        this._state.replaceItem(resp);
    }
  }
  async reorderZones(order) {
    if (order.length !== this.active_item.zones.length)
      return;
    const details = await this.confirm({
      title: "Change order?",
      content: `Are you sure you want to change the zone priority?<br>Settings will be updated immediately for the system.`,
      icon: { type: "icon", content: "layers" }
    });
    if (!details || !details.reason)
      return;
    details.loading("Updating zone order...");
    const resp = await lastValueFrom(ta(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones: order
    }))).catch((err) => {
      notifyError(`Failed to reorder system zones: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    if (resp instanceof Lr) {
      notifySuccess(`Successfully reordered system zones.`);
      if (resp)
        this._state.replaceItem(resp);
    }
    details.close();
  }
  /**
   * Associate module with the active system
   * @param id ID of the module to associate with the active system
   */
  async joinModule(id) {
    await lastValueFrom(ia(this.active_item.id, id)).catch((err) => {
      notifyError(`Error adding module ${id} to system. Error: ${err.statusText || err.message || err}`);
    });
    this.timeout("join", async () => {
      const system = await lastValueFrom(ea(this.active_item.id));
      if (system)
        this._state.replaceItem(system);
      notifySuccess(`Successfully added module to system.`);
      this._change.next(Date.now());
    });
  }
  /**
   * Remove associated module from the active system
   * @param id ID of the module to disassociate with the active system
   */
  async removeModule(device) {
    const details = await this.confirm({
      title: "Remove module?",
      content: `Remove ${device.driver_id} from this system?<br>If this is not used elsewhere the associated data will be removed immediately.`,
      icon: { type: "icon", content: "delete" }
    });
    if (!details || !details.reason)
      return;
    const system = await lastValueFrom(sa(this.active_item.id, device.id)).catch((err) => {
      notifyError(`Error removing module ${device.id} from system. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (system)
      this._state.replaceItem(system);
    notifySuccess(`Successfully removed module from system.`);
  }
  /**
   * Add list of zones to the system
   * @param zones List of zones to add
   */
  async addZones(zone_list) {
    const zones = unique([
      ...this.active_item.zones,
      ...zone_list.map((_) => _.id)
    ]);
    const system = await lastValueFrom(ta(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    }))).catch((err) => {
      notifyError(`Error adding ${zone_list.length} zone(s) to system. Error: ${err.statusText || err.message || err}`);
    });
    if (system)
      this._state.replaceItem(system);
    notifySuccess(`Successfully added zone to system.`);
  }
  /**
   * Remove associated module from the active system
   * @param id ID of the module to disassociate with the active system
   */
  async removeZone(zone) {
    const details = await this.confirm({
      title: "Remove zone?",
      content: `<p>Are you sure you want remove zone "${zone.name}" from the system?</p>Configuration will be updated immediately.`,
      icon: { type: "icon", content: "delete" }
    });
    if (!details || !details.reason)
      return;
    const zones = this.active_item.zones.filter((z) => z !== zone.id);
    const system = await lastValueFrom(ta(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    }))).catch((err) => {
      notifyError(`Error removing zone ${zone.id} from system. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (system)
      this._state.replaceItem(system);
    notifySuccess(`Successfully removed zone from system.`);
  }
  /**
   * Toggle the power state
   * @param device Module to toggle the power state
   */
  async toggleModulePower(device) {
    const method = device.running ? dc : fc;
    await lastValueFrom(method(device.id)).catch((err) => {
      if (typeof err === "string" && err.length < 64) {
        notifyError(err);
      } else {
        notifyError(`Failed to ${device.running ? "stop" : "start"} module '${device.id}'.
View Error?`, "View", () => this.viewDetails(err));
      }
      throw err;
    });
    notifySuccess(`Module successfully ${device.running ? "stopped" : "started"}`);
    device.running = !device.running;
    this._change.next(Date.now());
  }
  /** View Results of the execute */
  viewDetails(content) {
    this._dialog.open(ViewResponseModalComponent, {
      data: { content }
    });
  }
  async confirm(data) {
    return openConfirmModal(data, this._dialog);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemStateService_BaseFactory;
    return function SystemStateService_Factory(__ngFactoryType__) {
      return (\u0275SystemStateService_BaseFactory || (\u0275SystemStateService_BaseFactory = \u0275\u0275getInheritedFactory(_SystemStateService)))(__ngFactoryType__ || _SystemStateService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SystemStateService, factory: _SystemStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SystemStateService
};
//# sourceMappingURL=chunk-3AFNCHQX.js.map
