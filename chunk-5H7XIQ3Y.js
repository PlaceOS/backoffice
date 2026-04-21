import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-IVHDPGFB.js";
import {
  DomainStateService
} from "./chunk-QEPKZM2M.js";
import "./chunk-BUF3342E.js";
import "./chunk-YK5AWCVW.js";
import "./chunk-J533RESC.js";
import "./chunk-YTJDBYYP.js";
import "./chunk-QBKODXYB.js";
import "./chunk-IZOUKBB7.js";
import "./chunk-UKPZNMNS.js";
import "./chunk-YKMVGLTV.js";
import "./chunk-ZCAI424E.js";
import "./chunk-7QVEE5VR.js";
import "./chunk-IIUIDWWB.js";
import {
  SimpleTableComponent
} from "./chunk-GVMJP65D.js";
import "./chunk-DVN3BL7D.js";
import "./chunk-4ARITZTR.js";
import "./chunk-SKYIPB3H.js";
import "./chunk-W2GN2BRP.js";
import "./chunk-UAXAQ7BE.js";
import "./chunk-UCQRULZV.js";
import "./chunk-3MFQ72CW.js";
import "./chunk-QGR553JM.js";
import "./chunk-6VJ3RG5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PPQFSXFA.js";
import "./chunk-D2LXA4RU.js";
import "./chunk-EE2V3AAT.js";
import "./chunk-D6H2UP4X.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-YDTR7R4T.js";
import "./chunk-R2EAFTPD.js";
import "./chunk-GMSIBCGC.js";
import "./chunk-MF6TUUIF.js";
import {
  IconComponent
} from "./chunk-RBXYCJUU.js";
import "./chunk-AV4JSAAI.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-5V5EUIVE.js";
import {
  MatRippleModule
} from "./chunk-2BWZF4LD.js";
import {
  TranslatePipe
} from "./chunk-BSW7AGOT.js";
import "./chunk-Y3N2XCKC.js";
import {
  MatRipple
} from "./chunk-MSVGRD3P.js";
import {
  AsyncPipe,
  CommonModule,
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
  ɵɵpureFunction1,
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
} from "./chunk-H6LO5TZR.js";
import "./chunk-BKO4HWAT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/domains/domain-authentication.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "type", name: a0, size: "6rem", content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
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
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.id);
  }
}
function DomainAuthenticationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.type);
  }
}
function DomainAuthenticationComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_16_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editAuthSource(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_16_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeAuthSource(row_r5));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAuthenticationComponent, selectors: [["domain-authentication"]], decls: 18, vars: 29, consts: [["name_template", ""], ["type_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-48", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-160", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], [1, "text-xs", "opacity-30", "select-all"], [1, "mono", "p-4", "text-sm", "uppercase"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function DomainAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
      \u0275\u0275listener("click", function DomainAuthenticationComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newAuthSource());
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275element(6, "mat-progress-bar", 7);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275element(8, "simple-table", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, DomainAuthenticationComponent_ng_template_12_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, DomainAuthenticationComponent_ng_template_14_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, DomainAuthenticationComponent_ng_template_16_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r7 = \u0275\u0275reference(13);
      const type_template_r8 = \u0275\u0275reference(15);
      const actions_template_r9 = \u0275\u0275reference(17);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.AUTHENTICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(7, 9, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.auth_sources)("columns", \u0275\u0275pureFunction3(25, _c3, \u0275\u0275pureFunction2(17, _c0, \u0275\u0275pipeBind1(9, 11, "COMMON.FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(20, _c1, \u0275\u0275pipeBind1(10, 13, "DOMAINS.FIELD_TYPE"), type_template_r8), \u0275\u0275pureFunction1(23, _c2, actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(11, 15, "DOMAINS.AUTHENTICATION_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-authentication.component.css.map */"] });
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
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
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
                            name: ' ',
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.AUTHENTICATION_EMPTY' | translate"
                ></simple-table>
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
                    matRipple
                    [matTooltip]="'DOMAINS.AUTHENTICATION_EDIT' | translate"
                    (click)="editAuthSource(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'DOMAINS.AUTHENTICATION_REMOVE' | translate"
                    (click)="removeAuthSource(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CommonModule,
      MatProgressBarModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-authentication.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-authentication.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAuthenticationComponent, { className: "DomainAuthenticationComponent", filePath: "src/app/domains/domain-authentication.component.ts", lineNumber: 110 });
})();
export {
  DomainAuthenticationComponent
};
//# sourceMappingURL=chunk-5H7XIQ3Y.js.map
