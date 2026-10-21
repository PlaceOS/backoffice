import {
  ZonesStateService
} from "./chunk-TGPFPHWH.js";
import "./chunk-2LW3Q3FB.js";
import "./chunk-NO3QJPXO.js";
import "./chunk-DSIXUEND.js";
import {
  DebugOutputComponent
} from "./chunk-NAOFQX7N.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-MUQJ7IIY.js";
import {
  SidebarMenuComponent
} from "./chunk-774MQQY6.js";
import "./chunk-ZAIKX4YO.js";
import "./chunk-74ZONB4W.js";
import {
  PlaceDebugService
} from "./chunk-XTUVILD6.js";
import "./chunk-CLJ6HFUH.js";
import "./chunk-NXICVJ2G.js";
import "./chunk-MGQZ4D54.js";
import "./chunk-Q5T2NYU2.js";
import {
  extensionsForItem
} from "./chunk-QSDL3NHE.js";
import {
  ActiveItemService
} from "./chunk-OQBGRCZD.js";
import "./chunk-UIY3M3NT.js";
import "./chunk-RDQ6PHSS.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TKIVO3RR.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-IX77AZF2.js";
import "./chunk-365PTNYH.js";
import "./chunk-P3VSKMBR.js";
import "./chunk-TD66DK6G.js";
import "./chunk-3T4IGYDM.js";
import "./chunk-ATCOB3R7.js";
import "./chunk-7QWEFWP7.js";
import "./chunk-T3O7QHHC.js";
import {
  BackofficeUsersService
} from "./chunk-JLMQNUTQ.js";
import {
  ActivatedRoute,
  Router,
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
import "./chunk-SJPETQBZ.js";
import "./chunk-V3CYZPSM.js";
import {
  AsyncHandler
} from "./chunk-S7FMIV3Y.js";
import "./chunk-WZTE63Q5.js";
import "./chunk-GAHHDLCB.js";
import "./chunk-ASNLNZJP.js";
import "./chunk-MXHU44D4.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-NBJYZGNA.js";
import "./chunk-AOPYKUKV.js";
import {
  fh
} from "./chunk-NMVMT4VD.js";
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
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-OQOLG7V4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
  _users = inject(BackofficeUsersService);
  item = computed(
    () => this._item.active_item$(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._item.loading;
  name = "zones";
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
  counts = this._service.counts;
  tab_list = computed(
    () => {
      const details = this.counts();
      const is_admin = !!this._users.user()?.sys_admin;
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
      ].concat(extensionsForItem(this.item(), this.name)).filter((tab) => !isSubsystemUser() || !["history", "triggers", "groups"].includes(tab.id)).filter((tab) => is_admin || !["history", "groups"].includes(tab.id));
    },
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canCreate = () => this._item.canMutate(2);
  newItem = () => this._item.create();
  bulkAdd = () => this._item.bulkAdd();
  _zone_tags = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_zone_tags" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => fh().catch(() => []) }));
  zone_tags = computed(
    () => this._zone_tags.value() || [],
    ...ngDevMode ? [{ debugName: "zone_tags" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ZonesComponent_BaseFactory;
    return function ZonesComponent_Factory(__ngFactoryType__) {
      return (\u0275ZonesComponent_BaseFactory || (\u0275ZonesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ZonesComponent)))(__ngFactoryType__ || _ZonesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZonesComponent, selectors: [["new-zones-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 24, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "lg:block", 3, "route", "title", "filter_options"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "lg:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-9", 3, "click", "matTooltip", "disabled"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-8", 3, "click", "matTooltip", "disabled"], [1, "text-2xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function ZonesComponent_Template(rf, ctx) {
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
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("click", function ZonesComponent_Template_button_click_9_listener() {
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
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 14, "ZONES.PLURAL"))("filter_options", ctx.zone_tags());
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 16, "ZONES.PLURAL"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 18, "COMMON.MENU"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 14 : ctx.item()?.id ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 20, "ZONES.NEW"))("disabled", !ctx.canCreate());
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 22, "ZONES.BULK"))("disabled", !ctx.canCreate());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 25 : -1);
    }
  }, dependencies: [
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
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden lg:block"
                        [route]="name"
                        [title]="'ZONES.PLURAL' | translate"
                        [filter_options]="zone_tags()"
                    />
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 lg:hidden"
                            [route]="name"
                            [title]="'ZONES.PLURAL' | translate"
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
                                    [type]="'ZONES.SINGULAR' | translate"
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
                            [matTooltip]="'ZONES.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            [disabled]="!canCreate()"
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm lg:-left-8"
                            [matTooltip]="'ZONES.BULK' | translate"
                            matTooltipPosition="right"
                            matRipple
                            [disabled]="!canCreate()"
                            (click)="bulkAdd()"
                        >
                            <icon class="text-2xl">playlist_add</icon>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZonesComponent, { className: "ZonesComponent", filePath: "src/app/zones/zones.component.ts", lineNumber: 126 });
})();
export {
  ZonesComponent
};
//# debugId=921154bb-6190-5e64-ade9-2d66bf908c64
//# sourceMappingURL=chunk-PX5UCUOT.js.map
