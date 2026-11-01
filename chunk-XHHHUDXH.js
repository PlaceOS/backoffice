import {
  AdminDomainSelectComponent
} from "./chunk-T2RCNIFP.js";
import {
  AdminDataService
} from "./chunk-AKUGSN4Q.js";
import {
  DateFromPipe
} from "./chunk-I2OEFHT5.js";
import "./chunk-S2SB26WJ.js";
import {
  reportLoadError
} from "./chunk-YMHTGTAC.js";
import {
  SimpleTableComponent
} from "./chunk-V6SHQ5T3.js";
import "./chunk-TPDHL3PI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import {
  confirmAndRun
} from "./chunk-K5IHFRPQ.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  SettingsToggleComponent
} from "./chunk-FK3PXAKX.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-FSFNWGQP.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-RY3VY3I7.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  form,
  required,
  submit
} from "./chunk-W2EPZJRF.js";
import "./chunk-PSLPWDNG.js";
import "./chunk-HAWZID7H.js";
import {
  LoadingLabelDirective
} from "./chunk-2RUCGFPD.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2VSGNNLN.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-3SL5US3K.js";
import "./chunk-7CC5FNME.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-4K4B4UVA.js";
import {
  MatOption
} from "./chunk-QRPWL2EI.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AJCRFHSH.js";
import {
  TranslatePipe
} from "./chunk-4ZLGHXUI.js";
import {
  i18n
} from "./chunk-XJOCECBM.js";
import {
  escapeHtml
} from "./chunk-J5ZLUQMI.js";
import {
  $,
  A,
  P,
  ci,
  q
} from "./chunk-OTGYPXXQ.js";
import {
  IconComponent
} from "./chunk-NUJGQXME.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
  ɵɵtextInterpolate1
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/storage/storage.fn.ts
var PATH = "storages";
var PlaceStorage = class {
  /** ID of the storage */
  id;
  /** ID of the authority the storage is under */
  authority_id;
  /** Type of the storage */
  storage_type;
  /** Name of the storage */
  bucket_name;
  /** Region of the storage */
  region;
  /** Access key for the storage */
  access_key;
  /** Access secret for the storage */
  access_secret;
  /** Endpoint for the storage */
  endpoint;
  /** File type extensions to filter out */
  ext_filter;
  /** File MIME type extensions to filter out */
  mime_filter;
  /** Whether the storage is the default */
  is_default;
  constructor(item = {}) {
    Object.assign(this, item);
  }
};
function process(item) {
  return new PlaceStorage(item);
}
function queryStorage(query_params = {}) {
  return $({ query_params, fn: process, path: PATH });
}
function updateStorage(id, form_data, method = "patch") {
  return P({
    id,
    form_data,
    query_params: {},
    method,
    fn: process,
    path: PATH
  });
}
function saveStorage(item) {
  const data = ci(item, ["", void 0, null]);
  return item.id ? updateStorage(item.id, data, "put") : addStorage(data);
}
function addStorage(form_data) {
  return q({ form_data, query_params: {}, fn: process, path: PATH });
}
function removeStorage(id, query_params = {}) {
  return A({ id, query_params, path: PATH });
}

