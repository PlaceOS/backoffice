import {
  d
} from "./chunk-OMHAHFWO.js";
import {
  DriverStateService
} from "./chunk-JJ4EUNWF.js";
import "./chunk-ROSFDFEI.js";
import "./chunk-Q4CSVYIP.js";
import "./chunk-GBS56EXV.js";
import {
  SanitizePipe
} from "./chunk-ZQDZ4P3A.js";
import "./chunk-J533RESC.js";
import "./chunk-NSNXXASA.js";
import "./chunk-UM3WNNMW.js";
import "./chunk-LGPP2H5A.js";
import "./chunk-IQ3ZWEXJ.js";
import "./chunk-LIMU3SEN.js";
import "./chunk-UCNDKOJV.js";
import "./chunk-DV6VICSN.js";
import "./chunk-4GAF3GQG.js";
import "./chunk-PZ66W5KC.js";
import "./chunk-TM4V3C5C.js";
import "./chunk-5XCHDAM3.js";
import "./chunk-KWUQFCBO.js";
import "./chunk-PUYRIMA6.js";
import {
  Router
} from "./chunk-HLPJDMLG.js";
import "./chunk-JGKWW7VX.js";
import "./chunk-2N4WVO5O.js";
import "./chunk-BFILZFNY.js";
import "./chunk-GWVX43QP.js";
import "./chunk-ZDBP7OUD.js";
import "./chunk-QMI3AHNO.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WF6YZHUO.js";
import "./chunk-BKRK4NUB.js";
import "./chunk-RAVBIGYQ.js";
import "./chunk-2WXWFTBN.js";
import {
  IconComponent
} from "./chunk-POU26KIO.js";
import "./chunk-X6AVAIR4.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-ZDWHOOB3.js";
import "./chunk-VDOGH5QV.js";
import "./chunk-GUX2IT3J.js";
import "./chunk-2VKYFPZX.js";
import "./chunk-47BQ5GYC.js";
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
} from "./chunk-HTG7JMGL.js";
import {
  map,
  shareReplay
} from "./chunk-72HWXKQ6.js";
import "./chunk-VYXW4D3Z.js";

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
//# sourceMappingURL=chunk-ZVF4ODMG.js.map
