import {
  VirtualScrollComponent
} from "./chunk-KWYOQXS6.js";
import {
  PlaceDebugService
} from "./chunk-J5QXA7JE.js";
import {
  SanitizePipe
} from "./chunk-4SAVGYEQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-P45XEGRE.js";
import {
  AsyncHandler
} from "./chunk-OU4ZSGGA.js";
import {
  MatRippleModule
} from "./chunk-RHXWHY3G.js";
import {
  TranslatePipe
} from "./chunk-ZCVCPEH7.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-2OXMVWQR.js";
import {
  eventToPoint
} from "./chunk-Y2VDX4KN.js";
import {
  MatRipple
} from "./chunk-M7TMFMYW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VARF64W7.js";
import {
  Component,
  Input,
  Output,
  Renderer2,
  ViewChild,
  computed,
  effect,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-QSXZQV2A.js";

// src/app/ui/new-terminal.component.ts
var _c0 = ["container"];
function NewTerminalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, item_r2), \u0275\u0275sanitizeHtml);
  }
}
function NewTerminalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 9);
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
  lines = input(
    [],
    ...ngDevMode ? [{ debugName: "lines" }] : (
      /* istanbul ignore next */
      []
    )
  );
  search = model(
    "",
    ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resize = input(
    0,
    ...ngDevMode ? [{ debugName: "resize" }] : (
      /* istanbul ignore next */
      []
    )
  );
  old_count = signal(
    0,
    ...ngDevMode ? [{ debugName: "old_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  line_length = signal(
    80,
    ...ngDevMode ? [{ debugName: "line_length" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _filtered_events = computed(
    () => {
      const s = this.search().toLowerCase();
      return this.lines().filter((event) => event.toLowerCase().includes(s));
    },
    ...ngDevMode ? [{ debugName: "_filtered_events" }] : (
      /* istanbul ignore next */
      []
    )
  );
  search_count = computed(
    () => this._filtered_events().length,
    ...ngDevMode ? [{ debugName: "search_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  displayed_lines = computed(
    () => {
      const out_lines = [];
      for (const event of this._filtered_events()) {
        if (!event)
          continue;
        for (const ln of event.split("\n")) {
          out_lines.push(...this._formatLineWithHTML(ln));
        }
      }
      return out_lines;
    },
    ...ngDevMode ? [{ debugName: "displayed_lines" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item_count = computed(
    () => this.displayed_lines().length,
    ...ngDevMode ? [{ debugName: "item_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _scroll_viewport = viewChild(
    VirtualScrollComponent,
    ...ngDevMode ? [{ debugName: "_scroll_viewport" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _container_el = viewChild(
    "container",
    ...ngDevMode ? [{ debugName: "_container_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _scroll_offset = 0;
  _scroll_range = 0;
  constructor() {
    super();
    effect(() => {
      const lines = this.displayed_lines();
      this._handleOutputLines(lines);
    });
  }
  ngOnChanges(changes) {
    if (changes.resize) {
      this._updateLineLength();
    }
  }
  onScrolled([offset, end]) {
    this._scroll_offset = offset;
    this._scroll_range = end - offset;
  }
  _updateLineLength() {
    this.line_length.set(Math.max(40, Math.floor(this._container_el().nativeElement.getBoundingClientRect().width / 8)));
  }
  _formatLineWithHTML(line) {
    const sanitized_line = this._sanitize_pipe.transform(line).toString();
    const max_length = this.line_length();
    if (sanitized_line.length <= max_length)
      return [setTermColorsForLine(sanitized_line)];
    const lines = [];
    let remaining = sanitized_line;
    let count = 0;
    while (count < 128 && remaining.length > 0) {
      let break_at = max_length;
      if (remaining.length > max_length) {
        const last_space = remaining.lastIndexOf(" ", max_length);
        if (last_space > max_length * 0.3) {
          break_at = last_space;
        }
      } else {
        break_at = remaining.length;
      }
      const segment = remaining.substring(0, break_at);
      remaining = remaining.substring(break_at).trimStart();
      lines.push(`${count > 0 ? "&nbsp;&nbsp;&nbsp;&nbsp;" : ""}${setTermColorsForLine(segment)}`);
      count += 1;
    }
    return lines;
  }
  _handleOutputLines(lines) {
    const new_count = lines.length;
    const old_count = this.old_count();
    this.timeout("update_viewport", () => {
      const viewport = this._scroll_viewport();
      if (!viewport)
        return;
      viewport.updateContainer();
      if (this._scroll_offset + this._scroll_range > old_count - 7 || old_count < 5) {
        viewport.scrollToIndex(new_count);
      }
      this.old_count.set(new_count);
    }, 10);
  }
  static \u0275fac = function NewTerminalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewTerminalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewTerminalComponent, selectors: [["new-terminal"]], viewQuery: function NewTerminalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._scroll_viewport, VirtualScrollComponent, 5)(ctx._container_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { lines: [1, "lines"], search: [1, "search"], resize: [1, "resize"] }, outputs: { search: "searchChange" }, features: [\u0275\u0275ProvidersFeature([SanitizePipe]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 12, vars: 9, consts: [["line_template", ""], ["container", ""], [1, "bg-base-200", "border-base-300", "relative", "flex", "h-full", "w-full", "items-end", "border-t", "text-xs", "text-white"], [1, "max-h-full", "w-full", 3, "scrolled", "items", "item_size", "item_template"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-base", "select-none"], [1, "absolute", "-top-11", "right-0", "flex", "items-center", "space-x-2", "p-2"], [1, "absolute", "top-1/2", "left-3", "-translate-y-1/2", "text-xl"], ["placeholder", "Filter output", 1, "mono", "bg-base-200", "placeholder:text-base-400", "rounded", "border-none", "px-8", "py-1", "pr-1", "text-sm", "text-white", 3, "ngModelChange", "ngModel"], [1, "mono", "p-1", "hover:bg-white/10", 3, "innerHTML"], [1, "opacity-60"]], template: function NewTerminalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, NewTerminalComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(2, "div", 2, 1)(4, "virtual-scroll", 3);
      \u0275\u0275listener("scrolled", function NewTerminalComponent_Template_virtual_scroll_scrolled_4_listener($event) {
        return ctx.onScrolled($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, NewTerminalComponent_Conditional_5_Template, 4, 3, "div", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "icon", 6);
      \u0275\u0275text(8, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function NewTerminalComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "div");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const line_template_r3 = \u0275\u0275reference(1);
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("height", 24 * ctx.item_count() + "px");
      \u0275\u0275property("items", ctx.displayed_lines())("item_size", 24)("item_template", line_template_r3);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.displayed_lines().length ? 5 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.search_count(), " / ", ctx.lines().length);
    }
  }, dependencies: [
    IconComponent,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    VirtualScrollComponent,
    SafePipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 1px;\n  grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=new-terminal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewTerminalComponent, [{
    type: Component,
    args: [{ selector: "new-terminal", template: `
        <ng-template #line_template let-item="item">
            <div
                [innerHTML]="item | safe"
                class="mono p-1 hover:bg-white/10"
            ></div>
        </ng-template>
        <div
            class="bg-base-200 border-base-300 relative flex h-full w-full items-end border-t text-xs text-white"
            #container
        >
            <virtual-scroll
                class="max-h-full w-full"
                [style.height]="24 * item_count() + 'px'"
                [items]="displayed_lines()"
                [item_size]="24"
                [item_template]="line_template"
                (scrolled)="onScrolled($event)"
            />
            @if (!displayed_lines().length) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center text-base select-none"
                >
                    <p class="opacity-60">
                        {{ 'COMMON.DEBUG_NO_MESSAGES' | translate }}
                    </p>
                </div>
            }
            <div
                class="absolute -top-11 right-0 flex items-center space-x-2 p-2"
            >
                <icon class="absolute top-1/2 left-3 -translate-y-1/2 text-xl"
                    >search</icon
                >
                <input
                    class="mono bg-base-200 placeholder:text-base-400 rounded border-none px-8 py-1 pr-1 text-sm text-white"
                    [(ngModel)]="search"
                    placeholder="Filter output"
                />
                <div>{{ search_count() }} / {{ lines().length }}</div>
            </div>
        </div>
    `, providers: [SanitizePipe], imports: [
      IconComponent,
      FormsModule,
      SafePipe,
      TranslatePipe,
      VirtualScrollComponent
    ], styles: ["/* angular:styles/component:css;ac761fce0fe642f6f42242a63f57cb9526f0fe26576fe9ef0c42f9333ba3313a;/home/runner/work/backoffice/backoffice/src/app/ui/new-terminal.component.ts */\n:host {\n  display: block;\n  height: 1px;\n  grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=new-terminal.component.css.map */\n"] }]
  }], () => [], { lines: [{ type: Input, args: [{ isSignal: true, alias: "lines", required: false }] }], search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }, { type: Output, args: ["searchChange"] }], resize: [{ type: Input, args: [{ isSignal: true, alias: "resize", required: false }] }], _scroll_viewport: [{ type: ViewChild, args: [forwardRef(() => VirtualScrollComponent), { isSignal: true }] }], _container_el: [{ type: ViewChild, args: ["container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewTerminalComponent, { className: "NewTerminalComponent", filePath: "src/app/ui/new-terminal.component.ts", lineNumber: 86 });
})();
function setTermColorsForLine(line) {
  return `<span>${line.replace(
    // eslint-disable-next-line no-control-regex
    /\u001b?\[([0-9]*)m/g,
    '</span><span class="tc-$1">'
  )}</span>`.replace("<span></span>", "");
}

// src/app/ui/debug-output.component.ts
var _c02 = ["content"];
var _c1 = (a0) => ({ count: a0 });
function DebugOutputComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("resize", function DebugOutputComponent_Conditional_0_Template_div_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWindowResize());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 3, 0)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "new-terminal", 5);
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275listener("mousedown", function DebugOutputComponent_Conditional_0_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "y"));
    })("touchstart", function DebugOutputComponent_Conditional_0_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "y"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275listener("mousedown", function DebugOutputComponent_Conditional_0_Template_div_mousedown_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "x"));
    })("touchstart", function DebugOutputComponent_Conditional_0_Template_div_touchstart_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "x"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275listener("mousedown", function DebugOutputComponent_Conditional_0_Template_div_mousedown_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "xy"));
    })("touchstart", function DebugOutputComponent_Conditional_0_Template_div_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startResize($event, "xy"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadLogs());
    });
    \u0275\u0275elementStart(12, "icon", 11);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275text(14, " download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 10);
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDebugPosition());
    });
    \u0275\u0275elementStart(16, "icon", 11);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearDebugMessages());
    });
    \u0275\u0275elementStart(20, "icon", 11);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22, " clear_all ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 12);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearBindings());
    });
    \u0275\u0275elementStart(25, "icon");
    \u0275\u0275text(26, "cancel_presentation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 12);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function DebugOutputComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(29, "icon");
    \u0275\u0275text(30, "close");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.debug_position() === "floating" ? "absolute right-2 bottom-2" : "h-full w-full");
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
var DebugOutputComponent = class _DebugOutputComponent extends AsyncHandler {
  _service = inject(PlaceDebugService);
  _renderer = inject(Renderer2);
  compact = input(
    false,
    ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Display string for debug logs */
  logs = this._service.terminal_lines;
  /** Height of the debug console */
  height = signal(
    240,
    ...ngDevMode ? [{ debugName: "height" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Width of the debug console */
  width = signal(
    768,
    ...ngDevMode ? [{ debugName: "width" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Toggle to resize the terminal display */
  resize = signal(
    0,
    ...ngDevMode ? [{ debugName: "resize" }] : (
      /* istanbul ignore next */
      []
    )
  );
  event_count = this._service.event_count;
  /** Whether user is listening for debug information */
  is_enabled = this._service.enabled;
  is_shown = this._service.is_shown;
  /** Start point for resizing the console box */
  _resize_start;
  _content_el = viewChild(
    "content",
    ...ngDevMode ? [{ debugName: "_content_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
      this.subscription("resize_end", this._renderer.listen("window", "mouseup", () => {
        this.unsub("resize_move");
        this.unsub("resize_end");
        const box = this._content_el().nativeElement.getBoundingClientRect();
        this.height.set(box.height);
        this.width.set(box.width);
      }));
    } else {
      this.subscription("resize_move", this._renderer.listen("window", "touchmove", (event2) => this.resizeMove(event2, dir)));
      this.subscription("resize_end", this._renderer.listen("window", "touchend", () => {
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
  }, inputs: { compact: [1, "compact"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["content", ""], [3, "class"], [3, "resize"], ["content", "", 1, "animate-fade-in", "border-base-300", "bg-base-100", "relative", "z-10", "flex", "flex-col", "overflow-hidden", "border", "text-white", "shadow-sm"], [1, "p-3", "text-sm"], [1, "h-1/2", "w-full", "flex-1", 3, "lines", "resize"], ["ns-resize", "", 1, "absolute", "-top-2", "right-0", "left-0", "h-4", "select-none", 3, "mousedown", "touchstart"], ["ew-resize", "", 1, "absolute", "top-0", "bottom-0", "-left-2", "w-4", "select-none", 3, "mousedown", "touchstart"], ["nwse-resize", "", 1, "absolute", "-top-2", "-left-2", "h-4", "w-4", "select-none", 3, "mousedown", "touchstart"], ["actions", "", 1, "absolute", "right-2", "bottom-2", "flex", "items-center", "gap-1"], ["icon", "", "default", "", "matRipple", "", 3, "click"], [3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function DebugOutputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DebugOutputComponent_Conditional_0_Template, 31, 31, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.is_enabled() && ctx.is_shown() ? 0 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    MatRippleModule,
    MatRipple,
    NewTerminalComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  z-index: 20;\n}\n[content][_ngcontent-%COMP%] {\n  min-width: 24rem;\n  min-height: 15rem;\n  max-height: 100%;\n  max-width: 100%;\n}\n[content][_ngcontent-%COMP%]   [actions][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n[content][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[ns-resize][_ngcontent-%COMP%] {\n  cursor: ns-resize;\n}\n[ew-resize][_ngcontent-%COMP%] {\n  cursor: ew-resize;\n}\n[nwse-resize][_ngcontent-%COMP%] {\n  cursor: nwse-resize;\n}\n/*# sourceMappingURL=debug-output.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugOutputComponent, [{
    type: Component,
    args: [{ selector: "app-debug-output", template: `
        @if (is_enabled() && is_shown()) {
            <div
                [class]="
                    debug_position() === 'floating'
                        ? 'absolute right-2 bottom-2'
                        : 'h-full w-full'
                "
                (window:resize)="onWindowResize()"
            >
                <div
                    class="animate-fade-in border-base-300 bg-base-100 relative z-10 flex flex-col overflow-hidden border text-white shadow-sm"
                    content
                    #content
                    [style.height]="
                        debug_position() === 'side' ? '100%' : height() + 'px'
                    "
                    [style.width]="
                        debug_position() === 'below' ? '100%' : width() + 'px'
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
                        class="h-1/2 w-full flex-1"
                    />
                    <!-- <a-terminal [content]="logs" [resize]="resize"></a-terminal> -->
                    <div
                        class="absolute -top-2 right-0 left-0 h-4 select-none"
                        ns-resize
                        (mousedown)="startResize($event, 'y')"
                        (touchstart)="startResize($event, 'y')"
                    ></div>
                    <div
                        class="absolute top-0 bottom-0 -left-2 w-4 select-none"
                        ew-resize
                        (mousedown)="startResize($event, 'x')"
                        (touchstart)="startResize($event, 'x')"
                    ></div>
                    <div
                        class="absolute -top-2 -left-2 h-4 w-4 select-none"
                        nwse-resize
                        (mousedown)="startResize($event, 'xy')"
                        (touchstart)="startResize($event, 'xy')"
                    ></div>
                    <div
                        actions
                        class="absolute right-2 bottom-2 flex items-center gap-1"
                    >
                        <button icon default matRipple (click)="downloadLogs()">
                            <icon
                                [matTooltip]="
                                    'COMMON.DEBUG_DOWNLOAD_MESSAGES' | translate
                                "
                            >
                                download
                            </icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="toggleDebugPosition()"
                        >
                            <icon
                                [matTooltip]="
                                    'COMMON.DEBUG_TOGGLE_POSITION' | translate
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
                            default
                            matRipple
                            (click)="clearDebugMessages()"
                        >
                            <icon
                                [matTooltip]="
                                    'COMMON.DEBUG_CLEAR_MESSAGES' | translate
                                "
                            >
                                clear_all
                            </icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearBindings()"
                            [matTooltip]="
                                'COMMON.DEBUG_UNBIND_MODULES' | translate
                            "
                        >
                            <icon>cancel_presentation</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="close()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugOutputComponent, { className: "DebugOutputComponent", filePath: "src/app/ui/debug-output.component.ts", lineNumber: 195 });
})();

export {
  DebugOutputComponent
};
//# sourceMappingURL=chunk-KIGULFXP.js.map
