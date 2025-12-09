import {
  RepositoriesStateService
} from "./chunk-SWHT2NKS.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-2NYAB5TD.js";
import {
  SidebarMenuComponent
} from "./chunk-Z3YMI2FE.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-ZPWGBIO7.js";
import "./chunk-5YGKLDHQ.js";
import {
  extensionsForItem
} from "./chunk-5Z3HONYN.js";
import "./chunk-45NRXYPU.js";
import "./chunk-AF6SHHWU.js";
import {
  ActiveItemService
} from "./chunk-6RRM36Z7.js";
import "./chunk-5IGCJCU7.js";
import "./chunk-J533RESC.js";
import "./chunk-TLAPUNA6.js";
import "./chunk-AZEH7OPH.js";
import "./chunk-DUZVXEAA.js";
import "./chunk-K3OIGDXB.js";
import "./chunk-CAVMLDNL.js";
import "./chunk-62JZIUWG.js";
import "./chunk-DUMKBQ47.js";
import "./chunk-H6D6RNZ5.js";
import "./chunk-2UE6DVRM.js";
import "./chunk-Y4UIOVDN.js";
import "./chunk-AX7CZQ4V.js";
import "./chunk-AB2DELE4.js";
import "./chunk-L4LNMNAU.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-BFQZUVQ3.js";
import "./chunk-KACAXRUK.js";
import "./chunk-R3CS2OQD.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-457I3P7O.js";
import "./chunk-REQ7BP4U.js";
import "./chunk-ROVGGQEL.js";
import "./chunk-QJ4EJAO2.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-6DCZX4UE.js";
import "./chunk-UPZUGYHP.js";
import {
  AsyncHandler
} from "./chunk-HZ7P5O2S.js";
import "./chunk-WJHMIHHS.js";
import {
  IconComponent
} from "./chunk-RYIKAYVN.js";
import "./chunk-USSSLHL5.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-F2GG244F.js";
import {
  MatRippleModule
} from "./chunk-ZXSXDT5W.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-JGQFOLKM.js";
import "./chunk-XCUSELP4.js";
import {
  MatRipple
} from "./chunk-WRCAB6XW.js";
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
} from "./chunk-HV66NOZY.js";
import "./chunk-K7VBXBIC.js";
import "./chunk-VYXW4D3Z.js";

// src/app/repositories/repositories.component.ts
function RepositoriesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function RepositoriesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 11);
    \u0275\u0275elementStart(3, "div", 12, 0);
    \u0275\u0275listener("scroll", function RepositoriesComponent_Conditional_12_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "REPOS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
var RepositoriesComponent = class _RepositoriesComponent extends AsyncHandler {
  _service = inject(RepositoriesStateService);
  _item = inject(ActiveItemService);
  name = "repositories";
  open_menu = false;
  driver_count = 0;
  newItem = () => this._item.create();
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  tab_list = signal([], ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList() {
    this.tab_list.set((this.driver_count < 0 || !this.driver_count ? [
      {
        id: "about",
        name: i18n("REPOS.TAB_ABOUT"),
        icon: { content: "info" }
      }
    ] : [
      {
        id: "about",
        name: i18n("REPOS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "drivers",
        name: i18n("REPOS.TAB_DRIVERS"),
        count: this.driver_count,
        icon: { content: "meeting_room" }
      }
    ]).concat(this.extensions));
  }
  async ngOnInit() {
    this.subscription("loading", this._item.loading.subscribe((l) => this.loading.set(l)));
    this.subscription("list", this._service.driver_list.subscribe((list) => {
      this.driver_count = list ? list.length : -1;
      this.updateTabList();
    }));
    this.subscription("item", this._service.item.subscribe((item) => this.item.set(item)));
    this.updateTabList();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RepositoriesComponent_BaseFactory;
    return function RepositoriesComponent_Factory(__ngFactoryType__) {
      return (\u0275RepositoriesComponent_BaseFactory || (\u0275RepositoriesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RepositoriesComponent)))(__ngFactoryType__ || _RepositoriesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoriesComponent, selectors: [["new-repositories-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 13, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function RepositoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function RepositoriesComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 4)(5, "item-selection", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function RepositoriesComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, RepositoriesComponent_Conditional_11_Template, 1, 0, "item-details-skeleton")(12, RepositoriesComponent_Conditional_12_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function RepositoriesComponent_Template_button_click_13_listener() {
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
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 7, "REPOS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 9, "REPOS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 11 : ((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 11, "REPOS.NEW"));
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
    ItemDetailsComponent,
    ItemDetailsSkeletonComponent,
    ItemSelectionComponent,
    SidebarMenuComponent,
    ItemSidebarComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoriesComponent, [{
    type: Component,
    args: [{ selector: "new-repositories-view", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'REPOS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'REPOS.PLURAL' | translate"
                >
                    <button
                        icon
                        matRipple
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
                            [type]="'REPOS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list()"
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
                    [matTooltip]="'REPOS.NEW' | translate"
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
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      RouterModule,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemDetailsSkeletonComponent,
      ItemSelectionComponent,
      SidebarMenuComponent,
      ItemSidebarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoriesComponent, { className: "RepositoriesComponent", filePath: "src/app/repositories/repositories.component.ts", lineNumber: 98 });
})();
export {
  RepositoriesComponent
};
//# sourceMappingURL=chunk-TCO5PA6L.js.map
