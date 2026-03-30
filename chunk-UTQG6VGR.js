import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ICL26W6M.js";
import {
  HotkeysService
} from "./chunk-OG2MHJQA.js";
import {
  ConfirmModalComponent
} from "./chunk-35SVQSIJ.js";
import {
  SimpleTableComponent
} from "./chunk-W2PUTAUI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-HLQUVQDG.js";
import "./chunk-4ALOESAF.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5YKIVDAT.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-4ODMIZ7O.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-OXGNLB63.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-YIBSFQXI.js";
import "./chunk-3DWKKPWQ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog
} from "./chunk-Y4JFOSQS.js";
import "./chunk-ITU7FLKB.js";
import {
  AsyncHandler
} from "./chunk-KNPBCUJZ.js";
import "./chunk-263IF76L.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-4IZH7QGG.js";
import "./chunk-QXQNKIRF.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-6CBQWDU5.js";
import {
  TranslatePipe
} from "./chunk-EU4TWCRF.js";
import "./chunk-TALE6FQV.js";
import {
  MatRipple
} from "./chunk-TEK5TAH3.js";
import {
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Output,
  ReactiveFormsModule,
  Validators,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QMACIC7N.js";
import {
  Rt,
  Tu,
  Uu,
  first,
  lastValueFrom,
  map,
  to
} from "./chunk-T6SXWR5P.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/extension-modal/extension-modal.component.ts
var _c0 = () => ({ standalone: true });
function ExtensionModalComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r1);
  }
}
function ExtensionModalComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.EXTENSIONS_FIELD_CONDITIONS"), " ");
  }
}
function ExtensionModalComponent_For_41_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r4);
  }
}
function ExtensionModalComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-form-field", 5)(3, "input", 16);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExtensionModalComponent_For_41_Template_input_ngModelChange_3_listener($event) {
      const condition_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(condition_r3[0], $event) || (condition_r3[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 3)(6, "mat-form-field", 5)(7, "mat-select", 17);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExtensionModalComponent_For_41_Template_mat_select_ngModelChange_7_listener($event) {
      const condition_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(condition_r3[1], $event) || (condition_r3[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, ExtensionModalComponent_For_41_For_10_Template, 3, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 3)(12, "mat-form-field", 5)(13, "input", 18);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExtensionModalComponent_For_41_Template_input_ngModelChange_13_listener($event) {
      const condition_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(condition_r3[2], $event) || (condition_r3[2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 19);
    \u0275\u0275listener("click", function ExtensionModalComponent_For_41_Template_button_click_15_listener() {
      const condition_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeCondition(condition_r3));
    });
    \u0275\u0275elementStart(16, "icon");
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const condition_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", condition_r3[0]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(16, _c0))("placeholder", \u0275\u0275pipeBind1(4, 10, "ADMIN.EXTENSIONS_CONDITION_FIELD"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", condition_r3[1]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(17, _c0))("placeholder", \u0275\u0275pipeBind1(8, 12, "ADMIN.EXTENSIONS_CONDITION_OP"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.condition_ops);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", condition_r3[1] === "truthy" || condition_r3[1] === "falsy");
    \u0275\u0275twoWayProperty("ngModel", condition_r3[2]);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c0))("placeholder", \u0275\u0275pipeBind1(14, 14, "ADMIN.EXTENSIONS_CONDITION_VALUE"));
  }
}
var ExtensionModalComponent = class _ExtensionModalComponent extends AsyncHandler {
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
  /** Emitter for user action on the modal */
  event = new EventEmitter();
  available_types = [
    "admin",
    "systems",
    "modules",
    "zones",
    "drivers",
    "repositories",
    "triggers",
    "users",
    "domains"
  ];
  condition_ops = ["includes", "equals", "truthy", "falsy"];
  item = this._data.item;
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  form = new FormGroup({
    type: new FormControl("systems", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    url: new FormControl("", [Validators.required]),
    conditions: new FormControl([])
  });
  ngOnInit() {
    this.subscription("save", this._hotkey.listen(["KeyS"], () => this.submit()));
    this.form.patchValue(this.item);
  }
  addCondition() {
    const conditions = this.form.controls.conditions.value;
    conditions.push(["", "", ""]);
  }
  removeCondition(condition) {
    this.form.controls.conditions.setValue(this.form.controls.conditions.value.filter((c) => c !== condition));
  }
  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    const value = this.form.value;
    value.conditions = value.conditions.filter((c) => c[0] && c[1]);
    this.event.emit({ reason: "done", metadata: value });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ExtensionModalComponent_BaseFactory;
    return function ExtensionModalComponent_Factory(__ngFactoryType__) {
      return (\u0275ExtensionModalComponent_BaseFactory || (\u0275ExtensionModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExtensionModalComponent)))(__ngFactoryType__ || _ExtensionModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExtensionModalComponent, selectors: [["extension-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 45, vars: 30, consts: [[3, "save", "heading", "loading"], [3, "formGroup"], [1, "fieldset"], [1, "field"], ["for", "type"], ["appearance", "outline"], ["formControlName", "type"], [3, "value"], ["for", "name"], ["matInput", "", "name", "name", "formControlName", "name", 3, "placeholder"], ["for", "url"], ["matInput", "", "name", "url", "formControlName", "url", 3, "placeholder"], [1, "w-full"], [1, "label"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "capitalize"], ["matInput", "", "name", "condition-field", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["matInput", "", "name", "value", 3, "ngModelChange", "disabled", "ngModel", "ngModelOptions", "placeholder"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function ExtensionModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function ExtensionModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-form-field", 5)(11, "mat-select", 6);
      \u0275\u0275repeaterCreate(12, ExtensionModalComponent_For_13_Template, 3, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 3)(15, "label", 8);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "mat-form-field", 5);
      \u0275\u0275element(21, "input", 9);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementStart(23, "mat-error");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 3)(27, "label", 10);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-form-field", 5);
      \u0275\u0275element(33, "input", 11);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementStart(35, "mat-error");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 12);
      \u0275\u0275conditionalCreate(39, ExtensionModalComponent_Conditional_39_Template, 3, 3, "span", 13);
      \u0275\u0275repeaterCreate(40, ExtensionModalComponent_For_41_Template, 18, 19, "div", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(42, "button", 14);
      \u0275\u0275listener("click", function ExtensionModalComponent_Template_button_click_42_listener() {
        return ctx.addCondition();
      });
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 12, ctx.item ? "ADMIN.EXTENSIONS_EDIT" : "ADMIN.EXTENSIONS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, "ADMIN.EXTENSIONS_FIELD_TYPE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.available_types);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, "COMMON.FIELD_NAME"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 18, "ADMIN.EXTENSIONS_FIELD_NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 20, "ADMIN.EXTENSIONS_NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 22, "ADMIN.EXTENSIONS_FIELD_URL"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 24, "ADMIN.EXTENSIONS_FIELD_URL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 26, "ADMIN.EXTENSIONS_URL_REQUIRED"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional((ctx.form.controls.conditions.value == null ? null : ctx.form.controls.conditions.value.length) ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.form.controls.conditions.value);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 28, "ADMIN.EXTENSIONS_CONDITION_ADD"), " ");
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    MatRippleModule,
    MatRipple,
    IconComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtensionModalComponent, [{
    type: Component,
    args: [{ selector: "extension-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (item ? 'ADMIN.EXTENSIONS_EDIT' : 'ADMIN.EXTENSIONS_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="submit()"
        >
            <form [formGroup]="form">
                <div class="fieldset">
                    <div class="field">
                        <label for="type">
                            {{ 'ADMIN.EXTENSIONS_FIELD_TYPE' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="type">
                                @for (type of available_types; track type) {
                                    <mat-option [value]="type">
                                        <span class="capitalize">{{
                                            type
                                        }}</span>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="name">
                            {{ 'COMMON.FIELD_NAME' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                [placeholder]="
                                    'ADMIN.EXTENSIONS_FIELD_NAME' | translate
                                "
                                formControlName="name"
                            />
                            <mat-error>{{
                                'ADMIN.EXTENSIONS_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="field">
                    <label for="url">
                        {{ 'ADMIN.EXTENSIONS_FIELD_URL' | translate }}
                        <span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="url"
                            [placeholder]="
                                'ADMIN.EXTENSIONS_FIELD_URL' | translate
                            "
                            formControlName="url"
                        />
                        <mat-error>{{
                            'ADMIN.EXTENSIONS_URL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="w-full">
                    @if (form.controls.conditions.value?.length) {
                        <span class="label">
                            {{
                                'ADMIN.EXTENSIONS_FIELD_CONDITIONS' | translate
                            }}
                        </span>
                    }
                    @for (
                        condition of form.controls.conditions.value;
                        track condition
                    ) {
                        <div class="fieldset">
                            <div class="field">
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="condition-field"
                                        [(ngModel)]="condition[0]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_FIELD'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <div class="field">
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        [(ngModel)]="condition[1]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_OP'
                                                | translate
                                        "
                                    >
                                        @for (
                                            type of condition_ops;
                                            track type
                                        ) {
                                            <mat-option [value]="type">
                                                <span class="capitalize">{{
                                                    type
                                                }}</span>
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="field">
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="value"
                                        [disabled]="
                                            condition[1] === 'truthy' ||
                                            condition[1] === 'falsy'
                                        "
                                        [(ngModel)]="condition[2]"
                                        [ngModelOptions]="{ standalone: true }"
                                        [placeholder]="
                                            'ADMIN.EXTENSIONS_CONDITION_VALUE'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            <button
                                icon
                                matRipple
                                class="border-error text-error h-12 w-12 rounded-sm border"
                                (click)="removeCondition(condition)"
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                    }
                    <button
                        btn
                        matRipple
                        class="w-full"
                        (click)="addCondition()"
                    >
                        {{ 'ADMIN.EXTENSIONS_CONDITION_ADD' | translate }}
                    </button>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExtensionModalComponent, { className: "ExtensionModalComponent", filePath: "src/app/admin/extension-modal/extension-modal.component.ts", lineNumber: 202 });
})();

// src/app/admin/extensions.component.ts
var _c02 = ["app-extensions", ""];
var _c1 = (a0, a1) => ({ key: "type", name: a0, content: a1, size: "5rem" });
var _c2 = (a0) => ({ key: "name", name: a0, size: "10rem" });
var _c3 = (a0, a1) => ({ key: "url", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "conditions", name: a0, content: a1, size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", size: "6rem", content: a0, sortable: false });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _forTrack0 = ($index, $item) => $item.id;
function PlaceExtensionsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r2 = ctx.$implicit;
    \u0275\u0275property("value", domain_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r2.name, " ");
  }
}
function PlaceExtensionsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.type, " ");
  }
}
function PlaceExtensionsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275pipe(1, "safe");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275property("href", \u0275\u0275pipeBind2(1, 2, row_r4.url, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.url, " ");
  }
}
function PlaceExtensionsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.conditions.length, " ");
  }
}
function PlaceExtensionsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceExtensionsComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editExtension(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PlaceExtensionsComponent_ng_template_32_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.removeExtension(row_r7));
    });
    \u0275\u0275elementStart(7, "icon", 21);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.EXTENSIONS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.EXTENSIONS_REMOVE"));
  }
}
var PlaceExtensionsComponent = class _PlaceExtensionsComponent {
  _dialog = inject(MatDialog);
  changed = signal(0, ...ngDevMode ? [{ debugName: "changed" }] : []);
  /** Loading state */
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** List of available domains */
  domain_list = signal([], ...ngDevMode ? [{ debugName: "domain_list" }] : []);
  domain = signal(null, ...ngDevMode ? [{ debugName: "domain" }] : []);
  extensions = computed(() => {
    if (!this.domain())
      return [];
    const config = this.domain().config?.backoffice?.extend || {};
    const extensions = [];
    for (const type in config) {
      if (!config[type]) {
        continue;
      }
      for (const name in config[type]) {
        if (!config[type][name])
          continue;
        extensions.push(__spreadProps(__spreadValues({}, config[type][name]), {
          name,
          type
        }));
      }
    }
    extensions.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
    return extensions;
  }, ...ngDevMode ? [{ debugName: "extensions" }] : []);
  async ngOnInit() {
    this.loading.set("Loading domains...");
    const domain_list = await lastValueFrom(Tu().pipe(map((r) => r.data)));
    this.domain_list.set(domain_list);
    const domain = Rt();
    if (!this.domain_list()?.length)
      return;
    const match = this.domain_list().find((d) => d.id === domain.id);
    if (match)
      this.domain.set(match);
    this.loading.set("");
  }
  editExtension(item) {
    const ref = this._dialog.open(ExtensionModalComponent, {
      data: { item: item ? JSON.parse(JSON.stringify(item)) : void 0 }
    });
    ref.componentInstance.event.pipe(first((__) => __.reason === "done")).subscribe(async (event) => {
      ref.componentInstance.loading.set("Saving backoffice extension...");
      let ext_list = this.extensions() || [];
      ext_list = ext_list.filter((i) => i.name !== item?.name);
      ext_list.push(event.metadata);
      await this.updateDomain(ext_list);
      ref.componentInstance.loading.set("");
      ref.close();
    });
  }
  async removeExtension(item) {
    const ref = this._dialog.open(ConfirmModalComponent, {
      data: {
        title: "Remove extension",
        content: `Are you sure you want to remove the extension "${item.name}" from ${item.type}?`,
        icon: { content: "delete" }
      }
    });
    ref.componentInstance.event.pipe(first((__) => __.reason === "done")).subscribe(async (__) => {
      ref.componentInstance.loading.set("Removing extension...");
      let ext_list = this.extensions();
      ext_list = ext_list.filter((i) => i.name !== item.name);
      await this.updateDomain(ext_list).catch((e) => notifyError(`Error removing extension: ${e}`));
      ref.componentInstance.loading.set("");
      ref.close();
    });
  }
  async updateDomain(extension_list) {
    const domain = this.domain();
    if (!domain)
      return;
    const extensions = {};
    for (const ext of extension_list) {
      if (!extensions[ext.type]) {
        extensions[ext.type] = {};
      }
      const data = __spreadValues({}, ext);
      delete data.type;
      delete data.name;
      extensions[ext.type][ext.name] = data;
    }
    const updated = new to(__spreadProps(__spreadValues({}, domain), {
      config: __spreadProps(__spreadValues({}, domain.config), {
        backoffice: __spreadProps(__spreadValues({}, domain.config.backoffice || {}), {
          extend: extensions
        })
      })
    }));
    const new_domain = await Uu(domain.id, updated).toPromise();
    this.domain.set(new_domain);
  }
  static \u0275fac = function PlaceExtensionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceExtensionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceExtensionsComponent, selectors: [["", "app-extensions", ""]], attrs: _c02, decls: 34, vars: 48, consts: [["type_template", ""], ["url_template", ""], ["conditions_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "h-12"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", 3, "click"], [1, "bg-info", "text-info-content", "mx-4", "mb-4", "flex", "items-center", "space-x-4", "rounded-sm", "p-4", "text-sm", "shadow-sm"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "p-4", "font-mono", "text-xs", "uppercase"], [1, "truncate", "p-4", "underline", 3, "href"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function PlaceExtensionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "mat-form-field", 8)(7, "mat-select", 9);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function PlaceExtensionsComponent_Template_mat_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.domain, $event) || (ctx.domain = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275repeaterCreate(9, PlaceExtensionsComponent_For_10_Template, 2, 2, "mat-option", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 11);
      \u0275\u0275listener("click", function PlaceExtensionsComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editExtension());
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 12)(15, "p");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275element(19, "mat-progress-bar", 14)(20, "simple-table", 15);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275template(26, PlaceExtensionsComponent_ng_template_26_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(28, PlaceExtensionsComponent_ng_template_28_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(30, PlaceExtensionsComponent_ng_template_30_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(32, PlaceExtensionsComponent_ng_template_32_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const type_template_r9 = \u0275\u0275reference(27);
      const url_template_r10 = \u0275\u0275reference(29);
      const conditions_template_r11 = \u0275\u0275reference(31);
      const actions_template_r12 = \u0275\u0275reference(33);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "ADMIN.EXTENSIONS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.domain);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 13, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "ADMIN.EXTENSIONS_ADD"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, "ADMIN.EXTENSIONS_NOTICE"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.extensions())("columns", \u0275\u0275pureFunction5(42, _c6, \u0275\u0275pureFunction2(29, _c1, \u0275\u0275pipeBind1(21, 19, "ADMIN.EXTENSIONS_FIELD_TYPE"), type_template_r9), \u0275\u0275pureFunction1(32, _c2, \u0275\u0275pipeBind1(22, 21, "ADMIN.EXTENSIONS_FIELD_TAB")), \u0275\u0275pureFunction2(34, _c3, \u0275\u0275pipeBind1(23, 23, "ADMIN.EXTENSIONS_FIELD_URL"), url_template_r10), \u0275\u0275pureFunction2(37, _c4, \u0275\u0275pipeBind1(24, 25, "ADMIN.EXTENSIONS_FIELD_CHECKS"), conditions_template_r11), \u0275\u0275pureFunction1(40, _c5, actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(25, 27, "ADMIN.EXTENSIONS_LIST_EMPTY"));
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
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    SafePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=extensions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceExtensionsComponent, [{
    type: Component,
    args: [{ selector: "[app-extensions]", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.EXTENSIONS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="h-12">
                        <mat-select
                            name="type"
                            [(ngModel)]="domain"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list(); track domain.id) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple (click)="editExtension()">
                        {{ 'ADMIN.EXTENSIONS_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div
                class="bg-info text-info-content mx-4 mb-4 flex items-center space-x-4 rounded-sm p-4 text-sm shadow-sm"
            >
                <p>{{ 'ADMIN.EXTENSIONS_NOTICE' | translate }}</p>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-4xl text-sm"
                    [data]="extensions()"
                    [columns]="[
                        {
                            key: 'type',
                            name: 'ADMIN.EXTENSIONS_FIELD_TYPE' | translate,
                            content: type_template,
                            size: '5rem',
                        },
                        {
                            key: 'name',
                            name: 'ADMIN.EXTENSIONS_FIELD_TAB' | translate,
                            size: '10rem',
                        },
                        {
                            key: 'url',
                            name: 'ADMIN.EXTENSIONS_FIELD_URL' | translate,
                            content: url_template,
                        },
                        {
                            key: 'conditions',
                            name: 'ADMIN.EXTENSIONS_FIELD_CHECKS' | translate,
                            content: conditions_template,
                            size: '6rem',
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
                    [empty_message]="'ADMIN.EXTENSIONS_LIST_EMPTY' | translate"
                ></simple-table>
                <ng-template #type_template let-row="row">
                    <div class="p-4 font-mono text-xs uppercase">
                        {{ row.type }}
                    </div>
                </ng-template>
                <ng-template #url_template let-row="row">
                    <a
                        class="truncate p-4 underline"
                        [href]="row.url | safe: 'url'"
                    >
                        {{ row.url }}
                    </a>
                </ng-template>
                <ng-template #conditions_template let-row="row">
                    <div class="p-4">
                        {{ row.conditions.length }}
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            [matTooltip]="'ADMIN.EXTENSIONS_EDIT' | translate"
                            (click)="editExtension(row)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'ADMIN.EXTENSIONS_REMOVE' | translate"
                            (click)="removeExtension(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    </div>
                </ng-template>
            </div>
        </div>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SafePipe
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/admin/extensions.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=extensions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceExtensionsComponent, { className: "PlaceExtensionsComponent", filePath: "src/app/admin/extensions.component.ts", lineNumber: 188 });
})();
export {
  PlaceExtensionsComponent
};
//# sourceMappingURL=chunk-UTQG6VGR.js.map
