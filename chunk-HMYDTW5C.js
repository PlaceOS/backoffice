import {
  GroupStateService
} from "./chunk-OCJINBBF.js";
import "./chunk-LQWPUQYV.js";
import "./chunk-YZGQYJKM.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-7UBCP6UC.js";
import {
  SidebarMenuComponent
} from "./chunk-BCA6EVA4.js";
import "./chunk-SPZGMXED.js";
import "./chunk-74ZONB4W.js";
import "./chunk-OBF3W6FP.js";
import "./chunk-IZVIXDBV.js";
import "./chunk-NFCECWXE.js";
import "./chunk-C63LWMKB.js";
import "./chunk-6XWDD7HO.js";
import {
  ActiveItemService
} from "./chunk-SG77HTIX.js";
import "./chunk-2IAW3STZ.js";
import "./chunk-XTSZYT73.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-M5ZJLKOI.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-W7LBAF4W.js";
import "./chunk-I6R4JMWH.js";
import "./chunk-ZFPYWTFN.js";
import "./chunk-57T7HDE5.js";
import "./chunk-CHWIWBVC.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-BISB7QAB.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-SYH7ZBC5.js";
import "./chunk-XTDO4IU7.js";
import "./chunk-ZEWIPM6Y.js";
import "./chunk-LLRNJ6M2.js";
import "./chunk-PCXSBO64.js";
import "./chunk-R3LFGYBE.js";
import "./chunk-VDHJ5GEA.js";
import "./chunk-3KN73EXG.js";
import "./chunk-PK5A7L3I.js";
import "./chunk-ZTW4GFXA.js";
import "./chunk-PIRFEBZC.js";
import {
  AsyncHandler
} from "./chunk-JMHMEOZG.js";
import "./chunk-E63CPPEP.js";
import "./chunk-ZQLZS64A.js";
import "./chunk-27URU2VR.js";
import "./chunk-TIDB3WEY.js";
import {
  TranslatePipe
} from "./chunk-YGX4BAWE.js";
import {
  i18n
} from "./chunk-5AOS3OUL.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-LNM3OQLE.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-GHTXYZBC.js";
import "./chunk-PQUI6ASX.js";
import {
  MatRipple
} from "./chunk-OEQM55HS.js";
import "./chunk-5JSUWHJB.js";
import "./chunk-QAR3ZGTS.js";
import "./chunk-33GRF44L.js";
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
} from "./chunk-TCVU4336.js";
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
    \u0275\u0275element(0, "item-details", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 11);
    \u0275\u0275elementStart(3, "div", 12, 0);
    \u0275\u0275listener("scroll", function GroupsComponent_Conditional_13_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.display_item())("type", \u0275\u0275pipeBind1(1, 6, "GROUPS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupsComponent, selectors: [["new-groups-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 16, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "lg:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "lg:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "lg:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function GroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function GroupsComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 4)(5, "item-selection", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("click", function GroupsComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(9, "icon");
      \u0275\u0275text(10, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, GroupsComponent_Conditional_12_Template, 1, 0, "item-details-skeleton")(13, GroupsComponent_Conditional_13_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("click", function GroupsComponent_Template_button_click_14_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(16, "icon", 9);
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
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
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
                    [matTooltip]="'GROUPS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
            </div>
        </div>
    `, imports: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupsComponent, { className: "GroupsComponent", filePath: "src/app/groups/groups.component.ts", lineNumber: 100 });
})();
export {
  GroupsComponent
};
//# debugId=b7a33b73-26f0-5f08-ae5f-a5e59f2bbcb2
//# sourceMappingURL=chunk-HMYDTW5C.js.map
