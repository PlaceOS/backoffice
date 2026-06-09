import {
  UserPipe
} from "./chunk-IEBWVFDF.js";
import {
  SettingsFieldComponent
} from "./chunk-2M3RUIZF.js";
import {
  DiffViewerComponent
} from "./chunk-NNPMHBS2.js";
import {
  validateJSONString
} from "./chunk-NPNSF4MV.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-C7NP5PYP.js";
import {
  DateFromPipe
} from "./chunk-Q4KWDWQX.js";
import {
  addSignalChipItem,
  removeSignalChipItem
} from "./chunk-KJQGK2OM.js";
import {
  FormField,
  form,
  required,
  submit,
  validate
} from "./chunk-64N44YTD.js";
import {
  openConfirmModal
} from "./chunk-KFDTJANW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WRAPQBH6.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6FMO72CJ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatPrefix
} from "./chunk-IE6E7XHG.js";
import {
  VERSION,
  currentUser
} from "./chunk-N3B5BD3H.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KHVEC2ZJ.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-JJ5DNIGX.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import {
  TranslatePipe
} from "./chunk-JMC7E3RS.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import {
  COMMA,
  ENTER,
  MatRipple,
  SPACE
} from "./chunk-2UI5N333.js";
import {
  AsyncPipe,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  Hu,
  Input,
  Mu,
  Nu,
  Ou,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵarrowFunction,
  ɵɵattribute,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
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
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/overlays/metadata-details-modal.component.ts
var arrowFn0 = (ctx, view) => (error) => error.kind === "name";
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 11);
    \u0275\u0275text(11, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 9);
    \u0275\u0275element(13, "textarea", 12);
    \u0275\u0275controlCreate();
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
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(18);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r3.form.name().invalid() && ctx_r3.form.name().touched());
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r3.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.form.name().errors().find(\u0275\u0275arrowFunction(9, arrowFn0, ctx)) ? "Property name must be unique" : "Property name is required");
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r3.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.editors);
    \u0275\u0275advance(2);
    \u0275\u0275property("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r3.separators)("matChipInputAddOnBlur", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r3.form.schema);
    \u0275\u0275control();
  }
}
var MetadataDetailsModalComponent = class _MetadataDetailsModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  formModel = signal(
    {
      name: "",
      description: "",
      editors: [],
      schema: ""
    },
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    required(path.name);
    validate(path.name, ({ value }) => this._data.existing_names.includes(value()) ? { kind: "name", message: "Property name must be unique" } : void 0);
  });
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  addEditor = (e) => this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
    editors: addSignalChipItem(model.editors, e)
  }));
  removeEditor = (i) => this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
    editors: removeSignalChipItem(model.editors, i)
  }));
  get editors() {
    return this.formModel().editors;
  }
  ngOnInit() {
    this.formModel.set({
      name: this._data.value.name || "",
      description: this._data.value.description || "",
      editors: this._data.value.editors || [],
      schema: this._data.value.schema || ""
    });
  }
  async updateDetails() {
    await submit(this.form, async () => void 0);
    if (this.form().invalid())
      return;
    this._data.update(__spreadValues(__spreadValues({}, this._data.value), this.formModel()));
    this._data.change.set(Date.now());
    this._dialog_ref.close();
  }
  static \u0275fac = function MetadataDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataDetailsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataDetailsModalComponent, selectors: [["app-metadata-details-modal"]], decls: 10, vars: 2, consts: [["chipList", ""], [1, "border-base-100", "bg-base-200", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "flex", "w-lg", "flex-col", "p-4"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click", "disabled"], ["for", "property-name"], ["required", ""], ["appearance", "outline"], ["matInput", "", "placeholder", "Property Name", 3, "formField"], ["for", "description"], ["matInput", "", "placeholder", "Description", 3, "formField"], ["for", "system-email"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Image List"], ["placeholder", "Editors...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["for", "schema"], ["matInput", "", "placeholder", "Schema", 3, "formField"], [3, "removed"], [1, "max-w-md", "truncate"], ["matChipRemove", ""]], template: function MetadataDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
      \u0275\u0275text(2, "Update metadata details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 3)(4, "icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, MetadataDetailsModalComponent_Conditional_6_Template, 26, 10, "main", 4);
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
      \u0275\u0275property("disabled", ctx.form.name().invalid());
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    MatFormFieldModule,
    MatFormField,
    MatError,
    FormField,
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
            <main class="flex w-lg flex-col p-4">
                <label
                    for="property-name"
                    [class.error]="
                        form.name().invalid() && form.name().touched()
                    "
                    >Name<span required>*</span>:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        placeholder="Property Name"
                        [formField]="form.name"
                    />
                    <mat-error>{{
                        form.name().errors().find((error) => error.kind === 'name')
                            ? 'Property name must be unique'
                            : 'Property name is required'
                    }}</mat-error>
                </mat-form-field>
                <label for="description">Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        placeholder="Description"
                        [formField]="form.description"
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
                        placeholder="Schema"
                        [formField]="form.schema"
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
                [disabled]="form.name().invalid()"
                (click)="updateDetails()"
            >
                Apply Locally
            </button>
        </footer>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      FormField,
      MatChipsModule,
      MatInputModule,
      IconComponent,
      MatInputModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDetailsModalComponent, { className: "MetadataDetailsModalComponent", filePath: "src/app/overlays/metadata-details-modal.component.ts", lineNumber: 125 });
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
    const history = await Mu(this._data.id, {
      name: this._data.name,
      limit: 5e3
    });
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
      \u0275\u0275controlCreate();
      \u0275\u0275conditionalCreate(28, MetadataHistoryModalComponent_Conditional_28_Template, 2, 1, "mat-hint", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-form-field", 13)(30, "mat-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function MetadataHistoryModalComponent_Template_mat_select_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.second, $event) || (ctx.second = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(31, MetadataHistoryModalComponent_For_32_Template, 1, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
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
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.history);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.first ? 28 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.second);
      \u0275\u0275control();
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
    FormsModule,
    NgControlStatus,
    NgModel,
    IconComponent,
    TranslatePipe,
    DatePipe
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
                        />
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
      FormsModule,
      TranslatePipe,
      IconComponent,
      DatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataHistoryModalComponent, { className: "MetadataHistoryModalComponent", filePath: "src/app/overlays/metadata-history-modal.component.ts", lineNumber: 164 });
})();

