import {
  UserAvatarComponent
} from "./chunk-PKMGAJGB.js";
import {
  PlaceDebugService
} from "./chunk-YDQ7BGZV.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-STXYXB2B.js";
import {
  CustomTooltipComponent,
  CustomTooltipData
} from "./chunk-6I4BHKEU.js";
import {
  HotkeysService
} from "./chunk-JZPASCCB.js";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-3VJIC3YA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import {
  BackofficeUsersService
} from "./chunk-NOX42OQY.js";
import {
  SettingsService,
  VERSION,
  format
} from "./chunk-N3B5BD3H.js";
import {
  AsyncHandler
} from "./chunk-JJ5DNIGX.js";
import {
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import {
  LocaleService,
  TranslatePipe,
  i18n
} from "./chunk-JMC7E3RS.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-YUNY6RXQ.js";
import {
  issueDescription
} from "./chunk-Y2VDX4KN.js";
import {
  _MatInternalFormField
} from "./chunk-6SWYUOAV.js";
import {
  BidiModule,
  FocusMonitor,
  MatRipple,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-2UI5N333.js";
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-5TQT6AWS.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  Nr,
  Output,
  St,
  ViewChild,
  ViewEncapsulation,
  Xr,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/application-picker-tooltip.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ApplicationPickerTooltipComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " Loading applications... ");
    \u0275\u0275elementEnd();
  }
}
function ApplicationPickerTooltipComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " No applications configured for this domain. ");
    \u0275\u0275elementEnd();
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 11);
    \u0275\u0275listener("error", function ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_2_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r3);
      const app_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadNextIcon(app_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.currentIcon(app_r4), \u0275\u0275sanitizeUrl)("alt", app_r4.name);
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.appInitial(app_r4.name), " ");
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function ApplicationPickerTooltipComponent_Conditional_6_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275conditionalCreate(2, ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_2_Template, 1, 2, "img", 8)(3, ApplicationPickerTooltipComponent_Conditional_6_For_2_Conditional_3_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.uri(app_r4.redirect_uri), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.currentIcon(app_r4) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r4.name, " ");
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 12);
    \u0275\u0275listener("click", function ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousPage());
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275listener("click", function ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", ctx_r1.page() === 0);
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.page() + 1, " / ", ctx_r1.total_pages(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", ctx_r1.page() >= ctx_r1.total_pages() - 1);
    \u0275\u0275property("disabled", ctx_r1.page() >= ctx_r1.total_pages() - 1);
  }
}
function ApplicationPickerTooltipComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, ApplicationPickerTooltipComponent_Conditional_6_For_2_Template, 6, 3, "a", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ApplicationPickerTooltipComponent_Conditional_6_Conditional_3_Template, 7, 8, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.visible_applications());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.applications().length > ctx_r1.page_size ? 3 : -1);
  }
}
var PAGE_SIZE = 9;
var ApplicationPickerTooltipComponent = class _ApplicationPickerTooltipComponent {
  _tooltip = inject(CustomTooltipData, { optional: true });
  page_size = PAGE_SIZE;
  loading = signal(
    true,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  page = signal(
    0,
    ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    )
  );
  applications = signal(
    [],
    ...ngDevMode ? [{ debugName: "applications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  total_pages = computed(
    () => Math.max(1, Math.ceil(this.applications().length / PAGE_SIZE)),
    ...ngDevMode ? [{ debugName: "total_pages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  visible_applications = computed(
    () => {
      const start = this.page() * PAGE_SIZE;
      return this.applications().slice(start, start + PAGE_SIZE);
    },
    ...ngDevMode ? [{ debugName: "visible_applications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    const active_authority = St();
    if (!active_authority?.id) {
      this.loading.set(false);
      return;
    }
    const response = await Xr({
      authority_id: active_authority.id
    }).catch(() => null);
    const applications = (response?.data || []).filter((app) => this.isSupportedRedirectUri(app?.redirect_uri)).sort((lhs, rhs) => (lhs.name || this.nameFromUri(lhs.redirect_uri)).localeCompare(rhs.name || this.nameFromUri(rhs.redirect_uri))).map((app) => this.mapApplication(app));
    this.applications.set(applications);
    this.page.set(0);
    this.loading.set(false);
  }
  close = () => this._tooltip?.close();
  currentIcon(item) {
    return item.icon_urls[item.icon_index] || "";
  }
  uri(uri) {
    return uri.replace("oauth-resp.html", "");
  }
  appInitial(name) {
    return `${name || "?"}`.trim().charAt(0).toUpperCase() || "?";
  }
  loadNextIcon(item) {
    this.applications.update((applications) => applications.map((app) => app.id === item.id ? __spreadProps(__spreadValues({}, app), {
      icon_index: Math.min(app.icon_index + 1, app.icon_urls.length)
    }) : app));
  }
  previousPage() {
    this.page.update((page) => Math.max(0, page - 1));
  }
  nextPage() {
    this.page.update((page) => Math.min(this.total_pages() - 1, page + 1));
  }
  mapApplication(app) {
    return {
      id: app.id,
      name: app.name || this.nameFromUri(app.redirect_uri),
      redirect_uri: app.redirect_uri,
      icon_urls: this.faviconUrls(app.redirect_uri),
      icon_index: 0
    };
  }
  nameFromUri(uri) {
    try {
      return new URL(uri, location.origin).hostname;
    } catch {
      return "Application";
    }
  }
  isSupportedRedirectUri(uri) {
    if (!uri)
      return false;
    try {
      const protocol = new URL(uri, location.origin).protocol;
      return protocol === "http:" || protocol === "https:";
    } catch {
      return false;
    }
  }
  faviconUrls(uri) {
    const path = this.redirectPath(uri);
    return [
      ...["svg", "png", "jpg", "ico"].map((ext) => `${path}assets/favicon.${ext}`),
      `${path}favicon.ico`
    ];
  }
  redirectPath(uri) {
    try {
      const url = new URL(uri, location.origin);
      const pathname = url.pathname || "/";
      const last_segment = pathname.split("/").filter((_) => !!_).at(-1);
      const base_path = pathname.endsWith("/") ? pathname : last_segment?.includes(".") ? pathname.slice(0, pathname.lastIndexOf("/") + 1) : `${pathname}/`;
      return `${url.origin}${base_path.startsWith("/") ? "" : "/"}${base_path}`;
    } catch {
      return "/";
    }
  }
  static \u0275fac = function ApplicationPickerTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationPickerTooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationPickerTooltipComponent, selectors: [["application-picker-tooltip"]], decls: 7, vars: 1, consts: [[1, "border-base-300", "bg-base-100", "m-2", "w-[24rem]", "max-w-[calc(100vw-2rem)]", "rounded-2xl", "border", "p-4", "shadow-xl"], [1, "mb-2", "px-2", "pt-1", "text-sm", "font-semibold"], [1, "text-base-content/60", "px-2", "py-6", "text-center", "text-sm"], [1, "grid", "grid-cols-3", "gap-2"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-28", "flex-col", "items-center", "justify-start", "rounded-2xl", "px-2", "py-3", "text-center", 3, "href"], [1, "bg-base-200/50", "border-base-200", "mt-3", "flex", "items-center", "justify-between", "rounded-full", "border", "text-sm"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "min-h-28", "flex-col", "items-center", "justify-start", "rounded-2xl", "px-2", "py-3", "text-center", 3, "click", "href"], [1, "bg-base-300/50", "mb-3", "flex", "h-14", "w-14", "shrink-0", "items-center", "justify-center", "overflow-hidden", "rounded-xl"], [1, "h-full", "w-full", "object-contain", "p-1", 3, "src", "alt"], [1, "text-base-content/60", "text-lg", "font-semibold", "uppercase"], ["app-name", "", 1, "text-sm", "font-medium"], [1, "h-full", "w-full", "object-contain", "p-1", 3, "error", "src", "alt"], ["matRipple", "", 1, "hover:bg-base-200", "w-24", "rounded-full", "px-4", "py-2", 3, "click", "disabled"], [1, "text-base-content/60"]], template: function ApplicationPickerTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div");
      \u0275\u0275conditionalCreate(4, ApplicationPickerTooltipComponent_Conditional_4_Template, 2, 0, "div", 2)(5, ApplicationPickerTooltipComponent_Conditional_5_Template, 2, 0, "div", 2)(6, ApplicationPickerTooltipComponent_Conditional_6_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 4 : !ctx.applications().length ? 5 : 6);
    }
  }, dependencies: [MatRippleModule, MatRipple], styles: ["\n[app-name][_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 1.25rem;\n  max-height: 2.5rem;\n  word-break: break-word;\n}\n/*# sourceMappingURL=application-picker-tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationPickerTooltipComponent, [{
    type: Component,
    args: [{ selector: "application-picker-tooltip", template: `
        <div
            class="border-base-300 bg-base-100 m-2 w-[24rem] max-w-[calc(100vw-2rem)] rounded-2xl border p-4 shadow-xl"
        >
            <div class="mb-2 px-2 pt-1 text-sm font-semibold">Applications</div>
            <div>
                @if (loading()) {
                    <div
                        class="text-base-content/60 px-2 py-6 text-center text-sm"
                    >
                        Loading applications...
                    </div>
                } @else if (!applications().length) {
                    <div
                        class="text-base-content/60 px-2 py-6 text-center text-sm"
                    >
                        No applications configured for this domain.
                    </div>
                } @else {
                    <div class="grid grid-cols-3 gap-2">
                        @for (app of visible_applications(); track app.id) {
                            <a
                                matRipple
                                class="hover:bg-base-200 flex min-h-28 flex-col items-center justify-start rounded-2xl px-2 py-3 text-center"
                                [href]="uri(app.redirect_uri)"
                                (click)="close()"
                            >
                                <div
                                    class="bg-base-300/50 mb-3 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                                >
                                    @if (currentIcon(app)) {
                                        <img
                                            class="h-full w-full object-contain p-1"
                                            [src]="currentIcon(app)"
                                            [alt]="app.name"
                                            (error)="loadNextIcon(app)"
                                        />
                                    } @else {
                                        <div
                                            class="text-base-content/60 text-lg font-semibold uppercase"
                                        >
                                            {{ appInitial(app.name) }}
                                        </div>
                                    }
                                </div>
                                <div app-name class="text-sm font-medium">
                                    {{ app.name }}
                                </div>
                            </a>
                        }
                    </div>
                    @if (applications().length > page_size) {
                        <div
                            class="bg-base-200/50 border-base-200 mt-3 flex items-center justify-between rounded-full border text-sm"
                        >
                            <button
                                matRipple
                                class="hover:bg-base-200 w-24 rounded-full px-4 py-2"
                                [disabled]="page() === 0"
                                [class.opacity-40]="page() === 0"
                                (click)="previousPage()"
                            >
                                Previous
                            </button>
                            <div class="text-base-content/60">
                                {{ page() + 1 }} / {{ total_pages() }}
                            </div>
                            <button
                                matRipple
                                class="hover:bg-base-200 w-24 rounded-full px-4 py-2"
                                [disabled]="page() >= total_pages() - 1"
                                [class.opacity-40]="page() >= total_pages() - 1"
                                (click)="nextPage()"
                            >
                                Next
                            </button>
                        </div>
                    }
                }
            </div>
        </div>
    `, imports: [MatRippleModule], styles: ["/* angular:styles/component:css;2c172394bef6e559507a4db92550c1c9265ffcb6660d2ee03e01d8ae03e8b930;/home/runner/work/backoffice/backoffice/src/app/ui/application-picker-tooltip.component.ts */\n[app-name] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  line-height: 1.25rem;\n  max-height: 2.5rem;\n  word-break: break-word;\n}\n/*# sourceMappingURL=application-picker-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationPickerTooltipComponent, { className: "ApplicationPickerTooltipComponent", filePath: "src/app/ui/application-picker-tooltip.component.ts", lineNumber: 119 });
})();

// src/app/ui/debug-info.component.ts
var _c0 = (a0) => ({ modules: a0 });
var _c1 = (a0) => ({ count: a0 });
function DebugInfoComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 4);
    \u0275\u0275text(3, "bug_report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 6);
    \u0275\u0275text(7, "sdk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "icon", 6);
    \u0275\u0275text(13, "business_messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 5, "COMMON.DEBUG_ENABLED"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind3(5, 7, "COMMON.DEBUG_LISTENING_MSG", \u0275\u0275pureFunction1(15, _c0, ctx_r0.debug_module_count()), ctx_r0.debug_module_count()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.debug_module_count(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind3(11, 11, "COMMON.DEBUG_MSG_COUNT_MSG", \u0275\u0275pureFunction1(17, _c1, ctx_r0.debug_message_count()), ctx_r0.debug_message_count()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.debug_message_count(), " ");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.DEBUG_ENABLED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 5, "COMMON.DEBUG_LISTENING_MSG", \u0275\u0275pureFunction1(13, _c0, ctx_r0.debug_module_count()), ctx_r0.debug_module_count()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(8, 9, "COMMON.DEBUG_MSG_COUNT_MSG", \u0275\u0275pureFunction1(15, _c1, ctx_r0.debug_message_count()), ctx_r0.debug_message_count()), " ");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10)(1, "icon");
    \u0275\u0275text(2, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugPosition());
    });
    \u0275\u0275elementStart(6, "icon", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9, "Toggle Position");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearDebugMessages());
    });
    \u0275\u0275elementStart(11, "icon", 4);
    \u0275\u0275text(12, "clear_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14, "Clear Messages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearBindings());
    });
    \u0275\u0275elementStart(16, "icon", 4);
    \u0275\u0275text(17, "hearing_disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19, "Unbind Modules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 11);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDebug());
    });
    \u0275\u0275elementStart(21, "icon", 4);
    \u0275\u0275text(22, "open_in_browser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24, "Open Console");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r3 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.debug_position() === "side" ? "border_bottom" : "border_right");
  }
}
function DebugInfoComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugPosition());
    });
    \u0275\u0275elementStart(2, "icon", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearDebugMessages());
    });
    \u0275\u0275elementStart(5, "icon", 14);
    \u0275\u0275text(6, "clear_all");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearBindings());
    });
    \u0275\u0275elementStart(8, "icon", 15);
    \u0275\u0275text(9, "hearing_disabled");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function DebugInfoComponent_Conditional_0_Conditional_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDebug());
    });
    \u0275\u0275elementStart(11, "icon", 16);
    \u0275\u0275text(12, "open_in_browser");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.debug_position() === "side" ? "border_bottom" : "border_right");
  }
}
function DebugInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, DebugInfoComponent_Conditional_0_Conditional_1_Template, 16, 19)(2, DebugInfoComponent_Conditional_0_Conditional_2_Template, 9, 17);
    \u0275\u0275conditionalCreate(3, DebugInfoComponent_Conditional_0_Conditional_3_Template, 25, 2)(4, DebugInfoComponent_Conditional_0_Conditional_4_Template, 13, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.compact() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.compact() ? 3 : 4);
  }
}
var DebugInfoComponent = class _DebugInfoComponent {
  _debug = inject(PlaceDebugService);
  compact = input(
    false,
    ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    )
  );
  debug_position = this._debug.position;
  debug_enabled = this._debug.enabled;
  debug_module_count = this._debug.module_count;
  debug_message_count = this._debug.event_count;
  toggleDebugPosition() {
    this._debug.position.update((p) => p === "side" ? "below" : "side");
  }
  openDebug() {
    this._debug.is_shown.set(true);
  }
  /** Clear all the debug logs */
  clearDebugMessages() {
    this._debug.clearEvents();
  }
  clearBindings() {
    this._debug.unbindAll();
  }
  static \u0275fac = function DebugInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DebugInfoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DebugInfoComponent, selectors: [["debug-info"]], inputs: { compact: [1, "compact"] }, decls: 1, vars: 1, consts: [["menu", "matMenu"], [1, "border-base-300", "m-2", "flex", "flex-col", "justify-between", "gap-2", "rounded-xl", "border", "p-2"], ["actions", "", 1, "flex", "items-center", "justify-center", "gap-1"], ["matTooltipPosition", "right", 1, "bg-info", "text-info-content", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-2xl"], ["matTooltipPosition", "right", 1, "relative", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-4xl", "opacity-10"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "mono", "bg-info", "text-info-content", "rounded-xl", "p-1", "text-center", "text-xs"], [1, "p-1", "text-center", "text-xs"], ["icon", "", "default", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["icon", "", "default", "", "matRipple", "", 3, "click"], ["matTooltip", "Toggle Position"], ["matTooltip", "Clear Messages"], ["matTooltip", "Unbind Modules"], ["matTooltip", "Open Console"]], template: function DebugInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DebugInfoComponent_Conditional_0_Template, 5, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.debug_enabled() ? 0 : -1);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DebugInfoComponent, [{
    type: Component,
    args: [{ selector: "debug-info", template: `
        @if (debug_enabled()) {
            <div
                class="border-base-300 m-2 flex flex-col justify-between gap-2 rounded-xl border p-2"
            >
                @if (compact()) {
                    <div
                        class="bg-info text-info-content flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="'COMMON.DEBUG_ENABLED' | translate"
                        matTooltipPosition="right"
                    >
                        <icon class="text-2xl">bug_report</icon>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-4xl opacity-10">sdk</icon>
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            {{ debug_module_count() }}
                        </div>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-4xl opacity-10"
                            >business_messages</icon
                        >
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            {{ debug_message_count() }}
                        </div>
                    </div>
                } @else {
                    <div
                        class="mono bg-info text-info-content rounded-xl p-1 text-center text-xs"
                    >
                        {{ 'COMMON.DEBUG_ENABLED' | translate }}
                    </div>
                    <p class="p-1 text-center text-xs">
                        {{
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        }}<br />
                        {{
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        }}
                    </p>
                }
                @if (compact()) {
                    <button icon default matRipple [matMenuTriggerFor]="menu">
                        <icon>more_horiz</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="toggleDebugPosition()">
                            <icon class="text-2xl">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                            <div>Toggle Position</div>
                        </button>
                        <button mat-menu-item (click)="clearDebugMessages()">
                            <icon class="text-2xl">clear_all</icon>
                            <div>Clear Messages</div>
                        </button>
                        <button mat-menu-item (click)="clearBindings()">
                            <icon class="text-2xl">hearing_disabled</icon>
                            <div>Unbind Modules</div>
                        </button>
                        <button mat-menu-item (click)="openDebug()">
                            <icon class="text-2xl">open_in_browser</icon>
                            <div>Open Console</div>
                        </button>
                    </mat-menu>
                } @else {
                    <div actions class="flex items-center justify-center gap-1">
                        <button
                            icon
                            default
                            matRipple
                            (click)="toggleDebugPosition()"
                        >
                            <icon matTooltip="Toggle Position">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearDebugMessages()"
                        >
                            <icon matTooltip="Clear Messages">clear_all</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearBindings()"
                        >
                            <icon matTooltip="Unbind Modules"
                                >hearing_disabled</icon
                            >
                        </button>
                        <button icon default matRipple (click)="openDebug()">
                            <icon matTooltip="Open Console"
                                >open_in_browser</icon
                            >
                        </button>
                    </div>
                }
            </div>
        }
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      MatMenuModule
    ] }]
  }], null, { compact: [{ type: Input, args: [{ isSignal: true, alias: "compact", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DebugInfoComponent, { className: "DebugInfoComponent", filePath: "src/app/ui/debug-info.component.ts", lineNumber: 158 });
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c02 = ["switch"];
var _c12 = ["*"];
function MatSlideToggle_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  _labelId;
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  _switchElement;
  focus() {
    this._switchElement.nativeElement.focus();
  }
  _noopAnimations = _animationsDisabled();
  _focused = false;
  name = null;
  id;
  labelPosition = "after";
  ariaLabel = null;
  ariaLabelledby = null;
  ariaDescribedby;
  required = false;
  color;
  disabled = false;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  hideIcon;
  disabledInteractive;
  change = new EventEmitter();
  toggleChange = new EventEmitter();
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 14,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mat-mdc-slide-toggle-touch-target"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          return ctx._handleClick();
        });
        \u0275\u0275element(3, "div", 3)(4, "span", 4);
        \u0275\u0275elementStart(5, "span", 5)(6, "span", 6)(7, "span", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, MatSlideToggle_Conditional_11_Template, 5, 0, "span", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "label", 12);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_12_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275projection(13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(9);
        \u0275\u0275property("matRippleTrigger", switch_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <div class="mat-mdc-slide-toggle-touch-target"></div>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle],
    exports: [MatSlideToggle, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle],
      exports: [MatSlideToggle, BidiModule]
    }]
  }], null, null);
})();

// src/app/ui/user-menu-tooltip.component.ts
var _c03 = () => ["/users", "current", "about"];
function UserMenuTooltipComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 9)(1, "icon", 3);
    \u0275\u0275text(2, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const lang_menu_r3 = \u0275\u0275reference(25);
    \u0275\u0275property("matMenuTriggerFor", lang_menu_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "COMMON.LANGUAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_lang.name, " ");
  }
}
function UserMenuTooltipComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UserMenuTooltipComponent_For_27_Template_button_click_0_listener() {
      const language_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage(language_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(language_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(language_r5.flag);
  }
}
var UserMenuTooltipComponent = class _UserMenuTooltipComponent {
  _settings = inject(SettingsService);
  _locale = inject(LocaleService);
  github_icon = signal(
    "",
    ...ngDevMode ? [{ debugName: "github_icon" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether dark mode is enabled */
  get dark_mode() {
    return this._settings.get("theme") === "dark";
  }
  set dark_mode(state) {
    const theme = state ? "dark" : "light";
    this._settings.setTheme(theme);
    this.github_icon.set(theme === "dark" ? "assets/img/GitHub_dark.svg" : "assets/img/GitHub_light.svg");
  }
  lang = "en";
  languages = [];
  get active_lang() {
    return this.languages.find((_) => _.id === this.lang) || {
      id: "en",
      name: "English"
    };
  }
  get github_link() {
    const title = `Issue on page`;
    const description = issueDescription(VERSION.hash, format(VERSION.time, "dd MMM yyyy, h:mm a"));
    return `https://github.com/PlaceOS/backoffice/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&labels=bug`;
  }
  ngOnInit() {
    this.lang = this._locale.locale;
    this.languages = [
      { id: "en", name: i18n("COMMON.LANG_ENGLISH"), flag: "\u{1F1EC}\u{1F1E7}" },
      { id: "jp", name: i18n("COMMON.LANG_JAPANESE"), flag: "\u{1F1EF}\u{1F1F5}" },
      { id: "fr", name: i18n("COMMON.LANG_FRENCH"), flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "es", name: i18n("COMMON.LANG_SPANISH"), flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "ar", name: i18n("COMMON.LANG_ARABIC"), flag: "" }
    ];
    this.github_icon.set(this._settings.get("theme") === "dark" ? "assets/img/GitHub_dark.svg" : "assets/img/GitHub_light.svg");
  }
  setLanguage(lang) {
    this._locale.setLocale(lang);
    localStorage.setItem("BACKOFFICE.locale", lang);
    this.languages = [
      { id: "en", name: i18n("COMMON.LANG_ENGLISH"), flag: "\u{1F1EC}\u{1F1E7}" },
      { id: "jp", name: i18n("COMMON.LANG_JAPANESE"), flag: "\u{1F1EF}\u{1F1F5}" },
      { id: "fr", name: i18n("COMMON.LANG_FRENCH"), flag: "\u{1F1EB}\u{1F1F7}" },
      { id: "es", name: i18n("COMMON.LANG_SPANISH"), flag: "\u{1F1EA}\u{1F1F8}" },
      { id: "ar", name: i18n("COMMON.LANG_ARABIC"), flag: "" }
    ];
    setTimeout(() => location.reload(), 100);
  }
  logout() {
    Nr();
  }
  showUploadHistory() {
    this._settings.post("show_upload_manager", true);
  }
  static \u0275fac = function UserMenuTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMenuTooltipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMenuTooltipComponent, selectors: [["user-menu-tooltip"]], decls: 35, vars: 27, consts: [["lang_menu", "matMenu"], [1, "divide-base-200", "border-base-300", "bg-base-100", "m-2", "divide-y", "rounded-sm", "border", "shadow-sm"], ["matRipple", "", "type", "button", "profile", "", 1, "space-x-2", 3, "routerLink"], [1, "text-2xl"], ["dark-mode", "", 1, "flex", "w-[16rem]", "items-center", "p-3"], [1, "w-1/2", "flex-1"], [3, "ngModelChange", "ngModel"], ["matRipple", "", "type", "button", "logout", "", 1, "space-x-2", 3, "click"], ["matRipple", "", "type", "button", "uploads", "", 1, "space-x-2", 3, "click"], ["matRipple", "", "type", "button", 3, "matMenuTriggerFor"], ["xPosition", "after", "yPosition", "above"], ["mat-menu-item", "", 1, "w-60"], ["matRipple", "", "type", "button", "target", "_blank", "ref", "noopener noreferer", "report", "", 1, "gap-2", 3, "href"], ["alt", "Github Icon", 1, "m-1", "flex", "h-5", "max-w-5", "items-center", "justify-center", "overflow-hidden", "text-xs", 3, "src"], [1, "flex-1", "text-left"], [1, "bg-base-200", "max-w-24", "truncate", "rounded-sm", "px-2", "py-1", "text-sm"], ["mat-menu-item", "", 1, "w-60", 3, "click"], [1, "flex", "w-full", "items-center", "justify-between", "space-x-4"]], template: function UserMenuTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "a", 2)(2, "icon", 3);
      \u0275\u0275text(3, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "icon", 3);
      \u0275\u0275text(8, "dark_mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-slide-toggle", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UserMenuTooltipComponent_Template_mat_slide_toggle_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dark_mode, $event) || (ctx.dark_mode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function UserMenuTooltipComponent_Template_button_click_13_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(14, "icon", 3);
      \u0275\u0275text(15, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 8);
      \u0275\u0275listener("click", function UserMenuTooltipComponent_Template_button_click_18_listener() {
        return ctx.showUploadHistory();
      });
      \u0275\u0275elementStart(19, "icon", 3);
      \u0275\u0275text(20, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, UserMenuTooltipComponent_Conditional_23_Template, 8, 5, "button", 9);
      \u0275\u0275elementStart(24, "mat-menu", 10, 0);
      \u0275\u0275repeaterCreate(26, UserMenuTooltipComponent_For_27_Template, 6, 2, "button", 11, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 12);
      \u0275\u0275pipe(29, "safe");
      \u0275\u0275element(30, "img", 13);
      \u0275\u0275pipe(31, "safe");
      \u0275\u0275elementStart(32, "div");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c03));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "COMMON.PROFILE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "COMMON.DARK_MODE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dark_mode);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "COMMON.LOGOUT"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 16, "COMMON.UPLOAD_HISTORY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.languages.length > 1 ? 23 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.languages);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", \u0275\u0275pipeBind2(29, 18, ctx.github_link, "url"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", \u0275\u0275pipeBind2(31, 21, ctx.github_icon(), "resource"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 24, "COMMON.REPORT_ISSUE"));
    }
  }, dependencies: [
    IconComponent,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatRippleModule,
    MatRipple,
    MatSlideToggleModule,
    MatSlideToggle,
    RouterModule,
    RouterLink,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    SafePipe
  ], styles: ["\n[type=button][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n  width: 16rem;\n}\n[type=button][_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\nicon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=user-menu-tooltip.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMenuTooltipComponent, [{
    type: Component,
    args: [{ selector: "user-menu-tooltip", template: `
        <div
            class="divide-base-200 border-base-300 bg-base-100 m-2 divide-y rounded-sm border shadow-sm"
        >
            <a
                matRipple
                type="button"
                profile
                [routerLink]="['/users', 'current', 'about']"
                class="space-x-2"
            >
                <icon class="text-2xl">person</icon>
                {{ 'COMMON.PROFILE' | translate }}
            </a>
            <div dark-mode class="flex w-[16rem] items-center p-3">
                <icon class="text-2xl">dark_mode</icon>
                <p class="w-1/2 flex-1">
                    {{ 'COMMON.DARK_MODE' | translate }}
                </p>
                <mat-slide-toggle [(ngModel)]="dark_mode" />
            </div>
            <button
                matRipple
                type="button"
                logout
                class="space-x-2"
                (click)="logout()"
            >
                <icon class="text-2xl">logout</icon>
                {{ 'COMMON.LOGOUT' | translate }}
            </button>
            <button
                matRipple
                type="button"
                class="space-x-2"
                uploads
                (click)="showUploadHistory()"
            >
                <icon class="text-2xl">schedule</icon>
                {{ 'COMMON.UPLOAD_HISTORY' | translate }}
            </button>
            @if (languages.length > 1) {
                <button matRipple type="button" [matMenuTriggerFor]="lang_menu">
                    <icon class="text-2xl">language</icon>
                    <div class="flex-1 text-left">
                        {{ 'COMMON.LANGUAGE' | translate }}
                    </div>
                    <div
                        class="bg-base-200 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                    >
                        {{ active_lang.name }}
                    </div>
                </button>
            }
            <mat-menu #lang_menu="matMenu" xPosition="after" yPosition="above">
                @for (language of languages; track language) {
                    <button
                        mat-menu-item
                        class="w-60"
                        (click)="setLanguage(language.id)"
                    >
                        <div
                            class="flex w-full items-center justify-between space-x-4"
                        >
                            <div>{{ language.name }}</div>
                            <div>{{ language.flag }}</div>
                        </div>
                    </button>
                }
            </mat-menu>
            <a
                matRipple
                type="button"
                target="_blank"
                ref="noopener noreferer"
                report
                [href]="github_link | safe: 'url'"
                class="gap-2"
            >
                <img
                    alt="Github Icon"
                    [src]="github_icon() | safe: 'resource'"
                    class="m-1 flex h-5 max-w-5 items-center justify-center overflow-hidden text-xs"
                />
                <div>{{ 'COMMON.REPORT_ISSUE' | translate }}</div>
            </a>
        </div>
    `, imports: [
      TranslatePipe,
      IconComponent,
      MatMenuModule,
      MatRippleModule,
      MatSlideToggleModule,
      RouterModule,
      SafePipe,
      FormsModule
    ], styles: ["/* angular:styles/component:css;a33c7f0511dc883a5d79591ecdb34cee72d989f9aa4c6fbc07f33570bfbe2230;/home/runner/work/backoffice/backoffice/src/app/ui/user-menu-tooltip.component.ts */\n[type=button] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n  width: 16rem;\n}\n[type=button]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\nicon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=user-menu-tooltip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMenuTooltipComponent, { className: "UserMenuTooltipComponent", filePath: "src/app/ui/user-menu-tooltip.component.ts", lineNumber: 136 });
})();

// src/app/ui/sidebar-menu.component.ts
var _c04 = () => ["/"];
var _c13 = (a0) => [a0];
function SidebarMenuComponent_For_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 17)(3, "icon", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", link_r1.external(), \u0275\u0275sanitizeUrl)("matTooltip", ctx_r1.compact() ? \u0275\u0275pipeBind1(1, 12, link_r1.name) : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 14, link_r1.name), " ");
  }
}
function SidebarMenuComponent_For_10_Conditional_0_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sm:left-1/2", ctx_r1.compact())("sm:right-3", !ctx_r1.compact())("sm:right-auto", ctx_r1.compact())("sm:-translate-x-1/2", ctx_r1.compact());
  }
}
function SidebarMenuComponent_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 17)(3, "icon", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SidebarMenuComponent_For_10_Conditional_0_Conditional_1_Conditional_8_Template, 1, 8, "span", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c13, link_r1.route))("matTooltip", ctx_r1.compact() ? \u0275\u0275pipeBind1(1, 15, link_r1.name) : "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact())("sm:opacity-25", ctx_r1.compact() && ctx_r1.isRouteLoading(link_r1.route));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, link_r1.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isRouteLoading(link_r1.route) ? 8 : -1);
  }
}
function SidebarMenuComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarMenuComponent_For_10_Conditional_0_Conditional_0_Template, 8, 16, "a", 15)(1, SidebarMenuComponent_For_10_Conditional_0_Conditional_1_Template, 9, 21, "a", 16);
  }
  if (rf & 2) {
    const link_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(link_r1.external ? 0 : 1);
  }
}
function SidebarMenuComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarMenuComponent_For_10_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275conditional(!link_r1.show_on || link_r1.show_on() ? 0 : -1);
  }
}
function SidebarMenuComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 7)(1, "div", 17)(2, "icon", 18);
    \u0275\u0275text(3, "apps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Applications");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("content", ctx_r1.application_picker)("matTooltip", ctx_r1.compact() ? "Applications" : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:justify-center", ctx_r1.compact());
    \u0275\u0275advance();
    \u0275\u0275classProp("sm:text-2xl", ctx_r1.compact())("sm:mx-auto", ctx_r1.compact());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sm:hidden", ctx_r1.compact());
  }
}
var SidebarMenuComponent = class _SidebarMenuComponent extends AsyncHandler {
  _tooltip = inject(CustomTooltipData, { optional: true });
  _settings = inject(SettingsService);
  _users = inject(BackofficeUsersService);
  _hotkey = inject(HotkeysService);
  _router = inject(Router);
  open = model(
    true,
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  compact = signal(
    false,
    ...ngDevMode ? [{ debugName: "compact" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading_route = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading_route" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show_application_picker = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_application_picker" }] : (
      /* istanbul ignore next */
      []
    )
  );
  application_picker = ApplicationPickerTooltipComponent;
  user_controls = UserMenuTooltipComponent;
  links = [
    { name: "COMMON.SYSTEMS", route: "/systems", icon: "meeting_room" },
    { name: "COMMON.MODULES", route: "/modules", icon: "tablet" },
    { name: "COMMON.ZONES", route: "/zones", icon: "meeting_room" },
    { name: "COMMON.DRIVERS", route: "/drivers", icon: "construction" },
    { name: "COMMON.REPOS", route: "/repositories", icon: "inventory_2" },
    { name: "COMMON.TRIGGERS", route: "/triggers", icon: "timer" },
    {
      name: "COMMON.ALERTS",
      icon: "notifications_active",
      show_on: () => !!this.alerts_url,
      external: () => this.alerts_url
    },
    {
      name: "COMMON.METRICS",
      icon: "monitoring",
      show_on: () => !!this.metrics_url,
      external: () => this.metrics_url
    },
    {
      name: "COMMON.USERS",
      route: "/users",
      icon: "group",
      show_on: () => this.is_support || this.is_admin
    },
    {
      name: "COMMON.GROUPS",
      route: "/groups",
      icon: "groups",
      show_on: () => this.is_admin
    },
    {
      name: "COMMON.DOMAINS",
      route: "/domains",
      icon: "domain",
      show_on: () => this.is_admin
    },
    {
      name: "COMMON.MANAGE",
      route: "/admin",
      icon: "settings",
      show_on: () => this.is_admin
    }
  ];
  /** Application logo */
  get logo() {
    return this._settings.get("app.logo_light");
  }
  /** List of available menu items for the application */
  get user() {
    return this._users.current();
  }
  get is_admin() {
    return this._users.current().sys_admin;
  }
  get is_support() {
    return this._users.current().support;
  }
  get alerts_url() {
    return St()?.config?.backoffice?.alerts_url;
  }
  get metrics_url() {
    return St()?.config?.backoffice?.metrics_url;
  }
  close = () => this._tooltip?.close();
  toggleCompactMode() {
    this.compact.update((s) => !s);
    localStorage.setItem("BACKOFFICE.SIDEBAR_COMPACT", `${this.compact()}`);
  }
  isRouteLoading(route) {
    return this.loading_route() === route;
  }
  async ngOnInit() {
    this.subscription("route_load", this._router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading_route.set(`/${event.route.path || ""}`);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loading_route.set("");
      }
      if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading_route.set("");
      }
    }));
    this.subscription("up", this._hotkey.listen(["Control", "Shift", "ArrowUp"], () => this.changeSelected(-1)));
    this.subscription("down", this._hotkey.listen(["Control", "Shift", "ArrowDown"], () => this.changeSelected(1)));
    this.compact.set(localStorage.getItem("BACKOFFICE.SIDEBAR_COMPACT") === "true");
    const active_authority = St();
    if (!active_authority?.id)
      return;
    const response = await Xr({
      authority_id: active_authority.id
    }).catch(() => null);
    this.show_application_picker.set(!!(response?.data || []).find((app) => this.isSupportedRedirectUri(app?.redirect_uri)));
  }
  changeSelected(_offset = 1) {
  }
  isSupportedRedirectUri(uri) {
    if (!uri)
      return false;
    try {
      const protocol = new URL(uri, location.origin).protocol;
      return protocol === "http:" || protocol === "https:";
    } catch {
      return false;
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SidebarMenuComponent_BaseFactory;
    return function SidebarMenuComponent_Factory(__ngFactoryType__) {
      return (\u0275SidebarMenuComponent_BaseFactory || (\u0275SidebarMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SidebarMenuComponent)))(__ngFactoryType__ || _SidebarMenuComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarMenuComponent, selectors: [["sidebar-menu"]], inputs: { open: [1, "open"] }, outputs: { open: "openChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 30, consts: [["sidebar-menu", "", 1, "bg-base-200", "pointer-events-none", "absolute", "inset-0", "z-40", "hidden", "h-full", "flex-col", "justify-between", "sm:pointer-events-auto", "sm:relative", "sm:inset-auto", "sm:z-10", "sm:flex", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col", "items-center", "space-y-2"], [1, "font-heading", "mt-4", "ml-16", "text-4xl", "sm:mb-2", "sm:ml-0", 3, "routerLink"], [1, "font-heading", "text-primary"], ["src", "assets/icon/mstile-310x310.png", "alt", "PlaceOS logo", 1, "hidden", "h-12", "w-12"], [1, "w-full", "flex-1", "space-y-2", "overflow-auto", "pb-2"], ["icon", "", "matRipple", "", 1, "absolute", "top-1", "left-1", "sm:hidden", 3, "click"], ["btn", "", "link", "", "matRipple", "", "customTooltip", "", "matTooltipPosition", "right", "yPosition", "bottom", 1, "clear", "hover:bg-base-100", "mx-auto", "mb-2", "w-[calc(100%-1rem)]", "text-left", 3, "content", "matTooltip"], [3, "compact"], ["matRipple", "", "customTooltip", "", "user", "", "yPosition", "bottom", "xPosition", "start", 1, "border-base-300", "flex", "min-h-16", "items-center", "space-x-2", "border-t", "p-2", "text-left", 3, "content"], ["matTooltipPosition", "right", 3, "user", "matTooltip"], [1, "flex", "w-1/2", "flex-1", "flex-col", "leading-tight"], [1, "w-full", "truncate"], [1, "w-full", "truncate", "text-xs", "opacity-30"], ["icon", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "hover:bg-base-200", "absolute", "right-0", "bottom-12", "z-999", "hidden", "h-6", "w-6", "min-w-6", "translate-x-1/2", "rounded-full", "border", "shadow-sm", "sm:flex", 3, "click"], ["btn", "", "link", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", "matTooltipPosition", "right", 1, "clear", "hover:bg-base-100", "mx-auto", "w-[calc(100%-1rem)]", "text-left", 3, "href", "matTooltip"], ["btn", "", "link", "", "matRipple", "", "routerLinkActive", "bg-secondary! text-secondary-content", "matTooltipPosition", "right", 1, "clear", "hover:bg-base-100", "relative", "mx-auto", "w-[calc(100%-1rem)]", "text-left", 3, "routerLink", "matTooltip"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-xl"], [1, "text-xl", "transition-opacity"], ["role", "status", "aria-label", "Loading page", 1, "ml-auto", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current", "sm:absolute", "sm:top-1/2", "sm:ml-0", "sm:-translate-y-1/2", 3, "sm:left-1/2", "sm:right-3", "sm:right-auto", "sm:-translate-x-1/2"], ["role", "status", "aria-label", "Loading page", 1, "ml-auto", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-current/30", "border-t-current", "sm:absolute", "sm:top-1/2", "sm:ml-0", "sm:-translate-y-1/2"]], template: function SidebarMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "a", 2)(3, "div");
      \u0275\u0275text(4, " Place");
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "OS");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275repeaterCreate(9, SidebarMenuComponent_For_10_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_button_click_11_listener() {
        return ctx.open.set(false);
      });
      \u0275\u0275elementStart(12, "icon");
      \u0275\u0275text(13, "close");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(14, SidebarMenuComponent_Conditional_14_Template, 6, 10, "button", 7);
      \u0275\u0275element(15, "debug-info", 8);
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275element(17, "a-user-avatar", 10);
      \u0275\u0275elementStart(18, "div", 11)(19, "div", 12);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function SidebarMenuComponent_Template_button_click_24_listener() {
        return ctx.toggleCompactMode();
      });
      \u0275\u0275elementStart(25, "icon");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("compact", ctx.compact())("sm:w-52", !ctx.compact())("!flex", ctx.open())("pointer-events-auto!", ctx.open());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.compact() ? "auto" : "calc(100%-2rem)");
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(29, _c04));
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:hidden", ctx.compact());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("sm:block", ctx.compact());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.links);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.show_application_picker() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("compact", ctx.compact());
      \u0275\u0275advance();
      \u0275\u0275property("content", ctx.user_controls);
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:pl-2", ctx.compact());
      \u0275\u0275property("user", ctx.user)("matTooltip", ctx.compact() ? ctx.user == null ? null : ctx.user.name : "");
      \u0275\u0275advance();
      \u0275\u0275classProp("sm:hidden", ctx.compact());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user?.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, ctx.user?.sys_admin ? "COMMON.USER_ADMIN" : ctx.user?.support ? "COMMON.USER_SUPPORT" : "COMMON.USER_BASIC"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.compact() ? "chevron_right" : "chevron_left", " ");
    }
  }, dependencies: [
    IconComponent,
    UserAvatarComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    CustomTooltipComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    DebugInfoComponent,
    TranslatePipe
  ], styles: ["\n[sidebar-menu][_ngcontent-%COMP%] {\n  transition: width 200ms;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\n@media screen and (min-width: 512px) {\n  .compact[_ngcontent-%COMP%] {\n    width: 4.5rem;\n  }\n}\n/*# sourceMappingURL=sidebar-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarMenuComponent, [{
    type: Component,
    args: [{ selector: "sidebar-menu", template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <div
            sidebar-menu
            class="bg-base-200 pointer-events-none absolute inset-0 z-40 hidden h-full flex-col justify-between sm:pointer-events-auto sm:relative sm:inset-auto sm:z-10 sm:flex"
            [class.compact]="compact()"
            [class.sm:w-52]="!compact()"
            [class.!flex]="open()"
            [class.pointer-events-auto!]="open()"
            (click)="close()"
        >
            <div class="flex h-1/2 flex-1 flex-col items-center space-y-2">
                <a
                    [routerLink]="['/']"
                    class="font-heading mt-4 ml-16 text-4xl sm:mb-2 sm:ml-0"
                    [style.width]="compact() ? 'auto' : 'calc(100%-2rem)'"
                >
                    <div [class.sm:hidden]="compact()">
                        Place<span class="font-heading text-primary">OS</span>
                    </div>
                    <img
                        src="assets/icon/mstile-310x310.png"
                        class="hidden h-12 w-12"
                        [class.sm:block]="compact()"
                        alt="PlaceOS logo"
                    />
                </a>
                <div class="w-full flex-1 space-y-2 overflow-auto pb-2">
                    @for (link of links; track $index) {
                        @if (!link.show_on || link.show_on()) {
                            @if (link.external) {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 mx-auto w-[calc(100%-1rem)] text-left"
                                    [href]="link.external()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                    </div>
                                </a>
                            } @else {
                                <a
                                    btn
                                    link
                                    matRipple
                                    class="clear hover:bg-base-100 relative mx-auto w-[calc(100%-1rem)] text-left"
                                    [routerLink]="[link.route]"
                                    routerLinkActive="bg-secondary! text-secondary-content"
                                    [matTooltip]="
                                        compact() ? (link.name | translate) : ''
                                    "
                                    matTooltipPosition="right"
                                >
                                    <div
                                        class="flex w-full items-center space-x-2"
                                        [class.sm:justify-center]="compact()"
                                    >
                                        <icon
                                            class="text-xl transition-opacity"
                                            [class.sm:text-2xl]="compact()"
                                            [class.sm:mx-auto]="compact()"
                                            [class.sm:opacity-25]="
                                                compact() &&
                                                isRouteLoading(link.route)
                                            "
                                            >{{ link.icon }}</icon
                                        >
                                        <p [class.sm:hidden]="compact()">
                                            {{ link.name | translate }}
                                        </p>
                                        @if (isRouteLoading(link.route)) {
                                            <span
                                                role="status"
                                                aria-label="Loading page"
                                                class="ml-auto h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current sm:absolute sm:top-1/2 sm:ml-0 sm:-translate-y-1/2"
                                                [class.sm:left-1/2]="compact()"
                                                [class.sm:right-3]="!compact()"
                                                [class.sm:right-auto]="compact()"
                                                [class.sm:-translate-x-1/2]="
                                                    compact()
                                                "
                                            ></span>
                                        }
                                    </div>
                                </a>
                            }
                        }
                    }
                    <button
                        class="absolute top-1 left-1 sm:hidden"
                        icon
                        matRipple
                        (click)="open.set(false)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            </div>
            @if (show_application_picker()) {
                <button
                    btn
                    link
                    matRipple
                    customTooltip
                    class="clear hover:bg-base-100 mx-auto mb-2 w-[calc(100%-1rem)] text-left"
                    [content]="application_picker"
                    [matTooltip]="compact() ? 'Applications' : ''"
                    matTooltipPosition="right"
                    yPosition="bottom"
                >
                    <div
                        class="flex w-full items-center space-x-2"
                        [class.sm:justify-center]="compact()"
                    >
                        <icon
                            class="text-xl"
                            [class.sm:text-2xl]="compact()"
                            [class.sm:mx-auto]="compact()"
                            >apps</icon
                        >
                        <p [class.sm:hidden]="compact()">Applications</p>
                    </div>
                </button>
            }
            <debug-info [compact]="compact()" />
            <button
                matRipple
                class="border-base-300 flex min-h-16 items-center space-x-2 border-t p-2 text-left"
                customTooltip
                user
                [content]="user_controls"
                yPosition="bottom"
                xPosition="start"
            >
                <a-user-avatar [user]="user"
                    [class.sm:pl-2]="compact()"
                    [matTooltip]="compact() ? $safeNavigationMigration(user?.name) : ''"
                    matTooltipPosition="right"
                 />
                <div
                    class="flex w-1/2 flex-1 flex-col leading-tight"
                    [class.sm:hidden]="compact()"
                >
                    <div class="w-full truncate">{{ user?.name }}</div>
                    <div class="w-full truncate text-xs opacity-30">
                        {{
                            (user?.sys_admin
                                ? 'COMMON.USER_ADMIN'
                                : user?.support
                                  ? 'COMMON.USER_SUPPORT'
                                  : 'COMMON.USER_BASIC'
                            ) | translate
                        }}
                    </div>
                </div>
            </button>
            <button
                icon
                matRipple
                class="border-base-200 bg-base-100 hover:bg-base-200 absolute right-0 bottom-12 z-999 hidden h-6 w-6 min-w-6 translate-x-1/2 rounded-full border shadow-sm sm:flex"
                (click)="toggleCompactMode()"
            >
                <icon>
                    {{ compact() ? 'chevron_right' : 'chevron_left' }}
                </icon>
            </button>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      MatRippleModule,
      MatTooltipModule,
      CustomTooltipComponent,
      RouterModule,
      DebugInfoComponent
    ], styles: ["/* angular:styles/component:css;3d279d646b35e672e2b8e6ef5d55f533fac4601c8f33a2be8bb9af4e2f3a813d;/home/runner/work/backoffice/backoffice/src/app/ui/sidebar-menu.component.ts */\n[sidebar-menu] {\n  transition: width 200ms;\n}\n.active {\n  background-color: var(--secondary);\n  color: var(--secondary-content);\n}\n@media screen and (min-width: 512px) {\n  .compact {\n    width: 4.5rem;\n  }\n}\n/*# sourceMappingURL=sidebar-menu.component.css.map */\n"] }]
  }], null, { open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }, { type: Output, args: ["openChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarMenuComponent, { className: "SidebarMenuComponent", filePath: "src/app/ui/sidebar-menu.component.ts", lineNumber: 249 });
})();

