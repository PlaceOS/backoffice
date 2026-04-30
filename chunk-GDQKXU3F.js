import {
  MatTooltip
} from "./chunk-X3TFB4ML.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-7IGSOKAD.js";
import {
  IconComponent
} from "./chunk-XEKU7LYC.js";
import {
  MatRippleModule
} from "./chunk-KWELGHAI.js";
import {
  MatRipple
} from "./chunk-RCJZKIXW.js";
import {
  Component,
  FormsModule,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  forwardRef,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7Y7JYXTF.js";

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
  name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : []);
  info = input(void 0, ...ngDevMode ? [{ debugName: "info" }] : []);
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
    this.value = new_value;
    if (this._onChange)
      this._onChange(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value = value;
  }
  static \u0275fac = function SettingsToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsToggleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { name: [1, "name"], info: [1, "info"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SettingsToggleComponent),
      multi: true
    }
  ])], ngContentSelectors: _c0, decls: 8, vars: 8, consts: [["matRipple", "", 1, "relative", "flex", "min-h-12", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "px-2", 3, "click"], [1, "bg-info", "absolute", "inset-0", "m-0!", "opacity-10"], [1, "ml-2", "flex", "flex-1", "items-center", "space-x-2", "text-left"], [3, "matTooltip"], [1, "pointer-events-none", 3, "ngModelChange", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-base-300", !ctx.value)("border-info", ctx.value);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.value ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.name());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.info() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
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
            (click)="setValue(!value)"
        >
            @if (value) {
                <div class="bg-info absolute inset-0 m-0! opacity-10"></div>
            }
            <div class="ml-2 flex flex-1 items-center space-x-2 text-left">
                <div>{{ name() }}<ng-content></ng-content></div>
                @if (info()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            <mat-checkbox
                [(ngModel)]="value"
                class="pointer-events-none"
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
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "src/app/ui/settings-toggle.component.ts", lineNumber: 59 });
})();

export {
  SettingsToggleComponent
};
//# sourceMappingURL=chunk-GDQKXU3F.js.map
