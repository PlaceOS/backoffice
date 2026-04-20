import {
  ZonesStateService
} from "./chunk-UVNNIB52.js";
import {
  ExecuteMethodFieldComponent
} from "./chunk-SPEXEERU.js";
import "./chunk-GMRRGPYH.js";
import {
  d
} from "./chunk-OMHAHFWO.js";
import {
  SettingsFormComponent
} from "./chunk-72MCRD5D.js";
import "./chunk-4OC245RA.js";
import "./chunk-UOLNVIZT.js";
import "./chunk-E5II4TTS.js";
import "./chunk-TOA2WBK5.js";
import "./chunk-3NEIYYF3.js";
import {
  SanitizePipe
} from "./chunk-CG6VP2IO.js";
import "./chunk-J533RESC.js";
import "./chunk-YTJDBYYP.js";
import "./chunk-QBKODXYB.js";
import "./chunk-IZOUKBB7.js";
import {
  DateFromPipe
} from "./chunk-UKPZNMNS.js";
import "./chunk-YKMVGLTV.js";
import "./chunk-ZCAI424E.js";
import {
  toSignal
} from "./chunk-7QVEE5VR.js";
import "./chunk-IIUIDWWB.js";
import "./chunk-GVMJP65D.js";
import "./chunk-DVN3BL7D.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4ARITZTR.js";
import "./chunk-SKYIPB3H.js";
import "./chunk-W2GN2BRP.js";
import "./chunk-UAXAQ7BE.js";
import "./chunk-UCQRULZV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-3MFQ72CW.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-QGR553JM.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-6VJ3RG5O.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-PPQFSXFA.js";
import "./chunk-D2LXA4RU.js";
import "./chunk-C72KDRNK.js";
import "./chunk-LTLRKAHH.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-YDTR7R4T.js";
import "./chunk-R2EAFTPD.js";
import {
  AsyncHandler
} from "./chunk-GMSIBCGC.js";
import "./chunk-MF6TUUIF.js";
import "./chunk-RBXYCJUU.js";
import "./chunk-AV4JSAAI.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-5V5EUIVE.js";
import {
  MatOption
} from "./chunk-2BWZF4LD.js";
import {
  TranslatePipe
} from "./chunk-BSW7AGOT.js";
import "./chunk-Y3N2XCKC.js";
import "./chunk-MSVGRD3P.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  computed,
  effect,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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
} from "./chunk-H6LO5TZR.js";
import {
  Va,
  lastValueFrom
} from "./chunk-BKO4HWAT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/zones/zone-about.component.ts
var _c0 = (a0) => ["/zones", a0, "about"];
var _forTrack0 = ($index, $item) => $item.id;
function ZoneAboutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ZONES.TAG_WARNING"), " ");
  }
}
function ZoneAboutComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" (", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.parent_id, ") ");
  }
}
function ZoneAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "a", 10);
    \u0275\u0275text(5);
    \u0275\u0275conditionalCreate(6, ZoneAboutComponent_Conditional_5_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "ZONES.PARENT_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.parent_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ((tmp_3_0 = ctx_r0.parent()) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = ctx_r0.parent()) == null ? null : tmp_3_0.name) || ((tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.parent_id), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.parent() ? 6 : -1);
  }
}
function ZoneAboutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.location);
  }
}
function ZoneAboutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.CODE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.code);
  }
}
function ZoneAboutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.TYPE"), "\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.type);
  }
}
function ZoneAboutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.COUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.count);
  }
}
function ZoneAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.CAPACITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.capacity);
  }
}
function ZoneAboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.timezone, " ");
  }
}
function ZoneAboutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "ZONES.MAP_URL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.map_id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.map_id);
  }
}
function ZoneAboutComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
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
    \u0275\u0275elementStart(0, "span", 16);
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
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275repeaterCreate(4, ZoneAboutComponent_Conditional_13_For_5_Template, 2, 1, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, ZoneAboutComponent_Conditional_13_Conditional_6_Template, 3, 3, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "ZONES.TAGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.tag_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_3_0 = ctx_r0.tag_list()) == null ? null : tmp_3_0.length) ? 6 : -1);
  }
}
function ZoneAboutComponent_Conditional_32_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
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
function ZoneAboutComponent_Conditional_32_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "execute-method-field", 23);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("zone", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.id)("system", ctx_r0.active_system());
  }
}
function ZoneAboutComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 17)(2, "header", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "mat-form-field", 20)(7, "mat-select", 21);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ZoneAboutComponent_Conditional_32_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.active_system, $event) || (ctx_r0.active_system = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, ZoneAboutComponent_Conditional_32_For_10_Template, 2, 2, "mat-option", 22, _forTrack0);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, ZoneAboutComponent_Conditional_32_Conditional_12_Template, 1, 2, "execute-method-field", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "COMMON.EXECUTE_COMMAND"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.active_system);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "ZONES.SELECT_SYSTEM"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 8, ctx_r0.systems));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r0.active_system()) == null ? null : tmp_5_0.id) ? 12 : -1);
  }
}
function ZoneAboutComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 24);
    \u0275\u0275elementStart(1, "div", 25)(2, "h3", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 27);
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
function ZoneAboutComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("merge", true)("id", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0.id)("settings", (tmp_3_0 = ctx_r0.item()) == null ? null : tmp_3_0.settings);
  }
}
function ZoneAboutComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 29);
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
var ZoneAboutComponent = class _ZoneAboutComponent extends AsyncHandler {
  _service = inject(ZonesStateService);
  /** List of associated systems */
  systems = this._service.systems;
  /** Selected system */
  active_system = signal(void 0, ...ngDevMode ? [{ debugName: "active_system" }] : []);
  item = toSignal(this._service.item, {
    initialValue: void 0
  });
  parent = signal(void 0, ...ngDevMode ? [{ debugName: "parent" }] : []);
  description = computed(() => this.item() ? d(this.item()?.description) : "", ...ngDevMode ? [{ debugName: "description" }] : []);
  tag_list = computed(() => this.item() ? this.item()?.tags : [], ...ngDevMode ? [{ debugName: "tag_list" }] : []);
  requires_parent = computed(() => {
    const item = this.item();
    if (!item?.tags?.length)
      return false;
    return (item.tags.includes("level") || item.tags.includes("building") || item.tags.includes("region")) && !item.parent_id;
  }, ...ngDevMode ? [{ debugName: "requires_parent" }] : []);
  constructor() {
    super();
    effect(() => {
      const item = this.item();
      this.parent.set(void 0);
      if (item?.parent_id)
        void this.loadParent(item.parent_id);
    });
  }
  async loadParent(parent_id) {
    const zone = await lastValueFrom(Va(parent_id));
    if (this.item()?.parent_id === parent_id && zone)
      this.parent.set(zone);
  }
  static \u0275fac = function ZoneAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneAboutComponent, selectors: [["zone-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 38, vars: 43, consts: [[1, "p-4"], [1, "mono", "bg-warning", "text-warning-content", "mb-2", "w-full", "rounded-sm", "p-2", "text-center", "text-xs"], [1, "mb-4", "flex", "space-x-2"], [1, "w-1/3", "flex-1"], [1, "border-base-200", "grid", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "my-4"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "mono", "text-sm", "underline", 3, "routerLink"], [1, "mono", "text-sm"], [1, "truncate", "underline", 3, "href"], ["for", "tags", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-1", "flex-wrap"], [1, "mono", "bg-base-200", "m-1", "h-6", "rounded-sm", "px-2", "py-1", "text-[0.625rem]"], [1, "opacity-30"], [1, "border-base-200", "flex", "flex-col", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "px-4", "py-3", "text-lg", "font-medium"], [1, "w-full", "p-2"], ["appearance", "outline", 1, "no-subscript", "mb-2", "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "zone", "system"], [1, "text-base-300", "my-4"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "merge", "id", "settings"], ["diameter", "48", 1, "mb-4"]], template: function ZoneAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ZoneAboutComponent_Conditional_1_Template, 3, 3, "div", 1);
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
      \u0275\u0275elementStart(14, "div", 5);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "span", 7);
      \u0275\u0275pipe(19, "date");
      \u0275\u0275pipe(20, "date");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 5);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 6)(27, "span", 7);
      \u0275\u0275pipe(28, "date");
      \u0275\u0275pipe(29, "date");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(32, ZoneAboutComponent_Conditional_32_Template, 13, 10, "div", 3);
      \u0275\u0275pipe(33, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, ZoneAboutComponent_Conditional_34_Template, 7, 6);
      \u0275\u0275element(35, "hr", 8);
      \u0275\u0275conditionalCreate(36, ZoneAboutComponent_Conditional_36_Template, 2, 3, "section")(37, ZoneAboutComponent_Conditional_37_Template, 5, 3, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_16_0;
      let tmp_17_0;
      let tmp_18_0;
      let tmp_19_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.requires_parent() ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0.parent_id) ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.item()) == null ? null : tmp_3_0.location) ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.item()) == null ? null : tmp_4_0.code) ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.type) ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.item()) == null ? null : tmp_6_0.count) ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_7_0 = ctx.item()) == null ? null : tmp_7_0.capacity) ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_8_0 = ctx.item()) == null ? null : tmp_8_0.timezone) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_9_0 = ctx.item()) == null ? null : tmp_9_0.map_id) ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.item()) == null ? null : tmp_10_0.tags) ? 13 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 21, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(19, 23, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(20, 26, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 29, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 31, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(28, 33, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(29, 36, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 39, ((tmp_16_0 = ctx.item()) == null ? null : tmp_16_0.updated_at) * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_17_0 = \u0275\u0275pipeBind1(33, 41, ctx.systems)) == null ? null : tmp_17_0.length) ? 32 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_18_0 = ctx.item()) == null ? null : tmp_18_0.description) ? 34 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_19_0 = ctx.item()) == null ? null : tmp_19_0.settings) ? 36 : 37);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    SettingsFormComponent,
    MatTooltipModule,
    MatTooltip,
    ExecuteMethodFieldComponent,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    AsyncPipe,
    DatePipe,
    SanitizePipe,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneAboutComponent, [{
    type: Component,
    args: [{ selector: "zone-about", template: `
        <div class="p-4">
            @if (requires_parent()) {
                <div
                    class="mono bg-warning text-warning-content mb-2 w-full rounded-sm p-2 text-center text-xs"
                >
                    {{ 'ZONES.TAG_WARNING' | translate }}
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
                                    class="mono text-sm underline"
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
                            <div>{{ item()?.location }}</div>
                        }
                        @if (item()?.code) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.CODE' | translate }}
                            </div>
                            <div>{{ item()?.code }}</div>
                        }
                        @if (item()?.type) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.TYPE' | translate }}&nbsp;
                            </div>
                            <div>{{ item()?.type }}</div>
                        }
                        @if (item()?.count) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.COUNT' | translate }}
                            </div>
                            <div>{{ item()?.count }}</div>
                        }
                        @if (item()?.capacity) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.CAPACITY' | translate }}
                            </div>
                            <div>{{ item()?.capacity }}</div>
                        }
                        @if (item()?.timezone) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </div>
                            <div class="mono text-sm">
                                {{ item()?.timezone }}
                            </div>
                        }
                        @if (item()?.map_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.MAP_URL' | translate }}
                            </div>
                            <a
                                class="truncate underline"
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
                                        class="mono bg-base-200 m-1 h-6 rounded-sm px-2 py-1 text-[0.625rem]"
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
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.CREATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item().created_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().created_at * 1000
                                        | date: 'shortTime')
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
                                    (item().updated_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item()?.updated_at * 1000 | dateFrom }}
                            </span>
                        </div>
                    </div>
                </div>
                @if ((systems | async)?.length) {
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
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript mb-2 w-full"
                                >
                                    <mat-select
                                        [(ngModel)]="active_system"
                                        [placeholder]="
                                            'ZONES.SELECT_SYSTEM' | translate
                                        "
                                    >
                                        @for (
                                            system of systems | async;
                                            track system.id
                                        ) {
                                            <mat-option [value]="system">
                                                {{ system.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                @if (active_system()?.id) {
                                    <execute-method-field
                                        [zone]="item()?.id"
                                        [system]="active_system()"
                                    ></execute-method-field>
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
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="description() | sanitize"
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
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center p-8">
                    <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                    <p>{{ 'ZONES.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      SettingsFormComponent,
      SanitizePipe,
      TranslatePipe,
      MatTooltipModule,
      DateFromPipe,
      ExecuteMethodFieldComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/zones/zone-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneAboutComponent, { className: "ZoneAboutComponent", filePath: "src/app/zones/zone-about.component.ts", lineNumber: 265 });
})();
export {
  ZoneAboutComponent
};
//# sourceMappingURL=chunk-G3QWLYOC.js.map
