import {
  UserPipe
} from "./chunk-AGWUVGXX.js";
import {
  DateFromPipe
} from "./chunk-PWWITZ5J.js";
import "./chunk-S2SB26WJ.js";
import {
  SettingsFieldComponent
} from "./chunk-UN3MBNJH.js";
import {
  DiffViewerComponent
} from "./chunk-23YE6D5R.js";
import "./chunk-EOOX537V.js";
import {
  ActiveItemService
} from "./chunk-YMSUF7BT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-TPDHL3PI.js";
import {
  ChipListComponent
} from "./chunk-REL7BG6R.js";
import "./chunk-7UHZOKRJ.js";
import {
  validateJSONString
} from "./chunk-WKU6NAJG.js";
import "./chunk-AEEAYNFO.js";
import {
  openConfirmModal
} from "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import {
  SpinnerComponent
} from "./chunk-WWSSYZEA.js";
import {
  describeError,
  readError
} from "./chunk-T3O7QHHC.js";
import "./chunk-2LLCGR7C.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-2DKDRFBI.js";
import "./chunk-LJNKRCR4.js";
import {
  currentUser
} from "./chunk-4VR6R4OK.js";
import {
  VERSION
} from "./chunk-CKZDCKLD.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
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
  FormField,
  form,
  required,
  submit,
  validate
} from "./chunk-SSVO7UC4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5APMNGCP.js";
import {
  DialogTitleDirective
} from "./chunk-QSK7KYKQ.js";
import {
  DialogCloseDirective
} from "./chunk-SQMBYJ2Q.js";
import {
  DIALOG_DATA,
  Dialog,
  DialogRef
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import "./chunk-JJ65W2TY.js";
import {
  cc,
  hc,
  pc,
  uc
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import {
  AsyncPipe,
  DatePipe
} from "./chunk-BRT76G6A.js";
import {
  Component,
  Input,
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
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/overlays/metadata-details-modal.component.ts
var _c0 = () => ["Enter", ",", " "];
var arrowFn0 = (ctx, view) => (error) => error.kind === "name";
function MetadataDetailsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "label", 6);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 8);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 10);
    \u0275\u0275text(11, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-form-field")(13, "textarea", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 12);
    \u0275\u0275text(15, "Editors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-form-field", 13)(17, "app-chip-list", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label", 15);
    \u0275\u0275text(19, "Schema:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "app-form-field")(21, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.form.name().errors().find(\u0275\u0275arrowFunction(8, arrowFn0, ctx)) ? "Property name must be unique" : "Property name is required", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("separators", \u0275\u0275pureFunction0(9, _c0))("formField", ctx_r0.form.editors);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form.schema);
    \u0275\u0275control();
  }
}
var MetadataDetailsModalComponent = class _MetadataDetailsModalComponent {
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
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
    this._dialog_ref.close();
  }
  static \u0275fac = function MetadataDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataDetailsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataDetailsModalComponent, selectors: [["app-metadata-details-modal"]], decls: 11, vars: 5, consts: [[1, "border-base-100", "bg-base-200", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border", "px-4", "py-2"], ["appDialogTitle", "", 1, "text-xl", "font-medium"], ["btn", "", "icon", "", "appDialogClose", ""], [1, "flex", "w-lg", "flex-col", "p-4"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "items-center", "justify-end", "space-x-2", "rounded-sm", "p-2"], ["btn", "", "ripple", "", 1, "w-40", 3, "click", "disabled"], ["for", "property-name"], ["required", ""], ["id", "property-name", "placeholder", "Property Name", 3, "formField"], ["error", ""], ["for", "description"], ["id", "description", "placeholder", "Description", 3, "formField"], ["for", "editors"], [1, "w-full"], ["inputId", "editors", "aria-label", "Editors", "placeholder", "Editors...", 3, "separators", "formField"], ["for", "schema"], ["id", "schema", "placeholder", "Schema", 3, "formField"]], template: function MetadataDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2, " Update metadata details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementStart(5, "icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(7, MetadataDetailsModalComponent_Conditional_7_Template, 22, 10, "main", 3);
      \u0275\u0275elementStart(8, "footer", 4)(9, "button", 5);
      \u0275\u0275listener("click", function MetadataDetailsModalComponent_Template_button_click_9_listener() {
        return ctx.updateDetails();
      });
      \u0275\u0275text(10, " Apply Locally ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 3, "COMMON.CLOSE"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.form ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.name().invalid());
    }
  }, dependencies: [
    DialogCloseDirective,
    FormFieldComponent,
    DialogTitleDirective,
    FormField,
    ChipListComponent,
    IconComponent,
    FormsModule,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetadataDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "app-metadata-details-modal", template: `
        <header
            class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border px-4 py-2"
        >
            <h2 appDialogTitle class="text-xl font-medium">
                Update metadata details
            </h2>
            <button
                btn
                icon
                appDialogClose
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
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
                <app-form-field>
                    <input
                        id="property-name"
                        placeholder="Property Name"
                        [formField]="form.name"
                    />
                    <div error>
                        {{
                        form.name().errors().find((error) => error.kind === 'name')
                            ? 'Property name must be unique'
                            : 'Property name is required'
                        }}
                    </div>
                </app-form-field>
                <label for="description">Description:</label>
                <app-form-field>
                    <textarea
                        id="description"
                        placeholder="Description"
                        [formField]="form.description"
                    ></textarea>
                </app-form-field>
                <label for="editors">Editors:</label>
                <app-form-field class="w-full">
                    <app-chip-list
                        inputId="editors"
                        aria-label="Editors"
                        placeholder="Editors..."
                        [separators]="['Enter', ',', ' ']"
                        [formField]="form.editors"
                    />
                </app-form-field>
                <label for="schema">Schema:</label>
                <app-form-field>
                    <input
                        id="schema"
                        placeholder="Schema"
                        [formField]="form.schema"
                    />
                </app-form-field>
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex items-center justify-end space-x-2 rounded-sm p-2"
        >
            <button
                btn
                ripple
                class="w-40"
                [disabled]="form.name().invalid()"
                (click)="updateDetails()"
            >
                Apply Locally
            </button>
        </footer>
    `, imports: [
      DialogCloseDirective,
      FormFieldComponent,
      DialogTitleDirective,
      TranslatePipe,
      FormField,
      ChipListComponent,
      IconComponent,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDetailsModalComponent, { className: "MetadataDetailsModalComponent", filePath: "src/app/overlays/metadata-details-modal.component.ts", lineNumber: 121 });
})();

// src/app/overlays/metadata-history-modal.component.ts
function MetadataHistoryModalComponent_Conditional_17_Template(rf, ctx) {
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
function MetadataHistoryModalComponent_For_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 4, item_r2.updated_at, "mediumDate"), ", ", \u0275\u0275pipeBind2(4, 7, item_r2.updated_at, "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.description, " ");
  }
}
function MetadataHistoryModalComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataHistoryModalComponent_For_28_Conditional_0_Template, 7, 10, "app-option", 20);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_47_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.first_open() || \u0275$index_47_r3 < ctx_r0.CLOSED_OPTIONS || item_r2 === ctx_r0.first ? 0 : -1);
  }
}
function MetadataHistoryModalComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.first.description, " ");
  }
}
function MetadataHistoryModalComponent_For_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 4, item_r4.updated_at, "mediumDate"), ", ", \u0275\u0275pipeBind2(4, 7, item_r4.updated_at, "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r4.description, " ");
  }
}
function MetadataHistoryModalComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MetadataHistoryModalComponent_For_33_Conditional_0_Template, 7, 10, "app-option", 20);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_67_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(item_r4 !== ctx_r0.first && (ctx_r0.second_open() || \u0275$index_67_r5 < ctx_r0.CLOSED_OPTIONS || item_r4 === ctx_r0.second()) ? 0 : -1);
  }
}
function MetadataHistoryModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.second()?.description, " ");
  }
}
function MetadataHistoryModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "diff-viewer", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("modified", ctx_r0.second_details() || "")("original", ctx_r0.first_details() || "");
  }
}
function MetadataHistoryModalComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Select 2 versions of the metadata to get started ");
    \u0275\u0275elementEnd();
  }
}
var MetadataHistoryModalComponent = class _MetadataHistoryModalComponent {
  _data = inject(DIALOG_DATA);
  id = this._data.id;
  parent_name = this._data.parent_name;
  name = this._data.name;
  history = signal(
    [],
    ...ngDevMode ? [{ debugName: "history" }] : (
      /* istanbul ignore next */
      []
    )
  );
  first = null;
  second = signal(
    null,
    ...ngDevMode ? [{ debugName: "second" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // The history can hold thousands of versions. A closed select renders
  // only a few options and the selected one; a select does not open
  // without options.
  CLOSED_OPTIONS = 20;
  first_open = signal(
    false,
    ...ngDevMode ? [{ debugName: "first_open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  second_open = signal(
    false,
    ...ngDevMode ? [{ debugName: "second_open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  first_details = signal(
    "",
    ...ngDevMode ? [{ debugName: "first_details" }] : (
      /* istanbul ignore next */
      []
    )
  );
  second_details = signal(
    "",
    ...ngDevMode ? [{ debugName: "second_details" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    const history = await cc(this._data.id, {
      name: this._data.name,
      limit: 5e3
    }).catch((err) => {
      notifyError(`Failed to load metadata history. Error: ${describeError(err)}`);
      return [];
    });
    this.history.set(history);
  }
  select(idx, item) {
    if (idx === 0) {
      this.first_details.set(JSON.stringify(item.details, void 0, 4));
      if (this.first === this.second()) {
        this.second.set(null);
        this.second_details.set("");
      }
    } else {
      this.second_details.set(JSON.stringify(item.details, void 0, 4));
    }
  }
  static \u0275fac = function MetadataHistoryModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MetadataHistoryModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataHistoryModalComponent, selectors: [["metadata-history-modal"]], decls: 38, vars: 21, consts: [[1, "bg-base-100", "flex", "h-screen", "w-screen", "flex-col", "overflow-hidden"], [1, "bg-base-200", "m-4", "flex", "items-center", "justify-between", "rounded-sm", "px-4", "py-2"], ["appDialogTitle", "", 1, "text-xl", "font-medium"], ["icon", "", "ripple", "", "appDialogClose", ""], [1, "flex", "flex-1", "flex-col", "pb-4"], [1, "mb-2", "flex", "items-center", "space-x-2", "px-4"], [1, "border-base-300", "relative", "h-14", "min-w-48", "rounded-sm", "border", "px-4", "py-2"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "truncate"], [1, "text-xs", "opacity-30"], [1, "border-base-300", "relative", "flex", "h-14", "min-w-48", "items-center", "rounded-sm", "border", "px-4", "py-2"], [1, "truncate", "font-mono", "text-lg"], [1, "mb-2", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "w-[20rem]"], ["placeholder", "Select metadata version", 3, "ngModelChange", "selectionChange", "openedChange", "ngModel"], ["hint", "", 1, "truncate"], ["placeholder", "Compare with", 3, "ngModelChange", "selectionChange", "openedChange", "ngModel"], [1, "relative", "w-full", "flex-1", "px-4"], [3, "modified", "original"], [1, "bg-base-200", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-lg", "opacity-40"], [1, "leading-tight", 3, "value"], [1, ""], [1, "truncate", "text-xs", "opacity-30"]], template: function MetadataHistoryModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "icon");
      \u0275\u0275text(8, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "main", 4)(10, "div", 5)(11, "div", 6)(12, "div", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, MetadataHistoryModalComponent_Conditional_17_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 7);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 12)(25, "app-form-field", 13)(26, "app-select", 14);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function MetadataHistoryModalComponent_Template_app_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.first, $event) || (ctx.first = $event);
        return $event;
      });
      \u0275\u0275listener("selectionChange", function MetadataHistoryModalComponent_Template_app_select_selectionChange_26_listener($event) {
        return ctx.select(0, $event.value);
      })("openedChange", function MetadataHistoryModalComponent_Template_app_select_openedChange_26_listener($event) {
        return ctx.first_open.set($event);
      });
      \u0275\u0275repeaterCreate(27, MetadataHistoryModalComponent_For_28_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(29, MetadataHistoryModalComponent_Conditional_29_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "app-form-field", 13)(31, "app-select", 16);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function MetadataHistoryModalComponent_Template_app_select_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.second, $event) || (ctx.second = $event);
        return $event;
      });
      \u0275\u0275listener("selectionChange", function MetadataHistoryModalComponent_Template_app_select_selectionChange_31_listener($event) {
        return ctx.select(1, $event.value);
      })("openedChange", function MetadataHistoryModalComponent_Template_app_select_openedChange_31_listener($event) {
        return ctx.second_open.set($event);
      });
      \u0275\u0275repeaterCreate(32, MetadataHistoryModalComponent_For_33_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, MetadataHistoryModalComponent_Conditional_34_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 17);
      \u0275\u0275conditionalCreate(36, MetadataHistoryModalComponent_Conditional_36_Template, 1, 2, "diff-viewer", 18);
      \u0275\u0275conditionalCreate(37, MetadataHistoryModalComponent_Conditional_37_Template, 2, 0, "div", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 13, "COMMON.METADATA_HISTORY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 15, "COMMON.CLOSE"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "COMMON.METADATA_OWNER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.parent_name || ctx.id, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.parent_name ? 17 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, "COMMON.METADATA_KEY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.name, " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.first);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.history());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.first ? 29 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.second);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.history());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.second() ? 34 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.first_details() || ctx.second_details() ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!(ctx.first_details() && ctx.second_details()) ? 37 : -1);
    }
  }, dependencies: [
    DialogCloseDirective,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    DialogTitleDirective,
    DiffViewerComponent,
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
                <h3 appDialogTitle class="text-xl font-medium">
                    {{ 'COMMON.METADATA_HISTORY' | translate }}
                </h3>
                <button
                    icon
                    ripple
                    appDialogClose
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
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
                    <app-form-field class="w-[20rem]">
                        <app-select
                            [(ngModel)]="first"
                            (selectionChange)="select(0, $event.value)"
                            (openedChange)="first_open.set($event)"
                            placeholder="Select metadata version"
                        >
                            @for (
                                item of history();
                                track item;
                                let i = $index
                            ) {
                                @if (
                                    first_open() ||
                                    i < CLOSED_OPTIONS ||
                                    item === first
                                ) {
                                    <app-option
                                        [value]="item"
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
                                    </app-option>
                                }
                            }
                        </app-select>
                        @if (first) {
                            <div hint class="truncate">
                                {{ first.description }}
                            </div>
                        }
                    </app-form-field>
                    <app-form-field class="w-[20rem]">
                        <app-select
                            [(ngModel)]="second"
                            (selectionChange)="select(1, $event.value)"
                            (openedChange)="second_open.set($event)"
                            placeholder="Compare with"
                        >
                            @for (
                                item of history();
                                track item;
                                let i = $index
                            ) {
                                @if (
                                    item !== first &&
                                    (second_open() ||
                                        i < CLOSED_OPTIONS ||
                                        item === second())
                                ) {
                                    <app-option
                                        [value]="item"
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
                                    </app-option>
                                }
                            }
                        </app-select>
                        @if (second()) {
                            <div hint class="truncate">
                                {{ second()?.description }}
                            </div>
                        }
                    </app-form-field>
                </div>
                <div class="relative w-full flex-1 px-4">
                    @if (first_details() || second_details()) {
                        <diff-viewer
                            [modified]="second_details() || ''"
                            [original]="first_details() || ''"
                        />
                    }
                    @if (!(first_details() && second_details())) {
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
      DialogCloseDirective,
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      DialogTitleDirective,
      DiffViewerComponent,
      FormsModule,
      TranslatePipe,
      IconComponent,
      DatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataHistoryModalComponent, { className: "MetadataHistoryModalComponent", filePath: "src/app/overlays/metadata-history-modal.component.ts", lineNumber: 206 });
})();

