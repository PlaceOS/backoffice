import {
  RepositoriesStateService
} from "./chunk-P3KFN7XA.js";
import {
  MarkdownPipe
} from "./chunk-ZV2IYKMN.js";
import "./chunk-IXHMRHEG.js";
import "./chunk-QS34PAM5.js";
import "./chunk-QOV5AADT.js";
import "./chunk-VFOKN4KS.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-XWMT7M74.js";
import "./chunk-ZBWUOXQY.js";
import "./chunk-2C722Z46.js";
import "./chunk-D46UX7ZU.js";
import "./chunk-JEFNVMRS.js";
import "./chunk-PLQM4RLZ.js";
import "./chunk-PNFKZOBK.js";
import "./chunk-G27ITG57.js";
import "./chunk-4LO2VVHA.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-XDFS3U2K.js";
import "./chunk-LZZWTBYD.js";
import "./chunk-F34GYKGE.js";
import "./chunk-Z4GE5ISL.js";
import "./chunk-3TH6HU2I.js";
import "./chunk-QID4OK23.js";
import "./chunk-AHOW6IEF.js";
import "./chunk-UKV7CFDE.js";
import "./chunk-6XUWFA3U.js";
import "./chunk-B6WUENCG.js";
import "./chunk-7AGLUCJP.js";
import "./chunk-OKMGGQII.js";
import "./chunk-IKL3NBUR.js";
import "./chunk-EK7JJWA2.js";
import "./chunk-BIF7G7TH.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KJXWRK4F.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-MEGGKQGS.js";
import "./chunk-NSY6RGIG.js";
import "./chunk-P4NPR2MV.js";
import "./chunk-HAVIORKV.js";
import "./chunk-BKGOEYCZ.js";
import "./chunk-6V3EPDQC.js";
import "./chunk-35RV2TRF.js";
import "./chunk-G6JZQ6PF.js";
import "./chunk-YZCKBLZP.js";
import {
  TranslatePipe
} from "./chunk-ZN5VMKUO.js";
import {
  IconComponent
} from "./chunk-XRQ22N5K.js";
import "./chunk-LAM4IRA6.js";
import "./chunk-SXYVSUAR.js";
import {
  AsyncPipe
} from "./chunk-QYMVVG4Y.js";
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
} from "./chunk-6NXCBA4X.js";
import "./chunk-DPH5AP7B.js";

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
//# sourceMappingURL=chunk-2LG3VLZC.js.map
