import {
  AdminDomainSelectComponent
} from "./chunk-WW2Z3IXZ.js";
import {
  AdminDataService
} from "./chunk-PVQ3M4OO.js";
import {
  DateFromPipe
} from "./chunk-D6MJKT74.js";
import "./chunk-S2SB26WJ.js";
import {
  AuthenticatedImageDirective
} from "./chunk-YBIQG26C.js";
import {
  SimpleTableComponent
} from "./chunk-P3JIVHGO.js";
import "./chunk-TPDHL3PI.js";
import {
  confirmAndRun
} from "./chunk-TIQYM46E.js";
import {
  Clipboard
} from "./chunk-BZ6PXTOX.js";
import "./chunk-NU6VCAIQ.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import "./chunk-G3URG5GH.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-JVQGOL5R.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-7XEKM6I6.js";
import "./chunk-6MC6LRI6.js";
import "./chunk-2J4AQQD6.js";
import {
  DialogTitleDirective
} from "./chunk-YPHWH3TO.js";
import "./chunk-AMKDP3WE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PZ6AYSMX.js";
import {
  UploadsService
} from "./chunk-OQIH5V5D.js";
import {
  LoadingLabelDirective
} from "./chunk-C5JU5DGK.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-T674EZ22.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-XTVPLVG6.js";
import {
  AsyncHandler
} from "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
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
} from "./chunk-Y2BF2IN5.js";
import {
  i18n
} from "./chunk-LD7JHF4N.js";
import {
  $,
  A,
  J,
  ci,
  et
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
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
  computed,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DTROA6L2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewUploadModalComponent, selectors: [["view-upload-modal"]], decls: 12, vars: 3, consts: [[1, "border-base-100", "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-lg", "border", "px-4", "py-2"], ["appDialogTitle", "", 1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", "aria-label", "Close"], [1, "px-2", "pb-2"], [1, "border-base-200", "relative", "flex", "h-[65vh]", "max-h-[65vh]", "w-[80vw]", "max-w-[80vw]", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border"], ["auth", "", "alt", "Uploaded content preview", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], ["auth", "", "autoplay", "", "controls", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "border-base-200", "bg-base-100", "absolute", "top-2", "left-2", "max-w-[calc(100%-1rem)]", "rounded-full", "border", "px-2", "py-1", "font-mono", "text-sm"]], template: function ViewUploadModalComponent_Template(rf, ctx) {
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
    DialogTitleDirective,
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
            class="border-base-100 bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-lg border px-4 py-2"
        >
            <h2 appDialogTitle class="text-xl font-medium">View Upload</h2>
            <button icon matRipple mat-dialog-close aria-label="Close">
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
                        alt="Uploaded content preview"
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
      DialogTitleDirective,
      MatDialogModule,
      AuthenticatedImageDirective,
      IconComponent,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewUploadModalComponent, { className: "ViewUploadModalComponent", filePath: "src/app/admin/view-upload-modal.component.ts", lineNumber: 58 });
})();

