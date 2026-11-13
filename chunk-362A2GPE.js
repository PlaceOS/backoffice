import {
  ChipListComponent
} from "./chunk-GUFVJINE.js";
import "./chunk-3CXGWY3Q.js";
import {
  isValidUrl
} from "./chunk-WKU6NAJG.js";
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
  isSubsystemUser
} from "./chunk-BPSZRBL2.js";
import "./chunk-ZYXD5WKE.js";
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
  disabled,
  email,
  form,
  required,
  validate
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
  Jo,
  Mt,
  ih,
  sh
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
  resource,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/users/users.utilities.ts
function generateUserFormModel(user) {
  return {
    authority_id: user?.authority_id || "",
    first_name: user?.first_name || user?.name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    staff_id: user?.staff_id || "",
    support: user?.support || false,
    sys_admin: user?.sys_admin || false,
    locatable: user?.locatable || false,
    groups: user?.groups || [],
    password: "",
    confirm_password: "",
    card_number: user?.card_number || "",
    image: user?.image || ""
  };
}
function userFormSchema(user, lock_authority = false) {
  return (path) => {
    required(path.authority_id);
    required(path.first_name);
    required(path.last_name);
    required(path.email);
    email(path.email);
    required(path.password, {
      when() {
        return !user?.id;
      }
    });
    validate(
      path.confirm_password,
      ({ value, valueOf }) => valueOf(path.password) !== value() ? { kind: "match", message: "Passwords must match" } : void 0
    );
    validate(
      path.image,
      ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url", message: "Invalid URL" }
    );
    disabled(path.authority_id, () => !!user?.id || lock_authority);
  };
}

