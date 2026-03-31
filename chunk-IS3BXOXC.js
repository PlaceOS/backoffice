import {
  RepositoriesStateService
} from "./chunk-JDRIWEIO.js";
import {
  d
} from "./chunk-OMHAHFWO.js";
import {
  SanitizePipe
} from "./chunk-OBDMV7NF.js";
import "./chunk-J533RESC.js";
import "./chunk-746AOIKH.js";
import "./chunk-GDO2G3FK.js";
import "./chunk-H3YHW52A.js";
import {
  DateFromPipe
} from "./chunk-Q3URFPAM.js";
import "./chunk-L6DCBZLR.js";
import "./chunk-YC3GB3RC.js";
import {
  toSignal
} from "./chunk-C4UNQ5W7.js";
import "./chunk-ZNMJTVKP.js";
import "./chunk-XGNXBQYI.js";
import "./chunk-E2L3SP5U.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IV4O2CJ5.js";
import "./chunk-3JUEKOAR.js";
import "./chunk-OVM667NW.js";
import "./chunk-YJMQ5OMK.js";
import "./chunk-W3ZPEK3R.js";
import "./chunk-K33FZYPE.js";
import "./chunk-UQKRVE72.js";
import "./chunk-HRGU4UAV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XA66LDVX.js";
import "./chunk-RBWTFXTK.js";
import "./chunk-YE5D4VBM.js";
import "./chunk-3E63IAPK.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WIRQ5XQH.js";
import "./chunk-6ACE75MC.js";
import "./chunk-4LE2PDCO.js";
import "./chunk-VTQCDJGL.js";
import {
  SafePipe
} from "./chunk-3SG4KASH.js";
import "./chunk-E6OTVR3E.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-IOTEGI4H.js";
import {
  MatRippleModule
} from "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe
} from "./chunk-S7TGCPIQ.js";
import "./chunk-K6WIXX3Q.js";
import {
  MatRipple
} from "./chunk-ECV3GDTS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMUOHSRV.js";
import {
  Yr,
  map
} from "./chunk-U265RLGW.js";
import "./chunk-VYXW4D3Z.js";

