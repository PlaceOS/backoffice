import {
  DebugOutputComponent
} from "./chunk-UUC7XH7Z.js";
import {
  extensionsForItem
} from "./chunk-SYTSH5CY.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-F5HGBATL.js";
import {
  SidebarMenuComponent
} from "./chunk-YMAKSP6X.js";
import "./chunk-PKGXF5K6.js";
import "./chunk-74ZONB4W.js";
import {
  PlaceDebugService
} from "./chunk-UM7YW4HE.js";
import "./chunk-MHKCTSAE.js";
import "./chunk-HDCQ7QJI.js";
import "./chunk-AWSL4AC5.js";
import {
  ActiveItemService
} from "./chunk-TUXN7DJ2.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-RKY23HSE.js";
import "./chunk-7NDCHFOB.js";
import "./chunk-XVFVAW3Y.js";
import "./chunk-PCFI5QOQ.js";
import "./chunk-WWY5WMTY.js";
import "./chunk-JAMMTH5K.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-LNIYAS5O.js";
import "./chunk-7JIOXWGJ.js";
import "./chunk-7GTI4RRT.js";
import "./chunk-BVAQ3KBJ.js";
import "./chunk-V3LOQHMH.js";
import "./chunk-I55NGSFI.js";
import "./chunk-MVHEPUBI.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-SEO2LXOK.js";
import "./chunk-AHMBEMXE.js";
import "./chunk-6QZVPNC3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-2SRIA4UK.js";
import "./chunk-X6EP7JXK.js";
import "./chunk-RYWQOUT3.js";
import "./chunk-N7YQCQZM.js";
import "./chunk-CZDZVCXK.js";
import "./chunk-CYUYI3E2.js";
import "./chunk-JKE4D5KH.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-TH36Z5QV.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-J6BBXARK.js";
import "./chunk-EVUO4PXU.js";
import "./chunk-RMYYKPNF.js";
import "./chunk-ALQ3QZS6.js";
import "./chunk-TPBAO5IV.js";
import "./chunk-HQA27L6T.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ERVNLYZR.js";
import {
  IconComponent
} from "./chunk-4HEIKSFD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-YTRY35Y7.js";
import "./chunk-43FRBZB3.js";
import "./chunk-3LH3QF7A.js";
import {
  Component,
  computed,
  effect,
  ha,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
} from "./chunk-LPT3PWXX.js";
import "./chunk-KWSTWQNB.js";

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
var ModulesComponent = class _ModulesComponent {
  _service = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  name = "modules";
  item = computed(
    () => this._service.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._service.loading;
  /** Number of systems for the active device */
  system_count = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "system_count" }] : (
      /* istanbul ignore next */
      []
    )
  );
  open_menu = signal(
    false,
    ...ngDevMode ? [{ debugName: "open_menu" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scroll = signal(
    0,
    ...ngDevMode ? [{ debugName: "scroll" }] : (
      /* istanbul ignore next */
      []
    )
  );
  debug_position = this._debug.position;
  newItem = () => this._service.create();
  extensions = computed(
    () => extensionsForItem(this.item(), this.name),
    ...ngDevMode ? [{ debugName: "extensions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tab_list = computed(
    () => [
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
    ].concat(this.extensions()),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      const item = this.item();
      this.system_count.set(void 0);
      this.loadValues(item);
    });
  }
  async loadValues(item) {
    if (!item)
      return;
    const query = {
      offset: 0,
      limit: 1,
      module_id: item.id
    };
    this.system_count.set((await ha(query)).total);
  }
  static \u0275fac = function ModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["new-modules-view"]], decls: 21, vars: 15, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ModulesComponent_Template(rf, ctx) {
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
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 9, "MODULES.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 11, "MODULES.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 13 : ctx.item()?.id ? 14 : -1);
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
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'MODULES.PLURAL' | translate"
                    />
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
                                <item-details-skeleton />
                            } @else if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'MODULES.SINGULAR' | translate"
                                />
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list()"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                />
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <router-outlet />
                                </div>
                            }
                        </div>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
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
                    <app-debug-output below />
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output side class="h-full max-w-120" />
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModulesComponent, { className: "ModulesComponent", filePath: "src/app/modules/modules.component.ts", lineNumber: 108 });
})();
export {
  ModulesComponent
};
//# sourceMappingURL=chunk-XMJ75YZL.js.map