// src/app/users/user-form.component.ts
function UserFormComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.first_name().invalid() && ctx_r1.form.first_name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "USERS.FIRST_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "USERS.FIRST_NAME"))("formField", ctx_r1.form.first_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "USERS.FIRST_NAME_REQUIRED"), " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 17);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "USERS.LAST_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "USERS.LAST_NAME"))("formField", ctx_r1.form.last_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "USERS.LAST_NAME_REQUIRED"), " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 19);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.email().invalid() && ctx_r1.form.email().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_EMAIL"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "COMMON.FIELD_EMAIL"))("formField", ctx_r1.form.email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "USERS.EMAIL_REQUIRED"), " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "USERS.STAFF_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "USERS.STAFF_ID"))("formField", ctx_r1.form.staff_id);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "USERS.STAFF_CARD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "USERS.STAFF_CARD"))("formField", ctx_r1.form.card_number);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 11);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "USERS.ROLE_SUPPORT"))("formField", ctx_r1.form.support);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 11);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "USERS.ROLE_ADMIN"))("formField", ctx_r1.form.sys_admin);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function UserFormComponent_Conditional_1_Conditional_23_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.show_password.set(!ctx_r1.show_password());
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.password().invalid() && ctx_r1.form.password().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "COMMON.PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.show_password() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 11, "COMMON.PASSWORD"))("formField", ctx_r1.form.password);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 13, "COMMON.PASSWORD_TOGGLE"))("aria-pressed", ctx_r1.show_password());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "USERS.PASSWORD_REQUIRED"), " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function UserFormComponent_Conditional_1_Conditional_24_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.show_confirm.set(!ctx_r1.show_confirm());
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.confirm_password().invalid() && ctx_r1.form.confirm_password().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "USERS.PASSWORD_CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.show_confirm() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 11, "USERS.PASSWORD_CONFIRM"))("formField", ctx_r1.form.confirm_password);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 13, "COMMON.PASSWORD_TOGGLE"))("aria-pressed", ctx_r1.show_confirm());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "USERS.PASSWORDS_MATCH"), " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 30)(5, "app-chip-list", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.groups().invalid() && ctx_r1.form.groups().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "USERS.FIELD_GROUPS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "USERS.FIELD_GROUPS"))("formField", ctx_r1.form.groups);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "USERS.FIELD_GROUPS"));
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 33);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.image().invalid() && ctx_r1.form.image().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "USERS.IMAGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "USERS.IMAGE"))("formField", ctx_r1.form.image);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "USERS.IMAGE_INVALID"), " ");
  }
}
function UserFormComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-toggle", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r1.form.locatable)("label", \u0275\u0275pipeBind1(1, 2, "USERS.LOCATABLE"));
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275element(1, "input", 2)(2, "input", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-form-field", 6)(8, "app-select", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275repeaterCreate(10, UserFormComponent_Conditional_1_For_11_Template, 2, 2, "app-option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275conditionalCreate(13, UserFormComponent_Conditional_1_Conditional_13_Template, 12, 12, "div", 4);
    \u0275\u0275conditionalCreate(14, UserFormComponent_Conditional_1_Conditional_14_Template, 12, 10, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, UserFormComponent_Conditional_1_Conditional_15_Template, 12, 12, "div", 4);
    \u0275\u0275elementStart(16, "div", 9);
    \u0275\u0275conditionalCreate(17, UserFormComponent_Conditional_1_Conditional_17_Template, 7, 7, "div", 4);
    \u0275\u0275conditionalCreate(18, UserFormComponent_Conditional_1_Conditional_18_Template, 7, 7, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275conditionalCreate(20, UserFormComponent_Conditional_1_Conditional_20_Template, 2, 4, "settings-toggle", 11);
    \u0275\u0275conditionalCreate(21, UserFormComponent_Conditional_1_Conditional_21_Template, 2, 4, "settings-toggle", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 9);
    \u0275\u0275conditionalCreate(23, UserFormComponent_Conditional_1_Conditional_23_Template, 14, 17, "div", 4);
    \u0275\u0275conditionalCreate(24, UserFormComponent_Conditional_1_Conditional_24_Template, 14, 17, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, UserFormComponent_Conditional_1_Conditional_25_Template, 8, 12, "div", 4);
    \u0275\u0275conditionalCreate(26, UserFormComponent_Conditional_1_Conditional_26_Template, 10, 12, "div", 4);
    \u0275\u0275conditionalCreate(27, UserFormComponent_Conditional_1_Conditional_27_Template, 2, 4, "settings-toggle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 15, "DOMAINS.SINGULAR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.authority_id)("placeholder", \u0275\u0275pipeBind1(9, 17, "ADMIN.SELECT_DOMAIN"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.domain_list());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.form.first_name ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.last_name ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.email ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.staff_id ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.card_number ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.support && !ctx_r1.isSubsystemUser() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.sys_admin && !ctx_r1.isSubsystemUser() ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.staff_id ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.confirm_password ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.groups && !ctx_r1.isSubsystemUser() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.image ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.locatable ? 27 : -1);
  }
}
var UserFormComponent = class _UserFormComponent {
  isSubsystemUser = isSubsystemUser;
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
  _name = "USERS";
  event = new EventEmitter();
  formModel = signal(
    generateUserFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, userFormSchema(this._data.item, isSubsystemUser()));
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`${this._name}.${this._data.item.id ? "EDIT" : "NEW"}`);
  /** Whether password should be visible in plaintext */
  show_password = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_password" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether password confirm should be visible in plaintext */
  show_confirm = signal(
    false,
    ...ngDevMode ? [{ debugName: "show_confirm" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of available domains */
  _domain_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_domain_list" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => isSubsystemUser() ? [Mt()].filter(Boolean) : (await Jo()).data }));
  domain_list = computed(
    () => this._domain_list.value() || [],
    ...ngDevMode ? [{ debugName: "domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    onSaveHotkey(() => this.submit());
    effect(() => {
      const domains = this.domain_list();
      if (!this.formModel().authority_id && domains[0]) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          authority_id: domains[0].id
        }));
      }
    });
  }
  async submit() {
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, () => {
      const form_item = mergeFormItem(this._data.item, this.formModel(), [void 0, null, ""]);
      if (isSubsystemUser()) {
        for (const key of [
          "sys_admin",
          "support",
          "groups",
          "login_name"
        ])
          delete form_item[key];
        form_item.authority_id = Mt()?.id;
      }
      const user = form_item;
      return user.id ? sh(user.id, user) : ih(user);
    });
  }
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["user-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["user", "", 1, "flex", "flex-col"], ["id", "email", "type", "text", "name", "fakeusernameremembered", 2, "display", "none"], ["id", "password", "type", "password", "name", "fakepasswordremembered", 2, "display", "none"], [1, "field"], ["for", "user-domain", "id", "user-domain-label"], [1, "h-12"], ["id", "user-domain", "aria-labelledby", "user-domain-label", 3, "formField", "placeholder"], [3, "value"], [1, "fieldset"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "max-w-1/2", "flex-1", 3, "label", "formField"], [1, "mb-4", 3, "formField", "label"], ["for", "first-name"], ["id", "first-name", 3, "placeholder", "formField"], ["error", ""], ["for", "last-name"], ["id", "last-name", 3, "placeholder", "formField"], ["for", "useremail"], ["id", "useremail", "autocomplete", "nope", 3, "placeholder", "formField"], ["for", "staff-id"], ["id", "staff-id", 3, "placeholder", "formField"], ["for", "card-number"], ["id", "card-number", 3, "placeholder", "formField"], ["for", "new-password"], ["id", "new-password", "autocomplete", "new-password", 3, "type", "placeholder", "formField"], ["icon", "", "suffix", "", "type", "button", 3, "click"], ["for", "confirm-password"], ["id", "confirm-password", 3, "type", "placeholder", "formField"], ["for", "groups"], [1, "w-full"], ["inputId", "groups", 3, "placeholder", "formField"], ["for", "image"], ["id", "image", 3, "placeholder", "formField"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function UserFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, UserFormComponent_Conditional_1_Template, 28, 19, "form", 1);
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
    SettingsToggleComponent,
    FormField,
    ChipListComponent,
    IconComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{ selector: "user-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form user class="flex flex-col">
                    <!--  fake fields are a workaround for chrome/opera autofill getting the wrong fields -->
                    <input
                        id="email"
                        style="display: none"
                        type="text"
                        name="fakeusernameremembered"
                    />
                    <input
                        id="password"
                        style="display: none"
                        type="password"
                        name="fakepasswordremembered"
                    />
                    <div class="field">
                        <label for="user-domain" id="user-domain-label">{{
                            'DOMAINS.SINGULAR' | translate
                        }}</label>
                        <app-form-field class="h-12">
                            <app-select
                                id="user-domain"
                                aria-labelledby="user-domain-label"
                                [formField]="form.authority_id"
                                [placeholder]="
                                    'ADMIN.SELECT_DOMAIN' | translate
                                "
                            >
                                @for (domain of domain_list(); track domain) {
                                    <app-option [value]="domain.id">
                                        {{ domain.name }}
                                    </app-option>
                                }
                            </app-select>
                        </app-form-field>
                    </div>
                    <div class="fieldset">
                        @if (form.first_name) {
                            <div class="field">
                                <label
                                    for="first-name"
                                    [class.error]="
                                        form.first_name().invalid() &&
                                        form.first_name().touched()
                                    "
                                >
                                    {{ 'USERS.FIRST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <app-form-field>
                                    <input
                                        id="first-name"
                                        [placeholder]="
                                            'USERS.FIRST_NAME' | translate
                                        "
                                        [formField]="form.first_name"
                                    />
                                    <div error>
                                        {{
                                            'USERS.FIRST_NAME_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                        @if (form.last_name) {
                            <div class="field">
                                <label for="last-name"
                                    >{{ 'USERS.LAST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <app-form-field>
                                    <input
                                        id="last-name"
                                        [placeholder]="
                                            'USERS.LAST_NAME' | translate
                                        "
                                        [formField]="form.last_name"
                                    />
                                    <div error>
                                        {{
                                            'USERS.LAST_NAME_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.email) {
                        <div class="field">
                            <label
                                for="useremail"
                                [class.error]="
                                    form.email().invalid() &&
                                    form.email().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_EMAIL' | translate
                                }}<span>*</span>
                            </label>
                            <app-form-field>
                                <input
                                    id="useremail"
                                    [placeholder]="
                                        'COMMON.FIELD_EMAIL' | translate
                                    "
                                    [formField]="form.email"
                                    autocomplete="nope"
                                />
                                <div error>
                                    {{ 'USERS.EMAIL_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.staff_id) {
                            <div class="field">
                                <label for="staff-id"
                                    >{{ 'USERS.STAFF_ID' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="staff-id"
                                        [placeholder]="
                                            'USERS.STAFF_ID' | translate
                                        "
                                        [formField]="form.staff_id"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.card_number) {
                            <div class="field">
                                <label for="card-number"
                                    >{{ 'USERS.STAFF_CARD' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="card-number"
                                        [placeholder]="
                                            'USERS.STAFF_CARD' | translate
                                        "
                                        [formField]="form.card_number"
                                    />
                                </app-form-field>
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex items-center space-x-4">
                        @if (form.support && !isSubsystemUser()) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [label]="'USERS.ROLE_SUPPORT' | translate"
                                [formField]="form.support"
                            />
                        }
                        @if (form.sys_admin && !isSubsystemUser()) {
                            <settings-toggle
                                class="max-w-1/2 flex-1"
                                [label]="'USERS.ROLE_ADMIN' | translate"
                                [formField]="form.sys_admin"
                            />
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.staff_id) {
                            <div class="field">
                                <label
                                    for="new-password"
                                    [class.error]="
                                        form.password().invalid() &&
                                        form.password().touched()
                                    "
                                >
                                    {{ 'COMMON.PASSWORD' | translate }}
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
                                            'COMMON.PASSWORD' | translate
                                        "
                                        [formField]="form.password"
                                    />
                                    <button
                                        icon
                                        suffix
                                        type="button"
                                        [attr.aria-label]="
                                            'COMMON.PASSWORD_TOGGLE' | translate
                                        "
                                        [attr.aria-pressed]="show_password()"
                                        (click)="
                                            show_password.set(!show_password());
                                            $event.stopPropagation()
                                        "
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                    <div error>
                                        {{
                                            'USERS.PASSWORD_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                        @if (form.confirm_password) {
                            <div class="field">
                                <label
                                    for="confirm-password"
                                    [class.error]="
                                        form.confirm_password().invalid() &&
                                        form.confirm_password().touched()
                                    "
                                >
                                    {{ 'USERS.PASSWORD_CONFIRM' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="confirm-password"
                                        [type]="
                                            show_confirm() ? 'text' : 'password'
                                        "
                                        [placeholder]="
                                            'USERS.PASSWORD_CONFIRM' | translate
                                        "
                                        [formField]="form.confirm_password"
                                    />
                                    <button
                                        icon
                                        suffix
                                        type="button"
                                        [attr.aria-label]="
                                            'COMMON.PASSWORD_TOGGLE' | translate
                                        "
                                        [attr.aria-pressed]="show_confirm()"
                                        (click)="
                                            show_confirm.set(!show_confirm());
                                            $event.stopPropagation()
                                        "
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                    <div error>
                                        {{
                                            'USERS.PASSWORDS_MATCH' | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.groups && !isSubsystemUser()) {
                        <div class="field">
                            <label
                                for="groups"
                                [class.error]="
                                    form.groups().invalid() &&
                                    form.groups().touched()
                                "
                            >
                                {{ 'USERS.FIELD_GROUPS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="groups"
                                    [attr.aria-label]="
                                        'USERS.FIELD_GROUPS' | translate
                                    "
                                    [placeholder]="
                                        'USERS.FIELD_GROUPS' | translate
                                    "
                                    [formField]="form.groups"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.image) {
                        <div class="field">
                            <label
                                for="image"
                                [class.error]="
                                    form.image().invalid() &&
                                    form.image().touched()
                                "
                            >
                                {{ 'USERS.IMAGE' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="image"
                                    [placeholder]="'USERS.IMAGE' | translate"
                                    [formField]="form.image"
                                />
                                <div error>
                                    {{ 'USERS.IMAGE_INVALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (form.locatable) {
                        <settings-toggle
                            [formField]="form.locatable"
                            [label]="'USERS.LOCATABLE' | translate"
                            class="mb-4"
                        />
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      SettingsToggleComponent,
      FormField,
      TranslatePipe,
      ChipListComponent,
      IconComponent,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/users/user-form.component.ts", lineNumber: 378 });
})();
export {
  UserFormComponent
};
//# debugId=f8f381f3-cdcb-5bac-8f15-492ed11a50f6
//# sourceMappingURL=chunk-362A2GPE.js.map
