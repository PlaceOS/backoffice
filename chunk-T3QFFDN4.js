import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-QRHAUA7K.js";
import {
  MatRippleModule
} from "./chunk-EITG46SC.js";
import {
  IconComponent
} from "./chunk-KWINWSBN.js";
import {
  MatRipple
} from "./chunk-UV7WJQ5D.js";
import {
  Component,
  HostListener,
  Input,
  forwardRef,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresolveWindow,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DYV6NXUQ.js";

// src/app/ui/counter.component.ts
function CounterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.render_fn() ? ctx_r0.render_fn()(ctx_r0.value()) : ctx_r0.value()) || "0", " ");
  }
}
var CounterComponent = class _CounterComponent {
  /** Size of a single step */
  step = input(
    1,
    ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Maximum amount for the counter */
  max = input(
    999,
    ...ngDevMode ? [{ debugName: "max" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Minimum amount for the counter */
  min = input(
    0,
    ...ngDevMode ? [{ debugName: "min" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Custom function for rendering the counter value */
  render_fn = input(
    void 0,
    ...ngDevMode ? [{ debugName: "render_fn" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Current value of the counter */
  value = signal(
    null,
    ...ngDevMode ? [{ debugName: "value" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether shift key is being held by the user */
  shift_key;
  /** Whether control key is being held by the user */
  ctrl_key;
  focused = false;
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  onKeyDown(event) {
    this.shift_key = event.shiftKey;
    this.ctrl_key = event.ctrlKey;
  }
  onKeyUp(event) {
    this.shift_key = event.shiftKey;
    this.ctrl_key = event.ctrlKey;
  }
  /**
   * Add the `step` to the current value
   */
  add() {
    if (this.disabled())
      return;
    if (!this.value()) {
      this.value.set(this.min() || 0);
    }
    const step = this.ctrl_key ? 100 * this.step() : this.shift_key ? 10 * this.step() : this.step() || 1;
    this.value.set(this.value() + step);
    if (this.value() > this.max()) {
      this.value.set(this.max() || 10);
    }
    this.setValue(this.value());
  }
  /** Remove the `step` from the current value */
  remove() {
    if (this.disabled())
      return;
    if (!this.value()) {
      this.value.set(this.min() || 0);
    }
    const step = this.ctrl_key ? 100 * this.step() : this.shift_key ? 10 * this.step() : this.step() || 1;
    this.value.set(this.value() - step);
    if (this.value() < this.min()) {
      this.value.set(this.min() || 0);
    }
    this.setValue(this.value());
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
    if (new_value < this.min())
      new_value = this.min();
    if (new_value > this.max())
      new_value = this.max();
    if (new_value / this.step() % 1 !== 0) {
      new_value = Math.round(new_value * (1 / this.step())) / (1 / this.step());
    }
    this.value.set(new_value);
    if (this._onChange) {
      this._onChange(new_value);
    }
    this._onTouch?.(new_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static \u0275fac = function CounterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CounterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CounterComponent, selectors: [["a-counter"]], hostBindings: function CounterComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function CounterComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      }, \u0275\u0275resolveWindow)("keyup", function CounterComponent_keyup_HostBindingHandler($event) {
        return ctx.onKeyUp($event);
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { step: [1, "step"], max: [1, "max"], min: [1, "min"], render_fn: [1, "render_fn"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      /* istanbul ignore next */
      useExisting: forwardRef(() => _CounterComponent),
      multi: true
    }
  ])], decls: 10, vars: 5, consts: [["counter", "", 1, "flex", "items-center", "text-base"], ["decrease", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l", "rounded-r-none", "border", 3, "click", "disabled"], ["value", "", 1, "border-base-300", "relative", "z-0", "flex", "h-12", "min-w-16", "flex-1", "items-center", "justify-center", "rounded-none", "border-y", "p-1", "focus-within:z-20"], ["type", "text", "limitInput", "", 1, "absolute", "inset-0", "p-2", "opacity-0", "focus:opacity-100", 3, "ngModelChange", "focus", "blur", "disabled", "ngModel"], ["increase", "", "icon", "", "matRipple", "", "type", "button", 1, "border-secondary", "text-secondary", "z-10", "h-12", "w-12", "rounded-l-none", "rounded-r", "border", 3, "click", "disabled"]], template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function CounterComponent_Template_button_click_1_listener() {
        return ctx.remove();
      });
      \u0275\u0275elementStart(2, "icon");
      \u0275\u0275text(3, "remove");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275conditionalCreate(5, CounterComponent_Conditional_5_Template, 2, 1, "span");
      \u0275\u0275elementStart(6, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function CounterComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275listener("focus", function CounterComponent_Template_input_focus_6_listener() {
        return ctx.focused = true;
      })("blur", function CounterComponent_Template_input_blur_6_listener() {
        ctx.setValue(+ctx.value());
        return ctx.focused = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function CounterComponent_Template_button_click_7_listener() {
        return ctx.add();
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled() || !ctx.value() || ctx.value() === ctx.min());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.focused ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled() || ctx.value() === ctx.max());
    }
  }, dependencies: [IconComponent, MatRippleModule, MatRipple, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CounterComponent, [{
    type: Component,
    args: [{ selector: "a-counter", template: `
        <div counter class="flex items-center text-base">
            <button
                decrease
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l rounded-r-none border"
                [disabled]="disabled() || !value() || value() === min()"
                (click)="remove()"
            >
                <icon>remove</icon>
            </button>
            <div
                value
                class="border-base-300 relative z-0 flex h-12 min-w-16 flex-1 items-center justify-center rounded-none border-y p-1 focus-within:z-20"
            >
                @if (!focused) {
                    <span>
                        {{
                            (render_fn() ? render_fn()(value()) : value()) ||
                                '0'
                        }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 p-2 opacity-0 focus:opacity-100"
                    [disabled]="disabled()"
                    [(ngModel)]="value"
                    (focus)="focused = true"
                    (blur)="setValue(+value()); focused = false"
                    limitInput
                />
            </div>
            <button
                increase
                icon
                matRipple
                type="button"
                class="border-secondary text-secondary z-10 h-12 w-12 rounded-l-none rounded-r border"
                [disabled]="disabled() || value() === max()"
                (click)="add()"
            >
                <icon>add</icon>
            </button>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        /* istanbul ignore next */
        useExisting: forwardRef(() => CounterComponent),
        multi: true
      }
    ], imports: [IconComponent, MatRippleModule, FormsModule] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], render_fn: [{ type: Input, args: [{ isSignal: true, alias: "render_fn", required: false }] }], onKeyDown: [{
    type: HostListener,
    args: ["window:keydown", ["$event"]]
  }], onKeyUp: [{
    type: HostListener,
    args: ["window:keyup", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CounterComponent, { className: "CounterComponent", filePath: "src/app/ui/counter.component.ts", lineNumber: 77 });
})();

export {
  CounterComponent
};
//# sourceMappingURL=chunk-T3QFFDN4.js.map
