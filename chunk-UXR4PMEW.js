import {
  MatTabLink,
  MatTabNav,
  MatTabsModule
} from "./chunk-HAPTQZQS.js";
import {
  toSignal
} from "./chunk-G4GCGIB2.js";
import {
  HotkeysService
} from "./chunk-PNWJF2I5.js";
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
import "./chunk-2J4AQQD6.js";
import {
  AsyncHandler
} from "./chunk-6UTRGHRC.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-PH6YSF2Z.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import "./chunk-5PLQTUPI.js";
import "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  Input,
  Output,
  effect,
  inject,
  input,
  model,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DTROA6L2.js";
import "./chunk-RQBZITXC.js";

// src/app/ui/item-tablist.component.ts
var _c0 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
function ItemTablistComponent_For_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function ItemTablistComponent_For_4_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", link_r1.count || "0", " ");
  }
}
function ItemTablistComponent_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, ItemTablistComponent_For_4_Conditional_6_Conditional_1_Template, 1, 0, "span", 8)(2, ItemTablistComponent_For_4_Conditional_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.loading || ctx_r1.isRouteLoading(link_r1.id) ? 1 : 2);
  }
}
function ItemTablistComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4, 0);
    \u0275\u0275element(2, "icon", 5);
    \u0275\u0275text(3, "\xA0 ");
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ItemTablistComponent_For_4_Conditional_6_Template, 3, 1, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const rla_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/" + ctx_r1.base() + "/" + ctx_r1.item_id() + "/" + link_r1.id)("queryParams", link_r1.query || \u0275\u0275pureFunction0(6, _c0))("active", rla_r3.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", link_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", link_r1.name, "\xA0");
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r1.count || link_r1.count === 0 ? 6 : -1);
  }
}
var ItemTablistComponent = class _ItemTablistComponent extends AsyncHandler {
  _router = inject(Router);
  _hotkey = inject(HotkeysService);
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
  /** Panel that holds the content of the active tab */
  panel = input.required(
    ...ngDevMode ? [{ debugName: "panel" }] : (
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
  constructor() {
    super();
    effect(() => {
      this._route_change();
      this._updateID();
    });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemTablistComponent, selectors: [["item-tablist"]], inputs: { base: [1, "base"], item_id: [1, "item_id"], tabs: [1, "tabs"], panel: [1, "panel"], scrolled: [1, "scrolled"] }, outputs: { item_id: "item_idChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 3, consts: [["rla", "routerLinkActive"], [1, "border-base-300", "h-12", "w-full", "border-b"], [1, "h-14", "w-full", "overflow-hidden"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", "routerLinkActive", "", 1, "tab", 3, "routerLink", "queryParams", "active"], [1, "text-xl", 3, "icon"], [1, "name"], [1, "mono", "bg-base-200", "flex", "h-5", "min-w-5", "items-center", "justify-center", "rounded-full", "px-1.5", "text-[0.625rem]"], ["role", "status", "aria-label", "Loading tab", 1, "h-3", "w-3", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current"]], template: function ItemTablistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nav", 3);
      \u0275\u0275repeaterCreate(3, ItemTablistComponent_For_4_Template, 7, 7, "a", 4, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("shadow", ctx.scrolled());
      \u0275\u0275property("tabPanel", ctx.panel());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tabs());
    }
  }, dependencies: [MatTabsModule, MatTabNav, MatTabLink, IconComponent, RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTablistComponent, [{
    type: Component,
    args: [{ selector: "item-tablist", template: `
        <div class="border-base-300 h-12 w-full border-b">
            <div class="h-14 w-full overflow-hidden">
                <nav
                    mat-tab-nav-bar
                    [class.shadow]="scrolled()"
                    [tabPanel]="panel()"
                >
                    @for (link of tabs(); track link.id) {
                        <a
                            class="tab"
                            mat-tab-link
                            [routerLink]="
                                '/' + base() + '/' + item_id() + '/' + link.id
                            "
                            [queryParams]="link.query || {}"
                            routerLinkActive
                            #rla="routerLinkActive"
                            [active]="rla.isActive"
                        >
                            <icon class="text-xl" [icon]="link.icon" />&nbsp;
                            <div class="name">{{ link.name }}&nbsp;</div>
                            @if (link.count || link.count === 0) {
                                <div
                                    class="mono bg-base-200 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.625rem]"
                                >
                                    @if (
                                        link.loading || isRouteLoading(link.id)
                                    ) {
                                        <span
                                            role="status"
                                            aria-label="Loading tab"
                                            class="h-3 w-3 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                        ></span>
                                    } @else {
                                        {{ link.count || '0' }}
                                    }
                                </div>
                            }
                        </a>
                    }
                </nav>
            </div>
        </div>
    `, imports: [MatTabsModule, IconComponent, RouterModule] }]
  }], () => [], { base: [{ type: Input, args: [{ isSignal: true, alias: "base", required: false }] }], item_id: [{ type: Input, args: [{ isSignal: true, alias: "item_id", required: false }] }, { type: Output, args: ["item_idChange"] }], tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: false }] }], panel: [{ type: Input, args: [{ isSignal: true, alias: "panel", required: true }] }], scrolled: [{ type: Input, args: [{ isSignal: true, alias: "scrolled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemTablistComponent, { className: "ItemTablistComponent", filePath: "src/app/ui/item-tablist.component.ts", lineNumber: 85 });
})();
export {
  ItemTablistComponent
};
//# debugId=ca244dc1-a8ef-5baa-b258-f78d55c9d5b1
//# sourceMappingURL=chunk-UXR4PMEW.js.map
