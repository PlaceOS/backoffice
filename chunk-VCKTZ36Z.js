import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TPD5UFBJ.js";
import {
  DomainStateService
} from "./chunk-SXCT3OW7.js";
import "./chunk-KWZ52AHU.js";
import "./chunk-ZJJKOGSE.js";
import "./chunk-J533RESC.js";
import "./chunk-Y4CFRGFT.js";
import "./chunk-7GTPBWD4.js";
import "./chunk-KZO2OZUY.js";
import "./chunk-5DYDWWDW.js";
import "./chunk-PFP5GBI7.js";
import "./chunk-WGBPIGQD.js";
import "./chunk-TG7MI555.js";
import "./chunk-UHEQKETH.js";
import "./chunk-KMTGRH5S.js";
import "./chunk-MKUNKECS.js";
import {
  SimpleTableComponent
} from "./chunk-MUO7ALH5.js";
import "./chunk-MRAJXLIZ.js";
import "./chunk-DTCPP7I4.js";
import "./chunk-SYFVYOP6.js";
import "./chunk-FDVXWCJC.js";
import "./chunk-SH4SZQVY.js";
import "./chunk-TYZFLJYX.js";
import "./chunk-4ZFVXULA.js";
import "./chunk-DKBIML2S.js";
import "./chunk-6HFZ2LJV.js";
import "./chunk-AVP547Y3.js";
import "./chunk-T6JVNKEV.js";
import "./chunk-SUN6RQVP.js";
import "./chunk-P7JOU2IV.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-NKHB33NT.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-OMTFMYK4.js";
import "./chunk-Z3EKRGVK.js";
import "./chunk-5P6RE4SY.js";
import "./chunk-IZKGHFEC.js";
import "./chunk-OKKLVLNZ.js";
import {
  TranslatePipe
} from "./chunk-YQWUAWSB.js";
import "./chunk-ZHEO2T5Y.js";
import "./chunk-WL7ZLVLT.js";
import "./chunk-3WFHRON7.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-46M7K5TF.js";
import "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/domains/domain-users.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "role", name: a0, content: a1, size: "6rem" });
var _c2 = (a0, a1) => [a0, a1];
function DomainUsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.email);
  }
}
function DomainUsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "code", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-20", !row_r2.sys_admin && !row_r2.support);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, row_r2.sys_admin ? "COMMON.USER_ADMIN" : row_r2.support ? "COMMON.USER_SUPPORT" : "COMMON.USER_BASIC"), " ");
  }
}
var DomainUsersComponent = class _DomainUsersComponent {
  _service = inject(DomainStateService);
  users = this._service.users;
  loading = this._service.loading;
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function DomainUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainUsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainUsersComponent, selectors: [["domain-users"]], decls: 11, vars: 23, consts: [["name_template", ""], ["role_template", ""], [1, "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-lg", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], [1, "text-xs", "opacity-30"], [1, "p-4"], [1, "px-2", "py-1"]], template: function DomainUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "mat-progress-bar", 3);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275element(3, "simple-table", 4);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DomainUsersComponent_ng_template_7_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, DomainUsersComponent_ng_template_9_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r3 = \u0275\u0275reference(8);
      const role_template_r4 = \u0275\u0275reference(10);
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(2, 6, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.users)("columns", \u0275\u0275pureFunction2(20, _c2, \u0275\u0275pureFunction2(14, _c0, \u0275\u0275pipeBind1(4, 8, "DOMAINS.FIELD_USER"), name_template_r3), \u0275\u0275pureFunction2(17, _c1, \u0275\u0275pipeBind1(5, 10, "DOMAINS.FIELD_ROLE"), role_template_r4)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 12, "DOMAINS.USER_LIST_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainUsersComponent, [{
    type: Component,
    args: [{ selector: "domain-users", template: `
        <div class="h-full w-full overflow-auto">
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="(loading | async) !== true"
            ></mat-progress-bar>
            <simple-table
                class="block min-w-lg text-sm"
                [data]="users"
                [columns]="[
                    {
                        key: 'name',
                        name: 'DOMAINS.FIELD_USER' | translate,
                        content: name_template,
                    },
                    {
                        key: 'role',
                        name: 'DOMAINS.FIELD_ROLE' | translate,
                        content: role_template,
                        size: '6rem',
                    },
                ]"
                [sortable]="true"
                [empty_message]="'DOMAINS.USER_LIST_EMPTY' | translate"
            ></simple-table>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.email }}</div>
            </div>
        </ng-template>
        <ng-template #role_template let-row="row">
            <div class="p-4">
                <code
                    [class.opacity-20]="!row.sys_admin && !row.support"
                    class="px-2 py-1"
                >
                    {{
                        (row.sys_admin
                            ? 'COMMON.USER_ADMIN'
                            : row.support
                              ? 'COMMON.USER_SUPPORT'
                              : 'COMMON.USER_BASIC'
                        ) | translate
                    }}
                </code>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      CommonModule,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-users.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-users.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainUsersComponent, { className: "DomainUsersComponent", filePath: "src/app/domains/domain-users.component.ts", lineNumber: 78 });
})();
export {
  DomainUsersComponent
};
//# sourceMappingURL=chunk-VCKTZ36Z.js.map
