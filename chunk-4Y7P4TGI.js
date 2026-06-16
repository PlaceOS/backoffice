import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-C7NP5PYP.js";
import {
  HotkeysService
} from "./chunk-JZPASCCB.js";
import {
  addSignalChipItem,
  getInvalidSignalFields
} from "./chunk-KJQGK2OM.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-64N44YTD.js";
import {
  openConfirmModal
} from "./chunk-VRIRLPBG.js";
import {
  SimpleTableComponent
} from "./chunk-FCU3WVEC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-XJBZPO3W.js";
import "./chunk-WRAPQBH6.js";
import {
  SettingsToggleComponent
} from "./chunk-J5O27MHS.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-6FMO72CJ.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatSuffix
} from "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-KHVEC2ZJ.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import {
  AsyncHandler
} from "./chunk-JJ5DNIGX.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ZZM2ZLWR.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  COMMA,
  ENTER,
  MatRipple
} from "./chunk-2UI5N333.js";
import {
  JsonPipe
} from "./chunk-5TQT6AWS.js";
import {
  Ci,
  Component,
  Ei,
  EventEmitter,
  Output,
  Ws,
  _o,
  computed,
  fo,
  ho,
  inject,
  po,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵariaProperty,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/brokers.utilities.ts
function generateBrokerFormModel(broker = {}) {
  const auth_type = broker.auth_type ?? Ci.NoAuth;
  return {
    name: broker.name || "",
    description: broker.description || "",
    auth_type,
    host: broker.host || "",
    port: broker.port || 0,
    tls: !!broker.tls,
    username: broker.username || "",
    password: broker.password || "",
    certificate: broker.certificate || "",
    filters: broker.filters || []
  };
}
var applyBrokerFormSchema = (path) => {
  required(path.name);
  required(path.host);
  required(path.port);
  required(path.username, {
    when({ valueOf }) {
      return valueOf(path.auth_type) === Ci.UserPassword;
    }
  });
  required(path.password, {
    when({ valueOf }) {
      return valueOf(path.auth_type) === Ci.UserPassword;
    }
  });
  required(path.certificate, {
    when({ valueOf }) {
      return valueOf(path.auth_type) === Ci.Certificate;
    }
  });
};

// src/app/admin/broker-form.component.ts
var _c0 = (a0) => ({ item: a0 });
function BrokerFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 7);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_NAME_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "textarea", 7);
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
function BrokerFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 7);
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
    \u0275\u0275classProp("error", ctx_r0.form.host().invalid() && ctx_r0.form.host().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ADMIN.BROKERS_FIELD_HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "ADMIN.BROKERS_FIELD_HOST"))("formField", ctx_r0.form.host);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_HOST_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 11);
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
    \u0275\u0275classProp("error", ctx_r0.form.port().invalid() && ctx_r0.form.port().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ADMIN.BROKERS_FIELD_PORT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "ADMIN.BROKERS_FIELD_PORT"))("formField", ctx_r0.form.port);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_PORT_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "settings-toggle", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "COMMON.TLS"))("formField", ctx_r0.form.tls);
    \u0275\u0275control();
  }
}
function BrokerFormComponent_Conditional_1_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 14);
    \u0275\u0275repeaterCreate(6, BrokerFormComponent_Conditional_1_Conditional_7_For_7_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.auth_type);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.auth_types);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 7);
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
    \u0275\u0275classProp("error", ctx_r0.form.username().invalid() && ctx_r0.form.username().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ADMIN.BROKERS_USERNAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "ADMIN.BROKERS_USERNAME"))("formField", ctx_r0.form.username);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_USERNAME_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "icon", 18);
    \u0275\u0275listener("mousedown", function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template_icon_mousedown_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password.set(true));
    })("mouseup", function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template_icon_mouseup_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password.set(false));
    }, \u0275\u0275resolveWindow)("touchstart", function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template_icon_touchstart_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password.set(true));
    })("touchend", function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template_icon_touchend_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.show_password.set(false));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275text(8, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.password().invalid() && ctx_r0.form.password().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "ADMIN.BROKERS_PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.show_password() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 9, "ADMIN.BROKERS_PASSWORD"))("formField", ctx_r0.form.password);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "ADMIN.BROKERS_PASSWORD_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Conditional_8_Conditional_1_Template, 12, 12, "div", 3);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template, 12, 13, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.username ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.password ? 2 : -1);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "textarea", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "ADMIN.BROKERS_CERT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 6, "ADMIN.BROKERS_CERT"))("formField", ctx_r0.form.certificate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "ADMIN.BROKERS_CERT_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BrokerFormComponent_Conditional_1_Conditional_9_Conditional_0_Template, 10, 10, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.form.certificate ? 0 : -1);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 25);
    \u0275\u0275listener("removed", function BrokerFormComponent_Conditional_1_Conditional_10_For_8_Template_mat_chip_row_removed_0_listener() {
      const filter_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFilter(filter_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 26);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const filter_r6 = ctx.$implicit;
    \u0275\u0275ariaProperty("aria-description", "Press enter to edit " + filter_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", filter_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(3, 3, "COMMON.REMOVE_ITEM", \u0275\u0275pureFunction1(6, _c0, filter_r6)));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 21)(5, "mat-chip-grid", 22, 0);
    \u0275\u0275repeaterCreate(7, BrokerFormComponent_Conditional_1_Conditional_10_For_8_Template, 6, 8, "mat-chip-row", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(9, "input", 24);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function BrokerFormComponent_Conditional_1_Conditional_10_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addFilter($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const chipGrid_r7 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_FIELD_FILTERS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.filters());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 7, "ADMIN.BROKERS_FIELD_FILTERS"))("matChipInputFor", chipGrid_r7)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function BrokerFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Conditional_1_Template, 12, 12, "div", 3);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_1_Conditional_2_Template, 7, 7, "div", 3);
    \u0275\u0275conditionalCreate(3, BrokerFormComponent_Conditional_1_Conditional_3_Template, 12, 12, "div", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275conditionalCreate(5, BrokerFormComponent_Conditional_1_Conditional_5_Template, 12, 12, "div", 3);
    \u0275\u0275conditionalCreate(6, BrokerFormComponent_Conditional_1_Conditional_6_Template, 3, 4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BrokerFormComponent_Conditional_1_Conditional_7_Template, 8, 4, "div", 3);
    \u0275\u0275conditionalCreate(8, BrokerFormComponent_Conditional_1_Conditional_8_Template, 3, 2, "div", 4);
    \u0275\u0275conditionalCreate(9, BrokerFormComponent_Conditional_1_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, BrokerFormComponent_Conditional_1_Conditional_10_Template, 11, 9, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.host ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.port ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.tls ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.auth_type ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth_type() === 2 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth_type() === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.filters ? 10 : -1);
  }
}
var BrokerFormComponent = class _BrokerFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "ADMIN.BROKERS";
  _hotkey = inject(HotkeysService);
  event = new EventEmitter();
  formModel = signal(
    generateBrokerFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyBrokerFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`${this._name}_${this._data.item.id ? "EDIT" : "NEW"}`);
  /** List of available authentication types */
  auth_types = [
    {
      id: Ci.Certificate,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_CERT")
    },
    {
      id: Ci.NoAuth,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_NONE")
    },
    {
      id: Ci.UserPassword,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_PASS")
    }
  ];
  /** List of separator characters for filters */
  separators = [ENTER, COMMA];
  /** Whether to show password field value */
  show_password = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_password" }] : (
      /* istanbul ignore next */
      []
    )
  );
  auth_type = computed(
    () => this.formModel().auth_type,
    ...ngDevMode ? [{ debugName: "auth_type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filters = computed(
    () => this.formModel().filters || [],
    ...ngDevMode ? [{ debugName: "filters" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_item = item.id ? Ws(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
        void 0
      ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
      const result = await (form_item.id ? fo(form_item.id, form_item) : po(form_item)).catch(async (err) => {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
        notifyError(i18n(`${this._name}.SAVE_ERROR`, {
          error: JSON.stringify(await err.text?.() || err.message || err)
        }));
        return null;
      });
      if (!result)
        return;
      this._dialog_ref.disableClose = false;
      this.event.emit({ reason: "done", metadata: { item: result } });
      notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
      this._dialog_ref.close();
    });
    if (this.form().invalid()) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form).join(", ")
      }));
    }
  }
  /**
   * Add a filter to the list of filters for the item
   * @param event Input event
   */
  addFilter(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
        filters: addSignalChipItem(model.filters, event)
      }));
    }
    event.chipInput?.clear();
  }
  /**
   * Remove filter from the list
   * @param existing_filter Filter to remove
   */
  removeFilter(existing_filter) {
    if (!this.filters().length)
      return;
    const filter_list = [...this.filters()];
    const index = filter_list.indexOf(existing_filter);
    if (index >= 0) {
      filter_list.splice(index, 1);
      this.formModel.update((model) => __spreadProps(__spreadValues({}, model), {
        filters: filter_list
      }));
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BrokerFormComponent_BaseFactory;
    return function BrokerFormComponent_Factory(__ngFactoryType__) {
      return (\u0275BrokerFormComponent_BaseFactory || (\u0275BrokerFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BrokerFormComponent)))(__ngFactoryType__ || _BrokerFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrokerFormComponent, selectors: [["broker-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["chipGrid", ""], [3, "save", "heading", "loading"], ["broker", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], ["for", "broker-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "description"], ["for", "host"], ["for", "port-number"], ["matInput", "", "type", "number", 3, "placeholder", "formField"], [1, "mt-8", "w-full", 3, "label", "formField"], ["for", "type"], [3, "formField"], [3, "value"], ["for", "new-password"], ["matInput", "", "autocomplete", "new-password", 3, "type", "placeholder", "formField"], ["matSuffix", "", 3, "mousedown", "mouseup", "touchstart", "touchend"], ["for", "cert"], ["for", "filters"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Enter fruits"], [3, "aria-description"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "aria-description"], ["matChipRemove", ""]], template: function BrokerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function BrokerFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Template, 11, 9, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    IconComponent,
    FormField,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    SettingsToggleComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], styles: ["\nsettings-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=broker-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrokerFormComponent, [{
    type: Component,
    args: [{ selector: "broker-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form broker class="flex flex-col">
                    @if (form.name) {
                        <div class="field">
                            <label
                                for="broker-name"
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
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    [formField]="form.name"
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_NAME_REQUIRED' | translate
                                }}</mat-error>
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
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.host) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form.host().invalid() &&
                                    form.host().touched()
                                "
                            >
                                {{ 'ADMIN.BROKERS_FIELD_HOST' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_HOST' | translate
                                    "
                                    [formField]="form.host"
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_HOST_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.port) {
                            <div class="field">
                                <label
                                    for="port-number"
                                    [class.error]="
                                        form.port().invalid() &&
                                        form.port().touched()
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_FIELD_PORT' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        type="number"
                                        [placeholder]="
                                            'ADMIN.BROKERS_FIELD_PORT'
                                                | translate
                                        "
                                        [formField]="form.port"
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.BROKERS_PORT_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.tls) {
                            <div class="field">
                                <settings-toggle
                                    class="mt-8 w-full"
                                    [label]="'COMMON.TLS' | translate"
                                    [formField]="form.tls"
                                />
                            </div>
                        }
                    </div>
                    @if (form.auth_type) {
                        <div class="field">
                            <label for="type"
                                >{{
                                    'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select [formField]="form.auth_type">
                                    @for (type of auth_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (auth_type() === 2) {
                        <div class="fieldset">
                            @if (form.username) {
                                <div class="field">
                                    <label
                                        for="host"
                                        [class.error]="
                                            form.username().invalid() &&
                                            form.username().touched()
                                        "
                                    >
                                        {{
                                            'ADMIN.BROKERS_USERNAME' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            [placeholder]="
                                                'ADMIN.BROKERS_USERNAME'
                                                    | translate
                                            "
                                            [formField]="form.username"
                                        />
                                        <mat-error>{{
                                            'ADMIN.BROKERS_USERNAME_REQUIRED'
                                                | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                </div>
                            }
                            @if (form.password) {
                                <div class="field">
                                    <label
                                        for="new-password"
                                        [class.error]="
                                            form.password().invalid() &&
                                            form.password().touched()
                                        "
                                    >
                                        {{
                                            'ADMIN.BROKERS_PASSWORD' | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            autocomplete="new-password"
                                            [type]="
                                                show_password()
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            [placeholder]="
                                                'ADMIN.BROKERS_PASSWORD'
                                                    | translate
                                            "
                                            [formField]="form.password"
                                        />
                                        <icon
                                            matSuffix
                                            (mousedown)="
                                                show_password.set(true)
                                            "
                                            (window:mouseup)="
                                                show_password.set(false)
                                            "
                                            (touchstart)="
                                                show_password.set(true)
                                            "
                                            (window:touchend)="
                                                show_password.set(false)
                                            "
                                        >
                                            visibility
                                        </icon>
                                        <mat-error>{{
                                            'ADMIN.BROKERS_PASSWORD_REQUIRED'
                                                | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                </div>
                            }
                        </div>
                    }
                    @if (auth_type() === 0) {
                        @if (form.certificate) {
                            <div class="field">
                                <label for="cert">
                                    {{ 'ADMIN.BROKERS_CERT' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <textarea
                                        matInput
                                        [placeholder]="
                                            'ADMIN.BROKERS_CERT' | translate
                                        "
                                        [formField]="form.certificate"
                                    ></textarea>
                                    <mat-error>{{
                                        'ADMIN.BROKERS_CERT_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    }
                    @if (form.filters) {
                        <div class="field">
                            <label for="filters">
                                {{ 'ADMIN.BROKERS_FIELD_FILTERS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipGrid
                                    aria-label="Enter fruits"
                                >
                                    @for (filter of filters(); track filter) {
                                        <mat-chip-row
                                            (removed)="removeFilter(filter)"
                                            [aria-description]="
                                                'Press enter to edit ' + filter
                                            "
                                        >
                                            {{ filter }}
                                            <button
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.REMOVE_ITEM'
                                                        | translate
                                                            : {
                                                                  item: filter,
                                                              }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                    <input
                                        [placeholder]="
                                            'ADMIN.BROKERS_FIELD_FILTERS'
                                                | translate
                                        "
                                        [matChipInputFor]="chipGrid"
                                        [matChipInputSeparatorKeyCodes]="
                                            separators
                                        "
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="
                                            addFilter($event)
                                        "
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      MatFormFieldModule,
      MatChipsModule,
      IconComponent,
      TranslatePipe,
      FormField,
      MatInputModule,
      MatSelectModule,
      SettingsToggleComponent,
      FullscreenModalShellComponent
    ], styles: ["/* angular:styles/component:css;0ad2801bf20fdba1813d81d82012ea077876a6eec759fec0061750263a0c4155;/home/runner/work/backoffice/backoffice/src/app/admin/broker-form.component.ts */\nsettings-form-field {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=broker-form.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrokerFormComponent, { className: "BrokerFormComponent", filePath: "src/app/admin/broker-form.component.ts", lineNumber: 358 });
})();

// src/app/admin/brokers.component.ts
var _c02 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "auth_type", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "description", name: a0 });
var _c3 = (a0, a1) => ({ key: "host", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "port", name: a0, content: a1, size: "6rem" });
var _c5 = (a0, a1) => ({ key: "tls", name: a0, content: a1, size: "4rem" });
var _c6 = (a0, a1) => ({ key: "filters", name: a0, content: a1 });
var _c7 = (a0) => ({ key: "actions", name: " ", size: "6rem", content: a0, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function AdminBrokersComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1);
  }
}
function AdminBrokersComponent_ng_template_26_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_AUTH_TYPE_CERT"));
  }
}
function AdminBrokersComponent_ng_template_26_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_AUTH_TYPE_PASS"));
  }
}
function AdminBrokersComponent_ng_template_26_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_AUTH_TYPE_NONE"));
  }
}
function AdminBrokersComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_26_Case_1_Template, 3, 3, "span")(2, AdminBrokersComponent_ng_template_26_Case_2_Template, 3, 3, "span")(3, AdminBrokersComponent_ng_template_26_Case_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = data_r2) === 0 ? 1 : tmp_7_0 === 2 ? 2 : 3);
  }
}
function AdminBrokersComponent_ng_template_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 19);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd()();
  }
}
function AdminBrokersComponent_ng_template_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 20);
    \u0275\u0275text(2, " lock_open ");
    \u0275\u0275elementEnd()();
  }
}
function AdminBrokersComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminBrokersComponent_ng_template_28_Conditional_0_Template, 3, 0, "div", 17);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_28_Conditional_1_Template, 3, 0, "div", 18);
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275conditional(data_r3 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 1 : -1);
  }
}
function AdminBrokersComponent_ng_template_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, data_r4));
  }
}
function AdminBrokersComponent_ng_template_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_FILTERS_EMPTY"), " ");
  }
}
function AdminBrokersComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_30_Conditional_1_Template, 3, 3, "code");
    \u0275\u0275conditionalCreate(2, AdminBrokersComponent_ng_template_30_Conditional_2_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r4 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r4 ? 2 : -1);
  }
}
function AdminBrokersComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editBroker(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_32_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.deleteBroker(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.BROKERS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.BROKERS_REMOVE"));
  }
}
var AdminBrokersComponent = class _AdminBrokersComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  brokers = signal(
    [],
    ...ngDevMode ? [{ debugName: "brokers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadBrokers();
  }
  newBroker() {
    const ref = this._dialog.open(BrokerFormComponent, {
      data: {
        item: new Ei(),
        name: "ADMIN.BROKERS",
        save: (item) => po(item)
      }
    });
    this.subscription("modal_events", ref.componentInstance.event.subscribe((event) => {
      if (event.reason !== "done")
        return;
      this.loadBrokers();
    }));
  }
  editBroker(item) {
    const ref = this._dialog.open(BrokerFormComponent, {
      data: {
        item,
        name: "ADMIN.BROKERS",
        save: (item2) => fo(item2.id, item2)
      }
    });
    this.subscription("modal_events", ref.componentInstance.event.subscribe((event) => {
      if (event.reason !== "done")
        return;
      this.loadBrokers();
    }));
  }
  async deleteBroker(item) {
    if (item) {
      const details = await openConfirmModal({
        title: `Delete MQTT Broker`,
        content: `<p>Are you sure you want delete this boker?</p><p>The broker will be deleted <strong>immediately.</strong></p>`,
        icon: { type: "icon", content: "delete" }
      }, this._dialog);
      if (!details)
        return;
      details.loading("Deleting broker...");
      const err = await _o(item.id).catch((_) => _);
      details.close();
      if (err)
        return notifyError(`Error deleting broker. Error: ${JSON.stringify(err.response || err.message || err)}`);
      notifySuccess(`Successfully deleted broker "${item.name}".`);
      this.loadBrokers();
    }
  }
  async loadBrokers() {
    this.loading.set(true);
    const brokers = await ho().then((r) => r.data);
    this.brokers.set(brokers);
    this.loading.set(false);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AdminBrokersComponent_BaseFactory;
    return function AdminBrokersComponent_Factory(__ngFactoryType__) {
      return (\u0275AdminBrokersComponent_BaseFactory || (\u0275AdminBrokersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminBrokersComponent)))(__ngFactoryType__ || _AdminBrokersComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBrokersComponent, selectors: [["app-brokers"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 34, vars: 58, consts: [["mono_template", ""], ["auth_type_template", ""], ["tls_template", ""], ["filters_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center"], [1, "text"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "p-4", "font-mono", "text-sm"], [1, "p-4"], [1, "bg-success", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "bg-error", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "text-success-content", "text-xl"], [1, "text-error-content", "text-xl"], [1, "text-xs", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AdminBrokersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275listener("click", function AdminBrokersComponent_Template_button_click_6_listener() {
        return ctx.newBroker();
      });
      \u0275\u0275elementStart(7, "div", 10)(8, "icon", 7);
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 11);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275element(14, "mat-progress-bar", 13)(15, "simple-table", 14);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, AdminBrokersComponent_ng_template_24_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(26, AdminBrokersComponent_ng_template_26_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(28, AdminBrokersComponent_ng_template_28_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(30, AdminBrokersComponent_ng_template_30_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(32, AdminBrokersComponent_ng_template_32_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const mono_template_r8 = \u0275\u0275reference(25);
      const auth_type_template_r9 = \u0275\u0275reference(27);
      const tls_template_r10 = \u0275\u0275reference(29);
      const filters_template_r11 = \u0275\u0275reference(31);
      const actions_template_r12 = \u0275\u0275reference(33);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.BROKERS_HEADER"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "ADMIN.BROKERS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.brokers())("columns", \u0275\u0275pureFunction8(49, _c8, \u0275\u0275pureFunction1(28, _c02, \u0275\u0275pipeBind1(16, 12, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(17, 14, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), auth_type_template_r9), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(18, 16, "COMMON.FIELD_DESCRIPTION")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(19, 18, "ADMIN.BROKERS_FIELD_HOST"), mono_template_r8), \u0275\u0275pureFunction2(38, _c4, \u0275\u0275pipeBind1(20, 20, "ADMIN.BROKERS_FIELD_PORT"), mono_template_r8), \u0275\u0275pureFunction2(41, _c5, \u0275\u0275pipeBind1(21, 22, "ADMIN.BROKERS_FIELD_TLS"), tls_template_r10), \u0275\u0275pureFunction2(44, _c6, \u0275\u0275pipeBind1(22, 24, "ADMIN.BROKERS_FIELD_FILTERS"), filters_template_r11), \u0275\u0275pureFunction1(47, _c7, actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(23, 26, "ADMIN.BROKER_LIST_EMPTY"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe,
    JsonPipe
  ], styles: ["\n[_nghost-%COMP%] {\n}\n/*# sourceMappingURL=brokers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminBrokersComponent, [{
    type: Component,
    args: [{ selector: "app-brokers", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.BROKERS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newBroker()">
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'ADMIN.BROKERS_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="brokers()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'auth_type',
                            name: 'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate,
                            content: auth_type_template,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                        },
                        {
                            key: 'host',
                            name: 'ADMIN.BROKERS_FIELD_HOST' | translate,
                            content: mono_template,
                        },
                        {
                            key: 'port',
                            name: 'ADMIN.BROKERS_FIELD_PORT' | translate,
                            content: mono_template,
                            size: '6rem',
                        },
                        {
                            key: 'tls',
                            name: 'ADMIN.BROKERS_FIELD_TLS' | translate,
                            content: tls_template,
                            size: '4rem',
                        },
                        {
                            key: 'filters',
                            name: 'ADMIN.BROKERS_FIELD_FILTERS' | translate,
                            content: filters_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.BROKER_LIST_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="p-4 font-mono text-sm">{{ data }}</div>
        </ng-template>

        <ng-template #auth_type_template let-data="data">
            <div class="p-4">
                @switch (data) {
                    @case (0) {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_CERT' | translate
                        }}</span>
                    }
                    @case (2) {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_PASS' | translate
                        }}</span>
                    }
                    @default {
                        <span>{{
                            'ADMIN.BROKERS_AUTH_TYPE_NONE' | translate
                        }}</span>
                    }
                }
            </div>
        </ng-template>
        <ng-template #tls_template let-data="data">
            @if (data) {
                <div
                    class="bg-success mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-success-content text-xl">lock</icon>
                </div>
            }
            @if (!data) {
                <div
                    class="bg-error mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-error-content text-xl"> lock_open </icon>
                </div>
            }
        </ng-template>
        <ng-template #filters_template let-data="data">
            <div class="p-4">
                @if (data) {
                    <code>{{ data | json }}</code>
                }
                @if (!data) {
                    <span class="text-xs opacity-30">
                        {{ 'ADMIN.BROKERS_FILTERS_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_EDIT' | translate"
                    (click)="editBroker(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_REMOVE' | translate"
                    (click)="deleteBroker(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      SimpleTableComponent,
      MatProgressBarModule,
      JsonPipe
    ], styles: ["/* angular:styles/component:css;572731b77438e4c922c62954d78fd970f67110b5e9d4f700617f449621eb8577;/home/runner/work/backoffice/backoffice/src/app/admin/brokers.component.ts */\n:host {\n}\n/*# sourceMappingURL=brokers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBrokersComponent, { className: "AdminBrokersComponent", filePath: "src/app/admin/brokers.component.ts", lineNumber: 192 });
})();
export {
  AdminBrokersComponent
};
//# sourceMappingURL=chunk-4Y7P4TGI.js.map
