import {
  DebugOutputComponent
} from "./chunk-AXEIG4MO.js";
import {
  SidebarMenuComponent
} from "./chunk-F3RLKEPC.js";
import "./chunk-OXAXQQK2.js";
import {
  PlaceDebugService
} from "./chunk-KBEYDVID.js";
import "./chunk-2T46XZ5D.js";
import "./chunk-JQPIEPHX.js";
import {
  extensionsForItem
} from "./chunk-BT4P2UYZ.js";
import {
  ActiveItemService
} from "./chunk-RQMBRM3E.js";
import "./chunk-E3FX3XNV.js";
import "./chunk-7KUBYGZM.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-UT62HJMS.js";
import "./chunk-QCF7OBQH.js";
import "./chunk-B7F6FUDL.js";
import "./chunk-D7LNWC5R.js";
import "./chunk-SPITTCPX.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-LQK4CTL2.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-T7AMAKFI.js";
import "./chunk-7ICEG2QL.js";
import "./chunk-5G4S7L2B.js";
import "./chunk-35WA4BE5.js";
import "./chunk-KBNVNIYI.js";
import "./chunk-YDXVJGO5.js";
import "./chunk-NWZSQ647.js";
import "./chunk-5ZBBWEMN.js";
import {
  SettingsService
} from "./chunk-D7A7S3DF.js";
import "./chunk-3ONUAWGE.js";
import "./chunk-GPHMWQA5.js";
import {
  AsyncHandler
} from "./chunk-E2Z2L4DB.js";
import "./chunk-UXBWGFXU.js";
import {
  i18n
} from "./chunk-K5ZKBMLV.js";
import "./chunk-NTBPKOUQ.js";
import "./chunk-2OZGU35U.js";
import "./chunk-AOPYKUKV.js";
import "./chunk-P3FA5CPP.js";
import {
  IconComponent
} from "./chunk-4DJN4BL5.js";
import "./chunk-4H5SLVMO.js";
import {
  MatRippleModule
} from "./chunk-BSFQAEYP.js";
import {
  MatRipple
} from "./chunk-KGK5S2XS.js";
import "./chunk-6LJH4E32.js";
import "./chunk-E4EJUBGE.js";
import "./chunk-BOUIQ3F6.js";
import "./chunk-2VXJJPLQ.js";
import "./chunk-7ONBXR6Y.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YCZTZCQV.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/admin.component.ts
var _c0 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
function PlaceComponent_For_6_Template(rf, ctx) {
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
function PlaceComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 8);
  }
}
function PlaceComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 9);
  }
}
var PlaceComponent = class _PlaceComponent extends AsyncHandler {
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceComponent_BaseFactory;
    return function PlaceComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceComponent_BaseFactory || (\u0275PlaceComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceComponent)))(__ngFactoryType__ || _PlaceComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceComponent, selectors: [["app-engine"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "z-0", "flex", "h-1/2", "flex-1"], [1, "border-base-200", "relative", "z-10", "h-full", "space-y-2", "overflow-auto", "border-r", "px-2", "pt-10", "sm:w-56", "sm:py-4"], ["btn", "", "matRipple", "", "routerLinkActive", "bg-secondary! text-secondary-content", 1, "clear", "hover:bg-base-200", "w-auto", "min-w-full", "text-left", 3, "routerLink", "queryParams"], [1, "relative", "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "left-4", "z-40", "mr-2", "sm:hidden", 3, "click"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-2xl", 3, "icon"], [1, "hidden", "sm:block"]], template: function PlaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "sidebar-menu", 1);
      \u0275\u0275twoWayListener("openChange", function PlaceComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275repeaterCreate(5, PlaceComponent_For_6_Template, 5, 5, "a", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275element(8, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275listener("click", function PlaceComponent_Template_button_click_9_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, PlaceComponent_Conditional_12_Template, 1, 0, "app-debug-output", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, PlaceComponent_Conditional_13_Template, 1, 0, "app-debug-output", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.tab_list());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 13 : -1);
    }
  }, dependencies: [
    DebugOutputComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    SidebarMenuComponent,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--%NS%secondary) !important;\n  color: var(--%NS%secondary-content);\n  margin-right: -1px;\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
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
                    <div
                        class="border-base-200 relative z-10 h-full space-y-2 overflow-auto border-r px-2 pt-10 sm:w-56 sm:py-4"
                    >
                        @for (item of tab_list(); track item.id) {
                            <a
                                btn
                                matRipple
                                class="clear hover:bg-base-200 w-auto min-w-full text-left"
                                [routerLink]="'/admin/' + item.id"
                                [queryParams]="item.query || {}"
                                routerLinkActive="bg-secondary! text-secondary-content"
                            >
                                <div class="flex w-full items-center space-x-2">
                                    <icon class="text-2xl" [icon]="item.icon" />
                                    <span class="hidden sm:block">{{
                                        item.name
                                    }}</span>
                                </div>
                            </a>
                        }
                    </div>
                    <div class="relative z-0 h-full w-1/2 flex-1 overflow-auto">
                        <router-outlet />
                    </div>
                    <button
                        icon
                        matRipple
                        class="absolute top-2 left-4 z-40 mr-2 sm:hidden"
                        (click)="open_menu = true"
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
      DebugOutputComponent,
      IconComponent,
      MatRippleModule,
      SidebarMenuComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;4c34848e81ecf6b9b7778d73257c8028c151a626667041ab096a4ba75a794d73;/home/runner/work/backoffice/backoffice/src/app/admin/admin.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.active {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n  margin-right: -1px;\n}\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceComponent, { className: "PlaceComponent", filePath: "src/app/admin/admin.component.ts", lineNumber: 91 });
})();
export {
  PlaceComponent
};
//# debugId=d4487080-358e-5400-b41d-409202288b78
//# sourceMappingURL=chunk-2RVCHWHB.js.map