// src/app/ui/metadata-display.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack02 = ($index, $item) => $item.name;
function MetadataDisplayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementEnd();
  }
}
function MetadataDisplayComponent_Conditional_9_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.descriptions()[item_r2.name], " ");
  }
}
function MetadataDisplayComponent_Conditional_9_For_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-form-field", 27);
    \u0275\u0275listener("ngModelChange", function MetadataDisplayComponent_Conditional_9_For_2_Conditional_35_Template_settings_form_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateMetadataField(item_r2.name, "details", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.form_map()[item_r2.name]?.details)("ngModelOptions", \u0275\u0275pureFunction0(4, _c0))("schema", ctx_r2.schema_map()[item_r2.name])("readonly", false);
    \u0275\u0275control();
  }
}
function MetadataDisplayComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_9_For_2_Template_button_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleView(item_r2));
    });
    \u0275\u0275elementStart(2, "div", 12)(3, "h3", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, MetadataDisplayComponent_Conditional_9_For_2_Conditional_5_Template, 2, 1, "p", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 15);
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275pipe(8, "user");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "dateFrom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_9_For_2_Template_button_click_12_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(13, "button", 18);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_9_For_2_Template_button_click_13_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveMetadata(item_r2));
    });
    \u0275\u0275elementStart(15, "icon", 19);
    \u0275\u0275text(16, "save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 20);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_9_For_2_Template_button_click_17_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editMetadataDetails(item_r2));
    });
    \u0275\u0275elementStart(19, "icon", 19);
    \u0275\u0275text(20, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_9_For_2_Template_button_click_21_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewMetadataHistory(item_r2));
    });
    \u0275\u0275elementStart(23, "icon", 19);
    \u0275\u0275text(24, "history");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 21);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function MetadataDisplayComponent_Conditional_9_For_2_Template_button_click_25_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteMetadata(item_r2.name));
    });
    \u0275\u0275elementStart(27, "icon", 19);
    \u0275\u0275text(28, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 22)(30, "icon", 23);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 24)(33, "div")(34, "div", 25);
    \u0275\u0275conditionalCreate(35, MetadataDisplayComponent_Conditional_9_For_2_Conditional_35_Template, 1, 5, "settings-form-field", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("shadow", ctx_r2.show_view() === item_r2.name)("opacity-30", item_r2.match === false);
    \u0275\u0275property("id", "md-block-" + item_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.names()[item_r2.name], " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.descriptions()[item_r2.name] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", (tmp_16_0 = \u0275\u0275pipeBind1(9, 20, \u0275\u0275pipeBind1(8, 18, item_r2.modified_by_id))) == null ? null : tmp_16_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, item_r2.updated_at), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.edited()[item_r2.name])("matTooltip", \u0275\u0275pipeBind1(14, 24, "COMMON.SAVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 26, "COMMON.METADATA_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(22, 28, "COMMON.METADATA_HISTORY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(26, 30, "COMMON.METADATA_REMOVE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.show_view() === item_r2.name ? "keyboard_arrow_down" : "chevron_right");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r2.show_view() === item_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.show_view() === item_r2.name ? 35 : -1);
  }
}
function MetadataDisplayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, MetadataDisplayComponent_Conditional_9_For_2_Template, 36, 32, "div", 9, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.metadata());
  }
}
function MetadataDisplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 28);
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
function replaceDescTag(inputString, newContent) {
  return inputString.replace(/^\[.*?\]/, `[${newContent}]`);
}
var MetadataDisplayComponent = class _MetadataDisplayComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  // private _schemas = inject(SchemaStateService);
  item = input(
    ...ngDevMode ? [void 0, { debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of metadata associated with the zone */
  metadata = signal(
    [],
    ...ngDevMode ? [{ debugName: "metadata" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Map of form field groups to metadata fields */
  form_map = signal(
    {},
    ...ngDevMode ? [{ debugName: "form_map" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Map of metadata fields to whether they have been edited */
  edited = signal(
    {},
    ...ngDevMode ? [{ debugName: "edited" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Map of metadata properties to whether they are saving */
  loading = signal(
    {},
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the metadata list is loading */
  loading_list = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Map of metadata schemas to the associated metadata */
  schema_map = signal(
    {},
    ...ngDevMode ? [{ debugName: "schema_map" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Metadata contents to view */
  show_view = signal(
    "",
    ...ngDevMode ? [{ debugName: "show_view" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Search text for filtering metadata */
  search_text = signal(
    "",
    ...ngDevMode ? [{ debugName: "search_text" }] : (
      /* istanbul ignore next */
      []
    )
  );
  change = signal(
    0,
    ...ngDevMode ? [{ debugName: "change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  names = computed(
    () => {
      this.change();
      const name_map = {};
      for (const key in this.form_map()) {
        name_map[key] = this.form_map()[key].name;
      }
      return name_map;
    },
    ...ngDevMode ? [{ debugName: "names" }] : (
      /* istanbul ignore next */
      []
    )
  );
  descriptions = computed(
    () => {
      this.change();
      const desc_map = {};
      for (const key in this.form_map()) {
        const desc = this.form_map()[key].description || "";
        desc_map[key] = desc;
      }
      return desc_map;
    },
    ...ngDevMode ? [{ debugName: "descriptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
    const form2 = this.form_map()[field.name];
    this._dialog.open(MetadataDetailsModalComponent, {
      maxWidth: "95vw",
      data: {
        value: form2,
        existing_names: this.metadata().filter((i) => i.name !== field.name).map((i) => i.name),
        change: this.change,
        update: (value) => this.updateMetadataDetails(field.name, value)
      }
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
    await Hu(this.item().id, { name: field }).catch((err) => {
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
        block.match = block.name.toLowerCase().includes(search) || `${this.form_map()[block.name].name}`.toLowerCase().includes(search);
      }
      return list;
    });
  }
  saveMetadata(field) {
    const form2 = this.form_map()[field.name];
    if (!form2.name || this.metadata().filter((i) => i.name !== field.name).some((item) => item.name === form2.name) || validateJSONString({ value: form2.details })) {
      return notifyError(`JSON for property "${form2.name}" is invalid`);
    }
    const value = form2;
    this.loading.update((m) => __spreadProps(__spreadValues({}, m), { [field.name]: true }));
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
    Nu(this.item().id, __spreadProps(__spreadValues({}, value), {
      description: new_desc,
      details: data
    })).then((item) => {
      this.loading.update((m) => __spreadProps(__spreadValues({}, m), { [field.name]: false }));
      const index = this.metadata().findIndex((i) => i.name === field.name);
      this.edited.update((m) => __spreadProps(__spreadValues({}, m), { [field.name]: false }));
      if (field.name !== value.name) {
        Hu(this.item().id, { name: field.name }).catch((err) => notifyError(`Error removing old "${field.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`));
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
    }).catch((err) => {
      this.loading.update((m) => __spreadProps(__spreadValues({}, m), { [field.name]: false }));
      notifyError(`Error saving "${value.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
  }
  generateForms() {
    this.form_map.set({});
    this.edited.set({});
    this.metadata().forEach((group) => {
      const details = typeof group.details === "string" ? JSON.parse(group.details) : group.details;
      this.form_map.update((m) => {
        m[group.name] = {
          name: group.name,
          description: group.description,
          editors: [...group.editors || []],
          details: JSON.stringify(details || {}, void 0, 4),
          schema: group.schema
        };
        return m;
      });
    });
  }
  updateMetadataField(block, field, value) {
    this.form_map.update((map) => __spreadProps(__spreadValues({}, map), {
      [block]: __spreadProps(__spreadValues({}, map[block]), {
        [field]: value
      })
    }));
    this.edited.update((m) => __spreadProps(__spreadValues({}, m), { [block]: true }));
    this.change.set(Date.now());
  }
  updateMetadataDetails(block, value) {
    this.form_map.update((map) => __spreadProps(__spreadValues({}, map), {
      [block]: value
    }));
    this.edited.update((m) => __spreadProps(__spreadValues({}, m), { [block]: true }));
    this.change.set(Date.now());
  }
  async loadMetadata() {
    this.loading_list.set(true);
    await Ou(this.item().id).then((map) => {
      this.metadata.set(Object.keys(map).map((key) => map[key]).sort((a, b) => a.name.localeCompare(b.name)).filter((m) => !!m));
      this.generateForms();
    }).catch((err) => notifyError(`Error loading metadata. Error: ${err.response || err.message || err}`)).finally(() => this.loading_list.set(false));
  }
  viewMetadataHistory(item) {
    const item_value = this.item();
    this._dialog.open(MetadataHistoryModalComponent, {
      data: {
        id: this.item().id,
        parent_name: item_value["display_name"] || item_value.name,
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataDisplayComponent, selectors: [["metadata-display"]], inputs: { item: [1, "item"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 11, vars: 5, consts: [[1, "flex", "items-center", "justify-between", "space-x-2"], ["btn", "", 3, "click"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search metadata blocks...", 3, "ngModelChange", "ngModel"], [1, "flex", "w-full", "items-center", "justify-center", "p-16"], [1, "mt-4", "space-y-2"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-8", "p-16", "opacity-30"], ["diameter", "32"], ["block", "", 1, "border-base-300", "rounded-sm", "border", 3, "id", "shadow", "opacity-30"], ["block", "", 1, "border-base-300", "rounded-sm", "border", 3, "id"], ["header", "", 1, "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "px-2", "py-1", 3, "click"], [1, "min-w-0", "px-2", "text-left"], [1, "truncate", "font-mono", "text-sm"], [1, "text-base-content/60", "truncate", "text-[0.625rem]"], [1, "flex-1"], ["matTooltipPosition", "left", 1, "border-base-300", "rounded-sm", "border", "px-2", "py-1", "font-mono", "text-[0.625rem]", "whitespace-nowrap", 3, "matTooltip"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "rounded-full", "border", 3, "click"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "text-xl"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], ["icon", "", "matRipple", ""], [1, "text-2xl"], ["body", "", 1, "expandable"], [1, "border-base-300", "h-130", "border-t", "p-1"], ["lang", "json", 3, "ngModel", "ngModelOptions", "schema", "readonly"], ["lang", "json", 3, "ngModelChange", "ngModel", "ngModelOptions", "schema", "readonly"], [1, "text-8xl"]], template: function MetadataDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function MetadataDisplayComponent_Template_button_click_1_listener() {
        return ctx.newMetadata();
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-form-field", 2)(5, "icon", 3);
      \u0275\u0275text(6, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function MetadataDisplayComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search_text, $event) || (ctx.search_text = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MetadataDisplayComponent_Template_input_ngModelChange_7_listener() {
        return ctx.filterMetadata();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, MetadataDisplayComponent_Conditional_8_Template, 2, 0, "div", 5)(9, MetadataDisplayComponent_Conditional_9_Template, 3, 0, "div", 6)(10, MetadataDisplayComponent_Conditional_10_Template, 6, 3, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.METADATA_NEW"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.search_text);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading_list() ? 8 : ctx.metadata()?.length > 0 ? 9 : 10);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    SettingsFieldComponent,
    MatTooltipModule,
    MatTooltip,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    TranslatePipe,
    DateFromPipe,
    UserPipe,
    AsyncPipe
  ], styles: ["\n[block][_ngcontent-%COMP%] {\n  transition: opacity 0.2s ease-in-out;\n}\n/*# sourceMappingURL=metadata-display.component.css.map */"] });
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
        @if (loading_list()) {
            <div class="flex w-full items-center justify-center p-16">
                <mat-spinner diameter="32" />
            </div>
        } @else if (metadata()?.length > 0) {
            <div class="mt-4 space-y-2">
                @for (item of metadata(); track item.name) {
                    <div
                        block
                        [id]="'md-block-' + item.name"
                        class="border-base-300 rounded-sm border"
                        [class.shadow]="show_view() === item.name"
                        [class.opacity-30]="item.match === false"
                    >
                        <button
                            header
                            class="bg-base-200 flex w-full items-center space-x-2 px-2 py-1"
                            (click)="toggleView(item)"
                        >
                            <div class="min-w-0 px-2 text-left">
                                <h3 class="truncate font-mono text-sm">
                                    {{ names()[item.name] }}
                                </h3>
                                @if (descriptions()[item.name]) {
                                    <p
                                        class="text-base-content/60 truncate text-[0.625rem]"
                                    >
                                        {{ descriptions()[item.name] }}
                                    </p>
                                }
                            </div>
                            <div class="flex-1"></div>
                            <div
                                class="border-base-300 rounded-sm border px-2 py-1 font-mono text-[0.625rem] whitespace-nowrap"
                                [matTooltip]="
                                    $safeNavigationMigration(
                                        (item.modified_by_id | user | async)
                                            ?.name
                                    )
                                "
                                matTooltipPosition="left"
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
                                    [disabled]="!edited()[item.name]"
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
                                            [ngModel]="
                                                form_map()[item.name]?.details
                                            "
                                            (ngModelChange)="
                                                updateMetadataField(
                                                    item.name,
                                                    'details',
                                                    $event
                                                )
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            lang="json"
                                            [schema]="schema_map()[item.name]"
                                            [readonly]="false"
                                        />
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
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      SettingsFieldComponent,
      MatTooltipModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      DateFromPipe,
      UserPipe,
      AsyncPipe
    ], styles: ["/* angular:styles/component:css;77e2739fa1867a44e01a987495cc4bc852921c925043627500689e675cdb14b1;/home/runner/work/backoffice/backoffice/src/app/ui/metadata-display.component.ts */\n[block] {\n  transition: opacity 0.2s ease-in-out;\n}\n/*# sourceMappingURL=metadata-display.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDisplayComponent, { className: "MetadataDisplayComponent", filePath: "src/app/ui/metadata-display.component.ts", lineNumber: 234 });
})();

export {
  MetadataDisplayComponent
};
//# sourceMappingURL=chunk-7PXPVIOV.js.map
