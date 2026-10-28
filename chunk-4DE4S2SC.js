import {
  AdminDataService
} from "./chunk-RTERJ7FX.js";
import {
  ObjectListFieldComponent
} from "./chunk-64EI3DAW.js";
import {
  reportLoadError
} from "./chunk-5BFKPLWS.js";
import {
  SimpleTableComponent
} from "./chunk-MLUIXMIO.js";
import {
  MAX_TENANT_LIMIT,
  formatMinutes,
  isSecretExpired,
  isSecretExpiring,
  joinDuration,
  splitMinutes
} from "./chunk-4T5YXDIO.js";
import "./chunk-GV5KQIK5.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-NRO2XDNU.js";
import "./chunk-TPDHL3PI.js";
import {
  getInvalidSignalFields
} from "./chunk-NTASD32E.js";
import {
  FullscreenModalShellComponent
} from "./chunk-CZHGOQVA.js";
import "./chunk-R3V5YJKZ.js";
import {
  openConfirmModal
} from "./chunk-R464B6VT.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  SettingsToggleComponent
} from "./chunk-HPS63TJZ.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-JIKSLL3H.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-QUK2HLQJ.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatSuffix,
  email,
  form,
  required,
  submit,
  validate
} from "./chunk-W2EPZJRF.js";
import "./chunk-SBWE5ILJ.js";
import "./chunk-DQFIZL2Z.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-HAWZID7H.js";
import {
  LoadingLabelDirective
} from "./chunk-S6TBIU6L.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2VSGNNLN.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-OLETOVUH.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-4K4B4UVA.js";
import {
  MatOption
} from "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import {
  MatRippleModule
} from "./chunk-TUNU3FRP.js";
import {
  MatRipple
} from "./chunk-52KP2JDE.js";
import {
  TranslatePipe
} from "./chunk-XTQWFJN3.js";
import {
  i18n
} from "./chunk-V4STGI54.js";
import {
  escapeHtml
} from "./chunk-AOPYKUKV.js";
import {
  V,
  _,
  ce,
  ci,
  k
} from "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-GPNEKEBR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import {
  DatePipe
} from "./chunk-DKYBNEOC.js";
import {
  Component,
  Input,
  Output,
  computed,
  inject,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
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
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
      booking_limits: Object.keys(limits).map((k2) => ({
        type: k2,
        amount: `${limits[k2]}`
      }))
    });
  }
  async save() {
    await submit(this.form, async () => {
      this.loading.set(true);
      const limits = this.formModel().booking_limits || [];
      const booking_limits = {};
      for (const { type, amount } of limits) {
        booking_limits[type] = +amount || 0;
      }
      const call = k(`/api/staff/v1/tenants/${this.tenant.id}/limits`, booking_limits);
      const resp = await call.catch(() => null);
      this.loading.set(false);
      if (!resp)
        return notifyError("Error saving booking limits.");
      notifySuccess("Saved booking limits.");
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
      \u0275\u0275elementStart(1, "div", 1)(2, "object-list-field", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
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
var _c12 = () => ["type", "days"];
var _c13 = (a0) => ({ name: a0 });
var _c14 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.key;
function StaffTenantModalComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 32);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "input", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_79_Case_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateCredential(item_r3.key, $event));
    });
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "textarea", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_79_Case_6_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateCredential(item_r3.key, $event));
    });
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(0, "div", 33)(1, "label", 34);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, StaffTenantModalComponent_For_79_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275conditionalCreate(5, StaffTenantModalComponent_For_79_Case_5_Template, 1, 5, "input", 35)(6, StaffTenantModalComponent_For_79_Case_6_Template, 1, 5, "textarea", 35);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 7, "ADMIN.TENANTS_ITEM_REQUIRED", \u0275\u0275pureFunction1(10, _c13, item_r3.key)), " ");
  }
}
function StaffTenantModalComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "settings-toggle", 37);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function StaffTenantModalComponent_Conditional_80_Template_settings_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.show_outlook, $event) || (ctx_r0.show_outlook = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275conditionalCreate(4, StaffTenantModalComponent_Conditional_81_For_2_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 36);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_Conditional_81_For_2_Template_input_ngModelChange_6_listener($event) {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateOutlookConfig(item_r7, $event));
    });
    \u0275\u0275elementEnd()()();
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
function StaffTenantModalComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.TENANTS_BOOKING_RANGE_ERROR"), " ");
  }
}
function StaffTenantModalComponent_For_104_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r10 = ctx.$implicit;
    \u0275\u0275property("value", hour_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, "ADMIN.TENANTS_DURATION_HOURS", \u0275\u0275pureFunction1(6, _c14, hour_r10), hour_r10), " ");
  }
}
function StaffTenantModalComponent_For_104_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const minute_r11 = ctx.$implicit;
    \u0275\u0275property("value", minute_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 2, "ADMIN.TENANTS_DURATION_MINUTES", \u0275\u0275pureFunction1(6, _c14, minute_r11), minute_r11), " ");
  }
}
function StaffTenantModalComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "mat-form-field", 40)(2, "input", 41);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_104_Template_input_ngModelChange_2_listener($event) {
      const \u0275$index_215_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateBookingPeriod(\u0275$index_215_r9, "type", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 42)(6, "input", 43);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_104_Template_input_ngModelChange_6_listener($event) {
      const \u0275$index_215_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateBookingPeriod(\u0275$index_215_r9, "days", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 42)(12, "mat-select", 45);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_104_Template_mat_select_ngModelChange_12_listener($event) {
      const \u0275$index_215_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateBookingPeriod(\u0275$index_215_r9, "hours", $event));
    });
    \u0275\u0275repeaterCreate(14, StaffTenantModalComponent_For_104_For_15_Template, 3, 8, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 42)(17, "mat-select", 45);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_For_104_Template_mat_select_ngModelChange_17_listener($event) {
      const \u0275$index_215_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateBookingPeriod(\u0275$index_215_r9, "minutes", $event));
    });
    \u0275\u0275repeaterCreate(19, StaffTenantModalComponent_For_104_For_20_Template, 3, 8, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 46);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function StaffTenantModalComponent_For_104_Template_button_click_21_listener() {
      const \u0275$index_215_r9 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeBookingPeriod(\u0275$index_215_r9));
    });
    \u0275\u0275elementStart(23, "icon");
    \u0275\u0275text(24, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "p", 47);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 16, "ADMIN.TENANTS_BOOKING_TYPE"))("ngModel", item_r12.type)("ngModelOptions", \u0275\u0275pureFunction0(30, _c10));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 18, "ADMIN.TENANTS_BOOKING_TYPE"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", item_r12.days)("ngModelOptions", \u0275\u0275pureFunction0(31, _c10));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 20, "ADMIN.TENANTS_DAYS"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 22, "ADMIN.TENANTS_DAYS"));
    \u0275\u0275advance(3);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(13, 24, "ADMIN.TENANTS_HOURS_LABEL"));
    \u0275\u0275property("ngModel", item_r12.hours)("ngModelOptions", \u0275\u0275pureFunction0(32, _c10));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.hour_options);
    \u0275\u0275advance(3);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(18, 26, "ADMIN.TENANTS_MINUTES_LABEL"));
    \u0275\u0275property("ngModel", item_r12.minutes)("ngModelOptions", \u0275\u0275pureFunction0(33, _c10));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.minuteOptions(item_r12.minutes));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 28, "COMMON.DELETE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatPeriod(item_r12), " ");
  }
}
function StaffTenantModalComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.TENANTS_BOOKING_PERIOD_ERROR"), " ");
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
var HOUR_OPTIONS = Array.from({ length: 24 }, (_2, hour) => hour);
var MINUTE_OPTIONS = Array.from({ length: 12 }, (_2, step) => step * 5);
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
  // The backend stores a cleared config as `{ app_id: '' }`, so check app_id
  show_outlook = model(
    !!(this.tenant || {}).outlook_config?.app_id,
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
    validate(path.booking_range, ({ value }) => {
      const ranges = value();
      const types = ranges.map(({ type }) => type?.trim());
      return ranges.some(({ days }, index) => !types[index] || days == null || `${days}`.trim() === "" || !Number.isInteger(+days) || +days < 0 || +days > MAX_TENANT_LIMIT) || new Set(types).size !== types.length ? { kind: "booking_range" } : void 0;
    });
    validate(path.booking_period, ({ value }) => {
      const periods = value();
      const types = periods.map(({ type }) => type?.trim());
      return periods.some(({ days }, index) => {
        const total = joinDuration(__spreadProps(__spreadValues({}, periods[index]), { days: +days }));
        return !types[index] || `${days ?? ""}`.trim() === "" || !Number.isInteger(+days) || +days < 0 || total <= 0 || total > MAX_TENANT_LIMIT;
      }) || new Set(types).size !== types.length ? { kind: "booking_period" } : void 0;
    });
  });
  hour_options = HOUR_OPTIONS;
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
  updateBookingRange(booking_range) {
    this.formModel.update((model2) => __spreadProps(__spreadValues({}, model2), {
      booking_range: [...booking_range]
    }));
  }
  /** Minute choices, keeping a stored value that isn't a multiple of 5 */
  minuteOptions(current) {
    return MINUTE_OPTIONS.includes(current) ? MINUTE_OPTIONS : [...MINUTE_OPTIONS, current].sort((a, b) => a - b);
  }
  formatPeriod(period) {
    return formatMinutes(joinDuration(__spreadProps(__spreadValues({}, period), { days: +period.days })));
  }
  addBookingPeriod() {
    this.updateBookingPeriods((periods) => [
      ...periods,
      { type: "", days: 0, hours: 1, minutes: 0 }
    ]);
  }
  removeBookingPeriod(index) {
    this.updateBookingPeriods((periods) => periods.filter((_2, item_index) => item_index !== index));
  }
  updateBookingPeriod(index, field, value) {
    this.updateBookingPeriods((periods) => periods.map((item, item_index) => item_index === index ? __spreadProps(__spreadValues({}, item), { [field]: value }) : item));
  }
  updateBookingPeriods(change) {
    this.formModel.update((model2) => __spreadProps(__spreadValues({}, model2), {
      booking_period: change(model2.booking_period)
    }));
  }
  async save() {
    await submit(this.form, async () => void 0);
    const invalid_credentials = this.credential_fields().filter((field) => field.required).filter((field) => !this.formModel().credentials[field.key]).map((field) => FIELD_NAME_MAPPING[field.key] || field.key);
    if (this.form().invalid() || invalid_credentials.length) {
      return notifyError(i18n("COMMON.INVALID_FIELDS", {
        field_list: [
          ...getInvalidSignalFields(this.form),
          ...invalid_credentials
        ].join(", ")
      }));
    }
    this.loading.set("Saving staff API tenant...");
    const model2 = this.formModel();
    const limits = model2.booking_limits || [];
    const booking_limits = limits.reduce((m, { type, amount }) => {
      m[type] = +amount;
      return m;
    }, {});
    const value = __spreadProps(__spreadValues({}, model2), {
      credentials: this.activeCredentials(model2),
      booking_limits,
      booking_range: Object.fromEntries(model2.booking_range.map(({ type, days }) => [
        type.trim(),
        +days
      ])),
      booking_period: Object.fromEntries(model2.booking_period.map((period) => [
        period.type.trim(),
        joinDuration(__spreadProps(__spreadValues({}, period), { days: +period.days }))
      ]))
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
    const data = ci(__spreadValues(__spreadValues({}, this.tenant || {}), value), ["", null, void 0]);
    if (!this.show_outlook())
      data.outlook_config = {};
    const call = this.tenant?.id ? ce(`/api/staff/v1/tenants/${this.tenant.id}`, data) : k("/api/staff/v1/tenants", data);
    const tenant = await call.catch((__) => null);
    this.loading.set("");
    if (!tenant)
      return notifyError(i18n("ADMIN.TENANTS_SAVE_ERROR"));
    notifySuccess(i18n("ADMIN.TENANTS_SAVE_SUCCESS"));
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
      booking_limits: Object.keys(limits).map((k2) => ({
        type: k2,
        amount: limits[k2]
      })),
      booking_range: Object.entries(this.tenant?.booking_range || {}).map(([type, days]) => ({ type, days })),
      booking_period: Object.entries(this.tenant?.booking_period || {}).map(([type, minutes]) => __spreadValues({ type }, splitMinutes(minutes))),
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTenantModalComponent, selectors: [["staff-tenant-modal"]], inputs: { show_outlook: [1, "show_outlook"] }, outputs: { event: "event", show_outlook: "show_outlookChange" }, decls: 113, vars: 129, consts: [[3, "save", "heading", "loading"], [1, "mb-16"], [1, "flex", "flex-wrap", "items-center", "space-x-0", "sm:space-x-2"], [1, "flex", "flex-1", "flex-col"], ["for", "tenant-name"], ["appearance", "outline"], ["id", "tenant-name", "matInput", "", 3, "formField", "placeholder"], ["for", "tenant-platform"], ["id", "tenant-platform", 3, "formField"], ["value", "google"], ["value", "office365"], ["for", "tenant-email-domain"], ["id", "tenant-email-domain", "matInput", "", 3, "formField", "placeholder"], [1, "flex", "flex-col", "space-y-2"], ["for", "tenant-early-checkin"], ["id", "tenant-early-checkin", "placeholder", "Select time", 3, "formField"], [3, "value"], [1, "mb-6", "flex", "items-center"], [1, "w-1/2", 3, "label", "formField"], [1, "flex", "flex-col", 3, "hidden"], [1, "mb-4", "flex", "items-center"], [1, "label"], [3, "ngModelChange", "ngModel", "ngModelOptions", "fields"], [1, "mt-6", "flex", "flex-col", "space-y-2"], [1, "text-sm", "opacity-60"], [1, "text-error", "text-sm"], ["booking-period", "", 1, "mt-6", "flex", "flex-col", "space-y-2"], ["btn", "", "type", "button", 1, "w-full", 3, "click"], [1, "flex", "items-center"], [1, "text-2xl"], [1, "text"], ["for", "tenant-service-account"], ["id", "tenant-service-account", "matInput", "", 3, "formField", "placeholder"], [1, "flex", "flex-col"], [1, "capitalize", 3, "for"], ["matInput", "", 3, "id", "ngModel", "ngModelOptions", "placeholder"], ["matInput", "", 3, "ngModelChange", "id", "ngModel", "ngModelOptions", "placeholder"], [1, "w-1/2", 3, "ngModelChange", "label", "ngModel", "ngModelOptions"], [3, "for"], ["period-row", "", 1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "min-w-0", "flex-2"], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel", "ngModelOptions"], ["appearance", "outline", 1, "no-subscript", "min-w-0", "flex-1"], ["matInput", "", "type", "number", "min", "0", "step", "1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["matTextSuffix", ""], [3, "ngModelChange", "aria-label", "ngModel", "ngModelOptions"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "shrink-0", "rounded-sm", "border", 3, "click"], ["period-total", "", 1, "-mt-1", "text-xs", "opacity-60"]], template: function StaffTenantModalComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(10, "mat-form-field", 5)(11, "input", 6);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
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
      \u0275\u0275elementStart(22, "mat-form-field", 5)(23, "mat-select", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(24, "mat-option", 9);
      \u0275\u0275text(25, "Google");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 10);
      \u0275\u0275text(27, " Office365 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 3)(29, "label", 11);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-form-field", 5)(33, "input", 12);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-error");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 13)(39, "label", 14);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-form-field", 5)(43, "mat-select", 15);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(44, "mat-option", 16);
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
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(74, StaffTenantModalComponent_Conditional_74_Template, 11, 10, "div", 2);
      \u0275\u0275elementStart(75, "div", 17)(76, "settings-toggle", 18);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(78, StaffTenantModalComponent_For_79_Template, 10, 12, "div", 19, _forTrack0);
      \u0275\u0275conditionalCreate(80, StaffTenantModalComponent_Conditional_80_Template, 3, 6, "div", 20);
      \u0275\u0275conditionalCreate(81, StaffTenantModalComponent_Conditional_81_Template, 3, 0, "div", 2);
      \u0275\u0275elementStart(82, "div", 13)(83, "span", 21);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "object-list-field", 22);
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_Template_object_list_field_ngModelChange_86_listener($event) {
        return ctx.updateBookingLimits($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 23)(88, "span", 21);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p", 24);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "object-list-field", 22);
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function StaffTenantModalComponent_Template_object_list_field_ngModelChange_94_listener($event) {
        return ctx.updateBookingRange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(95, StaffTenantModalComponent_Conditional_95_Template, 3, 3, "p", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 26)(97, "span", 21);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 24);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(103, StaffTenantModalComponent_For_104_Template, 27, 34, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementStart(105, "button", 27);
      \u0275\u0275listener("click", function StaffTenantModalComponent_Template_button_click_105_listener() {
        return ctx.addBookingPeriod();
      });
      \u0275\u0275elementStart(106, "div", 28)(107, "icon", 29);
      \u0275\u0275text(108, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 30);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(112, StaffTenantModalComponent_Conditional_112_Template, 3, 3, "p", 25);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 53, ctx.tenant ? "ADMIN.TENANTS_EDIT" : "ADMIN.TENANTS_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 55, "COMMON.FIELD_NAME"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formField", ctx.form.name)("placeholder", \u0275\u0275pipeBind1(12, 57, "ADMIN.TENANTS_FIELD_NAME"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 59, "ADMIN.TENANTS_NAME_ERROR"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 61, "ADMIN.TENANTS_PLATFORM"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formField", ctx.form.platform);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 63, "ADMIN.TENANTS_EMAIL_DOMAIN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.email_domain)("placeholder", \u0275\u0275pipeBind1(34, 65, "ADMIN.TENANTS_EMAIL_PLACEHOLDER"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 67, "ADMIN.TENANTS_EMAIL_ERROR"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 69, "ADMIN.TENANTS_EARLY_CHECKIN"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.early_checkin);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("value", 15 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 71, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(115, _c02)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 30 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 74, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(116, _c1)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 45 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 77, "ADMIN.TENANTS_MINUTES", \u0275\u0275pureFunction0(117, _c2)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 80, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(118, _c3)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 1.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 83, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(119, _c4)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 86, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(120, _c5)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 89, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(121, _c6)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 92, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(122, _c7)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3.5 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(70, 95, "ADMIN.TENANTS_MINUTES_HOURS", \u0275\u0275pureFunction0(123, _c8)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 4 * 60 * 60);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(73, 98, "ADMIN.TENANTS_HOURS", \u0275\u0275pureFunction0(124, _c9)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.formModel().platform !== "google" && !ctx.formModel().delegated ? 74 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(77, 101, "ADMIN.TENANTS_DELEGATED"))("formField", ctx.form.delegated);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.credential_fields());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.formModel().platform === "office365" ? 80 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.show_outlook() && ctx.formModel().platform === "office365" ? 81 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 103, "ADMIN.TENANTS_BOOKING_LIMITS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.formModel().booking_limits)("ngModelOptions", \u0275\u0275pureFunction0(125, _c10))("fields", \u0275\u0275pureFunction0(126, _c11));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 105, "ADMIN.TENANTS_BOOKING_RANGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(93, 107, "ADMIN.TENANTS_BOOKING_RANGE_HINT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.formModel().booking_range)("ngModelOptions", \u0275\u0275pureFunction0(127, _c10))("fields", \u0275\u0275pureFunction0(128, _c12));
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.booking_range().invalid() ? 95 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 109, "ADMIN.TENANTS_BOOKING_PERIOD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(102, 111, "ADMIN.TENANTS_BOOKING_PERIOD_HINT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.formModel().booking_period);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(111, 113, "COMMON.NEW_ITEM"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.form.booking_period().invalid() ? 112 : -1);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    ObjectListFieldComponent,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
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
                                    'ADMIN.TENANTS_ITEM_REQUIRED'
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
                <div class="mt-6 flex flex-col space-y-2">
                    <span class="label">{{
                        'ADMIN.TENANTS_BOOKING_RANGE' | translate
                    }}</span>
                    <p class="text-sm opacity-60">
                        {{ 'ADMIN.TENANTS_BOOKING_RANGE_HINT' | translate }}
                    </p>
                    <object-list-field
                        [ngModel]="formModel().booking_range"
                        (ngModelChange)="updateBookingRange($event)"
                        [ngModelOptions]="{ standalone: true }"
                        [fields]="['type', 'days']"
                    />
                    @if (form.booking_range().invalid()) {
                        <p class="text-error text-sm">
                            {{
                                'ADMIN.TENANTS_BOOKING_RANGE_ERROR' | translate
                            }}
                        </p>
                    }
                </div>
                <div class="mt-6 flex flex-col space-y-2" booking-period>
                    <span class="label">{{
                        'ADMIN.TENANTS_BOOKING_PERIOD' | translate
                    }}</span>
                    <p class="text-sm opacity-60">
                        {{ 'ADMIN.TENANTS_BOOKING_PERIOD_HINT' | translate }}
                    </p>
                    @for (
                        item of formModel().booking_period;
                        track $index;
                        let index = $index
                    ) {
                        <div class="flex items-center space-x-2" period-row>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-2"
                            >
                                <input
                                    matInput
                                    [attr.aria-label]="
                                        'ADMIN.TENANTS_BOOKING_TYPE' | translate
                                    "
                                    [placeholder]="
                                        'ADMIN.TENANTS_BOOKING_TYPE' | translate
                                    "
                                    [ngModel]="item.type"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'type',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-1"
                            >
                                <input
                                    matInput
                                    type="number"
                                    min="0"
                                    step="1"
                                    [attr.aria-label]="
                                        'ADMIN.TENANTS_DAYS' | translate
                                    "
                                    [ngModel]="item.days"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'days',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                />
                                <span matTextSuffix>{{
                                    'ADMIN.TENANTS_DAYS' | translate
                                }}</span>
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-1"
                            >
                                <mat-select
                                    [aria-label]="
                                        'ADMIN.TENANTS_HOURS_LABEL' | translate
                                    "
                                    [ngModel]="item.hours"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'hours',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    @for (hour of hour_options; track hour) {
                                        <mat-option [value]="hour">
                                            {{
                                                'ADMIN.TENANTS_DURATION_HOURS'
                                                    | translate
                                                        : { count: hour }
                                                        : hour
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript min-w-0 flex-1"
                            >
                                <mat-select
                                    [aria-label]="
                                        'ADMIN.TENANTS_MINUTES_LABEL'
                                            | translate
                                    "
                                    [ngModel]="item.minutes"
                                    (ngModelChange)="
                                        updateBookingPeriod(
                                            index,
                                            'minutes',
                                            $event
                                        )
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    @for (
                                        minute of minuteOptions(item.minutes);
                                        track minute
                                    ) {
                                        <mat-option [value]="minute">
                                            {{
                                                'ADMIN.TENANTS_DURATION_MINUTES'
                                                    | translate
                                                        : { count: minute }
                                                        : minute
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                            <button
                                type="button"
                                icon
                                matRipple
                                class="border-error text-error h-12 w-12 shrink-0 rounded-sm border"
                                [attr.aria-label]="'COMMON.DELETE' | translate"
                                (click)="removeBookingPeriod(index)"
                            >
                                <icon>delete</icon>
                            </button>
                        </div>
                        <p class="-mt-1 text-xs opacity-60" period-total>
                            {{ formatPeriod(item) }}
                        </p>
                    }
                    <button
                        btn
                        type="button"
                        class="w-full"
                        (click)="addBookingPeriod()"
                    >
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'COMMON.NEW_ITEM' | translate }}
                            </div>
                        </div>
                    </button>
                    @if (form.booking_period().invalid()) {
                        <p class="text-error text-sm">
                            {{
                                'ADMIN.TENANTS_BOOKING_PERIOD_ERROR' | translate
                            }}
                        </p>
                    }
                </div>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      IconComponent,
      MatRippleModule,
      ObjectListFieldComponent,
      FormField,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      SettingsToggleComponent,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;d8e4af2b3221ecf5;/home/runner/work/backoffice/backoffice/src/app/admin/staff-tenant-modal.component.ts */\nmain {\n  width: 32rem;\n  max-width: calc(100vw - 5rem);\n  max-height: 65vh;\n}\n/*# sourceMappingURL=staff-tenant-modal.component.css.map */\n"] }]
  }], null, { event: [{ type: Output, args: ["event"] }], show_outlook: [{ type: Input, args: [{ isSignal: true, alias: "show_outlook", required: false }] }, { type: Output, args: ["show_outlookChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTenantModalComponent, { className: "StaffTenantModalComponent", filePath: "src/app/admin/staff-tenant-modal.component.ts", lineNumber: 606 });
})();

// src/app/admin/staff-api.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c15 = (a0) => ({ key: "platform", name: a0 });
var _c22 = (a0, a1) => ({ key: "booking_period", name: a0, content: a1, sortable: false });
var _c32 = (a0, a1) => ({ key: "secret_expiry", name: a0, content: a1, size: "10rem" });
var _c42 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, sortable: false, size: "8.75rem" });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.type;
function PlaceStaffAPIComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
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
function PlaceStaffAPIComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
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
function PlaceStaffAPIComponent_ng_template_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", period_r5.type, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", period_r5.length, " ");
  }
}
function PlaceStaffAPIComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, PlaceStaffAPIComponent_ng_template_27_For_2_Template, 4, 2, "div", null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.bookingPeriods(data_r6));
  }
}
function PlaceStaffAPIComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_29_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editLimits(row_r8));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "app_registration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_29_Template_button_click_6_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editTenant(row_r8));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 20);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function PlaceStaffAPIComponent_ng_template_29_Template_button_click_11_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeTenant(row_r8));
    });
    \u0275\u0275elementStart(14, "icon");
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 6, "ADMIN.TENANTS_EDIT_BOOKING_LIMITS"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 8, "ADMIN.TENANTS_EDIT_BOOKING_LIMITS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 10, "ADMIN.TENANTS_EDIT"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 12, "ADMIN.TENANTS_EDIT"));
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 14, "ADMIN.TENANTS_REMOVE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 16, "ADMIN.TENANTS_REMOVE"));
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
  expiring = (tenant) => isSecretExpiring(tenant);
  expired = (tenant) => isSecretExpired(tenant);
  bookingPeriods(periods) {
    return Object.entries(periods || {}).map(([type, minutes]) => ({
      type,
      length: formatMinutes(minutes)
    }));
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
      content: `Remove <strong>${escapeHtml(tenant.name)}</strong> from this domain?<br>
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
    if (details.reason !== "done")
      return;
    details.loading("Removing tenant from domain...");
    const failed = await V(`/api/staff/v1/tenants/${tenant.id}`).then(() => false).catch(async (err) => {
      notifyError(`Error removing tenant ${tenant.name}. Error: ${await readError(err)}`);
      return true;
    });
    details.close();
    if (failed)
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
    const tenants = await _("/api/staff/v1/tenants").catch(reportLoadError([]));
    this.tenants.set((tenants || []).filter((t) => t.domain === this.domain()?.domain));
    this.loading.set("");
  }
  static \u0275fac = function PlaceStaffAPIComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceStaffAPIComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceStaffAPIComponent, selectors: [["staff-api"]], decls: 31, vars: 50, consts: [["expires_template", ""], ["period_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["icon", "", "default", "", "matRipple", "", 1, "text-xl", 3, "click", "matTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-3xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "px-2"], [1, "rounded-2xl", "px-3", "py-1", "text-xs"], ["booking-period", "", 1, "flex", "flex-col", "px-2", "py-1"], [1, "opacity-60"], [1, "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function PlaceStaffAPIComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6)(6, "mat-form-field", 7)(7, "mat-select", 8);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function PlaceStaffAPIComponent_Template_mat_select_ngModelChange_7_listener($event) {
        return ctx.setDomain($event);
      });
      \u0275\u0275repeaterCreate(9, PlaceStaffAPIComponent_For_10_Template, 2, 2, "mat-option", 9, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function PlaceStaffAPIComponent_Template_button_click_11_listener() {
        return ctx.editTenant();
      });
      \u0275\u0275elementStart(14, "icon");
      \u0275\u0275text(15, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 11);
      \u0275\u0275element(17, "mat-progress-bar", 12)(18, "simple-table", 13);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, PlaceStaffAPIComponent_ng_template_25_Template, 5, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(27, PlaceStaffAPIComponent_ng_template_27_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(29, PlaceStaffAPIComponent_ng_template_29_Template, 16, 18, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const expires_template_r9 = \u0275\u0275reference(26);
      const period_template_r10 = \u0275\u0275reference(28);
      const actions_template_r11 = \u0275\u0275reference(30);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "ADMIN.TENANTS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.domain())("placeholder", \u0275\u0275pipeBind1(8, 13, "ADMIN.SELECT_DOMAIN"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.domain_list());
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 15, "ADMIN.TENANTS_ADD"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 17, "ADMIN.TENANTS_ADD"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.tenants())("columns", \u0275\u0275pureFunction5(44, _c52, \u0275\u0275pureFunction1(31, _c03, \u0275\u0275pipeBind1(19, 19, "COMMON.FIELD_NAME")), \u0275\u0275pureFunction1(33, _c15, \u0275\u0275pipeBind1(20, 21, "ADMIN.TENANTS_PLATFORM")), \u0275\u0275pureFunction2(35, _c22, \u0275\u0275pipeBind1(21, 23, "ADMIN.TENANTS_BOOKING_PERIOD_COLUMN"), period_template_r10), \u0275\u0275pureFunction2(38, _c32, \u0275\u0275pipeBind1(22, 25, "ADMIN.TENANTS_SECRET_EXPIRY"), expires_template_r9), \u0275\u0275pureFunction2(41, _c42, \u0275\u0275pipeBind1(23, 27, "COMMON.ACTIONS"), actions_template_r11)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(24, 29, "ADMIN.TENANTS_EMPTY"));
    }
  }, dependencies: [
    LoadingLabelDirective,
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
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="editTenant()"
                        [matTooltip]="'ADMIN.TENANTS_ADD' | translate"
                        [attr.aria-label]="'ADMIN.TENANTS_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
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
                            key: 'booking_period',
                            name:
                                'ADMIN.TENANTS_BOOKING_PERIOD_COLUMN'
                                | translate,
                            content: period_template,
                            sortable: false,
                        },
                        {
                            key: 'secret_expiry',
                            name: 'ADMIN.TENANTS_SECRET_EXPIRY' | translate,
                            content: expires_template,
                            size: '10rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
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
        <ng-template #period_template let-data="data">
            <div class="flex flex-col px-2 py-1" booking-period>
                @for (period of bookingPeriods(data); track period.type) {
                    <div>
                        <span class="opacity-60">{{ period.type }}:</span>
                        {{ period.length }}
                    </div>
                }
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
                    [attr.aria-label]="
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
                    [attr.aria-label]="'ADMIN.TENANTS_EDIT' | translate"
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
                    [attr.aria-label]="'ADMIN.TENANTS_REMOVE' | translate"
                    (click)="removeTenant(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      LoadingLabelDirective,
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
    ], styles: ["/* angular:styles/component:css;b6d7d04ca00a019a;/home/runner/work/backoffice/backoffice/src/app/admin/staff-api.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=staff-api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceStaffAPIComponent, { className: "PlaceStaffAPIComponent", filePath: "src/app/admin/staff-api.component.ts", lineNumber: 227 });
})();
export {
  PlaceStaffAPIComponent
};
//# debugId=12f24e03-43ee-592a-8eb3-3fee8013af1f
//# sourceMappingURL=chunk-4DE4S2SC.js.map
