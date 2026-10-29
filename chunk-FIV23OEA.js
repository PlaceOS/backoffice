import {
  ImageListFieldComponent
} from "./chunk-TGHN4NIZ.js";
import {
  TIMEZONES_IANA
} from "./chunk-75HSUIQO.js";
import {
  CounterComponent
} from "./chunk-B6GGPZBI.js";
import "./chunk-Q62IFOOI.js";
import {
  applySystemFormSchema,
  generateSystemFormModel
} from "./chunk-JXUAR4FT.js";
import "./chunk-73ZIQ5ZT.js";
import {
  MatChipEdit,
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-2UWSTQYO.js";
import {
  ItemSearchFieldComponent
} from "./chunk-INR5SBJH.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-75QZBWCP.js";
import "./chunk-266GOI67.js";
import "./chunk-WKU6NAJG.js";
import {
  addSignalChipItem,
  editSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-NTASD32E.js";
import {
  FullscreenModalShellComponent
} from "./chunk-5P6KHGZB.js";
import "./chunk-R3V5YJKZ.js";
import {
  HotkeysService
} from "./chunk-KZLWJTDG.js";
import "./chunk-QWYCVKRD.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  querySupportZones
} from "./chunk-F2UXRHVQ.js";
import {
  SettingsToggleComponent
} from "./chunk-HPS63TJZ.js";
import "./chunk-JIKSLL3H.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-QUK2HLQJ.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  form,
  submit
} from "./chunk-W2EPZJRF.js";
import "./chunk-SBWE5ILJ.js";
import "./chunk-DQFIZL2Z.js";
import "./chunk-HAWZID7H.js";
import "./chunk-ARTOYARZ.js";
import "./chunk-S6TBIU6L.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-LKZDNNIZ.js";
import {
  AsyncHandler
} from "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-4K4B4UVA.js";
import {
  MatOption
} from "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import "./chunk-TUNU3FRP.js";
import "./chunk-52KP2JDE.js";
import {
  TranslatePipe
} from "./chunk-XTQWFJN3.js";
import {
  i18n
} from "./chunk-V4STGI54.js";
import "./chunk-AOPYKUKV.js";
import {
  Pa,
  ci,
  qa
} from "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-GPNEKEBR.js";
import "./chunk-NHAMJPH5.js";
import {
  COMMA,
  ENTER,
  SPACE
} from "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
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
  ɵɵInheritDefinitionFeature,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HGOGRFKW.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/systems/system-form.component.ts
