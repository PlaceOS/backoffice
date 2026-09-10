import {
  CONFIRM_METADATA,
  ConfirmModalComponent,
  describeError
} from "./chunk-HD77HKEN.js";
import {
  SimpleTableComponent
} from "./chunk-QZWPSKLY.js";
import {
  BackofficeUsersService
} from "./chunk-DE6WUI2H.js";
import {
  SettingsService
} from "./chunk-6E3FUNTM.js";
import {
  NavigationEnd,
  Router
} from "./chunk-5XY3WE42.js";
import {
  waitForEvent,
  waitForSignalValue
} from "./chunk-UPJHMA72.js";
import {
  canAccessSection,
  canUseSupportAction,
  hasSupportRole,
  hasSupportSubsystem,
  isSubsystemUser,
  querySupportModules,
  querySupportSystems,
  querySupportZones,
  selectSupportGroup,
  selected_support_group_id
} from "./chunk-PKJVK52W.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWPPAGOZ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPIXDTWN.js";
import {
  HotkeysService
} from "./chunk-4FMA4IVG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HAY6XAXW.js";
import {
  notifyError,
  notifySuccess,
  notifyWarn
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-Q2BV2GZB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NHXLW3Z3.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-WXUWESJ2.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-7NXN4G42.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-4XBU66YH.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-O5B6FUTE.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-N557G3HM.js";
import {
  IconComponent
} from "./chunk-ETM3LPJ2.js";
import {
  MatRipple
} from "./chunk-ISKFUBZN.js";
import {
  csvToJson,
  downloadFile,
  jsonToCsv,
  log,
  unique
} from "./chunk-7A2HMJBQ.js";
import {
  $a,
  As,
  Ba,
  Cn,
  Component,
  Dc,
  Eu,
  Fa,
  Ga,
  Hc,
  Input,
  Is,
  Jo,
  Ka,
  Ko,
  La,
  Mu,
  Nc,
  Nt,
  Output,
  Pe,
  Qo,
  Rs,
  Ru,
  Service,
  Tu,
  Uu,
  V,
  Va,
  ViewChild,
  Wo,
  Xa,
  Xo,
  Xt,
  Ya,
  Yi,
  Yo,
  Za,
  Zo,
  _c,
  ah,
  ba,
  computed,
  dc,
  dh,
  eu,
  f,
  fc,
  ga,
  hh,
  inject,
  input,
  ja,
  ka,
  ko,
  la,
  lc,
  lh,
  model,
  nu,
  output,
  pc,
  pe,
  qo,
  setClassMetadata,
  signal,
  tu,
  uh,
  ur,
  va,
  viewChild,
  wc,
  wn,
  xa,
  zc,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineService,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
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
} from "./chunk-Z45QSLBL.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
      const list = csvToJson(data, seperator) || [];
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
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent
    ] }]
  }], null, { template: [{ type: Input, args: [{ isSignal: true, alias: "template", required: false }] }], list: [{ type: Output, args: ["list"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CsvUploadComponent, { className: "CsvUploadComponent", filePath: "src/app/overlays/bulk-item-modal/csv-upload.component.ts", lineNumber: 82 });
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
    \u0275\u0275listener("ngModelChange", function ListComponent_Conditional_19_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setAllStartModules($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Start all modules for all systems");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.all_start_modules);
    \u0275\u0275control();
  }
}
function ListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 21);
    \u0275\u0275listener("ngModelChange", function ListComponent_ng_template_27_Template_input_ngModelChange_0_listener($event) {
      const ctx_r5 = \u0275\u0275restoreView(_r5);
      const id_r7 = ctx_r5.key;
      const index_r8 = ctx_r5.index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateItem(index_r8, id_r7, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
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
    \u0275\u0275listener("click", function ListComponent_ng_template_29_Template_input_click_1_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function ListComponent_ng_template_29_Template_input_ngModelChange_1_listener($event) {
      const index_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateItem(index_r12, "start_modules", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275listener("click", function ListComponent_ng_template_31_Template_button_click_0_listener($event) {
      const index_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.removeItem(index_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
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
        name: " ",
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
  get all_start_modules() {
    const list = this.list();
    return list.length > 0 && list.every((item) => !!item.start_modules);
  }
  setAllStartModules(value) {
    this.list.set(this.list().map((item) => __spreadProps(__spreadValues({}, item), {
      start_modules: value
    })));
  }
  updateItem(index, field, value) {
    this.list.set(this.list().map((item, item_index) => item_index === index ? __spreadProps(__spreadValues({}, item), { [field]: value }) : item));
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
  }, inputs: { list: [1, "list"], fields: [1, "fields"], required_fields: [1, "required_fields"], validation_errors: [1, "validation_errors"], duplicate_warnings: [1, "duplicate_warnings"], show_start_modules: [1, "show_start_modules"] }, outputs: { list: "listChange", next: "next", previous: "previous" }, decls: 33, vars: 16, consts: [["input", ""], ["start", ""], ["actions", ""], [1, "bg-base-100", "border-base-200", "mb-4", "grid", "gap-3", "rounded-sm", "border", "p-4", "text-sm", "md:grid-cols-3"], [1, "text-base-content/60", "tracking-wide", "uppercase"], [1, "text-lg", "font-medium"], [1, "text-error", "text-lg", "font-medium"], [1, "text-success", "text-lg", "font-medium"], [1, "text-warning", "text-lg", "font-medium"], [1, "mb-4", "grid", "gap-2", "text-sm", "md:grid-cols-2"], [1, "flex", "max-w-full", "flex-wrap", "text-sm"], [3, "data", "columns"], [1, "mt-4", "flex", "items-center", "space-x-2", "text-sm"], [1, "bg-base-100", "border-base-200", "fixed", "right-0", "bottom-0", "left-0", "z-20", "flex", "items-center", "justify-end", "space-x-4", "border-t", "px-4", "py-4", "shadow-lg"], ["btn", "", "matRipple", "", 1, "inverse", "w-36", 3, "click"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click", "disabled"], [1, "border-error/40", "bg-error/10", "rounded-sm", "border", "p-3"], [1, "border-warning/40", "bg-warning/10", "rounded-sm", "border", "p-3"], [1, "text-error", "mb-1", "font-medium"], [1, "text-warning", "mb-1", "font-medium"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "w-full", "border-l-2", "border-transparent", "bg-transparent", "p-4", "outline-none", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex", "w-full", "items-center", "justify-center", "p-4"], ["type", "checkbox", 3, "click", "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", "title", "Remove row", 1, "text-error", "mx-auto", 3, "click"]], template: function ListComponent_Template(rf, ctx) {
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
      \u0275\u0275template(27, ListComponent_ng_template_27_Template, 1, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(29, ListComponent_ng_template_29_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(31, ListComponent_ng_template_31_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
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
      \u0275\u0275property("data", ctx.list())("columns", ctx.columns());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.show_start_modules() ? 19 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 12, "COMMON.BACK"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canSave());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 14, "COMMON.SAVE_ITEMS"), " ");
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
  ], encapsulation: 2 });
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
        <div class="flex max-w-full flex-wrap text-sm">
            <simple-table
                [style.min-width]="
                    12.5 *
                        (fields().length + (show_start_modules() ? 1 : 0) + 1) +
                    'rem'
                "
                [data]="list()"
                [columns]="columns()"
            />
        </div>
        @if (show_start_modules()) {
            <label class="mt-4 flex items-center space-x-2 text-sm">
                <input
                    type="checkbox"
                    [ngModel]="all_start_modules"
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
    ] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }, { type: Output, args: ["listChange"] }], fields: [{ type: Input, args: [{ isSignal: true, alias: "fields", required: false }] }], required_fields: [{ type: Input, args: [{ isSignal: true, alias: "required_fields", required: false }] }], validation_errors: [{ type: Input, args: [{ isSignal: true, alias: "validation_errors", required: false }] }], duplicate_warnings: [{ type: Input, args: [{ isSignal: true, alias: "duplicate_warnings", required: false }] }], show_start_modules: [{ type: Input, args: [{ isSignal: true, alias: "show_start_modules", required: false }] }], next: [{ type: Output, args: ["next"] }], previous: [{ type: Output, args: ["previous"] }], _input_tmpl: [{ type: ViewChild, args: ["input", { isSignal: true }] }], _start_tmpl: [{ type: ViewChild, args: ["start", { isSignal: true }] }], _actions_tmpl: [{ type: ViewChild, args: ["actions", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src/app/overlays/bulk-item-modal/list.component.ts", lineNumber: 182 });
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
    \u0275\u0275listener("ngModelChange", function MatchFieldsComponent_For_18_Template_mat_select_ngModelChange_6_listener($event) {
      const field_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFieldMapping(field_r2.id, $event));
    });
    \u0275\u0275elementStart(7, "mat-option", 13);
    \u0275\u0275text(8, "Skip field");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MatchFieldsComponent_For_18_For_10_Template, 2, 2, "mat-option", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
  mappedFieldCount() {
    return this.field_list().filter((field) => !!this.field_mapping[field.id]).length;
  }
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
      \u0275\u0275textInterpolate2(" ", ctx.mappedFieldCount(), " / ", ctx.field_list().length, " ");
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
                    {{ mappedFieldCount() }} / {{ field_list().length }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchFieldsComponent, { className: "MatchFieldsComponent", filePath: "src/app/overlays/bulk-item-modal/match-fields.component.ts", lineNumber: 107 });
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
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
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
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.completed_count(), " succeeded, ", ctx_r0.error_count(), " failed ");
  }
}
function StatusListComponent_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_23_r2 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.status()[\u0275$index_23_r2], " ");
  }
}
function StatusListComponent_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_23_r2 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-error", ctx_r0.status()[\u0275$index_23_r2] !== "done")("text-error-content", ctx_r0.status()[\u0275$index_23_r2] !== "done")("bg-success", ctx_r0.status()[\u0275$index_23_r2] === "done")("text-success-content", ctx_r0.status()[\u0275$index_23_r2] === "done");
    \u0275\u0275property("matTooltip", ctx_r0.status()[\u0275$index_23_r2]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.status()[\u0275$index_23_r2] === "done" ? "done" : "close", " ");
  }
}
function StatusListComponent_For_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
}
function StatusListComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StatusListComponent_For_7_Conditional_4_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275conditionalCreate(6, StatusListComponent_For_7_Conditional_6_Template, 3, 10, "div", 13);
    \u0275\u0275conditionalCreate(7, StatusListComponent_For_7_Conditional_7_Template, 1, 0, "mat-spinner", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_23_r2 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.status()[\u0275$index_23_r2] && ctx_r0.status()[\u0275$index_23_r2] !== "done" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.status()[\u0275$index_23_r2] && ctx_r0.status()[\u0275$index_23_r2] !== "loading" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.status()[\u0275$index_23_r2] === "loading" ? 7 : -1);
  }
}
function StatusListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 16);
    \u0275\u0275listener("click", function StatusListComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close_modal.emit());
    });
    \u0275\u0275text(2, " Close ");
    \u0275\u0275elementEnd()();
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
  /** Status of each of the items to be created */
  status = signal(
    {},
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
            const message = this.formatError(err);
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
    this.status.update((status) => __spreadProps(__spreadValues({}, status), { [index]: value }));
  }
  formatError(err) {
    if (err && typeof err === "object") {
      const http_err = err;
      const status = http_err.status || "";
      const status_text = http_err.statusText || "";
      const message = http_err.message || (http_err.error && typeof http_err.error === "object" && http_err.error.message ? http_err.error.message : "");
      if (status || status_text) {
        return `Error: ${status} ${status_text}`.trim();
      }
      if (message) {
        return `Error: ${message}`;
      }
    }
    return `Error: ${String(err)}`;
  }
  static \u0275fac = function StatusListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusListComponent, selectors: [["bulk-item-status-list"]], inputs: { list: [1, "list"], save: [1, "save"] }, outputs: { done: "done", close_modal: "close_modal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 9, vars: 8, consts: [[1, "flex", "w-full", "flex-col", "items-center", "pb-4"], [1, "mb-2", "text-sm", "font-medium"], [1, "bg-base-200", "mb-4", "h-2", "w-full", "overflow-hidden", "rounded-full"], [1, "bg-info", "h-full", "rounded-full", "transition-all"], [1, "flex", "w-full", "flex-col"], [1, "border-base-200", "flex", "w-full", "items-center", "rounded-sm", "border", "p-2"], [1, "bg-base-100", "border-base-200", "fixed", "right-0", "bottom-0", "left-0", "z-20", "flex", "justify-end", "border-t", "px-4", "py-4", "shadow-lg"], [1, "info", "font-medium"], [1, "text-base-content/60", "mb-2", "text-sm"], [1, "flex", "flex-1", "flex-col", "justify-center", "px-2"], [1, "name", "flex-1"], [1, "text-error", "text-xs"], [1, "status"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-2xl", "shadow-sm", 3, "bg-error", "text-error-content", "bg-success", "text-success-content", "matTooltip"], ["diameter", "24"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "text-2xl", "shadow-sm", 3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"]], template: function StatusListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, StatusListComponent_Conditional_1_Template, 6, 6)(2, StatusListComponent_Conditional_2_Template, 2, 2, "div", 1);
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275repeaterCreate(6, StatusListComponent_For_7_Template, 8, 4, "div", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, StatusListComponent_Conditional_8_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.is_done() ? 1 : 2);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.progress(), "%");
      \u0275\u0275classProp("bg-success", ctx.is_done() && ctx.error_count() === 0)("bg-warning", ctx.is_done() && ctx.error_count() > 0);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.list());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.is_done() ? 8 : -1);
    }
  }, dependencies: [
    MatRippleModule,
    MatRipple,
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
        <div class="flex w-full flex-col items-center pb-4">
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
            <div class="flex w-full flex-col">
                @for (item of list(); track $index; let i = $index) {
                    <div
                        class="border-base-200 flex w-full items-center rounded-sm border p-2"
                    >
                        <div class="flex flex-1 flex-col justify-center px-2">
                            <div class="name flex-1">{{ item.name }}</div>
                            @if (status()[i] && status()[i] !== 'done') {
                                <div class="text-error text-xs">
                                    {{ status()[i] }}
                                </div>
                            }
                        </div>
                        <div class="status">
                            @if (status()[i] && status()[i] !== 'loading') {
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow-sm"
                                    [class.bg-error]="status()[i] !== 'done'"
                                    [class.text-error-content]="
                                        status()[i] !== 'done'
                                    "
                                    [class.bg-success]="status()[i] === 'done'"
                                    [class.text-success-content]="
                                        status()[i] === 'done'
                                    "
                                    [matTooltip]="status()[i]"
                                >
                                    <icon>
                                        {{
                                            status()[i] === 'done'
                                                ? 'done'
                                                : 'close'
                                        }}
                                    </icon>
                                </div>
                            }
                            @if (status()[i] === 'loading') {
                                <mat-spinner diameter="24" />
                            }
                        </div>
                    </div>
                }
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
    `, imports: [
      MatRippleModule,
      MatProgressSpinnerModule,
      IconComponent,
      MatTooltipModule,
      TranslatePipe
    ] }]
  }], null, { list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], save: [{ type: Input, args: [{ isSignal: true, alias: "save", required: false }] }], done: [{ type: Output, args: ["done"] }], close_modal: [{ type: Output, args: ["close_modal"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusListComponent, { className: "StatusListComponent", filePath: "src/app/overlays/bulk-item-modal/status-list.component.ts", lineNumber: 117 });
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
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
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
    const \u0275$index_20_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-info", \u0275$index_20_r2 <= ctx_r2.currentStepIndex())("text-info-content", \u0275$index_20_r2 <= ctx_r2.currentStepIndex())("font-medium", ctx_r2.flow_step() === step_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275$index_20_r2 + 1, " ");
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
    \u0275\u0275property("save", ctx_r2.save)("list", ctx_r2.item_list);
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
    \u0275\u0275property("fields", ctx_r2.available_fields)("required_fields", ctx_r2.required_fields)("validation_errors", ctx_r2.validation_errors)("duplicate_warnings", ctx_r2.duplicate_warnings)("show_start_modules", ctx_r2.is_system);
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
  item_list = [];
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
    return this._data.constr === Rs;
  }
  get required_fields() {
    return this._required_fields;
  }
  get validation_errors() {
    return this.validateItems();
  }
  get duplicate_warnings() {
    return this.findDuplicates();
  }
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
      this.item_list = data.map((item) => {
        return new Resource(item);
      });
      this.goTo("list");
    } else {
      this.data_list = data;
      this.goTo("match-fields");
    }
  }
  showStatus() {
    const validation_errors = this.validateItems();
    if (validation_errors.length > 0) {
      notifyError("Fix the highlighted validation errors before saving.");
      return;
    }
    const duplicates = this.findDuplicates();
    if (duplicates.length > 0) {
      notifyWarn("Duplicate values were found. Saving will continue.");
    }
    this.loading = true;
    this.goTo("status");
  }
  done() {
    this.loading = false;
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
      case Rs:
        return [new Rs(SYSTEM_TEMPLATE).toJSON()];
      case Is:
        return [new Is(MODULE_TEMPLATE).toJSON()];
      case As:
        return [new As(DRIVER_TEMPLATE).toJSON()];
      case Cn:
        return [new Cn(USER_TEMPLATE).toJSON()];
      case Xt:
        return [new Xt(ZONE_TEMPLATE).toJSON()];
    }
  }
  getRequiredFields() {
    switch (this._data.constr) {
      case Cn:
        return ["email", "authority_id"];
      case Rs:
        return ["name"];
      case Is:
        return ["driver_id"];
      case As:
        return ["name", "module_name", "role"];
      case Xt:
        return ["name"];
      default:
        return [];
    }
  }
  validateItems() {
    const errors = [];
    this.item_list.forEach((item, index) => {
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
    const dedup_field = this._data.constr === Cn ? "email" : "name";
    this.item_list.forEach((item, index) => {
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
  }, decls: 16, vars: 14, consts: [[1, "bg-base-200", "m-4", "mb-2", "flex", "items-center", "justify-between", "rounded-sm", "px-4", "py-3"], [1, "text-xl", "font-medium"], [1, "text-base-content/60", "text-sm"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "mx-4", "mb-4", "grid", "grid-cols-4", "overflow-hidden", "rounded-sm", "text-xs"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-center", "gap-2", "border", "px-3", "py-2", "tracking-wide", "uppercase", 3, "bg-info", "text-info-content", "font-medium"], [1, "min-h-0", "overflow-auto", "px-4"], [3, "save", "list"], [3, "list", "fields", "required_fields", "validation_errors", "duplicate_warnings", "show_start_modules"], [3, "list", "field_list", "required_fields", "mappings"], [3, "template"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "justify-center", "gap-2", "border", "px-3", "py-2", "tracking-wide", "uppercase"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "border", "text-[0.7rem]"], [3, "done", "close_modal", "save", "list"], [3, "listChange", "next", "previous", "list", "fields", "required_fields", "validation_errors", "duplicate_warnings", "show_start_modules"], [3, "new_mappings", "mapping_done", "previous", "list", "field_list", "required_fields", "mappings"], [3, "list", "template"]], template: function BulkItemModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h3", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, " Upload a TSV or CSV, match columns, review rows, then create the items. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, BulkItemModalComponent_Conditional_7_Template, 3, 0, "button", 3);
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
                <h3 class="text-xl font-medium">
                    {{ 'COMMON.BULK_ADD' | translate: { type: type } }}
                </h3>
                <p class="text-base-content/60 text-sm">
                    Upload a TSV or CSV, match columns, review rows, then create
                    the items.
                </p>
            </div>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
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
                        [list]="item_list"
                        (done)="done()"
                        (close_modal)="close()"
                    />
                }
                @case ('list') {
                    <bulk-item-list
                        [(list)]="item_list"
                        [fields]="available_fields"
                        [required_fields]="required_fields"
                        [validation_errors]="validation_errors"
                        [duplicate_warnings]="duplicate_warnings"
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
      MatDialogModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      StatusListComponent,
      ListComponent,
      MatchFieldsComponent,
      CsvUploadComponent
    ], styles: ["/* angular:styles/component:css;0c10e3d48d1d80120a8abe2ee7bb5167d2809bc94fc9352b4a14726b7715fe9b;/home/runner/work/backoffice/backoffice/src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n}\n:host.fullscreen {\n  height: 100%;\n}\n/*# sourceMappingURL=bulk-item-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BulkItemModalComponent, { className: "BulkItemModalComponent", filePath: "src/app/overlays/bulk-item-modal/bulk-item-modal.component.ts", lineNumber: 163 });
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
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.times);
    \u0275\u0275control();
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
    \u0275\u0275classMap(ctx_r1.status()[\u0275$index_27_r3]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.status()[\u0275$index_27_r3] === "done" ? "done" : "close", " ");
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
    \u0275\u0275conditional(ctx_r1.status()[\u0275$index_27_r3] !== "loading" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status()[\u0275$index_27_r3] === "loading" ? 5 : -1);
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
    \u0275\u0275conditional(!ctx_r1.done() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.temp());
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
  status = signal(
    {},
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether request is loading */
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Temporary array for generating UI elements */
  temp = signal(
    [],
    ...ngDevMode ? [{ debugName: "temp" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether duplication has completed */
  done = signal(
    false,
    ...ngDevMode ? [{ debugName: "done" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Item selected to be duplicated */
  get item() {
    return this._data.item;
  }
  /**
   * Create the specified number of duplicate items
   */
  async duplicate() {
    this.loading.set(true);
    const ItemConstructor = this.item.constructor;
    const item = this._data.item;
    const list = [];
    this.temp.set(new Array(this.times).fill({}));
    for (let i = 0; i < this.times; i++) {
      const new_item = new ItemConstructor(__spreadProps(__spreadValues({}, item), {
        id: "",
        name: `${item.name} (${i + 1})`
      }));
      this.setStatus(i, "loading");
      const saved_item = await this._data.save(new_item).catch((err) => {
        this.setStatus(i, `Error: ${err.message || err}`);
        notifyError(this.status()[i]);
      });
      list.push(saved_item);
      if (this.status()[i] === "loading") {
        this.setStatus(i, "done");
      }
    }
    const clean_list = list.filter((item2) => !!item2);
    this.event.emit({
      reason: "done",
      metadata: clean_list
    });
    this.done.set(true);
    setTimeout(() => this._dialog_ref.close(), 5e3);
  }
  setStatus(index, value) {
    this.status.update((status) => __spreadProps(__spreadValues({}, status), { [index]: value }));
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
      \u0275\u0275conditional(!ctx.loading() ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
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
  ], styles: ["\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em 0.5em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  min-width: 16rem;\n  text-align: center;\n  padding: 1em;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  opacity: 0.65;\n  margin-bottom: 1em;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 20em;\n  max-width: 24em;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n}\n.item[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: rgba(#000, 0.1);\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.done[_ngcontent-%COMP%] {\n  color: var(--success);\n}\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=duplicate-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DuplicateModalComponent, [{
    type: Component,
    args: [{ selector: "app-duplicate-modal", template: `
        <header>
            <h3 mat-dialog-title>Duplicate Item</h3>
        </header>
        <mat-dialog-content>
            @if (!loading()) {
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
                    @if (!done()) {
                        <div class="info">Creating item duplicates...</div>
                    }
                    @for (itm of temp(); track itm.id; let i = $index) {
                        <div class="item">
                            <div class="name">
                                {{ item.name }} ({{ i + 1 }})
                            </div>
                            <div class="status">
                                @if (status()[i] !== 'loading') {
                                    <icon [class]="status()[i]">
                                        {{
                                            status()[i] === 'done'
                                                ? 'done'
                                                : 'close'
                                        }}
                                    </icon>
                                }
                                @if (status()[i] === 'loading') {
                                    <mat-spinner diameter="24" />
                                }
                            </div>
                        </div>
                    }
                </div>
            }
        </mat-dialog-content>
        @if (!loading()) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuplicateModalComponent, { className: "DuplicateModalComponent", filePath: "src/app/overlays/duplicate-modal.component.ts", lineNumber: 169 });
})();

