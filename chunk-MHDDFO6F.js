import {
  ZonesStateService
} from "./chunk-A7VOVFMW.js";
import "./chunk-BCNCXCV6.js";
import {
  DebugOutputComponent
} from "./chunk-2TCX6EE2.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-GF3M2RAX.js";
import {
  SidebarMenuComponent
} from "./chunk-POYUTZEL.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-FMM2FQSV.js";
import {
  PlaceDebugService
} from "./chunk-F4RXU6GX.js";
import {
  extensionsForItem
} from "./chunk-6VJC3VDO.js";
import "./chunk-B7SCBJRG.js";
import "./chunk-JQNZS6ZD.js";
import {
  ActiveItemService
} from "./chunk-QQIT5AXK.js";
import "./chunk-J533RESC.js";
import "./chunk-JK6QMDKK.js";
import "./chunk-5M3JBGAG.js";
import "./chunk-CUWQT2GL.js";
import "./chunk-CSI5PWUO.js";
import "./chunk-AE4ZXYXF.js";
import "./chunk-OG2MHJQA.js";
import "./chunk-35SVQSIJ.js";
import "./chunk-W2PUTAUI.js";
import "./chunk-HLQUVQDG.js";
import "./chunk-4ALOESAF.js";
import "./chunk-5DDHIM3Z.js";
import "./chunk-4QMCQ5KK.js";
import "./chunk-TZHB3H2C.js";
import "./chunk-5YKIVDAT.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-SW42XPF4.js";
import "./chunk-4ODMIZ7O.js";
import "./chunk-OXGNLB63.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-YIBSFQXI.js";
import "./chunk-3DWKKPWQ.js";
import "./chunk-HL4CJJK6.js";
import "./chunk-QS2ZRKNC.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-Y4JFOSQS.js";
import "./chunk-ITU7FLKB.js";
import {
  AsyncHandler
} from "./chunk-KNPBCUJZ.js";
import "./chunk-263IF76L.js";
import {
  IconComponent
} from "./chunk-4IZH7QGG.js";
import "./chunk-QXQNKIRF.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import {
  MatRippleModule
} from "./chunk-6CBQWDU5.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-EU4TWCRF.js";
import "./chunk-TALE6FQV.js";
import {
  MatRipple
} from "./chunk-TEK5TAH3.js";
import {
  AsyncPipe,
  CommonModule,
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
} from "./chunk-QMACIC7N.js";
import {
  Ba,
  shareReplay
} from "./chunk-T6SXWR5P.js";
import "./chunk-VYXW4D3Z.js";

// src/app/zones/zones.component.ts
function ZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function ZonesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 17);
    \u0275\u0275elementStart(3, "div", 18, 0);
    \u0275\u0275listener("scroll", function ZonesComponent_Conditional_15_Template_div_scroll_3_listener() {
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
function ZonesComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
function ZonesComponent_Conditional_25_Template(rf, ctx) {
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
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  name = "zones";
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  debug_position = this._debug.position;
  tab_list = signal([], ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  newItem = () => this._item.create();
  bulkAdd = () => this._item.bulkAdd();
  zone_tags = Ba().pipe(shareReplay(1));
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList(details) {
    this.tab_list.set([
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
    ].concat(this.extensions));
  }
  ngOnInit() {
    this.subscription("loading", this._item.loading.subscribe((l) => this.loading.set(l)));
    this.subscription("item-change", this._item.active_item$.subscribe((i) => {
      this.item.set(i);
      this.updateTabList({});
    }));
    this.subscription("item", this._service.counts.subscribe((details) => this.updateTabList(details)));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ZonesComponent_BaseFactory;
    return function ZonesComponent_Factory(__ngFactoryType__) {
      return (\u0275ZonesComponent_BaseFactory || (\u0275ZonesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZonesComponent)))(__ngFactoryType__ || _ZonesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZonesComponent, selectors: [["new-zones-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 21, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title", "filter_options"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ZonesComponent_Template(rf, ctx) {
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
      \u0275\u0275pipe(6, "async");
      \u0275\u0275elementStart(7, "div", 6)(8, "item-selection", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_10_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(11, "icon");
      \u0275\u0275text(12, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275conditionalCreate(14, ZonesComponent_Conditional_14_Template, 1, 0, "item-details-skeleton")(15, ZonesComponent_Conditional_15_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_16_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(18, "icon", 11);
      \u0275\u0275text(19, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_20_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(22, "icon", 13);
      \u0275\u0275text(23, "playlist_add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(24, ZonesComponent_Conditional_24_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, ZonesComponent_Conditional_25_Template, 1, 0, "app-debug-output", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 11, "ZONES.PLURAL"))("filter_options", \u0275\u0275pipeBind1(6, 13, ctx.zone_tags));
      \u0275\u0275advance(4);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(9, 15, "ZONES.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 14 : ((tmp_6_0 = ctx.item()) == null ? null : tmp_6_0.id) ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 17, "ZONES.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 19, "ZONES.BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 25 : -1);
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
    AsyncPipe,
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
                        [filter_options]="zone_tags | async"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZonesComponent, { className: "ZonesComponent", filePath: "src/app/zones/zones.component.ts", lineNumber: 127 });
})();
export {
  ZonesComponent
};
//# sourceMappingURL=chunk-MHDDFO6F.js.map
