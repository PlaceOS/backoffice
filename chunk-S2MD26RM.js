import {
  GroupStateService
} from "./chunk-UMSXI7MN.js";
import "./chunk-CAEEINOC.js";
import "./chunk-IJ7SWPKJ.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-UAFOHEJY.js";
import {
  SidebarMenuComponent
} from "./chunk-HB3JYRSZ.js";
import "./chunk-DOTVKU5P.js";
import "./chunk-74ZONB4W.js";
import "./chunk-CU3MGA3I.js";
import "./chunk-7PDMMUMO.js";
import "./chunk-ZU4QPUFM.js";
import {
  MatTabNavPanel
} from "./chunk-YBGLQKCU.js";
import "./chunk-LVQJ6JUX.js";
import {
  ActiveItemService
} from "./chunk-ACXRHHDC.js";
import "./chunk-ZMORPGE7.js";
import "./chunk-MLUIXMIO.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-FDHT3WOM.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-Q62IFOOI.js";
import "./chunk-266GOI67.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-KZLWJTDG.js";
import "./chunk-QWYCVKRD.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-I67FUPJX.js";
import "./chunk-F2UXRHVQ.js";
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
import "./chunk-LKZDNNIZ.js";
import "./chunk-HIOLOCMM.js";
import "./chunk-KIA2WBKL.js";
import {
  AsyncHandler
} from "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import "./chunk-TUNU3FRP.js";
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
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/groups/groups.component.ts
function GroupsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function GroupsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 11);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 12);
    \u0275\u0275elementStart(3, "div", 13, 0);
    \u0275\u0275listener("scroll", function GroupsComponent_Conditional_13_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275elementStart(5, "mat-tab-nav-panel", 14, 1);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_panel_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.display_item())("type", \u0275\u0275pipeBind1(1, 7, "GROUPS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("panel", tab_panel_r4)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
var GroupsComponent = class _GroupsComponent extends AsyncHandler {
  _service = inject(GroupStateService);
  _item = inject(ActiveItemService);
  name = "groups";
  open_menu = false;
  scroll = signal(
    0,
    ...ngDevMode ? [{ debugName: "scroll" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._item.loading;
  item = this._service.item;
  display_item = computed(
    () => {
      const item = this.item();
      if (!item)
        return null;
      return __spreadProps(__spreadValues({}, item), { toJSON: () => __spreadValues({}, item) });
    },
    ...ngDevMode ? [{ debugName: "display_item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  counts = this._service.counts;
  tab_list = computed(
    () => {
      const count = this.counts();
      return [
        {
          id: "about",
          name: i18n("GROUPS.TAB_ABOUT"),
          icon: { content: "info" }
        },
        {
          id: "users",
          name: i18n("GROUPS.TAB_USERS"),
          count: count.users || 0,
          icon: { content: "group" }
        },
        {
          id: "zones",
          name: i18n("GROUPS.TAB_ZONES"),
          count: count.zones || 0,
          icon: { content: "meeting_room" }
        }
      ];
    },
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newItem = () => this._item.create();
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GroupsComponent_BaseFactory;
    return function GroupsComponent_Factory(__ngFactoryType__) {
      return (\u0275GroupsComponent_BaseFactory || (\u0275GroupsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupsComponent)))(__ngFactoryType__ || _GroupsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupsComponent, selectors: [["new-groups-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 16, consts: [["el", ""], ["tab_panel", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "lg:block", 3, "route", "title"], ["id", "main-content", "tabindex", "-1", 1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col", "outline-none"], [1, "z-20", "lg:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "panel", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"], [1, "block", "h-full"]], template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "sidebar-menu", 3);
      \u0275\u0275twoWayListener("openChange", function GroupsComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "main", 5)(5, "item-selection", 6);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("click", function GroupsComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(9, "icon");
      \u0275\u0275text(10, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275conditionalCreate(12, GroupsComponent_Conditional_12_Template, 1, 0, "item-details-skeleton")(13, GroupsComponent_Conditional_13_Template, 8, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("click", function GroupsComponent_Template_button_click_14_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(16, "icon", 10);
      \u0275\u0275text(17, "add");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance();
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 8, "GROUPS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 10, "GROUPS.PLURAL"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 12, "COMMON.MENU"));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.item()?.id ? 13 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(15, 14, "GROUPS.NEW"));
    }
  }, dependencies: [
    MatTabNavPanel,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    MatRipple,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupsComponent, [{
    type: Component,
    args: [{ selector: "new-groups-view", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <item-sidebar
                class="hidden lg:block"
                [route]="name"
                [title]="'GROUPS.PLURAL' | translate"
            />
            <main
                id="main-content"
                tabindex="-1"
                class="relative z-0 flex h-full w-1/2 flex-1 flex-col outline-none"
            >
                <item-selection
                    class="z-20 lg:hidden"
                    [route]="name"
                    [title]="'GROUPS.PLURAL' | translate"
                >
                    <button
                        btn
                        icon
                        class="mr-2 sm:hidden"
                        (click)="open_menu = true"
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
                            [item]="display_item()"
                            [type]="'GROUPS.SINGULAR' | translate"
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
                            <mat-tab-nav-panel #tab_panel class="block h-full">
                                <router-outlet />
                            </mat-tab-nav-panel>
                        </div>
                    }
                </div>
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm lg:-left-9"
                    [matTooltip]="'GROUPS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
            </main>
        </div>
    `, imports: [
      MatTabNavPanel,
      IconComponent,
      MatTooltipModule,
      MatRipple,
      TranslatePipe,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupsComponent, { className: "GroupsComponent", filePath: "src/app/groups/groups.component.ts", lineNumber: 109 });
})();
export {
  GroupsComponent
};
//# debugId=4525d63a-56ec-5520-b850-e8e74b934daa
//# sourceMappingURL=chunk-S2MD26RM.js.map
