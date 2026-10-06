import {
  RepositoriesStateService
} from "./chunk-RP2DEFXI.js";
import "./chunk-YGRCHGLS.js";
import "./chunk-Z4RGDELG.js";
import {
  SimpleTableComponent
} from "./chunk-7PBGQ5GJ.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-BOVIKFWA.js";
import "./chunk-27RGLWGV.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-LDPMLA3S.js";
import "./chunk-FQQU2C6T.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TWCYY2HH.js";
import "./chunk-KPWOKGD3.js";
import "./chunk-G5DVCCF5.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-YZFSOCDR.js";
import "./chunk-LZZWTBYD.js";
import "./chunk-DG5F5M2I.js";
import "./chunk-O4WOCGMX.js";
import "./chunk-77EWWK2U.js";
import "./chunk-5DZHHUHH.js";
import "./chunk-F45UEFFY.js";
import "./chunk-FDG4YB46.js";
import "./chunk-VZ4JF2ZJ.js";
import "./chunk-4MSIA662.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-RFD5AOWN.js";
import "./chunk-OKMGGQII.js";
import "./chunk-QBQ5C53A.js";
import "./chunk-NPIW26D2.js";
import "./chunk-WSH7C5JM.js";
import "./chunk-M2O6T64P.js";
import "./chunk-G3IJGLD4.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-SDGTGI2H.js";
import "./chunk-66VCHSRY.js";
import "./chunk-S3MO7QJA.js";
import "./chunk-HS6BVHDB.js";
import "./chunk-XMG57YWH.js";
import "./chunk-W6NODITO.js";
import {
  MatRippleModule
} from "./chunk-PNGPFML7.js";
import "./chunk-4G55JYYO.js";
import {
  TranslatePipe
} from "./chunk-ETRW4JH6.js";
import {
  IconComponent,
  MatRipple
} from "./chunk-MKMIAR67.js";
import "./chunk-IWUSEH7D.js";
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-M2N6S2L7.js";
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
var _c1 = (a0) => ({ key: "actions", name: " ", size: "3.25rem", sortable: false, content: a0 });
var _c2 = (a0, a1) => [a0, a1];
function RepositoryDriversComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7)(2, "icon", 8);
    \u0275\u0275text(3, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
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
function RepositoryDriversComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
    \u0275\u0275pipe(1, "driverFormat");
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, row_r2), \u0275\u0275sanitizeHtml);
  }
}
function RepositoryDriversComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function RepositoryDriversComponent_ng_template_11_Template_button_click_1_listener() {
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
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "DRIVERS.NEW"));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryDriversComponent, selectors: [["repository-drivers"]], decls: 13, vars: 22, consts: [["name_template", ""], ["actions_template", ""], [1, "mb-2", "text-lg", "font-medium"], ["mode", "indeterminate", 1, "w-full"], [1, "border-error", "bg-error/10", "text-error", "my-4", "rounded-sm", "border", "p-3", "text-sm"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-8", "w-full"], [1, "flex", "items-start", "space-x-2"], [1, "text-xl"], [1, "min-w-0", "flex-1"], [1, "font-medium"], [1, "mt-1", "font-mono", "text-xs", "break-words"], [1, "flex", "items-center", "px-4", "py-2", "font-mono", "text-sm", 3, "innerHTML"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", "matTooltipPosition", "left", 3, "click", "matTooltip"]], template: function RepositoryDriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "mat-progress-bar", 3);
      \u0275\u0275conditionalCreate(4, RepositoryDriversComponent_Conditional_4_Template, 10, 4, "div", 4);
      \u0275\u0275element(5, "simple-table", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275element(8, "div", 6);
      \u0275\u0275template(9, RepositoryDriversComponent_ng_template_9_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, RepositoryDriversComponent_ng_template_11_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r5 = \u0275\u0275reference(10);
      const actions_template_r6 = \u0275\u0275reference(12);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "REPOS.AVAILABLE_DRIVERS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driver_list_error() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.driver_list)("columns", \u0275\u0275pureFunction2(19, _c2, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(6, 10, "COMMON.FIELD_NAME"), name_template_r5), \u0275\u0275pureFunction1(17, _c1, actions_template_r6)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(7, 12, "REPOS.DRIVER_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    MatRippleModule,
    MatRipple,
    TranslatePipe,
    DriverFormatPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryDriversComponent, [{
    type: Component,
    args: [{ selector: "repository-drivers", template: `
        <h3 class="mb-2 text-lg font-medium">
            {{ 'REPOS.AVAILABLE_DRIVERS' | translate }}
        </h3>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading()"
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
                    name: ' ',
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
                    matRipple
                    [matTooltip]="'DRIVERS.NEW' | translate"
                    matTooltipPosition="left"
                    (click)="newDriver(row)"
                >
                    <icon>add</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      DriverFormatPipe,
      SimpleTableComponent,
      MatProgressBarModule,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-drivers.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryDriversComponent, { className: "RepositoryDriversComponent", filePath: "src/app/repositories/repository-drivers.component.ts", lineNumber: 100 });
})();
export {
  RepositoryDriversComponent
};
//# sourceMappingURL=chunk-FK65NH4K.js.map
