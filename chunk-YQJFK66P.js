import {
  GroupStateService
} from "./chunk-QOTP2NZH.js";
import "./chunk-4YF7JSBQ.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-32P67YKK.js";
import {
  SidebarMenuComponent
} from "./chunk-KZAGWFAE.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-FDIYDFHZ.js";
import "./chunk-FFW7LH62.js";
import "./chunk-MOEQULEY.js";
import "./chunk-HGGVCEKR.js";
import {
  ActiveItemService
} from "./chunk-ZW5Y4EYP.js";
import "./chunk-J533RESC.js";
import "./chunk-4D4IMX2A.js";
import "./chunk-FHQGBBTQ.js";
import "./chunk-BE3VYPN7.js";
import "./chunk-4MGJQKZI.js";
import "./chunk-DUXI5L56.js";
import "./chunk-GKVBOXTY.js";
import "./chunk-I5KKTSV2.js";
import "./chunk-PHBPFGXL.js";
import "./chunk-ULWUBCPK.js";
import "./chunk-ZXZJTKYJ.js";
import {
  toSignal
} from "./chunk-G56OPZT7.js";
import "./chunk-QQD3AYXM.js";
import "./chunk-IRWJYDCK.js";
import "./chunk-GDQKXU3F.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-X3TFB4ML.js";
import "./chunk-7IGSOKAD.js";
import "./chunk-UIGRSY2Y.js";
import "./chunk-VMMCY5BT.js";
import "./chunk-AXEYOGNP.js";
import "./chunk-4ERLCDTX.js";
import "./chunk-LYW23EPM.js";
import "./chunk-74RX4HV2.js";
import "./chunk-KLDR7TXH.js";
import "./chunk-BASVZ2NG.js";
import "./chunk-IQ5P3T5K.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-Z6BALLUE.js";
import {
  IconComponent
} from "./chunk-XEKU7LYC.js";
import "./chunk-EK7MA2NF.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-3HK3DQFR.js";
import "./chunk-2SRDPC72.js";
import "./chunk-V6M7Z2DS.js";
import "./chunk-GSGVHISS.js";
import "./chunk-KWELGHAI.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ZO77MJC7.js";
import {
  MatRipple
} from "./chunk-RCJZKIXW.js";
import {
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
} from "./chunk-7Y7JYXTF.js";
import "./chunk-VWBDUF7E.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/groups/groups.component.ts
function GroupsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function GroupsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 11);
    \u0275\u0275elementStart(3, "div", 12, 0);
    \u0275\u0275listener("scroll", function GroupsComponent_Conditional_12_Template_div_scroll_3_listener() {
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
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  loading = toSignal(this._item.loading, {
    initialValue: false
  });
  item = toSignal(this._service.item, {
    initialValue: null
  });
  display_item = computed(() => {
    const item = this.item();
    if (!item)
      return null;
    return __spreadProps(__spreadValues({}, item), { toJSON: () => __spreadValues({}, item) });
  }, ...ngDevMode ? [{ debugName: "display_item" }] : []);
  counts = toSignal(this._service.counts, {
    initialValue: { users: 0, zones: 0 }
  });
  tab_list = computed(() => {
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
  }, ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  newItem = () => this._item.create();
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GroupsComponent_BaseFactory;
    return function GroupsComponent_Factory(__ngFactoryType__) {
      return (\u0275GroupsComponent_BaseFactory || (\u0275GroupsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupsComponent)))(__ngFactoryType__ || _GroupsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupsComponent, selectors: [["new-groups-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 13, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"]], template: function GroupsComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("click", function GroupsComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, GroupsComponent_Conditional_11_Template, 1, 0, "item-details-skeleton")(12, GroupsComponent_Conditional_12_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function GroupsComponent_Template_button_click_13_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(15, "icon", 9);
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance();
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 7, "GROUPS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 9, "GROUPS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 11 : ((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 11, "GROUPS.NEW"));
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
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'GROUPS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'GROUPS.PLURAL' | translate"
                >
                    <button
                        btn
                        icon
                        class="mr-2 sm:hidden"
                        (click)="open_menu = true"
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
                            [item]="display_item()"
                            [type]="'GROUPS.SINGULAR' | translate"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupsComponent, { className: "GroupsComponent", filePath: "src/app/groups/groups.component.ts", lineNumber: 98 });
})();
export {
  GroupsComponent
};
//# sourceMappingURL=chunk-YQJFK66P.js.map
