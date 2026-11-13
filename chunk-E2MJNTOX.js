import {
  RepositoriesStateService
} from "./chunk-BVIY2274.js";
import {
  MarkdownPipe
} from "./chunk-R4BPIWI6.js";
import "./chunk-GYIE66SW.js";
import "./chunk-DO2Q7VNO.js";
import "./chunk-5ZBIHZXI.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-MXWUELBM.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-PTOKT7PW.js";
import "./chunk-M5B4HMCQ.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-IYFCSDMQ.js";
import "./chunk-7CBN7LBF.js";
import {
  SpinnerComponent
} from "./chunk-M7QWVZ5D.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-GEDUPXB2.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-G2A4D7CX.js";
import "./chunk-32E64OOS.js";
import "./chunk-ZLRMIFQU.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-TUKKKEUM.js";
import "./chunk-RWWXPWHW.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import {
  AsyncPipe
} from "./chunk-XWSZBFF5.js";
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
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/repositories/repository-changelog.component.ts
function RepositoryChangelogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-spinner", 4);
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
    SpinnerComponent,
    IconComponent,
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
                    <app-spinner diameter="40" />
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
      SpinnerComponent,
      AsyncPipe,
      IconComponent,
      MarkdownPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;e21d00d3fc3b8567;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-changelog.component.ts */\n:host {\n  display: block;\n  min-height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-changelog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryChangelogComponent, { className: "RepositoryChangelogComponent", filePath: "src/app/repositories/repository-changelog.component.ts", lineNumber: 53 });
})();
export {
  RepositoryChangelogComponent
};
//# debugId=9c6adaff-5d57-5da5-aa57-71186c42eafd
//# sourceMappingURL=chunk-E2MJNTOX.js.map
