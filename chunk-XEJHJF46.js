import {
  d
} from "./chunk-OMHAHFWO.js";
import {
  DriverStateService
} from "./chunk-VT4FYDKE.js";
import "./chunk-WFJMSDXS.js";
import "./chunk-2GOEBGJO.js";
import "./chunk-Q6B2BQUZ.js";
import {
  SanitizePipe
} from "./chunk-HES7VNQE.js";
import "./chunk-J533RESC.js";
import "./chunk-TDW2O7RD.js";
import "./chunk-5BG3YZTE.js";
import "./chunk-CF2NOKQL.js";
import "./chunk-PWRYQANA.js";
import "./chunk-LKDC73R2.js";
import "./chunk-7EJ7RRKH.js";
import "./chunk-DEBKIR2F.js";
import "./chunk-TCRHK3RQ.js";
import "./chunk-SBQHH5ML.js";
import "./chunk-3Y76NEPO.js";
import "./chunk-DBRJN53P.js";
import "./chunk-NUMJGP7T.js";
import "./chunk-CHOWPPXT.js";
import {
  Router
} from "./chunk-OBFARVMX.js";
import "./chunk-SRZCMQ2C.js";
import "./chunk-T75ATYKF.js";
import "./chunk-R6RPLYR6.js";
import "./chunk-IBTMU5M7.js";
import "./chunk-TWNNWGJ2.js";
import "./chunk-KHYGH5MC.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-AJRLGM6Z.js";
import "./chunk-VDR6DK2T.js";
import "./chunk-CQRL7HOU.js";
import "./chunk-3LPUPHPC.js";
import {
  IconComponent
} from "./chunk-TOSTYMFB.js";
import "./chunk-YZKNJW3K.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-QKYZGNAS.js";
import "./chunk-UP4YCCPE.js";
import "./chunk-NEVMX5EB.js";
import "./chunk-A4WILNGJ.js";
import "./chunk-32K5DQRY.js";
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
} from "./chunk-T2LRLIH5.js";
import {
  map,
  shareReplay
} from "./chunk-T6SXWR5P.js";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverDocsComponent, selectors: [["driver-docs"]], decls: 5, vars: 4, consts: [[1, "px-8", "py-4"], [1, "markdown", "items-start", 3, "innerHTML"], [1, "bg-base-200", "flex", "min-h-[calc(100vh-20rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "opacity-30"], [1, "text-8xl"]], template: function DriverDocsComponent_Template(rf, ctx) {
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
                    class="bg-base-200 flex min-h-[calc(100vh-20rem)] w-full flex-col items-center justify-center space-y-4 rounded-xl opacity-30"
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
//# sourceMappingURL=chunk-XEJHJF46.js.map
