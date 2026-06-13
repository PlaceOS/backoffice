import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  DomainStateService
} from "./chunk-CJQEO3OQ.js";
import "./chunk-O5QIZGC7.js";
import "./chunk-625COXFL.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-XDPTKZ2J.js";
import "./chunk-UJLZHD3F.js";
import "./chunk-5EBMUX3Z.js";
import "./chunk-C7NP5PYP.js";
import "./chunk-J5PRPV2J.js";
import "./chunk-KQ433EDT.js";
import "./chunk-JZPASCCB.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-64N44YTD.js";
import "./chunk-ZHVO5KUR.js";
import {
  SimpleTableComponent
} from "./chunk-FCU3WVEC.js";
import "./chunk-P7I55NRZ.js";
import "./chunk-WRAPQBH6.js";
import "./chunk-UJSGWSKQ.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-TTOMUWPB.js";
import "./chunk-J5O27MHS.js";
import "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import "./chunk-6FMO72CJ.js";
import "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-6GEUKQV2.js";
import "./chunk-ICXB34UJ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KHVEC2ZJ.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import "./chunk-JJ5DNIGX.js";
import {
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe
} from "./chunk-FJCFBSIQ.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  MatRipple
} from "./chunk-2UI5N333.js";
import "./chunk-5TQT6AWS.js";
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
} from "./chunk-N6UZRJAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/domains/domain-authentication.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "type", name: a0, size: "6rem", content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function DomainAuthenticationComponent_ng_template_11_Template(rf, ctx) {
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
function DomainAuthenticationComponent_ng_template_13_Template(rf, ctx) {
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
function DomainAuthenticationComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editAuthSource(row_r4));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_15_Template_button_click_5_listener() {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAuthenticationComponent, selectors: [["domain-authentication"]], decls: 17, vars: 27, consts: [["name_template", ""], ["type_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-48", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-160", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], [1, "text-xs", "opacity-30", "select-all"], [1, "mono", "p-4", "text-sm", "uppercase"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function DomainAuthenticationComponent_Template(rf, ctx) {
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
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, DomainAuthenticationComponent_ng_template_11_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, DomainAuthenticationComponent_ng_template_13_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, DomainAuthenticationComponent_ng_template_15_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r6 = \u0275\u0275reference(12);
      const type_template_r7 = \u0275\u0275reference(14);
      const actions_template_r8 = \u0275\u0275reference(16);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.AUTHENTICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.auth_sources)("columns", \u0275\u0275pureFunction3(23, _c3, \u0275\u0275pureFunction2(15, _c0, \u0275\u0275pipeBind1(8, 9, "COMMON.FIELD_NAME"), name_template_r6), \u0275\u0275pureFunction2(18, _c1, \u0275\u0275pipeBind1(9, 11, "DOMAINS.FIELD_TYPE"), type_template_r7), \u0275\u0275pureFunction1(21, _c2, actions_template_r8)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(10, 13, "DOMAINS.AUTHENTICATION_EMPTY"));
    }
  }, dependencies: [
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
                    [class.opacity-0]="loading() !== true"
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
                            name: ' ',
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
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
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
//# sourceMappingURL=chunk-OTHC3CCN.js.map
