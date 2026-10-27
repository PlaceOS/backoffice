import {
  SystemStateService
} from "./chunk-ATJEKF25.js";
import "./chunk-GROVKQVH.js";
import "./chunk-IJ7SWPKJ.js";
import "./chunk-2R47A64L.js";
import {
  DebugOutputComponent
} from "./chunk-6RXVZO77.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-MNLQKAGV.js";
import {
  SidebarMenuComponent
} from "./chunk-JEFEW5Y4.js";
import "./chunk-DOTVKU5P.js";
import "./chunk-74ZONB4W.js";
import {
  PlaceDebugService
} from "./chunk-CU3MGA3I.js";
import "./chunk-7PDMMUMO.js";
import "./chunk-ZU4QPUFM.js";
import {
  MatTabNavPanel
} from "./chunk-YBGLQKCU.js";
import "./chunk-QMVXPLGZ.js";
import "./chunk-OUWQZTON.js";
import "./chunk-5BFKPLWS.js";
import {
  extensionsForItem
} from "./chunk-ZGCO6CER.js";
import "./chunk-FTR6ETPD.js";
import {
  ActiveItemService
} from "./chunk-IYFGIRJZ.js";
import "./chunk-ZMORPGE7.js";
import "./chunk-MLUIXMIO.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-Q62IFOOI.js";
import "./chunk-6IH2TNQE.js";
import "./chunk-75QZBWCP.js";
import "./chunk-266GOI67.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-DC3YQFAN.js";
import "./chunk-CZHGOQVA.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-KZLWJTDG.js";
import "./chunk-R464B6VT.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-R3KIBYX2.js";
import {
  isSubsystemUser
} from "./chunk-F2UXRHVQ.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-WDXKFFYO.js";
import "./chunk-HPS63TJZ.js";
import "./chunk-JIKSLL3H.js";
import "./chunk-QUK2HLQJ.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-SBWE5ILJ.js";
import "./chunk-DQFIZL2Z.js";
import "./chunk-HAWZID7H.js";
import "./chunk-S6TBIU6L.js";
import "./chunk-OLETOVUH.js";
import "./chunk-WLIXIQFW.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import {
  MatRippleModule
} from "./chunk-TUNU3FRP.js";
import {
  MatRipple
} from "./chunk-52KP2JDE.js";
import {
  TranslatePipe
} from "./chunk-XTQWFJN3.js";
import {
  i18n
} from "./chunk-V4STGI54.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-GPNEKEBR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/systems/systems.component.ts
function SystemsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function SystemsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 18);
    \u0275\u0275elementStart(3, "div", 19, 0);
    \u0275\u0275listener("scroll", function SystemsComponent_Conditional_15_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275elementStart(5, "mat-tab-nav-panel", 20, 1);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_panel_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 7, "SYSTEMS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("panel", tab_panel_r4)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function SystemsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 15);
  }
}
function SystemsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 16);
  }
}
var SystemsComponent = class _SystemsComponent {
  _service = inject(SystemStateService);
  _item = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  item = computed(
    () => this._item.active_item$(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._item.loading;
  open_menu = signal(
    false,
    ...ngDevMode ? [{ debugName: "open_menu" }] : (
      /* istanbul ignore next */
      []
    )
  );
  name = "systems";
  scroll = signal(
    0,
    ...ngDevMode ? [{ debugName: "scroll" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counts = this._service.counts;
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
        name: i18n("SYSTEMS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "modules",
        name: i18n("SYSTEMS.TAB_MODULES"),
        count: this.counts()?.devices ?? "?",
        icon: { content: "tablet" }
      },
      {
        id: "zones",
        name: i18n("SYSTEMS.TAB_ZONES"),
        count: this.counts()?.zones ?? "?",
        icon: { content: "layers" }
      },
      {
        id: "triggers",
        name: i18n("SYSTEMS.TAB_TRIGGERS"),
        count: this.counts()?.triggers ?? "?",
        icon: { content: "timer" }
      },
      {
        id: "metadata",
        name: i18n("SYSTEMS.TAB_METADATA"),
        count: this.counts()?.metadata ?? "?",
        icon: { content: "code_blocks" }
      },
      {
        id: "history",
        name: i18n("SYSTEMS.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions()).filter((tab) => !isSubsystemUser() || !["history"].includes(tab.id)),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  debug_position = this._debug.position;
  canCreate = () => this._item.canMutate(2);
  newItem = () => this._item.create();
  bulkAdd = () => this._item.bulkAdd();
  static \u0275fac = function SystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemsComponent, selectors: [["new-systems-view"]], decls: 26, vars: 21, consts: [["el", ""], ["tab_panel", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "lg:block", 3, "title"], ["id", "main-content", "tabindex", "-1", 1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "outline-none"], [1, "z-20", "lg:hidden", 3, "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-9", 3, "click", "matTooltip", "disabled"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-8", 3, "click", "matTooltip", "disabled"], [1, "text-2xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "panel", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"], [1, "block", "h-full"]], template: function SystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "sidebar-menu", 3);
      \u0275\u0275twoWayListener("openChange", function SystemsComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
      \u0275\u0275element(4, "item-sidebar", 6);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "main", 7)(7, "item-selection", 8);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementStart(9, "button", 9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(11, "icon");
      \u0275\u0275text(12, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275conditionalCreate(14, SystemsComponent_Conditional_14_Template, 1, 0, "item-details-skeleton")(15, SystemsComponent_Conditional_15_Template, 8, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_16_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(18, "icon", 12);
      \u0275\u0275text(19, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_20_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(22, "icon", 14);
      \u0275\u0275text(23, "playlist_add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(24, SystemsComponent_Conditional_24_Template, 1, 0, "app-debug-output", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, SystemsComponent_Conditional_25_Template, 1, 0, "app-debug-output", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 11, "SYSTEMS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 13, "SYSTEMS.PLURAL"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 15, "COMMON.MENU"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 14 : ctx.item()?.id ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 17, "SYSTEMS.NEW"))("disabled", !ctx.canCreate());
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 19, "SYSTEMS.BULK"))("disabled", !ctx.canCreate());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 25 : -1);
    }
  }, dependencies: [
    MatTabNavPanel,
    DebugOutputComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemDetailsSkeletonComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    RouterModule,
    RouterOutlet,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemsComponent, [{
    type: Component,
    args: [{ selector: "new-systems-view", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden lg:block"
                        [title]="'SYSTEMS.PLURAL' | translate"
                    />
                    <main
                        id="main-content"
                        tabindex="-1"
                        class="relative z-0 flex h-full w-1/2 flex-1 flex-col outline-none"
                    >
                        <item-selection
                            [title]="'SYSTEMS.PLURAL' | translate"
                            class="z-20 lg:hidden"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                                [attr.aria-label]="'COMMON.MENU' | translate"
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
                                    [type]="'SYSTEMS.SINGULAR' | translate"
                                />
                                <item-tablist
                                    [base]="name"
                                    [panel]="tab_panel"
                                    [tabs]="tab_list()"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                />
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <mat-tab-nav-panel
                                        #tab_panel
                                        class="block h-full"
                                    >
                                        <router-outlet />
                                    </mat-tab-nav-panel>
                                </div>
                            }
                        </div>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm lg:-left-9"
                            [matTooltip]="'SYSTEMS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            [disabled]="!canCreate()"
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm lg:-left-8"
                            [matTooltip]="'SYSTEMS.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            [disabled]="!canCreate()"
                            (click)="bulkAdd()"
                        >
                            <icon class="text-2xl">playlist_add</icon>
                        </button>
                    </main>
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
      MatTabNavPanel,
      DebugOutputComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemDetailsSkeletonComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent,
      RouterModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemsComponent, { className: "SystemsComponent", filePath: "src/app/systems/systems.component.ts", lineNumber: 133 });
})();
export {
  SystemsComponent
};
//# debugId=ce2af2da-cce9-5540-a85b-7cf2736b6da4
//# sourceMappingURL=chunk-Q7MKW7LA.js.map
