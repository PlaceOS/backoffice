import {
  RepositoriesStateService
} from "./chunk-YNED6BWO.js";
import {
  SimpleTableComponent
} from "./chunk-JX3DYPLV.js";
import "./chunk-L7KA5OCT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-DWR7STNS.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-NA6URCKI.js";
import "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-REIDPTXZ.js";
import {
  ProgressBarComponent
} from "./chunk-DHD7TIH6.js";
import "./chunk-XSBVNB3I.js";
import "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-3P3QAPUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-52RBTZMB.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import "./chunk-XLCDDNWX.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import "./chunk-JJ65W2TY.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
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
import "./chunk-BRT76G6A.js";
import {
  Component,
  Pipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/pipes/driver-format.pipe.ts
var DriverFormatPipe = class _DriverFormatPipe {
  transform(format) {
    if (typeof format !== "string")
      return "";
    if ((format || "").indexOf("/") >= 0) {
      const parts = format.split("/");
      parts.splice(0, 1);
      return `<div class="flex items-center space-x-2">${parts.map((i) => `<div class="name-part">${i}</div>`).join('<i class="material-symbols-outlined text-xl">keyboard_arrow_right</i>')}</div>`;
    }
    return format || "";
  }
  static \u0275fac = function DriverFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "driverFormat", type: _DriverFormatPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverFormatPipe, [{
    type: Pipe,
    args: [{
      name: "driverFormat"
    }]
  }], null, null);
})();

// src/app/repositories/repository-drivers.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, size: "3.25rem", sortable: false, content: a1 });
var _c2 = (a0, a1) => [a0, a1];
function RepositoryDriversComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8)(2, "icon", 9);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "REPOS.DRIVER_LIST_LOAD_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.driver_list_error(), " ");
  }
}
function RepositoryDriversComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
    \u0275\u0275pipe(1, "driverFormat");
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, row_r2), \u0275\u0275sanitizeHtml);
  }
}
function RepositoryDriversComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function RepositoryDriversComponent_ng_template_13_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.newDriver(row_r4));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 1, "DRIVERS.NEW"));
  }
}
var RepositoryDriversComponent = class _RepositoryDriversComponent {
  _service = inject(RepositoriesStateService);
  /** Whether driver list is loading */
  loading = this._service.loading;
  /** List of drivers available in the repository */
  driver_list = this._service.driver_list;
  driver_list_error = this._service.driver_list_error;
  newDriver = (driver) => this._service.newDriver(driver);
  static \u0275fac = function RepositoryDriversComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoryDriversComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryDriversComponent, selectors: [["repository-drivers"]], decls: 15, vars: 25, consts: [["name_template", ""], ["actions_template", ""], [1, "h-full", "w-full", "overflow-auto", "p-4"], [1, "mb-2", "text-lg", "font-medium"], ["mode", "indeterminate", 1, "w-full"], [1, "border-error", "bg-error/10", "text-error", "my-4", "rounded-sm", "border", "p-3", "text-sm"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-8", "w-full"], [1, "flex", "items-start", "space-x-2"], [1, "text-xl"], [1, "min-w-0", "flex-1"], [1, "font-medium"], [1, "mt-1", "font-mono", "text-xs", "break-words"], [1, "flex", "items-center", "px-4", "py-2", "font-mono", "text-sm", 3, "innerHTML"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", "appTooltipPosition", "left", 3, "click", "appTooltip"]], template: function RepositoryDriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-progress-bar", 4);
      \u0275\u0275conditionalCreate(5, RepositoryDriversComponent_Conditional_5_Template, 10, 4, "div", 5);
      \u0275\u0275element(6, "simple-table", 6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275element(10, "div", 7);
      \u0275\u0275template(11, RepositoryDriversComponent_ng_template_11_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, RepositoryDriversComponent_ng_template_13_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const name_template_r5 = \u0275\u0275reference(12);
      const actions_template_r6 = \u0275\u0275reference(14);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "REPOS.AVAILABLE_DRIVERS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driver_list_error() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.driver_list)("columns", \u0275\u0275pureFunction2(22, _c2, \u0275\u0275pureFunction2(16, _c0, \u0275\u0275pipeBind1(7, 10, "COMMON.FIELD_NAME"), name_template_r5), \u0275\u0275pureFunction2(19, _c1, \u0275\u0275pipeBind1(8, 12, "COMMON.ACTIONS"), actions_template_r6)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(9, 14, "REPOS.DRIVER_LIST_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
    DriverFormatPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryDriversComponent, [{
    type: Component,
    args: [{ selector: "repository-drivers", template: `
        <div class="h-full w-full overflow-auto p-4">
            <h3 class="mb-2 text-lg font-medium">
                {{ 'REPOS.AVAILABLE_DRIVERS' | translate }}
            </h3>
            <app-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.invisible]="!loading()"
            />
            @if (driver_list_error()) {
                <div
                    class="border-error bg-error/10 text-error my-4 rounded-sm border p-3 text-sm"
                >
                    <div class="flex items-start space-x-2">
                        <icon class="text-xl">error</icon>
                        <div class="min-w-0 flex-1">
                            <div class="font-medium">
                                {{ 'REPOS.DRIVER_LIST_LOAD_ERROR' | translate }}
                            </div>
                            <div class="mt-1 font-mono text-xs break-words">
                                {{ driver_list_error() }}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <simple-table
                class="block min-w-lg text-sm"
                [data]="driver_list"
                [columns]="[
                    {
                        key: 'name',
                        name: 'COMMON.FIELD_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'actions',
                        name: 'COMMON.ACTIONS' | translate,
                        hide_name: true,
                        size: '3.25rem',
                        sortable: false,
                        content: actions_template,
                    },
                ]"
                [sortable]="true"
                [empty_message]="'REPOS.DRIVER_LIST_EMPTY' | translate"
            />
            <div class="h-8 w-full"></div>
            <ng-template #name_template let-row="row">
                <div
                    class="flex items-center px-4 py-2 font-mono text-sm"
                    [innerHTML]="row | driverFormat"
                ></div>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2">
                    <button
                        icon
                        default
                        ripple
                        [appTooltip]="'DRIVERS.NEW' | translate"
                        appTooltipPosition="left"
                        (click)="newDriver(row)"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </ng-template>
        </div>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      IconComponent,
      TranslatePipe,
      DriverFormatPipe,
      SimpleTableComponent
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-drivers.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryDriversComponent, { className: "RepositoryDriversComponent", filePath: "src/app/repositories/repository-drivers.component.ts", lineNumber: 101 });
})();
export {
  RepositoryDriversComponent
};
//# debugId=19bab039-02f0-5811-ba88-bfe22621eb29
//# sourceMappingURL=chunk-WUGDKI5H.js.map
