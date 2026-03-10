import {
  ViewResponseModalComponent
} from "./chunk-VODLPS6R.js";
import {
  calculateModuleIndex
} from "./chunk-VG52I76Q.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-DSY7HAXR.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-W3IBXMGQ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-HNDZUABS.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-WBMBQ5VJ.js";
import {
  MatDialog
} from "./chunk-OSF25IC4.js";
import {
  AsyncHandler
} from "./chunk-KFG47F7M.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-WUACCZF3.js";
import {
  TranslatePipe
} from "./chunk-MLPBELPV.js";
import {
  MatRipple
} from "./chunk-F4U4NVRY.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Output,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  forwardRef,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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
  ɵɵtwoWayProperty
} from "./chunk-E55B7SJP.js";
import {
  BehaviorSubject,
  Qa,
  ca,
  catchError,
  combineLatest,
  distinctUntilChanged,
  ha,
  lastValueFrom,
  map,
  of,
  shareReplay,
  switchMap,
  tap,
  uc
} from "./chunk-WQVS62YG.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/custom-fields/system-exec/function-argument.component.ts
function FunctionArgumentComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "mat-form-field", 4);
    \u0275\u0275element(3, "input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const \u0275$index_4_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("h-6", \u0275$index_4_r2 === 0)("h-14", \u0275$index_4_r2 !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", key_r1)("formControlName", key_r1)("placeholder", key_r1 + (ctx_r2.defaults[key_r1] ? " = " + ctx_r2.defaults[key_r1] : ""));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r2.required[key_r1])("text-success-content", ctx_r2.required[key_r1])("bg-base-200", !ctx_r2.required[key_r1])("text-base-content", !ctx_r2.required[key_r1]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 16, ctx_r2.required[key_r1] ? "COMMON.EXECUTE_REQUIRED" : "COMMON.EXECUTE_OPTIONAL"), " ");
  }
}
function FunctionArgumentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275repeaterCreate(1, FunctionArgumentComponent_Conditional_0_For_2_Template, 7, 18, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form());
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
var validateType = (type) => (control) => {
  let value = "";
  try {
    value = JSON.parse(control.value);
  } catch {
    value = control.value;
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
var FunctionArgumentComponent = class _FunctionArgumentComponent extends AsyncHandler {
  method = input(void 0, ...ngDevMode ? [{ debugName: "method" }] : []);
  valid = output();
  form = signal(new UntypedFormGroup({}), ...ngDevMode ? [{ debugName: "form" }] : []);
  value;
  required = {};
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
    if (!method && !method.order.length)
      return;
    const form_controls = {};
    for (const prop in method.params) {
      const prop_details = method.params[prop];
      const optional = "default" in prop_details;
      this.required[prop] = !optional;
      form_controls[prop] = new UntypedFormControl((this.value ? this.value[prop] : "") || "", !optional ? [
        validateType(prop_details.type),
        Validators.required
      ] : [validateType(prop_details.type)]);
      if (optional) {
        try {
          this.defaults[prop] = JSON.stringify(prop_details.default);
        } catch {
          this.defaults[prop] = prop_details.default;
        }
      }
    }
    this.form.set(new UntypedFormGroup(form_controls));
    this.valid.emit(this.form()?.valid);
    this.subscription("form", this.form().valueChanges.subscribe((v) => this.setValue(v)));
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value = new_value || {};
    this.valid.emit(this.form()?.valid);
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value = value || {};
    if (!value || !this.form)
      return;
    this.form().patchValue(value);
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FunctionArgumentComponent_BaseFactory;
    return function FunctionArgumentComponent_Factory(__ngFactoryType__) {
      return (\u0275FunctionArgumentComponent_BaseFactory || (\u0275FunctionArgumentComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FunctionArgumentComponent)))(__ngFactoryType__ || _FunctionArgumentComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FunctionArgumentComponent, selectors: [["function-arguments"]], inputs: { method: [1, "method"] }, outputs: { valid: "valid" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _FunctionArgumentComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "pl-8", 3, "formGroup"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-4"], ["field", "", 1, "relative", "flex", "items-center", "space-x-2"], [1, "border-base-200", "absolute", "left-0", "w-4", "-translate-x-full", "-translate-y-1/2", "transform", "border-b-2", "border-l-2"], ["appearance", "outline", 1, "h-14", "w-1/2", "flex-1"], ["matInput", "", 3, "name", "formControlName", "placeholder"], [1, "w-16", "rounded-sm", "px-2", "py-1", "text-center", "text-xs"], [1, "opacity-30"]], template: function FunctionArgumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, FunctionArgumentComponent_Conditional_0_Template, 3, 1, "form", 0)(1, FunctionArgumentComponent_Conditional_1_Template, 4, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : 1);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\ninput[_ngcontent-%COMP%] {\n  font-family: var(--mono-font);\n}\n/*# sourceMappingURL=function-argument.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FunctionArgumentComponent, [{
    type: Component,
    args: [{ selector: "function-arguments", template: `
        @if (form()) {
            <form class="pl-8" [formGroup]="form()">
                @for (key of method().order; track key; let i = $index) {
                    <div field class="relative flex items-center space-x-2">
                        <div
                            class="border-base-200 absolute left-0 w-4 -translate-x-full -translate-y-1/2 transform border-b-2 border-l-2"
                            [class.h-6]="i === 0"
                            [class.h-14]="i !== 0"
                        ></div>
                        <!-- <label [for]="key">{{ key }}</label> -->
                        <mat-form-field
                            class="h-14 w-1/2 flex-1"
                            appearance="outline"
                        >
                            <input
                                [name]="key"
                                matInput
                                [formControlName]="key"
                                [placeholder]="
                                    key +
                                    (defaults[key] ? ' = ' + defaults[key] : '')
                                "
                            />
                        </mat-form-field>
                        <div
                            class="w-16 rounded-sm px-2 py-1 text-center text-xs"
                            [class.bg-success]="required[key]"
                            [class.text-success-content]="required[key]"
                            [class.bg-base-200]="!required[key]"
                            [class.text-base-content]="!required[key]"
                        >
                            {{
                                (required[key]
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
    ], imports: [
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ], styles: ["/* angular:styles/component:css;db5d7a027ab0a8f92cd3b5fbd3a40f8d6c4b919b25a7d3d745546ade88155ef4;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/system-exec/function-argument.component.ts */\ninput {\n  font-family: var(--mono-font);\n}\n/*# sourceMappingURL=function-argument.component.css.map */\n"] }]
  }], null, { method: [{ type: Input, args: [{ isSignal: true, alias: "method", required: false }] }], valid: [{ type: Output, args: ["valid"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FunctionArgumentComponent, { className: "FunctionArgumentComponent", filePath: "src/app/ui/custom-fields/system-exec/function-argument.component.ts", lineNumber: 122 });
})();

// src/app/ui/custom-fields/system-exec/select-method.component.ts
function SelectMethodComponent_Conditional_0_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
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
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SelectMethodComponent_Conditional_0_Conditional_0_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.method, $event) || (ctx_r1.method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SelectMethodComponent_Conditional_0_Conditional_0_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setValue($event));
    });
    \u0275\u0275repeaterCreate(3, SelectMethodComponent_Conditional_0_Conditional_0_For_4_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.EXECUTE_METHOD_SELECT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.method);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 4, ctx_r1.method_list));
  }
}
function SelectMethodComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 4);
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
    \u0275\u0275conditionalCreate(0, SelectMethodComponent_Conditional_0_Conditional_0_Template, 6, 6, "mat-form-field", 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, SelectMethodComponent_Conditional_0_Conditional_2_Template, 4, 3, "div", 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.method_list)) == null ? null : tmp_1_0.length) ? 0 : 2);
  }
}
function SelectMethodComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "mat-spinner", 5);
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
  system = input(void 0, ...ngDevMode ? [{ debugName: "system" }] : []);
  /** ID of the system to select the module from */
  module = input(void 0, ...ngDevMode ? [{ debugName: "module" }] : []);
  _system = new BehaviorSubject("");
  _module = new BehaviorSubject({});
  method = signal(void 0, ...ngDevMode ? [{ debugName: "method" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  method_list = combineLatest([this._system, this._module]).pipe(distinctUntilChanged(), tap(() => this.loading.set(true)), switchMap(([id, { module, index }]) => !!id && !!module ? ha(id, module, index) : of({})), catchError(() => of({})), map((fn_mapping) => Object.keys(fn_mapping || {}).map((i) => __spreadValues({
    name: i
  }, fn_mapping[i]))), tap(() => this.loading.set(false)), shareReplay(1));
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  ngOnInit() {
    this.subscription("methods", this.method_list.subscribe((list) => {
      const active = list.find((_) => _.name === this.method?.name);
      if (active)
        this.setValue(active);
    }));
  }
  ngOnChanges(changes) {
    if (changes.system) {
      this._system.next(this.system().id);
    }
    if (changes.module) {
      this._module.next(this.module());
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.method.set(new_value);
    if (this._onChange && !this.loading()) {
      this._onChange(new_value);
    }
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMethodComponent_BaseFactory;
    return function SelectMethodComponent_Factory(__ngFactoryType__) {
      return (\u0275SelectMethodComponent_BaseFactory || (\u0275SelectMethodComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMethodComponent)))(__ngFactoryType__ || _SelectMethodComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectMethodComponent, selectors: [["select-module-method"]], inputs: { system: [1, "system"], module: [1, "module"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectMethodComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "space-x-2", "p-4"], ["appearance", "outline", 1, "h-14", "w-full"], [3, "ngModelChange", "placeholder", "ngModel"], [3, "value"], [1, "opacity-30"], ["diameter", "32"]], template: function SelectMethodComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SelectMethodComponent_Conditional_0_Template, 3, 3)(1, SelectMethodComponent_Conditional_1_Template, 5, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    CommonModule,
    TranslatePipe,
    AsyncPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMethodComponent, [{
    type: Component,
    args: [{ selector: "select-module-method", template: `
        @if (!loading()) {
            @if ((method_list | async)?.length) {
                <mat-form-field class="h-14 w-full" appearance="outline">
                    <mat-select
                        [placeholder]="
                            'COMMON.EXECUTE_METHOD_SELECT' | translate
                        "
                        [(ngModel)]="method"
                        (ngModelChange)="setValue($event)"
                    >
                        @for (method of method_list | async; track method) {
                            <mat-option [value]="method">
                                {{ method.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            } @else {
                <div class="flex items-center justify-center space-x-2 p-4">
                    <p class="opacity-30">
                        {{ 'COMMON.EXECUTE_METHOD_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.EXECUTE_METHOD_LOADING' | translate }}</p>
            </div>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectMethodComponent),
        multi: true
      }
    ], imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      CommonModule
    ] }]
  }], null, { system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }], module: [{ type: Input, args: [{ isSignal: true, alias: "module", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectMethodComponent, { className: "SelectMethodComponent", filePath: "src/app/ui/custom-fields/system-exec/select-method.component.ts", lineNumber: 88 });
})();

// src/app/ui/custom-fields/system-exec/select-module.component.ts
function SelectModuleComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
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
    \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-select", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SelectModuleComponent_Conditional_0_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.module, $event) || (ctx_r1.module = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SelectModuleComponent_Conditional_0_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setValue($event));
    });
    \u0275\u0275repeaterCreate(3, SelectModuleComponent_Conditional_0_For_4_Template, 2, 4, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.EXECUTE_MODULE_SELECT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.module);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 4, ctx_r1.modules));
  }
}
function SelectModuleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 4);
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
  system = input(void 0, ...ngDevMode ? [{ debugName: "system" }] : []);
  /** Trigger to refresh modules list */
  refresh = input(0, ...ngDevMode ? [{ debugName: "refresh" }] : []);
  _system = new BehaviorSubject("");
  _change = new BehaviorSubject(0);
  module = signal(void 0, ...ngDevMode ? [{ debugName: "module" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  modules = combineLatest([this._system, this._change]).pipe(distinctUntilChanged(([id1, time1], [id2, time2]) => id1 === id2 && time1 === time2), tap(() => this.loading.set(true)), switchMap(([id]) => id ? uc({
    control_system_id: id,
    limit: 500,
    complete: true
  }).pipe(map(({ data }) => data)) : of([])), catchError(() => of([])), map((mod_list) => {
    mod_list.sort((a, b) => this.system().modules.indexOf(a.id) - this.system().modules.indexOf(b.id));
    return mod_list.map((mod) => ({
      id: mod.id,
      name: mod.name,
      running: mod.running,
      module: mod.custom_name || mod.name,
      index: calculateModuleIndex(mod_list, mod)
    }));
  }), tap(() => this.loading.set(false)), shareReplay(1));
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  ngOnInit() {
    this.subscription("modules", this.modules.subscribe((list) => {
      const active = list.find((_) => _.module === this.module()?.module && _.index === this.module()?.index);
      if (active)
        this.setValue(active);
    }));
  }
  ngOnChanges(changes) {
    if (changes.system) {
      const system = this.system();
      this._system.next(system.id);
      this._change.next(system.updated_at);
    }
    if (changes.refresh && !changes.refresh.firstChange) {
      this._change.next(Date.now());
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    console.log("setValue", new_value);
    this.module.set(new_value);
    if (this._onChange && !this.loading()) {
      this._onChange(new_value);
    }
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectModuleComponent_BaseFactory;
    return function SelectModuleComponent_Factory(__ngFactoryType__) {
      return (\u0275SelectModuleComponent_BaseFactory || (\u0275SelectModuleComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectModuleComponent)))(__ngFactoryType__ || _SelectModuleComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectModuleComponent, selectors: [["select-system-module"]], inputs: { system: [1, "system"], refresh: [1, "refresh"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SelectModuleComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["appearance", "outline", 1, "h-14", "w-full"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-4"], [3, "ngModelChange", "placeholder", "ngModel"], [3, "disabled", "value"], ["diameter", "32"]], template: function SelectModuleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SelectModuleComponent_Conditional_0_Template, 6, 6, "mat-form-field", 0)(1, SelectModuleComponent_Conditional_1_Template, 5, 3, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading() ? 0 : 1);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    CommonModule,
    TranslatePipe,
    AsyncPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectModuleComponent, [{
    type: Component,
    args: [{ selector: `select-system-module`, template: `
        @if (!loading()) {
            <mat-form-field class="h-14 w-full" appearance="outline">
                <mat-select
                    [placeholder]="'COMMON.EXECUTE_MODULE_SELECT' | translate"
                    [(ngModel)]="module"
                    (ngModelChange)="setValue($event)"
                >
                    @for (mod of modules | async; track mod) {
                        <mat-option [disabled]="!mod.running" [value]="mod">
                            {{ mod.module }} {{ mod.index }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.EXECUTE_MODULE_LOADING' | translate }}</p>
            </div>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectModuleComponent),
        multi: true
      }
    ], imports: [
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatSelectModule,
      TranslatePipe,
      FormsModule,
      CommonModule
    ] }]
  }], null, { system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }], refresh: [{ type: Input, args: [{ isSignal: true, alias: "refresh", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectModuleComponent, { className: "SelectModuleComponent", filePath: "src/app/ui/custom-fields/system-exec/select-module.component.ts", lineNumber: 81 });
})();

// src/app/ui/custom-fields/system-exec/execute-method-field.component.ts
function ExecuteMethodFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select-module-method", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ExecuteMethodFieldComponent_Conditional_3_Template_select_module_method_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fn, $event) || (ctx_r1.fn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExecuteMethodFieldComponent_Conditional_3_Template_select_module_method_ngModelChange_0_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(((tmp_2_0 = ctx_r1.fn()) == null ? null : tmp_2_0.order == null ? null : tmp_2_0.order.length) === 0 ? ctx_r1.postArguments({}) : "");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("system", ctx_r1.system())("module", ctx_r1.module());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fn);
  }
}
function ExecuteMethodFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "function-arguments", 7);
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
    \u0275\u0275property("method", ctx_r1.fn())("ngModel", ctx_r1.arguments());
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.EXECUTE_CLEAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.fn() || !ctx_r1.valid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "COMMON.EXECUTE_PERFORM"), " ");
  }
}
function ExecuteMethodFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 10)(2, "mat-spinner", 11);
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
  _dialog = inject(MatDialog);
  zone = input(void 0, ...ngDevMode ? [{ debugName: "zone" }] : []);
  /** ID of the system to select the module from */
  system = input(void 0, ...ngDevMode ? [{ debugName: "system" }] : []);
  /** Whether component is allowed to execute methods on the system */
  can_execute = input(true, ...ngDevMode ? [{ debugName: "can_execute" }] : []);
  /** Trigger to refresh modules list */
  refresh = input(0, ...ngDevMode ? [{ debugName: "refresh" }] : []);
  valid = signal(true, ...ngDevMode ? [{ debugName: "valid" }] : []);
  module = signal(void 0, ...ngDevMode ? [{ debugName: "module" }] : []);
  fn = signal(void 0, ...ngDevMode ? [{ debugName: "fn" }] : []);
  arguments = signal({}, ...ngDevMode ? [{ debugName: "arguments" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this._onChange) {
      this._onChange(new_value);
    }
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
  clear() {
    this.module.set(null);
    this.fn.set(null);
    this.arguments.set({});
  }
  async execute() {
    this.loading.set(true);
    this.arguments.set(this.arguments() || {});
    const method = this.zone() ? Qa : ca;
    console.log("Fn:", this.fn(), this.arguments());
    const result = await lastValueFrom(method(this.zone() || this.system().id, this.fn().name, this.module().module, this.module().index, this.fn().order.map((key) => {
      const fn_details = this.fn().params[key];
      try {
        return JSON.parse(this.arguments()[key]);
      } catch {
        return (this.arguments()[key] !== "" ? this.arguments()[key] : null) ?? fn_details?.default ?? null;
      }
    }))).catch((err) => {
      if (typeof err === "string" && err.length < 128) {
        notifyError(err);
      } else {
        notifyError(`Executing '${this.fn().name}' failed.
View Error?`, "View", () => this.viewDetails(err));
      }
      this.loading.set(false);
      throw err;
    });
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
  ])], decls: 7, vars: 9, consts: [[1, "relative"], [3, "ngModelChange", "system", "refresh", "ngModel"], [3, "system", "module", "ngModel"], [3, "method", "ngModel"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "absolute", "-inset-2", "flex", "flex-col", "items-center", "justify-center", "rounded-sm"], [3, "ngModelChange", "system", "module", "ngModel"], [3, "valid", "ngModelChange", "method", "ngModel"], ["btn", "", 1, "inverse", "flex-1", 3, "click"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], [1, "bg-base-100", "absolute", "inset-0", "opacity-60"], ["diameter", "32"]], template: function ExecuteMethodFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "select-system-module", 1);
      \u0275\u0275twoWayListener("ngModelChange", function ExecuteMethodFieldComponent_Template_select_system_module_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.module, $event) || (ctx.module = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ExecuteMethodFieldComponent_Template_select_system_module_ngModelChange_2_listener() {
        return ctx.fn.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ExecuteMethodFieldComponent_Conditional_3_Template, 1, 3, "select-module-method", 2);
      \u0275\u0275conditionalCreate(4, ExecuteMethodFieldComponent_Conditional_4_Template, 1, 2, "function-arguments", 3);
      \u0275\u0275conditionalCreate(5, ExecuteMethodFieldComponent_Conditional_5_Template, 7, 7, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ExecuteMethodFieldComponent_Conditional_6_Template, 6, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("pointer-events-none", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("system", ctx.system())("refresh", ctx.refresh());
      \u0275\u0275twoWayProperty("ngModel", ctx.module);
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
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
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
                    [(ngModel)]="module"
                    (ngModelChange)="fn.set(null)"
                ></select-system-module>
                @if (module()) {
                    <select-module-method
                        [system]="system()"
                        [module]="module()"
                        [(ngModel)]="fn"
                        (ngModelChange)="
                            fn()?.order?.length === 0 ? postArguments({}) : ''
                        "
                    ></select-module-method>
                }
                @if (fn()) {
                    <function-arguments
                        [method]="fn()"
                        [ngModel]="arguments()"
                        (valid)="valid.set($event)"
                        (ngModelChange)="postArguments($event)"
                    ></function-arguments>
                }
                @if (can_execute()) {
                    <div class="flex w-full items-center space-x-2">
                        <button class="inverse flex-1" btn (click)="clear()">
                            {{ 'COMMON.EXECUTE_CLEAR' | translate }}
                        </button>
                        <button
                            class="flex-1"
                            [disabled]="!fn() || !valid()"
                            btn
                            matRipple
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
                    <mat-spinner diameter="32"></mat-spinner>
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
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      FormsModule,
      SelectModuleComponent,
      SelectMethodComponent,
      FunctionArgumentComponent
    ] }]
  }], null, { zone: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: false }] }], system: [{ type: Input, args: [{ isSignal: true, alias: "system", required: false }] }], can_execute: [{ type: Input, args: [{ isSignal: true, alias: "can_execute", required: false }] }], refresh: [{ type: Input, args: [{ isSignal: true, alias: "refresh", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExecuteMethodFieldComponent, { className: "ExecuteMethodFieldComponent", filePath: "src/app/ui/custom-fields/system-exec/execute-method-field.component.ts", lineNumber: 100 });
})();

export {
  ExecuteMethodFieldComponent
};
//# sourceMappingURL=chunk-HCYTV5BS.js.map
