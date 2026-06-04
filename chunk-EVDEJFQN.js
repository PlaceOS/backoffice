import {
  DebugOutputComponent
} from "./chunk-UPUGDFT7.js";
import {
  extensionsForItem
} from "./chunk-UU4RW63F.js";
import {
  SidebarMenuComponent
} from "./chunk-65MR5QM6.js";
import "./chunk-I3YRWUVK.js";
import {
  PlaceDebugService
} from "./chunk-JDMH52T5.js";
import "./chunk-EK2IIETP.js";
import "./chunk-F4I3ONRR.js";
import {
  ActiveItemService
} from "./chunk-ZJJKOGSE.js";
import "./chunk-J533RESC.js";
import "./chunk-Y4CFRGFT.js";
import "./chunk-7GTPBWD4.js";
import "./chunk-KZO2OZUY.js";
import "./chunk-5DYDWWDW.js";
import "./chunk-PFP5GBI7.js";
import "./chunk-WGBPIGQD.js";
import "./chunk-TG7MI555.js";
import "./chunk-UHEQKETH.js";
import "./chunk-KMTGRH5S.js";
import "./chunk-MKUNKECS.js";
import "./chunk-MUO7ALH5.js";
import "./chunk-MRAJXLIZ.js";
import "./chunk-DTCPP7I4.js";
import "./chunk-SYFVYOP6.js";
import "./chunk-FDVXWCJC.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-SH4SZQVY.js";
import "./chunk-TYZFLJYX.js";
import "./chunk-4ZFVXULA.js";
import "./chunk-DKBIML2S.js";
import "./chunk-6HFZ2LJV.js";
import "./chunk-AVP547Y3.js";
import "./chunk-T6JVNKEV.js";
import {
  BackofficeUsersService
} from "./chunk-SUN6RQVP.js";
import {
  SettingsService
} from "./chunk-P7JOU2IV.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-NKHB33NT.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-OMTFMYK4.js";
import "./chunk-Z3EKRGVK.js";
import {
  AsyncHandler
} from "./chunk-5P6RE4SY.js";
import {
  MatRippleModule
} from "./chunk-IZKGHFEC.js";
import "./chunk-OKKLVLNZ.js";
import {
  i18n
} from "./chunk-YQWUAWSB.js";
import {
  IconComponent
} from "./chunk-ZHEO2T5Y.js";
import "./chunk-WL7ZLVLT.js";
import {
  MatRipple
} from "./chunk-3WFHRON7.js";
import {
  Component,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-46M7K5TF.js";
import {
  timer
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/admin/admin.component.ts
var _c0 = (a0) => ["/admin", a0];
var _forTrack0 = ($index, $item) => $item.id;
function PlaceComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 10)(2, "icon", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, item_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.icon == null ? null : item_r1.icon.value);
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
  _users = inject(BackofficeUsersService);
  _debug = inject(PlaceDebugService);
  tab_list = [];
  open_menu = false;
  debug_position = this._debug.position;
  get extensions() {
    return extensionsForItem(this._service.active_item, "admin");
  }
  get dark_mode() {
    return this._users.dark_mode;
  }
  updateTabList() {
    this.tab_list = [
      {
        id: "about",
        name: i18n("ADMIN.TAB_ABOUT"),
        icon: { value: "info" }
      },
      {
        id: "database",
        name: i18n("ADMIN.TAB_DATABASE"),
        icon: { value: "database" }
      },
      {
        id: "clusters",
        name: i18n("ADMIN.TAB_CLUSTERS"),
        icon: { value: "dns" }
      },
      {
        id: "edge",
        name: i18n("ADMIN.TAB_EDGES"),
        icon: { value: "network_node" }
      },
      {
        id: "interfaces",
        name: i18n("ADMIN.TAB_INTERFACES"),
        icon: { value: "web" }
      },
      {
        id: "brokers",
        name: i18n("ADMIN.TAB_MQTT_BROKERS"),
        icon: { value: "sensors" }
      },
      {
        id: "staff-api",
        name: i18n("ADMIN.TAB_TENANT_CONFIG"),
        icon: { value: "api" }
      },
      {
        id: "resource-imports",
        name: i18n("ADMIN.TAB_RESOURCE_IMPORTS"),
        icon: { value: "publish" }
      },
      {
        id: "extensions",
        name: i18n("ADMIN.TAB_EXTENSIONS"),
        icon: { value: "webhook" }
      },
      {
        id: "api-keys",
        name: i18n("ADMIN.TAB_API_KEYS"),
        icon: { value: "key" }
      },
      {
        id: "schemas",
        name: i18n("ADMIN.TAB_CUSTOM_SCHEMAS"),
        icon: { value: "list" }
      },
      {
        id: "upload-storage",
        name: i18n("ADMIN.TAB_UPLOAD_STORAGE"),
        icon: { value: "cloud_upload" }
      },
      {
        id: "upload-library",
        name: i18n("ADMIN.TAB_UPLOADS_LIBRARY"),
        icon: { value: "photo_album" }
      },
      {
        id: "signage-plugins",
        name: i18n("ADMIN.TAB_SIGNAGE_PLUGINS"),
        icon: { value: "display_settings" }
      },
      {
        id: "build-jobs",
        name: i18n("ADMIN.TAB_BUILD_JOBS"),
        icon: { value: "laps" }
      }
      // {
      //     id: 'mailing-list',
      //     name: 'Email Templates',
      //     icon: { value: 'email' },
      // },
    ].concat(this.extensions);
  }
  async ngOnInit() {
    this.updateTabList();
    await timer(1e3).toPromise();
    this._settings.title = i18n("ADMIN.TITLE");
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceComponent_BaseFactory;
    return function PlaceComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceComponent_BaseFactory || (\u0275PlaceComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceComponent)))(__ngFactoryType__ || _PlaceComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceComponent, selectors: [["app-engine"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "divide-base-200", "bg-base-100", "absolute", "inset-0", "flex", "items-center", "divide-y", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "z-0", "flex", "h-1/2", "flex-1"], [1, "border-base-200", "relative", "z-10", "h-full", "space-y-2", "overflow-auto", "border-r", "px-2", "pt-10", "sm:w-56", "sm:py-4"], ["btn", "", "matRipple", "", "routerLinkActive", "bg-secondary! text-secondary-content", 1, "clear", "hover:bg-base-200", "w-auto", "min-w-full", "text-left", 3, "routerLink"], [1, "relative", "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "left-4", "z-40", "mr-2", "sm:hidden", 3, "click"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-2xl"], [1, "hidden", "sm:block"]], template: function PlaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "sidebar-menu", 1);
      \u0275\u0275twoWayListener("openChange", function PlaceComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275repeaterCreate(5, PlaceComponent_For_6_Template, 6, 5, "a", 5, _forTrack0);
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
      \u0275\u0275repeater(ctx.tab_list);
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n  margin-right: -1px;\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceComponent, [{
    type: Component,
    args: [{ selector: "app-engine", template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="z-0 flex h-1/2 flex-1">
                    <div
                        class="border-base-200 relative z-10 h-full space-y-2 overflow-auto border-r px-2 pt-10 sm:w-56 sm:py-4"
                    >
                        @for (item of tab_list; track item.id) {
                            <a
                                btn
                                matRipple
                                class="clear hover:bg-base-200 w-auto min-w-full text-left"
                                [routerLink]="['/admin', item.id]"
                                routerLinkActive="bg-secondary! text-secondary-content"
                            >
                                <div class="flex w-full items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        item.icon?.value
                                    }}</icon>
                                    <span class="hidden sm:block">{{
                                        item.name
                                    }}</span>
                                </div>
                            </a>
                        }
                    </div>
                    <div class="relative z-0 h-full w-1/2 flex-1 overflow-auto">
                        <router-outlet></router-outlet>
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
      DebugOutputComponent,
      IconComponent,
      MatRippleModule,
      SidebarMenuComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;4c34848e81ecf6b9b7778d73257c8028c151a626667041ab096a4ba75a794d73;/home/runner/work/backoffice/backoffice/src/app/admin/admin.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.active {\n  background-color: var(--secondary) !important;\n  color: var(--secondary-content);\n  margin-right: -1px;\n}\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceComponent, { className: "PlaceComponent", filePath: "src/app/admin/admin.component.ts", lineNumber: 96 });
})();
export {
  PlaceComponent
};
//# sourceMappingURL=chunk-EVDEJFQN.js.map
