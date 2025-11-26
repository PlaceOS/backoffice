import {
  ModuleRuntimeErrorsModalComponent
} from "./chunk-WHS64WNZ.js";
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
import "./chunk-W7JULZ3J.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  CustomTooltipComponent,
  ExtensionOutletComponent,
  PlaceDebugService,
  SidebarMenuComponent,
  SimpleTableComponent,
  extensionsForItem
} from "./chunk-JDP5FFMI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TYVAN3UY.js";
import {
  MatDialog,
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
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Bu,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  Fu,
  Injectable,
  Mr,
  NgControlStatus,
  NgModel,
  NgModule,
  RouterLink,
  RouterModule,
  RouterOutlet,
  au,
  catchError,
  combineLatest,
  debounceTime,
  filter,
  gu,
  i18n,
  inject,
  lastValueFrom,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  tap,
  wc,
  zu,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZKZAJWA3.js";

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

// src/app/modules/module-about.component.ts
var _c0 = (a0) => ["/drivers", a0];
var _c1 = (a0) => ["/systems", a0, "modules"];
var _c2 = (a0) => ["/admin", "edge", a0];
var _c3 = () => [];
function ModuleAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "MODULES.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item.notes);
  }
}
function ModuleAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "MODULES.IP_ADDRESS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item.ip);
  }
}
function ModuleAboutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "MODULES.PORT_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item.port);
  }
}
function ModuleAboutComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 19);
    \u0275\u0275text(1, " TLS ");
    \u0275\u0275elementEnd();
  }
}
function ModuleAboutComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 19);
    \u0275\u0275text(1, " UDP ");
    \u0275\u0275elementEnd();
  }
}
function ModuleAboutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ModuleAboutComponent_Conditional_7_Conditional_4_Template, 2, 0, "code", 19);
    \u0275\u0275conditionalCreate(5, ModuleAboutComponent_Conditional_7_Conditional_5_Template, 2, 0, "code", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "MODULES.PROTOCOL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.item.tls ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.udp ? 5 : -1);
  }
}
function ModuleAboutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "DRIVERS.SINGULAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, ctx_r0.item.driver_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, ctx_r0.driver).name || "<" + \u0275\u0275pipeBind1(6, 7, "COMMON.BLANK_NAME") + ">", " ");
  }
}
function ModuleAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 20);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.SINGULAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c1, \u0275\u0275pipeBind1(4, 5, ctx_r0.system).id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, ctx_r0.system).name, " ");
  }
}
function ModuleAboutComponent_Conditional_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
}
function ModuleAboutComponent_Conditional_12_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "pre", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r0.edge).description);
  }
}
function ModuleAboutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "a", 20);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 21);
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275conditionalCreate(10, ModuleAboutComponent_Conditional_12_Conditional_10_Template, 2, 0, "icon", 23);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ModuleAboutComponent_Conditional_12_ng_template_12_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const edge_desc_template_r2 = \u0275\u0275reference(13);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "COMMON.EDGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c2, \u0275\u0275pipeBind1(5, 9, ctx_r0.edge).id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, ctx_r0.edge).name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("hover", true)("backdrop", false)("content", edge_desc_template_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 13, ctx_r0.edge).description ? 10 : -1);
  }
}
function ModuleAboutComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ModuleAboutComponent_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewErrors());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.RUNTIME_ERRORS_VIEW"), " ");
  }
}
function ModuleAboutComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.START"), " ");
  }
}
function ModuleAboutComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
}
function ModuleAboutComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.STOP"), " ");
  }
}
function ModuleAboutComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
}
function ModuleAboutComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 27);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.item.id)("merge", true)("settings", ctx_r0.item.settings)("merge_settings", \u0275\u0275pipeBind1(2, 4, ctx_r0.other_settings) || \u0275\u0275pureFunction0(6, _c3));
  }
}
function ModuleAboutComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "MODULES.LOADING_SETTINGS"));
  }
}
var ModuleAboutComponent = class _ModuleAboutComponent {
  _service = inject(ModuleStateService);
  _dialog = inject(MatDialog);
  /** Driver for the active item */
  driver = this._service.driver;
  /** Control System for the active item */
  system = this._service.system;
  /** Edge node for the active item */
  edge = this._service.edge;
  /** List of settings for associated modules, drivers and zones */
  other_settings = this._service.associated_settings;
  /** Whether module is being stopped */
  stopping = signal(false, ...ngDevMode ? [{ debugName: "stopping" }] : []);
  get item() {
    return this._service.active_item;
  }
  async toggleModuleState() {
    this.stopping.set(true);
    await this._service.toggleModuleState();
    this.stopping.set(false);
  }
  viewErrors() {
    this._dialog.open(ModuleRuntimeErrorsModalComponent, { data: this.item.id });
  }
  static \u0275fac = function ModuleAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleAboutComponent, selectors: [["module-about"]], decls: 49, vars: 52, consts: [["edge_desc_template", ""], [1, "p-4"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "flex-1", "sm:w-1/3"], [1, "grid", "flex-1", "gap-2", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], ["btn", "", "matRipple", "", 1, "col-span-2", "flex", "w-full", "items-center"], [1, "flex", "flex-1", "flex-col", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "px-4", "py-3", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "p-1"], ["btn", "", "matRipple", "", 1, "m-1", "min-w-36", "flex-1", 3, "click", "disabled"], [1, "text"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "error", "m-1", "min-w-36", "flex-1", 3, "click", "disabled"], [1, "my-4"], [1, "m-auto", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "mono"], [1, "bg-success", "text-base-100"], [1, "truncate", "underline", 3, "routerLink"], [1, "w-px", "flex-1"], ["icon", "", "customTooltip", "", "yPosition", "top", "xPosition", "center", 3, "hover", "backdrop", "content"], [1, "rounded-full", "border", "border-base-200"], [1, "pointer-events-none", "max-w-[24rem]", "rounded", "border", "border-base-200", "bg-base-100", "p-2", "shadow"], [1, "overflow-hidden", "rounded-xl", "bg-base-200", "p-2", "text-sm"], ["btn", "", "matRipple", "", 1, "col-span-2", "flex", "w-full", "items-center", 3, "click"], [3, "id", "merge", "settings", "merge_settings"], ["diameter", "48", 1, "mb-4"]], template: function ModuleAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275conditionalCreate(4, ModuleAboutComponent_Conditional_4_Template, 5, 4);
      \u0275\u0275conditionalCreate(5, ModuleAboutComponent_Conditional_5_Template, 5, 4);
      \u0275\u0275conditionalCreate(6, ModuleAboutComponent_Conditional_6_Template, 5, 4);
      \u0275\u0275conditionalCreate(7, ModuleAboutComponent_Conditional_7_Template, 6, 5);
      \u0275\u0275conditionalCreate(8, ModuleAboutComponent_Conditional_8_Template, 7, 11);
      \u0275\u0275pipe(9, "async");
      \u0275\u0275conditionalCreate(10, ModuleAboutComponent_Conditional_10_Template, 7, 11);
      \u0275\u0275pipe(11, "async");
      \u0275\u0275conditionalCreate(12, ModuleAboutComponent_Conditional_12_Template, 14, 17);
      \u0275\u0275pipe(13, "async");
      \u0275\u0275elementStart(14, "div", 5);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "span", 7);
      \u0275\u0275pipe(19, "date");
      \u0275\u0275pipe(20, "date");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 5);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 6)(27, "span", 7);
      \u0275\u0275pipe(28, "date");
      \u0275\u0275pipe(29, "date");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(32, ModuleAboutComponent_Conditional_32_Template, 3, 3, "button", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 3)(34, "div", 9)(35, "h3", 10);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 11)(39, "button", 12);
      \u0275\u0275listener("click", function ModuleAboutComponent_Template_button_click_39_listener() {
        return ctx.toggleModuleState();
      });
      \u0275\u0275conditionalCreate(40, ModuleAboutComponent_Conditional_40_Template, 3, 3, "div", 13)(41, ModuleAboutComponent_Conditional_41_Template, 1, 0, "mat-spinner", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 15);
      \u0275\u0275listener("click", function ModuleAboutComponent_Template_button_click_42_listener() {
        return ctx.toggleModuleState();
      });
      \u0275\u0275conditionalCreate(43, ModuleAboutComponent_Conditional_43_Template, 3, 3, "div", 13)(44, ModuleAboutComponent_Conditional_44_Template, 1, 0, "mat-spinner", 14);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(45, "hr", 16);
      \u0275\u0275conditionalCreate(46, ModuleAboutComponent_Conditional_46_Template, 3, 7, "section");
      \u0275\u0275pipe(47, "async");
      \u0275\u0275conditionalBranchCreate(48, ModuleAboutComponent_Conditional_48_Template, 5, 3, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "4.5rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item.notes ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item.ip ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item.port > 1 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item.tls || ctx.item.udp ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 22, ctx.driver) ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 24, ctx.system) ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(13, 26, ctx.edge) ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 28, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(19, 30, ctx.item.created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(20, 33, ctx.item.created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 36, ctx.item.created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 38, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(28, 40, ctx.item.updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(29, 43, ctx.item.updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 46, ctx.item.updated_at * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.has_runtime_error ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 48, "MODULES.CONTROLS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.item.running || ctx.stopping());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.stopping() ? 40 : 41);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.item.running || ctx.stopping());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.stopping() ? 43 : 44);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.item.settings && \u0275\u0275pipeBind1(47, 50, ctx.other_settings) ? 46 : 48);
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
    CustomTooltipComponent,
    IconComponent,
    RouterModule,
    RouterLink,
    AsyncPipe,
    DatePipe,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n/*# sourceMappingURL=module-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleAboutComponent, [{
    type: Component,
    args: [{ selector: "module-about", template: `
        <div class="p-4">
            <section
                class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
            >
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="grid flex-1 gap-2 rounded border border-base-200 p-4"
                        [style.gridTemplateColumns]="'4.5rem auto'"
                    >
                        @if (item.notes) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'MODULES.NOTES' | translate }}
                            </div>
                            <div>{{ item.notes }}</div>
                        }
                        @if (item.ip) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'MODULES.IP_ADDRESS' | translate }}
                            </div>
                            <div class="mono">{{ item.ip }}</div>
                        }
                        @if (item.port > 1) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'MODULES.PORT_NUMBER' | translate }}
                            </div>
                            <div class="mono">{{ item.port }}</div>
                        }
                        @if (item.tls || item.udp) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'MODULES.PROTOCOL' | translate }}
                            </div>
                            <div class="flex items-center">
                                @if (item.tls) {
                                    <code class="bg-success text-base-100">
                                        TLS
                                    </code>
                                }
                                @if (item.udp) {
                                    <code class="bg-success text-base-100">
                                        UDP
                                    </code>
                                }
                            </div>
                        }
                        @if (driver | async) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.SINGULAR' | translate }}
                            </div>
                            <a
                                class="truncate underline"
                                [routerLink]="['/drivers', item.driver_id]"
                            >
                                {{
                                    (driver | async).name ||
                                        '&lt;' +
                                            ('COMMON.BLANK_NAME' | translate) +
                                            '&gt;'
                                }}
                            </a>
                        }
                        @if (system | async) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SINGULAR' | translate }}
                            </div>
                            <a
                                class="truncate underline"
                                [routerLink]="[
                                    '/systems',
                                    (system | async).id,
                                    'modules',
                                ]"
                            >
                                {{ (system | async).name }}
                            </a>
                        }
                        @if (edge | async) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.EDGE' | translate }}
                            </div>
                            <div class="flex items-center">
                                <a
                                    class="truncate underline"
                                    [routerLink]="[
                                        '/admin',
                                        'edge',
                                        (edge | async).id,
                                    ]"
                                >
                                    {{ (edge | async).name }}
                                </a>
                                <div class="w-px flex-1"></div>
                                <button
                                    icon
                                    customTooltip
                                    [hover]="true"
                                    [backdrop]="false"
                                    [content]="edge_desc_template"
                                    yPosition="top"
                                    xPosition="center"
                                >
                                    @if ((edge | async).description) {
                                        <icon
                                            class="rounded-full border border-base-200"
                                            >info</icon
                                        >
                                    }
                                </button>
                            </div>
                            <ng-template #edge_desc_template>
                                <div
                                    class="pointer-events-none max-w-[24rem] rounded border border-base-200 bg-base-100 p-2 shadow"
                                >
                                    <pre
                                        class="overflow-hidden rounded-xl bg-base-200 p-2 text-sm"
                                        >{{ (edge | async).description }}</pre
                                    >
                                </div>
                            </ng-template>
                        }
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.CREATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item.created_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item.created_at * 1000 | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item.created_at * 1000 | dateFrom }}
                            </span>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.UPDATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item.updated_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item.updated_at * 1000 | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item.updated_at * 1000 | dateFrom }}
                            </span>
                        </div>
                        @if (item.has_runtime_error) {
                            <button
                                btn
                                matRipple
                                class="col-span-2 flex w-full items-center"
                                (click)="viewErrors()"
                            >
                                {{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }}
                            </button>
                        }
                    </div>
                </div>
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="flex flex-1 flex-col rounded border border-base-200"
                    >
                        <h3
                            class="w-full rounded bg-base-200 px-4 py-3 text-lg font-medium"
                        >
                            {{ 'MODULES.CONTROLS' | translate }}
                        </h3>
                        <div class="flex flex-wrap items-center p-1">
                            <button
                                btn
                                matRipple
                                class="m-1 min-w-36 flex-1"
                                [disabled]="item.running || stopping()"
                                (click)="toggleModuleState()"
                            >
                                @if (!stopping()) {
                                    <div class="text">
                                        {{ 'MODULES.START' | translate }}
                                    </div>
                                } @else {
                                    <mat-spinner diameter="32"></mat-spinner>
                                }
                            </button>
                            <button
                                btn
                                matRipple
                                class="inverse error m-1 min-w-36 flex-1"
                                [disabled]="!item.running || stopping()"
                                (click)="toggleModuleState()"
                            >
                                @if (!stopping()) {
                                    <div class="text">
                                        {{ 'MODULES.STOP' | translate }}
                                    </div>
                                } @else {
                                    <mat-spinner diameter="32"></mat-spinner>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="my-4" />
            @if (item.settings && (other_settings | async)) {
                <section>
                    <a-settings-form
                        [id]="item.id"
                        [merge]="true"
                        [settings]="item.settings"
                        [merge_settings]="(other_settings | async) || []"
                    ></a-settings-form>
                </section>
            } @else {
                <div
                    class="m-auto flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                    <p>{{ 'MODULES.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      SettingsFormComponent,
      MatRippleModule,
      MatTooltipModule,
      CustomTooltipComponent,
      IconComponent,
      RouterModule,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;4fbeda631554c4840a8f923f177b6563f8a4c604336f3dc26536e6ada05aaf6a;/home/runner/work/backoffice/backoffice/src/app/modules/module-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nlabel {\n  width: 4rem;\n}\n/*# sourceMappingURL=module-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleAboutComponent, { className: "ModuleAboutComponent", filePath: "src/app/modules/module-about.component.ts", lineNumber: 273 });
})();

// src/app/modules/module-systems.component.ts
var _c02 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "installed_ui_devices", name: a0, size: "10rem" });
var _c22 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "10rem" });
var _c32 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/systems", a0];
function ModuleSystemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function ModuleSystemsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +row_r3.created_at * 1e3), " ");
  }
}
var ModuleSystemsComponent = class _ModuleSystemsComponent {
  _service = inject(ModuleStateService);
  /** Subject holding the value of the search */
  filter$ = new BehaviorSubject("");
  /** Whether systems are being loaded */
  loading = this._service.loading;
  system_list = combineLatest([
    this.filter$,
    this._service.system_list
  ]).pipe(map((details) => {
    const [filter2, systems] = details;
    const search = filter2.toLowerCase();
    return filter2 ? systems.filter((sys) => sys.name.toLowerCase().includes(search)) : systems;
  }));
  static \u0275fac = function ModuleSystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleSystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleSystemsComponent, selectors: [["module-systems"]], decls: 20, vars: 32, consts: [["name_template", ""], ["added_template", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"]], template: function ModuleSystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "mat-form-field", 4)(3, "div", 5)(4, "icon", 6);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function ModuleSystemsComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter$.next($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section");
      \u0275\u0275element(9, "mat-progress-bar", 8);
      \u0275\u0275pipe(10, "async");
      \u0275\u0275element(11, "simple-table", 9);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275template(16, ModuleSystemsComponent_ng_template_16_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, ModuleSystemsComponent_ng_template_18_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(17);
      const added_template_r5 = \u0275\u0275reference(19);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "SYSTEMS.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(10, 10, ctx.loading));
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.system_list)("columns", \u0275\u0275pureFunction3(28, _c32, \u0275\u0275pureFunction2(20, _c02, \u0275\u0275pipeBind1(12, 12, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(23, _c12, \u0275\u0275pipeBind1(13, 14, "MODULES.SYSTEMS_FIELD_MODULE_COUNT")), \u0275\u0275pureFunction2(25, _c22, \u0275\u0275pipeBind1(14, 16, "COMMON.CREATED_AT"), added_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(15, 18, "MODULES.SYSTEMS_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    RouterModule,
    RouterLink,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    DateFromPipe,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=module-systems.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleSystemsComponent, [{
    type: Component,
    args: [{ selector: "module-systems", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center">
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
                        [placeholder]="'SYSTEMS.SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
            </section>
            <section>
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[32rem] text-sm"
                    [data]="system_list"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'installed_ui_devices',
                            name:
                                'MODULES.SYSTEMS_FIELD_MODULE_COUNT'
                                | translate,
                            size: '10rem',
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
                            content: added_template,
                            size: '10rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'MODULES.SYSTEMS_EMPTY' | translate"
                ></simple-table>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/systems', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #added_template let-row="row">
                    <div class="p-4">
                        {{ +row.created_at * 1000 | dateFrom }}
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      DateFromPipe,
      SimpleTableComponent,
      RouterModule,
      TranslatePipe,
      CommonModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      IconComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/modules/module-systems.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=module-systems.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleSystemsComponent, { className: "ModuleSystemsComponent", filePath: "src/app/modules/module-systems.component.ts", lineNumber: 114 });
})();

// src/app/modules/modules.component.ts
function ModulesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 15);
    \u0275\u0275elementStart(3, "div", 16, 0);
    \u0275\u0275listener("scroll", function ModulesComponent_Conditional_13_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "MODULES.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function ModulesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 12);
  }
}
function ModulesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
var ModulesComponent = class _ModulesComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  name = "modules";
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  /** Number of systems for the active device */
  system_count = signal(void 0, ...ngDevMode ? [{ debugName: "system_count" }] : []);
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  tab_list = signal([], ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  debug_position = this._debug.position;
  newItem = () => this._service.create();
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList() {
    this.tab_list.set([
      {
        id: "about",
        name: i18n("MODULES.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "systems",
        name: i18n("MODULES.TAB_SYSTEMS"),
        count: this.system_count(),
        icon: { content: "meeting_room" }
      },
      {
        id: "history",
        name: i18n("MODULES.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions));
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => {
      this.item.set(item);
      this.loadValues(item);
      this.updateTabList();
    }));
    this.updateTabList();
  }
  async loadValues(item) {
    if (!item)
      return;
    const query = { offset: 0, limit: 1, module_id: item.id };
    this.system_count.set((await lastValueFrom($c(query))).total);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ModulesComponent_BaseFactory;
    return function ModulesComponent_Factory(__ngFactoryType__) {
      return (\u0275ModulesComponent_BaseFactory || (\u0275ModulesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ModulesComponent)))(__ngFactoryType__ || _ModulesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["new-modules-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 15, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-[30rem]"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function ModulesComponent_Template_sidebar_menu_openChange_1_listener($event) {
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
      \u0275\u0275listener("click", function ModulesComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, ModulesComponent_Conditional_13_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("click", function ModulesComponent_Template_button_click_14_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(16, "icon", 11);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(18, ModulesComponent_Conditional_18_Template, 1, 0, "app-debug-output", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, ModulesComponent_Conditional_19_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 9, "MODULES.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 11, "MODULES.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 13, "MODULES.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 19 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterOutlet,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModulesComponent, [{
    type: Component,
    args: [{ selector: "new-modules-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'MODULES.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'MODULES.PLURAL' | translate"
                        >
                            <button
                                icon
                                matRipple
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
                                    [type]="'MODULES.SINGULAR' | translate"
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
                            [matTooltip]="'MODULES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
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
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      RouterModule,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesComponent, { className: "ModulesComponent", filePath: "src/app/modules/modules.component.ts", lineNumber: 109 });
})();

// src/app/modules/modules.module.ts
var ROUTES = [
  {
    path: ":id",
    component: ModulesComponent,
    children: [
      { path: "about", component: ModuleAboutComponent },
      { path: "systems", component: ModuleSystemsComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "history", component: SettingsHistoryViewComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppModulesModule = class _AppModulesModule {
  static \u0275fac = function AppModulesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModulesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModulesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModulesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppModulesModule,
  ROUTES
};
//# sourceMappingURL=chunk-ZRDW7BTO.js.map
