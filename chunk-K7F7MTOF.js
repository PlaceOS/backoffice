import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-OBX2CJKT.js";
import {
  AuthenticatedImageDirective
} from "./chunk-AZEH7OPH.js";
import {
  DateFromPipe
} from "./chunk-DUZVXEAA.js";
import {
  Clipboard
} from "./chunk-K3OIGDXB.js";
import {
  openConfirmModal
} from "./chunk-62JZIUWG.js";
import "./chunk-2UE6DVRM.js";
import {
  UploadsService
} from "./chunk-Y4UIOVDN.js";
import "./chunk-AX7CZQ4V.js";
import "./chunk-AB2DELE4.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-L4LNMNAU.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-KACAXRUK.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-R3CS2OQD.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-457I3P7O.js";
import "./chunk-REQ7BP4U.js";
import "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-6DCZX4UE.js";
import "./chunk-UPZUGYHP.js";
import {
  AsyncHandler
} from "./chunk-HZ7P5O2S.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-WJHMIHHS.js";
import {
  IconComponent
} from "./chunk-RYIKAYVN.js";
import "./chunk-USSSLHL5.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import "./chunk-F2GG244F.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-ZXSXDT5W.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-JGQFOLKM.js";
import "./chunk-XCUSELP4.js";
import {
  MatRipple
} from "./chunk-WRCAB6XW.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  computed,
  inject,
  nextValueFrom,
  setClassMetadata,
  signal,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HV66NOZY.js";
