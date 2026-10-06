import {
  subtreeFilter
} from "./chunk-ZEZ65MC2.js";
import {
  ImageListFieldComponent
} from "./chunk-TBVTPMHI.js";
import {
  TIMEZONES_IANA
} from "./chunk-M5OKD622.js";
import {
  CounterComponent
} from "./chunk-HOAZWAYL.js";
import "./chunk-PVCSIVJP.js";
import "./chunk-YZFSOCDR.js";
import "./chunk-QQ75UKDL.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-D2UW5FFM.js";
import {
  querySupportZones
} from "./chunk-DG5F5M2I.js";
import {
  ItemSearchFieldComponent
} from "./chunk-O4WOCGMX.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-77EWWK2U.js";
import "./chunk-5DZHHUHH.js";
import "./chunk-4MSIA662.js";
import "./chunk-RFD5AOWN.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-QBQ5C53A.js";
import {
  FullscreenModalShellComponent
} from "./chunk-NPIW26D2.js";
import {
  HotkeysService
} from "./chunk-WSH7C5JM.js";
import "./chunk-M2O6T64P.js";
import {
  readError
} from "./chunk-G3IJGLD4.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-SDGTGI2H.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-66VCHSRY.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-S3MO7QJA.js";
import "./chunk-HS6BVHDB.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-XMG57YWH.js";
import "./chunk-W6NODITO.js";
import {
  MatOption
} from "./chunk-PNGPFML7.js";
import "./chunk-4G55JYYO.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ETRW4JH6.js";
import {
  COMMA,
  ENTER,
  IconComponent,
  SPACE
} from "./chunk-MKMIAR67.js";
import "./chunk-IWUSEH7D.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  dh,
  effect,
  inject,
  lh,
  oi,
  ph,
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
  ɵɵelement,
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
} from "./chunk-M2N6S2L7.js";
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
var _c0 = (a0) => ({ item: a0 });
function ZoneFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-search-field", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 7);
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ZONES.NAME_REQUIRED"));
  }
}
function ZoneFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
function ZoneFormComponent_Conditional_1_Conditional_5_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 24);
    \u0275\u0275listener("removed", function ZoneFormComponent_Conditional_1_Conditional_5_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeTag(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 26);
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
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c0, item_r4)));
  }
}
function ZoneFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 21)(5, "mat-chip-grid", 22, 1);
    \u0275\u0275repeaterCreate(7, ZoneFormComponent_Conditional_1_Conditional_5_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function ZoneFormComponent_Conditional_1_Conditional_5_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addTag($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.tags().invalid() && ctx_r0.form.tags().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "ZONES.TAGS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.tag_list);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 9, "ZONES.TAGS"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function ZoneFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "textarea", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 30);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    \u0275\u0275property("value", tz_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tz_r6);
  }
}
function ZoneFormComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 32);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 34);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 39);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "image-list-field", 41);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "form", 3);
    \u0275\u0275conditionalCreate(1, ZoneFormComponent_Conditional_1_Conditional_1_Template, 6, 9, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275conditionalCreate(3, ZoneFormComponent_Conditional_1_Conditional_3_Template, 12, 12, "div", 4);
    \u0275\u0275conditionalCreate(4, ZoneFormComponent_Conditional_1_Conditional_4_Template, 7, 9, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ZoneFormComponent_Conditional_1_Conditional_5_Template, 11, 11, "div", 4);
    \u0275\u0275conditionalCreate(6, ZoneFormComponent_Conditional_1_Conditional_6_Template, 7, 7, "div", 4);
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275conditionalCreate(8, ZoneFormComponent_Conditional_1_Conditional_8_Template, 7, 7, "div", 4);
    \u0275\u0275elementStart(9, "div", 4)(10, "label", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "div", 8)(15, "icon", 9);
    \u0275\u0275text(16, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "input", 10);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(21, ZoneFormComponent_Conditional_1_For_22_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(23, ZoneFormComponent_Conditional_1_Conditional_23_Template, 3, 4, "mat-option", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 5);
    \u0275\u0275conditionalCreate(25, ZoneFormComponent_Conditional_1_Conditional_25_Template, 7, 7, "div", 4);
    \u0275\u0275conditionalCreate(26, ZoneFormComponent_Conditional_1_Conditional_26_Template, 7, 7, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 13);
    \u0275\u0275conditionalCreate(28, ZoneFormComponent_Conditional_1_Conditional_28_Template, 5, 6, "div", 4);
    \u0275\u0275conditionalCreate(29, ZoneFormComponent_Conditional_1_Conditional_29_Template, 5, 6, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ZoneFormComponent_Conditional_1_Conditional_30_Template, 7, 7, "div", 4);
    \u0275\u0275conditionalCreate(31, ZoneFormComponent_Conditional_1_Conditional_31_Template, 5, 4, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(20);
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
    \u0275\u0275property("formField", ctx_r0.form.timezone)("placeholder", \u0275\u0275pipeBind1(18, 19, "COMMON.TIMEZONE"))("matAutocomplete", auto_r7);
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
var ZoneFormComponent = class _ZoneFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
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
      return this.timezones.filter((_tz) => _tz.toLowerCase().includes(search));
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
    super();
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
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  _excludeSubtree = subtreeFilter((id) => lh(id));
  /** Query function for zones. Hides this zone's descendants to prevent cycles */
  query_fn = (_) => querySupportZones({ q: _ }).then((resp) => this._excludeSubtree(resp.data, this.formModel().id));
  /** Function to exclude zones */
  exclude = (zone) => zone.id === this.formModel().id;
  addTag = (e) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    tags: addSignalChipItem(value.tags, e)
  }));
  removeTag = (i) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    tags: removeSignalChipItem(value.tags, i)
  }));
  get tag_list() {
    return this.formModel().tags;
  }
  ngOnInit() {
    this.updateZone();
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const _a = this.formModel(), { parent_zone: _parent_zone } = _a, form_value = __objRest(_a, ["parent_zone"]);
      const form_item = item.id ? oi(__spreadValues(__spreadValues({}, item_json), form_value), [void 0]) : __spreadValues(__spreadValues({}, item_json), form_value);
      try {
        const _item = await (form_item.id ? ph(form_item.id, form_item) : dh(form_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
        this._dialog_ref.close();
      } catch (err) {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
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
  /** Show the stored parent zone in the picker. `parent_id` stays as stored */
  async updateZone() {
    const parent_id = this.formModel().parent_id;
    if (!parent_id)
      return;
    const zone = await lh(parent_id).catch(() => null);
    if (!zone || this.form.parent_zone().dirty())
      return;
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { parent_zone: zone }));
  }
  static \u0275fac = function ZoneFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneFormComponent, selectors: [["zone-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["auto", "matAutocomplete"], ["chipList", ""], [3, "save", "heading", "loading"], ["zone", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], ["for", "timezone"], ["appearance", "outline"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", "id", "timezone", 3, "formField", "placeholder", "matAutocomplete"], [3, "value"], [3, "disabled"], [1, "fieldset", "mb-4"], ["for", "parent-zone"], [3, "placeholder", "query_fn", "exclude", "formField"], ["for", "zone-name"], ["matInput", "", "id", "zone-name", 3, "placeholder", "formField"], ["for", "zone-display"], ["matInput", "", "id", "zone-display", 3, "placeholder", "formField"], ["for", "tags"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Tag List"], ["id", "tags", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""], ["for", "description"], ["matInput", "", "id", "description", 3, "placeholder", "formField"], ["for", "location"], ["matInput", "", "id", "location", 3, "placeholder", "formField"], ["for", "code"], ["matInput", "", "id", "code", 3, "placeholder", "formField"], ["for", "type"], ["matInput", "", "id", "type", 3, "placeholder", "formField"], ["for", "count"], [3, "formField", "min", "max"], ["for", "capacity"], ["for", "map"], ["matInput", "", "id", "map", 3, "placeholder", "formField"], ["for", "images"], [3, "formField"]], template: function ZoneFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 2);
      \u0275\u0275listener("save", function ZoneFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, ZoneFormComponent_Conditional_1_Template, 32, 21, "form", 3);
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
    IconComponent,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatPrefix,
    MatInputModule,
    MatInput,
    CounterComponent,
    MatAutocompleteModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="zone-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        [formField]="form.name"
                                    />
                                    <mat-error>{{
                                        'ZONES.NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="zone-display"
                                        [placeholder]="
                                            'ZONES.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid #chipList aria-label="Tag List">
                                    @for (item of tag_list; track item) {
                                        <mat-chip-row
                                            (removed)="removeTag(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.ITEM_REMOVE'
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
                                    id="tags"
                                    [placeholder]="'ZONES.TAGS' | translate"
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addTag($event)"
                                />
                            </mat-form-field>
                        </div>
                    }
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
                    <div class="fieldset">
                        @if (form.location) {
                            <div class="field">
                                <label for="location">{{
                                    'ZONES.LOCATION' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="location"
                                        [placeholder]="
                                            'ZONES.LOCATION_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.location"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        <div class="field">
                            <label for="timezone">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </label>
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
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [matAutocomplete]="auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                @for (tz of filtered_timezones(); track tz) {
                                    <mat-option [value]="tz">{{
                                        tz
                                    }}</mat-option>
                                }
                                @if (!filtered_timezones().length) {
                                    <mat-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                    </div>
                    <div class="fieldset">
                        @if (form.code) {
                            <div class="field">
                                <label for="code">{{
                                    'ZONES.CODE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="code"
                                        [placeholder]="
                                            'ZONES.CODE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.type) {
                            <div class="field">
                                <label for="type">{{
                                    'ZONES.TYPE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="type"
                                        [placeholder]="
                                            'ZONES.TYPE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.type"
                                    />
                                </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="map"
                                    [placeholder]="'ZONES.MAP_URL' | translate"
                                    [formField]="form.map_id"
                                />
                            </mat-form-field>
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
      ImageListFieldComponent,
      FormField,
      TranslatePipe,
      IconComponent,
      MatFormFieldModule,
      MatInputModule,
      CounterComponent,
      MatAutocompleteModule,
      MatChipsModule,
      ItemSearchFieldComponent,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneFormComponent, { className: "ZoneFormComponent", filePath: "src/app/zones/zone-form.component.ts", lineNumber: 344 });
})();
export {
  ZoneFormComponent
};
//# sourceMappingURL=chunk-6KRGETYL.js.map
