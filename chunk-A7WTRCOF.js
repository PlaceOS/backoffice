import {
  MarkdownPipe
} from "./chunk-LWUOVNQF.js";
import {
  DriverStateService
} from "./chunk-JONOB7GR.js";
import "./chunk-QMR3QSIY.js";
import "./chunk-QISDDF6J.js";
import "./chunk-NIAA2M2R.js";
import "./chunk-J533RESC.js";
import "./chunk-YTLPGLGM.js";
import "./chunk-34ODANO2.js";
import "./chunk-RB2UY45D.js";
import "./chunk-E623OSGK.js";
import "./chunk-VK5UWEUQ.js";
import "./chunk-EGHGC3TW.js";
import "./chunk-2F4GBHID.js";
import "./chunk-UUEELBDU.js";
import "./chunk-ESAUSKTX.js";
import "./chunk-MMULO3JK.js";
import "./chunk-NJCBGYYZ.js";
import "./chunk-YOYAXT2N.js";
import "./chunk-4VVZIYIL.js";
import {
  Router
} from "./chunk-YWMKQIZF.js";
import "./chunk-WERYLKHT.js";
import "./chunk-2DAO6TZL.js";
import "./chunk-PTV22NR2.js";
import "./chunk-53YUD5GD.js";
import "./chunk-TR5YLCJD.js";
import "./chunk-EAFGUPDC.js";
import "./chunk-CU2UX3Q2.js";
import "./chunk-VVQLSYGJ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-LU7L7WA4.js";
import "./chunk-HTRPVLZU.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-2JVXCORR.js";
import "./chunk-KPCJPWPY.js";
import "./chunk-GSLV6Z53.js";
import "./chunk-6EJMXVZR.js";
import {
  IconComponent
} from "./chunk-7Y3SYYGI.js";
import "./chunk-TQHEFPKA.js";
import "./chunk-PH5CZKYC.js";
import "./chunk-EVFMGPO2.js";
import "./chunk-TRQYP6G6.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  inject,
  nextValueFrom,
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
} from "./chunk-6NLD6HWW.js";
import {
  shareReplay
} from "./chunk-QVNOCU2N.js";
import "./chunk-KWSTWQNB.js";

// src/app/drivers/driver-docs.component.ts
function DriverDocsComponent_Conditional_3_Template(rf, ctx) {
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
function DriverDocsComponent_Conditional_4_Template(rf, ctx) {
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
  docs = this._service.docs.pipe(shareReplay(1));
  async ngOnInit() {
    const str = await nextValueFrom(this.docs);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverDocsComponent, selectors: [["driver-docs"]], decls: 5, vars: 4, consts: [[1, "px-8", "py-4"], [1, "markdown", "items-start", 3, "innerHTML"], [1, "bg-base-200", "flex", "min-h-[calc(100vh-20rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "opacity-30"], [1, "text-8xl"]], template: function DriverDocsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275declareLet(1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275conditionalCreate(3, DriverDocsComponent_Conditional_3_Template, 3, 5, "div", 1)(4, DriverDocsComponent_Conditional_4_Template, 5, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      const docs_string_r2 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(2, 1, ctx.docs));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(docs_string_r2 ? 3 : 4);
    }
  }, dependencies: [CommonModule, IconComponent, AsyncPipe, MarkdownPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverDocsComponent, [{
    type: Component,
    args: [{ selector: "driver-docs", template: `
        <div class="px-8 py-4">
            @let docs_string = docs | async;
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
    `, imports: [CommonModule, MarkdownPipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverDocsComponent, { className: "DriverDocsComponent", filePath: "src/app/drivers/driver-docs.component.ts", lineNumber: 34 });
})();
export {
  DriverDocsComponent
};
//# sourceMappingURL=chunk-A7WTRCOF.js.map
