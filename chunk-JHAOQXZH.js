import {
  ViewResponseModalComponent
} from "./chunk-JSUCE7YJ.js";
import {
  calculateModuleIndex
} from "./chunk-SDERNRDS.js";
import {
  SpinnerComponent
} from "./chunk-WWSSYZEA.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-2DKDRFBI.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import {
  SelectComponent
} from "./chunk-XLCDDNWX.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5APMNGCP.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  Ma,
  bh,
  mc,
  wa
} from "./chunk-LCM7Z6QA.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  resource,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/custom-fields/system-exec/function-argument.component.ts
var _c0 = () => ({ standalone: true });
function FunctionArgumentComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "app-form-field", 4)(3, "input", 5);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function FunctionArgumentComponent_Conditional_0_For_2_Template_input_ngModelChange_3_listener($event) {
      const key_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateField(key_r2, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const \u0275$index_4_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("h-6", \u0275$index_4_r4 === 0)("h-14", \u0275$index_4_r4 !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disabled())("ngModel", ctx_r2.form()[key_r2] || "")("ngModelOptions", \u0275\u0275pureFunction0(19, _c0))("placeholder", key_r2 + (ctx_r2.defaults[key_r2] ? " = " + ctx_r2.defaults[key_r2] : ""));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r2.required()[key_r2])("text-success-content", ctx_r2.required()[key_r2])("bg-base-200", !ctx_r2.required()[key_r2])("text-base-content", !ctx_r2.required()[key_r2]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 17, ctx_r2.required()[key_r2] ? "COMMON.EXECUTE_REQUIRED" : "COMMON.EXECUTE_OPTIONAL"), " ");
  }
}
function FunctionArgumentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275repeaterCreate(1, FunctionArgumentComponent_Conditional_0_For_2_Template, 7, 20, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.method().order);
  }
}
function FunctionArgumentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.EXECUTE_NO_ARGS"), " ");
  }
}
var validateType = (type, raw_value) => {
  let value = "";
  try {
    value = JSON.parse(raw_value);
  } catch {
    value = raw_value;
  }
  if (value === void 0 || value == "")
    return null;
  switch (type) {
    case "boolean":
      return typeof value === "boolean" ? null : { type: true };
    case "number":
      return typeof value === "number" ? null : { type: true };
    case "string":
      return typeof value === "string" ? null : { type: true };
    case "object":
      return typeof value === "object" ? null : { type: true };
    case "array":
      return value instanceof Array ? null : { type: true };
  }
  return null;
};
var FunctionArgumentComponent = class _FunctionArgumentComponent {
  method = input(
    void 0,
    ...ngDevMode ? [{ debugName: "method" }] : (
      /* istanbul ignore next */
      []
    )
  );
  valid = output();
  disabled = model(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = signal(
    {},
    ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    )
  );
  value;
  required = signal(
    {},
    ...ngDevMode ? [{ debugName: "required" }] : (
      /* istanbul ignore next */
      []
    )
  );
  defaults = {};
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  ngOnChanges(changes) {
    if (changes.method)
      this.loadForm();
  }
  loadForm() {
    const method = this.method();
    if (!method || !method.order?.length)
      return;
    const form_values = {};
    for (const prop in method.params) {
      const prop_details = method.params[prop];
      const optional = "default" in prop_details;
      this.required.update((required) => __spreadProps(__spreadValues({}, required), {
        [prop]: !optional
      }));
      form_values[prop] = (this.value ? this.value[prop] : "") || "";
      if (optional) {
        try {
          this.defaults[prop] = JSON.stringify(prop_details.default);
        } catch {
          this.defaults[prop] = prop_details.default;
        }
      }
    }
    this.form.set(form_values);
    this.valid.emit(this.isValid(form_values));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
    this.value = new_value || {};
    this.valid.emit(this.isValid(new_value));
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
    this.value = value || {};
    if (!value || !this.form())
      return;
    this.form.set(__spreadValues(__spreadValues({}, this.form()), value));
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange = (fn) => this._onChange = fn;
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched = (fn) => this._onTouch = fn;
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  updateField(key, value) {
    if (this.disabled())
      return;
    const new_value = __spreadProps(__spreadValues({}, this.form()), { [key]: value });
    this.form.set(new_value);
    this.setValue(new_value);
  }
  isValid(value = {}) {
    const method = this.method();
    if (!method)
      return true;
    for (const prop in method.params) {
      const prop_details = method.params[prop];
      const required = !("default" in prop_details);
      if (required && !value[prop])
        return false;
      if (validateType(prop_details.type, value[prop])) {
        return false;
      }
    }
    return true;
  }
  static \u0275fac = function FunctionArgumentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FunctionArgumentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FunctionArgumentComponent, selectors: [["function-arguments"]], inputs: { method: [1, "method"], disabled: [1, "disabled"] }, outputs: { valid: "valid", disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _FunctionArgumentComponent),
      multi: true
    }
  ]), \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "pl-8"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-4"], ["field", "", 1, "relative", "flex", "items-center", "space-x-2"], [1, "border-base-200", "absolute", "left-0", "w-4", "-translate-x-full", "-translate-y-1/2", "transform", "border-b-2", "border-l-2"], [1, "h-14", "w-1/2", "flex-1"], [3, "ngModelChange", "disabled", "ngModel", "ngModelOptions", "placeholder"], [1, "w-16", "rounded-sm", "px-2", "py-1", "text-center", "text-xs"], [1, "opacity-30"]], template: function FunctionArgumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, FunctionArgumentComponent_Conditional_0_Template, 3, 0, "form", 0)(1, FunctionArgumentComponent_Conditional_1_Template, 4, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : 1);
    }
  }, dependencies: [FormFieldComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, TranslatePipe], styles: ["\ninput[_ngcontent-%COMP%] {\n  font-family: var(--%NS%mono-font);\n}\n/*# sourceMappingURL=function-argument.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FunctionArgumentComponent, [{
    type: Component,
    args: [{ selector: "function-arguments", template: `
        @if (form()) {
            <form class="pl-8">
                @for (key of method().order; track key; let i = $index) {
                    <div field class="relative flex items-center space-x-2">
                        <div
                            class="border-base-200 absolute left-0 w-4 -translate-x-full -translate-y-1/2 transform border-b-2 border-l-2"
                            [class.h-6]="i === 0"
                            [class.h-14]="i !== 0"
                        ></div>
                        <!-- <label [for]="key">{{ key }}</label> -->
                        <app-form-field class="h-14 w-1/2 flex-1">
                            <input
                                [disabled]="disabled()"
                                [ngModel]="form()[key] || ''"
                                (ngModelChange)="updateField(key, $event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    key +
                                    (defaults[key] ? ' = ' + defaults[key] : '')
                                "
                            />
                        </app-form-field>
                        <div
                            class="w-16 rounded-sm px-2 py-1 text-center text-xs"
                            [class.bg-success]="required()[key]"
                            [class.text-success-content]="required()[key]"
                            [class.bg-base-200]="!required()[key]"
                            [class.text-base-content]="!required()[key]"
                        >
                            {{
                                (required()[key]
                                    ? 'COMMON.EXECUTE_REQUIRED'
                                    : 'COMMON.EXECUTE_OPTIONAL'
                                ) | translate
                            }}
                        </div>
                    </div>
                }
            </form>
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <p class="opacity-30">
                    {{ 'COMMON.EXECUTE_NO_ARGS' | translate }}
                </p>
            </div>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FunctionArgumentComponent),
        multi: true
      }
    ], imports: [FormFieldComponent, TranslatePipe, FormsModule], styles: ["/* angular:styles/component:css;fd7dc65c7edca034;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/system-exec/function-argument.component.ts */\ninput {\n  font-family: var(--mono-font);\n}\n/*# sourceMappingURL=function-argument.component.css.map */\n"] }]
  }], null, { method: [{ type: Input, args: [{ isSignal: true, alias: "method", required: false }] }], valid: [{ type: Output, args: ["valid"] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FunctionArgumentComponent, { className: "FunctionArgumentComponent", filePath: "src/app/ui/custom-fields/system-exec/function-argument.component.ts", lineNumber: 110 });
})();

// src/app/ui/custom-fields/system-exec/select-method.component.ts
var _c02 = ["method_search"];
var _c1 = () => ({ name: "methods" });
function SelectMethodComponent_Conditional_0_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r3 = ctx.$implicit;
    \u0275\u0275property("value", method_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", method_r3.name, " ");
  }
}
function SelectMethodComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-field", 2)(1, "app-select", 3);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function SelectMethodComponent_Conditional_0_Conditional_0_Template_app_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.method, $event) || (ctx_r1.method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SelectMethodComponent_Conditional_0_Conditional_0_Template_app_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setValue($event));
    })("openedChange", function SelectMethodComponent_Conditional_0_Conditional_0_Template_app_select_openedChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOpen($event));
    });
    \u0275\u0275elementStart(3, "div", 4)(4, "input", 5, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function SelectMethodComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.method_filter.set($event));
    })("mousedown", function SelectMethodComponent_Conditional_0_Conditional_0_Template_input_mousedown_4_listener($event) {
      return $event.stopPropagation();
    })("click", function SelectMethodComponent_Conditional_0_Conditional_0_Template_input_click_4_listener($event) {
      return $event.stopPropagation();
    })("keydown", function SelectMethodComponent_Conditional_0_Conditional_0_Template_input_keydown_4_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, SelectMethodComponent_Conditional_0_Conditional_0_For_11_Template, 2, 2, "app-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 6, "COMMON.EXECUTE_METHOD_SELECT"))("disabled", ctx_r1.disabled());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.method);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.method_filter())("placeholder", \u0275\u0275pipeBind2(6, 8, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(14, _c1)));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, "COMMON.SEARCH_EMPTY", \u0275\u0275pureFunction0(15, _c1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filtered_method_list());
  }
}
function SelectMethodComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.EXECUTE_METHOD_EMPTY"), " ");
  }
}
function SelectMethodComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SelectMethodComponent_Conditional_0_Conditional_0_Template, 12, 16, "app-form-field", 2)(1, SelectMethodComponent_Conditional_0_Conditional_1_Template, 4, 3, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.method_list().length ? 0 : 1);
  }
}
function SelectMethodComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "app-spinner", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.EXECUTE_METHOD_LOADING"));
  }
}
var SelectMethodComponent = class _SelectMethodComponent extends AsyncHandler {
  /** ID of the system to select the module from */
  system = input(
    void 0,
    ...ngDevMode ? [{ debugName: "system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** ID of the system to select the module from */
  module = input(
    void 0,
    ...ngDevMode ? [{ debugName: "module" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _system = signal(
    "",
    ...ngDevMode ? [{ debugName: "_system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _module = signal(
    {},
    ...ngDevMode ? [{ debugName: "_module" }] : (
      /* istanbul ignore next */
      []
    )
  );
  method = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "method" }] : (
      /* istanbul ignore next */
      []
    )
  );
  method_filter = signal(
    "",
    ...ngDevMode ? [{ debugName: "method_filter" }] : (
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
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _method_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_method_list" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      id: this._system(),
      module: this._module()
    }),
    loader: async ({ params }) => {
      const { id, module } = params;
      if (!id || !module?.module)
        return [];
      this.loading.set(true);
      try {
        const fn_mapping = await wa(id, module.module, module.index).catch(() => ({}));
        return Object.keys(fn_mapping || {}).map((i) => __spreadValues({
          name: i
        }, fn_mapping[i])).sort((a, b) => a.name.localeCompare(b.name));
      } finally {
        this.loading.set(false);
      }
    }
  }));
  method_list = computed(
    () => this._method_list.value() || [],
    ...ngDevMode ? [{ debugName: "method_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered_method_list = computed(
    () => {
      const search = this.method_filter().trim().toLowerCase();
      if (!search)
        return this.method_list();
      return this.method_list().filter((method) => method.name.toLowerCase().includes(search));
    },
    ...ngDevMode ? [{ debugName: "filtered_method_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _search_el = viewChild(
    "method_search",
    ...ngDevMode ? [{ debugName: "_search_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  constructor() {
    super();
    effect(() => {
      const list = this.method_list();
      const selected = this.method();
      const active = list.find((_) => _.name === selected?.name);
      if (active)
        this.setValue(active);
    });
  }
  ngOnChanges(changes) {
    if (changes.system) {
      this._system.set(this.system()?.id || "");
    }
    if (changes.module) {
      this._module.set(this.module());
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
    this.method.set(new_value);
    if (this._onChange && !this.loading()) {
      this._onChange(new_value);
    }
    this._onTouch?.(new_value);
  }
  /** Handle dropdown opening to reset and focus method search. */
  setOpen(open) {
    if (!open) {
      this._onTouch?.(this.method());
      return;
    }
    if (this.disabled())
      return;
    this.method_filter.set("");
    this.timeout("focus_search", () => this._search_el()?.nativeElement.focus());
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    if (!value)
      return;
    this.method.set(value);
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange = (fn) => this._onChange = fn;
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched = (fn) => this._onTouch = fn;
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static \u0275fac = function SelectMethodComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectMethodComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectMethodComponent, selectors: [["select-module-method"]], viewQuery: function SelectMethodComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._search_el, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { system: [1, "system"], module: [1, "module"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectMethodComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["method_search", ""], [1, "flex", "items-center", "justify-center", "space-x-2", "p-4"], [1, "h-14", "w-full"], [3, "ngModelChange", "openedChange", "placeholder", "disabled", "ngModel"], ["select-search", ""], ["name", "method-search", 3, "ngModelChange", "mousedown", "click", "keydown", "ngModel", "placeholder"], ["select-empty", ""], [3, "value"], [1, "opacity-30"], ["diameter", "32"]], template: function SelectMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SelectMethodComponent_Conditional_0_Template, 2, 1)(1, SelectMethodComponent_Conditional_1_Template, 5, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
    }
  }, dependencies: [
    SpinnerComponent,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMethodComponent, [{
    type: Component,
    args: [{
      selector: "select-module-method",
      template: `
        @if (!loading()) {
            @if (method_list().length) {
                <app-form-field class="h-14 w-full">
                    <app-select
                        [placeholder]="
                            'COMMON.EXECUTE_METHOD_SELECT' | translate
                        "
                        [disabled]="disabled()"
                        [(ngModel)]="method"
                        (ngModelChange)="setValue($event)"
                        (openedChange)="setOpen($event)"
                    >
                        <div select-search>
                            <input
                                #method_search
                                name="method-search"
                                [ngModel]="method_filter()"
                                (ngModelChange)="method_filter.set($event)"
                                (mousedown)="$event.stopPropagation()"
                                (click)="$event.stopPropagation()"
                                (keydown)="$event.stopPropagation()"
                                [placeholder]="
                                    'COMMON.SEARCH_FOR'
                                        | translate: { name: 'methods' }
                                "
                            />
                        </div>
                        <p select-empty>
                            {{
                                'COMMON.SEARCH_EMPTY'
                                    | translate: { name: 'methods' }
                            }}
                        </p>
                        @for (method of filtered_method_list(); track method) {
                            <app-option [value]="method">
                                {{ method.name }}
                            </app-option>
                        }
                    </app-select>
                </app-form-field>
            } @else {
                <div class="flex items-center justify-center space-x-2 p-4">
                    <p class="opacity-30">
                        {{ 'COMMON.EXECUTE_METHOD_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <app-spinner diameter="32" />
                <p>{{ 'COMMON.EXECUTE_METHOD_LOADING' | translate }}</p>
            </div>
        }
    `,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectMethodComponent),
          multi: true
        }
      ],
      imports: [
        SpinnerComponent,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        TranslatePipe,
        FormsModule
      ]
    }]
  }], () => [], { system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }], module: [{ type: Input, args: [{ isSignal: true, alias: "module", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], _search_el: [{ type: ViewChild, args: ["method_search", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectMethodComponent, { className: "SelectMethodComponent", filePath: "src/app/ui/custom-fields/system-exec/select-method.component.ts", lineNumber: 110 });
})();

// src/app/ui/custom-fields/system-exec/select-module.component.ts
var _c03 = ["module_search"];
var _c12 = () => ({ name: "modules" });
function SelectModuleComponent_Conditional_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r3 = ctx.$implicit;
    \u0275\u0275property("disabled", !mod_r3.running)("value", mod_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", mod_r3.module, " ", mod_r3.index, " ");
  }
}
function SelectModuleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-field", 1)(1, "app-select", 3);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function SelectModuleComponent_Conditional_0_Template_app_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.module, $event) || (ctx_r1.module = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SelectModuleComponent_Conditional_0_Template_app_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setValue($event));
    })("openedChange", function SelectModuleComponent_Conditional_0_Template_app_select_openedChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setOpen($event));
    });
    \u0275\u0275elementStart(3, "div", 4)(4, "input", 5, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function SelectModuleComponent_Conditional_0_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.module_filter.set($event));
    })("mousedown", function SelectModuleComponent_Conditional_0_Template_input_mousedown_4_listener($event) {
      return $event.stopPropagation();
    })("click", function SelectModuleComponent_Conditional_0_Template_input_click_4_listener($event) {
      return $event.stopPropagation();
    })("keydown", function SelectModuleComponent_Conditional_0_Template_input_keydown_4_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, SelectModuleComponent_Conditional_0_For_11_Template, 2, 4, "app-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 6, "COMMON.EXECUTE_MODULE_SELECT"))("disabled", ctx_r1.disabled());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.module);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.module_filter())("placeholder", \u0275\u0275pipeBind2(6, 8, "COMMON.SEARCH_FOR", \u0275\u0275pureFunction0(14, _c12)));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, "COMMON.SEARCH_EMPTY", \u0275\u0275pureFunction0(15, _c12)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filtered_modules());
  }
}
function SelectModuleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-spinner", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.EXECUTE_MODULE_LOADING"));
  }
}
var SelectModuleComponent = class _SelectModuleComponent extends AsyncHandler {
  /** ID of the system to select the module from */
  system = input(
    void 0,
    ...ngDevMode ? [{ debugName: "system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Trigger to refresh modules list */
  refresh = input(
    0,
    ...ngDevMode ? [{ debugName: "refresh" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _system = signal(
    "",
    ...ngDevMode ? [{ debugName: "_system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  module = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "module" }] : (
      /* istanbul ignore next */
      []
    )
  );
  module_filter = signal(
    "",
    ...ngDevMode ? [{ debugName: "module_filter" }] : (
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
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _modules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_modules" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ id: this._system(), change: this._change() }),
    loader: async ({ params }) => {
      if (!params.id)
        return [];
      this.loading.set(true);
      try {
        const mod_list = await mc({
          control_system_id: params.id,
          limit: 500,
          complete: true
        }).then(({ data }) => data).catch(() => []);
        mod_list.sort((a, b) => this.system().modules.indexOf(a.id) - this.system().modules.indexOf(b.id));
        return mod_list.map((mod) => ({
          id: mod.id,
          name: mod.name,
          running: mod.running,
          module: mod.custom_name || mod.name,
          index: calculateModuleIndex(mod_list, mod)
        }));
      } finally {
        this.loading.set(false);
      }
    }
  }));
  modules = computed(
    () => this._modules.value() || [],
    ...ngDevMode ? [{ debugName: "modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered_modules = computed(
    () => {
      const search = this.module_filter().trim().toLowerCase();
      if (!search)
        return this.modules();
      return this.modules().filter((mod) => `${mod.module} ${mod.name} ${mod.index}`.toLowerCase().includes(search));
    },
    ...ngDevMode ? [{ debugName: "filtered_modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _search_el = viewChild(
    "module_search",
    ...ngDevMode ? [{ debugName: "_search_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  constructor() {
    super();
    effect(() => {
      const list = this.modules();
      const selected = this.module();
      const active = list.find((_) => _.module === selected?.module && _.index === selected?.index);
      if (active)
        this.setValue(active);
    });
  }
  ngOnChanges(changes) {
    if (changes.system) {
      const system = this.system();
      this._system.set(system?.id || "");
      this._change.set(system?.updated_at || 0);
    }
    if (changes.refresh && !changes.refresh.firstChange) {
      this._change.set(Date.now());
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
    this.module.set(new_value);
    if (this._onChange && !this.loading()) {
      this._onChange(new_value);
    }
    this._onTouch?.(new_value);
  }
  /** Handle dropdown opening to reset and focus module search. */
  setOpen(open) {
    if (!open) {
      this._onTouch?.(this.module());
      return;
    }
    if (this.disabled())
      return;
    this.module_filter.set("");
    this.timeout("focus_search", () => this._search_el()?.nativeElement.focus());
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    if (!value)
      return;
    this.module.set(value);
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange = (fn) => this._onChange = fn;
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched = (fn) => this._onTouch = fn;
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static \u0275fac = function SelectModuleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectModuleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectModuleComponent, selectors: [["select-system-module"]], viewQuery: function SelectModuleComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._search_el, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { system: [1, "system"], refresh: [1, "refresh"], disabled: [1, "disabled"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectModuleComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["module_search", ""], [1, "h-14", "w-full"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-4"], [3, "ngModelChange", "openedChange", "placeholder", "disabled", "ngModel"], ["select-search", ""], ["name", "module-search", 3, "ngModelChange", "mousedown", "click", "keydown", "ngModel", "placeholder"], ["select-empty", ""], [3, "disabled", "value"], ["diameter", "32"]], template: function SelectModuleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SelectModuleComponent_Conditional_0_Template, 12, 16, "app-form-field", 1)(1, SelectModuleComponent_Conditional_1_Template, 5, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
    }
  }, dependencies: [
    SpinnerComponent,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectModuleComponent, [{
    type: Component,
    args: [{
      selector: `select-system-module`,
      template: `
        @if (!loading()) {
            <app-form-field class="h-14 w-full">
                <app-select
                    [placeholder]="'COMMON.EXECUTE_MODULE_SELECT' | translate"
                    [disabled]="disabled()"
                    [(ngModel)]="module"
                    (ngModelChange)="setValue($event)"
                    (openedChange)="setOpen($event)"
                >
                    <div select-search>
                        <input
                            #module_search
                            name="module-search"
                            [ngModel]="module_filter()"
                            (ngModelChange)="module_filter.set($event)"
                            (mousedown)="$event.stopPropagation()"
                            (click)="$event.stopPropagation()"
                            (keydown)="$event.stopPropagation()"
                            [placeholder]="
                                'COMMON.SEARCH_FOR'
                                    | translate: { name: 'modules' }
                            "
                        />
                    </div>
                    <p select-empty>
                        {{
                            'COMMON.SEARCH_EMPTY'
                                | translate: { name: 'modules' }
                        }}
                    </p>
                    @for (mod of filtered_modules(); track mod) {
                        <app-option [disabled]="!mod.running" [value]="mod">
                            {{ mod.module }} {{ mod.index }}
                        </app-option>
                    }
                </app-select>
            </app-form-field>
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <app-spinner diameter="32" />
                <p>{{ 'COMMON.EXECUTE_MODULE_LOADING' | translate }}</p>
            </div>
        }
    `,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectModuleComponent),
          multi: true
        }
      ],
      imports: [
        SpinnerComponent,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        TranslatePipe,
        FormsModule
      ]
    }]
  }], () => [], { system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }], refresh: [{ type: Input, args: [{ isSignal: true, alias: "refresh", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], _search_el: [{ type: ViewChild, args: ["module_search", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectModuleComponent, { className: "SelectModuleComponent", filePath: "src/app/ui/custom-fields/system-exec/select-module.component.ts", lineNumber: 99 });
})();

// src/app/ui/custom-fields/system-exec/execute-method-field.component.ts
function ExecuteMethodFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select-module-method", 6);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ExecuteMethodFieldComponent_Conditional_3_Template_select_module_method_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fn, $event) || (ctx_r1.fn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExecuteMethodFieldComponent_Conditional_3_Template_select_module_method_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fn()?.order?.length === 0 ? ctx_r1.postArguments({}) : "");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("system", ctx_r1.system())("module", ctx_r1.module())("disabled", ctx_r1.disabled());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fn);
    \u0275\u0275control();
  }
}
function ExecuteMethodFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "function-arguments", 7);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("valid", function ExecuteMethodFieldComponent_Conditional_4_Template_function_arguments_valid_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.valid.set($event));
    })("ngModelChange", function ExecuteMethodFieldComponent_Conditional_4_Template_function_arguments_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postArguments($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("method", ctx_r1.fn())("disabled", ctx_r1.disabled())("ngModel", ctx_r1.arguments());
    \u0275\u0275control();
  }
}
function ExecuteMethodFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 8);
    \u0275\u0275listener("click", function ExecuteMethodFieldComponent_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function ExecuteMethodFieldComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.execute());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.EXECUTE_CLEAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.disabled() || !ctx_r1.fn() || !ctx_r1.valid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "COMMON.EXECUTE_PERFORM"), " ");
  }
}
function ExecuteMethodFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 10)(2, "app-spinner", 11);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.EXECUTE_LOADING"));
  }
}
var ExecuteMethodFieldComponent = class _ExecuteMethodFieldComponent {
  _dialog = inject(Dialog);
  zone = input(
    void 0,
    ...ngDevMode ? [{ debugName: "zone" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** ID of the system to select the module from */
  system = input(
    void 0,
    ...ngDevMode ? [{ debugName: "system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether component is allowed to execute methods on the system */
  can_execute = input(
    true,
    ...ngDevMode ? [{ debugName: "can_execute" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Trigger to refresh modules list */
  refresh = input(
    0,
    ...ngDevMode ? [{ debugName: "refresh" }] : (
      /* istanbul ignore next */
      []
    )
  );
  valid = signal(
    true,
    ...ngDevMode ? [{ debugName: "valid" }] : (
      /* istanbul ignore next */
      []
    )
  );
  module = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "module" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fn = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "fn" }] : (
      /* istanbul ignore next */
      []
    )
  );
  arguments = signal(
    {},
    ...ngDevMode ? [{ debugName: "arguments" }] : (
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
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
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
    if (!value)
      return;
    const parts = value.mod.split("_");
    const index = parts.pop();
    this.module.set({
      module: parts.join("_"),
      index: +index
    });
    this.fn.set({ name: value.method });
    const args = {};
    for (const key in value.args || {}) {
      let v = value.args[key];
      try {
        v = JSON.parse(value.args[key]);
      } catch {
      }
      args[key] = JSON.stringify(v);
    }
    this.arguments.set(args);
  }
  postArguments(arg_map) {
    if (this.disabled())
      return;
    if (!this.fn()?.params)
      return;
    const args = {};
    for (const key in arg_map) {
      args[key] = arg_map[key];
      try {
        args[key] = JSON.parse(arg_map[key]);
      } catch {
      }
    }
    this.setValue({
      mod: `${this.module().module}_${this.module().index}`,
      method: this.fn().name,
      args
    });
    this.arguments.set(arg_map);
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange = (fn) => this._onChange = fn;
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched = (fn) => this._onTouch = fn;
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  clear() {
    if (this.disabled())
      return;
    this.module.set(null);
    this.fn.set(null);
    this.arguments.set({});
    this._onTouch?.(null);
  }
  async execute() {
    if (this.disabled())
      return;
    this.loading.set(true);
    this.arguments.set(this.arguments() || {});
    const method = this.zone() ? bh : Ma;
    let failed = false;
    const result = await method(this.zone() || this.system().id, this.fn().name, this.module().module, this.module().index, this.fn().order.map((key) => {
      const fn_details = this.fn().params[key];
      try {
        return JSON.parse(this.arguments()[key]);
      } catch {
        return (this.arguments()[key] !== "" ? this.arguments()[key] : null) ?? fn_details?.default ?? null;
      }
    })).catch((err) => {
      if (typeof err === "string" && err.length < 128) {
        notifyError(err);
      } else {
        notifyError(`Executing '${this.fn().name}' failed.
View Error?`, "View", () => this.viewDetails(err));
      }
      this.loading.set(false);
      failed = true;
      return null;
    });
    if (failed)
      return;
    notifySuccess("Command successful executed.\nView Response?", "View", () => this.viewDetails(result));
    this.loading.set(false);
  }
  /** View Results of the execute */
  async viewDetails(details) {
    this._dialog.open(ViewResponseModalComponent, {
      data: {
        content: details instanceof Response ? await details.json() : details
      }
    });
  }
  static \u0275fac = function ExecuteMethodFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExecuteMethodFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExecuteMethodFieldComponent, selectors: [["execute-method-field"]], inputs: { zone: [1, "zone"], system: [1, "system"], can_execute: [1, "can_execute"], refresh: [1, "refresh"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ExecuteMethodFieldComponent),
      multi: true
    }
  ])], decls: 7, vars: 10, consts: [[1, "relative"], [3, "ngModelChange", "system", "refresh", "disabled", "ngModel"], [3, "system", "module", "disabled", "ngModel"], [3, "method", "disabled", "ngModel"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "absolute", "-inset-2", "flex", "flex-col", "items-center", "justify-center", "rounded-sm"], [3, "ngModelChange", "system", "module", "disabled", "ngModel"], [3, "valid", "ngModelChange", "method", "disabled", "ngModel"], ["btn", "", 1, "inverse", "flex-1", 3, "click", "disabled"], ["btn", "", "ripple", "", 1, "flex-1", 3, "click", "disabled"], [1, "bg-base-100", "absolute", "inset-0", "opacity-60"], ["diameter", "32"]], template: function ExecuteMethodFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "select-system-module", 1);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ExecuteMethodFieldComponent_Template_select_system_module_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.module, $event) || (ctx.module = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ExecuteMethodFieldComponent_Template_select_system_module_ngModelChange_2_listener() {
        return ctx.fn.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ExecuteMethodFieldComponent_Conditional_3_Template, 1, 4, "select-module-method", 2);
      \u0275\u0275conditionalCreate(4, ExecuteMethodFieldComponent_Conditional_4_Template, 1, 3, "function-arguments", 3);
      \u0275\u0275conditionalCreate(5, ExecuteMethodFieldComponent_Conditional_5_Template, 7, 8, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ExecuteMethodFieldComponent_Conditional_6_Template, 6, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("pointer-events-none", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("system", ctx.system())("refresh", ctx.refresh())("disabled", ctx.disabled());
      \u0275\u0275twoWayProperty("ngModel", ctx.module);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.module() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fn() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.can_execute() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 6 : -1);
    }
  }, dependencies: [
    SpinnerComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    SelectModuleComponent,
    SelectMethodComponent,
    FunctionArgumentComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExecuteMethodFieldComponent, [{
    type: Component,
    args: [{ selector: "execute-method-field", template: `
        <div class="relative">
            <div [class.pointer-events-none]="loading()">
                <select-system-module
                    [system]="system()"
                    [refresh]="refresh()"
                    [disabled]="disabled()"
                    [(ngModel)]="module"
                    (ngModelChange)="fn.set(null)"
                />
                @if (module()) {
                    <select-module-method
                        [system]="system()"
                        [module]="module()"
                        [disabled]="disabled()"
                        [(ngModel)]="fn"
                        (ngModelChange)="
                            fn()?.order?.length === 0 ? postArguments({}) : ''
                        "
                    />
                }
                @if (fn()) {
                    <function-arguments
                        [method]="fn()"
                        [disabled]="disabled()"
                        [ngModel]="arguments()"
                        (valid)="valid.set($event)"
                        (ngModelChange)="postArguments($event)"
                    />
                }
                @if (can_execute()) {
                    <div class="flex w-full items-center space-x-2">
                        <button
                            class="inverse flex-1"
                            btn
                            [disabled]="disabled()"
                            (click)="clear()"
                        >
                            {{ 'COMMON.EXECUTE_CLEAR' | translate }}
                        </button>
                        <button
                            class="flex-1"
                            [disabled]="disabled() || !fn() || !valid()"
                            btn
                            ripple
                            (click)="execute()"
                        >
                            {{ 'COMMON.EXECUTE_PERFORM' | translate }}
                        </button>
                    </div>
                }
            </div>
            @if (loading()) {
                <div
                    class="absolute -inset-2 flex flex-col items-center justify-center rounded-sm"
                >
                    <div class="bg-base-100 absolute inset-0 opacity-60"></div>
                    <app-spinner diameter="32" />
                    <p>{{ 'COMMON.EXECUTE_LOADING' | translate }}</p>
                </div>
            }
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ExecuteMethodFieldComponent),
        multi: true
      }
    ], imports: [
      SpinnerComponent,
      TranslatePipe,
      FormsModule,
      SelectModuleComponent,
      SelectMethodComponent,
      FunctionArgumentComponent
    ] }]
  }], null, { zone: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: false }] }], system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }], can_execute: [{ type: Input, args: [{ isSignal: true, alias: "can_execute", required: false }] }], refresh: [{ type: Input, args: [{ isSignal: true, alias: "refresh", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExecuteMethodFieldComponent, { className: "ExecuteMethodFieldComponent", filePath: "src/app/ui/custom-fields/system-exec/execute-method-field.component.ts", lineNumber: 105 });
})();

export {
  ExecuteMethodFieldComponent
};
//# debugId=38952352-a9d4-5c7b-a1b1-2d3c612232d3
//# sourceMappingURL=chunk-JHAOQXZH.js.map
