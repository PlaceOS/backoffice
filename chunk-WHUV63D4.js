import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-LJNADWPM.js";
import {
  SidebarMenuComponent
} from "./chunk-WB6AHYDE.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-5EAODZHO.js";
import "./chunk-LFCOZRS7.js";
import {
  extensionsForItem
} from "./chunk-FZEPO6FM.js";
import "./chunk-LCQGGQUF.js";
import "./chunk-JQEXP6LA.js";
import {
  ActiveItemService
} from "./chunk-H7U27CVJ.js";
import "./chunk-E7NOTDZJ.js";
import "./chunk-SU4A27HA.js";
import "./chunk-JAVYI6DR.js";
import "./chunk-ZKOSV5C6.js";
import "./chunk-4SRLAZCZ.js";
import "./chunk-WGQKHF74.js";
import "./chunk-FUSKLN5J.js";
import "./chunk-W4446ZI7.js";
import "./chunk-MAYE525A.js";
import "./chunk-LYW23EPM.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-D444NJCZ.js";
import "./chunk-T5VT4STZ.js";
import "./chunk-LD7UQSHX.js";
import "./chunk-OHL342VN.js";
import "./chunk-YEYFARTO.js";
import "./chunk-W3LP6CHX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TDDLCX2F.js";
import "./chunk-GNMPSLDT.js";
import "./chunk-UJ4OAW4C.js";
import "./chunk-GYVRTF64.js";
import "./chunk-GAQFKYD5.js";
import "./chunk-BJ7RDLLP.js";
import "./chunk-QU5HIE6N.js";
import "./chunk-TZTONW54.js";
import "./chunk-XXHSEYB2.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import {
  TranslatePipe
} from "./chunk-GROJVO3W.js";
import "./chunk-UG6ZEHPO.js";
import "./chunk-WDR2GARE.js";
import {
  MatRippleModule
} from "./chunk-ZF3Z6LCK.js";
import {
  IconComponent
} from "./chunk-VLW6LVHT.js";
import "./chunk-SU3MJTQD.js";
import {
  MatRipple
} from "./chunk-PECY6EPM.js";
import "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-7UVGUB3C.js";
import "./chunk-W37MESDG.js";
import "./chunk-PCFRJ6OJ.js";
import {
  i18n
} from "./chunk-FG3K2BCB.js";
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
} from "./chunk-C25AKIFS.js";
import "./chunk-KWSTWQNB.js";

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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["new-users-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 16, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow-sm", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function UsersComponent_Template(rf, ctx) {
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
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
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
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow-sm sm:-left-9"
                    [matTooltip]="'USERS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
                <button
                    class="absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow-sm sm:-left-8"
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
//# sourceMappingURL=chunk-WHUV63D4.js.map