// src/app/admin/storage/storage-provider-modal.component.ts
function StorageProviderModalComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ext_r1 = ctx.$implicit;
    \u0275\u0275property("value", ext_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ext_r1, " ");
  }
}
function StorageProviderModalComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mime_r2 = ctx.$implicit;
    \u0275\u0275property("value", mime_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mime_r2, " ");
  }
}
var StorageProviderModalComponent = class _StorageProviderModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  ALLOWED_FILE_EXTENSIONS = [
    "png",
    "webp",
    "bmp",
    "jpg",
    "jpeg",
    "gif",
    "svg",
    "txt",
    "csv",
    "tsv",
    "pdf",
    "tif",
    "tiff",
    "mp3",
    "ogg",
    "rar",
    "zip",
    "mp4",
    "webm"
  ].sort((a, b) => a.localeCompare(b));
  ALLOWED_MIME_TYPES = [
    "image/png",
    "image/webp",
    "image/bmp",
    "image/jpeg",
    "image/gif",
    "image/svg+xml",
    "text/plain",
    "text/csv",
    "application/pdf",
    "image/tiff",
    "audio/mpeg",
    "audio/ogg",
    "application/vnd.rar",
    "application/zip",
    "video/mp4",
    "video/webm"
  ].sort((a, b) => a.localeCompare(b));
  storage = this._data.item;
  formModel = signal(
    {
      id: this._data.item?.id || "",
      authority_id: this._data.domain || "",
      storage_type: this._data.item?.storage_type || "s3",
      bucket_name: this._data.item?.bucket_name || "",
      region: this._data.item?.region || "",
      access_key: this._data.item?.access_key || "",
      access_secret: "",
      endpoint: this._data.item?.endpoint || "",
      ext_filter: [...this._data.item?.ext_filter || []],
      mime_filter: [...this._data.item?.mime_filter || []],
      is_default: this._data.item?.is_default || false
    },
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    required(path.storage_type);
    required(path.bucket_name);
    required(path.region);
    required(path.access_key);
    required(path.access_secret, {
      when: () => !this._data.item?.id
    });
  });
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async save() {
    await submit(this.form, async () => void 0);
    if (this.form().invalid())
      return;
    this.loading.set("Saving storage provider...");
    const details = __spreadValues({}, this.formModel());
    if (details.id && !details.access_secret) {
      delete details.access_secret;
    }
    try {
      await saveStorage(details);
    } catch (err) {
      return notifyError(`${i18n("ADMIN.STORAGE_SAVE_ERROR")} Error: ${await readError(err)}`);
    } finally {
      this.loading.set("");
    }
    notifySuccess(i18n("ADMIN.STORAGE_SAVE_SUCCESS"));
    this._dialog_ref.close();
  }
  static \u0275fac = function StorageProviderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageProviderModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorageProviderModalComponent, selectors: [["storage-provider-modal"]], decls: 82, vars: 72, consts: [[3, "save", "heading", "loading"], [1, "w-full"], [1, "flex", "flex-col"], ["for", "storage-type"], ["appearance", "outline"], ["placeholder", "None", 3, "formField"], ["value", "s3"], ["value", "azure"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col"], ["for", "bucket-name"], ["matInput", "", 3, "formField", "placeholder"], ["for", "region"], ["for", "access-key"], ["for", "access-secret"], ["for", "endpoint"], ["for", "extensions"], [3, "formField", "placeholder", "multiple"], [3, "value"], ["for", "mime-types"], [3, "formField"]], template: function StorageProviderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function StorageProviderModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label", 3);
      \u0275\u0275text(5, "Storage Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-select", 5);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(8, "mat-option", 6);
      \u0275\u0275text(9, "Amazon S3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-option", 7);
      \u0275\u0275text(11, "Microsoft Azure");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 4)(18, "input", 11);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-error");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 9)(24, "label", 12);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-form-field", 4)(28, "input", 11);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-error");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 8)(34, "div", 9)(35, "label", 13);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-form-field", 4)(39, "input", 11);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-error");
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 9)(45, "label", 14);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "mat-form-field", 4)(49, "input", 11);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "mat-error");
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 2)(55, "label", 15);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "mat-form-field", 4)(59, "input", 11);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 2)(62, "label", 16);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-form-field", 4)(66, "mat-select", 17);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275repeaterCreate(68, StorageProviderModalComponent_For_69_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 2)(71, "label", 19);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-form-field", 4)(75, "mat-select", 17);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275repeaterCreate(77, StorageProviderModalComponent_For_78_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "settings-toggle", 20);
      \u0275\u0275controlCreate();
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 32, ctx.storage?.id ? "ADMIN.STORAGE_EDIT" : "ADMIN.STORAGE_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(7);
      \u0275\u0275property("formField", ctx.form.storage_type);
      \u0275\u0275control();
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 34, "ADMIN.STORAGE_BUCKET_NAME_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.bucket_name)("placeholder", \u0275\u0275pipeBind1(19, 36, "ADMIN.STORAGE_BUCKET_NAME_LABEL"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 38, "ADMIN.STORAGE_BUCKET_NAME_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 40, "ADMIN.STORAGE_REGION_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.region)("placeholder", \u0275\u0275pipeBind1(29, 42, "ADMIN.STORAGE_REGION_LABEL"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 44, "ADMIN.STORAGE_REGION_REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 46, "ADMIN.STORAGE_ACCESS_KEY_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.access_key)("placeholder", \u0275\u0275pipeBind1(40, 48, "ADMIN.STORAGE_ACCESS_KEY_LABEL"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 50, "ADMIN.STORAGE_ACCESS_KEY_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 52, "ADMIN.STORAGE_SECRET_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.access_secret)("placeholder", \u0275\u0275pipeBind1(50, 54, "ADMIN.STORAGE_SECRET_LABEL"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 56, "ADMIN.STORAGE_ACCESS_KEY_REQUIRED"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 58, "ADMIN.STORAGE_ENDPOINT_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.endpoint)("placeholder", \u0275\u0275pipeBind1(60, 60, "ADMIN.STORAGE_ENDPOINT_LABEL"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 62, "ADMIN.STORAGE_ALLOWED_EXTENSIONS_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.ext_filter)("placeholder", \u0275\u0275pipeBind1(67, 64, "ADMIN.STORAGE_ALLOW_ALL_EXTENSIONS"))("multiple", true);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.ALLOWED_FILE_EXTENSIONS);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 66, "ADMIN.STORAGE_ALLOWED_MIME_LABEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.mime_filter)("placeholder", \u0275\u0275pipeBind1(76, 68, "ADMIN.STORAGE_ALLOW_ALL_MIME"))("multiple", true);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.ALLOWED_MIME_TYPES);
      \u0275\u0275advance(2);
      \u0275\u0275property("formField", ctx.form.is_default);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 70, "ADMIN.STORAGE_IS_DEFAULT_LABEL"));
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    SettingsToggleComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormField,
    MatInputModule,
    MatInput,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageProviderModalComponent, [{
    type: Component,
    args: [{ selector: "storage-provider-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (storage?.id ? 'ADMIN.STORAGE_EDIT' : 'ADMIN.STORAGE_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form class="w-full">
                <div class="flex flex-col">
                    <label for="storage-type">Storage Type</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.storage_type"
                            placeholder="None"
                        >
                            <mat-option value="s3">Amazon S3</mat-option>
                            <mat-option value="azure"
                                >Microsoft Azure</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="bucket-name">{{
                            'ADMIN.STORAGE_BUCKET_NAME_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.bucket_name"
                                [placeholder]="
                                    'ADMIN.STORAGE_BUCKET_NAME_LABEL'
                                        | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_BUCKET_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="region">{{
                            'ADMIN.STORAGE_REGION_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.region"
                                [placeholder]="
                                    'ADMIN.STORAGE_REGION_LABEL' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_REGION_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="access-key">{{
                            'ADMIN.STORAGE_ACCESS_KEY_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.access_key"
                                [placeholder]="
                                    'ADMIN.STORAGE_ACCESS_KEY_LABEL' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_ACCESS_KEY_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="access-secret">{{
                            'ADMIN.STORAGE_SECRET_LABEL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form.access_secret"
                                [placeholder]="
                                    'ADMIN.STORAGE_SECRET_LABEL' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.STORAGE_ACCESS_KEY_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="endpoint">{{
                        'ADMIN.STORAGE_ENDPOINT_LABEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.endpoint"
                            [placeholder]="
                                'ADMIN.STORAGE_ENDPOINT_LABEL' | translate
                            "
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="extensions">{{
                        'ADMIN.STORAGE_ALLOWED_EXTENSIONS_LABEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.ext_filter"
                            [placeholder]="
                                'ADMIN.STORAGE_ALLOW_ALL_EXTENSIONS' | translate
                            "
                            [multiple]="true"
                        >
                            @for (ext of ALLOWED_FILE_EXTENSIONS; track ext) {
                                <mat-option [value]="ext">
                                    {{ ext }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="mime-types">{{
                        'ADMIN.STORAGE_ALLOWED_MIME_LABEL' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.mime_filter"
                            [placeholder]="
                                'ADMIN.STORAGE_ALLOW_ALL_MIME' | translate
                            "
                            [multiple]="true"
                        >
                            @for (mime of ALLOWED_MIME_TYPES; track mime) {
                                <mat-option [value]="mime">
                                    {{ mime }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <settings-toggle [formField]="form.is_default">{{
                    'ADMIN.STORAGE_IS_DEFAULT_LABEL' | translate
                }}</settings-toggle>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      TranslatePipe,
      MatFormFieldModule,
      MatSelectModule,
      FormField,
      MatInputModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorageProviderModalComponent, { className: "StorageProviderModalComponent", filePath: "src/app/admin/storage/storage-provider-modal.component.ts", lineNumber: 185 });
})();

// src/app/admin/storage/storage.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "storage_type", name: a0, content: a1, size: "6rem" });
var _c2 = (a0, a1) => ({ key: "region", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "updated_at", name: a0, content: a1, size: "10rem" });
var _c4 = (a0, a1) => ({ key: "is_default", name: a0, content: a1, size: "5.5rem" });
var _c5 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "6.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c7 = (a0) => ({ item: a0 });
function StorageComponent_ng_template_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Any Domain");
    \u0275\u0275elementEnd();
  }
}
function StorageComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StorageComponent_ng_template_22_Conditional_3_Template, 2, 0, "span", 15);
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.domain?.name || row_r1.authority_id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r1.domain?.name && !row_r1.authority_id ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.authority_id);
  }
}
function StorageComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2);
  }
}
function StorageComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, +data_r3 * 1e3), " ");
  }
}
function StorageComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "icon", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", data_r4)("text-success-content", data_r4)("bg-error", !data_r4)("text-error-content", !data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4 ? "check" : "close");
  }
}
function StorageComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function StorageComponent_ng_template_30_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.edit(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function StorageComponent_ng_template_30_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.remove(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.STORAGE_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.STORAGE_REMOVE"));
  }
}
var StorageComponent = class _StorageComponent {
  _dialog = inject(MatDialog);
  _admin_data = inject(AdminDataService);
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  store_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "store_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  domain_list = this._admin_data.domain_list;
  domain = this._admin_data.selectedDomain("storage");
  storage_list = computed(
    () => {
      const stores = this.store_list();
      return stores.map((store) => __spreadProps(__spreadValues({}, store), {
        domain: this.domain_list().find((d) => d.id === store.authority_id)
      }));
    },
    ...ngDevMode ? [{ debugName: "storage_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    this.loading.set("Loading domains...");
    await this._admin_data.loadDomains();
    this.loadStorage();
    this.loading.set("");
  }
  edit(item) {
    const ref = this._dialog.open(StorageProviderModalComponent, {
      data: { item, domain: this.domain()?.id }
    });
    ref.afterClosed().subscribe(() => this.loadStorage());
  }
  async remove(item) {
    const removed = await confirmAndRun(this._dialog, {
      title: i18n("ADMIN.STORAGE_REMOVE_TITLE"),
      content: i18n("ADMIN.STORAGE_REMOVE_MSG", {
        type: escapeHtml(item.storage_type),
        name: escapeHtml(item.bucket_name)
      }),
      icon: { content: "delete_forever" }
    }, {
      loading: i18n("ADMIN.STORAGE_REMOVE_LOADING"),
      action: () => removeStorage(item.id),
      error: (reason) => `Failed to remove storage provider. Error: ${reason}`
    });
    if (removed)
      this.loadStorage();
  }
  async loadStorage() {
    this.loading.set("Loading storage...");
    const { data } = await queryStorage({
      auth_id: this.domain()?.id
    }).catch(reportLoadError({ data: [] }));
    this.store_list.set(data);
    this.loading.set("");
  }
  static \u0275fac = function StorageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorageComponent, selectors: [["app-storage"]], decls: 32, vars: 57, consts: [["name_template", ""], ["code_template", ""], ["date_from_template", ""], ["bool_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["key", "storage", "all", "", "field_class", "h-12", 3, "changed"], ["icon", "", "default", "", "matRipple", "", 1, "text-xl", 3, "click", "matTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-176", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "opacity-30"], [1, "text-xs", "opacity-30"], [1, "p-4"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function StorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "admin-domain-select", 9);
      \u0275\u0275listener("changed", function StorageComponent_Template_admin_domain_select_changed_6_listener() {
        return ctx.loadStorage();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 10);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("click", function StorageComponent_Template_button_click_7_listener() {
        return ctx.edit();
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275element(13, "mat-progress-bar", 12)(14, "simple-table", 13);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, StorageComponent_ng_template_22_Template, 6, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, StorageComponent_ng_template_24_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(26, StorageComponent_ng_template_26_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, StorageComponent_ng_template_28_Template, 4, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, StorageComponent_ng_template_30_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r8 = \u0275\u0275reference(23);
      const code_template_r9 = \u0275\u0275reference(25);
      const date_from_template_r10 = \u0275\u0275reference(27);
      const bool_template_r11 = \u0275\u0275reference(29);
      const actions_template_r12 = \u0275\u0275reference(31);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "ADMIN.STORAGE_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 11, "ADMIN.STORAGE_ADD"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 13, "ADMIN.STORAGE_ADD"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.storage_list())("columns", \u0275\u0275pureFunction6(48, _c6, \u0275\u0275pureFunction2(30, _c0, \u0275\u0275pipeBind1(15, 15, "DOMAINS.SINGULAR"), name_template_r8), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(16, 17, "ADMIN.STORAGE_FIELD_TYPE"), code_template_r9), \u0275\u0275pureFunction2(36, _c2, \u0275\u0275pipeBind1(17, 19, "ADMIN.STORAGE_FIELD_REGION"), code_template_r9), \u0275\u0275pureFunction2(39, _c3, \u0275\u0275pipeBind1(18, 21, "COMMON.UPDATED_AT"), date_from_template_r10), \u0275\u0275pureFunction2(42, _c4, \u0275\u0275pipeBind1(19, 23, "ADMIN.STORAGE_FIELD_DEFAULT"), bool_template_r11), \u0275\u0275pureFunction2(45, _c5, \u0275\u0275pipeBind1(20, 25, "COMMON.ACTIONS"), actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind2(21, 27, "ADMIN.STORAGE_LIST_EMPTY", \u0275\u0275pureFunction1(55, _c7, ctx.domain() ? "selected" : "any")));
    }
  }, dependencies: [
    AdminDomainSelectComponent,
    LoadingLabelDirective,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe,
    DateFromPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageComponent, [{
    type: Component,
    args: [{ selector: "app-storage", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.STORAGE_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <admin-domain-select
                        key="storage"
                        all
                        field_class="h-12"
                        (changed)="loadStorage()"
                    />
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="edit()"
                        [matTooltip]="'ADMIN.STORAGE_ADD' | translate"
                        [attr.aria-label]="'ADMIN.STORAGE_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-176 text-sm"
                    [data]="storage_list()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'DOMAINS.SINGULAR' | translate,
                            content: name_template,
                        },
                        {
                            key: 'storage_type',
                            name: 'ADMIN.STORAGE_FIELD_TYPE' | translate,
                            content: code_template,
                            size: '6rem',
                        },
                        {
                            key: 'region',
                            name: 'ADMIN.STORAGE_FIELD_REGION' | translate,
                            content: code_template,
                        },
                        {
                            key: 'updated_at',
                            name: 'COMMON.UPDATED_AT' | translate,
                            content: date_from_template,
                            size: '10rem',
                        },
                        {
                            key: 'is_default',
                            name: 'ADMIN.STORAGE_FIELD_DEFAULT' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.STORAGE_LIST_EMPTY'
                            | translate
                                : {
                                      item: domain() ? 'selected' : 'any',
                                  }
                    "
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>
                    {{ row.domain?.name || row.authority_id }}
                </div>
                @if (!row.domain?.name && !row.authority_id) {
                    <span class="opacity-30">Any Domain</span>
                }
                <div class="text-xs opacity-30">{{ row.authority_id }}</div>
            </div>
        </ng-template>
        <ng-template #code_template let-data="data">
            <div class="p-4">
                <code>{{ data }}</code>
            </div>
        </ng-template>
        <ng-template #date_from_template let-data="data">
            <div class="p-4">
                {{ +data * 1000 | dateFrom }}
            </div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div class="flex h-full w-full items-center justify-center">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-sm"
                    [class.bg-success]="data"
                    [class.text-success-content]="data"
                    [class.bg-error]="!data"
                    [class.text-error-content]="!data"
                >
                    <icon class="text-2xl">{{ data ? 'check' : 'close' }}</icon>
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.STORAGE_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.STORAGE_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      AdminDomainSelectComponent,
      LoadingLabelDirective,
      IconComponent,
      MatRippleModule,
      TranslatePipe,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      DateFromPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorageComponent, { className: "StorageComponent", filePath: "src/app/admin/storage/storage.component.ts", lineNumber: 177 });
})();
export {
  StorageComponent
};
//# debugId=12719a69-da6b-5b72-8671-180ed7a5c85e
//# sourceMappingURL=chunk-XHHHUDXH.js.map
