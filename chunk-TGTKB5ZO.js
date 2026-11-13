import {
  ImageListFieldComponent
} from "./chunk-MTTFKQ2W.js";
import {
  TIMEZONES_IANA
} from "./chunk-NTUP2G5H.js";
import "./chunk-ZIGK5MIQ.js";
import {
  CounterComponent
} from "./chunk-U2EIDENK.js";
import "./chunk-P46KT6YG.js";
import {
  subtreeFilter
} from "./chunk-6BRLGJQB.js";
import {
  ChipListComponent
} from "./chunk-URQNJTMD.js";
import {
  ItemSearchFieldComponent
} from "./chunk-WZDBMORL.js";
import {
  AutocompleteComponent,
  AutocompleteTriggerDirective
} from "./chunk-3CXGWY3Q.js";
import {
  mergeFormItem,
  onSaveHotkey,
  submitFormDialog
} from "./chunk-QUCOHQEE.js";
import {
  FullscreenModalShellComponent
} from "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import {
  querySupportZones
} from "./chunk-BPSZRBL2.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import {
  OptionComponent
} from "./chunk-BE6PEWTW.js";
import {
  FormFieldComponent
} from "./chunk-JGF7XJRI.js";
import {
  FormField,
  form,
  required
} from "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import {
  DIALOG_DATA,
  DialogRef
} from "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import {
  _h,
  gh,
  mh
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGAUD6Z3.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/zones/zones.utilites.ts
function generateZoneFormModel(zone) {
  return {
    id: zone?.id || "",
    name: zone?.name || "",
    tags: zone?.tags || [],
    description: zone?.description || "",
    // `null` (not `undefined`) so signal forms materialise the field;
    // otherwise `form.parent_zone` is undefined and the picker never renders.
    parent_zone: null,
    parent_id: zone?.parent_id || "",
    location: zone?.location || "",
    display_name: zone?.display_name || "",
    code: zone?.code || "",
    type: zone?.type || "",
    count: zone?.count || 0,
    capacity: zone?.capacity || 0,
    map_id: zone?.map_id || "",
    timezone: zone?.timezone || "",
    images: zone?.images || []
  };
}
var applyZoneFormSchema = (path) => {
  required(path.name);
};

