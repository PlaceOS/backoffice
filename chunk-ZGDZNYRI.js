import {
  DebugOutputComponent
} from "./chunk-APGJOISP.js";
import {
  SidebarMenuComponent
} from "./chunk-YLM7WFLK.js";
import "./chunk-GWCE5UXW.js";
import {
  PlaceDebugService
} from "./chunk-J2U2IXRA.js";
import {
  extensionsForItem
} from "./chunk-WBLR373M.js";
import "./chunk-K6RPAWNX.js";
import {
  ActiveItemService
} from "./chunk-GBS56EXV.js";
import "./chunk-ZQDZ4P3A.js";
import "./chunk-J533RESC.js";
import "./chunk-NSNXXASA.js";
import "./chunk-UM3WNNMW.js";
import "./chunk-LGPP2H5A.js";
import "./chunk-IQ3ZWEXJ.js";
import "./chunk-LIMU3SEN.js";
import "./chunk-UCNDKOJV.js";
import "./chunk-DV6VICSN.js";
import "./chunk-4GAF3GQG.js";
import "./chunk-PZ66W5KC.js";
import "./chunk-TM4V3C5C.js";
import "./chunk-5XCHDAM3.js";
import "./chunk-KWUQFCBO.js";
import "./chunk-PUYRIMA6.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-HLPJDMLG.js";
import "./chunk-JGKWW7VX.js";
import "./chunk-2N4WVO5O.js";
import "./chunk-BFILZFNY.js";
import "./chunk-GWVX43QP.js";
import {
  BackofficeUsersService
} from "./chunk-ZDBP7OUD.js";
import {
  SettingsService
} from "./chunk-QMI3AHNO.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-WF6YZHUO.js";
import "./chunk-BKRK4NUB.js";
import {
  AsyncHandler
} from "./chunk-RAVBIGYQ.js";
import "./chunk-2WXWFTBN.js";
import {
  IconComponent
} from "./chunk-POU26KIO.js";
import "./chunk-X6AVAIR4.js";
import "./chunk-ZMPXDLFL.js";
import "./chunk-ZDWHOOB3.js";
import {
  MatRippleModule
} from "./chunk-VDOGH5QV.js";
import {
  i18n
} from "./chunk-GUX2IT3J.js";
import "./chunk-2VKYFPZX.js";
import {
  MatRipple
} from "./chunk-47BQ5GYC.js";
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
} from "./chunk-HTG7JMGL.js";
import {
  timer
} from "./chunk-72HWXKQ6.js";
import "./chunk-VYXW4D3Z.js";

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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceComponent, selectors: [["app-engine"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "z-0", "flex", "h-1/2", "flex-1"], [1, "relative", "z-10", "h-full", "space-y-2", "overflow-auto", "border-r", "border-base-200", "px-2", "pt-10", "sm:w-56", "sm:py-4"], ["btn", "", "matRipple", "", "routerLinkActive", "bg-secondary! text-secondary-content", 1, "clear", "w-auto", "min-w-full", "text-left", "hover:bg-base-200", 3, "routerLink"], [1, "relative", "z-0", "h-full", "w-1/2", "flex-1", "overflow-auto"], ["icon", "", "matRipple", "", 1, "absolute", "left-4", "top-2", "z-40", "mr-2", "sm:hidden", 3, "click"], ["below", ""], ["side", "", 1, "h-full", "max-w-120"], [1, "flex", "w-full", "items-center", "space-x-2"], [1, "text-2xl"], [1, "hidden", "sm:block"]], template: function PlaceComponent_Template(rf, ctx) {
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
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="z-0 flex h-1/2 flex-1">
                    <div
                        class="relative z-10 h-full space-y-2 overflow-auto border-r border-base-200 px-2 pt-10 sm:w-56 sm:py-4"
                    >
                        @for (item of tab_list; track item.id) {
                            <a
                                btn
                                matRipple
                                class="clear w-auto min-w-full text-left hover:bg-base-200"
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
                        class="absolute left-4 top-2 z-40 mr-2 sm:hidden"
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
//# sourceMappingURL=chunk-ZGDZNYRI.js.map
