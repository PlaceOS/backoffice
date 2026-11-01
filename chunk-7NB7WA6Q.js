import {
  DriverStateService
} from "./chunk-S6EGAYLX.js";
import {
  MarkdownPipe
} from "./chunk-YBXT3OEI.js";
import {
  SettingsFormComponent
} from "./chunk-WBUKJIF7.js";
import "./chunk-NZD43CGY.js";
import {
  ItemTimestampsComponent
} from "./chunk-SM3C2STY.js";
import "./chunk-YBIBK3UQ.js";
import "./chunk-I2OEFHT5.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-2LGRMIHB.js";
import "./chunk-OUXIFBOV.js";
import "./chunk-YMHTGTAC.js";
import "./chunk-FTR6ETPD.js";
import "./chunk-E3RFBRXX.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-UZLX6WPV.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import {
  Clipboard,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-K5IHFRPQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-6QIICYIK.js";
import "./chunk-GR7PR5Q6.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-WDXKFFYO.js";
import "./chunk-FSFNWGQP.js";
import "./chunk-RY3VY3I7.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-PSLPWDNG.js";
import "./chunk-HAWZID7H.js";
import {
  LoadingLabelDirective
} from "./chunk-2RUCGFPD.js";
import {
  notifyInfo
} from "./chunk-3SL5US3K.js";
import "./chunk-5BJVRHWW.js";
import "./chunk-VLLM34JN.js";
import "./chunk-55LQ6V7M.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-QRPWL2EI.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AJCRFHSH.js";
import {
  TranslatePipe
} from "./chunk-4ZLGHXUI.js";
import {
  i18n
} from "./chunk-XJOCECBM.js";
import "./chunk-J5ZLUQMI.js";
import "./chunk-OTGYPXXQ.js";
import {
  IconComponent
} from "./chunk-NUJGQXME.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import {
  AsyncPipe
} from "./chunk-DKYBNEOC.js";
import {
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/drivers/driver-about.component.ts
var _c0 = (a0) => ["/repositories", a0, "about"];
function DriverAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "a", 17);
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
    \u0275\u0275elementStart(0, "div", 4);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "DRIVERS.DEFAULT_PORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item().default_port, " ");
  }
}
function DriverAboutComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 19);
    \u0275\u0275elementStart(1, "div", 20)(2, "h3", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 22);
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
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("merge", true)("id", ctx_r0.item().id)("settings", ctx_r0.item().settings);
  }
}
function DriverAboutComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 24);
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
  item = this._service.item;
  copyCommit() {
    this._clipboard.copy(this.item()?.commit || "");
    notifyInfo(i18n("COMMON.COMMIT_HASH_COPIED"));
  }
  static \u0275fac = function DriverAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverAboutComponent, selectors: [["driver-about"]], decls: 50, vars: 40, consts: [[1, "p-4"], [1, "mb-4", "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex-1", "sm:w-1/3"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "text-sm", "underline", "select-text", 3, "routerLink"], [1, "mono", "truncate", "text-sm", "select-text"], [3, "created_at", "updated_at"], [1, "flex", "items-center", "overflow-hidden"], ["matRipple", "", 3, "click"], [1, "inline-block", "max-w-full", "truncate", "text-xs", "select-all", 3, "matTooltip"], [1, "mono", "truncate", "text-sm", "select-text", 3, "matTooltip"], [1, "mx-auto", "mt-2", "flex", "items-center", "justify-between", "space-x-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "my-4"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "overflow-hidden", "underline", "select-all"], ["target", "_blank", 1, "mono", "block", "w-full", "truncate", "text-sm", 3, "href"], [1, "mono", "text-sm", "select-text"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "merge", "id", "settings"], ["diameter", "48", 1, "mb-4"]], template: function DriverAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275conditionalCreate(4, DriverAboutComponent_Conditional_4_Template, 6, 5);
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
      \u0275\u0275element(17, "item-timestamps", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 2)(19, "div", 3)(20, "div", 4);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 8)(24, "button", 9);
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_24_listener() {
        return ctx.copyCommit();
      });
      \u0275\u0275elementStart(25, "code", 10);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 4);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 8)(31, "div", 11);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 12)(34, "button", 13);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_34_listener() {
        return ctx.updateDriver();
      });
      \u0275\u0275elementStart(36, "icon");
      \u0275\u0275text(37, "update");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 13);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_38_listener() {
        return ctx.recompile();
      });
      \u0275\u0275elementStart(40, "icon");
      \u0275\u0275text(41, "build");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 13);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_42_listener() {
        return ctx.reload();
      });
      \u0275\u0275elementStart(44, "icon");
      \u0275\u0275text(45, "refresh");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(46, DriverAboutComponent_Conditional_46_Template, 8, 8);
      \u0275\u0275element(47, "hr", 14);
      \u0275\u0275conditionalCreate(48, DriverAboutComponent_Conditional_48_Template, 2, 3, "section")(49, DriverAboutComponent_Conditional_49_Template, 5, 3, "div", 15);
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
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(38, _c0, ctx.item().repository_id));
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
      \u0275\u0275property("matTooltip", ctx.item().commit);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 30, "DRIVERS.FILENAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().file_name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().file_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(35, 32, "COMMON.UPDATE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(39, 34, "DRIVERS.RECOMPILE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(43, 36, "DRIVERS.RELOAD"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.item()?.description ? 46 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item().settings ? 48 : 49);
    }
  }, dependencies: [
    ItemTimestampsComponent,
    LoadingLabelDirective,
    IconComponent,
    MatRippleModule,
    MatRipple,
    SettingsFormComponent,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatProgressSpinner,
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
                                class="mono truncate text-sm select-text"
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
                                default
                                matRipple
                                [matTooltip]="'COMMON.UPDATE' | translate"
                                (click)="updateDriver()"
                            >
                                <icon>update</icon>
                            </button>
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="'DRIVERS.RECOMPILE' | translate"
                                (click)="recompile()"
                            >
                                <icon>build</icon>
                            </button>
                            <button
                                icon
                                default
                                matRipple
                                [matTooltip]="'DRIVERS.RELOAD' | translate"
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
                <section>
                    <a-settings-form
                        [merge]="true"
                        [id]="item().id"
                        [settings]="item().settings"
                    />
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center">
                    <mat-spinner class="mb-4" diameter="48" />
                    <p>{{ 'DRIVERS.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      ItemTimestampsComponent,
      LoadingLabelDirective,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      SettingsFormComponent,
      MatTooltipModule,
      MarkdownPipe,
      RouterModule,
      MatProgressSpinnerModule,
      AsyncPipe
    ], styles: ["/* angular:styles/component:css;dbaa0f367382d68f;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nlabel {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverAboutComponent, { className: "DriverAboutComponent", filePath: "src/app/drivers/driver-about.component.ts", lineNumber: 198 });
})();
export {
  DriverAboutComponent
};
//# debugId=b9434b89-c2db-5b44-afa6-cd912bc250f3
//# sourceMappingURL=chunk-7NB7WA6Q.js.map
