import {
  DebugOutputComponent
} from "./chunk-APGJOISP.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-GBOPHPBV.js";
import {
  SidebarMenuComponent
} from "./chunk-YLM7WFLK.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-GWCE5UXW.js";
import {
  PlaceDebugService
} from "./chunk-J2U2IXRA.js";
import {
  extensionsForItem
} from "./chunk-WBLR373M.js";
import "./chunk-K6RPAWNX.js";
import "./chunk-3LEXRMOO.js";
import {
  ActiveItemService
} from "./chunk-GBS56EXV.js";
import "./chunk-ZQDZ4P3A.js";
import "./chunk-J533RESC.js";
import "./chunk-NSNXXASA.js";
import "./chunk-UM3WNNMW.js";
import "./chunk-LGPP2H5A.js";
import "./chunk-IQ3ZWEXJ.js";
import "./chunk-LIMU3SEN.js";
import "./chunk-UCNDKOJV.js";
import "./chunk-DV6VICSN.js";
import "./chunk-4GAF3GQG.js";
import "./chunk-PZ66W5KC.js";
import "./chunk-TM4V3C5C.js";
import "./chunk-5XCHDAM3.js";
import "./chunk-KWUQFCBO.js";
import "./chunk-PUYRIMA6.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-HLPJDMLG.js";
import "./chunk-JGKWW7VX.js";
import "./chunk-2N4WVO5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-BFILZFNY.js";
import "./chunk-GWVX43QP.js";
import "./chunk-ZDBP7OUD.js";
import "./chunk-QMI3AHNO.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WF6YZHUO.js";
import "./chunk-BKRK4NUB.js";
import {
  AsyncHandler
} from "./chunk-RAVBIGYQ.js";
import "./chunk-2WXWFTBN.js";
import {
  IconComponent
} from "./chunk-POU26KIO.js";
import "./chunk-X6AVAIR4.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-ZDWHOOB3.js";
import "./chunk-VDOGH5QV.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-GUX2IT3J.js";
import "./chunk-2VKYFPZX.js";
import "./chunk-47BQ5GYC.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HTG7JMGL.js";
import {
  $c,
  lastValueFrom
} from "./chunk-72HWXKQ6.js";
import "./chunk-VYXW4D3Z.js";

// src/app/modules/modules.component.ts
function ModulesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function ModulesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 15);
    \u0275\u0275elementStart(3, "div", 16, 0);
    \u0275\u0275listener("scroll", function ModulesComponent_Conditional_14_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "MODULES.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function ModulesComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 12);
  }
}
function ModulesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
var ModulesComponent = class _ModulesComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  name = "modules";
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Number of systems for the active device */
  system_count = signal(void 0, ...ngDevMode ? [{ debugName: "system_count" }] : []);
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  tab_list = signal([], ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  debug_position = this._debug.position;
  newItem = () => this._service.create();
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList() {
    this.tab_list.set([
      {
        id: "about",
        name: i18n("MODULES.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "systems",
        name: i18n("MODULES.TAB_SYSTEMS"),
        count: this.system_count(),
        icon: { content: "meeting_room" }
      },
      {
        id: "history",
        name: i18n("MODULES.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions));
  }
  ngOnInit() {
    this.subscription("loading", this._service.loading.subscribe((l) => this.loading.set(l)));
    this.subscription("item", this._service.item.subscribe((item) => {
      this.item.set(item);
      this.loadValues(item);
      this.updateTabList();
    }));
    this.updateTabList();
  }
  async loadValues(item) {
    if (!item)
      return;
    const query = { offset: 0, limit: 1, module_id: item.id };
    this.system_count.set((await lastValueFrom($c(query))).total);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ModulesComponent_BaseFactory;
    return function ModulesComponent_Factory(__ngFactoryType__) {
      return (\u0275ModulesComponent_BaseFactory || (\u0275ModulesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ModulesComponent)))(__ngFactoryType__ || _ModulesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["new-modules-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 15, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function ModulesComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "item-sidebar", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 6)(7, "item-selection", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function ModulesComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, ModulesComponent_Conditional_13_Template, 1, 0, "item-details-skeleton")(14, ModulesComponent_Conditional_14_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("click", function ModulesComponent_Template_button_click_15_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(17, "icon", 11);
      \u0275\u0275text(18, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(19, ModulesComponent_Conditional_19_Template, 1, 0, "app-debug-output", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, ModulesComponent_Conditional_20_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 9, "MODULES.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 11, "MODULES.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 13 : ((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 13, "MODULES.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 20 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterOutlet,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemDetailsSkeletonComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModulesComponent, [{
    type: Component,
    args: [{ selector: "new-modules-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'MODULES.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'MODULES.PLURAL' | translate"
                        >
                            <button
                                icon
                                matRipple
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (loading()) {
                                <item-details-skeleton></item-details-skeleton>
                            } @else if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'MODULES.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list()"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            }
                        </div>
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow-sm sm:-left-9"
                            [matTooltip]="'MODULES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                    </div>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-120"
                ></app-debug-output>
            }
        </div>
    `, imports: [
      DebugOutputComponent,
      IconComponent,
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      RouterModule,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemDetailsSkeletonComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesComponent, { className: "ModulesComponent", filePath: "src/app/modules/modules.component.ts", lineNumber: 113 });
})();
export {
  ModulesComponent
};
//# sourceMappingURL=chunk-T35SY5VP.js.map