// src/app/ui/virtual-scroll.component.ts
var _c05 = ["scroll_container"];
var _c14 = ["*"];
var _c2 = (a0, a1) => ({ item: a0, index: a1 });
function _forTrack02($index, $item) {
  return $index + this.offset_start();
}
function VirtualScrollComponent_For_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VirtualScrollComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, VirtualScrollComponent_For_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_5_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", (ctx_r2.offset_start() + \u0275$index_5_r2) * ctx_r2.item_size() + "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.item_template())("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, item_r1, ctx_r2.offset_start() + \u0275$index_5_r2));
  }
}
var VirtualScrollComponent = class _VirtualScrollComponent {
  items = input(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item_size = input(
    0,
    ...ngDevMode ? [{ debugName: "item_size" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item_template = input(
    null,
    ...ngDevMode ? [{ debugName: "item_template" }] : (
      /* istanbul ignore next */
      []
    )
  );
  buffer = input(
    2,
    ...ngDevMode ? [{ debugName: "buffer" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scrolled = output();
  range = signal(
    0,
    ...ngDevMode ? [{ debugName: "range" }] : (
      /* istanbul ignore next */
      []
    )
  );
  offset = signal(
    0,
    ...ngDevMode ? [{ debugName: "offset" }] : (
      /* istanbul ignore next */
      []
    )
  );
  extra_height = signal(
    0,
    ...ngDevMode ? [{ debugName: "extra_height" }] : (
      /* istanbul ignore next */
      []
    )
  );
  offset_start = computed(
    () => Math.max(this.offset() - this.buffer(), 0),
    ...ngDevMode ? [{ debugName: "offset_start" }] : (
      /* istanbul ignore next */
      []
    )
  );
  offset_end = computed(
    () => this.offset_start() + (this.range() + 2 * (this.buffer() || 2)),
    ...ngDevMode ? [{ debugName: "offset_end" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scroll_area = computed(
    () => this.items().length * this.item_size() + this.extra_height(),
    ...ngDevMode ? [{ debugName: "scroll_area" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _el = inject(ElementRef);
  _scroll_container_el = viewChild(
    "scroll_container",
    ...ngDevMode ? [{ debugName: "_scroll_container_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _resize_observer;
  ngAfterViewInit() {
    this.updateContainer();
    this._resize_observer = new ResizeObserver(() => this.updateContainer());
    this._resize_observer.observe(this._el.nativeElement);
  }
  ngOnDestroy() {
    this._resize_observer?.disconnect();
  }
  updateOffsets() {
    const el = this._scroll_container_el()?.nativeElement;
    if (!el)
      return;
    const scroll_top = el.scrollTop;
    this.offset.set(Math.floor(scroll_top / this.item_size()));
    this.scrolled.emit([this.offset(), this.offset() + this.range()]);
  }
  updateContainer() {
    const el = this._el?.nativeElement;
    if (!el)
      return;
    const box = el.getBoundingClientRect();
    this.range.set(Math.ceil(box.height / this.item_size()));
  }
  scrollToIndex(index) {
    const el = this._scroll_container_el()?.nativeElement;
    if (!el)
      return;
    el.scrollTop = index * this.item_size();
    this.updateOffsets();
  }
  static \u0275fac = function VirtualScrollComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VirtualScrollComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualScrollComponent, selectors: [["virtual-scroll"]], viewQuery: function VirtualScrollComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._scroll_container_el, _c05, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { items: [1, "items"], item_size: [1, "item_size"], item_template: [1, "item_template"], buffer: [1, "buffer"] }, outputs: { scrolled: "scrolled" }, ngContentSelectors: _c14, decls: 7, vars: 6, consts: [["scroll_container", ""], [1, "relative", "h-full", "w-full", "overflow-auto", 3, "scroll"], ["scroll-fill", "", 1, "w-full"], [1, "absolute", "w-full", 3, "top"], [1, "absolute", "w-full"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function VirtualScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275listener("scroll", function VirtualScrollComponent_Template_div_scroll_0_listener() {
        return ctx.updateOffsets();
      });
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275repeaterCreate(3, VirtualScrollComponent_For_4_Template, 2, 7, "div", 3, _forTrack02, true);
      \u0275\u0275pipe(5, "slice");
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.scroll_area() + "px");
      \u0275\u0275advance();
      \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 2, ctx.items(), ctx.offset_start(), ctx.offset_end()));
    }
  }, dependencies: [NgTemplateOutlet, SlicePipe], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=virtual-scroll.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualScrollComponent, [{
    type: Component,
    args: [{ selector: "virtual-scroll", template: `
        <div
            #scroll_container
            class="relative h-full w-full overflow-auto"
            (scroll)="updateOffsets()"
        >
            <div
                scroll-fill
                class="w-full"
                [style.height]="scroll_area() + 'px'"
            ></div>
            @for (
                item of items() | slice: offset_start() : offset_end();
                track $index + offset_start();
                let i = $index
            ) {
                <div
                    class="absolute w-full"
                    [style.top]="(offset_start() + i) * item_size() + 'px'"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            item_template();
                            context: { item, index: offset_start() + i }
                        "
                    />
                </div>
            }
            <ng-content />
        </div>
    `, imports: [NgTemplateOutlet, SlicePipe], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/ui/virtual-scroll.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=virtual-scroll.component.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], item_size: [{ type: Input, args: [{ isSignal: true, alias: "item_size", required: false }] }], item_template: [{ type: Input, args: [{ isSignal: true, alias: "item_template", required: false }] }], buffer: [{ type: Input, args: [{ isSignal: true, alias: "buffer", required: false }] }], scrolled: [{ type: Output, args: ["scrolled"] }], _scroll_container_el: [{ type: ViewChild, args: ["scroll_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualScrollComponent, { className: "VirtualScrollComponent", filePath: "src/app/ui/virtual-scroll.component.ts", lineNumber: 59 });
})();

export {
  VirtualScrollComponent,
  SidebarMenuComponent
};
//# sourceMappingURL=chunk-RLYDWON4.js.map
