import {
  DebugOutputComponent
} from "./chunk-W3UIUO34.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-IPYNUJGA.js";
import {
  SidebarMenuComponent
} from "./chunk-7P7LDUXB.js";
import "./chunk-ZAIKX4YO.js";
import "./chunk-74ZONB4W.js";
import {
  PlaceDebugService
} from "./chunk-XTUVILD6.js";
import "./chunk-CLJ6HFUH.js";
import "./chunk-NXICVJ2G.js";
import "./chunk-MGQZ4D54.js";
import {
  ModuleStateService
} from "./chunk-MJFOUZJW.js";
import "./chunk-OAQ2DGBY.js";
import "./chunk-SISHP353.js";
import "./chunk-SKNZQY2S.js";
import {
  extensionsForItem
} from "./chunk-QSDL3NHE.js";
import "./chunk-FTR6ETPD.js";
import {
  ActiveItemService
} from "./chunk-CDX6TZFT.js";
import "./chunk-4RYS6IDU.js";
import "./chunk-RDQ6PHSS.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-IX77AZF2.js";
import "./chunk-TD66DK6G.js";
import "./chunk-TVF6YLBM.js";
import "./chunk-3T4IGYDM.js";
import "./chunk-ATCOB3R7.js";
import "./chunk-64C3YCVH.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-FKQAQZDB.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-UOJTYLOH.js";
import {
  isSubsystemUser
} from "./chunk-P3BK5ZDJ.js";
import "./chunk-CXFGSIWY.js";
import "./chunk-NNX74YD5.js";
import "./chunk-X2FZB35R.js";
import "./chunk-EQS235EG.js";
import "./chunk-M3XU23PA.js";
import "./chunk-RFU37ATJ.js";
import "./chunk-PK5A7L3I.js";
import "./chunk-KFBTSNCQ.js";
import "./chunk-V3CYZPSM.js";
import "./chunk-S7FMIV3Y.js";
import "./chunk-WZTE63Q5.js";
import "./chunk-GAHHDLCB.js";
import "./chunk-ASNLNZJP.js";
import "./chunk-MXHU44D4.js";
import {
  TranslatePipe
} from "./chunk-LOK5XGUU.js";
import {
  i18n
} from "./chunk-II4DDLQO.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-NMVMT4VD.js";
import {
  IconComponent
} from "./chunk-AWTACVQN.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-JIYYYGTQ.js";
import {
  MatRippleModule
} from "./chunk-6DV7MASG.js";
import {
  MatRipple
} from "./chunk-LWFSYFOG.js";
import "./chunk-ZNAEYXEF.js";
import "./chunk-UROHCZFR.js";
import "./chunk-4LBKZFUW.js";
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
} from "./chunk-OQOLG7V4.js";
import "./chunk-RQBZITXC.js";

// src/app/modules/modules.component.ts
function ModulesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function ModulesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 15);
    \u0275\u0275elementStart(3, "div", 16, 0);
    \u0275\u0275listener("scroll", function ModulesComponent_Conditional_15_Template_div_scroll_3_listener() {
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
function ModulesComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 12);
  }
}
function ModulesComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
var ModulesComponent = class _ModulesComponent {
  _service = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  _module_state = inject(ModuleStateService);
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
  system_count = this._module_state.system_total;
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
  canCreate = () => this._service.canMutate(2);
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
      },
      ...this.extensions()
    ].filter((tab) => !isSubsystemUser() || !["history"].includes(tab.id)),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModulesComponent, selectors: [["new-modules-view"]], decls: 22, vars: 19, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "lg:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "lg:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-9", 3, "click", "matTooltip", "disabled"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ModulesComponent_Template(rf, ctx) {
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
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("click", function ModulesComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(11, "icon");
      \u0275\u0275text(12, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275conditionalCreate(14, ModulesComponent_Conditional_14_Template, 1, 0, "item-details-skeleton")(15, ModulesComponent_Conditional_15_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function ModulesComponent_Template_button_click_16_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(18, "icon", 11);
      \u0275\u0275text(19, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(20, ModulesComponent_Conditional_20_Template, 1, 0, "app-debug-output", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, ModulesComponent_Conditional_21_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 11, "MODULES.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 13, "MODULES.PLURAL"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 15, "COMMON.MENU"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 14 : ctx.item()?.id ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 17, "MODULES.NEW"))("disabled", !ctx.canCreate());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 21 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
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
                        class="hidden lg:block"
                        [route]="name"
                        [title]="'MODULES.PLURAL' | translate"
                    />
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 lg:hidden"
                            [route]="name"
                            [title]="'MODULES.PLURAL' | translate"
                        >
                            <button
                                icon
                                matRipple
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
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm lg:-left-9"
                            [matTooltip]="'MODULES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            [disabled]="!canCreate()"
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
      MatRippleModule,
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
//# debugId=2e688986-22e5-58c8-96a6-b79509864f65
//# sourceMappingURL=chunk-X3UWWKTQ.js.map
