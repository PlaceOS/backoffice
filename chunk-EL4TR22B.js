import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import {
  ChipListComponent
} from "./chunk-URQNJTMD.js";
import "./chunk-3CXGWY3Q.js";
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
import {
  confirmAndRun
} from "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  ProgressBarComponent
} from "./chunk-XFWRCLJY.js";
import {
  notifyError
} from "./chunk-ZYXD5WKE.js";
import "./chunk-ZXDSRNPN.js";
import {
  SettingsToggleComponent
} from "./chunk-7CN2TEC2.js";
import {
  SelectComponent
} from "./chunk-I2BE2RKH.js";
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
  Dialog,
  DialogRef
} from "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import {
  Fo,
  Ho,
  No,
  Vi,
  Yi,
  zo
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import {
  JsonPipe
} from "./chunk-XWSZBFF5.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
} from "./chunk-OGAUD6Z3.js";
import "./chunk-RQBZITXC.js";

// src/app/admin/brokers.utilities.ts
function generateBrokerFormModel(broker = {}) {
  const auth_type = broker.auth_type ?? Vi.NoAuth;
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
      return valueOf(path.auth_type) === Vi.UserPassword;
    }
  });
  required(path.password, {
    when({ valueOf }) {
      return valueOf(path.auth_type) === Vi.UserPassword;
    }
  });
  required(path.certificate, {
    when({ valueOf }) {
      return valueOf(path.auth_type) === Vi.Certificate;
    }
  });
};

