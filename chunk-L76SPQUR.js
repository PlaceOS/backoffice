import {
  DriverStateService
} from "./chunk-YRWFCOA3.js";
import "./chunk-X2O3T64J.js";
import {
  MarkdownPipe
} from "./chunk-VINI7ES4.js";
import {
  ItemTimestampsComponent
} from "./chunk-45LMLY72.js";
import {
  SettingsFormComponent
} from "./chunk-PU2OLQZX.js";
import "./chunk-WLBLOLYH.js";
import "./chunk-R4FMIWHE.js";
import "./chunk-J7H74YPM.js";
import "./chunk-KT7PB7AL.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-PCGLPD4F.js";
import "./chunk-EOOX537V.js";
import "./chunk-JTGD42VW.js";
import {
  refocusIfLost
} from "./chunk-2GN5J46I.js";
import "./chunk-GVPYT7HY.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-73ZIQ5ZT.js";
import {
  ActiveItemService
} from "./chunk-BMBCYN44.js";
import "./chunk-5D2EQCRN.js";
import "./chunk-CZ3A2OHY.js";
import "./chunk-ZRL2MCOS.js";
import "./chunk-JBQNBPPI.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-NVIFDAFS.js";
import "./chunk-6PURSEHW.js";
import {
  Clipboard
} from "./chunk-ARF53UMV.js";
import {
  SpinnerComponent
} from "./chunk-24SP3OZG.js";
import "./chunk-HS2B2TZM.js";
import "./chunk-PESDTUFQ.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-RN3AWFUF.js";
import "./chunk-SBKLZZRV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LL56AHAM.js";
import {
  notifySuccess
} from "./chunk-V2X4XHND.js";
import "./chunk-NGPG5OWB.js";
import "./chunk-IDLJ3PCR.js";
import "./chunk-RMI5N2H2.js";
import "./chunk-44FYJ5G4.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import {
  AsyncPipe
} from "./chunk-BRT76G6A.js";
import {
  Component,
  Injector,
  ViewChild,
  inject,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/drivers/driver-about.component.ts
var _c0 = ["settings_section"];
var _c1 = (a0) => ["/repositories", a0, "about"];
function DriverAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "a", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "DRIVERS.DEFAULT_URI"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.item().default_uri, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item().default_uri);
  }
}
function DriverAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "DRIVERS.DEFAULT_PORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item().default_port, " ");
  }
}
function DriverAboutComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 22);
    \u0275\u0275elementStart(1, "div", 23)(2, "h3", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 25);
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
function DriverAboutComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16, 0);
    \u0275\u0275element(2, "a-settings-form", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("merge", true)("id", ctx_r0.item().id)("settings", ctx_r0.item().settings);
  }
}
function DriverAboutComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function DriverAboutComponent_Conditional_49_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retrySettings());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "COMMON.SETTINGS_LOAD_ERROR"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r0.settings_retrying())("aria-disabled", ctx_r0.settings_retrying());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "COMMON.RETRY"), " ");
  }
}
function DriverAboutComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-spinner", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DRIVERS.LOADING_SETTINGS"));
  }
}
var DriverAboutComponent = class _DriverAboutComponent {
  _service = inject(DriverStateService);
  _clipboard = inject(Clipboard);
  _item_service = inject(ActiveItemService);
  /** Whether the settings failed to load */
  settings_error = this._item_service.settings_error;
  _settings_section = viewChild(
    "settings_section",
    ...ngDevMode ? [{ debugName: "_settings_section" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _injector = inject(Injector);
  /** Retry the settings. Focus moves from Retry to the settings that load. */
  async retrySettings() {
    if (!await this._item_service.retrySettings())
      return;
    refocusIfLost(this._injector, () => this._settings_section()?.nativeElement);
  }
  settings_retrying = this._item_service.settings_retrying;
  updateDriver = () => this._service.updateDriver();
  recompile = () => this._service.recompileDriver();
  reload = () => this._service.reloadDriver();
  item = this._service.item;
  copyCommit() {
    this._clipboard.copy(this.item()?.commit || "");
    notifySuccess(i18n("COMMON.COMMIT_HASH_COPIED"));
  }
  static \u0275fac = function DriverAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverAboutComponent, selectors: [["driver-about"]], viewQuery: function DriverAboutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._settings_section, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 51, vars: 40, consts: [["settings_section", ""], [1, "p-4"], [1, "mb-4", "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex-1", "sm:w-1/3"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "text-sm", "underline", "select-text", 3, "routerLink"], [1, "mono", "truncate", "text-sm", "select-text"], [3, "created_at", "updated_at"], [1, "flex", "items-center", "overflow-hidden"], ["ripple", "", 3, "click"], [1, "inline-block", "max-w-full", "truncate", "text-xs", "select-all", 3, "appTooltip"], [1, "mono", "truncate", "text-sm", "select-text", 3, "appTooltip"], [1, "mx-auto", "mt-2", "flex", "items-center", "justify-between", "space-x-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip"], [1, "my-4"], ["tabindex", "-1", 1, "outline-none", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-solid"], ["role", "alert", 1, "flex", "flex-col", "items-center", "gap-4", "p-8"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "overflow-hidden", "underline", "select-all"], ["target", "_blank", 1, "mono", "block", "w-full", "truncate", "text-sm", 3, "href"], [1, "mono", "text-sm", "select-text"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "merge", "id", "settings"], ["btn", "", "type", "button", 3, "click"], ["diameter", "48", 1, "mb-4"]], template: function DriverAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275conditionalCreate(4, DriverAboutComponent_Conditional_4_Template, 6, 5);
      \u0275\u0275conditionalCreate(5, DriverAboutComponent_Conditional_5_Template, 5, 4);
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "a", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "item-timestamps", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 3)(19, "div", 4)(20, "div", 5);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 9)(24, "button", 10);
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_24_listener() {
        return ctx.copyCommit();
      });
      \u0275\u0275elementStart(25, "code", 11);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 5);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 9)(31, "div", 12);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 13)(34, "button", 14);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_34_listener() {
        return ctx.updateDriver();
      });
      \u0275\u0275elementStart(36, "icon");
      \u0275\u0275text(37, "update");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 14);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_38_listener() {
        return ctx.recompile();
      });
      \u0275\u0275elementStart(40, "icon");
      \u0275\u0275text(41, "build");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 14);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_42_listener() {
        return ctx.reload();
      });
      \u0275\u0275elementStart(44, "icon");
      \u0275\u0275text(45, "refresh");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(46, DriverAboutComponent_Conditional_46_Template, 8, 8);
      \u0275\u0275element(47, "hr", 15);
      \u0275\u0275conditionalCreate(48, DriverAboutComponent_Conditional_48_Template, 3, 3, "section", 16)(49, DriverAboutComponent_Conditional_49_Template, 7, 8, "div", 17)(50, DriverAboutComponent_Conditional_50_Template, 5, 3, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "6rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().default_uri ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().default_port ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 24, "REPOS.SINGULAR"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(38, _c1, ctx.item().repository_id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().repository_id);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 26, "DRIVERS.MODULE_NAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item()?.module_name, " ");
      \u0275\u0275advance();
      \u0275\u0275property("created_at", ctx.item().created_at)("updated_at", ctx.item().updated_at);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("appTooltip", ctx.item().commit);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 30, "DRIVERS.FILENAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("appTooltip", ctx.item().file_name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().file_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(35, 32, "COMMON.UPDATE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(39, 34, "DRIVERS.RECOMPILE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(43, 36, "DRIVERS.RELOAD"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.item()?.description ? 46 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item().settings ? 48 : ctx.settings_error() ? 49 : 50);
    }
  }, dependencies: [
    SpinnerComponent,
    TooltipDirective,
    ItemTimestampsComponent,
    IconComponent,
    SettingsFormComponent,
    RouterModule,
    RouterLink,
    TranslatePipe,
    MarkdownPipe,
    AsyncPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverAboutComponent, [{
    type: Component,
    args: [{ selector: "driver-about", template: `
        <div class="p-4">
            <section
                class="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="border-base-200 grid gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'6rem auto'"
                    >
                        @if (item().default_uri) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_URI' | translate }}
                            </div>
                            <div class="overflow-hidden underline select-all">
                                <a
                                    class="mono block w-full truncate text-sm"
                                    [href]="item().default_uri"
                                    target="_blank"
                                    >{{ item().default_uri }}</a
                                >
                            </div>
                        }
                        @if (item().default_port) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                            </div>
                            <div class="mono text-sm select-text">
                                {{ item().default_port }}
                            </div>
                        }
                        <div class="flex items-center text-sm font-medium">
                            {{ 'REPOS.SINGULAR' | translate }}
                        </div>
                        <div>
                            <a
                                [routerLink]="[
                                    '/repositories',
                                    item().repository_id,
                                    'about',
                                ]"
                                class="mono text-sm underline select-text"
                            >
                                {{ item().repository_id }}</a
                            >
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                        </div>
                        <div class="mono truncate text-sm select-text">
                            {{ item()?.module_name }}
                        </div>
                        <item-timestamps
                            [created_at]="item().created_at"
                            [updated_at]="item().updated_at"
                        />
                    </div>
                </div>
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="border-base-200 grid gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.GIT_COMMIT' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <button ripple (click)="copyCommit()">
                                <code
                                    class="inline-block max-w-full truncate text-xs select-all"
                                    [appTooltip]="item().commit"
                                >
                                    {{ item().commit }}
                                </code>
                            </button>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.FILENAME' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <div
                                class="mono truncate text-sm select-text"
                                [appTooltip]="item().file_name"
                            >
                                {{ item().file_name }}
                            </div>
                        </div>
                        <div
                            class="mx-auto mt-2 flex items-center justify-between space-x-2"
                        >
                            <button
                                icon
                                default
                                ripple
                                [appTooltip]="'COMMON.UPDATE' | translate"
                                (click)="updateDriver()"
                            >
                                <icon>update</icon>
                            </button>
                            <button
                                icon
                                default
                                ripple
                                [appTooltip]="'DRIVERS.RECOMPILE' | translate"
                                (click)="recompile()"
                            >
                                <icon>build</icon>
                            </button>
                            <button
                                icon
                                default
                                ripple
                                [appTooltip]="'DRIVERS.RELOAD' | translate"
                                (click)="reload()"
                            >
                                <icon>refresh</icon>
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
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item()?.description | markdown | async"
                    ></div>
                </div>
            }
            <hr class="my-4" />
            @if (item().settings) {
                <section
                    #settings_section
                    tabindex="-1"
                    class="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid"
                >
                    <a-settings-form
                        [merge]="true"
                        [id]="item().id"
                        [settings]="item().settings"
                    />
                </section>
            } @else if (settings_error()) {
                <div role="alert" class="flex flex-col items-center gap-4 p-8">
                    <p>{{ 'COMMON.SETTINGS_LOAD_ERROR' | translate }}</p>
                    <button
                        btn
                        type="button"
                        [attr.aria-busy]="settings_retrying()"
                        [attr.aria-disabled]="settings_retrying()"
                        (click)="retrySettings()"
                    >
                        {{ 'COMMON.RETRY' | translate }}
                    </button>
                </div>
            } @else {
                <div class="flex flex-col items-center justify-center">
                    <app-spinner class="mb-4" diameter="48" />
                    <p>{{ 'DRIVERS.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      SpinnerComponent,
      TooltipDirective,
      ItemTimestampsComponent,
      IconComponent,
      TranslatePipe,
      SettingsFormComponent,
      MarkdownPipe,
      RouterModule,
      AsyncPipe
    ], styles: ["/* angular:styles/component:css;dbaa0f367382d68f;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nlabel {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */\n"] }]
  }], null, { _settings_section: [{ type: ViewChild, args: ["settings_section", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverAboutComponent, { className: "DriverAboutComponent", filePath: "src/app/drivers/driver-about.component.ts", lineNumber: 219 });
})();
export {
  DriverAboutComponent
};
//# debugId=3cc0275e-f78a-59f1-8410-f45a3055f739
//# sourceMappingURL=chunk-L76SPQUR.js.map
