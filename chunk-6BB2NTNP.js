import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-5LGOXEOT.js";
import {
  SimpleTableComponent
} from "./chunk-T3VFWMDL.js";
import "./chunk-SXGBD5F4.js";
import "./chunk-3EJGUVMF.js";
import "./chunk-3FCCFJYT.js";
import "./chunk-3DO6IWTY.js";
import {
  TranslatePipe
} from "./chunk-EEGN4FTB.js";
import "./chunk-H7RDNF4E.js";
import "./chunk-VLPEX5MV.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-66BB223G.js";
import {
  lastValueFrom,
  sl
} from "./chunk-HLVK2QTB.js";
import "./chunk-VYXW4D3Z.js";

// src/app/admin/interfaces.component.ts
var _c0 = (a0) => ({ key: "id", name: a0 });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1, size: "24rem" });
var _c2 = (a0, a1) => [a0, a1];
function AdminInterfacesComponent_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.name);
  }
}
function AdminInterfacesComponent_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.INTERFACES_COMMIT_EMPTY"), " ");
  }
}
function AdminInterfacesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, AdminInterfacesComponent_ng_template_9_Conditional_1_Template, 2, 1, "div", 8);
    \u0275\u0275conditionalCreate(2, AdminInterfacesComponent_ng_template_9_Conditional_2_Template, 3, 3, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r1.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r1.name ? 2 : -1);
  }
}
var AdminInterfacesComponent = class _AdminInterfacesComponent {
  /** List of interfaces */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  interfaces = signal([], ...ngDevMode ? [{ debugName: "interfaces" }] : []);
  ngOnInit() {
    this.loadInterfaces();
  }
  async loadInterfaces() {
    this.loading.set(true);
    const mapping = await lastValueFrom(sl());
    const list = Object.keys(mapping).map((id) => ({
      id,
      name: mapping[id]
    }));
    list.sort((a, b) => `${a.id}`?.localeCompare(`${b.id}`));
    this.interfaces.set(list);
    this.loading.set(false);
  }
  static \u0275fac = function AdminInterfacesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminInterfacesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminInterfacesComponent, selectors: [["app-interfaces"]], decls: 11, vars: 17, consts: [["name_template", ""], [1, "px-4"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "text-2xl"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No interfaces", 1, "block", "min-w-xl", "text-sm", 3, "data", "columns", "sortable"], [1, "h-12", "w-full"], [1, "p-4"], [1, "font-mono"], [1, "text-xs", "opacity-30"]], template: function AdminInterfacesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3, "PlaceOS Interfaces");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(4, "mat-progress-bar", 4)(5, "simple-table", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275element(8, "div", 6);
      \u0275\u0275template(9, AdminInterfacesComponent_ng_template_9_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const name_template_r2 = \u0275\u0275reference(10);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.interfaces())("columns", \u0275\u0275pureFunction2(14, _c2, \u0275\u0275pureFunction1(9, _c0, \u0275\u0275pipeBind1(6, 5, "REPOS.SINGULAR")), \u0275\u0275pureFunction2(11, _c1, \u0275\u0275pipeBind1(7, 7, "COMMON.GIT_COMMIT"), name_template_r2)))("sortable", true);
    }
  }, dependencies: [SimpleTableComponent, MatProgressBarModule, MatProgressBar, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=interfaces.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminInterfacesComponent, [{
    type: Component,
    args: [{ selector: "app-interfaces", template: `
        <div class="px-4">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">PlaceOS Interfaces</div>
            </div>
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!loading()"
            />
            <simple-table
                class="block min-w-xl text-sm"
                [data]="interfaces()"
                [columns]="[
                    { key: 'id', name: 'REPOS.SINGULAR' | translate },
                    {
                        key: 'name',
                        name: 'COMMON.GIT_COMMIT' | translate,
                        content: name_template,
                        size: '24rem',
                    },
                ]"
                [sortable]="true"
                empty_message="No interfaces"
            />
            <div class="h-12 w-full"></div>
            <ng-template #name_template let-row="row">
                <div class="p-4">
                    @if (row.name) {
                        <div class="font-mono">{{ row.name }}</div>
                    }
                    @if (!row.name) {
                        <span class="text-xs opacity-30">
                            {{ 'ADMIN.INTERFACES_COMMIT_EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
        </div>
    `, imports: [SimpleTableComponent, TranslatePipe, MatProgressBarModule], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/admin/interfaces.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=interfaces.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminInterfacesComponent, { className: "AdminInterfacesComponent", filePath: "src/app/admin/interfaces.component.ts", lineNumber: 61 });
})();
export {
  AdminInterfacesComponent
};
//# sourceMappingURL=chunk-6BB2NTNP.js.map
