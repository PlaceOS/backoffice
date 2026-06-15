import {
  AdminDataService
} from "./chunk-YHJ76Z44.js";
import {
  getUnixTime
} from "./chunk-GV5KQIK5.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  ObjectListFieldComponent
} from "./chunk-2X7SWQTW.js";
import {
  getInvalidSignalFields
} from "./chunk-KJQGK2OM.js";
import {
  FormField,
  email,
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
} from "./chunk-Z5RBFVQV.js";
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
  MatFormFieldModule
} from "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import {
  addDays
} from "./chunk-XI4ZLZAC.js";
import {
  startOfDay
} from "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
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
import "./chunk-JJ5DNIGX.js";
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
  MatRipple
} from "./chunk-2UI5N333.js";
import {
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  Input,
  Output,
  S,
  Ws,
  X,
  computed,
  d,
  inject,
  model,
  output,
  setClassMetadata,
  signal,
  ue,
  ɵsetClassDebugInfo,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/booking-limits-modal.component.ts
var _c0 = () => ["type", "amount"];
var BookingLimitsModalComponent = class _BookingLimitsModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  tenant = this._data.tenant;
  domain = this._data.domain;
  formModel = signal(
    {
      booking_limits: []
    },
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel);
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    const limits = this.tenant?.booking_limits || {};
    this.formModel.set({
      booking_limits: Object.keys(limits).map((k) => ({
        type: k,
        amount: `${limits[k]}`
      }))
    });
  }
  async save() {
    await submit(this.form, async () => {
      this._dialog_ref.disableClose = true;
      this.loading.set(true);
      const limits = this.formModel().booking_limits || [];
      const booking_limits = {};
      for (const { type, amount } of limits) {
        booking_limits[type] = +amount || 0;
      }
      const call = S(`/api/staff/v1/tenants/${this.tenant.id}/limits`, booking_limits);
      const resp = await call.catch(() => null);
      this.loading.set(false);
      this._dialog_ref.disableClose = false;
      if (!resp)
        return notifyError("Error adding new tenant.");
      notifySuccess("Successfully added new tenant.");
      this._dialog_ref.close(__spreadProps(__spreadValues({}, this.tenant), { booking_limits: resp }));
    });
  }
  static \u0275fac = function BookingLimitsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookingLimitsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLimitsModalComponent, selectors: [["booking-limits-modal"]], decls: 3, vars: 4, consts: [["heading", "Edit Tenant Booking Limits\n        ", 3, "save", "loading"], [1, "flex", "flex-col"], [3, "formField", "fields"]], template: function BookingLimitsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function BookingLimitsModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "object-list-field", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("loading", ctx.loading() ? "Saving booking limits for Staff API tenant..." : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("formField", ctx.form.booking_limits)("fields", \u0275\u0275pureFunction0(3, _c0));
      \u0275\u0275control();
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    ObjectListFieldComponent,
    FormField
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLimitsModalComponent, [{
    type: Component,
    args: [{ selector: "booking-limits-modal", template: `
        <fullscreen-modal-shell
            heading="Edit Tenant Booking Limits
        "
            [loading]="
                loading() ? 'Saving booking limits for Staff API tenant...' : ''
            "
            (save)="save()"
        >
            <div class="flex flex-col">
                <object-list-field
                    [formField]="form.booking_limits"
                    [fields]="['type', 'amount']"
                />
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      ObjectListFieldComponent,
      FormField
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLimitsModalComponent, { className: "BookingLimitsModalComponent", filePath: "src/app/admin/booking-limits-modal.component.ts", lineNumber: 36 });
})();

// src/app/admin/staff-tenant-modal.component.ts
var _c02 = () => ({ minute: 15 });
var _c1 = () => ({ minute: 30 });
var _c2 = () => ({ minute: 45 });
var _c3 = () => ({ hour: 1 });
var _c4 = () => ({ minute: 30, hour: 1 });
var _c5 = () => ({ hour: 2 });
var _c6 = () => ({ minute: 30, hour: 2 });
var _c7 = () => ({ hour: 3 });
var _c8 = () => ({ minute: 30, hour: 3 });
var _c9 = () => ({ hour: 4 });
var _c10 = () => ({ standalone: true });
var _c11 = () => ["type", "amount"];
var _c12 = (a0) => ({ name: a0 });
var _forTrack0 = ($index, $item) => $item.key;
function StaffTenantModalComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "label", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 5);
    \u0275\u0275element(6, "input", 24);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "ADMIN.TENANTS_SERVICE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.service_account)("placeholder", \u0275\u0275pipeBind1(7, 6, "ADMIN.TENANTS_SERVICE_ACCOUNT"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "ADMIN.TENANTS_SERVICE_ACCOUNT_ERROR"), " ");
  }
}
function StaffTenantModalComponent_For_79_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function StaffTenantModalComponent_For_79_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_79_Case_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateCredential(item_r3.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "credential-" + item_r3.key)("ngModel", ctx_r0.formModel().credentials[item_r3.key] || "")("ngModelOptions", \u0275\u0275pureFunction0(4, _c10))("placeholder", ctx_r0.name_map[item_r3.key] || item_r3.key);
    \u0275\u0275control();
  }
}
function StaffTenantModalComponent_For_79_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 28);
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_79_Case_6_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateCredential(item_r3.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "credential-" + item_r3.key)("ngModel", ctx_r0.formModel().credentials[item_r3.key] || "")("ngModelOptions", \u0275\u0275pureFunction0(4, _c10))("placeholder", ctx_r0.name_map[item_r3.key] || item_r3.key);
    \u0275\u0275control();
  }
}
function StaffTenantModalComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, StaffTenantModalComponent_For_79_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275conditionalCreate(5, StaffTenantModalComponent_For_79_Case_5_Template, 1, 5, "input", 27)(6, StaffTenantModalComponent_For_79_Case_6_Template, 1, 5, "textarea", 27);
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", item_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("for", "credential-" + item_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.name_map[item_r3.key] || item_r3.key, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.required ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = item_r3.key) === "signing_key" ? 6 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 7, "ADMIN.TENANT_ITEM_REQUIRED", \u0275\u0275pureFunction1(10, _c12, item_r3.key)), " ");
  }
}
function StaffTenantModalComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "settings-toggle", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function StaffTenantModalComponent_Conditional_80_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.show_outlook, $event) || (ctx_r0.show_outlook = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 3, "ADMIN.TENANTS_CONFIG_OUTLOOK"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.show_outlook);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c10));
    \u0275\u0275control();
  }
}
function StaffTenantModalComponent_Conditional_81_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function StaffTenantModalComponent_Conditional_81_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, StaffTenantModalComponent_Conditional_81_For_2_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 28);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_Conditional_81_For_2_Template_input_ngModelChange_6_listener($event) {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateOutlookConfig(item_r7, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", "outlook-" + item_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, ctx_r0.outlookName(item_r7)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7 === "app_id" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "outlook-" + item_r7)("ngModel", ctx_r0.formModel().outlook_config[item_r7] || "")("ngModelOptions", \u0275\u0275pureFunction0(11, _c10))("placeholder", \u0275\u0275pipeBind1(7, 9, ctx_r0.outlookName(item_r7)));
    \u0275\u0275control();
  }
}
function StaffTenantModalComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, StaffTenantModalComponent_Conditional_81_For_2_Template, 8, 12, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.outlook_fields);
  }
}
var FIELD_NAME_MAPPING = {
  issuer: "Service Account Email",
  conference_type: "Conference Type",
  signing_key: "Private Key",
  sub: "Service User",
  client_id: "Client ID",
  client_secret: "Client Secret",
  domain: "Domain",
  scopes: "Scopes",
  user_agent: "User Agent"
};
var GOOGLE_CREDENTIALS = [
  "issuer",
  "signing_key",
  "scopes",
  "domain",
  "sub",
  "user_agent",
  "conference_type"
];
var OFFICE_CREDENTIALS = [
  "tenant",
  "client_id",
  "client_secret",
  "conference_type"
];
var StaffTenantModalComponent = class _StaffTenantModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  event = output();
  tenant = this._data.tenant;
  domain = this._data.domain;
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  show_outlook = model(
    false,
    ...ngDevMode ? [{ debugName: "show_outlook" }] : (
      /* istanbul ignore next */
      []
    )
  );
  name_map = FIELD_NAME_MAPPING;
  outlook_fields = [
    "app_id",
    "app_domain",
    "app_resource",
    "source_location",
    "base_path"
  ];
  formModel = signal(
    this.generateFormModel(),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    required(path.name);
    required(path.platform);
    email(path.service_account);
  });
  credential_fields = computed(
    () => {
      const model2 = this.formModel();
      const required2 = !model2.id && !model2.delegated;
      return this.credentialKeys().map((key) => ({
        key,
        required: required2 && key !== "conference_type",
        disabled: model2.delegated && key !== "conference_type"
      }));
    },
    ...ngDevMode ? [{ debugName: "credential_fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  outlookName(field) {
    switch (field) {
      case "app_id":
        return "ADMIN.TENANTS_APP_ID";
      case "app_domain":
        return "ADMIN.TENANTS_APP_DOMAIN";
      case "app_resource":
        return "ADMIN.TENANTS_APP_RESOURCE";
      case "source_location":
        return "ADMIN.TENANTS_SOURCE_LOCATION";
      default:
        return "ADMIN.TENANTS_BASE_PATH";
    }
  }
  updateCredential(key, value) {
    this.formModel.update((model2) => __spreadProps(__spreadValues({}, model2), {
      credentials: __spreadProps(__spreadValues({}, model2.credentials), { [key]: value })
    }));
  }
  updateOutlookConfig(key, value) {
    this.formModel.update((model2) => __spreadProps(__spreadValues({}, model2), {
      outlook_config: __spreadProps(__spreadValues({}, model2.outlook_config), { [key]: value })
    }));
  }
  updateBookingLimits(booking_limits) {
    this.formModel.update((model2) => __spreadProps(__spreadValues({}, model2), { booking_limits }));
  }
  async save() {
    await submit(this.form, async () => void 0);
    const invalid_credentials = this.credential_fields().filter((field) => field.required).filter((field) => !this.formModel().credentials[field.key]).map((field) => field.key);
    if (this.form().invalid() || invalid_credentials.length) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: [
          ...getInvalidSignalFields(this.form),
          ...invalid_credentials
        ].join(", ")
      }));
    }
    this._dialog_ref.disableClose = true;
    this.loading.set("Saving staff API tenant...");
    const model2 = this.formModel();
    const limits = model2.booking_limits || [];
    const booking_limits = limits.reduce((m, { type, amount }) => {
      m[type] = +amount;
      return m;
    }, {});
    const value = __spreadProps(__spreadValues({}, model2), {
      credentials: this.activeCredentials(model2),
      booking_limits
    });
    if (!value.credentials.conference_type) {
      delete value.credentials.conference_type;
    }
    if (!this.show_outlook()) {
      delete value.outlook_config;
    } else {
      for (const key in value.outlook_config) {
        if (value.outlook_config[key] == null) {
          delete value.outlook_config[key];
        }
      }
    }
    for (const key in value.credentials) {
      if (value.credentials[key] == null) {
        delete value.credentials[key];
      }
    }
    if (!Object.keys(value.credentials).length) {
      delete value.credentials;
    }
    const data = Ws(__spreadValues(__spreadValues({}, this.tenant || {}), value), ["", null, void 0]);
    const call = this.tenant?.id ? ue(`/api/staff/v1/tenants/${this.tenant.id}`, data) : S("/api/staff/v1/tenants", data);
    const tenant = await call.catch((__) => null);
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    if (!tenant)
      return notifyError(i18n("ADMIN.TENANATS_SAVE_ERROR"));
    notifySuccess(i18n("ADMIN.TENANATS_SAVE_SUCCESS"));
    this._dialog_ref.close();
  }
  credentialKeys(model2 = this.formModel()) {
    return model2.platform === "office365" ? OFFICE_CREDENTIALS : GOOGLE_CREDENTIALS;
  }
  activeCredentials(model2) {
    const credentials = {};
    const conference_type = model2.credentials.conference_type;
    if (conference_type) {
      credentials.conference_type = conference_type;
    }
    if (model2.delegated) {
      return credentials;
    }
    for (const key of this.credentialKeys(model2)) {
      if (key === "conference_type")
        continue;
      credentials[key] = model2.credentials[key];
    }
    return credentials;
  }
  generateFormModel() {
    const limits = this.tenant?.booking_limits || {};
    const credentials = this.tenant?.credentials || {};
    return {
      id: this.tenant?.id || "",
      domain: this.tenant?.domain || this.domain?.domain || "localhost",
      name: this.tenant?.name || "",
      email_domain: this.tenant?.email_domain || "",
      delegated: this.tenant?.delegated ?? false,
      platform: this.tenant?.platform === "office365" ? "office365" : "google",
      service_account: this.tenant?.service_account || "",
      booking_limits: Object.keys(limits).map((k) => ({
        type: k,
        amount: limits[k]
      })),
      early_checkin: this.tenant?.early_checkin || 60 * 60,
      credentials: __spreadValues({
        user_agent: "PlaceOS"
      }, credentials),
      outlook_config: __spreadValues({}, (this.tenant || {}).outlook_config || {})
    };
  }
  static \u0275fac = function StaffTenantModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffTenantModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTenantModalComponent, selectors: [["staff-tenant-modal"]], inputs: { show_outlook: [1, "show_outlook"] }, outputs: { event: "event", show_outlook: "show_outlookChange" }, decls: 87, vars: 107, consts: [[3, "save", "heading", "loading"], [1, "mb-16"], [1, "flex", "flex-wrap", "items-center", "space-x-0", "sm:space-x-2"], [1, "flex", "flex-1", "flex-col"], ["for", "tenant-name"], ["appearance", "outline"], ["id", "tenant-name", "matInput", "", 3, "formField", "placeholder"], ["for", "tenant-platform"], ["id", "tenant-platform", 3, "formField"], ["value", "google"], ["value", "office365"], ["for", "tenant-email-domain"], ["id", "tenant-email-domain", "matInput", "", 3, "formField", "placeholder"], [1, "flex", "flex-col", "space-y-2"], ["for", "tenant-early-checkin"], ["id", "tenant-early-checkin", "placeholder", "Select time", 3, "formField"], [3, "value"], [1, "mb-6", "flex", "items-center"], [1, "w-1/2", 3, "label", "formField"], [1, "flex", "flex-col", 3, "hidden"], [1, "mb-4", "flex", "items-center"], [1, "label"], [3, "ngModelChange", "ngModel", "ngModelOptions", "fields"], ["for", "tenant-service-account"], ["id", "tenant-service-account", "matInput", "", 3, "formField", "placeholder"], [1, "flex", "flex-col"], [1, "capitalize", 3, "for"], ["matInput", "", 3, "id", "ngModel", "ngModelOptions", "placeholder"], ["matInput", "", 3, "ngModelChange", "id", "ngModel", "ngModelOptions", "placeholder"], [1, "w-1/2", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [3, "for"]], template: function StaffTenantModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function StaffTenantModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-form-field", 5);
      \u0275\u0275element(11, "input", 6);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(13, "mat-error");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 3)(17, "label", 7);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "mat-form-field", 5)(23, "mat-select", 8)(24, "mat-option", 9);
      \u0275\u0275text(25, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 10);
      \u0275\u0275text(27, " Office365 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 3)(29, "label", 11);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-form-field", 5);
      \u0275\u0275element(33, "input", 12);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(35, "mat-error");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 13)(39, "label", 14);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-form-field", 5)(43, "mat-select", 15)(44, "mat-option", 16);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 16);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-option", 16);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "mat-option", 16);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-option", 16);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 16);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 16);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-option", 16);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 16);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 16);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(74, StaffTenantModalComponent_Conditional_74_Template, 11, 10, "div", 2);
      \u0275\u0275elementStart(75, "div", 17);
      \u0275\u0275element(76, "settings-toggle", 18);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(78, StaffTenantModalComponent_For_79_Template, 10, 12, "div", 19, _forTrack0);
      \u0275\u0275conditionalCreate(80, StaffTenantModalComponent_Conditional_80_Template, 3, 6, "div", 20);
      \u0275\u0275conditionalCreate(81, StaffTenantModalComponent_Conditional_81_Template, 3, 0, "div", 2);
      \u0275\u0275elementStart(82, "div", 13)(83, "span", 21);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "object-list-field", 22);
      \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_Template_object_list_field_ngModelChange_86_listener($event) {
        return ctx.updateBookingLimits($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 43, ctx.tenant ? "ADMIN.TENANTS_EDIT" : "ADMIN.TENANTS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 45, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(12, 47, "ADMIN.TENANTS_FIELD_NAME"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 49, "ADMIN.TENANTS_NAME_ERROR"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 51, "ADMIN.TENANTS_PLATFORM"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formField", ctx.form.platform);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 53, "ADMIN.TENANTS_EMAIL_DOMAIN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.email_domain)("placeholder", \u0275\u0275pipeBind1(34, 55, "ADMIN.TENANTS_EMAIL_PLACEHOLDER"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 57, "ADMIN.TENANTS_EMAIL_ERROR"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 59, "ADMIN.TENANTS_EARLY_CHECKIN"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.early_checkin);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("value", 15 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 61, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(95, _c02)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 30 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 64, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(96, _c1)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 45 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 67, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(97, _c2)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 70, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(98, _c3)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 1.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 73, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(99, _c4)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 76, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(100, _c5)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 79, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(101, _c6)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 82, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(102, _c7)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(70, 85, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(103, _c8)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 4 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(73, 88, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(104, _c9)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.formModel().platform !== "google" && !ctx.formModel().delegated ? 74 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(77, 91, "ADMIN.TENANTS_DELEGATED"))("formField", ctx.form.delegated);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.credential_fields());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.formModel().platform === "office365" ? 80 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.show_outlook() && ctx.formModel().platform === "office365" ? 81 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 93, "ADMIN.TENANTS_BOOKING_LIMITS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.formModel().booking_limits)("ngModelOptions", \u0275\u0275pureFunction0(105, _c10))("fields", \u0275\u0275pureFunction0(106, _c11));
      \u0275\u0275control();
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    ObjectListFieldComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    SettingsToggleComponent,
    MatSelectModule,
    MatSelect,
    MatOption,
    TranslatePipe
  ], styles: ["\nmain[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=staff-tenant-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffTenantModalComponent, [{
    type: Component,
    args: [{ selector: "staff-tenant-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (tenant ? 'ADMIN.TENANTS_EDIT' : 'ADMIN.TENANTS_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form class="mb-16">
                <div class="flex flex-wrap items-center space-x-0 sm:space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="tenant-name">
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                id="tenant-name"
                                matInput
                                [formField]="form.name"
                                [placeholder]="
                                    'ADMIN.TENANTS_FIELD_NAME' | translate
                                "
                            />
                            <mat-error>{{
                                'ADMIN.TENANTS_NAME_ERROR' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="tenant-platform">
                            {{ 'ADMIN.TENANTS_PLATFORM' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                id="tenant-platform"
                                [formField]="form.platform"
                            >
                                <mat-option value="google">Google</mat-option>
                                <mat-option value="office365">
                                    Office365
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="tenant-email-domain">
                        {{ 'ADMIN.TENANTS_EMAIL_DOMAIN' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            id="tenant-email-domain"
                            matInput
                            [formField]="form.email_domain"
                            [placeholder]="
                                'ADMIN.TENANTS_EMAIL_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'ADMIN.TENANTS_EMAIL_ERROR' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="tenant-early-checkin">{{
                        'ADMIN.TENANTS_EARLY_CHECKIN' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            id="tenant-early-checkin"
                            [formField]="form.early_checkin"
                            placeholder="Select time"
                        >
                            <mat-option [value]="15 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES'
                                        | translate: { minute: 15 }
                                }}
                            </mat-option>
                            <mat-option [value]="30 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES'
                                        | translate: { minute: 30 }
                                }}
                            </mat-option>
                            <mat-option [value]="45 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES'
                                        | translate: { minute: 45 }
                                }}
                            </mat-option>
                            <mat-option [value]="60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 1 }
                                }}
                            </mat-option>
                            <mat-option [value]="1.5 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES_HOURS'
                                        | translate: { minute: 30, hour: 1 }
                                }}
                            </mat-option>
                            <mat-option [value]="2 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 2 }
                                }}
                            </mat-option>
                            <mat-option [value]="2.5 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES_HOURS'
                                        | translate: { minute: 30, hour: 2 }
                                }}
                            </mat-option>
                            <mat-option [value]="3 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 3 }
                                }}
                            </mat-option>
                            <mat-option [value]="3.5 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_MINUTES_HOURS'
                                        | translate: { minute: 30, hour: 3 }
                                }}
                            </mat-option>
                            <mat-option [value]="4 * 60 * 60">
                                {{
                                    'ADMIN.TENANTS_HOURS'
                                        | translate: { hour: 4 }
                                }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                @if (
                    formModel().platform !== 'google' && !formModel().delegated
                ) {
                    <div
                        class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="tenant-service-account">
                                {{
                                    'ADMIN.TENANTS_SERVICE_ACCOUNT' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    id="tenant-service-account"
                                    matInput
                                    [formField]="form.service_account"
                                    [placeholder]="
                                        'ADMIN.TENANTS_SERVICE_ACCOUNT'
                                            | translate
                                    "
                                />
                                <mat-error>
                                    {{
                                        'ADMIN.TENANTS_SERVICE_ACCOUNT_ERROR'
                                            | translate
                                    }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </div>
                }
                <div class="mb-6 flex items-center">
                    <settings-toggle
                        [label]="'ADMIN.TENANTS_DELEGATED' | translate"
                        class="w-1/2"
                        [formField]="form.delegated"
                    />
                </div>
                @for (item of credential_fields(); track item.key) {
                    <div class="flex flex-col" [class.hidden]="item.disabled">
                        <label
                            class="capitalize"
                            [for]="'credential-' + item.key"
                        >
                            {{ name_map[item.key] || item.key }}
                            @if (item.required) {
                                <span>*</span>
                            }
                        </label>
                        <mat-form-field appearance="outline">
                            @switch (item.key) {
                                @default {
                                    <input
                                        [id]="'credential-' + item.key"
                                        matInput
                                        [ngModel]="
                                            formModel().credentials[item.key] ||
                                            ''
                                        "
                                        (ngModelChange)="
                                            updateCredential(item.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="
                                            name_map[item.key] || item.key
                                        "
                                    />
                                }
                                @case ('signing_key') {
                                    <textarea
                                        [id]="'credential-' + item.key"
                                        matInput
                                        [ngModel]="
                                            formModel().credentials[item.key] ||
                                            ''
                                        "
                                        (ngModelChange)="
                                            updateCredential(item.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="
                                            name_map[item.key] || item.key
                                        "
                                    ></textarea>
                                }
                            }
                            <mat-error>
                                {{
                                    'ADMIN.TENANT_ITEM_REQUIRED'
                                        | translate: { name: item.key }
                                }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (formModel().platform === 'office365') {
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            [label]="'ADMIN.TENANTS_CONFIG_OUTLOOK' | translate"
                            class="w-1/2"
                            [(ngModel)]="show_outlook"
                            [ngModelOptions]="{ standalone: true }"
                        />
                    </div>
                }
                @if (show_outlook() && formModel().platform === 'office365') {
                    <div
                        class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                    >
                        @for (item of outlook_fields; track item) {
                            <div class="flex flex-1 flex-col">
                                <label [for]="'outlook-' + item">
                                    {{ outlookName(item) | translate }}
                                    @if (item === 'app_id') {
                                        <span>*</span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        [id]="'outlook-' + item"
                                        matInput
                                        [ngModel]="
                                            formModel().outlook_config[item] ||
                                            ''
                                        "
                                        (ngModelChange)="
                                            updateOutlookConfig(item, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="
                                            outlookName(item) | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                }
                <div class="flex flex-col space-y-2">
                    <span class="label">{{
                        'ADMIN.TENANTS_BOOKING_LIMITS' | translate
                    }}</span>
                    <object-list-field
                        [ngModel]="formModel().booking_limits"
                        (ngModelChange)="updateBookingLimits($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [fields]="['type', 'amount']"
                    />
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      ObjectListFieldComponent,
      FormField,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      SettingsToggleComponent,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;8a8075fae583a18e45f09e4bb44347a7183adb7a510ba559b95edba15222aaa8;/home/runner/work/backoffice/backoffice/src/app/admin/staff-tenant-modal.component.ts */\nmain {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=staff-tenant-modal.component.css.map */\n"] }]
  }], null, { event: [{ type: Output, args: ["event"] }], show_outlook: [{ type: Input, args: [{ isSignal: true, alias: "show_outlook", required: false }] }, { type: Output, args: ["show_outlookChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTenantModalComponent, { className: "StaffTenantModalComponent", filePath: "src/app/admin/staff-tenant-modal.component.ts", lineNumber: 400 });
})();

// src/app/admin/staff-api.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c13 = (a0) => ({ key: "platform", name: a0 });
var _c22 = (a0, a1) => ({ key: "secret_expiry", name: a0, content: a1, size: "10rem" });
var _c32 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "8.75rem" });
var _c42 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack02 = ($index, $item) => $item.id;
function PlaceStaffAPIComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r1.name, " ");
  }
}
function PlaceStaffAPIComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    const row_r3 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !data_r2)("text-neutral", !data_r2)("bg-success", data_r2 && !ctx_r3.expiring(row_r3))("text-success-content", data_r2 && !ctx_r3.expiring(row_r3))("bg-warning", data_r2 && ctx_r3.expiring(row_r3) && !ctx_r3.expired(row_r3))("text-warning-content", data_r2 && ctx_r3.expiring(row_r3) && !ctx_r3.expired(row_r3))("bg-error", data_r2 && ctx_r3.expired(row_r3))("text-error-content", data_r2 && ctx_r3.expired(row_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", !data_r2 ? "Never" : \u0275\u0275pipeBind2(3, 17, data_r2 * 1e3, "mediumDate") + " \u2013 " + \u0275\u0275pipeBind2(4, 20, data_r2 * 1e3, "shortTime"), " ");
  }
}
function PlaceStaffAPIComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_23_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLimits(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "app_registration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_23_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editTenant(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_23_Template_button_click_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeTenant(row_r6));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "ADMIN.TENANTS_EDIT_BOOKING_LIMITS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "ADMIN.TENANTS_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "ADMIN.TENANTS_REMOVE"));
  }
}
var PlaceStaffAPIComponent = class _PlaceStaffAPIComponent {
  _dialog = inject(MatDialog);
  _admin_data = inject(AdminDataService);
  /** Loading state */
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of available domains */
  domain_list = this._admin_data.domain_list;
  /** Currently active domain */
  domain = this._admin_data.selectedDomain("staff-api");
  tenants = signal(
    [],
    ...ngDevMode ? [{ debugName: "tenants" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expiring(tenant) {
    const expiry = tenant.secret_expiry;
    const after_time = getUnixTime(startOfDay(addDays(Date.now(), -30)));
    return expiry && expiry >= after_time;
  }
  expired(tenant) {
    const expiry = tenant.secret_expiry;
    const after_time = getUnixTime(Date.now());
    return expiry && expiry >= after_time;
  }
  async ngOnInit() {
    this.loading.set("Loading domains...");
    const domain = await this._admin_data.selectDefaultDomain("staff-api");
    if (!domain) {
      this.loading.set("");
      return;
    }
    await this.loadTenants();
    this.loading.set("");
  }
  async setDomain(domain) {
    this._admin_data.setDomain("staff-api", domain);
    await this.loadTenants();
  }
  editTenant(tenant) {
    const ref = this._dialog.open(StaffTenantModalComponent, {
      data: { tenant, domain: this.domain() }
    });
    ref.afterClosed().subscribe((__) => this.loadTenants());
  }
  editLimits(tenant) {
    const ref = this._dialog.open(BookingLimitsModalComponent, {
      data: { tenant, domain: this.domain() }
    });
    ref.afterClosed().subscribe((__) => this.loadTenants());
  }
  async removeTenant(tenant) {
    const details = await openConfirmModal({
      title: "Remove tenant?",
      content: `Remove <strong>${tenant.name}</strong> from this domain?<br>
                <p style="text-align: left; width: 100%;">This will remove all related:</p><br>
                <ul style="list-style: disc;text-align: left;padding-left: 2rem">
                <li>bookings (such as desk bookings)</li>
                <li>event metadata (such as catering)</li>
                <li>guest information</li>
                <li>survey data</li>
                </ul>`,
      icon: { type: "icon", content: "delete" },
      confirm_text: "Delete"
    }, this._dialog);
    if (!details || !details.reason)
      return;
    details.loading("Removing tenant from domain...");
    const system = await X(`/api/staff/v1/tenants/${tenant.id}`).catch((err) => {
      notifyError(`Error removing module ${tenant.id} from domain. Error: ${err.statusText || err.message || err}`);
      return true;
    });
    details.close();
    if (system)
      return;
    notifySuccess(`Successfully removed tenant from domain.`);
    await this.loadTenants();
  }
  async loadTenants() {
    if (!this.domain()) {
      this.tenants.set([]);
      return;
    }
    this.loading.set("Loading tenants for domain...");
    const tenants = await d("/api/staff/v1/tenants").catch(() => []);
    this.tenants.set((tenants || []).filter((t) => t.domain === this.domain()?.domain));
    this.loading.set("");
  }
  static \u0275fac = function PlaceStaffAPIComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceStaffAPIComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceStaffAPIComponent, selectors: [["staff-api"]], decls: 25, vars: 38, consts: [["expires_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", 1, "h-12", "w-32", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "px-2"], [1, "rounded-2xl", "px-3", "py-1", "text-xs"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function PlaceStaffAPIComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-select", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("ngModelChange", function PlaceStaffAPIComponent_Template_mat_select_ngModelChange_7_listener($event) {
        return ctx.setDomain($event);
      });
      \u0275\u0275repeaterCreate(9, PlaceStaffAPIComponent_For_10_Template, 2, 2, "mat-option", 8, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function PlaceStaffAPIComponent_Template_button_click_11_listener() {
        return ctx.editTenant();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 10);
      \u0275\u0275element(15, "mat-progress-bar", 11)(16, "simple-table", 12);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, PlaceStaffAPIComponent_ng_template_21_Template, 5, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, PlaceStaffAPIComponent_ng_template_23_Template, 13, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const expires_template_r7 = \u0275\u0275reference(22);
      const actions_template_r8 = \u0275\u0275reference(24);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "ADMIN.TENANTS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.domain())("placeholder", \u0275\u0275pipeBind1(8, 12, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "ADMIN.TENANTS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.tenants())("columns", \u0275\u0275pureFunction4(33, _c42, \u0275\u0275pureFunction1(24, _c03, \u0275\u0275pipeBind1(17, 16, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction1(26, _c13, \u0275\u0275pipeBind1(18, 18, "ADMIN.TENANTS_PLATFORM")), \u0275\u0275pureFunction2(28, _c22, \u0275\u0275pipeBind1(19, 20, "ADMIN.TENANTS_SECRET_EXPIRY"), expires_template_r7), \u0275\u0275pureFunction1(31, _c32, actions_template_r8)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(20, 22, "ADMIN.TENANTS_EMPTY"));
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
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    DatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=staff-api.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceStaffAPIComponent, [{
    type: Component,
    args: [{ selector: "staff-api", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.TENANTS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [ngModel]="domain()"
                            (ngModelChange)="setDomain($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list(); track domain.id) {
                                <mat-option [value]="domain">
                                    {{ domain.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="h-12 w-32"
                        (click)="editTenant()"
                    >
                        {{ 'ADMIN.TENANTS_ADD' | translate }}
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
                    class="block min-w-3xl text-sm"
                    [data]="tenants()"
                    [columns]="[
                        { key: 'name', name: 'COMMON.FIELD_NAME' | translate },
                        {
                            key: 'platform',
                            name: 'ADMIN.TENANTS_PLATFORM' | translate,
                        },
                        {
                            key: 'secret_expiry',
                            name: 'ADMIN.TENANTS_SECRET_EXPIRY' | translate,
                            content: expires_template,
                            size: '10rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            sortable: false,
                            size: '8.75rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.TENANTS_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #expires_template let-data="data" let-row="row">
            <div class="px-2">
                <div
                    class="rounded-2xl px-3 py-1 text-xs"
                    [class.bg-base-200]="!data"
                    [class.text-neutral]="!data"
                    [class.bg-success]="data && !expiring(row)"
                    [class.text-success-content]="data && !expiring(row)"
                    [class.bg-warning]="data && expiring(row) && !expired(row)"
                    [class.text-warning-content]="
                        data && expiring(row) && !expired(row)
                    "
                    [class.bg-error]="data && expired(row)"
                    [class.text-error-content]="data && expired(row)"
                >
                    {{
                        !data
                            ? 'Never'
                            : (data * 1000 | date: 'mediumDate') +
                              ' &ndash; ' +
                              (data * 1000 | date: 'shortTime')
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="
                        'ADMIN.TENANTS_EDIT_BOOKING_LIMITS' | translate
                    "
                    (click)="editLimits(row)"
                >
                    <icon>app_registration</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.TENANTS_EDIT' | translate"
                    (click)="editTenant(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.TENANTS_REMOVE' | translate"
                    (click)="removeTenant(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      IconComponent,
      MatRippleModule,
      TranslatePipe,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      DatePipe
    ], styles: ["/* angular:styles/component:css;f26b881f8eefd87319c7388ff7bb3cecb37d07a0db8d3a808d3cfede99235935;/home/runner/work/backoffice/backoffice/src/app/admin/staff-api.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=staff-api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceStaffAPIComponent, { className: "PlaceStaffAPIComponent", filePath: "src/app/admin/staff-api.component.ts", lineNumber: 188 });
})();
export {
  PlaceStaffAPIComponent
};
//# sourceMappingURL=chunk-UQL22YN5.js.map
