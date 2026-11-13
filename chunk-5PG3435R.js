import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";

// src/app/ui/skip-to-content.component.ts
var SkipToContentComponent = class _SkipToContentComponent {
  skip() {
    document.getElementById("main-content")?.focus();
  }
  static \u0275fac = function SkipToContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkipToContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkipToContentComponent, selectors: [["skip-to-content"]], decls: 3, vars: 3, consts: [["type", "button", 1, "bg-base-100", "border-base-300", "fixed", "top-2", "left-2", "z-10000", "-translate-y-[200%]", "rounded-sm", "border", "px-4", "py-2", "shadow", "focus:translate-y-0", 3, "click"]], template: function SkipToContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function SkipToContentComponent_Template_button_click_0_listener() {
        return ctx.skip();
      });
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SKIP_TO_CONTENT"), " ");
    }
  }, dependencies: [TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkipToContentComponent, [{
    type: Component,
    args: [{
      selector: "skip-to-content",
      template: `
        <button
            type="button"
            class="bg-base-100 border-base-300 fixed top-2 left-2 z-10000 -translate-y-[200%] rounded-sm border px-4 py-2 shadow focus:translate-y-0"
            (click)="skip()"
        >
            {{ 'COMMON.SKIP_TO_CONTENT' | translate }}
        </button>
    `,
      imports: [TranslatePipe],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkipToContentComponent, { className: "SkipToContentComponent", filePath: "src/app/ui/skip-to-content.component.ts", lineNumber: 23 });
})();

export {
  SkipToContentComponent
};
//# debugId=8d29c4b0-35a7-5db6-8c27-86bdffe61df3
//# sourceMappingURL=chunk-5PG3435R.js.map
