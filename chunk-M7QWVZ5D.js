import {
  LocaleService
} from "./chunk-RWWXPWHW.js";
import {
  Component,
  Input,
  computed,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceSVG,
  ɵɵstyleProp
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/spinner.component.ts
var CIRCUMFERENCE = 2 * Math.PI * 45;
var SpinnerComponent = class _SpinnerComponent {
  /** Accessible name. It defaults to "Loading" */
  label = input(
    void 0,
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  default_label = inject(LocaleService).get("COMMON.LOADING");
  /** Size of the spinner in pixels */
  diameter = input(48, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "diameter" } : (
    /* istanbul ignore next */
    {}
  )), { transform: numberAttribute }));
  /** Progress from 0 to 100. Leave it unset for an indeterminate spinner */
  value = input(
    void 0,
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  circumference = CIRCUMFERENCE;
  offset = computed(
    () => {
      const value = this.value();
      if (value === void 0)
        return null;
      const clamped = Math.min(100, Math.max(0, value));
      return CIRCUMFERENCE * (1 - clamped / 100);
    },
    ...ngDevMode ? [{ debugName: "offset" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["app-spinner"]], hostAttrs: ["role", "progressbar", 1, "spinner"], hostVars: 8, hostBindings: function SpinnerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.label() || ctx.default_label)("aria-valuemin", ctx.value() === void 0 ? null : 0)("aria-valuemax", ctx.value() === void 0 ? null : 100)("aria-valuenow", ctx.value() ?? null);
      \u0275\u0275styleProp("width", ctx.diameter(), "px")("height", ctx.diameter(), "px");
    }
  }, inputs: { label: [1, "label"], diameter: [1, "diameter"], value: [1, "value"] }, decls: 2, vars: 6, consts: [["viewBox", "0 0 100 100"], ["cx", "50", "cy", "50", "r", "45"]], template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0);
      \u0275\u0275domElement(1, "circle", 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("spin", ctx.value() === void 0);
      \u0275\u0275advance();
      \u0275\u0275styleProp("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.offset());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerComponent, [{
    type: Component,
    args: [{
      selector: "app-spinner",
      template: `
        <svg viewBox="0 0 100 100" [class.spin]="value() === undefined">
            <circle
                cx="50"
                cy="50"
                r="45"
                [style.stroke-dasharray]="circumference"
                [style.stroke-dashoffset]="offset()"
            />
        </svg>
    `,
      host: {
        class: "spinner",
        role: "progressbar",
        "[attr.aria-label]": "label() || default_label",
        "[style.width.px]": "diameter()",
        "[style.height.px]": "diameter()",
        "[attr.aria-valuemin]": "value() === undefined ? null : 0",
        "[attr.aria-valuemax]": "value() === undefined ? null : 100",
        "[attr.aria-valuenow]": "value() ?? null"
      }
    }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], diameter: [{ type: Input, args: [{ isSignal: true, alias: "diameter", required: false }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src/app/ui/controls/spinner.component.ts", lineNumber: 42 });
})();

export {
  SpinnerComponent
};
//# debugId=84dc4021-a26f-58c2-bd1e-3fcabddfff74
//# sourceMappingURL=chunk-M7QWVZ5D.js.map
