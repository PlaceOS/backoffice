import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-BL33ZEHA.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-V5QDO25T.js";
import {
  HotkeysService
} from "./chunk-QTR32TTA.js";
import {
  openConfirmModal
} from "./chunk-FJPPD2QF.js";
import {
  SimpleTableComponent
} from "./chunk-CHPLZLIO.js";
import {
  FullscreenModalShellComponent
} from "./chunk-AGMORATK.js";
import "./chunk-WJA6IVS3.js";
import {
  toSignal
} from "./chunk-3PZHMYR6.js";
import {
  SettingsToggleComponent
} from "./chunk-C2EHSMEV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HI6ZGSVN.js";
import "./chunk-6X5TKQ26.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-QRPF7APM.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-HIIV2XZN.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatSuffix
} from "./chunk-QQS43L4S.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-2I5OKOYD.js";
import "./chunk-6KNO3SVN.js";
import "./chunk-F3TF32RZ.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  IconComponent
} from "./chunk-A3Z42SO5.js";
import {
  AsyncHandler
} from "./chunk-6AG37CM5.js";
import "./chunk-JC5YMAMK.js";
import "./chunk-CQWDZ2JU.js";
import "./chunk-ON7XH5SZ.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-FC2K5SLV.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-I3SKV5XF.js";
import {
  COMMA,
  ENTER,
  MatRipple
} from "./chunk-SIL4NKYL.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  JsonPipe,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  Output,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  getInvalidFields,
  inject,
  setClassMetadata,
  signal,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
} from "./chunk-RH6UOTOJ.js";
import {
  $o,
  Ju,
  Ms,
  So,
  ec,
  lastValueFrom,
  map,
  nc,
  tc
} from "./chunk-Y5GQFF5E.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/brokers.utilities.ts
function generateBrokerFormFields(broker) {
  const auth_type = broker.auth_type ?? $o.NoAuth;
  const fields = {
    name: new FormControl(broker.name || "", [Validators.required]),
    description: new FormControl(broker.description),
    auth_type: new FormControl(auth_type),
    host: new FormControl(broker.host, [Validators.required]),
    port: new FormControl(broker.port, [Validators.required]),
    tls: new FormControl(!!broker.tls),
    username: new FormControl(broker.username, auth_type === $o.UserPassword ? [Validators.required] : []),
    password: new FormControl(broker.password, auth_type === $o.UserPassword ? [Validators.required] : []),
    certificate: new FormControl(broker.certificate, auth_type === $o.Certificate ? [Validators.required] : []),
    filters: new FormControl(broker.filters)
  };
  fields.auth_type.valueChanges.subscribe((type) => {
    switch (type) {
      case $o.Certificate:
        fields.username.setValidators([]);
        fields.password.setValidators([]);
        fields.certificate.setValidators([Validators.required]);
        break;
      case $o.UserPassword:
        fields.username.setValidators([Validators.required]);
        fields.password.setValidators([Validators.required]);
        fields.certificate.setValidators([]);
        break;
      default:
        fields.username.setValidators([]);
        fields.password.setValidators([]);
        fields.certificate.setValidators([]);
    }
    fields.username.updateValueAndValidity();
    fields.password.updateValueAndValidity();
    fields.certificate.updateValueAndValidity();
  });
  return new FormGroup(fields);
}

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
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_NAME_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "textarea", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.FIELD_DESCRIPTION"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_FIELD_HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "ADMIN.BROKERS_FIELD_HOST"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_HOST_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.port.invalid && ctx_r0.form.controls.port.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_FIELD_PORT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "ADMIN.BROKERS_FIELD_PORT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_PORT_REQUIRED"), " ");
  }
}
function BrokerFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "settings-toggle", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 1, "COMMON.TLS"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 16);
    \u0275\u0275repeaterCreate(6, BrokerFormComponent_Conditional_1_Conditional_7_For_7_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.auth_types);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 18);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "ADMIN.BROKERS_USERNAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 7, "ADMIN.BROKERS_USERNAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "ADMIN.BROKERS_USERNAME_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 20);
    \u0275\u0275pipe(6, "translate");
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
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.controls.password.invalid && ctx_r0.form.controls.password.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "ADMIN.BROKERS_PASSWORD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r0.show_password() ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(6, 8, "ADMIN.BROKERS_PASSWORD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ADMIN.BROKERS_PASSWORD_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Conditional_8_Conditional_1_Template, 12, 11, "div", 3);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_1_Conditional_8_Conditional_2_Template, 12, 12, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.password ? 2 : -1);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "textarea", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "ADMIN.BROKERS_CERT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "ADMIN.BROKERS_CERT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "ADMIN.BROKERS_CERT_REQUIRED"));
  }
}
function BrokerFormComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BrokerFormComponent_Conditional_1_Conditional_9_Conditional_0_Template, 10, 9, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.form.controls.certificate ? 0 : -1);
  }
}
function BrokerFormComponent_Conditional_1_Conditional_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 29);
    \u0275\u0275listener("removed", function BrokerFormComponent_Conditional_1_Conditional_10_For_8_Template_mat_chip_row_removed_0_listener() {
      const filter_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeFilter(filter_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 30);
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 25)(5, "mat-chip-grid", 26, 0);
    \u0275\u0275repeaterCreate(7, BrokerFormComponent_Conditional_1_Conditional_10_For_8_Template, 6, 8, "mat-chip-row", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(9, "input", 28);
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
    \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Conditional_1_Template, 12, 11, "div", 3);
    \u0275\u0275conditionalCreate(2, BrokerFormComponent_Conditional_1_Conditional_2_Template, 7, 6, "div", 3);
    \u0275\u0275conditionalCreate(3, BrokerFormComponent_Conditional_1_Conditional_3_Template, 12, 11, "div", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275conditionalCreate(5, BrokerFormComponent_Conditional_1_Conditional_5_Template, 12, 11, "div", 3);
    \u0275\u0275conditionalCreate(6, BrokerFormComponent_Conditional_1_Conditional_6_Template, 3, 3, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, BrokerFormComponent_Conditional_1_Conditional_7_Template, 8, 3, "div", 3);
    \u0275\u0275conditionalCreate(8, BrokerFormComponent_Conditional_1_Conditional_8_Template, 3, 2, "div", 4);
    \u0275\u0275conditionalCreate(9, BrokerFormComponent_Conditional_1_Conditional_9_Template, 1, 1);
    \u0275\u0275conditionalCreate(10, BrokerFormComponent_Conditional_1_Conditional_10_Template, 11, 9, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.name ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.name ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.controls.port ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.tls ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.auth_type ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth_type() === 2 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth_type() === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.controls.filters ? 10 : -1);
  }
}
var BrokerFormComponent = class _BrokerFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "ADMIN.BROKERS";
  _hotkey = inject(HotkeysService);
  event = new EventEmitter();
  form = generateBrokerFormFields(this._data.item);
  loading;
  heading = i18n(`${this._name}_${this._data.item.id ? "EDIT" : "NEW"}`);
  /** List of available authentication types */
  auth_types = [
    {
      id: $o.Certificate,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_CERT")
    },
    {
      id: $o.NoAuth,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_NONE")
    },
    {
      id: $o.UserPassword,
      name: i18n("ADMIN.BROKERS_AUTH_TYPE_PASS")
    }
  ];
  /** List of separator characters for filters */
  separators = [ENTER, COMMA];
  /** Whether to show password field value */
  show_password = signal(false, ...ngDevMode ? [{ debugName: "show_password" }] : []);
  auth_type = toSignal(this.form.controls.auth_type.valueChanges, {
    initialValue: this.form.controls.auth_type.value
  });
  filters = toSignal(this.form.controls.filters.valueChanges, {
    initialValue: this.form.controls.filters.value || []
  });
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  submit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    const item = this._data.item;
    this.loading = i18n(`${this._name}.SAVING`);
    this._dialog_ref.disableClose = true;
    const item_json = item.toJSON ? item.toJSON() : item;
    const form_item = item.id ? Ms(__spreadValues(__spreadValues({}, item_json), this.form.value), [void 0]) : __spreadValues(__spreadValues({}, item_json), this.form.value);
    (form_item.id ? ec(form_item.id, form_item) : tc(form_item)).subscribe((_item) => {
      this._dialog_ref.disableClose = false;
      this.event.emit({ reason: "done", metadata: { item: _item } });
      notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
      this._dialog_ref.close();
    }, async (err) => {
      this.loading = null;
      this._dialog_ref.disableClose = false;
      notifyError(i18n(`${this._name}.SAVE_ERROR`, {
        error: JSON.stringify(await err.text?.() || err.message || err)
      }));
    });
  }
  /**
   * Add a filter to the list of filters for the item
   * @param event Input event
   */
  addFilter(event) {
    const value = (event.value || "").trim();
    if (value) {
      const filter_list = this.filters();
      this.form.patchValue({
        filters: unique([...filter_list, value])
      });
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
      this.form.controls.filters.setValue(filter_list);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BrokerFormComponent_BaseFactory;
    return function BrokerFormComponent_Factory(__ngFactoryType__) {
      return (\u0275BrokerFormComponent_BaseFactory || (\u0275BrokerFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BrokerFormComponent)))(__ngFactoryType__ || _BrokerFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrokerFormComponent, selectors: [["broker-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["chipGrid", ""], [3, "save", "heading", "loading"], ["broker", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], ["for", "broker-name"], ["appearance", "outline"], ["matInput", "", "name", "broker-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "description"], ["matInput", "", "name", "description", "formControlName", "description", 3, "placeholder"], ["for", "host"], ["matInput", "", "name", "host", "formControlName", "host", "required", "", 3, "placeholder"], ["for", "port-number"], ["matInput", "", "name", "port-number", "type", "number", "formControlName", "port", 3, "placeholder"], ["formControlName", "tls", 1, "mt-8", "w-full", 3, "name"], ["for", "type"], ["name", "type", "formControlName", "auth_type"], [3, "value"], ["matInput", "", "name", "username", "formControlName", "username", "required", "", 3, "placeholder"], ["for", "new-password"], ["matInput", "", "name", "new-password", "autocomplete", "new-password", "formControlName", "password", 3, "type", "placeholder"], ["matSuffix", "", 3, "mousedown", "mouseup", "touchstart", "touchend"], ["for", "cert"], ["matInput", "", "name", "cert", "formControlName", "certificate", 3, "placeholder"], ["for", "filters"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Enter fruits"], [3, "aria-description"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed", "aria-description"], ["matChipRemove", ""]], template: function BrokerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function BrokerFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, BrokerFormComponent_Conditional_1_Template, 11, 10, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading);
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
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    SettingsToggleComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], styles: ["\n\nsettings-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=broker-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrokerFormComponent, [{
    type: Component,
    args: [{ selector: "broker-form", template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form broker class="flex flex-col" [formGroup]="form">
                    @if (form.controls.name) {
                        <div class="field">
                            <label
                                for="broker-name"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="broker-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.description) {
                        <div class="field">
                            <label for="description">
                                {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    formControlName="description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.name) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'ADMIN.BROKERS_FIELD_HOST' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="host"
                                    [placeholder]="
                                        'ADMIN.BROKERS_FIELD_HOST' | translate
                                    "
                                    formControlName="host"
                                    required
                                />
                                <mat-error>{{
                                    'ADMIN.BROKERS_HOST_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.controls.port) {
                            <div class="field">
                                <label
                                    for="port-number"
                                    [class.error]="
                                        form.controls.port.invalid &&
                                        form.controls.port.touched
                                    "
                                >
                                    {{ 'ADMIN.BROKERS_FIELD_PORT' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="port-number"
                                        type="number"
                                        [placeholder]="
                                            'ADMIN.BROKERS_FIELD_PORT'
                                                | translate
                                        "
                                        formControlName="port"
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
                        @if (form.controls.tls) {
                            <div class="field">
                                <settings-toggle
                                    class="mt-8 w-full"
                                    [name]="'COMMON.TLS' | translate"
                                    formControlName="tls"
                                ></settings-toggle>
                            </div>
                        }
                    </div>
                    @if (form.controls.auth_type) {
                        <div class="field">
                            <label for="type"
                                >{{
                                    'ADMIN.BROKERS_FIELD_AUTH_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="auth_type"
                                >
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
                            @if (form.controls.name) {
                                <div class="field">
                                    <label
                                        for="host"
                                        [class.error]="
                                            form.controls.name.invalid &&
                                            form.controls.name.touched
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
                                            name="username"
                                            [placeholder]="
                                                'ADMIN.BROKERS_USERNAME'
                                                    | translate
                                            "
                                            formControlName="username"
                                            required
                                        />
                                        <mat-error>{{
                                            'ADMIN.BROKERS_USERNAME_REQUIRED'
                                                | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                </div>
                            }
                            @if (form.controls.password) {
                                <div class="field">
                                    <label
                                        for="new-password"
                                        [class.error]="
                                            form.controls.password.invalid &&
                                            form.controls.password.touched
                                        "
                                    >
                                        {{
                                            'ADMIN.BROKERS_PASSWORD' | translate
                                        }}
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            name="new-password"
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
                                            formControlName="password"
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
                        @if (form.controls.certificate) {
                            <div class="field">
                                <label for="cert">
                                    {{ 'ADMIN.BROKERS_CERT' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <textarea
                                        matInput
                                        name="cert"
                                        [placeholder]="
                                            'ADMIN.BROKERS_CERT' | translate
                                        "
                                        formControlName="certificate"
                                    ></textarea>
                                    <mat-error>{{
                                        'ADMIN.BROKERS_CERT_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    }
                    @if (form.controls.filters) {
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
      ReactiveFormsModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrokerFormComponent, { className: "BrokerFormComponent", filePath: "src/app/admin/broker-form.component.ts", lineNumber: 369 });
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
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2);
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
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = data_r3) === 0 ? 1 : tmp_7_0 === 2 ? 2 : 3);
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
    const data_r4 = ctx.data;
    \u0275\u0275conditional(data_r4 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r4 ? 1 : -1);
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
    const data_r5 = \u0275\u0275nextContext().data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, data_r5));
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
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r5 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r5 ? 2 : -1);
  }
}
function AdminBrokersComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editBroker(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function AdminBrokersComponent_ng_template_32_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.deleteBroker(row_r7));
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
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  brokers = signal([], ...ngDevMode ? [{ debugName: "brokers" }] : []);
  ngOnInit() {
    this.loadBrokers();
  }
  newBroker() {
    const ref = this._dialog.open(BrokerFormComponent, {
      data: {
        item: new So(),
        name: "ADMIN.BROKERS",
        save: (item) => tc(item)
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
        save: (item2) => ec(item2.id, item2)
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
      const err = await nc(item.id).toPromise().catch((_) => _);
      details.close();
      if (err)
        return notifyError(`Error deleting broker. Error: ${JSON.stringify(err.response || err.message || err)}`);
      notifySuccess(`Successfully deleted broker "${item.name}".`);
      this.loadBrokers();
    }
  }
  async loadBrokers() {
    this.loading.set(true);
    const brokers = await lastValueFrom(Ju().pipe(map((r) => r.data)));
    this.brokers.set(brokers);
    this.loading.set(false);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AdminBrokersComponent_BaseFactory;
    return function AdminBrokersComponent_Factory(__ngFactoryType__) {
      return (\u0275AdminBrokersComponent_BaseFactory || (\u0275AdminBrokersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AdminBrokersComponent)))(__ngFactoryType__ || _AdminBrokersComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBrokersComponent, selectors: [["app-brokers"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 34, vars: 58, consts: [["mono_template", ""], ["auth_type_template", ""], ["tls_template", ""], ["filters_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center"], [1, "text"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "p-4", "font-mono", "text-sm"], [1, "p-4"], [1, "bg-success", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "bg-error", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "text-success-content", "text-xl"], [1, "text-error-content", "text-xl"], [1, "text-xs", "opacity-30"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function AdminBrokersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275listener("click", function AdminBrokersComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newBroker());
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
      const mono_template_r9 = \u0275\u0275reference(25);
      const auth_type_template_r10 = \u0275\u0275reference(27);
      const tls_template_r11 = \u0275\u0275reference(29);
      const filters_template_r12 = \u0275\u0275reference(31);
      const actions_template_r13 = \u0275\u0275reference(33);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "ADMIN.BROKERS_HEADER"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "ADMIN.BROKERS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.brokers())("columns", \u0275\u0275pureFunction8(49, _c8, \u0275\u0275pureFunction1(28, _c02, \u0275\u0275pipeBind1(16, 12, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(17, 14, "ADMIN.BROKERS_FIELD_AUTH_TYPE"), auth_type_template_r10), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(18, 16, "COMMON.FIELD_DESCRIPTION")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(19, 18, "ADMIN.BROKERS_FIELD_HOST"), mono_template_r9), \u0275\u0275pureFunction2(38, _c4, \u0275\u0275pipeBind1(20, 20, "ADMIN.BROKERS_FIELD_PORT"), mono_template_r9), \u0275\u0275pureFunction2(41, _c5, \u0275\u0275pipeBind1(21, 22, "ADMIN.BROKERS_FIELD_TLS"), tls_template_r11), \u0275\u0275pureFunction2(44, _c6, \u0275\u0275pipeBind1(22, 24, "ADMIN.BROKERS_FIELD_FILTERS"), filters_template_r12), \u0275\u0275pureFunction1(47, _c7, actions_template_r13)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(23, 26, "ADMIN.BROKER_LIST_EMPTY"));
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
    CommonModule,
    TranslatePipe,
    JsonPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n}\n/*# sourceMappingURL=brokers.component.css.map */"] });
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
                ></mat-progress-bar>
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
                ></simple-table>
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
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_EDIT' | translate"
                    (click)="editBroker(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'ADMIN.BROKERS_REMOVE' | translate"
                    class="text-error"
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
      CommonModule
    ], styles: ["/* angular:styles/component:css;572731b77438e4c922c62954d78fd970f67110b5e9d4f700617f449621eb8577;/home/runner/work/backoffice/backoffice/src/app/admin/brokers.component.ts */\n:host {\n}\n/*# sourceMappingURL=brokers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBrokersComponent, { className: "AdminBrokersComponent", filePath: "src/app/admin/brokers.component.ts", lineNumber: 192 });
})();
export {
  AdminBrokersComponent
};
//# sourceMappingURL=chunk-36IAIQ22.js.map
