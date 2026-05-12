import {
  MarkdownPipe
} from "./chunk-LWUOVNQF.js";
import {
  DriverStateService
} from "./chunk-JONOB7GR.js";
import {
  SettingsFormComponent
} from "./chunk-TKVNOWZO.js";
import "./chunk-BRRQL4FE.js";
import "./chunk-QMR3QSIY.js";
import "./chunk-QISDDF6J.js";
import "./chunk-VQW2HFVE.js";
import "./chunk-NIAA2M2R.js";
import "./chunk-J533RESC.js";
import "./chunk-YTLPGLGM.js";
import "./chunk-34ODANO2.js";
import "./chunk-RB2UY45D.js";
import {
  DateFromPipe
} from "./chunk-E623OSGK.js";
import {
  Clipboard
} from "./chunk-VK5UWEUQ.js";
import "./chunk-EGHGC3TW.js";
import {
  toSignal
} from "./chunk-2F4GBHID.js";
import "./chunk-UUEELBDU.js";
import "./chunk-ESAUSKTX.js";
import "./chunk-MMULO3JK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-NJCBGYYZ.js";
import "./chunk-YOYAXT2N.js";
import "./chunk-4VVZIYIL.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-YWMKQIZF.js";
import "./chunk-WERYLKHT.js";
import "./chunk-2DAO6TZL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PTV22NR2.js";
import "./chunk-53YUD5GD.js";
import "./chunk-TR5YLCJD.js";
import "./chunk-EAFGUPDC.js";
import "./chunk-CU2UX3Q2.js";
import "./chunk-VVQLSYGJ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-LU7L7WA4.js";
import "./chunk-HTRPVLZU.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import "./chunk-2JVXCORR.js";
import "./chunk-KPCJPWPY.js";
import {
  MatRippleModule
} from "./chunk-GSLV6Z53.js";
import "./chunk-6EJMXVZR.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-7Y3SYYGI.js";
import "./chunk-TQHEFPKA.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-PH5CZKYC.js";
import "./chunk-EVFMGPO2.js";
import {
  MatRipple
} from "./chunk-TRQYP6G6.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6NLD6HWW.js";
import {
  map
} from "./chunk-QVNOCU2N.js";
import "./chunk-KWSTWQNB.js";

