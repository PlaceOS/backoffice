import {
  SettingsToggleComponent
} from "./chunk-7CN2TEC2.js";
import {
  SelectComponent
} from "./chunk-I2BE2RKH.js";
import {
  OptionComponent
} from "./chunk-BE6PEWTW.js";
import {
  FormFieldComponent
} from "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PUVLCN6F.js";
import {
  DialogTitleDirective
} from "./chunk-OB35UHVX.js";
import {
  DialogCloseDirective
} from "./chunk-YOF5WDB4.js";
import {
  DIALOG_DATA,
  DialogRef
} from "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import "./chunk-RQOHFMTH.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/upload-permissions-modal.component.ts
var _c0 = (a0, a1, a2) => ({ file: a0, is_public: a1, permissions: a2 });
function UploadPermissionsModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "app-select", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function UploadPermissionsModalComponent_Conditional_16_Template_app_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.permissions, $event) || (ctx_r1.permissions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "app-option", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-option", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-option", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
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
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadPermissionsModalComponent, selectors: [["upload-permissions-modal"]], decls: 28, vars: 29, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[24rem]", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], ["appDialogTitle", "", 1, "px-2", "text-xl", "font-medium"], ["icon", "", "ripple", "", "appDialogClose", ""], [1, "min-w-[20rem]", "px-4"], [1, "flex", "flex-col", "space-y-2"], ["for", "filename"], ["id", "filename", "disabled", "true", 3, "ngModel", "placeholder"], [1, "pb-4"], [3, "ngModelChange", "ngModel"], [1, "border-base-200", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "ripple", "", "appDialogClose", "", 1, "inverse", "w-32", "flex-1"], ["btn", "", "ripple", "", 1, "w-32", "flex-1", 3, "appDialogClose"], ["for", "permissions"], ["id", "permissions", 3, "ngModelChange", "ngModel"], ["value", "none"], ["value", "support"], ["value", "admin"]], template: function UploadPermissionsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "icon");
      \u0275\u0275text(7, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "main", 3)(9, "div", 4)(10, "label", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-form-field")(14, "input", 6);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, UploadPermissionsModalComponent_Conditional_16_Template, 15, 13, "div", 4);
      \u0275\u0275elementStart(17, "div", 7)(18, "settings-toggle", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function UploadPermissionsModalComponent_Template_settings_toggle_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.is_public, $event) || (ctx.is_public = $event);
        return $event;
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "footer", 9)(22, "button", 10);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 11);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 11, "COMMON.UPLOAD_FILE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 13, "COMMON.CLOSE"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "COMMON.FILENAME"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.file.name)("placeholder", \u0275\u0275pipeBind1(15, 17, "COMMON.FILENAME"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.is_public() ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.is_public);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, "COMMON.PUBLIC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 21, "COMMON.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("appDialogClose", \u0275\u0275pureFunction3(25, _c0, ctx.file, ctx.is_public(), ctx.permissions()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 23, "COMMON.UPLOAD"), " ");
    }
  }, dependencies: [
    DialogCloseDirective,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    DialogTitleDirective,
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
            <h2 appDialogTitle class="px-2 text-xl font-medium">
                {{ 'COMMON.UPLOAD_FILE' | translate }}
            </h2>
            <button
                icon
                ripple
                appDialogClose
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-[20rem] px-4">
            <div class="flex flex-col space-y-2">
                <label for="filename">{{
                    'COMMON.FILENAME' | translate
                }}</label>
                <app-form-field>
                    <input
                        id="filename"
                        [ngModel]="file.name"
                        disabled="true"
                        [placeholder]="'COMMON.FILENAME' | translate"
                    />
                </app-form-field>
            </div>
            @if (!is_public()) {
                <div class="flex flex-col space-y-2">
                    <label for="permissions">{{
                        'COMMON.PERMISSIONS' | translate
                    }}</label>
                    <app-form-field>
                        <app-select id="permissions" [(ngModel)]="permissions">
                            <app-option value="none">
                                {{ 'COMMON.NONE' | translate }}</app-option
                            >
                            <app-option value="support">
                                {{
                                    'COMMON.USER_SUPPORT' | translate
                                }}</app-option
                            >
                            <app-option value="admin">
                                {{
                                    'COMMON.USER_ADMIN' | translate
                                }}</app-option
                            >
                        </app-select>
                    </app-form-field>
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
            <button btn ripple class="inverse w-32 flex-1" appDialogClose>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                ripple
                class="w-32 flex-1"
                [appDialogClose]="{
                    file,
                    is_public: is_public(),
                    permissions: permissions(),
                }"
            >
                {{ 'COMMON.UPLOAD' | translate }}
            </button>
        </footer>
    `, imports: [
      DialogCloseDirective,
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      DialogTitleDirective,
      TranslatePipe,
      FormsModule,
      IconComponent,
      SettingsToggleComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadPermissionsModalComponent, { className: "UploadPermissionsModalComponent", filePath: "src/app/ui/upload-permissions-modal.component.ts", lineNumber: 109 });
})();
export {
  UploadPermissionsModalComponent
};
//# debugId=2b1dc081-34d7-5454-b173-d0d24c4b8fa7
//# sourceMappingURL=chunk-MYBRYVQ2.js.map
