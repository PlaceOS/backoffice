import {
  applyTriggerFormSchema,
  generateTriggerFormModel
} from "./chunk-XBYJ5ZVX.js";
import {
  CounterComponent
} from "./chunk-MB5JCL7R.js";
import "./chunk-WKU6NAJG.js";
import {
  mergeFormItem,
  onSaveHotkey,
  submitFormDialog
} from "./chunk-5PQEOVYV.js";
import {
  FullscreenModalShellComponent
} from "./chunk-DU365UGO.js";
import "./chunk-G4GCGIB2.js";
import "./chunk-PNWJF2I5.js";
import "./chunk-TIQYM46E.js";
import "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import "./chunk-T3O7QHHC.js";
import {
  SettingsToggleComponent
} from "./chunk-HB6BWUYB.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-G3URG5GH.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-JVQGOL5R.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-7XEKM6I6.js";
import {
  FormField,
  form
} from "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import "./chunk-PZ6AYSMX.js";
import "./chunk-C5JU5DGK.js";
import "./chunk-XTVPLVG6.js";
import "./chunk-3VVTXJY2.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import {
  MatOption
} from "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import "./chunk-YFWFSNMM.js";
import "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-Y2BF2IN5.js";
import {
  i18n
} from "./chunk-LD7JHF4N.js";
import {
  Ja,
  Za
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  EventEmitter,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

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
var TriggerFormComponent = class _TriggerFormComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
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
  constructor() {
    onSaveHotkey(() => this.submit());
  }
  ngOnInit() {
    const item = this._data.item;
    const edit = !!item.id;
    this.heading.set(i18n(`${this._name}.${edit ? "EDIT" : "NEW"}`));
  }
  async submit() {
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, () => {
      const form_item = mergeFormItem(this._data.item, this.formModel());
      return form_item.id ? Za(form_item.id, form_item) : Ja(form_item);
    });
  }
  static \u0275fac = function TriggerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TriggerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TriggerFormComponent, selectors: [["trigger-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["trigger", "", 1, "flex", "w-xl", "max-w-[calc(100vw-4rem)]", "flex-col"], [1, "field"], [1, "field", "mb-4", "w-[calc(50%-0.75rem)]"], [1, "flex", "items-center", "space-x-4"], ["for", "trigger-name"], ["appearance", "outline"], ["matInput", "", "id", "trigger-name", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", "id", "description", 3, "placeholder", "formField"], [3, "label", "formField"], ["for", "debounce-period", "id", "debounce-period-label"], ["id", "debounce-period", "role", "group", "aria-labelledby", "debounce-period-label", 3, "formField", "min", "step", "max", "render_fn"], ["for", "methods", "id", "methods-label"], ["appearance", "outline", 1, "no-subscript"], ["multiple", "", "id", "methods", "aria-labelledby", "methods-label", 3, "formField"], ["value", "GET"], ["value", "POST"], ["value", "PUT"], ["value", "PATCH"], ["value", "DELETE"]], template: function TriggerFormComponent_Template(rf, ctx) {
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
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TriggerFormComponent, { className: "TriggerFormComponent", filePath: "src/app/triggers/trigger-form.component.ts", lineNumber: 168 });
})();
export {
  TriggerFormComponent
};
//# debugId=604bb8d4-968f-593c-b07b-0f00e356c4f5
//# sourceMappingURL=chunk-DKGDPDTI.js.map
