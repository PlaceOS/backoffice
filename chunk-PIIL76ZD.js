import {
  SimpleTableComponent
} from "./chunk-A7H3VPGN.js";
import {
  confirmAndRun
} from "./chunk-6PURSEHW.js";
import "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import {
  describeError
} from "./chunk-HS2B2TZM.js";
import {
  ProgressBarComponent
} from "./chunk-4BOXZ4WO.js";
import "./chunk-V2X4XHND.js";
import {
  AsyncHandler
} from "./chunk-44FYJ5G4.js";
import "./chunk-OTF7M54K.js";
import "./chunk-ODMV6TQA.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import {
  build_monitor_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow
} from "./chunk-LD3K5ATK.js";
import {
  escapeHtml
} from "./chunk-Y2QSYZTA.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  Injector,
  ViewChild,
  afterNextRender,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/build-list.component.ts
var _c0 = ["job_table"];
var _c1 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "8rem" });
var _c2 = (a0, a1) => ({ key: "repo", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "driver", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "message", name: a0, size: "32rem", content: a1 });
var _c5 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "3.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c7 = (a0) => ({ error: a0 });
function PlaceBuildListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "ADMIN.BUILD_LIST_LOAD_ERROR", \u0275\u0275pureFunction1(4, _c7, ctx_r0.load_error())), " ");
  }
}
function PlaceBuildListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(data_r2 === "error" ? "font-medium text-(--error-text)" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.stateLabel(data_r2)), " ");
  }
}
function PlaceBuildListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.repo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.branch);
  }
}
function PlaceBuildListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.driver);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.commit);
  }
}
function PlaceBuildListComponent_ng_template_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r5);
  }
}
function PlaceBuildListComponent_ng_template_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESCRIPTION_EMPTY"), " ");
  }
}
function PlaceBuildListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, PlaceBuildListComponent_ng_template_22_Conditional_1_Template, 2, 1, "span", 17)(2, PlaceBuildListComponent_ng_template_22_Conditional_2_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r5 ? 1 : 2);
  }
}
function PlaceBuildListComponent_ng_template_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function PlaceBuildListComponent_ng_template_24_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r7 = \u0275\u0275nextContext().row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(row_r7));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 1, "ADMIN.BUILD_LIST_REMOVE"));
  }
}
function PlaceBuildListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275conditionalCreate(1, PlaceBuildListComponent_ng_template_24_Conditional_1_Template, 4, 3, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isActive(row_r7) ? 1 : -1);
  }
}
var STATE_LABELS = {
  pending: "ADMIN.BUILD_LIST_STATE_PENDING",
  running: "ADMIN.BUILD_LIST_STATE_RUNNING",
  cancelled: "ADMIN.BUILD_LIST_STATE_CANCELLED",
  error: "ADMIN.BUILD_LIST_STATE_ERROR",
  done: "ADMIN.BUILD_LIST_STATE_DONE"
};
var ACTIVE_STATES = ["pending", "running"];
var FINISHED_STATES = [
  "cancelled",
  "error",
  "done"
];
var POLL_INTERVAL_MS = 5 * 1e3;
var FINISHED_POLL_INTERVAL_MS = 60 * 1e3;
var MAX_JOBS = 500;
async function queryJobsInState(state) {
  const data = await build_monitor_exports.monitor({ state }).then(orThrow);
  return Array.isArray(data) ? [...data] : [];
}
async function queryBuildJobs(states) {
  const results = await Promise.allSettled(states.map(queryJobsInState));
  const failed = results.find((result) => result.status === "rejected");
  if (failed)
    throw failed.reason;
  return results.flatMap((result) => result.status === "fulfilled" ? result.value : []);
}
function mergeJobs(jobs) {
  const order = Object.keys(STATE_LABELS);
  const sorted = [...jobs].sort((a, b) => order.indexOf(a.state) - order.indexOf(b.state));
  const by_id = new Map(sorted.map((job) => [job.id, job]));
  return [...by_id.values()].slice(0, MAX_JOBS).sort((a, b) => a.id?.localeCompare(b.id));
}
function cancelBuildJob(job) {
  return build_monitor_exports.cancel({ job }).then(orThrow);
}
var PlaceBuildListComponent = class _PlaceBuildListComponent extends AsyncHandler {
  _dialog = inject(Dialog);
  _injector = inject(Injector);
  _job_table = viewChild(
    "job_table",
    ...ngDevMode ? [{ debugName: "_job_table" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Jobs that are pending or running, from the last refresh */
  _active_jobs = [];
  /** Jobs that have finished, from the last refresh of them */
  _finished_jobs = [];
  /** Whether the next refresh must also load the finished jobs */
  _finished_stale = true;
  /** Count of jobs cancelled. A refresh that started before a cancel is old */
  _cancel_count = 0;
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
  /** Text of the error of the last refresh, or empty when it loaded */
  load_error = signal(
    "",
    ...ngDevMode ? [{ debugName: "load_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadJobList();
    this.interval("poll", () => this.loadJobList(), POLL_INTERVAL_MS);
    this.interval("poll_finished", () => this._finished_stale = true, FINISHED_POLL_INTERVAL_MS);
  }
  /** Locale key of the label of a job state */
  stateLabel(state) {
    return STATE_LABELS[state] ?? state;
  }
  /** Whether the job has not finished, so the user can cancel it */
  isActive(job) {
    return ACTIVE_STATES.includes(job.state);
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
    if (!removed)
      return;
    this._cancel_count++;
    this._active_jobs = this._active_jobs.filter(({ id }) => id !== i.id);
    this._finished_stale = true;
    this.setJobList(this.job_list().filter(({ id }) => id !== i.id));
    this.loadJobList();
  }
  /**
   * Loads the job list. It loads the active jobs each time, and the finished
   * jobs when they are stale or an active job has left the active list.
   * It skips the load while the page is hidden or a load is in progress.
   * A failed load keeps the last list and sets `load_error`.
   */
  async loadJobList() {
    if (this.loading() || document.hidden)
      return;
    this.loading.set("Loading build jobs...");
    const cancel_count = this._cancel_count;
    try {
      const active = await queryBuildJobs(ACTIVE_STATES);
      const ids = new Set(active.map(({ id }) => id));
      const load_finished = this._finished_stale || this._active_jobs.some(({ id }) => !ids.has(id));
      const finished = load_finished ? await queryBuildJobs(FINISHED_STATES) : this._finished_jobs;
      if (cancel_count !== this._cancel_count)
        return;
      this._active_jobs = active;
      this._finished_jobs = finished;
      if (load_finished)
        this._finished_stale = false;
      this.setJobList(mergeJobs([...active, ...finished]));
      this.load_error.set("");
    } catch (error) {
      if (cancel_count === this._cancel_count) {
        this.load_error.set(describeError(error));
      }
    } finally {
      this.loading.set("");
      if (cancel_count !== this._cancel_count)
        this.loadJobList();
    }
  }
  /**
   * Sets the shown jobs. When this removes the focused element, such as the
   * Cancel button of a job that finished, focus moves to the table.
   */
  setJobList(list) {
    const host = this._job_table()?.nativeElement;
    const focused = document.activeElement;
    const had_focus = !!host && host !== focused && host.contains(focused);
    this.job_list.set(list);
    if (!had_focus)
      return;
    afterNextRender(() => {
      if (!focused?.isConnected)
        host.focus();
    }, { injector: this._injector });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceBuildListComponent_BaseFactory;
    return function PlaceBuildListComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceBuildListComponent_BaseFactory || (\u0275PlaceBuildListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceBuildListComponent)))(__ngFactoryType__ || _PlaceBuildListComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceBuildListComponent, selectors: [["", "admin-build-list", ""]], viewQuery: function PlaceBuildListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._job_table, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 43, consts: [["job_table", ""], ["state_template", ""], ["repo_template", ""], ["driver_template", ""], ["description_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], ["tabindex", "-1", 1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], ["role", "alert", 1, "px-4", "py-2", "text-sm", "text-(--error-text)"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "px-4", "py-2"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-xs", "opacity-30"], [1, "max-h-48", "w-full", "overflow-auto", "px-4", "py-2", "text-xs", "select-text"], [1, "whitespace-pre-wrap"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "ripple", "", 1, "text-error", 3, "appTooltip"], ["icon", "", "ripple", "", 1, "text-error", 3, "click", "appTooltip"]], template: function PlaceBuildListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 9, 0);
      \u0275\u0275element(7, "app-progress-bar", 10);
      \u0275\u0275conditionalCreate(8, PlaceBuildListComponent_Conditional_8_Template, 3, 6, "p", 11);
      \u0275\u0275element(9, "simple-table", 12);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, PlaceBuildListComponent_ng_template_16_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, PlaceBuildListComponent_ng_template_18_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, PlaceBuildListComponent_ng_template_20_Template, 5, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, PlaceBuildListComponent_ng_template_22_Template, 3, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(24, PlaceBuildListComponent_ng_template_24_Template, 2, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const state_template_r8 = \u0275\u0275reference(17);
      const repo_template_r9 = \u0275\u0275reference(19);
      const driver_template_r10 = \u0275\u0275reference(21);
      const description_template_r11 = \u0275\u0275reference(23);
      const actions_template_r12 = \u0275\u0275reference(25);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.BUILD_LIST_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.load_error() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.job_list())("columns", \u0275\u0275pureFunction5(37, _c6, \u0275\u0275pureFunction2(22, _c1, \u0275\u0275pipeBind1(10, 10, "ADMIN.BUILD_LIST_FIELD_STATE"), state_template_r8), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(11, 12, "REPOS.SINGULAR"), repo_template_r9), \u0275\u0275pureFunction2(28, _c3, \u0275\u0275pipeBind1(12, 14, "DRIVERS.SINGULAR"), driver_template_r10), \u0275\u0275pureFunction2(31, _c4, \u0275\u0275pipeBind1(13, 16, "ADMIN.BUILD_LIST_FIELD_OUTPUT"), description_template_r11), \u0275\u0275pureFunction2(34, _c5, \u0275\u0275pipeBind1(14, 18, "COMMON.ACTIONS"), actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(15, 20, "ADMIN.BUILD_LIST_EMPTY"));
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
            <!-- Gets focus when a refresh removes the focused element -->
            <div
                #job_table
                tabindex="-1"
                class="h-1/2 w-full flex-1 overflow-auto px-4"
            >
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                @if (load_error()) {
                    <p
                        role="alert"
                        class="px-4 py-2 text-sm text-(--error-text)"
                    >
                        {{
                            'ADMIN.BUILD_LIST_LOAD_ERROR'
                                | translate: { error: load_error() }
                        }}
                    </p>
                }
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="job_list()"
                    [columns]="[
                        {
                            key: 'state',
                            name: 'ADMIN.BUILD_LIST_FIELD_STATE' | translate,
                            content: state_template,
                            size: '8rem',
                        },
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
                            name: 'ADMIN.BUILD_LIST_FIELD_OUTPUT' | translate,
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
        <ng-template #state_template let-data="data">
            <div
                class="px-4 py-2"
                [class]="
                    data === 'error' ? 'font-medium text-(--error-text)' : ''
                "
            >
                {{ stateLabel(data) | translate }}
            </div>
        </ng-template>
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
            <div
                class="max-h-48 w-full overflow-auto px-4 py-2 text-xs select-text"
            >
                @if (data) {
                    <span class="whitespace-pre-wrap">{{ data }}</span>
                } @else {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                @if (isActive(row)) {
                    <button
                        icon
                        ripple
                        class="text-error"
                        [appTooltip]="'ADMIN.BUILD_LIST_REMOVE' | translate"
                        (click)="remove(row)"
                    >
                        <icon>delete</icon>
                    </button>
                }
            </div>
        </ng-template>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent
    ], styles: ["/* angular:styles/component:css;ec8f84e53cdd709f;/home/runner/work/backoffice/backoffice/src/app/admin/build-list.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n  min-height: 10rem;\n}\n/*# sourceMappingURL=build-list.component.css.map */\n"] }]
  }], null, { _job_table: [{ type: ViewChild, args: ["job_table", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceBuildListComponent, { className: "PlaceBuildListComponent", filePath: "src/app/admin/build-list.component.ts", lineNumber: 246 });
})();
export {
  PlaceBuildListComponent
};
//# debugId=1d01d97c-cb08-598c-b2c2-63cc3c1418be
//# sourceMappingURL=chunk-PIIL76ZD.js.map
