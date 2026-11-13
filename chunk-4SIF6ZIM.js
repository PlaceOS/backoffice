import {
  ZonesStateService
} from "./chunk-XFDGXQDY.js";
import "./chunk-3MVPJ5KO.js";
import {
  ExecuteMethodFieldComponent
} from "./chunk-JHAOQXZH.js";
import "./chunk-F6G2Y5FY.js";
import "./chunk-X2O3T64J.js";
import {
  MarkdownPipe
} from "./chunk-VINI7ES4.js";
import {
  ItemTimestampsComponent
} from "./chunk-UT4IZ5N4.js";
import {
  SettingsFormComponent
} from "./chunk-Z3GFBQM6.js";
import "./chunk-AGWUVGXX.js";
import "./chunk-GEOS7XT5.js";
import "./chunk-JSUCE7YJ.js";
import "./chunk-PWWITZ5J.js";
import "./chunk-S2SB26WJ.js";
import "./chunk-UN3MBNJH.js";
import "./chunk-SDERNRDS.js";
import "./chunk-EOOX537V.js";
import "./chunk-7P3E6HEO.js";
import "./chunk-QJT4A7RT.js";
import "./chunk-YMSUF7BT.js";
import "./chunk-WW4MOCD2.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-73ZIQ5ZT.js";
import "./chunk-3SEQSBXV.js";
import "./chunk-NSPWPCTJ.js";
import "./chunk-7UHZOKRJ.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import {
  SpinnerComponent
} from "./chunk-WWSSYZEA.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import "./chunk-2LLCGR7C.js";
import "./chunk-XSBVNB3I.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LL56AHAM.js";
import "./chunk-2DKDRFBI.js";
import "./chunk-LJNKRCR4.js";
import "./chunk-4VR6R4OK.js";
import "./chunk-CKZDCKLD.js";
import "./chunk-UONBBRS5.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-A7VS2VYD.js";
import {
  SelectComponent
} from "./chunk-XLCDDNWX.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import "./chunk-JJ65W2TY.js";
import {
  _h
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import {
  AsyncPipe
} from "./chunk-BRT76G6A.js";
import {
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6G3VFYSX.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zone-about.component.ts
var _c0 = (a0) => ["/zones", a0, "about"];
var _forTrack0 = ($index, $item) => $item.id;
function ZoneAboutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 8)(2, "icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "ZONES.TAG_WARNING"), " ");
  }
}
function ZoneAboutComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" (", ctx_r0.item()?.parent_id, ") ");
  }
}
function ZoneAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "a", 11);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, ZoneAboutComponent_Conditional_5_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "ZONES.PARENT_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, ctx_r0.item()?.parent_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.parent()?.display_name || ctx_r0.parent()?.name || ctx_r0.item()?.parent_id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.parent() ? 6 : -1);
  }
}
function ZoneAboutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item()?.location, " ");
  }
}
function ZoneAboutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.CODE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item()?.code);
  }
}
function ZoneAboutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.TYPE"), "\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item()?.type);
  }
}
function ZoneAboutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item()?.count);
  }
}
function ZoneAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.CAPACITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item()?.capacity, " ");
  }
}
function ZoneAboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item()?.timezone, " ");
  }
}
function ZoneAboutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "ZONES.MAP_URL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.item()?.map_id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item()?.map_id);
  }
}
function ZoneAboutComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r2, " ");
  }
}
function ZoneAboutComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ZONES.TAGS_EMPTY"), " ");
  }
}
function ZoneAboutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, ZoneAboutComponent_Conditional_13_For_5_Template, 2, 1, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, ZoneAboutComponent_Conditional_13_Conditional_6_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.TAGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.tag_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.tag_list()?.length ? 6 : -1);
  }
}
function ZoneAboutComponent_Conditional_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const system_r4 = ctx.$implicit;
    \u0275\u0275property("value", system_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", system_r4.name, " ");
  }
}
function ZoneAboutComponent_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "execute-method-field", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("zone", ctx_r0.item()?.id)("system", ctx_r0.active_system());
  }
}
function ZoneAboutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 19)(2, "header", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "app-form-field", 22)(7, "app-select", 23);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ZoneAboutComponent_Conditional_15_Template_app_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.active_system, $event) || (ctx_r0.active_system = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, ZoneAboutComponent_Conditional_15_For_10_Template, 2, 2, "app-option", 24, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ZoneAboutComponent_Conditional_15_Conditional_11_Template, 1, 2, "execute-method-field", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.EXECUTE_COMMAND"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.active_system);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "ZONES.SELECT_SYSTEM"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.systems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.active_system()?.id ? 11 : -1);
  }
}
function ZoneAboutComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 26);
    \u0275\u0275elementStart(1, "div", 27)(2, "h3", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 29);
    \u0275\u0275pipe(6, "markdown");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 6, \u0275\u0275pipeBind1(6, 4, ctx_r0.item()?.description)), \u0275\u0275sanitizeHtml);
  }
}
function ZoneAboutComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("merge", true)("id", ctx_r0.item()?.id)("settings", ctx_r0.item()?.settings);
  }
}
function ZoneAboutComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-spinner", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ZONES.LOADING_SETTINGS"));
  }
}
var ZoneAboutComponent = class _ZoneAboutComponent {
  _service = inject(ZonesStateService);
  /** List of associated systems */
  systems = this._service.systems;
  /** Selected system */
  active_system = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "active_system" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = this._service.item;
  _item_id = computed(
    () => this.item()?.id,
    ...ngDevMode ? [{ debugName: "_item_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parent = signal(
    void 0,
    ...ngDevMode ? [{ debugName: "parent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  tag_list = computed(
    () => this.item() ? this.item()?.tags : [],
    ...ngDevMode ? [{ debugName: "tag_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  requires_parent = computed(
    () => {
      const item = this.item();
      if (!item?.tags?.length)
        return false;
      return (item.tags.includes("level") || item.tags.includes("building") || item.tags.includes("region")) && !item.parent_id;
    },
    ...ngDevMode ? [{ debugName: "requires_parent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    effect(() => {
      const item = this.item();
      this.parent.set(void 0);
      if (item?.parent_id)
        void this.loadParent(item.parent_id);
    });
    effect(() => {
      this._item_id();
      untracked(() => this.active_system.set(void 0));
    });
  }
  /** Loads the parent zone name. The view shows the parent ID if this fails */
  async loadParent(parent_id) {
    const zone = await _h(parent_id).catch((err) => {
      console.warn(`Failed to load parent zone ${parent_id}:`, describeError(err));
      return null;
    });
    if (this.item()?.parent_id === parent_id && zone)
      this.parent.set(zone);
  }
  static \u0275fac = function ZoneAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneAboutComponent, selectors: [["zone-about"]], decls: 20, vars: 17, consts: [[1, "p-4"], [1, "item-center", "border-warning", "bg-warning/10", "mb-2", "flex", "gap-2", "overflow-hidden", "rounded-sm", "border"], [1, "mb-4", "flex", "space-x-2"], [1, "w-1/3", "flex-1"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [3, "created_at", "updated_at"], [1, "my-4"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "bg-warning", "text-warning-content", "flex", "h-full", "min-h-10", "items-center", "p-1", "text-2xl"], [1, "mono", "px-2", "py-3", "text-xs"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "text-sm", "underline", "select-text", 3, "routerLink"], [1, "select-text"], [1, "mono", "text-sm", "select-text"], [1, "truncate", "underline", "select-text", 3, "href"], ["for", "tags", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-1", "flex-wrap"], [1, "mono", "bg-base-200", "m-1", "h-6", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "select-text"], [1, "opacity-30"], [1, "border-base-200", "flex", "flex-col", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-3", "text-lg", "font-medium"], [1, "w-full", "p-2"], [1, "no-subscript", "mb-2", "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "zone", "system"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "merge", "id", "settings"], ["diameter", "48", 1, "mb-4"]], template: function ZoneAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ZoneAboutComponent_Conditional_1_Template, 7, 3, "div", 1);
      \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275conditionalCreate(5, ZoneAboutComponent_Conditional_5_Template, 7, 8);
      \u0275\u0275conditionalCreate(6, ZoneAboutComponent_Conditional_6_Template, 5, 4);
      \u0275\u0275conditionalCreate(7, ZoneAboutComponent_Conditional_7_Template, 5, 4);
      \u0275\u0275conditionalCreate(8, ZoneAboutComponent_Conditional_8_Template, 5, 4);
      \u0275\u0275conditionalCreate(9, ZoneAboutComponent_Conditional_9_Template, 5, 4);
      \u0275\u0275conditionalCreate(10, ZoneAboutComponent_Conditional_10_Template, 5, 4);
      \u0275\u0275conditionalCreate(11, ZoneAboutComponent_Conditional_11_Template, 5, 4);
      \u0275\u0275conditionalCreate(12, ZoneAboutComponent_Conditional_12_Template, 5, 5);
      \u0275\u0275conditionalCreate(13, ZoneAboutComponent_Conditional_13_Template, 7, 4);
      \u0275\u0275element(14, "item-timestamps", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, ZoneAboutComponent_Conditional_15_Template, 12, 8, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, ZoneAboutComponent_Conditional_16_Template, 8, 8);
      \u0275\u0275element(17, "hr", 6);
      \u0275\u0275conditionalCreate(18, ZoneAboutComponent_Conditional_18_Template, 2, 3, "section")(19, ZoneAboutComponent_Conditional_19_Template, 5, 3, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.requires_parent() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.parent_id ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.location ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.code ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.type ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.count ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.capacity ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.timezone ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.map_id ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.tags ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("created_at", ctx.item()?.created_at)("updated_at", ctx.item()?.updated_at);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.systems().length ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item()?.description ? 16 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item()?.settings ? 18 : 19);
    }
  }, dependencies: [
    SpinnerComponent,
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    ItemTimestampsComponent,
    SettingsFormComponent,
    ExecuteMethodFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    IconComponent,
    TranslatePipe,
    MarkdownPipe,
    AsyncPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneAboutComponent, [{
    type: Component,
    args: [{ selector: "zone-about", template: `
        <div class="p-4">
            @if (requires_parent()) {
                <div
                    class="item-center border-warning bg-warning/10 mb-2 flex gap-2 overflow-hidden rounded-sm border"
                >
                    <div
                        class="bg-warning text-warning-content flex h-full min-h-10 items-center p-1 text-2xl"
                    >
                        <icon>warning</icon>
                    </div>
                    <div class="mono px-2 py-3 text-xs">
                        {{ 'ZONES.TAG_WARNING' | translate }}
                    </div>
                </div>
            }
            <section class="mb-4 flex space-x-2">
                <div class="w-1/3 flex-1">
                    <div
                        class="border-base-200 grid gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        @if (item()?.parent_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.PARENT_ID' | translate }}
                            </div>
                            <div>
                                <a
                                    class="mono text-sm underline select-text"
                                    [routerLink]="[
                                        '/zones',
                                        item()?.parent_id,
                                        'about',
                                    ]"
                                    >{{
                                        parent()?.display_name ||
                                            parent()?.name ||
                                            item()?.parent_id
                                    }}
                                    @if (parent()) {
                                        ({{ item()?.parent_id }})
                                    }
                                </a>
                            </div>
                        }
                        @if (item()?.location) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.LOCATION' | translate }}
                            </div>
                            <div class="select-text">
                                {{ item()?.location }}
                            </div>
                        }
                        @if (item()?.code) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.CODE' | translate }}
                            </div>
                            <div class="select-text">{{ item()?.code }}</div>
                        }
                        @if (item()?.type) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.TYPE' | translate }}&nbsp;
                            </div>
                            <div class="select-text">{{ item()?.type }}</div>
                        }
                        @if (item()?.count) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.COUNT' | translate }}
                            </div>
                            <div class="select-text">{{ item()?.count }}</div>
                        }
                        @if (item()?.capacity) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.CAPACITY' | translate }}
                            </div>
                            <div class="select-text">
                                {{ item()?.capacity }}
                            </div>
                        }
                        @if (item()?.timezone) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </div>
                            <div class="mono text-sm select-text">
                                {{ item()?.timezone }}
                            </div>
                        }
                        @if (item()?.map_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.MAP_URL' | translate }}
                            </div>
                            <a
                                class="truncate underline select-text"
                                [href]="item()?.map_id"
                                >{{ item()?.map_id }}</a
                            >
                        }
                        @if (item()?.tags) {
                            <div
                                class="flex items-center text-sm font-medium"
                                for="tags"
                            >
                                {{ 'ZONES.TAGS' | translate }}
                            </div>
                            <div class="-mx-1 flex flex-1 flex-wrap">
                                @for (tag of tag_list(); track tag) {
                                    <div
                                        class="mono bg-base-200 m-1 h-6 rounded-sm px-2 py-1 text-[0.625rem] select-text"
                                    >
                                        {{ tag }}
                                    </div>
                                }
                                @if (!tag_list()?.length) {
                                    <span class="opacity-30">
                                        {{ 'ZONES.TAGS_EMPTY' | translate }}
                                    </span>
                                }
                            </div>
                        }
                        <item-timestamps
                            [created_at]="item()?.created_at"
                            [updated_at]="item()?.updated_at"
                        />
                    </div>
                </div>
                @if (systems().length) {
                    <div class="w-1/3 flex-1">
                        <div
                            class="border-base-200 flex flex-col rounded-sm border"
                        >
                            <header
                                class="bg-base-200 w-full rounded-sm px-4 py-3 text-lg font-medium"
                            >
                                {{ 'COMMON.EXECUTE_COMMAND' | translate }}
                            </header>
                            <div class="w-full p-2">
                                <app-form-field
                                    class="no-subscript mb-2 w-full"
                                >
                                    <app-select
                                        [(ngModel)]="active_system"
                                        [placeholder]="
                                            'ZONES.SELECT_SYSTEM' | translate
                                        "
                                    >
                                        @for (
                                            system of systems();
                                            track system.id
                                        ) {
                                            <app-option [value]="system">
                                                {{ system.name }}
                                            </app-option>
                                        }
                                    </app-select>
                                </app-form-field>
                                @if (active_system()?.id) {
                                    <execute-method-field
                                        [zone]="item()?.id"
                                        [system]="active_system()"
                                    />
                                }
                            </div>
                        </div>
                    </div>
                }
            </section>
            @if (item()?.description) {
                <hr class="text-base-300 my-4" />
                <div class="border-base-200 w-full rounded-sm border">
                    <h3
                        class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item()?.description | markdown | async"
                    ></div>
                </div>
            }
            <hr class="my-4" />
            @if (item()?.settings) {
                <section>
                    <a-settings-form
                        [merge]="true"
                        [id]="item()?.id"
                        [settings]="item()?.settings"
                    />
                </section>
            } @else {
                <div class="flex flex-col items-center p-8">
                    <app-spinner class="mb-4" diameter="48" />
                    <p>{{ 'ZONES.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      SpinnerComponent,
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      ItemTimestampsComponent,
      SettingsFormComponent,
      TranslatePipe,
      MarkdownPipe,
      ExecuteMethodFieldComponent,
      FormsModule,
      RouterModule,
      AsyncPipe,
      IconComponent
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/zones/zone-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneAboutComponent, { className: "ZoneAboutComponent", filePath: "src/app/zones/zone-about.component.ts", lineNumber: 251 });
})();
export {
  ZoneAboutComponent
};
//# debugId=32797c4a-5ef7-5855-b654-ca7c8bf00a17
//# sourceMappingURL=chunk-4SIF6ZIM.js.map
