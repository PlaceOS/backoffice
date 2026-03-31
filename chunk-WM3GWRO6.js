import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-JOCJQSA5.js";
import {
  toQueryString
} from "./chunk-FXB52BFD.js";
import {
  openConfirmModal
} from "./chunk-ZNMJTVKP.js";
import {
  SimpleTableComponent
} from "./chunk-XGNXBQYI.js";
import "./chunk-IV4O2CJ5.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XA66LDVX.js";
import "./chunk-RBWTFXTK.js";
import {
  MatDialog
} from "./chunk-WIRQ5XQH.js";
import "./chunk-6ACE75MC.js";
import "./chunk-4LE2PDCO.js";
import "./chunk-VTQCDJGL.js";
import {
  IconComponent
} from "./chunk-3SG4KASH.js";
import "./chunk-E6OTVR3E.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-IOTEGI4H.js";
import {
  MatRippleModule
} from "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-S7TGCPIQ.js";
import "./chunk-K6WIXX3Q.js";
import {
  MatRipple
} from "./chunk-ECV3GDTS.js";
import {
  Component,
  computed,
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
  ɵɵpureFunction1,
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
} from "./chunk-SMUOHSRV.js";
import {
  N,
  Pe,
  lastValueFrom
} from "./chunk-U265RLGW.js";
import "./chunk-VYXW4D3Z.js";

// src/app/admin/build-list.component.ts
var _c0 = ["admin-build-list", ""];
var _c1 = (a0, a1) => ({ key: "repo", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "driver", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "message", name: a0, size: "32rem", content: a1 });
var _c4 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function PlaceBuildListComponent_ng_template_12_Template(rf, ctx) {
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
function PlaceBuildListComponent_ng_template_14_Template(rf, ctx) {
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
function PlaceBuildListComponent_ng_template_16_Conditional_2_Template(rf, ctx) {
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
function PlaceBuildListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, PlaceBuildListComponent_ng_template_16_Conditional_2_Template, 3, 3, "span", 13);
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
function PlaceBuildListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceBuildListComponent_ng_template_18_Template_button_click_1_listener() {
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
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "ADMIN.BUILD_LIST_REMOVE"));
  }
}
function queryBuildJobs(q = {}) {
  const query = toQueryString(q);
  return N(`/api/build/v1/monitor${query ? "?" + query : ""}`);
}
function cancelBuildJob(id, q = {}) {
  const query = toQueryString(q);
  return Pe(`/api/build/v1/cancel/${id}${query ? "?" + query : ""}`);
}
var PlaceBuildListComponent = class _PlaceBuildListComponent {
  _dialog = inject(MatDialog);
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  hide_job = signal("", ...ngDevMode ? [{ debugName: "hide_job" }] : []);
  last_change = signal(null, ...ngDevMode ? [{ debugName: "last_change" }] : []);
  job_list = signal([], ...ngDevMode ? [{ debugName: "job_list" }] : []);
  jobs = computed(() => {
    return this.job_list().filter(({ id }) => id !== this.hide_job());
  }, ...ngDevMode ? [{ debugName: "jobs" }] : []);
  ngOnInit() {
    this.loadJobList();
  }
  async remove(i) {
    const details = await openConfirmModal({
      title: i18n("ADMIN.BUILD_LIST_REMOVE"),
      content: i18n("ADMIN.BUILD_LIST_REMOVE_MSG", {
        driver: i.driver,
        repo: i.repo
      }),
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details)
      return;
    details.loading(i18n("ADMIN.BUILD_LIST_REMOVE_LOADING"));
    const err = await lastValueFrom(cancelBuildJob(i.id)).catch((_) => _);
    details.close();
    if (err)
      return notifyError(i18n("ADMIN.BUILD_LIST_REMOVE_ERROR", {
        error: err.statusText || err.message || err
      }));
    this.last_change.set(null);
    notifySuccess(i18n("ADMIN.BUILD_LIST_REMOVE_SUCCESS"));
    this.hide_job.set(i.id);
  }
  async loadJobList() {
    this.loading.set("Loading build jobs...");
    const { data } = await lastValueFrom(queryBuildJobs()).catch(() => ({ data: [] }));
    this.job_list.set((data || []).sort((a, b) => a.id?.localeCompare(b.id)));
    this.loading.set("");
  }
  static \u0275fac = function PlaceBuildListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceBuildListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceBuildListComponent, selectors: [["", "admin-build-list", ""]], attrs: _c0, decls: 20, vars: 33, consts: [["repo_template", ""], ["driver_template", ""], ["description_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-xs", "opacity-30"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-xs", "select-text"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function PlaceBuildListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 7);
      \u0275\u0275element(6, "mat-progress-bar", 8)(7, "simple-table", 9);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, PlaceBuildListComponent_ng_template_12_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, PlaceBuildListComponent_ng_template_14_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, PlaceBuildListComponent_ng_template_16_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, PlaceBuildListComponent_ng_template_18_Template, 5, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const repo_template_r7 = \u0275\u0275reference(13);
      const driver_template_r8 = \u0275\u0275reference(15);
      const description_template_r9 = \u0275\u0275reference(17);
      const actions_template_r10 = \u0275\u0275reference(19);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "ADMIN.BUILD_LIST_HEADER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.jobs())("columns", \u0275\u0275pureFunction4(28, _c5, \u0275\u0275pureFunction2(17, _c1, \u0275\u0275pipeBind1(8, 9, "REPOS.SINGULAR"), repo_template_r7), \u0275\u0275pureFunction2(20, _c2, \u0275\u0275pipeBind1(9, 11, "DRIVERS.SINGULAR"), driver_template_r8), \u0275\u0275pureFunction2(23, _c3, \u0275\u0275pipeBind1(10, 13, "COMMON.FIELD_DESCRIPTION"), description_template_r9), \u0275\u0275pureFunction1(26, _c4, actions_template_r10)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(11, 15, "ADMIN.BUILD_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=build-list.component.css.map */"] });
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
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="jobs()"
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
                            name: ' ',
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.BUILD_LIST_EMPTY' | translate"
                ></simple-table>
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
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.BUILD_LIST_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;6b916a9ce9f87da660309829bc1d821535f5316b965f45f91afca36edea1098c;/home/runner/work/backoffice/backoffice/src/app/admin/build-list.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=build-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceBuildListComponent, { className: "PlaceBuildListComponent", filePath: "src/app/admin/build-list.component.ts", lineNumber: 143 });
})();
export {
  PlaceBuildListComponent
};
//# sourceMappingURL=chunk-WM3GWRO6.js.map
