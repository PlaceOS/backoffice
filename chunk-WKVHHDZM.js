import {
  toSignal
} from "./chunk-KMTGRH5S.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SH4SZQVY.js";
import {
  SettingsService
} from "./chunk-IHKZPR32.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-Z3EKRGVK.js";
import {
  AsyncHandler
} from "./chunk-5P6RE4SY.js";
import {
  MatRippleModule
} from "./chunk-IZKGHFEC.js";
import {
  TranslatePipe
} from "./chunk-J7QUXEOH.js";
import {
  IconComponent
} from "./chunk-ZHEO2T5Y.js";
import "./chunk-WL7ZLVLT.js";
import {
  MatRipple
} from "./chunk-3WFHRON7.js";
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-46M7K5TF.js";
import {
  Ct,
  catchError,
  filter,
  interval,
  map,
  of,
  sc,
  startWith,
  switchMap,
  tap
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/ui/basic-line-graph.component.ts
var _c0 = ["canvas"];
var _c1 = ["basic-line-graph", ""];
var COLORS = [
  ["hsla(217, 91%, 60%, 1)", "hsla(217, 91%, 60%, 0.4)"],
  ["hsla(118, 50%, 43%, 1)", "hsla(118, 50%, 43%, 0.4)"]
];
var BasicLineGraphComponent = class _BasicLineGraphComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  _element = inject(ElementRef);
  lines = input([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  _canvas_el = viewChild("canvas", ...ngDevMode ? [{ debugName: "_canvas_el" }] : []);
  get is_dark_mode() {
    return this._settings.get("theme") === "dark";
  }
  ngAfterViewInit() {
    this._setupCanvas();
    requestAnimationFrame(() => this._drawGraph());
  }
  _setupCanvas() {
    const canvas_el = this._canvas_el()?.nativeElement;
    if (!canvas_el) {
      return this.timeout("setup", () => this._setupCanvas());
    }
    const container_box = this._element.nativeElement.getBoundingClientRect();
    canvas_el.width = container_box.width * 2;
    canvas_el.height = container_box.height * 2;
  }
  _drawGraph() {
    const _canvas_el = this._canvas_el();
    if (!_canvas_el?.nativeElement)
      return;
    const ctx = _canvas_el.nativeElement.getContext("2d");
    if (!ctx)
      return;
    let { width, height } = _canvas_el.nativeElement;
    const color = this.is_dark_mode ? "#FFFA" : "#000";
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    const padding = 12;
    ctx.translate(padding, padding);
    width -= padding * 2;
    height -= padding * 2;
    const axis_start = { x: 40, y: 16 };
    const subdivisions = 4;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 4]);
    for (let i = 0; i < subdivisions; i++) {
      ctx.beginPath();
      ctx.moveTo(axis_start.x, (height - axis_start.y) * (i / subdivisions));
      ctx.lineTo(width - 2, (height - axis_start.y) * (i / subdivisions));
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.font = "20px Fira Code";
    ctx.fillStyle = color;
    ctx.fillText("50%", -4, (height - axis_start.y) / 2 + 8);
    ctx.fillText("100%", -12, 8);
    ctx.fillText("0", width - 12, height + 4);
    ctx.fillText("60s", axis_start.x, height + 4);
    for (const line of this.lines()) {
      this._drawLine(ctx, [axis_start.x, 0, width - axis_start.x, height - axis_start.y], line, COLORS[this.lines().indexOf(line) % COLORS.length]);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(axis_start.x, 0);
    ctx.lineTo(axis_start.x, height - axis_start.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(axis_start.x, height - axis_start.y);
    ctx.lineTo(width, height - axis_start.y);
    ctx.stroke();
    ctx.restore();
    this.timeout("draw", () => requestAnimationFrame(() => this._drawGraph()));
  }
  _drawLine(ctx, [box_x, box_y, box_w, box_h], points, [stroke, fill]) {
    let count = 0;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(box_w + box_x, box_h + box_y);
    for (const { x, y } of points) {
      if (count > 60)
        break;
      ctx.lineTo(box_w * ((60 - x) / 60) + box_x, box_h * ((100 - y) / 100) - 1 + box_y);
      count += 1;
    }
    while (count < 60) {
      count += 1;
      ctx.lineTo(box_w * ((60 - count) / 60) + box_x, box_h - 1 + box_y);
    }
    ctx.lineTo(box_x, box_h - 1 + box_y);
    ctx.stroke();
    ctx.fill();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BasicLineGraphComponent_BaseFactory;
    return function BasicLineGraphComponent_Factory(__ngFactoryType__) {
      return (\u0275BasicLineGraphComponent_BaseFactory || (\u0275BasicLineGraphComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BasicLineGraphComponent)))(__ngFactoryType__ || _BasicLineGraphComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicLineGraphComponent, selectors: [["", "basic-line-graph", ""]], viewQuery: function BasicLineGraphComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._canvas_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { lines: [1, "lines"] }, features: [\u0275\u0275InheritDefinitionFeature], attrs: _c1, decls: 2, vars: 0, consts: [["canvas", ""], [1, "text-base-content", "h-full", "w-full"]], template: function BasicLineGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "canvas", 1, 0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=basic-line-graph.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicLineGraphComponent, [{
    type: Component,
    args: [{ selector: "[basic-line-graph]", template: `
        <canvas #canvas class="text-base-content h-full w-full"></canvas>
    `, styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/backoffice/backoffice/src/app/ui/basic-line-graph.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=basic-line-graph.component.css.map */\n"] }]
  }], null, { lines: [{ type: Input, args: [{ isSignal: true, alias: "lines", required: false }] }], _canvas_el: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicLineGraphComponent, { className: "BasicLineGraphComponent", filePath: "src/app/ui/basic-line-graph.component.ts", lineNumber: 38 });
})();

// src/app/admin/cluster-details/cluster-node.component.ts
var _c02 = ["chart"];
var _c12 = (a0) => ({ count: a0 });
function AdminClusterNodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.node()) == null ? null : tmp_1_0.hostname);
  }
}
var AdminClusterNodeComponent = class _AdminClusterNodeComponent {
  show_name = input(true, ...ngDevMode ? [{ debugName: "show_name" }] : []);
  /** Node to display on the view */
  node = input(void 0, ...ngDevMode ? [{ debugName: "node" }] : []);
  /** Historical data for node */
  history = input(void 0, ...ngDevMode ? [{ debugName: "history" }] : []);
  /** Store for the chart data object */
  // private _chart: Chart;
  /**  */
  lines = [];
  used_memory = computed(() => {
    return Ct((this.node()?.memory_usage || 0) * 1024).replace("GB", "").replace("MB", "").trim();
  }, ...ngDevMode ? [{ debugName: "used_memory" }] : []);
  total_memory = computed(() => {
    return Ct((this.node()?.memory_total || 0) * 1024);
  }, ...ngDevMode ? [{ debugName: "total_memory" }] : []);
  memory_percentage = computed(() => {
    return (this.node()?.memory_usage || 0) / (this.node()?.memory_total || 1) * 100;
  }, ...ngDevMode ? [{ debugName: "memory_percentage" }] : []);
  _chart_el = viewChild("chart", ...ngDevMode ? [{ debugName: "_chart_el" }] : []);
  ngOnInit() {
    this.generateCharts();
  }
  ngOnChanges(changes) {
    if (changes.history && this.history()) {
      this.generateCharts();
    }
  }
  generateCharts() {
    this.lines = [
      this.history().map(({ cpu }, idx) => ({ x: idx, y: cpu })),
      this.history().map(({ memory }, idx) => ({ x: idx, y: memory }))
    ];
  }
  static \u0275fac = function AdminClusterNodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminClusterNodeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminClusterNodeComponent, selectors: [["admin-cluster-node"]], viewQuery: function AdminClusterNodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._chart_el, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { show_name: [1, "show_name"], node: [1, "node"], history: [1, "history"] }, features: [\u0275\u0275NgOnChangesFeature], decls: 22, vars: 18, consts: [[1, "border-base-300", "mb-2", "h-36", "w-full", "rounded-sm", "border", "p-2"], ["basic-line-graph", "", 1, "h-full", "w-full", 3, "lines"], [1, "memory-utilisation"], [1, "flex", "space-x-2"], [1, "border-base-300", "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-1", "rounded-sm", "border", "p-1"], [1, "mono", "text-4xl", "font-medium"], [1, "mono", "w-36", "text-center", "text-xs"]], template: function AdminClusterNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AdminClusterNodeComponent_Conditional_0_Template, 2, 1, "h4");
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275element(2, "div", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 4)(15, "div");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 5);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 6);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275conditional(ctx.show_name() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("lines", ctx.lines);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "ADMIN.CLUSTERS_CPU_USAGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx.node()) == null ? null : tmp_3_0.total_cpu.toFixed(0), "% ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 11, "ADMIN.CLUSTERS_CPU_CORES", \u0275\u0275pureFunction1(16, _c12, ((tmp_4_0 = ctx.node()) == null ? null : tmp_4_0.cpu_count) || 0)), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "ADMIN.CLUSTERS_MEMORY_USAGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.memory_percentage().toFixed(0), "% ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.used_memory(), "/", ctx.total_memory(), " ");
    }
  }, dependencies: [BasicLineGraphComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminClusterNodeComponent, [{
    type: Component,
    args: [{ selector: "admin-cluster-node", template: `
        @if (show_name()) {
            <h4>{{ node()?.hostname }}</h4>
        }
        <div class="border-base-300 mb-2 h-36 w-full rounded-sm border p-2">
            <div basic-line-graph [lines]="lines" class="h-full w-full"></div>
        </div>
        <div class="memory-utilisation">
            <div class="flex space-x-2">
                <div
                    class="border-base-300 flex flex-1 flex-col items-center justify-center space-y-1 rounded-sm border p-1"
                >
                    <div>{{ 'ADMIN.CLUSTERS_CPU_USAGE' | translate }}</div>
                    <div class="mono text-4xl font-medium">
                        {{ node()?.total_cpu.toFixed(0) }}%
                    </div>
                    <div class="mono w-36 text-center text-xs">
                        {{
                            'ADMIN.CLUSTERS_CPU_CORES'
                                | translate: { count: node()?.cpu_count || 0 }
                        }}
                    </div>
                </div>
                <div
                    class="border-base-300 flex flex-1 flex-col items-center justify-center space-y-1 rounded-sm border p-1"
                >
                    <div>{{ 'ADMIN.CLUSTERS_MEMORY_USAGE' | translate }}</div>
                    <div class="mono text-4xl font-medium">
                        {{ memory_percentage().toFixed(0) }}%
                    </div>
                    <div class="mono w-36 text-center text-xs">
                        {{ used_memory() }}/{{ total_memory() }}
                    </div>
                </div>
            </div>
        </div>
    `, imports: [TranslatePipe, BasicLineGraphComponent] }]
  }], null, { show_name: [{ type: Input, args: [{ isSignal: true, alias: "show_name", required: false }] }], node: [{ type: Input, args: [{ isSignal: true, alias: "node", required: false }] }], history: [{ type: Input, args: [{ isSignal: true, alias: "history", required: false }] }], _chart_el: [{ type: ViewChild, args: ["chart", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminClusterNodeComponent, { className: "AdminClusterNodeComponent", filePath: "src/app/admin/cluster-details/cluster-node.component.ts", lineNumber: 81 });
})();

// src/app/admin/cluster-details/cluster-details.component.ts
var _c03 = (a0) => ["/admin", "clusters", a0];
var _c13 = () => ({});
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.hostname;
function PlaceClusterDetailsComponent_Conditional_5_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "admin-cluster-node", 7);
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const cluster_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("show_name", ctx_r2.cluster_nodes.length > 1)("node", node_r1)("history", (ctx_r2.usage_history[cluster_r2.id] || \u0275\u0275pureFunction0(3, _c13))[node_r1.hostname] || \u0275\u0275pureFunction0(4, _c2));
  }
}
function PlaceClusterDetailsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PlaceClusterDetailsComponent_Conditional_5_For_2_For_4_Template, 1, 5, "admin-cluster-node", 7, _forTrack1);
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cluster_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cluster_r2.hostname || "<BLANK>", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.cluster_nodes()[cluster_r2.id]);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c03, cluster_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "ADMIN.CLUSTERS_VIEW_PROCESSES"), " ");
  }
}
function PlaceClusterDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, PlaceClusterDetailsComponent_Conditional_5_For_2_Template, 8, 7, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.cluster_list());
  }
}
function PlaceClusterDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 9);
    \u0275\u0275text(2, "hub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "ADMIN.CLUSTERS_LIST_EMPTY"), " ");
  }
}
var PlaceClusterDetailsComponent = class _PlaceClusterDetailsComponent extends AsyncHandler {
  /** List of available clusters on this instance of engine */
  cluster_list = signal([], ...ngDevMode ? [{ debugName: "cluster_list" }] : []);
  cluster_nodes = signal({}, ...ngDevMode ? [{ debugName: "cluster_nodes" }] : []);
  /** Map of clusters to CPU usage history */
  usage_history = {};
  /** Whether cluster details are being loaded */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  clusters$ = interval(2 * 1e3).pipe(startWith(0), filter(() => !this.loading()), switchMap(() => {
    this.loading.set(true);
    return sc({ include_status: false }).pipe(catchError(() => of({ data: [] })));
  }), map((resp) => resp.data), map((list) => {
    this.cluster_list.set(list || []);
    const date = Date.now();
    const node_map = this.cluster_nodes();
    this.cluster_list().forEach((cluster) => {
      if (!this.usage_history[cluster.id])
        this.usage_history[cluster.id] = {};
      const nodes = [cluster, ...cluster.edge_nodes];
      node_map[cluster.id] = nodes;
      for (const node of nodes) {
        if (!this.usage_history[cluster.id][node.hostname]) {
          this.usage_history[cluster.id][node.hostname] = [];
        }
        const block = this.usage_history[cluster.id][node.hostname];
        block.unshift({
          id: date,
          cpu: node.total_cpu,
          memory: node.memory_percentage
        });
        if (block.length > 120)
          block.pop();
        this.usage_history[cluster.id][node.hostname] = [
          ...block
        ];
      }
    });
    this.cluster_nodes.set(node_map);
  }), tap(() => this.loading.set(false)));
  _cluster_refresh = toSignal(this.clusters$, {
    initialValue: void 0
  });
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceClusterDetailsComponent_BaseFactory;
    return function PlaceClusterDetailsComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceClusterDetailsComponent_BaseFactory || (\u0275PlaceClusterDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceClusterDetailsComponent)))(__ngFactoryType__ || _PlaceClusterDetailsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceClusterDetailsComponent, selectors: [["engine-cluster-details"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 4, consts: [[1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "max-h-full", "flex-wrap", "overflow-auto"], [1, "px-2"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-8", "opacity-30"], [1, "border-base-200", "bg-base-100", "m-2", "space-y-2", "rounded-lg", "border", "p-2", "shadow-sm"], [1, "mono", "bg-base-200", "mb-2", "rounded-sm", "p-2", "text-lg", "font-medium", "uppercase"], [3, "show_name", "node", "history"], ["btn", "", "matRipple", "", 1, "w-full", 3, "routerLink"], [1, "text-8xl"], [1, "text"]], template: function PlaceClusterDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275conditionalCreate(5, PlaceClusterDetailsComponent_Conditional_5_Template, 3, 0, "div", 3)(6, PlaceClusterDetailsComponent_Conditional_6_Template, 6, 3, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ADMIN.CLUSTERS"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.cluster_list().length ? 5 : 6);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    AdminClusterNodeComponent,
    RouterModule,
    RouterLink,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceClusterDetailsComponent, [{
    type: Component,
    args: [{ selector: "engine-cluster-details", template: `
        <div class="my-4 flex items-center justify-between space-x-2 px-4">
            <div class="text-2xl">{{ 'ADMIN.CLUSTERS' | translate }}</div>
        </div>
        <div class="flex max-h-full flex-wrap overflow-auto">
            @if (cluster_list().length) {
                <div class="px-2">
                    @for (cluster of cluster_list(); track cluster.id) {
                        <div
                            class="border-base-200 bg-base-100 m-2 space-y-2 rounded-lg border p-2 shadow-sm"
                        >
                            <h3
                                class="mono bg-base-200 mb-2 rounded-sm p-2 text-lg font-medium uppercase"
                            >
                                {{ cluster.hostname || '&lt;BLANK&gt;' }}
                            </h3>
                            @for (
                                node of cluster_nodes()[cluster.id];
                                track node.hostname
                            ) {
                                <admin-cluster-node
                                    [show_name]="cluster_nodes.length > 1"
                                    [node]="node"
                                    [history]="
                                        (usage_history[cluster.id] || {})[
                                            node.hostname
                                        ] || []
                                    "
                                ></admin-cluster-node>
                            }
                            <a
                                btn
                                matRipple
                                class="w-full"
                                [routerLink]="[
                                    '/admin',
                                    'clusters',
                                    cluster.id,
                                ]"
                            >
                                {{
                                    'ADMIN.CLUSTERS_VIEW_PROCESSES' | translate
                                }}
                            </a>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-8 opacity-30"
                >
                    <icon class="text-8xl">hub</icon>
                    <div class="text">
                        {{ 'ADMIN.CLUSTERS_LIST_EMPTY' | translate }}
                    </div>
                </div>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      AdminClusterNodeComponent,
      RouterModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceClusterDetailsComponent, { className: "PlaceClusterDetailsComponent", filePath: "src/app/admin/cluster-details/cluster-details.component.ts", lineNumber: 93 });
})();
export {
  PlaceClusterDetailsComponent
};
//# sourceMappingURL=chunk-WKVHHDZM.js.map
