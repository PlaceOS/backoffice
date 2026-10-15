import {
  RepositoriesStateService
} from "./chunk-CWL4VOE3.js";
import {
  MarkdownPipe
} from "./chunk-NH3T6QFD.js";
import "./chunk-M4UONHQB.js";
import "./chunk-SHFPDWS2.js";
import "./chunk-7KUBYGZM.js";
import "./chunk-AMHFW4SO.js";
import "./chunk-QCF7OBQH.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-7H2IHNPA.js";
import "./chunk-ZQMAPC3A.js";
import "./chunk-B7F6FUDL.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-RCQMTPIS.js";
import "./chunk-4DMN3MUP.js";
import "./chunk-D7LNWC5R.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-SPITTCPX.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-K246SV5D.js";
import "./chunk-T7AMAKFI.js";
import "./chunk-4X62LVWS.js";
import "./chunk-SDICNVUG.js";
import "./chunk-5G4S7L2B.js";
import "./chunk-35WA4BE5.js";
import "./chunk-KBNVNIYI.js";
import "./chunk-YDXVJGO5.js";
import "./chunk-NWZSQ647.js";
import "./chunk-5ZBBWEMN.js";
import "./chunk-ZYTLYKSD.js";
import "./chunk-5FH2CPQ5.js";
import "./chunk-GPHMWQA5.js";
import "./chunk-E2Z2L4DB.js";
import "./chunk-UXBWGFXU.js";
import {
  TranslatePipe
} from "./chunk-W5N3U6FP.js";
import "./chunk-NTBPKOUQ.js";
import "./chunk-2OZGU35U.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-NMVMT4VD.js";
import {
  IconComponent
} from "./chunk-4DJN4BL5.js";
import "./chunk-4H5SLVMO.js";
import "./chunk-BSFQAEYP.js";
import "./chunk-KGK5S2XS.js";
import "./chunk-6LJH4E32.js";
import "./chunk-E4EJUBGE.js";
import "./chunk-BOUIQ3F6.js";
import "./chunk-2VXJJPLQ.js";
import {
  AsyncPipe
} from "./chunk-7ONBXR6Y.js";
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/repositories/repository-changelog.component.ts
function RepositoryChangelogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function RepositoryChangelogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "markdown");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r0.changelog())), \u0275\u0275sanitizeHtml);
  }
}
function RepositoryChangelogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon", 5);
    \u0275\u0275text(2, "playlist_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.CHANGELOG_EMPTY"));
  }
}
var RepositoryChangelogComponent = class _RepositoryChangelogComponent {
  _service = inject(RepositoriesStateService);
  changelog = this._service.changelog;
  loading = this._service.changelog_loading;
  static \u0275fac = function RepositoryChangelogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoryChangelogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryChangelogComponent, selectors: [["repository-changelog"]], decls: 4, vars: 1, consts: [[1, "px-4", "py-2"], ["role", "status", "aria-label", "Loading changelog", 1, "flex", "min-h-64", "items-center", "justify-center"], [1, "markdown", "changelog", "items-start", 3, "innerHTML"], [1, "bg-base-200", "flex", "min-h-64", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "opacity-30"], ["diameter", "40"], [1, "text-7xl"]], template: function RepositoryChangelogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, RepositoryChangelogComponent_Conditional_1_Template, 2, 0, "div", 1)(2, RepositoryChangelogComponent_Conditional_2_Template, 3, 5, "div", 2)(3, RepositoryChangelogComponent_Conditional_3_Template, 6, 3, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.changelog() ? 2 : 3);
    }
  }, dependencies: [
    IconComponent,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    AsyncPipe,
    MarkdownPipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-changelog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryChangelogComponent, [{
    type: Component,
    args: [{ selector: "repository-changelog", template: `
        <div class="px-4 py-2">
            @if (loading()) {
                <div
                    class="flex min-h-64 items-center justify-center"
                    role="status"
                    aria-label="Loading changelog"
                >
                    <mat-spinner diameter="40" />
                </div>
            } @else if (changelog()) {
                <div
                    class="markdown changelog items-start"
                    [innerHTML]="changelog() | markdown | async"
                ></div>
            } @else {
                <div
                    class="bg-base-200 flex min-h-64 w-full flex-col items-center justify-center space-y-4 rounded-xl opacity-30"
                >
                    <icon class="text-7xl">playlist_remove</icon>
                    <p>{{ 'COMMON.CHANGELOG_EMPTY' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      AsyncPipe,
      IconComponent,
      MarkdownPipe,
      MatProgressSpinnerModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;778649a47f5678eb9f8d53aebf0d0134a4922df5d855a26ee28b1d8560188d72;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-changelog.component.ts */\n:host {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-changelog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryChangelogComponent, { className: "RepositoryChangelogComponent", filePath: "src/app/repositories/repository-changelog.component.ts", lineNumber: 53 });
})();
export {
  RepositoryChangelogComponent
};
//# debugId=6ba45a84-134f-5f10-98b5-7dd296cae995
//# sourceMappingURL=chunk-O542JZFQ.js.map
