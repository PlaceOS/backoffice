import {
  ItemSearchFieldComponent
} from "./chunk-OTR7JKZA.js";
import "./chunk-R5EDKAWG.js";
import {
  mergeFormItem,
  onSaveHotkey,
  submitFormDialog
} from "./chunk-MNQC7PXT.js";
import {
  FullscreenModalShellComponent
} from "./chunk-RSZG7SBF.js";
import {
  ACTIONS,
  applyModuleFormSchema,
  generateModuleFormModel
} from "./chunk-L53BB3NN.js";
import "./chunk-SYZRTR66.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-SVCRV2SB.js";
import "./chunk-23KR5P22.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WI4F7QUZ.js";
import "./chunk-N7V3DZSR.js";
import "./chunk-KP6LUFKO.js";
import {
  isSubsystemUser,
  querySupportSystems
} from "./chunk-X3HUV4CQ.js";
import "./chunk-TVHKFUKR.js";
import "./chunk-V2X4XHND.js";
import "./chunk-UONBBRS5.js";
import "./chunk-PXU3R4CZ.js";
import "./chunk-OTF7M54K.js";
import {
  SettingsToggleComponent
} from "./chunk-R4757DZB.js";
import {
  SelectComponent
} from "./chunk-NVRGEP5J.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import {
  FormField,
  form
} from "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import {
  DIALOG_DATA,
  DialogRef
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-KPU65NDH.js";
import {
  i18n
} from "./chunk-MSK6KGG6.js";
import {
  drivers_exports,
  edges_exports,
  systems_exports
} from "./chunk-K7DUQFI6.js";
import {
  PlaceDriverRole,
  orThrow,
  orThrowPage
} from "./chunk-4MDDUS4W.js";
import "./chunk-Y2QSYZTA.js";
import "./chunk-4FRKWO6Y.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-D65IW4Y5.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/modules/module-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ModuleFormComponent_Conditional_1_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.DRIVER_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "item-search-field", 4);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ModuleFormComponent_Conditional_1_Conditional_1_Conditional_7_Template, 3, 3, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.driver().invalid() && ctx_r0.form.driver().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DRIVERS.SINGULAR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("query_fn", ctx_r0.driver_query_fn)("formField", ctx_r0.form.driver);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.driver().invalid() && ctx_r0.form.driver().touched() ? 7 : -1);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.SYSTEM_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "item-search-field", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_5_Conditional_1_Template, 3, 3, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("query_fn", ctx_r0.system_query_fn)("formField", ctx_r0.form.system);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.system().invalid() && ctx_r0.form.system().touched() ? 1 : -1);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formModel().system?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formModel().system?.id);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_5_Template, 2, 3)(6, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Conditional_6_Template, 4, 2, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.system().invalid() && ctx_r0.form.system().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "MODULES.CONTROL_SYSTEM"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.role() === "logic" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.is_readonly ? 5 : 6);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.uri().invalid() && ctx_r0.form.uri().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "MODULES.URI"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "MODULES.URI"))("formField", ctx_r0.form.uri);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "MODULES.URI_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.IP_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, " * ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_3_Conditional_8_Template, 3, 3, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.ip().invalid() && ctx_r0.form.ip().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "MODULES.FIELD_IP"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r0.form.ip);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.ip().invalid() ? 8 : -1);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.PORT_REQUIRED"), " ");
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, " * ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 18);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_4_Conditional_9_Template, 3, 3, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.port().invalid() && ctx_r0.form.port().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "MODULES.PORT_NUMBER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "MODULES.PORT_NUMBER"))("formField", ctx_r0.form.port);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.port().invalid() ? 9 : -1);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "COMMON.TLS"))("formField", ctx_r0.form.tls);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "COMMON.UDP"))("formField", ctx_r0.form.udp);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "MODULES.MAKEBREAK"))("formField", ctx_r0.form.makebreak);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "MODULES.IGNORE_CONNECTED"))("formField", ctx_r0.form.ignore_connected);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, level_r2.name), " ");
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "app-select", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275repeaterCreate(6, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_10_For_7_Template, 3, 4, "app-option", 21, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALERT_LEVEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.alert_level);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.alert_levels);
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.NOTES"))("formField", ctx_r0.form.notes);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "MODULES.CUSTOM_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "MODULES.CUSTOM_NAME"))("formField", ctx_r0.form.custom_name);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "item-search-field", 27);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "COMMON.EDGE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "COMMON.EDGE_SEARCH"))("query_fn", ctx_r0.edge_query_fn)("formField", ctx_r0.form.edge);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_0_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_1_Template, 12, 12, "div", 2);
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275conditionalCreate(3, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_3_Template, 9, 7, "div", 2);
    \u0275\u0275conditionalCreate(4, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_4_Template, 10, 10, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275conditionalCreate(6, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_6_Template, 2, 4, "settings-toggle", 8);
    \u0275\u0275conditionalCreate(7, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_7_Template, 2, 4, "settings-toggle", 8);
    \u0275\u0275conditionalCreate(8, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_8_Template, 2, 4, "settings-toggle", 8);
    \u0275\u0275conditionalCreate(9, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_9_Template, 2, 4, "settings-toggle", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_10_Template, 8, 4, "div", 2);
    \u0275\u0275conditionalCreate(11, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_11_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(12, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_12_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(13, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_13_Template, 6, 8, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.form.system && ctx_r0.role() === "logic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.uri && (ctx_r0.role() === "service" || ctx_r0.role() === "websocket") ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.ip && (ctx_r0.role() === "ssh" || ctx_r0.role() === "device") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.port && (ctx_r0.role() === "ssh" || ctx_r0.role() === "device") ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.tls && (ctx_r0.role() === "ssh" || ctx_r0.role() === "device") ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.udp && (ctx_r0.role() === "ssh" || ctx_r0.role() === "device") ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.makebreak && ctx_r0.role() !== "logic" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.ignore_connected && ctx_r0.role() !== "logic" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.alert_level ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.notes ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.custom_name ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.edge && !ctx_r0.formModel().id ? 13 : -1);
  }
}
function ModuleFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_1_Conditional_1_Template, 8, 8, "div", 2);
    \u0275\u0275conditionalCreate(2, ModuleFormComponent_Conditional_1_Conditional_2_Template, 14, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.driver && !ctx_r0.formModel().id ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.formModel().id || ctx_r0.formModel().driver ? 2 : -1);
  }
}
var ModuleFormComponent = class _ModuleFormComponent {
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
  _name = "MODULES";
  event = new EventEmitter();
  formModel = signal(
    generateModuleFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyModuleFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Selected driver. Only changes when a new driver is picked. */
  _selected_driver = computed(
    () => this.formModel().driver,
    ...ngDevMode ? [{ debugName: "_selected_driver" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** ID of the driver whose defaults have been applied to the form */
  _defaults_driver_id = "";
  heading = i18n(`${this._name}.${this._data.item.id ? "EDIT" : "NEW"}`);
  is_readonly = !!this._data.readonly;
  alert_levels = [
    { id: "low", name: "COMMON.ALERT_LOW" },
    { id: "medium", name: "COMMON.ALERT_MEDIUM" },
    { id: "high", name: "COMMON.ALERT_HIGH" },
    { id: "critical", name: "COMMON.ALERT_CRITICAL" }
  ];
  driver_query_fn = (_) => drivers_exports.query(__spreadValues({
    q: _
  }, isSubsystemUser() && !this.formModel().id ? { role: "logic" } : {})).then(orThrowPage).then((resp) => resp.data);
  system_query_fn = (_) => querySupportSystems({ q: _ }).then((resp) => resp.data);
  edge_query_fn = (_) => edges_exports.query({ q: _ }).then(orThrowPage).then((resp) => resp.data);
  /** Role of the selected driver */
  role = computed(
    () => {
      const role = this.formModel().driver?.role ?? this.formModel().role;
      switch (role) {
        case PlaceDriverRole.SSH:
          return "ssh";
        case PlaceDriverRole.Device:
          return "device";
        case PlaceDriverRole.Service:
          return "service";
        case PlaceDriverRole.Websocket:
          return "websocket";
      }
      return "logic";
    },
    ...ngDevMode ? [{ debugName: "role" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const { system, control_system_id } = this.formModel();
    if (control_system_id && !system) {
      systems_exports.show({ sys_id: control_system_id }).then(orThrow).then((sys) => this.formModel.update((v) => __spreadProps(__spreadValues({}, v), { system: sys })), () => null);
    }
  }
  constructor() {
    onSaveHotkey(() => this.submit());
    effect(() => {
      const custom_name = this.formModel().custom_name;
      const clean_name = custom_name?.replace(/ /g, "_") || "";
      if (custom_name !== clean_name) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          custom_name: clean_name
        }));
      }
    });
    effect(() => {
      const model = this.formModel();
      if (model.system && model.system.id !== model.control_system_id) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          control_system_id: model.system.id
        }));
      }
    });
    effect(() => {
      const edge = this.formModel().edge;
      if (edge && edge.id !== this.formModel().edge_id) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          edge_id: edge.id
        }));
      }
    });
    effect(() => {
      const driver = this._selected_driver();
      if (!driver?.id || driver.id === this._defaults_driver_id)
        return;
      this._defaults_driver_id = driver.id;
      untracked(() => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
        driver_id: driver.id,
        name: driver.name || driver.module_name,
        uri: driver.default_uri || "",
        port: driver.default_port || 1,
        alert_level: driver.alert_level || "medium",
        role: driver.role ?? PlaceDriverRole.Logic,
        udp: driver.role === PlaceDriverRole.Service || driver.role === PlaceDriverRole.Websocket ? false : value.udp,
        system: driver.role === PlaceDriverRole.Logic ? value.system : void 0
      })));
    });
  }
  async submit() {
    if (this.loading())
      return;
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, async () => {
      const form_value = __spreadValues({}, this.formModel());
      delete form_value.system;
      delete form_value.driver;
      delete form_value.edge;
      const form_item = mergeFormItem(this._data.item, form_value);
      if (form_item.role !== PlaceDriverRole.Logic) {
        delete form_item.control_system_id;
      }
      return ACTIONS.modules.save(form_item);
    });
  }
  static \u0275fac = function ModuleFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleFormComponent, selectors: [["module-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["module", "", 1, "flex", "flex-col"], [1, "field"], ["for", "driver", "id", "driver-label"], ["id", "driver", "role", "group", "aria-labelledby", "driver-label", 3, "query_fn", "formField"], [1, "error"], [1, "fieldset"], [1, "-mx-2", "mb-4", "flex", "flex-wrap", "items-center"], [1, "m-2", "max-w-1/2", "min-w-[40%]", "flex-1", 3, "label", "formField"], ["for", "system", "id", "system-label"], [1, "value"], ["id", "system", "role", "group", "aria-labelledby", "system-label", 3, "query_fn", "formField"], ["for", "uri"], ["id", "uri", 3, "placeholder", "formField"], ["error", ""], ["for", "ip"], ["placeholder", "IP Address", "id", "ip", 3, "formField"], ["for", "port-number"], ["type", "number", "id", "port-number", 3, "placeholder", "formField"], ["for", "alert-level", "id", "alert-level-label"], ["id", "alert-level", "aria-labelledby", "alert-level-label", 3, "formField"], [3, "value"], ["for", "notes"], ["id", "notes", 3, "placeholder", "formField"], ["for", "custom-name"], ["id", "custom-name", 3, "placeholder", "formField"], ["for", "edge", "id", "edge-label"], ["id", "edge", "role", "group", "aria-labelledby", "edge-label", 3, "placeholder", "query_fn", "formField"]], template: function ModuleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function ModuleFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, ModuleFormComponent_Conditional_1_Template, 3, 2, "form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    ItemSearchFieldComponent,
    FormField,
    SettingsToggleComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleFormComponent, [{
    type: Component,
    args: [{ selector: "module-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form module class="flex flex-col">
                    @if (form.driver && !formModel().id) {
                        <div class="field">
                            <label
                                for="driver"
                                id="driver-label"
                                [class.error]="
                                    form.driver().invalid() &&
                                    form.driver().touched()
                                "
                            >
                                {{ 'DRIVERS.SINGULAR' | translate
                                }}<span>*</span>
                            </label>
                            <item-search-field
                                [query_fn]="driver_query_fn"
                                id="driver"
                                role="group"
                                aria-labelledby="driver-label"
                                [formField]="form.driver"
                            />
                            @if (
                                form.driver().invalid() &&
                                form.driver().touched()
                            ) {
                                <div class="error">
                                    {{ 'MODULES.DRIVER_REQUIRED' | translate }}
                                </div>
                            }
                        </div>
                    }
                    @if (formModel().id || formModel().driver) {
                        @if (form.system && role() === 'logic') {
                            <div class="field">
                                <label
                                    for="system"
                                    id="system-label"
                                    [class.error]="
                                        form.system().invalid() &&
                                        form.system().touched()
                                    "
                                >
                                    {{ 'MODULES.CONTROL_SYSTEM' | translate }}
                                    @if (role() === 'logic') {
                                        <span>*</span>
                                    }
                                </label>
                                @if (!is_readonly) {
                                    <item-search-field
                                        [query_fn]="system_query_fn"
                                        id="system"
                                        role="group"
                                        aria-labelledby="system-label"
                                        [formField]="form.system"
                                    />
                                    @if (
                                        form.system().invalid() &&
                                        form.system().touched()
                                    ) {
                                        <div class="error">
                                            {{
                                                'MODULES.SYSTEM_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                } @else {
                                    <div class="value">
                                        {{ formModel().system?.name }}
                                        <span>{{
                                            formModel().system?.id
                                        }}</span>
                                    </div>
                                }
                            </div>
                        }
                        @if (
                            form.uri &&
                            (role() === 'service' || role() === 'websocket')
                        ) {
                            <div class="field">
                                <label
                                    for="uri"
                                    [class.error]="
                                        form.uri().invalid() &&
                                        form.uri().touched()
                                    "
                                >
                                    {{ 'MODULES.URI' | translate
                                    }}<span>*</span>
                                </label>
                                <app-form-field>
                                    <input
                                        [placeholder]="
                                            'MODULES.URI' | translate
                                        "
                                        id="uri"
                                        [formField]="form.uri"
                                    />
                                    <div error>
                                        {{ 'MODULES.URI_REQUIRED' | translate }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                        <div class="fieldset">
                            @if (
                                form.ip &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <div class="field">
                                    <label
                                        for="ip"
                                        [class.error]="
                                            form.ip().invalid() &&
                                            form.ip().touched()
                                        "
                                    >
                                        {{ 'MODULES.FIELD_IP' | translate }}
                                        <span> * </span>
                                    </label>
                                    <app-form-field>
                                        <input
                                            placeholder="IP Address"
                                            id="ip"
                                            [formField]="form.ip"
                                        />
                                        @if (form.ip().invalid()) {
                                            <div error>
                                                {{
                                                    'MODULES.IP_REQUIRED'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                    </app-form-field>
                                </div>
                            }
                            @if (
                                form.port &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <div class="field">
                                    <label
                                        for="port-number"
                                        [class.error]="
                                            form.port().invalid() &&
                                            form.port().touched()
                                        "
                                    >
                                        {{ 'MODULES.PORT_NUMBER' | translate }}
                                        <span> * </span>
                                    </label>
                                    <app-form-field>
                                        <input
                                            type="number"
                                            [placeholder]="
                                                'MODULES.PORT_NUMBER'
                                                    | translate
                                            "
                                            id="port-number"
                                            [formField]="form.port"
                                        />
                                        @if (form.port().invalid()) {
                                            <div error>
                                                {{
                                                    'MODULES.PORT_REQUIRED'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                    </app-form-field>
                                </div>
                            }
                        </div>
                        <div class="-mx-2 mb-4 flex flex-wrap items-center">
                            @if (
                                form.tls &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="'COMMON.TLS' | translate"
                                    [formField]="form.tls"
                                />
                            }
                            @if (
                                form.udp &&
                                (role() === 'ssh' || role() === 'device')
                            ) {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="'COMMON.UDP' | translate"
                                    [formField]="form.udp"
                                />
                            }
                            @if (form.makebreak && role() !== 'logic') {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="'MODULES.MAKEBREAK' | translate"
                                    [formField]="form.makebreak"
                                />
                            }
                            @if (form.ignore_connected && role() !== 'logic') {
                                <settings-toggle
                                    class="m-2 max-w-1/2 min-w-[40%] flex-1"
                                    [label]="
                                        'MODULES.IGNORE_CONNECTED' | translate
                                    "
                                    [formField]="form.ignore_connected"
                                />
                            }
                        </div>
                        @if (form.alert_level) {
                            <div class="field">
                                <label for="alert-level" id="alert-level-label">
                                    {{ 'COMMON.ALERT_LEVEL' | translate }}
                                </label>
                                <app-form-field>
                                    <app-select
                                        id="alert-level"
                                        aria-labelledby="alert-level-label"
                                        [formField]="form.alert_level"
                                    >
                                        @for (
                                            level of alert_levels;
                                            track level.id
                                        ) {
                                            <app-option [value]="level.id">
                                                {{ level.name | translate }}
                                            </app-option>
                                        }
                                    </app-select>
                                </app-form-field>
                            </div>
                        }
                        @if (form.notes) {
                            <div class="field">
                                <label for="notes">{{
                                    'COMMON.NOTES' | translate
                                }}</label>
                                <app-form-field>
                                    <textarea
                                        [placeholder]="
                                            'COMMON.NOTES' | translate
                                        "
                                        id="notes"
                                        [formField]="form.notes"
                                    ></textarea>
                                </app-form-field>
                            </div>
                        }
                        @if (form.custom_name) {
                            <div class="field">
                                <label for="custom-name">
                                    {{ 'MODULES.CUSTOM_NAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        [placeholder]="
                                            'MODULES.CUSTOM_NAME' | translate
                                        "
                                        id="custom-name"
                                        [formField]="form.custom_name"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.edge && !formModel().id) {
                            <div class="field">
                                <label for="edge" id="edge-label">
                                    {{ 'COMMON.EDGE' | translate }}
                                </label>
                                <item-search-field
                                    [placeholder]="
                                        'COMMON.EDGE_SEARCH' | translate
                                    "
                                    [query_fn]="edge_query_fn"
                                    id="edge"
                                    role="group"
                                    aria-labelledby="edge-label"
                                    [formField]="form.edge"
                                />
                            </div>
                        }
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      ItemSearchFieldComponent,
      TranslatePipe,
      FormField,
      SettingsToggleComponent,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleFormComponent, { className: "ModuleFormComponent", filePath: "src/app/modules/module-form.component.ts", lineNumber: 353 });
})();
export {
  ModuleFormComponent
};
//# debugId=a4b63a44-7b1e-5225-823f-9e56cab0a07e
//# sourceMappingURL=chunk-ZD6ZJ3TU.js.map
