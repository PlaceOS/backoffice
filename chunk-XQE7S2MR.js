import {
  applySystemFormSchema,
  generateSystemFormModel
} from "./chunk-HIGY3ZO3.js";
import {
  ImageListFieldComponent
} from "./chunk-3JWLIZ3A.js";
import {
  TIMEZONES_IANA
} from "./chunk-NTUP2G5H.js";
import "./chunk-ZIGK5MIQ.js";
import {
  CounterComponent
} from "./chunk-L7NWZEYG.js";
import "./chunk-LP7C7ME6.js";
import "./chunk-73ZIQ5ZT.js";
import {
  ChipListComponent
} from "./chunk-GUFVJINE.js";
import {
  ItemSearchFieldComponent
} from "./chunk-MXWUELBM.js";
import {
  AutocompleteComponent,
  AutocompleteTriggerDirective
} from "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import {
  mergeFormItem,
  onSaveHotkey,
  submitFormDialog
} from "./chunk-PTOKT7PW.js";
import {
  FullscreenModalShellComponent
} from "./chunk-M5B4HMCQ.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-IYFCSDMQ.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-M7QWVZ5D.js";
import "./chunk-T3O7QHHC.js";
import {
  querySupportZones
} from "./chunk-BPSZRBL2.js";
import "./chunk-ZYXD5WKE.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import {
  SettingsToggleComponent
} from "./chunk-7CN2TEC2.js";
import {
  OptionComponent
} from "./chunk-BE6PEWTW.js";
import {
  FormFieldComponent
} from "./chunk-JGF7XJRI.js";
import {
  FormField,
  form
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
} from "./chunk-TUKKKEUM.js";
import {
  i18n
} from "./chunk-RWWXPWHW.js";
import {
  Pa,
  qa
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
  ɵɵattribute,
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

// src/app/systems/system-form.component.ts
var _c0 = () => ["Enter", ",", " "];
function SystemFormComponent_Conditional_1_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.ZONE_REQUIRED"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "item-search-field", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_1_Conditional_7_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.zone().invalid() && ctx_r0.form.zone().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ZONES.SINGULAR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("query_fn", ctx_r0.query_fn)("formField", ctx_r0.form.zone);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.zone().invalid() && ctx_r0.form.zone().touched() ? 7 : -1);
  }
}
function SystemFormComponent_Conditional_1_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.NAME_REQUIRED"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SystemFormComponent_Conditional_1_Conditional_3_Conditional_8_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name().invalid() ? 8 : -1);
  }
}
function SystemFormComponent_Conditional_1_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.EMAIL_REQUIRED"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_4_Conditional_7_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.email().invalid() && ctx_r0.form.email().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_EMAIL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "COMMON.FIELD_EMAIL"))("formField", ctx_r0.form.email);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.email().invalid() ? 7 : -1);
  }
}
function SystemFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "SYSTEMS.DISPLAY_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "SYSTEMS.DISPLAY_NAME"))("formField", ctx_r0.form.display_name);
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "SYSTEMS.CODE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "SYSTEMS.CODE"))("formField", ctx_r0.form.code);
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 27);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.support_url().invalid() && ctx_r0.form.support_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.SUPPORT_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "SYSTEMS.SUPPORT_URL"))("formField", ctx_r0.form.support_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 29);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.installed_ui_devices().invalid() && ctx_r0.form.installed_ui_devices().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.PANEL_COUNT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.installed_ui_devices)("min", 0)("max", 999);
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
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
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.capacity().invalid() && ctx_r0.form.capacity().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.CAPACITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.capacity)("min", 0)("max", 999);
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 33);
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
function SystemFormComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 35)(5, "app-chip-list", 36);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.features().invalid() && ctx_r0.form.features().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "SYSTEMS.FEATURES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "SYSTEMS.FEATURES"))("separators", \u0275\u0275pureFunction0(13, _c0))("formField", ctx_r0.form.features);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 11, "SYSTEMS.FEATURES"));
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 35)(5, "app-chip-list", 38);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.security_groups().invalid() && ctx_r0.form.security_groups().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.SECURITY_GROUPS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "SYSTEMS.SECURITY_GROUPS"))("separators", \u0275\u0275pureFunction0(10, _c0))("formField", ctx_r0.form.security_groups);
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 40);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "SYSTEMS.MAP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.map_id);
    \u0275\u0275control();
  }
}
function SystemFormComponent_Conditional_1_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r2 = ctx.$implicit;
    \u0275\u0275property("value", tz_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r2, " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 13);
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
function SystemFormComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "image-list-field", 42);
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
function SystemFormComponent_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 44);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.timetable_url().invalid() && ctx_r0.form.timetable_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.TIMETABLE_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "SYSTEMS.TIMETABLE_URL"))("formField", ctx_r0.form.timetable_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 46);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.camera_url().invalid() && ctx_r0.form.camera_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.CAMERA_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "SYSTEMS.CAMERA_URL"))("formField", ctx_r0.form.camera_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_41_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 35)(5, "app-chip-list", 48);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_41_Conditional_7_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.camera_snapshot_urls().invalid() && ctx_r0.form.camera_snapshot_urls().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "SYSTEMS.CAMERA_SNAPSHOT_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "SYSTEMS.CAMERA_SNAPSHOT_URL"))("separators", \u0275\u0275pureFunction0(11, _c0))("formField", ctx_r0.form.camera_snapshot_urls);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.camera_snapshot_urls().invalid() ? 7 : -1);
  }
}
function SystemFormComponent_Conditional_1_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 50);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.room_booking_url().invalid() && ctx_r0.form.room_booking_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "SYSTEMS.ROOM_BOOKING_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "SYSTEMS.ROOM_BOOKING_URL"))("formField", ctx_r0.form.room_booking_url);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "SYSTEMS.URL_VALID"), " ");
  }
}
function SystemFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, SystemFormComponent_Conditional_1_Conditional_1_Template, 8, 8, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275conditionalCreate(3, SystemFormComponent_Conditional_1_Conditional_3_Template, 9, 7, "div", 3);
    \u0275\u0275conditionalCreate(4, SystemFormComponent_Conditional_1_Conditional_4_Template, 8, 10, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275conditionalCreate(6, SystemFormComponent_Conditional_1_Conditional_6_Template, 7, 7, "div", 3);
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_7_Template, 7, 7, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SystemFormComponent_Conditional_1_Conditional_8_Template, 10, 12, "div", 3);
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275conditionalCreate(10, SystemFormComponent_Conditional_1_Conditional_10_Template, 5, 8, "div", 3);
    \u0275\u0275conditionalCreate(11, SystemFormComponent_Conditional_1_Conditional_11_Template, 5, 8, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6)(13, "settings-toggle", 7);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "settings-toggle", 7);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "settings-toggle", 7);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, SystemFormComponent_Conditional_1_Conditional_19_Template, 7, 7, "div", 3);
    \u0275\u0275conditionalCreate(20, SystemFormComponent_Conditional_1_Conditional_20_Template, 8, 14, "div", 3);
    \u0275\u0275conditionalCreate(21, SystemFormComponent_Conditional_1_Conditional_21_Template, 7, 11, "div", 3);
    \u0275\u0275conditionalCreate(22, SystemFormComponent_Conditional_1_Conditional_22_Template, 6, 4, "div", 3);
    \u0275\u0275elementStart(23, "div", 3)(24, "label", 8);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "app-form-field")(28, "div", 9)(29, "icon", 10);
    \u0275\u0275text(30, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 11);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "app-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(35, SystemFormComponent_Conditional_1_For_36_Template, 2, 2, "app-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(37, SystemFormComponent_Conditional_1_Conditional_37_Template, 3, 4, "app-option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, SystemFormComponent_Conditional_1_Conditional_38_Template, 5, 4, "div", 3);
    \u0275\u0275conditionalCreate(39, SystemFormComponent_Conditional_1_Conditional_39_Template, 10, 12, "div", 3);
    \u0275\u0275conditionalCreate(40, SystemFormComponent_Conditional_1_Conditional_40_Template, 10, 12, "div", 3);
    \u0275\u0275conditionalCreate(41, SystemFormComponent_Conditional_1_Conditional_41_Template, 8, 12, "div", 3);
    \u0275\u0275conditionalCreate(42, SystemFormComponent_Conditional_1_Conditional_42_Template, 10, 12, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r3 = \u0275\u0275reference(34);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.zone && !ctx_r0.item().id ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.name ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.email ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.display_name ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.code ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.support_url ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.installed_ui_devices ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.capacity ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 28, "SYSTEMS.BOOKABLE"))("formField", ctx_r0.form.bookable);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 30, "SYSTEMS.SIGNAGE"))("formField", ctx_r0.form.signage);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(18, 32, "SYSTEMS.PUBLIC"))("formField", ctx_r0.form.public);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.description ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.features ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.security_groups ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.map_id ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 34, "COMMON.TIMEZONE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form.timezone)("placeholder", \u0275\u0275pipeBind1(32, 36, "COMMON.TIMEZONE"))("appAutocomplete", auto_r3);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filtered_timezones());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.filtered_timezones().length ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.images ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.timetable_url ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.camera_url ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.camera_snapshot_urls ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.room_booking_url ? 42 : -1);
  }
}
var TIMEZONE_OPTION_LIMIT = 50;
var SystemFormComponent = class _SystemFormComponent {
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
  _name = "SYSTEMS";
  item = signal(
    this._data.item,
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  event = new EventEmitter();
  timezones = TIMEZONES_IANA;
  formModel = signal(
    generateSystemFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applySystemFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`${this._name}.${this._data.item.id ? "EDIT" : "NEW"}`);
  /** Function for querying zones */
  query_fn = (_) => querySupportZones({ q: _ }).then((resp) => resp.data);
  _timezone = computed(
    () => this.formModel().timezone || "",
    ...ngDevMode ? [{ debugName: "_timezone" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filtered_timezones = computed(
    () => {
      const search = this._timezone().toLowerCase();
      return this.timezones.filter((_tz) => _tz.toLowerCase().includes(search)).slice(0, TIMEZONE_OPTION_LIMIT);
    },
    ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    onSaveHotkey(() => this.submit());
    effect(() => {
      const model = this.formModel();
      const zone = model.zone;
      if (zone?.id && (model.zones.length !== 1 || model.zones[0] !== zone.id)) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          zones: [zone.id]
        }));
      }
    });
  }
  async submit() {
    if (this.loading())
      return;
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, () => {
      const _a = this.formModel(), { zone: _zone } = _a, form_value = __objRest(_a, ["zone"]);
      const form_item = mergeFormItem(this._data.item, form_value);
      const processed_item = __spreadProps(__spreadValues({}, form_item), {
        support_url: this.processURL(form_item, form_item.support_url || "")
      });
      return processed_item.id ? qa(processed_item.id, processed_item) : Pa(processed_item);
    });
  }
  processURL(system, url) {
    for (const key in system) {
      url = url.replace(new RegExp(`{{${key}}}`, "g"), `${system[key]}`);
    }
    url = url.replace(new RegExp(`{{origin}}`, "g"), location.origin);
    url = url.replace(new RegExp(`{{host}}`, "g"), location.host);
    url = url.replace(new RegExp(`{{pathname}}`, "g"), location.pathname);
    return url;
  }
  static \u0275fac = function SystemFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemFormComponent, selectors: [["system-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [["auto", "appAutocomplete"], [3, "save", "heading", "loading"], ["system", "", 1, "flex", "w-full", "flex-col"], [1, "field"], [1, "fieldset"], [1, "fieldset", "mb-4"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "flex-1", 3, "label", "formField"], ["for", "timezone"], ["prefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["id", "timezone", 3, "formField", "placeholder", "appAutocomplete"], [3, "value"], [3, "disabled"], ["for", "zone", "id", "zone-label"], ["id", "zone", "role", "group", "aria-labelledby", "zone-label", 3, "query_fn", "formField"], [1, "error"], ["for", "system-name"], ["id", "system-name", "placeholder", "System Name", 3, "formField"], ["error", ""], ["for", "system-email"], ["id", "system-email", 3, "placeholder", "formField"], ["for", "display-name"], ["id", "display-name", 3, "placeholder", "formField"], ["for", "code-name"], ["id", "code-name", 3, "placeholder", "formField"], ["for", "support-url"], ["id", "support-url", 3, "placeholder", "formField"], ["for", "ui-devices", "id", "ui-devices-label"], ["id", "ui-devices", "role", "group", "aria-labelledby", "ui-devices-label", 3, "formField", "min", "max"], ["for", "capacity", "id", "capacity-label"], ["id", "capacity", "role", "group", "aria-labelledby", "capacity-label", 3, "formField", "min", "max"], ["for", "description"], ["id", "description", 3, "placeholder", "formField"], ["for", "feature-list"], [1, "w-full"], ["inputId", "feature-list", 3, "placeholder", "separators", "formField"], ["for", "security-group-list"], ["inputId", "security-group-list", "aria-label", "Security Group List", 3, "placeholder", "separators", "formField"], ["for", "map_id"], ["id", "map_id", "placeholder", "Map SVG ID selector e.g. area-01.10-status", 3, "formField"], ["for", "images", "id", "images-label"], ["id", "images", "role", "group", "aria-labelledby", "images-label", 3, "formField"], ["for", "timetable-url"], ["id", "timetable-url", 3, "placeholder", "formField"], ["for", "camera-url"], ["id", "camera-url", 3, "placeholder", "formField"], ["for", "camera-snap-url"], ["inputId", "camera-snap-url", "aria-label", "Camera Snapshot URL List", "editable", "", 3, "placeholder", "separators", "formField"], ["for", "room-booking-url"], ["id", "room-booking-url", 3, "placeholder", "formField"]], template: function SystemFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function SystemFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, SystemFormComponent_Conditional_1_Template, 43, 38, "form", 2);
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
    ChipListComponent,
    SettingsToggleComponent,
    CounterComponent,
    ItemSearchFieldComponent,
    AutocompleteComponent,
    AutocompleteTriggerDirective,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemFormComponent, [{
    type: Component,
    args: [{
      selector: "system-form",
      template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form system class="flex w-full flex-col">
                    @if (form.zone && !item().id) {
                        <div class="field">
                            <label
                                for="zone"
                                id="zone-label"
                                [class.error]="
                                    form.zone().invalid() &&
                                    form.zone().touched()
                                "
                            >
                                {{ 'ZONES.SINGULAR' | translate }}<span>*</span>
                            </label>
                            <item-search-field
                                id="zone"
                                role="group"
                                aria-labelledby="zone-label"
                                [query_fn]="query_fn"
                                [formField]="form.zone"
                            />
                            @if (
                                form.zone().invalid() && form.zone().touched()
                            ) {
                                <div class="error">
                                    {{ 'SYSTEMS.ZONE_REQUIRED' | translate }}
                                </div>
                            }
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="system-name"
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
                                        id="system-name"
                                        placeholder="System Name"
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <div error>
                                            {{
                                                'SYSTEMS.NAME_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                </app-form-field>
                            </div>
                        }
                        @if (form.email) {
                            <div class="field">
                                <label
                                    for="system-email"
                                    [class.error]="
                                        form.email().invalid() &&
                                        form.email().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_EMAIL' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="system-email"
                                        [placeholder]="
                                            'COMMON.FIELD_EMAIL' | translate
                                        "
                                        [formField]="form.email"
                                    />
                                    @if (form.email().invalid()) {
                                        <div error>
                                            {{
                                                'SYSTEMS.EMAIL_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                </app-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.display_name) {
                            <div class="field">
                                <label for="display-name">
                                    {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="display-name"
                                        [placeholder]="
                                            'SYSTEMS.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.code) {
                            <div class="field">
                                <label for="code-name"
                                    >{{ 'SYSTEMS.CODE' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="code-name"
                                        [placeholder]="
                                            'SYSTEMS.CODE' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.support_url) {
                        <div class="field">
                            <label
                                for="support-url"
                                [class.error]="
                                    form.support_url().invalid() &&
                                    form.support_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="support-url"
                                    [placeholder]="
                                        'SYSTEMS.SUPPORT_URL' | translate
                                    "
                                    [formField]="form.support_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        @if (form.installed_ui_devices) {
                            <div class="field">
                                <label
                                    for="ui-devices"
                                    id="ui-devices-label"
                                    [class.error]="
                                        form.installed_ui_devices().invalid() &&
                                        form.installed_ui_devices().touched()
                                    "
                                >
                                    {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                                </label>
                                <a-counter
                                    id="ui-devices"
                                    role="group"
                                    aria-labelledby="ui-devices-label"
                                    [formField]="form.installed_ui_devices"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                        @if (form.capacity) {
                            <div class="field">
                                <label
                                    for="capacity"
                                    id="capacity-label"
                                    [class.error]="
                                        form.capacity().invalid() &&
                                        form.capacity().touched()
                                    "
                                >
                                    {{ 'SYSTEMS.CAPACITY' | translate }}
                                </label>
                                <a-counter
                                    id="capacity"
                                    role="group"
                                    aria-labelledby="capacity-label"
                                    [formField]="form.capacity"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex items-center space-x-4">
                        <settings-toggle
                            [label]="'SYSTEMS.BOOKABLE' | translate"
                            class="flex-1"
                            [formField]="form.bookable"
                        />
                        <settings-toggle
                            [label]="'SYSTEMS.SIGNAGE' | translate"
                            class="flex-1"
                            [formField]="form.signage"
                        />
                        <settings-toggle
                            [label]="'SYSTEMS.PUBLIC' | translate"
                            class="flex-1"
                            [formField]="form.public"
                        />
                    </div>
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
                    @if (form.features) {
                        <div class="field">
                            <label
                                for="feature-list"
                                [class.error]="
                                    form.features().invalid() &&
                                    form.features().touched()
                                "
                            >
                                {{ 'SYSTEMS.FEATURES' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="feature-list"
                                    [attr.aria-label]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                    [placeholder]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.features"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.security_groups) {
                        <div class="field">
                            <label
                                for="security-group-list"
                                [class.error]="
                                    form.security_groups().invalid() &&
                                    form.security_groups().touched()
                                "
                            >
                                {{ 'SYSTEMS.SECURITY_GROUPS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="security-group-list"
                                    aria-label="Security Group List"
                                    [placeholder]="
                                        'SYSTEMS.SECURITY_GROUPS' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.security_groups"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.map_id) {
                        <div class="field">
                            <label for="map_id">{{
                                'SYSTEMS.MAP_ID' | translate
                            }}</label>
                            <app-form-field>
                                <input
                                    id="map_id"
                                    placeholder="Map SVG ID selector e.g. area-01.10-status"
                                    [formField]="form.map_id"
                                />
                            </app-form-field>
                        </div>
                    }
                    <div class="field">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <app-form-field>
                            <div class="prefix" prefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                            <input
                                id="timezone"
                                [formField]="form.timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [appAutocomplete]="auto"
                            />
                        </app-form-field>
                        <app-autocomplete #auto="appAutocomplete">
                            @for (tz of filtered_timezones(); track tz) {
                                <app-option [value]="tz">
                                    {{ tz }}
                                </app-option>
                            }
                            @if (!filtered_timezones().length) {
                                <app-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </app-option>
                            }
                        </app-autocomplete>
                    </div>
                    @if (form.images) {
                        <div class="field">
                            <label for="images" id="images-label">{{
                                'COMMON.IMAGES' | translate
                            }}</label>
                            <image-list-field
                                id="images"
                                role="group"
                                aria-labelledby="images-label"
                                [formField]="form.images"
                            />
                        </div>
                    }
                    @if (form.timetable_url) {
                        <div class="field">
                            <label
                                for="timetable-url"
                                [class.error]="
                                    form.timetable_url().invalid() &&
                                    form.timetable_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.TIMETABLE_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="timetable-url"
                                    [placeholder]="
                                        'SYSTEMS.TIMETABLE_URL' | translate
                                    "
                                    [formField]="form.timetable_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (form.camera_url) {
                        <div class="field">
                            <label
                                for="camera-url"
                                [class.error]="
                                    form.camera_url().invalid() &&
                                    form.camera_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.CAMERA_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="camera-url"
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_URL' | translate
                                    "
                                    [formField]="form.camera_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (form.camera_snapshot_urls) {
                        <div class="field">
                            <label
                                for="camera-snap-url"
                                [class.error]="
                                    form.camera_snapshot_urls().invalid() &&
                                    form.camera_snapshot_urls().touched()
                                "
                            >
                                {{ 'SYSTEMS.CAMERA_SNAPSHOT_URL' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="camera-snap-url"
                                    aria-label="Camera Snapshot URL List"
                                    editable
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_SNAPSHOT_URL'
                                            | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.camera_snapshot_urls"
                                />
                                @if (form.camera_snapshot_urls().invalid()) {
                                    <div error>
                                        {{ 'SYSTEMS.URL_VALID' | translate }}
                                    </div>
                                }
                            </app-form-field>
                        </div>
                    }
                    @if (form.room_booking_url) {
                        <div class="field">
                            <label
                                for="room-booking-url"
                                [class.error]="
                                    form.room_booking_url().invalid() &&
                                    form.room_booking_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.ROOM_BOOKING_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="room-booking-url"
                                    [placeholder]="
                                        'SYSTEMS.ROOM_BOOKING_URL' | translate
                                    "
                                    [formField]="form.room_booking_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
      imports: [
        OptionComponent,
        FormFieldComponent,
        ImageListFieldComponent,
        FormField,
        TranslatePipe,
        IconComponent,
        ChipListComponent,
        SettingsToggleComponent,
        CounterComponent,
        ItemSearchFieldComponent,
        AutocompleteComponent,
        AutocompleteTriggerDirective,
        FullscreenModalShellComponent
      ]
    }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemFormComponent, { className: "SystemFormComponent", filePath: "src/app/systems/system-form.component.ts", lineNumber: 517 });
})();
export {
  SystemFormComponent
};
//# debugId=4479cb4c-8062-5368-8555-87e8fb15ecc2
//# sourceMappingURL=chunk-XQE7S2MR.js.map
