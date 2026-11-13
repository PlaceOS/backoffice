import {
  toSignal
} from "./chunk-FF4ADQI6.js";
import {
  HotkeysService
} from "./chunk-AEEAYNFO.js";
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
} from "./chunk-LL56AHAM.js";
import {
  AsyncHandler
} from "./chunk-UONBBRS5.js";
import "./chunk-762ECDWF.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  Injector,
  Input,
  Output,
  ViewChild,
  afterNextRender,
  effect,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/item-tablist.component.ts
var _c0 = ["nav"];
var _c1 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
function ItemTablistComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ItemTablistComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTabs(-1));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.at_start());
  }
}
function ItemTablistComponent_For_5_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function ItemTablistComponent_For_5_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r3.count || "0");
  }
}
function ItemTablistComponent_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, ItemTablistComponent_For_5_Conditional_7_Conditional_1_Template, 1, 0, "span", 11)(2, ItemTablistComponent_For_5_Conditional_7_Conditional_2_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r3.loading || ctx_r1.isRouteLoading(link_r3.id) ? 1 : 2);
  }
}
function ItemTablistComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5, 1);
    \u0275\u0275element(2, "span", 7)(3, "icon", 8);
    \u0275\u0275text(4, "\xA0 ");
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ItemTablistComponent_For_5_Conditional_7_Template, 3, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const rla_r4 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/" + ctx_r1.base() + "/" + ctx_r1.item_id() + "/" + link_r3.id)("queryParams", link_r3.query || \u0275\u0275pureFunction0(6, _c1));
    \u0275\u0275attribute("aria-current", rla_r4.isActive ? "page" : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", link_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", link_r3.name, "\xA0");
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r3.count || link_r3.count === 0 ? 7 : -1);
  }
}
function ItemTablistComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ItemTablistComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollTabs(1));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.at_end());
  }
}
var ItemTablistComponent = class _ItemTablistComponent extends AsyncHandler {
  _router = inject(Router);
  _hotkey = inject(HotkeysService);
  _injector = inject(Injector);
  _route_change = toSignal(this._router.events, {
    initialValue: null
  });
  base = input(
    "systems",
    ...ngDevMode ? [{ debugName: "base" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item_id = model(
    "-",
    ...ngDevMode ? [{ debugName: "item_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tabs = input(
    [],
    ...ngDevMode ? [{ debugName: "tabs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scrolled = input(
    false,
    ...ngDevMode ? [{ debugName: "scrolled" }] : (
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
  /** Whether the tabs are wider than the bar, so the arrows show */
  overflowing = signal(
    false,
    ...ngDevMode ? [{ debugName: "overflowing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  at_start = signal(
    true,
    ...ngDevMode ? [{ debugName: "at_start" }] : (
      /* istanbul ignore next */
      []
    )
  );
  at_end = signal(
    false,
    ...ngDevMode ? [{ debugName: "at_end" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _nav = viewChild.required(
    "nav",
    ...ngDevMode ? [{ debugName: "_nav" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _observer;
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this._updateID();
      afterNextRender(() => this._reveal(this._nav().nativeElement.querySelector("a.active")), { injector: this._injector });
    });
    afterNextRender(() => {
      const observer = new ResizeObserver(() => this.updateScroll());
      observer.observe(this._nav().nativeElement);
      this._observer = observer;
    });
  }
  /** Scroll the tabs by most of the visible width */
  scrollTabs(direction) {
    const nav = this._nav().nativeElement;
    nav.scrollBy({
      left: direction * nav.clientWidth * 0.8,
      behavior: "smooth"
    });
  }
  /** Scroll a focused tab fully into view, as focus may leave it cut off */
  showFocused(event) {
    this._reveal(event.target);
  }
  updateScroll() {
    const nav = this._nav().nativeElement;
    const max = nav.scrollWidth - nav.clientWidth;
    const overflowing = max > 1;
    if (overflowing && !this.overflowing()) {
      afterNextRender(() => this._reveal(nav.querySelector("a:focus") || nav.querySelector("a.active")), { injector: this._injector });
    }
    this.overflowing.set(overflowing);
    this.at_start.set(nav.scrollLeft <= 1);
    this.at_end.set(nav.scrollLeft >= max - 1);
  }
  /** Scroll the bar so the tab shows in full. Only the bar scrolls, not the page */
  _reveal(tab) {
    if (!tab)
      return;
    const nav = this._nav().nativeElement;
    const bar = nav.getBoundingClientRect();
    const box = tab.getBoundingClientRect();
    if (box.left < bar.left)
      nav.scrollLeft -= bar.left - box.left;
    else if (box.right > bar.right)
      nav.scrollLeft += box.right - bar.right;
  }
  ngOnDestroy() {
    this._observer?.disconnect();
    super.ngOnDestroy();
  }
  ngOnInit() {
    this.subscription("route_load", this._router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading_route.set(event.route.path || "");
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loading_route.set("");
      }
      if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading_route.set("");
      }
    }));
    this.subscription("right", this._hotkey.listen(["ArrowRight"], () => this._changeTab(1)));
    this.subscription("left", this._hotkey.listen(["ArrowLeft"], () => this._changeTab(-1)));
  }
  isRouteLoading(tab_id) {
    return this.loading_route().split("/")[0] === tab_id.split("/")[0];
  }
  _changeTab(direction) {
    this.timeout("change_tab", () => {
      const index = this.tabs().findIndex((tab) => this._router.url?.indexOf(tab.id) >= 0);
      if (index < 0 || !this.tabs()[index + direction])
        return;
      this._router.navigate([
        `/${this.base()}`,
        this.item_id(),
        this.tabs()[index + direction].id
      ]);
    }, 100);
  }
  _updateID() {
    const parts = this._router.url?.replace(/^\//, "").split("/") || [
      "1",
      ""
    ];
    this.item_id.set(parts[1]);
  }
  static \u0275fac = function ItemTablistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemTablistComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemTablistComponent, selectors: [["item-tablist"]], viewQuery: function ItemTablistComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._nav, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { base: [1, "base"], item_id: [1, "item_id"], tabs: [1, "tabs"], scrolled: [1, "scrolled"] }, outputs: { item_id: "item_idChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 4, consts: [["nav", ""], ["rla", "routerLinkActive"], [1, "border-base-300", "flex", "h-12", "w-full", "border-b"], ["type", "button", "tabindex", "-1", "aria-hidden", "true", 1, "scroll-button", 3, "disabled"], [3, "scroll", "focusin"], ["routerLinkActive", "active", 3, "routerLink", "queryParams"], ["type", "button", "tabindex", "-1", "aria-hidden", "true", 1, "scroll-button", 3, "click", "disabled"], ["indicator", ""], [1, "text-xl", 3, "icon"], [1, "name"], [1, "mono", "bg-base-200", "flex", "h-5", "min-w-5", "items-center", "justify-center", "rounded-full", "px-1.5", "text-[0.625rem]"], ["role", "status", "aria-label", "Loading tab", 1, "h-3", "w-3", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current"], [1, "animate-fade-in"]], template: function ItemTablistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275conditionalCreate(1, ItemTablistComponent_Conditional_1_Template, 3, 1, "button", 3);
      \u0275\u0275elementStart(2, "nav", 4, 0);
      \u0275\u0275listener("scroll", function ItemTablistComponent_Template_nav_scroll_2_listener() {
        return ctx.updateScroll();
      })("focusin", function ItemTablistComponent_Template_nav_focusin_2_listener($event) {
        return ctx.showFocused($event);
      });
      \u0275\u0275repeaterCreate(4, ItemTablistComponent_For_5_Template, 8, 7, "a", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ItemTablistComponent_Conditional_6_Template, 3, 1, "button", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("shadow", ctx.scrolled());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.overflowing() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.tabs());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.overflowing() ? 6 : -1);
    }
  }, dependencies: [IconComponent, RouterModule, RouterLink, RouterLinkActive], styles: ["\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-width: none;\n}\n.scroll-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.25rem;\n  font-size: 1.5rem;\n}\n.scroll-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n}\na[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.09em;\n  white-space: nowrap;\n  color: var(--%NS%base-content);\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: color-mix(in srgb, currentColor 6%, transparent);\n}\na.active[_ngcontent-%COMP%] {\n  color: var(--%NS%secondary);\n}\na.active[_ngcontent-%COMP%]   [indicator][_ngcontent-%COMP%] {\n  position: absolute;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  background-color: var(--%NS%secondary);\n  view-transition-name: tab-indicator;\n}\n/*# sourceMappingURL=item-tablist.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTablistComponent, [{
    type: Component,
    args: [{ selector: "item-tablist", template: `
        <div
            class="border-base-300 flex h-12 w-full border-b"
            [class.shadow]="scrolled()"
        >
            <!-- Arrows only scroll the tabs; keyboard focus scrolls them too -->
            @if (overflowing()) {
                <button
                    type="button"
                    class="scroll-button"
                    tabindex="-1"
                    aria-hidden="true"
                    [disabled]="at_start()"
                    (click)="scrollTabs(-1)"
                >
                    <icon>chevron_left</icon>
                </button>
            }
            <nav #nav (scroll)="updateScroll()" (focusin)="showFocused($event)">
                @for (link of tabs(); track link.id) {
                    <a
                        [routerLink]="
                            '/' + base() + '/' + item_id() + '/' + link.id
                        "
                        [queryParams]="link.query || {}"
                        routerLinkActive="active"
                        #rla="routerLinkActive"
                        [attr.aria-current]="rla.isActive ? 'page' : null"
                    >
                        <!-- Moves to the new tab in the page transition -->
                        <span indicator></span>
                        <icon class="text-xl" [icon]="link.icon" />&nbsp;
                        <div class="name">{{ link.name }}&nbsp;</div>
                        @if (link.count || link.count === 0) {
                            <div
                                class="mono bg-base-200 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.625rem]"
                            >
                                @if (link.loading || isRouteLoading(link.id)) {
                                    <span
                                        role="status"
                                        aria-label="Loading tab"
                                        class="h-3 w-3 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                    ></span>
                                } @else {
                                    <span class="animate-fade-in">{{
                                        link.count || '0'
                                    }}</span>
                                }
                            </div>
                        }
                    </a>
                }
            </nav>
            @if (overflowing()) {
                <button
                    type="button"
                    class="scroll-button"
                    tabindex="-1"
                    aria-hidden="true"
                    [disabled]="at_end()"
                    (click)="scrollTabs(1)"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
    `, imports: [IconComponent, RouterModule], styles: ["/* angular:styles/component:css;8f1ca568d09cd6d7;/home/runner/work/backoffice/backoffice/src/app/ui/item-tablist.component.ts */\nnav {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scrollbar-width: none;\n}\n.scroll-button {\n  display: flex;\n  align-items: center;\n  padding: 0 0.25rem;\n  font-size: 1.5rem;\n}\n.scroll-button:disabled {\n  opacity: 0.3;\n}\na {\n  position: relative;\n  display: flex;\n  flex: 1 0 auto;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.09em;\n  white-space: nowrap;\n  color: var(--base-content);\n}\na:hover {\n  background-color: color-mix(in srgb, currentColor 6%, transparent);\n}\na.active {\n  color: var(--secondary);\n}\na.active [indicator] {\n  position: absolute;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  background-color: var(--secondary);\n  view-transition-name: tab-indicator;\n}\n/*# sourceMappingURL=item-tablist.component.css.map */\n"] }]
  }], () => [], { base: [{ type: Input, args: [{ isSignal: true, alias: "base", required: false }] }], item_id: [{ type: Input, args: [{ isSignal: true, alias: "item_id", required: false }] }, { type: Output, args: ["item_idChange"] }], tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: false }] }], scrolled: [{ type: Input, args: [{ isSignal: true, alias: "scrolled", required: false }] }], _nav: [{ type: ViewChild, args: ["nav", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemTablistComponent, { className: "ItemTablistComponent", filePath: "src/app/ui/item-tablist.component.ts", lineNumber: 166 });
})();
export {
  ItemTablistComponent
};
//# debugId=953c2b1f-e633-54d1-90f4-26ff6c5953e0
//# sourceMappingURL=chunk-4BGCX2S5.js.map
