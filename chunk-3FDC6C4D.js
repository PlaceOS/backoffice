import {
  SystemStateService
} from "./chunk-ZJEHI7H5.js";
import "./chunk-54PPKEVI.js";
import {
  d
} from "./chunk-5AUNTCZE.js";
import {
  SettingsFormComponent
} from "./chunk-6FPGWUPJ.js";
import "./chunk-N3KDSCFB.js";
import "./chunk-JCPI5EI2.js";
import "./chunk-SXPFG754.js";
import "./chunk-VG52I76Q.js";
import "./chunk-XO75CPSG.js";
import "./chunk-SEAIZ4VF.js";
import {
  SanitizePipe
} from "./chunk-CVTKGGYU.js";
import "./chunk-J533RESC.js";
import "./chunk-RLXVU5XS.js";
import "./chunk-WQDH4FC7.js";
import {
  DateFromPipe
} from "./chunk-5HVRL3YW.js";
import "./chunk-DUBO3IVW.js";
import "./chunk-X6YR5W3O.js";
import "./chunk-FVY2HZHZ.js";
import "./chunk-YOTQ4BLS.js";
import "./chunk-42ELPS7F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DSY7HAXR.js";
import "./chunk-ZMDQYXR3.js";
import "./chunk-DML52F3R.js";
import "./chunk-NFL4XBXL.js";
import "./chunk-W3IBXMGQ.js";
import "./chunk-WBQWWT72.js";
import "./chunk-HNDZUABS.js";
import "./chunk-WBMBQ5VJ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PLD3S2JC.js";
import "./chunk-UX55AMWK.js";
import "./chunk-TMGH7LVN.js";
import "./chunk-2HBTAIG5.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-OSF25IC4.js";
import "./chunk-BGNISMYA.js";
import {
  AsyncHandler
} from "./chunk-KFG47F7M.js";
import "./chunk-6TUHRQL6.js";
import "./chunk-MB6FY2QK.js";
import "./chunk-BUKXKXBA.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-7MGBMVY7.js";
import {
  MatRippleModule
} from "./chunk-WUACCZF3.js";
import {
  TranslatePipe
} from "./chunk-MLPBELPV.js";
import "./chunk-WOZB2ZJ7.js";
import {
  MatRipple
} from "./chunk-F4U4NVRY.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-E55B7SJP.js";
import "./chunk-WQVS62YG.js";
import "./chunk-KWSTWQNB.js";

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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemAboutComponent, selectors: [["system-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 48, vars: 49, consts: [[1, "p-4"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex-1"], [1, "border-base-200", "grid", "w-full", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "border-base-200", "flex", "flex-col", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-3", "text-lg", "font-medium"], [1, "flex", "flex-wrap", "items-center", "p-1"], ["btn", "", "start", "", "matRipple", "", 1, "m-1", "min-w-36", "flex-1", 3, "click"], ["btn", "", "stop", "", "matRipple", "", 1, "inverse", "error", "m-1", "min-w-36", "flex-1", 3, "click"], [1, "text-base-300", "my-4"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], ["target", "_blank", 1, "truncate", "underline", "select-all", 3, "href"], [1, "value", "mono"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "id", "merge", "settings", "merge_settings"], [1, "mb-4", 3, "diameter"]], template: function SystemAboutComponent_Template(rf, ctx) {
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
                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
                <div class="flex-1">
                    <div
                        class="border-base-200 grid w-full gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'7.5rem auto'"
                    >
                        @if (item()?.support_url) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                            </div>
                            <a
                                class="truncate underline select-all"
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
                                class="truncate underline select-all"
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
                    <div
                        class="border-base-200 flex flex-col rounded-sm border"
                    >
                        <h3
                            class="bg-base-200 w-full rounded-sm px-4 py-3 text-lg font-medium"
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
                <hr class="text-base-300 my-4" />
                <div class="border-base-200 w-full rounded-sm border">
                    <h3
                        class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="description() | sanitize"
                    ></div>
                </div>
            }
            <hr class="text-base-300 my-4" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemAboutComponent, { className: "SystemAboutComponent", filePath: "src/app/systems/system-about.component.ts", lineNumber: 237 });
})();
export {
  SystemAboutComponent
};
//# sourceMappingURL=chunk-3FDC6C4D.js.map
