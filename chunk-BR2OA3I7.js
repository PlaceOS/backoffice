import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ICL26W6M.js";
import {
  DomainStateService
} from "./chunk-O77TUV4Q.js";
import "./chunk-QB4E3DZT.js";
import "./chunk-IW4CZDBJ.js";
import "./chunk-J533RESC.js";
import "./chunk-JK6QMDKK.js";
import "./chunk-5M3JBGAG.js";
import "./chunk-CUWQT2GL.js";
import "./chunk-GMQ5DVTU.js";
import "./chunk-AE4ZXYXF.js";
import "./chunk-OG2MHJQA.js";
import "./chunk-ION2CCEC.js";
import {
  SimpleTableComponent
} from "./chunk-W2PUTAUI.js";
import "./chunk-V3HN5CBY.js";
import "./chunk-4ALOESAF.js";
import "./chunk-Z5FJC4I7.js";
import "./chunk-4QMCQ5KK.js";
import "./chunk-TZHB3H2C.js";
import "./chunk-5YKIVDAT.js";
import "./chunk-SW42XPF4.js";
import "./chunk-4ODMIZ7O.js";
import "./chunk-OXGNLB63.js";
import "./chunk-YIBSFQXI.js";
import "./chunk-3DWKKPWQ.js";
import "./chunk-QB6OEDH5.js";
import "./chunk-LKDLAZB6.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-Y4JFOSQS.js";
import "./chunk-ITU7FLKB.js";
import "./chunk-KNPBCUJZ.js";
import "./chunk-263IF76L.js";
import "./chunk-4IZH7QGG.js";
import "./chunk-QXQNKIRF.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import "./chunk-6CBQWDU5.js";
import {
  TranslatePipe
} from "./chunk-5UPGSA24.js";
import "./chunk-TALE6FQV.js";
import "./chunk-TEK5TAH3.js";
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
} from "./chunk-QMACIC7N.js";
import "./chunk-T6SXWR5P.js";
import "./chunk-VYXW4D3Z.js";

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
//# sourceMappingURL=chunk-BR2OA3I7.js.map
