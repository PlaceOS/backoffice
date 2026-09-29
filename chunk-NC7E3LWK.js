import {
  DomainStateService
} from "./chunk-ZAHQ53QL.js";
import "./chunk-SGMO227M.js";
import "./chunk-E3PIZQQQ.js";
import "./chunk-OBAM42M5.js";
import {
  SimpleTableComponent
} from "./chunk-D2W6UT77.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-X33FBHFT.js";
import "./chunk-OFZFIF6J.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-YJGUUXUQ.js";
import "./chunk-FEDW4OWZ.js";
import "./chunk-FTKMWGBF.js";
import "./chunk-FFPP635U.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-VBYM4RWJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-755WGQS7.js";
import "./chunk-MWBSPV7N.js";
import "./chunk-2IMPIBRD.js";
import "./chunk-BZKFKJMB.js";
import "./chunk-VL2ZDJSE.js";
import "./chunk-N55IKFHF.js";
import "./chunk-X7R6A77R.js";
import "./chunk-EZCJ56LP.js";
import "./chunk-OKMGGQII.js";
import "./chunk-FUE3PX3L.js";
import "./chunk-IAGQHC77.js";
import "./chunk-ZS3WH7LD.js";
import "./chunk-2QGG546G.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-2NTIF4N6.js";
import "./chunk-RYVMR3UL.js";
import "./chunk-MJ3UWWSD.js";
import "./chunk-A5YO7EC5.js";
import "./chunk-CSM2PZV4.js";
import "./chunk-7XOD7ZSE.js";
import "./chunk-TPAAVYET.js";
import "./chunk-CNTREK2Y.js";
import "./chunk-YRHVJ22F.js";
import {
  TranslatePipe
} from "./chunk-HEABSJS3.js";
import "./chunk-HM3Y6HJR.js";
import "./chunk-GOSX3HNW.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-AFPWYCQQ.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UAS3QR7R.js";
import "./chunk-DPH5AP7B.js";

// src/app/domains/domain-users.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "role", name: a0, content: a1, size: "6rem" });
var _c2 = (a0, a1) => [a0, a1];
function DomainUsersComponent_ng_template_6_Template(rf, ctx) {
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
    \u0275\u0275advance();
    \u0275\u0275property("title", row_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", row_r1.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.email, " ");
  }
}
function DomainUsersComponent_ng_template_8_Template(rf, ctx) {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainUsersComponent, selectors: [["domain-users"]], decls: 10, vars: 22, consts: [["name_template", ""], ["role_template", ""], [1, "flex", "h-full", "min-h-0", "w-full", "flex-col"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-h-0", "w-full", "flex-1", "text-sm", 3, "virtual_row_height", "data", "columns", "sortable", "empty_message"], [1, "flex", "min-w-0", "flex-col", "px-4", "py-2"], [1, "truncate", "text-sm", 3, "title"], [1, "truncate", "text-xs", "opacity-30", 3, "title"], [1, "p-4"], [1, "px-2", "py-1"]], template: function DomainUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "mat-progress-bar", 3)(2, "simple-table", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, DomainUsersComponent_ng_template_6_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, DomainUsersComponent_ng_template_8_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r3 = \u0275\u0275reference(7);
      const role_template_r4 = \u0275\u0275reference(9);
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("virtual_row_height", 64)("data", ctx.users)("columns", \u0275\u0275pureFunction2(19, _c2, \u0275\u0275pureFunction2(13, _c0, \u0275\u0275pipeBind1(3, 7, "DOMAINS.FIELD_USER"), name_template_r3), \u0275\u0275pureFunction2(16, _c1, \u0275\u0275pipeBind1(4, 9, "DOMAINS.FIELD_ROLE"), role_template_r4)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(5, 11, "DOMAINS.USER_LIST_EMPTY"));
    }
  }, dependencies: [SimpleTableComponent, MatProgressBarModule, MatProgressBar, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainUsersComponent, [{
    type: Component,
    args: [{ selector: "domain-users", template: `
        <div class="flex h-full min-h-0 w-full flex-col">
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="loading() !== true"
            />
            <simple-table
                class="block min-h-0 w-full flex-1 text-sm"
                [virtual_row_height]="64"
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
            />
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex min-w-0 flex-col px-4 py-2">
                <div class="truncate text-sm" [title]="row.name">
                    {{ row.name }}
                </div>
                <div class="truncate text-xs opacity-30" [title]="row.email">
                    {{ row.email }}
                </div>
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
    `, imports: [SimpleTableComponent, TranslatePipe, MatProgressBarModule], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-users.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-users.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainUsersComponent, { className: "DomainUsersComponent", filePath: "src/app/domains/domain-users.component.ts", lineNumber: 77 });
})();
export {
  DomainUsersComponent
};
//# sourceMappingURL=chunk-NC7E3LWK.js.map
