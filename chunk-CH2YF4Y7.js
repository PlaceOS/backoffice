import {
  Component,
  ElementRef,
  InjectionToken,
  Input,
  booleanAttribute,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-6G3VFYSX.js";

// src/app/ui/controls/option.component.ts
var _c0 = ["*"];
function OptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 0);
  }
}
var OPTION_HOST = new InjectionToken("OPTION_HOST");
var next_id = 0;
var OptionComponent = class _OptionComponent {
  _host = inject(OPTION_HOST);
  _element = inject(ElementRef);
  id = `app-option-${next_id++}`;
  /** Value that the option sets */
  value = input(
    ...ngDevMode ? [void 0, { debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "_disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether the user can pick the option. A plain property, as the
   * key manager reads it to skip the option.
   */
  set disabled(value) {
    this._disabled.set(value);
  }
  get disabled() {
    return this._disabled();
  }
  /** Whether the keyboard focus is on the option */
  active = signal(
    false,
    ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    )
  );
  multiple = computed(
    () => this._host.multiple(),
    ...ngDevMode ? [{ debugName: "multiple" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selected = computed(
    () => {
      this.value();
      return this._host.isSelected(this);
    },
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Display text of the option */
  getLabel() {
    return this._element.nativeElement.textContent?.trim() ?? "";
  }
  pickOption() {
    if (!this.disabled)
      this._host.pick(this);
  }
  setActiveStyles() {
    this.active.set(true);
    this._element.nativeElement.scrollIntoView?.({ block: "nearest" });
  }
  setInactiveStyles() {
    this.active.set(false);
  }
  static \u0275fac = function OptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OptionComponent, selectors: [["app-option"]], hostAttrs: ["role", "option"], hostVars: 5, hostBindings: function OptionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mousedown", function OptionComponent_mousedown_HostBindingHandler($event) {
        return $event.preventDefault();
      })("click", function OptionComponent_click_HostBindingHandler() {
        return ctx.pickOption();
      });
    }
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id);
      \u0275\u0275attribute("aria-selected", ctx.selected())("aria-disabled", ctx.disabled);
      \u0275\u0275classProp("active", ctx.active());
    }
  }, inputs: { value: [1, "value"], disabled: [2, "disabled", "disabled", booleanAttribute] }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [["aria-hidden", "true", 1, "option-check"], [1, "option-text"]], template: function OptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, OptionComponent_Conditional_0_Template, 1, 0, "span", 0);
      \u0275\u0275domElementStart(1, "span", 1);
      \u0275\u0275projection(2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.multiple() ? 0 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionComponent, [{
    type: Component,
    args: [{
      selector: "app-option",
      template: `
        @if (multiple()) {
            <span class="option-check" aria-hidden="true"></span>
        }
        <span class="option-text"><ng-content /></span>
    `,
      host: {
        role: "option",
        "[id]": "id",
        "[attr.aria-selected]": "selected()",
        "[attr.aria-disabled]": "disabled",
        "[class.active]": "active()",
        // Keep the focus on the select or input that owns the option
        "(mousedown)": "$event.preventDefault()",
        "(click)": "pickOption()"
      }
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], disabled: [{
    type: Input,
    args: [{ transform: booleanAttribute }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OptionComponent, { className: "OptionComponent", filePath: "src/app/ui/controls/option.component.ts", lineNumber: 51 });
})();

export {
  OPTION_HOST,
  OptionComponent
};
//# debugId=9de2a016-acc1-5e32-892c-021e6fe4377b
//# sourceMappingURL=chunk-CH2YF4Y7.js.map