// src/app/admin/upload-library.component.ts
var _c0 = (a0, a1) => ({ key: "file_name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "mime_type", name: a0, content: a1, size: "10rem" });
var _c2 = (a0, a1) => ({ key: "file_size", name: a0, content: a1, size: "7rem" });
var _c3 = (a0, a1) => ({ key: "created_at", name: a0, content: a1, size: "8rem" });
var _c4 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, sortable: false, content: a1, size: "11.5rem" });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function UploadLibraryComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "simple-table", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("sortChange", function UploadLibraryComponent_Conditional_21_Template_simple_table_sortChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.sort, $event) || (ctx_r3.sort = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const name_template_r5 = \u0275\u0275reference(24);
    const type_template_r6 = \u0275\u0275reference(26);
    const size_template_r7 = \u0275\u0275reference(28);
    const date_template_r8 = \u0275\u0275reference(30);
    const actions_template_r9 = \u0275\u0275reference(32);
    \u0275\u0275property("virtual_row_height", 48)("data", ctx_r3.uploads_list())("columns", \u0275\u0275pureFunction5(30, _c5, \u0275\u0275pureFunction2(15, _c0, \u0275\u0275pipeBind1(1, 5, "COMMON.FIELD_NAME"), name_template_r5), \u0275\u0275pureFunction2(18, _c1, \u0275\u0275pipeBind1(2, 7, "ADMIN.UPLOADS_LIB_FIELD_TYPE"), type_template_r6), \u0275\u0275pureFunction2(21, _c2, \u0275\u0275pipeBind1(3, 9, "ADMIN.UPLOADS_LIB_FIELD_SIZE"), size_template_r7), \u0275\u0275pureFunction2(24, _c3, \u0275\u0275pipeBind1(4, 11, "COMMON.CREATED_AT"), date_template_r8), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(5, 13, "COMMON.ACTIONS"), actions_template_r9)))("sortable", true);
    \u0275\u0275twoWayProperty("sort", ctx_r3.sort);
  }
}
function UploadLibraryComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "icon", 22);
    \u0275\u0275text(2, "file_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "ADMIN.UPLOADS_LIB_LIST_EMPTY"), " ");
  }
}
function UploadLibraryComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const upload_r10 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", upload_r10.file_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", upload_r10.file_name, " ");
  }
}
function UploadLibraryComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const upload_r11 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(upload_r11.mime_type);
  }
}
function UploadLibraryComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const upload_r12 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.sizeOf(upload_r12.file_size), " ");
  }
}
function UploadLibraryComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const upload_r13 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, +upload_r13.created_at * 1e3));
  }
}
function UploadLibraryComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_ng_template_31_Template_button_click_1_listener() {
      const upload_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadUpload(upload_r15));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_ng_template_31_Template_button_click_5_listener() {
      const upload_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyLink(upload_r15));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_ng_template_31_Template_button_click_9_listener() {
      const upload_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewUpload(upload_r15));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 32);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function UploadLibraryComponent_ng_template_31_Template_button_click_13_listener() {
      const upload_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUpload(upload_r15));
    });
    \u0275\u0275elementStart(15, "icon");
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const upload_r15 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 5, "ADMIN.UPLOADS_LIB_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 7, "ADMIN.UPLOADS_LIB_COPY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !upload_r15.mime_type.includes("image") && !upload_r15.mime_type.includes("video"))("matTooltip", \u0275\u0275pipeBind1(10, 9, "ADMIN.UPLOADS_LIB_VIEW"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 11, "ADMIN.UPLOADS_LIB_REMOVE"));
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
var UPLOAD_POLL_MS = 250;
var MAX_UPLOAD_POLLS = 60 * 60 * 1e3 / UPLOAD_POLL_MS;
var UploadLibraryComponent = class _UploadLibraryComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  _clipboard = inject(Clipboard);
  _uploads = inject(UploadsService);
  _admin_data = inject(AdminDataService);
  search_term = this._admin_data.filter("upload-library:search");
  domain = this._admin_data.selectedDomain("upload-library");
  refresh = signal(
    0,
    ...ngDevMode ? [{ debugName: "refresh" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Table sort, kept when the user leaves the page */
  sort = this._admin_data.sort("upload-library:uploads");
  _uploads_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_uploads_list" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({
      domain: this.domain(),
      search: this.search_term(),
      refresh: this.refresh()
    }),
    loader: async ({ params }) => {
      const { domain, search } = params;
      if (!domain)
        return [];
      const response = await $({
        path: "uploads",
        query_params: ci({
          limit: 1e3,
          file_search: search,
          authority_id: domain.id
        }, [null, "", void 0])
      }).catch(async (err) => {
        notifyError(`Failed to load uploads. Error: ${await readError(err)}`);
        return { data: [] };
      });
      return response.data.map((_) => __spreadProps(__spreadValues({}, _), { mime_type: getMimeType(_.file_name) })).sort((a, b) => a.file_name.localeCompare(b.file_name));
    }
  }));
  uploads_list = computed(
    () => this._uploads_list.value() || [],
    ...ngDevMode ? [{ debugName: "uploads_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    await this._admin_data.selectDefaultDomain("upload-library");
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
            uploads.push(
              // A cancelled upload needs no feedback
              this._uploads.uploadFileWithPermissions(files[i]).catch(() => null)
            );
          }
          const id_list = (await Promise.all(uploads)).filter((_) => _ != null);
          if (!id_list.length)
            return;
          this.loading.set(true);
          let polls = 0;
          const checkUploads = () => {
            polls += 1;
            const list = this._uploads.upload_list();
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
            const finished = success + failed >= id_list.length;
            if (finished || polls >= MAX_UPLOAD_POLLS) {
              if (failed) {
                notifyError("Failed to upload files.");
              } else if (success && finished) {
                notifySuccess("Successfully uploaded files.");
              }
              this.clearTimeout("upload_list");
              this.loading.set(false);
              if (success)
                this.refresh.update((_) => _ + 1);
            } else {
              this.timeout("upload_list", checkUploads, UPLOAD_POLL_MS);
            }
          };
          checkUploads();
        }
      }
    });
  }
  async downloadUpload(upload) {
    const tkn = J();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(et()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/engine/v2/uploads;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
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
    const removed = await confirmAndRun(this._dialog, {
      title: i18n("ADMIN.UPLOADS_LIB_REMOVE"),
      content: i18n("ADMIN.UPLOADS_LIB_REMOVE_MSG", {
        filename: escapeHtml(upload.file_name)
      }),
      icon: { type: "icon", content: "delete" }
    }, {
      loading: i18n("ADMIN.UPLOADS_LIB_REMOVE_LOADING"),
      action: () => A({
        id: upload.id,
        query_params: {},
        path: "uploads"
      }),
      error: (reason) => `Failed to remove upload. Error: ${reason}`
    });
    if (removed)
      this.refresh.update((value) => value + 1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UploadLibraryComponent_BaseFactory;
    return function UploadLibraryComponent_Factory(__ngFactoryType__) {
      return (\u0275UploadLibraryComponent_BaseFactory || (\u0275UploadLibraryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UploadLibraryComponent)))(__ngFactoryType__ || _UploadLibraryComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadLibraryComponent, selectors: [["upload-library"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 13, consts: [["upload_file", ""], ["name_template", ""], ["type_template", ""], ["size_template", ""], ["date_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "mt-4", "mb-2", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["key", "upload-library"], ["icon", "", "default", "", "matRipple", "", 1, "relative", "text-xl", 3, "click", "matTooltip"], ["hidden", "", "type", "file", "multiple", "", 3, "change"], [1, "mb-4", "flex", "items-center", "justify-end", "space-x-2", "px-4"], ["appearance", "outline", 1, "no-subscript", "w-[20rem]", "max-w-full"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Search for file...", 3, "ngModelChange", "ngModel"], [1, "flex", "h-1/2", "min-h-0", "w-full", "flex-1", "flex-col", "px-4", "pb-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-h-0", "w-full", "min-w-240", "flex-1", "text-sm", 3, "virtual_row_height", "data", "columns", "sortable", "sort"], [1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "p-16"], [1, "block", "min-h-0", "w-full", "min-w-240", "flex-1", "text-sm", 3, "sortChange", "virtual_row_height", "data", "columns", "sortable", "sort"], [1, "text-8xl", "opacity-30"], [1, "opacity-30"], [1, "flex", "h-full", "w-full", "items-center", "p-4", "text-xs"], [1, "mono", "w-px", "flex-1", "truncate", 3, "matTooltip"], [1, "mono", "truncate", "p-4", "text-xs"], [1, "mono", "w-full", "p-4", "text-right", "text-xs"], [1, "p-4"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-2", "px-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function UploadLibraryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9);
      \u0275\u0275element(6, "admin-domain-select", 10);
      \u0275\u0275elementStart(7, "button", 11);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("click", function UploadLibraryComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        const upload_file_r2 = \u0275\u0275reference(13);
        return \u0275\u0275resetView(upload_file_r2.click());
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "upload");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "input", 12, 0);
      \u0275\u0275listener("change", function UploadLibraryComponent_Template_input_change_12_listener($event) {
        return ctx.handleFileEvent($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 13)(15, "mat-form-field", 14)(16, "icon", 15);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 16);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function UploadLibraryComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search_term, $event) || (ctx.search_term = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 17);
      \u0275\u0275element(20, "mat-progress-bar", 18);
      \u0275\u0275conditionalCreate(21, UploadLibraryComponent_Conditional_21_Template, 6, 36, "simple-table", 19)(22, UploadLibraryComponent_Conditional_22_Template, 6, 3, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, UploadLibraryComponent_ng_template_23_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, UploadLibraryComponent_ng_template_25_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(27, UploadLibraryComponent_ng_template_27_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(29, UploadLibraryComponent_ng_template_29_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(31, UploadLibraryComponent_ng_template_31_Template, 17, 13, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "ADMIN.UPLOADS_LIB_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 9, "COMMON.UPLOAD_FILE"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 11, "COMMON.UPLOAD_FILE"));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.search_term);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.uploads_list().length > 0 ? 21 : 22);
    }
  }, dependencies: [
    AdminDomainSelectComponent,
    LoadingLabelDirective,
    IconComponent,
    SimpleTableComponent,
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
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    DateFromPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadLibraryComponent, [{
    type: Component,
    args: [{
      selector: "upload-library",
      template: `
        <div class="flex h-full w-full flex-col">
            <div
                class="mt-4 mb-2 flex items-center justify-between space-x-2 px-4"
            >
                <div class="text-2xl">
                    {{ 'ADMIN.UPLOADS_LIB_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <admin-domain-select key="upload-library" />
                    <button
                        icon
                        default
                        matRipple
                        class="relative text-xl"
                        [matTooltip]="'COMMON.UPLOAD_FILE' | translate"
                        [attr.aria-label]="'COMMON.UPLOAD_FILE' | translate"
                        (click)="upload_file.click()"
                    >
                        <icon>upload</icon>
                    </button>
                    <input
                        #upload_file
                        hidden
                        type="file"
                        multiple
                        (change)="handleFileEvent($event)"
                    />
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
                        [(ngModel)]="search_term"
                    />
                </mat-form-field>
            </div>
            <div class="flex h-1/2 min-h-0 w-full flex-1 flex-col px-4 pb-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                @if (uploads_list().length > 0) {
                    <simple-table
                        class="block min-h-0 w-full min-w-240 flex-1 text-sm"
                        [virtual_row_height]="48"
                        [data]="uploads_list()"
                        [columns]="[
                            {
                                key: 'file_name',
                                name: 'COMMON.FIELD_NAME' | translate,
                                content: name_template,
                            },
                            {
                                key: 'mime_type',
                                name:
                                    'ADMIN.UPLOADS_LIB_FIELD_TYPE' | translate,
                                content: type_template,
                                size: '10rem',
                            },
                            {
                                key: 'file_size',
                                name:
                                    'ADMIN.UPLOADS_LIB_FIELD_SIZE' | translate,
                                content: size_template,
                                size: '7rem',
                            },
                            {
                                key: 'created_at',
                                name: 'COMMON.CREATED_AT' | translate,
                                content: date_template,
                                size: '8rem',
                            },
                            {
                                key: 'actions',
                                name: 'COMMON.ACTIONS' | translate,
                                hide_name: true,
                                sortable: false,
                                content: actions_template,
                                size: '11.5rem',
                            },
                        ]"
                        [sortable]="true"
                        [(sort)]="sort"
                    />
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
        <ng-template #name_template let-upload="row">
            <div class="flex h-full w-full items-center p-4 text-xs">
                <div
                    class="mono w-px flex-1 truncate"
                    [matTooltip]="upload.file_name"
                >
                    {{ upload.file_name }}
                </div>
            </div>
        </ng-template>
        <ng-template #type_template let-upload="row">
            <div class="mono truncate p-4 text-xs">{{ upload.mime_type }}</div>
        </ng-template>
        <ng-template #size_template let-upload="row">
            <div class="mono w-full p-4 text-right text-xs">
                {{ sizeOf(upload.file_size) }}
            </div>
        </ng-template>
        <ng-template #date_template let-upload="row">
            <div class="p-4">{{ +upload.created_at * 1000 | dateFrom }}</div>
        </ng-template>
        <ng-template #actions_template let-upload="row">
            <div class="flex w-full items-center justify-end space-x-2 px-2">
                <button
                    icon
                    default
                    matRipple
                    (click)="downloadUpload(upload)"
                    [matTooltip]="'ADMIN.UPLOADS_LIB_DOWNLOAD' | translate"
                >
                    <icon>download</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    (click)="copyLink(upload)"
                    [matTooltip]="'ADMIN.UPLOADS_LIB_COPY' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    (click)="viewUpload(upload)"
                    [disabled]="
                        !upload.mime_type.includes('image') &&
                        !upload.mime_type.includes('video')
                    "
                    [matTooltip]="'ADMIN.UPLOADS_LIB_VIEW' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    (click)="removeUpload(upload)"
                    [matTooltip]="'ADMIN.UPLOADS_LIB_REMOVE' | translate"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
      imports: [
        AdminDomainSelectComponent,
        LoadingLabelDirective,
        IconComponent,
        SimpleTableComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        DateFromPipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadLibraryComponent, { className: "UploadLibraryComponent", filePath: "src/app/admin/upload-library.component.ts", lineNumber: 284 });
})();
export {
  UploadLibraryComponent
};
//# debugId=c297d434-75eb-549b-8bf4-64158c2b8033
//# sourceMappingURL=chunk-TBQ5PASO.js.map
