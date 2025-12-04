import {
  PlaceDebugService
} from "./chunk-LFCOZRS7.js";
import {
  SanitizePipe
} from "./chunk-KVAZG2CB.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TDDLCX2F.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ScrollingModule
} from "./chunk-TZTONW54.js";
import {
  TranslatePipe
} from "./chunk-GROJVO3W.js";
import {
  MatRippleModule
} from "./chunk-ZF3Z6LCK.js";
import {
  IconComponent
} from "./chunk-VLW6LVHT.js";
import {
  MatRipple
} from "./chunk-PECY6EPM.js";
import {
  AsyncHandler
} from "./chunk-7UVGUB3C.js";
import {
  SafePipe
} from "./chunk-W37MESDG.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  Input,
  NgControlStatus,
  NgModel,
  Output,
  Renderer2,
  ViewChild,
  computed,
  eventToPoint,
  forwardRef,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-C25AKIFS.js";

// src/app/ui/new-terminal.component.ts
var _c0 = ["container"];
function NewTerminalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, item_r2), \u0275\u0275sanitizeHtml);
  }
}
function NewTerminalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.DEBUG_NO_MESSAGES"), " ");
  }
}
var NewTerminalComponent = class _NewTerminalComponent extends AsyncHandler {
  _sanitize_pipe = inject(SanitizePipe);
  lines = input([], ...ngDevMode ? [{ debugName: "lines" }] : []);
  search = model("", ...ngDevMode ? [{ debugName: "search" }] : []);
  resize = input(0, ...ngDevMode ? [{ debugName: "resize" }] : []);
  old_count = signal(0, ...ngDevMode ? [{ debugName: "old_count" }] : []);
  line_length = signal(80, ...ngDevMode ? [{ debugName: "line_length" }] : []);
  search_count = computed(() => {
    const s = this.search().toLowerCase();
    const list = this.lines().filter((_) => _.toLowerCase().includes(s));
    return list.length;
  }, ...ngDevMode ? [{ debugName: "search_count" }] : []);
  displayed_lines = computed(() => {
    const s = this.search().toLowerCase();
    const list = this.lines().filter((_) => _.toLowerCase().includes(s));
    let out_lines = [];
    for (const ln of list) {
      if (!ln)
        continue;
      out_lines = out_lines.concat(this._formatLineWithHTML(ln));
    }
    this._handleOutputLines(out_lines);
    return out_lines;
  }, ...ngDevMode ? [{ debugName: "displayed_lines" }] : []);
  item_count = computed(() => this.displayed_lines().length, ...ngDevMode ? [{ debugName: "item_count" }] : []);
  _scroll_viewport = viewChild(CdkVirtualScrollViewport, ...ngDevMode ? [{ debugName: "_scroll_viewport" }] : []);
  _container_el = viewChild("container", ...ngDevMode ? [{ debugName: "_container_el" }] : []);
  ngOnChanges(changes) {
    if (changes.resize) {
      this._updateLineLength();
    }
  }
  _updateLineLength() {
    this.line_length.set(Math.max(40, Math.floor(this._container_el().nativeElement.getBoundingClientRect().width / 8)));
  }
  _formatLineWithHTML(line) {
    const sanitized_line = this._sanitize_pipe.transform(line).toString();
    if (sanitized_line.length < this.line_length())
      return [setTermColorsForLine(sanitized_line)];
    const lines = [];
    let count = 0;
    while (count < 128 && count * this.line_length() < sanitized_line.length) {
      lines.push(`${count > 0 ? "&nbsp;&nbsp;&nbsp;&nbsp;" : ""}${setTermColorsForLine(sanitized_line.substring(count * this.line_length(), (count + 1) * this.line_length()))}`);
      count += 1;
    }
    return lines;
  }
  _handleOutputLines(lines) {
    const new_count = lines.length;
    const old_count = new_count || 0;
    const offset = this._scroll_viewport().getOffsetToRenderedContentStart();
    const size = this._scroll_viewport().getViewportSize();
    this.timeout("update_viewport", () => {
      this._scroll_viewport()?.checkViewportSize();
      if ((offset + size) / 24 > old_count - 7 || old_count < 5) {
        this._scroll_viewport().scrollToIndex(new_count);
      }
    }, 10);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NewTerminalComponent_BaseFactory;
    return function NewTerminalComponent_Factory(__ngFactoryType__) {
      return (\u0275NewTerminalComponent_BaseFactory || (\u0275NewTerminalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NewTerminalComponent)))(__ngFactoryType__ || _NewTerminalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewTerminalComponent, selectors: [["new-terminal"]], viewQuery: function NewTerminalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._scroll_viewport, CdkVirtualScrollViewport, 5);
      \u0275\u0275viewQuerySignal(ctx._container_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { lines: [1, "lines"], search: [1, "search"], resize: [1, "resize"] }, outputs: { search: "searchChange" }, features: [\u0275\u0275ProvidersFeature([SanitizePipe]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 9, vars: 7, consts: [["container", ""], [1, "relative", "flex", "h-full", "w-full", "items-end", "bg-[#424242]", "text-xs", "text-white"], ["itemSize", "24", 1, "max-h-full", "w-full"], ["class", "mono hover:bg-base-content/10 p-1", 3, "innerHTML", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "absolute", "inset-0", "flex", "select-none", "flex-col", "items-center", "justify-center", "text-base"], [1, "absolute", "-top-11", "right-0", "flex", "items-center", "space-x-2", "p-2"], ["placeholder", "\u{1F50D} Filter output", 1, "bg-neutral-700", "mono", "border-none", "p-1", "text-sm", 3, "ngModelChange", "ngModel"], [1, "mono", "hover:bg-base-content/10", "p-1", 3, "innerHTML"], [1, "opacity-60"]], template: function NewTerminalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0)(2, "cdk-virtual-scroll-viewport", 2);
      \u0275\u0275template(3, NewTerminalComponent_div_3_Template, 2, 3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, NewTerminalComponent_Conditional_4_Template, 4, 3, "div", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NewTerminalComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", 24 * ctx.item_count() + "px");
      \u0275\u0275advance();
      \u0275\u0275property("cdkVirtualForOf", ctx.displayed_lines());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.displayed_lines().length ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.search_count(), " / ", ctx.lines().length);
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ScrollingModule,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    CommonModule,
    SafePipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 1px;\n  grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=new-terminal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewTerminalComponent, [{
    type: Component,
    args: [{ selector: "new-terminal", template: `
        <div
            class="relative flex h-full w-full items-end bg-[#424242] text-xs text-white"
            #container
        >
            <cdk-virtual-scroll-viewport
                itemSize="24"
                class="max-h-full w-full"
                [style.height]="24 * item_count() + 'px'"
            >
                <div
                    *cdkVirtualFor="let item of displayed_lines()"
                    [innerHTML]="item | safe"
                    class="mono hover:bg-base-content/10 p-1"
                ></div>
            </cdk-virtual-scroll-viewport>
            @if (!displayed_lines().length) {
                <div
                    class="absolute inset-0 flex select-none flex-col items-center justify-center text-base"
                >
                    <p class="opacity-60">
                        {{ 'COMMON.DEBUG_NO_MESSAGES' | translate }}
                    </p>
                </div>
            }
            <div
                class="absolute -top-11 right-0 flex items-center space-x-2 p-2"
            >
                <input
                    class="bg-neutral-700 mono border-none p-1 text-sm"
                    [(ngModel)]="search"
                    placeholder="\u{1F50D} Filter output"
                />
                <div>{{ search_count() }} / {{ lines().length }}</div>
            </div>
        </div>
    `, providers: [SanitizePipe], imports: [
      FormsModule,
      ScrollingModule,
      CommonModule,
      SafePipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;ac761fce0fe642f6f42242a63f57cb9526f0fe26576fe9ef0c42f9333ba3313a;/home/runner/work/backoffice/backoffice/src/app/ui/new-terminal.component.ts */\n:host {\n  display: block;\n  height: 1px;\n  grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=new-terminal.component.css.map */\n"] }]
  }], null, { lines: [{ type: Input, args: [{ isSignal: true, alias: "lines", required: false }] }], search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }, { type: Output, args: ["searchChange"] }], resize: [{ type: Input, args: [{ isSignal: true, alias: "resize", required: false }] }], _scroll_viewport: [{ type: ViewChild, args: [forwardRef(() => CdkVirtualScrollViewport), { isSignal: true }] }], _container_el: [{ type: ViewChild, args: ["container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewTerminalComponent, { className: "NewTerminalComponent", filePath: "src/app/ui/new-terminal.component.ts", lineNumber: 81 });
})();
function setTermColorsForLine(line) {
  return `<span>${line.replace(/\u001b?\[([0-9]*)m/g, '</span><span class="tc-$1">')}</span>`.replace("<span></span>", "");
}

// src/app/ui/debug-output.component.ts
var _c02 = ["content"];
var _c1 = (a0) => ({ count: a0 });
function DebugOutputComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("resize", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onWindowResize());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 3, 0)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "new-terminal", 5);
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275listener("mousedown", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, "y"));
    })("touchstart", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, "y"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275listener("mousedown", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_mousedown_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, "x"));
    })("touchstart", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_touchstart_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, "x"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275listener("mousedown", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_mousedown_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, "xy"));
    })("touchstart", function DebugOutputComponent_Conditional_0_Conditional_0_Template_div_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startResize($event, "xy"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadLogs());
    });
    \u0275\u0275elementStart(12, "icon", 11);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275text(14, " download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDebugPosition());
    });
    \u0275\u0275elementStart(16, "icon", 11);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearDebugMessages());
    });
    \u0275\u0275elementStart(20, "icon", 11);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22, " clear_all ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 12);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Conditional_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearBindings());
    });
    \u0275\u0275elementStart(25, "icon");
    \u0275\u0275text(26, "cancel_presentation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 12);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(29, "icon");
    \u0275\u0275text(30, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.debug_position() === "floating" ? "absolute bottom-2 right-2" : "h-full w-full");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.debug_position() === "side" ? "100%" : ctx_r1.height() + "px")("width", ctx_r1.debug_position() === "below" ? "100%" : ctx_r1.width() + "px");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 15, "COMMON.MESSAGE_COUNT", \u0275\u0275pureFunction1(29, _c1, ctx_r1.event_count()), ctx_r1.event_count()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("lines", ctx_r1.logs())("resize", ctx_r1.resize());
    \u0275\u0275advance(6);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 19, "COMMON.DEBUG_DOWNLOAD_MESSAGES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 21, "COMMON.DEBUG_TOGGLE_POSITION"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.debug_position() === "side" ? "border_bottom" : "border_right");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 23, "COMMON.DEBUG_CLEAR_MESSAGES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(24, 25, "COMMON.DEBUG_UNBIND_MODULES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(28, 27, "COMMON.DEBUG_CLOSE_CONSOLE"));
  }
}
function DebugOutputComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DebugOutputComponent_Conditional_0_Conditional_0_Template, 31, 31, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.is_shown() ? 0 : -1);
  }
}
var DebugOutputComponent = class _DebugOutputComponent extends AsyncHandler {
  _service = inject(PlaceDebugService);
  _renderer = inject(Renderer2);
  compact = input(false, ...ngDevMode ? [{ debugName: "compact" }] : []);
  /** Display string for debug logs */
  logs = computed(() => this._service.terminal_string().split("\n"), ...ngDevMode ? [{ debugName: "logs" }] : []);
  /** Height of the debug console */
  height = signal(240, ...ngDevMode ? [{ debugName: "height" }] : []);
  /** Width of the debug console */
  width = signal(768, ...ngDevMode ? [{ debugName: "width" }] : []);
  /** Toggle to resize the terminal display */
  resize = signal(0, ...ngDevMode ? [{ debugName: "resize" }] : []);
  event_count = this._service.event_count;
  /** Whether user is listening for debug information */
  is_enabled = this._service.enabled;
  is_shown = this._service.is_shown;
  /** Start point for resizing the console box */
  _resize_start;
  _content_el = viewChild("content", ...ngDevMode ? [{ debugName: "_content_el" }] : []);
  get modules() {
    return this._service.modules;
  }
  get module_list() {
    const o = this._service.module_names;
    return Object.keys(o).map((k) => `${o[k]} (${k})`).join("\n");
  }
  debug_position = this._service.position;
  close() {
    this._service.is_shown.set(false);
  }
  toggleDebugPosition() {
    this._service.position.update((p) => p === "side" ? "below" : "side");
    this.height.set(this._service.position() === "side" ? 768 : 240);
    this.width.set(this._service.position() === "side" ? 240 : 768);
  }
  /** Clear all the debug logs */
  clearDebugMessages() {
    this._service.clearEvents();
  }
  clearBindings() {
    this._service.unbindAll();
  }
  onWindowResize() {
    this.timeout("resize", () => this.resize.set(Date.now()), 50);
  }
  startResize(event, dir) {
    this._resize_start = eventToPoint(event);
    if (event instanceof MouseEvent) {
      this.subscription("resize_move", this._renderer.listen("window", "mousemove", (event2) => this.resizeMove(event2, dir)));
      this.subscription("resize_end", this._renderer.listen("window", "mouseup", (_) => {
        this.unsub("resize_move");
        this.unsub("resize_end");
        const box = this._content_el().nativeElement.getBoundingClientRect();
        this.height.set(box.height);
        this.width.set(box.width);
      }));
    } else {
      this.subscription("resize_move", this._renderer.listen("window", "touchmove", (event2) => this.resizeMove(event2, dir)));
      this.subscription("resize_end", this._renderer.listen("window", "touchend", (_) => {
        this.unsub("resize_move");
        this.unsub("resize_end");
        const box = this._content_el().nativeElement.getBoundingClientRect();
        this.height.set(box.height);
        this.width.set(box.width);
      }));
    }
  }
  resizeMove(event, dir) {
    const point = eventToPoint(event);
    const diff = {
      x: point.x - this._resize_start.x,
      y: point.y - this._resize_start.y
    };
    if (dir.indexOf("x") >= 0) {
      this.width.set(this.width() - diff.x);
    }
    if (dir.indexOf("y") >= 0) {
      this.height.set(this.height() - diff.y);
    }
    this._resize_start = point;
    this.timeout("resize", () => this.resize.set(Date.now()), 50);
  }
  downloadLogs() {
    const blob = new Blob([this.logs().join("\n")], {
      type: "text/plain;charset=utf-8"
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "debug.log";
    a.click();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DebugOutputComponent_BaseFactory;
    return function DebugOutputComponent_Factory(__ngFactoryType__) {
      return (\u0275DebugOutputComponent_BaseFactory || (\u0275DebugOutputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DebugOutputComponent)))(__ngFactoryType__ || _DebugOutputComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugOutputComponent, selectors: [["app-debug-output"]], viewQuery: function DebugOutputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._content_el, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { compact: [1, "compact"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["content", ""], [3, "class"], [3, "resize"], ["content", "", 1, "animate-fade-in", "relative", "z-10", "flex", "flex-col", "overflow-hidden", "border", "border-base-200", "bg-[#212121]", "text-white", "shadow-sm"], [1, "p-3", "text-sm"], [3, "lines", "resize"], ["ns-resize", "", 1, "absolute", "-top-2", "left-0", "right-0", "h-4", "select-none", 3, "mousedown", "touchstart"], ["ew-resize", "", 1, "absolute", "-left-2", "bottom-0", "top-0", "w-4", "select-none", 3, "mousedown", "touchstart"], ["nwse-resize", "", 1, "absolute", "-left-2", "-top-2", "h-4", "w-4", "select-none", 3, "mousedown", "touchstart"], ["actions", "", 1, "absolute", "bottom-2", "right-2", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 1, "rounded-full", "bg-neutral-focus", "text-neutral-content", "shadow-sm", 3, "click"], [3, "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded-full", "bg-neutral-focus", "text-neutral-content", "shadow-sm", 3, "click", "matTooltip"]], template: function DebugOutputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DebugOutputComponent_Conditional_0_Template, 1, 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.is_enabled() ? 0 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    MatRippleModule,
    MatRipple,
    NewTerminalComponent,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  z-index: 20;\n}\n[content][_ngcontent-%COMP%] {\n  min-width: 24rem;\n  min-height: 15rem;\n  max-height: 100%;\n  max-width: 100%;\n}\n[content][_ngcontent-%COMP%]   [actions][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n[content][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[ns-resize][_ngcontent-%COMP%] {\n  cursor: ns-resize;\n}\n[ew-resize][_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\n[nwse-resize][_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\n/*# sourceMappingURL=debug-output.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugOutputComponent, [{
    type: Component,
    args: [{ selector: "app-debug-output", template: `
        @if (is_enabled()) {
            @if (is_shown()) {
                <div
                    [class]="
                        debug_position() === 'floating'
                            ? 'absolute bottom-2 right-2'
                            : 'h-full w-full'
                    "
                    (window:resize)="onWindowResize()"
                >
                    <div
                        class="animate-fade-in relative z-10 flex flex-col overflow-hidden border border-base-200 bg-[#212121] text-white shadow-sm"
                        content
                        #content
                        [style.height]="
                            debug_position() === 'side'
                                ? '100%'
                                : height() + 'px'
                        "
                        [style.width]="
                            debug_position() === 'below'
                                ? '100%'
                                : width() + 'px'
                        "
                    >
                        <div class="p-3 text-sm">
                            {{
                                'COMMON.MESSAGE_COUNT'
                                    | translate
                                        : { count: event_count() }
                                        : event_count()
                            }}
                        </div>
                        <new-terminal
                            [lines]="logs()"
                            [resize]="resize()"
                        ></new-terminal>
                        <!-- <a-terminal [content]="logs" [resize]="resize"></a-terminal> -->
                        <div
                            class="absolute -top-2 left-0 right-0 h-4 select-none"
                            ns-resize
                            (mousedown)="startResize($event, 'y')"
                            (touchstart)="startResize($event, 'y')"
                        ></div>
                        <div
                            class="absolute -left-2 bottom-0 top-0 w-4 select-none"
                            ew-resize
                            (mousedown)="startResize($event, 'x')"
                            (touchstart)="startResize($event, 'x')"
                        ></div>
                        <div
                            class="absolute -left-2 -top-2 h-4 w-4 select-none"
                            nwse-resize
                            (mousedown)="startResize($event, 'xy')"
                            (touchstart)="startResize($event, 'xy')"
                        ></div>
                        <div
                            actions
                            class="absolute bottom-2 right-2 flex items-center space-x-2"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-full bg-neutral-focus text-neutral-content shadow-sm"
                                (click)="downloadLogs()"
                            >
                                <icon
                                    [matTooltip]="
                                        'COMMON.DEBUG_DOWNLOAD_MESSAGES'
                                            | translate
                                    "
                                >
                                    download
                                </icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-full bg-neutral-focus text-neutral-content shadow-sm"
                                (click)="toggleDebugPosition()"
                            >
                                <icon
                                    [matTooltip]="
                                        'COMMON.DEBUG_TOGGLE_POSITION'
                                            | translate
                                    "
                                    >{{
                                        debug_position() === 'side'
                                            ? 'border_bottom'
                                            : 'border_right'
                                    }}</icon
                                >
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-full bg-neutral-focus text-neutral-content shadow-sm"
                                (click)="clearDebugMessages()"
                            >
                                <icon
                                    [matTooltip]="
                                        'COMMON.DEBUG_CLEAR_MESSAGES'
                                            | translate
                                    "
                                >
                                    clear_all
                                </icon>
                            </button>
                            <button
                                icon
                                matRipple
                                (click)="clearBindings()"
                                class="rounded-full bg-neutral-focus text-neutral-content shadow-sm"
                                [matTooltip]="
                                    'COMMON.DEBUG_UNBIND_MODULES' | translate
                                "
                            >
                                <icon>cancel_presentation</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                (click)="close()"
                                class="rounded-full bg-neutral-focus text-neutral-content shadow-sm"
                                [matTooltip]="
                                    'COMMON.DEBUG_CLOSE_CONSOLE' | translate
                                "
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      MatRippleModule,
      NewTerminalComponent
    ], styles: ["/* angular:styles/component:css;e36b6b62788ada7ab07d67f8707dbe1c023ddb670fe27ee2079e78bc5b6b3a73;/home/runner/work/backoffice/backoffice/src/app/ui/debug-output.component.ts */\n:host > div {\n  max-height: 100%;\n  max-width: 100%;\n  z-index: 20;\n}\n[content] {\n  min-width: 24rem;\n  min-height: 15rem;\n  max-height: 100%;\n  max-width: 100%;\n}\n[content] [actions] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n[content]:hover [actions] {\n  opacity: 1;\n}\n.disabled {\n  pointer-events: none;\n}\n[ns-resize] {\n  cursor: ns-resize;\n}\n[ew-resize] {\n  cursor: ew-resize;\n}\n[nwse-resize] {\n  cursor: nwse-resize;\n}\n/*# sourceMappingURL=debug-output.component.css.map */\n"] }]
  }], null, { compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }], _content_el: [{ type: ViewChild, args: ["content", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugOutputComponent, { className: "DebugOutputComponent", filePath: "src/app/ui/debug-output.component.ts", lineNumber: 209 });
})();

export {
  DebugOutputComponent
};
//# sourceMappingURL=chunk-XRDYTYTM.js.map
