import {
  RepositoriesStateService
} from "./chunk-ND3F3KQI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-JYWYQZXL.js";
import "./chunk-Q2C3BWCT.js";
import "./chunk-WNV7VXCM.js";
import "./chunk-J533RESC.js";
import "./chunk-2KLLQA6B.js";
import "./chunk-SJ4TAYXF.js";
import "./chunk-XD5CB7O6.js";
import "./chunk-UOZPOTVN.js";
import "./chunk-WPSAWQIL.js";
import "./chunk-PEDHCWHF.js";
import {
  SimpleTableComponent
} from "./chunk-D4HPNIPT.js";
import "./chunk-FRNUDWTV.js";
import "./chunk-P7ABAMPF.js";
import "./chunk-JMUJRYCK.js";
import "./chunk-XODD7BCV.js";
import "./chunk-RJA7VK6V.js";
import "./chunk-PRL2UEXY.js";
import {
  Router
} from "./chunk-TDOACRHX.js";
import "./chunk-DNJ5OGXJ.js";
import "./chunk-LZJ3O446.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-JVZQGINH.js";
import "./chunk-XKH7K3EZ.js";
import "./chunk-CTGUN24P.js";
import "./chunk-V2YQHNT3.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-IN5YGCBE.js";
import "./chunk-RFI67JC7.js";
import {
  AsyncHandler
} from "./chunk-KMWOHLBD.js";
import "./chunk-AFCWNDGX.js";
import {
  IconComponent
} from "./chunk-VGPPQ2QX.js";
import "./chunk-6RFGFMVU.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-2FVYYETS.js";
import {
  MatRippleModule
} from "./chunk-763UXDJC.js";
import {
  TranslatePipe
} from "./chunk-VBR6PWOK.js";
import "./chunk-HOFUYBS5.js";
import {
  MatRipple
} from "./chunk-ODP5LKCS.js";
import {
  Component,
  Pipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
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
} from "./chunk-CMCD56FG.js";
import "./chunk-IXMJWBEL.js";
import "./chunk-KWSTWQNB.js";

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
function RepositoryDriversComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
    \u0275\u0275pipe(1, "driverFormat");
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, row_r1), \u0275\u0275sanitizeHtml);
  }
}
function RepositoryDriversComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function RepositoryDriversComponent_ng_template_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDriver(ctx_r2.item));
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
var RepositoryDriversComponent = class _RepositoryDriversComponent extends AsyncHandler {
  _service = inject(RepositoriesStateService);
  _router = inject(Router);
  /** Whether driver list is loading */
  loading;
  /** List of drivers available in the repository */
  driver_list = this._service.driver_list;
  get item() {
    return this._service.active_item;
  }
  newDriver = (d) => this._service.newDriver(d);
  ngOnInit() {
    this.timeout("has_drivers", () => this._router.navigate(["/repositories", this.item.id]), 3e3);
    this.subscription("has_drivers", this.driver_list.subscribe((_) => {
      if (_?.length)
        this.clearTimeout("has_drivers");
    }));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RepositoryDriversComponent_BaseFactory;
    return function RepositoryDriversComponent_Factory(__ngFactoryType__) {
      return (\u0275RepositoryDriversComponent_BaseFactory || (\u0275RepositoryDriversComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RepositoryDriversComponent)))(__ngFactoryType__ || _RepositoryDriversComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryDriversComponent, selectors: [["repository-drivers"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 21, consts: [["name_template", ""], ["actions_template", ""], [1, "mb-2", "text-lg", "font-medium"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-8", "w-full"], [1, "flex", "items-center", "px-4", "py-2", "font-mono", "text-sm", 3, "innerHTML"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 3, "click", "matTooltip"]], template: function RepositoryDriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "mat-progress-bar", 3)(4, "simple-table", 4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275element(7, "div", 5);
      \u0275\u0275template(8, RepositoryDriversComponent_ng_template_8_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, RepositoryDriversComponent_ng_template_10_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(9);
      const actions_template_r5 = \u0275\u0275reference(11);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "REPOS.AVAILABLE_DRIVERS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.driver_list)("columns", \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pureFunction2(13, _c0, \u0275\u0275pipeBind1(5, 9, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(16, _c1, actions_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 11, "REPOS.DRIVER_LIST_EMPTY"));
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */"] });
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
            [class.opacity-0]="!loading"
        />
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
                    matRipple
                    [matTooltip]="'DRIVERS.NEW' | translate"
                    matTooltipPosition="left"
                    (click)="newDriver(item)"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryDriversComponent, { className: "RepositoryDriversComponent", filePath: "src/app/repositories/repository-drivers.component.ts", lineNumber: 85 });
})();
export {
  RepositoryDriversComponent
};
//# sourceMappingURL=chunk-AG2EMFJH.js.map
