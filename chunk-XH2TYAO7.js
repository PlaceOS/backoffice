import {
  DriverStateService
} from "./chunk-Y7NUZICG.js";
import {
  MarkdownPipe
} from "./chunk-WUS33KCY.js";
import "./chunk-TOQ2UB36.js";
import "./chunk-J4NMPQQL.js";
import "./chunk-6XWDD7HO.js";
import "./chunk-FTR6ETPD.js";
import "./chunk-HFNTE4RU.js";
import "./chunk-2IAW3STZ.js";
import "./chunk-XTSZYT73.js";
import "./chunk-ELADOTTP.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-3DQ4QXI6.js";
import "./chunk-ZFPYWTFN.js";
import "./chunk-57T7HDE5.js";
import "./chunk-CHWIWBVC.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-3MADANAK.js";
import "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-LLRNJ6M2.js";
import "./chunk-PCXSBO64.js";
import "./chunk-R3LFGYBE.js";
import "./chunk-VDHJ5GEA.js";
import "./chunk-3KN73EXG.js";
import "./chunk-PK5A7L3I.js";
import "./chunk-3ZSLWILO.js";
import "./chunk-PIRFEBZC.js";
import "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-ZQLZS64A.js";
import "./chunk-27URU2VR.js";
import "./chunk-TIDB3WEY.js";
import "./chunk-YGX4BAWE.js";
import "./chunk-5AOS3OUL.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-LNM3OQLE.js";
import "./chunk-GHTXYZBC.js";
import "./chunk-PQUI6ASX.js";
import "./chunk-OEQM55HS.js";
import "./chunk-5JSUWHJB.js";
import "./chunk-QAR3ZGTS.js";
import {
  AsyncPipe
} from "./chunk-33GRF44L.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵtext
} from "./chunk-TCVU4336.js";
import "./chunk-RQBZITXC.js";

// src/app/drivers/driver-docs.component.ts
function DriverDocsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "markdown");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_string_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, docs_string_r1)), \u0275\u0275sanitizeHtml);
  }
}
function DriverDocsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 3);
    \u0275\u0275text(2, "comments_disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No documentation available for this driver");
    \u0275\u0275elementEnd()();
  }
}
var DriverDocsComponent = class _DriverDocsComponent {
  _service = inject(DriverStateService);
  docs = this._service.docs;
  /** Hide the empty state until the readme request settles */
  docs_loading = this._service.docs_loading;
  static \u0275fac = function DriverDocsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverDocsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverDocsComponent, selectors: [["driver-docs"]], decls: 4, vars: 2, consts: [[1, "px-8", "py-4"], [1, "markdown", "items-start", 3, "innerHTML"], [1, "bg-base-200", "flex", "min-h-[calc(100vh-20rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "opacity-30"], [1, "text-8xl"]], template: function DriverDocsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275declareLet(1);
      \u0275\u0275conditionalCreate(2, DriverDocsComponent_Conditional_2_Template, 3, 5, "div", 1)(3, DriverDocsComponent_Conditional_3_Template, 5, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      const docs_string_r2 = \u0275\u0275storeLet(ctx.docs());
      \u0275\u0275advance();
      \u0275\u0275conditional(docs_string_r2 ? 2 : !ctx.docs_loading() ? 3 : -1);
    }
  }, dependencies: [IconComponent, MarkdownPipe, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverDocsComponent, [{
    type: Component,
    args: [{ selector: "driver-docs", template: `
        <div class="px-8 py-4">
            @let docs_string = docs();
            @if (docs_string) {
                <div
                    class="markdown items-start"
                    [innerHTML]="docs_string | markdown | async"
                ></div>
            } @else if (!docs_loading()) {
                <div
                    class="bg-base-200 flex min-h-[calc(100vh-20rem)] w-full flex-col items-center justify-center space-y-4 rounded-xl opacity-30"
                >
                    <icon class="text-8xl">comments_disabled</icon>
                    <p>No documentation available for this driver</p>
                </div>
            }
        </div>
    `, imports: [MarkdownPipe, IconComponent, AsyncPipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverDocsComponent, { className: "DriverDocsComponent", filePath: "src/app/drivers/driver-docs.component.ts", lineNumber: 31 });
})();
export {
  DriverDocsComponent
};
//# debugId=006902b5-a7f1-5a4a-96bb-d8df7e5c140c
//# sourceMappingURL=chunk-XH2TYAO7.js.map
