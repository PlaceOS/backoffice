import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-IG7AQY5D.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-KT52NIBZ.js";
import {
  HotkeysService
} from "./chunk-LKDC73R2.js";
import {
  openConfirmModal
} from "./chunk-7EJ7RRKH.js";
import {
  SimpleTableComponent
} from "./chunk-DEBKIR2F.js";
import {
  FullscreenModalShellComponent
} from "./chunk-TCRHK3RQ.js";
import "./chunk-SBQHH5ML.js";
import {
  SettingsToggleComponent
} from "./chunk-NUMJGP7T.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-CHOWPPXT.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-SRZCMQ2C.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-T75ATYKF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-R6RPLYR6.js";
import "./chunk-IBTMU5M7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-AJRLGM6Z.js";
import "./chunk-VDR6DK2T.js";
import {
  AsyncHandler
} from "./chunk-CQRL7HOU.js";
import "./chunk-3LPUPHPC.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-TOSTYMFB.js";
import "./chunk-YZKNJW3K.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-QKYZGNAS.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-UP4YCCPE.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-NEVMX5EB.js";
import "./chunk-A4WILNGJ.js";
import {
  MatRipple
} from "./chunk-32K5DQRY.js";
import {
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  Input,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-T2LRLIH5.js";
import {
  bl,
  gl,
  lastValueFrom,
  map,
  ml,
  mo,
  vl
} from "./chunk-T6SXWR5P.js";
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
    \u0275\u0275elementStart(0, "mat-slide-toggle", 2);
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
    \u0275\u0275elementStart(0, "mat-option", 7);
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
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "mat-select", 6);
    \u0275\u0275repeaterCreate(7, SchemaFormComponent_Conditional_0_For_2_Case_1_For_8_Template, 2, 2, "mat-option", 7, _forTrack1);
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
    \u0275\u0275element(6, "input", 9);
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
  _form_sub;
  _value = {};
  constructor() {
    effect(() => {
      const schema_fields = this.fields();
      if (!schema_fields.length) {
        this._teardown();
        this.defaults_form.set(null);
        return;
      }
      this._teardown();
      const form = buildFormFromFields(schema_fields, this._value);
      this.defaults_form.set(form);
      this._form_sub = form.valueChanges.subscribe((val) => {
        this._value = val;
        this._on_change?.(val);
      });
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
  ngOnDestroy() {
    this._teardown();
  }
  /** Returns true if the generated defaults form is valid. */
  isValid() {
    const form = this.defaults_form();
    if (!form)
      return true;
    form.markAllAsTouched();
    return form.valid;
  }
  _teardown() {
    this._form_sub?.unsubscribe();
    this._form_sub = null;
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
  ])], decls: 1, vars: 1, consts: [[1, "flex", "flex-col", "gap-2", 3, "formGroup"], [1, "field"], [1, "py-2", 3, "formControlName"], [1, "mt-0", "text-xs", "opacity-60"], [3, "for"], ["appearance", "outline"], [3, "formControlName"], [3, "value"], ["matInput", "", "type", "number", 3, "formControlName", "name", "placeholder"], ["matInput", "", 3, "formControlName", "name", "placeholder"]], template: function SchemaFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SchemaFormComponent_Conditional_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.defaults_form() ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle], encapsulation: 2 });
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
                            <mat-slide-toggle
                                [formControlName]="field.key"
                                class="py-2"
                            >
                                {{ field.label }}
                            </mat-slide-toggle>
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
                                <mat-form-field appearance="outline">
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
                                <mat-form-field appearance="outline">
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
                                <mat-form-field appearance="outline">
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
      MatSlideToggleModule
    ] }]
  }], () => [], { schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SchemaFormComponent, { className: "SchemaFormComponent", filePath: "src/app/admin/signage-plugins/schema-form.component.ts", lineNumber: 207 });
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
var _forTrack02 = ($index, $item) => $item.id;
function SignagePluginModalComponent_Conditional_2_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r1.name, " ");
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_47_Template(rf, ctx) {
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
function SignagePluginModalComponent_Conditional_2_Conditional_48_Template(rf, ctx) {
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
function SignagePluginModalComponent_Conditional_2_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schema-form", 19, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("schema", ctx_r1.schema());
  }
}
function SignagePluginModalComponent_Conditional_2_Conditional_50_Template(rf, ctx) {
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
    \u0275\u0275elementStart(36, "mat-form-field", 6)(37, "mat-select", 13);
    \u0275\u0275repeaterCreate(38, SignagePluginModalComponent_Conditional_2_For_39_Template, 2, 2, "mat-option", 14, _forTrack02);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 15);
    \u0275\u0275element(41, "settings-toggle", 16);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 4)(44, "label");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, SignagePluginModalComponent_Conditional_2_Conditional_47_Template, 5, 3, "div", 17);
    \u0275\u0275conditionalCreate(48, SignagePluginModalComponent_Conditional_2_Conditional_48_Template, 3, 3, "div", 18);
    \u0275\u0275conditionalCreate(49, SignagePluginModalComponent_Conditional_2_Conditional_49_Template, 2, 1, "schema-form", 19);
    \u0275\u0275conditionalCreate(50, SignagePluginModalComponent_Conditional_2_Conditional_50_Template, 3, 3, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 20, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 22, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 24, "ADMIN.SIGNAGE_PLUGINS_NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 26, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 28, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.form.controls.uri.invalid && ctx_r1.form.controls.uri.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 30, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 32, "ADMIN.SIGNAGE_PLUGINS_FIELD_URI"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 34, "ADMIN.SIGNAGE_PLUGINS_URI_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 36, "ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.playback_types);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", \u0275\u0275pipeBind1(42, 38, "ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 40, "ADMIN.SIGNAGE_PLUGINS_FIELD_DEFAULTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.schema_loading() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.schema_error() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.schema() ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.schema_loading() && !ctx_r1.schema() && !ctx_r1.schema_error() ? 50 : -1);
  }
}
function SignagePluginModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "signage-plugin-embed", 22);
    \u0275\u0275listener("schemaChange", function SignagePluginModalComponent_Conditional_3_Template_signage_plugin_embed_schemaChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSchemaLoaded($event));
    })("plugin_error", function SignagePluginModalComponent_Conditional_3_Template_signage_plugin_embed_plugin_error_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPluginError($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("plugin", ctx_r1.embed_plugin());
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
  playback_types = [
    {
      id: "static",
      name: i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_STATIC")
    },
    {
      id: "interactive",
      name: i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_INTERACTIVE")
    },
    {
      id: "playsthrough",
      name: i18n("ADMIN.SIGNAGE_PLUGINS_PLAYBACK_PLAYSTHROUGH")
    }
  ];
  ngOnInit() {
    this.edit = !!this._data.item?.id;
    this.form = generateSignagePluginFormFields(this._data.item);
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
        this._dialog_ref.close();
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
  }, outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [["schema_form_el", ""], [3, "save", "heading", "loading"], [1, "flex", "flex-col", 3, "formGroup"], [1, "hidden"], [1, "field"], ["for", "plugin-name"], ["appearance", "outline"], ["matInput", "", "name", "plugin-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "plugin-uri"], ["matInput", "", "name", "plugin-uri", "formControlName", "uri", "required", "", 3, "placeholder"], ["for", "playback-type"], ["name", "playback-type", "formControlName", "playback_type"], [3, "value"], [1, "field", "mb-4"], ["formControlName", "enabled", 1, "w-full", 3, "name"], [1, "flex", "items-center", "space-x-2", "py-2", "text-sm", "opacity-60"], [1, "text-error", "bg-error/10", "rounded-sm", "px-4", "py-2", "text-sm"], ["formControlName", "defaults", 3, "schema"], [1, "bg-base-200", "rounded-sm", "p-8", "text-center", "text-sm", "opacity-60"], ["mode", "indeterminate", 1, "w-48"], [3, "schemaChange", "plugin_error", "plugin"]], template: function SignagePluginModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function SignagePluginModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(2, SignagePluginModalComponent_Conditional_2_Template, 51, 42, "form", 2);
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
                            <mat-select
                                name="playback-type"
                                formControlName="playback_type"
                            >
                                @for (type of playback_types; track type.id) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
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
                        <label>
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_DEFAULTS'
                                    | translate
                            }}
                        </label>
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
                            <schema-form
                                #schema_form_el
                                [schema]="schema()"
                                formControlName="defaults"
                            />
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
      MatSelectModule,
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

// src/app/admin/signage-plugins/signage-plugins.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "uri", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "playback_type", name: a0, content: a1, size: "8rem" });
var _c4 = (a0, a1) => ({ key: "enabled", name: a0, content: a1, size: "5rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", size: "6rem", content: a0, sortable: false });
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
      return \u0275\u0275resetView(ctx_r7.editPlugin(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminSignagePluginsComponent_ng_template_30_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.deletePlugin(row_r7));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.SIGNAGE_PLUGINS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.SIGNAGE_PLUGINS_REMOVE"));
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
    this.subscription("modal_events", ref.componentInstance.event.subscribe((event) => {
      if (event.reason !== "done")
        return;
      this.loadPlugins();
    }));
  }
  editPlugin(item) {
    const ref = this._dialog.open(SignagePluginModalComponent, {
      data: {
        item,
        save: (updated) => gl(item.id, updated)
      }
    });
    this.subscription("modal_events", ref.componentInstance.event.subscribe((event) => {
      if (event.reason !== "done")
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
      \u0275\u0275template(22, AdminSignagePluginsComponent_ng_template_22_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, AdminSignagePluginsComponent_ng_template_24_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(26, AdminSignagePluginsComponent_ng_template_26_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, AdminSignagePluginsComponent_ng_template_28_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, AdminSignagePluginsComponent_ng_template_30_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
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
                            size: '6rem',
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSignagePluginsComponent, { className: "AdminSignagePluginsComponent", filePath: "src/app/admin/signage-plugins/signage-plugins.component.ts", lineNumber: 168 });
})();
export {
  AdminSignagePluginsComponent
};
//# sourceMappingURL=chunk-HMBLNRZ7.js.map
