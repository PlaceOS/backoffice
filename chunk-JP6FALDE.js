import {
  SystemStateService
} from "./chunk-TFZ6JD5W.js";
import "./chunk-O55L3HS3.js";
import {
  MarkdownPipe
} from "./chunk-MHZOMLIX.js";
import {
  SettingsFormComponent
} from "./chunk-OQF4GMOL.js";
import "./chunk-7YOPAQU7.js";
import "./chunk-372LIGLY.js";
import "./chunk-7AZATXEA.js";
import "./chunk-3DZPGF7T.js";
import "./chunk-Y3CQA2TO.js";
import "./chunk-SN75FY2W.js";
import "./chunk-ASQIQVXN.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-YKN47ASX.js";
import "./chunk-RYVBUGYR.js";
import "./chunk-OPJ4GK76.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-ATLVPPFH.js";
import {
  DateFromPipe
} from "./chunk-V2KTABQV.js";
import "./chunk-CNKSMWEA.js";
import "./chunk-BRIEIAFA.js";
import "./chunk-JVWLK6IW.js";
import "./chunk-4YCYXKWG.js";
import "./chunk-5PVSDZF5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-PQ3GYMIP.js";
import "./chunk-4UFCPSAD.js";
import "./chunk-L7NLRXHN.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-COKN6TJC.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-EBZ2J7XZ.js";
import "./chunk-HZ4CW3MH.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-23LALMM3.js";
import "./chunk-YM2QXH2N.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-QMLF3LMQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-YKNMYZHI.js";
import "./chunk-7WER3E3M.js";
import "./chunk-VMI4ROST.js";
import "./chunk-KD54PHOX.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-DBSO33GH.js";
import "./chunk-KP7S2BKY.js";
import "./chunk-XJIIZKFA.js";
import "./chunk-GQLTM7WR.js";
import {
  MatRippleModule
} from "./chunk-YAA5LSBH.js";
import "./chunk-LVMCBOCB.js";
import "./chunk-2JVXWOZG.js";
import {
  TranslatePipe
} from "./chunk-MLQ2ZCKY.js";
import "./chunk-Y2VDX4KN.js";
import {
  IconComponent
} from "./chunk-Z4IGVH3U.js";
import "./chunk-FFJ3WN6R.js";
import {
  MatRipple
} from "./chunk-5GIP5KW2.js";
import {
  AsyncPipe,
  DatePipe
} from "./chunk-J2PUVZQM.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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
} from "./chunk-2GWPJS4J.js";
import "./chunk-KWSTWQNB.js";

// src/app/systems/system-about.component.ts
var _c0 = () => [];
function SystemAboutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 12);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    \u0275\u0275elementStart(0, "span", 15);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, SystemAboutComponent_Conditional_8_For_5_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIdentity);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 12);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
function SystemAboutComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 10);
    \u0275\u0275elementStart(1, "div", 17)(2, "h3", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 19);
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
function SystemAboutComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const other_settings_value_r3 = \u0275\u0275readContextLet(46);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r0.item()?.id)("merge", true)("settings", ctx_r0.item()?.settings)("merge_settings", other_settings_value_r3 || \u0275\u0275pureFunction0(4, _c0));
  }
}
function SystemAboutComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 21);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemAboutComponent, selectors: [["system-about"]], decls: 49, vars: 51, consts: [[1, "p-4"], [1, "flex", "flex-col", "gap-2"], [1, "border-base-200", "grid", "w-full", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 1, "select-text", 3, "matTooltip"], [1, "border-base-200", "flex", "gap-2", "rounded-xl", "border", "p-2"], [1, "flex-1", "p-2", "text-lg", "font-medium"], ["icon", "", "default", "", "start", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "stop", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-base-300", "my-4"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], ["target", "_blank", 1, "truncate", "underline", "select-all", 3, "href"], [1, "select-text"], [1, "flex", "flex-wrap", "gap-1"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs", "font-medium", "select-text"], [1, "value", "mono", "select-text"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "id", "merge", "settings", "merge_settings"], [1, "mb-4", 3, "diameter"]], template: function SystemAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(14, "div", 3);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 4)(18, "span", 5);
      \u0275\u0275pipe(19, "date");
      \u0275\u0275pipe(20, "date");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 3);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 4)(27, "span", 5);
      \u0275\u0275pipe(28, "date");
      \u0275\u0275pipe(29, "date");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "dateFrom");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 6)(33, "h3", 7);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 8);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275listener("click", function SystemAboutComponent_Template_button_click_36_listener() {
        return ctx.start();
      });
      \u0275\u0275elementStart(38, "icon");
      \u0275\u0275text(39, "play_arrow");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "button", 9);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275listener("click", function SystemAboutComponent_Template_button_click_40_listener() {
        return ctx.stop();
      });
      \u0275\u0275elementStart(42, "icon");
      \u0275\u0275text(43, "stop");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(44, SystemAboutComponent_Conditional_44_Template, 8, 8);
      \u0275\u0275element(45, "hr", 10);
      \u0275\u0275declareLet(46);
      \u0275\u0275conditionalCreate(47, SystemAboutComponent_Conditional_47_Template, 2, 5, "section")(48, SystemAboutComponent_Conditional_48_Template, 5, 4, "div", 11);
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
      \u0275\u0275conditional(ctx.item()?.email ? 6 : -1);
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
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(19, 26, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(20, 29, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 32, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 34, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(28, 36, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(29, 39, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 42, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 44, "SYSTEMS.CONTROLS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(37, 46, "SYSTEMS.START"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(41, 48, "SYSTEMS.STOP"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.item()?.description ? 44 : -1);
      \u0275\u0275advance(2);
      const other_settings_value_r4 = \u0275\u0275storeLet(ctx.other_settings());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.settings && other_settings_value_r4 ? 47 : 48);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsFormComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    IconComponent,
    TranslatePipe,
    DateFromPipe,
    MarkdownPipe,
    AsyncPipe,
    DatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=system-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemAboutComponent, [{
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
                    @if (item()?.email) {
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
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            class="select-text"
                            [matTooltip]="
                                (item().created_at * 1000
                                    | date: 'mediumDate') +
                                ', ' +
                                (item().created_at * 1000 | date: 'shortTime')
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
                            class="select-text"
                            [matTooltip]="
                                (item().updated_at * 1000
                                    | date: 'mediumDate') +
                                ', ' +
                                (item().updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item().updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
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
        </div>
    `, imports: [
      TranslatePipe,
      DateFromPipe,
      MarkdownPipe,
      MatProgressSpinnerModule,
      SettingsFormComponent,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      AsyncPipe,
      DatePipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/systems/system-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=system-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemAboutComponent, { className: "SystemAboutComponent", filePath: "src/app/systems/system-about.component.ts", lineNumber: 246 });
})();
export {
  SystemAboutComponent
};
//# sourceMappingURL=chunk-JP6FALDE.js.map
