import {
  d
} from "./chunk-O72O3CR4.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  ExtensionOutletComponent,
  ItemCreateUpdateModalComponent,
  SanitizePipe,
  SidebarMenuComponent,
  SimpleTableComponent,
  extensionsForItem
} from "./chunk-JDP5FFMI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TYVAN3UY.js";
import {
  MatDialog,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatTooltip,
  MatTooltipModule,
  notifyError
} from "./chunk-EWUI732O.js";
import {
  DateFromPipe
} from "./chunk-53JJL3R3.js";
import {
  IconComponent,
  MatRipple,
  MatRippleModule
} from "./chunk-L3UICUJN.js";
import {
  TranslatePipe
} from "./chunk-V3NTFP3B.js";
import {
  AsyncHandler,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  Ir,
  NgModule,
  Pipe,
  Router,
  RouterModule,
  RouterOutlet,
  Rr,
  SafePipe,
  Wo,
  Xu,
  catchError,
  cc,
  computed,
  debounceTime,
  filter,
  fu,
  hc,
  i18n,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  tap,
  uc,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZKZAJWA3.js";

// src/app/repositories/repositories-state.service.ts
var RepositoriesStateService = class _RepositoriesStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  loading = this._loading.asObservable();
  /** Active module */
  item = this._state.item;
  /** List of available drivers for repository */
  driver_list = this._state.active_item$.pipe(debounceTime(300), switchMap((item) => {
    if (!(item instanceof Wo) || item.repo_type === Rr.Interface)
      return of(null);
    this._loading.next(true);
    return uc(item.id, { limit: 2e3 }).pipe(catchError((_) => []));
  }), tap((_) => this._loading.next(false)), startWith([]), shareReplay(1));
  /** Get latest commit for the active repository */
  commit = this._state.active_item$.pipe(filter((i) => i instanceof Wo), switchMap((item) => cc(item.id, { count: 1 })), catchError((_) => []), map((details) => details[0]?.commit || "HEAD"));
  get active_item() {
    return this._state.active_item;
  }
  async pullLatestCommit() {
    const commit = await hc(this.active_item.id).toPromise().catch((err) => {
      notifyError(i18n("REPOS.GIT_PULL_ERROR", {
        error: JSON.stringify(err.response || err.message || i18n("REPOS.GIT_PULL_TIMEOUT"))
      }));
    });
    if (!commit)
      return;
    const repo = await Xu(this.active_item.id).toPromise();
    this._state.replaceItem(repo);
  }
  async newDriver(driver) {
    this._dialog.open(ItemCreateUpdateModalComponent, {
      data: {
        item: new Ir({
          name: "",
          module_name: "",
          repository_id: this.active_item.id,
          file_name: driver
        }),
        name: "DRIVERS.NEW",
        save: (item) => fu(item)
      }
    });
  }
  static \u0275fac = function RepositoriesStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepositoriesStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RepositoriesStateService, factory: _RepositoriesStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoriesStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/repositories/repositories.component.ts
function RepositoriesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 11);
    \u0275\u0275elementStart(3, "div", 12, 0);
    \u0275\u0275listener("scroll", function RepositoriesComponent_Conditional_11_Template_div_scroll_3_listener() {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoriesComponent, selectors: [["new-repositories-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 13, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["icon", "", "matRipple", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function RepositoriesComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(11, RepositoriesComponent_Conditional_11_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function RepositoriesComponent_Template_button_click_12_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(14, "icon", 9);
      \u0275\u0275text(15, "add");
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
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 11, "REPOS.NEW"));
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
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
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
                    @if (item()?.id) {
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
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
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
      ItemSelectionComponent,
      SidebarMenuComponent,
      ItemSidebarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoriesComponent, { className: "RepositoriesComponent", filePath: "src/app/repositories/repositories.component.ts", lineNumber: 94 });
})();

