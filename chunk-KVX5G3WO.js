import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-IVHDPGFB.js";
import {
  HotkeysService
} from "./chunk-ZCAI424E.js";
import {
  openConfirmModal
} from "./chunk-IIUIDWWB.js";
import {
  SimpleTableComponent
} from "./chunk-GVMJP65D.js";
import {
  FullscreenModalShellComponent
} from "./chunk-DVN3BL7D.js";
import "./chunk-4ARITZTR.js";
import {
  SettingsToggleComponent
} from "./chunk-UAXAQ7BE.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-UCQRULZV.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-QGR553JM.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-6VJ3RG5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PPQFSXFA.js";
import "./chunk-D2LXA4RU.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-YDTR7R4T.js";
import "./chunk-R2EAFTPD.js";
import {
  AsyncHandler
} from "./chunk-GMSIBCGC.js";
import "./chunk-MF6TUUIF.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-RBXYCJUU.js";
import "./chunk-AV4JSAAI.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-5V5EUIVE.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-2BWZF4LD.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-BSW7AGOT.js";
import "./chunk-Y3N2XCKC.js";
import {
  MatRipple
} from "./chunk-MSVGRD3P.js";
import {
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  Output,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ViewChild,
  computed,
  effect,
  forwardRef,
  getInvalidFields,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
} from "./chunk-H6LO5TZR.js";
import {
  bl,
  gl,
  lastValueFrom,
  map,
  ml,
  mo,
  vl
} from "./chunk-BKO4HWAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/signage-plugins/schema-form.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.value;
function SchemaFormComponent_Conditional_0_For_2_Case_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SchemaFormComponent_Conditional_0_For_2_Case_0_Conditional_2_Template, 2, 1, "p", 3);
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("formControlName", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 2 : -1);
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
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2.label, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_1_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "mat-select", 2);
    \u0275\u0275repeaterCreate(7, SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template, 2, 2, "mat-option", 6, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275repeater(field_r1.options);
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
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_2_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5);
    \u0275\u0275element(6, "input", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r1.key)("name", field_r1.key)("placeholder", field_r1.label);
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
    const field_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.description, " ");
  }
}
function SchemaFormComponent_Conditional_0_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SchemaFormComponent_Conditional_0_For_2_Case_3_Conditional_4_Template, 2, 1, "p", 3);
    \u0275\u0275elementStart(5, "mat-form-field", 5);
    \u0275\u0275element(6, "input", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", field_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.required ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r1.description ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", field_r1.key)("name", field_r1.key)("placeholder", field_r1.label);
  }
}
function SchemaFormComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_For_2_Case_0_Template, 3, 3)(1, SchemaFormComponent_Conditional_0_For_2_Case_1_Template, 9, 5, "div", 1)(2, SchemaFormComponent_Conditional_0_For_2_Case_2_Template, 7, 7, "div", 1)(3, SchemaFormComponent_Conditional_0_For_2_Case_3_Template, 7, 7, "div", 1);
  }
  if (rf & 2) {
    let tmp_11_0;
    const field_r1 = ctx.$implicit;
    \u0275\u0275conditional((tmp_11_0 = field_r1.type) === "boolean" ? 0 : tmp_11_0 === "select" ? 1 : tmp_11_0 === "number" ? 2 : 3);
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
    \u0275\u0275property("formGroup", ctx_r2.defaults_form());
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
  const controls = {};
  for (const field of fields) {
    const value = defaults[field.key] ?? field.default_value ?? null;
    const validators = field.required ? [Validators.required] : [];
    controls[field.key] = new FormControl(value, validators);
  }
  return new FormGroup(controls);
}
var SchemaFormComponent = class _SchemaFormComponent {
  schema = input(null, ...ngDevMode ? [{ debugName: "schema" }] : []);
  fields = computed(() => {
    const s = this.schema();
    return s ? parseSchemaFields(s) : [];
  }, ...ngDevMode ? [{ debugName: "fields" }] : []);
  defaults_form = signal(null, ...ngDevMode ? [{ debugName: "defaults_form" }] : []);
  _on_change;
  _on_touch;
  _value = {};
  constructor() {
    effect((onCleanup) => {
      const schema_fields = this.fields();
      if (!schema_fields.length) {
        this.defaults_form.set(null);
        return;
      }
      const form = buildFormFromFields(schema_fields, this._value);
      this.defaults_form.set(form);
      const subscription = form.valueChanges.subscribe((val) => {
        this._value = val;
        this._on_change?.(val);
      });
      onCleanup(() => subscription.unsubscribe());
    });
  }
  writeValue(value) {
    this._value = value || {};
    const form = this.defaults_form();
    if (form) {
      form.patchValue(this._value, { emitEvent: false });
    }
  }
  registerOnChange(fn) {
    this._on_change = fn;
  }
  registerOnTouched(fn) {
    this._on_touch = fn;
  }
  /** Returns true if the generated defaults form is valid. */
  isValid() {
    const form = this.defaults_form();
    if (!form)
      return true;
    form.markAllAsTouched();
    return form.valid;
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
  ])], decls: 1, vars: 1, consts: [[1, "flex", "flex-col", "gap-2", 3, "formGroup"], [1, "field"], [3, "formControlName"], [1, "mt-0", "text-xs", "opacity-60"], [3, "for"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "value"], ["matInput", "", "type", "number", 3, "formControlName", "name", "placeholder"], ["matInput", "", 3, "formControlName", "name", "placeholder"]], template: function SchemaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.defaults_form() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, SettingsToggleComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchemaFormComponent, [{
    type: Component,
    args: [{ selector: "schema-form", template: `
        @if (defaults_form()) {
            <div class="flex flex-col gap-2" [formGroup]="defaults_form()">
                @for (field of fields(); track field.key) {
                    @switch (field.type) {
                        @case ('boolean') {
                            <settings-toggle [formControlName]="field.key">
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
                                    <mat-select [formControlName]="field.key">
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
                                        [formControlName]="field.key"
                                        [name]="field.key"
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
                                        [formControlName]="field.key"
                                        [name]="field.key"
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
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      SettingsToggleComponent
    ] }]
  }], () => [], { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchemaFormComponent, { className: "SchemaFormComponent", filePath: "src/app/admin/signage-plugins/schema-form.component.ts", lineNumber: 211 });
})();

// src/app/admin/signage-plugins/signage-plugin-embed.component.ts
var _c0 = ["plugin_el"];
function SignagePluginEmbedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 1, 0);
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx_r0.plugin().uri, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var API_VERSION = "signage-plugin/v1";
var SignagePluginEmbedComponent = class _SignagePluginEmbedComponent extends AsyncHandler {
  plugin = input(null, ...ngDevMode ? [{ debugName: "plugin" }] : []);
  config = input(null, ...ngDevMode ? [{ debugName: "config" }] : []);
  play = input(0, ...ngDevMode ? [{ debugName: "play" }] : []);
  details = model(null, ...ngDevMode ? [{ debugName: "details" }] : []);
  schema = model({}, ...ngDevMode ? [{ debugName: "schema" }] : []);
  status = model("unknown", ...ngDevMode ? [{ debugName: "status" }] : []);
  plugin_error = output();
  _plugin_el = viewChild("plugin_el", ...ngDevMode ? [{ debugName: "_plugin_el" }] : []);
  plugin_origin = computed(() => {
    try {
      const uri = this.plugin()?.uri;
      if (!uri)
        return "";
      return new URL(uri).origin;
    } catch {
      return "";
    }
  }, ...ngDevMode ? [{ debugName: "plugin_origin" }] : []);
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
      \u0275\u0275viewQuerySignal(ctx._plugin_el, _c0, 5);
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
      \u0275\u0275conditional(((tmp_0_0 = ctx.plugin()) == null ? null : tmp_0_0.uri) ? 0 : -1);
    }
  }, dependencies: [SafePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePluginEmbedComponent, [{
    type: Component,
    args: [{ selector: "signage-plugin-embed", template: `
        @if (plugin()?.uri) {
            <iframe
                #plugin_el
                sandbox="allow-scripts allow-same-origin"
                referrerpolicy="no-referrer"
                [src]="plugin().uri | safe: 'resource'"
            >
            </iframe>
        }
    `, imports: [SafePipe] }]
  }], null, { plugin: [{ type: Input, args: [{ isSignal: true, alias: "plugin", required: false }] }], config: [{ type: Input, args: [{ isSignal: true, alias: "config", required: false }] }], play: [{ type: Input, args: [{ isSignal: true, alias: "play", required: false }] }], details: [{ type: Input, args: [{ isSignal: true, alias: "details", required: false }] }, { type: Output, args: ["detailsChange"] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }, { type: Output, args: ["schemaChange"] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }, { type: Output, args: ["statusChange"] }], plugin_error: [{ type: Output, args: ["plugin_error"] }], _plugin_el: [{ type: ViewChild, args: ["plugin_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePluginEmbedComponent, { className: "SignagePluginEmbedComponent", filePath: "src/app/admin/signage-plugins/signage-plugin-embed.component.ts", lineNumber: 83 });
})();

// src/app/admin/signage-plugins/signage-plugins.utilities.ts
function generateSignagePluginFormFields(plugin) {
  return new FormGroup({
    name: new FormControl(plugin?.name || "", [Validators.required]),
    description: new FormControl(plugin?.description || ""),
    uri: new FormControl(plugin?.uri || "", [Validators.required]),
    playback_type: new FormControl(plugin?.playback_type || "static"),
    enabled: new FormControl(plugin?.enabled ?? true),
    defaults: new FormControl(plugin?.defaults || {})
  });
}

// src/app/admin/signage-plugins/signage-plugin-modal.component.ts
var _c02 = ["schema_form_el"];
function SignagePluginModalComponent_Conditional_2_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-progress-bar", 21);
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
function SignagePluginModalComponent_Conditional_2_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.SIGNAGE_PLUGINS_SCHEMA_ERROR"), " ");
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "schema-form", 22, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("schema", ctx_r0.schema());
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
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
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 4)(14, "label", 8);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 6);
    \u0275\u0275element(18, "textarea", 9);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 4)(21, "label", 10);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 6);
    \u0275\u0275element(27, "input", 11);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "mat-error");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 4)(33, "label", 12);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 6);
    \u0275\u0275element(37, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 14);
    \u0275\u0275element(39, "settings-toggle", 15);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 4)(42, "div", 16);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(45, SignagePluginModalComponent_Conditional_2_Conditional_45_Template, 5, 3, "div", 17);
    \u0275\u0275conditionalCreate(46, SignagePluginModalComponent_Conditional_2_Conditional_46_Template, 3, 3, "div", 18);
    \u0275\u0275conditionalCreate(47, SignagePluginModalComponent_Conditional_2_Conditional_47_Template, 3, 1, "div", 19);
    \u0275\u0275conditionalCreate(48, SignagePluginModalComponent_Conditional_2_Conditional_48_Template, 3, 3, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 21, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 23, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 25, "ADMIN.SIGNAGE_PLUGINS_NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 27, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 29, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r0.form.controls.uri.invalid && ctx_r0.form.controls.uri.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 31, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 33, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 35, "ADMIN.SIGNAGE_PLUGINS_URI_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 37, "ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.playback_type_name());
    \u0275\u0275advance(2);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(40, 39, "ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 41, "ADMIN.SIGNAGE_PLUGINS_FIELD_DEFAULTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.schema_loading() ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.schema_error() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.schema() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.schema_loading() && !ctx_r0.schema() && !ctx_r0.schema_error() ? 48 : -1);
  }
}
function SignagePluginModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "signage-plugin-embed", 23);
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
  _schema_form_el = viewChild("schema_form_el", ...ngDevMode ? [{ debugName: "_schema_form_el" }] : []);
  event = new EventEmitter();
  edit;
  form;
  loading;
  embed_plugin = signal(null, ...ngDevMode ? [{ debugName: "embed_plugin" }] : []);
  schema = signal(null, ...ngDevMode ? [{ debugName: "schema" }] : []);
  schema_loading = signal(false, ...ngDevMode ? [{ debugName: "schema_loading" }] : []);
  schema_error = signal(false, ...ngDevMode ? [{ debugName: "schema_error" }] : []);
  playback_type = signal("static", ...ngDevMode ? [{ debugName: "playback_type" }] : []);
  playback_type_name = computed(() => {
    const playback_type = this.playback_type();
    switch (playback_type) {
      case "interactive":
        return i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_INTERACTIVE");
      case "playsthrough":
        return i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_PLAYSTHROUGH");
      default:
        return i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_STATIC");
    }
  }, ...ngDevMode ? [{ debugName: "playback_type_name" }] : []);
  ngOnInit() {
    this.edit = !!this._data.item?.id;
    this.form = generateSignagePluginFormFields(this._data.item);
    this.playback_type.set(this.form.controls.playback_type.value || "static");
    if (this._data.item?.uri) {
      this._loadPlugin(this._data.item.uri);
    }
    this.subscription("uri_change", this.form.controls.uri.valueChanges.subscribe((uri) => {
      this.timeout("uri_debounce", () => {
        if (uri) {
          this._loadPlugin(uri);
        } else {
          this.embed_plugin.set(null);
          this.schema.set(null);
          this.schema_loading.set(false);
          this.schema_error.set(false);
          this.playback_type.set("static");
          this.form.patchValue({ playback_type: "static" }, { emitEvent: false });
        }
      }, 800);
    }));
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
    this.form.patchValue({ playback_type }, { emitEvent: false });
  }
  onPluginError(_error) {
    this.schema_loading.set(false);
    this.schema_error.set(true);
  }
  submit() {
    this.form.markAllAsTouched();
    const schema_form = this._schema_form_el();
    if (schema_form && !schema_form.isValid()) {
      return notifyError(i18n("ADMIN.SIGNAGE_PLUGINS_DEFAULTS_INVALID"));
    }
    if (!this.form.valid) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this.loading = i18n("ADMIN.SIGNAGE_PLUGINS_SAVING");
    this._dialog_ref.disableClose = true;
    const payload = __spreadProps(__spreadValues(__spreadValues({}, this._data.item), this.form.value), {
      params: this.schema() || this._data.item?.params || {}
    });
    this._data.save(payload).subscribe({
      next: (result) => {
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
      },
      error: async (err) => {
        this.loading = null;
        this._dialog_ref.disableClose = false;
        notifyError(i18n("ADMIN.SIGNAGE_PLUGINS_SAVE_ERROR", {
          error: JSON.stringify(err.response || err.message || err)
        }));
      }
    });
  }
  _loadPlugin(uri) {
    this.schema.set(null);
    this.schema_loading.set(true);
    this.schema_error.set(false);
    this.embed_plugin.set(new mo({ uri }));
    this.timeout("schema_timeout", () => {
      if (this.schema_loading()) {
        this.schema_loading.set(false);
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SignagePluginModalComponent_BaseFactory;
    return function SignagePluginModalComponent_Factory(__ngFactoryType__) {
      return (\u0275SignagePluginModalComponent_BaseFactory || (\u0275SignagePluginModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignagePluginModalComponent)))(__ngFactoryType__ || _SignagePluginModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePluginModalComponent, selectors: [["signage-plugin-modal"]], viewQuery: function SignagePluginModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._schema_form_el, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [["schema_form_el", ""], [3, "save", "heading", "loading"], [1, "flex", "flex-col", 3, "formGroup"], [1, "hidden"], [1, "field"], ["for", "plugin-name"], ["appearance", "outline"], ["matInput", "", "name", "plugin-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "plugin-uri"], ["matInput", "", "name", "plugin-uri", "formControlName", "uri", "required", "", 3, "placeholder"], ["for", "playback-type"], ["id", "playback-type", "matInput", "", "name", "playback-type", "readonly", "", 3, "value"], [1, "field", "mb-4"], ["formControlName", "enabled", 1, "w-full", 3, "name"], [1, "mb-2"], [1, "flex", "items-center", "space-x-2", "py-2", "text-sm", "opacity-60"], [1, "text-error", "bg-error/10", "rounded-sm", "px-4", "py-2", "text-sm"], [1, "bg-base-200/50", "mb-2", "rounded-sm", "p-2"], [1, "bg-base-200", "rounded-sm", "p-8", "text-center", "text-sm", "opacity-60"], ["mode", "indeterminate", 1, "w-48"], ["formControlName", "defaults", 3, "schema"], [3, "detailsChange", "schemaChange", "plugin_error", "plugin"]], template: function SignagePluginModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function SignagePluginModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(2, SignagePluginModalComponent_Conditional_2_Template, 49, 43, "form", 2);
      \u0275\u0275conditionalCreate(3, SignagePluginModalComponent_Conditional_3_Template, 2, 1, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 4, ctx.edit ? "ADMIN.SIGNAGE_PLUGINS_EDIT" : "ADMIN.SIGNAGE_PLUGINS_NEW"))("loading", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.embed_plugin() ? 3 : -1);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatProgressBarModule,
    MatProgressBar,
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
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form class="flex flex-col" [formGroup]="form">
                    <div class="field">
                        <label
                            for="plugin-name"
                            [class.error]="
                                form.controls.name.invalid &&
                                form.controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="plugin-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
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
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label
                            for="plugin-uri"
                            [class.error]="
                                form.controls.uri.invalid &&
                                form.controls.uri.touched
                            "
                        >
                            {{ 'ADMIN.SIGNAGE_PLUGINS_FIELD_URI' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="plugin-uri"
                                [placeholder]="
                                    'ADMIN.SIGNAGE_PLUGINS_FIELD_URI'
                                        | translate
                                "
                                formControlName="uri"
                                required
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
                            [name]="
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED'
                                    | translate
                            "
                            formControlName="enabled"
                        ></settings-toggle>
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
                                ></mat-progress-bar>
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
                                    formControlName="defaults"
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
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressBarModule,
      SchemaFormComponent,
      SettingsToggleComponent,
      SignagePluginEmbedComponent,
      TranslatePipe
    ] }]
  }], null, { _schema_form_el: [{ type: ViewChild, args: ["schema_form_el", { isSignal: true }] }], event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePluginModalComponent, { className: "SignagePluginModalComponent", filePath: "src/app/admin/signage-plugins/signage-plugin-modal.component.ts", lineNumber: 231 });
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
    \u0275\u0275elementStart(0, "label", 29);
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
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.CONFIG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("schema", ctx_r1.schema())("ngModel", ctx_r1.config_values());
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
  sidebar_open = signal(true, ...ngDevMode ? [{ debugName: "sidebar_open" }] : []);
  schema_loading = signal(false, ...ngDevMode ? [{ debugName: "schema_loading" }] : []);
  schema = signal(null, ...ngDevMode ? [{ debugName: "schema" }] : []);
  config_values = signal({}, ...ngDevMode ? [{ debugName: "config_values" }] : []);
  active_config = signal(null, ...ngDevMode ? [{ debugName: "active_config" }] : []);
  play_counter = signal(0, ...ngDevMode ? [{ debugName: "play_counter" }] : []);
  plugin_error = signal(null, ...ngDevMode ? [{ debugName: "plugin_error" }] : []);
  status = signal("unknown", ...ngDevMode ? [{ debugName: "status" }] : []);
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
      let tmp_21_0;
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
      \u0275\u0275conditional(((tmp_21_0 = ctx.plugin()) == null ? null : tmp_21_0.uri) ? 48 : -1);
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=signage-plugin-test-modal.component.css.map */"] });
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
                                ></mat-progress-bar>
                            </div>
                        }
                        @if (schema()) {
                            <label class="mb-2 block text-sm font-medium">
                                {{ 'COMMON.CONFIG' | translate }}
                            </label>
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
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "uri", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "playback_type", name: a0, content: a1, size: "8rem" });
var _c4 = (a0, a1) => ({ key: "enabled", name: a0, content: a1, size: "5rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", size: "8rem", content: a0, sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function AdminSignagePluginsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2);
  }
}
function AdminSignagePluginsComponent_ng_template_24_Conditional_2_Template(rf, ctx) {
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
function AdminSignagePluginsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AdminSignagePluginsComponent_ng_template_24_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function AdminSignagePluginsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4);
  }
}
function AdminSignagePluginsComponent_ng_template_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "icon", 21);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function AdminSignagePluginsComponent_ng_template_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 22);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminSignagePluginsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminSignagePluginsComponent_ng_template_28_Conditional_0_Template, 3, 0, "div", 19);
    \u0275\u0275conditionalCreate(1, AdminSignagePluginsComponent_ng_template_28_Conditional_1_Template, 3, 0, "div", 20);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275conditional(data_r5 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r5 ? 1 : -1);
  }
}
function AdminSignagePluginsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_30_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.testPlugin(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "play_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_30_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editPlugin(row_r7));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_30_Template_button_click_9_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.deletePlugin(row_r7));
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
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  plugins = signal([], ...ngDevMode ? [{ debugName: "plugins" }] : []);
  ngOnInit() {
    this.loadPlugins();
  }
  newPlugin() {
    const ref = this._dialog.open(SignagePluginModalComponent, {
      data: {
        item: new mo(),
        save: (item) => bl(item)
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
        save: (updated) => gl(item.id, updated)
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
    const err = await vl(item.id).toPromise().catch((_) => _);
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
      const plugins = await lastValueFrom(ml().pipe(map((r) => r.data)));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSignagePluginsComponent, selectors: [["admin-signage-plugins"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 47, consts: [["mono_template", ""], ["description_template", ""], ["playback_type_template", ""], ["enabled_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center"], [1, "text"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "truncate", "p-4", "font-mono", "text-sm"], [1, "p-4", "text-xs"], [1, "opacity-30"], [1, "p-4", "text-xs", "uppercase"], [1, "bg-success", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "bg-error", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "text-success-content", "text-xl"], [1, "text-error-content", "text-xl"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function AdminSignagePluginsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275listener("click", function AdminSignagePluginsComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newPlugin());
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
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, AdminSignagePluginsComponent_ng_template_22_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, AdminSignagePluginsComponent_ng_template_24_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(26, AdminSignagePluginsComponent_ng_template_26_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, AdminSignagePluginsComponent_ng_template_28_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, AdminSignagePluginsComponent_ng_template_30_Template, 13, 9, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const mono_template_r9 = \u0275\u0275reference(23);
      const description_template_r10 = \u0275\u0275reference(25);
      const playback_type_template_r11 = \u0275\u0275reference(27);
      const enabled_template_r12 = \u0275\u0275reference(29);
      const actions_template_r13 = \u0275\u0275reference(31);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.SIGNAGE_PLUGINS_HEADER"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "ADMIN.SIGNAGE_PLUGINS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.plugins())("columns", \u0275\u0275pureFunction6(40, _c6, \u0275\u0275pureFunction1(24, _c03, \u0275\u0275pipeBind1(16, 12, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(26, _c1, \u0275\u0275pipeBind1(17, 14, "COMMON.FIELD_DESCRIPTION"), description_template_r10), \u0275\u0275pureFunction2(29, _c2, \u0275\u0275pipeBind1(18, 16, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"), mono_template_r9), \u0275\u0275pureFunction2(32, _c3, \u0275\u0275pipeBind1(19, 18, "ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE"), playback_type_template_r11), \u0275\u0275pureFunction2(35, _c4, \u0275\u0275pipeBind1(20, 20, "ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED"), enabled_template_r12), \u0275\u0275pureFunction1(38, _c5, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(21, 22, "ADMIN.SIGNAGE_PLUGINS_LIST_EMPTY"));
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n}\n/*# sourceMappingURL=signage-plugins.component.css.map */"] });
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
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-5xl text-sm"
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
                            key: 'uri',
                            name: 'ADMIN.SIGNAGE_PLUGINS_FIELD_URI' | translate,
                            content: mono_template,
                        },
                        {
                            key: 'playback_type',
                            name:
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE'
                                | translate,
                            content: playback_type_template,
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
                            size: '8rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.SIGNAGE_PLUGINS_LIST_EMPTY' | translate
                    "
                ></simple-table>
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="truncate p-4 font-mono text-sm">{{ data }}</div>
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
        <ng-template #playback_type_template let-data="data">
            <div class="p-4 text-xs uppercase">{{ data }}</div>
        </ng-template>
        <ng-template #enabled_template let-data="data">
            @if (data) {
                <div
                    class="bg-success mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-success-content text-xl">check</icon>
                </div>
            }
            @if (!data) {
                <div
                    class="bg-error mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-error-content text-xl">close</icon>
                </div>
            }
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_TEST' | translate"
                    (click)="testPlugin(row)"
                >
                    <icon>play_circle</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_EDIT' | translate"
                    (click)="editPlugin(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_REMOVE' | translate"
                    class="text-error"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSignagePluginsComponent, { className: "AdminSignagePluginsComponent", filePath: "src/app/admin/signage-plugins/signage-plugins.component.ts", lineNumber: 177 });
})();
export {
  AdminSignagePluginsComponent
};
//# sourceMappingURL=chunk-KVX5G3WO.js.map
