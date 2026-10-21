import {
  applyTriggerFormSchema,
  generateTriggerFormModel
} from "./chunk-UM2CQ2II.js";
import {
  CounterComponent
} from "./chunk-HUJRQ2EU.js";
import "./chunk-WKU6NAJG.js";
import {
  getInvalidSignalFields
} from "./chunk-DC3YQFAN.js";
import {
  FullscreenModalShellComponent
} from "./chunk-3DQ4QXI6.js";
import "./chunk-ZFPYWTFN.js";
import {
  HotkeysService
} from "./chunk-57T7HDE5.js";
import "./chunk-CHWIWBVC.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  SettingsToggleComponent
} from "./chunk-ZEWIPM6Y.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-LLRNJ6M2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-PCXSBO64.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  form,
  submit
} from "./chunk-R3LFGYBE.js";
import "./chunk-VDHJ5GEA.js";
import "./chunk-3KN73EXG.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-PK5A7L3I.js";
import {
  AsyncHandler
} from "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-ZQLZS64A.js";
import {
  MatOption
} from "./chunk-27URU2VR.js";
import "./chunk-TIDB3WEY.js";
import {
  TranslatePipe
} from "./chunk-YGX4BAWE.js";
import {
  i18n
} from "./chunk-5AOS3OUL.js";
import "./chunk-AOPYKUKV.js";
import {
  Ja,
  Za,
  ci
} from "./chunk-3QDC3AOP.js";
import "./chunk-LNM3OQLE.js";
import "./chunk-GHTXYZBC.js";
import "./chunk-PQUI6ASX.js";
import "./chunk-OEQM55HS.js";
import "./chunk-5JSUWHJB.js";
import "./chunk-QAR3ZGTS.js";
import "./chunk-33GRF44L.js";
import {
  Component,
  EventEmitter,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TCVU4336.js";
import {
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/triggers/trigger-form.component.ts
function TriggerFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "input", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10, "Trigger name is required");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_NAME"))("formField", ctx_r0.form.name);
    \u0275\u0275control();
  }
}
function TriggerFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "textarea", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r0.form.description);
    \u0275\u0275control();
  }
}
function TriggerFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "settings-toggle", 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "TRIGGERS.ENABLE_WEBHOOK"))("formField", ctx_r0.form.enable_webhook);
    \u0275\u0275control();
  }
}
function TriggerFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "TRIGGERS.DEBOUNCE_PERIOD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.debounce_period)("min", 0)("step", 100)("max", 24 * 60 * 60)("render_fn", ctx_r0.render_debounce);
    \u0275\u0275control();
  }
}
function TriggerFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 14)(5, "mat-select", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "mat-option", 16);
    \u0275\u0275text(7, "GET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 17);
    \u0275\u0275text(9, "POST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 18);
    \u0275\u0275text(11, "PUT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 19);
    \u0275\u0275text(13, "PATCH");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-option", 20);
    \u0275\u0275text(15, "DELETE");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "TRIGGERS.SUPPORTED_METHODS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.supported_methods);
    \u0275\u0275control();
  }
}
function TriggerFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275conditionalCreate(1, TriggerFormComponent_Conditional_1_Conditional_1_Template, 11, 9, "div", 2);
    \u0275\u0275conditionalCreate(2, TriggerFormComponent_Conditional_1_Conditional_2_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(3, TriggerFormComponent_Conditional_1_Conditional_3_Template, 3, 4, "div", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275conditionalCreate(5, TriggerFormComponent_Conditional_1_Conditional_5_Template, 5, 10, "div", 2);
    \u0275\u0275conditionalCreate(6, TriggerFormComponent_Conditional_1_Conditional_6_Template, 16, 4, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.enable_webhook ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.formModel().enable_webhook && ctx_r0.form.debounce_period ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formModel().enable_webhook && ctx_r0.form.supported_methods ? 6 : -1);
  }
}
var TriggerFormComponent = class _TriggerFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  _name = "TRIGGERS";
  event = new EventEmitter();
  formModel = signal(
    generateTriggerFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyTriggerFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = signal(
    "",
    ...ngDevMode ? [{ debugName: "heading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  render_debounce = (v) => `${v} ms`;
  ngOnInit() {
    const item = this._data.item;
    const edit = !!item.id;
    this.heading.set(i18n(`${this._name}.${edit ? "EDIT" : "NEW"}`));
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => void 0);
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
    const item = this._data.item;
    this.loading.set(i18n(`${this._name}.SAVING`));
    const item_json = item.toJSON ? item.toJSON() : item;
    const form_item = item.id ? ci(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
      void 0
    ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
    try {
      const _item = await (form_item.id ? Za(form_item.id, form_item) : Ja(form_item));
      this.event.emit({ reason: "done", metadata: { item: _item } });
      notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
      this._dialog_ref.close();
    } catch (err) {
      this.loading.set(null);
      notifyError(i18n(`${this._name}.SAVE_ERROR`, {
        error: await readError(err)
      }));
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TriggerFormComponent_BaseFactory;
    return function TriggerFormComponent_Factory(__ngFactoryType__) {
      return (\u0275TriggerFormComponent_BaseFactory || (\u0275TriggerFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TriggerFormComponent)))(__ngFactoryType__ || _TriggerFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerFormComponent, selectors: [["trigger-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["trigger", "", 1, "flex", "w-xl", "max-w-[calc(100vw-4rem)]", "flex-col"], [1, "field"], [1, "field", "mb-4", "w-[calc(50%-0.75rem)]"], [1, "flex", "items-center", "space-x-4"], ["for", "trigger-name"], ["appearance", "outline"], ["matInput", "", "id", "trigger-name", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", "id", "description", 3, "placeholder", "formField"], [3, "label", "formField"], ["for", "debounce-period", "id", "debounce-period-label"], ["id", "debounce-period", "role", "group", "aria-labelledby", "debounce-period-label", 3, "formField", "min", "step", "max", "render_fn"], ["for", "methods", "id", "methods-label"], ["appearance", "outline", 1, "no-subscript"], ["multiple", "", "id", "methods", "aria-labelledby", "methods-label", 3, "formField"], ["value", "GET"], ["value", "POST"], ["value", "PUT"], ["value", "PATCH"], ["value", "DELETE"]], template: function TriggerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function TriggerFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, TriggerFormComponent_Conditional_1_Template, 7, 5, "form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading())("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormField,
    CounterComponent,
    SettingsToggleComponent,
    MatInputModule,
    MatInput,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriggerFormComponent, [{
    type: Component,
    args: [{ selector: "trigger-form", template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form
                    trigger
                    class="flex w-xl max-w-[calc(100vw-4rem)] flex-col"
                >
                    @if (form.name) {
                        <div class="field">
                            <label
                                for="trigger-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    id="trigger-name"
                                    [formField]="form.name"
                                />
                                <mat-error>Trigger name is required</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    id="description"
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.enable_webhook) {
                        <div class="field mb-4 w-[calc(50%-0.75rem)]">
                            <settings-toggle
                                [label]="'TRIGGERS.ENABLE_WEBHOOK' | translate"
                                [formField]="form.enable_webhook"
                            />
                        </div>
                    }
                    <div class="flex items-center space-x-4">
                        @if (
                            formModel().enable_webhook && form.debounce_period
                        ) {
                            <div class="field">
                                <label
                                    for="debounce-period"
                                    id="debounce-period-label"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'TRIGGERS.DEBOUNCE_PERIOD' | translate }}
                                </label>
                                <a-counter
                                    id="debounce-period"
                                    role="group"
                                    aria-labelledby="debounce-period-label"
                                    [formField]="form.debounce_period"
                                    [min]="0"
                                    [step]="100"
                                    [max]="24 * 60 * 60"
                                    [render_fn]="render_debounce"
                                />
                            </div>
                        }
                        @if (
                            formModel().enable_webhook && form.supported_methods
                        ) {
                            <div class="field">
                                <label for="methods" id="methods-label">
                                    {{
                                        'TRIGGERS.SUPPORTED_METHODS' | translate
                                    }}
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <mat-select
                                        multiple
                                        id="methods"
                                        aria-labelledby="methods-label"
                                        [formField]="form.supported_methods"
                                    >
                                        <mat-option value="GET">GET</mat-option>
                                        <mat-option value="POST"
                                            >POST</mat-option
                                        >
                                        <mat-option value="PUT">PUT</mat-option>
                                        <mat-option value="PATCH"
                                            >PATCH</mat-option
                                        >
                                        <mat-option value="DELETE"
                                            >DELETE</mat-option
                                        >
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      MatFormFieldModule,
      MatSelectModule,
      FormField,
      CounterComponent,
      SettingsToggleComponent,
      MatInputModule,
      TranslatePipe,
      FullscreenModalShellComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerFormComponent, { className: "TriggerFormComponent", filePath: "src/app/triggers/trigger-form.component.ts", lineNumber: 177 });
})();
export {
  TriggerFormComponent
};
//# debugId=0a790c42-0406-5b29-bb3c-2fdd578c9530
//# sourceMappingURL=chunk-ND4OYR7X.js.map
