import {
  UserAvatarComponent
} from "./chunk-ZMU5WNTV.js";
import {
  PlaceDebugService
} from "./chunk-RKGB7OTI.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-AN7HGRJ7.js";
import {
  CustomTooltipComponent,
  CustomTooltipData
} from "./chunk-VGOE3NIH.js";
import {
  MatSlideToggle,
  MatSlideToggleModule,
  SkipToContentComponent
} from "./chunk-UZTO4NFT.js";
import {
  ActiveItemService
} from "./chunk-TYSKS4PJ.js";
import {
  VirtualScrollComponent
} from "./chunk-2TM7KV6N.js";
import {
  format
} from "./chunk-NRO2XDNU.js";
import {
  BackofficeUsersService
} from "./chunk-WA4AN4IZ.js";
import {
  canAccessSection,
  hasSupportRole,
  selected_support_group,
  selected_support_group_id,
  support_groups
} from "./chunk-IN2BSCPT.js";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-2HWH2YE2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-JVQGOL5R.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-7XEKM6I6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PZ6AYSMX.js";
import {
  SettingsService
} from "./chunk-TQ7EZLBQ.js";
import {
  VERSION
} from "./chunk-XGWAF3DT.js";
import {
  AsyncHandler
} from "./chunk-6UTRGHRC.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-5YKISWSJ.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-Y2BF2IN5.js";
import {
  LocaleService,
  i18n
} from "./chunk-LD7JHF4N.js";
import {
  Mt,
  ao,
  qo
} from "./chunk-LCM7Z6QA.js";
import {
  eventToPoint,
  issueDescription
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import {
  SafePipe
} from "./chunk-5PLQTUPI.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
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
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
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
} from "./chunk-DTROA6L2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/new-terminal.component.ts
var _c0 = ["container"];
function NewTerminalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275property("innerHTML", item_r2, \u0275\u0275sanitizeHtml);
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
  _format_width = 0;
  _format_cache = /* @__PURE__ */ new Map();
  _formatted_events = computed(
    () => {
      const width = this.line_length();
      if (width !== this._format_width)
        this._format_cache.clear();
      this._format_width = width;
      const next = /* @__PURE__ */ new Map();
      const events = this.lines().map((event) => {
        const formatted = next.get(event) || this._format_cache.get(event) || {
          search: event.toLowerCase(),
          lines: event ? event.split("\n").flatMap((line) => this._formatLineWithHTML(line)) : []
        };
        next.set(event, formatted);
        return formatted;
      });
      this._format_cache = next;
      return events;
    },
    ...ngDevMode ? [{ debugName: "_formatted_events" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _filtered_events = computed(
    () => {
      const search = this.search().toLowerCase();
      return this._formatted_events().filter((event) => event.search.includes(search));
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
    () => this._filtered_events().flatMap((event) => event.lines),
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
    if (!this._container_el())
      return;
    this.line_length.set(Math.max(40, Math.floor(this._container_el().nativeElement.getBoundingClientRect().width / 8)));
  }
  /**
   * Wrap a raw log line to the terminal width and convert it to HTML.
   * The line is split before escaping so that entities are not cut in half.
   */
  _formatLineWithHTML(line) {
    const max_length = this.line_length();
    if (line.length <= max_length)
      return [formatTermLine(line)];
    const lines = [];
    let remaining = line;
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
      lines.push(`${count > 0 ? "&nbsp;&nbsp;&nbsp;&nbsp;" : ""}${formatTermLine(segment)}`);
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
  }, inputs: { lines: [1, "lines"], search: [1, "search"], resize: [1, "resize"] }, outputs: { search: "searchChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 12, vars: 9, consts: [["line_template", ""], ["container", ""], [1, "bg-base-200", "border-base-300", "relative", "flex", "h-full", "w-full", "items-end", "border-t", "text-xs", "text-base-content"], [1, "max-h-full", "w-full", 3, "scrolled", "items", "item_size", "item_template"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-base", "select-none"], [1, "absolute", "-top-11", "right-0", "flex", "items-center", "space-x-2", "p-2"], [1, "absolute", "top-1/2", "left-3", "-translate-y-1/2", "text-xl"], ["placeholder", "Filter output", 1, "mono", "bg-base-200", "placeholder:text-base-400", "rounded", "border-none", "px-8", "py-1", "pr-1", "text-sm", "text-base-content", 3, "ngModelChange", "ngModel"], [1, "mono", "p-1", "hover:bg-base-content/10", 3, "innerHTML"], [1, "opacity-60"]], template: function NewTerminalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, NewTerminalComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
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
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function NewTerminalComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
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
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 1px;\n  grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=new-terminal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewTerminalComponent, [{
    type: Component,
    args: [{ selector: "new-terminal", template: `
        <ng-template #line_template let-item="item">
            <div [innerHTML]="item" class="mono p-1 hover:bg-base-content/10"></div>
        </ng-template>
        <div
            class="bg-base-200 border-base-300 relative flex h-full w-full items-end border-t text-xs text-base-content"
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
                    class="mono bg-base-200 placeholder:text-base-400 rounded border-none px-8 py-1 pr-1 text-sm text-base-content"
                    [(ngModel)]="search"
                    placeholder="Filter output"
                />
                <div>{{ search_count() }} / {{ lines().length }}</div>
            </div>
        </div>
    `, imports: [
      IconComponent,
      FormsModule,
      TranslatePipe,
      VirtualScrollComponent
    ], styles: ["/* angular:styles/component:css;9a21269ce90cb7ad;/home/runner/work/backoffice/backoffice/src/app/ui/new-terminal.component.ts */\n:host {\n  display: block;\n  height: 1px;\n  grow: 1;\n  width: 100%;\n}\n/*# sourceMappingURL=new-terminal.component.css.map */\n"] }]
  }], () => [], { lines: [{ type: Input, args: [{ isSignal: true, alias: "lines", required: false }] }], search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false }] }, { type: Output, args: ["searchChange"] }], resize: [{ type: Input, args: [{ isSignal: true, alias: "resize", required: false }] }], _scroll_viewport: [{ type: ViewChild, args: [forwardRef(() => VirtualScrollComponent), { isSignal: true }] }], _container_el: [{ type: ViewChild, args: ["container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewTerminalComponent, { className: "NewTerminalComponent", filePath: "src/app/ui/new-terminal.component.ts", lineNumber: 78 });
})();
var HTML_ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);
}
function formatTermLine(line) {
  return `<span>${escapeHtml(line).replace(
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
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["content", ""], [3, "class"], [3, "resize"], ["content", "", 1, "animate-fade-in", "border-base-300", "bg-base-100", "text-base-content", "relative", "z-10", "flex", "flex-col", "overflow-hidden", "border", "shadow-sm"], [1, "p-3", "text-sm"], [1, "h-1/2", "w-full", "flex-1", 3, "lines", "resize"], ["ns-resize", "", 1, "absolute", "-top-2", "right-0", "left-0", "h-4", "select-none", 3, "mousedown", "touchstart"], ["ew-resize", "", 1, "absolute", "top-0", "bottom-0", "-left-2", "w-4", "select-none", 3, "mousedown", "touchstart"], ["nwse-resize", "", 1, "absolute", "-top-2", "-left-2", "h-4", "w-4", "select-none", 3, "mousedown", "touchstart"], ["actions", "", 1, "absolute", "right-2", "bottom-2", "flex", "items-center", "gap-1"], ["icon", "", "default", "", "matRipple", "", 3, "click"], [3, "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"]], template: function DebugOutputComponent_Template(rf, ctx) {
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
                    class="animate-fade-in border-base-300 bg-base-100 text-base-content relative z-10 flex flex-col overflow-hidden border shadow-sm"
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
    ], styles: ["/* angular:styles/component:css;b14d05e615094521;/home/runner/work/backoffice/backoffice/src/app/ui/debug-output.component.ts */\n:host > div {\n  max-height: 100%;\n  max-width: 100%;\n  z-index: 20;\n}\n[content] {\n  min-width: 24rem;\n  min-height: 15rem;\n  max-height: 100%;\n  max-width: 100%;\n}\n[content] [actions] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n[content]:hover [actions] {\n  opacity: 1;\n}\n.disabled {\n  pointer-events: none;\n}\n[ns-resize] {\n  cursor: ns-resize;\n}\n[ew-resize] {\n  cursor: ew-resize;\n}\n[nwse-resize] {\n  cursor: nwse-resize;\n}\n/*# sourceMappingURL=debug-output.component.css.map */\n"] }]
  }], null, { _content_el: [{ type: ViewChild, args: ["content", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugOutputComponent, { className: "DebugOutputComponent", filePath: "src/app/ui/debug-output.component.ts", lineNumber: 194 });
})();

// src/app/ui/application-picker-tooltip.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ApplicationPickerTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " Loading applications... ");
    \u0275\u0275elementEnd();
  }
}
function ApplicationPickerTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " No applications configured for this domain. ");
    \u0275\u0275elementEnd();
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 11);
    \u0275\u0275listener("error", function ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r3);
      const app_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadNextIcon(app_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.currentIcon(app_r4))("alt", app_r4.name);
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.appInitial(app_r4.name), " ");
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function ApplicationPickerTooltipComponent_Conditional_6_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275conditionalCreate(2, ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_2_Template, 1, 2, "img", 8)(3, ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_3_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.uri(app_r4.redirect_uri), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.currentIcon(app_r4) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r4.name, " ");
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 12);
    \u0275\u0275listener("click", function ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", ctx_r1.page() === 0);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.page() + 1, " / ", ctx_r1.total_pages(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", ctx_r1.page() >= ctx_r1.total_pages() - 1);
    \u0275\u0275property("disabled", ctx_r1.page() >= ctx_r1.total_pages() - 1);
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, ApplicationPickerTooltipComponent_Conditional_6_For_2_Template, 6, 3, "a", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template, 7, 8, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visible_applications());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.applications().length > ctx_r1.page_size ? 3 : -1);
  }
}
var PAGE_SIZE = 9;
function isSupportedRedirectUri(uri) {
  if (!uri)
    return false;
  try {
    const protocol = new URL(uri, location.origin).protocol;
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
var ApplicationPickerTooltipComponent = class _ApplicationPickerTooltipComponent {
  _tooltip = inject(CustomTooltipData, { optional: true });
  page_size = PAGE_SIZE;
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  page = signal(
    0,
    ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    )
  );
  applications = signal(
    [],
    ...ngDevMode ? [{ debugName: "applications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  total_pages = computed(
    () => Math.max(1, Math.ceil(this.applications().length / PAGE_SIZE)),
    ...ngDevMode ? [{ debugName: "total_pages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  visible_applications = computed(
    () => {
      const start = this.page() * PAGE_SIZE;
      return this.applications().slice(start, start + PAGE_SIZE);
    },
    ...ngDevMode ? [{ debugName: "visible_applications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    const active_authority = Mt();
    if (!active_authority?.id) {
      this.loading.set(false);
      return;
    }
    const response = await qo({
      authority_id: active_authority.id
    }).catch(() => null);
    const applications = (response?.data || []).filter((app) => isSupportedRedirectUri(app?.redirect_uri)).sort((lhs, rhs) => (lhs.name || this.nameFromUri(lhs.redirect_uri)).localeCompare(rhs.name || this.nameFromUri(rhs.redirect_uri))).map((app) => this.mapApplication(app));
    this.applications.set(applications);
    this.page.set(0);
    this.loading.set(false);
  }
  close = () => this._tooltip?.close();
  currentIcon(item) {
    return item.icon_urls[item.icon_index] || "";
  }
  uri(uri) {
    return uri.replace("oauth-resp.html", "");
  }
  appInitial(name) {
    return `${name || "?"}`.trim().charAt(0).toUpperCase() || "?";
  }
  loadNextIcon(item) {
    this.applications.update((applications) => applications.map((app) => app.id === item.id ? __spreadProps(__spreadValues({}, app), {
      icon_index: Math.min(app.icon_index + 1, app.icon_urls.length)
    }) : app));
  }
  previousPage() {
    this.page.update((page) => Math.max(0, page - 1));
  }
  nextPage() {
    this.page.update((page) => Math.min(this.total_pages() - 1, page + 1));
  }
  mapApplication(app) {
    return {
      id: app.id,
      name: app.name || this.nameFromUri(app.redirect_uri),
      redirect_uri: app.redirect_uri,
      icon_urls: this.faviconUrls(app.redirect_uri),
      icon_index: 0
    };
  }
  nameFromUri(uri) {
    try {
      return new URL(uri, location.origin).hostname;
    } catch {
      return "Application";
    }
  }
  faviconUrls(uri) {
    const path = this.redirectPath(uri);
    return [
      ...["svg", "png", "jpg", "ico"].map((ext) => `${path}assets/favicon.${ext}`),
      `${path}favicon.ico`
    ];
  }
  redirectPath(uri) {
    try {
      const url = new URL(uri, location.origin);
      const pathname = url.pathname || "/";
      const last_segment = pathname.split("/").filter((_) => !!_).at(-1);
      const base_path = pathname.endsWith("/") ? pathname : last_segment?.includes(".") ? pathname.slice(0, pathname.lastIndexOf("/") + 1) : `${pathname}/`;
      return `${url.origin}${base_path.startsWith("/") ? "" : "/"}${base_path}`;
    } catch {
      return "/";
    }
  }
  static \u0275fac = function ApplicationPickerTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationPickerTooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationPickerTooltipComponent, selectors: [["application-picker-tooltip"]], decls: 7, vars: 1, consts: [[1, "border-base-300", "bg-base-100", "m-2", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-2xl", "border", "p-4", "shadow-xl"], [1, "mb-2", "px-2", "pt-1", "text-sm", "font-semibold"], [1, "text-base-content/60", "px-2", "py-6", "text-center", "text-sm"], [1, "grid", "grid-cols-3", "gap-2"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-28", "flex-col", "items-center", "justify-start", "rounded-2xl", "px-2", "py-3", "text-center", 3, "href"], [1, "bg-base-200/50", "border-base-200", "mt-3", "flex", "items-center", "justify-between", "rounded-full", "border", "text-sm"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-28", "flex-col", "items-center", "justify-start", "rounded-2xl", "px-2", "py-3", "text-center", 3, "click", "href"], [1, "bg-base-300/50", "mb-3", "flex", "h-14", "w-14", "shrink-0", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "h-full", "w-full", "object-contain", "p-1", 3, "src", "alt"], [1, "text-base-content/60", "text-lg", "font-semibold", "uppercase"], ["app-name", "", 1, "text-sm", "font-medium"], [1, "h-full", "w-full", "object-contain", "p-1", 3, "error", "src", "alt"], ["matRipple", "", 1, "hover:bg-base-200", "w-24", "rounded-full", "px-4", "py-2", 3, "click", "disabled"], [1, "text-base-content/60"]], template: function ApplicationPickerTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div");
      \u0275\u0275conditionalCreate(4, ApplicationPickerTooltipComponent_Conditional_4_Template, 2, 0, "div", 2)(5, ApplicationPickerTooltipComponent_Conditional_5_Template, 2, 0, "div", 2)(6, ApplicationPickerTooltipComponent_Conditional_6_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 4 : !ctx.applications().length ? 5 : 6);
    }
  }, dependencies: [MatRippleModule, MatRipple], styles: ["\n[app-name][_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 1.25rem;\n  max-height: 2.5rem;\n  word-break: break-word;\n}\n/*# sourceMappingURL=application-picker-tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationPickerTooltipComponent, [{
    type: Component,
    args: [{ selector: "application-picker-tooltip", template: `
        <div
            class="border-base-300 bg-base-100 m-2 w-[24rem] max-w-[calc(100vw-2rem)] rounded-2xl border p-4 shadow-xl"
        >
            <div class="mb-2 px-2 pt-1 text-sm font-semibold">Applications</div>
            <div>
                @if (loading()) {
                    <div
                        class="text-base-content/60 px-2 py-6 text-center text-sm"
                    >
                        Loading applications...
                    </div>
                } @else if (!applications().length) {
                    <div
                        class="text-base-content/60 px-2 py-6 text-center text-sm"
                    >
                        No applications configured for this domain.
                    </div>
                } @else {
                    <div class="grid grid-cols-3 gap-2">
                        @for (app of visible_applications(); track app.id) {
                            <a
                                matRipple
                                class="hover:bg-base-200 flex min-h-28 flex-col items-center justify-start rounded-2xl px-2 py-3 text-center"
                                [href]="uri(app.redirect_uri)"
                                (click)="close()"
                            >
                                <div
                                    class="bg-base-300/50 mb-3 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                                >
                                    @if (currentIcon(app)) {
                                        <img
                                            class="h-full w-full object-contain p-1"
                                            [src]="currentIcon(app)"
                                            [alt]="app.name"
                                            (error)="loadNextIcon(app)"
                                        />
                                    } @else {
                                        <div
                                            class="text-base-content/60 text-lg font-semibold uppercase"
                                        >
                                            {{ appInitial(app.name) }}
                                        </div>
                                    }
                                </div>
                                <div app-name class="text-sm font-medium">
                                    {{ app.name }}
                                </div>
                            </a>
                        }
                    </div>
                    @if (applications().length > page_size) {
                        <div
                            class="bg-base-200/50 border-base-200 mt-3 flex items-center justify-between rounded-full border text-sm"
                        >
                            <button
                                matRipple
                                class="hover:bg-base-200 w-24 rounded-full px-4 py-2"
                                [disabled]="page() === 0"
                                [class.opacity-40]="page() === 0"
                                (click)="previousPage()"
                            >
                                Previous
                            </button>
                            <div class="text-base-content/60">
                                {{ page() + 1 }} / {{ total_pages() }}
                            </div>
                            <button
                                matRipple
                                class="hover:bg-base-200 w-24 rounded-full px-4 py-2"
                                [disabled]="page() >= total_pages() - 1"
                                [class.opacity-40]="page() >= total_pages() - 1"
                                (click)="nextPage()"
                            >
                                Next
                            </button>
                        </div>
                    }
                }
            </div>
        </div>
    `, imports: [MatRippleModule], styles: ["/* angular:styles/component:css;67895357353151ef;/home/runner/work/backoffice/backoffice/src/app/ui/application-picker-tooltip.component.ts */\n[app-name] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 1.25rem;\n  max-height: 2.5rem;\n  word-break: break-word;\n}\n/*# sourceMappingURL=application-picker-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationPickerTooltipComponent, { className: "ApplicationPickerTooltipComponent", filePath: "src/app/ui/application-picker-tooltip.component.ts", lineNumber: 130 });
})();

// src/app/ui/debug-info.component.ts
var _c03 = (a0) => ({ modules: a0 });
var _c12 = (a0) => ({ count: a0 });
function DebugInfoComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 4);
    \u0275\u0275text(3, "bug_report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 6);
    \u0275\u0275text(7, "sdk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "icon", 6);
    \u0275\u0275text(13, "business_messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 5, "COMMON.DEBUG_ENABLED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind3(5, 7, "COMMON.DEBUG_LISTENING_MSG", \u0275\u0275pureFunction1(15, _c03, ctx_r0.debug_module_count()), ctx_r0.debug_module_count()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.debug_module_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind3(11, 11, "COMMON.DEBUG_MSG_COUNT_MSG", \u0275\u0275pureFunction1(17, _c12, ctx_r0.debug_message_count()), ctx_r0.debug_message_count()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.debug_message_count(), " ");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.DEBUG_ENABLED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 5, "COMMON.DEBUG_LISTENING_MSG", \u0275\u0275pureFunction1(13, _c03, ctx_r0.debug_module_count()), ctx_r0.debug_module_count()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 9, "COMMON.DEBUG_MSG_COUNT_MSG", \u0275\u0275pureFunction1(15, _c12, ctx_r0.debug_message_count()), ctx_r0.debug_message_count()), " ");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 0)(6, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugPosition());
    });
    \u0275\u0275elementStart(7, "icon", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "Toggle Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearDebugMessages());
    });
    \u0275\u0275elementStart(12, "icon", 4);
    \u0275\u0275text(13, "clear_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "Clear Messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearBindings());
    });
    \u0275\u0275elementStart(17, "icon", 4);
    \u0275\u0275text(18, "hearing_disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20, "Unbind Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDebug());
    });
    \u0275\u0275elementStart(22, "icon", 4);
    \u0275\u0275text(23, "open_in_browser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25, "Open Console");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r3 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "COMMON.MORE_ACTIONS"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.debug_position() === "side" ? "border_bottom" : "border_right");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugPosition());
    });
    \u0275\u0275elementStart(2, "icon", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearDebugMessages());
    });
    \u0275\u0275elementStart(5, "icon", 14);
    \u0275\u0275text(6, "clear_all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearBindings());
    });
    \u0275\u0275elementStart(8, "icon", 15);
    \u0275\u0275text(9, "hearing_disabled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDebug());
    });
    \u0275\u0275elementStart(11, "icon", 16);
    \u0275\u0275text(12, "open_in_browser");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.debug_position() === "side" ? "border_bottom" : "border_right");
  }
}
function DebugInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, DebugInfoComponent_Conditional_0_Conditional_1_Template, 16, 19)(2, DebugInfoComponent_Conditional_0_Conditional_2_Template, 9, 17);
    \u0275\u0275conditionalCreate(3, DebugInfoComponent_Conditional_0_Conditional_3_Template, 26, 5)(4, DebugInfoComponent_Conditional_0_Conditional_4_Template, 13, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.compact() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.compact() ? 3 : 4);
  }
}
var DebugInfoComponent = class _DebugInfoComponent {
  _debug = inject(PlaceDebugService);
  compact = input(
    false,
    ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    )
  );
  debug_position = this._debug.position;
  debug_enabled = this._debug.enabled;
  debug_module_count = this._debug.module_count;
  debug_message_count = this._debug.event_count;
  toggleDebugPosition() {
    this._debug.position.update((p) => p === "side" ? "below" : "side");
  }
  openDebug() {
    this._debug.is_shown.set(true);
  }
  /** Clear all the debug logs */
  clearDebugMessages() {
    this._debug.clearEvents();
  }
  clearBindings() {
    this._debug.unbindAll();
  }
  static \u0275fac = function DebugInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebugInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugInfoComponent, selectors: [["debug-info"]], inputs: { compact: [1, "compact"] }, decls: 1, vars: 1, consts: [["menu", "matMenu"], [1, "border-base-300", "m-2", "flex", "flex-col", "justify-between", "gap-2", "rounded-xl", "border", "p-2"], ["actions", "", 1, "flex", "items-center", "justify-center", "gap-1"], ["matTooltipPosition", "right", 1, "bg-info", "text-info-content", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-2xl"], ["matTooltipPosition", "right", 1, "relative", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-4xl", "opacity-10"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "mono", "bg-info", "text-info-content", "rounded-xl", "p-1", "text-center", "text-xs"], [1, "p-1", "text-center", "text-xs"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["icon", "", "default", "", "matRipple", "", 3, "click"], ["matTooltip", "Toggle Position"], ["matTooltip", "Clear Messages"], ["matTooltip", "Unbind Modules"], ["matTooltip", "Open Console"]], template: function DebugInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DebugInfoComponent_Conditional_0_Template, 5, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.debug_enabled() ? 0 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugInfoComponent, [{
    type: Component,
    args: [{ selector: "debug-info", template: `
        @if (debug_enabled()) {
            <div
                class="border-base-300 m-2 flex flex-col justify-between gap-2 rounded-xl border p-2"
            >
                @if (compact()) {
                    <div
                        class="bg-info text-info-content flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="'COMMON.DEBUG_ENABLED' | translate"
                        matTooltipPosition="right"
                    >
                        <icon class="text-2xl">bug_report</icon>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-4xl opacity-10">sdk</icon>
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            {{ debug_module_count() }}
                        </div>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-4xl opacity-10"
                            >business_messages</icon
                        >
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            {{ debug_message_count() }}
                        </div>
                    </div>
                } @else {
                    <div
                        class="mono bg-info text-info-content rounded-xl p-1 text-center text-xs"
                    >
                        {{ 'COMMON.DEBUG_ENABLED' | translate }}
                    </div>
                    <p class="p-1 text-center text-xs">
                        {{
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        }}<br />
                        {{
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        }}
                    </p>
                }
                @if (compact()) {
                    <button
                        icon
                        default
                        matRipple
                        [matMenuTriggerFor]="menu"
                        [attr.aria-label]="'COMMON.MORE_ACTIONS' | translate"
                    >
                        <icon>more_horiz</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="toggleDebugPosition()">
                            <icon class="text-2xl">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                            <div>Toggle Position</div>
                        </button>
                        <button mat-menu-item (click)="clearDebugMessages()">
                            <icon class="text-2xl">clear_all</icon>
                            <div>Clear Messages</div>
                        </button>
                        <button mat-menu-item (click)="clearBindings()">
                            <icon class="text-2xl">hearing_disabled</icon>
                            <div>Unbind Modules</div>
                        </button>
                        <button mat-menu-item (click)="openDebug()">
                            <icon class="text-2xl">open_in_browser</icon>
                            <div>Open Console</div>
                        </button>
                    </mat-menu>
                } @else {
                    <div actions class="flex items-center justify-center gap-1">
                        <button
                            icon
                            default
                            matRipple
                            (click)="toggleDebugPosition()"
                        >
                            <icon matTooltip="Toggle Position">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearDebugMessages()"
                        >
                            <icon matTooltip="Clear Messages">clear_all</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearBindings()"
                        >
                            <icon matTooltip="Unbind Modules"
                                >hearing_disabled</icon
                            >
                        </button>
                        <button icon default matRipple (click)="openDebug()">
                            <icon matTooltip="Open Console"
                                >open_in_browser</icon
                            >
                        </button>
                    </div>
                }
            </div>
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatMenuModule
    ] }]
  }], null, { compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugInfoComponent, { className: "DebugInfoComponent", filePath: "src/app/ui/debug-info.component.ts", lineNumber: 164 });
})();

