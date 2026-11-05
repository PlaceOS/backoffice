import {
  SimpleTableComponent
} from "./chunk-U7W4W7JS.js";
import {
  VirtualScrollComponent
} from "./chunk-2TM7KV6N.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-NU6VCAIQ.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-G3URG5GH.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import {
  DialogTitleDirective
} from "./chunk-YPHWH3TO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PZ6AYSMX.js";
import {
  LoadingLabelDirective
} from "./chunk-3YG3QG75.js";
import {
  notifyError,
  notifyWarn
} from "./chunk-XTVPLVG6.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import {
  MatOption
} from "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-33ALCS4C.js";
import {
  i18n
} from "./chunk-DIAVKJYC.js";
import {
  Dn,
  Es,
  Nt,
  Us,
  en,
  qs
} from "./chunk-OTGYPXXQ.js";
import {
  downloadFile,
  jsonToCsv,
  parseCSV,
  unique
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
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
} from "./chunk-DTROA6L2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/overlays/bulk-item-modal/csv-upload.component.ts
function CsvUploadComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function CsvUploadComponent_Conditional_0_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadTemplateCSV());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BULK_DOWNLOAD"), " ");
  }
}
function CsvUploadComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 0)(1, "label", 2);
    \u0275\u0275listener("dragenter", function CsvUploadComponent_Conditional_0_Template_label_dragenter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragging.set(true));
    })("dragleave", function CsvUploadComponent_Conditional_0_Template_label_dragleave_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragging.set(false));
    })("dragend", function CsvUploadComponent_Conditional_0_Template_label_dragend_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dragging.set(false));
    })("dragover", function CsvUploadComponent_Conditional_0_Template_label_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function CsvUploadComponent_Conditional_0_Template_label_drop_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275elementStart(2, "icon", 3);
    \u0275\u0275text(3, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275text(9, " CSV and TSV files are supported. Download the template first if you need the expected column names. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 6);
    \u0275\u0275listener("change", function CsvUploadComponent_Conditional_0_Template_input_change_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCSVData($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, CsvUploadComponent_Conditional_0_Conditional_11_Template, 3, 3, "button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border-info", ctx_r1.dragging())("bg-info", ctx_r1.dragging())("text-info-content", ctx_r1.dragging());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "COMMON.BULK_DROP_MSG"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.template() ? 11 : -1);
  }
}
function CsvUploadComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.file_name(), " ");
  }
}
function CsvUploadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275conditionalCreate(5, CsvUploadComponent_Conditional_1_Conditional_5_Template, 2, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.BULK_DROP_LOADING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.file_name() ? 5 : -1);
  }
}
var CsvUploadComponent = class _CsvUploadComponent {
  /** Data for the template CSV */
  template = input(
    [],
    ...ngDevMode ? [{ debugName: "template" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter for changes to the data displayed */
  list = output();
  /** Whether user has dragged item */
  dragging = signal(
    null,
    ...ngDevMode ? [{ debugName: "dragging" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether CSV data is being processed */
  loading;
  /** Name of the file currently being processed */
  file_name = signal(
    "",
    ...ngDevMode ? [{ debugName: "file_name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.loadFile(file);
    }
  }
  loadCSVData(event) {
    if (event.target) {
      const element = event.target;
      const file = element.files[0];
      if (file) {
        this.loadFile(file);
        element.value = "";
      }
    }
  }
  loadFile(file) {
    const file_name = file.name.toLowerCase();
    if (!file_name.endsWith(".csv") && !file_name.endsWith(".tsv")) {
      notifyError("Upload a CSV or TSV file.");
      return;
    }
    this.file_name.set(file.name);
    this.loading = true;
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.addEventListener("load", (evt) => {
      this.processCSVData(evt.target.result, file_name.endsWith(".csv") ? "," : "	");
    });
    reader.addEventListener("error", (_) => {
      this.loading = false;
      notifyError("Error reading file.");
    });
  }
  downloadTemplateCSV() {
    const ignore_keys = ["module_list", "settings", "_type", "version"];
    const csv_data = jsonToCsv(this.template(), Object.keys(this.template()[0]).filter((key) => ignore_keys.indexOf(key) < 0), "	");
    downloadFile("bulk-upload.tsv", csv_data);
  }
  processCSVData(data, seperator = "	") {
    try {
      const list = parseCSV(data, seperator) || [];
      this.loading = false;
      if (!list.length) {
        notifyWarn("No rows were found in the uploaded file.");
        return;
      }
      this.list.emit(list);
    } catch (e) {
      this.loading = false;
      console.error(e);
      notifyError("Error parsing CSV data. Please check the file format.");
    }
  }
  static \u0275fac = function CsvUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CsvUploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CsvUploadComponent, selectors: [["bulk-item-csv-upload"]], inputs: { template: [1, "template"] }, outputs: { list: "list" }, decls: 2, vars: 1, consts: [[1, "flex", "w-132", "max-w-full", "flex-col", "gap-4"], [1, "flex", "h-96", "w-132", "max-w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:bg-base-200", "relative", "flex", "min-h-80", "cursor-pointer", "flex-col", "items-center", "justify-center", "gap-4", "rounded-xl", "border-4", "border-dashed", "p-8", "text-center", "transition", 3, "dragenter", "dragleave", "dragend", "dragover", "drop"], [1, "text-6xl"], [1, "text-lg", "font-medium"], [1, "text-base-content/60", "mt-2", "text-sm"], ["type", "file", "accept", ".csv,.tsv", "aria-label", "Upload CSV or TSV file", 1, "absolute", "inset-0", "cursor-pointer", "opacity-0", 3, "change"], ["btn", "", "matRipple", "", 1, "inverse", "w-full"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", 3, "click"], ["diameter", "32"], [1, "text-center"]], template: function CsvUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CsvUploadComponent_Conditional_0_Template, 12, 10, "section", 0)(1, CsvUploadComponent_Conditional_1_Template, 6, 4, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.loading ? 0 : 1);
    }
  }, dependencies: [
    LoadingLabelDirective,
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
            <section class="flex w-132 max-w-full flex-col gap-4">
                <label
                    matRipple
                    class="border-base-300 bg-base-100 hover:bg-base-200 relative flex min-h-80 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-4 border-dashed p-8 text-center transition"
                    [class.border-info]="dragging()"
                    [class.bg-info]="dragging()"
                    [class.text-info-content]="dragging()"
                    (dragenter)="dragging.set(true)"
                    (dragleave)="dragging.set(false)"
                    (dragend)="dragging.set(false)"
                    (dragover)="onDragOver($event)"
                    (drop)="onDrop($event)"
                >
                    <icon class="text-6xl">cloud_upload</icon>
                    <div>
                        <div class="text-lg font-medium">
                            {{ 'COMMON.BULK_DROP_MSG' | translate }}
                        </div>
                        <div class="text-base-content/60 mt-2 text-sm">
                            CSV and TSV files are supported. Download the
                            template first if you need the expected column
                            names.
                        </div>
                    </div>
                    <input
                        class="absolute inset-0 cursor-pointer opacity-0"
                        type="file"
                        accept=".csv,.tsv"
                        aria-label="Upload CSV or TSV file"
                        (change)="loadCSVData($event)"
                    />
                </label>
                @if (template()) {
                    <button
                        btn
                        matRipple
                        class="inverse w-full"
                        (click)="downloadTemplateCSV()"
                    >
                        {{ 'COMMON.BULK_DOWNLOAD' | translate }}
                    </button>
                }
            </section>
        } @else {
            <div
                class="flex h-96 w-132 max-w-full flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="32" />
                <div class="text-center">
                    {{ 'COMMON.BULK_DROP_LOADING' | translate }}
                    @if (file_name()) {
                        <div class="text-base-content/60 mt-2 text-sm">
                            {{ file_name() }}
                        </div>
                    }
                </div>
            </div>
        }
    `, imports: [
      LoadingLabelDirective,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent
    ] }]
  }], null, { template: [{ type: Input, args: [{ isSignal: true, alias: "template", required: false }] }], list: [{ type: Output, args: ["list"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CsvUploadComponent, { className: "CsvUploadComponent", filePath: "src/app/overlays/bulk-item-modal/csv-upload.component.ts", lineNumber: 84 });
})();

// src/app/overlays/bulk-item-modal/list.component.ts
var _c0 = ["input"];
var _c1 = ["start"];
var _c2 = ["actions"];
function ListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.validation_errors().length, " issue(s) ");
  }
}
function ListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " Ready to save ");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.duplicate_warnings().length, " warning(s) ");
  }
}
function ListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No duplicates");
    \u0275\u0275elementEnd();
  }
}
function ListComponent_Conditional_16_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r2);
  }
}
function ListComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18);
    \u0275\u0275text(2, " Fix before saving ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ListComponent_Conditional_16_Conditional_1_For_4_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.validation_errors().slice(0, 4));
  }
}
function ListComponent_Conditional_16_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const warning_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(warning_r3);
  }
}
function ListComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 19);
    \u0275\u0275text(2, " Review duplicates ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ListComponent_Conditional_16_Conditional_2_For_4_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.duplicate_warnings().slice(0, 4));
  }
}
function ListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, ListComponent_Conditional_16_Conditional_1_Template, 5, 0, "div", 16);
    \u0275\u0275conditionalCreate(2, ListComponent_Conditional_16_Conditional_2_Template, 5, 0, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.validation_errors().length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.duplicate_warnings().length ? 2 : -1);
  }
}
function ListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 12)(1, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function ListComponent_Conditional_19_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setAllStartModules($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Start all modules for all systems");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.all_start_modules());
    \u0275\u0275control();
  }
}
function ListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function ListComponent_ng_template_27_Template_input_ngModelChange_0_listener($event) {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const id_r7 = ctx_r5.key;
      const index_r8 = ctx_r5.index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateItem(index_r8, id_r7, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const name_r10 = ctx.name;
    const id_r7 = ctx.key;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-error", ctx_r0.isMissing(row_r9, id_r7));
    \u0275\u0275property("placeholder", name_r10)("ngModel", row_r9[id_r7]);
    \u0275\u0275control();
  }
}
function ListComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22)(1, "input", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("click", function ListComponent_ng_template_29_Template_input_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function ListComponent_ng_template_29_Template_input_ngModelChange_1_listener($event) {
      const index_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateItem(index_r12, "start_modules", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", row_r13["start_modules"]);
    \u0275\u0275control();
  }
}
function ListComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ListComponent_ng_template_31_Template_button_click_0_listener($event) {
      const index_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.removeItem(index_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.DELETE"));
  }
}
var ListComponent = class _ListComponent {
  /** List of bulk items to add */
  list = model(
    [],
    ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of fields available for building new item */
  fields = input(
    [],
    ...ngDevMode ? [{ debugName: "fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Fields required before items can be saved */
  required_fields = input(
    [],
    ...ngDevMode ? [{ debugName: "required_fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Validation errors to show for the reviewed list */
  validation_errors = input(
    [],
    ...ngDevMode ? [{ debugName: "validation_errors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Duplicate warnings to show for the reviewed list */
  duplicate_warnings = input(
    [],
    ...ngDevMode ? [{ debugName: "duplicate_warnings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether to show system bulk add options */
  show_start_modules = input(
    false,
    ...ngDevMode ? [{ debugName: "show_start_modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter user want to return to next step in flow */
  next = output();
  /** Emitter user want to return to previous step in flow */
  previous = output();
  _input_tmpl = viewChild(
    "input",
    ...ngDevMode ? [{ debugName: "_input_tmpl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _start_tmpl = viewChild(
    "start",
    ...ngDevMode ? [{ debugName: "_start_tmpl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _actions_tmpl = viewChild(
    "actions",
    ...ngDevMode ? [{ debugName: "_actions_tmpl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of column ids to show on table */
  columns = computed(
    () => {
      const columns = this.fields().map((i) => ({
        key: i.id,
        name: i.name.toUpperCase(),
        content: this._input_tmpl(),
        sortable: true
      }));
      if (this.show_start_modules()) {
        columns.unshift({
          key: "start_modules",
          name: "START MODULES",
          content: this._start_tmpl(),
          sortable: false,
          size: "6.5rem"
        });
      }
      columns.push({
        key: "_actions",
        name: i18n("COMMON.ACTIONS"),
        hide_name: true,
        content: this._actions_tmpl(),
        sortable: false,
        size: "4rem"
      });
      return columns;
    },
    ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    )
  );
  all_start_modules = computed(
    () => {
      const list = this.list();
      return list.length > 0 && list.every((item) => !!item.start_modules);
    },
    ...ngDevMode ? [{ debugName: "all_start_modules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setAllStartModules(value) {
    this.list.set(this.list().map((item) => __spreadProps(__spreadValues({}, item), {
      start_modules: value
    })));
  }
  /** Replace only the edited row. Other rows keep their references. */
  updateItem(index, field, value) {
    const list = [...this.list()];
    list[index] = __spreadProps(__spreadValues({}, list[index]), { [field]: value });
    this.list.set(list);
  }
  removeItem(index) {
    this.list.set(this.list().filter((_, item_index) => item_index !== index));
  }
  isMissing(row, field) {
    const value = row[field];
    return this.required_fields().includes(field) && (value === void 0 || value === null || value === "");
  }
  canSave() {
    return this.list().length > 0 && this.validation_errors().length === 0;
  }
  save() {
    if (this.canSave()) {
      this.next.emit();
    }
  }
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["bulk-item-list"]], viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._input_tmpl, _c0, 5)(ctx._start_tmpl, _c1, 5)(ctx._actions_tmpl, _c2, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, inputs: { list: [1, "list"], fields: [1, "fields"], required_fields: [1, "required_fields"], validation_errors: [1, "validation_errors"], duplicate_warnings: [1, "duplicate_warnings"], show_start_modules: [1, "show_start_modules"] }, outputs: { list: "listChange", next: "next", previous: "previous" }, decls: 33, vars: 17, consts: [["input", ""], ["start", ""], ["actions", ""], [1, "bg-base-100", "border-base-200", "mb-4", "grid", "gap-3", "rounded-sm", "border", "p-4", "text-sm", "md:grid-cols-3"], [1, "text-base-content/60", "tracking-wide", "uppercase"], [1, "text-lg", "font-medium"], [1, "text-error", "text-lg", "font-medium"], [1, "text-success", "text-lg", "font-medium"], [1, "text-warning", "text-lg", "font-medium"], [1, "mb-4", "grid", "gap-2", "text-sm", "md:grid-cols-2"], [1, "flex", "min-h-80", "max-w-full", "flex-1", "text-sm"], [3, "virtual_row_height", "data", "columns"], [1, "mt-4", "flex", "items-center", "space-x-2", "text-sm"], [1, "bg-base-100", "border-base-200", "fixed", "right-0", "bottom-0", "left-0", "z-20", "flex", "items-center", "justify-end", "space-x-4", "border-t", "px-4", "py-4", "shadow-lg"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click", "disabled"], [1, "border-error/40", "bg-error/10", "rounded-sm", "border", "p-3"], [1, "border-warning/40", "bg-warning/10", "rounded-sm", "border", "p-3"], [1, "text-error", "mb-1", "font-medium"], [1, "text-warning", "mb-1", "font-medium"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "w-full", "border-l-2", "border-transparent", "bg-transparent", "p-4", "outline-none", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex", "w-full", "items-center", "justify-center", "p-4"], ["type", "checkbox", 3, "click", "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", "title", "Remove row", 1, "text-error", "mx-auto", 3, "click"]], template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "div", 4);
      \u0275\u0275text(3, " Rows ready ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "div", 4);
      \u0275\u0275text(8, " Validation ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, ListComponent_Conditional_9_Template, 2, 1, "div", 6)(10, ListComponent_Conditional_10_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div")(12, "div", 4);
      \u0275\u0275text(13, " Duplicate check ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, ListComponent_Conditional_14_Template, 2, 1, "div", 8)(15, ListComponent_Conditional_15_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(16, ListComponent_Conditional_16_Template, 3, 2, "div", 9);
      \u0275\u0275elementStart(17, "div", 10);
      \u0275\u0275element(18, "simple-table", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, ListComponent_Conditional_19_Template, 4, 1, "label", 12);
      \u0275\u0275elementStart(20, "div", 13)(21, "button", 14);
      \u0275\u0275listener("click", function ListComponent_Template_button_click_21_listener() {
        return ctx.previous.emit();
      });
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 15);
      \u0275\u0275listener("click", function ListComponent_Template_button_click_24_listener() {
        return ctx.save();
      });
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, ListComponent_ng_template_27_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(29, ListComponent_ng_template_29_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(31, ListComponent_ng_template_31_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.list().length);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.validation_errors().length ? 9 : 10);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.duplicate_warnings().length ? 14 : 15);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.validation_errors().length || ctx.duplicate_warnings().length ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("min-width", 12.5 * (ctx.fields().length + (ctx.show_start_modules() ? 1 : 0) + 1) + "rem");
      \u0275\u0275property("virtual_row_height", 56)("data", ctx.list())("columns", ctx.columns());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.show_start_modules() ? 19 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 13, "COMMON.BACK"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canSave());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 15, "COMMON.SAVE_ITEMS"), " ");
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgModel,
    MatRippleModule,
    MatRipple,
    SimpleTableComponent,
    IconComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n/*# sourceMappingURL=list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-list", template: `
        <div
            class="bg-base-100 border-base-200 mb-4 grid gap-3 rounded-sm border p-4 text-sm md:grid-cols-3"
        >
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Rows ready
                </div>
                <div class="text-lg font-medium">{{ list().length }}</div>
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Validation
                </div>
                @if (validation_errors().length) {
                    <div class="text-error text-lg font-medium">
                        {{ validation_errors().length }} issue(s)
                    </div>
                } @else {
                    <div class="text-success text-lg font-medium">
                        Ready to save
                    </div>
                }
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Duplicate check
                </div>
                @if (duplicate_warnings().length) {
                    <div class="text-warning text-lg font-medium">
                        {{ duplicate_warnings().length }} warning(s)
                    </div>
                } @else {
                    <div class="text-lg font-medium">No duplicates</div>
                }
            </div>
        </div>
        @if (validation_errors().length || duplicate_warnings().length) {
            <div class="mb-4 grid gap-2 text-sm md:grid-cols-2">
                @if (validation_errors().length) {
                    <div
                        class="border-error/40 bg-error/10 rounded-sm border p-3"
                    >
                        <div class="text-error mb-1 font-medium">
                            Fix before saving
                        </div>
                        @for (
                            error of validation_errors().slice(0, 4);
                            track error
                        ) {
                            <div>{{ error }}</div>
                        }
                    </div>
                }
                @if (duplicate_warnings().length) {
                    <div
                        class="border-warning/40 bg-warning/10 rounded-sm border p-3"
                    >
                        <div class="text-warning mb-1 font-medium">
                            Review duplicates
                        </div>
                        @for (
                            warning of duplicate_warnings().slice(0, 4);
                            track warning
                        ) {
                            <div>{{ warning }}</div>
                        }
                    </div>
                }
            </div>
        }
        <!-- Virtual rows keep large imports to the visible inputs only -->
        <div class="flex min-h-80 max-w-full flex-1 text-sm">
            <simple-table
                [style.min-width]="
                    12.5 *
                        (fields().length + (show_start_modules() ? 1 : 0) + 1) +
                    'rem'
                "
                [virtual_row_height]="56"
                [data]="list()"
                [columns]="columns()"
            />
        </div>
        @if (show_start_modules()) {
            <label class="mt-4 flex items-center space-x-2 text-sm">
                <input
                    type="checkbox"
                    [ngModel]="all_start_modules()"
                    (ngModelChange)="setAllStartModules($event)"
                />
                <span>Start all modules for all systems</span>
            </label>
        }
        <div
            class="bg-base-100 border-base-200 fixed right-0 bottom-0 left-0 z-20 flex items-center justify-end space-x-4 border-t px-4 py-4 shadow-lg"
        >
            <button
                btn
                matRipple
                class="inverse w-36"
                (click)="previous.emit()"
            >
                {{ 'COMMON.BACK' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-36"
                [disabled]="!canSave()"
                (click)="save()"
            >
                {{ 'COMMON.SAVE_ITEMS' | translate }}
            </button>
        </div>
        <ng-template
            #input
            let-row="row"
            let-name="name"
            let-id="key"
            let-index="index"
        >
            <input
                class="w-full border-l-2 border-transparent bg-transparent p-4 outline-none"
                [class.border-error]="isMissing(row, id)"
                [placeholder]="name"
                [ngModel]="row[id]"
                (ngModelChange)="updateItem(index, id, $event)"
            />
        </ng-template>
        <ng-template #start let-row="row" let-index="index">
            <label class="flex w-full items-center justify-center p-4">
                <input
                    type="checkbox"
                    [ngModel]="row['start_modules']"
                    (click)="$event.stopPropagation()"
                    (ngModelChange)="updateItem(index, 'start_modules', $event)"
                />
            </label>
        </ng-template>
        <ng-template #actions let-index="index">
            <button
                icon
                matRipple
                class="text-error mx-auto"
                title="Remove row"
                (click)="removeItem(index); $event.stopPropagation()"
                [attr.aria-label]="'COMMON.DELETE' | translate"
            >
                <icon>delete</icon>
            </button>
        </ng-template>
    `, imports: [
      FormsModule,
      MatRippleModule,
      SimpleTableComponent,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;f201c61baa18ec48;/home/runner/work/backoffice/backoffice/src/app/overlays/bulk-item-modal/list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n/*# sourceMappingURL=list.component.css.map */\n"] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }, { type: Output, args: ["listChange"] }], fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: false }] }], required_fields: [{ type: Input, args: [{ isSignal: true, alias: "required_fields", required: false }] }], validation_errors: [{ type: Input, args: [{ isSignal: true, alias: "validation_errors", required: false }] }], duplicate_warnings: [{ type: Input, args: [{ isSignal: true, alias: "duplicate_warnings", required: false }] }], show_start_modules: [{ type: Input, args: [{ isSignal: true, alias: "show_start_modules", required: false }] }], next: [{ type: Output, args: ["next"] }], previous: [{ type: Output, args: ["previous"] }], _input_tmpl: [{ type: ViewChild, args: ["input", { isSignal: true }] }], _start_tmpl: [{ type: ViewChild, args: ["start", { isSignal: true }] }], _actions_tmpl: [{ type: ViewChild, args: ["actions", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/overlays/bulk-item-modal/list.component.ts", lineNumber: 195 });
})();

// src/app/overlays/bulk-item-modal/match-fields.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MatchFieldsComponent_For_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function MatchFieldsComponent_For_18_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
function MatchFieldsComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 9)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, MatchFieldsComponent_For_18_Conditional_4_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 11)(6, "mat-select", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function MatchFieldsComponent_For_18_Template_mat_select_ngModelChange_6_listener($event) {
      const field_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFieldMapping(field_r2.id, $event));
    });
    \u0275\u0275elementStart(7, "mat-option", 13);
    \u0275\u0275text(8, "Skip field");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MatchFieldsComponent_For_18_For_10_Template, 2, 2, "mat-option", 14, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", field_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r2.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isRequired(field_r2.id) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "" + field_r2.id)("ngModel", ctx_r2.field_mapping()[field_r2.id]);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.source_fields());
  }
}
var MatchFieldsComponent = class _MatchFieldsComponent {
  /** List of bulk items to add */
  list = input(
    void 0,
    ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of fields available for building new item */
  field_list = input(
    [],
    ...ngDevMode ? [{ debugName: "field_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Fields required before items can be created */
  required_fields = input(
    [],
    ...ngDevMode ? [{ debugName: "required_fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** User selected mappings for field mappings */
  mappings = model(
    {},
    ...ngDevMode ? [{ debugName: "mappings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter for mapped changes to list */
  mapping_done = output();
  /** Emitter user want to return to previous step in flow */
  previous = output();
  /** Emitter for changes to user selected field mappings */
  new_mappings = output();
  /** List of fields available to be selected */
  source_fields = signal(
    [],
    ...ngDevMode ? [{ debugName: "source_fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Mapping of raw data fields ids to item fields ids */
  field_mapping = signal(
    {},
    ...ngDevMode ? [{ debugName: "field_mapping" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const mappings = this.mappings();
    if (mappings) {
      this.field_mapping.set(__spreadValues(__spreadValues({}, this.field_mapping()), mappings));
    }
  }
  ngOnChanges(changes) {
    const mappings = this.mappings();
    const list = this.list();
    if (changes.list && list && list.length) {
      this.field_mapping.set({});
      this.source_fields.set(Object.keys(list[0]).map((i) => ({
        id: i,
        name: i.split("_").join(" ")
      })));
      this.source_fields().forEach((field) => {
        const field_id = this.normaliseFieldId(field.id);
        if (this.field_list().find((i) => i.id === field_id)) {
          this.setFieldMapping(field_id, `${field.id}`);
        }
      });
      if (mappings) {
        this.field_mapping.set(__spreadValues(__spreadValues({}, this.field_mapping()), mappings));
      }
    }
    if (changes.mappings && mappings) {
      this.field_mapping.set(__spreadValues(__spreadValues({}, this.field_mapping()), mappings));
    }
  }
  /** Generated the mapped list of items and emit them */
  saveMapping() {
    const mapped_list = this.list().map((item) => {
      const mapped_item = {};
      for (const field of this.field_list()) {
        const id = `${field.id}`;
        mapped_item[id] = item[this.field_mapping()[id]];
      }
      return mapped_item;
    });
    this.mappings.set(__spreadValues({}, this.field_mapping()));
    this.new_mappings.emit(this.mappings());
    this.mapping_done.emit(mapped_list);
  }
  setFieldMapping(field_id, value) {
    this.field_mapping.update((mapping) => __spreadProps(__spreadValues({}, mapping), {
      [field_id]: value
    }));
  }
  mapped_field_count = computed(
    () => {
      const mapping = this.field_mapping();
      return this.field_list().filter((field) => !!mapping[field.id]).length;
    },
    ...ngDevMode ? [{ debugName: "mapped_field_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isRequired(field) {
    return this.required_fields().includes(`${field}`);
  }
  normaliseFieldId(field) {
    return `${field}`.toLowerCase().split(" ").join("_");
  }
  static \u0275fac = function MatchFieldsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatchFieldsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchFieldsComponent, selectors: [["bulk-item-match-fields"]], inputs: { list: [1, "list"], field_list: [1, "field_list"], required_fields: [1, "required_fields"], mappings: [1, "mappings"] }, outputs: { mappings: "mappingsChange", mapping_done: "mapping_done", previous: "previous", new_mappings: "new_mappings" }, features: [\u0275\u0275NgOnChangesFeature], decls: 28, vars: 10, consts: [[1, "bg-base-100", "border-base-200", "mb-4", "grid", "gap-3", "rounded-sm", "border", "p-4", "text-sm", "md:grid-cols-3"], [1, "text-base-content/60", "tracking-wide", "uppercase"], [1, "text-lg", "font-medium"], [1, "-mx-2", "flex", "max-w-full", "flex-wrap", "px-2"], [1, "m-2", "flex", "min-w-[18rem]", "flex-1", "flex-col"], [1, "text-base-content/60", "px-2", "pt-2", "text-xs"], [1, "bg-base-100", "border-base-200", "fixed", "right-0", "bottom-0", "left-0", "z-20", "flex", "items-center", "justify-end", "space-x-4", "border-t", "px-4", "py-4", "shadow-lg"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"], [1, "mb-1", "flex", "items-center", "justify-between", "text-xs", "tracking-wide", "uppercase", 3, "for"], [1, "text-error"], ["appearance", "outline", 1, "no-subscript"], ["placeholder", "Skip field", 3, "ngModelChange", "name", "ngModel"], ["value", ""], [3, "value"]], template: function MatchFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
      \u0275\u0275text(3, " Rows found ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "div", 1);
      \u0275\u0275text(8, " Source columns ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 2);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div")(12, "div", 1);
      \u0275\u0275text(13, " Matched fields ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 2);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 3);
      \u0275\u0275repeaterCreate(17, MatchFieldsComponent_For_18_Template, 11, 5, "div", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 5);
      \u0275\u0275text(20, " Required fields can be mapped here or filled in during review. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 6)(22, "button", 7);
      \u0275\u0275listener("click", function MatchFieldsComponent_Template_button_click_22_listener() {
        return ctx.previous.emit();
      });
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 8);
      \u0275\u0275listener("click", function MatchFieldsComponent_Template_button_click_25_listener() {
        return ctx.saveMapping();
      });
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.list()?.length || 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.source_fields().length, " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.mapped_field_count(), " / ", ctx.field_list().length, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.field_list());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 6, "COMMON.BACK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 8, "COMMON.CONTINUE"), " ");
    }
  }, dependencies: [MatRippleModule, MatRipple, MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchFieldsComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-match-fields", template: `
        <div
            class="bg-base-100 border-base-200 mb-4 grid gap-3 rounded-sm border p-4 text-sm md:grid-cols-3"
        >
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Rows found
                </div>
                <div class="text-lg font-medium">{{ list()?.length || 0 }}</div>
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Source columns
                </div>
                <div class="text-lg font-medium">
                    {{ source_fields().length }}
                </div>
            </div>
            <div>
                <div class="text-base-content/60 tracking-wide uppercase">
                    Matched fields
                </div>
                <div class="text-lg font-medium">
                    {{ mapped_field_count() }} / {{ field_list().length }}
                </div>
            </div>
        </div>
        <div class="-mx-2 flex max-w-full flex-wrap px-2">
            @for (field of field_list(); track field.id) {
                <div class="m-2 flex min-w-[18rem] flex-1 flex-col">
                    <label
                        class="mb-1 flex items-center justify-between text-xs tracking-wide uppercase"
                        [for]="field.id"
                    >
                        <span>{{ field.id }}</span>
                        @if (isRequired(field.id)) {
                            <span class="text-error">Required</span>
                        }
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [name]="'' + field.id"
                            [ngModel]="field_mapping()[field.id]"
                            (ngModelChange)="setFieldMapping(field.id, $event)"
                            placeholder="Skip field"
                        >
                            <mat-option value="">Skip field</mat-option>
                            @for (type of source_fields(); track type.id) {
                                <mat-option [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
        </div>
        <div class="text-base-content/60 px-2 pt-2 text-xs">
            Required fields can be mapped here or filled in during review.
        </div>
        <div
            class="bg-base-100 border-base-200 fixed right-0 bottom-0 left-0 z-20 flex items-center justify-end space-x-4 border-t px-4 py-4 shadow-lg"
        >
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
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], field_list: [{ type: Input, args: [{ isSignal: true, alias: "field_list", required: false }] }], required_fields: [{ type: Input, args: [{ isSignal: true, alias: "required_fields", required: false }] }], mappings: [{ type: Input, args: [{ isSignal: true, alias: "mappings", required: false }] }, { type: Output, args: ["mappingsChange"] }], mapping_done: [{ type: Output, args: ["mapping_done"] }], previous: [{ type: Output, args: ["previous"] }], new_mappings: [{ type: Output, args: ["new_mappings"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchFieldsComponent, { className: "MatchFieldsComponent", filePath: "src/app/overlays/bulk-item-modal/match-fields.component.ts", lineNumber: 108 });
})();

// src/app/overlays/bulk-item-modal/status-list.component.ts
function StatusListComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" (", ctx_r0.error_count(), " failed) ");
  }
}
function StatusListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, StatusListComponent_Conditional_1_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "COMMON.BULK_UPLOADING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.processed_count(), " / ", ctx_r0.list().length, " processed ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error_count() > 0 ? 5 : -1);
  }
}
function StatusListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.completed_count(), " succeeded, ", ctx_r0.error_count(), " failed ");
  }
}
function StatusListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 10);
    \u0275\u0275listener("click", function StatusListComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close_modal.emit());
    });
    \u0275\u0275text(2, " Close ");
    \u0275\u0275elementEnd()();
  }
}
function StatusListComponent_ng_template_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const state_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", state_r3, " ");
  }
}
function StatusListComponent_ng_template_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const state_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classProp("bg-error", state_r3 !== "done")("text-error-content", state_r3 !== "done")("bg-success", state_r3 === "done")("text-success-content", state_r3 === "done");
    \u0275\u0275property("matTooltip", state_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", state_r3 === "done" ? "done" : "close", " ");
  }
}
function StatusListComponent_ng_template_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 17);
  }
}
function StatusListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StatusListComponent_ng_template_8_Conditional_5_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275conditionalCreate(7, StatusListComponent_ng_template_8_Conditional_7_Template, 3, 10, "div", 16);
    \u0275\u0275conditionalCreate(8, StatusListComponent_ng_template_8_Conditional_8_Template, 1, 0, "mat-spinner", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const i_r5 = ctx.index;
    const state_r6 = \u0275\u0275storeLet(\u0275\u0275nextContext().status()[i_r5]());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(state_r6 && state_r6 !== "done" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(state_r6 && state_r6 !== "loading" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(state_r6 === "loading" ? 8 : -1);
  }
}
var BATCH_SIZE = 5;
var StatusListComponent = class _StatusListComponent {
  /** List of bulk items to add */
  list = input(
    [],
    ...ngDevMode ? [{ debugName: "list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Method to save changes to items in the list */
  save = input(
    void 0,
    ...ngDevMode ? [{ debugName: "save" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter for completion status of the item upload */
  done = output();
  /** Emitter to close the modal once the user has reviewed results */
  close_modal = output();
  /**
   * Status of each of the items to be created. One signal per row, so an
   * update re-checks that row only.
   */
  status = computed(
    () => this.list().map(() => signal("")),
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether all items have been processed */
  is_done = signal(
    false,
    ...ngDevMode ? [{ debugName: "is_done" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Count of successfully completed items */
  completed_count = signal(
    0,
    ...ngDevMode ? [{ debugName: "completed_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Count of failed items */
  error_count = signal(
    0,
    ...ngDevMode ? [{ debugName: "error_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  processed_count() {
    return this.completed_count() + this.error_count();
  }
  progress() {
    const total = this.list().length || 1;
    return Math.round(this.processed_count() / total * 100);
  }
  ngOnChanges(changes) {
    if (changes.list && this.list()) {
      this.saveItems();
    }
  }
  async saveItems() {
    try {
      const items = this.list();
      const results = new Array(items.length);
      let success_count = 0;
      let fail_count = 0;
      for (let i = 0; i < items.length; i += BATCH_SIZE) {
        const batch = items.slice(i, i + BATCH_SIZE);
        const batch_promises = batch.map(async (item, batch_index) => {
          const index = i + batch_index;
          this.setStatus(index, "loading");
          try {
            const saved_item = await this.save()(__spreadProps(__spreadValues({}, item), {
              id: ""
            }));
            this.setStatus(index, "done");
            success_count++;
            this.completed_count.set(success_count);
            results[index] = saved_item;
          } catch (err) {
            const message = `Error: ${await readError(err)}`;
            this.setStatus(index, message);
            console.error(`Failed to save item ${index}:`, err);
            notifyError(message);
            fail_count++;
            this.error_count.set(fail_count);
          }
        });
        await Promise.all(batch_promises);
      }
      this.is_done.set(true);
      const clean_list = results.filter((item) => !!item);
      this.done.emit(clean_list);
    } catch (e) {
      console.error(e);
    }
  }
  setStatus(index, value) {
    this.status()[index].set(value);
  }
  static \u0275fac = function StatusListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusListComponent, selectors: [["bulk-item-status-list"]], inputs: { list: [1, "list"], save: [1, "save"] }, outputs: { done: "done", close_modal: "close_modal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 11, consts: [["row_template", ""], [1, "flex", "h-full", "min-h-0", "w-full", "flex-col", "items-center", "pb-4"], [1, "mb-2", "text-sm", "font-medium"], [1, "bg-base-200", "mb-4", "h-2", "w-full", "overflow-hidden", "rounded-full"], [1, "bg-info", "h-full", "rounded-full", "transition-all"], [1, "min-h-0", "w-full", "flex-1"], [3, "items", "item_size", "item_template"], [1, "bg-base-100", "border-base-200", "fixed", "right-0", "bottom-0", "left-0", "z-20", "flex", "justify-end", "border-t", "px-4", "py-4", "shadow-lg"], [1, "info", "font-medium"], [1, "text-base-content/60", "mb-2", "text-sm"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"], [1, "border-base-200", "flex", "h-16", "w-full", "items-center", "rounded-sm", "border", "p-2"], [1, "flex", "min-w-0", "flex-1", "flex-col", "justify-center", "px-2"], [1, "name", "truncate"], [1, "text-error", "truncate", "text-xs"], [1, "status"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-2xl", "shadow-sm", 3, "bg-error", "text-error-content", "bg-success", "text-success-content", "matTooltip"], ["diameter", "24"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-2xl", "shadow-sm", 3, "matTooltip"]], template: function StatusListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, StatusListComponent_Conditional_1_Template, 6, 6)(2, StatusListComponent_Conditional_2_Template, 2, 2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "virtual-scroll", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, StatusListComponent_Conditional_7_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, StatusListComponent_ng_template_8_Template, 9, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const row_template_r7 = \u0275\u0275reference(9);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.is_done() ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.progress(), "%");
      \u0275\u0275classProp("bg-success", ctx.is_done() && ctx.error_count() === 0)("bg-warning", ctx.is_done() && ctx.error_count() > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("items", ctx.list())("item_size", 64)("item_template", row_template_r7);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.is_done() ? 7 : -1);
    }
  }, dependencies: [
    LoadingLabelDirective,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    VirtualScrollComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=status-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusListComponent, [{
    type: Component,
    args: [{ selector: "bulk-item-status-list", template: `
        <div class="flex h-full min-h-0 w-full flex-col items-center pb-4">
            @if (!is_done()) {
                <div class="info font-medium">
                    {{ 'COMMON.BULK_UPLOADING' | translate }}
                </div>
                <div class="text-base-content/60 mb-2 text-sm">
                    {{ processed_count() }} / {{ list().length }} processed
                    @if (error_count() > 0) {
                        ({{ error_count() }} failed)
                    }
                </div>
            } @else {
                <div class="mb-2 text-sm font-medium">
                    {{ completed_count() }} succeeded, {{ error_count() }}
                    failed
                </div>
            }
            <div
                class="bg-base-200 mb-4 h-2 w-full overflow-hidden rounded-full"
            >
                <div
                    class="bg-info h-full rounded-full transition-all"
                    [class.bg-success]="is_done() && error_count() === 0"
                    [class.bg-warning]="is_done() && error_count() > 0"
                    [style.width.%]="progress()"
                ></div>
            </div>
            <!-- Virtual rows keep large imports to the visible rows only -->
            <div class="min-h-0 w-full flex-1">
                <virtual-scroll
                    [items]="list()"
                    [item_size]="64"
                    [item_template]="row_template"
                />
            </div>
            @if (is_done()) {
                <div
                    class="bg-base-100 border-base-200 fixed right-0 bottom-0 left-0 z-20 flex justify-end border-t px-4 py-4 shadow-lg"
                >
                    <button
                        btn
                        matRipple
                        class="w-36"
                        (click)="close_modal.emit()"
                    >
                        Close
                    </button>
                </div>
            }
        </div>
        <ng-template #row_template let-item="item" let-i="index">
            @let state = status()[i]();
            <div
                class="border-base-200 flex h-16 w-full items-center rounded-sm border p-2"
            >
                <div class="flex min-w-0 flex-1 flex-col justify-center px-2">
                    <div class="name truncate">{{ item.name }}</div>
                    @if (state && state !== 'done') {
                        <div class="text-error truncate text-xs">
                            {{ state }}
                        </div>
                    }
                </div>
                <div class="status">
                    @if (state && state !== 'loading') {
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow-sm"
                            [class.bg-error]="state !== 'done'"
                            [class.text-error-content]="state !== 'done'"
                            [class.bg-success]="state === 'done'"
                            [class.text-success-content]="state === 'done'"
                            [matTooltip]="state"
                        >
                            <icon>
                                {{ state === 'done' ? 'done' : 'close' }}
                            </icon>
                        </div>
                    }
                    @if (state === 'loading') {
                        <mat-spinner diameter="24" />
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [
      LoadingLabelDirective,
      MatRippleModule,
      MatProgressSpinnerModule,
      IconComponent,
      MatTooltipModule,
      TranslatePipe,
      VirtualScrollComponent
    ], styles: ["/* angular:styles/component:css;660d4337199ef323;/home/runner/work/backoffice/backoffice/src/app/overlays/bulk-item-modal/status-list.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=status-list.component.css.map */\n"] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], done: [{ type: Output, args: ["done"] }], close_modal: [{ type: Output, args: ["close_modal"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusListComponent, { className: "StatusListComponent", filePath: "src/app/overlays/bulk-item-modal/status-list.component.ts", lineNumber: 129 });
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
  role: Nt.Device,
  notes: "Clone wars",
  ignore_connected: false
};
var DRIVER_TEMPLATE = {
  name: "A Driver",
  description: "In a galaxy far far away...",
  module_name: "SteamShip",
  role: Nt.Logic,
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
  name: "Jane Smith",
  authority_id: "authority-abc123",
  email: "jane.smith@place.tech",
  phone: "+612000000000",
  country: "Australia",
  image: "",
  metadata: "",
  login_name: "jane.smith",
  staff_id: "PERSON_12345",
  first_name: "Jane",
  last_name: "Smith",
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
var _forTrack02 = ($index, $item) => $item.id;
function BulkItemModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
  }
}
function BulkItemModalComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_21_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", \u0275$index_21_r2 <= ctx_r2.currentStepIndex())("text-info-content", \u0275$index_21_r2 <= ctx_r2.currentStepIndex())("font-medium", ctx_r2.flow_step() === step_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_21_r2 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.label);
  }
}
function BulkItemModalComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-status-list", 13);
    \u0275\u0275listener("done", function BulkItemModalComponent_Case_12_Template_bulk_item_status_list_done_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.done());
    })("close_modal", function BulkItemModalComponent_Case_12_Template_bulk_item_status_list_close_modal_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("save", ctx_r2.save)("list", ctx_r2.item_list());
  }
}
function BulkItemModalComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-list", 14);
    \u0275\u0275twoWayListener("listChange", function BulkItemModalComponent_Case_13_Template_bulk_item_list_listChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.item_list, $event) || (ctx_r2.item_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("next", function BulkItemModalComponent_Case_13_Template_bulk_item_list_next_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showStatus());
    })("previous", function BulkItemModalComponent_Case_13_Template_bulk_item_list_previous_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo("match-fields"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("list", ctx_r2.item_list);
    \u0275\u0275property("fields", ctx_r2.available_fields)("required_fields", ctx_r2.required_fields)("validation_errors", ctx_r2.validation_errors())("duplicate_warnings", ctx_r2.duplicate_warnings())("show_start_modules", ctx_r2.is_system);
  }
}
function BulkItemModalComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-match-fields", 15);
    \u0275\u0275listener("new_mappings", function BulkItemModalComponent_Case_14_Template_bulk_item_match_fields_new_mappings_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mappings = $event);
    })("mapping_done", function BulkItemModalComponent_Case_14_Template_bulk_item_match_fields_mapping_done_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleList($event, true));
    })("previous", function BulkItemModalComponent_Case_14_Template_bulk_item_match_fields_previous_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo("upload"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("list", ctx_r2.data_list)("field_list", ctx_r2.available_fields)("required_fields", ctx_r2.required_fields)("mappings", ctx_r2.mappings);
  }
}
function BulkItemModalComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "bulk-item-csv-upload", 16);
    \u0275\u0275listener("list", function BulkItemModalComponent_Case_15_Template_bulk_item_csv_upload_list_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleList($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("template", ctx_r2.template);
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
  flow_step = signal(
    "upload",
    ...ngDevMode ? [{ debugName: "flow_step" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Ordered steps shown to the user */
  flow_steps = [
    { id: "upload", label: "Upload" },
    { id: "match-fields", label: "Match" },
    { id: "list", label: "Review" },
    { id: "status", label: "Create" }
  ];
  /** List of items to bulk add */
  item_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "item_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of raw data to use for bulk add */
  data_list = [];
  /** Whether requests are being processed */
  loading = false;
  /** Template data for use */
  template = [];
  mappings = {};
  available_fields = [];
  /** Required fields for validation depending on resource type */
  _required_fields = [];
  get type() {
    return this._data.name;
  }
  get save() {
    return this._data.save;
  }
  get is_system() {
    return this._data.constr === Us;
  }
  get required_fields() {
    return this._required_fields;
  }
  /** Missing required fields, checked again only when the list changes */
  validation_errors = computed(
    () => this.validateItems(),
    ...ngDevMode ? [{ debugName: "validation_errors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Duplicate names or emails, checked again only when the list changes */
  duplicate_warnings = computed(
    () => this.findDuplicates(),
    ...ngDevMode ? [{ debugName: "duplicate_warnings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.available_fields = this.getAvailableFields();
    this.template = this.generateTemplate();
    this._required_fields = this.getRequiredFields();
  }
  /**
   * Handle list data
   * @param data List of data to process
   */
  handleList(data, is_mapped = false) {
    if (!data.length) {
      notifyWarn("No rows were found in the uploaded file.");
      return;
    }
    if (is_mapped) {
      const Resource = this._data.constr;
      this.item_list.set(data.map((item) => {
        return new Resource(item);
      }));
      this.goTo("list");
    } else {
      this.mappings = {};
      this.data_list = data;
      this.goTo("match-fields");
    }
  }
  showStatus() {
    if (this.validation_errors().length > 0) {
      notifyError("Fix the highlighted validation errors before saving.");
      return;
    }
    if (this.duplicate_warnings().length > 0) {
      notifyWarn("Duplicate values were found. Saving will continue.");
    }
    this.loading = true;
    this._dialog_ref.disableClose = true;
    this.goTo("status");
  }
  done() {
    this.loading = false;
    this._dialog_ref.disableClose = false;
  }
  close() {
    this._dialog_ref.close();
  }
  goTo(step) {
    this.flow_step.set(step);
    this.setDialogSize(step);
  }
  currentStepIndex() {
    return this.flow_steps.findIndex((step) => step.id === this.flow_step());
  }
  setDialogSize(step) {
    if (step === "upload") {
      this._dialog_ref.updateSize("", "");
    } else {
      this._dialog_ref.updateSize("100vw", "100vh");
    }
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
      case Us:
        return [new Us(SYSTEM_TEMPLATE).toJSON()];
      case Es:
        return [new Es(MODULE_TEMPLATE).toJSON()];
      case qs:
        return [new qs(DRIVER_TEMPLATE).toJSON()];
      case Dn:
        return [new Dn(USER_TEMPLATE).toJSON()];
      case en:
        return [new en(ZONE_TEMPLATE).toJSON()];
    }
  }
  getRequiredFields() {
    switch (this._data.constr) {
      case Dn:
        return ["email", "authority_id"];
      case Us:
        return ["name"];
      case Es:
        return ["driver_id"];
      case qs:
        return ["name", "module_name", "role"];
      case en:
        return ["name"];
      default:
        return [];
    }
  }
  validateItems() {
    const errors = [];
    this.item_list().forEach((item, index) => {
      for (const field of this._required_fields) {
        const value = item[field];
        if (value === void 0 || value === null || value === "") {
          errors.push(`Row ${index + 1}: Missing required field "${field}"`);
        }
      }
    });
    return errors;
  }
  findDuplicates() {
    const warnings = [];
    const seen_keys = /* @__PURE__ */ new Map();
    const dedup_field = this._data.constr === Dn ? "email" : "name";
    this.item_list().forEach((item, index) => {
      const key = String(item[dedup_field] || "").toLowerCase().trim();
      if (key && seen_keys.has(key)) {
        warnings.push(`Row ${index + 1}: Duplicate "${dedup_field}" value "${key}" (same as row ${seen_keys.get(key) + 1})`);
      } else if (key) {
        seen_keys.set(key, index);
      }
    });
    return warnings;
  }
  static \u0275fac = function BulkItemModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BulkItemModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BulkItemModalComponent, selectors: [["app-bulk-item-modal"]], hostVars: 2, hostBindings: function BulkItemModalComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("fullscreen", ctx.flow_step() !== "upload");
    }
  }, decls: 16, vars: 14, consts: [[1, "bg-base-200", "m-4", "mb-2", "flex", "items-center", "justify-between", "rounded-sm", "px-4", "py-3"], ["appDialogTitle", "", 1, "text-xl", "font-medium"], [1, "text-base-content/60", "text-sm"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "mx-4", "mb-4", "grid", "grid-cols-4", "overflow-hidden", "rounded-sm", "text-xs"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-center", "gap-2", "border", "px-3", "py-2", "tracking-wide", "uppercase", 3, "bg-info", "text-info-content", "font-medium"], [1, "min-h-0", "overflow-auto", "px-4"], [3, "save", "list"], [3, "list", "fields", "required_fields", "validation_errors", "duplicate_warnings", "show_start_modules"], [3, "list", "field_list", "required_fields", "mappings"], [3, "template"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-center", "gap-2", "border", "px-3", "py-2", "tracking-wide", "uppercase"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "border", "text-[0.7rem]"], [3, "done", "close_modal", "save", "list"], [3, "listChange", "next", "previous", "list", "fields", "required_fields", "validation_errors", "duplicate_warnings", "show_start_modules"], [3, "new_mappings", "mapping_done", "previous", "list", "field_list", "required_fields", "mappings"], [3, "list", "template"]], template: function BulkItemModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h3", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, " Upload a TSV or CSV, match columns, review rows, then create the items. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, BulkItemModalComponent_Conditional_7_Template, 4, 3, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nav", 4);
      \u0275\u0275repeaterCreate(9, BulkItemModalComponent_For_10_Template, 5, 8, "div", 5, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "main", 6);
      \u0275\u0275conditionalCreate(12, BulkItemModalComponent_Case_12_Template, 1, 2, "bulk-item-status-list", 7)(13, BulkItemModalComponent_Case_13_Template, 1, 6, "bulk-item-list", 8)(14, BulkItemModalComponent_Case_14_Template, 1, 4, "bulk-item-match-fields", 9)(15, BulkItemModalComponent_Case_15_Template, 1, 1, "bulk-item-csv-upload", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 9, "COMMON.BULK_ADD", \u0275\u0275pureFunction1(12, _c02, ctx.type)), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.flow_steps);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("flex-1", ctx.flow_step() !== "upload")("pb-4", ctx.flow_step() === "upload")("pb-24", ctx.flow_step() !== "upload");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_6_0 = ctx.flow_step()) === "status" ? 12 : tmp_6_0 === "list" ? 13 : tmp_6_0 === "match-fields" ? 14 : 15);
    }
  }, dependencies: [
    DialogTitleDirective,
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
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.fullscreen[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=bulk-item-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkItemModalComponent, [{
    type: Component,
    args: [{ selector: "app-bulk-item-modal", host: {
      "[class.fullscreen]": "flow_step() !== 'upload'"
    }, template: `
        <div
            class="bg-base-200 m-4 mb-2 flex items-center justify-between rounded-sm px-4 py-3"
        >
            <div>
                <h3 appDialogTitle class="text-xl font-medium">
                    {{ 'COMMON.BULK_ADD' | translate: { type: type } }}
                </h3>
                <p class="text-base-content/60 text-sm">
                    Upload a TSV or CSV, match columns, review rows, then create
                    the items.
                </p>
            </div>
            @if (!loading) {
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            }
        </div>
        <nav
            class="mx-4 mb-4 grid grid-cols-4 overflow-hidden rounded-sm text-xs"
        >
            @for (step of flow_steps; track step.id; let i = $index) {
                <div
                    class="border-base-300 bg-base-100 flex items-center justify-center gap-2 border px-3 py-2 tracking-wide uppercase"
                    [class.bg-info]="i <= currentStepIndex()"
                    [class.text-info-content]="i <= currentStepIndex()"
                    [class.font-medium]="flow_step() === step.id"
                >
                    <span
                        class="flex h-5 w-5 items-center justify-center rounded-full border text-[0.7rem]"
                    >
                        {{ i + 1 }}
                    </span>
                    <span>{{ step.label }}</span>
                </div>
            }
        </nav>
        <main
            class="min-h-0 overflow-auto px-4"
            [class.flex-1]="flow_step() !== 'upload'"
            [class.pb-4]="flow_step() === 'upload'"
            [class.pb-24]="flow_step() !== 'upload'"
        >
            @switch (flow_step()) {
                @case ('status') {
                    <bulk-item-status-list
                        [save]="save"
                        [list]="item_list()"
                        (done)="done()"
                        (close_modal)="close()"
                    />
                }
                @case ('list') {
                    <bulk-item-list
                        [(list)]="item_list"
                        [fields]="available_fields"
                        [required_fields]="required_fields"
                        [validation_errors]="validation_errors()"
                        [duplicate_warnings]="duplicate_warnings()"
                        [show_start_modules]="is_system"
                        (next)="showStatus()"
                        (previous)="goTo('match-fields')"
                    />
                }
                @case ('match-fields') {
                    <bulk-item-match-fields
                        [list]="data_list"
                        [field_list]="available_fields"
                        [required_fields]="required_fields"
                        [mappings]="mappings"
                        (new_mappings)="mappings = $event"
                        (mapping_done)="handleList($event, true)"
                        (previous)="goTo('upload')"
                    />
                }
                @default {
                    <bulk-item-csv-upload
                        [template]="template"
                        (list)="handleList($event)"
                    />
                }
            }
        </main>
    `, imports: [
      DialogTitleDirective,
      MatDialogModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      StatusListComponent,
      ListComponent,
      MatchFieldsComponent,
      CsvUploadComponent
    ], styles: ["/* angular:styles/component:css;0da3bd852533671c;/home/runner/work/backoffice/backoffice/src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n:host.fullscreen {\n  height: 100%;\n}\n/*# sourceMappingURL=bulk-item-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkItemModalComponent, { className: "BulkItemModalComponent", filePath: "src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts", lineNumber: 170 });
})();
export {
  BulkItemModalComponent
};
//# debugId=021ff521-4d5a-52cb-9bc1-5d9092e4b082
//# sourceMappingURL=chunk-44DXQLMU.js.map