import {
  A,
  BehaviorSubject,
  P,
  Pt,
  Y,
  catchError,
  combineLatest,
  debounceTime,
  filter,
  kt,
  map,
  of,
  ru,
  shareReplay,
  startWith,
  switchMap
} from "./chunk-K7VBXBIC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/view-upload-modal.component.ts
function ViewUploadModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.resource);
  }
}
function ViewUploadModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.resource);
  }
}
var ViewUploadModalComponent = class _ViewUploadModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  resource = `/api/engine/v2/uploads/${this._data.upload.id}/url`;
  type = this._data.upload.mime_type.split("/")[0];
  name = this._data.upload.file_name;
  static \u0275fac = function ViewUploadModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewUploadModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUploadModalComponent, selectors: [["view-upload-modal"]], decls: 12, vars: 3, consts: [[1, "border-base-100", "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "px-2", "pb-2"], [1, "border-base-200", "relative", "flex", "h-[65vh]", "max-h-[65vh]", "w-[80vw]", "max-w-[80vw]", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], ["auth", "", "autoplay", "", "controls", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "border-base-200", "bg-base-100", "absolute", "top-2", "left-2", "max-w-[calc(100%-1rem)]", "rounded-full", "border", "px-2", "py-1", "font-mono", "text-sm"]], template: function ViewUploadModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2, "View Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2)(4, "icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "main", 3)(7, "div", 4);
      \u0275\u0275conditionalCreate(8, ViewUploadModalComponent_Conditional_8_Template, 1, 1, "img", 5);
      \u0275\u0275conditionalCreate(9, ViewUploadModalComponent_Conditional_9_Template, 1, 1, "video", 6);
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.type === "image" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.type === "video" ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.name, " ");
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    AuthenticatedImageDirective,
    IconComponent,
    MatRippleModule,
    MatRipple
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewUploadModalComponent, [{
    type: Component,
    args: [{ selector: "view-upload-modal", template: `
        <header
            class="border-base-100 bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border px-4 py-2"
        >
            <h2 class="text-xl font-medium">View Upload</h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="px-2 pb-2">
            <div
                class="border-base-200 relative flex h-[65vh] max-h-[65vh] w-[80vw] max-w-[80vw] items-center justify-center overflow-hidden rounded-xl border"
            >
                @if (type === 'image') {
                    <img
                        class="h-full w-full object-contain object-center"
                        auth
                        [source]="resource"
                    />
                }
                @if (type === 'video') {
                    <video
                        class="h-full w-full object-contain object-center"
                        auth
                        [source]="resource"
                        autoplay
                        controls
                    ></video>
                }
                <div
                    class="border-base-200 bg-base-100 absolute top-2 left-2 max-w-[calc(100%-1rem)] rounded-full border px-2 py-1 font-mono text-sm"
                >
                    {{ name }}
                </div>
            </div>
        </main>
    `, imports: [
      MatDialogModule,
      AuthenticatedImageDirective,
      IconComponent,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUploadModalComponent, { className: "ViewUploadModalComponent", filePath: "src/app/admin/view-upload-modal.component.ts", lineNumber: 55 });
})();

// src/app/admin/upload-library.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UploadLibraryComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
function UploadLibraryComponent_Conditional_24_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "dateFrom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30)(12, "button", 31);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_div_28_Template_button_click_12_listener() {
      const upload_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadUpload(upload_r5));
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 31);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_div_28_Template_button_click_16_listener() {
      const upload_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.copyLink(upload_r5));
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 32);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_div_28_Template_button_click_20_listener() {
      const upload_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewUpload(upload_r5));
    });
    \u0275\u0275elementStart(22, "icon");
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 33);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_div_28_Template_button_click_24_listener() {
      const upload_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeUpload(upload_r5));
    });
    \u0275\u0275elementStart(26, "icon");
    \u0275\u0275text(27, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const upload_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("grid-template-columns", "auto 10rem 7rem 8rem 11.5rem");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", upload_r5.file_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", upload_r5.file_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", upload_r5.mime_type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.sizeOf(upload_r5.file_size), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, +upload_r5.created_at * 1e3), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 14, "ADMIN.UPLOADS_LIB_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 16, "ADMIN.UPLOADS_LIB_COPY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !upload_r5.mime_type.includes("image") && !upload_r5.mime_type.includes("video"))("matTooltip", \u0275\u0275pipeBind1(21, 18, "ADMIN.UPLOADS_LIB_VIEW"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 20, "ADMIN.UPLOADS_LIB_REMOVE"));
  }
}
function UploadLibraryComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17)(2, "button", 18);
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("file_name"));
    });
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("mime_type"));
    });
    \u0275\u0275elementStart(9, "div", 19);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "icon", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("file_size"));
    });
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "icon", 20);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 18);
    \u0275\u0275listener("click", function UploadLibraryComponent_Conditional_24_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("created_at"));
    });
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "icon", 20);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "cdk-virtual-scroll-viewport", 22);
    \u0275\u0275template(28, UploadLibraryComponent_Conditional_24_div_28_Template, 28, 22, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("grid-template-columns", "auto 10rem 7rem 8rem 11.5rem");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.sorted_by()[0] === "file_name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, "COMMON.FIELD_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.sorted_by()[1] ? "arrow_downward" : "arrow_upward");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.sorted_by()[0] === "mime_type");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 21, "ADMIN.UPLOADS_LIB_FIELD_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.sorted_by()[1] ? "arrow_downward" : "arrow_upward");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.sorted_by()[0] === "file_size");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 23, "ADMIN.UPLOADS_LIB_FIELD_SIZE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.sorted_by()[1] ? "arrow_downward" : "arrow_upward");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.sorted_by()[0] === "created_at");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "COMMON.CREATED_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.sorted_by()[1] ? "arrow_downward" : "arrow_upward");
    \u0275\u0275advance(3);
    \u0275\u0275property("cdkVirtualForOf", ctx_r2.sorted_uploads());
  }
}
function UploadLibraryComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 34);
    \u0275\u0275text(2, "file_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "ADMIN.UPLOADS_LIB_LIST_EMPTY"), " ");
  }
}
function getMimeType(filename) {
  const mimeTypes = {
    txt: "text/plain",
    html: "text/html",
    htm: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    xml: "application/xml",
    pdf: "application/pdf",
    csv: "text/csv",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    bmp: "image/bmp",
    webp: "image/webp",
    svg: "image/svg+xml",
    avif: "image/avif",
    mp3: "audio/mpeg",
    wav: "audio/wav",
    mp4: "video/mp4",
    avi: "video/x-msvideo",
    mov: "video/quicktime",
    zip: "application/zip",
    rar: "application/x-rar-compressed",
    "7z": "application/x-7z-compressed"
    // Add more mappings as needed
  };
  const extension = `${filename}`.split(".").pop().toLowerCase();
  return mimeTypes[extension] || "application/octet-stream";
}
var UploadLibraryComponent = class _UploadLibraryComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  _clipboard = inject(Clipboard);
  _uploads = inject(UploadsService);
  search_term = new BehaviorSubject("");
  domain = new BehaviorSubject(null);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  sorted_by = signal(["", false], ...ngDevMode ? [{ debugName: "sorted_by" }] : []);
  uploads_list = signal([], ...ngDevMode ? [{ debugName: "uploads_list" }] : []);
  sorted_uploads = computed(() => {
    const [field, asc] = this.sorted_by();
    if (!field)
      return this.uploads_list();
    return [...this.uploads_list()].sort((a, b) => {
      if (!field)
        return 0;
      const value_a = a[field];
      const value_b = b[field];
      const is_number = typeof value_a === "number";
      let result = 0;
      if (is_number)
        result = value_a - value_b;
      else
        result = `${value_a}`.localeCompare(`${value_b}`);
      return result * (asc ? 1 : -1);
    });
  }, ...ngDevMode ? [{ debugName: "sorted_uploads" }] : []);
  domain_list = ru({ limit: 100 }).pipe(map((r) => r.data), shareReplay(1));
  _uploads_list = combineLatest([
    this.domain,
    this.search_term
  ]).pipe(filter(([_]) => !!_), debounceTime(300), switchMap(([domain, search]) => A({
    path: "uploads",
    query_params: {
      limit: 1e3,
      file_search: search,
      authority_id: domain.id
    }
  }).pipe(catchError((_) => of({ data: [] })))), map((r) => r.data.map((_) => __spreadProps(__spreadValues({}, _), { mime_type: getMimeType(_.file_name) })).sort((a, b) => a.file_name.localeCompare(b.file_name))), startWith([]), shareReplay(1));
  async ngOnInit() {
    const domain = kt();
    const domain_list = await nextValueFrom(this.domain_list);
    if (!domain_list?.length)
      return;
    const match = domain_list.find((d) => d.id === domain.id);
    if (match)
      this.domain.next(match);
    this.subscription("uploads", this._uploads_list.subscribe((_) => this.uploads_list.set(_)));
  }
  sizeOf(bytes) {
    const sizes = [" B", "KB", "MB", "GB", "TB", "PB"];
    if (bytes === 0)
      return "0 B";
    const order = Math.log(bytes) / Math.log(1024);
    const level = Math.floor(order);
    const divisor = Math.pow(1024, level);
    const short_bytes = Math.floor(bytes / divisor * 100) / 100;
    return `${short_bytes} ${sizes[level]}`;
  }
  sortBy(new_field) {
    const [field, asc] = this.sorted_by();
    if (field === new_field) {
      if (asc)
        this.sorted_by.set(["", false]);
      else
        this.sorted_by.set([new_field, true]);
    } else {
      this.sorted_by.set([new_field, false]);
    }
  }
  copyLink(upload) {
    this._clipboard.copy(`${location.protocol}//${location.host}/api/engine/v2/uploads/${upload.id}/url`);
    notifyInfo(`Copied upload URL to clipboard.`);
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.timeout("file_event", async () => {
      const element = event.target;
      if (element?.files) {
        const files = element.files;
        if (files.length) {
          const uploads = [];
          for (let i = 0; i < files.length; i++) {
            uploads.push(this._uploads.uploadFileWithPermissions(files[i]));
          }
          const id_list = await Promise.all(uploads);
          this.subscription("upload_list", this._uploads.upload_list.subscribe((list) => {
            let success = 0;
            let failed = 0;
            for (const id of id_list) {
              const upload = list.find((_) => _.id === id);
              if (!upload)
                continue;
              if (upload.error)
                failed += 1;
              else if (upload.progress >= 100)
                success += 1;
            }
            if (success + failed >= id_list.length) {
              if (failed) {
                notifyError("Failed to upload files.");
              } else if (success) {
                notifySuccess("Succesfully uploaded files.");
              }
              this.unsub("upload_list");
            }
          }));
        }
      }
    });
  }
  async downloadUpload(upload) {
    const tkn = Y();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Pt()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
    const url = `/api/engine/v2/uploads/${upload.id}/url`;
    const result = await fetch(url);
    if (!result.ok) {
      return notifyError(i18n("ADMIN.UPLOADS_LIB_DOWNLOAD_ERROR", {
        error: result.statusText || result.status
      }));
    }
    const data = await result.blob();
    const file_url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = file_url;
    link.download = upload.file_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(file_url);
  }
  viewUpload(upload) {
    this._dialog.open(ViewUploadModalComponent, {
      data: { upload }
    });
  }
  async removeUpload(upload) {
    const result = await openConfirmModal({
      title: i18n("ADMIN.UPLOADS_LIB_REMOVE"),
      content: i18n("ADMIN.UPLOADS_LIB_REMOVE_MSG", {
        filename: upload.file_name
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (result?.reason !== "done")
      return;
    result.loading(i18n("ADMIN.UPLOADS_LIB_REMOVE_LOADING"));
    await P({
      id: upload.id,
      query_params: {},
      path: "uploads"
    }).toPromise();
    result.close();
    this.domain.next(this.domain.getValue());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UploadLibraryComponent_BaseFactory;
    return function UploadLibraryComponent_Factory(__ngFactoryType__) {
      return (\u0275UploadLibraryComponent_BaseFactory || (\u0275UploadLibraryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UploadLibraryComponent)))(__ngFactoryType__ || _UploadLibraryComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadLibraryComponent, selectors: [["upload-library"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 18, consts: [[1, "flex", "h-full", "w-full", "flex-col"], [1, "mt-4", "mb-2", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", 1, "relative", "h-12", "w-32"], ["type", "file", "multiple", "", 1, "pointer-events-auto", "absolute", "inset-0", "w-full", "opacity-0", 3, "change"], [1, "mb-4", "flex", "items-center", "justify-end", "space-x-2", "px-4"], ["appearance", "outline", 1, "no-subscript", "w-[20rem]", "max-w-full"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search for file...", 3, "ngModelChange", "ngModel"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], ["role", "table", 1, "mb-4", "block", "min-w-240", "overflow-hidden", "text-sm"], [1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "p-16"], ["header", "", 1, "divide-base-100", "border-base-300", "bg-base-200", "grid", "min-w-full", "grid-cols-5", "divide-x", "border"], [1, "flex", "items-center", "justify-between", "p-2", 3, "click"], [1, "p-2"], [1, "text-xl"], [1, "p-4"], ["itemSize", "48", 1, "min-h-[calc(100vh-13.25rem)]"], ["class", "divide-base-300 border-base-300 grid h-12 min-w-full grid-cols-5 divide-x overflow-hidden border-x border-b", 3, "grid-template-columns", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "divide-base-300", "border-base-300", "grid", "h-12", "min-w-full", "grid-cols-5", "divide-x", "overflow-hidden", "border-x", "border-b"], [1, "flex", "h-full", "items-center", "p-4", "text-xs"], [1, "mono", "w-px", "flex-1", "truncate", 3, "matTooltip"], [1, "mono", "flex", "h-full", "items-center", "truncate", "p-4", "text-xs"], [1, "mono", "flex", "h-full", "w-full", "items-center", "justify-end", "p-4", "text-xs"], [1, "flex", "h-full", "items-center", "p-4"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "px-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], [1, "text-8xl", "opacity-30"], [1, "opacity-30"]], template: function UploadLibraryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-select", 5);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("ngModelChange", function UploadLibraryComponent_Template_mat_select_ngModelChange_7_listener($event) {
        return ctx.domain.next($event);
      });
      \u0275\u0275repeaterCreate(10, UploadLibraryComponent_For_11_Template, 2, 2, "mat-option", 6, _forTrack0);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7)(14, "input", 8);
      \u0275\u0275listener("change", function UploadLibraryComponent_Template_input_change_14_listener($event) {
        return ctx.handleFileEvent($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "mat-form-field", 10)(19, "icon", 11);
      \u0275\u0275text(20, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 12);
      \u0275\u0275listener("ngModelChange", function UploadLibraryComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.search_term.next($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 13);
      \u0275\u0275element(23, "mat-progress-bar", 14);
      \u0275\u0275conditionalCreate(24, UploadLibraryComponent_Conditional_24_Template, 29, 27, "div", 15)(25, UploadLibraryComponent_Conditional_25_Template, 6, 3, "div", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.UPLOADS_LIB_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(8, 10, ctx.domain))("placeholder", \u0275\u0275pipeBind1(9, 12, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(12, 14, ctx.domain_list));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 16, "COMMON.UPLOAD_FILE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.search_term.getValue());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.uploads_list()) == null ? null : tmp_7_0.length) > 0 ? 24 : 25);
    }
  }, dependencies: [
    CommonModule,
    IconComponent,
    ScrollingModule,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatProgressBarModule,
    MatProgressBar,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    AsyncPipe,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[header][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n[header][_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[header][_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   icon[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=upload-library.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadLibraryComponent, [{
    type: Component,
    args: [{ selector: "upload-library", template: `
        <div class="flex h-full w-full flex-col">
            <div
                class="mt-4 mb-2 flex items-center justify-between space-x-2 px-4"
            >
                <div class="text-2xl">
                    {{ 'ADMIN.UPLOADS_LIB_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (
                                domain of domain_list | async;
                                track domain.id
                            ) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple class="relative h-12 w-32">
                        <input
                            class="pointer-events-auto absolute inset-0 w-full opacity-0"
                            type="file"
                            multiple
                            (change)="handleFileEvent($event)"
                        />
                        {{ 'COMMON.UPLOAD_FILE' | translate }}
                    </button>
                </div>
            </div>
            <div class="mb-4 flex items-center justify-end space-x-2 px-4">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-[20rem] max-w-full"
                >
                    <icon matPrefix class="relative -left-1 text-2xl"
                        >search</icon
                    >
                    <input
                        matInput
                        placeholder="Search for file..."
                        [ngModel]="search_term.getValue()"
                        (ngModelChange)="search_term.next($event)"
                    />
                </mat-form-field>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!loading()"
                />
                @if (uploads_list()?.length > 0) {
                    <div
                        role="table"
                        class="mb-4 block min-w-240 overflow-hidden text-sm"
                    >
                        <div
                            header
                            class="divide-base-100 border-base-300 bg-base-200 grid min-w-full grid-cols-5 divide-x border"
                            [style.grid-template-columns]="
                                'auto 10rem 7rem 8rem 11.5rem'
                            "
                        >
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('file_name')"
                                [class.active]="sorted_by()[0] === 'file_name'"
                            >
                                <div class="p-2">
                                    {{ 'COMMON.FIELD_NAME' | translate }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('mime_type')"
                                [class.active]="sorted_by()[0] === 'mime_type'"
                            >
                                <div class="p-2">
                                    {{
                                        'ADMIN.UPLOADS_LIB_FIELD_TYPE'
                                            | translate
                                    }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('file_size')"
                                [class.active]="sorted_by()[0] === 'file_size'"
                            >
                                <div class="p-2">
                                    {{
                                        'ADMIN.UPLOADS_LIB_FIELD_SIZE'
                                            | translate
                                    }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <button
                                class="flex items-center justify-between p-2"
                                (click)="sortBy('created_at')"
                                [class.active]="sorted_by()[0] === 'created_at'"
                            >
                                <div class="p-2">
                                    {{ 'COMMON.CREATED_AT' | translate }}
                                </div>
                                <icon class="text-xl">{{
                                    sorted_by()[1]
                                        ? 'arrow_downward'
                                        : 'arrow_upward'
                                }}</icon>
                            </button>
                            <div class="p-4"></div>
                        </div>
                        <cdk-virtual-scroll-viewport
                            itemSize="48"
                            class="min-h-[calc(100vh-13.25rem)]"
                        >
                            <div
                                *cdkVirtualFor="let upload of sorted_uploads()"
                                class="divide-base-300 border-base-300 grid h-12 min-w-full grid-cols-5 divide-x overflow-hidden border-x border-b"
                                [style.grid-template-columns]="
                                    'auto 10rem 7rem 8rem 11.5rem'
                                "
                            >
                                <div
                                    class="flex h-full items-center p-4 text-xs"
                                >
                                    <div
                                        class="mono w-px flex-1 truncate"
                                        [matTooltip]="upload.file_name"
                                    >
                                        {{ upload.file_name }}
                                    </div>
                                </div>
                                <div
                                    class="mono flex h-full items-center truncate p-4 text-xs"
                                >
                                    {{ upload.mime_type }}
                                </div>
                                <div
                                    class="mono flex h-full w-full items-center justify-end p-4 text-xs"
                                >
                                    {{ sizeOf(upload.file_size) }}
                                </div>
                                <div class="flex h-full items-center p-4">
                                    {{ +upload.created_at * 1000 | dateFrom }}
                                </div>
                                <div
                                    class="flex w-full items-center justify-end space-x-2 px-2"
                                >
                                    <button
                                        icon
                                        matRipple
                                        (click)="downloadUpload(upload)"
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_DOWNLOAD'
                                                | translate
                                        "
                                    >
                                        <icon>download</icon>
                                    </button>
                                    <button
                                        icon
                                        matRipple
                                        (click)="copyLink(upload)"
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_COPY' | translate
                                        "
                                    >
                                        <icon>content_copy</icon>
                                    </button>
                                    <button
                                        icon
                                        matRipple
                                        (click)="viewUpload(upload)"
                                        [disabled]="
                                            !upload.mime_type.includes(
                                                'image'
                                            ) &&
                                            !upload.mime_type.includes('video')
                                        "
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_VIEW' | translate
                                        "
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                    <button
                                        icon
                                        matRipple
                                        (click)="removeUpload(upload)"
                                        [matTooltip]="
                                            'ADMIN.UPLOADS_LIB_REMOVE'
                                                | translate
                                        "
                                        class="text-error"
                                    >
                                        <icon>delete</icon>
                                    </button>
                                </div>
                            </div>
                        </cdk-virtual-scroll-viewport>
                    </div>
                } @else {
                    <div
                        class="bg-base-200 flex flex-col items-center justify-center space-y-4 rounded-xl p-16"
                    >
                        <icon class="text-8xl opacity-30">file_upload</icon>
                        <p class="opacity-30">
                            {{ 'ADMIN.UPLOADS_LIB_LIST_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      ScrollingModule,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;1cf1f5a49063478207bea7778b57d6eab143dc5d3d94810e1192efbbb0f612be;/home/runner/work/backoffice/backoffice/src/app/admin/upload-library.component.ts */\n[header] icon {\n  opacity: 0;\n}\n[header] button.active icon {\n  opacity: 1;\n}\n[header] button:hover icon {\n  opacity: 0.3;\n}\n/*# sourceMappingURL=upload-library.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadLibraryComponent, { className: "UploadLibraryComponent", filePath: "src/app/admin/upload-library.component.ts", lineNumber: 368 });
})();
export {
  UploadLibraryComponent
};
//# sourceMappingURL=chunk-K7F7MTOF.js.map
