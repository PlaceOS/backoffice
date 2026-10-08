import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-PT5AMIUU.js";
import {
  isValidUrl
} from "./chunk-F45UEFFY.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  disabled,
  email,
  form,
  required,
  submit,
  validate
} from "./chunk-LMCXBYGC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-NQS2MXIA.js";
import {
  HotkeysService
} from "./chunk-NY2WALLY.js";
import "./chunk-QTD6K5LA.js";
import {
  readError
} from "./chunk-G3IJGLD4.js";
import {
  isSubsystemUser
} from "./chunk-PV3B5VUM.js";
import {
  SettingsToggleComponent
} from "./chunk-24BHDQJX.js";
import "./chunk-KSTC3SGQ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-V5PUZAZK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WVKNYC6X.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatSuffix
} from "./chunk-IGQAWJ6Y.js";
import "./chunk-TUWOEI35.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-AYJXTTVT.js";
import {
  AsyncHandler
} from "./chunk-NZ7ZPGVU.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-EZWGQADM.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-5OMVQZOP.js";
import {
  MatOption
} from "./chunk-PSYHHKS3.js";
import "./chunk-GORY6HKE.js";
import "./chunk-SXYVSUAR.js";
import {
  Mt,
  Wo,
  Xa,
  eh,
  oi
} from "./chunk-P3FA5CPP.js";
import {
  IconComponent
} from "./chunk-Y7HZB3U4.js";
import "./chunk-XX3FQFUN.js";
import "./chunk-5NTI54SQ.js";
import "./chunk-YEGFHODJ.js";
import "./chunk-ZVFWHHSJ.js";
import "./chunk-H4IW3C2Y.js";
import {
  COMMA,
  ENTER
} from "./chunk-DZQDK6ER.js";
import "./chunk-FVPQ6H6W.js";
import "./chunk-QHKUHZUG.js";
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
} from "./chunk-RDM3X2TD.js";
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
    validate(path.confirm_password, ({ value, valueOf }) => valueOf(path.password) !== value() ? { kind: "match", message: "Passwords must match" } : void 0);
    validate(path.image, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url", message: "Invalid URL" });
    disabled(path.authority_id, () => !!user?.id || lock_authority);
  };
}