// src/app/zones/zone-form.component.ts
var _c0 = () => ["Enter", ",", " "];
function ZoneFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "item-search-field", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ZONES.PARENT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 7, "ZONES.SEARCH"))("query_fn", ctx_r0.query_fn)("exclude", ctx_r0.exclude)("formField", ctx_r0.form.parent_zone);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 15);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "COMMON.FIELD_NAME"))("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "ZONES.NAME_REQUIRED"), " ");
  }
}
function ZoneFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.display_name().invalid() && ctx_r0.form.display_name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ZONES.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "ZONES.DISPLAY_NAME"))("formField", ctx_r0.form.display_name);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 20)(5, "app-chip-list", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.tags().invalid() && ctx_r0.form.tags().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ZONES.TAGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "ZONES.TAGS"))("separators", \u0275\u0275pureFunction0(10, _c0))("formField", ctx_r0.form.tags);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r0.form.description);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "ZONES.LOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "ZONES.LOCATION_PLACEHOLDER"))("formField", ctx_r0.form.location);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r2 = ctx.$implicit;
    \u0275\u0275property("value", tz_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r2);
  }
}
function ZoneFormComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.TIMEZONE_EMPTY"), " ");
  }
}
function ZoneFormComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "ZONES.CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "ZONES.CODE_PLACEHOLDER"))("formField", ctx_r0.form.code);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 29);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "ZONES.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "ZONES.TYPE_PLACEHOLDER"))("formField", ctx_r0.form.type);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "ZONES.COUNT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.count)("min", 0)("max", 999);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "ZONES.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.capacity)("min", 0)("max", 999);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "ZONES.MAP_URL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "ZONES.MAP_URL"))("formField", ctx_r0.form.map_id);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "image-list-field", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "COMMON.IMAGES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.images);
    \u0275\u0275control();
  }
}
function ZoneFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, ZoneFormComponent_Conditional_1_Conditional_1_Template, 6, 9, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, ZoneFormComponent_Conditional_1_Conditional_3_Template, 12, 12, "div", 3);
    \u0275\u0275conditionalCreate(4, ZoneFormComponent_Conditional_1_Conditional_4_Template, 7, 9, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ZoneFormComponent_Conditional_1_Conditional_5_Template, 7, 11, "div", 3);
    \u0275\u0275conditionalCreate(6, ZoneFormComponent_Conditional_1_Conditional_6_Template, 7, 7, "div", 3);
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, ZoneFormComponent_Conditional_1_Conditional_8_Template, 7, 7, "div", 3);
    \u0275\u0275elementStart(9, "div", 3)(10, "label", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-form-field")(14, "div", 6)(15, "icon", 7);
    \u0275\u0275text(16, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 8);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "app-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(21, ZoneFormComponent_Conditional_1_For_22_Template, 2, 2, "app-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(23, ZoneFormComponent_Conditional_1_Conditional_23_Template, 3, 4, "app-option", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 4);
    \u0275\u0275conditionalCreate(25, ZoneFormComponent_Conditional_1_Conditional_25_Template, 7, 7, "div", 3);
    \u0275\u0275conditionalCreate(26, ZoneFormComponent_Conditional_1_Conditional_26_Template, 7, 7, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 11);
    \u0275\u0275conditionalCreate(28, ZoneFormComponent_Conditional_1_Conditional_28_Template, 5, 6, "div", 3);
    \u0275\u0275conditionalCreate(29, ZoneFormComponent_Conditional_1_Conditional_29_Template, 5, 6, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ZoneFormComponent_Conditional_1_Conditional_30_Template, 7, 7, "div", 3);
    \u0275\u0275conditionalCreate(31, ZoneFormComponent_Conditional_1_Conditional_31_Template, 5, 4, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r3 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.parent_zone ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.display_name ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.tags ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.description ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.location ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 17, "COMMON.TIMEZONE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form.timezone)("placeholder", \u0275\u0275pipeBind1(18, 19, "COMMON.TIMEZONE"))("appAutocomplete", auto_r3);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_timezones());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.filtered_timezones().length ? 23 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.code ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.type ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.count ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.capacity ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.map_id ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.images ? 31 : -1);
  }
}
var TIMEZONE_OPTION_LIMIT = 50;
var ZoneFormComponent = class _ZoneFormComponent {
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
  _name = "ZONES";
  event = new EventEmitter();
  formModel = signal(
    generateZoneFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyZoneFormSchema);
  timezones = TIMEZONES_IANA;
  timezone = computed(
    () => `${this.formModel().timezone || ""}`,
    ...ngDevMode ? [{ debugName: "timezone" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered_timezones = computed(
    () => {
      const search = this.timezone().toLowerCase();
      return this.timezones.filter((_tz) => _tz.toLowerCase().includes(search)).slice(0, TIMEZONE_OPTION_LIMIT);
    },
    ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`${this._name}.${this._data.item?.id ? "EDIT" : "NEW"}`);
  constructor() {
    onSaveHotkey(() => this.submit());
    effect(() => {
      if (!this.form.parent_zone().dirty())
        return;
      const parent_zone = this.formModel().parent_zone;
      const parent_id = parent_zone?.id || "";
      if (parent_id !== this.formModel().parent_id) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { parent_id }));
      }
    });
  }
  _excludeSubtree = subtreeFilter((id) => _h(id));
  /** Query function for zones. Hides this zone's descendants to prevent cycles */
  query_fn = (_) => querySupportZones({ q: _ }).then((resp) => this._excludeSubtree(resp.data, this.formModel().id));
  /** Function to exclude zones */
  exclude = (zone) => zone.id === this.formModel().id;
  ngOnInit() {
    this.updateZone();
  }
  async submit() {
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, () => {
      const _a = this.formModel(), { parent_zone: _parent_zone } = _a, form_value = __objRest(_a, ["parent_zone"]);
      const form_item = mergeFormItem(this._data.item, form_value);
      return form_item.id ? mh(form_item.id, form_item) : gh(form_item);
    });
  }
  /** Show the stored parent zone in the picker. `parent_id` stays as stored */
  async updateZone() {
    const parent_id = this.formModel().parent_id;
    if (!parent_id)
      return;
    const zone = await _h(parent_id).catch(() => null);
    if (!zone || this.form.parent_zone().dirty())
      return;
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { parent_zone: zone }));
  }
  static \u0275fac = function ZoneFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneFormComponent, selectors: [["zone-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [["auto", "appAutocomplete"], [3, "save", "heading", "loading"], ["zone", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], ["for", "timezone"], ["prefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["id", "timezone", 3, "formField", "placeholder", "appAutocomplete"], [3, "value"], [3, "disabled"], [1, "fieldset", "mb-4"], ["for", "parent-zone"], [3, "placeholder", "query_fn", "exclude", "formField"], ["for", "zone-name"], ["id", "zone-name", 3, "placeholder", "formField"], ["error", ""], ["for", "zone-display"], ["id", "zone-display", 3, "placeholder", "formField"], ["for", "tags"], [1, "w-full"], ["inputId", "tags", "aria-label", "Tag List", 3, "placeholder", "separators", "formField"], ["for", "description"], ["id", "description", 3, "placeholder", "formField"], ["for", "location"], ["id", "location", 3, "placeholder", "formField"], ["for", "code"], ["id", "code", 3, "placeholder", "formField"], ["for", "type"], ["id", "type", 3, "placeholder", "formField"], ["for", "count"], [3, "formField", "min", "max"], ["for", "capacity"], ["for", "map"], ["id", "map", 3, "placeholder", "formField"], ["for", "images"], [3, "formField"]], template: function ZoneFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function ZoneFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, ZoneFormComponent_Conditional_1_Template, 32, 21, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    OptionComponent,
    FormFieldComponent,
    ImageListFieldComponent,
    FormField,
    IconComponent,
    CounterComponent,
    AutocompleteComponent,
    AutocompleteTriggerDirective,
    ChipListComponent,
    ItemSearchFieldComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneFormComponent, [{
    type: Component,
    args: [{ selector: "zone-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form zone class="flex flex-col">
                    @if (form.parent_zone) {
                        <div class="field">
                            <label for="parent-zone">
                                {{ 'ZONES.PARENT' | translate }}
                            </label>
                            <item-search-field
                                [placeholder]="'ZONES.SEARCH' | translate"
                                [query_fn]="query_fn"
                                [exclude]="exclude"
                                [formField]="form.parent_zone"
                            />
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="zone-name"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <app-form-field>
                                    <input
                                        id="zone-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        [formField]="form.name"
                                    />
                                    <div error>
                                        {{ 'ZONES.NAME_REQUIRED' | translate }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                        @if (form.display_name) {
                            <div class="field">
                                <label
                                    for="zone-display"
                                    [class.error]="
                                        form.display_name().invalid() &&
                                        form.display_name().touched()
                                    "
                                >
                                    {{ 'ZONES.DISPLAY_NAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="zone-display"
                                        [placeholder]="
                                            'ZONES.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.tags) {
                        <div class="field">
                            <label
                                for="tags"
                                [class.error]="
                                    form.tags().invalid() &&
                                    form.tags().touched()
                                "
                            >
                                {{ 'ZONES.TAGS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="tags"
                                    aria-label="Tag List"
                                    [placeholder]="'ZONES.TAGS' | translate"
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.tags"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">
                                {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                            </label>
                            <app-form-field>
                                <textarea
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.location) {
                            <div class="field">
                                <label for="location">{{
                                    'ZONES.LOCATION' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="location"
                                        [placeholder]="
                                            'ZONES.LOCATION_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.location"
                                    />
                                </app-form-field>
                            </div>
                        }
                        <div class="field">
                            <label for="timezone">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </label>
                            <app-form-field>
                                <div class="prefix" prefix>
                                    <icon class="relative -left-0.5 text-2xl">
                                        search
                                    </icon>
                                </div>
                                <input
                                    id="timezone"
                                    [formField]="form.timezone"
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [appAutocomplete]="auto"
                                />
                            </app-form-field>
                            <app-autocomplete #auto="appAutocomplete">
                                @for (tz of filtered_timezones(); track tz) {
                                    <app-option [value]="tz">{{
                                        tz
                                    }}</app-option>
                                }
                                @if (!filtered_timezones().length) {
                                    <app-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </app-option>
                                }
                            </app-autocomplete>
                        </div>
                    </div>
                    <div class="fieldset">
                        @if (form.code) {
                            <div class="field">
                                <label for="code">{{
                                    'ZONES.CODE' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="code"
                                        [placeholder]="
                                            'ZONES.CODE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.type) {
                            <div class="field">
                                <label for="type">{{
                                    'ZONES.TYPE' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="type"
                                        [placeholder]="
                                            'ZONES.TYPE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.type"
                                    />
                                </app-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset mb-4">
                        @if (form.count) {
                            <div class="field">
                                <label for="count">{{
                                    'ZONES.COUNT' | translate
                                }}</label>
                                <a-counter
                                    [formField]="form.count"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                        @if (form.capacity) {
                            <div class="field">
                                <label for="capacity">
                                    {{ 'ZONES.CAPACITY' | translate }}
                                </label>
                                <a-counter
                                    [formField]="form.capacity"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                    </div>
                    @if (form.map_id) {
                        <div class="field">
                            <label for="map">{{
                                'ZONES.MAP_URL' | translate
                            }}</label>
                            <app-form-field>
                                <input
                                    id="map"
                                    [placeholder]="'ZONES.MAP_URL' | translate"
                                    [formField]="form.map_id"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.images) {
                        <div class="field">
                            <label for="images">{{
                                'COMMON.IMAGES' | translate
                            }}</label>
                            <image-list-field [formField]="form.images" />
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      OptionComponent,
      FormFieldComponent,
      ImageListFieldComponent,
      FormField,
      TranslatePipe,
      IconComponent,
      CounterComponent,
      AutocompleteComponent,
      AutocompleteTriggerDirective,
      ChipListComponent,
      ItemSearchFieldComponent,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneFormComponent, { className: "ZoneFormComponent", filePath: "src/app/zones/zone-form.component.ts", lineNumber: 310 });
})();
export {
  ZoneFormComponent
};
//# debugId=2714563e-cb1d-5c73-af8d-9ff37407f300
//# sourceMappingURL=chunk-TGTKB5ZO.js.map
