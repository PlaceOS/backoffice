import {
  uploadFile
} from "./chunk-XAS7GUY2.js";
import {
  SettingsToggleComponent
} from "./chunk-J5O27MHS.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-CEZ5W4YU.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6FMO72CJ.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-IE6E7XHG.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KHVEC2ZJ.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import {
  TranslatePipe
} from "./chunk-ZZM2ZLWR.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import {
  MatRipple
} from "./chunk-2UI5N333.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  Service,
  inject,
  lastValueFrom,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-N6UZRJAT.js";

// src/app/ui/upload-permissions-modal.component.ts
var _c0 = (a0, a1, a2) => ({ file: a0, is_public: a1, permissions: a2 });
function UploadPermissionsModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function UploadPermissionsModalComponent_Conditional_15_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.permissions, $event) || (ctx_r1.permissions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "mat-option", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 17);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "COMMON.PERMISSIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.permissions);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "COMMON.NONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "COMMON.USER_SUPPORT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "COMMON.USER_ADMIN"));
  }
}
var UploadPermissionsModalComponent = class _UploadPermissionsModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  /** File to upload */
  file = this._data.file;
  /** Whether file should be public */
  is_public = signal(
    false,
    ...ngDevMode ? [{ debugName: "is_public" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Permissions for file */
  permissions = signal(
    "none",
    ...ngDevMode ? [{ debugName: "permissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  close = () => this._dialog_ref.close();
  static \u0275fac = function UploadPermissionsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadPermissionsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadPermissionsModalComponent, selectors: [["upload-permissions-modal"]], decls: 27, vars: 26, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[24rem]", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "min-w-[20rem]", "px-4"], [1, "flex", "flex-col", "space-y-2"], ["for", "filename"], ["appearance", "outline"], ["id", "filename", "matInput", "", "disabled", "true", 3, "ngModel", "placeholder"], [1, "pb-4"], [3, "ngModelChange", "ngModel"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "w-32", "flex-1"], ["btn", "", "matRipple", "", 1, "w-32", "flex-1", 3, "mat-dialog-close"], ["for", "permissions"], ["id", "permissions", 3, "ngModelChange", "ngModel"], ["value", "none"], ["value", "support"], ["value", "admin"]], template: function UploadPermissionsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2)(5, "icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "main", 3)(8, "div", 4)(9, "label", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-form-field", 6);
      \u0275\u0275element(13, "input", 7);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, UploadPermissionsModalComponent_Conditional_15_Template, 15, 13, "div", 4);
      \u0275\u0275elementStart(16, "div", 8)(17, "settings-toggle", 9);
      \u0275\u0275twoWayListener("ngModelChange", function UploadPermissionsModalComponent_Template_settings_toggle_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.is_public, $event) || (ctx.is_public = $event);
        return $event;
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "footer", 10)(21, "button", 11);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 12);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "COMMON.UPLOAD_FILE"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "COMMON.FILENAME"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.file.name)("placeholder", \u0275\u0275pipeBind1(14, 14, "COMMON.FILENAME"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.is_public() ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.is_public);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "COMMON.PUBLIC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 18, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("mat-dialog-close", \u0275\u0275pureFunction3(22, _c0, ctx.file, ctx.is_public(), ctx.permissions()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "COMMON.UPLOAD"), " ");
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadPermissionsModalComponent, [{
    type: Component,
    args: [{ selector: "upload-permissions-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[24rem] max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.UPLOAD_FILE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] px-4">
            <div class="flex flex-col space-y-2">
                <label for="filename">{{
                    'COMMON.FILENAME' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <input
                        id="filename"
                        matInput
                        [ngModel]="file.name"
                        disabled="true"
                        [placeholder]="'COMMON.FILENAME' | translate"
                    />
                </mat-form-field>
            </div>
            @if (!is_public()) {
                <div class="flex flex-col space-y-2">
                    <label for="permissions">{{
                        'COMMON.PERMISSIONS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select id="permissions" [(ngModel)]="permissions">
                            <mat-option value="none">
                                {{ 'COMMON.NONE' | translate }}</mat-option
                            >
                            <mat-option value="support">
                                {{
                                    'COMMON.USER_SUPPORT' | translate
                                }}</mat-option
                            >
                            <mat-option value="admin">
                                {{
                                    'COMMON.USER_ADMIN' | translate
                                }}</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            <div class="pb-4">
                <settings-toggle [(ngModel)]="is_public">{{
                    'COMMON.PUBLIC' | translate
                }}</settings-toggle>
            </div>
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32 flex-1" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-32 flex-1"
                [mat-dialog-close]="{
                    file,
                    is_public: is_public(),
                    permissions: permissions(),
                }"
            >
                {{ 'COMMON.UPLOAD' | translate }}
            </button>
        </footer>
    `, imports: [
      MatDialogModule,
      TranslatePipe,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FormsModule,
      IconComponent,
      SettingsToggleComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadPermissionsModalComponent, { className: "UploadPermissionsModalComponent", filePath: "src/app/ui/upload-permissions-modal.component.ts", lineNumber: 108 });
})();

// src/app/common/uploads.service.ts
var UploadsService = class _UploadsService {
  _dialog = inject(MatDialog);
  _upload_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_upload_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  upload_list = this._upload_list.asReadonly();
  constructor() {
    if (localStorage) {
      this._upload_list.set(JSON.parse(localStorage.getItem("BACKOFFICE.uploads") || "[]"));
    }
  }
  clearList() {
    const in_progress_list = this._upload_list().filter((file) => file.progress < 100 && !file.error);
    this._upload_list.set(in_progress_list);
  }
  uploadFileWithPermissions(file) {
    return new Promise((resolve, reject) => {
      const ref = this._dialog.open(UploadPermissionsModalComponent, {
        data: { file }
      });
      lastValueFrom(ref.afterClosed()).then(async (details) => {
        if (details) {
          const id = await this.uploadFile(details.file, details.is_public, details.permissions).catch((e) => {
            reject(e);
            throw e;
          });
          resolve(id);
        } else
          reject();
      });
    });
  }
  uploadFile(file, is_public = true, permissions = "none") {
    return new Promise((resolve) => {
      let resolved = false;
      const update_fn = (details) => {
        if (!resolved) {
          resolve(details.id);
          resolved = true;
        }
        this._upload_list.set([
          ...this._upload_list().filter((_) => _.id !== details.id),
          details
        ]);
      };
      uploadFile(file, is_public, permissions).subscribe(update_fn, update_fn, () => this._updateUploadHistory());
    });
  }
  _updateUploadHistory() {
    const done_list = this._upload_list().filter((file) => file.progress >= 100);
    done_list.forEach((i) => delete i.upload);
    if (localStorage) {
      localStorage.setItem("BACKOFFICE.uploads", JSON.stringify(done_list));
    }
  }
  static \u0275fac = function UploadsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _UploadsService, factory: _UploadsService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadsService, [{
    type: Service
  }], () => [], null);
})();

export {
  UploadsService
};
//# sourceMappingURL=chunk-RSXXMA3P.js.map
