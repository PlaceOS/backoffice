import {
  LocaleService
} from "./chunk-V4STGI54.js";
import {
  Directive,
  inject,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineDirective
} from "./chunk-HGOGRFKW.js";

// src/app/ui/loading-label.directive.ts
var LoadingLabelDirective = class _LoadingLabelDirective {
  label = inject(LocaleService).get("COMMON.LOADING");
  static \u0275fac = function LoadingLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingLabelDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _LoadingLabelDirective, selectors: [["mat-spinner", 3, "aria-label", ""], ["mat-progress-spinner", 3, "aria-label", ""], ["mat-progress-bar", 3, "aria-label", ""]], hostVars: 1, hostBindings: function LoadingLabelDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.label);
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingLabelDirective, [{
    type: Directive,
    args: [{
      selector: "mat-spinner:not([aria-label]), mat-progress-spinner:not([aria-label]), mat-progress-bar:not([aria-label])",
      host: { "[attr.aria-label]": "label" }
    }]
  }], null, null);
})();

export {
  LoadingLabelDirective
};
//# debugId=f472b6d9-f397-5a86-af59-c937a9374c31
//# sourceMappingURL=chunk-S6TBIU6L.js.map
