import {
  RepositoriesStateService
} from "./chunk-7CWMAK5T.js";
import {
  MarkdownPipe
} from "./chunk-UZFTQR6C.js";
import {
  ItemTimestampsComponent
} from "./chunk-X5YAZWN2.js";
import "./chunk-DK7MGKEA.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-ASMGLVAU.js";
import "./chunk-6MIMHZ5M.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-M66J3MCD.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-XK2HVTNA.js";
import "./chunk-6SNHHJXA.js";
import {
  maskUriCredentials
} from "./chunk-SR73MQZ7.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-DEUMTF6I.js";
import "./chunk-ORF7MGF5.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-JFP7JBTM.js";
import "./chunk-BZ6PXTOX.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-G5H4NNFS.js";
import "./chunk-Y35KTWST.js";
import "./chunk-2HWH2YE2.js";
import "./chunk-HB6BWUYB.js";
import "./chunk-G3URG5GH.js";
import "./chunk-JVQGOL5R.js";
import "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import {
  LoadingLabelDirective
} from "./chunk-3YG3QG75.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-W43UPD5R.js";
import "./chunk-GHI5JNAC.js";
import "./chunk-IGJQLGMT.js";
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
} from "./chunk-33ALCS4C.js";
import "./chunk-DIAVKJYC.js";
import {
  Os
} from "./chunk-OTGYPXXQ.js";
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/repositories/repository-about.component.ts
function RepositoryAboutComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REPOS.FOLDER_NAME_EMPTY"), " ");
  }
}
function RepositoryAboutComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function RepositoryAboutComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.commit(), ") ");
  }
}
function RepositoryAboutComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 19);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22);
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
function RepositoryAboutComponent_Conditional_46_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.GIT_PULL_LATEST"), " ");
  }
}
function RepositoryAboutComponent_Conditional_46_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 24);
  }
}
function RepositoryAboutComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function RepositoryAboutComponent_Conditional_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pullLatestCommit());
    });
    \u0275\u0275conditionalCreate(1, RepositoryAboutComponent_Conditional_46_Conditional_1_Template, 2, 3)(2, RepositoryAboutComponent_Conditional_46_Conditional_2_Template, 1, 0, "mat-spinner", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.pulling());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.pulling() ? 1 : 2);
  }
}
function RepositoryAboutComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 25);
    \u0275\u0275elementStart(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 28);
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
    () => this.item()?.type === Os.Interface ? `${location.origin}/${this.item()?.folder_name}/` : `${location.hash}`,
    ...ngDevMode ? [{ debugName: "local_url" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Repository URI without credentials, used for both the text and link */
  repo_uri = computed(
    () => maskUriCredentials(this.item()?.uri),
    ...ngDevMode ? [{ debugName: "repo_uri" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_interface = computed(
    () => this.item()?.type === Os.Interface,
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryAboutComponent, selectors: [["repository-about"]], decls: 48, vars: 46, consts: [[1, "h-full", "w-full", "overflow-auto", "p-4"], [1, "mb-4", "flex", "space-x-2"], [1, "w-1/3", "flex-1"], [1, "border-base-200", "grid", "gap-4", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "select-text"], [1, "select-all"], ["target", "_blank", 3, "href"], [1, "opacity-30"], [1, "flex", "items-center", "font-mono", "text-sm", "select-text"], [3, "created_at", "updated_at"], [1, "border-base-200", "grid", "gap-4", "overflow-hidden", "rounded-sm", "border", "p-4"], [1, "overflow-hidden", "underline", "select-all"], ["target", "_blank", 1, "block", "w-full", "truncate", 3, "href"], [1, "flex", "items-center", "overflow-hidden"], [1, "inline-block", "max-w-full", "truncate", "text-xs", "select-text", 3, "matTooltip"], [1, "mono", "wrap-break-word", "select-text"], [1, "border-error", "bg-error/10", "text-error", "col-span-2", "flex", "items-start", "space-x-2", "rounded-sm", "border", "p-2", "text-xs"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "disabled"], [1, "text-lg"], [1, "min-w-0", "flex-1"], [1, "mt-0.75", "font-medium"], [1, "mt-2", "font-mono", "text-[0.625rem]", "break-words", "select-text"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "click", "disabled"], ["diameter", "32"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"]], template: function RepositoryAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 4);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6)(14, "a", 7);
      \u0275\u0275text(15);
      \u0275\u0275conditionalCreate(16, RepositoryAboutComponent_Conditional_16_Template, 3, 3, "span", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 4);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275text(21);
      \u0275\u0275conditionalCreate(22, RepositoryAboutComponent_Conditional_22_Template, 2, 0, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "item-timestamps", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 2)(25, "div", 11)(26, "div", 4);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 12)(30, "a", 13);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 4);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 14)(36, "code", 15);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 4);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 14)(42, "code", 15);
      \u0275\u0275text(43);
      \u0275\u0275conditionalCreate(44, RepositoryAboutComponent_Conditional_44_Template, 2, 1, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(45, RepositoryAboutComponent_Conditional_45_Template, 9, 4, "div", 17);
      \u0275\u0275conditionalCreate(46, RepositoryAboutComponent_Conditional_46_Template, 3, 2, "button", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(47, RepositoryAboutComponent_Conditional_47_Template, 8, 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 32, "REPOS.FIELD_TYPE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 34, ctx.is_interface() ? "REPOS.INTERFACE_REPO" : "REPOS.DRIVER_REPO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 36, "REPOS.FOLDER_NAME"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("underline", ctx.item().type === "interface")("pointer-events-none", ctx.item().type !== "interface");
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.local_url(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().folder_name, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.item().folder_name ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 38, "REPOS.ROOT_PATH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item().root_path, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().root_path === "" ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("created_at", ctx.item().created_at)("updated_at", ctx.item().updated_at);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "6.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 40, "REPOS.URI"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", ctx.repo_uri(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.repo_uri() || "No URI set");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 42, "COMMON.GIT_BRANCH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().branch);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().branch, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 44, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? ctx.commit() : ctx.item().commit_hash);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit_hash || "HEAD", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit_error() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.is_interface() ? 46 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.description ? 47 : -1);
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
    MarkdownPipe,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--%NS%mono-font);\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryAboutComponent, [{
    type: Component,
    args: [{ selector: "repository-about", template: `
        <div class="h-full w-full overflow-auto p-4">
            <section class="mb-4 flex space-x-2">
                <div class="w-1/3 flex-1">
                    <div
                        class="border-base-200 grid gap-4 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        <div class="flex items-center text-sm font-medium">
                            {{ 'REPOS.FIELD_TYPE' | translate }}
                        </div>
                        <div class="select-text">
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
                                        {{
                                            'REPOS.FOLDER_NAME_EMPTY'
                                                | translate
                                        }}
                                    </span>
                                }
                            </a>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'REPOS.ROOT_PATH' | translate }}
                        </div>
                        <div
                            class="flex items-center font-mono text-sm select-text"
                        >
                            {{ item().root_path }}
                            @if (item().root_path === '') {
                                <span class="opacity-30">Not set</span>
                            }
                        </div>
                        <item-timestamps
                            [created_at]="item().created_at"
                            [updated_at]="item().updated_at"
                        />
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
                                [href]="repo_uri()"
                                target="_blank"
                                >{{ repo_uri() || 'No URI set' }}</a
                            >
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.GIT_BRANCH' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <code
                                class="inline-block max-w-full truncate text-xs select-text"
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
                                class="inline-block max-w-full truncate text-xs select-text"
                                [matTooltip]="
                                    commit() && commit() !== item().commit_hash
                                        ? commit()
                                        : item().commit_hash
                                "
                            >
                                {{ item().commit_hash || 'HEAD' }}
                                @if (
                                    commit() && commit() !== item().commit_hash
                                ) {
                                    <span
                                        class="mono wrap-break-word select-text"
                                    >
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
                                        {{
                                            'REPOS.COMMIT_LOAD_ERROR'
                                                | translate
                                        }}
                                    </div>
                                    <div
                                        class="mt-2 font-mono text-[0.625rem] break-words select-text"
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
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item()?.description | markdown | async"
                    ></div>
                </div>
            }
        </div>
    `, imports: [
      ItemTimestampsComponent,
      LoadingLabelDirective,
      MarkdownPipe,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      AsyncPipe,
      IconComponent
    ], styles: ["/* angular:styles/component:css;6d5bd2ce5af1d6ad;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n.mono {\n  font-family: var(--mono-font);\n}\nlabel {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryAboutComponent, { className: "RepositoryAboutComponent", filePath: "src/app/repositories/repository-about.component.ts", lineNumber: 209 });
})();
export {
  RepositoryAboutComponent
};
//# debugId=5f19e68b-21e4-5c78-abc1-0b216acd4769
//# sourceMappingURL=chunk-43G472BR.js.map
