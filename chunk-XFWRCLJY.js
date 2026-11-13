import {
  LocaleService
} from "./chunk-RQOHFMTH.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵnextContext,
  ɵɵstyleProp
} from "./chunk-OGAUD6Z3.js";

// src/app/ui/controls/progress-bar.component.ts
function ProgressBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0.clamped(), "%");
  }
}
function ProgressBarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 1);
  }
}
var ProgressBarComponent = class _ProgressBarComponent {
  /** Accessible name. It defaults to "Loading" */
  label = input(
    void 0,
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  default_label = inject(LocaleService).get("COMMON.LOADING");
  mode = input(
    "determinate",
    ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Progress from 0 to 100, used in `determinate` mode */
  value = input(
    0,
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  determinate = computed(
    () => this.mode() === "determinate",
    ...ngDevMode ? [{ debugName: "determinate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  clamped = computed(
    () => Math.min(100, Math.max(0, this.value() || 0)),
    ...ngDevMode ? [{ debugName: "clamped" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ProgressBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressBarComponent, selectors: [["app-progress-bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], hostVars: 2, hostBindings: function ProgressBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.label() || ctx.default_label)("aria-valuenow", ctx.determinate() ? ctx.clamped() : null);
    }
  }, inputs: { label: [1, "label"], mode: [1, "mode"], value: [1, "value"] }, decls: 2, vars: 1, consts: [[1, "progress-fill", 3, "width"], [1, "progress-loop"], [1, "progress-fill"]], template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProgressBarComponent_Conditional_0_Template, 1, 2, "div", 0)(1, ProgressBarComponent_Conditional_1_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.determinate() ? 0 : 1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarComponent, [{
    type: Component,
    args: [{
      selector: "app-progress-bar",
      template: `
        @if (determinate()) {
            <div class="progress-fill" [style.width.%]="clamped()"></div>
        } @else {
            <div class="progress-loop"></div>
        }
    `,
      host: {
        class: "progress-bar",
        role: "progressbar",
        "[attr.aria-label]": "label() || default_label",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "[attr.aria-valuenow]": "determinate() ? clamped() : null"
      }
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressBarComponent, { className: "ProgressBarComponent", filePath: "src/app/ui/controls/progress-bar.component.ts", lineNumber: 27 });
})();

export {
  ProgressBarComponent
};
//# debugId=ea65c886-aae9-5873-95a7-ead5f1492126
//# sourceMappingURL=chunk-XFWRCLJY.js.map
