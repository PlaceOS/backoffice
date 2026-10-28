import {
  DomainStateService
} from "./chunk-LZA4W2GF.js";
import "./chunk-64EI3DAW.js";
import "./chunk-5BFKPLWS.js";
import "./chunk-YN73SXCS.js";
import "./chunk-ZMORPGE7.js";
import {
  SimpleTableComponent
} from "./chunk-MLUIXMIO.js";
import "./chunk-WOOHSIA4.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-DC3YQFAN.js";
import "./chunk-CZHGOQVA.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-KZLWJTDG.js";
import "./chunk-R464B6VT.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-IPP6E3HR.js";
import "./chunk-F2UXRHVQ.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-HPS63TJZ.js";
import "./chunk-JIKSLL3H.js";
import "./chunk-QUK2HLQJ.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-SBWE5ILJ.js";
import "./chunk-DQFIZL2Z.js";
import "./chunk-HAWZID7H.js";
import {
  LoadingLabelDirective
} from "./chunk-S6TBIU6L.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2VSGNNLN.js";
import "./chunk-OLETOVUH.js";
import "./chunk-65NSHU36.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import {
  MatRippleModule
} from "./chunk-TUNU3FRP.js";
import {
  MatRipple
} from "./chunk-52KP2JDE.js";
import {
  TranslatePipe
} from "./chunk-XTQWFJN3.js";
import "./chunk-V4STGI54.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-GPNEKEBR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/domains/domain-authentication.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "type", name: a0, size: "6rem", content: a1 });
var _c2 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "6.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function DomainAuthenticationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.id);
  }
}
function DomainAuthenticationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.type);
  }
}
function DomainAuthenticationComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_16_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editAuthSource(row_r4));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_16_Template_button_click_5_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeAuthSource(row_r4));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "DOMAINS.AUTHENTICATION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "DOMAINS.AUTHENTICATION_REMOVE"));
  }
}
var DomainAuthenticationComponent = class _DomainAuthenticationComponent {
  _service = inject(DomainStateService);
  /** List of auth sources associated with the active domain */
  auth_sources = this._service.auth_sources;
  loading = this._service.loading;
  /** Mapping of auth sources to their type */
  source_types = {};
  newAuthSource = () => this._service.editAuthSource();
  editAuthSource = (source) => this._service.editAuthSource(source);
  removeAuthSource = (source) => this._service.deleteAuthSource(source);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function DomainAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainAuthenticationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAuthenticationComponent, selectors: [["domain-authentication"]], decls: 18, vars: 30, consts: [["name_template", ""], ["type_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-48", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-160", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], [1, "text-xs", "opacity-30", "select-all"], [1, "mono", "p-4", "text-sm", "uppercase"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function DomainAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
      \u0275\u0275listener("click", function DomainAuthenticationComponent_Template_button_click_2_listener() {
        return ctx.newAuthSource();
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275element(6, "mat-progress-bar", 7)(7, "simple-table", 8);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, DomainAuthenticationComponent_ng_template_12_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, DomainAuthenticationComponent_ng_template_14_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, DomainAuthenticationComponent_ng_template_16_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r6 = \u0275\u0275reference(13);
      const type_template_r7 = \u0275\u0275reference(15);
      const actions_template_r8 = \u0275\u0275reference(17);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.AUTHENTICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.auth_sources)("columns", \u0275\u0275pureFunction3(26, _c3, \u0275\u0275pureFunction2(17, _c0, \u0275\u0275pipeBind1(8, 9, "COMMON.FIELD_NAME"), name_template_r6), \u0275\u0275pureFunction2(20, _c1, \u0275\u0275pipeBind1(9, 11, "DOMAINS.FIELD_TYPE"), type_template_r7), \u0275\u0275pureFunction2(23, _c2, \u0275\u0275pipeBind1(10, 13, "COMMON.ACTIONS"), actions_template_r8)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(11, 15, "DOMAINS.AUTHENTICATION_EMPTY"));
    }
  }, dependencies: [
    LoadingLabelDirective,
    SimpleTableComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-authentication.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainAuthenticationComponent, [{
    type: Component,
    args: [{ selector: "domain-authentication", template: `
        <div class="flex h-full w-full flex-col">
            <div header class="">
                <button
                    btn
                    class="mb-4 w-full sm:w-48"
                    (click)="newAuthSource()"
                >
                    {{ 'DOMAINS.AUTHENTICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                <simple-table
                    class="block min-w-160 text-sm"
                    [data]="auth_sources"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'type',
                            name: 'DOMAINS.FIELD_TYPE' | translate,
                            size: '6rem',
                            content: type_template,
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
                    [empty_message]="'DOMAINS.AUTHENTICATION_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="text-xs opacity-30 select-all">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #type_template let-row="row">
            <div class="mono p-4 text-sm uppercase">{{ row.type }}</div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'DOMAINS.AUTHENTICATION_EDIT' | translate"
                    (click)="editAuthSource(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'DOMAINS.AUTHENTICATION_REMOVE' | translate"
                    (click)="removeAuthSource(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      LoadingLabelDirective,
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressBarModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/domains/domain-authentication.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-authentication.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAuthenticationComponent, { className: "DomainAuthenticationComponent", filePath: "src/app/domains/domain-authentication.component.ts", lineNumber: 113 });
})();
export {
  DomainAuthenticationComponent
};
//# debugId=073bfb1a-0a66-5c3e-b981-9d20713e64ec
//# sourceMappingURL=chunk-PM2DSAGQ.js.map