// src/app/admin/broker-form.component.ts
function BrokerFormComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 5);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_NAME_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 8);
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
function BrokerFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 10);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_HOST_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 12);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "settings-toggle", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "app-option", 16);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "app-select", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275repeaterCreate(6, BrokerFormComponent_Conditional_1_Conditional_7_For_7_Template, 2, 2, "app-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 18);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_USERNAME_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "icon", 21);
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
    \u0275\u0275elementStart(9, "div", 6);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "ADMIN.BROKERS_PASSWORD_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Conditional_8_Conditional_1_Template, 12, 12, "div", 2);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template, 12, 13, "div", 2);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "ADMIN.BROKERS_CERT_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BrokerFormComponent_Conditional_1_Conditional_9_Conditional_0_Template, 10, 10, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.form.certificate ? 0 : -1);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 25)(5, "app-chip-list", 26);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "ADMIN.BROKERS_FIELD_FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 6, "ADMIN.BROKERS_FIELD_FILTERS"))("formField", ctx_r0.form.filters);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 8, "ADMIN.BROKERS_FIELD_FILTERS"));
    \u0275\u0275control();
  }
}
function BrokerFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Conditional_1_Template, 12, 12, "div", 2);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_1_Conditional_2_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(3, BrokerFormComponent_Conditional_1_Conditional_3_Template, 12, 12, "div", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, BrokerFormComponent_Conditional_1_Conditional_5_Template, 12, 12, "div", 2);
    \u0275\u0275conditionalCreate(6, BrokerFormComponent_Conditional_1_Conditional_6_Template, 3, 4, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BrokerFormComponent_Conditional_1_Conditional_7_Template, 8, 4, "div", 2);
    \u0275\u0275conditionalCreate(8, BrokerFormComponent_Conditional_1_Conditional_8_Template, 3, 2, "div", 3);
    \u0275\u0275conditionalCreate(9, BrokerFormComponent_Conditional_1_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, BrokerFormComponent_Conditional_1_Conditional_10_Template, 8, 10, "div", 2);
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
var BrokerFormComponent = class _BrokerFormComponent {
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
  _name = "ADMIN.BROKERS";
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
      id: Vi.Certificate,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_CERT")
    },
    {
      id: Vi.NoAuth,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_NONE")
    },
    {
      id: Vi.UserPassword,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_PASS")
    }
  ];
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
  constructor() {
    onSaveHotkey(() => this.submit());
  }
  async submit() {
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}_`, () => {
      const form_item = mergeFormItem(this._data.item, this.formModel());
      return form_item.id ? Ho(form_item.id, form_item) : zo(form_item);
    });
  }
  static \u0275fac = function BrokerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrokerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrokerFormComponent, selectors: [["broker-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["broker", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], ["for", "broker-name"], ["id", "broker-name", 3, "placeholder", "formField"], ["error", ""], ["for", "description"], ["id", "description", 3, "placeholder", "formField"], ["for", "host"], ["id", "host", 3, "placeholder", "formField"], ["for", "port-number"], ["id", "port-number", "type", "number", 3, "placeholder", "formField"], [1, "mt-8", "w-full", 3, "label", "formField"], ["for", "broker-auth-type", "id", "broker-auth-type-label"], ["id", "broker-auth-type", "aria-labelledby", "broker-auth-type-label", 3, "formField"], [3, "value"], ["for", "username"], ["id", "username", 3, "placeholder", "formField"], ["for", "new-password"], ["id", "new-password", "autocomplete", "new-password", 3, "type", "placeholder", "formField"], ["suffix", "", 3, "mousedown", "mouseup", "touchstart", "touchend"], ["for", "cert"], ["id", "cert", 3, "placeholder", "formField"], ["for", "filters"], [1, "w-full"], ["inputId", "filters", 3, "placeholder", "formField"]], template: function BrokerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function BrokerFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Template, 11, 9, "form", 1);
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
    ChipListComponent,
    IconComponent,
    FormField,
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
                            <app-form-field>
                                <input
                                    id="broker-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    [formField]="form.name"
                                />
                                <div error>
                                    {{
                                        'ADMIN.BROKERS_NAME_REQUIRED'
                                            | translate
                                    }}
                                </div>
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
                            <app-form-field>
                                <input
                                    id="host"
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_HOST' | translate
                                    "
                                    [formField]="form.host"
                                />
                                <div error>
                                    {{
                                        'ADMIN.BROKERS_HOST_REQUIRED'
                                            | translate
                                    }}
                                </div>
                            </app-form-field>
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
                                <app-form-field>
                                    <input
                                        id="port-number"
                                        type="number"
                                        [placeholder]="
                                            'ADMIN.BROKERS_FIELD_PORT'
                                                | translate
                                        "
                                        [formField]="form.port"
                                    />
                                    <div error>
                                        {{
                                            'ADMIN.BROKERS_PORT_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
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
                            <label
                                for="broker-auth-type"
                                id="broker-auth-type-label"
                                >{{
                                    'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate
                                }}
                            </label>
                            <app-form-field>
                                <app-select
                                    id="broker-auth-type"
                                    aria-labelledby="broker-auth-type-label"
                                    [formField]="form.auth_type"
                                >
                                    @for (type of auth_types; track type) {
                                        <app-option [value]="type.id">
                                            {{ type.name }}
                                        </app-option>
                                    }
                                </app-select>
                            </app-form-field>
                        </div>
                    }
                    @if (auth_type() === 2) {
                        <div class="fieldset">
                            @if (form.username) {
                                <div class="field">
                                    <label
                                        for="username"
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
                                    <app-form-field>
                                        <input
                                            id="username"
                                            [placeholder]="
                                                'ADMIN.BROKERS_USERNAME'
                                                    | translate
                                            "
                                            [formField]="form.username"
                                        />
                                        <div error>
                                            {{
                                                'ADMIN.BROKERS_USERNAME_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    </app-form-field>
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
                                    <app-form-field>
                                        <input
                                            id="new-password"
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
                                            suffix
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
                                        <div error>
                                            {{
                                                'ADMIN.BROKERS_PASSWORD_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    </app-form-field>
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
                                <app-form-field>
                                    <textarea
                                        id="cert"
                                        [placeholder]="
                                            'ADMIN.BROKERS_CERT' | translate
                                        "
                                        [formField]="form.certificate"
                                    ></textarea>
                                    <div error>
                                        {{
                                            'ADMIN.BROKERS_CERT_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                    }
                    @if (form.filters) {
                        <div class="field">
                            <label for="filters">
                                {{ 'ADMIN.BROKERS_FIELD_FILTERS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="filters"
                                    [attr.aria-label]="
                                        'ADMIN.BROKERS_FIELD_FILTERS'
                                            | translate
                                    "
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_FILTERS'
                                            | translate
                                    "
                                    [formField]="form.filters"
                                />
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      ChipListComponent,
      IconComponent,
      TranslatePipe,
      FormField,
      SettingsToggleComponent,
      FullscreenModalShellComponent
    ], styles: ["/* angular:styles/component:css;7d9f4f199b56d3a7;/home/runner/work/backoffice/backoffice/src/app/admin/broker-form.component.ts */\nsettings-form-field {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=broker-form.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrokerFormComponent, { className: "BrokerFormComponent", filePath: "src/app/admin/broker-form.component.ts", lineNumber: 341 });
})();

// src/app/admin/brokers.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "auth_type", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "description", name: a0 });
var _c3 = (a0, a1) => ({ key: "host", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "port", name: a0, content: a1, size: "6rem" });
var _c5 = (a0, a1) => ({ key: "tls", name: a0, content: a1, size: "4rem" });
var _c6 = (a0, a1) => ({ key: "filters", name: a0, content: a1 });
var _c7 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, size: "6rem", content: a1, sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function AdminBrokersComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1);
  }
}
function AdminBrokersComponent_ng_template_25_Case_1_Template(rf, ctx) {
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
function AdminBrokersComponent_ng_template_25_Case_2_Template(rf, ctx) {
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
function AdminBrokersComponent_ng_template_25_Case_3_Template(rf, ctx) {
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
function AdminBrokersComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_25_Case_1_Template, 3, 3, "span")(2, AdminBrokersComponent_ng_template_25_Case_2_Template, 3, 3, "span")(3, AdminBrokersComponent_ng_template_25_Case_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = data_r2) === 0 ? 1 : tmp_7_0 === 2 ? 2 : 3);
  }
}
function AdminBrokersComponent_ng_template_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 17);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd()();
  }
}
function AdminBrokersComponent_ng_template_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 18);
    \u0275\u0275text(2, " lock_open ");
    \u0275\u0275elementEnd()();
  }
}
function AdminBrokersComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminBrokersComponent_ng_template_27_Conditional_0_Template, 3, 0, "div", 15);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_27_Conditional_1_Template, 3, 0, "div", 16);
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275conditional(data_r3 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 1 : -1);
  }
}
function AdminBrokersComponent_ng_template_29_Conditional_1_Template(rf, ctx) {
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
function AdminBrokersComponent_ng_template_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.BROKERS_FILTERS_EMPTY"), " ");
  }
}
function AdminBrokersComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, AdminBrokersComponent_ng_template_29_Conditional_1_Template, 3, 3, "code");
    \u0275\u0275conditionalCreate(2, AdminBrokersComponent_ng_template_29_Conditional_2_Template, 3, 3, "span", 19);
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
function AdminBrokersComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_31_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editBroker(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_31_Template_button_click_5_listener() {
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
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 2, "ADMIN.BROKERS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 4, "ADMIN.BROKERS_REMOVE"));
  }
}
var AdminBrokersComponent = class _AdminBrokersComponent {
  _dialog = inject(Dialog);
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
  /** Open the broker form for a new or existing broker */
  editBroker(item = new Yi()) {
    const ref = this._dialog.open(BrokerFormComponent, { data: { item } });
    ref.componentInstance.event.subscribe((event) => {
      if (event.reason === "done")
        this.loadBrokers();
    });
  }
  async deleteBroker(item) {
    if (item) {
      const removed = await confirmAndRun(this._dialog, {
        title: `Delete MQTT Broker`,
        content: `<p>Delete the broker <strong>${escapeHtml(item.name)}</strong>?</p><p>The broker is deleted <strong>immediately</strong>.</p>`,
        icon: { type: "icon", content: "delete" },
        destructive: true
      }, {
        loading: "Deleting broker...",
        action: () => Fo(item.id),
        error: (reason) => `Error deleting broker. Error: ${reason}`,
        success: `Successfully deleted broker "${item.name}".`
      });
      if (removed)
        this.loadBrokers();
    }
  }
  async loadBrokers() {
    this.loading.set(true);
    try {
      const brokers = await No().then((r) => r.data);
      this.brokers.set(brokers);
    } catch (err) {
      notifyError(`Failed to load brokers. Error: ${describeError(err)}`);
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function AdminBrokersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminBrokersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBrokersComponent, selectors: [["app-brokers"]], decls: 33, vars: 64, consts: [["mono_template", ""], ["auth_type_template", ""], ["tls_template", ""], ["filters_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "default", "", "ripple", "", 1, "text-xl", 3, "click", "appTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "p-4", "font-mono", "text-sm"], [1, "p-4"], [1, "bg-success", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "bg-error", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "text-success-content", "text-xl"], [1, "text-error-content", "text-xl"], [1, "text-xs", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"]], template: function AdminBrokersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("click", function AdminBrokersComponent_Template_button_click_6_listener() {
        return ctx.editBroker();
      });
      \u0275\u0275elementStart(9, "icon");
      \u0275\u0275text(10, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275element(12, "app-progress-bar", 11)(13, "simple-table", 12);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, AdminBrokersComponent_ng_template_23_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(25, AdminBrokersComponent_ng_template_25_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(27, AdminBrokersComponent_ng_template_27_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(29, AdminBrokersComponent_ng_template_29_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, AdminBrokersComponent_ng_template_31_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const mono_template_r8 = \u0275\u0275reference(24);
      const auth_type_template_r9 = \u0275\u0275reference(26);
      const tls_template_r10 = \u0275\u0275reference(28);
      const filters_template_r11 = \u0275\u0275reference(30);
      const actions_template_r12 = \u0275\u0275reference(32);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "ADMIN.BROKERS_HEADER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(7, 11, "ADMIN.BROKERS_ADD"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 13, "ADMIN.BROKERS_ADD"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.brokers())("columns", \u0275\u0275pureFunction8(55, _c8, \u0275\u0275pureFunction1(33, _c0, \u0275\u0275pipeBind1(14, 15, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(35, _c1, \u0275\u0275pipeBind1(15, 17, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), auth_type_template_r9), \u0275\u0275pureFunction1(38, _c2, \u0275\u0275pipeBind1(16, 19, "COMMON.FIELD_DESCRIPTION")), \u0275\u0275pureFunction2(40, _c3, \u0275\u0275pipeBind1(17, 21, "ADMIN.BROKERS_FIELD_HOST"), mono_template_r8), \u0275\u0275pureFunction2(43, _c4, \u0275\u0275pipeBind1(18, 23, "ADMIN.BROKERS_FIELD_PORT"), mono_template_r8), \u0275\u0275pureFunction2(46, _c5, \u0275\u0275pipeBind1(19, 25, "ADMIN.BROKERS_FIELD_TLS"), tls_template_r10), \u0275\u0275pureFunction2(49, _c6, \u0275\u0275pipeBind1(20, 27, "ADMIN.BROKERS_FIELD_FILTERS"), filters_template_r11), \u0275\u0275pureFunction2(52, _c7, \u0275\u0275pipeBind1(21, 29, "COMMON.ACTIONS"), actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(22, 31, "ADMIN.BROKER_LIST_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    IconComponent,
    SimpleTableComponent,
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
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        (click)="editBroker()"
                        [appTooltip]="'ADMIN.BROKERS_ADD' | translate"
                        [attr.aria-label]="'ADMIN.BROKERS_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
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
                    ripple
                    [appTooltip]="'ADMIN.BROKERS_EDIT' | translate"
                    (click)="editBroker(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'ADMIN.BROKERS_REMOVE' | translate"
                    (click)="deleteBroker(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent,
      JsonPipe
    ], styles: ["/* angular:styles/component:css;2e03dd75a776fcef;/home/runner/work/backoffice/backoffice/src/app/admin/brokers.component.ts */\n:host {\n}\n/*# sourceMappingURL=brokers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBrokersComponent, { className: "AdminBrokersComponent", filePath: "src/app/admin/brokers.component.ts", lineNumber: 192 });
})();
export {
  AdminBrokersComponent
};
//# debugId=46ecf774-0c9e-527f-ab50-c09d156b0884
//# sourceMappingURL=chunk-EL4TR22B.js.map
