import {
  DriverStateService
} from "./chunk-DYX5YZDT.js";
import {
  MarkdownPipe
} from "./chunk-CTVXHBIB.js";
import "./chunk-ADDKQEZX.js";
import "./chunk-XEPSVXI3.js";
import "./chunk-UVS4UHCY.js";
import "./chunk-YGRCHGLS.js";
import "./chunk-Z4RGDELG.js";
import "./chunk-7PBGQ5GJ.js";
import "./chunk-27RGLWGV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-LDPMLA3S.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TWCYY2HH.js";
import "./chunk-G5DVCCF5.js";
import "./chunk-DKGRO6E2.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YZFSOCDR.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-VZ4JF2ZJ.js";
import "./chunk-4MSIA662.js";
import "./chunk-RFD5AOWN.js";
import "./chunk-NPIW26D2.js";
import "./chunk-WSH7C5JM.js";
import "./chunk-M2O6T64P.js";
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
import "./chunk-ETRW4JH6.js";
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
} from "./chunk-M2N6S2L7.js";
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
//# sourceMappingURL=chunk-VXKRIY7T.js.map
