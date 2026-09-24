import {
  DriverStateService
} from "./chunk-FNVU6WFF.js";
import {
  MarkdownPipe
} from "./chunk-BFEPTCKM.js";
import "./chunk-U7F6GIG4.js";
import "./chunk-YZU3SQA7.js";
import "./chunk-UVS4UHCY.js";
import "./chunk-NRGAP4VU.js";
import "./chunk-TUGYSRNX.js";
import "./chunk-7KQO4KVV.js";
import "./chunk-3VH5IDBT.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-X3MWAFCJ.js";
import "./chunk-4BL3WELN.js";
import {
  Router
} from "./chunk-O7OQ7JEW.js";
import "./chunk-TEN3ABAY.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-F2NRQ63K.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-JNUXXJ2D.js";
import "./chunk-LMUB4LUK.js";
import "./chunk-CRKGZJW7.js";
import "./chunk-PYVYLSER.js";
import "./chunk-VMQJNUAC.js";
import "./chunk-UMUFHY24.js";
import "./chunk-75OXH2NR.js";
import "./chunk-I4CNNZYL.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-OOF3366H.js";
import "./chunk-QUUJ3KQH.js";
import "./chunk-OWI6HWFD.js";
import "./chunk-TUQY4L4B.js";
import "./chunk-I3KJAEKD.js";
import "./chunk-NM2N7PYU.js";
import "./chunk-CPS55MBW.js";
import "./chunk-NALZHFC6.js";
import "./chunk-X4BFBT7Y.js";
import "./chunk-4EBHF2Z4.js";
import {
  IconComponent
} from "./chunk-LNMJVTUY.js";
import "./chunk-L2M3MNUF.js";
import "./chunk-7A2HMJBQ.js";
import {
  AsyncPipe
} from "./chunk-2S4OQ6TV.js";
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
} from "./chunk-YPXZNU3N.js";
import "./chunk-KWSTWQNB.js";

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
  _router = inject(Router);
  docs = this._service.docs;
  async ngOnInit() {
    const str = this.docs();
    if (str)
      return;
    this._router.navigate([
      "/drivers",
      this._service.active_item.id,
      "about"
    ]);
  }
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
      \u0275\u0275conditional(docs_string_r2 ? 2 : 3);
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
            } @else {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverDocsComponent, { className: "DriverDocsComponent", filePath: "src/app/drivers/driver-docs.component.ts", lineNumber: 32 });
})();
export {
  DriverDocsComponent
};
//# sourceMappingURL=chunk-XAROBFED.js.map
