import {
  ZonesStateService
} from "./chunk-5Q4U3QCS.js";
import "./chunk-USZH6ZSL.js";
import "./chunk-MZDIIPDU.js";
import {
  DebugOutputComponent
} from "./chunk-6676EMRX.js";
import {
  extensionsForItem
} from "./chunk-UU4RW63F.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-X7AVVB7I.js";
import {
  SidebarMenuComponent
} from "./chunk-QUX7CUY4.js";
import "./chunk-YK43QAQQ.js";
import {
  PlaceDebugService
} from "./chunk-LSSVO25O.js";
import "./chunk-WN3K4HWL.js";
import "./chunk-CBUMWNUV.js";
import "./chunk-SLVL7P43.js";
import {
  ActiveItemService
} from "./chunk-L6DTZFL3.js";
import "./chunk-J533RESC.js";
import "./chunk-CIQTGPIC.js";
import "./chunk-PZ6FH7HJ.js";
import "./chunk-JAZWWDYQ.js";
import "./chunk-SUZCL24N.js";
import "./chunk-Q4IHQBE5.js";
import "./chunk-IYY5PYJ5.js";
import {
  toSignal
} from "./chunk-DVZ7MXOG.js";
import "./chunk-JRBSDEVI.js";
import "./chunk-IICJGF2V.js";
import "./chunk-IR63I7QW.js";
import "./chunk-LZSVYB2G.js";
import "./chunk-TBIE4X4V.js";
import "./chunk-DSMAAENN.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-BR2SEM6U.js";
import "./chunk-XKUCQ7BL.js";
import "./chunk-SLDYTPK2.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QOHO4EXP.js";
import "./chunk-V6YJ4Z7A.js";
import "./chunk-JHZ5UPYR.js";
import "./chunk-V7K2HRQN.js";
import "./chunk-UENR5XJJ.js";
import "./chunk-Y5MGOXOO.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-VRK5F3OU.js";
import "./chunk-2MAE3OEL.js";
import "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-4DW55IZJ.js";
import "./chunk-NNJNMYZB.js";
import {
  MatRippleModule
} from "./chunk-P4ZFFXRB.js";
import "./chunk-RDKMWAC6.js";
import {
  IconComponent
} from "./chunk-OJQGLQXV.js";
import "./chunk-SMEGFJCA.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-SFSVGVOC.js";
import "./chunk-TKVVIBDD.js";
import {
  MatRipple
} from "./chunk-X3IV36B5.js";
import {
  CommonModule,
  Component,
  computed,
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
} from "./chunk-JFTEBBHC.js";
import {
  catchError,
  of,
  shareReplay,
  wh
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zones.component.ts
function ZonesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function ZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 17);
    \u0275\u0275elementStart(3, "div", 18, 0);
    \u0275\u0275listener("scroll", function ZonesComponent_Conditional_14_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "ZONES.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function ZonesComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
function ZonesComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 15);
  }
}
var ZonesComponent = class _ZonesComponent extends AsyncHandler {
  _service = inject(ZonesStateService);
  _item = inject(ActiveItemService);
  _route = inject(ActivatedRoute);
  _router = inject(Router);
  _debug = inject(PlaceDebugService);
  item = toSignal(this._item.active_item$, {
    initialValue: null
  });
  loading = toSignal(this._item.loading, {
    initialValue: false
  });
  name = "zones";
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  debug_position = this._debug.position;
  counts = toSignal(this._service.counts, {
    initialValue: {
      systems: 0,
      triggers: 0,
      metadata: 0,
      children: 0,
      groups: 0
    }
  });
  tab_list = computed(() => {
    const details = this.counts();
    return [
      {
        id: "about",
        name: i18n("ZONES.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "systems",
        name: i18n("ZONES.TAB_SYSTEMS"),
        count: details.systems ?? "?",
        icon: { content: "meeting_room" }
      },
      {
        id: "triggers",
        name: i18n("ZONES.TAB_TRIGGERS"),
        count: details.triggers ?? "?",
        icon: { content: "timer" }
      },
      {
        id: "metadata",
        name: i18n("ZONES.TAB_METADATA"),
        count: details.metadata ?? "?",
        icon: { content: "code_blocks" }
      },
      {
        id: "groups",
        name: i18n("ZONES.TAB_GROUPS"),
        count: details.groups ?? "?",
        icon: { content: "groups" }
      },
      {
        id: "children",
        name: i18n("ZONES.TAB_CHILDREN"),
        count: details.children ?? "?",
        icon: { content: "account_tree" }
      },
      {
        id: "history",
        name: i18n("ZONES.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(extensionsForItem(this.item(), this.name));
  }, ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  newItem = () => this._item.create();
  bulkAdd = () => this._item.bulkAdd();
  zone_tags = toSignal(wh().pipe(catchError(() => of([]))).pipe(shareReplay(1)), {
    initialValue: []
  });
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ZonesComponent_BaseFactory;
    return function ZonesComponent_Factory(__ngFactoryType__) {
      return (\u0275ZonesComponent_BaseFactory || (\u0275ZonesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZonesComponent)))(__ngFactoryType__ || _ZonesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZonesComponent, selectors: [["new-zones-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 19, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title", "filter_options"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function ZonesComponent_Template_sidebar_menu_openChange_1_listener($event) {
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
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, ZonesComponent_Conditional_13_Template, 1, 0, "item-details-skeleton")(14, ZonesComponent_Conditional_14_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 10);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_15_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(17, "icon", 11);
      \u0275\u0275text(18, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_19_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(21, "icon", 13);
      \u0275\u0275text(22, "playlist_add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(23, ZonesComponent_Conditional_23_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, ZonesComponent_Conditional_24_Template, 1, 0, "app-debug-output", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 11, "ZONES.PLURAL"))("filter_options", ctx.zone_tags());
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 13, "ZONES.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 13 : ((tmp_6_0 = ctx.item()) == null ? null : tmp_6_0.id) ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(16, 15, "ZONES.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(20, 17, "ZONES.BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 24 : -1);
    }
  }, dependencies: [
    CommonModule,
    DebugOutputComponent,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterOutlet,
    MatRippleModule,
    MatRipple,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemDetailsSkeletonComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    ItemSelectionComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonesComponent, [{
    type: Component,
    args: [{ selector: "new-zones-view", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'ZONES.PLURAL' | translate"
                        [filter_options]="zone_tags()"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'ZONES.PLURAL' | translate"
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
                                    [type]="'ZONES.SINGULAR' | translate"
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
                            [matTooltip]="'ZONES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                            [matTooltip]="'ZONES.BULK' | translate"
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
      CommonModule,
      DebugOutputComponent,
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      RouterModule,
      MatRippleModule,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemDetailsSkeletonComponent,
      ItemSidebarComponent,
      SidebarMenuComponent,
      ItemSelectionComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZonesComponent, { className: "ZonesComponent", filePath: "src/app/zones/zones.component.ts", lineNumber: 128 });
})();
export {
  ZonesComponent
};
//# sourceMappingURL=chunk-337BHKS6.js.map
