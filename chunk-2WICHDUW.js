import {
  ItemCreateUpdateModalComponent
} from "./chunk-4IO555BY.js";
import {
  HotkeysService
} from "./chunk-3RDWH2PM.js";
import {
  CONFIRM_METADATA,
  ConfirmModalComponent
} from "./chunk-4NHDVFTQ.js";
import {
  SimpleTableComponent
} from "./chunk-DIJLNDSF.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AYXNAT23.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-MQK2WLOX.js";
import {
  NavigationEnd,
  Router
} from "./chunk-6S56CTCM.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-DEYB5LIM.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-AEQCFEN3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-F2SIRQ7I.js";
import {
  BackofficeUsersService
} from "./chunk-ZRHKKOSQ.js";
import {
  SettingsService
} from "./chunk-PI6UUMLE.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-MNFEZLRO.js";
import {
  AsyncHandler
} from "./chunk-3LEBC5GS.js";
import {
  IconComponent
} from "./chunk-WIN2774F.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-PJJZ73WC.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ETSQXNA5.js";
import {
  MatRipple
} from "./chunk-KZU5VDTQ.js";
import {
  Component,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  Input,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  Output,
  RequiredValidator,
  ViewChild,
  csvToJson,
  downloadFile,
  inject,
  input,
  jsonToCsv,
  log,
  model,
  output,
  setClassMetadata,
  unique,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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
} from "./chunk-TUZQ7R7Y.js";
import {
  $a,
  Aa,
  Ac,
  Ba,
  BehaviorSubject,
  Br,
  Cu,
  Du,
  Ea,
  Ec,
  Ee,
  Eu,
  Ha,
  Hr,
  Ic,
  Iu,
  La,
  Lr,
  Mn,
  Mt,
  Mu,
  Oa,
  Oc,
  Ou,
  Pa,
  Pu,
  Ru,
  Sa,
  Ta,
  Tu,
  Uu,
  Vc,
  Wa,
  Zc,
  Zs,
  ac,
  ao,
  cc,
  distinctUntilChanged,
  ea,
  filter,
  hc,
  io,
  ja,
  ka,
  lastValueFrom,
  lc,
  map,
  me,
  na,
  of,
  qa,
  ra,
  ta,
  uc,
  wc,
  xa
} from "./chunk-74QWELJT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/overlays/bulk-item-modal/csv-upload.component.ts
function CsvUploadComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("dragenter", function CsvUploadComponent_Conditional_0_Template_button_dragenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragging = true);
    })("dragleave", function CsvUploadComponent_Conditional_0_Template_button_dragleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragging = false);
    })("dragend", function CsvUploadComponent_Conditional_0_Template_button_dragend_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragging = false);
    });
    \u0275\u0275elementStart(1, "icon", 4);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 6);
    \u0275\u0275listener("change", function CsvUploadComponent_Conditional_0_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover", ctx_r1.dragging);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "COMMON.BULK_DROP_MSG"));
  }
}
function CsvUploadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.BULK_DROP_LOADING"), " ");
  }
}
function CsvUploadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 8);
    \u0275\u0275listener("click", function CsvUploadComponent_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplateCSV());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.BULK_DOWNLOAD"), " ");
  }
}
var CsvUploadComponent = class _CsvUploadComponent {
  /** Data for the template CSV */
  template = input([], ...ngDevMode ? [{ debugName: "template" }] : []);
  /** Emitter for changes to the data displayed */
  list = output();
  /** Whether user has dragged item */
  dragging;
  /** Whether CSV data is being processed */
  loading;
  loadCSVData(event) {
    this.loading = true;
    if (event.target) {
      const element = event.target;
      const file = element.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.addEventListener("load", (evt) => {
          this.processCSVData(evt.target.result, file.name.endsWith(".csv") ? "," : "	");
          element.value = "";
        });
        reader.addEventListener("error", (_) => {
          this.loading = false;
          notifyError("Error reading file.");
        });
      }
    }
  }
  downloadTemplateCSV() {
    const ignore_keys = ["module_list", "settings", "_type", "version"];
    const csv_data = jsonToCsv(this.template(), Object.keys(this.template()[0]).filter((key) => ignore_keys.indexOf(key) < 0), "	");
    downloadFile("bulk-upload.tsv", csv_data);
  }
  processCSVData(data, seperator = "	") {
    try {
      const list = csvToJson(data, seperator) || [];
      this.loading = false;
      this.list.emit(list);
    } catch (e) {
      console.error(e);
    }
  }
  static \u0275fac = function CsvUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CsvUploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CsvUploadComponent, selectors: [["bulk-item-csv-upload"]], inputs: { template: [1, "template"] }, outputs: { list: "list" }, decls: 3, vars: 2, consts: [["matRipple", "", 1, "border-base-300", "hover:bg-base-200", "relative", "mx-4", "flex", "h-96", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "border-4", "border-dashed", 3, "hover"], [1, "flex", "h-96", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "p-4"], ["matRipple", "", 1, "border-base-300", "hover:bg-base-200", "relative", "mx-4", "flex", "h-96", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "border-4", "border-dashed", 3, "dragenter", "dragleave", "dragend"], [1, "text-6xl"], [1, "text"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function CsvUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CsvUploadComponent_Conditional_0_Template, 7, 5, "button", 0)(1, CsvUploadComponent_Conditional_1_Template, 5, 3, "div", 1);
      \u0275\u0275conditionalCreate(2, CsvUploadComponent_Conditional_2_Template, 4, 3, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading ? 0 : 1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.template() ? 2 : -1);
    }
  }, dependencies: [
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsvUploadComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-csv-upload", template: `
        @if (!loading) {
            <button
                matRipple
                class="border-base-300 hover:bg-base-200 relative mx-4 flex h-96 w-[24rem] flex-col items-center justify-center space-y-4 rounded-xl border-4 border-dashed"
                [class.hover]="dragging"
                (dragenter)="dragging = true"
                (dragleave)="dragging = false"
                (dragend)="dragging = false"
            >
                <icon class="text-6xl">cloud_upload</icon>
                <div class="text">{{ 'COMMON.BULK_DROP_MSG' | translate }}</div>
                <input
                    class="absolute inset-0 opacity-0"
                    type="file"
                    (change)="loadCSVData($event)"
                />
            </button>
        } @else {
            <div
                class="flex h-96 w-[24rem] flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="text">
                    {{ 'COMMON.BULK_DROP_LOADING' | translate }}
                </div>
            </div>
        }
        @if (template()) {
            <div class="p-4">
                <button
                    btn
                    matRipple
                    class="w-full"
                    (click)="downloadTemplateCSV()"
                >
                    {{ 'COMMON.BULK_DOWNLOAD' | translate }}
                </button>
            </div>
        }
    `, imports: [
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent
    ] }]
  }], null, { template: [{ type: Input, args: [{ isSignal: true, alias: "template", required: false }] }], list: [{ type: Output, args: ["list"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CsvUploadComponent, { className: "CsvUploadComponent", filePath: "src/app/overlays/bulk-item-modal/csv-upload.component.ts", lineNumber: 62 });
})();

// src/app/overlays/bulk-item-modal/list.component.ts
var _c0 = ["input"];
function ListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ListComponent_ng_template_9_Template_input_ngModelChange_0_listener($event) {
      const ctx_r2 = \u0275\u0275restoreView(_r2);
      const row_r4 = ctx_r2.row;
      const id_r5 = ctx_r2.key;
      \u0275\u0275twoWayBindingSet(row_r4[id_r5], $event) || (row_r4[id_r5] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const name_r6 = ctx.name;
    const id_r5 = ctx.key;
    \u0275\u0275property("placeholder", name_r6);
    \u0275\u0275twoWayProperty("ngModel", row_r4[id_r5]);
  }
}
var ListComponent = class _ListComponent {
  /** List of bulk items to add */
  list = model([], ...ngDevMode ? [{ debugName: "list" }] : []);
  /** List of fields available for building new item */
  fields = input([], ...ngDevMode ? [{ debugName: "fields" }] : []);
  /** Emitter user want to return to next step in flow */
  next = output();
  /** Emitter user want to return to previous step in flow */
  previous = output();
  /** List of column ids to show on table */
  columns = [];
  _input_tmpl = viewChild("input", ...ngDevMode ? [{ debugName: "_input_tmpl" }] : []);
  ngOnChanges(changes) {
    const fields = this.fields();
    if (changes.fields && fields) {
      this.columns = fields.map((i) => ({
        key: i.id,
        name: i.name.toUpperCase(),
        content: this._input_tmpl(),
        sortable: true
      }));
    }
  }
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["bulk-item-list"]], viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input_tmpl, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { list: [1, "list"], fields: [1, "fields"] }, outputs: { list: "listChange", next: "next", previous: "previous" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 10, consts: [["input", ""], [1, "flex", "max-h-[65vh]", "max-w-[80vw]", "flex-wrap", "overflow-auto", "px-4", "text-sm"], [3, "data", "columns"], [1, "flex", "items-center", "justify-end", "space-x-4", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"], [1, "p-4", 3, "ngModelChange", "placeholder", "ngModel"]], template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "simple-table", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function ListComponent_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.previous.emit());
      });
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function ListComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.next.emit());
      });
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ListComponent_ng_template_9_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("min-width", 12 * ctx.fields().length + "rem");
      \u0275\u0275property("data", ctx.list())("columns", ctx.columns);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "COMMON.BACK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "COMMON.SAVE_ITEMS"), " ");
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    MatRippleModule,
    MatRipple,
    SimpleTableComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-list", template: `
        <div
            class="flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-4 text-sm"
        >
            <simple-table
                [style.min-width]="12 * fields().length + 'rem'"
                [data]="list()"
                [columns]="columns"
            ></simple-table>
        </div>
        <div class="flex items-center justify-end space-x-4 p-4">
            <button
                btn
                matRipple
                class="inverse w-36"
                (click)="previous.emit()"
            >
                {{ 'COMMON.BACK' | translate }}
            </button>
            <button btn matRipple class="w-36" (click)="next.emit()">
                {{ 'COMMON.SAVE_ITEMS' | translate }}
            </button>
        </div>
        <ng-template #input let-row="row" let-name="name" let-id="key">
            <input class="p-4" [placeholder]="name" [(ngModel)]="row[id]" />
        </ng-template>
    `, imports: [
      FormsModule,
      MatRippleModule,
      SimpleTableComponent,
      TranslatePipe
    ] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }, { type: Output, args: ["listChange"] }], fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: false }] }], next: [{ type: Output, args: ["next"] }], previous: [{ type: Output, args: ["previous"] }], _input_tmpl: [{ type: ViewChild, args: ["input", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/overlays/bulk-item-modal/list.component.ts", lineNumber: 58 });
})();

// src/app/overlays/bulk-item-modal/match-fields.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MatchFieldsComponent_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r4.name, " ");
  }
}
function MatchFieldsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 6)(4, "mat-select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function MatchFieldsComponent_For_2_Template_mat_select_ngModelChange_4_listener($event) {
      const field_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.field_mapping[field_r2.id], $event) || (ctx_r2.field_mapping[field_r2.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, MatchFieldsComponent_For_2_For_6_Template, 2, 2, "mat-option", 8, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(field_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "" + field_r2.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.field_mapping[field_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.source_fields);
  }
}
var MatchFieldsComponent = class _MatchFieldsComponent {
  /** List of bulk items to add */
  list = input(void 0, ...ngDevMode ? [{ debugName: "list" }] : []);
  /** List of fields available for building new item */
  field_list = input([], ...ngDevMode ? [{ debugName: "field_list" }] : []);
  /** User selected mappings for field mappings */
  mappings = model({}, ...ngDevMode ? [{ debugName: "mappings" }] : []);
  /** Emitter for mapped changes to list */
  mapping_done = output();
  /** Emitter user want to return to previous step in flow */
  previous = output();
  /** Emitter for changes to user selected field mappings */
  new_mappings = output();
  /** List of fields available to be selected */
  source_fields = [];
  /** Mapping of raw data fields ids to item fields ids */
  field_mapping = {};
  ngOnInit() {
    const mappings = this.mappings();
    if (mappings) {
      this.field_mapping = __spreadValues(__spreadValues({}, this.field_mapping), mappings);
    }
  }
  ngOnChanges(changes) {
    const mappings = this.mappings();
    const list = this.list();
    if (changes.list && list && list.length) {
      this.source_fields = Object.keys(list[0]).map((i) => ({
        id: i.toLowerCase().split(" ").join("_"),
        name: i.split("_").join(" ")
      }));
      this.source_fields.forEach((field) => {
        if (this.field_list().find((i) => i.id === field.id)) {
          this.field_mapping[`${field.id}`] = `${field.id}`;
        }
      });
      if (mappings) {
        this.field_mapping = __spreadValues(__spreadValues({}, this.field_mapping), mappings);
      }
    }
    if (changes.mappings && mappings) {
      this.field_mapping = __spreadValues(__spreadValues({}, this.field_mapping), mappings);
    }
  }
  /** Generated the mapped list of items and emit them */
  saveMapping() {
    const mapped_list = this.list().map((item) => {
      const mapped_item = {};
      for (const field of this.field_list()) {
        const id = `${field.id}`;
        mapped_item[id] = item[this.field_mapping[id]];
      }
      return mapped_item;
    });
    this.mappings.set(__spreadValues({}, this.field_mapping));
    this.new_mappings.emit(this.mappings());
    this.mapping_done.emit(mapped_list);
  }
  static \u0275fac = function MatchFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchFieldsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchFieldsComponent, selectors: [["bulk-item-match-fields"]], inputs: { list: [1, "list"], field_list: [1, "field_list"], mappings: [1, "mappings"] }, outputs: { mappings: "mappingsChange", mapping_done: "mapping_done", previous: "previous", new_mappings: "new_mappings" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 6, consts: [[1, "-mt-2", "flex", "max-h-[65vh]", "max-w-[80vw]", "flex-wrap", "overflow-auto", "px-2"], [1, "m-2", "flex", "min-w-[40%]", "flex-1", "flex-col"], [1, "flex", "items-center", "justify-end", "space-x-4", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"], [1, "uppercase", 3, "for"], ["appearance", "outline", 1, "no-subscript"], ["placeholder", "Select field", 3, "ngModelChange", "name", "ngModel"], [3, "value"]], template: function MatchFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, MatchFieldsComponent_For_2_Template, 7, 4, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function MatchFieldsComponent_Template_button_click_4_listener() {
        return ctx.previous.emit();
      });
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function MatchFieldsComponent_Template_button_click_7_listener() {
        return ctx.saveMapping();
      });
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.field_list());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "COMMON.BACK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "COMMON.CONTINUE"), " ");
    }
  }, dependencies: [MatRippleModule, MatRipple, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchFieldsComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-match-fields", template: `
        <div
            class="-mt-2 flex max-h-[65vh] max-w-[80vw] flex-wrap overflow-auto px-2"
        >
            @for (field of field_list(); track field.id) {
                <div class="m-2 flex min-w-[40%] flex-1 flex-col">
                    <label class="uppercase" [for]="field.id">{{
                        field.id
                    }}</label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [name]="'' + field.id"
                            [(ngModel)]="field_mapping[field.id]"
                            placeholder="Select field"
                        >
                            @for (type of source_fields; track type.id) {
                                <mat-option [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
        </div>
        <div class="flex items-center justify-end space-x-4 p-4">
            <button
                btn
                matRipple
                class="inverse w-36"
                (click)="previous.emit()"
            >
                {{ 'COMMON.BACK' | translate }}
            </button>
            <button btn matRipple class="w-36" (click)="saveMapping()">
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </div>
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], field_list: [{ type: Input, args: [{ isSignal: true, alias: "field_list", required: false }] }], mappings: [{ type: Input, args: [{ isSignal: true, alias: "mappings", required: false }] }, { type: Output, args: ["mappingsChange"] }], mapping_done: [{ type: Output, args: ["mapping_done"] }], previous: [{ type: Output, args: ["previous"] }], new_mappings: [{ type: Output, args: ["new_mappings"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchFieldsComponent, { className: "MatchFieldsComponent", filePath: "src/app/overlays/bulk-item-modal/match-fields.component.ts", lineNumber: 68 });
})();

// src/app/overlays/bulk-item-modal/status-list.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function StatusListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BULK_UPLOADING"), " ");
  }
}
function StatusListComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_8_r1 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.status[\u0275$index_8_r1], " ");
  }
}
function StatusListComponent_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_8_r1 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-error", ctx_r1.status[\u0275$index_8_r1] !== "done")("text-error-content", ctx_r1.status[\u0275$index_8_r1] !== "done")("bg-success", ctx_r1.status[\u0275$index_8_r1] === "done")("text-success-content", ctx_r1.status[\u0275$index_8_r1] === "done");
    \u0275\u0275property("matTooltip", ctx_r1.status[\u0275$index_8_r1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.status[\u0275$index_8_r1] === "done" ? "done" : "close", " ");
  }
}
function StatusListComponent_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function StatusListComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StatusListComponent_For_3_Conditional_4_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275conditionalCreate(6, StatusListComponent_For_3_Conditional_6_Template, 3, 10, "div", 7);
    \u0275\u0275conditionalCreate(7, StatusListComponent_For_3_Conditional_7_Template, 1, 0, "mat-spinner", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_8_r1 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status[\u0275$index_8_r1] && ctx_r1.status[\u0275$index_8_r1] !== "done" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.status[\u0275$index_8_r1] !== "loading" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status[\u0275$index_8_r1] === "loading" ? 7 : -1);
  }
}
var StatusListComponent = class _StatusListComponent {
  /** List of bulk items to add */
  list = input([], ...ngDevMode ? [{ debugName: "list" }] : []);
  /** Method to save changes to items in the list */
  save = input(void 0, ...ngDevMode ? [{ debugName: "save" }] : []);
  /** Emitter for completion status of the item upload */
  done = output();
  /** Status of each of the items to be created */
  status = {};
  ngOnChanges(changes) {
    if (changes.list && this.list()) {
      this.saveItems();
    }
  }
  async saveItems() {
    try {
      const list = [];
      let index = 0;
      for (const item of this.list()) {
        this.status[index] = "loading";
        const saved_item = await this.save()(__spreadProps(__spreadValues({}, item), { id: "" })).toPromise().catch((err) => {
          console.log("Error:", err);
          this.status[index] = `Error: ${err.status || err} ${err.statusText || err}`;
          console.error(this.status[index]);
        });
        list.push(saved_item);
        if (this.status[index] === "loading") {
          this.status[index] = "done";
        }
        index++;
      }
      const clean_list = list.filter((item) => !!item);
      if (clean_list.length > 0) {
        this.done.emit(clean_list);
      }
    } catch (e) {
      console.error(e);
    }
  }
  static \u0275fac = function StatusListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusListComponent, selectors: [["bulk-item-status-list"]], inputs: { list: [1, "list"], save: [1, "save"] }, outputs: { done: "done" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 1, consts: [[1, "flex", "flex-col", "items-center", "px-4", "pb-4"], [1, "info"], [1, "border-base-200", "flex", "w-[24rem]", "items-center", "rounded-sm", "border", "p-2"], [1, "flex", "flex-1", "flex-col", "justify-center", "px-2"], [1, "name", "flex-1"], [1, "text-error", "text-xs"], [1, "status"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-2xl", "shadow-sm", 3, "bg-error", "text-error-content", "bg-success", "text-success-content", "matTooltip"], ["diameter", "24"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-2xl", "shadow-sm", 3, "matTooltip"]], template: function StatusListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, StatusListComponent_Conditional_1_Template, 3, 3, "div", 1);
      \u0275\u0275repeaterCreate(2, StatusListComponent_For_3_Template, 8, 4, "div", 2, _forTrack02);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.done ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.list());
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusListComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-status-list", template: `
        <div class="flex flex-col items-center px-4 pb-4">
            @if (!done) {
                <div class="info">
                    {{ 'COMMON.BULK_UPLOADING' | translate }}
                </div>
            }
            @for (item of list(); track item.id; let i = $index) {
                <div
                    class="border-base-200 flex w-[24rem] items-center rounded-sm border p-2"
                >
                    <div class="flex flex-1 flex-col justify-center px-2">
                        <div class="name flex-1">{{ item.name }}</div>
                        @if (status[i] && status[i] !== 'done') {
                            <div class="text-error text-xs">
                                {{ status[i] }}
                            </div>
                        }
                    </div>
                    <div class="status">
                        @if (status[i] !== 'loading') {
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow-sm"
                                [class.bg-error]="status[i] !== 'done'"
                                [class.text-error-content]="
                                    status[i] !== 'done'
                                "
                                [class.bg-success]="status[i] === 'done'"
                                [class.text-success-content]="
                                    status[i] === 'done'
                                "
                                [matTooltip]="status[i]"
                            >
                                <icon>
                                    {{
                                        status[i] === 'done' ? 'done' : 'close'
                                    }}
                                </icon>
                            </div>
                        }
                        @if (status[i] === 'loading') {
                            <mat-spinner diameter="24"></mat-spinner>
                        }
                    </div>
                </div>
            }
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      IconComponent,
      MatTooltipModule,
      TranslatePipe
    ] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusListComponent, { className: "StatusListComponent", filePath: "src/app/overlays/bulk-item-modal/status-list.component.ts", lineNumber: 73 });
})();

