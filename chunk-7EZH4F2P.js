import {
  RepositoriesStateService
} from "./chunk-KA5HISWC.js";
import {
  MarkdownPipe
} from "./chunk-2RBAVCLC.js";
import "./chunk-BSMKQVNX.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-XDPTKZ2J.js";
import "./chunk-UJLZHD3F.js";
import "./chunk-5EBMUX3Z.js";
import "./chunk-C7NP5PYP.js";
import {
  DateFromPipe
} from "./chunk-J5PRPV2J.js";
import "./chunk-KQ433EDT.js";
import "./chunk-JZPASCCB.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-64N44YTD.js";
import "./chunk-ZHVO5KUR.js";
import "./chunk-FCU3WVEC.js";
import "./chunk-P7I55NRZ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WRAPQBH6.js";
import "./chunk-UJSGWSKQ.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-TTOMUWPB.js";
import "./chunk-J5O27MHS.js";
import "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import "./chunk-6FMO72CJ.js";
import "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-VA5DWJHJ.js";
import "./chunk-WYQ2OLQM.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KHVEC2ZJ.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import "./chunk-JJ5DNIGX.js";
import {
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe
} from "./chunk-FJCFBSIQ.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-YUNY6RXQ.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  MatRipple
} from "./chunk-2UI5N333.js";
import {
  AsyncPipe,
  DatePipe
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  bs,
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
} from "./chunk-N6UZRJAT.js";
import "./chunk-KWSTWQNB.js";

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
function RepositoryAboutComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 18);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "REPOS.COMMIT_LOAD_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.commit_error(), " ");
  }
}
function RepositoryAboutComponent_Conditional_63_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.GIT_PULL_LATEST"), " ");
  }
}
function RepositoryAboutComponent_Conditional_63_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
function RepositoryAboutComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function RepositoryAboutComponent_Conditional_63_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pullLatestCommit());
    });
    \u0275\u0275conditionalCreate(1, RepositoryAboutComponent_Conditional_63_Conditional_1_Template, 2, 3)(2, RepositoryAboutComponent_Conditional_63_Conditional_2_Template, 1, 0, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.pulling());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.pulling() ? 1 : 2);
  }
}
function RepositoryAboutComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 24);
    \u0275\u0275elementStart(1, "div", 25)(2, "h3", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 27);
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
var RepositoryAboutComponent = class _RepositoryAboutComponent {
  _service = inject(RepositoriesStateService);
  /** Whether the latest commit is being pulled on the server */
  pulling = signal(
    false,
    ...ngDevMode ? [{ debugName: "pulling" }] : (
      /* istanbul ignore next */
      []
    )
  );
  commit = this._service.commit;
  commit_error = this._service.commit_error;
  item = this._service.item;
  local_url = computed(
    () => this.item()?.type === bs.Interface ? `${location.origin}/${this.item()?.folder_name}/` : `${location.hash}`,
    ...ngDevMode ? [{ debugName: "local_url" }] : (
      /* istanbul ignore next */
      []
    )
  );
  repo_uri = computed(
    () => this.item()?.uri.replace(/\/[a-zA-Z0-9\-.:]*@/, "/...@"),
    ...ngDevMode ? [{ debugName: "repo_uri" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_interface = computed(
    () => this.item()?.type === bs.Interface,
    ...ngDevMode ? [{ debugName: "is_interface" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryAboutComponent, selectors: [["repository-about"]], decls: 65, vars: 73, consts: [[1, "mb-4", "flex", "space-x-2"], [1, "w-1/3", "flex-1"], [1, "border-base-200", "grid", "gap-4", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "select-all"], ["target", "_blank", 3, "href"], [1, "opacity-30"], [1, "flex", "items-center", "font-mono", "text-sm"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "border-base-200", "grid", "gap-4", "overflow-hidden", "rounded-sm", "border", "p-4"], [1, "overflow-hidden", "underline", "select-all"], ["target", "_blank", 1, "block", "w-full", "truncate", 3, "href"], [1, "flex", "items-center", "overflow-hidden"], [1, "inline-block", "max-w-full", "truncate", "text-xs", 3, "matTooltip"], [1, "mono", "wrap-break-word", "select-text"], [1, "border-error", "bg-error/10", "text-error", "col-span-2", "flex", "items-start", "space-x-2", "rounded-sm", "border", "p-2", "text-xs"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "disabled"], [1, "text-lg"], [1, "min-w-0", "flex-1"], [1, "mt-0.75", "font-medium"], [1, "mt-2", "font-mono", "text-[0.625rem]", "break-words"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "click", "disabled"], ["diameter", "32"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"]], template: function RepositoryAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(62, RepositoryAboutComponent_Conditional_62_Template, 9, 4, "div", 16);
      \u0275\u0275conditionalCreate(63, RepositoryAboutComponent_Conditional_63_Template, 3, 2, "button", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(64, RepositoryAboutComponent_Conditional_64_Template, 8, 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 36, "REPOS.FIELD_TYPE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 38, ctx.is_interface() ? "REPOS.INTERFACE_REPO" : "REPOS.DRIVER_REPO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 40, "REPOS.FOLDER_NAME"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("underline", ctx.item().type === "interface")("pointer-events-none", ctx.item().type !== "interface");
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.local_url(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().folder_name, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.item().folder_name ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 42, "REPOS.ROOT_PATH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item().root_path, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().root_path === "" ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 44, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(27, 46, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(28, 49, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 52, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 54, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(36, 56, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(37, 59, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 62, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "6.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 64, "REPOS.URI"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", \u0275\u0275pipeBind2(47, 66, ctx.item().uri, "url"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.repo_uri() || "No URI set");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 69, "COMMON.GIT_BRANCH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().branch);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().branch, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 71, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? ctx.commit() : ctx.item().commit_hash);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit_hash || "HEAD", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit_error() ? 62 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.is_interface() ? 63 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.description ? 64 : -1);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    IconComponent,
    MarkdownPipe,
    TranslatePipe,
    SafePipe,
    DateFromPipe,
    AsyncPipe,
    DatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--mono-font);\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */"] });
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
                    @if (commit_error()) {
                        <div
                            class="border-error bg-error/10 text-error col-span-2 flex items-start space-x-2 rounded-sm border p-2 text-xs"
                        >
                            <icon class="text-lg">error</icon>
                            <div class="min-w-0 flex-1">
                                <div class="mt-0.75 font-medium">
                                    {{ 'REPOS.COMMIT_LOAD_ERROR' | translate }}
                                </div>
                                <div
                                    class="mt-2 font-mono text-[0.625rem] break-words"
                                >
                                    {{ commit_error() }}
                                </div>
                            </div>
                        </div>
                    }
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
                                <mat-spinner diameter="32" />
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
                    [innerHTML]="item()?.description | markdown | async"
                ></div>
            </div>
        }
    `, imports: [
      MarkdownPipe,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      SafePipe,
      DateFromPipe,
      AsyncPipe,
      DatePipe,
      IconComponent
    ], styles: ["/* angular:styles/component:css;5f07c17d32b664473205b0ab367d8c0e96f539f2bf6f3b78e6797189a5211777;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n.mono {\n  font-family: var(--mono-font);\n}\nlabel {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryAboutComponent, { className: "RepositoryAboutComponent", filePath: "src/app/repositories/repository-about.component.ts", lineNumber: 223 });
})();
export {
  RepositoryAboutComponent
};
//# sourceMappingURL=chunk-7EZH4F2P.js.map
