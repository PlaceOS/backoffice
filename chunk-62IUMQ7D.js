import {
  BindingDirective
} from "./chunk-NWQW35J3.js";
import {
  DriverStateService
} from "./chunk-P45FYFGD.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-EGQ75B4C.js";
import "./chunk-SJKH3PVR.js";
import "./chunk-YK2KHR5K.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-WN3K4HWL.js";
import "./chunk-VQGAWLOU.js";
import "./chunk-J533RESC.js";
import "./chunk-CIQTGPIC.js";
import "./chunk-PZ6FH7HJ.js";
import "./chunk-JAZWWDYQ.js";
import "./chunk-SUZCL24N.js";
import "./chunk-Q4IHQBE5.js";
import "./chunk-IYY5PYJ5.js";
import {
  toSignal
} from "./chunk-DVZ7MXOG.js";
import "./chunk-JRBSDEVI.js";
import {
  SimpleTableComponent
} from "./chunk-IICJGF2V.js";
import "./chunk-IR63I7QW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LZSVYB2G.js";
import "./chunk-TBIE4X4V.js";
import "./chunk-DSMAAENN.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-BR2SEM6U.js";
import "./chunk-XKUCQ7BL.js";
import "./chunk-SLDYTPK2.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QOHO4EXP.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-V6YJ4Z7A.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-JHZ5UPYR.js";
import "./chunk-V7K2HRQN.js";
import "./chunk-PLTFMK5A.js";
import "./chunk-4PN5RODM.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-VRK5F3OU.js";
import "./chunk-2MAE3OEL.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-4DW55IZJ.js";
import "./chunk-NNJNMYZB.js";
import {
  MatRippleModule
} from "./chunk-P4ZFFXRB.js";
import "./chunk-RDKMWAC6.js";
import {
  IconComponent
} from "./chunk-OJQGLQXV.js";
import "./chunk-SMEGFJCA.js";
import {
  TranslatePipe
} from "./chunk-SFSVGVOC.js";
import "./chunk-TKVVIBDD.js";
import {
  MatRipple
} from "./chunk-X3IV36B5.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  Input,
  NgControlStatus,
  NgModel,
  Output,
  computed,
  inject,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
} from "./chunk-JFTEBBHC.js";
import {
  Cl,
  map
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/drivers/driver-devices.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/modules", a0];
var _c5 = (a0) => ({ count: a0 });
var _c6 = () => [];
var _c7 = (a0) => ["/systems", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DriverModulesComponent_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 14);
    \u0275\u0275twoWayListener("modelChange", function DriverModulesComponent_ng_template_14_Conditional_0_Template_i_modelChange_0_listener($event) {
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
function DriverModulesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DriverModulesComponent_ng_template_14_Conditional_0_Template, 1, 3, "i", 12);
    \u0275\u0275element(1, "div", 13);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275conditional(row_r3.system ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-content", !row_r3.running)("bg-error", row_r3.running && !row_r3.connected)("bg-success", row_r3.running && row_r3.connected);
  }
}
function DriverModulesComponent_ng_template_16_Template(rf, ctx) {
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
function DriverModulesComponent_ng_template_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "DRIVERS.LOADING_SYSTEMS"));
  }
}
function DriverModulesComponent_ng_template_18_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const system_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c7, system_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", system_r8.display_name || system_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", system_r8.id, " ");
  }
}
function DriverModulesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DriverModulesComponent_ng_template_18_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.loadSystems(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DriverModulesComponent_ng_template_18_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeModule(row_r6));
    });
    \u0275\u0275elementStart(7, "icon", 21);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 3)(11, "div", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, DriverModulesComponent_ng_template_18_Conditional_14_Template, 5, 4, "div", 23);
    \u0275\u0275repeaterCreate(15, DriverModulesComponent_ng_template_18_For_16_Template, 6, 5, "a", 24, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r9 = \u0275\u0275reference(10);
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 5, "DRIVERS.VIEW_SYSTEMS"))("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 7, "MODULES.DELETE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 9, "DRIVERS.SYSTEM_COUNT", \u0275\u0275pureFunction1(13, _c5, ctx_r6.systems[row_r6.id] == null ? null : ctx_r6.systems[row_r6.id].length), ctx_r6.systems[row_r6.id] == null ? null : ctx_r6.systems[row_r6.id].length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.loading_systems ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.systems[row_r6.id] || \u0275\u0275pureFunction0(15, _c6));
  }
}
var DriverModulesComponent = class _DriverModulesComponent {
  _service = inject(DriverStateService);
  loading_systems = false;
  /** Subject holding the value of the search */
  filter = model("", ...ngDevMode ? [{ debugName: "filter" }] : []);
  /** Whether systems are being loaded */
  loading = toSignal(this._service.loading, {
    initialValue: false
  });
  /** Currently active driver */
  item = this._service.item;
  /** List of systems associated with modules */
  systems = {};
  /** Whether systems are being loaded */
  /** List of modules */
  module_list = toSignal(this._service.modules, {
    initialValue: []
  });
  modules = computed(() => {
    const filter = this.filter().toLowerCase();
    const modules = this.module_list();
    return filter ? modules.filter((mod) => mod.name.toLowerCase().includes(filter) || mod.custom_name.toLowerCase().includes(filter)) : modules;
  }, ...ngDevMode ? [{ debugName: "modules" }] : []);
  removeModule = (d) => this._service.removeModule(d);
  async loadSystems(mod) {
    this.loading_systems = true;
    const systems = await Cl({ module_id: mod.id }).pipe(map(({ data }) => data)).toPromise();
    this.systems[mod.id] = systems || [];
    this.loading_systems = false;
  }
  static \u0275fac = function DriverModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverModulesComponent, selectors: [["driver-devices"]], inputs: { filter: [1, "filter"] }, outputs: { filter: "filterChange" }, decls: 20, vars: 28, consts: [["state_template", ""], ["name_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "p-4"], [1, "mb-4", "flex", "items-center"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], ["binding", "", "bind", "connected", 3, "modelChange", "model", "sys", "mod"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip", "matMenuTriggerFor"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "bg-base-200", "mx-1", "-mt-1", "mb-1", "min-w-64", "rounded-sm", "px-4", "py-2", "text-sm", "opacity-70"], [1, "flex", "items-center", "space-x-2", "p-2", "text-sm"], ["mat-menu-item", "", 1, "leading-tight", 3, "routerLink"], [3, "diameter"], [1, "flex", "h-full", "flex-col", "justify-center", "px-2", "leading-tight"], [1, "text-base"], [1, "text-xs", "opacity-30"]], template: function DriverModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "mat-form-field", 6)(3, "div", 7)(4, "icon", 8);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 9);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function DriverModulesComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section");
      \u0275\u0275element(9, "mat-progress-bar", 10)(10, "simple-table", 11);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275template(14, DriverModulesComponent_ng_template_14_Template, 2, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, DriverModulesComponent_ng_template_16_Template, 5, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, DriverModulesComponent_ng_template_18_Template, 17, 16, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const state_template_r10 = \u0275\u0275reference(15);
      const name_template_r11 = \u0275\u0275reference(17);
      const actions_template_r12 = \u0275\u0275reference(19);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 8, "MODULES.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.modules())("columns", \u0275\u0275pureFunction3(24, _c3, \u0275\u0275pureFunction2(16, _c0, \u0275\u0275pipeBind1(11, 10, "MODULES.FIELD_STATE"), state_template_r10), \u0275\u0275pureFunction2(19, _c1, \u0275\u0275pipeBind1(12, 12, "DRIVERS.MODULE_NAME"), name_template_r11), \u0275\u0275pureFunction1(22, _c2, actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 14, "DRIVERS.MODULES_EMPTY"));
    }
  }, dependencies: [
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterModule,
    RouterLink,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
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
    BindingDirective,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 28rem;\n}\n/*# sourceMappingURL=driver-devices.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverModulesComponent, [{
    type: Component,
    args: [{ selector: "driver-devices", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center">
                <mat-form-field appearance="outline" class="h-12 flex-1">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        matInput
                        [placeholder]="'MODULES.SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
            </section>
            <section>
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
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
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DRIVERS.MODULES_EMPTY' | translate"
                ></simple-table>
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
                            matRipple
                            [matTooltip]="'DRIVERS.VIEW_SYSTEMS' | translate"
                            [matMenuTriggerFor]="menu"
                            (click)="loadSystems(row)"
                        >
                            <icon>visibility</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'MODULES.DELETE' | translate"
                            (click)="removeModule(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <div
                                class="bg-base-200 mx-1 -mt-1 mb-1 min-w-64 rounded-sm px-4 py-2 text-sm opacity-70"
                            >
                                {{
                                    'DRIVERS.SYSTEM_COUNT'
                                        | translate
                                            : { count: systems[row.id]?.length }
                                            : systems[row.id]?.length
                                }}
                            </div>
                            @if (loading_systems) {
                                <div
                                    class="flex items-center space-x-2 p-2 text-sm"
                                >
                                    <mat-spinner [diameter]="32"></mat-spinner>
                                    <span>{{
                                        'DRIVERS.LOADING_SYSTEMS' | translate
                                    }}</span>
                                </div>
                            }
                            @for (
                                system of systems[row.id] || [];
                                track system.id
                            ) {
                                <a
                                    mat-menu-item
                                    class="leading-tight"
                                    [routerLink]="['/systems', system.id]"
                                >
                                    <div
                                        class="flex h-full flex-col justify-center px-2 leading-tight"
                                    >
                                        <div class="text-base">
                                            {{
                                                system.display_name ||
                                                    system.name
                                            }}
                                        </div>
                                        <div class="text-xs opacity-30">
                                            {{ system.id }}
                                        </div>
                                    </div>
                                </a>
                            }
                        </mat-menu>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      MatMenuModule,
      RouterModule,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      IconComponent,
      RouterModule,
      BindingDirective
    ], styles: ["/* angular:styles/component:css;1a38b1fa1f84f264cfb28b0314248f73b1e027b346662f84798583f6ad76a27c;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-devices.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  width: 100%;\n  min-width: 28rem;\n}\n/*# sourceMappingURL=driver-devices.component.css.map */\n"] }]
  }], null, { filter: [{ type: Input, args: [{ isSignal: true, alias: "filter", required: false }] }, { type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverModulesComponent, { className: "DriverModulesComponent", filePath: "src/app/drivers/driver-devices.component.ts", lineNumber: 205 });
})();
export {
  DriverModulesComponent
};
//# sourceMappingURL=chunk-62IUMQ7D.js.map