// src/app/overlays/bulk-item-modal/template-data.ts
var SYSTEM_TEMPLATE = {
  name: "A System",
  display_name: "Your System",
  description: "A description",
  email: "system@place.tech",
  capacity: 10,
  features: ["vidConf"],
  bookable: true,
  installed_ui_devices: 4,
  support_url: "https://place.tech/support/test",
  modules: ["mod-123"],
  zones: ["zone-123"],
  map_id: "area-123",
  module_data: [{ id: "mod-001", name: "A Module" }]
};
var MODULE_TEMPLATE = {
  name: "A Module",
  driver_id: "dep-001",
  control_system_id: "sys-001",
  ip: "1.1.1.1",
  tls: false,
  udp: false,
  port: 32e3,
  makebreak: false,
  uri: "test.com",
  custom_name: "mi-name",
  role: Mt.Device,
  notes: "Clone wars",
  ignore_connected: false
};
var DRIVER_TEMPLATE = {
  name: "A Driver",
  description: "In a galaxy far far away...",
  module_name: "SteamShip",
  role: Mt.Logic,
  default_uri: "Sometimes we default",
  default_port: 1234,
  ignore_connected: false,
  settings: { settings_string: "{ today: false, future: 'Yeah!' }" },
  class_name: "::ACA::SolveProblem",
  repository_id: "my-repo",
  file_name: "fancy-driver.cr",
  commit: "some-hash"
};
var USER_TEMPLATE = {
  name: "A User",
  authority_id: "On who's authority",
  email: "jon@place.tech",
  phone: "+612000000000",
  country: "Australia",
  image: "",
  metadata: "there be none",
  login_name: "elitedarklord",
  staff_id: "PERSON_12345",
  first_name: "Bob",
  last_name: "Marley",
  card_number: "1234567890"
};
var ZONE_TEMPLATE = {
  name: "A Zone",
  description: "In a galaxy far far away...",
  triggers: ["trig-001"],
  parent_id: "zone-123",
  display_name: "The Zone",
  tags: "building,level,org",
  code: "BLD-123",
  type: "Client",
  count: 32,
  capacity: 2345,
  location: "Somewhere close",
  map_id: "a/url/to/my/map.svg"
};