// src/app/repositories/repository-about.component.ts
function RepositoryAboutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REPOS.FOLDER_NAME_EMPTY"), " ");
  }
}
function RepositoryAboutComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function RepositoryAboutComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.commit(), ") ");
  }
}
function RepositoryAboutComponent_Conditional_62_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.GIT_PULL_LATEST"), " ");
  }
}
function RepositoryAboutComponent_Conditional_62_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 18);
  }
}
function RepositoryAboutComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function RepositoryAboutComponent_Conditional_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pullLatestCommit());
    });
    \u0275\u0275conditionalCreate(1, RepositoryAboutComponent_Conditional_62_Conditional_1_Template, 2, 3)(2, RepositoryAboutComponent_Conditional_62_Conditional_2_Template, 1, 0, "mat-spinner", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.pulling());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.pulling() ? 1 : 2);
  }
}
function RepositoryAboutComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 19);
    \u0275\u0275elementStart(1, "div", 20)(2, "h3", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 22);
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
var RepositoryAboutComponent = class _RepositoryAboutComponent {
  _service = inject(RepositoriesStateService);
  /** Whether the latest commit is being pulled on the server */
  pulling = signal(false, ...ngDevMode ? [{ debugName: "pulling" }] : []);
  commit = toSignal(this._service.commit, {
    initialValue: ""
  });
  item = toSignal(this._service.item.pipe(map((item) => item)), {
    initialValue: void 0
  });
  local_url = computed(() => this.item()?.type === Yr.Interface ? `${location.origin}/${this.item()?.folder_name}/` : `${location.hash}`, ...ngDevMode ? [{ debugName: "local_url" }] : []);
  repo_uri = computed(() => this.item()?.uri.replace(/\/[a-zA-Z0-9\-.:]*@/, "/...@"), ...ngDevMode ? [{ debugName: "repo_uri" }] : []);
  is_interface = computed(() => this.item()?.type === Yr.Interface, ...ngDevMode ? [{ debugName: "is_interface" }] : []);
  description = computed(() => d(this.item()?.description || "", { async: false }), ...ngDevMode ? [{ debugName: "description" }] : []);
  /**
   * Send request to server to pull the latest commit for the active repository
   */
  async pullLatestCommit() {
    this.pulling.set(true);
    await this._service.pullLatestCommit();
    this.pulling.set(false);
  }
  static \u0275fac = function RepositoryAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoryAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryAboutComponent, selectors: [["repository-about"]], decls: 64, vars: 72, consts: [[1, "mb-4", "flex", "space-x-2"], [1, "w-1/3", "flex-1"], [1, "border-base-200", "grid", "gap-4", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "select-all"], ["target", "_blank", 3, "href"], [1, "opacity-30"], [1, "flex", "items-center", "font-mono", "text-sm"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "border-base-200", "grid", "gap-4", "overflow-hidden", "rounded-sm", "border", "p-4"], [1, "overflow-hidden", "underline", "select-all"], ["target", "_blank", 1, "block", "w-full", "truncate", 3, "href"], [1, "flex", "items-center", "overflow-hidden"], [1, "inline-block", "max-w-full", "truncate", "text-xs", 3, "matTooltip"], [1, "mono", "wrap-break-word", "select-text"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "disabled"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "click", "disabled"], ["diameter", "32"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"]], template: function RepositoryAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 4)(13, "a", 5);
      \u0275\u0275text(14);
      \u0275\u0275conditionalCreate(15, RepositoryAboutComponent_Conditional_15_Template, 3, 3, "span", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 3);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7);
      \u0275\u0275text(20);
      \u0275\u0275conditionalCreate(21, RepositoryAboutComponent_Conditional_21_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 3);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "span", 9);
      \u0275\u0275pipe(27, "date");
      \u0275\u0275pipe(28, "date");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 3);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 8)(35, "span", 9);
      \u0275\u0275pipe(36, "date");
      \u0275\u0275pipe(37, "date");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 1)(41, "div", 10)(42, "div", 3);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 11)(46, "a", 12);
      \u0275\u0275pipe(47, "safe");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 3);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 13)(53, "code", 14);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 3);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 13)(59, "code", 14);
      \u0275\u0275text(60);
      \u0275\u0275conditionalCreate(61, RepositoryAboutComponent_Conditional_61_Template, 2, 1, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(62, RepositoryAboutComponent_Conditional_62_Template, 3, 2, "button", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(63, RepositoryAboutComponent_Conditional_63_Template, 7, 6);
    }
    if (rf & 2) {
      let tmp_30_0;
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 35, "REPOS.FIELD_TYPE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 37, ctx.is_interface() ? "REPOS.INTERFACE_REPO" : "REPOS.DRIVER_REPO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 39, "REPOS.FOLDER_NAME"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("underline", ctx.item().type === "interface")("pointer-events-none", ctx.item().type !== "interface");
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.local_url(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().folder_name, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.item().folder_name ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 41, "REPOS.ROOT_PATH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item().root_path, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().root_path === "" ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 43, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(27, 45, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(28, 48, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 51, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 53, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(36, 55, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(37, 58, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 61, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "6.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 63, "REPOS.URI"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", \u0275\u0275pipeBind2(47, 65, ctx.item().uri, "url"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.repo_uri() || "No URI set");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 68, "COMMON.GIT_BRANCH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().branch);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().branch, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 70, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? ctx.commit() : ctx.item().commit_hash);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit_hash || "HEAD", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.is_interface() ? 62 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_30_0 = ctx.item()) == null ? null : tmp_30_0.description) ? 63 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    DatePipe,
    SanitizePipe,
    TranslatePipe,
    SafePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--mono-font);\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryAboutComponent, [{
    type: Component,
    args: [{ selector: "repository-about", template: `
        <section class="mb-4 flex space-x-2">
            <div class="w-1/3 flex-1">
                <div
                    class="border-base-200 grid gap-4 rounded-sm border p-4"
                    [style.gridTemplateColumns]="'5.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.FIELD_TYPE' | translate }}
                    </div>
                    <div>
                        {{
                            (is_interface()
                                ? 'REPOS.INTERFACE_REPO'
                                : 'REPOS.DRIVER_REPO'
                            ) | translate
                        }}
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.FOLDER_NAME' | translate }}
                    </div>
                    <div
                        class="select-all"
                        [class.underline]="item().type === 'interface'"
                        [class.pointer-events-none]="
                            item().type !== 'interface'
                        "
                    >
                        <a [href]="local_url()" target="_blank">
                            {{ item().folder_name }}
                            @if (!item().folder_name) {
                                <span class="opacity-30">
                                    {{ 'REPOS.FOLDER_NAME_EMPTY' | translate }}
                                </span>
                            }
                        </a>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.ROOT_PATH' | translate }}
                    </div>
                    <div class="flex items-center font-mono text-sm">
                        {{ item().root_path }}
                        @if (item().root_path === '') {
                            <span class="opacity-30">Not set</span>
                        }
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
            </div>
            <div class="w-1/3 flex-1">
                <div
                    class="border-base-200 grid gap-4 overflow-hidden rounded-sm border p-4"
                    [style.gridTemplateColumns]="'6.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.URI' | translate }}
                    </div>
                    <div class="overflow-hidden underline select-all">
                        <a
                            class="block w-full truncate"
                            [href]="item().uri | safe: 'url'"
                            target="_blank"
                            >{{ repo_uri() || 'No URI set' }}</a
                        >
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_BRANCH' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="item().branch"
                        >
                            {{ item().branch }}
                        </code>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_COMMIT' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="
                                commit() && commit() !== item().commit_hash
                                    ? commit()
                                    : item().commit_hash
                            "
                        >
                            {{ item().commit_hash || 'HEAD' }}
                            @if (commit() && commit() !== item().commit_hash) {
                                <span class="mono wrap-break-word select-text">
                                    ({{ commit() }})
                                </span>
                            }
                        </code>
                    </div>
                    @if (is_interface()) {
                        <button
                            btn
                            matRipple
                            class="col-span-2 w-full"
                            [disabled]="pulling()"
                            (click)="pullLatestCommit()"
                        >
                            @if (!pulling()) {
                                {{ 'COMMON.GIT_PULL_LATEST' | translate }}
                            } @else {
                                <mat-spinner diameter="32"></mat-spinner>
                            }
                        </button>
                    }
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
    `, imports: [
      CommonModule,
      SanitizePipe,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      SafePipe,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;5f07c17d32b664473205b0ab367d8c0e96f539f2bf6f3b78e6797189a5211777;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n.mono {\n  font-family: var(--mono-font);\n}\nlabel {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryAboutComponent, { className: "RepositoryAboutComponent", filePath: "src/app/repositories/repository-about.component.ts", lineNumber: 206 });
})();
export {
  RepositoryAboutComponent
};
//# sourceMappingURL=chunk-IS3BXOXC.js.map
