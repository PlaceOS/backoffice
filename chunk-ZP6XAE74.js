import {
  ModuleRuntimeErrorsModalComponent
} from "./chunk-YJSMBBN4.js";
import {
  SettingsFormComponent
} from "./chunk-XK3UZDI6.js";
import "./chunk-JSR2V5ZQ.js";
import {
  ModuleStateService
} from "./chunk-4BJYR7HU.js";
import "./chunk-3JEPTD52.js";
import "./chunk-GLA5BW4F.js";
import {
  CustomTooltipComponent
} from "./chunk-CBUMWNUV.js";
import "./chunk-SLVL7P43.js";
import "./chunk-L6DTZFL3.js";
import "./chunk-J533RESC.js";
import "./chunk-CIQTGPIC.js";
import "./chunk-PZ6FH7HJ.js";
import "./chunk-JAZWWDYQ.js";
import {
  DateFromPipe
} from "./chunk-SUZCL24N.js";
import "./chunk-Q4IHQBE5.js";
import "./chunk-IYY5PYJ5.js";
import "./chunk-DVZ7MXOG.js";
import "./chunk-JRBSDEVI.js";
import "./chunk-IICJGF2V.js";
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
import "./chunk-V6YJ4Z7A.js";
import "./chunk-JHZ5UPYR.js";
import "./chunk-V7K2HRQN.js";
import "./chunk-UENR5XJJ.js";
import "./chunk-Y5MGOXOO.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import {
  MatDialog
} from "./chunk-VRK5F3OU.js";
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
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JFTEBBHC.js";
import "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleAboutComponent, selectors: [["module-about"]], decls: 49, vars: 52, consts: [["edge_desc_template", ""], [1, "p-4"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex-1", "sm:w-1/3"], [1, "border-base-200", "grid", "flex-1", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], ["btn", "", "matRipple", "", 1, "col-span-2", "flex", "w-full", "items-center"], [1, "border-base-200", "flex", "flex-1", "flex-col", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-3", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "p-1"], ["btn", "", "matRipple", "", 1, "m-1", "min-w-36", "flex-1", 3, "click", "disabled"], [1, "text"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "error", "m-1", "min-w-36", "flex-1", 3, "click", "disabled"], [1, "my-4"], [1, "m-auto", "flex", "flex-col", "items-center", "justify-center", "p-8"], [1, "mono"], [1, "bg-success", "text-base-100"], [1, "truncate", "underline", 3, "routerLink"], [1, "w-px", "flex-1"], ["icon", "", "customTooltip", "", "yPosition", "top", "xPosition", "center", 3, "hover", "backdrop", "content"], [1, "border-base-200", "rounded-full", "border"], [1, "border-base-200", "bg-base-100", "pointer-events-none", "max-w-[24rem]", "rounded-sm", "border", "p-2", "shadow-sm"], [1, "bg-base-200", "overflow-hidden", "rounded-xl", "p-2", "text-sm"], ["btn", "", "matRipple", "", 1, "col-span-2", "flex", "w-full", "items-center", 3, "click"], [3, "id", "merge", "settings", "merge_settings"], ["diameter", "48", 1, "mb-4"]], template: function ModuleAboutComponent_Template(rf, ctx) {
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
                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="border-base-200 grid flex-1 gap-2 rounded-sm border p-4"
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
                                            class="border-base-200 rounded-full border"
                                            >info</icon
                                        >
                                    }
                                </button>
                            </div>
                            <ng-template #edge_desc_template>
                                <div
                                    class="border-base-200 bg-base-100 pointer-events-none max-w-[24rem] rounded-sm border p-2 shadow-sm"
                                >
                                    <pre
                                        class="bg-base-200 overflow-hidden rounded-xl p-2 text-sm"
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
                        class="border-base-200 flex flex-1 flex-col rounded-sm border"
                    >
                        <h3
                            class="bg-base-200 w-full rounded-sm px-4 py-3 text-lg font-medium"
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
export {
  ModuleAboutComponent
};
//# sourceMappingURL=chunk-ZP6XAE74.js.map
