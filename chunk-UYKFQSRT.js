import {
  SystemStateService
} from "./chunk-W3HZZMRA.js";
import "./chunk-356GP3CJ.js";
import {
  MarkdownPipe
} from "./chunk-UZFTQR6C.js";
import "./chunk-RKGB7OTI.js";
import {
  ItemTimestampsComponent
} from "./chunk-IQD63O5A.js";
import "./chunk-D6MJKT74.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-SDERNRDS.js";
import "./chunk-75NRZXVU.js";
import "./chunk-3GPSZOKI.js";
import "./chunk-6O5GBWTJ.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-TQ4VP2CT.js";
import "./chunk-IN2BSCPT.js";
import "./chunk-2HWH2YE2.js";
import {
  LoadingLabelDirective
} from "./chunk-C5JU5DGK.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-PADBWY7W.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-MHAN4HKV.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-Y2BF2IN5.js";
import "./chunk-LD7JHF4N.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import {
  AsyncPipe
} from "./chunk-UAEA3DWF.js";
import {
  Component,
  inject,
  setClassMetadata,
  setClassMetadataAsync,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferOnImmediate,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/system-about.component.ts
var SystemAboutComponent_Defer_32_DepsFn = () => [
  LoadingLabelDirective,
  MatProgressSpinner,
  /* @ts-ignore */
  import("./chunk-TJYO4RM6.js").then((m) => m.SettingsFormComponent),
  TranslatePipe
];
var _c0 = () => [];
function SystemAboutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.SUPPORT_URL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.item()?.support_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item()?.support_url, " ");
  }
}
function SystemAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.BOOKABLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, ctx_r0.item()?.bookable ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function SystemAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
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
function SystemAboutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.PUBLIC"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, ctx_r0.item()?.public ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function SystemAboutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.CODE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item()?.code);
  }
}
function SystemAboutComponent_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r2, " ");
  }
}
function SystemAboutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275repeaterCreate(4, SystemAboutComponent_Conditional_8_For_5_Template, 2, 1, "span", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.SECURITY_GROUPS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.item()?.security_groups);
  }
}
function SystemAboutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "SYSTEMS.EMAIL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + ctx_r0.item()?.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item()?.email);
  }
}
function SystemAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.CAPACITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item()?.capacity);
  }
}
function SystemAboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.MAP_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item()?.map_id, " ");
  }
}
function SystemAboutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "SYSTEMS.PANEL_COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item()?.installed_ui_devices, " ");
  }
}
function SystemAboutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item()?.timezone);
  }
}
function SystemAboutComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 8);
    \u0275\u0275elementStart(1, "div", 15)(2, "h3", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 17);
    \u0275\u0275pipe(6, "markdown");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 6, \u0275\u0275pipeBind1(6, 4, ctx_r0.item()?.description)), \u0275\u0275sanitizeHtml);
  }
}
function SystemAboutComponent_Defer_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const other_settings_value_r3 = \u0275\u0275readContextLet(29);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.item()?.id)("merge", true)("settings", ctx_r0.item()?.settings)("merge_settings", other_settings_value_r3 || \u0275\u0275pureFunction0(4, _c0));
  }
}
function SystemAboutComponent_Defer_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
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
function SystemAboutComponent_Defer_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SystemAboutComponent_Defer_30_Conditional_0_Template, 2, 5, "section")(1, SystemAboutComponent_Defer_30_Conditional_1_Template, 5, 4, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const other_settings_value_r3 = \u0275\u0275readContextLet(29);
    \u0275\u0275conditional(ctx_r0.item()?.settings && other_settings_value_r3 ? 0 : 1);
  }
}
function SystemAboutComponent_DeferPlaceholder_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
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
var SystemAboutComponent = class _SystemAboutComponent {
  _service = inject(SystemStateService);
  /** List of settings for associated modules, drivers and zones */
  other_settings = this._service.associated_settings;
  start = () => this._service.startSystem();
  stop = () => this._service.stopSystem();
  item = this._service.item;
  static \u0275fac = function SystemAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemAboutComponent, selectors: [["system-about"]], decls: 34, vars: 26, consts: [[1, "p-4"], [1, "flex", "flex-col", "gap-2"], [1, "border-base-200", "grid", "w-full", "gap-2", "rounded-sm", "border", "p-4"], [3, "created_at", "updated_at"], [1, "border-base-200", "flex", "gap-2", "rounded-xl", "border", "p-2"], [1, "flex-1", "p-2", "text-lg", "font-medium"], ["icon", "", "default", "", "start", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "stop", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-base-300", "my-4"], [1, "flex", "items-center", "text-sm", "font-medium"], ["target", "_blank", 1, "truncate", "underline", "select-all", 3, "href"], [1, "select-text"], [1, "flex", "flex-wrap", "gap-1"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs", "font-medium", "select-text"], [1, "value", "mono", "select-text"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "id", "merge", "settings", "merge_settings"], [1, "mb-4", 3, "diameter"]], template: function SystemAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, SystemAboutComponent_Conditional_3_Template, 5, 5);
      \u0275\u0275conditionalCreate(4, SystemAboutComponent_Conditional_4_Template, 6, 6);
      \u0275\u0275conditionalCreate(5, SystemAboutComponent_Conditional_5_Template, 6, 6);
      \u0275\u0275conditionalCreate(6, SystemAboutComponent_Conditional_6_Template, 6, 6);
      \u0275\u0275conditionalCreate(7, SystemAboutComponent_Conditional_7_Template, 5, 4);
      \u0275\u0275conditionalCreate(8, SystemAboutComponent_Conditional_8_Template, 6, 3);
      \u0275\u0275conditionalCreate(9, SystemAboutComponent_Conditional_9_Template, 5, 5);
      \u0275\u0275conditionalCreate(10, SystemAboutComponent_Conditional_10_Template, 5, 4);
      \u0275\u0275conditionalCreate(11, SystemAboutComponent_Conditional_11_Template, 5, 4);
      \u0275\u0275conditionalCreate(12, SystemAboutComponent_Conditional_12_Template, 5, 4);
      \u0275\u0275conditionalCreate(13, SystemAboutComponent_Conditional_13_Template, 5, 4);
      \u0275\u0275element(14, "item-timestamps", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 4)(16, "h3", 5);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 6);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275listener("click", function SystemAboutComponent_Template_button_click_19_listener() {
        return ctx.start();
      });
      \u0275\u0275elementStart(21, "icon");
      \u0275\u0275text(22, "play_arrow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 7);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275listener("click", function SystemAboutComponent_Template_button_click_23_listener() {
        return ctx.stop();
      });
      \u0275\u0275elementStart(25, "icon");
      \u0275\u0275text(26, "stop");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(27, SystemAboutComponent_Conditional_27_Template, 8, 8);
      \u0275\u0275element(28, "hr", 8);
      \u0275\u0275declareLet(29);
      \u0275\u0275domTemplate(30, SystemAboutComponent_Defer_30_Template, 2, 1)(31, SystemAboutComponent_DeferPlaceholder_31_Template, 5, 4);
      \u0275\u0275defer(32, 30, SystemAboutComponent_Defer_32_DepsFn, null, 31);
      \u0275\u0275deferOnImmediate();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "7.5rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.support_url ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.email ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.signage ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.public !== void 0 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.code ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.security_groups?.length ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.email ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.capacity ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.map_id ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.installed_ui_devices ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.timezone ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("created_at", ctx.item().created_at)("updated_at", ctx.item().updated_at);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 19, "SYSTEMS.CONTROLS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(20, 21, "SYSTEMS.START"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(24, 23, "SYSTEMS.STOP"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.item()?.description ? 27 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275storeLet(ctx.other_settings());
    }
  }, dependencies: [
    ItemTimestampsComponent,
    LoadingLabelDirective,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    IconComponent,
    TranslatePipe,
    MarkdownPipe,
    AsyncPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=system-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(SystemAboutComponent, () => [
    /* @ts-ignore */
    import("./chunk-TJYO4RM6.js").then((m) => m.SettingsFormComponent)
  ], (SettingsFormComponent) => {
    setClassMetadata(SystemAboutComponent, [{
      type: Component,
      args: [{ selector: "system-about", template: `
        <div class="p-4">
            <section class="flex flex-col gap-2">
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
                        <div class="select-text">
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
                        <div class="select-text">
                            {{ 'COMMON.TRUE' | translate }}
                        </div>
                    }
                    @if (item()?.public !== undefined) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.PUBLIC' | translate }}
                        </div>
                        <div class="select-text">
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
                        <div class="select-text">{{ item()?.code }}</div>
                    }
                    @if (item()?.security_groups?.length) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.SECURITY_GROUPS' | translate }}
                        </div>
                        <div class="flex flex-wrap gap-1">
                            @for (
                                group of item()?.security_groups;
                                track group
                            ) {
                                <span
                                    class="bg-base-200 rounded px-2 py-1 text-xs font-medium select-text"
                                >
                                    {{ group }}
                                </span>
                            }
                        </div>
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
                        <div class="select-text">{{ item()?.capacity }}</div>
                    }
                    @if (item()?.map_id) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.MAP_ID' | translate }}
                        </div>
                        <div class="value mono select-text">
                            {{ item()?.map_id }}
                        </div>
                    }
                    @if (item()?.installed_ui_devices) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                        </div>
                        <div class="select-text">
                            {{ item()?.installed_ui_devices }}
                        </div>
                    }
                    @if (item()?.timezone) {
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.TIMEZONE' | translate }}
                        </div>
                        <div class="select-text">{{ item()?.timezone }}</div>
                    }
                    <item-timestamps
                        [created_at]="item().created_at"
                        [updated_at]="item().updated_at"
                    />
                </div>
                <div class="border-base-200 flex gap-2 rounded-xl border p-2">
                    <h3 class="flex-1 p-2 text-lg font-medium">
                        {{ 'SYSTEMS.CONTROLS' | translate }}
                    </h3>
                    <button
                        icon
                        default
                        start
                        matRipple
                        (click)="start()"
                        [matTooltip]="'SYSTEMS.START' | translate"
                    >
                        <icon>play_arrow</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        stop
                        matRipple
                        (click)="stop()"
                        [matTooltip]="'SYSTEMS.STOP' | translate"
                    >
                        <icon>stop</icon>
                    </button>
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
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item()?.description | markdown | async"
                    ></div>
                </div>
            }
            <hr class="text-base-300 my-4" />
            @let other_settings_value = other_settings();
            <!-- The settings editor is large, so it loads with the settings -->
            @defer (on immediate) {
                @if (item()?.settings && other_settings_value) {
                    <section>
                        <a-settings-form
                            [id]="item()?.id"
                            [merge]="true"
                            [settings]="item()?.settings"
                            [merge_settings]="other_settings_value || []"
                        />
                    </section>
                } @else {
                    <div class="flex flex-col items-center justify-center p-8">
                        <mat-spinner class="mb-4" [diameter]="32" />
                        <p>{{ 'SYSTEMS.LOADING_SETTINGS' | translate }}</p>
                    </div>
                }
            } @placeholder {
                <div class="flex flex-col items-center justify-center p-8">
                    <mat-spinner class="mb-4" [diameter]="32" />
                    <p>{{ 'SYSTEMS.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
        ItemTimestampsComponent,
        LoadingLabelDirective,
        TranslatePipe,
        MarkdownPipe,
        MatProgressSpinnerModule,
        SettingsFormComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        AsyncPipe
      ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/systems/system-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=system-about.component.css.map */\n"] }]
    }], null, null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemAboutComponent, { className: "SystemAboutComponent", filePath: "src/app/systems/system-about.component.ts", lineNumber: 225 });
})();
export {
  SystemAboutComponent
};
//# debugId=0f1e95bb-1fad-5512-b9d8-5206c6e9fbc0
//# sourceMappingURL=chunk-UYKFQSRT.js.map
