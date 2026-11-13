import {
  BindingDirective
} from "./chunk-N5YKATG4.js";
import {
  DriverStateService
} from "./chunk-ZU56DI7D.js";
import {
  CustomTooltipComponent
} from "./chunk-OF3WDS66.js";
import "./chunk-BTPWD5SN.js";
import "./chunk-D5FJQT6B.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-5LOO24JV.js";
import "./chunk-EOOX537V.js";
import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import "./chunk-JNEMVL3M.js";
import "./chunk-3RQH6HLG.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import {
  SpinnerComponent
} from "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-QW2S4DDS.js";
import {
  ProgressBarComponent
} from "./chunk-XFWRCLJY.js";
import "./chunk-BPSZRBL2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-IEEA6WQX.js";
import "./chunk-32E64OOS.js";
import "./chunk-QR6TO34C.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import {
  FormFieldComponent
} from "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import "./chunk-RQOHFMTH.js";
import {
  Sa
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/drivers/driver-devices.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "6rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/modules", a0];
var _c5 = (a0) => ({ count: a0 });
var _c6 = () => [];
var _c7 = (a0) => ["/systems", a0];
var _c8 = () => ({ count: 0 });
var _forTrack0 = ($index, $item) => $item.id;
function DriverModulesComponent_ng_template_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 14);
    \u0275\u0275twoWayListener("modelChange", function DriverModulesComponent_ng_template_15_Conditional_0_Template_i_modelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const row_r3 = \u0275\u0275nextContext().row;
      \u0275\u0275twoWayBindingSet(row_r3.connected, $event) || (row_r3.connected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275twoWayProperty("model", row_r3.connected);
    \u0275\u0275property("sys", row_r3.system.id)("mod", row_r3);
  }
}
function DriverModulesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DriverModulesComponent_ng_template_15_Conditional_0_Template, 1, 3, "i", 12);
    \u0275\u0275element(1, "div", 13);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275conditional(row_r3.system ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-content", !row_r3.running)("bg-error", row_r3.running && !row_r3.connected)("bg-success", row_r3.running && row_r3.connected);
  }
}
function DriverModulesComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.id, " ");
  }
}
function DriverModulesComponent_ng_template_19_ng_template_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "app-spinner", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "DRIVERS.LOADING_SYSTEMS"));
  }
}
function DriverModulesComponent_ng_template_19_ng_template_9_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27)(1, "div", 28)(2, "icon", 29);
    \u0275\u0275text(3, " meeting_room ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const system_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c7, system_r8.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", system_r8.display_name || system_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", system_r8.id, " ");
  }
}
function DriverModulesComponent_ng_template_19_ng_template_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, DriverModulesComponent_ng_template_19_ng_template_9_Conditional_5_For_2_Template, 9, 5, "a", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).row;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.systems()[row_r6.id] || \u0275\u0275pureFunction0(0, _c6));
  }
}
function DriverModulesComponent_ng_template_19_ng_template_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "icon", 33);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "DRIVERS.SYSTEM_COUNT", \u0275\u0275pureFunction0(5, _c8), 0), " ");
  }
}
function DriverModulesComponent_ng_template_19_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DriverModulesComponent_ng_template_19_ng_template_9_Conditional_4_Template, 5, 4, "div", 23)(5, DriverModulesComponent_ng_template_19_ng_template_9_Conditional_5_Template, 3, 1, "div", 24)(6, DriverModulesComponent_ng_template_19_ng_template_9_Conditional_6_Template, 6, 6, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    const ctx_r6 = \u0275\u0275nextContext();
    const is_loading_r9 = ctx_r6.loading_systems() === row_r6.id;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 2, "DRIVERS.SYSTEM_COUNT", \u0275\u0275pureFunction1(6, _c5, is_loading_r9 ? "?" : ctx_r6.systemCount(row_r6.id)), ctx_r6.systemCount(row_r6.id)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(is_loading_r9 ? 4 : ctx_r6.systems()[row_r6.id]?.length ? 5 : 6);
  }
}
function DriverModulesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DriverModulesComponent_ng_template_19_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.loadSystems(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DriverModulesComponent_ng_template_19_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeModule(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DriverModulesComponent_ng_template_19_ng_template_9_Template, 7, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const content_r10 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 3, "DRIVERS.VIEW_SYSTEMS"))("content", content_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 5, "MODULES.DELETE"));
  }
}
var DriverModulesComponent = class _DriverModulesComponent {
  _service = inject(DriverStateService);
  loading_systems = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading_systems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Signal holding the value of the search */
  filter = model(
    "",
    ...ngDevMode ? [{ debugName: "filter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether systems are being loaded */
  loading = this._service.loading;
  /** Currently active driver */
  item = this._service.item;
  /** List of systems associated with modules */
  systems = signal(
    {},
    ...ngDevMode ? [{ debugName: "systems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of modules */
  module_list = this._service.modules;
  modules = computed(
    () => {
      const filter = this.filter().toLowerCase();
      const modules = this.module_list();
      return filter ? modules.filter((mod) => mod.name.toLowerCase().includes(filter) || mod.custom_name.toLowerCase().includes(filter)) : modules;
    },
    ...ngDevMode ? [{ debugName: "modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  removeModule = (d) => this._service.removeModule(d);
  systemCount = (module_id) => this.systems()[module_id]?.length || 0;
  async loadSystems(mod) {
    this.loading_systems.set(mod.id);
    this.systems.update((state) => __spreadProps(__spreadValues({}, state), { [mod.id]: [] }));
    try {
      const { data: systems } = await Sa({ module_id: mod.id });
      this.systems.update((state) => __spreadProps(__spreadValues({}, state), {
        [mod.id]: systems || []
      }));
    } finally {
      this.loading_systems.set("");
    }
  }
  static \u0275fac = function DriverModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverModulesComponent, selectors: [["driver-devices"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 21, vars: 31, consts: [["state_template", ""], ["name_template", ""], ["actions_template", ""], ["content", ""], [1, "p-4"], [1, "mb-4", "flex", "items-center"], [1, "h-12", "flex-1"], ["prefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], [1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], ["binding", "", "bind", "connected", 3, "modelChange", "model", "sys", "mod"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", "customTooltip", "", 3, "click", "appTooltip", "content"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"], [1, "bg-base-100", "border-base-300", "relative", "border"], [1, "bg-base-100", "border-base-300", "text-base-content/70", "absolute", "left-1", "-translate-y-full", "rounded-t-lg", "border-x", "border-t", "px-3", "py-1", "font-mono", "text-[0.625rem]", "font-medium"], [1, "text-base-content/70", "flex", "min-w-72", "items-center", "space-x-3", "px-4", "py-3", "text-sm"], [1, "max-h-80", "min-w-72", "overflow-auto"], [1, "text-base-content/50", "flex", "min-w-72", "items-center", "space-x-3", "px-4", "py-3", "text-sm"], [3, "diameter"], [1, "hover:bg-base-200", "focus-visible:bg-base-200", "flex", "min-h-14", "items-center", "px-4", "leading-tight", "outline-none", 3, "routerLink"], [1, "flex", "h-full", "min-w-0", "items-center", "space-x-3", "py-1"], [1, "text-base-content/50", "text-xl"], [1, "flex", "min-w-0", "flex-col", "justify-center", "leading-tight"], [1, "text-base-content", "truncate", "text-sm", "font-medium"], [1, "text-base-content/40", "font-mono", "text-[0.625rem]"], [1, "text-xl"]], template: function DriverModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "app-form-field", 6)(3, "div", 7)(4, "icon", 8);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 9);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function DriverModulesComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section");
      \u0275\u0275element(9, "app-progress-bar", 10)(10, "simple-table", 11);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275template(15, DriverModulesComponent_ng_template_15_Template, 2, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, DriverModulesComponent_ng_template_17_Template, 5, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(19, DriverModulesComponent_ng_template_19_Template, 11, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const state_template_r11 = \u0275\u0275reference(16);
      const name_template_r12 = \u0275\u0275reference(18);
      const actions_template_r13 = \u0275\u0275reference(20);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "MODULES.SEARCH"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.modules())("columns", \u0275\u0275pureFunction3(27, _c3, \u0275\u0275pureFunction2(18, _c0, \u0275\u0275pipeBind1(11, 10, "MODULES.FIELD_STATE"), state_template_r11), \u0275\u0275pureFunction2(21, _c1, \u0275\u0275pipeBind1(12, 12, "DRIVERS.MODULE_NAME"), name_template_r12), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(13, 14, "COMMON.ACTIONS"), actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(14, 16, "DRIVERS.MODULES_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    SpinnerComponent,
    TooltipDirective,
    FormFieldComponent,
    RouterModule,
    RouterLink,
    SimpleTableComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    BindingDirective,
    CustomTooltipComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 28rem;\n}\n/*# sourceMappingURL=driver-devices.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverModulesComponent, [{
    type: Component,
    args: [{ selector: "driver-devices", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center">
                <app-form-field class="h-12 flex-1">
                    <div class="prefix" prefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        [placeholder]="'MODULES.SEARCH' | translate"
                        class="rounded-none"
                    />
                </app-form-field>
            </section>
            <section>
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="modules()"
                    [columns]="[
                        {
                            key: 'state',
                            name: 'MODULES.FIELD_STATE' | translate,
                            content: state_template,
                            size: '4rem',
                            sortable: false,
                        },
                        {
                            key: 'name',
                            name: 'DRIVERS.MODULE_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DRIVERS.MODULES_EMPTY' | translate"
                />
                <ng-template #state_template let-row="row">
                    @if (row.system) {
                        <i
                            binding
                            [(model)]="row.connected"
                            [sys]="row.system.id"
                            [mod]="row"
                            bind="connected"
                        ></i>
                    }
                    <div
                        class="mx-auto h-2 w-2 rounded-full"
                        [class.bg-base-content]="!row.running"
                        [class.bg-error]="row.running && !row.connected"
                        [class.bg-success]="row.running && row.connected"
                    ></div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/modules', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            ripple
                            [appTooltip]="'DRIVERS.VIEW_SYSTEMS' | translate"
                            customTooltip
                            [content]="content"
                            (click)="loadSystems(row)"
                        >
                            <icon>visibility</icon>
                        </button>
                        <button
                            icon
                            default
                            error
                            ripple
                            [appTooltip]="'MODULES.DELETE' | translate"
                            (click)="removeModule(row)"
                        >
                            <icon>delete</icon>
                        </button>
                        <ng-template #content>
                            <div
                                class="bg-base-100 border-base-300 relative border"
                            >
                                @let is_loading = loading_systems() === row.id;
                                <div
                                    class="bg-base-100 border-base-300 text-base-content/70 absolute left-1 -translate-y-full rounded-t-lg border-x border-t px-3 py-1 font-mono text-[0.625rem] font-medium"
                                >
                                    {{
                                        'DRIVERS.SYSTEM_COUNT'
                                            | translate
                                                : {
                                                      count: is_loading
                                                          ? '?'
                                                          : systemCount(row.id),
                                                  }
                                                : systemCount(row.id)
                                    }}
                                </div>
                                @if (is_loading) {
                                    <div
                                        class="text-base-content/70 flex min-w-72 items-center space-x-3 px-4 py-3 text-sm"
                                    >
                                        <app-spinner [diameter]="24" />
                                        <span>{{
                                            'DRIVERS.LOADING_SYSTEMS'
                                                | translate
                                        }}</span>
                                    </div>
                                } @else if (systems()[row.id]?.length) {
                                    <div
                                        class="max-h-80 min-w-72 overflow-auto"
                                    >
                                        @for (
                                            system of systems()[row.id] || [];
                                            track system.id
                                        ) {
                                            <a
                                                class="hover:bg-base-200 focus-visible:bg-base-200 flex min-h-14 items-center px-4 leading-tight outline-none"
                                                [routerLink]="[
                                                    '/systems',
                                                    system.id,
                                                ]"
                                            >
                                                <div
                                                    class="flex h-full min-w-0 items-center space-x-3 py-1"
                                                >
                                                    <icon
                                                        class="text-base-content/50 text-xl"
                                                    >
                                                        meeting_room
                                                    </icon>
                                                    <div
                                                        class="flex min-w-0 flex-col justify-center leading-tight"
                                                    >
                                                        <div
                                                            class="text-base-content truncate text-sm font-medium"
                                                        >
                                                            {{
                                                                system.display_name ||
                                                                    system.name
                                                            }}
                                                        </div>
                                                        <div
                                                            class="text-base-content/40 font-mono text-[0.625rem]"
                                                        >
                                                            {{ system.id }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                } @else {
                                    <div
                                        class="text-base-content/50 flex min-w-72 items-center space-x-3 px-4 py-3 text-sm"
                                    >
                                        <icon class="text-xl">info</icon>
                                        <span>
                                            {{
                                                'DRIVERS.SYSTEM_COUNT'
                                                    | translate
                                                        : {
                                                              count: 0,
                                                          }
                                                        : 0
                                            }}
                                        </span>
                                    </div>
                                }
                            </div>
                        </ng-template>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      ProgressBarComponent,
      SpinnerComponent,
      TooltipDirective,
      FormFieldComponent,
      RouterModule,
      TranslatePipe,
      SimpleTableComponent,
      FormsModule,
      IconComponent,
      RouterModule,
      BindingDirective,
      CustomTooltipComponent
    ], styles: ["/* angular:styles/component:css;915bdc922be6600c;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-devices.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  width: 100%;\n  min-width: 28rem;\n}\n/*# sourceMappingURL=driver-devices.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverModulesComponent, { className: "DriverModulesComponent", filePath: "src/app/drivers/driver-devices.component.ts", lineNumber: 249 });
})();
export {
  DriverModulesComponent
};
//# debugId=1a9e9cf3-68cc-5956-8c2c-55e24306211d
//# sourceMappingURL=chunk-RTBK22PB.js.map
