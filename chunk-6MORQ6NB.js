import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-BR3IDWML.js";
import {
  SidebarMenuComponent
} from "./chunk-5QWSXX5Q.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-XOUVIQAV.js";
import "./chunk-N42GIG3R.js";
import {
  extensionsForItem
} from "./chunk-ASMAJT6N.js";
import "./chunk-CED5YVOM.js";
import "./chunk-FWMAYYQO.js";
import {
  ActiveItemService
} from "./chunk-3ATJC7DY.js";
import "./chunk-NQTK7ZL2.js";
import "./chunk-J533RESC.js";
import "./chunk-I5AL5V7J.js";
import "./chunk-GFQZBYS2.js";
import "./chunk-OVISDOSS.js";
import "./chunk-5CIGDIXS.js";
import "./chunk-3RDWH2PM.js";
import "./chunk-SMGQCLO4.js";
import "./chunk-D26PSXGA.js";
import "./chunk-HVEA2SCZ.js";
import "./chunk-AYXNAT23.js";
import "./chunk-FW5T3MMG.js";
import "./chunk-25QEM4SL.js";
import "./chunk-WWOKREKZ.js";
import "./chunk-MQK2WLOX.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-6S56CTCM.js";
import "./chunk-DEYB5LIM.js";
import "./chunk-AEQCFEN3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-F2SIRQ7I.js";
import "./chunk-VG6RDBFT.js";
import "./chunk-FX7JK7RR.js";
import "./chunk-4W3B5TXE.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-MNFEZLRO.js";
import "./chunk-XSCAXKGH.js";
import {
  AsyncHandler
} from "./chunk-3LEBC5GS.js";
import "./chunk-3DOKPZ3J.js";
import {
  IconComponent
} from "./chunk-WIN2774F.js";
import "./chunk-MMIWWJ2B.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-H5MOLNWN.js";
import {
  MatRippleModule
} from "./chunk-PJJZ73WC.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-WSRCHTK7.js";
import "./chunk-DT6XLHSE.js";
import {
  MatRipple
} from "./chunk-KZU5VDTQ.js";
import {
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
} from "./chunk-TUZQ7R7Y.js";
import "./chunk-74QWELJT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/users/users.component.ts
function UsersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function UsersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 13);
    \u0275\u0275elementStart(3, "div", 14, 0);
    \u0275\u0275listener("scroll", function UsersComponent_Conditional_12_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "USERS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list)("scrolled", ctx_r2.scroll() > 0);
  }
}
var UsersComponent = class _UsersComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  name = "users";
  open_menu = false;
  tab_list = [];
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  newItem = () => this._service.create();
  bulkAdd = () => this._service.bulkAdd();
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList(details) {
    this.tab_list = [
      {
        id: "about",
        name: i18n("USERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "metadata",
        name: i18n("USERS.TAB_METADATA"),
        count: details?.metadata,
        icon: { content: "code_blocks" }
      },
      {
        id: "history",
        name: i18n("USERS.TAB_HISTORY"),
        icon: { content: "history" }
      }
    ].concat(this.extensions);
  }
  ngOnInit() {
    this.subscription("loading", this._service.loading.subscribe((l) => this.loading.set(l)));
    this.subscription("item", this._service.item.subscribe((item) => {
      this.item.set(item);
      this.updateTabList();
    }));
    this.updateTabList();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UsersComponent_BaseFactory;
    return function UsersComponent_Factory(__ngFactoryType__) {
      return (\u0275UsersComponent_BaseFactory || (\u0275UsersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UsersComponent)))(__ngFactoryType__ || _UsersComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["new-users-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 16, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function UsersComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 4)(5, "item-selection", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, UsersComponent_Conditional_11_Template, 1, 0, "item-details-skeleton")(12, UsersComponent_Conditional_12_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_13_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(15, "icon", 9);
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_17_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(19, "icon", 11);
      \u0275\u0275text(20, "playlist_add");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance();
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 8, "USERS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 10, "USERS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 11 : ((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 12, "USERS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 14, "USERS.BULK"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterOutlet,
    ItemTablistComponent,
    ItemSidebarComponent,
    ItemDetailsComponent,
    ItemDetailsSkeletonComponent,
    ItemSelectionComponent,
    SidebarMenuComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "new-users-view", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'USERS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'USERS.PLURAL' | translate"
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
                            [item]="item()"
                            [type]="'USERS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll() > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll.set(el.scrollTop)"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    }
                </div>
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                    [matTooltip]="'USERS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
                <button
                    class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                    [matTooltip]="'USERS.BULK' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="bulkAdd()"
                >
                    <icon class="text-2xl">playlist_add</icon>
                </button>
            </div>
        </div>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      RouterModule,
      ItemTablistComponent,
      ItemSidebarComponent,
      ItemDetailsComponent,
      ItemDetailsSkeletonComponent,
      ItemSelectionComponent,
      SidebarMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 106 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-6MORQ6NB.js.map
