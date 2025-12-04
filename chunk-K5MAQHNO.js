import {
  DomainStateService
} from "./chunk-NL3HD36O.js";
import "./chunk-4MGFHMRK.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-67NFCBAS.js";
import {
  SidebarMenuComponent
} from "./chunk-AOU5JFVH.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-BTQ2XPTB.js";
import "./chunk-QK3KO423.js";
import {
  extensionsForItem
} from "./chunk-6MACLKEI.js";
import "./chunk-4JYWFI3T.js";
import "./chunk-BI75T27E.js";
import {
  ActiveItemService
} from "./chunk-CWKPQSN4.js";
import "./chunk-ULGR32LE.js";
import "./chunk-ESTK43HE.js";
import "./chunk-NOAK6QM2.js";
import "./chunk-4SAGXWED.js";
import "./chunk-F5DIHUIQ.js";
import "./chunk-HFVB5MOB.js";
import "./chunk-KQFHJWJ7.js";
import "./chunk-Q4FBWG53.js";
import "./chunk-2KDSC3QQ.js";
import "./chunk-32RLFOCM.js";
import "./chunk-LYW23EPM.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-TN2YCJSA.js";
import "./chunk-M5EEY4M7.js";
import "./chunk-3KGMPJGM.js";
import "./chunk-K64JFNOT.js";
import "./chunk-XWGHYPL7.js";
import "./chunk-W3LP6CHX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-CTV2QXII.js";
import "./chunk-UHI4WW5B.js";
import "./chunk-2275BRFB.js";
import "./chunk-IAQS7CDE.js";
import "./chunk-VSSUEFHJ.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-SLAQJABM.js";
import "./chunk-LPBQ3YJT.js";
import "./chunk-FOHJAMRV.js";
import "./chunk-ZQ2RL7UU.js";
import "./chunk-4CBXDUSX.js";
import {
  TranslatePipe
} from "./chunk-5DKHD7PA.js";
import "./chunk-GU4B5AQQ.js";
import "./chunk-LUC25G4J.js";
import "./chunk-O5V2SR2Q.js";
import {
  IconComponent
} from "./chunk-LZD4U4FI.js";
import "./chunk-TDKJZEL2.js";
import {
  MatRipple
} from "./chunk-FLUVNX4R.js";
import "./chunk-W3GXKXZC.js";
import {
  AsyncHandler
} from "./chunk-C2J4JAY6.js";
import "./chunk-GBLYF56R.js";
import "./chunk-SL7UBQ7L.js";
import {
  i18n
} from "./chunk-E7QDOMTV.js";
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
} from "./chunk-Q7FFLWMX.js";
import "./chunk-KWSTWQNB.js";

// src/app/domains/domains.component.ts
function DomainsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function DomainsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 11);
    \u0275\u0275elementStart(3, "div", 12, 0);
    \u0275\u0275listener("scroll", function DomainsComponent_Conditional_12_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("extra_actions", ctx_r2.extra_actions)("type", \u0275\u0275pipeBind1(1, 7, "DOMAINS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list)("scrolled", ctx_r2.scroll() > 0);
  }
}
var DomainsComponent = class _DomainsComponent extends AsyncHandler {
  _service = inject(DomainStateService);
  _item = inject(ActiveItemService);
  name = "domains";
  open_menu = false;
  tab_list = [];
  extra_actions = [];
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  newItem = () => this._item.create();
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  ngOnInit() {
    this.extra_actions = [
      {
        label: "DOMAINS.AZURE_INTEGRATION",
        icon: "integration_instructions",
        action: () => this._service.performAzureIntegration()
      }
    ];
    this.updateTabList({});
    this.subscription("loading", this._item.loading.subscribe((l) => this.loading.set(l)));
    this.subscription("counts", this._service.counts.subscribe((c) => {
      this.updateTabList(c);
    }));
    this.subscription("items", this._service.item.subscribe((item) => this.item.set(item)));
  }
  updateTabList(count) {
    this.tab_list = [
      {
        id: "about",
        name: i18n("DOMAINS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "applications",
        name: i18n("DOMAINS.TAB_APPLICATIONS"),
        count: count.applications || 0,
        icon: { content: "login" }
      },
      {
        id: "authentication",
        name: i18n("DOMAINS.TAB_AUTHENTICATION"),
        count: count.auth_sources || 0,
        icon: { content: "lock_open" }
      },
      {
        id: "users",
        name: i18n("DOMAINS.TAB_USERS"),
        count: count.users || 0,
        icon: { content: "group" }
      }
    ].concat(this.extensions);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DomainsComponent_BaseFactory;
    return function DomainsComponent_Factory(__ngFactoryType__) {
      return (\u0275DomainsComponent_BaseFactory || (\u0275DomainsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DomainsComponent)))(__ngFactoryType__ || _DomainsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainsComponent, selectors: [["new-domains-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 13, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "extra_actions", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function DomainsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function DomainsComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 4)(5, "item-selection", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function DomainsComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, DomainsComponent_Conditional_11_Template, 1, 0, "item-details-skeleton")(12, DomainsComponent_Conditional_12_Template, 6, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function DomainsComponent_Template_button_click_13_listener() {
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
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 7, "DOMAINS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 9, "DOMAINS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 11 : ((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(14, 11, "DOMAINS.NEW"));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainsComponent, [{
    type: Component,
    args: [{ selector: "new-domains-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'DOMAINS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'DOMAINS.PLURAL' | translate"
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
                            [extra_actions]="extra_actions"
                            [type]="'DOMAINS.SINGULAR' | translate"
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
                    [matTooltip]="'DOMAINS.NEW' | translate"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainsComponent, { className: "DomainsComponent", filePath: "src/app/domains/domains.component.ts", lineNumber: 99 });
})();
export {
  DomainsComponent
};
//# sourceMappingURL=chunk-K5MAQHNO.js.map
