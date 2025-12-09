import {
  SettingsFieldComponent
} from "./chunk-FMFSSPNS.js";
import {
  DiffViewerComponent
} from "./chunk-WU6XWPOS.js";
import {
  validateJSONString
} from "./chunk-5IGCJCU7.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule,
  addChipItem,
  removeChipItem
} from "./chunk-TLAPUNA6.js";
import {
  DateFromPipe
} from "./chunk-DUZVXEAA.js";
import {
  openConfirmModal
} from "./chunk-62JZIUWG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-2UE6DVRM.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-L4LNMNAU.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-KACAXRUK.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatPrefix
} from "./chunk-R3CS2OQD.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-457I3P7O.js";
import {
  VERSION,
  currentUser
} from "./chunk-QJ4EJAO2.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-6DCZX4UE.js";
import {
  AsyncHandler
} from "./chunk-HZ7P5O2S.js";
import {
  IconComponent
} from "./chunk-RYIKAYVN.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-ZXSXDT5W.js";
import {
  TranslatePipe
} from "./chunk-JGQFOLKM.js";
import {
  COMMA,
  ENTER,
  MatRipple,
  SPACE
} from "./chunk-WRCAB6XW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Input,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HV66NOZY.js";
import {
  Eu,
  Iu,
  Ru,
  Tu,
  lastValueFrom
} from "./chunk-K7VBXBIC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/overlays/metadata-details-modal.component.ts
function MetadataDetailsModalComponent_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 19);
    \u0275\u0275listener("removed", function MetadataDetailsModalComponent_Conditional_6_For_20_Template_mat_chip_row_removed_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeEditor(item_r3));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21)(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + item_r3);
  }
}
function MetadataDetailsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "label", 7);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 9);
    \u0275\u0275element(7, "input", 10);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 11);
    \u0275\u0275text(11, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 9);
    \u0275\u0275element(13, "textarea", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "label", 13);
    \u0275\u0275text(15, "Editors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 14)(17, "mat-chip-grid", 15, 0);
    \u0275\u0275repeaterCreate(19, MetadataDetailsModalComponent_Conditional_6_For_20_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 16);
    \u0275\u0275listener("matChipInputTokenEnd", function MetadataDetailsModalComponent_Conditional_6_Template_input_matChipInputTokenEnd_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addEditor($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 17);
    \u0275\u0275text(23, "Schema:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 9);
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(18);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r3.form.controls.name.invalid && ctx_r3.form.controls.name.touched);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r3.form.controls.name == null ? null : ctx_r3.form.controls.name.errors == null ? null : ctx_r3.form.controls.name.errors.name) ? "Property name must be unique" : "Property name is required");
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r3.editors);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r3.separators)("matChipInputAddOnBlur", true);
  }
}
var MetadataDetailsModalComponent = class _MetadataDetailsModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  form = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    editors: new FormControl(""),
    schema: new FormControl("")
  });
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  addEditor = (e) => addChipItem(this.form.controls.editors, e);
  removeEditor = (i) => removeChipItem(this.form.controls.editors, i);
  get editors() {
    return this.form?.controls.editors.value;
  }
  ngOnInit() {
    this.form.controls.name.setValidators(this._data.form.controls.name.validator);
    this.form.patchValue(this._data.form.value);
  }
  updateDetails() {
    this._data.form.patchValue(this.form.value);
    const { name, description, editors, schema } = this.form.getRawValue();
    this._data.form.patchValue({ name, description, editors, schema });
    this._data.change.set(Date.now());
    this._dialog_ref.close();
  }
  static \u0275fac = function MetadataDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataDetailsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataDetailsModalComponent, selectors: [["app-metadata-details-modal"]], decls: 10, vars: 2, consts: [["chipList", ""], [1, "border-base-100", "bg-base-200", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "flex", "w-lg", "flex-col", "p-4", 3, "formGroup"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click", "disabled"], ["for", "property-name"], ["required", ""], ["appearance", "outline"], ["matInput", "", "name", "property-name", "placeholder", "Property Name", "formControlName", "name", "required", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description"], ["for", "system-email"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], ["placeholder", "Editors...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["for", "schema"], ["matInput", "", "name", "schema", "placeholder", "Schema", "formControlName", "schema"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function MetadataDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
      \u0275\u0275text(2, "Update metadata details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 3)(4, "icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, MetadataDetailsModalComponent_Conditional_6_Template, 26, 7, "main", 4);
      \u0275\u0275elementStart(7, "footer", 5)(8, "button", 6);
      \u0275\u0275listener("click", function MetadataDetailsModalComponent_Template_button_click_8_listener() {
        return ctx.updateDetails();
      });
      \u0275\u0275text(9, " Apply Locally ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.form ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !(ctx.form == null ? null : ctx.form.controls.name.valid));
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    MatFormFieldModule,
    MatFormField,
    MatError,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    MatInputModule,
    MatInput,
    IconComponent,
    FormsModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "app-metadata-details-modal", template: `
        <header
            class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border px-4 py-2"
        >
            <h2 class="text-xl font-medium">Update metadata details</h2>
            <button btn icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="flex w-lg flex-col p-4">
                <label
                    for="property-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    >Name<span required>*</span>:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="property-name"
                        placeholder="Property Name"
                        formControlName="name"
                        required
                    />
                    <mat-error>{{
                        form.controls.name?.errors?.name
                            ? 'Property name must be unique'
                            : 'Property name is required'
                    }}</mat-error>
                </mat-form-field>
                <label for="description">Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
                <label for="system-email">Editors:</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid #chipList aria-label="Image List">
                        @for (item of editors; track item) {
                            <mat-chip-row (removed)="removeEditor(item)">
                                <div class="max-w-md truncate">{{ item }}</div>
                                <button
                                    matChipRemove
                                    [attr.aria-label]="'Remove ' + item"
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
                    </mat-chip-grid>
                    <input
                        placeholder="Editors..."
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addEditor($event)"
                    />
                </mat-form-field>
                <label for="schema">Schema:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="schema"
                        placeholder="Schema"
                        formControlName="schema"
                    />
                </mat-form-field>
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex items-center justify-end space-x-2 rounded-sm p-2"
        >
            <button
                btn
                matRipple
                class="w-40"
                [disabled]="!form?.controls.name.valid"
                (click)="updateDetails()"
            >
                Apply Locally
            </button>
        </footer>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatChipsModule,
      MatInputModule,
      IconComponent,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDetailsModalComponent, { className: "MetadataDetailsModalComponent", filePath: "src/app/overlays/metadata-details-modal.component.ts", lineNumber: 131 });
})();

// src/app/overlays/metadata-history-modal.component.ts
var _forTrack0 = ($index, $item) => $item.updated_at;
function MetadataHistoryModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.id, " ");
  }
}
function MetadataHistoryModalComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275listener("click", function MetadataHistoryModalComponent_For_27_Template_mat_option_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.select(0, item_r3));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("value", item_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 4, item_r3.updated_at, "mediumDate"), ", ", \u0275\u0275pipeBind2(4, 7, item_r3.updated_at, "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r3.description, " ");
  }
}
function MetadataHistoryModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.first.description);
  }
}
function MetadataHistoryModalComponent_For_32_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275listener("click", function MetadataHistoryModalComponent_For_32_Conditional_0_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.select(1, item_r5));
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 4, item_r5.updated_at, "mediumDate"), ", ", \u0275\u0275pipeBind2(4, 7, item_r5.updated_at, "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.description, " ");
  }
}
function MetadataHistoryModalComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataHistoryModalComponent_For_32_Conditional_0_Template, 7, 10, "mat-option", 15);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(item_r5 !== ctx_r0.first ? 0 : -1);
  }
}
function MetadataHistoryModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.second.description);
  }
}
function MetadataHistoryModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "diff-viewer", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("modified", ctx_r0.second_details || "")("original", ctx_r0.first_details || "");
  }
}
function MetadataHistoryModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Select 2 versions of the metadata to get started ");
    \u0275\u0275elementEnd();
  }
}
var MetadataHistoryModalComponent = class _MetadataHistoryModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  id = this._data.id;
  parent_name = this._data.parent_name;
  name = this._data.name;
  history = [];
  first = null;
  second = null;
  first_details = "";
  second_details = "";
  async ngOnInit() {
    const history = await Iu(this._data.id, {
      name: this._data.name,
      limit: 5e3
    }).toPromise();
    this.history = history;
  }
  select(idx, item) {
    if (idx === 0) {
      this.first_details = JSON.stringify(item.details, void 0, 4);
      if (this.first === this.second) {
        this.second = null;
        this.second_details = "";
      }
    } else {
      this.second_details = JSON.stringify(item.details, void 0, 4);
    }
  }
  static \u0275fac = function MetadataHistoryModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataHistoryModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataHistoryModalComponent, selectors: [["metadata-history-modal"]], decls: 37, vars: 18, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "overflow-hidden"], [1, "bg-base-200", "m-4", "flex", "items-center", "justify-between", "rounded-sm", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "flex-1", "flex-col", "pb-4"], [1, "mb-2", "flex", "items-center", "space-x-2", "px-4"], [1, "border-base-300", "relative", "h-14", "min-w-48", "rounded-sm", "border", "px-4", "py-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "truncate"], [1, "text-xs", "opacity-30"], [1, "border-base-300", "relative", "flex", "h-14", "min-w-48", "items-center", "rounded-sm", "border", "px-4", "py-2"], [1, "truncate", "font-mono", "text-lg"], [1, "mb-2", "flex", "items-center", "justify-between", "space-x-2", "px-4"], ["appearance", "outline", 1, "w-[20rem]"], ["placeholder", "Select metadata version", 3, "ngModelChange", "ngModel"], [1, "leading-tight", 3, "value"], ["placeholder", "Compare with", 3, "ngModelChange", "ngModel"], [1, "relative", "w-full", "flex-1", "px-4"], [3, "modified", "original"], [1, "bg-base-200", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-lg", "opacity-40"], [1, "leading-tight", 3, "click", "value"], [1, ""], [1, "truncate", "text-xs", "opacity-30"]], template: function MetadataHistoryModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3)(6, "icon");
      \u0275\u0275text(7, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "main", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, MetadataHistoryModalComponent_Conditional_16_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 12)(24, "mat-form-field", 13)(25, "mat-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function MetadataHistoryModalComponent_Template_mat_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.first, $event) || (ctx.first = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(26, MetadataHistoryModalComponent_For_27_Template, 7, 10, "mat-option", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(28, MetadataHistoryModalComponent_Conditional_28_Template, 2, 1, "mat-hint", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-form-field", 13)(30, "mat-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function MetadataHistoryModalComponent_Template_mat_select_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.second, $event) || (ctx.second = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(31, MetadataHistoryModalComponent_For_32_Template, 1, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(33, MetadataHistoryModalComponent_Conditional_33_Template, 2, 1, "mat-hint", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 17);
      \u0275\u0275conditionalCreate(35, MetadataHistoryModalComponent_Conditional_35_Template, 1, 2, "diff-viewer", 18);
      \u0275\u0275conditionalCreate(36, MetadataHistoryModalComponent_Conditional_36_Template, 2, 0, "div", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 12, "COMMON.METADATA_HISTORY"), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "COMMON.METADATA_OWNER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.parent_name || ctx.id, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.parent_name ? 16 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "COMMON.METADATA_KEY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.name, " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.first);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.history);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.first ? 28 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.second);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.history);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.second ? 33 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.first_details || ctx.second_details ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!(ctx.first_details && ctx.second_details) ? 36 : -1);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    DiffViewerComponent,
    MatFormFieldModule,
    MatFormField,
    MatHint,
    MatSelectModule,
    MatSelect,
    MatOption,
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    IconComponent,
    DatePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataHistoryModalComponent, [{
    type: Component,
    args: [{ selector: "metadata-history-modal", template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col overflow-hidden"
        >
            <div
                class="bg-base-200 m-4 flex items-center justify-between rounded-sm px-4 py-2"
            >
                <h3 class="text-xl font-medium">
                    {{ 'COMMON.METADATA_HISTORY' | translate }}
                </h3>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
            <main class="flex flex-1 flex-col pb-4">
                <div class="mb-2 flex items-center space-x-2 px-4">
                    <div
                        class="border-base-300 relative h-14 min-w-48 rounded-sm border px-4 py-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'COMMON.METADATA_OWNER' | translate }}
                        </div>
                        <div class="truncate">
                            {{ parent_name || id }}
                        </div>
                        @if (parent_name) {
                            <div class="text-xs opacity-30">
                                {{ id }}
                            </div>
                        }
                    </div>
                    <div
                        class="border-base-300 relative flex h-14 min-w-48 items-center rounded-sm border px-4 py-2"
                    >
                        <div
                            class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm px-2 py-1 text-xs"
                        >
                            {{ 'COMMON.METADATA_KEY' | translate }}
                        </div>
                        <div class="truncate font-mono text-lg">
                            {{ name }}
                        </div>
                    </div>
                </div>
                <div
                    class="mb-2 flex items-center justify-between space-x-2 px-4"
                >
                    <mat-form-field appearance="outline" class="w-[20rem]">
                        <mat-select
                            [(ngModel)]="first"
                            placeholder="Select metadata version"
                        >
                            @for (item of history; track item.updated_at) {
                                <mat-option
                                    [value]="item"
                                    (click)="select(0, item)"
                                    class="leading-tight"
                                >
                                    <div class="">
                                        {{
                                            item.updated_at
                                                | date: 'mediumDate'
                                        }},
                                        {{
                                            item.updated_at | date: 'shortTime'
                                        }}
                                    </div>
                                    <div class="truncate text-xs opacity-30">
                                        {{ item.description }}
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                        @if (first) {
                            <mat-hint class="truncate">{{
                                first.description
                            }}</mat-hint>
                        }
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="w-[20rem]">
                        <mat-select
                            [(ngModel)]="second"
                            placeholder="Compare with"
                        >
                            @for (item of history; track item.updated_at) {
                                @if (item !== first) {
                                    <mat-option
                                        [value]="item"
                                        (click)="select(1, item)"
                                        class="leading-tight"
                                    >
                                        <div class="">
                                            {{
                                                item.updated_at
                                                    | date: 'mediumDate'
                                            }},
                                            {{
                                                item.updated_at
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                        <div
                                            class="truncate text-xs opacity-30"
                                        >
                                            {{ item.description }}
                                        </div>
                                    </mat-option>
                                }
                            }
                        </mat-select>
                        @if (second) {
                            <mat-hint class="truncate">{{
                                second.description
                            }}</mat-hint>
                        }
                    </mat-form-field>
                </div>
                <div class="relative w-full flex-1 px-4">
                    @if (first_details || second_details) {
                        <diff-viewer
                            [modified]="second_details || ''"
                            [original]="first_details || ''"
                        ></diff-viewer>
                    }
                    @if (!(first_details && second_details)) {
                        <div
                            class="bg-base-200 flex h-full w-full items-center justify-center rounded-lg opacity-40"
                        >
                            Select 2 versions of the metadata to get started
                        </div>
                    }
                </div>
            </main>
        </div>
    `, imports: [
      MatDialogModule,
      DiffViewerComponent,
      MatFormFieldModule,
      MatSelectModule,
      CommonModule,
      FormsModule,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataHistoryModalComponent, { className: "MetadataHistoryModalComponent", filePath: "src/app/overlays/metadata-history-modal.component.ts", lineNumber: 164 });
})();

// src/app/ui/metadata-display.component.ts
var _forTrack02 = ($index, $item) => $item.name;
function MetadataDisplayComponent_Conditional_8_For_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-form-field", 23);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("schema", ctx_r3.schema_map()[item_r3.name])("readonly", false);
  }
}
function MetadataDisplayComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_8_For_2_Template_button_click_1_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleView(item_r3));
    });
    \u0275\u0275elementStart(2, "h3", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "dateFrom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_8_For_2_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_8_For_2_Template_button_click_9_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveMetadata(item_r3));
    });
    \u0275\u0275elementStart(11, "icon", 16);
    \u0275\u0275text(12, "save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 17);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_8_For_2_Template_button_click_13_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editMetadataDetails(item_r3));
    });
    \u0275\u0275elementStart(15, "icon", 16);
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_8_For_2_Template_button_click_17_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewMetadataHistory(item_r3));
    });
    \u0275\u0275elementStart(19, "icon", 16);
    \u0275\u0275text(20, "history");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 18);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_8_For_2_Template_button_click_21_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteMetadata(item_r3.name));
    });
    \u0275\u0275elementStart(23, "icon", 16);
    \u0275\u0275text(24, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "button", 19)(26, "icon", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 21)(29, "div")(30, "div", 22);
    \u0275\u0275conditionalCreate(31, MetadataDisplayComponent_Conditional_8_For_2_Conditional_31_Template, 1, 2, "settings-form-field", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("shadow", ctx_r3.show_view() === item_r3.name)("opacity-30", item_r3.match === false);
    \u0275\u0275property("id", "md-block-" + item_r3.name)("formGroup", ctx_r3.form_map()[item_r3.name]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.names()[item_r3.name], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, item_r3.updated_at), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r3.edited[item_r3.name])("matTooltip", \u0275\u0275pipeBind1(10, 19, "COMMON.SAVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 21, "COMMON.METADATA_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 23, "COMMON.METADATA_HISTORY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(22, 25, "COMMON.METADATA_REMOVE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.show_view() === item_r3.name ? "keyboard_arrow_down" : "chevron_right");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r3.show_view() === item_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.show_view() === item_r3.name ? 31 : -1);
  }
}
function MetadataDisplayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, MetadataDisplayComponent_Conditional_8_For_2_Template, 32, 27, "div", 8, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.metadata());
  }
}
function MetadataDisplayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 24);
    \u0275\u0275text(2, "settings_alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.METADATA_EMPTY"));
  }
}
function MetadataDisplayComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 25);
  }
}
function replaceDescTag(inputString, newContent) {
  return inputString.replace(/^\[.*?\]/, `[${newContent}]`);
}
var MetadataDisplayComponent = class _MetadataDisplayComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  // private _schemas = inject(SchemaStateService);
  item = input(void 0, ...ngDevMode ? [{ debugName: "item" }] : []);
  /** List of metadata associated with the zone */
  metadata = signal([], ...ngDevMode ? [{ debugName: "metadata" }] : []);
  /** Map of form field groups to metadata fields */
  form_map = signal({}, ...ngDevMode ? [{ debugName: "form_map" }] : []);
  /** Map of metadata fields to whether they have been edited */
  edited = signal({}, ...ngDevMode ? [{ debugName: "edited" }] : []);
  /** Map of metadata properties to whether they are saving */
  loading = signal({}, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Map of metadata schemas to the associated metadata */
  schema_map = signal({}, ...ngDevMode ? [{ debugName: "schema_map" }] : []);
  /** Metadata contents to view */
  show_view = signal("", ...ngDevMode ? [{ debugName: "show_view" }] : []);
  /** Search text for filtering metadata */
  search_text = signal("", ...ngDevMode ? [{ debugName: "search_text" }] : []);
  change = signal(0, ...ngDevMode ? [{ debugName: "change" }] : []);
  names = computed(() => {
    this.change();
    const name_map = {};
    for (const key in this.form_map()) {
      name_map[key] = this.form_map()[key].value.name;
    }
    return name_map;
  }, ...ngDevMode ? [{ debugName: "names" }] : []);
  validateName(name_list) {
    return (control) => {
      return name_list.indexOf(control.value) >= 0 ? { name: true } : null;
    };
  }
  ngOnChanges(changes) {
    if (changes.item && this.item()) {
      this.loadMetadata();
    }
  }
  toggleView(item) {
    this.show_view.update((current) => current === item.name ? "" : item.name);
    this.search_text.set("");
    this.filterMetadata();
  }
  newMetadata() {
    this.metadata.update((l) => {
      l.push({
        name: `new_field_${Math.floor(Math.random() * 999999999)}`,
        description: "",
        new: true,
        details: {}
      });
      return l;
    });
    this.generateForms();
  }
  editMetadataDetails(field) {
    const form = this.form_map()[field.name];
    this._dialog.open(MetadataDetailsModalComponent, {
      maxWidth: "95vw",
      data: { form, change: this.change }
    });
  }
  /**
   * Delete the given metadata field
   * @param field Name of the field to remove
   */
  async deleteMetadata(field) {
    const result = await openConfirmModal({
      title: `Remove Metadata block`,
      content: `
                <p>Are you sure you want delete the metadata property "${field}"?</p>
            `,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    await lastValueFrom(Ru(this.item().id, { name: field })).catch((err) => {
      notifyError(`Error removing old "${field}" metadata. Error: ${err.response || err.message || err}`);
      throw err;
    });
    notifySuccess(`Successfully removed "${field}" metadata.`);
    this.metadata.set(this.metadata().filter((prop) => prop && prop.name !== field));
    this.generateForms();
  }
  filterMetadata() {
    const search = this.search_text().toLowerCase();
    if (search)
      this.show_view.set("");
    this.metadata.update((list) => {
      for (const block of list) {
        block.match = block.name.toLowerCase().includes(search) || `${this.form_map()[block.name].controls.name.value}`.toLowerCase().includes(search);
      }
      return list;
    });
  }
  saveMetadata(field) {
    const form = this.form_map()[field.name];
    form.markAllAsTouched();
    if (!form.valid)
      return notifyError(`JSON for property "${form.controls.name.value}" is invalid`);
    const value = form.value;
    this.loading.update((m) => {
      m[field.name] = true;
      return m;
    });
    const desc = value.description;
    const new_desc = replaceDescTag(desc, `${VERSION.hash}|B`);
    const data = JSON.parse(value.details);
    if (/^\[.*?\]/.test(desc)) {
      const user = currentUser();
      data.edited_by = {
        id: user.id,
        name: user.name,
        email: user.email,
        auth_id: user.authority_id,
        role: user.sys_admin ? "Admin" : user.support ? "Support" : "User"
      };
    }
    Tu(this.item().id, __spreadProps(__spreadValues({}, value), {
      description: new_desc,
      details: data
    })).subscribe({
      next: (item) => {
        this.loading[field.name] = false;
        const index = this.metadata().findIndex((i) => i.name === field.name);
        this.edited[field.name] = false;
        console.log("Field:", field.name, value.name, item);
        if (field.name !== value.name) {
          lastValueFrom(Ru(this.item().id, { name: field.name })).catch((err) => notifyError(`Error removing old "${field.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`));
        }
        if (index >= 0) {
          this.metadata.update((l) => {
            l.splice(index, 1, __spreadProps(__spreadValues({}, item), {
              new: false
            }));
            return l;
          });
        }
        notifySuccess(`Saved "${value.name}" metadata.`);
        this.generateForms();
      },
      error: (err) => {
        this.loading[field.name] = false;
        notifyError(`Error saving "${value.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`);
      }
    });
  }
  generateForms() {
    this.form_map.set({});
    this.metadata().forEach((group) => {
      const details = typeof group.details === "string" ? JSON.parse(group.details) : group.details;
      this.form_map.update((m) => {
        m[group.name] = new FormGroup({
          name: new FormControl(group.name, [
            Validators.required,
            this.validateName(this.metadata().filter((i) => i.name !== group.name).map((i) => i.name))
          ]),
          description: new FormControl(group.description),
          editors: new FormControl(group.editors),
          details: new FormControl(JSON.stringify(details || {}, void 0, 4), [Validators.required, validateJSONString]),
          schema: new FormControl(group.schema)
        });
        return m;
      });
      this.subscription(`${group.name}_changes`, this.form_map()[group.name].valueChanges.subscribe(() => this.edited[group.name] = true));
    });
  }
  loadMetadata() {
    Eu(this.item().id).subscribe((map) => {
      this.metadata.set(Object.keys(map).map((key) => map[key]).sort((a, b) => a.name.localeCompare(b.name)).filter((m) => !!m));
      this.generateForms();
    });
  }
  viewMetadataHistory(item) {
    const itemValue = this.item();
    this._dialog.open(MetadataHistoryModalComponent, {
      data: {
        id: this.item().id,
        parent_name: itemValue.display_name || itemValue.name,
        name: item.name
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MetadataDisplayComponent_BaseFactory;
    return function MetadataDisplayComponent_Factory(__ngFactoryType__) {
      return (\u0275MetadataDisplayComponent_BaseFactory || (\u0275MetadataDisplayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MetadataDisplayComponent)))(__ngFactoryType__ || _MetadataDisplayComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataDisplayComponent, selectors: [["metadata-display"]], inputs: { item: [1, "item"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 12, vars: 5, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "space-x-2"], ["btn", "", 3, "click"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search metadata blocks...", 3, "ngModelChange", "ngModel"], [1, "mt-4", "space-y-2"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-8", "p-16", "opacity-30"], ["block", "", 1, "border-base-300", "rounded-sm", "border", 3, "id", "shadow", "opacity-30", "formGroup"], ["block", "", 1, "border-base-300", "rounded-sm", "border", 3, "id", "formGroup"], ["header", "", 1, "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "px-2", "py-1", 3, "click"], [1, "truncate", "px-2", "font-mono", "text-sm"], [1, "flex-1"], [1, "border-base-300", "rounded-sm", "border", "px-2", "py-1", "font-mono", "text-[0.625rem]", "whitespace-nowrap"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "rounded-full", "border", 3, "click"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "text-xl"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], ["icon", "", "matRipple", ""], [1, "text-2xl"], ["body", "", 1, "expandable"], [1, "border-base-300", "h-130", "border-t", "p-1"], ["formControlName", "details", "lang", "json", 3, "schema", "readonly"], [1, "text-8xl"], ["diameter", "32"]], template: function MetadataDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
      \u0275\u0275listener("click", function MetadataDisplayComponent_Template_button_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newMetadata());
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "icon", 4);
      \u0275\u0275text(6, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function MetadataDisplayComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search_text, $event) || (ctx.search_text = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function MetadataDisplayComponent_Template_input_ngModelChange_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filterMetadata());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, MetadataDisplayComponent_Conditional_8_Template, 3, 0, "div", 6)(9, MetadataDisplayComponent_Conditional_9_Template, 6, 3, "div", 7);
      \u0275\u0275template(10, MetadataDisplayComponent_ng_template_10_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.METADATA_NEW"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.search_text);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.metadata()) == null ? null : tmp_3_0.length) > 0 ? 8 : 9);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    SettingsFieldComponent,
    MatTooltipModule,
    MatTooltip,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[block][_ngcontent-%COMP%] {\n  transition: opacity 0.2s ease-in-out;\n}\n/*# sourceMappingURL=metadata-display.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataDisplayComponent, [{
    type: Component,
    args: [{ selector: "metadata-display", template: `
        <div class="flex items-center justify-between space-x-2">
            <button btn (click)="newMetadata()">
                {{ 'COMMON.METADATA_NEW' | translate }}
            </button>
            <mat-form-field appearance="outline" class="no-subscript">
                <icon matPrefix class="relative -left-1 text-2xl">search</icon>
                <input
                    matInput
                    [(ngModel)]="search_text"
                    (ngModelChange)="filterMetadata()"
                    placeholder="Search metadata blocks..."
                />
            </mat-form-field>
        </div>
        @if (metadata()?.length > 0) {
            <div class="mt-4 space-y-2">
                @for (item of metadata(); track item.name) {
                    <div
                        block
                        [id]="'md-block-' + item.name"
                        class="border-base-300 rounded-sm border"
                        [class.shadow]="show_view() === item.name"
                        [class.opacity-30]="item.match === false"
                        [formGroup]="form_map()[item.name]"
                    >
                        <button
                            header
                            class="bg-base-200 flex w-full items-center space-x-2 px-2 py-1"
                            (click)="toggleView(item)"
                        >
                            <h3 class="truncate px-2 font-mono text-sm">
                                {{ names()[item.name] }}
                            </h3>
                            <div class="flex-1"></div>
                            <div
                                class="border-base-300 rounded-sm border px-2 py-1 font-mono text-[0.625rem] whitespace-nowrap"
                            >
                                {{ item.updated_at | dateFrom }}
                            </div>
                            <button
                                class="border-base-300 bg-base-100 flex items-center rounded-full border"
                                (click)="$event.stopPropagation()"
                            >
                                <button
                                    icon
                                    matRipple
                                    (click)="saveMetadata(item)"
                                    [disabled]="!edited[item.name]"
                                    [matTooltip]="'COMMON.SAVE' | translate"
                                >
                                    <icon class="text-xl">save</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    (click)="editMetadataDetails(item)"
                                    [matTooltip]="
                                        'COMMON.METADATA_EDIT' | translate
                                    "
                                >
                                    <icon class="text-xl">edit</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    (click)="viewMetadataHistory(item)"
                                    [matTooltip]="
                                        'COMMON.METADATA_HISTORY' | translate
                                    "
                                >
                                    <icon class="text-xl">history</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="text-error"
                                    (click)="deleteMetadata(item.name)"
                                    [matTooltip]="
                                        'COMMON.METADATA_REMOVE' | translate
                                    "
                                >
                                    <icon class="text-xl">delete</icon>
                                </button>
                            </button>
                            <button icon matRipple>
                                <icon class="text-2xl">{{
                                    show_view() === item.name
                                        ? 'keyboard_arrow_down'
                                        : 'chevron_right'
                                }}</icon>
                            </button>
                        </button>
                        <div
                            body
                            class="expandable"
                            [class.expanded]="show_view() === item.name"
                        >
                            <div>
                                <div class="border-base-300 h-130 border-t p-1">
                                    @if (show_view() === item.name) {
                                        <settings-form-field
                                            formControlName="details"
                                            lang="json"
                                            [schema]="schema_map()[item.name]"
                                            [readonly]="false"
                                        ></settings-form-field>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="flex w-full flex-col items-center justify-center space-y-8 p-16 opacity-30"
            >
                <icon class="text-8xl">settings_alert</icon>
                <div>{{ 'COMMON.METADATA_EMPTY' | translate }}</div>
            </div>
        }
        <ng-template #load_state>
            <mat-spinner diameter="32" />
        </ng-template>
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      SettingsFieldComponent,
      MatTooltipModule,
      ReactiveFormsModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;77e2739fa1867a44e01a987495cc4bc852921c925043627500689e675cdb14b1;/home/runner/work/backoffice/backoffice/src/app/ui/metadata-display.component.ts */\n[block] {\n  transition: opacity 0.2s ease-in-out;\n}\n/*# sourceMappingURL=metadata-display.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDisplayComponent, { className: "MetadataDisplayComponent", filePath: "src/app/ui/metadata-display.component.ts", lineNumber: 201 });
})();

export {
  MetadataDisplayComponent
};
//# sourceMappingURL=chunk-5QYJ7EMZ.js.map
