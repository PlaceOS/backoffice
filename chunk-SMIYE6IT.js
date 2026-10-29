import {
  DriverStateService
} from "./chunk-XXOUDEL2.js";
import {
  MarkdownPipe
} from "./chunk-YBXT3OEI.js";
import "./chunk-FOXYWJTV.js";
import "./chunk-HY3QCLXH.js";
import "./chunk-5BFKPLWS.js";
import "./chunk-FTR6ETPD.js";
import "./chunk-M5H5V3VM.js";
import "./chunk-ZMORPGE7.js";
import "./chunk-MLUIXMIO.js";
import "./chunk-3SPC3F4S.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-CZHGOQVA.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-KZLWJTDG.js";
import "./chunk-R464B6VT.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-UABOPD54.js";
import "./chunk-F2UXRHVQ.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-JIKSLL3H.js";
import "./chunk-QUK2HLQJ.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-SBWE5ILJ.js";
import "./chunk-DQFIZL2Z.js";
import "./chunk-HAWZID7H.js";
import "./chunk-S6TBIU6L.js";
import "./chunk-OLETOVUH.js";
import "./chunk-X3VW2L3A.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import "./chunk-TUNU3FRP.js";
import "./chunk-52KP2JDE.js";
import "./chunk-XTQWFJN3.js";
import "./chunk-V4STGI54.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-GPNEKEBR.js";
import "./chunk-NHAMJPH5.js";
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
} from "./chunk-HGOGRFKW.js";
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
//# debugId=1f2cf1c0-5087-56f2-b783-fd6590f9bdbd
//# sourceMappingURL=chunk-SMIYE6IT.js.map
