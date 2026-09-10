import {
  isSubsystemUser,
  querySupportSystems
} from "./chunk-PKJVK52W.js";
import {
  ItemSearchFieldComponent
} from "./chunk-UNZ6SOVU.js";
import "./chunk-GSMDNARB.js";
import "./chunk-KEYOUKF4.js";
import {
  SettingsToggleComponent
} from "./chunk-55R7UEQ2.js";
import "./chunk-Q2OAZ637.js";
import "./chunk-QWPPAGOZ.js";
import {
  validateIpAddress,
  validateURI
} from "./chunk-BZKFKJMB.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-EPIXDTWN.js";
import {
  getInvalidSignalFields
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  form,
  max,
  min,
  required,
  submit,
  validate
} from "./chunk-FSWONNLF.js";
import {
  FullscreenModalShellComponent
} from "./chunk-LQ4JFOMC.js";
import {
  HotkeysService
} from "./chunk-4FMA4IVG.js";
import "./chunk-HAY6XAXW.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  AsyncHandler
} from "./chunk-Q2BV2GZB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NHXLW3Z3.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-WXUWESJ2.js";
import "./chunk-7NXN4G42.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-4XBU66YH.js";
import "./chunk-BTIO7C57.js";
import "./chunk-NL7TX5FO.js";
import {
  MatOption
} from "./chunk-O5B6FUTE.js";
import "./chunk-JCXXAJP2.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-N557G3HM.js";
import "./chunk-ETM3LPJ2.js";
import "./chunk-ISKFUBZN.js";
import "./chunk-7A2HMJBQ.js";
import "./chunk-U7MJINT7.js";
import {
  Component,
  EventEmitter,
  Nt,
  Output,
  Yo,
  ba,
  computed,
  effect,
  fc,
  inject,
  oi,
  pc,
  setClassMetadata,
  signal,
  uu,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
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
} from "./chunk-Z45QSLBL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/modules/modules.utilities.ts
function generateModuleFormModel(mod) {
  return {
    id: mod?.id || "",
    ip: mod?.ip || "",
    port: mod?.port || 0,
    tls: mod?.tls || false,
    udp: mod?.udp || false,
    makebreak: mod?.makebreak || false,
    ignore_connected: mod?.ignore_connected || false,
    alert_level: mod?.alert_level || "medium",
    uri: mod?.uri || "",
    notes: mod?.notes || "",
    name: mod?.name || "",
    custom_name: mod?.custom_name || "",
    // `null` (not `undefined`) so signal forms materialise the field,
    // otherwise `form.driver`/`form.system`/`form.edge` are undefined and
    // their template controls never render for new modules.
    // NOTE: PlaceModule always constructs `system`, even when the API
    // omitted it — an empty id means "not loaded", not "no system".
    system: mod?.system?.id ? mod.system : null,
    control_system_id: mod?.control_system_id || mod?.system?.id || "",
    role: mod?.role ?? Nt.Logic,
    driver: null,
    driver_id: mod?.driver_id || "",
    edge: null,
    edge_id: mod?.edge_id || ""
  };
}
var applyModuleFormSchema = (path) => {
  required(path.driver_id);
  min(path.port, 1, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === Nt.Device || role === Nt.SSH;
    }
  });
  max(path.port, 65535, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === Nt.Device || role === Nt.SSH;
    }
  });
  validate(path.ip, ({ value }) => validateIpAddress({ value: value() }) ? { kind: "pattern", message: "Invalid IP address" } : void 0);
  validate(path.uri, ({ value }) => validateURI({ value: value() }) ? { kind: "pattern", message: "Invalid URI" } : void 0);
  required(path.uri, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === Nt.Service || role === Nt.Websocket;
    }
  });
  required(path.ip, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === Nt.Device || role === Nt.SSH;
    }
  });
  required(path.port, {
    when({ valueOf }) {
      const role = valueOf(path.role);
      return role === Nt.Device || role === Nt.SSH;
    }
  });
  required(path.system, {
    when({ valueOf }) {
      return valueOf(path.role) === Nt.Logic;
    }
  });
};

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
    \u0275\u0275element(6, "item-search-field", 4);
    \u0275\u0275controlCreate();
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
    \u0275\u0275element(0, "item-search-field", 4);
    \u0275\u0275controlCreate();
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "MODULES.URI_REQUIRED"));
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, " * ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(8, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_3_Conditional_8_Template, 3, 3, "mat-error");
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
    \u0275\u0275elementStart(0, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, " * ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 17);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_4_Conditional_9_Template, 3, 3, "mat-error");
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
    \u0275\u0275element(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "COMMON.TLS"))("formField", ctx_r0.form.tls);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "COMMON.UDP"))("formField", ctx_r0.form.udp);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "MODULES.MAKEBREAK"))("formField", ctx_r0.form.makebreak);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "MODULES.IGNORE_CONNECTED"))("formField", ctx_r0.form.ignore_connected);
    \u0275\u0275control();
  }
}
function ModuleFormComponent_Conditional_1_Conditional_2_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "mat-select", 19);
    \u0275\u0275repeaterCreate(6, ModuleFormComponent_Conditional_1_Conditional_2_Conditional_10_For_7_Template, 3, 4, "mat-option", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12);
    \u0275\u0275element(5, "textarea", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12);
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "item-search-field", 23);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
var ModuleFormComponent = class _ModuleFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "MODULES";
  _hotkey = inject(HotkeysService);
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
  heading = i18n(`${this._name}.${this._data.item.id ? "EDIT" : "NEW"}`);
  is_readonly = !!this._data.readonly;
  alert_levels = [
    { id: "low", name: "COMMON.ALERT_LOW" },
    { id: "medium", name: "COMMON.ALERT_MEDIUM" },
    { id: "high", name: "COMMON.ALERT_HIGH" },
    { id: "critical", name: "COMMON.ALERT_CRITICAL" }
  ];
  driver_query_fn = (_) => Yo(__spreadValues({
    q: _
  }, isSubsystemUser() && !this.formModel().id ? { role: "logic" } : {})).then((resp) => resp.data);
  system_query_fn = (_) => querySupportSystems({ q: _ }).then((resp) => resp.data);
  edge_query_fn = (_) => uu({ q: _ }).then((resp) => resp.data);
  /** Role of the selected driver */
  role = computed(
    () => {
      const role = this.formModel().driver?.role || this.formModel().role;
      switch (role) {
        case Nt.SSH:
          return "ssh";
        case Nt.Device:
          return "device";
        case Nt.Service:
          return "service";
        case Nt.Websocket:
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
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
    const { system, control_system_id } = this.formModel();
    if (control_system_id && !system) {
      ba(control_system_id).then((sys) => this.formModel.update((v) => __spreadProps(__spreadValues({}, v), { system: sys })), () => null);
    }
  }
  constructor() {
    super();
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
      const model = this.formModel();
      const driver = model.driver;
      if (!driver?.id)
        return;
      const role = driver.role || Nt.Logic;
      const udp = driver.role === Nt.Service || driver.role === Nt.Websocket ? false : model.udp;
      const system = driver.role === Nt.Logic ? model.system : void 0;
      if (model.driver_id === driver.id && model.name === (driver.name || driver.module_name) && model.uri === (driver.default_uri || "") && model.port === (driver.default_port || 1) && model.alert_level === (driver.alert_level || "medium") && model.role === role && model.udp === udp && model.system === system) {
        return;
      }
      this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
        driver_id: driver.id,
        name: driver.name || driver.module_name,
        uri: driver.default_uri || "",
        port: driver.default_port || 1,
        alert_level: driver.alert_level || "medium",
        role,
        udp,
        system
      }));
    });
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_value = __spreadValues({}, this.formModel());
      delete form_value.system;
      delete form_value.driver;
      delete form_value.edge;
      if (form_value.role !== Nt.Logic) {
        delete form_value.control_system_id;
      }
      const form_item = item.id ? oi(__spreadValues(__spreadValues({}, item_json), form_value), [void 0]) : __spreadValues(__spreadValues({}, item_json), form_value);
      try {
        const _item = await (form_item.id ? pc(form_item.id, form_item) : fc(form_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
        this._dialog_ref.close();
      } catch (err) {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
        notifyError(i18n(`${this._name}.SAVE_ERROR`, {
          error: JSON.stringify(await err.text?.() || err.message || err)
        }));
      }
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
  }
  static \u0275fac = function ModuleFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleFormComponent, selectors: [["module-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["module", "", 1, "flex", "flex-col"], [1, "field"], ["for", "driver"], [3, "query_fn", "formField"], [1, "error"], [1, "fieldset"], [1, "-mx-2", "mb-4", "flex", "flex-wrap", "items-center"], [1, "m-2", "max-w-1/2", "min-w-[40%]", "flex-1", 3, "label", "formField"], ["for", "system"], [1, "value"], ["for", "uri"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "ip"], ["matInput", "", "placeholder", "IP Address", 3, "formField"], ["for", "port-number"], ["matInput", "", "type", "number", 3, "placeholder", "formField"], ["for", "alert-level"], [3, "formField"], [3, "value"], ["for", "notes"], ["for", "custom-name"], [3, "placeholder", "query_fn", "formField"]], template: function ModuleFormComponent_Template(rf, ctx) {
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
    ItemSearchFieldComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'MODULES.URI' | translate
                                        "
                                        [formField]="form.uri"
                                    />
                                    <mat-error>{{
                                        'MODULES.URI_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
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
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            placeholder="IP Address"
                                            [formField]="form.ip"
                                        />
                                        @if (form.ip().invalid()) {
                                            <mat-error>
                                                {{
                                                    'MODULES.IP_REQUIRED'
                                                        | translate
                                                }}
                                            </mat-error>
                                        }
                                    </mat-form-field>
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
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            type="number"
                                            [placeholder]="
                                                'MODULES.PORT_NUMBER'
                                                    | translate
                                            "
                                            [formField]="form.port"
                                        />
                                        @if (form.port().invalid()) {
                                            <mat-error>
                                                {{
                                                    'MODULES.PORT_REQUIRED'
                                                        | translate
                                                }}
                                            </mat-error>
                                        }
                                    </mat-form-field>
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
                                <label for="alert-level">
                                    {{ 'COMMON.ALERT_LEVEL' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select [formField]="form.alert_level">
                                        @for (
                                            level of alert_levels;
                                            track level.id
                                        ) {
                                            <mat-option [value]="level.id">
                                                {{ level.name | translate }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.notes) {
                            <div class="field">
                                <label for="notes">{{
                                    'COMMON.NOTES' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <textarea
                                        matInput
                                        [placeholder]="
                                            'COMMON.NOTES' | translate
                                        "
                                        [formField]="form.notes"
                                    ></textarea>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.custom_name) {
                            <div class="field">
                                <label for="custom-name">
                                    {{ 'MODULES.CUSTOM_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'MODULES.CUSTOM_NAME' | translate
                                        "
                                        [formField]="form.custom_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.edge && !formModel().id) {
                            <div class="field">
                                <label for="driver">
                                    {{ 'COMMON.EDGE' | translate }}
                                </label>
                                <item-search-field
                                    [placeholder]="
                                        'COMMON.EDGE_SEARCH' | translate
                                    "
                                    [query_fn]="edge_query_fn"
                                    [formField]="form.edge"
                                />
                            </div>
                        }
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      ItemSearchFieldComponent,
      TranslatePipe,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      SettingsToggleComponent,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleFormComponent, { className: "ModuleFormComponent", filePath: "src/app/modules/module-form.component.ts", lineNumber: 343 });
})();
export {
  ModuleFormComponent
};
//# sourceMappingURL=chunk-GG2Q7BEE.js.map
