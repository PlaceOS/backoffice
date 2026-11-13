import {
  NG_VALUE_ACCESSOR
} from "./chunk-5APMNGCP.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import {
  Component,
  Input,
  Output,
  forwardRef,
  input,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6G3VFYSX.js";

// src/app/ui/settings-toggle.component.ts
var _c0 = ["*"];
function SettingsToggleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
}
function SettingsToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 3);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("appTooltip", ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 5);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
var SettingsToggleComponent = class _SettingsToggleComponent {
  label = input(
    void 0,
    ...ngDevMode ? [{ debugName: "label" }] : (
      /* istanbul ignore next */
      []
    )
  );
  info = input(
    void 0,
    ...ngDevMode ? [{ debugName: "info" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disabled = model(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  value = signal(
    null,
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  registerOnChange = (fn) => this._onChange = fn;
  registerOnTouched = (fn) => this._onTouch = fn;
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
    this.value.set(new_value);
    if (this._onChange)
      this._onChange(new_value);
    this._onTouch?.(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static \u0275fac = function SettingsToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsToggleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { label: [1, "label"], info: [1, "info"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SettingsToggleComponent),
      multi: true
    }
  ])], ngContentSelectors: _c0, decls: 9, vars: 15, consts: [["type", "button", "role", "checkbox", "ripple", "", 1, "relative", "flex", "min-h-12", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "px-2", 3, "click", "disabled"], [1, "bg-info", "absolute", "inset-0", "m-0!", "opacity-10"], [1, "ml-2", "flex", "flex-1", "items-center", "space-x-2", "text-left"], [3, "appTooltip"], ["aria-hidden", "true", 1, "mr-3", "flex", "h-[1.125rem]", "w-[1.125rem]", "shrink-0", "items-center", "justify-center", "rounded-xs", "border-2"], [1, "text-sm", "font-bold"]], template: function SettingsToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
        return ctx.setValue(!ctx.value());
      });
      \u0275\u0275conditionalCreate(1, SettingsToggleComponent_Conditional_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div");
      \u0275\u0275text(4);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 2, 1, "icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275conditionalCreate(8, SettingsToggleComponent_Conditional_8_Template, 2, 0, "icon", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-base-300", !ctx.value())("border-info", ctx.value())("opacity-30", ctx.disabled());
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275attribute("aria-checked", !!ctx.value())("aria-description", ctx.info() || null);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.value() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.info() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.value() ? "border-info bg-info text-info-content" : "border-base-content opacity-60");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.value() ? 8 : -1);
    }
  }, dependencies: [TooltipDirective, IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsToggleComponent, [{
    type: Component,
    args: [{ selector: "settings-toggle", template: `
        <!-- The button is the checkbox for assistive tech; the inner box is only visual -->
        <button
            type="button"
            role="checkbox"
            [attr.aria-checked]="!!value()"
            [attr.aria-description]="info() || null"
            ripple
            class="relative flex min-h-12 flex-1 items-center space-x-2 overflow-hidden rounded-sm border px-2"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            (click)="setValue(!value())"
        >
            @if (value()) {
                <div class="bg-info absolute inset-0 m-0! opacity-10"></div>
            }
            <div class="ml-2 flex flex-1 items-center space-x-2 text-left">
                <div>{{ label() }}<ng-content /></div>
                @if (info()) {
                    <icon [appTooltip]="info()">info</icon>
                }
            </div>
            <span
                aria-hidden="true"
                class="mr-3 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-xs border-2"
                [class]="
                    value()
                        ? 'border-info bg-info text-info-content'
                        : 'border-base-content opacity-60'
                "
            >
                @if (value()) {
                    <icon class="text-sm font-bold">check</icon>
                }
            </span>
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SettingsToggleComponent),
        multi: true
      }
    ], imports: [TooltipDirective, IconComponent], styles: ["/* angular:styles/component:css;aa3cab42e6449842;/home/runner/work/backoffice/backoffice/src/app/ui/settings-toggle.component.ts */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "src/app/ui/settings-toggle.component.ts", lineNumber: 63 });
})();

export {
  SettingsToggleComponent
};
//# debugId=7c9bee3a-89bf-5857-8c3f-342a777eb707
//# sourceMappingURL=chunk-A7VS2VYD.js.map