// src/app/ui/metadata-display.component.ts
var _c02 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.name;
function MetadataDisplayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-spinner", 8);
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
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function MetadataDisplayComponent_Conditional_9_For_2_Conditional_35_Template_settings_form_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateMetadataField(item_r2.name, "details", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.form_map()[item_r2.name]?.details)("ngModelOptions", \u0275\u0275pureFunction0(3, _c02))("readonly", false);
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
    \u0275\u0275conditionalCreate(35, MetadataDisplayComponent_Conditional_9_For_2_Conditional_35_Template, 1, 4, "settings-form-field", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("shadow", ctx_r2.show_view() === item_r2.name)("opacity-30", item_r2.match === false);
    \u0275\u0275property("id", "md-block-" + item_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.names()[item_r2.name], " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.descriptions()[item_r2.name] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(9, 20, \u0275\u0275pipeBind1(8, 18, item_r2.modified_by_id))?.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, item_r2.updated_at), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.edited()[item_r2.name] || ctx_r2.loading()[item_r2.name])("appTooltip", \u0275\u0275pipeBind1(14, 24, "COMMON.SAVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(18, 26, "COMMON.METADATA_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(22, 28, "COMMON.METADATA_HISTORY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(26, 30, "COMMON.METADATA_REMOVE"));
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
    \u0275\u0275repeaterCreate(1, MetadataDisplayComponent_Conditional_9_For_2_Template, 36, 32, "div", 9, _forTrack0);
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
  _dialog = inject(Dialog);
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
                <p>Are you sure you want delete the metadata property "${escapeHtml(field)}"?</p>
            `,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    const is_new = !!this.metadata().find((prop) => prop?.name === field)?.new;
    try {
      if (!is_new)
        await pc(this.item().id, { name: field });
    } catch (err) {
      return notifyError(`Error removing old "${field}" metadata. Error: ${await readError(err)}`);
    } finally {
      result.close();
    }
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
    hc(this.item().id, __spreadProps(__spreadValues({}, value), {
      description: new_desc,
      details: data
    })).then((item) => {
      this.loading.update((m) => __spreadProps(__spreadValues({}, m), { [field.name]: false }));
      const index = this.metadata().findIndex((i) => i.name === field.name);
      this.edited.update((m) => __spreadProps(__spreadValues({}, m), { [field.name]: false }));
      if (field.name !== value.name) {
        pc(this.item().id, { name: field.name }).catch((err) => notifyError(`Error removing old "${field.name}" metadata. Error: ${describeError(err)}`));
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
      notifyError(`Error saving "${value.name}" metadata. Error: ${describeError(err)}`);
    });
  }
  /** Build a form for each block. Unsaved edits are kept unless `reset` is set */
  generateForms(reset = false) {
    const forms = this.form_map();
    const edited = reset ? {} : this.edited();
    this.form_map.set({});
    this.edited.set({});
    this.metadata().forEach((group) => {
      if (edited[group.name] && forms[group.name]) {
        this.form_map.update((m) => {
          m[group.name] = forms[group.name];
          return m;
        });
        this.edited.update((m) => __spreadProps(__spreadValues({}, m), { [group.name]: true }));
        return;
      }
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
    await uc(this.item().id).then((map) => {
      this.metadata.set(Object.keys(map).map((key) => map[key]).sort((a, b) => a.name.localeCompare(b.name)).filter((m) => !!m));
      this.generateForms(true);
    }).catch((err) => notifyError(`Error loading metadata. Error: ${describeError(err)}`)).finally(() => this.loading_list.set(false));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetadataDisplayComponent, selectors: [["metadata-display"]], inputs: { item: [1, "item"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 11, vars: 5, consts: [[1, "flex", "items-center", "justify-between", "space-x-2"], ["btn", "", 3, "click"], [1, "no-subscript"], ["prefix", "", 1, "relative", "-left-1", "text-2xl"], ["placeholder", "Search metadata blocks...", 3, "ngModelChange", "ngModel"], [1, "flex", "w-full", "items-center", "justify-center", "p-16"], [1, "mt-4", "space-y-2"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-8", "p-16", "opacity-30"], ["diameter", "32"], ["block", "", 1, "border-base-300", "rounded-sm", "border", 3, "id", "shadow", "opacity-30"], ["block", "", 1, "border-base-300", "rounded-sm", "border", 3, "id"], ["header", "", 1, "bg-base-200", "flex", "w-full", "items-center", "space-x-2", "px-2", "py-1", 3, "click"], [1, "min-w-0", "px-2", "text-left"], [1, "truncate", "font-mono", "text-sm"], [1, "text-base-content/60", "truncate", "text-[0.625rem]"], [1, "flex-1"], ["appTooltipPosition", "left", 1, "border-base-300", "rounded-sm", "border", "px-2", "py-1", "font-mono", "text-[0.625rem]", "whitespace-nowrap", 3, "appTooltip"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "rounded-full", "border", 3, "click"], ["icon", "", "ripple", "", 3, "click", "disabled", "appTooltip"], [1, "text-xl"], ["icon", "", "ripple", "", 3, "click", "appTooltip"], ["icon", "", "ripple", "", 1, "text-error", 3, "click", "appTooltip"], ["icon", "", "ripple", ""], [1, "text-2xl"], ["body", "", 1, "expandable"], [1, "border-base-300", "h-130", "border-t", "p-1"], ["lang", "json", 3, "ngModel", "ngModelOptions", "readonly"], ["lang", "json", 3, "ngModelChange", "ngModel", "ngModelOptions", "readonly"], [1, "text-8xl"]], template: function MetadataDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function MetadataDisplayComponent_Template_button_click_1_listener() {
        return ctx.newMetadata();
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "app-form-field", 2)(5, "icon", 3);
      \u0275\u0275text(6, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function MetadataDisplayComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search_text, $event) || (ctx.search_text = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function MetadataDisplayComponent_Template_input_ngModelChange_7_listener() {
        return ctx.filterMetadata();
      });
      \u0275\u0275elementEnd()()();
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
    SpinnerComponent,
    TooltipDirective,
    FormFieldComponent,
    IconComponent,
    SettingsFieldComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
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
            <app-form-field class="no-subscript">
                <icon prefix class="relative -left-1 text-2xl">search</icon>
                <input
                    [(ngModel)]="search_text"
                    (ngModelChange)="filterMetadata()"
                    placeholder="Search metadata blocks..."
                />
            </app-form-field>
        </div>
        @if (loading_list()) {
            <div class="flex w-full items-center justify-center p-16">
                <app-spinner diameter="32" />
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
                                [appTooltip]="
                                    (item.modified_by_id | user | async)?.name
                                "
                                appTooltipPosition="left"
                            >
                                {{ item.updated_at | dateFrom }}
                            </div>
                            <button
                                class="border-base-300 bg-base-100 flex items-center rounded-full border"
                                (click)="$event.stopPropagation()"
                            >
                                <button
                                    icon
                                    ripple
                                    (click)="saveMetadata(item)"
                                    [disabled]="
                                        !edited()[item.name] ||
                                        loading()[item.name]
                                    "
                                    [appTooltip]="'COMMON.SAVE' | translate"
                                >
                                    <icon class="text-xl">save</icon>
                                </button>
                                <button
                                    icon
                                    ripple
                                    (click)="editMetadataDetails(item)"
                                    [appTooltip]="
                                        'COMMON.METADATA_EDIT' | translate
                                    "
                                >
                                    <icon class="text-xl">edit</icon>
                                </button>
                                <button
                                    icon
                                    ripple
                                    (click)="viewMetadataHistory(item)"
                                    [appTooltip]="
                                        'COMMON.METADATA_HISTORY' | translate
                                    "
                                >
                                    <icon class="text-xl">history</icon>
                                </button>
                                <button
                                    icon
                                    ripple
                                    class="text-error"
                                    (click)="deleteMetadata(item.name)"
                                    [appTooltip]="
                                        'COMMON.METADATA_REMOVE' | translate
                                    "
                                >
                                    <icon class="text-xl">delete</icon>
                                </button>
                            </button>
                            <button icon ripple>
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
      SpinnerComponent,
      TooltipDirective,
      FormFieldComponent,
      TranslatePipe,
      IconComponent,
      SettingsFieldComponent,
      FormsModule,
      DateFromPipe,
      UserPipe,
      AsyncPipe
    ], styles: ["/* angular:styles/component:css;9cc12b402d91a4a4;/home/runner/work/backoffice/backoffice/src/app/ui/metadata-display.component.ts */\n[block] {\n  transition: opacity 0.2s ease-in-out;\n}\n/*# sourceMappingURL=metadata-display.component.css.map */\n"] }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetadataDisplayComponent, { className: "MetadataDisplayComponent", filePath: "src/app/ui/metadata-display.component.ts", lineNumber: 234 });
})();

// src/app/ui/item-metadata.component.ts
function ItemMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var ItemMetadataComponent = class _ItemMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function ItemMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemMetadataComponent, selectors: [["item-metadata"]], decls: 2, vars: 1, consts: [[1, "h-full", "w-full", "p-4"], [3, "item"]], template: function ItemMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ItemMetadataComponent_Conditional_1_Template, 1, 1, "metadata-display", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item ? 1 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemMetadataComponent, [{
    type: Component,
    args: [{
      selector: "item-metadata",
      template: `
        <div class="h-full w-full p-4">
            @if (item) {
                <metadata-display [item]="item" />
            }
        </div>
    `,
      imports: [MetadataDisplayComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemMetadataComponent, { className: "ItemMetadataComponent", filePath: "src/app/ui/item-metadata.component.ts", lineNumber: 18 });
})();
export {
  ItemMetadataComponent
};
//# debugId=d832190f-b0e8-53bc-99cd-e57cdac60104
//# sourceMappingURL=chunk-OQPX55VO.js.map
