import {
  RepositoriesStateService
} from "./chunk-SIXTAXKO.js";
import {
  MarkdownPipe
} from "./chunk-CTVXHBIB.js";
import "./chunk-R3PV7UT4.js";
import "./chunk-Z4RGDELG.js";
import "./chunk-7PBGQ5GJ.js";
import "./chunk-T5MLCJBV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-UFM5XQJE.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TWCYY2HH.js";
import "./chunk-KPWOKGD3.js";
import "./chunk-G5DVCCF5.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YZFSOCDR.js";
import "./chunk-LZZWTBYD.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-O4WOCGMX.js";
import "./chunk-77EWWK2U.js";
import "./chunk-5DZHHUHH.js";
import "./chunk-F45UEFFY.js";
import "./chunk-FDG4YB46.js";
import "./chunk-VZ4JF2ZJ.js";
import "./chunk-4MSIA662.js";
import "./chunk-RFD5AOWN.js";
import "./chunk-OKMGGQII.js";
import "./chunk-QBQ5C53A.js";
import "./chunk-NPIW26D2.js";
import "./chunk-WSH7C5JM.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-M2O6T64P.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-SDGTGI2H.js";
import "./chunk-66VCHSRY.js";
import "./chunk-S3MO7QJA.js";
import "./chunk-HS6BVHDB.js";
import "./chunk-XMG57YWH.js";
import "./chunk-W6NODITO.js";
import "./chunk-PNGPFML7.js";
import "./chunk-4G55JYYO.js";
import {
  TranslatePipe
} from "./chunk-ETRW4JH6.js";
import {
  IconComponent
} from "./chunk-MKMIAR67.js";
import {
  AsyncPipe
} from "./chunk-IWUSEH7D.js";
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
} from "./chunk-M2N6S2L7.js";
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
//# sourceMappingURL=chunk-7C4S22S6.js.map
