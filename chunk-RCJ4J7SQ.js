import {
  SafePipe
} from "./chunk-5PLQTUPI.js";
import {
  MatTooltip
} from "./chunk-3LASJ6UJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  Input,
  afterEveryRender,
  afterNextRender,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DTROA6L2.js";

// src/app/ui/icon-subset.ts
var ICON_SUBSET = /* @__PURE__ */ new Set([
  "account_tree",
  "add",
  "api",
  "app_registration",
  "apps",
  "arrow_back",
  "arrow_downward",
  "arrow_drop_down",
  "arrow_upward",
  "auto_awesome",
  "block",
  "bolt",
  "border_bottom",
  "border_right",
  "brightness_alert",
  "bug_report",
  "build",
  "business_messages",
  "call_split",
  "cancel",
  "cancel_presentation",
  "check",
  "chevron_left",
  "chevron_right",
  "clear_all",
  "close",
  "cloud_download",
  "cloud_off",
  "cloud_upload",
  "code_blocks",
  "colors",
  "comments_disabled",
  "construction",
  "content_copy",
  "dark_mode",
  "database",
  "delete",
  "delete_forever",
  "delete_sweep",
  "description",
  "display_settings",
  "dns",
  "docs",
  "domain",
  "done",
  "download",
  "edit",
  "edit_off",
  "error",
  "event",
  "expand_more",
  "extension",
  "filter_list",
  "group",
  "groups",
  "hearing_disabled",
  "history",
  "hub",
  "info",
  "input",
  "integration_instructions",
  "inventory_2",
  "key",
  "keyboard_arrow_down",
  "label",
  "language",
  "laps",
  "layers",
  "link",
  "list",
  "lock",
  "lock_open",
  "login",
  "logout",
  "meeting_room",
  "menu",
  "monitoring",
  "more_horiz",
  "more_time",
  "more_vert",
  "network_node",
  "notes",
  "notifications_active",
  "opacity",
  "open_in_browser",
  "outlet",
  "pending",
  "person",
  "photo_album",
  "play_arrow",
  "play_circle",
  "playlist_add",
  "playlist_remove",
  "power",
  "public",
  "publish",
  "refresh",
  "remove",
  "reorder",
  "restore_from_trash",
  "route",
  "router",
  "save",
  "schedule",
  "sdk",
  "search",
  "send",
  "sensors",
  "settings",
  "settings_alert",
  "shadow",
  "sort",
  "space",
  "start",
  "stop",
  "switch",
  "sync_problem",
  "table",
  "tablet",
  "timer",
  "today",
  "translate",
  "travel_explore",
  "unfold_more",
  "update",
  "upload",
  "visibility",
  "warning",
  "web",
  "webhook"
]);

// src/app/ui/icon.component.ts
var _c0 = ["*"];
function IconComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.icon()?.class || ctx_r0.className());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.icon()?.content, " ");
  }
}
function IconComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 2);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.icon().src, "resource"));
  }
}
function textWithoutIcons(element) {
  const copy = element.cloneNode(true);
  for (const icon of copy.querySelectorAll("icon, app-icon"))
    icon.remove();
  return copy.textContent.trim();
}
var IconComponent = class _IconComponent {
  className = input(
    "material-symbols-rounded",
    ...ngDevMode ? [{ debugName: "className" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Icon details */
  icon = input(
    void 0,
    ...ngDevMode ? [{ debugName: "icon" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _element = inject(ElementRef);
  _tooltip = inject(MatTooltip, { optional: true });
  _injector = inject(Injector);
  constructor() {
    afterNextRender(() => this._labelControl());
    afterEveryRender(() => this._useFullFont());
  }
  /**
   * The default icon font is a subset. Projected names are only known
   * after render, so check the rendered name and use the full font for
   * names that are not in the subset.
   */
  _useFullFont() {
    const glyph = this._element.nativeElement.querySelector("i");
    if (!glyph?.classList.contains("material-symbols-rounded"))
      return;
    const full = !ICON_SUBSET.has(glyph.textContent.trim());
    if (glyph.hasAttribute("data-full") !== full) {
      glyph.toggleAttribute("data-full", full);
    }
  }
  /**
   * Icon fonts render names like "more_vert", which screen readers read
   * aloud. Inside a button or link, hide the icon when the control has its
   * own text or label. For icon-only controls with a tooltip, use the
   * tooltip as the control's label. Outside a control, an icon with its
   * own tooltip (e.g. an info icon) becomes an image named by the tooltip.
   */
  _labelControl() {
    const host = this._element.nativeElement;
    const control = host.parentElement?.closest("button, a");
    if (!control) {
      if (host.classList.contains("mat-mdc-tooltip-trigger")) {
        this._labelFromTooltip(host);
      }
      return;
    }
    const has_text = !!textWithoutIcons(control);
    if (control.hasAttribute("aria-label") || has_text) {
      host.setAttribute("aria-hidden", "true");
      return;
    }
    if (control.classList.contains("mat-mdc-tooltip-trigger")) {
      this._labelFromTooltip(control);
    }
  }
  /** Keep the label of the target the same as the tooltip text */
  _labelFromTooltip(target) {
    const tooltip = this._tooltip;
    if (!tooltip)
      return;
    const host = this._element.nativeElement;
    afterEveryRender(() => {
      const label = `${tooltip.message || ""}`.trim();
      if (target.getAttribute("aria-label") === (label || null)) {
        return;
      }
      if (label) {
        target.setAttribute("aria-label", label);
        if (target === host)
          host.setAttribute("role", "img");
        else
          host.setAttribute("aria-hidden", "true");
      } else {
        target.removeAttribute("aria-label");
        host.removeAttribute(target === host ? "role" : "aria-hidden");
      }
    }, { injector: this._injector });
  }
  static \u0275fac = function IconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["app-icon"], ["icon"]], inputs: { className: [1, "className"], icon: [1, "icon"] }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "flex", "h-[1.25em]", "w-[1.25em]", "items-center", "justify-center"], [3, "class"], ["alt", "icon", 1, "h-[1em]", "w-[1em]", 3, "src"]], template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, IconComponent_Conditional_1_Template, 3, 3, "i", 1);
      \u0275\u0275conditionalCreate(2, IconComponent_Conditional_2_Template, 2, 4, "img", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.icon() || ctx.icon().type !== "img" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.icon().type === "img" ? 2 : -1);
    }
  }, dependencies: [SafePipe], styles: ["\ni[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{ selector: "app-icon,icon", template: `
        <div class="flex h-[1.25em] w-[1.25em] items-center justify-center">
            @if (!icon() || icon().type !== 'img') {
                <i [class]="icon()?.class || className()">
                    {{ icon()?.content }}
                    <ng-content />
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    [src]="icon().src | safe: 'resource'"
                    alt="icon"
                />
            }
        </div>
    `, imports: [SafePipe], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;a5d6b3049847f44b;/home/runner/work/backoffice/backoffice/src/app/ui/icon.component.ts */\ni {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */\n"] }]
  }], () => [], { className: [{ type: Input, args: [{ isSignal: true, alias: "className", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "src/app/ui/icon.component.ts", lineNumber: 52 });
})();

export {
  IconComponent
};
//# debugId=6647d06c-af28-5046-ab65-7d9c6219a948
//# sourceMappingURL=chunk-RCJ4J7SQ.js.map