// src/app/repositories/repository-about.component.ts
function RepositoryAboutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "REPOS.FOLDER_NAME_EMPTY"), " ");
  }
}
function RepositoryAboutComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function RepositoryAboutComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.commit(), ") ");
  }
}
function RepositoryAboutComponent_Conditional_62_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.GIT_PULL_LATEST"), " ");
  }
}
function RepositoryAboutComponent_Conditional_62_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 18);
  }
}
function RepositoryAboutComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function RepositoryAboutComponent_Conditional_62_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pullLatestCommit());
    });
    \u0275\u0275conditionalCreate(1, RepositoryAboutComponent_Conditional_62_Conditional_1_Template, 2, 3)(2, RepositoryAboutComponent_Conditional_62_Conditional_2_Template, 1, 0, "mat-spinner", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.pulling());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.pulling() ? 1 : 2);
  }
}
function RepositoryAboutComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 19);
    \u0275\u0275elementStart(1, "div", 20)(2, "h3", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 22);
    \u0275\u0275pipe(6, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 4, ctx_r0.description()), \u0275\u0275sanitizeHtml);
  }
}
var RepositoryAboutComponent = class _RepositoryAboutComponent extends AsyncHandler {
  _service = inject(RepositoriesStateService);
  /** Whether the latest commit is being pulled on the server */
  pulling = signal(false, ...ngDevMode ? [{ debugName: "pulling" }] : []);
  commit = signal("", ...ngDevMode ? [{ debugName: "commit" }] : []);
  item = signal(void 0, ...ngDevMode ? [{ debugName: "item" }] : []);
  local_url = computed(() => this.item()?.type === Rr.Interface ? `${location.origin}/${this.item()?.folder_name}/` : `${location.hash}`, ...ngDevMode ? [{ debugName: "local_url" }] : []);
  repo_uri = computed(() => this.item()?.uri.replace(/\/[a-zA-Z0-9\-\.:]*@/, "/...@"), ...ngDevMode ? [{ debugName: "repo_uri" }] : []);
  is_interface = computed(() => this.item()?.type === Rr.Interface, ...ngDevMode ? [{ debugName: "is_interface" }] : []);
  description = computed(() => d(this.item().description || "", { async: false }), ...ngDevMode ? [{ debugName: "description" }] : []);
  ngOnInit() {
    this.commit.set("");
    this.subscription("commit", this._service.commit.subscribe((_) => this.commit.set(_)));
    this.subscription("item", this._service.item.subscribe((item) => this.item.set(item)));
  }
  /**
   * Send request to server to pull the latest commit for the active repository
   */
  async pullLatestCommit() {
    this.pulling.set(true);
    await this._service.pullLatestCommit();
    this.pulling.set(false);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RepositoryAboutComponent_BaseFactory;
    return function RepositoryAboutComponent_Factory(__ngFactoryType__) {
      return (\u0275RepositoryAboutComponent_BaseFactory || (\u0275RepositoryAboutComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RepositoryAboutComponent)))(__ngFactoryType__ || _RepositoryAboutComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryAboutComponent, selectors: [["repository-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 64, vars: 72, consts: [[1, "mb-4", "flex", "space-x-2"], [1, "w-1/3", "flex-1"], [1, "grid", "gap-4", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "select-all"], ["target", "_blank", 3, "href"], [1, "opacity-30"], [1, "flex", "items-center", "font-mono", "text-sm"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "grid", "gap-4", "overflow-hidden", "rounded", "border", "border-base-200", "p-4"], [1, "select-all", "overflow-hidden", "underline"], ["target", "_blank", 1, "block", "w-full", "truncate", 3, "href"], [1, "flex", "items-center", "overflow-hidden"], [1, "inline-block", "max-w-full", "truncate", "text-xs", 3, "matTooltip"], [1, "mono", "select-text", "break-words"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "disabled"], ["btn", "", "matRipple", "", 1, "col-span-2", "w-full", 3, "click", "disabled"], ["diameter", "32"], [1, "my-4", "text-base-300"], [1, "w-full", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"]], template: function RepositoryAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 4)(13, "a", 5);
      \u0275\u0275text(14);
      \u0275\u0275conditionalCreate(15, RepositoryAboutComponent_Conditional_15_Template, 3, 3, "span", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 3);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7);
      \u0275\u0275text(20);
      \u0275\u0275conditionalCreate(21, RepositoryAboutComponent_Conditional_21_Template, 2, 0, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 3);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "span", 9);
      \u0275\u0275pipe(27, "date");
      \u0275\u0275pipe(28, "date");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 3);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 8)(35, "span", 9);
      \u0275\u0275pipe(36, "date");
      \u0275\u0275pipe(37, "date");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 1)(41, "div", 10)(42, "div", 3);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 11)(46, "a", 12);
      \u0275\u0275pipe(47, "safe");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 3);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 13)(53, "code", 14);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 3);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 13)(59, "code", 14);
      \u0275\u0275text(60);
      \u0275\u0275conditionalCreate(61, RepositoryAboutComponent_Conditional_61_Template, 2, 1, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(62, RepositoryAboutComponent_Conditional_62_Template, 3, 2, "button", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(63, RepositoryAboutComponent_Conditional_63_Template, 7, 6);
    }
    if (rf & 2) {
      let tmp_30_0;
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 35, "REPOS.FIELD_TYPE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 37, ctx.is_interface() ? "REPOS.INTERFACE_REPO" : "REPOS.DRIVER_REPO"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 39, "REPOS.FOLDER_NAME"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("underline", ctx.item().type === "interface")("pointer-events-none", ctx.item().type !== "interface");
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.local_url(), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().folder_name, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.item().folder_name ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 41, "REPOS.ROOT_PATH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.item().root_path, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().root_path === "" ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 43, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(27, 45, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(28, 48, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 51, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 53, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(36, 55, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(37, 58, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 61, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "6.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 63, "REPOS.URI"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", \u0275\u0275pipeBind2(47, 65, ctx.item().uri, "url"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.repo_uri() || "No URI set");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 68, "COMMON.GIT_BRANCH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().branch);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().branch, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 70, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? ctx.commit() : ctx.item().commit_hash);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit_hash || "HEAD", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.commit() && ctx.commit() !== ctx.item().commit_hash ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.is_interface() ? 62 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_30_0 = ctx.item()) == null ? null : tmp_30_0.description) ? 63 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    DatePipe,
    SanitizePipe,
    TranslatePipe,
    SafePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--mono-font);\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryAboutComponent, [{
    type: Component,
    args: [{ selector: "repository-about", template: `
        <section class="mb-4 flex space-x-2">
            <div class="w-1/3 flex-1">
                <div
                    class="grid gap-4 rounded border border-base-200 p-4"
                    [style.gridTemplateColumns]="'5.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.FIELD_TYPE' | translate }}
                    </div>
                    <div>
                        {{
                            (is_interface()
                                ? 'REPOS.INTERFACE_REPO'
                                : 'REPOS.DRIVER_REPO'
                            ) | translate
                        }}
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.FOLDER_NAME' | translate }}
                    </div>
                    <div
                        class="select-all"
                        [class.underline]="item().type === 'interface'"
                        [class.pointer-events-none]="
                            item().type !== 'interface'
                        "
                    >
                        <a [href]="local_url()" target="_blank">
                            {{ item().folder_name }}
                            @if (!item().folder_name) {
                                <span class="opacity-30">
                                    {{ 'REPOS.FOLDER_NAME_EMPTY' | translate }}
                                </span>
                            }
                        </a>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.ROOT_PATH' | translate }}
                    </div>
                    <div class="flex items-center font-mono text-sm">
                        {{ item().root_path }}
                        @if (item().root_path === '') {
                            <span class="opacity-30">Not set</span>
                        }
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.CREATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            [matTooltip]="
                                (item().created_at * 1000
                                    | date: 'mediumDate') +
                                ', ' +
                                (item().created_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item().created_at * 1000 | dateFrom }}
                        </span>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            [matTooltip]="
                                (item().updated_at * 1000
                                    | date: 'mediumDate') +
                                ', ' +
                                (item().updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item().updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-1/3 flex-1">
                <div
                    class="grid gap-4 overflow-hidden rounded border border-base-200 p-4"
                    [style.gridTemplateColumns]="'6.5rem auto'"
                >
                    <div class="flex items-center text-sm font-medium">
                        {{ 'REPOS.URI' | translate }}
                    </div>
                    <div class="select-all overflow-hidden underline">
                        <a
                            class="block w-full truncate"
                            [href]="item().uri | safe: 'url'"
                            target="_blank"
                            >{{ repo_uri() || 'No URI set' }}</a
                        >
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_BRANCH' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="item().branch"
                        >
                            {{ item().branch }}
                        </code>
                    </div>
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.GIT_COMMIT' | translate }}
                    </div>
                    <div class="flex items-center overflow-hidden">
                        <code
                            class="inline-block max-w-full truncate text-xs"
                            [matTooltip]="
                                commit() && commit() !== item().commit_hash
                                    ? commit()
                                    : item().commit_hash
                            "
                        >
                            {{ item().commit_hash || 'HEAD' }}
                            @if (commit() && commit() !== item().commit_hash) {
                                <span class="mono select-text break-words">
                                    ({{ commit() }})
                                </span>
                            }
                        </code>
                    </div>
                    @if (is_interface()) {
                        <button
                            btn
                            matRipple
                            class="col-span-2 w-full"
                            [disabled]="pulling()"
                            (click)="pullLatestCommit()"
                        >
                            @if (!pulling()) {
                                {{ 'COMMON.GIT_PULL_LATEST' | translate }}
                            } @else {
                                <mat-spinner diameter="32"></mat-spinner>
                            }
                        </button>
                    }
                </div>
            </div>
        </section>
        @if (item()?.description) {
            <hr class="my-4 text-base-300" />
            <div class="w-full rounded border border-base-200">
                <h3 class="w-full rounded bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description() | sanitize"
                ></div>
            </div>
        }
    `, imports: [
      CommonModule,
      SanitizePipe,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      SafePipe,
      DateFromPipe
    ], styles: ["/* angular:styles/component:css;5f07c17d32b664473205b0ab367d8c0e96f539f2bf6f3b78e6797189a5211777;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n.mono {\n  font-family: var(--mono-font);\n}\nlabel {\n  width: 6rem;\n  text-align: left;\n}\n/*# sourceMappingURL=repository-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryAboutComponent, { className: "RepositoryAboutComponent", filePath: "src/app/repositories/repository-about.component.ts", lineNumber: 203 });
})();

// src/app/ui/pipes/driver-format.pipe.ts
var DriverFormatPipe = class _DriverFormatPipe {
  transform(format) {
    if (typeof format !== "string")
      return "";
    if ((format || "").indexOf("/") >= 0) {
      const parts = format.split("/");
      parts.splice(0, 1);
      return `<div class="flex items-center space-x-2">${parts.map((i) => `<div class="name-part">${i}</div>`).join('<i class="material-symbols-outlined text-xl">keyboard_arrow_right</i>')}</div>`;
    }
    return format || "";
  }
  static \u0275fac = function DriverFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "driverFormat", type: _DriverFormatPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverFormatPipe, [{
    type: Pipe,
    args: [{
      name: "driverFormat"
    }]
  }], null, null);
})();

// src/app/repositories/repository-drivers.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0) => ({ key: "actions", name: " ", size: "3.25rem", sortable: false, content: a0 });
var _c2 = (a0, a1) => [a0, a1];
function RepositoryDriversComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
    \u0275\u0275pipe(1, "driverFormat");
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, row_r1), \u0275\u0275sanitizeHtml);
  }
}
function RepositoryDriversComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function RepositoryDriversComponent_ng_template_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newDriver(ctx_r2.item));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "DRIVERS.NEW"));
  }
}
var RepositoryDriversComponent = class _RepositoryDriversComponent extends AsyncHandler {
  _service = inject(RepositoriesStateService);
  _router = inject(Router);
  /** Whether driver list is loading */
  loading;
  /** List of drivers available in the repository */
  driver_list = this._service.driver_list;
  get item() {
    return this._service.active_item;
  }
  newDriver = (d2) => this._service.newDriver(d2);
  ngOnInit() {
    this.timeout("has_drivers", () => this._router.navigate(["/repositories", this.item.id]), 3e3);
    this.subscription("has_drivers", this.driver_list.subscribe((_) => {
      if (_?.length)
        this.clearTimeout("has_drivers");
    }));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RepositoryDriversComponent_BaseFactory;
    return function RepositoryDriversComponent_Factory(__ngFactoryType__) {
      return (\u0275RepositoryDriversComponent_BaseFactory || (\u0275RepositoryDriversComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RepositoryDriversComponent)))(__ngFactoryType__ || _RepositoryDriversComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepositoryDriversComponent, selectors: [["repository-drivers"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 21, consts: [["name_template", ""], ["actions_template", ""], [1, "mb-2", "text-lg", "font-medium"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "h-8", "w-full"], [1, "flex", "items-center", "px-4", "py-2", "font-mono", "text-sm", 3, "innerHTML"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 3, "click", "matTooltip"]], template: function RepositoryDriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h3", 2);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "mat-progress-bar", 3)(4, "simple-table", 4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275element(7, "div", 5);
      \u0275\u0275template(8, RepositoryDriversComponent_ng_template_8_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, RepositoryDriversComponent_ng_template_10_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r4 = \u0275\u0275reference(9);
      const actions_template_r5 = \u0275\u0275reference(11);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "REPOS.AVAILABLE_DRIVERS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.driver_list)("columns", \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pureFunction2(13, _c0, \u0275\u0275pipeBind1(5, 9, "COMMON.FIELD_NAME"), name_template_r4), \u0275\u0275pureFunction1(16, _c1, actions_template_r5)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 11, "REPOS.DRIVER_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    MatRippleModule,
    MatRipple,
    TranslatePipe,
    DriverFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepositoryDriversComponent, [{
    type: Component,
    args: [{ selector: "repository-drivers", template: `
        <h3 class="mb-2 text-lg font-medium">
            {{ 'REPOS.AVAILABLE_DRIVERS' | translate }}
        </h3>
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading"
        />
        <simple-table
            class="block min-w-[32rem] text-sm"
            [data]="driver_list"
            [columns]="[
                {
                    key: 'name',
                    name: 'COMMON.FIELD_NAME' | translate,
                    content: name_template,
                },
                {
                    key: 'actions',
                    name: ' ',
                    size: '3.25rem',
                    sortable: false,
                    content: actions_template,
                },
            ]"
            [sortable]="true"
            [empty_message]="'REPOS.DRIVER_LIST_EMPTY' | translate"
        />
        <div class="h-8 w-full"></div>
        <ng-template #name_template let-row="row">
            <div
                class="flex items-center px-4 py-2 font-mono text-sm"
                [innerHTML]="row | driverFormat"
            ></div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'DRIVERS.NEW' | translate"
                    matTooltipPosition="left"
                    (click)="newDriver(item)"
                >
                    <icon>add</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatTooltipModule,
      DriverFormatPipe,
      SimpleTableComponent,
      MatProgressBarModule,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/repositories/repository-drivers.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=repository-drivers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepositoryDriversComponent, { className: "RepositoryDriversComponent", filePath: "src/app/repositories/repository-drivers.component.ts", lineNumber: 85 });
})();

// src/app/repositories/repositories.module.ts
var ROUTES = [
  {
    path: ":id",
    component: RepositoriesComponent,
    children: [
      { path: "about", component: RepositoryAboutComponent },
      { path: "drivers", component: RepositoryDriversComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppRepositoriesModule = class _AppRepositoriesModule {
  static \u0275fac = function AppRepositoriesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRepositoriesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRepositoriesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRepositoriesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppRepositoriesModule,
  ROUTES
};
//# sourceMappingURL=chunk-O54FVA5I.js.map