// src/app/users/user-form.component.ts
var _c0 = (a0) => ({ item: a0 });
function UserFormComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
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
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "USERS.FIRST_NAME_REQUIRED"));
  }
}
function UserFormComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 18);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "USERS.LAST_NAME_REQUIRED"));
  }
}
function UserFormComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15);
    \u0275\u0275element(7, "input", 20);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "USERS.EMAIL_REQUIRED"));
  }
}
function UserFormComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
    \u0275\u0275element(0, "settings-toggle", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "USERS.ROLE_SUPPORT"))("formField", ctx_r1.form.support);
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
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
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 26);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "button", 27);
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
    \u0275\u0275elementStart(11, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "USERS.PASSWORD_REQUIRED"));
  }
}
function UserFormComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 29);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "button", 27);
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
    \u0275\u0275elementStart(11, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "USERS.PASSWORDS_MATCH"));
  }
}
function UserFormComponent_Conditional_1_Conditional_25_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 33);
    \u0275\u0275listener("removed", function UserFormComponent_Conditional_1_Conditional_25_For_9_Template_mat_chip_row_removed_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeGroup(item_r7));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c0, item_r7)));
  }
}
function UserFormComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 31)(5, "mat-chip-grid", null, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, UserFormComponent_Conditional_1_Conditional_25_For_9_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 32);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function UserFormComponent_Conditional_1_Conditional_25_Template_input_matChipInputTokenEnd_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addGroup($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r8 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.form.groups().invalid() && ctx_r1.form.groups().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "USERS.FIELD_GROUPS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "USERS.FIELD_GROUPS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.group_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "USERS.FIELD_GROUPS"))("matChipInputFor", chipList_r8)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function UserFormComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 15);
    \u0275\u0275element(5, "input", 37);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "USERS.IMAGE_INVALID"));
  }
}
function UserFormComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-toggle", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r1.form.locatable)("label", \u0275\u0275pipeBind1(1, 2, "USERS.LOCATABLE"));
    \u0275\u0275control();
  }
}
function UserFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275element(1, "input", 3)(2, "input", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "label", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 7)(8, "mat-select", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275repeaterCreate(10, UserFormComponent_Conditional_1_For_11_Template, 2, 2, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275conditionalCreate(13, UserFormComponent_Conditional_1_Conditional_13_Template, 12, 12, "div", 5);
    \u0275\u0275conditionalCreate(14, UserFormComponent_Conditional_1_Conditional_14_Template, 12, 10, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, UserFormComponent_Conditional_1_Conditional_15_Template, 12, 12, "div", 5);
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275conditionalCreate(17, UserFormComponent_Conditional_1_Conditional_17_Template, 7, 7, "div", 5);
    \u0275\u0275conditionalCreate(18, UserFormComponent_Conditional_1_Conditional_18_Template, 7, 7, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275conditionalCreate(20, UserFormComponent_Conditional_1_Conditional_20_Template, 2, 4, "settings-toggle", 12);
    \u0275\u0275conditionalCreate(21, UserFormComponent_Conditional_1_Conditional_21_Template, 2, 4, "settings-toggle", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 10);
    \u0275\u0275conditionalCreate(23, UserFormComponent_Conditional_1_Conditional_23_Template, 14, 17, "div", 5);
    \u0275\u0275conditionalCreate(24, UserFormComponent_Conditional_1_Conditional_24_Template, 14, 17, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, UserFormComponent_Conditional_1_Conditional_25_Template, 12, 14, "div", 5);
    \u0275\u0275conditionalCreate(26, UserFormComponent_Conditional_1_Conditional_26_Template, 10, 12, "div", 5);
    \u0275\u0275conditionalCreate(27, UserFormComponent_Conditional_1_Conditional_27_Template, 2, 4, "settings-toggle", 13);
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
var UserFormComponent = class _UserFormComponent extends AsyncHandler {
  isSubsystemUser = isSubsystemUser;
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "USERS";
  _hotkey = inject(HotkeysService);
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
  )), { loader: async () => isSubsystemUser() ? [Mt()].filter(Boolean) : (await Wo()).data }));
  domain_list = computed(
    () => this._domain_list.value() || [],
    ...ngDevMode ? [{ debugName: "domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of separator characters for groups */
  separators = [ENTER, COMMA];
  group_list = computed(
    () => this.formModel().groups || [],
    ...ngDevMode ? [{ debugName: "group_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addGroup = (e) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    groups: addSignalChipItem(value.groups, e)
  }));
  removeGroup = (i) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    groups: removeSignalChipItem(value.groups, i)
  }));
  constructor() {
    super();
    effect(() => {
      const domains = this.domain_list();
      if (!this.formModel().authority_id && domains[0]) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          authority_id: domains[0].id
        }));
      }
    });
  }
  async ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_item = item.id ? oi(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
        void 0,
        null,
        ""
      ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
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
      try {
        const _item = await (form_item.id ? Xa(form_item.id, form_item) : eh(form_item));
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
  static \u0275fac = function UserFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["user-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["chipList", ""], [3, "save", "heading", "loading"], ["user", "", 1, "flex", "flex-col"], ["id", "email", "type", "text", "name", "fakeusernameremembered", 2, "display", "none"], ["id", "password", "type", "password", "name", "fakepasswordremembered", 2, "display", "none"], [1, "field"], ["for", "user-domain", "id", "user-domain-label"], ["appearance", "outline", 1, "h-12"], ["id", "user-domain", "aria-labelledby", "user-domain-label", 3, "formField", "placeholder"], [3, "value"], [1, "fieldset"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "max-w-1/2", "flex-1", 3, "label", "formField"], [1, "mb-4", 3, "formField", "label"], ["for", "first-name"], ["appearance", "outline"], ["matInput", "", "id", "first-name", 3, "placeholder", "formField"], ["for", "last-name"], ["matInput", "", "id", "last-name", 3, "placeholder", "formField"], ["for", "useremail"], ["matInput", "", "id", "useremail", "autocomplete", "nope", 3, "placeholder", "formField"], ["for", "staff-id"], ["matInput", "", "id", "staff-id", 3, "placeholder", "formField"], ["for", "card-number"], ["matInput", "", "id", "card-number", 3, "placeholder", "formField"], ["for", "new-password"], ["matInput", "", "id", "new-password", "autocomplete", "new-password", 3, "type", "placeholder", "formField"], ["icon", "", "matSuffix", "", "type", "button", 3, "click"], ["for", "confirm-password"], ["matInput", "", "id", "confirm-password", 3, "type", "placeholder", "formField"], ["for", "groups"], ["appearance", "outline", 1, "w-full"], ["id", "groups", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""], ["for", "image"], ["matInput", "", "id", "image", 3, "placeholder", "formField"]], template: function UserFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function UserFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, UserFormComponent_Conditional_1_Template, 28, 19, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    SettingsToggleComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    IconComponent,
    MatSelectModule,
    MatSelect,
    MatOption,
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
                        <mat-form-field appearance="outline" class="h-12">
                            <mat-select
                                id="user-domain"
                                aria-labelledby="user-domain-label"
                                [formField]="form.authority_id"
                                [placeholder]="
                                    'ADMIN.SELECT_DOMAIN' | translate
                                "
                            >
                                @for (domain of domain_list(); track domain) {
                                    <mat-option [value]="domain.id">
                                        {{ domain.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="first-name"
                                        [placeholder]="
                                            'USERS.FIRST_NAME' | translate
                                        "
                                        [formField]="form.first_name"
                                    />
                                    <mat-error>{{
                                        'USERS.FIRST_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.last_name) {
                            <div class="field">
                                <label for="last-name"
                                    >{{ 'USERS.LAST_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="last-name"
                                        [placeholder]="
                                            'USERS.LAST_NAME' | translate
                                        "
                                        [formField]="form.last_name"
                                    />
                                    <mat-error>{{
                                        'USERS.LAST_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="useremail"
                                    [placeholder]="
                                        'COMMON.FIELD_EMAIL' | translate
                                    "
                                    [formField]="form.email"
                                    autocomplete="nope"
                                />
                                <mat-error>{{
                                    'USERS.EMAIL_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.staff_id) {
                            <div class="field">
                                <label for="staff-id"
                                    >{{ 'USERS.STAFF_ID' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="staff-id"
                                        [placeholder]="
                                            'USERS.STAFF_ID' | translate
                                        "
                                        [formField]="form.staff_id"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.card_number) {
                            <div class="field">
                                <label for="card-number"
                                    >{{ 'USERS.STAFF_CARD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="card-number"
                                        [placeholder]="
                                            'USERS.STAFF_CARD' | translate
                                        "
                                        [formField]="form.card_number"
                                    />
                                </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
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
                                        matSuffix
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
                                    <mat-error>{{
                                        'USERS.PASSWORD_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
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
                                        matSuffix
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
                                    <mat-error>{{
                                        'USERS.PASSWORDS_MATCH' | translate
                                    }}</mat-error>
                                </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    [attr.aria-label]="
                                        'USERS.FIELD_GROUPS' | translate
                                    "
                                >
                                    @for (item of group_list(); track item) {
                                        <mat-chip-row
                                            (removed)="removeGroup(item)"
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
                                    id="groups"
                                    [placeholder]="
                                        'USERS.FIELD_GROUPS' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addGroup($event)"
                                />
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="image"
                                    [placeholder]="'USERS.IMAGE' | translate"
                                    [formField]="form.image"
                                />
                                <mat-error>{{
                                    'USERS.IMAGE_INVALID' | translate
                                }}</mat-error>
                            </mat-form-field>
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
      SettingsToggleComponent,
      FormField,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatChipsModule,
      IconComponent,
      MatSelectModule,
      FullscreenModalShellComponent
    ] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent", filePath: "src/app/users/user-form.component.ts", lineNumber: 413 });
})();
export {
  UserFormComponent
};
//# sourceMappingURL=chunk-RKGCGKUT.js.map
