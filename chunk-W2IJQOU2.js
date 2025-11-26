import {
  d
} from "./chunk-5AUNTCZE.js";
import {
  DriverStateService
} from "./chunk-RF2G2U67.js";
import "./chunk-4B6MLAWS.js";
import "./chunk-UF4C45PF.js";
import "./chunk-INZ7CTRO.js";
import {
  SanitizePipe
} from "./chunk-3GAP4CHV.js";
import "./chunk-A4VPVM26.js";
import "./chunk-JAVYI6DR.js";
import "./chunk-ZKOSV5C6.js";
import "./chunk-4SRLAZCZ.js";
import "./chunk-IRKMCAY5.js";
import "./chunk-7TUXYTRZ.js";
import "./chunk-W4446ZI7.js";
import "./chunk-6A4AU6MP.js";
import "./chunk-LYW23EPM.js";
import {
  Router
} from "./chunk-D444NJCZ.js";
import "./chunk-6LGHQI55.js";
import "./chunk-L2T7ZGS6.js";
import "./chunk-NJEJNWHI.js";
import "./chunk-YEYFARTO.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-TDDLCX2F.js";
import "./chunk-GNMPSLDT.js";
import "./chunk-UJ4OAW4C.js";
import "./chunk-GYVRTF64.js";
import "./chunk-GAQFKYD5.js";
import "./chunk-BJ7RDLLP.js";
import "./chunk-QU5HIE6N.js";
import "./chunk-TZTONW54.js";
import "./chunk-QYQS3QKE.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-GROJVO3W.js";
import "./chunk-UG6ZEHPO.js";
import "./chunk-WDR2GARE.js";
import "./chunk-ZF3Z6LCK.js";
import {
  IconComponent
} from "./chunk-VLW6LVHT.js";
import "./chunk-SU3MJTQD.js";
import "./chunk-PECY6EPM.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-7UVGUB3C.js";
import "./chunk-W37MESDG.js";
import "./chunk-PCFRJ6OJ.js";
import "./chunk-FG3K2BCB.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  inject,
  map,
  nextValueFrom,
  setClassMetadata,
  shareReplay,
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
} from "./chunk-C25AKIFS.js";
import "./chunk-KWSTWQNB.js";

// src/app/drivers/driver-docs.component.ts
function DriverDocsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_string_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, docs_string_r1), \u0275\u0275sanitizeHtml);
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
  docs = this._service.docs.pipe(map((s) => s ? d(s, { async: false }) : ""), map((_) => _.replace(/<code class="([^"]*)">\n/, '<code class="$1">')), shareReplay(1));
  async ngOnInit() {
    d.use({
      renderer: {
        code({ text, lang }) {
          const language = (lang || "").trim();
          const clean = text.replace(/^\n+/, "");
          return `<pre><code class="language-${language}">${clean}</code></pre>`;
        }
      }
    });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverDocsComponent, selectors: [["driver-docs"]], decls: 5, vars: 4, consts: [[1, "px-8", "py-4"], [1, "markdown", "items-start", 3, "innerHTML"], [1, "flex", "min-h-[calc(100vh-20rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "bg-base-200", "opacity-30"], [1, "text-8xl"]], template: function DriverDocsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275declareLet(1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275conditionalCreate(3, DriverDocsComponent_Conditional_3_Template, 2, 3, "div", 1)(4, DriverDocsComponent_Conditional_4_Template, 5, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      const docs_string_r2 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(2, 1, ctx.docs));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(docs_string_r2 ? 3 : 4);
    }
  }, dependencies: [CommonModule, IconComponent, AsyncPipe, SanitizePipe], encapsulation: 2 });
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
                    [innerHTML]="docs_string | sanitize"
                ></div>
            } @else {
                <div
                    class="flex min-h-[calc(100vh-20rem)] w-full flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 opacity-30"
                >
                    <icon class="text-8xl">comments_disabled</icon>
                    <p>No documentation available for this driver</p>
                </div>
            }
        </div>
    `, imports: [CommonModule, SanitizePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverDocsComponent, { className: "DriverDocsComponent", filePath: "src/app/drivers/driver-docs.component.ts", lineNumber: 35 });
})();
export {
  DriverDocsComponent
};
//# sourceMappingURL=chunk-W2IJQOU2.js.map
