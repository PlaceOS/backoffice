import {
  MatTooltip
} from "./chunk-OC5WJUHE.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-HBODAAE2.js";
import {
  MatRippleModule
} from "./chunk-GO4IQIUT.js";
import {
  IconComponent
} from "./chunk-NIIXPABD.js";
import {
  MatRipple
} from "./chunk-ZTDTALUV.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-3RIK6YIR.js";
import {
  Component,
  Input,
  Output,
  forwardRef,
  input,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-N6UZRJAT.js";

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
    \u0275\u0275property("matTooltip", ctx_r0.info());
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
  value;
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
    this.value = new_value;
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
    this.value = value;
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
  ])], ngContentSelectors: _c0, decls: 8, vars: 12, consts: [["matRipple", "", 1, "relative", "flex", "min-h-12", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "px-2", 3, "click", "disabled"], [1, "bg-info", "absolute", "inset-0", "m-0!", "opacity-10"], [1, "ml-2", "flex", "flex-1", "items-center", "space-x-2", "text-left"], [3, "matTooltip"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel", "disabled"]], template: function SettingsToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
        return ctx.setValue(!ctx.value);
      });
      \u0275\u0275conditionalCreate(1, SettingsToggleComponent_Conditional_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div");
      \u0275\u0275text(4);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 2, 1, "icon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-checkbox", 4);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsToggleComponent_Template_mat_checkbox_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-base-300", !ctx.value)("border-info", ctx.value)("opacity-30", ctx.disabled());
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.value ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.info() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275control();
    }
  }, dependencies: [
    MatCheckboxModule,
    MatCheckbox,
    IconComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    MatRippleModule,
    MatRipple,
    MatTooltip
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsToggleComponent, [{
    type: Component,
    args: [{ selector: "settings-toggle", template: `
        <button
            matRipple
            class="relative flex min-h-12 flex-1 items-center space-x-2 overflow-hidden rounded-sm border px-2"
            [class.border-base-300]="!value"
            [class.border-info]="value"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            (click)="setValue(!value)"
        >
            @if (value) {
                <div class="bg-info absolute inset-0 m-0! opacity-10"></div>
            }
            <div class="ml-2 flex flex-1 items-center space-x-2 text-left">
                <div>{{ label() }}<ng-content></ng-content></div>
                @if (info()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            <mat-checkbox
                [(ngModel)]="value"
                class="pointer-events-none"
                [disabled]="disabled()"
            ></mat-checkbox>
        </button>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SettingsToggleComponent),
        multi: true
      }
    ], imports: [
      MatCheckboxModule,
      IconComponent,
      FormsModule,
      MatRippleModule,
      MatTooltip
    ], styles: ["/* angular:styles/component:css;cc697b08d9f2fbde961b53703f5a7647bcb7d79fe59beff1abcb16f98f102d91;/home/runner/work/backoffice/backoffice/src/app/ui/settings-toggle.component.ts */\n:host {\n  display: flex;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "src/app/ui/settings-toggle.component.ts", lineNumber: 62 });
})();

export {
  SettingsToggleComponent
};
//# sourceMappingURL=chunk-SFCXA6TE.js.map