// src/app/drivers/driver-about.component.ts
var _c0 = (a0) => ["/repositories", a0, "about"];
function DriverAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "a", 20);
    \u0275\u0275pipe(5, "safe");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "DRIVERS.DEFAULT_URI"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 5, ctx_r0.item().default_uri, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().default_uri);
  }
}
function DriverAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
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
function DriverAboutComponent_Conditional_63_Template(rf, ctx) {
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
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 6, \u0275\u0275pipeBind1(6, 4, (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.description)), \u0275\u0275sanitizeHtml);
  }
}
function DriverAboutComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("merge", true)("id", ctx_r0.item().id)("settings", ctx_r0.item().settings);
  }
}
function DriverAboutComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 27);
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
  updateDriver = () => this._service.updateDriver();
  recompile = () => this._service.recompileDriver();
  reload = () => this._service.reloadDriver();
  viewErrors = () => this._service.viewError();
  item = toSignal(this._service.item.pipe(map((item) => item)), {
    initialValue: void 0
  });
  copyCommit() {
    this._clipboard.copy(this.item()?.commit || "");
    notifyInfo(i18n("COMMON.COMMIT_HASH_COPIED"));
  }
  static \u0275fac = function DriverAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverAboutComponent, selectors: [["driver-about"]], decls: 67, vars: 64, consts: [[1, "p-4"], [1, "mb-4", "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex-1", "sm:w-1/3"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "text-sm", "underline", 3, "routerLink"], [1, "mono", "truncate", "text-sm"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "border-base-200", "grid", "gap-4", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "overflow-hidden"], ["matRipple", "", 3, "click"], [1, "inline-block", "max-w-full", "truncate", "text-xs", "select-all", 3, "matTooltip"], [1, "mono", "truncate", "text-sm", 3, "matTooltip"], [1, "mx-auto", "mt-2", "flex", "items-center", "justify-between", "space-x-2"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "my-4"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "overflow-hidden", "underline", "select-all"], ["target", "_blank", 1, "mono", "block", "w-full", "truncate", "text-sm", 3, "href"], [1, "mono", "text-sm"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "merge", "id", "settings"], ["diameter", "48", 1, "mb-4"]], template: function DriverAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275conditionalCreate(4, DriverAboutComponent_Conditional_4_Template, 7, 8);
      \u0275\u0275conditionalCreate(5, DriverAboutComponent_Conditional_5_Template, 5, 4);
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "a", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 4);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "span", 8);
      \u0275\u0275pipe(22, "date");
      \u0275\u0275pipe(23, "date");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 4);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 7)(30, "span", 8);
      \u0275\u0275pipe(31, "date");
      \u0275\u0275pipe(32, "date");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 2)(36, "div", 9)(37, "div", 4);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 10)(41, "button", 11);
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_41_listener() {
        return ctx.copyCommit();
      });
      \u0275\u0275elementStart(42, "code", 12);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 4);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 10)(48, "div", 13);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 14)(51, "button", 15);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_51_listener() {
        return ctx.updateDriver();
      });
      \u0275\u0275elementStart(53, "icon", 16);
      \u0275\u0275text(54, "update");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "button", 15);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_55_listener() {
        return ctx.recompile();
      });
      \u0275\u0275elementStart(57, "icon", 16);
      \u0275\u0275text(58, "build");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "button", 15);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_59_listener() {
        return ctx.reload();
      });
      \u0275\u0275elementStart(61, "icon", 16);
      \u0275\u0275text(62, "refresh");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(63, DriverAboutComponent_Conditional_63_Template, 8, 8);
      \u0275\u0275element(64, "hr", 17);
      \u0275\u0275conditionalCreate(65, DriverAboutComponent_Conditional_65_Template, 2, 3, "section")(66, DriverAboutComponent_Conditional_66_Template, 5, 3, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_24_0;
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "6rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().default_uri ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().default_port ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 28, "REPOS.SINGULAR"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(62, _c0, ctx.item().repository_id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().repository_id);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 30, "DRIVERS.MODULE_NAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx.item()) == null ? null : tmp_7_0.module_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 32, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(22, 34, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(23, 37, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 40, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 42, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(31, 44, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(32, 47, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 50, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 52, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", ctx.item().commit);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 54, "DRIVERS.FILENAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().file_name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().file_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(52, 56, "COMMON.UPDATE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(56, 58, "DRIVERS.RECOMPILE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(60, 60, "DRIVERS.RELOAD"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(((tmp_24_0 = ctx.item()) == null ? null : tmp_24_0.description) ? 63 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item().settings ? 65 : 66);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    SettingsFormComponent,
    MatTooltipModule,
    MatTooltip,
    CommonModule,
    RouterModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    TranslatePipe,
    AsyncPipe,
    DatePipe,
    DateFromPipe,
    MarkdownPipe,
    SafePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */"] });
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
                                    [href]="item().default_uri | safe: 'url'"
                                    target="_blank"
                                    >{{ item().default_uri }}</a
                                >
                            </div>
                        }
                        @if (item().default_port) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                            </div>
                            <div class="mono text-sm">
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
                                class="mono text-sm underline"
                            >
                                {{ item().repository_id }}</a
                            >
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                        </div>
                        <div class="mono truncate text-sm">
                            {{ item()?.module_name }}
                        </div>
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
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="border-base-200 grid gap-4 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.GIT_COMMIT' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <button matRipple (click)="copyCommit()">
                                <code
                                    class="inline-block max-w-full truncate text-xs select-all"
                                    [matTooltip]="item().commit"
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
                                class="mono truncate text-sm"
                                [matTooltip]="item().file_name"
                            >
                                {{ item().file_name }}
                            </div>
                        </div>
                        <div
                            class="mx-auto mt-2 flex items-center justify-between space-x-2"
                        >
                            <button
                                icon
                                matRipple
                                [matTooltip]="'COMMON.UPDATE' | translate"
                                (click)="updateDriver()"
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            >
                                <icon class="text-2xl">update</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'DRIVERS.RECOMPILE' | translate"
                                (click)="recompile()"
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            >
                                <icon class="text-2xl">build</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'DRIVERS.RELOAD' | translate"
                                (click)="reload()"
                                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                            >
                                <icon class="text-2xl">refresh</icon>
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
                        [innerHTML]="item()?.description | markdown | async"
                    ></div>
                </div>
            }
            <hr class="my-4" />
            @if (item().settings) {
                <section>
                    <a-settings-form
                        [merge]="true"
                        [id]="item().id"
                        [settings]="item().settings"
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center">
                    <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                    <p>{{ 'DRIVERS.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      SettingsFormComponent,
      MatTooltipModule,
      CommonModule,
      DateFromPipe,
      MarkdownPipe,
      RouterModule,
      SafePipe,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;2341d022eeccbfbc301bc2dca3b9f0bfae8d7ab646528f04d01a78a95a40d258;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nlabel {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverAboutComponent, { className: "DriverAboutComponent", filePath: "src/app/drivers/driver-about.component.ts", lineNumber: 231 });
})();
export {
  DriverAboutComponent
};
//# sourceMappingURL=chunk-CQCISCC4.js.map
