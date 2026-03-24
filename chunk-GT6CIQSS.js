import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ICL26W6M.js";
import {
  CONFIRM_METADATA,
  ConfirmModalComponent
} from "./chunk-ION2CCEC.js";
import {
  SimpleTableComponent
} from "./chunk-W2PUTAUI.js";
import "./chunk-4ALOESAF.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5YKIVDAT.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-SW42XPF4.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-OXGNLB63.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-YIBSFQXI.js";
import "./chunk-3DWKKPWQ.js";
import {
  MatDialog
} from "./chunk-Y4JFOSQS.js";
import "./chunk-ITU7FLKB.js";
import {
  AsyncHandler
} from "./chunk-KNPBCUJZ.js";
import "./chunk-263IF76L.js";
import {
  IconComponent
} from "./chunk-4IZH7QGG.js";
import "./chunk-QXQNKIRF.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import {
  MatRippleModule
} from "./chunk-6CBQWDU5.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-5UPGSA24.js";
import "./chunk-TALE6FQV.js";
import {
  MatRipple
} from "./chunk-TEK5TAH3.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QMACIC7N.js";
import {
  Au,
  Ou,
  Pu,
  lastValueFrom,
  map
} from "./chunk-T6SXWR5P.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/cluster-details/cluster-task-list.component.ts
var _c0 = () => ["/admin", "clusters"];
var _c1 = (a0, a1) => ({ key: "id", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "cpu_usage", name: a0, content: a1, size: "6rem" });
var _c3 = (a0) => ({ key: "used_memory", name: a0, size: "7rem" });
var _c4 = (a0) => ({ key: "module_instances", name: a0, size: "6rem" });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c6 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function PlaceClusterTaskListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.taskDetails(row_r2.id).path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.taskDetails(row_r2.id).type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.taskDetails(row_r2.id).hash, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.taskDetails(row_r2.id).arch, " ");
  }
}
function PlaceClusterTaskListComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.cpu_usage.toFixed(2), "% ");
  }
}
function PlaceClusterTaskListComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceClusterTaskListComponent_ng_template_28_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmKillProcess(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "ADMIN.CLUSTER_PROCESS_KILL"));
  }
}
var task_details = {};
var PlaceClusterTaskListComponent = class _PlaceClusterTaskListComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  _route = inject(ActivatedRoute);
  cluster = signal(null, ...ngDevMode ? [{ debugName: "cluster" }] : []);
  /** Whether the task list is updating */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** ID of the process being killed */
  killing = signal("", ...ngDevMode ? [{ debugName: "killing" }] : []);
  process_list = signal([], ...ngDevMode ? [{ debugName: "process_list" }] : []);
  filter = signal("", ...ngDevMode ? [{ debugName: "filter" }] : []);
  filtered_list = computed(() => this.process_list().filter((item) => item.id.toLowerCase().includes(this.filter().toLowerCase())), ...ngDevMode ? [{ debugName: "filtered_list" }] : []);
  column_list = [
    "id",
    "cpu_usage",
    "memory_usage",
    "module_instances",
    "running"
  ];
  taskDetails(id) {
    if (task_details[id])
      return task_details[id];
    const [type, ...path] = id.split("_");
    const arch = path.pop();
    const hash = path.pop();
    task_details[id] = {
      type,
      path: path.join("/"),
      hash,
      arch
    };
    return task_details[id];
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => {
      if (params.has("id")) {
        const id = params.get("id");
        this.loadCluster(id);
      }
    }));
    this.interval("poll", () => this.updateProcessList(), 15 * 1e3);
    this.updateProcessList();
  }
  confirmKillProcess(process) {
    const ref = this._dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
      data: {
        title: i18n("ADMIN.CLUSTER_PROCESS_KILL"),
        content: i18n("ADMIN.CLUSTER_PROCESS_KILL_MSG", {
          id: process.id
        }),
        icon: { type: "icon", content: "delete" }
      }
    }));
    this.subscription("confirm_kill", ref.componentInstance.event.subscribe((event) => {
      if (event.reason === "done") {
        this.killing.set(process.id);
        ref.componentInstance.loading.set(i18n("ADMIN.CLUSTER_PROCESS_KILL_LOADING"));
        this.killProcess(process).then(() => {
          this.killing.set(null);
          ref.close();
        }, (err) => {
          ref.componentInstance.loading.set(null);
          this.killing.set(null);
          notifyError(i18n("ADMIN.CLUSTER_PROCESS_KILL_ERROR", {
            error: JSON.stringify(err.response || err.message || err)
          }));
          ref.close();
        });
      }
    }));
  }
  killProcess(process) {
    return lastValueFrom(Ou(this.cluster().id, { driver: process.id }));
  }
  async loadCluster(id) {
    const clusters = await lastValueFrom(Au({ q: id }).pipe(map((_) => _.data)));
    const match = clusters.find((_) => _.id === id) || clusters[0];
    console.log("Clusters:", clusters);
    this.cluster.set(match);
    this.updateProcessList();
  }
  async updateProcessList() {
    if (!this.cluster())
      return;
    this.loading.set(true);
    const list = await lastValueFrom(Pu(this.cluster().id, {
      include_status: true
    })).catch(() => []);
    this.process_list.set(list.sort((a, b) => b.module_instances - a.module_instances));
    this.loading.set(false);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceClusterTaskListComponent_BaseFactory;
    return function PlaceClusterTaskListComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceClusterTaskListComponent_BaseFactory || (\u0275PlaceClusterTaskListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceClusterTaskListComponent)))(__ngFactoryType__ || _PlaceClusterTaskListComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceClusterTaskListComponent, selectors: [["engine-cluster-task-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 30, vars: 44, consts: [["name_template", ""], ["cpu_template", ""], ["actions_template", ""], [1, "h-full", "w-full", "overflow-auto"], [1, "border-base-300", "bg-base-200", "sticky", "top-0", "left-0", "z-20", "m-4", "mb-4", "flex", "w-[calc(100%-2rem)]", "items-center", "rounded-sm", "border", "p-2"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "text-lg", "font-medium"], [1, "flex-1"], ["appearance", "outline", 1, "no-subscript", "bg-base-100", "rounded-sm"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "mb-4", "w-full", "overflow-auto", "px-4"], [1, "block", "min-w-184", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2", "font-mono"], [1, "mb-1"], [1, "flex", "items-center", "space-x-2", "text-[0.625rem]"], [1, "bg-info", "text-info-content", "rounded-sm", "px-2"], [1, "bg-base-200", "rounded-sm", "px-2"], [1, "w-full", "p-4", "text-right"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function PlaceClusterTaskListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "a", 5)(3, "icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "h3", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "div", 7);
      \u0275\u0275elementStart(9, "mat-form-field", 8)(10, "div", 9)(11, "icon", 10);
      \u0275\u0275text(12, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "input", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function PlaceClusterTaskListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275element(16, "mat-progress-bar", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14);
      \u0275\u0275element(18, "simple-table", 15);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, PlaceClusterTaskListComponent_ng_template_24_Template, 10, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(26, PlaceClusterTaskListComponent_ng_template_26_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(28, PlaceClusterTaskListComponent_ng_template_28_Template, 5, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_4_0;
      const name_template_r7 = \u0275\u0275reference(25);
      const cpu_template_r8 = \u0275\u0275reference(27);
      const actions_template_r9 = \u0275\u0275reference(29);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 11, "ADMIN.CLUSTER"), " - ", (tmp_4_0 = ctx.cluster()) == null ? null : tmp_4_0.hostname, " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 13, "ADMIN.CLUSTERS_SEARCH_PROCESSES"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.filtered_list())("columns", \u0275\u0275pureFunction5(38, _c6, \u0275\u0275pureFunction2(26, _c1, \u0275\u0275pipeBind1(19, 15, "COMMON.FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(29, _c2, \u0275\u0275pipeBind1(20, 17, "ADMIN.CLUSTERS_FIELD_CPU_USAGE"), cpu_template_r8), \u0275\u0275pureFunction1(32, _c3, \u0275\u0275pipeBind1(21, 19, "ADMIN.CLUSTERS_FIELD_MEMORY_USAGE")), \u0275\u0275pureFunction1(34, _c4, \u0275\u0275pipeBind1(22, 21, "ADMIN.CLUSTERS_FIELD_INSTANCES")), \u0275\u0275pureFunction1(36, _c5, actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(23, 23, "ADMIN.CLUSTER_PROCESSES_EMPTY"));
    }
  }, dependencies: [
    CommonModule,
    SimpleTableComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatProgressBarModule,
    MatProgressBar,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=cluster-task-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceClusterTaskListComponent, [{
    type: Component,
    args: [{ selector: "engine-cluster-task-list", template: `
        <div class="h-full w-full overflow-auto">
            <div
                class="border-base-300 bg-base-200 sticky top-0 left-0 z-20 m-4 mb-4 flex w-[calc(100%-2rem)] items-center rounded-sm border p-2"
            >
                <a icon matRipple [routerLink]="['/admin', 'clusters']">
                    <icon>arrow_back</icon>
                </a>
                <h3 class="text-lg font-medium">
                    {{ 'ADMIN.CLUSTER' | translate }} -
                    {{ cluster()?.hostname }}
                </h3>
                <div class="flex-1"></div>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript bg-base-100 rounded-sm"
                >
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        matInput
                        [(ngModel)]="filter"
                        [placeholder]="
                            'ADMIN.CLUSTERS_SEARCH_PROCESSES' | translate
                        "
                    />
                </mat-form-field>
            </div>
            <div class="px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
            </div>
            <div class="mb-4 w-full overflow-auto px-4">
                <simple-table
                    class="block min-w-184 text-sm"
                    [data]="filtered_list()"
                    [columns]="[
                        {
                            key: 'id',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'cpu_usage',
                            name: 'ADMIN.CLUSTERS_FIELD_CPU_USAGE' | translate,
                            content: cpu_template,
                            size: '6rem',
                        },
                        {
                            key: 'used_memory',
                            name:
                                'ADMIN.CLUSTERS_FIELD_MEMORY_USAGE' | translate,
                            size: '7rem',
                        },
                        {
                            key: 'module_instances',
                            name: 'ADMIN.CLUSTERS_FIELD_INSTANCES' | translate,
                            size: '6rem',
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
                    [empty_message]="
                        'ADMIN.CLUSTER_PROCESSES_EMPTY' | translate
                    "
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2 font-mono">
                <div class="mb-1">{{ taskDetails(row.id).path }}</div>
                <div class="flex items-center space-x-2 text-[0.625rem]">
                    <div class="bg-info text-info-content rounded-sm px-2">
                        {{ taskDetails(row.id).type }}
                    </div>
                    <div class="bg-base-200 rounded-sm px-2">
                        {{ taskDetails(row.id).hash }}
                    </div>
                    <div class="bg-base-200 rounded-sm px-2">
                        {{ taskDetails(row.id).arch }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #cpu_template let-row="row">
            <div class="w-full p-4 text-right">
                {{ row.cpu_usage.toFixed(2) }}%
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.CLUSTER_PROCESS_KILL' | translate"
                    (click)="confirmKillProcess(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/backoffice/backoffice/src/app/admin/cluster-details/cluster-task-list.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=cluster-task-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceClusterTaskListComponent, { className: "PlaceClusterTaskListComponent", filePath: "src/app/admin/cluster-details/cluster-task-list.component.ts", lineNumber: 174 });
})();
export {
  PlaceClusterTaskListComponent
};
//# sourceMappingURL=chunk-GT6CIQSS.js.map