// src/app/common/cascade-delete.ts
var PAGE_SIZE = 500;
var MAX_ZONES = 5e3;
var MAX_PAGES = 100;
var READ_CONCURRENCY = 8;
var REMOVING_KEY = {
  system: "CASCADE.REMOVING_SYSTEM",
  zone: "CASCADE.REMOVING_ZONE",
  application: "CASCADE.REMOVING_APPLICATION",
  tenant: "CASCADE.REMOVING_TENANT",
  domain: "CASCADE.REMOVING_DOMAIN"
};
var removingLabel = (resource) => i18n(REMOVING_KEY[resource.type], { name: resource.name });
var emptyPlan = () => ({
  scope: [],
  summary: [],
  warnings: [],
  steps: []
});
async function mapLimit(list, limit, fn) {
  const results = new Array(list.length);
  let next_index = 0;
  const worker = async () => {
    while (next_index < list.length) {
      const index = next_index++;
      results[index] = await fn(list[index]);
    }
  };
  const size = Math.min(limit, list.length);
  await Promise.all(new Array(size).fill(0).map(() => worker()));
  return results;
}
async function collectPages(request) {
  const items = [];
  let page = await request;
  items.push(...page.data);
  let pages = 1;
  while (page.next) {
    if (pages >= MAX_PAGES) {
      throw new Error(`Listing did not complete within ${MAX_PAGES} pages of ${PAGE_SIZE}`);
    }
    const next_page = page.next();
    if (!next_page)
      break;
    page = await next_page;
    if (!page.data.length)
      break;
    items.push(...page.data);
    pages += 1;
  }
  return items;
}
async function zoneSubtreeIds(zone_id) {
  if (!zone_id)
    return [];
  const found = [zone_id];
  const seen = new Set(found);
  let level = [zone_id];
  while (level.length) {
    if (found.length >= MAX_ZONES) {
      throw new Error(`Zone tree beneath ${zone_id} exceeds ${MAX_ZONES} zones`);
    }
    const children = await collectPages(uh({ parent_id: level.join(","), limit: PAGE_SIZE }));
    level = [];
    for (const zone of children) {
      if (!zone?.id || seen.has(zone.id))
        continue;
      seen.add(zone.id);
      found.push(zone.id);
      level.push(zone.id);
    }
  }
  return found;
}
async function splitZoneSystems(zone_ids) {
  const subtree = new Set(zone_ids);
  const inside = (system) => {
    const zones2 = system.zones || [];
    return zones2.length > 0 && zones2.every((id) => subtree.has(id));
  };
  const found = /* @__PURE__ */ new Map();
  const pages = await mapLimit(zone_ids, READ_CONCURRENCY, (zone_id) => collectPages(ga({ zone_id, limit: PAGE_SIZE })));
  for (const list of pages) {
    for (const system of list)
      if (system?.id)
        found.set(system.id, system);
  }
  const candidates = [];
  const retained = [];
  for (const system of found.values()) {
    (inside(system) ? candidates : retained).push(system);
  }
  const confirmed = await mapLimit(candidates, READ_CONCURRENCY, (system) => ba(system.id).catch(() => null));
  const orphaned = [];
  confirmed.forEach((current) => {
    if (!current)
      return;
    (inside(current) ? orphaned : retained).push(current);
  });
  return { orphaned, retained };
}
async function planZoneCascade(zone_id, subtree_ids) {
  const plan = emptyPlan();
  const zone_ids = subtree_ids ?? await zoneSubtreeIds(zone_id);
  if (!zone_ids.length)
    return plan;
  const { orphaned, retained } = await splitZoneSystems(zone_ids);
  const module_count = new Set(orphaned.flatMap((system) => [...system.modules || []])).size;
  const child_count = zone_ids.length - 1;
  if (child_count) {
    plan.scope.push(i18n("CASCADE.SCOPE_ZONES", { count: child_count }, child_count));
  }
  if (orphaned.length) {
    plan.summary.push(i18n("CASCADE.REMOVE_SYSTEMS", { count: orphaned.length }, orphaned.length));
    if (module_count) {
      plan.summary.push(i18n("CASCADE.REMOVE_MODULES", { count: module_count }, module_count));
    }
  }
  if (retained.length) {
    plan.warnings.push(i18n("CASCADE.KEEP_SYSTEMS", { count: retained.length }, retained.length));
  }
  plan.steps = orphaned.map((system) => ({
    resource: {
      type: "system",
      id: system.id,
      name: system.name
    },
    run: () => ka(system.id)
  }));
  return plan;
}
async function domainTenants(domain) {
  if (!domain)
    return [];
  const tenants = await f("/api/staff/v1/tenants");
  return (tenants || []).filter((tenant) => tenant?.domain === domain);
}
function orgZoneId(domain) {
  return `${domain?.config?.org_zone || ""}`;
}
async function planDomainCascade(domain) {
  const plan = emptyPlan();
  const org_zone_id = orgZoneId(domain);
  const [applications, tenants, all_domains] = await Promise.all([
    collectPages(ko({ authority_id: domain.id, limit: PAGE_SIZE })),
    domainTenants(domain.domain),
    org_zone_id ? collectPages(Wo({ limit: PAGE_SIZE })) : Promise.resolve([])
  ]);
  if (applications.length) {
    plan.summary.push(i18n("CASCADE.REMOVE_APPLICATIONS", { count: applications.length }, applications.length));
    plan.steps.push(...applications.map((application) => ({
      resource: {
        type: "application",
        id: `${application.id}`,
        name: application.name
      },
      run: () => qo(application.id)
    })));
  }
  if (tenants.length) {
    plan.summary.push(i18n("CASCADE.REMOVE_TENANTS", { count: tenants.length }, tenants.length));
    plan.steps.push(...tenants.map((tenant) => ({
      resource: {
        type: "tenant",
        id: `${tenant.id}`,
        name: tenant.name || tenant.domain
      },
      run: () => V(`/api/staff/v1/tenants/${tenant.id}`)
    })));
  }
  if (!org_zone_id) {
    plan.warnings.push(i18n("CASCADE.NO_ORG_ZONE"));
    return plan;
  }
  const org_subtree_ids = await zoneSubtreeIds(org_zone_id);
  const org_subtree = new Set(org_subtree_ids);
  const sharing = all_domains.filter((other) => {
    if (other.id === domain.id)
      return false;
    const other_zone = orgZoneId(other);
    return !!other_zone && org_subtree.has(other_zone);
  });
  if (sharing.length) {
    plan.warnings.push(i18n("CASCADE.ORG_ZONE_SHARED", {
      names: sharing.map((other) => other.name).join(", ")
    }));
    return plan;
  }
  const org_zone = await ah(org_zone_id).catch(() => null);
  if (!org_zone) {
    plan.warnings.push(i18n("CASCADE.ORG_ZONE_MISSING", { id: org_zone_id }));
    return plan;
  }
  const zone_plan = await planZoneCascade(org_zone_id, org_subtree_ids);
  plan.scope.push(i18n("CASCADE.SCOPE_ORG_ZONE", { name: org_zone.name }));
  plan.summary.push(...zone_plan.summary, i18n("CASCADE.REMOVE_ORG_ZONE"));
  plan.warnings.push(...zone_plan.warnings);
  plan.steps.push(...zone_plan.steps, {
    resource: {
      type: "zone",
      id: org_zone_id,
      name: org_zone.name
    },
    run: () => dh(org_zone_id)
  });
  return plan;
}
async function runCascade(plan, progress = () => void 0) {
  const outcome = { removed: [], failures: [], skipped: [] };
  const total = plan.steps.length;
  for (const [index, step] of plan.steps.entries()) {
    if (outcome.failures.length) {
      outcome.skipped.push(step.resource);
      continue;
    }
    progress(i18n("CASCADE.PROGRESS", {
      step: removingLabel(step.resource),
      index: index + 1,
      total
    }));
    try {
      await step.run();
      outcome.removed.push(step.resource);
    } catch (error) {
      outcome.failures.push({ resource: step.resource, error });
    }
  }
  return outcome;
}