// src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts
var _c02 = (a0) => ({ type: a0 });
function BulkItemModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BulkItemModalComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-status-list", 7);
    \u0275\u0275listener("done", function BulkItemModalComponent_Case_6_Template_bulk_item_status_list_done_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.done());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("save", ctx_r1.save)("list", ctx_r1.item_list);
  }
}
function BulkItemModalComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-list", 8);
    \u0275\u0275twoWayListener("listChange", function BulkItemModalComponent_Case_7_Template_bulk_item_list_listChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item_list, $event) || (ctx_r1.item_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("next", function BulkItemModalComponent_Case_7_Template_bulk_item_list_next_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatus());
    })("previous", function BulkItemModalComponent_Case_7_Template_bulk_item_list_previous_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.flow_step = "match-fields");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("list", ctx_r1.item_list);
    \u0275\u0275property("fields", ctx_r1.available_fields);
  }
}
function BulkItemModalComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-match-fields", 9);
    \u0275\u0275listener("new_mappings", function BulkItemModalComponent_Case_8_Template_bulk_item_match_fields_new_mappings_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mappings = $event);
    })("mapping_done", function BulkItemModalComponent_Case_8_Template_bulk_item_match_fields_mapping_done_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleList($event, true));
    })("previous", function BulkItemModalComponent_Case_8_Template_bulk_item_match_fields_previous_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.flow_step = "");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("list", ctx_r1.data_list)("field_list", ctx_r1.available_fields)("mappings", ctx_r1.mappings);
  }
}
function BulkItemModalComponent_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-csv-upload", 10);
    \u0275\u0275listener("list", function BulkItemModalComponent_Case_9_Template_bulk_item_csv_upload_list_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleList($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("template", ctx_r1.template);
  }
}
var IGNORE_FIELDS = [
  "created_at",
  "updated_at",
  "version",
  "settings",
  "module_list"
];
var BulkItemModalComponent = class _BulkItemModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  /** Current step in the bulk add flow */
  flow_step = "";
  /** List of items to bulk add */
  item_list = [];
  /** List of raw data to use for bulk add */
  data_list = [];
  /** Whether requests are being processed */
  loading;
  /** Template data for use */
  template = [];
  mappings = {};
  available_fields = [];
  get type() {
    return this._data.name;
  }
  get save() {
    return this._data.save;
  }
  constructor() {
    this.available_fields = this.getAvailableFields();
    this.template = this.generateTemplate();
  }
  /**
   * Handle list data
   * @param data List of data to process
   */
  handleList(data, is_mapped = false) {
    if (data.length) {
      if (is_mapped) {
        const Resource = this._data.constr;
        this.item_list = data.map((item) => {
          const new_item = {};
          Object.keys(item).forEach((key) => {
            try {
              new_item[key] = JSON.parse(item[key]);
            } catch {
              new_item[key] = item[key];
            }
          });
          return new Resource(new_item);
        });
        this.flow_step = "list";
      } else {
        this.data_list = data;
        this.flow_step = "match-fields";
      }
    }
  }
  showStatus() {
    this.flow_step = "status";
  }
  done() {
    setTimeout(() => this._dialog_ref.close(), 3e3);
  }
  getAvailableFields() {
    const list = Object.keys(new this._data.constr());
    const identity_list = list.map((i) => ({
      id: i,
      name: i.split("_").join(" ")
    }));
    return unique(identity_list, "id").filter((field) => field.id !== "id" && field.id[0] !== "_" && !IGNORE_FIELDS.includes(field.id));
  }
  generateTemplate() {
    switch (this._data.constr) {
      case Lr:
        return [new Lr(SYSTEM_TEMPLATE).toJSON()];
      case Br:
        return [new Br(MODULE_TEMPLATE).toJSON()];
      case Hr:
        return [new Hr(DRIVER_TEMPLATE).toJSON()];
      case ao:
        return [new ao(USER_TEMPLATE).toJSON()];
      case Mn:
        return [new Mn(ZONE_TEMPLATE).toJSON()];
    }
  }
  static \u0275fac = function BulkItemModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BulkItemModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkItemModalComponent, selectors: [["app-bulk-item-modal"]], decls: 10, vars: 8, consts: [[1, "bg-base-200", "m-4", "flex", "items-center", "justify-between", "rounded-sm", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [3, "save", "list"], [3, "list", "fields"], [3, "list", "field_list", "mappings"], [3, "template"], [3, "done", "save", "list"], [3, "listChange", "next", "previous", "list", "fields"], [3, "new_mappings", "mapping_done", "previous", "list", "field_list", "mappings"], [3, "list", "template"]], template: function BulkItemModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, BulkItemModalComponent_Conditional_4_Template, 3, 0, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "main");
      \u0275\u0275conditionalCreate(6, BulkItemModalComponent_Case_6_Template, 1, 2, "bulk-item-status-list", 3)(7, BulkItemModalComponent_Case_7_Template, 1, 2, "bulk-item-list", 4)(8, BulkItemModalComponent_Case_8_Template, 1, 3, "bulk-item-match-fields", 5)(9, BulkItemModalComponent_Case_9_Template, 1, 1, "bulk-item-csv-upload", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "COMMON.BULK_ADD", \u0275\u0275pureFunction1(6, _c02, ctx.type)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.flow_step) === "status" ? 6 : tmp_2_0 === "list" ? 7 : tmp_2_0 === "match-fields" ? 8 : 9);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    IconComponent,
    MatRippleModule,
    MatRipple,
    StatusListComponent,
    ListComponent,
    MatchFieldsComponent,
    CsvUploadComponent,
    TranslatePipe
  ], styles: ["\n\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=bulk-item-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkItemModalComponent, [{
    type: Component,
    args: [{ selector: "app-bulk-item-modal", template: `
        <div
            class="bg-base-200 m-4 flex items-center justify-between rounded-sm px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.BULK_ADD' | translate: { type: type } }}
            </h3>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </div>
        <main>
            @switch (flow_step) {
                @case ('status') {
                    <bulk-item-status-list
                        [save]="save"
                        [list]="item_list"
                        (done)="done()"
                    ></bulk-item-status-list>
                }
                @case ('list') {
                    <bulk-item-list
                        [(list)]="item_list"
                        [fields]="available_fields"
                        (next)="showStatus()"
                        (previous)="flow_step = 'match-fields'"
                    ></bulk-item-list>
                }
                @case ('match-fields') {
                    <bulk-item-match-fields
                        [list]="data_list"
                        [field_list]="available_fields"
                        [mappings]="mappings"
                        (new_mappings)="mappings = $event"
                        (mapping_done)="handleList($event, true)"
                        (previous)="flow_step = ''"
                    ></bulk-item-match-fields>
                }
                @default {
                    <bulk-item-csv-upload
                        [template]="template"
                        (list)="handleList($event)"
                    ></bulk-item-csv-upload>
                }
            }
        </main>
    `, imports: [
      MatDialogModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      StatusListComponent,
      ListComponent,
      MatchFieldsComponent,
      CsvUploadComponent
    ], styles: ["/* angular:styles/component:css;946abd99d31a31a3ccb02251b4e5438b13007a4772c0c88251566e95d97cc68b;/home/runner/work/backoffice/backoffice/src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts */\n.body {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n.icon {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\nmat-dialog-actions button {\n  min-width: 8em;\n}\n/*# sourceMappingURL=bulk-item-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkItemModalComponent, { className: "BulkItemModalComponent", filePath: "src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts", lineNumber: 139 });
})();

// src/app/overlays/duplicate-modal.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function DuplicateModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p");
    \u0275\u0275text(3, " How many times would you like to duplicate this item? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function DuplicateModalComponent_Conditional_4_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.times, $event) || (ctx_r1.times = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.times);
  }
}
function DuplicateModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Creating item duplicates...");
    \u0275\u0275elementEnd();
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_27_r3 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.status[\u0275$index_27_r3]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.status[\u0275$index_27_r3] === "done" ? "done" : "close", " ");
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275conditionalCreate(4, DuplicateModalComponent_Conditional_5_For_3_Conditional_4_Template, 2, 3, "icon", 9);
    \u0275\u0275conditionalCreate(5, DuplicateModalComponent_Conditional_5_For_3_Conditional_5_Template, 1, 0, "mat-spinner", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_27_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.item.name, " (", \u0275$index_27_r3 + 1, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.status[\u0275$index_27_r3] !== "loading" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status[\u0275$index_27_r3] === "loading" ? 5 : -1);
  }
}
function DuplicateModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, DuplicateModalComponent_Conditional_5_Conditional_1_Template, 2, 0, "div", 5);
    \u0275\u0275repeaterCreate(2, DuplicateModalComponent_Conditional_5_For_3_Template, 6, 4, "div", 6, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.done ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.temp);
  }
}
function DuplicateModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-dialog-actions")(1, "button", 11);
    \u0275\u0275text(2, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function DuplicateModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicate());
    });
    \u0275\u0275text(4, " Duplicate ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.times || ctx_r1.times <= 0);
  }
}
var DuplicateModalComponent = class _DuplicateModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  /** Emitter for user action on the modal */
  event = output();
  /** Number of times to duplicate the given item */
  times = 1;
  /** Number of times to duplicate the given item */
  status = {};
  /** Whether request is loading */
  loading = false;
  /** Temporary array for generating UI elements */
  temp = [];
  /** Whether duplication has completed */
  done = false;
  /** Item selected to be duplicated */
  get item() {
    return this._data.item;
  }
  /**
   * Create the specified number of duplicate items
   */
  async duplicate() {
    this.loading = true;
    const ItemConstructor = this.item.constructor;
    const item = this._data.item;
    const list = [];
    this.temp = new Array(this.times).fill({});
    for (let i = 0; i < this.times; i++) {
      const new_item = new ItemConstructor(__spreadProps(__spreadValues({}, item), {
        id: "",
        name: `${item.name} (${i + 1})`
      }));
      this.status[i] = "loading";
      const saved_item = await this._data.save(new_item).toPromise().catch((err) => {
        this.status[i] = `Error: ${err.message || err}`;
        notifyError(this.status[i]);
      });
      list.push(saved_item);
      if (this.status[i] === "loading") {
        this.status[i] = "done";
      }
    }
    const clean_list = list.filter((item2) => !!item2);
    this.event.emit({
      reason: "done",
      metadata: clean_list
    });
    this.done = true;
    setTimeout(() => this._dialog_ref.close(), 5e3);
  }
  static \u0275fac = function DuplicateModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DuplicateModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DuplicateModalComponent, selectors: [["app-duplicate-modal"]], outputs: { event: "event" }, decls: 7, vars: 2, consts: [["mat-dialog-title", ""], [1, "body"], [1, "content"], ["appearance", "outline"], ["matInput", "", "name", "times", "type", "number", "placeholder", "Number of duplications", "required", "", 3, "ngModelChange", "ngModel"], [1, "info"], [1, "item"], [1, "name"], [1, "status"], [3, "class"], ["diameter", "24"], ["btn", "", "mat-dialog-close", "", 1, "inverse"], ["btn", "", "name", "accept", 3, "click", "disabled"]], template: function DuplicateModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "h3", 0);
      \u0275\u0275text(2, "Duplicate Item");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "mat-dialog-content");
      \u0275\u0275conditionalCreate(4, DuplicateModalComponent_Conditional_4_Template, 6, 1, "div", 1)(5, DuplicateModalComponent_Conditional_5_Template, 4, 1, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, DuplicateModalComponent_Conditional_6_Template, 5, 1, "mat-dialog-actions");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 6 : -1);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
    IconComponent,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em 0.5em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  min-width: 16rem;\n  text-align: center;\n  padding: 1em;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  opacity: 0.65;\n  margin-bottom: 1em;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 20em;\n  max-width: 24em;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n}\n.item[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: rgba(#000, 0.1);\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.done[_ngcontent-%COMP%] {\n  color: var(--success);\n}\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=duplicate-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DuplicateModalComponent, [{
    type: Component,
    args: [{ selector: "app-duplicate-modal", template: `
        <header>
            <h3 mat-dialog-title>Duplicate Item</h3>
        </header>
        <mat-dialog-content>
            @if (!loading) {
                <div class="body">
                    <div class="content">
                        <p>
                            How many times would you like to duplicate this
                            item?
                        </p>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="times"
                                type="number"
                                [(ngModel)]="times"
                                placeholder="Number of duplications"
                                required
                            />
                        </mat-form-field>
                    </div>
                </div>
            } @else {
                <div class="body">
                    @if (!done) {
                        <div class="info">Creating item duplicates...</div>
                    }
                    @for (itm of temp; track itm.id; let i = $index) {
                        <div class="item">
                            <div class="name">
                                {{ item.name }} ({{ i + 1 }})
                            </div>
                            <div class="status">
                                @if (status[i] !== 'loading') {
                                    <icon [class]="status[i]">
                                        {{
                                            status[i] === 'done'
                                                ? 'done'
                                                : 'close'
                                        }}
                                    </icon>
                                }
                                @if (status[i] === 'loading') {
                                    <mat-spinner diameter="24"></mat-spinner>
                                }
                            </div>
                        </div>
                    }
                </div>
            }
        </mat-dialog-content>
        @if (!loading) {
            <mat-dialog-actions>
                <button btn class="inverse" mat-dialog-close>Cancel</button>
                <button
                    btn
                    name="accept"
                    [disabled]="!times || times <= 0"
                    (click)="duplicate()"
                >
                    Duplicate
                </button>
            </mat-dialog-actions>
        }
    `, imports: [
      MatDialogModule,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;e1fbb1f604cf6ee01b07adcd28f42522dde978768ca0a5f7efdf11f34fa693ed;/home/runner/work/backoffice/backoffice/src/app/overlays/duplicate-modal.component.ts */\n.body {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em 0.5em;\n}\n.icon {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content {\n  min-width: 16rem;\n  text-align: center;\n  padding: 1em;\n}\n.info {\n  font-size: 0.8em;\n  opacity: 0.65;\n  margin-bottom: 1em;\n}\n.item {\n  display: flex;\n  align-items: center;\n  min-width: 20em;\n  max-width: 24em;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n}\n.item:nth-child(2) {\n  background-color: rgba(#000, 0.1);\n}\n.item .name {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status {\n  color: var(--error);\n}\n.done {\n  color: var(--success);\n}\nmat-dialog-actions button {\n  min-width: 8em;\n}\n/*# sourceMappingURL=duplicate-modal.component.css.map */\n"] }]
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuplicateModalComponent, { className: "DuplicateModalComponent", filePath: "src/app/overlays/duplicate-modal.component.ts", lineNumber: 164 });
})();

// src/app/common/actions.ts
var domains = {
  query: (_) => Ou({
    q: _,
    fields: ["id", "name", "domain"].join(",")
  }),
  show: (_) => Eu(_),
  save: (item) => item.id ? Iu(item.id, item) : Pu(item),
  remove: (item) => Tu(item.id),
  itemConstructor: Zs,
  delete_message: ``,
  name: "DOMAINS"
};
var drivers = {
  query: (_) => Uu({
    q: _,
    fields: ["id", "name", "module_name"].join(",")
  }),
  show: (_) => Ru(_),
  save: (item) => item.id ? Mu(item.id, item) : Cu(item),
  remove: (item) => Du(item.id),
  itemConstructor: Hr,
  delete_message: ``,
  delete_extra: async (_) => {
    const query = {
      offset: 0,
      limit: 1,
      driver_id: _.id
    };
    const count = await uc(query).pipe(map(({ total }) => total)).toPromise().catch((_err) => 0);
    return count ? [
      "error",
      `${count} modules that rely on this driver will be <strong>immediately</strong> removed.`
    ] : null;
  },
  name: "DRIVERS"
};
var modules = {
  query: (_) => uc({
    q: _,
    fields: ["id", "name", "module_name"].join(",")
  }),
  show: (_) => cc(_),
  save: (item) => item.id ? ac(item.id, item) : lc(item),
  remove: (item) => hc(item.id),
  itemConstructor: Br,
  delete_message: ``,
  name: "MODULES"
};
var repositories = {
  query: (_) => Ac({
    q: _,
    fields: ["id", "name", "repo_type"].join(",")
  }),
  show: (_) => wc(_),
  save: (item) => item.id ? Oc(item.id, item) : Ec(item),
  remove: (item) => Ic(item.id),
  itemConstructor: io,
  delete_message: `'`,
  name: "REPOS"
};
var systems = {
  query: (_) => Zc({
    q: _,
    fields: ["id", "name", "display_name"].join(",")
  }),
  show: (_) => ea(_),
  save: (item) => item.id ? ta(item.id, __spreadProps(__spreadValues({}, item), {
    support_url: processURL(item, item.support_url)
  })) : na(__spreadProps(__spreadValues({}, item), {
    support_url: processURL(item, item.support_url)
  })),
  remove: (item) => ra(item.id),
  itemConstructor: Lr,
  delete_message: ``,
  name: "SYSTEMS"
};
function processURL(system, url) {
  for (const key in system) {
    url = url.replace(new RegExp(`{{${key}}}`, "g"), `${system[key]}`);
  }
  url = url.replace(new RegExp(`{{origin}}`, "g"), location.origin);
  url = url.replace(new RegExp(`{{host}}`, "g"), location.host);
  url = url.replace(new RegExp(`{{pathname}}`, "g"), location.pathname);
  return url;
}
var triggers = {
  query: (_) => Sa({
    q: _,
    fields: ["id", "name", "display_name"].join(",")
  }),
  show: (_) => ka(_),
  save: (item) => item.id ? $a(item.id, item) : xa(item),
  remove: (item) => Aa(item.id),
  itemConstructor: me,
  delete_message: ``,
  name: "TRIGGERS"
};
var users = {
  query: (_) => Oa({
    q: _,
    fields: ["id", "name", "email", "authority_id", "groups"].join(",")
  }),
  show: (_) => Ea(_),
  save: (item) => item.id ? Pa(item.id, item) : Ta(item),
  remove: (item) => qa(item.id),
  itemConstructor: ao,
  delete_message: ``,
  name: "USERS"
};
var zones = {
  query: (_) => ja({
    q: _,
    fields: ["id", "name", "display_name", "tags"].join(",")
  }),
  show: (_) => Ha(_),
  save: (item) => item.id ? Wa(item.id, item) : La(item),
  remove: (item) => Ba(item.id),
  itemConstructor: Mn,
  delete_message: ``,
  name: "ZONES"
};
var ACTIONS = {
  domains,
  drivers,
  modules,
  repositories,
  systems,
  triggers,
  users,
  zones
};

// src/app/common/item.service.ts
var ActiveItemService = class _ActiveItemService extends AsyncHandler {
  _router = inject(Router);
  _settings = inject(SettingsService);
  _hotkey = inject(HotkeysService);
  _dialog = inject(MatDialog);
  _user = inject(BackofficeUsersService);
  /** Whether active item is loading */
  _loading = new BehaviorSubject(false);
  /** Whether item list should show on mobile */
  _show_options = new BehaviorSubject(false);
  /** Whether item list should show on mobile */
  _search = new BehaviorSubject("");
  /** Currently active item */
  _active_item = new BehaviorSubject(null);
  /** Currently active item */
  _next_query = new BehaviorSubject(null);
  /** List of items for the current type */
  _list = new BehaviorSubject([]);
  /** Whether item list is loading */
  _loading_list = new BehaviorSubject(false);
  /** Whether active item is loading */
  _name = new BehaviorSubject(null);
  /** Type of the active item */
  _type;
  /** Number of items */
  _count = new BehaviorSubject(0);
  count = this._count.asObservable();
  get total() {
    return this._count.getValue();
  }
  /** Observable for item loading state */
  loading = this._loading.asObservable();
  /** Observable for item loading state */
  loading_list = this._loading_list.asObservable();
  /** Observable for list of items */
  list = this._list.asObservable();
  /** Observable for active item */
  active_item$ = this._active_item.asObservable();
  /** Observable for active item */
  item = this._active_item.asObservable().pipe(distinctUntilChanged((a, b) => a?.id === b?.id && a?.updated_at === b?.updated_at));
  /** Observable for list of items */
  list_items = () => this._list.getValue();
  /** Observable for whether the item list should show on mobile */
  show_options = this._show_options.asObservable();
  /** Available API actions for the active type */
  get actions() {
    return ACTIONS[this._type];
  }
  get active_item() {
    return this._active_item.getValue();
  }
  get type() {
    return this._type;
  }
  moreItems() {
    this.updateList();
  }
  setSearch(str) {
    this._search.next(str);
  }
  constructor() {
    super();
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateType();
      }
    });
    this._hotkey.listen(["KeyN"], () => this.create());
    this._hotkey.listen(["KeyE"], () => this.edit());
    this._search.subscribe((str) => {
      this._loading_list.next(true);
      if (str || this._next_query.getValue()) {
        this._next_query.next(null);
        this._list.next([]);
        this.updateList();
      }
    });
    setTimeout(() => this.updateType(), 300);
  }
  /** Update the active item */
  async setItem(id) {
    if ((!this.active_item || this.active_item.id !== id) && id.length > 2) {
      const url = this._router.url.split("/");
      this._type = url[1];
      if (!this.type)
        return this.timeout("setItem", () => this.setItem(id));
      this._loading.next(true);
      this._active_item.next(null);
      const item = await this.actions.show(id).toPromise().catch(() => notifyError(`Error loading ${id}`));
      this._active_item.next(item);
      const name = this._type[0].toUpperCase() + this._type.slice(1);
      this._name.next(name);
      this._settings.title = name;
      this._show_options.next(false);
      this.updateSettings();
      this._loading.next(false);
    }
  }
  toggleOptions() {
    this._show_options.next(!this._show_options.getValue());
  }
  create(item, copy = false) {
    if (!this._user.current().sys_admin)
      return;
    item = item || this._active_item.getValue();
    const actions = Object.values(ACTIONS).find((v) => item instanceof v.itemConstructor) || this.actions;
    return this.edit(copy ? new actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
      id: "",
      name: `${item.name} (1)`
    })) : new actions.itemConstructor());
  }
  bulkAdd() {
    if (!this._user.current().sys_admin)
      return;
    const actions = this.actions;
    this._settings.post("disable_uploads", true);
    const ref = this._dialog.open(BulkItemModalComponent, {
      height: "auto",
      width: "auto",
      maxHeight: "calc(100vh - 2em)",
      maxWidth: "calc(100vw - 2em)",
      data: {
        constr: actions.itemConstructor,
        name: this.type,
        save: actions.save
      }
    });
    ref.afterClosed().subscribe(() => this._settings.post("disable_uploads", false));
  }
  async edit(item, options = {}) {
    if (!this._user.current().sys_admin)
      return;
    item = item || this._active_item.getValue();
    if (item) {
      const actions = Object.values(ACTIONS).find((v) => item instanceof v.itemConstructor) || this.actions;
      if (item.id) {
        item = await actions.show(item.id).toPromise();
      }
      return new Promise((resolve) => {
        const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
          data: __spreadValues({
            item: new actions.itemConstructor(__spreadValues({}, item)),
            name: actions.name,
            save: actions.save
          }, options)
        });
        ref.componentInstance.event.pipe(filter((e) => e.reason === "done")).subscribe((event) => {
          resolve(event.metadata.item);
          this.replaceItem(event.metadata.item);
          if (event.metadata.item instanceof this.actions.itemConstructor) {
            this._router.navigate([
              `/${this._type}`,
              event.metadata.item.id,
              "about"
            ]);
          }
        });
      });
    }
  }
  async delete() {
    if (!this._user.current().sys_admin)
      return;
    const item = this._active_item.getValue();
    if (item) {
      const ref = this._dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
        data: {
          title: i18n(`${this.actions.name}.DELETE`),
          content: i18n(`${this.actions.name}.DELETE_MSG`, {
            name: item.display_name || item.name
          }),
          extra: this.actions.delete_extra ? await this.actions.delete_extra(item) : null,
          icon: { type: "icon", content: "delete" }
        }
      }));
      ref.componentInstance.event.pipe(filter((e) => e.reason === "done")).subscribe((_event) => {
        ref.componentInstance.loading.set(i18n(`${this.actions.name}.DELETE_LOADING`));
        this.actions.remove(item).subscribe(() => {
          notifySuccess(i18n(`${this.actions.name}.DELETE_SUCCESS`, {
            name: item.name
          }));
          this._active_item.next(null);
          this.removeItem(item);
          this._router.navigate([
            `/${this._type}`,
            "-",
            "about"
          ]);
          ref.close();
        }, (err) => {
          ref.componentInstance.loading.set("");
          notifyError(i18n(`${this.actions.name}.DELETE_ERROR`, {
            error: JSON.stringify(err.response || err.message || err)
          }));
        });
      });
    }
  }
  duplicate() {
    if (!this._user.current().sys_admin)
      return;
    const item = this._active_item.getValue();
    if (item) {
      const ref = this._dialog.open(DuplicateModalComponent, {
        data: {
          item,
          save: this.actions.save
        }
      });
      ref.componentInstance.event.subscribe((e) => {
        if (e.reason === "done") {
          this._active_item.next(e.metadata[0]);
          this.replaceItem(e.metadata[0]);
        }
      });
    }
  }
  replaceItem(item) {
    if (item?.id && (!this.active_item || this.active_item.id === item.id)) {
      this._active_item.next(item);
      const list = this._list.getValue().filter((i) => i.id !== item.id);
      list.push(item);
      list.sort((a, b) => a.name?.localeCompare(b.name));
      this.updateSettings();
      this._list.next(list);
    }
  }
  removeItem(item) {
    if (item.id) {
      const list = this._list.getValue().filter((i) => i.id !== item.id);
      list.sort((a, b) => a.name?.localeCompare(b.name));
      this._count.next(this._count.getValue() - 1);
      this._list.next(list);
    }
  }
  async updateType() {
    const url = this._router.url.split("/");
    const old_type = this._type;
    this._type = url[1];
    if (old_type !== this._type) {
      log("Service", `Item type set to ${this._type}`);
      this._next_query.next(null);
      this._active_item.next(null);
      this._search.next("");
      const name = this._type[0]?.toUpperCase() + this._type.slice(1);
      this._name.next(name);
      this._settings.title = name;
      this._show_options.next(true);
      this.updateList();
    }
    if (this._type !== "admin" && url[2]) {
      await this.setItem(url[2]);
    }
    if (this._type === "admin") {
      this._active_item.next({ name: "PlaceOS Admin" });
    }
  }
  updateList() {
    const type = this._type;
    const search = this._search.getValue();
    this.timeout("update", async () => {
      if (!this.actions)
        return;
      this._loading_list.next(true);
      let next = this._next_query.getValue();
      if (!next) {
        next = () => this.actions.query(this._search.getValue());
        this._list.next([]);
      }
      const resp = await next().toPromise();
      if (type === this._type) {
        this._next_query.next(resp.next || (() => of({
          data: [],
          total: resp.total,
          next: null
        })));
        this._count.next(resp.total);
        const list = this._list.getValue().filter((i) => !resp.data.find((item) => item.id === i.id));
        const new_list = list.concat(resp.data);
        new_list.sort((a, b) => a.name?.localeCompare(b.name));
        this._list.next(new_list);
        this._loading_list.next(false);
      }
    }, search ? 300 : 10);
  }
  async updateSettings() {
    const item = this.active_item;
    if (item && item.settings) {
      let settings = await lastValueFrom(Vc({ parent_id: item.id }).pipe(map((resp) => resp.data)));
      settings = new Array(5).fill(0).map((_, idx) => settings.find((_2) => _2.encryption_level === idx) || new Ee({
        encryption_level: idx
      }));
      settings.sort((a, b) => a.encryption_level - b.encryption_level);
      if (this.actions?.itemConstructor) {
        this._active_item.next(new this.actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
          settings
        })));
      }
    }
  }
  static \u0275fac = function ActiveItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveItemService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActiveItemService, factory: _ActiveItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ActiveItemService
};
//# sourceMappingURL=chunk-2WICHDUW.js.map
