import {
  SelectItemModalComponent
} from "./chunk-NSLX7GAP.js";
import {
  ExecuteMethodFieldComponent
} from "./chunk-B7Q6KCSA.js";
import {
  MetadataDisplayComponent
} from "./chunk-ZHA6555R.js";
import {
  ModuleRuntimeErrorsModalComponent
} from "./chunk-WHS64WNZ.js";
import {
  BindingDirective
} from "./chunk-TGG6YAE3.js";
import {
  SettingsFormComponent,
  SettingsHistoryViewComponent
} from "./chunk-T6SFOKDB.js";
import {
  ViewResponseModalComponent
} from "./chunk-D6EVRHUZ.js";
import "./chunk-45ZHSICB.js";
import {
  DebugOutputComponent
} from "./chunk-KUHIXTWR.js";
import "./chunk-VAIKCWTQ.js";
import {
  SettingsFieldComponent
} from "./chunk-W7JULZ3J.js";
import {
  d
} from "./chunk-O72O3CR4.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  ExtensionOutletComponent,
  ItemCreateUpdateModalComponent,
  ItemSearchFieldComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  PlaceDebugService,
  SanitizePipe,
  SidebarMenuComponent,
  SimpleTableComponent,
  calculateModuleIndex,
  extensionsForItem,
  moveItemInArray,
  openConfirmModal
} from "./chunk-JDP5FFMI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TYVAN3UY.js";
import {
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatTooltip,
  MatTooltipModule,
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-EWUI732O.js";
import {
  DateFromPipe
} from "./chunk-53JJL3R3.js";
import {
  IconComponent,
  MatRipple,
  MatRippleModule
} from "./chunk-L3UICUJN.js";
import {
  TranslatePipe
} from "./chunk-V3NTFP3B.js";
import {
  $c,
  $t,
  AsyncHandler,
  AsyncPipe,
  Bc,
  BehaviorSubject,
  Cc,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  Eu,
  Fc,
  FormsModule,
  Fu,
  Hc,
  HostListener,
  Injectable,
  Input,
  Lc,
  Mc,
  Mr,
  NgControlStatus,
  NgModel,
  NgModule,
  Oc,
  Pc,
  Rc,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Tc,
  Tr,
  Uc,
  Uu,
  ViewChild,
  We,
  Wu,
  __spreadProps,
  __spreadValues,
  combineLatest,
  computed,
  copyToClipboard,
  debounceTime,
  first,
  forwardRef,
  i18n,
  inject,
  input,
  jc,
  lastValueFrom,
  map,
  nextValueFrom,
  of,
  qu,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  ta,
  tap,
  unique,
  ve,
  viewChild,
  wc,
  zc,
  zu,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-ZKZAJWA3.js";

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
    if (!item || !(item instanceof Tr))
      return [];
    return Hc(item.id);
  }), shareReplay(1));
  /** Observable of the counts of the active item */
  counts = combineLatest([
    this._state.active_item$,
    this._change
  ]).pipe(debounceTime(300), switchMap(async (_) => {
    const [item] = _;
    if (!item || !(item instanceof Tr))
      return {};
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      settings: true
    }));
    const details = await Promise.all([
      lastValueFrom(jc(item.id).pipe(map((d2) => d2.total))).catch((_2) => 0),
      lastValueFrom(Eu(item.id).pipe(map((d2) => d2.length))).catch((_2) => 0)
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
    if (!item || !(item instanceof Tr))
      return of([]);
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      modules: true
    }));
    return Uu({
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
    if (!item || !(item instanceof Tr))
      return of([]);
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      zones: true
    }));
    return Cc(item.id).pipe(map((i) => [item, i.data]), startWith([item, []]));
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
    if (!item || !(item instanceof Tr)) {
      return of([]);
    }
    this._loading.next(__spreadProps(__spreadValues({}, this._loading.getValue()), {
      triggers: true
    }));
    return jc(item.id).pipe(map((i) => i.data), startWith([]));
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
      const resp = await lastValueFrom(Mc(this.active_item.id)).catch((err) => {
        notifyError(`Failed to start system: ${JSON.stringify(err.response || err.message || err)}`);
        return err;
      });
      if (!resp)
        notifySuccess(`Successfully started system`);
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
    const resp = await lastValueFrom(Rc(this.active_item.id)).catch((err) => {
      notifyError(`Failed to stop system: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    if (!resp)
      notifySuccess(`Successfully stopped system`);
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
    const mod = await this._state.edit(new Mr({
      system: this.active_item,
      control_system_id: this.active_item.id
    })).catch((_) => null);
    if (!mod)
      return;
    this.joinModule(mod.id);
  }
  async editModule(device) {
    await this._state.edit(device).catch((_) => null);
    this._change.next(Date.now());
  }
  async addModuleToSystem(device) {
    if (device.control_system_id)
      return notifyError("Logic modules cannot be added to another system");
    const item = await nextValueFrom(this.item);
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "module to system",
        query_fn: (_) => $c({ q: _ }).pipe(map((resp) => resp.data.filter((_2) => _2.id !== item.id)))
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
    await lastValueFrom(Pc(system.id, device.id)).catch((e) => {
      ref.close();
      notifyError(`Error adding module to system "${system.display_name || system.name}". Error: ${JSON.stringify(e.response || e.message || e)}`);
      throw e;
    });
    this._change.next(Date.now());
    ref.close();
    notifySuccess(`Successfully added module to system "${system.display_name || system.name}".`);
  }
  async selectTrigger() {
    const ref = this._dialog.open(SelectItemModalComponent, {
      data: {
        service_name: "Triggers",
        query_fn: (_) => Lc({ q: _ }).pipe(map((resp) => resp.data))
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
    const t = await lastValueFrom(Fc(this.active_item.id, {
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
          save: (item) => Bc(item.id, item),
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
      const url = `${ve()}/systems/${this.active_item.id}/triggers/${trigger.id}`;
      const trig = await lastValueFrom(We(url, details.metadata)).catch((err) => {
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
    await lastValueFrom(zc(this.active_item.id, trigger.id)).catch((err) => {
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
    const resp = await lastValueFrom(Oc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      modules: list
    }))).catch((err) => {
      notifyError(`Failed to reorder system modules: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    details.close();
    if (resp instanceof Tr) {
      notifySuccess(`Successfully reordered system modules.`);
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
    const resp = await lastValueFrom(Oc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones: order
    }))).catch((err) => {
      notifyError(`Failed to reorder system zones: ${JSON.stringify(err.response || err.message || err)}`);
      return err;
    });
    if (resp instanceof Tr) {
      notifySuccess(`Successfully reordered system zones.`);
      this._state.replaceItem(resp);
    }
    details.close();
  }
  /**
   * Associate module with the active system
   * @param id ID of the module to associate with the active system
   */
  async joinModule(id) {
    await lastValueFrom(Pc(this.active_item.id, id)).catch((err) => {
      notifyError(`Error adding module ${id} to system. Error: ${err.statusText || err.message || err}`);
    });
    this.timeout("join", async () => {
      const system = await lastValueFrom(wc(this.active_item.id));
      if (!system)
        return;
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
    const system = await lastValueFrom(Tc(this.active_item.id, device.id)).catch((err) => {
      notifyError(`Error removing module ${device.id} from system. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (!system)
      return;
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
    const system = await lastValueFrom(Oc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    }))).catch((err) => {
      notifyError(`Error adding ${zone_list.length} zone(s) to system. Error: ${err.statusText || err.message || err}`);
    });
    if (!system)
      return;
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
    const system = await lastValueFrom(Oc(this.active_item.id, __spreadProps(__spreadValues({}, this.active_item), {
      zones
    }))).catch((err) => {
      notifyError(`Error removing zone ${zone.id} from system. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (!system)
      return;
    this._state.replaceItem(system);
    notifySuccess(`Successfully removed zone from system.`);
  }
  /**
   * Toggle the power state
   * @param device Module to toggle the power state
   */
  async toggleModulePower(device) {
    const method = device.running ? zu : Fu;
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

// src/app/systems/system-about.component.ts
var _c0 = () => [];
function SystemAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.SUPPORT_URL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.support_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.support_url, " ");
  }
}
function SystemAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.BOOKABLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, ((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.bookable) ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function SystemAboutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.SIGNAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.TRUE"), " ");
  }
}
function SystemAboutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.PUBLIC"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, ((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.public) ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function SystemAboutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.CODE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.code);
  }
}
function SystemAboutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.EMAIL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + ((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.email);
  }
}
function SystemAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.CAPACITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.capacity);
  }
}
function SystemAboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.MAP_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.map_id);
  }
}
function SystemAboutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.PANEL_COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.installed_ui_devices);
  }
}
function SystemAboutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.timezone);
  }
}
function SystemAboutComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 12);
    \u0275\u0275elementStart(1, "div", 16)(2, "h3", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 18);
    \u0275\u0275pipe(6, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 4, ctx_r0.description()), \u0275\u0275sanitizeHtml);
  }
}
function SystemAboutComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", (tmp_1_0 = ctx_r0.item()) == null ? null : tmp_1_0.id)("merge", true)("settings", (tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.settings)("merge_settings", \u0275\u0275pipeBind1(2, 4, ctx_r0.other_settings) || \u0275\u0275pureFunction0(6, _c0));
  }
}
function SystemAboutComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "SYSTEMS.LOADING_SETTINGS"));
  }
}
var SystemAboutComponent = class _SystemAboutComponent extends AsyncHandler {
  _service = inject(SystemStateService);
  /** List of settings for associated modules, drivers and zones */
  other_settings = this._service.associated_settings;
  start = () => this._service.startSystem();
  stop = () => this._service.stopSystem();
  item = signal(void 0, ...ngDevMode ? [{ debugName: "item" }] : []);
  /** HTML string for rendering the description */
  description = computed(() => d(this.item().description || "", { async: false }), ...ngDevMode ? [{ debugName: "description" }] : []);
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => this.item.set(item)));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemAboutComponent_BaseFactory;
    return function SystemAboutComponent_Factory(__ngFactoryType__) {
      return (\u0275SystemAboutComponent_BaseFactory || (\u0275SystemAboutComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SystemAboutComponent)))(__ngFactoryType__ || _SystemAboutComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemAboutComponent, selectors: [["system-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 49, consts: [[1, "p-4"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "flex-1"], [1, "grid", "w-full", "gap-2", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "flex", "flex-col", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "px-4", "py-3", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "p-1"], ["btn", "", "start", "", "matRipple", "", 1, "m-1", "min-w-36", "flex-1", 3, "click"], ["btn", "", "stop", "", "matRipple", "", 1, "inverse", "error", "m-1", "min-w-36", "flex-1", 3, "click"], [1, "my-4", "text-base-300"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], ["target", "_blank", 1, "select-all", "truncate", "underline", 3, "href"], [1, "value", "mono"], [1, "w-full", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "id", "merge", "settings", "merge_settings"], [1, "mb-4", 3, "diameter"]], template: function SystemAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275conditionalCreate(4, SystemAboutComponent_Conditional_4_Template, 5, 5);
      \u0275\u0275conditionalCreate(5, SystemAboutComponent_Conditional_5_Template, 6, 6);
      \u0275\u0275conditionalCreate(6, SystemAboutComponent_Conditional_6_Template, 6, 6);
      \u0275\u0275conditionalCreate(7, SystemAboutComponent_Conditional_7_Template, 6, 6);
      \u0275\u0275conditionalCreate(8, SystemAboutComponent_Conditional_8_Template, 5, 4);
      \u0275\u0275conditionalCreate(9, SystemAboutComponent_Conditional_9_Template, 5, 5);
      \u0275\u0275conditionalCreate(10, SystemAboutComponent_Conditional_10_Template, 5, 4);
      \u0275\u0275conditionalCreate(11, SystemAboutComponent_Conditional_11_Template, 5, 4);
      \u0275\u0275conditionalCreate(12, SystemAboutComponent_Conditional_12_Template, 5, 4);
      \u0275\u0275conditionalCreate(13, SystemAboutComponent_Conditional_13_Template, 5, 4);
      \u0275\u0275elementStart(14, "div", 4);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 5)(18, "span", 6);
      \u0275\u0275pipe(19, "date");
      \u0275\u0275pipe(20, "date");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 4);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 5)(27, "span", 6);
      \u0275\u0275pipe(28, "date");
      \u0275\u0275pipe(29, "date");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 2)(33, "div", 7)(34, "h3", 8);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 9)(38, "button", 10);
      \u0275\u0275listener("click", function SystemAboutComponent_Template_button_click_38_listener() {
        return ctx.start();
      });
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 11);
      \u0275\u0275listener("click", function SystemAboutComponent_Template_button_click_41_listener() {
        return ctx.stop();
      });
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(44, SystemAboutComponent_Conditional_44_Template, 7, 6);
      \u0275\u0275element(45, "hr", 12);
      \u0275\u0275conditionalCreate(46, SystemAboutComponent_Conditional_46_Template, 3, 7, "section")(47, SystemAboutComponent_Conditional_47_Template, 5, 4, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_20_0;
      let tmp_21_0;
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "7.5rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_1_0 = ctx.item()) == null ? null : tmp_1_0.support_url) ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0.email) ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.item()) == null ? null : tmp_3_0.signage) ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.item()) == null ? null : tmp_4_0.email) ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.code) ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.item()) == null ? null : tmp_6_0.email) ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.item()) == null ? null : tmp_7_0.capacity) ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_8_0 = ctx.item()) == null ? null : tmp_8_0.map_id) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_9_0 = ctx.item()) == null ? null : tmp_9_0.installed_ui_devices) ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.item()) == null ? null : tmp_10_0.timezone) ? 13 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 23, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(19, 25, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(20, 28, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 31, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 33, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(28, 35, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(29, 38, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 41, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 43, "SYSTEMS.CONTROLS"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 45, "SYSTEMS.START"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 47, "SYSTEMS.STOP"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_20_0 = ctx.item()) == null ? null : tmp_20_0.description) ? 44 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_21_0 = ctx.item()) == null ? null : tmp_21_0.settings) && ctx.other_settings ? 46 : 47);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsFormComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    AsyncPipe,
    DatePipe,
    TranslatePipe,
    DateFromPipe,
    SanitizePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=system-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemAboutComponent, [{
    type: Component,
    args: [{ selector: "system-about", template: `
        <div class="p-4">
            <section
                class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
            >
                <div class="flex-1">
                    <div
                        class="grid w-full gap-2 rounded border border-base-200 p-4"
                        [style.gridTemplateColumns]="'7.5rem auto'"
                    >
                        @if (item()?.support_url) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                            </div>
                            <a
                                class="select-all truncate underline"
                                [href]="item()?.support_url"
                                target="_blank"
                            >
                                {{ item()?.support_url }}
                            </a>
                        }
                        @if (item()?.email) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.BOOKABLE' | translate }}
                            </div>
                            <div>
                                {{
                                    (item()?.bookable
                                        ? 'COMMON.TRUE'
                                        : 'COMMON.FALSE'
                                    ) | translate
                                }}
                            </div>
                        }
                        @if (item()?.signage) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SIGNAGE' | translate }}
                            </div>
                            <div>
                                {{ 'COMMON.TRUE' | translate }}
                            </div>
                        }
                        @if (item()?.email) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.PUBLIC' | translate }}
                            </div>
                            <div>
                                {{
                                    (item()?.public
                                        ? 'COMMON.TRUE'
                                        : 'COMMON.FALSE'
                                    ) | translate
                                }}
                            </div>
                        }
                        @if (item()?.code) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.CODE' | translate }}
                            </div>
                            <div>{{ item()?.code }}</div>
                        }
                        @if (item()?.email) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.EMAIL' | translate }}
                            </div>
                            <a
                                class="select-all truncate underline"
                                [href]="'mailto:' + item()?.email"
                                target="_blank"
                                >{{ item()?.email }}</a
                            >
                        }
                        @if (item()?.capacity) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.CAPACITY' | translate }}
                            </div>
                            <div>{{ item()?.capacity }}</div>
                        }
                        @if (item()?.map_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.MAP_ID' | translate }}
                            </div>
                            <div class="value mono">{{ item()?.map_id }}</div>
                        }
                        @if (item()?.installed_ui_devices) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                            </div>
                            <div>{{ item()?.installed_ui_devices }}</div>
                        }
                        @if (item()?.timezone) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </div>
                            <div>{{ item()?.timezone }}</div>
                        }
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.CREATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item().created_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().created_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().created_at * 1000 | dateFrom }}
                            </span>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.UPDATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item().updated_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().updated_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().updated_at * 1000 | dateFrom }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex flex-col rounded border border-base-200">
                        <h3
                            class="w-full rounded bg-base-200 px-4 py-3 text-lg font-medium"
                        >
                            {{ 'SYSTEMS.CONTROLS' | translate }}
                        </h3>
                        <div class="flex flex-wrap items-center p-1">
                            <button
                                btn
                                start
                                matRipple
                                class="m-1 min-w-36 flex-1"
                                (click)="start()"
                            >
                                {{ 'SYSTEMS.START' | translate }}
                            </button>
                            <button
                                btn
                                stop
                                matRipple
                                class="inverse error m-1 min-w-36 flex-1"
                                (click)="stop()"
                            >
                                {{ 'SYSTEMS.STOP' | translate }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            @if (item()?.description) {
                <hr class="my-4 text-base-300" />
                <div class="w-full rounded border border-base-200">
                    <h3
                        class="w-full rounded bg-base-200 p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="description() | sanitize"
                    ></div>
                </div>
            }
            <hr class="my-4 text-base-300" />
            @if (item()?.settings && other_settings) {
                <section>
                    <a-settings-form
                        [id]="item()?.id"
                        [merge]="true"
                        [settings]="item()?.settings"
                        [merge_settings]="(other_settings | async) || []"
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center p-8">
                    <mat-spinner class="mb-4" [diameter]="32"></mat-spinner>
                    <p>{{ 'SYSTEMS.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      DateFromPipe,
      MatProgressSpinnerModule,
      SettingsFormComponent,
      SanitizePipe,
      MatRippleModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;a188d2de4b6e384aa8f57ce4a210313f16e490af7ab3d2aee08b7ac083982f74;/home/runner/work/backoffice/backoffice/src/app/systems/system-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nbutton {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=system-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemAboutComponent, { className: "SystemAboutComponent", filePath: "src/app/systems/system-about.component.ts", lineNumber: 235 });
})();

// src/app/systems/system-metadata.component.ts
function SystemMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var SystemMetadataComponent = class _SystemMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function SystemMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemMetadataComponent, selectors: [["system-metadata"]], decls: 2, vars: 1, consts: [[1, "p-4"], [3, "item"]], template: function SystemMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, SystemMetadataComponent_Conditional_1_Template, 1, 1, "metadata-display", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item ? 1 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemMetadataComponent, [{
    type: Component,
    args: [{ selector: "system-metadata", template: `
        <div class="p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemMetadataComponent, { className: "SystemMetadataComponent", filePath: "src/app/systems/system-metadata.component.ts", lineNumber: 18 });
})();

// src/app/overlays/view-module-state.component.ts
function ViewModuleStateModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 10);
    \u0275\u0275elementStart(19, "div")(20, "button", 11);
    \u0275\u0275listener("click", function ViewModuleStateModalComponent_Conditional_7_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateState());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275element(24, "settings-form-field", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "SYSTEMS.SINGULAR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.system == null ? null : ctx_r1.system.display_name) || (ctx_r1.system == null ? null : ctx_r1.system.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.system == null ? null : ctx_r1.system.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "MODULES.SINGULAR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.module == null ? null : ctx_r1.module.custom_name) || (ctx_r1.module == null ? null : ctx_r1.module.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.device_classes[ctx_r1.module == null ? null : ctx_r1.module.id], " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 13, "MODULES.STATE_UPDATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.state)("readonly", true);
  }
}
function ViewModuleStateModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "MODULES.STATE_LOADING"), " ");
  }
}
var ViewModuleStateModalComponent = class _ViewModuleStateModalComponent extends AsyncHandler {
  _dialog = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  /** Current state of the selected module */
  state;
  /** Whether the module state is being loaded */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Whether the modal is closing */
  closing = signal(false, ...ngDevMode ? [{ debugName: "closing" }] : []);
  /** Mapping of devices to the module bindings */
  device_classes = {};
  /** System of the selected module */
  get system() {
    return this._data.system;
  }
  /** Module to view the state of */
  get module() {
    return this._data.module;
  }
  /** Modules associated with the system */
  get devices() {
    return this._data.devices || [];
  }
  ngOnInit() {
    this.generateModuleBindings();
    this.updateState();
  }
  /**
   * Generate the binding modules for each device
   */
  generateModuleBindings() {
    const counter = {};
    for (const device of this.devices) {
      const name = device.custom_name || device.name || "Blank";
      if (!counter[name]) {
        counter[name] = 0;
      }
      this.device_classes[device.id] = `${name}_${++counter[name]}`;
    }
  }
  /** Update the state of the module */
  updateState() {
    if (!this.system || !this.module) {
      return;
    }
    const class_name = this.device_classes[this.module.id];
    if (!class_name) {
      return;
    }
    this.loading.set(true);
    const class_parts = class_name.split("_");
    const num = !isNaN(+class_parts[class_parts.length - 1]) ? +class_parts[class_parts.length - 1] : 1;
    Uc(this.system.id, class_parts.slice(0, class_parts.length - 1).join("_"), num).subscribe((state) => {
      const pre_state = (typeof state === "string" ? JSON.parse(state) : state) || {};
      Object.keys(pre_state).forEach((key) => {
        pre_state[key] = JSON.parse(pre_state[key]);
      });
      this.state = JSON.stringify(pre_state, void 0, 4);
      this.loading.set(false);
    }, (err) => {
      notifyError(JSON.stringify(err.response || err.message || err));
      this.loading.set(false);
    });
  }
  /**
   * Close the modal
   */
  close() {
    this._dialog.close();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ViewModuleStateModalComponent_BaseFactory;
    return function ViewModuleStateModalComponent_Factory(__ngFactoryType__) {
      return (\u0275ViewModuleStateModalComponent_BaseFactory || (\u0275ViewModuleStateModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ViewModuleStateModalComponent)))(__ngFactoryType__ || _ViewModuleStateModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewModuleStateModalComponent, selectors: [["view-module-state-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 4, consts: [[1, "mx-4", "mb-2", "mt-4", "flex", "items-center", "justify-between", "rounded", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-[40rem]", "max-h-[70vh]", "w-[80vw]", "flex-col", "space-y-2", "overflow-auto", "p-4"], [1, "flex", "h-[70vh]", "w-[80vw]", "flex-col", "items-center", "justify-center"], [1, "mb-2", "flex", "items-center", "space-x-2"], [1, "relative", "min-w-48", "rounded", "border", "border-base-300", "px-4", "py-2"], [1, "absolute", "left-4", "top-0", "-translate-y-1/2", "rounded", "bg-base-100", "px-2", "py-1", "text-xs"], [1, "truncate"], [1, "text-xs", "opacity-30"], [1, "w-px", "flex-1"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "pb-4"], [3, "ngModel", "readonly"], ["diameter", "32"]], template: function ViewModuleStateModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2)(5, "icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(7, ViewModuleStateModalComponent_Conditional_7_Template, 25, 15, "main", 3)(8, ViewModuleStateModalComponent_Conditional_8_Template, 5, 3, "main", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "MODULES.STATE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.loading() ? 7 : 8);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    MatRippleModule,
    MatRipple,
    IconComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewModuleStateModalComponent, [{
    type: Component,
    args: [{ selector: "view-module-state-modal", template: `
        <div
            class="mx-4 mb-2 mt-4 flex items-center justify-between rounded bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'MODULES.STATE' | translate }}
            </h3>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </div>
        @if (!loading()) {
            <main
                class="flex h-[40rem] max-h-[70vh] w-[80vw] flex-col space-y-2 overflow-auto p-4"
            >
                <div class="mb-2 flex items-center space-x-2">
                    <div
                        class="relative min-w-48 rounded border border-base-300 px-4 py-2"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 text-xs"
                        >
                            {{ 'SYSTEMS.SINGULAR' | translate }}
                        </div>
                        <div class="truncate">
                            {{ system?.display_name || system?.name }}
                        </div>
                        <div class="text-xs opacity-30">{{ system?.id }}</div>
                    </div>
                    <div
                        class="relative min-w-48 rounded border border-base-300 px-4 py-2"
                    >
                        <div
                            class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 px-2 py-1 text-xs"
                        >
                            {{ 'MODULES.SINGULAR' | translate }}
                        </div>
                        <div class="truncate">
                            {{ module?.custom_name || module?.name }}
                        </div>
                        <div class="text-xs opacity-30">
                            {{ device_classes[module?.id] }}
                        </div>
                    </div>
                    <div class="w-px flex-1"></div>
                    <div>
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="updateState()"
                        >
                            {{ 'MODULES.STATE_UPDATE' | translate }}
                        </button>
                    </div>
                </div>
                <div class="pb-4">
                    <settings-form-field
                        [ngModel]="state"
                        [readonly]="true"
                    ></settings-form-field>
                </div>
            </main>
        } @else {
            <main
                class="flex h-[70vh] w-[80vw] flex-col items-center justify-center"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div>
                    {{ 'MODULES.STATE_LOADING' | translate }}
                </div>
            </main>
        }
    `, imports: [
      MatDialogModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      SettingsFieldComponent,
      FormsModule,
      MatRippleModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewModuleStateModalComponent, { className: "ViewModuleStateModalComponent", filePath: "src/app/overlays/view-module-state.component.ts", lineNumber: 119 });
})();

// src/app/ui/context-menu.component.ts
var _c02 = ["container"];
var _c1 = ["context-menu", ""];
var _c2 = ["*"];
var ContextMenuComponent = class _ContextMenuComponent extends AsyncHandler {
  /** List of context menu items */
  menu = input(void 0, ...ngDevMode ? [{ debugName: "menu", alias: "context-menu" }] : [{
    alias: "context-menu"
  }]);
  /** Offset of the context menu on the x axis */
  offset_x = input(0, ...ngDevMode ? [{ debugName: "offset_x" }] : []);
  /** Offset of the context menu on the y axis */
  offset_y = input(0, ...ngDevMode ? [{ debugName: "offset_y" }] : []);
  /** Top position of the menu */
  top;
  /** Whether menu show to the left of the cursor */
  right;
  /** Whether the context menu should be shown */
  show;
  /** Location of the menu */
  position;
  container = viewChild("container", ...ngDevMode ? [{ debugName: "container" }] : []);
  trigger = viewChild(MatMenuTrigger, ...ngDevMode ? [{ debugName: "trigger" }] : []);
  onEvent(event) {
    event.preventDefault();
    this.position = {
      top: event.clientY + this.offset_y(),
      left: event.clientX + this.offset_x()
    };
    const trigger = this.trigger();
    if (trigger)
      trigger.openMenu();
    this.timeout("update_position", () => this.updatePosition(), 50);
  }
  ngOnInit() {
    this.position = { top: 0, left: 0 };
  }
  ngAfterViewInit() {
    setTimeout(() => this.updatePosition(), 10);
  }
  /** Update the position of the context menu */
  updatePosition() {
    const container = this.container();
    if (!container || !container.nativeElement) {
      return setTimeout(() => this.updatePosition(), 50);
    }
    const box = container.nativeElement.getBoundingClientRect();
    this.right = false;
    this.top = 0;
    if (window.innerHeight < box.bottom) {
      this.top = window.innerHeight - (box.bottom + 5);
    }
    this.right = box.right - 5 > window.innerWidth;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ContextMenuComponent_BaseFactory;
    return function ContextMenuComponent_Factory(__ngFactoryType__) {
      return (\u0275ContextMenuComponent_BaseFactory || (\u0275ContextMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ContextMenuComponent)))(__ngFactoryType__ || _ContextMenuComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextMenuComponent, selectors: [["", "context-menu", ""]], viewQuery: function ContextMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.container, _c02, 5);
      \u0275\u0275viewQuerySignal(ctx.trigger, MatMenuTrigger, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostBindings: function ContextMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("contextmenu", function ContextMenuComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onEvent($event);
      });
    }
  }, inputs: { menu: [1, "context-menu", "menu"], offset_x: [1, "offset_x"], offset_y: [1, "offset_y"] }, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 5, consts: [["container", ""], [1, "pointer-events-none", "fixed", "h-px", "w-px", 2, "opacity", "0", "height", "0", 3, "matMenuTriggerFor"]], template: function ContextMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
      \u0275\u0275element(1, "div", 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("top", ctx.position.top + "px")("left", ctx.position.left + "px");
      \u0275\u0275property("matMenuTriggerFor", ctx.menu());
    }
  }, dependencies: [MatMenuModule, MatMenuTrigger], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=context-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuComponent, [{
    type: Component,
    args: [{ selector: "[context-menu]", template: `
        <ng-content />
        <div
            class="pointer-events-none fixed h-px w-px"
            style="opacity: 0; height: 0"
            #container
            [style.top]="position.top + 'px'"
            [style.left]="position.left + 'px'"
            [matMenuTriggerFor]="menu()"
        ></div>
    `, imports: [MatMenuModule], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/backoffice/backoffice/src/app/ui/context-menu.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=context-menu.component.css.map */\n"] }]
  }], null, { menu: [{ type: Input, args: [{ isSignal: true, alias: "context-menu", required: false }] }], offset_x: [{ type: Input, args: [{ isSignal: true, alias: "offset_x", required: false }] }], offset_y: [{ type: Input, args: [{ isSignal: true, alias: "offset_y", required: false }] }], container: [{ type: ViewChild, args: ["container", { isSignal: true }] }], trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }], onEvent: [{
    type: HostListener,
    args: ["contextmenu", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextMenuComponent, { className: "ContextMenuComponent", filePath: "src/app/ui/context-menu.component.ts", lineNumber: 39 });
})();

// src/app/systems/system-modules.component.ts
var _c03 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem" });
var _c12 = (a0, a1) => ({ key: "name", name: a0, content: a1, size: "15rem" });
var _c22 = (a0, a1) => ({ key: "type", name: a0, content: a1, size: "6.5rem" });
var _c3 = (a0, a1) => ({ key: "class", name: a0, content: a1, size: "15rem" });
var _c4 = (a0, a1) => ({ key: "url", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "debug", name: a0, content: a1, size: "4.5rem" });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c8 = (a0) => ["/modules", a0];
var _c9 = (a0) => ["/admin", "edge", a0];
function SystemModulesComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h3", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "execute-method-field", 20);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.EXECUTE_COMMAND"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("system", \u0275\u0275pipeBind1(5, 4, ctx_r1.item$));
  }
}
function SystemModulesComponent_Conditional_0_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SystemModulesComponent_Conditional_0_Conditional_18_For_1_Template_button_click_0_listener() {
      const m_item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleContextEvent(m_item_r4, ctx_r1.active_item()));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275element(2, "icon", 24);
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", m_item_r4.enable_on && !ctx_r1.active_item()[m_item_r4.enable_on]);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", m_item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, m_item_r4.name), " ");
  }
}
function SystemModulesComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SystemModulesComponent_Conditional_0_Conditional_18_For_1_Template, 6, 5, "button", 21, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.active_item().running ? ctx_r1.menu_options : ctx_r1.offline_options);
  }
}
function SystemModulesComponent_Conditional_0_ng_template_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 27);
  }
}
function SystemModulesComponent_Conditional_0_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275twoWayListener("modelChange", function SystemModulesComponent_Conditional_0_ng_template_30_Template_button_modelChange_0_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      \u0275\u0275twoWayBindingSet(row_r6.connected, $event) || (row_r6.connected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function SystemModulesComponent_Conditional_0_ng_template_30_Template_button_click_0_listener() {
      const index_r7 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActive(index_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SystemModulesComponent_Conditional_0_ng_template_30_Conditional_2_Template, 1, 0, "mat-spinner", 27);
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const index_r7 = ctx.index;
    \u0275\u0275nextContext();
    const context_menu_r8 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-content", !row_r6.running)("bg-error", row_r6.running && row_r6.connected === false)("bg-success", row_r6.running && !!row_r6.connected)("bg-pending", row_r6.running && row_r6.connected === void 0);
    \u0275\u0275property("sys", ctx_r1.item.id)("mod", \u0275\u0275pipeBind1(1, 13, ctx_r1.bindings)[index_r7]);
    \u0275\u0275twoWayProperty("model", row_r6.connected);
    \u0275\u0275property("matMenuTriggerFor", context_menu_r8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r6.running && row_r6.connected === void 0 ? 2 : -1);
  }
}
function SystemModulesComponent_Conditional_0_ng_template_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275text(1, " E ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275property("matTooltip", row_r9.edge_id)("routerLink", \u0275\u0275pureFunction1(2, _c9, row_r9.edge_id));
  }
}
function SystemModulesComponent_Conditional_0_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "a", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, SystemModulesComponent_Conditional_0_ng_template_32_Conditional_6_Template, 2, 4, "a", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c8, row_r9.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r9.driver == null ? null : row_r9.driver.name) || row_r9.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9.notes || row_r9.id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.edge_id ? 6 : -1);
  }
}
function SystemModulesComponent_Conditional_0_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.driver_type(row_r10.role || (row_r10.driver == null ? null : row_r10.driver.role)), " ");
  }
}
function SystemModulesComponent_Conditional_0_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const index_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.bindings)[index_r11], " ");
  }
}
function SystemModulesComponent_Conditional_0_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "icon", 36);
    \u0275\u0275text(2, " lock ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", !row_r12.tls);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", row_r12.ip ? (row_r12.tls ? "https://" : "http://") + row_r12.ip : row_r12.uri, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r12.ip || row_r12.uri, " ");
  }
}
function SystemModulesComponent_Conditional_0_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "mat-checkbox", 39);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("change", function SystemModulesComponent_Conditional_0_ng_template_40_Template_mat_checkbox_change_1_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDebug(row_r14));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !row_r14.running);
    \u0275\u0275property("disabled", !row_r14.running)("checked", \u0275\u0275pipeBind1(2, 5, ctx_r1.debugging)[row_r14.id])("matTooltip", \u0275\u0275pipeBind1(4, 9, \u0275\u0275pipeBind1(3, 7, ctx_r1.debugging)[row_r14.id] ? "SYSTEMS.DEBUG_DISABLE" : "SYSTEMS.DEBUG_ENABLE"));
  }
}
function SystemModulesComponent_Conditional_0_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 41);
    \u0275\u0275listener("click", function SystemModulesComponent_Conditional_0_ng_template_42_Template_button_click_1_listener() {
      const row_r16 = \u0275\u0275restoreView(_r15).row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editModule(row_r16));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function SystemModulesComponent_Conditional_0_ng_template_42_Template_button_click_4_listener() {
      const i_r17 = \u0275\u0275restoreView(_r15).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setActive(i_r17));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "more_vert");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const context_menu_r8 = \u0275\u0275reference(17);
    \u0275\u0275advance(4);
    \u0275\u0275property("matMenuTriggerFor", context_menu_r8);
  }
}
function SystemModulesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, SystemModulesComponent_Conditional_0_Conditional_0_Template, 6, 6, "section", 8);
    \u0275\u0275elementStart(1, "h3", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 10)(5, "item-search-field", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function SystemModulesComponent_Conditional_0_Template_item_search_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.new_module.set($event.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function SystemModulesComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addModule());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 13);
    \u0275\u0275listener("click", function SystemModulesComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newModule());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 14);
    \u0275\u0275element(14, "mat-progress-bar", 15);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementStart(16, "mat-menu", null, 0);
    \u0275\u0275conditionalCreate(18, SystemModulesComponent_Conditional_0_Conditional_18_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 16)(20, "simple-table", 17);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275pipe(27, "async");
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("enter_row", function SystemModulesComponent_Conditional_0_Template_simple_table_enter_row_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActive($event));
    })("ondrop", function SystemModulesComponent_Conditional_0_Template_simple_table_ondrop_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, SystemModulesComponent_Conditional_0_ng_template_30_Template, 3, 15, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(32, SystemModulesComponent_Conditional_0_ng_template_32_Template, 7, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(34, SystemModulesComponent_Conditional_0_ng_template_34_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(36, SystemModulesComponent_Conditional_0_ng_template_36_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(38, SystemModulesComponent_Conditional_0_ng_template_38_Template, 5, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(40, SystemModulesComponent_Conditional_0_ng_template_40_Template, 5, 11, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(42, SystemModulesComponent_Conditional_0_ng_template_42_Template, 7, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const context_menu_r8 = \u0275\u0275reference(17);
    const state_template_r18 = \u0275\u0275reference(31);
    const name_template_r19 = \u0275\u0275reference(33);
    const type_template_r20 = \u0275\u0275reference(35);
    const class_template_r21 = \u0275\u0275reference(37);
    const url_template_r22 = \u0275\u0275reference(39);
    const debug_template_r23 = \u0275\u0275reference(41);
    const actions_template_r24 = \u0275\u0275reference(43);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.item.id && ctx_r1.item.modules && !ctx_r1.hide_exec ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 18, "SYSTEMS.MODULE_LIST"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 20, "SYSTEMS.FIND_MODULE"))("query_fn", ctx_r1.query_fn)("exclude", ctx_r1.exclude_fn)("ngModel", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.new_module());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 22, "COMMON.ADD_EXISTING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 24, "COMMON.ADD_NEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(15, 26, ctx_r1.loading).modules);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.active_item() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("context-menu", context_menu_r8);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.modules)("columns", \u0275\u0275pureFunction7(64, _c7, \u0275\u0275pureFunction2(44, _c03, \u0275\u0275pipeBind1(21, 28, "SYSTEMS.MODULE_FIELD_STATE"), state_template_r18), \u0275\u0275pureFunction2(47, _c12, \u0275\u0275pipeBind1(22, 30, "SYSTEMS.MODULE_FIELD_NAME"), name_template_r19), \u0275\u0275pureFunction2(50, _c22, \u0275\u0275pipeBind1(23, 32, "SYSTEMS.MODULE_FIELD_TYPE"), type_template_r20), \u0275\u0275pureFunction2(53, _c3, \u0275\u0275pipeBind1(24, 34, "SYSTEMS.MODULE_FIELD_CLASS"), class_template_r21), \u0275\u0275pureFunction2(56, _c4, \u0275\u0275pipeBind1(25, 36, "SYSTEMS.MODULE_FIELD_ADDRESS"), url_template_r22), \u0275\u0275pureFunction2(59, _c5, \u0275\u0275pipeBind1(26, 38, "SYSTEMS.MODULE_FIELD_DEBUG"), debug_template_r23), \u0275\u0275pureFunction1(62, _c6, actions_template_r24)))("can_reorder", true)("color", \u0275\u0275pipeBind1(27, 40, ctx_r1.colors))("empty_message", \u0275\u0275pipeBind1(28, 42, "SYSTEMS.MODULE_LIST_EMPTY"));
  }
}
var SystemModulesComponent = class _SystemModulesComponent extends AsyncHandler {
  _service = inject(SystemStateService);
  _dialog = inject(MatDialog);
  /** Whether a device should be listened to */
  device_listener = {};
  /** Store for ID of new module to add to system */
  new_module = signal("", ...ngDevMode ? [{ debugName: "new_module" }] : []);
  /** Whether to show exec block */
  hide_exec;
  active_item = signal(null, ...ngDevMode ? [{ debugName: "active_item" }] : []);
  item$ = this._service.item.pipe(map((_) => _));
  loading = this._service.loading;
  modules = this._service.modules;
  debugging = this._service.debug_state;
  bindings = this._service.module_bindings;
  colors = this.modules.pipe(map((list) => {
    const colors = {};
    for (const i in list) {
      if (list[i].has_runtime_error) {
        colors[i] = "var(--erl)";
      }
    }
    return colors;
  }));
  /** Actions available for the context menu */
  menu_options = [
    {
      id: "power",
      name: "MODULES.TOGGLE_POWER",
      icon: { type: "icon", content: "power" }
    },
    {
      id: "state",
      name: "MODULES.VIEW_STATE",
      icon: { type: "icon", content: "visibility" }
    },
    {
      id: "edit",
      name: "MODULES.EDIT",
      icon: { type: "icon", content: "edit" }
    },
    {
      id: "load",
      name: "MODULES.LOAD",
      icon: { type: "icon", content: "cloud_download" }
    },
    {
      id: "view-error",
      name: "MODULES.VIEW_ERRORS",
      enable_on: "has_runtime_error",
      icon: { type: "icon", content: "error" }
    },
    {
      id: "add-to-system",
      name: "MODULES.ADD_TO_SYSTEM",
      icon: { type: "icon", content: "playlist_add" }
    },
    {
      id: "remove",
      name: "MODULES.REMOVE",
      icon: {
        type: "icon",
        class: "material-symbols-rounded text-error",
        content: "delete"
      }
    }
  ];
  offline_options = [
    {
      id: "power",
      name: "MODULES.TOGGLE_POWER",
      icon: { type: "icon", content: "power" }
    },
    {
      id: "edit",
      name: "MODULES.EDIT",
      icon: { type: "icon", content: "edit" }
    },
    {
      id: "load",
      name: "MODULES.LOAD",
      icon: { type: "icon", content: "cloud_download" }
    },
    {
      id: "add-to-system",
      name: "MODULES.ADD_TO_SYSTEM",
      icon: { type: "icon", content: "playlist_add" }
    },
    {
      id: "remove",
      name: "MODULES.REMOVE",
      icon: {
        type: "icon",
        class: "material-symbols-rounded text-error",
        content: "delete"
      }
    }
  ];
  /** Query method for modules */
  query_fn = (_) => Uu({ q: _, no_logic: true }).pipe(map((_2) => _2.data.map((mod) => __spreadProps(__spreadValues({}, mod), {
    extra: mod.driver?.name
  }))));
  /** Function for excluding modules already within this system */
  exclude_fn = (item, _) => item.control_system_id === this.item.id || item.role === $t.Logic;
  newModule = () => this._service.newModule();
  removeModule = (d2) => this._service.removeModule(d2);
  editModule = (d2) => this._service.editModule(d2);
  joinModule = (id) => this._service.joinModule(id);
  toggleDebug = (d2) => this._service.toggleModuleDebug(d2);
  power = (d2) => this._service.toggleModulePower(d2);
  addToSystem = (d2) => this._service.addModuleToSystem(d2);
  driver_type(role) {
    if (!role && role != 0)
      return "";
    switch (role) {
      case $t.Device:
        return i18n("DRIVERS.DEVICE");
      case $t.SSH:
        return i18n("DRIVERS.SSH");
      case $t.Service:
        return i18n("DRIVERS.SERVICE");
      case $t.Websocket:
        return i18n("DRIVERS.WEBSOCKET");
      case $t.Logic:
        return i18n("DRIVERS.LOGIC");
    }
    return `${i18n("DRIVERS.UNKNOWN")} (${role})`;
  }
  get item() {
    return this._service.active_item;
  }
  /**
   * Handle context menu event
   * @param event Event posted by the context menu
   * @param device Module associated with the context menu event
   */
  handleContextEvent(event, device) {
    if (event) {
      switch (event.id) {
        case "power":
          this.power(device);
          break;
        case "state":
          this.viewState(device);
          break;
        case "remove":
          this.removeModule(device);
          break;
        case "load":
          this.loadModule(device);
          break;
        case "edit":
          this.editModule(device);
          break;
        case "add-to-system":
          this.addToSystem(device);
          break;
        case "view-error":
          this.viewRuntimeError(device);
          break;
      }
    }
  }
  /**
   * Update the state of the module
   * @param device Module to reload
   */
  async reload(device) {
    const item = await qu(device.id).toPromise();
    for (const k in item) {
      if (k in item)
        device[k] = item[k];
    }
  }
  async viewState(device) {
    const modules = this._service.getModules();
    this._dialog.open(ViewModuleStateModalComponent, { data: { system: this.item, module: device, devices: modules } });
  }
  async setActive(idx) {
    const modules = await nextValueFrom(this.modules);
    if (modules.length <= idx)
      this.active_item.set(null);
    else
      this.active_item.set(modules[idx]);
  }
  loadModule(device) {
    Wu(device.id).toPromise().then(() => notifySuccess(`Successfully loaded module "${device.name || device.id}"`), (err) => notifyError(`Error loading module. Error: ${JSON.stringify(err.response || err.message || err)}`));
  }
  /**
   * Handle drop event for reordering the devices
   * @param event Drag drop details
   */
  drop([previous, current]) {
    if (previous === current)
      return;
    this._service.reorderModules(previous, current);
  }
  addModule() {
    if (!this.new_module)
      return;
    this.joinModule(this.new_module());
    this.new_module.set("");
  }
  viewRuntimeError(device) {
    this._dialog.open(ModuleRuntimeErrorsModalComponent, { data: device.id });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemModulesComponent_BaseFactory;
    return function SystemModulesComponent_Factory(__ngFactoryType__) {
      return (\u0275SystemModulesComponent_BaseFactory || (\u0275SystemModulesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SystemModulesComponent)))(__ngFactoryType__ || _SystemModulesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemModulesComponent, selectors: [["system-modules"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["context_menu", "matMenu"], ["state_template", ""], ["name_template", ""], ["type_template", ""], ["class_template", ""], ["url_template", ""], ["debug_template", ""], ["actions_template", ""], ["exec", "", 1, "p-4"], [1, "mx-auto", "mb-2", "w-[calc(100%-2rem)]", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], ["add-module", "", 1, "flex", "w-full", "flex-wrap", "space-x-2", "px-4"], ["name", "module", 1, "flex-grow-1", "h-12", "w-full", "sm:w-auto", "sm:flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "ngModel"], ["btn", "", "matRipple", "", 1, "h-11", "w-40", "flex-1", "sm:w-32", "sm:flex-none", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "h-11", "w-40", "flex-1", "sm:w-32", "sm:flex-none", 3, "click"], ["device-list", "", 1, "overflow-y-auto", "p-4"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], [1, "flex", 3, "context-menu"], [1, "block", "min-w-[78rem]", "text-sm", 3, "enter_row", "ondrop", "data", "columns", "can_reorder", "color", "empty_message"], [1, "h-32", "w-4", "min-w-4"], [1, "mb-2", "w-full", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], [3, "system"], ["mat-menu-item", "", 3, "disabled"], ["mat-menu-item", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl", 3, "icon"], [1, "text"], ["dot", "", "binding", "", "bind", "connected", 1, "mx-auto", "h-4", "w-4", "rounded-full", 3, "modelChange", "click", "sys", "mod", "model", "matMenuTriggerFor"], ["diameter", "32", 1, "pointer-events-none", "absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2"], [1, "flex", "w-full", "max-w-full", "items-center", "justify-between", "space-x-2", "px-4", "py-2"], [1, "flex", "max-w-full", "flex-1", "flex-col", "items-start", "overflow-hidden", "leading-snug"], [1, "max-w-full", "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], ["icon", "", "matRipple", "", 1, "h-6", "w-6", "min-w-6", "max-w-6", "rounded-full", "border", "border-base-200", "bg-info", "text-xs", "text-info-content", 3, "matTooltip", "routerLink"], [1, "p-4"], [1, "p-4", "font-mono", "text-xs"], [1, "flex", "max-w-[22rem]", "items-center", "p-4"], [1, "text-xl"], ["target", "_blank", 1, "max-w-[20rem]", "truncate", "underline", 3, "href"], [1, "mx-auto"], ["matTooltipPosition", "left", 3, "change", "disabled", "checked", "matTooltip"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 3, "click", "matMenuTriggerFor"]], template: function SystemModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SystemModulesComponent_Conditional_0_Template, 44, 72);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.item ? 0 : -1);
    }
  }, dependencies: [
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatCheckboxModule,
    MatCheckbox,
    MatTooltipModule,
    MatTooltip,
    CommonModule,
    SimpleTableComponent,
    ExecuteMethodFieldComponent,
    BindingDirective,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    ContextMenuComponent,
    RouterModule,
    RouterLink,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\nbutton[btn][_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.bg-success[_ngcontent-%COMP%] {\n  height: 0.5rem !important;\n  width: 0.5rem !important;\n}\n[dot][_ngcontent-%COMP%] {\n  transition: height 200ms, width 200ms;\n}\nmat-checkbox.mat-checkbox-disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=system-modules.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemModulesComponent, [{
    type: Component,
    args: [{ selector: "system-modules", template: `
        @if (item) {
            @if (item.id && item.modules && !hide_exec) {
                <section exec class="p-4">
                    <h3
                        class="mb-2 w-full rounded bg-base-200 p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.EXECUTE_COMMAND' | translate }}
                    </h3>
                    <execute-method-field
                        [system]="item$ | async"
                    ></execute-method-field>
                </section>
            }
            <h3
                class="mx-auto mb-2 w-[calc(100%-2rem)] rounded bg-base-200 p-4 text-lg font-medium"
            >
                {{ 'SYSTEMS.MODULE_LIST' | translate }}
            </h3>
            <section add-module class="flex w-full flex-wrap space-x-2 px-4">
                <item-search-field
                    class="flex-grow-1 h-12 w-full sm:w-auto sm:flex-1"
                    name="module"
                    [placeholder]="'SYSTEMS.FIND_MODULE' | translate"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [ngModel]="null"
                    (ngModelChange)="new_module.set($event.id)"
                ></item-search-field>
                <button
                    btn
                    matRipple
                    class="h-11 w-40 flex-1 sm:w-32 sm:flex-none"
                    [disabled]="!new_module()"
                    (click)="addModule()"
                >
                    {{ 'COMMON.ADD_EXISTING' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="h-11 w-40 flex-1 sm:w-32 sm:flex-none"
                    (click)="newModule()"
                >
                    {{ 'COMMON.ADD_NEW' | translate }}
                </button>
            </section>
            <section device-list class="overflow-y-auto p-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!(loading | async).modules"
                ></mat-progress-bar>
                <mat-menu #context_menu="matMenu">
                    @if (active_item()) {
                        @for (
                            m_item of active_item().running
                                ? menu_options
                                : offline_options;
                            track m_item
                        ) {
                            <button
                                mat-menu-item
                                [disabled]="
                                    m_item.enable_on &&
                                    !active_item()[m_item.enable_on]
                                "
                                (click)="
                                    handleContextEvent(m_item, active_item())
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon
                                        class="text-xl"
                                        [icon]="m_item.icon"
                                    ></icon>
                                    <div class="text">
                                        {{ m_item.name | translate }}
                                    </div>
                                </div>
                            </button>
                        }
                    }
                </mat-menu>
                <div [context-menu]="context_menu" class="flex">
                    <simple-table
                        class="block min-w-[78rem] text-sm"
                        [data]="modules"
                        (enter_row)="setActive($event)"
                        [columns]="[
                            {
                                key: 'state',
                                name: 'SYSTEMS.MODULE_FIELD_STATE' | translate,
                                content: state_template,
                                size: '4rem',
                            },
                            {
                                key: 'name',
                                name: 'SYSTEMS.MODULE_FIELD_NAME' | translate,
                                content: name_template,
                                size: '15rem',
                            },
                            {
                                key: 'type',
                                name: 'SYSTEMS.MODULE_FIELD_TYPE' | translate,
                                content: type_template,
                                size: '6.5rem',
                            },
                            {
                                key: 'class',
                                name: 'SYSTEMS.MODULE_FIELD_CLASS' | translate,
                                content: class_template,
                                size: '15rem',
                            },
                            {
                                key: 'url',
                                name:
                                    'SYSTEMS.MODULE_FIELD_ADDRESS' | translate,
                                content: url_template,
                            },
                            {
                                key: 'debug',
                                name: 'SYSTEMS.MODULE_FIELD_DEBUG' | translate,
                                content: debug_template,
                                size: '4.5rem',
                            },
                            {
                                key: 'actions',
                                name: ' ',
                                size: '6.5rem',
                                content: actions_template,
                            },
                        ]"
                        [can_reorder]="true"
                        [color]="colors | async"
                        (ondrop)="drop($event)"
                        [empty_message]="
                            'SYSTEMS.MODULE_LIST_EMPTY' | translate
                        "
                    />
                    <div class="h-32 w-4 min-w-4"></div>
                </div>
                <ng-template #state_template let-row="row" let-index="index">
                    <button
                        dot
                        binding
                        [sys]="item.id"
                        [mod]="(bindings | async)[index]"
                        bind="connected"
                        [(model)]="row.connected"
                        class="mx-auto h-4 w-4 rounded-full"
                        [class.bg-base-content]="!row.running"
                        [class.bg-error]="
                            row.running && row.connected === false
                        "
                        [class.bg-success]="row.running && !!row.connected"
                        [class.bg-pending]="
                            row.running && row.connected === undefined
                        "
                        (click)="setActive(index)"
                        [matMenuTriggerFor]="context_menu"
                    ></button>
                    @if (row.running && row.connected === undefined) {
                        <mat-spinner
                            class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            diameter="32"
                        />
                    }
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex w-full max-w-full items-center justify-between space-x-2 px-4 py-2"
                    >
                        <div
                            class="flex max-w-full flex-1 flex-col items-start overflow-hidden leading-snug"
                        >
                            <a
                                class="max-w-full truncate underline"
                                [routerLink]="['/modules', row.id]"
                            >
                                {{ row.driver?.name || row.name }}
                            </a>
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ row.notes || row.id }}
                            </div>
                        </div>
                        @if (row.edge_id) {
                            <a
                                icon
                                matRipple
                                class="h-6 w-6 min-w-6 max-w-6 rounded-full border border-base-200 bg-info text-xs text-info-content"
                                [matTooltip]="row.edge_id"
                                [routerLink]="['/admin', 'edge', row.edge_id]"
                            >
                                E
                            </a>
                        }
                    </div>
                </ng-template>
                <ng-template #type_template let-row="row">
                    <div class="p-4">
                        {{ driver_type(row.role || row.driver?.role) }}
                    </div>
                </ng-template>
                <ng-template #class_template let-row="row" let-index="index">
                    <div class="p-4 font-mono text-xs">
                        {{ (bindings | async)[index] }}
                    </div>
                </ng-template>
                <ng-template #url_template let-row="row">
                    <div class="flex max-w-[22rem] items-center p-4">
                        <icon [class.opacity-0]="!row.tls" class="text-xl">
                            lock
                        </icon>
                        <a
                            [href]="
                                row.ip
                                    ? (row.tls ? 'https://' : 'http://') +
                                      row.ip
                                    : row.uri
                            "
                            target="_blank"
                            class="max-w-[20rem] truncate underline"
                        >
                            {{ row.ip || row.uri }}
                        </a>
                    </div>
                </ng-template>
                <ng-template #debug_template let-row="row">
                    <div class="mx-auto">
                        <mat-checkbox
                            [disabled]="!row.running"
                            [checked]="(debugging | async)[row.id]"
                            [matTooltip]="
                                ((debugging | async)[row.id]
                                    ? 'SYSTEMS.DEBUG_DISABLE'
                                    : 'SYSTEMS.DEBUG_ENABLE'
                                ) | translate
                            "
                            matTooltipPosition="left"
                            (change)="toggleDebug(row)"
                            [class.opacity-30]="!row.running"
                        >
                        </mat-checkbox>
                    </div>
                </ng-template>
                <ng-template #actions_template let-i="index" let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button icon matRipple (click)="editModule(row)">
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="setActive(i)"
                            [matMenuTriggerFor]="context_menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        }
    `, imports: [
      MatMenuModule,
      IconComponent,
      MatRippleModule,
      TranslatePipe,
      MatCheckboxModule,
      MatTooltipModule,
      CommonModule,
      SimpleTableComponent,
      ExecuteMethodFieldComponent,
      BindingDirective,
      MatProgressSpinnerModule,
      ContextMenuComponent,
      RouterModule,
      ItemSearchFieldComponent,
      FormsModule,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;e23b6a646f892176ac3184c929da8a44abc4c9839c2f8ee0b53cdae5e6853d78;/home/runner/work/backoffice/backoffice/src/app/systems/system-modules.component.ts */\nbutton[btn] {\n  min-width: 8rem;\n}\nbutton.mat-menu-item {\n  display: flex;\n  align-items: center;\n}\nbutton .text {\n  margin-left: 1rem;\n}\n.bg-success {\n  height: 0.5rem !important;\n  width: 0.5rem !important;\n}\n[dot] {\n  transition: height 200ms, width 200ms;\n}\nmat-checkbox.mat-checkbox-disabled {\n  pointer-events: none;\n}\n/*# sourceMappingURL=system-modules.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemModulesComponent, { className: "SystemModulesComponent", filePath: "src/app/systems/system-modules.component.ts", lineNumber: 356 });
})();

// src/app/systems/system-triggers.component.ts
var _c04 = (a0) => ({ key: "status", name: " ", size: "3rem", content: a0 });
var _c13 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c23 = (a0, a1) => ({ key: "count", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "errors", name: a0, content: a1 });
var _c42 = (a0, a1) => ({ key: "added", name: a0, content: a1 });
var _c52 = (a0) => ({ key: "actions", name: " ", content: a0, size: "8.75rem", sortable: false });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c72 = (a0) => ["/triggers", a0];
function SystemTriggersComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 16);
    \u0275\u0275twoWayListener("modelChange", function SystemTriggersComponent_ng_template_20_Template_i_modelChange_0_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.trigger_state[row_r3.id], $event) || (ctx_r3.trigger_state[row_r3.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("modelChange", function SystemTriggersComponent_ng_template_20_Template_i_modelChange_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateComparisons(row_r3.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(1, "div", 17);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("sys", ctx_r3.item.id)("bind", row_r3.id);
    \u0275\u0275twoWayProperty("model", ctx_r3.trigger_state[row_r3.id]);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-content", !(ctx_r3.trigger_state[row_r3.id] == null ? null : ctx_r3.trigger_state[row_r3.id].triggered))("bg-success", ctx_r3.trigger_state[row_r3.id] == null ? null : ctx_r3.trigger_state[row_r3.id].triggered);
  }
}
function SystemTriggersComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "a", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c72, row_r5.trigger_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.trigger_id, " ");
  }
}
function SystemTriggersComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.trigger_state[row_r6.id] == null ? null : ctx_r3.trigger_state[row_r6.id].trigger_count, " ");
  }
}
function SystemTriggersComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r3.trigger_state[row_r7.id] == null ? null : ctx_r3.trigger_state[row_r7.id].action_errors) + (ctx_r3.trigger_state[row_r7.id] == null ? null : ctx_r3.trigger_state[row_r7.id].comparison_errors) || "0", " ");
  }
}
function SystemTriggersComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +row_r8.created_at * 1e3), " ");
  }
}
function SystemTriggersComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SystemTriggersComponent_ng_template_30_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyWebhookURL(row_r10));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function SystemTriggersComponent_ng_template_30_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editTrigger(row_r10));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function SystemTriggersComponent_ng_template_30_Template_button_click_9_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTrigger(row_r10));
    });
    \u0275\u0275elementStart(11, "icon", 23);
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.COPY_WEBHOOK"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "SYSTEMS.TRIGGER_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "SYSTEMS.TRIGGER_REMOVE"));
  }
}
var SystemTriggersComponent = class _SystemTriggersComponent {
  _service = inject(SystemStateService);
  filter$ = new BehaviorSubject("");
  loading = this._service.loading;
  trigger_state = {};
  comparisons = {};
  temp_trigger = new BehaviorSubject(null);
  triggers = combineLatest([
    this.filter$,
    this._service.triggers,
    this.temp_trigger
  ]).pipe(map(([filter, triggers, temp]) => {
    const search = filter.toLowerCase();
    const list = unique(temp ? [...triggers, temp] : triggers, "id");
    return filter ? list.filter((t) => t.name.toLowerCase().includes(search)) : list;
  }));
  copyWebhookURL = (t) => {
    copyToClipboard(`${location.origin}/api/engine/v2/webhook/${t.id}/notify?secret=${t.webhook_secret}`);
    notifyInfo(i18n("SYSTEMS.COPIED_WEBHOOK"));
  };
  editTrigger = async (t) => this.temp_trigger.next(await this._service.editTrigger(t));
  deleteTrigger = (t) => this._service.removeTrigger(t);
  selectTrigger = async () => this.temp_trigger.next(await this._service.selectTrigger() || null);
  get item() {
    return this._service.active_item;
  }
  updateComparisons(id) {
    this.comparisons[id] = "";
    if (this.trigger_state[id]) {
      for (const key in this.trigger_state[id].conditions) {
        if (this.trigger_state[id].conditions.hasOwnProperty(key)) {
          if (this.comparisons[id]) {
            this.comparisons[id] += "\n";
          }
          this.comparisons[id] += `${key}: ${this.trigger_state[id].conditions[key]}`;
        }
      }
    }
  }
  static \u0275fac = function SystemTriggersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemTriggersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemTriggersComponent, selectors: [["system-triggers"]], decls: 32, vars: 47, consts: [["status_template", ""], ["name_template", ""], ["count_template", ""], ["errors_template", ""], ["added_template", ""], ["actions_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "max-w-full", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[42rem]", "text-sm", 3, "data", "columns", "empty_message"], ["hidden", "", "binding", "", "mod", "_TRIGGER__1", 3, "modelChange", "sys", "bind", "model"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function SystemTriggersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "section", 7)(2, "mat-form-field", 8)(3, "div", 9)(4, "icon", 10);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 11);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function SystemTriggersComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter$.next($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 12);
      \u0275\u0275listener("click", function SystemTriggersComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectTrigger());
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 13);
      \u0275\u0275element(12, "mat-progress-bar", 14);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275element(14, "simple-table", 15);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275template(20, SystemTriggersComponent_ng_template_20_Template, 2, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(22, SystemTriggersComponent_ng_template_22_Template, 5, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(24, SystemTriggersComponent_ng_template_24_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(26, SystemTriggersComponent_ng_template_26_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, SystemTriggersComponent_ng_template_28_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, SystemTriggersComponent_ng_template_30_Template, 13, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const status_template_r11 = \u0275\u0275reference(21);
      const name_template_r12 = \u0275\u0275reference(23);
      const count_template_r13 = \u0275\u0275reference(25);
      const errors_template_r14 = \u0275\u0275reference(27);
      const added_template_r15 = \u0275\u0275reference(29);
      const actions_template_r16 = \u0275\u0275reference(31);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.TRIGGER_SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "SYSTEMS.TRIGGER_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(13, 12, ctx.loading).triggers);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.triggers)("columns", \u0275\u0275pureFunction6(40, _c62, \u0275\u0275pureFunction1(24, _c04, status_template_r11), \u0275\u0275pureFunction2(26, _c13, \u0275\u0275pipeBind1(15, 14, "SYSTEMS.TRIGGER_FIELD_NAME"), name_template_r12), \u0275\u0275pureFunction2(29, _c23, \u0275\u0275pipeBind1(16, 16, "SYSTEMS.TRIGGER_FIELD_COUNT"), count_template_r13), \u0275\u0275pureFunction2(32, _c32, \u0275\u0275pipeBind1(17, 18, "SYSTEMS.TRIGGER_FIELD_ERRORS"), errors_template_r14), \u0275\u0275pureFunction2(35, _c42, \u0275\u0275pipeBind1(18, 20, "SYSTEMS.TRIGGER_FIELD_ADDED"), added_template_r15), \u0275\u0275pureFunction1(38, _c52, actions_template_r16)))("empty_message", \u0275\u0275pipeBind1(19, 22, "SYSTEMS.TRIGGERS_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    CommonModule,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    RouterModule,
    RouterLink,
    BindingDirective,
    TranslatePipe,
    DateFromPipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[flex][_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 36rem;\n}\n/*# sourceMappingURL=system-triggers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemTriggersComponent, [{
    type: Component,
    args: [{ selector: "system-triggers", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center space-x-2">
                <mat-form-field appearance="outline" class="h-12 flex-1">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [ngModel]="''"
                        (ngModelChange)="filter$.next($event)"
                        matInput
                        [placeholder]="'SYSTEMS.TRIGGER_SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
                <button btn matRipple class="w-32" (click)="selectTrigger()">
                    {{ 'SYSTEMS.TRIGGER_ADD' | translate }}
                </button>
            </section>
            <section class="max-w-full overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async).triggers"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[42rem] text-sm"
                    [data]="triggers"
                    [columns]="[
                        {
                            key: 'status',
                            name: ' ',
                            size: '3rem',
                            content: status_template,
                        },
                        {
                            key: 'name',
                            name: 'SYSTEMS.TRIGGER_FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'count',
                            name: 'SYSTEMS.TRIGGER_FIELD_COUNT' | translate,
                            content: count_template,
                        },
                        {
                            key: 'errors',
                            name: 'SYSTEMS.TRIGGER_FIELD_ERRORS' | translate,
                            content: errors_template,
                        },
                        {
                            key: 'added',
                            name: 'SYSTEMS.TRIGGER_FIELD_ADDED' | translate,
                            content: added_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '8.75rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'SYSTEMS.TRIGGERS_EMPTY' | translate"
                ></simple-table>
                <ng-template #status_template let-row="row">
                    <i
                        hidden
                        binding
                        [sys]="item.id"
                        mod="_TRIGGER__1"
                        [bind]="row.id"
                        [(model)]="trigger_state[row.id]"
                        (modelChange)="updateComparisons(row.id)"
                    ></i>
                    <div
                        class="mx-auto h-2 w-2 rounded-full"
                        [class.bg-base-content]="
                            !trigger_state[row.id]?.triggered
                        "
                        [class.bg-success]="trigger_state[row.id]?.triggered"
                    ></div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/triggers', row.trigger_id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.trigger_id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #count_template let-row="row">
                    <div class="p-4">
                        {{ trigger_state[row.id]?.trigger_count }}
                    </div>
                </ng-template>
                <ng-template #errors_template let-row="row">
                    <div class="p-4">
                        {{
                            trigger_state[row.id]?.action_errors +
                                trigger_state[row.id]?.comparison_errors || '0'
                        }}
                    </div>
                </ng-template>
                <ng-template #added_template let-row="row">
                    <div class="p-4">
                        {{ +row.created_at * 1000 | dateFrom }}
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            [matTooltip]="'SYSTEMS.COPY_WEBHOOK' | translate"
                            (click)="copyWebhookURL(row)"
                        >
                            <icon>link</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'SYSTEMS.TRIGGER_EDIT' | translate"
                            (click)="editTrigger(row)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'SYSTEMS.TRIGGER_REMOVE' | translate"
                            (click)="deleteTrigger(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      DateFromPipe,
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      SimpleTableComponent,
      MatProgressBarModule,
      RouterModule,
      BindingDirective
    ], styles: ["/* angular:styles/component:css;70377810c25da5afc0c8c972ea69fdf28978f5b7dc52e047fb5c74248e79949c;/home/runner/work/backoffice/backoffice/src/app/systems/system-triggers.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[flex] {\n  min-width: 8rem;\n}\n[role=table] > div {\n  width: 100%;\n  min-width: 36rem;\n}\n/*# sourceMappingURL=system-triggers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemTriggersComponent, { className: "SystemTriggersComponent", filePath: "src/app/systems/system-triggers.component.ts", lineNumber: 217 });
})();

// src/app/systems/system-zones.component.ts
var _c05 = (a0, a1) => ({ key: "name", name: a0, content: a1, size: "14rem" });
var _c14 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c24 = (a0, a1) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, show: a1 });
var _c33 = (a0, a1, a2) => [a0, a1, a2];
var _c43 = () => ({});
var _c53 = (a0) => ["/zones", a0];
function SystemZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.zone_issues), " ");
  }
}
function SystemZonesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "a", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c53, row_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.id, " ");
  }
}
function SystemZonesComponent_ng_template_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.ZONE_DESCRIPTION_EMPTY"), " ");
  }
}
function SystemZonesComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SystemZonesComponent_ng_template_27_Conditional_2_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r4 ? 2 : -1);
  }
}
function SystemZonesComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SystemZonesComponent_ng_template_29_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeZone(row_r6));
    });
    \u0275\u0275elementStart(3, "icon", 21);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.ZONE_REMOVE"));
  }
}
var SystemZonesComponent = class _SystemZonesComponent {
  _service = inject(SystemStateService);
  order_changed = false;
  show_original = false;
  original_zones = this._service.zones;
  changed = {};
  /** ID of a zone that the user wishes to add to the system */
  pending_zones = new BehaviorSubject([]);
  /** ID of a zone that the user wishes to add to the system */
  zone_order = new BehaviorSubject([]);
  /** Whether zones for active item are loading */
  loading = this._service.loading;
  /** List of zones assoicated with the active item */
  zones = combineLatest([
    this._service.zones,
    this.pending_zones,
    this.zone_order
  ]).pipe(map(([zones, pending, order]) => [...zones, ...pending.map((_) => __spreadProps(__spreadValues({}, _), { pending: true }))].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))));
  changed_colours = combineLatest([
    this.zones,
    this.pending_zones
  ]).pipe(map(([zones, pending]) => {
    const has_changed = zones.map((i) => this.changed[i.id] || pending.find((_) => _.id === i.id));
    const colours = {};
    has_changed.forEach((i, index) => i ? colours[index] = "var(--wal)" : "");
    console.log("Changed:", colours, this.changed);
    return colours;
  }));
  zone_issues = combineLatest([
    this._service.item,
    this._service.zones
  ]).pipe(map(([item, zones]) => {
    if (!item?.email && !item?.map_id)
      return "";
    const has_org = zones.find((_) => _.tags.includes("org"));
    const has_building = zones.find((_) => _.tags.includes("building"));
    const has_level = zones.find((_) => _.tags.includes("level"));
    if (has_org && has_building && has_level)
      return "";
    const missing = [];
    if (!has_org)
      missing.push("org");
    if (!has_building)
      missing.push("building");
    if (!has_level)
      missing.push("level");
    return `Zones with tags required for a room system are missing. [${missing.join(", ")}]`;
  }), shareReplay(1));
  get has_changes() {
    return this.pending_zones.getValue().length > 0 || this.order_changed;
  }
  /** Query function for systems */
  query_fn = (_) => ta({ q: _ }).pipe(map((resp) => resp.data));
  exclude_fn = (zone, _) => this.item.zones.indexOf(zone.id) >= 0;
  removeZone = (z) => z.pending ? this.pending_zones.next(this.pending_zones.getValue().filter((_) => _.id !== z.id)) : this._service.removeZone(z);
  addPendingZone = (z) => this.pending_zones.next([...this.pending_zones.getValue(), z]);
  savePendingZones = async () => {
    if (!this.pending_zones.getValue().length)
      return;
    await this._service.addZones(this.pending_zones.getValue());
    this.pending_zones.next([]);
  };
  saveZoneOrder = async () => {
    const zones = await nextValueFrom(this._service.zones);
    let zone_order = this.zone_order.getValue();
    if (zones.every(({ id }, idx) => zone_order[idx] === id))
      return;
    await this._service.reorderZones(zone_order);
    this.order_changed = false;
    this.changed = {};
    this.zone_order.next([]);
  };
  async saveChanges() {
    await this.savePendingZones();
    await this.saveZoneOrder();
  }
  clearChanges() {
    this.order_changed = false;
    this.changed = {};
    this.zone_order.next([]);
    this.pending_zones.next([]);
  }
  get item() {
    return this._service.active_item;
  }
  async reorder([previous, current]) {
    const zones = await nextValueFrom(this.zones);
    moveItemInArray(zones, previous, current);
    this.changed[zones[previous].id] = true;
    this.zone_order.next(zones.map(({ id }) => id));
    this.order_changed = true;
  }
  static \u0275fac = function SystemZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemZonesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemZonesComponent, selectors: [["system-zones"]], decls: 31, vars: 52, consts: [["name_template", ""], ["description_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col", "p-4"], [1, "mb-2", "flex", "items-center", "space-x-2"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "mousedown", "touchstart", "mouseup", "touchend", "disabled"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], [1, "mono", "mb-2", "rounded", "bg-warning", "p-2", "text-center", "text-xs", "text-warning-content"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No zones for selected system", 1, "block", "min-w-[32rem]", "text-sm", 3, "ondrop", "data", "columns", "color", "can_reorder"], [1, "h-12", "w-full"], [1, "flex", "w-full", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "w-full", "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "w-full", "select-text", "overflow-hidden", "px-4", "py-2", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function SystemZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "item-search-field", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function SystemZonesComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addPendingZone($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "section", 4)(5, "button", 6);
      \u0275\u0275listener("click", function SystemZonesComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearChanges());
      });
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("mousedown", function SystemZonesComponent_Template_button_mousedown_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.show_original = true);
      })("touchstart", function SystemZonesComponent_Template_button_touchstart_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.show_original = true);
      })("mouseup", function SystemZonesComponent_Template_button_mouseup_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.show_original = false);
      }, \u0275\u0275resolveWindow)("touchend", function SystemZonesComponent_Template_button_touchend_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.show_original = false);
      }, \u0275\u0275resolveWindow);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function SystemZonesComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveChanges());
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, SystemZonesComponent_Conditional_14_Template, 3, 3, "div", 9);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275elementStart(16, "section", 10);
      \u0275\u0275element(17, "mat-progress-bar", 11);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275elementStart(19, "simple-table", 12);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "async");
      \u0275\u0275pipe(23, "async");
      \u0275\u0275listener("ondrop", function SystemZonesComponent_Template_simple_table_ondrop_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reorder($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "div", 13);
      \u0275\u0275template(25, SystemZonesComponent_ng_template_25_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(27, SystemZonesComponent_ng_template_27_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(29, SystemZonesComponent_ng_template_29_Template, 5, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_17_0;
      const name_template_r7 = \u0275\u0275reference(26);
      const description_template_r8 = \u0275\u0275reference(28);
      const actions_template_r9 = \u0275\u0275reference(30);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 18, "SYSTEMS.ZONE_SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.has_changes);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "COMMON.CLEAR"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.has_changes);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, "SYSTEMS.VIEW_ORIGINAL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.has_changes);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 24, "COMMON.SAVE_CHANGES"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(15, 26, ctx.zone_issues) ? 14 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(18, 28, ctx.loading).zones);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.show_original ? ctx.original_zones : ctx.zones)("columns", \u0275\u0275pureFunction3(47, _c33, \u0275\u0275pureFunction2(38, _c05, \u0275\u0275pipeBind1(20, 30, "SYSTEMS.ZONE_FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(41, _c14, \u0275\u0275pipeBind1(21, 32, "SYSTEMS.ZONE_FIELD_DESCRIPTION"), description_template_r8), \u0275\u0275pureFunction2(44, _c24, actions_template_r9, ((tmp_17_0 = \u0275\u0275pipeBind1(22, 34, ctx.zones)) == null ? null : tmp_17_0.length) > 1)))("color", ctx.show_original ? \u0275\u0275pureFunction0(51, _c43) : \u0275\u0275pipeBind1(23, 36, ctx.changed_colours))("can_reorder", true);
    }
  }, dependencies: [
    CommonModule,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[desc][_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=system-zones.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemZonesComponent, [{
    type: Component,
    args: [{ selector: "system-zones", template: `
        <div class="flex h-full w-full flex-col p-4">
            <section class="mb-2 flex items-center space-x-2">
                <item-search-field
                    [placeholder]="'SYSTEMS.ZONE_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addPendingZone($event)"
                ></item-search-field>
            </section>
            <section class="mb-2 flex items-center space-x-2">
                <button
                    btn
                    matRipple
                    [disabled]="!this.has_changes"
                    class="inverse flex-1"
                    (click)="clearChanges()"
                >
                    {{ 'COMMON.CLEAR' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="inverse flex-1"
                    [disabled]="!this.has_changes"
                    (mousedown)="show_original = true"
                    (touchstart)="show_original = true"
                    (window:mouseup)="show_original = false"
                    (window:touchend)="show_original = false"
                >
                    {{ 'SYSTEMS.VIEW_ORIGINAL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="!this.has_changes"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE_CHANGES' | translate }}
                </button>
            </section>
            @if (zone_issues | async) {
                <div
                    class="mono mb-2 rounded bg-warning p-2 text-center text-xs text-warning-content"
                >
                    {{ zone_issues | async }}
                </div>
            }
            <section class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async).zones"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[32rem] text-sm"
                    [data]="show_original ? original_zones : zones"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'SYSTEMS.ZONE_FIELD_NAME' | translate,
                            content: name_template,
                            size: '14rem',
                        },
                        {
                            key: 'description',
                            name: 'SYSTEMS.ZONE_FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '3.5rem',
                            content: actions_template,
                            show: (zones | async)?.length > 1,
                        },
                    ]"
                    [color]="show_original ? {} : (changed_colours | async)"
                    [can_reorder]="true"
                    (ondrop)="reorder($event)"
                    empty_message="No zones for selected system"
                ></simple-table>
                <div class="h-12 w-full"></div>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex w-full flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="w-full truncate underline"
                            [routerLink]="['/zones', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #description_template let-data="data">
                    <div
                        class="w-full select-text overflow-hidden px-4 py-2 text-xs"
                    >
                        {{ data }}
                        @if (!data) {
                            <span class="opacity-30">
                                {{
                                    'SYSTEMS.ZONE_DESCRIPTION_EMPTY' | translate
                                }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            [matTooltip]="'SYSTEMS.ZONE_REMOVE' | translate"
                            (click)="removeZone(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      ItemSearchFieldComponent,
      FormsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;ecfb195359fd26896655eac377b2218d46e1d508e4acda0e6448002e5599b056;/home/runner/work/backoffice/backoffice/src/app/systems/system-zones.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[desc] {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=system-zones.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemZonesComponent, { className: "SystemZonesComponent", filePath: "src/app/systems/system-zones.component.ts", lineNumber: 178 });
})();

// src/app/systems/systems.component.ts
function SystemsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 17);
    \u0275\u0275elementStart(3, "div", 18, 0);
    \u0275\u0275listener("scroll", function SystemsComponent_Conditional_13_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "SYSTEMS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function SystemsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
function SystemsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 15);
  }
}
var SystemsComponent = class _SystemsComponent extends AsyncHandler {
  _service = inject(SystemStateService);
  _item = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  name = "systems";
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  tab_list = signal([], ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  extensions = signal([], ...ngDevMode ? [{ debugName: "extensions" }] : []);
  debug_position = this._debug.position;
  newItem = () => this._item.create();
  bulkAdd = () => this._item.bulkAdd();
  updateTabList(counts) {
    this.tab_list.set([
      {
        id: "about",
        name: i18n("SYSTEMS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "modules",
        name: i18n("SYSTEMS.TAB_MODULES"),
        count: counts?.devices ?? "?",
        icon: { content: "tablet" }
      },
      {
        id: "zones",
        name: i18n("SYSTEMS.TAB_ZONES"),
        count: counts?.zones ?? "?",
        icon: { content: "layers" }
      },
      {
        id: "triggers",
        name: i18n("SYSTEMS.TAB_TRIGGERS"),
        count: counts?.triggers ?? "?",
        icon: { content: "timer" }
      },
      {
        id: "metadata",
        name: i18n("SYSTEMS.TAB_METADATA"),
        count: counts?.metadata ?? "?",
        icon: { content: "code_blocks" }
      },
      {
        id: "history",
        name: i18n("SYSTEMS.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions()));
  }
  ngOnInit() {
    this.subscription("item-change", this._item.active_item$.subscribe((i) => {
      this.item.set(i);
      this.extensions.set(extensionsForItem(i, this.name));
      this.updateTabList({});
    }));
    this.subscription("counts", this._service.counts.subscribe((counts) => this.updateTabList(counts)));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SystemsComponent_BaseFactory;
    return function SystemsComponent_Factory(__ngFactoryType__) {
      return (\u0275SystemsComponent_BaseFactory || (\u0275SystemsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SystemsComponent)))(__ngFactoryType__ || _SystemsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemsComponent, selectors: [["new-systems-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 16, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-[30rem]"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function SystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function SystemsComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "item-sidebar", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 6)(7, "item-selection", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, SystemsComponent_Conditional_13_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_14_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(16, "icon", 11);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_18_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(20, "icon", 13);
      \u0275\u0275text(21, "playlist_add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(22, SystemsComponent_Conditional_22_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, SystemsComponent_Conditional_23_Template, 1, 0, "app-debug-output", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 8, "SYSTEMS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 10, "SYSTEMS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_3_0 = ctx.item()) == null ? null : tmp_3_0.id) ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 12, "SYSTEMS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(19, 14, "SYSTEMS.BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 23 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    RouterModule,
    RouterOutlet,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemsComponent, [{
    type: Component,
    args: [{ selector: "new-systems-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [title]="'SYSTEMS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            [title]="'SYSTEMS.PLURAL' | translate"
                            class="z-20 sm:hidden"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'SYSTEMS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list()"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            }
                        </div>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'SYSTEMS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-8"
                            [matTooltip]="'SYSTEMS.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="bulkAdd()"
                        >
                            <icon class="text-2xl">playlist_add</icon>
                        </button>
                    </div>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-[30rem]"
                ></app-debug-output>
            }
        </div>
    `, imports: [
      DebugOutputComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent,
      RouterModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemsComponent, { className: "SystemsComponent", filePath: "src/app/systems/systems.component.ts", lineNumber: 117 });
})();

// src/app/systems/systems.module.ts
var ROUTES = [
  {
    path: ":id",
    component: SystemsComponent,
    children: [
      { path: "about", component: SystemAboutComponent },
      { path: "modules", component: SystemModulesComponent },
      { path: "triggers", component: SystemTriggersComponent },
      { path: "zones", component: SystemZonesComponent },
      { path: "metadata", component: SystemMetadataComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "history", component: SettingsHistoryViewComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppSystemsModule = class _AppSystemsModule {
  static \u0275fac = function AppSystemsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSystemsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppSystemsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSystemsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppSystemsModule,
  ROUTES
};
//# sourceMappingURL=chunk-MTK6SQYB.js.map
