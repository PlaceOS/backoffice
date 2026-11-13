import {
  toQueryString
} from "./chunk-SDERNRDS.js";
import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import {
  confirmAndRun
} from "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import {
  ProgressBarComponent
} from "./chunk-XFWRCLJY.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import {
  Dialog
} from "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import {
  V,
  _
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  inject,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/build-list.component.ts
var _c0 = (a0, a1) => ({ key: "repo", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "driver", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "message", name: a0, size: "32rem", content: a1 });
var _c3 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "3.5rem", sortable: false });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function PlaceBuildListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.repo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.branch);
  }
}
function PlaceBuildListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.driver);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.commit);
  }
}
function PlaceBuildListComponent_ng_template_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"), " ");
  }
}
function PlaceBuildListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, PlaceBuildListComponent_ng_template_17_Conditional_2_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function PlaceBuildListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceBuildListComponent_ng_template_19_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.remove(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 1, "ADMIN.BUILD_LIST_REMOVE"));
  }
}
function queryBuildJobs(q = {}) {
  const query = toQueryString(q);
  return _(`/api/build/v1/monitor${query ? "?" + query : ""}`);
}
function cancelBuildJob(id, q = {}) {
  const query = toQueryString(q);
  return V(`/api/build/v1/cancel/${id}${query ? "?" + query : ""}`);
}
var PlaceBuildListComponent = class _PlaceBuildListComponent {
  _dialog = inject(Dialog);
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  job_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "job_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadJobList();
  }
  async remove(i) {
    const removed = await confirmAndRun(this._dialog, {
      title: i18n("ADMIN.BUILD_LIST_REMOVE"),
      content: i18n("ADMIN.BUILD_LIST_REMOVE_MSG", {
        driver: escapeHtml(i.driver),
        repo: escapeHtml(i.repo)
      }),
      icon: { type: "icon", content: "delete" }
    }, {
      loading: i18n("ADMIN.BUILD_LIST_REMOVE_LOADING"),
      action: () => cancelBuildJob(i.id),
      error: (error) => i18n("ADMIN.BUILD_LIST_REMOVE_ERROR", { error }),
      success: i18n("ADMIN.BUILD_LIST_REMOVE_SUCCESS")
    });
    if (removed) {
      this.job_list.update((list) => list.filter(({ id }) => id !== i.id));
    }
  }
  async loadJobList() {
    this.loading.set("Loading build jobs...");
    const { data } = await queryBuildJobs().catch(() => ({ data: [] }));
    this.job_list.set((data || []).sort((a, b) => a.id?.localeCompare(b.id)));
    this.loading.set("");
  }
  static \u0275fac = function PlaceBuildListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceBuildListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceBuildListComponent, selectors: [["", "admin-build-list", ""]], decls: 21, vars: 36, consts: [["repo_template", ""], ["driver_template", ""], ["description_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-xs", "opacity-30"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-xs", "select-text"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "ripple", "", 1, "text-error", 3, "click", "appTooltip"]], template: function PlaceBuildListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 7);
      \u0275\u0275element(6, "app-progress-bar", 8)(7, "simple-table", 9);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, PlaceBuildListComponent_ng_template_13_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, PlaceBuildListComponent_ng_template_15_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, PlaceBuildListComponent_ng_template_17_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, PlaceBuildListComponent_ng_template_19_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const repo_template_r7 = \u0275\u0275reference(14);
      const driver_template_r8 = \u0275\u0275reference(16);
      const description_template_r9 = \u0275\u0275reference(18);
      const actions_template_r10 = \u0275\u0275reference(20);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "ADMIN.BUILD_LIST_HEADER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.job_list())("columns", \u0275\u0275pureFunction4(31, _c4, \u0275\u0275pureFunction2(19, _c0, \u0275\u0275pipeBind1(8, 9, "REPOS.SINGULAR"), repo_template_r7), \u0275\u0275pureFunction2(22, _c1, \u0275\u0275pipeBind1(9, 11, "DRIVERS.SINGULAR"), driver_template_r8), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(10, 13, "COMMON.FIELD_DESCRIPTION"), description_template_r9), \u0275\u0275pureFunction2(28, _c3, \u0275\u0275pipeBind1(11, 15, "COMMON.ACTIONS"), actions_template_r10)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 17, "ADMIN.BUILD_LIST_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=build-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceBuildListComponent, [{
    type: Component,
    args: [{ selector: "[admin-build-list]", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.BUILD_LIST_HEADER' | translate }}
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="job_list()"
                    [columns]="[
                        {
                            key: 'repo',
                            name: 'REPOS.SINGULAR' | translate,
                            content: repo_template,
                        },
                        {
                            key: 'driver',
                            name: 'DRIVERS.SINGULAR' | translate,
                            content: driver_template,
                        },
                        {
                            key: 'message',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            size: '32rem',
                            content: description_template,
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.BUILD_LIST_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #repo_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.repo }}</div>
                <div class="text-xs opacity-30">{{ row.branch }}</div>
            </div>
        </ng-template>
        <ng-template #driver_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.driver }}</div>
                <div class="text-xs opacity-30">{{ row.commit }}</div>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="w-full overflow-hidden px-4 py-2 text-xs select-text">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    ripple
                    class="text-error"
                    [appTooltip]="'ADMIN.BUILD_LIST_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent
    ], styles: ["/* angular:styles/component:css;ec8f84e53cdd709f;/home/runner/work/backoffice/backoffice/src/app/admin/build-list.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=build-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceBuildListComponent, { className: "PlaceBuildListComponent", filePath: "src/app/admin/build-list.component.ts", lineNumber: 141 });
})();
export {
  PlaceBuildListComponent
};
//# debugId=754008df-c4ce-5736-b8d8-973f982178f2
//# sourceMappingURL=chunk-ZVBVFF5L.js.map