// src/app/common/actions.ts
var domains = {
  query: (_) => Wo({
    q: _,
    fields: ["id", "name", "domain"].join(",")
  }),
  show: (_) => Qo(_),
  save: (item) => item.id ? Ko(item.id, item) : Zo(item),
  remove: (item) => Jo(item.id),
  itemConstructor: Yi,
  loadModal: () => import("./chunk-AURSEHJT.js").then((m) => m.DomainFormComponent),
  delete_message: ``,
  cascade: {
    label: "DOMAINS.DELETE_CASCADE",
    description: "DOMAINS.DELETE_CASCADE_DESC",
    resource_type: "domain",
    plan: (item) => planDomainCascade(item)
  },
  name: "DOMAINS"
};
var drivers = {
  query: (_) => Yo({
    q: _,
    fields: ["id", "name", "module_name"].join(",")
  }),
  show: (_) => Xo(_),
  save: (item) => item.id ? eu(item.id, item) : tu(item),
  remove: (item) => nu(item.id),
  itemConstructor: As,
  loadModal: () => import("./chunk-A25DRDU5.js").then((m) => m.DriverFormComponent),
  delete_message: ``,
  delete_extra: async (_) => {
    const query = {
      offset: 0,
      limit: 1,
      driver_id: _.id
    };
    const count = await lc(query).then(({ total }) => total).catch((_err) => 0);
    return count ? [
      "error",
      `${count} modules that rely on this driver will be <strong>immediately</strong> removed.`
    ] : null;
  },
  name: "DRIVERS"
};
var groups = {
  query: (_) => Tu({
    q: _,
    fields: ["id", "name", "description", "authority_id"].join(",")
  }),
  show: (_) => Ru(_),
  save: (item) => item.id ? Eu(item.id, item) : Uu(item),
  remove: (item) => Mu(item.id),
  itemConstructor: wn,
  loadModal: () => import("./chunk-JHPK5NVN.js").then((m) => m.GroupFormComponent),
  delete_message: ``,
  name: "GROUPS"
};
var modules = {
  query: (_) => querySupportModules({
    q: _,
    fields: ["id", "name", "custom_name", "module_name"].join(",")
  }),
  show: (_) => dc(_),
  save: (item) => item.id ? pc(item.id, item) : fc(item),
  remove: (item) => _c(item.id),
  itemConstructor: Is,
  loadModal: () => import("./chunk-GG2Q7BEE.js").then((m) => m.ModuleFormComponent),
  delete_message: ``,
  name: "MODULES"
};
var repositories = {
  query: (_) => wc({
    q: _,
    fields: ["id", "name", "repo_type"].join(",")
  }),
  show: (_) => Nc(_),
  save: (item) => item.id ? Dc(item.id, item) : Hc(item),
  remove: (item) => zc(item.id),
  itemConstructor: ur,
  loadModal: () => import("./chunk-IIJZREOL.js").then((m) => m.RepositoryFormComponent),
  delete_message: `'`,
  name: "REPOS"
};
var systems = {
  query: (_) => querySupportSystems({
    q: _,
    fields: ["id", "name", "display_name"].join(",")
  }),
  show: (_) => ba(_),
  save: saveSystem,
  remove: (item) => ka(item.id),
  itemConstructor: Rs,
  loadModal: () => import("./chunk-5DCLKCDA.js").then((m) => m.SystemFormComponent),
  delete_message: ``,
  name: "SYSTEMS"
};
async function saveSystem(item) {
  const _a = item, { modules: modules2, start_modules } = _a, system_data = __objRest(_a, ["modules", "start_modules"]);
  const { module_ids, driver_ids } = splitModuleIds(modules2);
  const form_data = __spreadProps(__spreadValues({}, system_data), {
    support_url: processURL(item, item.support_url || "")
  });
  if (modules2 !== void 0) {
    form_data.modules = module_ids;
  }
  if (item.id)
    return $a(item.id, form_data);
  const system = await va(form_data);
  await addLogicDriverModules(system, driver_ids);
  if (start_modules)
    await xa(system.id);
  return system;
}
async function addLogicDriverModules(system, driver_ids) {
  if (!driver_ids.length)
    return;
  await Promise.all([...new Set(driver_ids)].map(async (driver_id) => {
    const driver = await Xo(driver_id);
    if (driver.role !== Nt.Logic)
      return;
    await fc({
      driver_id: driver.id,
      control_system_id: system.id,
      name: driver.name || driver.module_name,
      uri: driver.default_uri,
      port: driver.default_port || 1,
      role: driver.role,
      alert_level: driver.alert_level,
      ignore_connected: driver.ignore_connected
    });
  }));
}
function splitModuleIds(modules2) {
  const ids = parseIdList(modules2);
  return {
    module_ids: ids.filter((id) => !id.startsWith("driver-")),
    driver_ids: ids.filter((id) => id.startsWith("driver-"))
  };
}
function parseIdList(value) {
  if (Array.isArray(value))
    return value.filter((id) => !!id);
  if (typeof value !== "string")
    return [];
  const trimmed = value.trim();
  if (!trimmed)
    return [];
  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed))
      return parseIdList(parsed);
  } catch {
  }
  return trimmed.replace(/^\[/, "").replace(/\]$/, "").split(/[\s,]+/).map((id) => id.replace(/^['"]|['"]$/g, "")).filter((id) => !!id);
}
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
  query: (_) => Fa({
    q: _,
    fields: ["id", "name", "display_name"].join(",")
  }),
  show: (_) => La(_),
  save: (item) => item.id ? ja(item.id, item) : Ga(item),
  remove: (item) => Ba(item.id),
  itemConstructor: pe,
  loadModal: () => import("./chunk-QOKG2LQH.js").then((m) => m.TriggerFormComponent),
  delete_message: ``,
  name: "TRIGGERS"
};
var users = {
  query: (_, options) => Ka(__spreadProps(__spreadValues({}, options), {
    q: _,
    fields: [
      "id",
      "name",
      "email",
      "authority_id",
      "groups",
      "deleted"
    ].join(",")
  })),
  show: (_) => Za(_),
  save: (item) => item.id ? Va(item.id, item) : Ya(item),
  remove: (item) => Xa(item.id),
  itemConstructor: Cn,
  loadModal: () => import("./chunk-FOTIXFOX.js").then((m) => m.UserFormComponent),
  delete_message: ``,
  name: "USERS"
};
var zones = {
  query: (_) => querySupportZones({
    q: _,
    fields: ["id", "name", "display_name", "tags"].join(",")
  }),
  show: (_) => ah(_),
  save: (item) => item.id ? hh(item.id, item) : lh(item),
  remove: (item) => dh(item.id),
  itemConstructor: Xt,
  loadModal: () => import("./chunk-RBYR5UEJ.js").then((m) => m.ZoneFormComponent),
  delete_message: ``,
  cascade: {
    label: "ZONES.DELETE_CASCADE",
    description: "ZONES.DELETE_CASCADE_DESC",
    resource_type: "zone",
    plan: (item) => planZoneCascade(item.id)
  },
  name: "ZONES"
};
var ACTIONS = {
  domains,
  drivers,
  groups,
  modules,
  repositories,
  systems,
  triggers,
  users,
  zones
};

// src/app/common/item.service.ts
var CASCADE_OPTION = "cascade";
var receiptItems = (resources) => resources.map((resource) => ({
  type: i18n(`CASCADE.TYPE_${resource.type.toUpperCase()}`),
  id: resource.id,
  name: resource.name
}));
var ActiveItemService = class _ActiveItemService extends AsyncHandler {
  _router = inject(Router);
  _settings = inject(SettingsService);
  _hotkey = inject(HotkeysService);
  _dialog = inject(MatDialog);
  _user = inject(BackofficeUsersService);
  /** Whether active item is loading */
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list should show on mobile */
  _show_options = signal(
    false,
    ...ngDevMode ? [{ debugName: "_show_options" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list should show on mobile */
  _search = signal(
    "",
    ...ngDevMode ? [{ debugName: "_search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _include_deleted = signal(
    false,
    ...ngDevMode ? [{ debugName: "_include_deleted" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _list_version = 0;
  include_deleted = this._include_deleted.asReadonly();
  /** Currently active item */
  _active_item = signal(
    null,
    ...ngDevMode ? [{ debugName: "_active_item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Currently active item */
  _next_query = signal(
    null,
    ...ngDevMode ? [{ debugName: "_next_query" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of items for the current type */
  _list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether item list is loading */
  _loading_list = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether active item is loading */
  _name = signal(
    null,
    ...ngDevMode ? [{ debugName: "_name" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Type of the active item */
  _type;
  /** Number of items */
  _count = signal(
    0,
    ...ngDevMode ? [{ debugName: "_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _scope_version = 0;
  count = this._count.asReadonly();
  get total() {
    return this._count();
  }
  /** Signal for item loading state */
  loading = this._loading.asReadonly();
  /** Signal for item list loading state */
  loading_list = this._loading_list.asReadonly();
  /** Signal for list of items */
  list = this._list.asReadonly();
  /** Signal for active item */
  active_item$ = this._active_item.asReadonly();
  /** Signal for active item */
  item = this._active_item.asReadonly();
  /** Signal for list of items */
  list_items = () => this._list();
  /** Signal for whether the item list should show on mobile */
  show_options = this._show_options.asReadonly();
  /** Available API actions for the active type */
  get actions() {
    return ACTIONS[this._type];
  }
  get active_item() {
    return this._active_item();
  }
  get type() {
    return this._type;
  }
  canMutate(permission) {
    if (this._user.current()?.sys_admin)
      return true;
    return ["systems", "modules", "zones", "users"].includes(this.type) && isSubsystemUser() && canUseSupportAction(permission);
  }
  switchGroup(id) {
    if (id === selected_support_group_id() || !selectSupportGroup(id))
      return;
    this._scope_version++;
    this._active_item.set(null);
    this._next_query.set(null);
    this._list.set([]);
    this._count.set(0);
    this._search.set("");
    this._loading.set(false);
    this._loading_list.set(false);
    const section = canAccessSection(this.type) ? this.type : ["systems", "modules", "zones", "users"].find(canAccessSection);
    this._router.navigate(["/", section || "systems", "-"]);
    if (section === this.type)
      this.updateList();
  }
  moreItems() {
    this.updateList();
  }
  setIncludeDeleted(include) {
    if (this.type !== "users" || include === this._include_deleted())
      return;
    this._include_deleted.set(include);
    this.setSearch(this._search());
  }
  setSearch(str) {
    this._list_version++;
    this._search.set(str);
    this._loading_list.set(true);
    this._next_query.set(null);
    this._list.set([]);
    this.updateList();
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
    setTimeout(() => this.updateType(), 300);
  }
  /** Update the active item */
  async setItem(id) {
    await waitForSignalValue(this._user.user, (user) => !!user);
    if (!hasSupportRole() && !hasSupportSubsystem())
      return;
    const scope_version = this._scope_version;
    if ((!this.active_item || this.active_item.id !== id) && id.length > 2) {
      const url = this._router.url.split("/");
      this._type = url[1];
      if (!this.type)
        return this.timeout("setItem", () => this.setItem(id));
      this._loading.set(true);
      this._active_item.set(null);
      const item = await this.actions.show(id).catch(() => notifyError(`Error loading ${id}`));
      if (scope_version !== this._scope_version)
        return;
      this._active_item.set(item);
      const name = this._type[0].toUpperCase() + this._type.slice(1);
      this._name.set(name);
      this._settings.title = name;
      this._show_options.set(false);
      this.updateSettings();
      this._loading.set(false);
    }
  }
  toggleOptions() {
    this._show_options.set(!this._show_options());
  }
  create(item, copy = false) {
    if (!this.canMutate(2))
      return;
    item = item || this._active_item();
    const actions = Object.values(ACTIONS).find((v) => item instanceof v.itemConstructor) || this.actions;
    return this.edit(copy ? new actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
      id: "",
      name: `${item.name} (1)`
    })) : new actions.itemConstructor());
  }
  bulkAdd() {
    if (!this.canMutate(2))
      return;
    const actions = this.actions;
    this._settings.post("disable_uploads", true);
    const ref = this._dialog.open(BulkItemModalComponent, {
      height: "auto",
      width: "auto",
      maxHeight: "100vh",
      maxWidth: "100vw",
      data: {
        constr: actions.itemConstructor,
        name: this.type,
        save: actions.save
      }
    });
    ref.afterClosed().subscribe(() => this._settings.post("disable_uploads", false));
  }
  async edit(item, options = {}) {
    if (!this.canMutate((item || this.active_item)?.id ? 4 : 2))
      return;
    item = item || this._active_item();
    if (item) {
      const actions = Object.values(ACTIONS).find((v) => item instanceof v.itemConstructor) || this.actions;
      if (item.id && item !== this._active_item()) {
        item = await actions.show(item.id);
      }
      const component = await actions.loadModal();
      return new Promise((resolve) => {
        const ref = this._dialog.open(component, {
          data: __spreadValues({
            item: new actions.itemConstructor(__spreadValues({}, item))
          }, options)
        });
        waitForEvent(ref.componentInstance.event, (e) => e.reason === "done").then((event) => {
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
  async delete(force_removal = false) {
    if (force_removal && this.type !== "users")
      return;
    if (!this.canMutate(8))
      return;
    const item = this._active_item();
    if (!item)
      return;
    const actions = this.actions;
    const cascade = this._user.current()?.sys_admin ? actions.cascade : void 0;
    let plan = null;
    const ref = this._dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
      data: {
        title: i18n(force_removal ? "USERS.FORCE_DELETE" : `${actions.name}.DELETE`),
        content: i18n(force_removal ? "USERS.FORCE_DELETE_MSG" : `${actions.name}.DELETE_MSG`, {
          name: item.display_name || item.name
        }),
        extra: actions.delete_extra ? await actions.delete_extra(item) : null,
        options: cascade ? [
          {
            id: CASCADE_OPTION,
            label: i18n(cascade.label),
            description: i18n(cascade.description),
            details: async () => {
              plan = await cascade.plan(item);
              const { scope, summary, warnings } = plan;
              return { scope, summary, warnings };
            }
          }
        ] : void 0,
        icon: { type: "icon", content: "delete" }
      }
    }));
    waitForEvent(ref.componentInstance.event, (e) => e.reason === "done").then(async (event) => {
      ref.componentInstance?.loading.set(i18n(`${actions.name}.DELETE_LOADING`));
      let outcome = null;
      const cascade_selected = !!event.metadata?.options?.[CASCADE_OPTION];
      if (cascade_selected && !plan) {
        ref.componentInstance?.loading.set("");
        return notifyError(i18n("CASCADE.PLAN_UNAVAILABLE"));
      }
      if (cascade_selected && plan) {
        ref.componentInstance?.disableClose();
        outcome = await runCascade(plan, (message) => ref.componentInstance?.loading.set(message));
        ref.componentInstance?.enableClose();
        if (outcome.failures.length) {
          ref.componentInstance?.loading.set("");
          ref.componentInstance?.result.set({
            title: i18n("CASCADE.RECEIPT_PARTIAL_TITLE"),
            items: receiptItems(outcome.removed),
            failed: receiptItems(outcome.failures.map((_) => _.resource)),
            skipped: receiptItems(outcome.skipped),
            note: i18n("CASCADE.RECEIPT_PARTIAL_NOTE", {
              name: item.name
            })
          });
          return notifyError(i18n("CASCADE.FAILED", {
            count: outcome.failures.length,
            // The status is what tells an admin
            // why an irreversible run stopped.
            // ts-client rejects with a raw
            // Response, which has no `.message`,
            // so the old fallback printed the
            // resource name as if it were the
            // reason — and the receipt already
            // names the resource anyway.
            error: describeError(outcome.failures[0].error)
          }, outcome.failures.length));
        }
        ref.componentInstance?.loading.set(i18n(`${actions.name}.DELETE_LOADING`));
      }
      await (force_removal ? Xa(item.id, { force_removal: true }) : actions.remove(item)).then(() => {
        this._active_item.set(null);
        this.removeItem(item);
        this._router.navigate([
          `/${this._type}`,
          "-",
          "about"
        ]);
        if (outcome) {
          ref.componentInstance?.result.set({
            title: i18n("CASCADE.RECEIPT_TITLE"),
            items: receiptItems([
              ...outcome.removed,
              {
                type: cascade.resource_type,
                id: `${item.id}`,
                name: item.name
              }
            ]),
            note: i18n("CASCADE.RECEIPT_NOTE")
          });
          return;
        }
        notifySuccess(i18n(`${actions.name}.DELETE_SUCCESS`, {
          name: item.name
        }));
        ref.close();
      }).catch((err) => {
        ref.componentInstance?.loading.set("");
        if (outcome?.removed.length) {
          ref.componentInstance?.result.set({
            title: i18n("CASCADE.RECEIPT_PARTIAL_TITLE"),
            items: receiptItems(outcome.removed),
            failed: receiptItems([
              {
                type: cascade.resource_type,
                id: `${item.id}`,
                name: item.name
              }
            ]),
            note: i18n("CASCADE.RECEIPT_PARTIAL_NOTE", {
              name: item.name
            })
          });
        }
        notifyError(i18n(`${actions.name}.DELETE_ERROR`, {
          error: JSON.stringify(err.response || err.message || err)
        }));
      });
    }).catch((err) => {
      log("ITEM", "Delete flow failed", [describeError(err)], "error");
      ref.componentInstance?.loading.set("");
      notifyError(i18n(`${actions.name}.DELETE_ERROR`, {
        error: describeError(err)
      }));
    });
  }
  duplicate() {
    if (!this._user.current().sys_admin)
      return;
    const item = this._active_item();
    if (item) {
      const ref = this._dialog.open(DuplicateModalComponent, {
        data: {
          item,
          save: this.actions.save
        }
      });
      ref.componentInstance.event.subscribe((e) => {
        if (e.reason === "done") {
          this._active_item.set(e.metadata[0]);
          this.replaceItem(e.metadata[0]);
        }
      });
    }
  }
  replaceItem(item) {
    if (item?.id && (!this.active_item || this.active_item.id === item.id)) {
      this._active_item.set(item);
      const list = this._list().filter((i) => i.id !== item.id);
      list.push(item);
      list.sort((a, b) => a.name?.localeCompare(b.name));
      this.updateSettings();
      this._list.set(list);
    }
  }
  removeItem(item) {
    if (item.id) {
      const list = this._list().filter((i) => i.id !== item.id);
      list.sort((a, b) => a.name?.localeCompare(b.name));
      this._count.set(this._count() - 1);
      this._list.set(list);
    }
  }
  async updateType() {
    const url = this._router.url.split("/");
    const old_type = this._type;
    this._type = url[1];
    if (old_type !== this._type) {
      this._include_deleted.set(false);
      this._list_version++;
      log("Service", `Item type set to ${this._type}`);
      this._next_query.set(null);
      this._active_item.set(null);
      this._search.set("");
      const name = this._type[0]?.toUpperCase() + this._type.slice(1);
      this._name.set(name);
      this._settings.title = name;
      this._show_options.set(true);
      this.updateList();
    }
    if (this._type !== "admin" && url[2]) {
      await this.setItem(url[2]);
    }
    if (this._type === "admin") {
      this._active_item.set({ name: "PlaceOS Admin" });
    }
  }
  updateList() {
    const type = this._type;
    const search = this._search();
    const list_version = this._list_version;
    const scope_version = this._scope_version;
    this.timeout("update", async () => {
      if (!this.actions)
        return;
      await waitForSignalValue(this._user.user, (user) => !!user);
      if (list_version !== this._list_version || type !== this._type || scope_version !== this._scope_version || !hasSupportRole() && !hasSupportSubsystem())
        return;
      if (!canAccessSection(type)) {
        this._loading_list.set(false);
        return;
      }
      this._loading_list.set(true);
      let next = this._next_query();
      if (!next) {
        next = () => this.actions.query(search, type === "users" ? { include_deleted: this._include_deleted() } : void 0);
        this._list.set([]);
      }
      const resp = await next().catch((err) => {
        log("Service", `Error loading ${type} list.`, [err], "warn");
        return null;
      });
      if (scope_version !== this._scope_version || list_version !== this._list_version)
        return;
      if (!resp) {
        if (type === this._type) {
          this._next_query.set(null);
          this._loading_list.set(false);
          notifyError(`Error loading ${type} list.`);
        }
        return;
      }
      if (type === this._type) {
        this._next_query.set(resp.next || (() => Promise.resolve({
          data: [],
          total: resp.total,
          next: null
        })));
        this._count.set(resp.total);
        const list = this._list().filter((i) => !resp.data.find((item) => item.id === i.id));
        const new_list = list.concat(resp.data);
        new_list.sort((a, b) => a.name?.localeCompare(b.name));
        this._list.set(new_list);
        this._loading_list.set(false);
      }
    }, search ? 300 : 10);
  }
  async updateSettings() {
    const item = this.active_item;
    if (item && item.settings) {
      let settings = (await la({ parent_id: item.id })).data;
      if (item !== this.active_item)
        return;
      settings = new Array(5).fill(0).map((_, idx) => settings.find((_2) => _2.encryption_level === idx) || new Pe({
        encryption_level: idx
      }));
      settings.sort((a, b) => a.encryption_level - b.encryption_level);
      if (this.actions?.itemConstructor) {
        this._active_item.set(new this.actions.itemConstructor(__spreadProps(__spreadValues({}, item), {
          settings
        })));
      }
    }
  }
  static \u0275fac = function ActiveItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveItemService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _ActiveItemService, factory: _ActiveItemService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveItemService, [{
    type: Service
  }], () => [], null);
})();

export {
  ActiveItemService
};
//# sourceMappingURL=chunk-GGKMSF3S.js.map
