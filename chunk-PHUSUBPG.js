import {
  DebugOutputComponent,
  SidebarMenuComponent
} from "./chunk-UYNPLEF4.js";
import "./chunk-PDTMS6JL.js";
import {
  PlaceDebugService
} from "./chunk-PVL5NDFP.js";
import "./chunk-MXXQVKJB.js";
import "./chunk-OTQ2ODNX.js";
import {
  extensionsForItem
} from "./chunk-SDERNRDS.js";
import "./chunk-5TFFP5TN.js";
import "./chunk-5PG3435R.js";
import {
  ActiveItemService
} from "./chunk-L7KA5OCT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-UKX5GNV3.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-REIDPTXZ.js";
import "./chunk-XSBVNB3I.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import {
  SettingsService
} from "./chunk-3P3QAPUV.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-52RBTZMB.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/admin.component.ts
var _c0 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
function PlaceComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 10);
    \u0275\u0275element(2, "icon", 11);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", "/admin/" + item_r1.id)("queryParams", item_r1.query || \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
  }
}
function PlaceComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 8);
  }
}
function PlaceComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 9);
  }
}
var PlaceComponent = class _PlaceComponent {
  _settings = inject(SettingsService);
  _service = inject(ActiveItemService);
  _debug = inject(PlaceDebugService);
  open_menu = false;
  debug_position = this._debug.position;
  tab_list = computed(
    () => [
      {
        id: "about",
        name: i18n("ADMIN.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "database",
        name: i18n("ADMIN.TAB_DATABASE"),
        icon: { content: "database" }
      },
      {
        id: "clusters",
        name: i18n("ADMIN.TAB_CLUSTERS"),
        icon: { content: "dns" }
      },
      {
        id: "edge",
        name: i18n("ADMIN.TAB_EDGES"),
        icon: { content: "network_node" }
      },
      {
        id: "interfaces",
        name: i18n("ADMIN.TAB_INTERFACES"),
        icon: { content: "web" }
      },
      {
        id: "brokers",
        name: i18n("ADMIN.TAB_MQTT_BROKERS"),
        icon: { content: "sensors" }
      },
      {
        id: "staff-api",
        name: i18n("ADMIN.TAB_TENANT_CONFIG"),
        icon: { content: "api" }
      },
      {
        id: "resource-imports",
        name: i18n("ADMIN.TAB_RESOURCE_IMPORTS"),
        icon: { content: "publish" }
      },
      {
        id: "extensions",
        name: i18n("ADMIN.TAB_EXTENSIONS"),
        icon: { content: "webhook" }
      },
      {
        id: "api-keys",
        name: i18n("ADMIN.TAB_API_KEYS"),
        icon: { content: "key" }
      },
      {
        id: "schemas",
        name: i18n("ADMIN.TAB_CUSTOM_SCHEMAS"),
        icon: { content: "list" }
      },
      {
        id: "upload-storage",
        name: i18n("ADMIN.TAB_UPLOAD_STORAGE"),
        icon: { content: "cloud_upload" }
      },
      {
        id: "upload-library",
        name: i18n("ADMIN.TAB_UPLOADS_LIBRARY"),
        icon: { content: "photo_album" }
      },
      {
        id: "signage-ai",
        name: i18n("ADMIN.TAB_SIGNAGE_AI"),
        icon: { content: "auto_awesome" }
      },
      {
        id: "signage-plugins",
        name: i18n("ADMIN.TAB_SIGNAGE_PLUGINS"),
        icon: { content: "display_settings" }
      },
      {
        id: "build-jobs",
        name: i18n("ADMIN.TAB_BUILD_JOBS"),
        icon: { content: "laps" }
      }
    ].concat(extensionsForItem(this._service.item(), "admin")),
    ...ngDevMode ? [{ debugName: "tab_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    this._settings.title = i18n("ADMIN.TITLE");
  }
  static \u0275fac = function PlaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceComponent, selectors: [["app-engine"]], decls: 16, vars: 9, consts: [[1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "z-0", "flex", "h-1/2", "flex-1"], ["admin-nav", "", 1, "border-base-200", "relative", "z-10", "h-full", "space-y-2", "overflow-auto", "border-r", "px-2", "pt-10", "sm:w-56", "sm:py-4"], ["btn", "", "ripple", "", "routerLinkActive", "bg-secondary! text-secondary-content", "ariaCurrentWhenActive", "page", 1, "clear", "hover:bg-base-200", "w-auto", "min-w-full", "text-left", 3, "routerLink", "queryParams"], ["id", "main-content", "tabindex", "-1", "page-transition", "", 1, "relative", "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto", "outline-none"], ["icon", "", "ripple", "", 1, "absolute", "top-2", "left-4", "z-40", "mr-2", "sm:hidden", 3, "click"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-2xl", 3, "icon"], [1, "hidden", "sm:block"]], template: function PlaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "sidebar-menu", 1);
      \u0275\u0275twoWayListener("openChange", function PlaceComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "nav", 4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275repeaterCreate(6, PlaceComponent_For_7_Template, 5, 5, "a", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "main", 6);
      \u0275\u0275element(9, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("click", function PlaceComponent_Template_button_click_10_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(12, "icon");
      \u0275\u0275text(13, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, PlaceComponent_Conditional_14_Template, 1, 0, "app-debug-output", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, PlaceComponent_Conditional_15_Template, 1, 0, "app-debug-output", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 5, "COMMON.MANAGE"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tab_list());
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 7, "COMMON.MENU"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 15 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    SidebarMenuComponent,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceComponent, [{
    type: Component,
    args: [{ selector: "app-engine", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="z-0 flex h-1/2 flex-1">
                    <nav
                        admin-nav
                        class="border-base-200 relative z-10 h-full space-y-2 overflow-auto border-r px-2 pt-10 sm:w-56 sm:py-4"
                        [attr.aria-label]="'COMMON.MANAGE' | translate"
                    >
                        @for (item of tab_list(); track item.id) {
                            <a
                                btn
                                ripple
                                class="clear hover:bg-base-200 w-auto min-w-full text-left"
                                [routerLink]="'/admin/' + item.id"
                                [queryParams]="item.query || {}"
                                routerLinkActive="bg-secondary! text-secondary-content"
                                ariaCurrentWhenActive="page"
                            >
                                <div class="flex w-full items-center space-x-2">
                                    <icon class="text-2xl" [icon]="item.icon" />
                                    <span class="hidden sm:block">{{
                                        item.name
                                    }}</span>
                                </div>
                            </a>
                        }
                    </nav>
                    <main
                        id="main-content"
                        tabindex="-1"
                        page-transition
                        class="relative z-0 h-full w-1/2 flex-1 overflow-auto outline-none"
                    >
                        <router-outlet />
                    </main>
                    <button
                        icon
                        ripple
                        class="absolute top-2 left-4 z-40 mr-2 sm:hidden"
                        (click)="open_menu = true"
                        [attr.aria-label]="'COMMON.MENU' | translate"
                    >
                        <icon>menu</icon>
                    </button>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below />
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output side class="h-full max-w-120" />
            }
        </div>
    `, imports: [
      TranslatePipe,
      DebugOutputComponent,
      IconComponent,
      SidebarMenuComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;fe6353a3f293fb7f;/home/runner/work/backoffice/backoffice/src/app/admin/admin.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceComponent, { className: "PlaceComponent", filePath: "src/app/admin/admin.component.ts", lineNumber: 93 });
})();
export {
  PlaceComponent
};
//# debugId=cc03fc26-071e-515c-a69b-f28223e93445
//# sourceMappingURL=chunk-PHUSUBPG.js.map