var _c0 = (a0) => ({ item: a0 });
var _c1 = (a0) => ({ name: a0 });
function SystemFormComponent_Conditional_1_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "item-search-field", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_1_Conditional_7_Template, 3, 3, "div", 20);
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
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SYSTEMS.NAME_REQUIRED"));
  }
}
function SystemFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 12)(7, "input", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SystemFormComponent_Conditional_1_Conditional_3_Conditional_8_Template, 3, 3, "mat-error");
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
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SYSTEMS.EMAIL_REQUIRED"));
  }
}
function SystemFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_4_Conditional_7_Template, 3, 3, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 26);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 28);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 32);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-counter", 34);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "textarea", 36);
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
function SystemFormComponent_Conditional_1_Conditional_20_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 40);
    \u0275\u0275listener("removed", function SystemFormComponent_Conditional_1_Conditional_20_For_9_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFeature(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "SYSTEMS.REMOVE_ITEM", \u0275\u0275pureFunction1(5, _c0, item_r4)));
  }
}
function SystemFormComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 38)(5, "mat-chip-grid", null, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, SystemFormComponent_Conditional_1_Conditional_20_For_9_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 39);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function SystemFormComponent_Conditional_1_Conditional_20_Template_input_matChipInputTokenEnd_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFeature($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.features().invalid() && ctx_r0.form.features().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "SYSTEMS.FEATURES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "SYSTEMS.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.feature_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "SYSTEMS.FEATURES"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function SystemFormComponent_Conditional_1_Conditional_21_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 40);
    \u0275\u0275listener("removed", function SystemFormComponent_Conditional_1_Conditional_21_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeSecurityGroup(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "SYSTEMS.REMOVE_ITEM", \u0275\u0275pureFunction1(5, _c0, item_r8)));
  }
}
function SystemFormComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 38)(5, "mat-chip-grid", 44, 2);
    \u0275\u0275repeaterCreate(7, SystemFormComponent_Conditional_1_Conditional_21_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 45);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function SystemFormComponent_Conditional_1_Conditional_21_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addSecurityGroup($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const securityGroupChipList_r9 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.security_groups().invalid() && ctx_r0.form.security_groups().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "SYSTEMS.SECURITY_GROUPS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.security_group_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "SYSTEMS.SECURITY_GROUPS"))("matChipInputFor", securityGroupChipList_r9)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function SystemFormComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 47);
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
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r10 = ctx.$implicit;
    \u0275\u0275property("value", tz_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r10, " ");
  }
}
function SystemFormComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "image-list-field", 49);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 51);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 53);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
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
function SystemFormComponent_Conditional_1_Conditional_41_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 58);
    \u0275\u0275listener("edited", function SystemFormComponent_Conditional_1_Conditional_41_For_8_Template_mat_chip_row_edited_0_listener($event) {
      const item_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editCameraSnapshotUrl(item_r13, $event));
    })("removed", function SystemFormComponent_Conditional_1_Conditional_41_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeCameraSnapshotUrl(item_r13));
    });
    \u0275\u0275elementStart(1, "button", 59);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 42);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("value", item_r13)("editable", true);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(2, 5, "COMMON.EDIT_TYPE", \u0275\u0275pureFunction1(11, _c1, item_r13)));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r13, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(8, 8, "SYSTEMS.REMOVE_ITEM", \u0275\u0275pureFunction1(13, _c0, item_r13)));
  }
}
function SystemFormComponent_Conditional_1_Conditional_41_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
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
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 38)(5, "mat-chip-grid", 55, 3);
    \u0275\u0275repeaterCreate(7, SystemFormComponent_Conditional_1_Conditional_41_For_8_Template, 11, 15, "mat-chip-row", 56, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 57);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function SystemFormComponent_Conditional_1_Conditional_41_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addCameraSnapshotUrl($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, SystemFormComponent_Conditional_1_Conditional_41_Conditional_11_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cameraSnapshotChipList_r14 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.camera_snapshot_urls().invalid() && ctx_r0.form.camera_snapshot_urls().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "SYSTEMS.CAMERA_SNAPSHOT_URL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.camera_snapshot_url_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 10, "SYSTEMS.CAMERA_SNAPSHOT_URL"))("matChipInputFor", cameraSnapshotChipList_r14)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.camera_snapshot_urls().invalid() ? 11 : -1);
  }
}
function SystemFormComponent_Conditional_1_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 60);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "input", 61);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
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
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275conditionalCreate(1, SystemFormComponent_Conditional_1_Conditional_1_Template, 8, 8, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275conditionalCreate(3, SystemFormComponent_Conditional_1_Conditional_3_Template, 9, 7, "div", 6);
    \u0275\u0275conditionalCreate(4, SystemFormComponent_Conditional_1_Conditional_4_Template, 8, 10, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275conditionalCreate(6, SystemFormComponent_Conditional_1_Conditional_6_Template, 7, 7, "div", 6);
    \u0275\u0275conditionalCreate(7, SystemFormComponent_Conditional_1_Conditional_7_Template, 7, 7, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, SystemFormComponent_Conditional_1_Conditional_8_Template, 10, 12, "div", 6);
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275conditionalCreate(10, SystemFormComponent_Conditional_1_Conditional_10_Template, 5, 8, "div", 6);
    \u0275\u0275conditionalCreate(11, SystemFormComponent_Conditional_1_Conditional_11_Template, 5, 8, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "settings-toggle", 10);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "settings-toggle", 10);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "settings-toggle", 10);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, SystemFormComponent_Conditional_1_Conditional_19_Template, 7, 7, "div", 6);
    \u0275\u0275conditionalCreate(20, SystemFormComponent_Conditional_1_Conditional_20_Template, 12, 14, "div", 6);
    \u0275\u0275conditionalCreate(21, SystemFormComponent_Conditional_1_Conditional_21_Template, 11, 11, "div", 6);
    \u0275\u0275conditionalCreate(22, SystemFormComponent_Conditional_1_Conditional_22_Template, 6, 4, "div", 6);
    \u0275\u0275elementStart(23, "div", 6)(24, "label", 11);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 12)(28, "div", 13)(29, "icon", 14);
    \u0275\u0275text(30, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 15);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(35, SystemFormComponent_Conditional_1_For_36_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(37, SystemFormComponent_Conditional_1_Conditional_37_Template, 3, 4, "mat-option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(38, SystemFormComponent_Conditional_1_Conditional_38_Template, 5, 4, "div", 6);
    \u0275\u0275conditionalCreate(39, SystemFormComponent_Conditional_1_Conditional_39_Template, 10, 12, "div", 6);
    \u0275\u0275conditionalCreate(40, SystemFormComponent_Conditional_1_Conditional_40_Template, 10, 12, "div", 6);
    \u0275\u0275conditionalCreate(41, SystemFormComponent_Conditional_1_Conditional_41_Template, 12, 12, "div", 6);
    \u0275\u0275conditionalCreate(42, SystemFormComponent_Conditional_1_Conditional_42_Template, 10, 12, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r15 = \u0275\u0275reference(34);
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
    \u0275\u0275property("formField", ctx_r0.form.timezone)("placeholder", \u0275\u0275pipeBind1(32, 36, "COMMON.TIMEZONE"))("matAutocomplete", auto_r15);
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
var SystemFormComponent = class _SystemFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "SYSTEMS";
  _hotkey = inject(HotkeysService);
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
  feature_list = computed(
    () => this.formModel().features || [],
    ...ngDevMode ? [{ debugName: "feature_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  camera_snapshot_url_list = computed(
    () => this.formModel().camera_snapshot_urls || [],
    ...ngDevMode ? [{ debugName: "camera_snapshot_url_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  security_group_list = computed(
    () => this.formModel().security_groups || [],
    ...ngDevMode ? [{ debugName: "security_group_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Function for querying zones */
  query_fn = (_) => querySupportZones({ q: _ }).then((resp) => resp.data);
  /** List of separator characters for features */
  separators = [ENTER, COMMA, SPACE];
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
    super();
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
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    if (this.loading())
      return;
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      const item_json = item.toJSON ? item.toJSON() : item;
      const _a = this.formModel(), { zone: _zone } = _a, form_value = __objRest(_a, ["zone"]);
      const form_item = item.id ? ci(__spreadValues(__spreadValues({}, item_json), form_value), [void 0]) : __spreadValues(__spreadValues({}, item_json), form_value);
      const processed_item = __spreadProps(__spreadValues({}, form_item), {
        support_url: this.processURL(form_item, form_item.support_url || "")
      });
      try {
        const _item = await (processed_item.id ? qa(processed_item.id, processed_item) : Pa(processed_item));
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
        this._dialog_ref.close();
      } catch (err) {
        this.loading.set(null);
        notifyError(i18n(`${this._name}.SAVE_ERROR`, {
          error: await readError(err)
        }));
      }
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addFeature(event) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      features: addSignalChipItem(value.features, event)
    }));
  }
  /**
   * Remove feature from the list
   * @param existing_feature Feature to remove
   */
  removeFeature(existing_feature) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      features: removeSignalChipItem(value.features, existing_feature)
    }));
  }
  addCameraSnapshotUrl(event) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      camera_snapshot_urls: addSignalChipItem(value.camera_snapshot_urls, event)
    }));
  }
  editCameraSnapshotUrl(url, event) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      camera_snapshot_urls: editSignalChipItem(value.camera_snapshot_urls, url, event)
    }));
  }
  removeCameraSnapshotUrl(url) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      camera_snapshot_urls: removeSignalChipItem(value.camera_snapshot_urls, url)
    }));
  }
  addSecurityGroup(event) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      security_groups: addSignalChipItem(value.security_groups, event)
    }));
  }
  removeSecurityGroup(group) {
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      security_groups: removeSignalChipItem(value.security_groups, group)
    }));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemFormComponent, selectors: [["system-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["auto", "matAutocomplete"], ["chipList", ""], ["securityGroupChipList", ""], ["cameraSnapshotChipList", ""], [3, "save", "heading", "loading"], ["system", "", 1, "flex", "w-full", "flex-col"], [1, "field"], [1, "fieldset"], [1, "fieldset", "mb-4"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "flex-1", 3, "label", "formField"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "id", "timezone", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], ["for", "zone", "id", "zone-label"], ["id", "zone", "role", "group", "aria-labelledby", "zone-label", 3, "query_fn", "formField"], [1, "error"], ["for", "system-name"], ["matInput", "", "id", "system-name", "placeholder", "System Name", 3, "formField"], ["for", "system-email"], ["matInput", "", "id", "system-email", 3, "placeholder", "formField"], ["for", "display-name"], ["matInput", "", "id", "display-name", 3, "placeholder", "formField"], ["for", "code-name"], ["matInput", "", "id", "code-name", 3, "placeholder", "formField"], ["for", "support-url"], ["matInput", "", "id", "support-url", 3, "placeholder", "formField"], ["for", "ui-devices", "id", "ui-devices-label"], ["id", "ui-devices", "role", "group", "aria-labelledby", "ui-devices-label", 3, "formField", "min", "max"], ["for", "capacity", "id", "capacity-label"], ["id", "capacity", "role", "group", "aria-labelledby", "capacity-label", 3, "formField", "min", "max"], ["for", "description"], ["matInput", "", "id", "description", 3, "placeholder", "formField"], ["for", "feature-list"], ["appearance", "outline", 1, "w-full"], ["id", "feature-list", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""], ["for", "security-group-list"], ["aria-label", "Security Group List"], ["id", "security-group-list", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["for", "map_id"], ["matInput", "", "id", "map_id", "placeholder", "Map SVG ID selector e.g. area-01.10-status", 3, "formField"], ["for", "images", "id", "images-label"], ["id", "images", "role", "group", "aria-labelledby", "images-label", 3, "formField"], ["for", "timetable-url"], ["matInput", "", "id", "timetable-url", 3, "placeholder", "formField"], ["for", "camera-url"], ["matInput", "", "id", "camera-url", 3, "placeholder", "formField"], ["for", "camera-snap-url"], ["aria-label", "Camera Snapshot URL List"], [3, "value", "editable"], ["id", "camera-snap-url", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "edited", "removed", "value", "editable"], ["type", "button", "matChipEdit", ""], ["for", "room-booking-url"], ["matInput", "", "id", "room-booking-url", 3, "placeholder", "formField"]], template: function SystemFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 4);
      \u0275\u0275listener("save", function SystemFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, SystemFormComponent_Conditional_1_Template, 43, 38, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    ImageListFieldComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    IconComponent,
    MatChipsModule,
    MatChipEdit,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    SettingsToggleComponent,
    CounterComponent,
    ItemSearchFieldComponent,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    FullscreenModalShellComponent,
    TranslatePipe
  ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n.mat-mdc-chip-edit[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=system-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemFormComponent, [{
    type: Component,
    args: [{ selector: "system-form", template: `
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="system-name"
                                        placeholder="System Name"
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <mat-error>{{
                                            'SYSTEMS.NAME_REQUIRED' | translate
                                        }}</mat-error>
                                    }
                                </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="system-email"
                                        [placeholder]="
                                            'COMMON.FIELD_EMAIL' | translate
                                        "
                                        [formField]="form.email"
                                    />
                                    @if (form.email().invalid()) {
                                        <mat-error>{{
                                            'SYSTEMS.EMAIL_REQUIRED' | translate
                                        }}</mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.display_name) {
                            <div class="field">
                                <label for="display-name">
                                    {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="display-name"
                                        [placeholder]="
                                            'SYSTEMS.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.code) {
                            <div class="field">
                                <label for="code-name"
                                    >{{ 'SYSTEMS.CODE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="code-name"
                                        [placeholder]="
                                            'SYSTEMS.CODE' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="support-url"
                                    [placeholder]="
                                        'SYSTEMS.SUPPORT_URL' | translate
                                    "
                                    [formField]="form.support_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    [attr.aria-label]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                >
                                    @for (item of feature_list(); track item) {
                                        <mat-chip-row
                                            (removed)="removeFeature(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'SYSTEMS.REMOVE_ITEM'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="feature-list"
                                    [placeholder]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addFeature($event)"
                                />
                            </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #securityGroupChipList
                                    aria-label="Security Group List"
                                >
                                    @for (
                                        item of security_group_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="
                                                removeSecurityGroup(item)
                                            "
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'SYSTEMS.REMOVE_ITEM'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="security-group-list"
                                    [placeholder]="
                                        'SYSTEMS.SECURITY_GROUPS' | translate
                                    "
                                    [matChipInputFor]="securityGroupChipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addSecurityGroup($event)
                                    "
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.map_id) {
                        <div class="field">
                            <label for="map_id">{{
                                'SYSTEMS.MAP_ID' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="map_id"
                                    placeholder="Map SVG ID selector e.g. area-01.10-status"
                                    [formField]="form.map_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="field">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <div class="prefix" matPrefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                            <input
                                matInput
                                id="timezone"
                                [formField]="form.timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of filtered_timezones(); track tz) {
                                <mat-option [value]="tz">
                                    {{ tz }}
                                </mat-option>
                            }
                            @if (!filtered_timezones().length) {
                                <mat-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </mat-option>
                            }
                        </mat-autocomplete>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="timetable-url"
                                    [placeholder]="
                                        'SYSTEMS.TIMETABLE_URL' | translate
                                    "
                                    [formField]="form.timetable_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="camera-url"
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_URL' | translate
                                    "
                                    [formField]="form.camera_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #cameraSnapshotChipList
                                    aria-label="Camera Snapshot URL List"
                                >
                                    @for (
                                        item of camera_snapshot_url_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            [value]="item"
                                            [editable]="true"
                                            (edited)="
                                                editCameraSnapshotUrl(
                                                    item,
                                                    $event
                                                )
                                            "
                                            (removed)="
                                                removeCameraSnapshotUrl(item)
                                            "
                                        >
                                            <button
                                                type="button"
                                                matChipEdit
                                                [attr.aria-label]="
                                                    'COMMON.EDIT_TYPE'
                                                        | translate
                                                            : { name: item }
                                                "
                                            >
                                                <icon>edit</icon>
                                            </button>
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'SYSTEMS.REMOVE_ITEM'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="camera-snap-url"
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_SNAPSHOT_URL'
                                            | translate
                                    "
                                    [matChipInputFor]="cameraSnapshotChipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addCameraSnapshotUrl($event)
                                    "
                                />
                                @if (form.camera_snapshot_urls().invalid()) {
                                    <mat-error>
                                        {{ 'SYSTEMS.URL_VALID' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="room-booking-url"
                                    [placeholder]="
                                        'SYSTEMS.ROOM_BOOKING_URL' | translate
                                    "
                                    [formField]="form.room_booking_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      ImageListFieldComponent,
      FormField,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      IconComponent,
      MatChipsModule,
      SettingsToggleComponent,
      CounterComponent,
      ItemSearchFieldComponent,
      MatAutocompleteModule,
      FullscreenModalShellComponent
    ], styles: ["/* angular:styles/component:css;b4726eaba93b1345;/home/runner/work/backoffice/backoffice/src/app/systems/system-form.component.ts */\nmat-checkbox {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n.mat-mdc-chip-edit {\n  z-index: 1;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=system-form.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemFormComponent, { className: "SystemFormComponent", filePath: "src/app/systems/system-form.component.ts", lineNumber: 663 });
})();
export {
  SystemFormComponent
};
//# debugId=be2ffe02-9f3c-5ca4-bfca-80001bf88ab5
//# sourceMappingURL=chunk-FIV23OEA.js.map
