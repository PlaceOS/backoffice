import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-AGRAJY4Y.js";
import {
  HotkeysService
} from "./chunk-JAMMTH5K.js";
import {
  getInvalidSignalFields
} from "./chunk-KJQGK2OM.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-LNIYAS5O.js";
import {
  openConfirmModal
} from "./chunk-7JIOXWGJ.js";
import "./chunk-7GTI4RRT.js";
import {
  SimpleTableComponent
} from "./chunk-BVAQ3KBJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-V3LOQHMH.js";
import "./chunk-I55NGSFI.js";
import {
  SettingsToggleComponent
} from "./chunk-AHMBEMXE.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6QZVPNC3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-2SRIA4UK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-X6EP7JXK.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-RYWQOUT3.js";
import "./chunk-N7YQCQZM.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-TH36Z5QV.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-J6BBXARK.js";
import "./chunk-EVUO4PXU.js";
import "./chunk-RMYYKPNF.js";
import {
  AsyncHandler
} from "./chunk-ALQ3QZS6.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-TPBAO5IV.js";
import "./chunk-HQA27L6T.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ERVNLYZR.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-4HEIKSFD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-YTRY35Y7.js";
import {
  MatRipple
} from "./chunk-43FRBZB3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-3LH3QF7A.js";
import {
  Component,
  DOCUMENT,
  Dh,
  EventEmitter,
  Input,
  Nh,
  Oh,
  Output,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  lr,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  wh,
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
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-LPT3PWXX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/signage-plugins/schema-form.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
function SchemaFormComponent_Conditional_0_For_2_Case_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 2);
    \u0275\u0275listener("ngModelChange", function SchemaFormComponent_Conditional_0_For_2_Case_0_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateField(field_r2.key, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(2, SchemaFormComponent_Conditional_0_For_2_Case_0_Conditional_2_Template, 2, 1, "p", 3);
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.fieldValue(field_r2.key))("disabled", ctx_r2.disabled())("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.description ? 2 : -1);
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275property("value", opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5.label, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "mat-select", 2);
    \u0275\u0275listener("ngModelChange", function SchemaFormComponent_Conditional_0_For_2_Case_1_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateField(field_r2.key, $event));
    });
    \u0275\u0275repeaterCreate(7, SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template, 2, 2, "mat-option", 6, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.fieldValue(field_r2.key))("disabled", ctx_r2.disabled())("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r2.options);
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 7);
    \u0275\u0275listener("ngModelChange", function SchemaFormComponent_Conditional_0_For_2_Case_2_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateField(field_r2.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.fieldValue(field_r2.key))("disabled", ctx_r2.disabled())("ngModelOptions", \u0275\u0275pureFunction0(8, _c0))("placeholder", field_r2.label);
    \u0275\u0275control();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 8);
    \u0275\u0275listener("ngModelChange", function SchemaFormComponent_Conditional_0_For_2_Case_3_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateField(field_r2.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r2.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r2.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.fieldValue(field_r2.key))("disabled", ctx_r2.disabled())("ngModelOptions", \u0275\u0275pureFunction0(8, _c0))("placeholder", field_r2.label);
    \u0275\u0275control();
  }
}
function SchemaFormComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_For_2_Case_0_Template, 3, 6)(1, SchemaFormComponent_Conditional_0_For_2_Case_1_Template, 9, 8, "div", 1)(2, SchemaFormComponent_Conditional_0_For_2_Case_2_Template, 7, 9, "div", 1)(3, SchemaFormComponent_Conditional_0_For_2_Case_3_Template, 7, 9, "div", 1);
  }
  if (rf & 2) {
    let tmp_11_0;
    const field_r2 = ctx.$implicit;
    \u0275\u0275conditional((tmp_11_0 = field_r2.type) === "boolean" ? 0 : tmp_11_0 === "select" ? 1 : tmp_11_0 === "number" ? 2 : 3);
  }
}
function SchemaFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, SchemaFormComponent_Conditional_0_For_2_Template, 4, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.fields());
  }
}
function parseSchemaFields(schema) {
  if (!schema?.properties)
    return [];
  const required_keys = schema.required || [];
  const properties = schema.properties;
  return Object.entries(properties).map(([key, prop]) => {
    const json_type = prop.type;
    const has_enum = Array.isArray(prop.enum);
    let type = "string";
    if (has_enum) {
      type = "select";
    } else if (json_type === "boolean") {
      type = "boolean";
    } else if (json_type === "number" || json_type === "integer") {
      type = "number";
    }
    const options = has_enum ? prop.enum.map((v) => ({
      label: String(v),
      value: v
    })) : void 0;
    return {
      key,
      type,
      label: prop.title || key,
      description: prop.description || "",
      required: required_keys.includes(key),
      default_value: prop.default ?? null,
      options
    };
  });
}
function buildFormFromFields(fields, defaults = {}) {
  const values = {};
  for (const field of fields) {
    values[field.key] = defaults[field.key] ?? field.default_value ?? null;
  }
  return values;
}
var SchemaFormComponent = class _SchemaFormComponent {
  schema = input(
    null,
    ...ngDevMode ? [{ debugName: "schema" }] : (
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
  fields = computed(
    () => {
      const s = this.schema();
      return s ? parseSchemaFields(s) : [];
    },
    ...ngDevMode ? [{ debugName: "fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  defaults_form = signal(
    null,
    ...ngDevMode ? [{ debugName: "defaults_form" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _on_change;
  _on_touch;
  _value = {};
  constructor() {
    effect(() => {
      const schema_fields = this.fields();
      if (!schema_fields.length) {
        this.defaults_form.set(null);
        return;
      }
      this._value = buildFormFromFields(schema_fields, this._value);
      this.defaults_form.set(this._value);
    });
  }
  writeValue(value) {
    this._value = value || {};
    this.defaults_form.set(buildFormFromFields(this.fields(), this._value));
  }
  registerOnChange(fn) {
    this._on_change = fn;
  }
  registerOnTouched(fn) {
    this._on_touch = fn;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  fieldValue(key) {
    return this.defaults_form()?.[key] ?? null;
  }
  updateField(key, value) {
    if (this.disabled())
      return;
    this._value = __spreadProps(__spreadValues({}, this.defaults_form() || {}), { [key]: value });
    this.defaults_form.set(this._value);
    this._on_change?.(this._value);
    this._on_touch?.();
  }
  /** Returns true if the generated defaults form is valid. */
  isValid() {
    const value = this.defaults_form() || {};
    return this.fields().every((field) => {
      if (!field.required)
        return true;
      const field_value = value[field.key];
      if (field_value == null)
        return false;
      if (typeof field_value === "string")
        return field_value.length > 0;
      if (Array.isArray(field_value))
        return field_value.length > 0;
      return true;
    });
  }
  static \u0275fac = function SchemaFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SchemaFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SchemaFormComponent, selectors: [["schema-form"]], inputs: { schema: [1, "schema"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SchemaFormComponent),
      multi: true
    }
  ])], decls: 1, vars: 1, consts: [[1, "flex", "flex-col", "gap-2"], [1, "field"], [3, "ngModelChange", "ngModel", "disabled", "ngModelOptions"], [1, "mt-0", "text-xs", "opacity-60"], [3, "for"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "value"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "placeholder"], ["matInput", "", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "placeholder"]], template: function SchemaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.fields().length ? 0 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, SettingsToggleComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchemaFormComponent, [{
    type: Component,
    args: [{ selector: "schema-form", template: `
        @if (fields().length) {
            <div class="flex flex-col gap-2">
                @for (field of fields(); track field.key) {
                    @switch (field.type) {
                        @case ('boolean') {
                            <settings-toggle
                                [ngModel]="fieldValue(field.key)"
                                [disabled]="disabled()"
                                (ngModelChange)="updateField(field.key, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                {{ field.label }}
                            </settings-toggle>
                            @if (field.description) {
                                <p class="mt-0 text-xs opacity-60">
                                    {{ field.description }}
                                </p>
                            }
                        }
                        @case ('select') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select
                                        [ngModel]="fieldValue(field.key)"
                                        [disabled]="disabled()"
                                        (ngModelChange)="
                                            updateField(field.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    >
                                        @for (
                                            opt of field.options;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">
                                                {{ opt.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @case ('number') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [ngModel]="fieldValue(field.key)"
                                        [disabled]="disabled()"
                                        (ngModelChange)="
                                            updateField(field.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @default {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        [ngModel]="fieldValue(field.key)"
                                        [disabled]="disabled()"
                                        (ngModelChange)="
                                            updateField(field.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    }
                }
            </div>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SchemaFormComponent),
        multi: true
      }
    ], imports: [
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      SettingsToggleComponent
    ] }]
  }], () => [], { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchemaFormComponent, { className: "SchemaFormComponent", filePath: "src/app/admin/signage-plugins/schema-form.component.ts", lineNumber: 232 });
})();

// src/app/admin/signage-plugins/signage-plugin-embed.component.ts
var _c02 = ["plugin_el"];
function SignagePluginEmbedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 1, 0);
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx.href, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var API_VERSION = "signage-plugin/v1";
function resolveSignagePluginUrl(uri, base_uri) {
  if (!uri)
    return null;
  try {
    return new URL(uri, base_uri);
  } catch {
    return null;
  }
}
var SignagePluginEmbedComponent = class _SignagePluginEmbedComponent extends AsyncHandler {
  _document = inject(DOCUMENT);
  plugin = input(
    null,
    ...ngDevMode ? [{ debugName: "plugin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  config = input(
    null,
    ...ngDevMode ? [{ debugName: "config" }] : (
      /* istanbul ignore next */
      []
    )
  );
  play = input(
    0,
    ...ngDevMode ? [{ debugName: "play" }] : (
      /* istanbul ignore next */
      []
    )
  );
  details = model(
    null,
    ...ngDevMode ? [{ debugName: "details" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema = model(
    {},
    ...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    )
  );
  status = model(
    "unknown",
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_error = output();
  _plugin_el = viewChild(
    "plugin_el",
    ...ngDevMode ? [{ debugName: "_plugin_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_url = computed(
    () => resolveSignagePluginUrl(this.plugin()?.uri, this._document.baseURI),
    ...ngDevMode ? [{ debugName: "plugin_url" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_origin = computed(
    () => this.plugin_url()?.origin || "",
    ...ngDevMode ? [{ debugName: "plugin_origin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _handle_messages = (e) => this._handleMessage(e);
  ngOnInit() {
    this._setupChannels();
  }
  ngOnChanges(changes) {
    if (changes.play && this.play())
      this.send("play");
    if (changes.config && this.config())
      this.send("config", this.config());
  }
  send(type, payload = null) {
    this._plugin_el()?.nativeElement?.contentWindow.postMessage({ api: API_VERSION, type, payload }, this.plugin_origin());
  }
  _setupChannels() {
    if (!this.plugin()?.uri)
      return;
    this.subscription("channel", () => window.removeEventListener("message", this._handle_messages));
    window.addEventListener("message", this._handle_messages);
  }
  _handleMessage(event) {
    if (event.origin !== this.plugin_origin())
      return;
    if (event.source !== this._plugin_el()?.nativeElement?.contentWindow)
      return;
    const msg = event.data;
    if (!msg || msg.api !== API_VERSION || typeof msg.type !== "string")
      return;
    this.status.set(msg.type);
    switch (msg.type) {
      case "loaded":
        this.details.set(msg.payload);
        this.schema.set(msg.payload?.config_schema);
        break;
      case "error":
        this.plugin_error.emit(msg.payload);
        break;
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SignagePluginEmbedComponent_BaseFactory;
    return function SignagePluginEmbedComponent_Factory(__ngFactoryType__) {
      return (\u0275SignagePluginEmbedComponent_BaseFactory || (\u0275SignagePluginEmbedComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignagePluginEmbedComponent)))(__ngFactoryType__ || _SignagePluginEmbedComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePluginEmbedComponent, selectors: [["signage-plugin-embed"]], viewQuery: function SignagePluginEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._plugin_el, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { plugin: [1, "plugin"], config: [1, "config"], play: [1, "play"], details: [1, "details"], schema: [1, "schema"], status: [1, "status"] }, outputs: { details: "detailsChange", schema: "schemaChange", status: "statusChange", plugin_error: "plugin_error" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["plugin_el", ""], ["sandbox", "allow-scripts allow-same-origin", "referrerpolicy", "no-referrer", 3, "src"]], template: function SignagePluginEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SignagePluginEmbedComponent_Conditional_0_Template, 3, 4, "iframe", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.plugin_url()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [SafePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePluginEmbedComponent, [{
    type: Component,
    args: [{ selector: "signage-plugin-embed", template: `
        @if (plugin_url(); as plugin_url) {
            <iframe
                #plugin_el
                sandbox="allow-scripts allow-same-origin"
                referrerpolicy="no-referrer"
                [src]="plugin_url.href | safe: 'resource'"
            >
            </iframe>
        }
    `, imports: [SafePipe] }]
  }], null, { plugin: [{ type: Input, args: [{ isSignal: true, alias: "plugin", required: false }] }], config: [{ type: Input, args: [{ isSignal: true, alias: "config", required: false }] }], play: [{ type: Input, args: [{ isSignal: true, alias: "play", required: false }] }], details: [{ type: Input, args: [{ isSignal: true, alias: "details", required: false }] }, { type: Output, args: ["detailsChange"] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }, { type: Output, args: ["schemaChange"] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }, { type: Output, args: ["statusChange"] }], plugin_error: [{ type: Output, args: ["plugin_error"] }], _plugin_el: [{ type: ViewChild, args: ["plugin_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePluginEmbedComponent, { className: "SignagePluginEmbedComponent", filePath: "src/app/admin/signage-plugins/signage-plugin-embed.component.ts", lineNumber: 98 });
})();

// src/app/admin/signage-plugins/signage-plugins.utilities.ts
function generateSignagePluginFormModel(plugin) {
  return {
    name: plugin?.name || "",
    description: plugin?.description || "",
    plugin_type: plugin?.plugin_type || "plugin",
    uri: plugin?.uri || "",
    playback_type: plugin?.playback_type || "static",
    enabled: plugin?.enabled ?? true,
    defaults: plugin?.defaults || {}
  };
}
var applySignagePluginFormSchema = (path) => {
  required(path.name);
  required(path.uri);
};

// src/app/admin/signage-plugins/signage-plugin-modal.component.ts
var _c03 = ["schema_form_el"];
function SignagePluginModalComponent_Conditional_2_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-progress-bar", 23);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.SIGNAGE_PLUGINS_SCHEMA_LOADING"));
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.SIGNAGE_PLUGINS_SCHEMA_ERROR"), " ");
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "schema-form", 24, 0);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("schema", ctx_r0.schema())("formField", ctx_r0.form.defaults);
    \u0275\u0275control();
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.SIGNAGE_PLUGINS_SCHEMA_EMPTY"), " ");
  }
}
function SignagePluginModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2)(1, "div", 4)(2, "label", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 6);
    \u0275\u0275element(8, "input", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 4)(14, "label", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 6);
    \u0275\u0275element(18, "textarea", 7);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 4)(21, "label", 9);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 6)(25, "mat-select", 10)(26, "mat-option", 11);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 12);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 4)(33, "label", 13);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "mat-form-field", 6);
    \u0275\u0275element(39, "input", 7);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(41, "mat-error");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 4)(45, "label", 14);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-form-field", 6);
    \u0275\u0275element(49, "input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 16);
    \u0275\u0275element(51, "settings-toggle", 17);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 4)(54, "div", 18);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(57, SignagePluginModalComponent_Conditional_2_Conditional_57_Template, 5, 3, "div", 19);
    \u0275\u0275conditionalCreate(58, SignagePluginModalComponent_Conditional_2_Conditional_58_Template, 3, 3, "div", 20);
    \u0275\u0275conditionalCreate(59, SignagePluginModalComponent_Conditional_2_Conditional_59_Template, 3, 2, "div", 21);
    \u0275\u0275conditionalCreate(60, SignagePluginModalComponent_Conditional_2_Conditional_60_Template, 3, 3, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 28, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 30, "COMMON.FIELD_NAME"))("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 32, "ADMIN.SIGNAGE_PLUGINS_NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 34, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 36, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r0.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 38, "ADMIN.SIGNAGE_PLUGINS_FIELD_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.plugin_type);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 40, "ADMIN.SIGNAGE_PLUGINS_TYPE_PLUGIN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 42, "ADMIN.SIGNAGE_PLUGINS_TYPE_WIDGET"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r0.form.uri().invalid() && ctx_r0.form.uri().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 44, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 46, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"))("formField", ctx_r0.form.uri);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 48, "ADMIN.SIGNAGE_PLUGINS_URI_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 50, "ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.playback_type_name());
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(52, 52, "ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED"))("formField", ctx_r0.form.enabled);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 54, "ADMIN.SIGNAGE_PLUGINS_FIELD_DEFAULTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.schema_loading() ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.schema_error() ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.schema() ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.schema_loading() && !ctx_r0.schema() && !ctx_r0.schema_error() ? 60 : -1);
  }
}
function SignagePluginModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "signage-plugin-embed", 25);
    \u0275\u0275listener("detailsChange", function SignagePluginModalComponent_Conditional_3_Template_signage_plugin_embed_detailsChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPluginLoaded($event));
    })("schemaChange", function SignagePluginModalComponent_Conditional_3_Template_signage_plugin_embed_schemaChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSchemaLoaded($event));
    })("plugin_error", function SignagePluginModalComponent_Conditional_3_Template_signage_plugin_embed_plugin_error_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPluginError($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("plugin", ctx_r0.embed_plugin());
  }
}
var SignagePluginModalComponent = class _SignagePluginModalComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  _schema_form_el = viewChild(
    "schema_form_el",
    ...ngDevMode ? [{ debugName: "_schema_form_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  event = new EventEmitter();
  edit;
  formModel = signal(
    generateSignagePluginFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applySignagePluginFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_uri = computed(
    () => this.formModel().uri,
    ...ngDevMode ? [{ debugName: "plugin_uri" }] : (
      /* istanbul ignore next */
      []
    )
  );
  embed_plugin = signal(
    null,
    ...ngDevMode ? [{ debugName: "embed_plugin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema = signal(
    null,
    ...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema_loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "schema_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema_error = signal(
    false,
    ...ngDevMode ? [{ debugName: "schema_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  playback_type = signal(
    "static",
    ...ngDevMode ? [{ debugName: "playback_type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  playback_type_name = computed(
    () => {
      const playback_type = this.playback_type();
      switch (playback_type) {
        case "interactive":
          return i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_INTERACTIVE");
        case "playsthrough":
          return i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_PLAYSTHROUGH");
        default:
          return i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_STATIC");
      }
    },
    ...ngDevMode ? [{ debugName: "playback_type_name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    super();
    effect(() => {
      const uri = this.plugin_uri();
      this.timeout("uri_debounce", () => {
        if (uri) {
          this._loadPlugin(uri);
        } else {
          this.embed_plugin.set(null);
          this.schema.set(null);
          this.schema_loading.set(false);
          this.schema_error.set(false);
          this.playback_type.set("static");
          this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
            playback_type: "static"
          }));
        }
      }, 800);
    });
  }
  ngOnInit() {
    this.edit = !!this._data.item?.id;
    this.playback_type.set(this.formModel().playback_type || "static");
    this.subscription("save_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  onSchemaLoaded(config_schema) {
    this.schema_loading.set(false);
    this.schema_error.set(false);
    if (config_schema && Object.keys(config_schema).length > 0) {
      this.schema.set(config_schema);
    } else {
      this.schema.set(null);
    }
  }
  onPluginLoaded(details) {
    const playback_type = this._resolvePlaybackType(details);
    if (!playback_type)
      return;
    this.playback_type.set(playback_type);
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { playback_type }));
  }
  onPluginError(_error) {
    this.schema_loading.set(false);
    this.schema_error.set(true);
  }
  async submit() {
    const schema_form = this._schema_form_el();
    if (schema_form && !schema_form.isValid()) {
      return notifyError(i18n("ADMIN.SIGNAGE_PLUGINS_DEFAULTS_INVALID"));
    }
    await submit(this.form, async () => {
      this.loading.set(i18n("ADMIN.SIGNAGE_PLUGINS_SAVING"));
      this._dialog_ref.disableClose = true;
      const payload = __spreadProps(__spreadValues(__spreadValues({}, this._data.item), this.formModel()), {
        params: this.schema() || this._data.item?.params || {}
      });
      try {
        const result = await this._data.save(payload);
        this._dialog_ref.disableClose = false;
        this.event.emit({
          reason: "done",
          metadata: { item: result }
        });
        notifySuccess(i18n("ADMIN.SIGNAGE_PLUGINS_SAVE_SUCCESS"));
        this._dialog_ref.close({
          reason: "done",
          metadata: { item: result }
        });
      } catch (err) {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
        notifyError(i18n("ADMIN.SIGNAGE_PLUGINS_SAVE_ERROR", {
          error: JSON.stringify(err.response || err.message || err)
        }));
      }
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
  }
  _loadPlugin(uri) {
    this.schema.set(null);
    this.schema_loading.set(true);
    this.schema_error.set(false);
    this.embed_plugin.set(new lr({ uri }));
    this.timeout("schema_timeout", () => {
      if (this.schema_loading()) {
        this.schema_loading.set(false);
        this.schema_error.set(true);
      }
    }, 1e4);
  }
  _resolvePlaybackType(details) {
    const capabilities = details?.capabilities;
    if (!capabilities)
      return null;
    if (capabilities.static_media)
      return "static";
    if (capabilities.can_finish)
      return "playsthrough";
    return "interactive";
  }
  static \u0275fac = function SignagePluginModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignagePluginModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePluginModalComponent, selectors: [["signage-plugin-modal"]], viewQuery: function SignagePluginModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._schema_form_el, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [["schema_form_el", ""], [3, "save", "heading", "loading"], [1, "flex", "flex-col"], [1, "hidden"], [1, "field"], ["for", "plugin-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "description"], ["for", "plugin-type"], [3, "formField"], ["value", "plugin"], ["value", "widget"], ["for", "plugin-uri"], ["for", "playback-type"], ["id", "playback-type", "matInput", "", "name", "playback-type", "readonly", "", 3, "value"], [1, "field", "mb-4"], [1, "w-full", 3, "label", "formField"], [1, "mb-2"], [1, "flex", "items-center", "space-x-2", "py-2", "text-sm", "opacity-60"], [1, "text-error", "bg-error/10", "rounded-sm", "px-4", "py-2", "text-sm"], [1, "bg-base-200/50", "mb-2", "rounded-sm", "p-2"], [1, "bg-base-200", "rounded-sm", "p-8", "text-center", "text-sm", "opacity-60"], ["mode", "indeterminate", 1, "w-48"], [3, "schema", "formField"], [3, "detailsChange", "schemaChange", "plugin_error", "plugin"]], template: function SignagePluginModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function SignagePluginModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(2, SignagePluginModalComponent_Conditional_2_Template, 61, 56, "form", 2);
      \u0275\u0275conditionalCreate(3, SignagePluginModalComponent_Conditional_3_Template, 2, 1, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 4, ctx.edit ? "ADMIN.SIGNAGE_PLUGINS_EDIT" : "ADMIN.SIGNAGE_PLUGINS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.embed_plugin() ? 3 : -1);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatProgressBarModule,
    MatProgressBar,
    MatSelectModule,
    MatSelect,
    MatOption,
    SchemaFormComponent,
    SettingsToggleComponent,
    SignagePluginEmbedComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePluginModalComponent, [{
    type: Component,
    args: [{ selector: "signage-plugin-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (edit
                    ? 'ADMIN.SIGNAGE_PLUGINS_EDIT'
                    : 'ADMIN.SIGNAGE_PLUGINS_NEW'
                ) | translate
            "
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form class="flex flex-col">
                    <div class="field">
                        <label
                            for="plugin-name"
                            [class.error]="
                                form.name().invalid() && form.name().touched()
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form.name"
                            />
                            <mat-error>{{
                                'ADMIN.SIGNAGE_PLUGINS_NAME_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="plugin-type">
                            {{ 'ADMIN.SIGNAGE_PLUGINS_FIELD_TYPE' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select [formField]="form.plugin_type">
                                <mat-option value="plugin">
                                    {{
                                        'ADMIN.SIGNAGE_PLUGINS_TYPE_PLUGIN'
                                            | translate
                                    }}
                                </mat-option>
                                <mat-option value="widget">
                                    {{
                                        'ADMIN.SIGNAGE_PLUGINS_TYPE_WIDGET'
                                            | translate
                                    }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label
                            for="plugin-uri"
                            [class.error]="
                                form.uri().invalid() && form.uri().touched()
                            "
                        >
                            {{ 'ADMIN.SIGNAGE_PLUGINS_FIELD_URI' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'ADMIN.SIGNAGE_PLUGINS_FIELD_URI'
                                        | translate
                                "
                                [formField]="form.uri"
                            />
                            <mat-error>{{
                                'ADMIN.SIGNAGE_PLUGINS_URI_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="playback-type">
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE'
                                    | translate
                            }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                id="playback-type"
                                matInput
                                name="playback-type"
                                [value]="playback_type_name()"
                                readonly
                            />
                        </mat-form-field>
                    </div>
                    <div class="field mb-4">
                        <settings-toggle
                            class="w-full"
                            [label]="
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED'
                                    | translate
                            "
                            [formField]="form.enabled"
                        />
                    </div>
                    <!-- Schema / Defaults section -->
                    <div class="field">
                        <div class="mb-2">
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_DEFAULTS'
                                    | translate
                            }}
                        </div>
                        @if (schema_loading()) {
                            <div
                                class="flex items-center space-x-2 py-2 text-sm opacity-60"
                            >
                                <mat-progress-bar
                                    mode="indeterminate"
                                    class="w-48"
                                />
                                <span>{{
                                    'ADMIN.SIGNAGE_PLUGINS_SCHEMA_LOADING'
                                        | translate
                                }}</span>
                            </div>
                        }
                        @if (schema_error()) {
                            <div
                                class="text-error bg-error/10 rounded-sm px-4 py-2 text-sm"
                            >
                                {{
                                    'ADMIN.SIGNAGE_PLUGINS_SCHEMA_ERROR'
                                        | translate
                                }}
                            </div>
                        }
                        @if (schema()) {
                            <div class="bg-base-200/50 mb-2 rounded-sm p-2">
                                <schema-form
                                    #schema_form_el
                                    [schema]="schema()"
                                    [formField]="form.defaults"
                                />
                            </div>
                        }
                        @if (
                            !schema_loading() && !schema() && !schema_error()
                        ) {
                            <div
                                class="bg-base-200 rounded-sm p-8 text-center text-sm opacity-60"
                            >
                                {{
                                    'ADMIN.SIGNAGE_PLUGINS_SCHEMA_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                    </div>
                </form>
            }
            <!-- Hidden embed to load plugin schema -->
            @if (embed_plugin()) {
                <div class="hidden">
                    <signage-plugin-embed
                        [plugin]="embed_plugin()"
                        (detailsChange)="onPluginLoaded($event)"
                        (schemaChange)="onSchemaLoaded($event)"
                        (plugin_error)="onPluginError($event)"
                    />
                </div>
            }
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,
      MatSelectModule,
      SchemaFormComponent,
      SettingsToggleComponent,
      SignagePluginEmbedComponent,
      TranslatePipe
    ] }]
  }], () => [], { _schema_form_el: [{ type: ViewChild, args: ["schema_form_el", { isSignal: true }] }], event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePluginModalComponent, { className: "SignagePluginModalComponent", filePath: "src/app/admin/signage-plugins/signage-plugin-modal.component.ts", lineNumber: 250 });
})();

// src/app/admin/signage-plugins/signage-plugin-test-modal.component.ts
function SignagePluginTestModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-progress-bar", 28);
    \u0275\u0275elementEnd();
  }
}
function SignagePluginTestModalComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "schema-form", 30);
    \u0275\u0275listener("ngModelChange", function SignagePluginTestModalComponent_Conditional_19_Template_schema_form_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfigChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.CONFIG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("schema", ctx_r1.schema())("ngModel", ctx_r1.config_values());
    \u0275\u0275control();
  }
}
function SignagePluginTestModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.SIGNAGE_PLUGINS_TEST_NO_SCHEMA"), " ");
  }
}
function SignagePluginTestModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "signage-plugin-embed", 31);
    \u0275\u0275twoWayListener("detailsChange", function SignagePluginTestModalComponent_Conditional_48_Template_signage_plugin_embed_detailsChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.details, $event) || (ctx_r1.details = $event);
      return \u0275\u0275resetView($event);
    })("schemaChange", function SignagePluginTestModalComponent_Conditional_48_Template_signage_plugin_embed_schemaChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.embed_schema, $event) || (ctx_r1.embed_schema = $event);
      return \u0275\u0275resetView($event);
    })("statusChange", function SignagePluginTestModalComponent_Conditional_48_Template_signage_plugin_embed_statusChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.embed_status, $event) || (ctx_r1.embed_status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("plugin_error", function SignagePluginTestModalComponent_Conditional_48_Template_signage_plugin_embed_plugin_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("plugin", ctx_r1.plugin())("config", ctx_r1.active_config())("play", ctx_r1.play_counter());
    \u0275\u0275twoWayProperty("details", ctx_r1.details)("schema", ctx_r1.embed_schema)("status", ctx_r1.embed_status);
  }
}
function SignagePluginTestModalComponent_Conditional_49_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.plugin_error().code, " ");
  }
}
function SignagePluginTestModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 32)(2, "icon", 33);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SignagePluginTestModalComponent_Conditional_49_Conditional_6_Template, 2, 1, "p", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.plugin_error().message, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.plugin_error().code ? 6 : -1);
  }
}
var SignagePluginTestModalComponent = class _SignagePluginTestModalComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  event = new EventEmitter();
  sidebar_open = signal(
    true,
    ...ngDevMode ? [{ debugName: "sidebar_open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema_loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "schema_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema = signal(
    null,
    ...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    )
  );
  config_values = signal(
    {},
    ...ngDevMode ? [{ debugName: "config_values" }] : (
      /* istanbul ignore next */
      []
    )
  );
  active_config = signal(
    null,
    ...ngDevMode ? [{ debugName: "active_config" }] : (
      /* istanbul ignore next */
      []
    )
  );
  play_counter = signal(
    0,
    ...ngDevMode ? [{ debugName: "play_counter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_error = signal(
    null,
    ...ngDevMode ? [{ debugName: "plugin_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  status = signal(
    "unknown",
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  details = null;
  embed_schema = {};
  embed_status = "unknown";
  plugin() {
    return this._data.item;
  }
  ngOnInit() {
    this.schema_loading.set(true);
    this.interval("sync_status", () => {
      this.status.set(this.embed_status);
      if (this.embed_schema && Object.keys(this.embed_schema).length > 0) {
        if (!this.schema()) {
          this.schema.set(this.embed_schema);
          this.schema_loading.set(false);
          if (this._data.item?.defaults) {
            this.config_values.set(__spreadValues({}, this._data.item.defaults));
          }
        }
      }
    }, 200);
    this.timeout("schema_timeout", () => {
      if (this.schema_loading()) {
        this.schema_loading.set(false);
      }
    }, 1e4);
  }
  onConfigChange(values) {
    this.config_values.set(values);
  }
  sendConfig() {
    this.plugin_error.set(null);
    const payload = {
      instance_id: `test-${Date.now()}`,
      config: this.config_values()
    };
    this.active_config.set(payload);
  }
  sendPlay() {
    this.plugin_error.set(null);
    this.play_counter.set(this.play_counter() + 1);
  }
  onPluginError(error) {
    this.plugin_error.set(error);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SignagePluginTestModalComponent_BaseFactory;
    return function SignagePluginTestModalComponent_Factory(__ngFactoryType__) {
      return (\u0275SignagePluginTestModalComponent_BaseFactory || (\u0275SignagePluginTestModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignagePluginTestModalComponent)))(__ngFactoryType__ || _SignagePluginTestModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePluginTestModalComponent, selectors: [["signage-plugin-test-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 50, vars: 40, consts: [[1, "flex", "h-screen", "w-screen", "overflow-hidden"], [1, "border-base-300", "bg-base-100", "relative", "flex", "h-full", "shrink-0", "flex-col", "border-r", "transition-[width]", "duration-200"], [1, "flex", "h-full", "w-96", "flex-col", "overflow-hidden"], [1, "border-base-300", "flex", "items-center", "justify-between", "border-b", "px-4", "py-3"], [1, "text-lg", "font-medium"], [1, "border-base-300", "border-b", "px-4", "py-3"], [1, "flex", "w-full", "items-center", "justify-between", "gap-4"], [1, "text-sm", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "h-2", "w-2", "rounded-full"], [1, "text-xs", "uppercase"], [1, "mt-1", "truncate", "font-mono", "text-xs", "opacity-60"], [1, "flex-1", "overflow-auto", "px-4", "py-3"], [1, "flex", "items-center", "gap-2", "py-2", "text-sm", "opacity-60"], [1, "bg-base-200", "rounded-sm", "p-6", "text-center", "text-sm", "opacity-60"], [1, "border-base-300", "flex", "items-center", "gap-2", "border-t", "px-4", "py-3"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "text-lg"], [1, "pr-2"], ["icon", "", "matRipple", "", 1, "bg-base-100", "border-base-300", "absolute", "bottom-4", "left-2", "z-20", "border", "shadow-md", "transition-[left]", "duration-200", 3, "click"], [1, "bg-base-200", "relative", "flex", "flex-1", "flex-col", "overflow-hidden"], [1, "bg-base-100", "border-base-300", "flex", "items-center", "justify-between", "border-b", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "flex-1", "overflow-hidden", "p-2"], [1, "block", "h-full", "w-full", "[&>iframe]:h-full", "[&>iframe]:w-full", "[&>iframe]:rounded-lg", "[&>iframe]:border-0", 3, "plugin", "config", "play", "details", "schema", "status"], [1, "bg-error/10", "border-error", "absolute", "inset-4", "flex", "items-center", "justify-center", "rounded-sm", "border"], ["mode", "indeterminate", 1, "w-full"], [1, "mb-2", "block", "text-sm", "font-medium"], [3, "ngModelChange", "schema", "ngModel"], [1, "block", "h-full", "w-full", "[&>iframe]:h-full", "[&>iframe]:w-full", "[&>iframe]:rounded-lg", "[&>iframe]:border-0", 3, "detailsChange", "schemaChange", "statusChange", "plugin_error", "plugin", "config", "play", "details", "schema", "status"], [1, "text-center"], [1, "text-error", "mb-2", "text-4xl"], [1, "text-error", "text-sm", "font-medium"], [1, "mt-1", "font-mono", "text-xs", "opacity-60"]], template: function SignagePluginTestModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "header", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275element(12, "div", 9);
      \u0275\u0275elementStart(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12);
      \u0275\u0275conditionalCreate(18, SignagePluginTestModalComponent_Conditional_18_Template, 2, 0, "div", 13);
      \u0275\u0275conditionalCreate(19, SignagePluginTestModalComponent_Conditional_19_Template, 4, 5);
      \u0275\u0275conditionalCreate(20, SignagePluginTestModalComponent_Conditional_20_Template, 3, 3, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "footer", 15)(22, "button", 16);
      \u0275\u0275listener("click", function SignagePluginTestModalComponent_Template_button_click_22_listener() {
        return ctx.sendConfig();
      });
      \u0275\u0275elementStart(23, "div", 17)(24, "icon", 18);
      \u0275\u0275text(25, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "button", 16);
      \u0275\u0275listener("click", function SignagePluginTestModalComponent_Template_button_click_29_listener() {
        return ctx.sendPlay();
      });
      \u0275\u0275elementStart(30, "div", 17)(31, "icon", 18);
      \u0275\u0275text(32, "play_arrow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function SignagePluginTestModalComponent_Template_button_click_36_listener() {
        return ctx.sidebar_open.set(!ctx.sidebar_open());
      });
      \u0275\u0275elementStart(37, "icon");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "main", 21)(40, "header", 22)(41, "h2", 23);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 24)(45, "icon");
      \u0275\u0275text(46, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 25);
      \u0275\u0275conditionalCreate(48, SignagePluginTestModalComponent_Conditional_48_Template, 1, 6, "signage-plugin-embed", 26);
      \u0275\u0275conditionalCreate(49, SignagePluginTestModalComponent_Conditional_49_Template, 7, 2, "div", 27);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("w-96", ctx.sidebar_open())("w-0", !ctx.sidebar_open());
      \u0275\u0275advance();
      \u0275\u0275classProp("invisible", !ctx.sidebar_open());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 32, "ADMIN.SIGNAGE_PLUGINS_TEST_CONFIG"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.plugin().name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.status() === "ready" || ctx.status() === "loaded")("bg-error", ctx.status() === "error")("bg-warning", ctx.status() === "unknown")("bg-info", ctx.status() === "finished");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.plugin().uri, " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.schema_loading() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.schema() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.schema_loading() && !ctx.schema() ? 20 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.status() === "unknown");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 34, "ADMIN.SIGNAGE_PLUGINS_TEST_SEND"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.status() === "unknown");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 36, "ADMIN.SIGNAGE_PLUGINS_TEST_PLAY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("left", ctx.sidebar_open() ? "22.5rem" : "0.5rem");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.sidebar_open() ? "chevron_left" : "chevron_right");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(43, 38, "ADMIN.SIGNAGE_PLUGINS_TEST_HEADING"), " \u2014 ", ctx.plugin().name, " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.plugin()?.uri ? 48 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.plugin_error() ? 49 : -1);
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    MatProgressBarModule,
    MatProgressBar,
    IconComponent,
    SchemaFormComponent,
    SignagePluginEmbedComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=signage-plugin-test-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePluginTestModalComponent, [{
    type: Component,
    args: [{ selector: "signage-plugin-test-modal", template: `
        <div class="flex h-screen w-screen overflow-hidden">
            <!-- Sidebar -->
            <aside
                class="border-base-300 bg-base-100 relative flex h-full shrink-0 flex-col border-r transition-[width] duration-200"
                [class.w-96]="sidebar_open()"
                [class.w-0]="!sidebar_open()"
            >
                <div
                    class="flex h-full w-96 flex-col overflow-hidden"
                    [class.invisible]="!sidebar_open()"
                >
                    <!-- Sidebar header -->
                    <header
                        class="border-base-300 flex items-center justify-between border-b px-4 py-3"
                    >
                        <h3 class="text-lg font-medium">
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_TEST_CONFIG' | translate
                            }}
                        </h3>
                    </header>

                    <!-- Plugin info -->
                    <div class="border-base-300 border-b px-4 py-3">
                        <div
                            class="flex w-full items-center justify-between gap-4"
                        >
                            <div class="text-sm font-medium">
                                {{ plugin().name }}
                            </div>
                            <div class="flex items-center gap-2">
                                <div
                                    class="h-2 w-2 rounded-full"
                                    [class.bg-success]="
                                        status() === 'ready' ||
                                        status() === 'loaded'
                                    "
                                    [class.bg-error]="status() === 'error'"
                                    [class.bg-warning]="status() === 'unknown'"
                                    [class.bg-info]="status() === 'finished'"
                                ></div>
                                <span class="text-xs uppercase">{{
                                    status()
                                }}</span>
                            </div>
                        </div>
                        <div class="mt-1 truncate font-mono text-xs opacity-60">
                            {{ plugin().uri }}
                        </div>
                    </div>

                    <!-- Config form -->
                    <div class="flex-1 overflow-auto px-4 py-3">
                        @if (schema_loading()) {
                            <div
                                class="flex items-center gap-2 py-2 text-sm opacity-60"
                            >
                                <mat-progress-bar
                                    mode="indeterminate"
                                    class="w-full"
                                />
                            </div>
                        }
                        @if (schema()) {
                            <div class="mb-2 block text-sm font-medium">
                                {{ 'COMMON.CONFIG' | translate }}
                            </div>
                            <schema-form
                                [schema]="schema()"
                                [ngModel]="config_values()"
                                (ngModelChange)="onConfigChange($event)"
                            />
                        }
                        @if (!schema_loading() && !schema()) {
                            <div
                                class="bg-base-200 rounded-sm p-6 text-center text-sm opacity-60"
                            >
                                {{
                                    'ADMIN.SIGNAGE_PLUGINS_TEST_NO_SCHEMA'
                                        | translate
                                }}
                            </div>
                        }
                    </div>

                    <!-- Sidebar actions -->
                    <footer
                        class="border-base-300 flex items-center gap-2 border-t px-4 py-3"
                    >
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sendConfig()"
                            [disabled]="status() === 'unknown'"
                        >
                            <div class="flex items-center justify-center gap-2">
                                <icon class="text-lg">send</icon>
                                <div class="pr-2">
                                    {{
                                        'ADMIN.SIGNAGE_PLUGINS_TEST_SEND'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sendPlay()"
                            [disabled]="status() === 'unknown'"
                        >
                            <div class="flex items-center justify-center gap-2">
                                <icon class="text-lg">play_arrow</icon>
                                <div class="pr-2">
                                    {{
                                        'ADMIN.SIGNAGE_PLUGINS_TEST_PLAY'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </footer>
                </div>
            </aside>

            <!-- Sidebar toggle (always visible) -->
            <button
                icon
                matRipple
                class="bg-base-100 border-base-300 absolute bottom-4 left-2 z-20 border shadow-md transition-[left] duration-200"
                [style.left]="sidebar_open() ? '22.5rem' : '0.5rem'"
                (click)="sidebar_open.set(!sidebar_open())"
            >
                <icon>{{
                    sidebar_open() ? 'chevron_left' : 'chevron_right'
                }}</icon>
            </button>

            <!-- Main content: plugin preview -->
            <main
                class="bg-base-200 relative flex flex-1 flex-col overflow-hidden"
            >
                <!-- Top bar -->
                <header
                    class="bg-base-100 border-base-300 flex items-center justify-between border-b px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{ 'ADMIN.SIGNAGE_PLUGINS_TEST_HEADING' | translate }}
                        &mdash; {{ plugin().name }}
                    </h2>
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                </header>

                <!-- Plugin embed area -->
                <div class="relative flex-1 overflow-hidden p-2">
                    @if (plugin()?.uri) {
                        <signage-plugin-embed
                            class="block h-full w-full [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:rounded-lg [&>iframe]:border-0"
                            [plugin]="plugin()"
                            [config]="active_config()"
                            [play]="play_counter()"
                            [(details)]="details"
                            [(schema)]="embed_schema"
                            [(status)]="embed_status"
                            (plugin_error)="onPluginError($event)"
                        />
                    }

                    <!-- Error overlay -->
                    @if (plugin_error()) {
                        <div
                            class="bg-error/10 border-error absolute inset-4 flex items-center justify-center rounded-sm border"
                        >
                            <div class="text-center">
                                <icon class="text-error mb-2 text-4xl"
                                    >error</icon
                                >
                                <p class="text-error text-sm font-medium">
                                    {{ plugin_error().message }}
                                </p>
                                @if (plugin_error().code) {
                                    <p
                                        class="mt-1 font-mono text-xs opacity-60"
                                    >
                                        {{ plugin_error().code }}
                                    </p>
                                }
                            </div>
                        </div>
                    }
                </div>
            </main>
        </div>
    `, imports: [
      FormsModule,
      MatDialogModule,
      MatRippleModule,
      MatProgressBarModule,
      IconComponent,
      TranslatePipe,
      SchemaFormComponent,
      SignagePluginEmbedComponent
    ], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/backoffice/backoffice/src/app/admin/signage-plugins/signage-plugin-test-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=signage-plugin-test-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePluginTestModalComponent, { className: "SignagePluginTestModalComponent", filePath: "src/app/admin/signage-plugins/signage-plugin-test-modal.component.ts", lineNumber: 255 });
})();

// src/app/admin/signage-plugins/signage-plugins.component.ts
var _c04 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "plugin_type", name: a0, content: a1, size: "7rem" });
var _c3 = (a0, a1) => ({ key: "uri", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "playback_type", name: a0, content: a1, size: "8rem" });
var _c5 = (a0, a1) => ({ key: "enabled", name: a0, content: a1, size: "5rem" });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "8.5rem", content: a0, sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function AdminSignagePluginsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1, " ");
  }
}
function AdminSignagePluginsComponent_ng_template_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"));
  }
}
function AdminSignagePluginsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminSignagePluginsComponent_ng_template_25_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r2 ? 2 : -1);
  }
}
function AdminSignagePluginsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r3);
  }
}
function AdminSignagePluginsComponent_ng_template_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "icon", 21);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function AdminSignagePluginsComponent_ng_template_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 22);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminSignagePluginsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminSignagePluginsComponent_ng_template_29_Conditional_0_Template, 3, 0, "div", 19);
    \u0275\u0275conditionalCreate(1, AdminSignagePluginsComponent_ng_template_29_Conditional_1_Template, 3, 0, "div", 20);
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275conditional(data_r4 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r4 ? 1 : -1);
  }
}
function AdminSignagePluginsComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_31_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.testPlugin(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "play_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_31_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editPlugin(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_31_Template_button_click_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.deletePlugin(row_r6));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "ADMIN.SIGNAGE_PLUGINS_TEST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "ADMIN.SIGNAGE_PLUGINS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "ADMIN.SIGNAGE_PLUGINS_REMOVE"));
  }
}
var AdminSignagePluginsComponent = class _AdminSignagePluginsComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugins = signal(
    [],
    ...ngDevMode ? [{ debugName: "plugins" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadPlugins();
  }
  newPlugin() {
    const ref = this._dialog.open(SignagePluginModalComponent, {
      data: {
        item: new lr(),
        save: (item) => Nh(item)
      }
    });
    this.subscription("modal_events", ref.afterClosed().subscribe((event) => {
      if (event?.reason !== "done")
        return;
      this.loadPlugins();
    }));
  }
  testPlugin(item) {
    this._dialog.open(SignagePluginTestModalComponent, {
      data: { item }
    });
  }
  editPlugin(item) {
    const ref = this._dialog.open(SignagePluginModalComponent, {
      data: {
        item,
        save: (updated) => wh(item.id, updated)
      }
    });
    this.subscription("modal_events", ref.afterClosed().subscribe((event) => {
      if (event?.reason !== "done")
        return;
      this.loadPlugins();
    }));
  }
  async deletePlugin(item) {
    if (!item)
      return;
    const details = await openConfirmModal({
      title: i18n("ADMIN.SIGNAGE_PLUGINS_REMOVE"),
      content: i18n("ADMIN.SIGNAGE_PLUGINS_REMOVE_MSG"),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details)
      return;
    details.loading(i18n("ADMIN.SIGNAGE_PLUGINS_REMOVE_LOADING"));
    const err = await Dh(item.id).catch((_) => _);
    details.close();
    if (err)
      return notifyError(i18n("ADMIN.SIGNAGE_PLUGINS_REMOVE_ERROR", {
        error: JSON.stringify(err.response || err.message || err)
      }));
    notifySuccess(i18n("ADMIN.SIGNAGE_PLUGINS_REMOVE_SUCCESS"));
    this.loadPlugins();
  }
  async loadPlugins() {
    this.loading.set(true);
    try {
      const plugins = await Oh().then((r) => r.data);
      this.plugins.set(plugins);
    } catch (err) {
      notifyError(i18n("ADMIN.SIGNAGE_PLUGINS_LOAD_ERROR", {
        error: JSON.stringify(err.response || err.message || err)
      }));
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AdminSignagePluginsComponent_BaseFactory;
    return function AdminSignagePluginsComponent_Factory(__ngFactoryType__) {
      return (\u0275AdminSignagePluginsComponent_BaseFactory || (\u0275AdminSignagePluginsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminSignagePluginsComponent)))(__ngFactoryType__ || _AdminSignagePluginsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSignagePluginsComponent, selectors: [["admin-signage-plugins"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 53, consts: [["mono_template", ""], ["description_template", ""], ["type_template", ""], ["enabled_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center"], [1, "text"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-6xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "max-w-[50vw]", "truncate", "p-4", "font-mono", "text-xs"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "p-4", "text-xs", "uppercase"], [1, "bg-success", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "bg-error", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "text-success-content", "text-2xl"], [1, "text-error-content", "text-2xl"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AdminSignagePluginsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275listener("click", function AdminSignagePluginsComponent_Template_button_click_6_listener() {
        return ctx.newPlugin();
      });
      \u0275\u0275elementStart(7, "div", 10)(8, "icon", 7);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 11);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275element(14, "mat-progress-bar", 13)(15, "simple-table", 14);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, AdminSignagePluginsComponent_ng_template_23_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(25, AdminSignagePluginsComponent_ng_template_25_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(27, AdminSignagePluginsComponent_ng_template_27_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(29, AdminSignagePluginsComponent_ng_template_29_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, AdminSignagePluginsComponent_ng_template_31_Template, 13, 9, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const mono_template_r8 = \u0275\u0275reference(24);
      const description_template_r9 = \u0275\u0275reference(26);
      const type_template_r10 = \u0275\u0275reference(28);
      const enabled_template_r11 = \u0275\u0275reference(30);
      const actions_template_r12 = \u0275\u0275reference(32);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.SIGNAGE_PLUGINS_HEADER"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "ADMIN.SIGNAGE_PLUGINS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.plugins())("columns", \u0275\u0275pureFunction7(45, _c7, \u0275\u0275pureFunction1(26, _c04, \u0275\u0275pipeBind1(16, 12, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(28, _c1, \u0275\u0275pipeBind1(17, 14, "COMMON.FIELD_DESCRIPTION"), description_template_r9), \u0275\u0275pureFunction2(31, _c2, \u0275\u0275pipeBind1(18, 16, "ADMIN.SIGNAGE_PLUGINS_FIELD_TYPE"), type_template_r10), \u0275\u0275pureFunction2(34, _c3, \u0275\u0275pipeBind1(19, 18, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"), mono_template_r8), \u0275\u0275pureFunction2(37, _c4, \u0275\u0275pipeBind1(20, 20, "ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE"), type_template_r10), \u0275\u0275pureFunction2(40, _c5, \u0275\u0275pipeBind1(21, 22, "ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED"), enabled_template_r11), \u0275\u0275pureFunction1(43, _c6, actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(22, 24, "ADMIN.SIGNAGE_PLUGINS_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n}\n/*# sourceMappingURL=signage-plugins.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSignagePluginsComponent, [{
    type: Component,
    args: [{ selector: "admin-signage-plugins", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.SIGNAGE_PLUGINS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newPlugin()">
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'ADMIN.SIGNAGE_PLUGINS_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
                <simple-table
                    class="block min-w-6xl text-sm"
                    [data]="plugins()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'plugin_type',
                            name:
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_TYPE' | translate,
                            content: type_template,
                            size: '7rem',
                        },
                        {
                            key: 'uri',
                            name: 'ADMIN.SIGNAGE_PLUGINS_FIELD_URI' | translate,
                            content: mono_template,
                        },
                        {
                            key: 'playback_type',
                            name:
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE'
                                | translate,
                            content: type_template,
                            size: '8rem',
                        },
                        {
                            key: 'enabled',
                            name:
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED'
                                | translate,
                            content: enabled_template,
                            size: '5rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '8.5rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.SIGNAGE_PLUGINS_LIST_EMPTY' | translate
                    "
                />
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="max-w-[50vw] truncate p-4 font-mono text-xs">
                {{ data }}
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'COMMON.DESCRIPTION_EMPTY' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #type_template let-data="data">
            <div class="p-4 text-xs uppercase">{{ data }}</div>
        </ng-template>
        <ng-template #enabled_template let-data="data">
            @if (data) {
                <div
                    class="bg-success mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-success-content text-2xl">check</icon>
                </div>
            }
            @if (!data) {
                <div
                    class="bg-error mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-error-content text-2xl">close</icon>
                </div>
            }
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_TEST' | translate"
                    (click)="testPlugin(row)"
                >
                    <icon>play_circle</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_EDIT' | translate"
                    (click)="editPlugin(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_REMOVE' | translate"
                    (click)="deletePlugin(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;572731b77438e4c922c62954d78fd970f67110b5e9d4f700617f449621eb8577;/home/runner/work/backoffice/backoffice/src/app/admin/signage-plugins/signage-plugins.component.ts */\n:host {\n}\n/*# sourceMappingURL=signage-plugins.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSignagePluginsComponent, { className: "AdminSignagePluginsComponent", filePath: "src/app/admin/signage-plugins/signage-plugins.component.ts", lineNumber: 187 });
})();
export {
  AdminSignagePluginsComponent
};
//# sourceMappingURL=chunk-EYA7NHVJ.js.map