// src/app/ui/support-group-picker.component.ts
var _forTrack02 = ($index, $item) => $item.group.id;
function SupportGroupPickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("mat-dialog-close", "");
    \u0275\u0275attribute("aria-current", !ctx_r2.selected_id() ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(!ctx_r2.selected_id() ? "check" : "public");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "GROUPS.ALL_GROUPS"), " ");
  }
}
function SupportGroupPickerComponent_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function SupportGroupPickerComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10)(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SupportGroupPickerComponent_For_13_Conditional_6_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("mat-dialog-close", item_r4.group.id);
    \u0275\u0275attribute("aria-current", ctx_r2.selected_id() === item_r4.group.id ? "true" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selected_id() === item_r4.group.id ? "check" : "groups");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.group.name);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r2.parentName(item_r4.group.parent_id)) ? 6 : -1, tmp_15_0);
  }
}
function SupportGroupPickerComponent_ForEmpty_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "GROUPS.NO_MATCHING_GROUPS"), " ");
  }
}
var SupportGroupPickerComponent = class _SupportGroupPickerComponent {
  search = signal(
    "",
    ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selected_id = selected_support_group_id;
  show_all = hasSupportRole;
  groups = computed(
    () => {
      const search = this.search().trim().toLowerCase();
      return support_groups().filter(({ group }) => `${group.name} ${this.parentName(group.parent_id)}`.toLowerCase().includes(search));
    },
    ...ngDevMode ? [{ debugName: "groups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentName(id) {
    return support_groups().find(({ group }) => group.id === id)?.group.name || "";
  }
  static \u0275fac = function SupportGroupPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupportGroupPickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupportGroupPickerComponent, selectors: [["app-support-group-picker"]], decls: 19, vars: 12, consts: [["search_input", ""], ["mat-dialog-title", ""], [1, "w-96", "max-w-full"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "cdkFocusInitial", "", 3, "input"], [1, "flex", "flex-col", "gap-1"], [1, "hover:bg-base-200", "flex", "items-center", "gap-2", "rounded", "p-3", "text-left", 3, "mat-dialog-close"], [1, "p-3", "opacity-60"], ["align", "end"], [1, "rounded", "px-4", "py-2", 3, "mat-dialog-close"], [1, "min-w-0"], [1, "block"], [1, "block", "text-xs", "opacity-60"]], template: function SupportGroupPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h2", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content", 2)(4, "mat-form-field", 3)(5, "mat-label");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 4, 0);
      \u0275\u0275listener("input", function SupportGroupPickerComponent_Template_input_input_8_listener() {
        \u0275\u0275restoreView(_r1);
        const search_input_r2 = \u0275\u0275reference(9);
        return \u0275\u0275resetView(ctx.search.set(search_input_r2.value));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275conditionalCreate(11, SupportGroupPickerComponent_Conditional_11_Template, 5, 6, "button", 6);
      \u0275\u0275repeaterCreate(12, SupportGroupPickerComponent_For_13_Template, 7, 5, "button", 6, _forTrack02, false, SupportGroupPickerComponent_ForEmpty_14_Template, 3, 3, "p", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "mat-dialog-actions", 8)(16, "button", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "GROUPS.SWITCH_GROUP"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "GROUPS.SEARCH_GROUPS"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.show_all() && !ctx.search() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.groups());
      \u0275\u0275advance(4);
      \u0275\u0275property("mat-dialog-close", void 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "COMMON.CANCEL"), " ");
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    IconComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportGroupPickerComponent, [{
    type: Component,
    args: [{
      selector: "app-support-group-picker",
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe
      ],
      template: `
        <h2 mat-dialog-title>{{ 'GROUPS.SWITCH_GROUP' | translate }}</h2>
        <mat-dialog-content class="w-96 max-w-full">
            <mat-form-field appearance="outline" class="w-full">
                <mat-label>{{ 'GROUPS.SEARCH_GROUPS' | translate }}</mat-label>
                <input
                    matInput
                    #search_input
                    cdkFocusInitial
                    (input)="search.set(search_input.value)"
                />
            </mat-form-field>
            <div class="flex flex-col gap-1">
                @if (show_all() && !search()) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [mat-dialog-close]="''"
                        [attr.aria-current]="!selected_id() ? 'true' : null"
                    >
                        <icon>{{ !selected_id() ? 'check' : 'public' }}</icon>
                        {{ 'GROUPS.ALL_GROUPS' | translate }}
                    </button>
                }
                @for (item of groups(); track item.group.id) {
                    <button
                        class="hover:bg-base-200 flex items-center gap-2 rounded p-3 text-left"
                        [mat-dialog-close]="item.group.id"
                        [attr.aria-current]="
                            selected_id() === item.group.id ? 'true' : null
                        "
                    >
                        <icon>{{
                            selected_id() === item.group.id ? 'check' : 'groups'
                        }}</icon>
                        <span class="min-w-0">
                            <span class="block">{{ item.group.name }}</span>
                            @if (parentName(item.group.parent_id); as parent) {
                                <span class="block text-xs opacity-60">{{
                                    parent
                                }}</span>
                            }
                        </span>
                    </button>
                } @empty {
                    <p class="p-3 opacity-60">
                        {{ 'GROUPS.NO_MATCHING_GROUPS' | translate }}
                    </p>
                }
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button [mat-dialog-close]="undefined" class="rounded px-4 py-2">
                {{ 'COMMON.CANCEL' | translate }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupportGroupPickerComponent, { className: "SupportGroupPickerComponent", filePath: "src/app/ui/support-group-picker.component.ts", lineNumber: 79 });
})();

// src/app/ui/user-menu-tooltip.component.ts
var _c04 = () => ["/users", "current", "about"];
function UserMenuTooltipComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "icon", 3);
    \u0275\u0275text(2, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const lang_menu_r3 = \u0275\u0275reference(20);
    \u0275\u0275property("matMenuTriggerFor", lang_menu_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "COMMON.LANGUAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_lang.name, " ");
  }
}
function UserMenuTooltipComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UserMenuTooltipComponent_For_22_Template_button_click_0_listener() {
      const language_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage(language_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(language_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(language_r5.flag);
  }
}
var UserMenuTooltipComponent = class _UserMenuTooltipComponent {
  _settings = inject(SettingsService);
  _locale = inject(LocaleService);
  github_icon = signal(
    "",
    ...ngDevMode ? [{ debugName: "github_icon" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether dark mode is enabled */
  get dark_mode() {
    return this._settings.get("theme") === "dark";
  }
  set dark_mode(state) {
    const theme = state ? "dark" : "light";
    this._settings.setTheme(theme);
    this.github_icon.set(theme === "dark" ? "assets/img/GitHub_dark.svg" : "assets/img/GitHub_light.svg");
  }
  lang = "en";
  languages = signal(
    [],
    ...ngDevMode ? [{ debugName: "languages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_lang() {
    return this.languages().find((_) => _.id === this.lang) || {
      id: "en",
      name: "English"
    };
  }
  get github_link() {
    const title = `Issue on page`;
    const description = issueDescription(VERSION.hash, format(VERSION.time, "dd MMM yyyy, h:mm a"));
    return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&labels=bug`;
  }
  ngOnInit() {
    this.lang = this._locale.locale;
    this.languages.set([
      { id: "en", name: i18n("COMMON.LANG_ENGLISH"), flag: "\u{1F1EC}\u{1F1E7}" },
      { id: "jp", name: i18n("COMMON.LANG_JAPANESE"), flag: "\u{1F1EF}\u{1F1F5}" },
      { id: "fr", name: i18n("COMMON.LANG_FRENCH"), flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "es", name: i18n("COMMON.LANG_SPANISH"), flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "ar", name: i18n("COMMON.LANG_ARABIC"), flag: "" }
    ]);
    this.github_icon.set(this._settings.get("theme") === "dark" ? "assets/img/GitHub_dark.svg" : "assets/img/GitHub_light.svg");
  }
  setLanguage(lang) {
    this._locale.setLocale(lang);
    localStorage.setItem("BACKOFFICE.locale", lang);
    this.languages.set([
      { id: "en", name: i18n("COMMON.LANG_ENGLISH"), flag: "\u{1F1EC}\u{1F1E7}" },
      { id: "jp", name: i18n("COMMON.LANG_JAPANESE"), flag: "\u{1F1EF}\u{1F1F5}" },
      { id: "fr", name: i18n("COMMON.LANG_FRENCH"), flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "es", name: i18n("COMMON.LANG_SPANISH"), flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "ar", name: i18n("COMMON.LANG_ARABIC"), flag: "" }
    ]);
    setTimeout(() => location.reload(), 100);
  }
  logout() {
    ao();
  }
  showUploadHistory() {
    this._settings.post("show_upload_manager", true);
  }
  static \u0275fac = function UserMenuTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMenuTooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMenuTooltipComponent, selectors: [["user-menu-tooltip"]], decls: 35, vars: 27, consts: [["lang_menu", "matMenu"], [1, "divide-base-200", "border-base-300", "bg-base-100", "m-2", "divide-y", "rounded-sm", "border", "shadow-sm"], ["matRipple", "", "type", "button", "profile", "", 1, "space-x-2", 3, "routerLink"], [1, "text-2xl"], ["dark-mode", "", 1, "flex", "w-[16rem]", "items-center", "p-3"], [1, "w-1/2", "flex-1"], [3, "ngModelChange", "ngModel"], ["matRipple", "", "type", "button", "uploads", "", 1, "space-x-2", 3, "click"], ["matRipple", "", "type", "button", 3, "matMenuTriggerFor"], ["xPosition", "after", "yPosition", "above"], ["mat-menu-item", "", 1, "w-60"], ["matRipple", "", "type", "button", "target", "_blank", "rel", "noopener noreferrer", "report", "", 1, "gap-2", 3, "href"], ["alt", "Github Icon", 1, "m-1", "flex", "h-5", "max-w-5", "items-center", "justify-center", "overflow-hidden", "text-xs", 3, "src"], ["matRipple", "", "type", "button", "logout", "", 1, "space-x-2", 3, "click"], [1, "flex-1", "text-left"], [1, "bg-base-200", "max-w-24", "truncate", "rounded-sm", "px-2", "py-1", "text-sm"], ["mat-menu-item", "", 1, "w-60", 3, "click"], [1, "flex", "w-full", "items-center", "justify-between", "space-x-4"]], template: function UserMenuTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "icon", 3);
      \u0275\u0275text(3, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "icon", 3);
      \u0275\u0275text(8, "dark_mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-slide-toggle", 6);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function UserMenuTooltipComponent_Template_mat_slide_toggle_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dark_mode, $event) || (ctx.dark_mode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function UserMenuTooltipComponent_Template_button_click_13_listener() {
        return ctx.showUploadHistory();
      });
      \u0275\u0275elementStart(14, "icon", 3);
      \u0275\u0275text(15, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(18, UserMenuTooltipComponent_Conditional_18_Template, 8, 5, "button", 8);
      \u0275\u0275elementStart(19, "mat-menu", 9, 0);
      \u0275\u0275repeaterCreate(21, UserMenuTooltipComponent_For_22_Template, 6, 2, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 11);
      \u0275\u0275pipe(24, "safe");
      \u0275\u0275element(25, "img", 12);
      \u0275\u0275pipe(26, "safe");
      \u0275\u0275elementStart(27, "div");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 13);
      \u0275\u0275listener("click", function UserMenuTooltipComponent_Template_button_click_30_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(31, "icon", 3);
      \u0275\u0275text(32, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c04));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "COMMON.PROFILE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "COMMON.DARK_MODE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dark_mode);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "COMMON.UPLOAD_HISTORY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.languages().length > 1 ? 18 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.languages());
      \u0275\u0275advance(2);
      \u0275\u0275property("href", \u0275\u0275pipeBind2(24, 16, ctx.github_link, "url"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", \u0275\u0275pipeBind2(26, 19, ctx.github_icon(), "resource"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "COMMON.REPORT_ISSUE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 24, "COMMON.LOGOUT"), " ");
    }
  }, dependencies: [
    IconComponent,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatRippleModule,
    MatRipple,
    MatSlideToggleModule,
    MatSlideToggle,
    RouterModule,
    RouterLink,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    SafePipe
  ], styles: ["\n[type=button][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n  width: 16rem;\n}\n[type=button][_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\nicon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=user-menu-tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMenuTooltipComponent, [{
    type: Component,
    args: [{ selector: "user-menu-tooltip", template: `
        <div
            class="divide-base-200 border-base-300 bg-base-100 m-2 divide-y rounded-sm border shadow-sm"
        >
            <a
                matRipple
                type="button"
                profile
                [routerLink]="['/users', 'current', 'about']"
                class="space-x-2"
            >
                <icon class="text-2xl">person</icon>
                {{ 'COMMON.PROFILE' | translate }}
            </a>
            <div dark-mode class="flex w-[16rem] items-center p-3">
                <icon class="text-2xl">dark_mode</icon>
                <p class="w-1/2 flex-1">
                    {{ 'COMMON.DARK_MODE' | translate }}
                </p>
                <mat-slide-toggle [(ngModel)]="dark_mode" />
            </div>
            <button
                matRipple
                type="button"
                class="space-x-2"
                uploads
                (click)="showUploadHistory()"
            >
                <icon class="text-2xl">schedule</icon>
                {{ 'COMMON.UPLOAD_HISTORY' | translate }}
            </button>
            @if (languages().length > 1) {
                <button matRipple type="button" [matMenuTriggerFor]="lang_menu">
                    <icon class="text-2xl">language</icon>
                    <div class="flex-1 text-left">
                        {{ 'COMMON.LANGUAGE' | translate }}
                    </div>
                    <div
                        class="bg-base-200 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                    >
                        {{ active_lang.name }}
                    </div>
                </button>
            }
            <mat-menu #lang_menu="matMenu" xPosition="after" yPosition="above">
                @for (language of languages(); track language) {
                    <button
                        mat-menu-item
                        class="w-60"
                        (click)="setLanguage(language.id)"
                    >
                        <div
                            class="flex w-full items-center justify-between space-x-4"
                        >
                            <div>{{ language.name }}</div>
                            <div>{{ language.flag }}</div>
                        </div>
                    </button>
                }
            </mat-menu>
            <a
                matRipple
                type="button"
                target="_blank"
                rel="noopener noreferrer"
                report
                [href]="github_link | safe: 'url'"
                class="gap-2"
            >
                <img
                    alt="Github Icon"
                    [src]="github_icon() | safe: 'resource'"
                    class="m-1 flex h-5 max-w-5 items-center justify-center overflow-hidden text-xs"
                />
                <div>{{ 'COMMON.REPORT_ISSUE' | translate }}</div>
            </a>
            <button
                matRipple
                type="button"
                logout
                class="space-x-2"
                (click)="logout()"
            >
                <icon class="text-2xl">logout</icon>
                {{ 'COMMON.LOGOUT' | translate }}
            </button>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatRippleModule,
      MatSlideToggleModule,
      RouterModule,
      SafePipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;812b4316b0e16bf7;/home/runner/work/backoffice/backoffice/src/app/ui/user-menu-tooltip.component.ts */\n[type=button] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n  width: 16rem;\n}\n[type=button]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\nicon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=user-menu-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMenuTooltipComponent, { className: "UserMenuTooltipComponent", filePath: "src/app/ui/user-menu-tooltip.component.ts", lineNumber: 136 });
})();

// src/app/ui/sidebar-menu.component.ts
var _c05 = () => ["/"];
var _c13 = (a0) => [a0];
function SidebarMenuComponent_For_12_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 19)(4, "icon", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", link_r1.external(), \u0275\u0275sanitizeUrl)("matTooltip", ctx_r1.compact() ? \u0275\u0275pipeBind1(1, 13, link_r1.name) : "");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 15, link_r1.name));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, link_r1.name), " ");
  }
}
function SidebarMenuComponent_For_12_Conditional_0_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sm:left-1/2", ctx_r1.compact())("sm:right-3", !ctx_r1.compact())("sm:right-auto", ctx_r1.compact())("sm:-translate-x-1/2", ctx_r1.compact());
  }
}
function SidebarMenuComponent_For_12_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 19)(4, "icon", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SidebarMenuComponent_For_12_Conditional_0_Conditional_1_Conditional_9_Template, 1, 8, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c13, link_r1.route))("matTooltip", ctx_r1.compact() ? \u0275\u0275pipeBind1(1, 16, link_r1.name) : "");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 18, link_r1.name));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact())("sm:opacity-25", ctx_r1.compact() && ctx_r1.isRouteLoading(link_r1.route));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, link_r1.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRouteLoading(link_r1.route) ? 9 : -1);
  }
}
function SidebarMenuComponent_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarMenuComponent_For_12_Conditional_0_Conditional_0_Template, 9, 19, "a", 17)(1, SidebarMenuComponent_For_12_Conditional_0_Conditional_1_Template, 10, 24, "a", 18);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(link_r1.external ? 0 : 1);
  }
}
function SidebarMenuComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarMenuComponent_For_12_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275conditional(!link_r1.show_on || link_r1.show_on() ? 0 : -1);
  }
}
function SidebarMenuComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 8)(1, "div", 19)(2, "icon", 20);
    \u0275\u0275text(3, "apps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Applications");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r1.application_picker)("matTooltip", ctx_r1.compact() ? "Applications" : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
  }
}
function SidebarMenuComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SidebarMenuComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchGroup());
    });
    \u0275\u0275elementStart(3, "icon", 25);
    \u0275\u0275text(4, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "unfold_more");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("justify-center", ctx_r1.compact());
    \u0275\u0275property("matTooltip", ctx_r1.selected_group()?.group.name || \u0275\u0275pipeBind1(1, 9, "GROUPS.ALL_GROUPS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 11, "GROUPS.SWITCH_GROUP"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selected_group()?.group.name || \u0275\u0275pipeBind1(7, 13, "GROUPS.ALL_GROUPS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
  }
}
var SidebarMenuComponent = class _SidebarMenuComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  _users = inject(BackofficeUsersService);
  _router = inject(Router);
  _dialog = inject(MatDialog);
  _items = inject(ActiveItemService);
  support_groups = support_groups;
  selected_group = selected_support_group;
  open = model(
    true,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  compact = signal(
    false,
    ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading_route = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading_route" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show_application_picker = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_application_picker" }] : (
      /* istanbul ignore next */
      []
    )
  );
  application_picker = ApplicationPickerTooltipComponent;
  user_controls = UserMenuTooltipComponent;
  links = [
    {
      name: "COMMON.SYSTEMS",
      route: "/systems",
      icon: "meeting_room",
      show_on: () => canAccessSection("systems")
    },
    {
      name: "COMMON.MODULES",
      route: "/modules",
      icon: "tablet",
      show_on: () => canAccessSection("modules")
    },
    {
      name: "COMMON.ZONES",
      route: "/zones",
      icon: "layers",
      show_on: () => canAccessSection("zones")
    },
    {
      name: "COMMON.DRIVERS",
      route: "/drivers",
      show_on: () => canAccessSection("drivers"),
      icon: "construction"
    },
    {
      name: "COMMON.REPOS",
      route: "/repositories",
      show_on: () => this.is_admin,
      icon: "inventory_2"
    },
    {
      name: "COMMON.TRIGGERS",
      route: "/triggers",
      show_on: () => canAccessSection("triggers"),
      icon: "timer"
    },
    {
      name: "COMMON.ALERTS",
      icon: "notifications_active",
      show_on: () => !!this.alerts_url && canAccessSection("alerts"),
      external: () => this.alerts_url
    },
    {
      name: "COMMON.METRICS",
      icon: "monitoring",
      show_on: () => !!this.metrics_url && canAccessSection("metrics"),
      external: () => this.metrics_url
    },
    {
      name: "COMMON.USERS",
      route: "/users",
      icon: "group",
      show_on: () => canAccessSection("users")
    },
    {
      name: "COMMON.GROUPS",
      route: "/groups",
      icon: "groups",
      show_on: () => this.is_admin
    },
    {
      name: "COMMON.DOMAINS",
      route: "/domains",
      icon: "domain",
      show_on: () => this.is_admin
    },
    {
      name: "COMMON.MANAGE",
      route: "/admin",
      icon: "settings",
      show_on: () => this.is_admin
    }
  ];
  /** Application logo */
  get logo() {
    return this._settings.get("app.logo_light");
  }
  /** List of available menu items for the application */
  get user() {
    return this._users.current();
  }
  get is_admin() {
    return this._users.current()?.sys_admin;
  }
  get alerts_url() {
    return Mt()?.config?.backoffice?.alerts_url;
  }
  get metrics_url() {
    return Mt()?.config?.backoffice?.metrics_url;
  }
  switchGroup() {
    this._dialog.open(SupportGroupPickerComponent, {
      maxWidth: "calc(100vw - 2rem)"
    }).afterClosed().subscribe((id) => {
      if (id !== void 0)
        this._items.switchGroup(id);
    });
  }
  toggleCompactMode() {
    this.compact.update((s) => !s);
    localStorage.setItem("BACKOFFICE.SIDEBAR_COMPACT", `${this.compact()}`);
  }
  isRouteLoading(route) {
    return this.loading_route() === route;
  }
  async ngOnInit() {
    this.subscription("route_load", this._router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading_route.set(`/${event.route.path || ""}`);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loading_route.set("");
      }
      if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading_route.set("");
      }
    }));
    this.compact.set(localStorage.getItem("BACKOFFICE.SIDEBAR_COMPACT") === "true");
    const active_authority = Mt();
    if (!active_authority?.id)
      return;
    const response = await qo({
      authority_id: active_authority.id
    }).catch(() => null);
    this.show_application_picker.set(!!(response?.data || []).find((app) => isSupportedRedirectUri(app?.redirect_uri)));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SidebarMenuComponent_BaseFactory;
    return function SidebarMenuComponent_Factory(__ngFactoryType__) {
      return (\u0275SidebarMenuComponent_BaseFactory || (\u0275SidebarMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SidebarMenuComponent)))(__ngFactoryType__ || _SidebarMenuComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarMenuComponent, selectors: [["sidebar-menu"]], inputs: { open: [1, "open"] }, outputs: { open: "openChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 40, consts: [[3, "click"], ["sidebar-menu", "", 1, "bg-base-200", "pointer-events-none", "absolute", "inset-0", "z-40", "hidden", "h-full", "flex-col", "justify-between", "sm:pointer-events-auto", "sm:relative", "sm:inset-auto", "sm:z-10", "sm:flex"], [1, "flex", "h-1/2", "flex-1", "flex-col", "items-center", "space-y-2"], [1, "font-heading", "mt-4", "ml-16", "text-4xl", "sm:mb-2", "sm:ml-0", 3, "routerLink"], [1, "font-heading", "text-primary"], ["src", "assets/img/placeos-icon.svg", "alt", "PlaceOS logo", 1, "hidden", "h-12", "w-12"], [1, "w-full", "flex-1", "space-y-2", "overflow-auto", "pb-2"], ["icon", "", "matRipple", "", 1, "absolute", "top-1", "left-1", "sm:hidden", 3, "click"], ["btn", "", "link", "", "matRipple", "", "customTooltip", "", "matTooltipPosition", "right", "aria-label", "Applications", "yPosition", "bottom", 1, "clear", "hover:bg-base-100", "mx-auto", "mb-2", "w-[calc(100%-1rem)]", "text-left", 3, "content", "matTooltip"], ["matRipple", "", "type", "button", "matTooltipPosition", "right", 1, "hover:bg-base-100", "flex", "min-h-14", "items-center", "gap-2", "border-t", "border-base-300", "p-3", "text-left", 3, "justify-center", "matTooltip"], [3, "compact"], ["matRipple", "", "customTooltip", "", "user", "", "yPosition", "bottom", "xPosition", "start", 1, "border-base-300", "flex", "min-h-16", "items-center", "space-x-2", "border-t", "p-2", "text-left", 3, "content"], ["matTooltipPosition", "right", 3, "user", "matTooltip"], [1, "flex", "w-1/2", "flex-1", "flex-col", "leading-tight"], [1, "w-full", "truncate"], [1, "w-full", "truncate", "text-xs", "opacity-30"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "absolute", "right-0", "bottom-12", "z-999", "hidden", "h-6", "w-6", "min-w-6", "translate-x-1/2", "rounded-full", "border", "shadow-sm", "sm:flex", 3, "click"], ["btn", "", "link", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", "matTooltipPosition", "right", 1, "clear", "hover:bg-base-100", "mx-auto", "w-[calc(100%-1rem)]", "text-left", 3, "href", "matTooltip"], ["btn", "", "link", "", "matRipple", "", "routerLinkActive", "bg-secondary! text-secondary-content", "ariaCurrentWhenActive", "page", "matTooltipPosition", "right", 1, "clear", "hover:bg-base-100", "relative", "mx-auto", "w-[calc(100%-1rem)]", "text-left", 3, "routerLink", "matTooltip"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-xl"], [1, "text-xl", "transition-opacity"], ["role", "status", "aria-label", "Loading page", 1, "ml-auto", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current", "sm:absolute", "sm:top-1/2", "sm:ml-0", "sm:-translate-y-1/2", 3, "sm:left-1/2", "sm:right-3", "sm:right-auto", "sm:-translate-x-1/2"], ["role", "status", "aria-label", "Loading page", 1, "ml-auto", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current", "sm:absolute", "sm:top-1/2", "sm:ml-0", "sm:-translate-y-1/2"], ["matRipple", "", "type", "button", "matTooltipPosition", "right", 1, "hover:bg-base-100", "flex", "min-h-14", "items-center", "gap-2", "border-t", "border-base-300", "p-3", "text-left", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "min-w-0", "flex-1", "truncate"]], template: function SidebarMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "skip-to-content", 0);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_skip_to_content_click_0_listener() {
        return ctx.open.set(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "a", 3)(5, "div");
      \u0275\u0275text(6, " Place");
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "OS");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275repeaterCreate(11, SidebarMenuComponent_For_12_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_button_click_13_listener() {
        return ctx.open.set(false);
      });
      \u0275\u0275elementStart(15, "icon");
      \u0275\u0275text(16, "close");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(17, SidebarMenuComponent_Conditional_17_Template, 6, 10, "button", 8);
      \u0275\u0275conditionalCreate(18, SidebarMenuComponent_Conditional_18_Template, 10, 15, "button", 9);
      \u0275\u0275element(19, "debug-info", 10);
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275element(21, "a-user-avatar", 12);
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "button", 16);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_button_click_28_listener() {
        return ctx.toggleCompactMode();
      });
      \u0275\u0275elementStart(30, "icon");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("compact", ctx.compact())("sm:w-52", !ctx.compact())("!flex", ctx.open())("pointer-events-auto!", ctx.open());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 31, "COMMON.MAIN_MENU"));
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.compact() ? "auto" : "calc(100%-2rem)");
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(39, _c05));
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:hidden", ctx.compact());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("sm:block", ctx.compact());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.links);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 33, "COMMON.CLOSE"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.show_application_picker() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.support_groups().length ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("compact", ctx.compact());
      \u0275\u0275advance();
      \u0275\u0275property("content", ctx.user_controls);
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:pl-2", ctx.compact());
      \u0275\u0275property("user", ctx.user)("matTooltip", ctx.compact() ? ctx.user?.name : "");
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:hidden", ctx.compact());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user?.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 35, ctx.user?.sys_admin ? "COMMON.USER_ADMIN" : ctx.user?.support ? "COMMON.USER_SUPPORT" : "COMMON.USER_BASIC"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(29, 37, ctx.compact() ? "COMMON.MENU_EXPAND" : "COMMON.MENU_COLLAPSE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.compact() ? "chevron_right" : "chevron_left", " ");
    }
  }, dependencies: [
    IconComponent,
    UserAvatarComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    CustomTooltipComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DebugInfoComponent,
    SkipToContentComponent,
    TranslatePipe
  ], styles: ["\n[sidebar-menu][_ngcontent-%COMP%] {\n  transition: width 200ms;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--%NS%secondary);\n  color: var(--%NS%secondary-content);\n}\n@media screen and (min-width: 512px) {\n  .compact[_ngcontent-%COMP%] {\n    width: 4.5rem;\n  }\n}\n/*# sourceMappingURL=sidebar-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarMenuComponent, [{
    type: Component,
    args: [{ selector: "sidebar-menu", template: `
        <!-- Close the mobile menu so the content it skips to is visible -->
        <skip-to-content (click)="open.set(false)" />
        <div
            sidebar-menu
            class="bg-base-200 pointer-events-none absolute inset-0 z-40 hidden h-full flex-col justify-between sm:pointer-events-auto sm:relative sm:inset-auto sm:z-10 sm:flex"
            [class.compact]="compact()"
            [class.sm:w-52]="!compact()"
            [class.!flex]="open()"
            [class.pointer-events-auto!]="open()"
        >
            <nav
                class="flex h-1/2 flex-1 flex-col items-center space-y-2"
                [attr.aria-label]="'COMMON.MAIN_MENU' | translate"
            >
                <a
                    [routerLink]="['/']"
                    class="font-heading mt-4 ml-16 text-4xl sm:mb-2 sm:ml-0"
                    [style.width]="compact() ? 'auto' : 'calc(100%-2rem)'"
                >
                    <div [class.sm:hidden]="compact()">
                        Place<span class="font-heading text-primary">OS</span>
                    </div>
                    <img
                        src="assets/img/placeos-icon.svg"
                        class="hidden h-12 w-12"
                        [class.sm:block]="compact()"
                        alt="PlaceOS logo"
                    />
                </a>
                <div class="w-full flex-1 space-y-2 overflow-auto pb-2">
                    @for (link of links; track $index) {
                        @if (!link.show_on || link.show_on()) {
                            @if (link.external) {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 mx-auto w-[calc(100%-1rem)] text-left"
                                    [href]="link.external()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                    [attr.aria-label]="link.name | translate"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                    </div>
                                </a>
                            } @else {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 relative mx-auto w-[calc(100%-1rem)] text-left"
                                    [routerLink]="[link.route]"
                                    routerLinkActive="bg-secondary! text-secondary-content"
                                    ariaCurrentWhenActive="page"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                    [attr.aria-label]="link.name | translate"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl transition-opacity"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            [class.sm:opacity-25]="
                                                compact() &&
                                                isRouteLoading(link.route)
                                            "
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                        @if (isRouteLoading(link.route)) {
                                            <span
                                                role="status"
                                                aria-label="Loading page"
                                                class="ml-auto h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current sm:absolute sm:top-1/2 sm:ml-0 sm:-translate-y-1/2"
                                                [class.sm:left-1/2]="compact()"
                                                [class.sm:right-3]="!compact()"
                                                [class.sm:right-auto]="compact()"
                                                [class.sm:-translate-x-1/2]="
                                                    compact()
                                                "
                                            ></span>
                                        }
                                    </div>
                                </a>
                            }
                        }
                    }
                    <button
                        class="absolute top-1 left-1 sm:hidden"
                        icon
                        matRipple
                        (click)="open.set(false)"
                     [attr.aria-label]="'COMMON.CLOSE' | translate">
                        <icon>close</icon>
                    </button>
                </div>
            </nav>
            @if (show_application_picker()) {
                <button
                    btn
                    link
                    matRipple
                    customTooltip
                    class="clear hover:bg-base-100 mx-auto mb-2 w-[calc(100%-1rem)] text-left"
                    [content]="application_picker"
                    [matTooltip]="compact() ? 'Applications' : ''"
                    matTooltipPosition="right"
                    aria-label="Applications"
                    yPosition="bottom"
                >
                    <div
                        class="flex w-full items-center space-x-2"
                        [class.sm:justify-center]="compact()"
                    >
                        <icon
                            class="text-xl"
                            [class.sm:text-2xl]="compact()"
                            [class.sm:mx-auto]="compact()"
                            >apps</icon
                        >
                        <p [class.sm:hidden]="compact()">Applications</p>
                    </div>
                </button>
            }
            @if (support_groups().length) {
                <button matRipple type="button"
                    class="hover:bg-base-100 flex min-h-14 items-center gap-2 border-t border-base-300 p-3 text-left"
                    [class.justify-center]="compact()"
                    [attr.aria-label]="'GROUPS.SWITCH_GROUP' | translate"
                    [matTooltip]="selected_group()?.group.name || ('GROUPS.ALL_GROUPS' | translate)"
                    matTooltipPosition="right"
                    (click)="switchGroup()">
                    <icon class="text-2xl">groups</icon>
                    <span class="min-w-0 flex-1 truncate" [class.sm:hidden]="compact()">
                        {{ selected_group()?.group.name || ('GROUPS.ALL_GROUPS' | translate) }}
                    </span>
                    <icon [class.sm:hidden]="compact()">unfold_more</icon>
                </button>
            }
            <debug-info [compact]="compact()" />
            <button
                matRipple
                class="border-base-300 flex min-h-16 items-center space-x-2 border-t p-2 text-left"
                customTooltip
                user
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <a-user-avatar
                    [user]="user"
                    [class.sm:pl-2]="compact()"
                    [matTooltip]="compact() ? user?.name : ''"
                    matTooltipPosition="right"
                 />
                <div
                    class="flex w-1/2 flex-1 flex-col leading-tight"
                    [class.sm:hidden]="compact()"
                >
                    <div class="w-full truncate">{{ user?.name }}</div>
                    <div class="w-full truncate text-xs opacity-30">
                        {{
                            (user?.sys_admin
                                ? 'COMMON.USER_ADMIN'
                                : user?.support
                                  ? 'COMMON.USER_SUPPORT'
                                  : 'COMMON.USER_BASIC'
                            ) | translate
                        }}
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                class="border-base-200 bg-base-100 hover:bg-base-200 absolute right-0 bottom-12 z-999 hidden h-6 w-6 min-w-6 translate-x-1/2 rounded-full border shadow-sm sm:flex"
                [attr.aria-label]="
                    (compact() ? 'COMMON.MENU_EXPAND' : 'COMMON.MENU_COLLAPSE')
                        | translate
                "
                (click)="toggleCompactMode()"
            >
                <icon>
                    {{ compact() ? 'chevron_right' : 'chevron_left' }}
                </icon>
            </button>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      MatRippleModule,
      MatTooltipModule,
      CustomTooltipComponent,
      RouterModule,
      DebugInfoComponent,
      SkipToContentComponent
    ], styles: ["/* angular:styles/component:css;bc1a586b55bc16a0;/home/runner/work/backoffice/backoffice/src/app/ui/sidebar-menu.component.ts */\n[sidebar-menu] {\n  transition: width 200ms;\n}\n.active {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\n@media screen and (min-width: 512px) {\n  .compact {\n    width: 4.5rem;\n  }\n}\n/*# sourceMappingURL=sidebar-menu.component.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarMenuComponent, { className: "SidebarMenuComponent", filePath: "src/app/ui/sidebar-menu.component.ts", lineNumber: 285 });
})();

export {
  DebugOutputComponent,
  SidebarMenuComponent
};
//# debugId=2ad83f70-7615-54c3-931a-6edb325dc8d8
//# sourceMappingURL=chunk-GYF6TR7T.js.map
