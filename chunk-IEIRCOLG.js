import {
  getUnixTime
} from "./chunk-MXECN6VN.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-DQSPRRFK.js";
import {
  ObjectListFieldComponent
} from "./chunk-JYTSX2HJ.js";
import {
  openConfirmModal
} from "./chunk-QU4UI3CX.js";
import {
  SimpleTableComponent
} from "./chunk-54EBFT32.js";
import {
  FullscreenModalShellComponent
} from "./chunk-TY7WPPBB.js";
import "./chunk-XUNDLFMD.js";
import {
  SettingsToggleComponent
} from "./chunk-RFIJAS3V.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-NGLYGBSE.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-C5EPULW7.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-JVJWK7OL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-U4CQSA3Q.js";
import "./chunk-OCEHEAUM.js";
import {
  addDays
} from "./chunk-LYW23EPM.js";
import {
  startOfDay
} from "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-IWX2OQVL.js";
import "./chunk-QVTLGZEG.js";
import "./chunk-5X4EUYHA.js";
import "./chunk-3TSVSCMW.js";
import {
  IconComponent
} from "./chunk-GX3YM4OA.js";
import "./chunk-HWY7SC7O.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZMPXDLFL.js";
import "./chunk-JNHGG7IP.js";
import {
  MatOption,
  MatRippleModule
} from "./chunk-GIPOOO6B.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-KSJPNMKV.js";
import "./chunk-Z76VKXD6.js";
import {
  MatRipple
} from "./chunk-ZGUCA4AJ.js";
import {
  AsyncPipe,
  Be,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  Ie,
  KeyValuePipe,
  Ki,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  Output,
  ReactiveFormsModule,
  Validators,
  We,
  catchError,
  ee,
  getInvalidFields,
  inject,
  kt,
  lastValueFrom,
  map,
  output,
  ru,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
} from "./chunk-3J5ZMTAK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/admin/booking-limits-modal.component.ts
var _c0 = () => ["type", "amount"];
var BookingLimitsModalComponent = class _BookingLimitsModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  tenant = this._data.tenant;
  domain = this._data.domain;
  form = new FormGroup({
    booking_limits: new FormControl([])
  });
  loading = false;
  constructor() {
    const limits = this.tenant?.booking_limits || {};
    this.form.patchValue({
      booking_limits: Object.keys(limits).map((k) => ({
        type: k,
        amount: `${limits[k]}`
      }))
    });
  }
  async save() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    this._dialog_ref.disableClose = true;
    this.loading = true;
    const limits = this.form.value.booking_limits || [];
    const booking_limits = {};
    for (const { type, amount } of limits) {
      booking_limits[type] = +amount || 0;
    }
    const call = Ie(`/api/staff/v1/tenants/${this.tenant.id}/limits`, booking_limits);
    const resp = await call.toPromise().catch((_) => null);
    this.loading = false;
    this._dialog_ref.disableClose = false;
    if (!resp)
      return notifyError("Error adding new tenant.");
    notifySuccess("Successfully added new tenant.");
    this._dialog_ref.close(__spreadProps(__spreadValues({}, this.tenant), { booking_limits: resp }));
  }
  static \u0275fac = function BookingLimitsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookingLimitsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLimitsModalComponent, selectors: [["booking-limits-modal"]], decls: 3, vars: 4, consts: [["heading", "Edit Tenant Booking Limits\n        ", 3, "save", "loading"], [1, "flex", "flex-col", 3, "formGroup"], ["formControlName", "booking_limits", 3, "fields"]], template: function BookingLimitsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function BookingLimitsModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "object-list-field", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("loading", ctx.loading ? "Saving booking limits for Staff API tenant..." : "");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275property("fields", \u0275\u0275pureFunction0(3, _c0));
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    ObjectListFieldComponent,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName
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
                loading ? 'Saving booking limits for Staff API tenant...' : ''
            "
            (save)="save()"
        >
            <div [formGroup]="form" class="flex flex-col">
                <object-list-field
                    formControlName="booking_limits"
                    [fields]="['type', 'amount']"
                ></object-list-field>
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      ObjectListFieldComponent,
      ReactiveFormsModule
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
var _c10 = () => ["type", "amount"];
var _c11 = (a0) => ({ name: a0 });
var _c12 = () => ({ standalone: true });
function StaffTenantModalComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 4);
    \u0275\u0275element(6, "input", 19);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "ADMIN.TENANTS_SERVICE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 5, "ADMIN.TENANTS_SERVICE_ACCOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "ADMIN.TENANTS_SERVICE_ACCOUNT_ERROR"), " ");
  }
}
function StaffTenantModalComponent_Conditional_78_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function StaffTenantModalComponent_Conditional_78_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 23);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formControlName", item_r1.key)("placeholder", ctx_r1.name_map[item_r1.key] || item_r1.key);
  }
}
function StaffTenantModalComponent_Conditional_78_For_2_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 23);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formControlName", item_r1.key)("placeholder", ctx_r1.name_map[item_r1.key] || item_r1.key);
  }
}
function StaffTenantModalComponent_Conditional_78_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, StaffTenantModalComponent_Conditional_78_For_2_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4);
    \u0275\u0275conditionalCreate(5, StaffTenantModalComponent_Conditional_78_For_2_Case_5_Template, 1, 2, "textarea", 23)(6, StaffTenantModalComponent_Conditional_78_For_2_Case_6_Template, 1, 2, "input", 23);
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hidden", item_r1.value == null ? null : item_r1.value.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.name_map[item_r1.key] || item_r1.key, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.key !== "conference_type" && !ctx_r1.form.value.id ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = item_r1.key) === "signing_key" ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 6, "ADMIN.TENANT_ITEM_REQUIRED", \u0275\u0275pureFunction1(9, _c11, item_r1.key)), " ");
  }
}
function StaffTenantModalComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 15);
    \u0275\u0275repeaterCreate(1, StaffTenantModalComponent_Conditional_78_For_2_Template, 10, 11, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.credentials);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r1.credentials.controls));
  }
}
function StaffTenantModalComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "settings-toggle", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function StaffTenantModalComponent_Conditional_79_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.show_outlook, $event) || (ctx_r1.show_outlook = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("name", \u0275\u0275pipeBind1(2, 3, "ADMIN.TENANTS_CONFIG_OUTLOOK"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.show_outlook);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c12));
  }
}
function StaffTenantModalComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 17)(1, "div", 2)(2, "div", 3)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 4);
    \u0275\u0275element(9, "input", 25);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 3)(15, "label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 4);
    \u0275\u0275element(19, "input", 26);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 2)(25, "div", 3)(26, "label");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 4);
    \u0275\u0275element(30, "input", 27);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementStart(32, "mat-error");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 3)(36, "label");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 4);
    \u0275\u0275element(40, "input", 28);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "mat-error");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 29)(46, "div", 3)(47, "label");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field", 4);
    \u0275\u0275element(51, "input", 30);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementStart(53, "mat-error");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 15, "ADMIN.TENANTS_APP_ID"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 17, "ADMIN.TENANTS_APP_ID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "ADMIN.TENANTS_APP_ID_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 21, "ADMIN.TENANTS_APP_DOMAIN"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 23, "ADMIN.TENANTS_APP_DOMAIN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "ADMIN.TENANTS_APP_DOMAIN_REQUIRED"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 27, "ADMIN.TENANTS_APP_RESOURCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(31, 29, "ADMIN.TENANTS_APP_RESOURCE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 31, "ADMIN.TENANTS_APP_RESOURCE_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 33, "ADMIN.TENANTS_SOURCE_LOCATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(41, 35, "ADMIN.TENANTS_SOURCE_LOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 37, "ADMIN.TENANTS_SOURCE_LOCATION_REQUIRED"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 39, "ADMIN.TENANTS_BASE_PATH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(52, 41, "ADMIN.TENANTS_BASE_PATH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 43, "ADMIN.TENANTS_BASE_PATH_REQUIRED"), " ");
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
var StaffTenantModalComponent = class _StaffTenantModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  _dialog_ref = inject(MatDialogRef);
  event = output();
  tenant = this._data.tenant;
  domain = this._data.domain;
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  show_outlook = false;
  form = new FormGroup({
    id: new FormControl(this.tenant?.id || ""),
    domain: new FormControl(this.domain?.domain || this.tenant?.domain || "localhost"),
    name: new FormControl(this.tenant?.name || "", [Validators.required]),
    email_domain: new FormControl(this.tenant?.email_domain || ""),
    delegated: new FormControl(this.tenant?.delegated ?? false),
    platform: new FormControl(this.tenant?.platform || "google", [
      Validators.required
    ]),
    service_account: new FormControl(this.tenant?.service_account, [
      Validators.email
    ]),
    booking_limits: new FormControl([]),
    early_checkin: new FormControl(this.tenant?.early_checkin || 60 * 60),
    credentials: this.tenant?.platform === "office365" ? this.office_form : this.google_form
  });
  name_map = FIELD_NAME_MAPPING;
  get office_form() {
    return new FormGroup({
      tenant: new FormControl("", [Validators.required]),
      client_id: new FormControl("", [Validators.required]),
      client_secret: new FormControl("", [Validators.required]),
      conference_type: new FormControl("")
    });
  }
  get google_form() {
    return new FormGroup({
      issuer: new FormControl("", [Validators.required]),
      signing_key: new FormControl("", [Validators.required]),
      scopes: new FormControl("", [Validators.required]),
      domain: new FormControl("", [Validators.required]),
      sub: new FormControl("", [Validators.required]),
      user_agent: new FormControl("PlaceOS", [Validators.required]),
      conference_type: new FormControl("")
    });
  }
  get credentials() {
    return this.form?.controls.credentials;
  }
  ngOnInit() {
    const limits = this.tenant?.booking_limits || {};
    const fields = [
      "tenant",
      "client_id",
      "client_secret",
      "issuer",
      "signing_key",
      "scopes",
      "sub",
      "domain",
      "user_agent"
    ];
    const handleDelegation = (delegated) => {
      if (delegated) {
        for (const field of fields) {
          this.form.get("credentials")?.get(field)?.disable();
          this.form.get("credentials")?.get(field)?.setValidators([]);
        }
      } else {
        const id = this.form.value.id;
        for (const field of fields) {
          this.form.get("credentials")?.get(field)?.enable();
          this.form.get("credentials")?.get(field)?.setValidators(id ? [] : [Validators.required]);
        }
      }
      this.form.updateValueAndValidity();
    };
    this.form.controls.platform.valueChanges.subscribe((platform) => {
      const credentials = this.form.value.credentials;
      this.form.removeControl("credentials");
      this.form.addControl("credentials", platform === "office365" ? this.office_form : this.google_form);
      if (platform === "office365") {
        this.form.addControl("outlook_config", new FormGroup({
          app_id: new FormControl(""),
          app_domain: new FormControl(""),
          app_resource: new FormControl(""),
          source_location: new FormControl(""),
          base_path: new FormControl("")
        }));
      } else {
        this.form.removeControl("outlook_config");
      }
      handleDelegation(this.form.value.delegated);
      this.form.patchValue({ credentials });
    });
    handleDelegation(this.form.value.delegated);
    this.form.controls.delegated.valueChanges.subscribe(handleDelegation);
    this.form.patchValue(__spreadProps(__spreadValues({}, this.tenant || {}), {
      domain: this.tenant?.domain || this._data.domain?.domain,
      booking_limits: Object.keys(limits).map((k) => ({
        type: k,
        amount: limits[k]
      }))
    }));
  }
  async save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ")
      }));
    }
    this._dialog_ref.disableClose = true;
    this.loading.set("Saving staff API tenant...");
    const limits = this.form.value.booking_limits || [];
    const booking_limits = limits.reduce((m, { type, amount }) => {
      m[type] = +amount;
      return m;
    }, {});
    const value = this.form.value;
    if (!value.credentials.conference_type)
      delete value.credentials.conference_type;
    if (!this.show_outlook) {
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
    const data = Ki(__spreadProps(__spreadValues(__spreadValues({}, this.tenant || {}), value), {
      booking_limits
    }), ["", null, void 0]);
    const call = this.tenant?.id ? We(`/api/staff/v1/tenants/${this.tenant.id}`, data) : Ie("/api/staff/v1/tenants", data);
    const tenant = await lastValueFrom(call).catch((_) => null);
    this.loading.set("");
    this._dialog_ref.disableClose = false;
    if (!tenant)
      return notifyError(i18n("ADMIN.TENANATS_SAVE_ERROR"));
    notifySuccess(i18n("ADMIN.TENANATS_SAVE_SUCCESS"));
    this._dialog_ref.close();
  }
  static \u0275fac = function StaffTenantModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffTenantModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTenantModalComponent, selectors: [["staff-tenant-modal"]], outputs: { event: "event" }, decls: 86, vars: 101, consts: [[3, "save", "heading", "loading"], [1, "mb-16", 3, "formGroup"], [1, "flex", "flex-wrap", "items-center", "space-x-0", "sm:space-x-2"], [1, "flex", "flex-1", "flex-col"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "platform"], ["value", "google"], ["value", "office365"], ["matInput", "", "formControlName", "email_domain", 3, "placeholder"], [1, "flex", "flex-col", "space-y-2"], ["name", "early_checkin", "formControlName", "early_checkin", "placeholder", "Select time"], [3, "value"], [1, "mb-6", "flex", "items-center"], ["formControlName", "delegated", 1, "w-1/2", 3, "name"], [3, "formGroup"], [1, "mb-4", "flex", "items-center"], ["formGroupName", "outlook_config"], ["formControlName", "booking_limits", 3, "fields"], ["matInput", "", "formControlName", "service_account", 3, "placeholder"], [1, "flex", "flex-col", 3, "hidden"], [1, "flex", "flex-col"], [1, "capitalize"], ["matInput", "", 3, "formControlName", "placeholder"], [1, "w-1/2", 3, "ngModelChange", "name", "ngModel", "ngModelOptions"], ["matInput", "", "formControlName", "app_id", 3, "placeholder"], ["matInput", "", "formControlName", "app_domain", 3, "placeholder"], ["matInput", "", "formControlName", "app_resource", 3, "placeholder"], ["matInput", "", "formControlName", "source_location", 3, "placeholder"], [1, "flex", "flex-wrap", "items-center", "space-x-0", "sm:space-x-4"], ["matInput", "", "formControlName", "base_path", 3, "placeholder"]], template: function StaffTenantModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function StaffTenantModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "div", 3)(5, "label");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-form-field", 4);
      \u0275\u0275element(11, "input", 5);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementStart(13, "mat-error");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 3)(17, "label");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "mat-form-field", 4)(23, "mat-select", 6)(24, "mat-option", 7);
      \u0275\u0275text(25, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 8);
      \u0275\u0275text(27, " Office365 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 3)(29, "label");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-form-field", 4);
      \u0275\u0275element(33, "input", 9);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementStart(35, "mat-error");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "label");
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-form-field", 4)(43, "mat-select", 11)(44, "mat-option", 12);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 12);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "mat-option", 12);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "mat-option", 12);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-option", 12);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 12);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 12);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-option", 12);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 12);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "mat-option", 12);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(74, StaffTenantModalComponent_Conditional_74_Template, 11, 9, "div", 2);
      \u0275\u0275elementStart(75, "div", 13);
      \u0275\u0275element(76, "settings-toggle", 14);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(78, StaffTenantModalComponent_Conditional_78_Template, 4, 3, "form", 15);
      \u0275\u0275conditionalCreate(79, StaffTenantModalComponent_Conditional_79_Template, 3, 6, "div", 16);
      \u0275\u0275conditionalCreate(80, StaffTenantModalComponent_Conditional_80_Template, 56, 45, "form", 17);
      \u0275\u0275elementStart(81, "div", 10)(82, "label");
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "object-list-field", 18);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 38, ctx.tenant ? "ADMIN.TENANTS_EDIT" : "ADMIN.TENANTS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 40, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 42, "ADMIN.TENANTS_FIELD_NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 44, "ADMIN.TENANTS_NAME_ERROR"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 46, "ADMIN.TENANTS_PLATFORM"), " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 48, "ADMIN.TENANTS_EMAIL_DOMAIN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 50, "ADMIN.TENANTS_EMAIL_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 52, "ADMIN.TENANTS_EMAIL_ERROR"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 54, "ADMIN.TENANTS_EARLY_CHECKIN"));
      \u0275\u0275advance(4);
      \u0275\u0275property("value", 15 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 56, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(90, _c02)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 30 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 59, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(91, _c1)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 45 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 62, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(92, _c2)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 65, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(93, _c3)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 1.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 68, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(94, _c4)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 71, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(95, _c5)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 74, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(96, _c6)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 77, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(97, _c7)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(70, 80, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(98, _c8)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 4 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(73, 83, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(99, _c9)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form.value.platform !== "google" && !ctx.form.value.delegated ? 74 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("name", \u0275\u0275pipeBind1(77, 86, "ADMIN.TENANTS_DELEGATED"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.credentials ? 78 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.value.platform === "office365" ? 79 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.show_outlook && ctx.form.get("outlook_config") ? 80 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 88, "ADMIN.TENANTS_BOOKING_LIMITS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("fields", \u0275\u0275pureFunction0(100, _c10));
    }
  }, dependencies: [
    CommonModule,
    FullscreenModalShellComponent,
    ObjectListFieldComponent,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    FormsModule,
    NgModel,
    NgForm,
    SettingsToggleComponent,
    MatSelectModule,
    MatSelect,
    MatOption,
    KeyValuePipe,
    TranslatePipe
  ], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=staff-tenant-modal.component.css.map */"] });
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
            <form [formGroup]="form" class="mb-16">
                <div class="flex flex-wrap items-center space-x-0 sm:space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label>
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="name"
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
                        <label>
                            {{ 'ADMIN.TENANTS_PLATFORM' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="platform">
                                <mat-option value="google">Google</mat-option>
                                <mat-option value="office365">
                                    Office365
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col">
                    <label>
                        {{ 'ADMIN.TENANTS_EMAIL_DOMAIN' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="email_domain"
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
                    <label>{{
                        'ADMIN.TENANTS_EARLY_CHECKIN' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="early_checkin"
                            formControlName="early_checkin"
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
                    form.value.platform !== 'google' && !form.value.delegated
                ) {
                    <div
                        class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label>
                                {{
                                    'ADMIN.TENANTS_SERVICE_ACCOUNT' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    formControlName="service_account"
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
                        [name]="'ADMIN.TENANTS_DELEGATED' | translate"
                        class="w-1/2"
                        formControlName="delegated"
                    >
                    </settings-toggle>
                </div>
                @if (credentials) {
                    <form [formGroup]="credentials">
                        @for (
                            item of credentials.controls | keyvalue;
                            track item
                        ) {
                            <div
                                class="flex flex-col"
                                [class.hidden]="item.value?.disabled"
                            >
                                <label class="capitalize">
                                    {{ name_map[item.key] || item.key }}
                                    @if (
                                        item.key !== 'conference_type' &&
                                        !form.value.id
                                    ) {
                                        <span>*</span>
                                    }
                                </label>
                                <mat-form-field appearance="outline">
                                    @switch (item.key) {
                                        @default {
                                            <input
                                                matInput
                                                [formControlName]="item.key"
                                                [placeholder]="
                                                    name_map[item.key] ||
                                                    item.key
                                                "
                                            />
                                        }
                                        @case ('signing_key') {
                                            <textarea
                                                matInput
                                                [formControlName]="item.key"
                                                [placeholder]="
                                                    name_map[item.key] ||
                                                    item.key
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
                    </form>
                }
                @if (form.value.platform === 'office365') {
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            [name]="'ADMIN.TENANTS_CONFIG_OUTLOOK' | translate"
                            class="w-1/2"
                            [(ngModel)]="show_outlook"
                            [ngModelOptions]="{ standalone: true }"
                        >
                        </settings-toggle>
                    </div>
                }
                @if (show_outlook && form.get('outlook_config')) {
                    <form formGroupName="outlook_config">
                        <div
                            class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                        >
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{ 'ADMIN.TENANTS_APP_ID' | translate }}
                                    <span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="app_id"
                                        [placeholder]="
                                            'ADMIN.TENANTS_APP_ID' | translate
                                        "
                                    />
                                    <mat-error>{{
                                        'ADMIN.TENANTS_APP_ID_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label>{{
                                    'ADMIN.TENANTS_APP_DOMAIN' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="app_domain"
                                        [placeholder]="
                                            'ADMIN.TENANTS_APP_DOMAIN'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_APP_DOMAIN_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center space-x-0 sm:space-x-2"
                        >
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{
                                        'ADMIN.TENANTS_APP_RESOURCE' | translate
                                    }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="app_resource"
                                        [placeholder]="
                                            'ADMIN.TENANTS_APP_RESOURCE'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_APP_RESOURCE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{
                                        'ADMIN.TENANTS_SOURCE_LOCATION'
                                            | translate
                                    }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="source_location"
                                        [placeholder]="
                                            'ADMIN.TENANTS_SOURCE_LOCATION'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_SOURCE_LOCATION_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        </div>
                        <div
                            class="flex flex-wrap items-center space-x-0 sm:space-x-4"
                        >
                            <div class="flex flex-1 flex-col">
                                <label>
                                    {{ 'ADMIN.TENANTS_BASE_PATH' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        formControlName="base_path"
                                        [placeholder]="
                                            'ADMIN.TENANTS_BASE_PATH'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'ADMIN.TENANTS_BASE_PATH_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            </div>
                        </div>
                    </form>
                }
                <div class="flex flex-col space-y-2">
                    <label>{{
                        'ADMIN.TENANTS_BOOKING_LIMITS' | translate
                    }}</label>
                    <object-list-field
                        formControlName="booking_limits"
                        [fields]="['type', 'amount']"
                    ></object-list-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      FullscreenModalShellComponent,
      ObjectListFieldComponent,
      ReactiveFormsModule,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      SettingsToggleComponent,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;8a8075fae583a18e45f09e4bb44347a7183adb7a510ba559b95edba15222aaa8;/home/runner/work/backoffice/backoffice/src/app/admin/staff-tenant-modal.component.ts */\nmain {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=staff-tenant-modal.component.css.map */\n"] }]
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTenantModalComponent, { className: "StaffTenantModalComponent", filePath: "src/app/admin/staff-tenant-modal.component.ts", lineNumber: 439 });
})();

// src/app/admin/staff-api.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c13 = (a0) => ({ key: "platform", name: a0 });
var _c22 = (a0, a1) => ({ key: "secret_expiry", name: a0, content: a1, size: "10rem" });
var _c32 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "8.75rem" });
var _c42 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _forTrack0 = ($index, $item) => $item.id;
function PlaceStaffAPIComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r2 = ctx.$implicit;
    \u0275\u0275property("value", domain_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r2.name, " ");
  }
}
function PlaceStaffAPIComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const row_r4 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !data_r3)("text-neutral", !data_r3)("bg-success", data_r3 && !ctx_r4.expiring(row_r4))("text-success-content", data_r3 && !ctx_r4.expiring(row_r4))("bg-warning", data_r3 && ctx_r4.expiring(row_r4) && !ctx_r4.expired(row_r4))("text-warning-content", data_r3 && ctx_r4.expiring(row_r4) && !ctx_r4.expired(row_r4))("bg-error", data_r3 && ctx_r4.expired(row_r4))("text-error-content", data_r3 && ctx_r4.expired(row_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", !data_r3 ? "Never" : \u0275\u0275pipeBind2(3, 17, data_r3 * 1e3, "mediumDate") + " \u2013 " + \u0275\u0275pipeBind2(4, 20, data_r3 * 1e3, "shortTime"), " ");
  }
}
function PlaceStaffAPIComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_24_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editLimits(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "app_registration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_24_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editTenant(row_r7));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_24_Template_button_click_9_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeTenant(row_r7));
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
  /** Loading state */
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** List of available domains */
  domain_list;
  /** Currently active domain */
  domain = new BehaviorSubject(null);
  tenants = this.domain.pipe(switchMap(() => {
    this.loading.set("Loading tenants for domain...");
    return ee("/api/staff/v1/tenants");
  }), catchError((_) => []), map((tenants) => {
    this.loading.set("");
    return tenants.filter((t) => t.domain === this.domain.getValue()?.domain);
  }), shareReplay());
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
    this.domain_list = await ru().pipe(map((r) => r.data)).toPromise();
    const domain = kt();
    if (!this.domain_list?.length)
      return;
    const match = this.domain_list.find((d) => d.id === domain.id);
    if (match)
      this.domain.next(match);
    this.loading.set("");
  }
  editTenant(tenant) {
    const ref = this._dialog.open(StaffTenantModalComponent, {
      data: { tenant, domain: this.domain.getValue() }
    });
    ref.afterClosed().subscribe((_) => this.domain.next(this.domain.getValue()));
  }
  editLimits(tenant) {
    const ref = this._dialog.open(BookingLimitsModalComponent, {
      data: { tenant, domain: this.domain.getValue() }
    });
    ref.afterClosed().subscribe((_) => this.domain.next(this.domain.getValue()));
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
    const system = await Be(`/api/staff/v1/tenants/${tenant.id}`).toPromise().catch((err) => {
      notifyError(`Error removing module ${tenant.id} from domain. Error: ${err.statusText || err.message || err}`);
      return true;
    });
    details.close();
    if (system)
      return;
    notifySuccess(`Successfully removed tenant from domain.`);
    this.domain.next(this.domain.getValue());
  }
  static \u0275fac = function PlaceStaffAPIComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceStaffAPIComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceStaffAPIComponent, selectors: [["staff-api"]], decls: 26, vars: 40, consts: [["expires_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["btn", "", "matRipple", "", 1, "h-12", "w-32", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "px-2"], [1, "rounded-2xl", "px-3", "py-1", "text-xs"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function PlaceStaffAPIComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-select", 7);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275listener("ngModelChange", function PlaceStaffAPIComponent_Template_mat_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.domain.next($event));
      });
      \u0275\u0275repeaterCreate(10, PlaceStaffAPIComponent_For_11_Template, 2, 2, "mat-option", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function PlaceStaffAPIComponent_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.editTenant());
      });
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275element(16, "mat-progress-bar", 11)(17, "simple-table", 12);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, PlaceStaffAPIComponent_ng_template_22_Template, 5, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, PlaceStaffAPIComponent_ng_template_24_Template, 13, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const expires_template_r8 = \u0275\u0275reference(23);
      const actions_template_r9 = \u0275\u0275reference(25);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "ADMIN.TENANTS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(8, 12, ctx.domain))("placeholder", \u0275\u0275pipeBind1(9, 14, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.domain_list);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "ADMIN.TENANTS_ADD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.tenants)("columns", \u0275\u0275pureFunction4(35, _c42, \u0275\u0275pureFunction1(26, _c03, \u0275\u0275pipeBind1(18, 18, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction1(28, _c13, \u0275\u0275pipeBind1(19, 20, "ADMIN.TENANTS_PLATFORM")), \u0275\u0275pureFunction2(30, _c22, \u0275\u0275pipeBind1(20, 22, "ADMIN.TENANTS_SECRET_EXPIRY"), expires_template_r8), \u0275\u0275pureFunction1(33, _c32, actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(21, 24, "ADMIN.TENANTS_EMPTY"));
    }
  }, dependencies: [
    CommonModule,
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
    AsyncPipe,
    DatePipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=staff-api.component.css.map */"] });
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
                            [ngModel]="domain | async"
                            (ngModelChange)="domain.next($event)"
                            [placeholder]="'ADMIN.SELECT_DOMAIN' | translate"
                        >
                            @for (domain of domain_list; track domain.id) {
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
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-3xl text-sm"
                    [data]="tenants"
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
                ></simple-table>
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
                    matRipple
                    [matTooltip]="'ADMIN.TENANTS_EDIT' | translate"
                    (click)="editTenant(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.TENANTS_REMOVE' | translate"
                    (click)="removeTenant(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      TranslatePipe,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;f26b881f8eefd87319c7388ff7bb3cecb37d07a0db8d3a808d3cfede99235935;/home/runner/work/backoffice/backoffice/src/app/admin/staff-api.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=staff-api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceStaffAPIComponent, { className: "PlaceStaffAPIComponent", filePath: "src/app/admin/staff-api.component.ts", lineNumber: 192 });
})();
export {
  PlaceStaffAPIComponent
};
//# sourceMappingURL=chunk-IEIRCOLG.js.map
