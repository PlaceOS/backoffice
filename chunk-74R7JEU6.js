import {
  DriverStateService
} from "./chunk-F5W4TGIV.js";
import {
  DebugOutputComponent
} from "./chunk-V7DLNRF3.js";
import "./chunk-ZWZ3OYSW.js";
import "./chunk-NMO72SAG.js";
import {
  ItemDetailsComponent,
  ItemDetailsSkeletonComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-JIA62QHB.js";
import {
  SidebarMenuComponent
} from "./chunk-LMZIY3XD.js";
import "./chunk-YK43QAQQ.js";
import "./chunk-O3RWSJZV.js";
import {
  PlaceDebugService
} from "./chunk-UCWHUR3V.js";
import {
  extensionsForItem
} from "./chunk-TOA2WBK5.js";
import "./chunk-63K26NVC.js";
import "./chunk-3NEIYYF3.js";
import {
  ActiveItemService
} from "./chunk-SJS3NMKI.js";
import "./chunk-J533RESC.js";
import "./chunk-YTJDBYYP.js";
import "./chunk-QBKODXYB.js";
import "./chunk-IZOUKBB7.js";
import "./chunk-UKPZNMNS.js";
import "./chunk-YKMVGLTV.js";
import "./chunk-ZCAI424E.js";
import {
  toSignal
} from "./chunk-7QVEE5VR.js";
import "./chunk-IIUIDWWB.js";
import "./chunk-GVMJP65D.js";
import "./chunk-DVN3BL7D.js";
import "./chunk-4ARITZTR.js";
import "./chunk-SKYIPB3H.js";
import "./chunk-W2GN2BRP.js";
import "./chunk-UAXAQ7BE.js";
import "./chunk-UCQRULZV.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-3MFQ72CW.js";
import "./chunk-QGR553JM.js";
import "./chunk-6VJ3RG5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PPQFSXFA.js";
import "./chunk-D2LXA4RU.js";
import "./chunk-ED6OHA3X.js";
import "./chunk-AXKZKMNR.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-YDTR7R4T.js";
import "./chunk-R2EAFTPD.js";
import "./chunk-GMSIBCGC.js";
import "./chunk-MF6TUUIF.js";
import {
  IconComponent
} from "./chunk-RBXYCJUU.js";
import "./chunk-AV4JSAAI.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-5V5EUIVE.js";
import {
  MatRippleModule
} from "./chunk-2BWZF4LD.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-BSW7AGOT.js";
import "./chunk-Y3N2XCKC.js";
import {
  MatRipple
} from "./chunk-MSVGRD3P.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
} from "./chunk-H6LO5TZR.js";
import {
  hc,
  lastValueFrom,
  map
} from "./chunk-BKO4HWAT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/drivers/drivers.component.ts
function DriversComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "item-details-skeleton");
  }
}
function DriversComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 16);
    \u0275\u0275elementStart(3, "div", 17, 0);
    \u0275\u0275listener("scroll", function DriversComponent_Conditional_14_Template_div_scroll_3_listener() {
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
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "DRIVERS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function DriversComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DriversComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showUpdateList());
    });
    \u0275\u0275elementStart(2, "icon", 12);
    \u0275\u0275text(3, "update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "DRIVERS.UPDATE"));
  }
}
function DriversComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
function DriversComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
var DriversComponent = class _DriversComponent {
  _service = inject(ActiveItemService);
  _drivers = inject(DriverStateService);
  _debug = inject(PlaceDebugService);
  name = "drivers";
  item = toSignal(this._service.item.pipe(map((item) => item)), { initialValue: null });
  loading = toSignal(this._service.loading, {
    initialValue: false
  });
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  device_count = signal(0, ...ngDevMode ? [{ debugName: "device_count" }] : []);
  docs = toSignal(this._drivers.docs, { initialValue: null });
  extensions = computed(() => extensionsForItem(this.item(), this.name), ...ngDevMode ? [{ debugName: "extensions" }] : []);
  tab_list = computed(() => [
    {
      id: "about",
      name: i18n("DRIVERS.TAB_ABOUT"),
      icon: { content: "info" }
    },
    ...this.docs() ? [
      {
        id: "docs",
        name: i18n("DRIVERS.TAB_DOCS"),
        icon: { content: "docs" }
      }
    ] : [],
    {
      id: "modules",
      name: i18n("DRIVERS.TAB_MODULES"),
      count: this.device_count() ?? "?",
      icon: { content: "tablet" }
    },
    {
      id: "history",
      name: i18n("DRIVERS.TAB_SETTINGS_HISTORY"),
      icon: { content: "schedule" }
    }
  ].concat(this.extensions()), ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  updates_available = this._drivers.updates_available;
  debug_position = this._debug.position;
  showUpdateList = () => this._drivers.showUpdateList();
  newItem = () => this._service.create();
  constructor() {
    effect(() => {
      const item = this.item();
      this.device_count.set(void 0);
      this.loadValues(item);
    });
  }
  async loadValues(item) {
    if (!item)
      return;
    const query = {
      offset: 0,
      limit: 1,
      driver_id: item.id
    };
    this.device_count.set(await lastValueFrom(hc(query).pipe(map(({ total }) => total))).catch(() => 0));
  }
  static \u0275fac = function DriversComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriversComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriversComponent, selectors: [["new-drivers-view"]], decls: 23, vars: 18, consts: [["el", ""], [1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-1", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-8", 3, "matTooltip"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"], ["matTooltipPosition", "right", "matRipple", "", 1, "border-base-200", "bg-secondary", "text-secondary-content", "absolute", "bottom-16", "left-1", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "shadow-sm", "sm:-left-8", 3, "click", "matTooltip"]], template: function DriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function DriversComponent_Template_sidebar_menu_openChange_1_listener($event) {
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
      \u0275\u0275listener("click", function DriversComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, DriversComponent_Conditional_13_Template, 1, 0, "item-details-skeleton")(14, DriversComponent_Conditional_14_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, DriversComponent_Conditional_15_Template, 4, 3, "button", 10);
      \u0275\u0275pipe(16, "async");
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275listener("click", function DriversComponent_Template_button_click_17_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(19, "icon", 12);
      \u0275\u0275text(20, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(21, DriversComponent_Conditional_21_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, DriversComponent_Conditional_22_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 10, "DRIVERS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 12, "DRIVERS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 13 : ((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(16, 14, ctx.updates_available) ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 16, "DRIVERS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 22 : -1);
    }
  }, dependencies: [
    CommonModule,
    DebugOutputComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    ItemDetailsComponent,
    ItemDetailsSkeletonComponent,
    ItemTablistComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    RouterModule,
    RouterOutlet,
    AsyncPipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriversComponent, [{
    type: Component,
    args: [{ selector: "new-drivers-view", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'DRIVERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'DRIVERS.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
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
                                    [type]="'DRIVERS.SINGULAR' | translate"
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
                        @if (updates_available | async) {
                            <button
                                class="border-base-200 bg-secondary text-secondary-content absolute bottom-16 left-1 z-30 flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm sm:-left-8"
                                [matTooltip]="'DRIVERS.UPDATE' | translate"
                                matTooltipPosition="right"
                                matRipple
                                (click)="showUpdateList()"
                            >
                                <icon class="text-3xl">update</icon>
                            </button>
                        }
                        <button
                            class="border-base-200 bg-secondary text-secondary-content absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border shadow-sm sm:-left-9"
                            [matTooltip]="'DRIVERS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
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
      MatRippleModule,
      MatTooltipModule,
      ItemDetailsComponent,
      ItemDetailsSkeletonComponent,
      ItemTablistComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent,
      RouterModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriversComponent, { className: "DriversComponent", filePath: "src/app/drivers/drivers.component.ts", lineNumber: 129 });
})();
export {
  DriversComponent
};
//# sourceMappingURL=chunk-74R7JEU6.js.map
