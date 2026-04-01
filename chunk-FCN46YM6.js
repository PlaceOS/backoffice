import {
  SystemStateService
} from "./chunk-6E4WOVAQ.js";
import "./chunk-MCSIAHYO.js";
import {
  DebugOutputComponent
} from "./chunk-SCPSVDFL.js";
import "./chunk-TP2GT42E.js";
import "./chunk-XOMGVKTV.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-WE4MF7OR.js";
import {
  SidebarMenuComponent
} from "./chunk-M7ZIN2HY.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-74WB5EG3.js";
import {
  PlaceDebugService
} from "./chunk-LX65XVXZ.js";
import {
  extensionsForItem
} from "./chunk-FXB52BFD.js";
import "./chunk-47GOX4L6.js";
import "./chunk-KBCKQUSO.js";
import {
  ActiveItemService
} from "./chunk-MJWEUCCX.js";
import "./chunk-J533RESC.js";
import "./chunk-746AOIKH.js";
import "./chunk-GDO2G3FK.js";
import "./chunk-H3YHW52A.js";
import "./chunk-Q3URFPAM.js";
import "./chunk-L6DCBZLR.js";
import "./chunk-YC3GB3RC.js";
import {
  toSignal
} from "./chunk-C4UNQ5W7.js";
import "./chunk-ZNMJTVKP.js";
import "./chunk-XGNXBQYI.js";
import "./chunk-E2L3SP5U.js";
import "./chunk-IV4O2CJ5.js";
import "./chunk-3JUEKOAR.js";
import "./chunk-OVM667NW.js";
import "./chunk-YJMQ5OMK.js";
import "./chunk-W3ZPEK3R.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-K33FZYPE.js";
import "./chunk-UQKRVE72.js";
import "./chunk-HRGU4UAV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XA66LDVX.js";
import "./chunk-RBWTFXTK.js";
import "./chunk-33DMMNAR.js";
import "./chunk-DUTIV43C.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WIRQ5XQH.js";
import "./chunk-6ACE75MC.js";
import "./chunk-4LE2PDCO.js";
import "./chunk-VTQCDJGL.js";
import {
  IconComponent
} from "./chunk-3SG4KASH.js";
import "./chunk-E6OTVR3E.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-IOTEGI4H.js";
import {
  MatRippleModule
} from "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-S7TGCPIQ.js";
import "./chunk-K6WIXX3Q.js";
import {
  MatRipple
} from "./chunk-ECV3GDTS.js";
import {
  Component,
  computed,
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
} from "./chunk-SMUOHSRV.js";
import {
  map
} from "./chunk-U265RLGW.js";
import "./chunk-VYXW4D3Z.js";

// src/app/systems/systems.component.ts
function SystemsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function SystemsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 17);
    \u0275\u0275elementStart(3, "div", 18, 0);
    \u0275\u0275listener("scroll", function SystemsComponent_Conditional_14_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "SYSTEMS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function SystemsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
function SystemsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 15);
  }
}
var SystemsComponent = class _SystemsComponent {
  _service = inject(SystemStateService);
  _item = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  item = toSignal(this._item.active_item$.pipe(map((item) => item)), { initialValue: null });
  loading = toSignal(this._item.loading, {
    initialValue: false
  });
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  name = "systems";
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  counts = toSignal(this._service.counts, {
    initialValue: {}
  });
  extensions = computed(() => extensionsForItem(this.item(), this.name), ...ngDevMode ? [{ debugName: "extensions" }] : []);
  tab_list = computed(() => [
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
  ].concat(this.extensions()), ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  debug_position = this._debug.position;
  newItem = () => this._item.create();
  bulkAdd = () => this._item.bulkAdd();
  static \u0275fac = function SystemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemsComponent, selectors: [["new-systems-view"]], decls: 25, vars: 16, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function SystemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function SystemsComponent_Template_sidebar_menu_openChange_1_listener($event) {
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
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, SystemsComponent_Conditional_13_Template, 1, 0, "item-details-skeleton")(14, SystemsComponent_Conditional_14_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_15_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(17, "icon", 11);
      \u0275\u0275text(18, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275listener("click", function SystemsComponent_Template_button_click_19_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(21, "icon", 13);
      \u0275\u0275text(22, "playlist_add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(23, SystemsComponent_Conditional_23_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, SystemsComponent_Conditional_24_Template, 1, 0, "app-debug-output", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 8, "SYSTEMS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 10, "SYSTEMS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 13 : ((tmp_3_0 = ctx.item()) == null ? null : tmp_3_0.id) ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 12, "SYSTEMS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(20, 14, "SYSTEMS.BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 24 : -1);
    }
  }, dependencies: [
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
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [title]="'SYSTEMS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            [title]="'SYSTEMS.PLURAL' | translate"
                            class="z-20 sm:hidden"
                        >
                            <button
                                btn
                                icon
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
                                    [type]="'SYSTEMS.SINGULAR' | translate"
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
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                            [matTooltip]="'SYSTEMS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                            [matTooltip]="'SYSTEMS.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="bulkAdd()"
                        >
                            <icon class="text-2xl">playlist_add</icon>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemsComponent, { className: "SystemsComponent", filePath: "src/app/systems/systems.component.ts", lineNumber: 122 });
})();
export {
  SystemsComponent
};
//# sourceMappingURL=chunk-FCN46YM6.js.map
