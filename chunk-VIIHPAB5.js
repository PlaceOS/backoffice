import {
  ObjectListFieldComponent
} from "./chunk-IWSFHJ6U.js";
import {
  ActiveItemService
} from "./chunk-FMVTBM5Q.js";
import {
  ItemCreateUpdateModalComponent
} from "./chunk-T5CBAHJS.js";
import {
  openConfirmModal
} from "./chunk-XZLJQL74.js";
import {
  FullscreenModalShellComponent
} from "./chunk-JCVHEY5H.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DXEXLE3X.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-LGSLM77D.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-6ATATSUD.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-H3NFP65B.js";
import {
  AsyncHandler
} from "./chunk-VGLA4YGG.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  MatOption
} from "./chunk-RXOUTXM3.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-XGWC243Z.js";
import {
  Component,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Injectable,
  Input,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AJKLM77M.js";
import {
  BehaviorSubject,
  Fc,
  Gu,
  Hc,
  Js,
  Ju,
  Ls,
  N,
  Nc,
  Sc,
  Vu,
  Yu,
  Zs,
  bc,
  catchError,
  combineLatest,
  cu,
  filter,
  first,
  fu,
  hu,
  lastValueFrom,
  lu,
  map,
  ro,
  shareReplay,
  switchMap,
  to,
  vc,
  wu,
  xa,
  yc,
  zc
} from "./chunk-ESVM3M45.js";
import {
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/domains/auth-sources.utilities.ts
function generateOAuthSourceForm(auth_source) {
  const fields = {
    name: new FormControl(auth_source?.name || "", [Validators.required]),
    client_id: new FormControl(auth_source?.client_id || ""),
    client_secret: new FormControl(auth_source?.client_secret || ""),
    info_mappings: new FormControl(auth_source?.info_mappings || {}),
    authorize_params: new FormControl(auth_source?.authorize_params || {}),
    ensure_matching: new FormControl(auth_source?.ensure_matching || {}),
    site: new FormControl(auth_source?.site || ""),
    authorize_url: new FormControl(auth_source?.authorize_url || ""),
    token_method: new FormControl(auth_source?.token_method || "post"),
    auth_scheme: new FormControl(auth_source?.auth_scheme || "request_body"),
    token_url: new FormControl(auth_source?.token_url || ""),
    scope: new FormControl(auth_source?.scope || ""),
    raw_info_url: new FormControl(auth_source?.raw_info_url || "")
  };
  return new FormGroup(fields);
}
function generateSAMLSourceForm(auth_source) {
  if (!auth_source) {
    throw Error("No OAuth source passed to generate form fields");
  }
  const fields = {
    name: new FormControl(auth_source.name || "", [Validators.required]),
    issuer: new FormControl(auth_source.issuer || "", [
      Validators.required
    ]),
    idp_sso_target_url: new FormControl(auth_source.idp_sso_target_url || "", [Validators.required]),
    name_identifier_format: new FormControl(auth_source.name_identifier_format || ""),
    assertion_consumer_service_url: new FormControl(auth_source.assertion_consumer_service_url || "", [Validators.required]),
    request_attributes: new FormControl(auth_source.request_attributes || []),
    idp_sso_target_url_runtime_params: new FormControl(auth_source.idp_sso_target_url_runtime_params || {}),
    uid_attribute: new FormControl(auth_source.uid_attribute || ""),
    idp_cert: new FormControl(auth_source.idp_cert || ""),
    idp_cert_fingerprint: new FormControl(auth_source.idp_cert_fingerprint || ""),
    attribute_service_name: new FormControl(auth_source.attribute_service_name || ""),
    attribute_statements: new FormControl(auth_source.attribute_statements || {}),
    idp_slo_target_url: new FormControl(auth_source.idp_slo_target_url || ""),
    slo_default_relay_state: new FormControl(auth_source.slo_default_relay_state || "")
  };
  return new FormGroup(fields);
}
function generateLDAPSourceForm(auth_source) {
  if (!auth_source) {
    throw Error("No OAuth source passed to generate form fields");
  }
  const fields = {
    name: new FormControl(auth_source.name || "", [Validators.required]),
    host: new FormControl(auth_source.host || "", [Validators.required]),
    port: new FormControl(auth_source.port || "", [
      Validators.min(1),
      Validators.max(65535)
    ]),
    auth_method: new FormControl(auth_source.auth_method || "plain"),
    uid: new FormControl(auth_source.uid || ""),
    base: new FormControl(auth_source.base || "", [Validators.required]),
    bind_dn: new FormControl(auth_source.bind_dn || ""),
    password: new FormControl(auth_source.password || ""),
    filter: new FormControl(auth_source.filter || "")
  };
  return new FormGroup(fields);
}

// src/app/ui/forms/ldap-source-form.component.ts
function LdapSourceFormComponent_Conditional_0_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.AUTHENTICATION_NAME_REQUIRE"), " ");
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_1_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name.invalid ? 10 : -1);
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.LDAP_HOST_REQUIRED"), " ");
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_3_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.host.invalid && ctx_r0.form().controls.host.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.LDAP_HOST"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "DOMAINS.LDAP_HOST"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.host.invalid ? 10 : -1);
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.LDAP_PORT"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.LDAP_PORT"));
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.LDAP_USER_ID"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.LDAP_USER_ID"));
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_7_For_7_Template(rf, ctx) {
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
function LdapSourceFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "mat-select", 14);
    \u0275\u0275repeaterCreate(6, LdapSourceFormComponent_Conditional_0_Conditional_7_For_7_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "DOMAINS.LDAP_AUTH_METHOD"), ": ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.auth_methods);
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.LDAP_BASE_REQUIRED"), " ");
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 17);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_9_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.base.invalid && ctx_r0.form().controls.base.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.LDAP_BASE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "DOMAINS.LDAP_BASE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.base.invalid ? 10 : -1);
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.LDAP_BIND_DN"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.LDAP_BIND_DN"));
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "COMMON.PASSWORD"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "COMMON.PASSWORD"));
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.LDAP_FILTER"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.LDAP_FILTER"));
  }
}
function LdapSourceFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, LdapSourceFormComponent_Conditional_0_Conditional_1_Template, 11, 9, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, LdapSourceFormComponent_Conditional_0_Conditional_3_Template, 11, 9, "div", 1);
    \u0275\u0275conditionalCreate(4, LdapSourceFormComponent_Conditional_0_Conditional_4_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275conditionalCreate(6, LdapSourceFormComponent_Conditional_0_Conditional_6_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(7, LdapSourceFormComponent_Conditional_0_Conditional_7_Template, 8, 3, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275conditionalCreate(9, LdapSourceFormComponent_Conditional_0_Conditional_9_Template, 11, 9, "div", 1);
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_10_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275conditionalCreate(12, LdapSourceFormComponent_Conditional_0_Conditional_12_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(13, LdapSourceFormComponent_Conditional_0_Conditional_13_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.host ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.port ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.uid ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.auth_method ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.base ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.bind_dn ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.password ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.filter ? 13 : -1);
  }
}
var LdapSourceFormComponent = class _LdapSourceFormComponent {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of available authentication schemes */
  auth_methods = [
    { id: "plain", name: "Plain" },
    { id: "ssl", name: "SSL" },
    { id: "tls", name: "TLS" }
  ];
  static \u0275fac = function LdapSourceFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LdapSourceFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LdapSourceFormComponent, selectors: [["ldap-source-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["ldap-source", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], [1, "field", "type"], ["for", "auth-source-name"], ["appearance", "outline"], ["matInput", "", "name", "auth-source-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "host"], ["matInput", "", "name", "host", "formControlName", "host", 3, "placeholder"], ["for", "port"], ["matInput", "", "type", "number", "name", "port", "formControlName", "port", 3, "placeholder"], ["for", "uid"], ["matInput", "", "name", "uid", "formControlName", "uid", 3, "placeholder"], ["for", "auth-method"], ["name", "auth-method", "formControlName", "auth_method"], [3, "value"], ["for", "base"], ["matInput", "", "name", "base", "formControlName", "base", 3, "placeholder"], ["for", "bind-dn"], ["matInput", "", "name", "bind-dn", "formControlName", "bind_dn", 3, "placeholder"], ["for", "password"], ["matInput", "", "name", "password", "formControlName", "password", 3, "placeholder"], ["for", "filter"], ["matInput", "", "name", "filter", "formControlName", "filter", 3, "placeholder"]], template: function LdapSourceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LdapSourceFormComponent_Conditional_0_Template, 14, 10, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [MatFormFieldModule, MatFormField, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=ldap-source-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LdapSourceFormComponent, [{
    type: Component,
    args: [{ selector: "ldap-source-form", template: `
        @if (form()) {
            <form ldap-source class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="auth-source-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="auth-source-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            @if (form().controls.name.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.AUTHENTICATION_NAME_REQUIRE'
                                            | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.host) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form().controls.host.invalid &&
                                    form().controls.host.touched
                                "
                            >
                                {{ 'DOMAINS.LDAP_HOST' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="host"
                                    [placeholder]="
                                        'DOMAINS.LDAP_HOST' | translate
                                    "
                                    formControlName="host"
                                />
                                @if (form().controls.host.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LDAP_HOST_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.port) {
                        <div class="field">
                            <label for="port"
                                >{{ 'DOMAINS.LDAP_PORT' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    type="number"
                                    name="port"
                                    [placeholder]="
                                        'DOMAINS.LDAP_PORT' | translate
                                    "
                                    formControlName="port"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.uid) {
                        <div class="field">
                            <label for="uid"
                                >{{
                                    'DOMAINS.LDAP_USER_ID' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="uid"
                                    [placeholder]="
                                        'DOMAINS.LDAP_USER_ID' | translate
                                    "
                                    formControlName="uid"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.auth_method) {
                        <div class="field type">
                            <label for="auth-method">
                                {{ 'DOMAINS.LDAP_AUTH_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="auth-method"
                                    formControlName="auth_method"
                                >
                                    @for (type of auth_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.base) {
                        <div class="field">
                            <label
                                for="base"
                                [class.error]="
                                    form().controls.base.invalid &&
                                    form().controls.base.touched
                                "
                            >
                                {{ 'DOMAINS.LDAP_BASE' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="base"
                                    [placeholder]="
                                        'DOMAINS.LDAP_BASE' | translate
                                    "
                                    formControlName="base"
                                />
                                @if (form().controls.base.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LDAP_BASE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.bind_dn) {
                        <div class="field">
                            <label for="bind-dn"
                                >{{
                                    'DOMAINS.LDAP_BIND_DN' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="bind-dn"
                                    [placeholder]="
                                        'DOMAINS.LDAP_BIND_DN' | translate
                                    "
                                    formControlName="bind_dn"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.password) {
                        <div class="field">
                            <label for="password"
                                >{{ 'COMMON.PASSWORD' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="password"
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
                                    formControlName="password"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.filter) {
                        <div class="field">
                            <label for="filter"
                                >{{ 'DOMAINS.LDAP_FILTER' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="filter"
                                    [placeholder]="
                                        'DOMAINS.LDAP_FILTER' | translate
                                    "
                                    formControlName="filter"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;a7de8c3ecbcd89c3f1331152a37c7d042790352749363904d1c463003bc6b7d8;/home/runner/work/backoffice/backoffice/src/app/ui/forms/ldap-source-form.component.ts */\n:host {\n  max-width: 100%;\n}\n/*# sourceMappingURL=ldap-source-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LdapSourceFormComponent, { className: "LdapSourceFormComponent", filePath: "src/app/ui/forms/ldap-source-form.component.ts", lineNumber: 243 });
})();

// src/app/ui/forms/oauth-source-form.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => ["PlaceOS", "Remote"];
var _c2 = () => ["Parameter", "Value"];
function OauthSourceFormComponent_Conditional_0_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.AUTHENTICATION_NAME_REQUIRE"), " ");
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 6);
    \u0275\u0275element(8, "input", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, OauthSourceFormComponent_Conditional_0_Conditional_1_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name.invalid ? 10 : -1);
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.CLIENT_ID"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.CLIENT_ID"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.CLIENT_SECRET"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.CLIENT_SECRET"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.OAUTH_SITE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.OAUTH_SITE_PLACEHOLDER"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.OAUTH_SCOPES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.OAUTH_SCOPES"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
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
function OauthSourceFormComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 17);
    \u0275\u0275repeaterCreate(6, OauthSourceFormComponent_Conditional_0_Conditional_9_For_7_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DOMAINS.OAUTH_TOKEN_METHOD"), ": ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.token_methods);
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, type_r3.id === "request_body" ? "DOMAINS.OAUTH_SCHEME_BODY" : "DOMAINS.OAUTH_SCHEME_BASIC"), " ");
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 19);
    \u0275\u0275text(2, " Authentication Scheme: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 6)(4, "mat-select", 20);
    \u0275\u0275repeaterCreate(5, OauthSourceFormComponent_Conditional_0_Conditional_10_For_6_Template, 3, 4, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.auth_schemes);
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.OAUTH_TOKEN_URL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.OAUTH_TOKEN_URL"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.OAUTH_AUTHORISE_URL"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.OAUTH_AUTHORISE_URL"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 26);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.OAUTH_PROFILE_URL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.OAUTH_PROFILE_URL"));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 27);
    \u0275\u0275twoWayListener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_15_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.info_mapping_list, $event) || (ctx_r0.info_mapping_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_15_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateMappings($event, ctx_r0.form().controls.info_mappings));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.OAUTH_INFO_MAPPINGS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.info_mapping_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("fields", \u0275\u0275pureFunction0(7, _c1));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 27);
    \u0275\u0275twoWayListener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_16_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.auth_params_list, $event) || (ctx_r0.auth_params_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_16_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateMappings($event, ctx_r0.form().controls.authorize_params, false, ["Parameter", "Value"]));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.OAUTH_AUTHORISE_PARAMS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.auth_params_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("fields", \u0275\u0275pureFunction0(7, _c2));
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 27);
    \u0275\u0275twoWayListener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_17_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ensure_matching_list, $event) || (ctx_r0.ensure_matching_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_17_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateMappings($event, ctx_r0.form().controls.ensure_matching, true, ["Parameter", "Value"]));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.OAUTH_ENSURE_MATCHING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ensure_matching_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("fields", \u0275\u0275pureFunction0(7, _c2));
  }
}
function OauthSourceFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, OauthSourceFormComponent_Conditional_0_Conditional_1_Template, 11, 9, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, OauthSourceFormComponent_Conditional_0_Conditional_3_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(4, OauthSourceFormComponent_Conditional_0_Conditional_4_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275conditionalCreate(6, OauthSourceFormComponent_Conditional_0_Conditional_6_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(7, OauthSourceFormComponent_Conditional_0_Conditional_7_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275conditionalCreate(9, OauthSourceFormComponent_Conditional_0_Conditional_9_Template, 8, 3, "div", 3);
    \u0275\u0275conditionalCreate(10, OauthSourceFormComponent_Conditional_0_Conditional_10_Template, 7, 0, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, OauthSourceFormComponent_Conditional_0_Conditional_11_Template, 7, 6, "div", 1);
    \u0275\u0275elementStart(12, "div", 2);
    \u0275\u0275conditionalCreate(13, OauthSourceFormComponent_Conditional_0_Conditional_13_Template, 7, 6, "div", 1);
    \u0275\u0275conditionalCreate(14, OauthSourceFormComponent_Conditional_0_Conditional_14_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, OauthSourceFormComponent_Conditional_0_Conditional_15_Template, 5, 8, "div", 4);
    \u0275\u0275conditionalCreate(16, OauthSourceFormComponent_Conditional_0_Conditional_16_Template, 5, 8, "div", 4);
    \u0275\u0275conditionalCreate(17, OauthSourceFormComponent_Conditional_0_Conditional_17_Template, 5, 8, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.client_id ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.client_secret ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.site ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.scope ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.token_method ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.auth_scheme ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.token_url ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.authorize_url ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.raw_info_url ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.info_mappings ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.authorize_params ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.ensure_matching ? 17 : -1);
  }
}
var OauthSourceFormComponent = class _OauthSourceFormComponent extends AsyncHandler {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of available token request methods */
  token_methods = [
    { id: "get", name: "GET" },
    { id: "post", name: "POST" },
    { id: "put", name: "PUT" }
  ];
  /** List of available authentication schemes */
  auth_schemes = [
    { id: "request_body", name: "Request Body" },
    { id: "basic_auth", name: "Basic Auth" }
  ];
  /** List of info mapping pairs */
  info_mapping_list = [];
  /** List of authorize params pairs */
  auth_params_list = [];
  /** List of ensure_matching pairs */
  ensure_matching_list = [];
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      if (form.controls.info_mappings) {
        const map2 = form.controls.info_mappings.value || {};
        this.info_mapping_list = Object.keys(map2).map((key) => {
          return { PlaceOS: key, Remote: map2[key] };
        });
      }
      if (form.controls.authorize_params) {
        const map2 = form.controls.authorize_params.value || {};
        this.auth_params_list = Object.keys(map2).map((key) => {
          return { Parameter: key, Value: map2[key] };
        });
      }
      if (form.controls.ensure_matching) {
        const map2 = form.controls.ensure_matching.value || {};
        this.ensure_matching_list = Object.keys(map2).map((key) => {
          return {
            Parameter: key,
            Value: (map2[key] || []).join(",")
          };
        });
      }
    }
  }
  updateMappings(mappings, control, split = false, fields = ["PlaceOS", "Remote"]) {
    const map2 = {};
    for (const pair of mappings) {
      if (pair[fields[0]] && pair[fields[1]]) {
        map2[pair[fields[0]]] = !split ? pair[fields[1]] : (pair[fields[1]] || "").split(",");
      }
    }
    control.setValue(map2);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OauthSourceFormComponent_BaseFactory;
    return function OauthSourceFormComponent_Factory(__ngFactoryType__) {
      return (\u0275OauthSourceFormComponent_BaseFactory || (\u0275OauthSourceFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_OauthSourceFormComponent)))(__ngFactoryType__ || _OauthSourceFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OauthSourceFormComponent, selectors: [["oauth-source-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["oauth-source", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "field"], [1, "fieldset"], [1, "field", "type"], [1, "field", "mb-4"], ["for", "auth-source-name"], ["appearance", "outline"], ["matInput", "", "name", "auth-source-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "client-id"], ["matInput", "", "name", "client-id", "formControlName", "client_id", 3, "placeholder"], ["for", "client-secret"], ["matInput", "", "name", "client-secret", "formControlName", "client_secret", 3, "placeholder"], ["for", "site"], ["matInput", "", "name", "site", "formControlName", "site", 3, "placeholder"], ["for", "scope"], ["matInput", "", "name", "scope", "formControlName", "scope", 3, "placeholder"], ["for", "token-method"], ["name", "token-method", "formControlName", "token_method"], [3, "value"], ["for", "auth-scheme"], ["name", "auth-scheme", "formControlName", "auth_scheme"], ["for", "token-url"], ["matInput", "", "name", "token-url", "formControlName", "token_url", 3, "placeholder"], ["for", "authorize-url"], ["matInput", "", "name", "authorize-url", "formControlName", "authorize_url", 3, "placeholder"], ["for", "info-url"], ["matInput", "", "name", "raw_info_url", "formControlName", "raw_info_url", 3, "placeholder"], [3, "ngModelChange", "ngModel", "ngModelOptions", "fields"]], template: function OauthSourceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, OauthSourceFormComponent_Conditional_0_Template, 18, 14, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    ObjectListFieldComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=oauth-source-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OauthSourceFormComponent, [{
    type: Component,
    args: [{ selector: "oauth-source-form", template: `
        @if (form()) {
            <form oauth-source class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="auth-source-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="auth-source-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            @if (form().controls.name.invalid) {
                                <mat-error>
                                    {{
                                        'DOMAINS.AUTHENTICATION_NAME_REQUIRE'
                                            | translate
                                    }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.client_id) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.CLIENT_ID' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-id"
                                    [placeholder]="
                                        'DOMAINS.CLIENT_ID' | translate
                                    "
                                    formControlName="client_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.client_secret) {
                        <div class="field">
                            <label for="client-secret"
                                >{{ 'DOMAINS.CLIENT_SECRET' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-secret"
                                    [placeholder]="
                                        'DOMAINS.CLIENT_SECRET' | translate
                                    "
                                    formControlName="client_secret"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.site) {
                        <div class="field">
                            <label for="site"
                                >{{ 'DOMAINS.OAUTH_SITE' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="site"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SITE_PLACEHOLDER'
                                            | translate
                                    "
                                    formControlName="site"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.scope) {
                        <div class="field">
                            <label for="scope"
                                >{{
                                    'DOMAINS.OAUTH_SCOPES' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="scope"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SCOPES' | translate
                                    "
                                    formControlName="scope"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.token_method) {
                        <div class="field type">
                            <label for="token-method"
                                >{{ 'DOMAINS.OAUTH_TOKEN_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="token-method"
                                    formControlName="token_method"
                                >
                                    @for (type of token_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.auth_scheme) {
                        <div class="field type">
                            <label for="auth-scheme">
                                Authentication Scheme:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="auth-scheme"
                                    formControlName="auth_scheme"
                                >
                                    @for (type of auth_schemes; track type) {
                                        <mat-option [value]="type.id">
                                            {{
                                                (type.id === 'request_body'
                                                    ? 'DOMAINS.OAUTH_SCHEME_BODY'
                                                    : 'DOMAINS.OAUTH_SCHEME_BASIC'
                                                ) | translate
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.token_url) {
                    <div class="field">
                        <label for="token-url"
                            >{{ 'DOMAINS.OAUTH_TOKEN_URL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="token-url"
                                [placeholder]="
                                    'DOMAINS.OAUTH_TOKEN_URL' | translate
                                "
                                formControlName="token_url"
                            />
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.authorize_url) {
                        <div class="field">
                            <label for="authorize-url"
                                >{{
                                    'DOMAINS.OAUTH_AUTHORISE_URL' | translate
                                }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="authorize-url"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_AUTHORISE_URL'
                                            | translate
                                    "
                                    formControlName="authorize_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.raw_info_url) {
                        <div class="field">
                            <label for="info-url"
                                >{{
                                    'DOMAINS.OAUTH_PROFILE_URL' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="raw_info_url"
                                    [placeholder]="
                                        'DOMAINS.OAUTH_PROFILE_URL' | translate
                                    "
                                    formControlName="raw_info_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.info_mappings) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_INFO_MAPPINGS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="info_mapping_list"
                            (ngModelChange)="
                                updateMappings(
                                    $event,
                                    form().controls.info_mappings
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['PlaceOS', 'Remote']"
                        ></object-list-field>
                    </div>
                }
                @if (form().controls.authorize_params) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_AUTHORISE_PARAMS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="auth_params_list"
                            (ngModelChange)="
                                updateMappings(
                                    $event,
                                    form().controls.authorize_params,
                                    false,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        ></object-list-field>
                    </div>
                }
                @if (form().controls.ensure_matching) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_ENSURE_MATCHING' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="ensure_matching_list"
                            (ngModelChange)="
                                updateMappings(
                                    $event,
                                    form().controls.ensure_matching,
                                    true,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        ></object-list-field>
                    </div>
                }
            </form>
        }
    `, imports: [
      ObjectListFieldComponent,
      FormsModule,
      TranslatePipe,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;a7de8c3ecbcd89c3f1331152a37c7d042790352749363904d1c463003bc6b7d8;/home/runner/work/backoffice/backoffice/src/app/ui/forms/oauth-source-form.component.ts */\n:host {\n  max-width: 100%;\n}\n/*# sourceMappingURL=oauth-source-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OauthSourceFormComponent, { className: "OauthSourceFormComponent", filePath: "src/app/ui/forms/oauth-source-form.component.ts", lineNumber: 314 });
})();

// src/app/ui/forms/saml-source-form.component.ts
var _c02 = () => ["name", "name_format", "friendly_name"];
var _c12 = () => ({ standalone: true });
var _c22 = () => ["name", "mappings"];
var _c3 = () => ["name", "mapping"];
function SamlSourceFormComponent_Conditional_0_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.AUTHENTICATION_NAME_REQUIRE"), " ");
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_2_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name.invalid && ctx_r0.form().controls.name.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name.invalid ? 10 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.SAML_ISSUER_REQUIRED"), " ");
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_3_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.issuer.invalid && ctx_r0.form().controls.issuer.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.SAML_ISSUER"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "DOMAINS.SAML_ISSUER"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.issuer.invalid ? 10 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.SAML_IDP_TARGET_URL_REQUIRED"), " ");
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 10);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_5_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.idp_sso_target_url.invalid && ctx_r0.form().controls.idp_sso_target_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.SAML_IDP_TARGET_URL"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "DOMAINS.SAML_IDP_TARGET_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.idp_sso_target_url.invalid ? 10 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.SAML_NAME_ID_FORMAT_REQUIRED"), " ");
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275conditionalCreate(7, SamlSourceFormComponent_Conditional_0_Conditional_6_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.name_identifier_format.invalid && ctx_r0.form().controls.name_identifier_format.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.SAML_NAME_ID_FORMAT"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "DOMAINS.SAML_NAME_ID_FORMAT"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name_identifier_format.invalid ? 7 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.SAML_REQUEST_ATTRIBUTES_REQUIRED"), " ");
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "object-list-field", 14);
    \u0275\u0275conditionalCreate(5, SamlSourceFormComponent_Conditional_0_Conditional_7_Conditional_5_Template, 3, 3, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.request_attributes.invalid && ctx_r0.form().controls.request_attributes.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.SAML_REQUEST_ATTRIBUTES"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275property("fields", \u0275\u0275pureFunction0(7, _c02));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.request_attributes.invalid && ctx_r0.form().controls.request_attributes.touched ? 5 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.SAML_ASSERTION_URL_REQUIRED"), " ");
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 17);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_9_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().controls.assertion_consumer_service_url.invalid && ctx_r0.form().controls.assertion_consumer_service_url.touched);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "DOMAINS.SAML_ASSERTION_URL"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 7, "DOMAINS.SAML_ASSERTION_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.assertion_consumer_service_url.invalid ? 10 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.SAML_CERT_FINGERPRINT"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.SAML_CERT_FINGERPRINT"));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.SAML_CERT_FULL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.SAML_CERT_FULL"));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 23);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.SAML_UID_ATTRIBUTE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.SAML_UID_ATTRIBUTE"));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME"));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SamlSourceFormComponent_Conditional_0_Conditional_15_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.attribute_statement_mappings, $event) || (ctx_r0.attribute_statement_mappings = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SamlSourceFormComponent_Conditional_0_Conditional_15_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateAttributeStatements($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.SAML_ATTRIBUTE_STATEMENTS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.attribute_statement_mappings);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c12))("fields", \u0275\u0275pureFunction0(7, _c22));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 27);
    \u0275\u0275twoWayListener("ngModelChange", function SamlSourceFormComponent_Conditional_0_Conditional_16_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.runtime_param_list, $event) || (ctx_r0.runtime_param_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SamlSourceFormComponent_Conditional_0_Conditional_16_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateRuntimeParams($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.SAML_IDP_SSO_RUNTIME_PARAMS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.runtime_param_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c12))("fields", \u0275\u0275pureFunction0(7, _c3));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 29);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.SAML_IDP_SLO_TARGET_URL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.SAML_IDP_SLO_TARGET_URL"));
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE"));
  }
}
function SamlSourceFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, SamlSourceFormComponent_Conditional_0_Conditional_2_Template, 11, 9, "div", 2);
    \u0275\u0275conditionalCreate(3, SamlSourceFormComponent_Conditional_0_Conditional_3_Template, 11, 9, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1);
    \u0275\u0275conditionalCreate(5, SamlSourceFormComponent_Conditional_0_Conditional_5_Template, 11, 9, "div", 2);
    \u0275\u0275conditionalCreate(6, SamlSourceFormComponent_Conditional_0_Conditional_6_Template, 8, 9, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SamlSourceFormComponent_Conditional_0_Conditional_7_Template, 6, 8, "div", 3);
    \u0275\u0275elementStart(8, "div", 1);
    \u0275\u0275conditionalCreate(9, SamlSourceFormComponent_Conditional_0_Conditional_9_Template, 11, 9, "div", 2);
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_10_Template, 7, 6, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, SamlSourceFormComponent_Conditional_0_Conditional_11_Template, 7, 6, "div", 2);
    \u0275\u0275elementStart(12, "div", 1);
    \u0275\u0275conditionalCreate(13, SamlSourceFormComponent_Conditional_0_Conditional_13_Template, 7, 6, "div", 2);
    \u0275\u0275conditionalCreate(14, SamlSourceFormComponent_Conditional_0_Conditional_14_Template, 7, 6, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, SamlSourceFormComponent_Conditional_0_Conditional_15_Template, 5, 8, "div", 3);
    \u0275\u0275conditionalCreate(16, SamlSourceFormComponent_Conditional_0_Conditional_16_Template, 5, 8, "div", 3);
    \u0275\u0275elementStart(17, "div", 1);
    \u0275\u0275conditionalCreate(18, SamlSourceFormComponent_Conditional_0_Conditional_18_Template, 7, 6, "div", 2);
    \u0275\u0275conditionalCreate(19, SamlSourceFormComponent_Conditional_0_Conditional_19_Template, 7, 6, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.issuer ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.idp_sso_target_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.name_identifier_format ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.request_attributes ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.assertion_consumer_service_url ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.idp_cert_fingerprint ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.idp_cert ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.uid_attribute ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.attribute_service_name ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.attribute_statements ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.idp_sso_target_url_runtime_params ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().controls.idp_slo_target_url ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().controls.slo_default_relay_state ? 19 : -1);
  }
}
var SamlSourceFormComponent = class _SamlSourceFormComponent extends AsyncHandler {
  /** Group of form fields used for creating the system */
  form = input(void 0, ...ngDevMode ? [{ debugName: "form" }] : []);
  /** List of attribute statement pairs */
  attribute_statement_mappings = [];
  /** List of runtime param pairs */
  runtime_param_list = [];
  ngOnChanges(changes) {
    const form = this.form();
    if (changes.form && form) {
      if (form.controls.attribute_statements) {
        const map2 = form.controls.attribute_statements.value || {};
        this.attribute_statement_mappings = Object.keys(map2).map((key) => {
          return { name: key, mappings: map2[key].join(",") };
        });
      }
      if (form.controls.idp_sso_target_url_runtime_params) {
        const map2 = form.controls.idp_sso_target_url_runtime_params.value || {};
        this.runtime_param_list = Object.keys(map2).map((key) => {
          return { name: key, mappings: map2[key] };
        });
      }
    }
  }
  /**
   * Update the form control value for attribute statements
   * @param mappings Mapping listing
   */
  updateAttributeStatements(mappings) {
    this.timeout("mappings", () => {
      const map2 = {};
      for (const pair of mappings) {
        if (pair.name && pair.mappings) {
          map2[pair.name] = (pair.mappings || "").split(",");
        }
      }
      this.form().controls.attribute_statements.setValue(map2);
    }, 200);
  }
  /**
   * Update the form control value for runtime parameters
   * @param mappings Mapping listing
   */
  updateRuntimeParams(mappings) {
    this.timeout("mappings", () => {
      const map2 = {};
      for (const pair of mappings) {
        if (pair.name && pair.mapping) {
          map2[pair.name] = pair.mapping;
        }
      }
      this.form().controls.idp_sso_target_url_runtime_params.setValue(map2);
    }, 200);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SamlSourceFormComponent_BaseFactory;
    return function SamlSourceFormComponent_Factory(__ngFactoryType__) {
      return (\u0275SamlSourceFormComponent_BaseFactory || (\u0275SamlSourceFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SamlSourceFormComponent)))(__ngFactoryType__ || _SamlSourceFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SamlSourceFormComponent, selectors: [["saml-source-form"]], inputs: { form: [1, "form"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["saml-source", "", 1, "flex", "flex-col", 3, "formGroup"], [1, "fieldset"], [1, "field"], [1, "field", "mb-4"], ["for", "auth-source-name"], ["appearance", "outline"], ["matInput", "", "name", "auth-source-name", "formControlName", "name", "required", "", 3, "placeholder"], ["for", "issuer"], ["matInput", "", "name", "issuer", "formControlName", "issuer", "required", "", 3, "placeholder"], ["for", "idp-target"], ["matInput", "", "name", "idp-target", "formControlName", "idp_sso_target_url", "required", "", 3, "placeholder"], ["for", "name-identifier-format"], ["matInput", "", "name", "name-identifier-format", "formControlName", "name_identifier_format", "required", "", 3, "placeholder"], ["for", "request-attributes"], ["formControlName", "request_attributes", 3, "fields"], [1, "error-message"], ["for", "assertion-url"], ["matInput", "", "name", "assertion-url", "formControlName", "assertion_consumer_service_url", "required", "", 3, "placeholder"], ["for", "cert-fingerprint"], ["matInput", "", "name", "cert-fingerprint", "formControlName", "idp_cert_fingerprint", 3, "placeholder"], ["for", "cert"], ["matInput", "", "name", "cert", "formControlName", "idp_cert", 3, "placeholder"], ["for", "uid-attribute"], ["matInput", "", "name", "uid-attribute", "formControlName", "uid_attribute", 3, "placeholder"], ["for", "attribute-service-name"], ["matInput", "", "name", "attribute-service-name", "formControlName", "attribute_service_name", 3, "placeholder"], ["for", "client-secret"], [3, "ngModelChange", "ngModel", "ngModelOptions", "fields"], ["for", "slo-target"], ["matInput", "", "name", "slo-target", "formControlName", "idp_slo_target_url", 3, "placeholder"], ["for", "slo-relay"], ["matInput", "", "name", "slo-relay", "formControlName", "slo_default_relay_state", 3, "placeholder"]], template: function SamlSourceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SamlSourceFormComponent_Conditional_0_Template, 20, 15, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    ObjectListFieldComponent,
    MatInputModule,
    MatInput,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  max-width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--error);\n  font-size: 0.75em;\n  font-weight: 400;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=saml-source-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SamlSourceFormComponent, [{
    type: Component,
    args: [{ selector: "saml-source-form", template: `
        @if (form()) {
            <form saml-source class="flex flex-col" [formGroup]="form()">
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="auth-source-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="auth-source-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    formControlName="name"
                                    required
                                />
                                @if (form().controls.name.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.AUTHENTICATION_NAME_REQUIRE'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.issuer) {
                        <div class="field">
                            <label
                                for="issuer"
                                [class.error]="
                                    form().controls.issuer.invalid &&
                                    form().controls.issuer.touched
                                "
                            >
                                {{ 'DOMAINS.SAML_ISSUER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="issuer"
                                    [placeholder]="
                                        'DOMAINS.SAML_ISSUER' | translate
                                    "
                                    formControlName="issuer"
                                    required
                                />
                                @if (form().controls.issuer.invalid) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_ISSUER_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.idp_sso_target_url) {
                        <div class="field">
                            <label
                                for="idp-target"
                                [class.error]="
                                    form().controls.idp_sso_target_url
                                        .invalid &&
                                    form().controls.idp_sso_target_url.touched
                                "
                            >
                                {{ 'DOMAINS.SAML_IDP_TARGET_URL' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="idp-target"
                                    [placeholder]="
                                        'DOMAINS.SAML_IDP_TARGET_URL'
                                            | translate
                                    "
                                    formControlName="idp_sso_target_url"
                                    required
                                />
                                @if (
                                    form().controls.idp_sso_target_url.invalid
                                ) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_IDP_TARGET_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.name_identifier_format) {
                        <div class="field">
                            <label
                                for="name-identifier-format"
                                [class.error]="
                                    form().controls.name_identifier_format
                                        .invalid &&
                                    form().controls.name_identifier_format
                                        .touched
                                "
                            >
                                {{ 'DOMAINS.SAML_NAME_ID_FORMAT' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="name-identifier-format"
                                    [placeholder]="
                                        'DOMAINS.SAML_NAME_ID_FORMAT'
                                            | translate
                                    "
                                    formControlName="name_identifier_format"
                                    required
                                />
                                @if (
                                    form().controls.name_identifier_format
                                        .invalid
                                ) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_NAME_ID_FORMAT_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.request_attributes) {
                    <div class="field mb-4">
                        <label
                            for="request-attributes"
                            [class.error]="
                                form().controls.request_attributes.invalid &&
                                form().controls.request_attributes.touched
                            "
                        >
                            {{ 'DOMAINS.SAML_REQUEST_ATTRIBUTES' | translate }}:
                        </label>
                        <object-list-field
                            formControlName="request_attributes"
                            [fields]="['name', 'name_format', 'friendly_name']"
                        ></object-list-field>
                        @if (
                            form().controls.request_attributes.invalid &&
                            form().controls.request_attributes.touched
                        ) {
                            <div class="error-message">
                                {{
                                    'DOMAINS.SAML_REQUEST_ATTRIBUTES_REQUIRED'
                                        | translate
                                }}
                            </div>
                        }
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.assertion_consumer_service_url) {
                        <div class="field">
                            <label
                                for="assertion-url"
                                [class.error]="
                                    form().controls
                                        .assertion_consumer_service_url
                                        .invalid &&
                                    form().controls
                                        .assertion_consumer_service_url.touched
                                "
                            >
                                {{ 'DOMAINS.SAML_ASSERTION_URL' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="assertion-url"
                                    [placeholder]="
                                        'DOMAINS.SAML_ASSERTION_URL' | translate
                                    "
                                    formControlName="assertion_consumer_service_url"
                                    required
                                />
                                @if (
                                    form().controls
                                        .assertion_consumer_service_url.invalid
                                ) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.SAML_ASSERTION_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.idp_cert_fingerprint) {
                        <div class="field">
                            <label for="cert-fingerprint"
                                >{{
                                    'DOMAINS.SAML_CERT_FINGERPRINT' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="cert-fingerprint"
                                    [placeholder]="
                                        'DOMAINS.SAML_CERT_FINGERPRINT'
                                            | translate
                                    "
                                    formControlName="idp_cert_fingerprint"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.idp_cert) {
                    <div class="field">
                        <label for="cert"
                            >{{ 'DOMAINS.SAML_CERT_FULL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="cert"
                                [placeholder]="
                                    'DOMAINS.SAML_CERT_FULL' | translate
                                "
                                formControlName="idp_cert"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.uid_attribute) {
                        <div class="field">
                            <label for="uid-attribute"
                                >{{
                                    'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="uid-attribute"
                                    [placeholder]="
                                        'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                                    "
                                    formControlName="uid_attribute"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.attribute_service_name) {
                        <div class="field">
                            <label for="attribute-service-name"
                                >{{
                                    'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME'
                                        | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="attribute-service-name"
                                    [placeholder]="
                                        'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME'
                                            | translate
                                    "
                                    formControlName="attribute_service_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.attribute_statements) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.SAML_ATTRIBUTE_STATEMENTS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="attribute_statement_mappings"
                            (ngModelChange)="updateAttributeStatements($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['name', 'mappings']"
                        ></object-list-field>
                    </div>
                }
                @if (form().controls.idp_sso_target_url_runtime_params) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.SAML_IDP_SSO_RUNTIME_PARAMS'
                                    | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="runtime_param_list"
                            (ngModelChange)="updateRuntimeParams($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['name', 'mapping']"
                        ></object-list-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.idp_slo_target_url) {
                        <div class="field">
                            <label for="slo-target"
                                >{{
                                    'DOMAINS.SAML_IDP_SLO_TARGET_URL'
                                        | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="slo-target"
                                    [placeholder]="
                                        'DOMAINS.SAML_IDP_SLO_TARGET_URL'
                                            | translate
                                    "
                                    formControlName="idp_slo_target_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.slo_default_relay_state) {
                        <div class="field">
                            <label for="slo-relay"
                                >{{
                                    'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE'
                                        | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="slo-relay"
                                    [placeholder]="
                                        'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE'
                                            | translate
                                    "
                                    formControlName="slo_default_relay_state"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      ReactiveFormsModule,
      TranslatePipe,
      FormsModule,
      ObjectListFieldComponent,
      MatInputModule
    ], styles: ["/* angular:styles/component:css;e3fe0ac1a7aea9ff8e552aa7adff00bda309fa6271efd1012dc94f7e3c575331;/home/runner/work/backoffice/backoffice/src/app/ui/forms/saml-source-form.component.ts */\n:host {\n  max-width: 100%;\n}\n.error-message {\n  color: var(--error);\n  font-size: 0.75em;\n  font-weight: 400;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=saml-source-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SamlSourceFormComponent, { className: "SamlSourceFormComponent", filePath: "src/app/ui/forms/saml-source-form.component.ts", lineNumber: 414 });
})();

// src/app/overlays/auth-source-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AuthSourceModalComponent_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.name, " ");
  }
}
function AuthSourceModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-select", 4);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AuthSourceModalComponent_Conditional_2_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.active_type, $event) || (ctx_r1.active_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AuthSourceModalComponent_Conditional_2_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setType($event));
    });
    \u0275\u0275repeaterCreate(7, AuthSourceModalComponent_Conditional_2_For_8_Template, 2, 2, "mat-option", 5, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.AUTHENTICATION_SOURCE_TYPE"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_type);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.AUTHENTICATION_SOURCE_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.source_types);
  }
}
function AuthSourceModalComponent_Conditional_3_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "saml-source-form", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form());
  }
}
function AuthSourceModalComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ldap-source-form", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form());
  }
}
function AuthSourceModalComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "oauth-source-form", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.form());
  }
}
function AuthSourceModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuthSourceModalComponent_Conditional_3_Case_0_Template, 1, 1, "saml-source-form", 6)(1, AuthSourceModalComponent_Conditional_3_Case_1_Template, 1, 1, "ldap-source-form", 6)(2, AuthSourceModalComponent_Conditional_3_Case_2_Template, 1, 1, "oauth-source-form", 6);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.type()) === "saml" ? 0 : tmp_1_0 === "ldap" ? 1 : 2);
  }
}
var AuthSourceModalComponent = class _AuthSourceModalComponent extends AsyncHandler {
  _dialog = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  /** List of available authentication sources */
  source_types = [
    { id: "oauth", name: "OAuth" },
    { id: "ldap", name: "LDAP" },
    { id: "saml", name: "SAML2" }
  ];
  /** Emitter for events on the modal */
  event = new EventEmitter();
  loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  form = signal(new FormGroup({}), ...ngDevMode ? [{ debugName: "form" }] : []);
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  active_type = signal(null, ...ngDevMode ? [{ debugName: "active_type" }] : []);
  type = computed(() => this.item() instanceof ro ? "saml" : this.item() instanceof Zs ? "ldap" : "oauth", ...ngDevMode ? [{ debugName: "type" }] : []);
  /** Whether the triggers is new or not */
  get is_new() {
    return !this._data.auth_source;
  }
  ngOnInit() {
    if (this._data.auth_source) {
      this.item.set(this._data.auth_source);
      this.active_type.set(this.type());
    }
    this.initialiseForm();
  }
  /**
   * Set the type of auth source to create
   * @param type Type of auth source
   */
  setType(type) {
    const data = { authority_id: this._data.domain.id };
    switch (type) {
      case "saml":
        this.item.set(new ro(data));
        break;
      case "ldap":
        this.item.set(new Zs(data));
        break;
      default:
        this.item.set(new to(data));
        break;
    }
    this.initialiseForm();
  }
  updateMethod(item) {
    switch (this.type()) {
      case "saml":
        return item.id ? Fc(item.id, item) : zc(item);
      case "ldap":
        return item.id ? Yu(item.id, item) : Gu(item);
    }
    return item.id ? bc(item.id, item) : vc(item);
  }
  /**
   * Create item if new or update if exsiting
   */
  save() {
    this.form().markAllAsTouched();
    if (!this.form().valid) {
      return;
    }
    this.loading.set("Saving authentication source...");
    const method = lastValueFrom(this.updateMethod(__spreadValues(__spreadValues({}, this.item().toJSON()), this.form().value)));
    method.then((item) => {
      this.event.emit({ reason: "done", metadata: { source: item } });
      notifySuccess(i18n("DOMAINS.AUTHENTICATION_SAVE_SUCCESS"));
      this._dialog.close();
    }, (err) => {
      this.loading.set("");
      notifyError(i18n("DOMAINS.AUTHENTICATION_SAVE_ERROR", {
        error: JSON.stringify(err.response || err.message || err)
      }));
    });
  }
  /**
   * Generate the form fields for the active item type
   */
  initialiseForm() {
    if (!this.item())
      return;
    const item = this.item();
    if (item instanceof to) {
      this.form.set(generateOAuthSourceForm(item));
    } else if (item instanceof ro) {
      this.form.set(generateSAMLSourceForm(item));
    } else if (item instanceof Zs) {
      this.form.set(generateLDAPSourceForm(item));
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AuthSourceModalComponent_BaseFactory;
    return function AuthSourceModalComponent_Factory(__ngFactoryType__) {
      return (\u0275AuthSourceModalComponent_BaseFactory || (\u0275AuthSourceModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AuthSourceModalComponent)))(__ngFactoryType__ || _AuthSourceModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthSourceModalComponent, selectors: [["app-auth-source-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [[3, "save", "heading", "loading"], [1, "flex", "flex-col"], ["for", "type"], ["appearance", "outline"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "form"]], template: function AuthSourceModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function AuthSourceModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(2, AuthSourceModalComponent_Conditional_2_Template, 9, 7, "div", 1);
      \u0275\u0275conditionalCreate(3, AuthSourceModalComponent_Conditional_3_Template, 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 4, ctx.is_new ? "DOMAINS.AUTHENTICATION_NEW" : "DOMAINS.AUTHENTICATION_EDIT"))("loading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.is_new ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item() ? 3 : -1);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    SamlSourceFormComponent,
    LdapSourceFormComponent,
    OauthSourceFormComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthSourceModalComponent, [{
    type: Component,
    args: [{ selector: "app-auth-source-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new
                    ? 'DOMAINS.AUTHENTICATION_NEW'
                    : 'DOMAINS.AUTHENTICATION_EDIT'
                ) | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            @if (is_new) {
                <div class="flex flex-col">
                    <label for="type"
                        >{{ 'DOMAINS.AUTHENTICATION_SOURCE_TYPE' | translate }}:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="type"
                            [(ngModel)]="active_type"
                            (ngModelChange)="setType($event)"
                            [placeholder]="
                                'DOMAINS.AUTHENTICATION_SOURCE_SELECT'
                                    | translate
                            "
                        >
                            @for (type of source_types; track type.id) {
                                <mat-option [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            @if (item()) {
                @switch (type()) {
                    @case ('saml') {
                        <saml-source-form [form]="form()" />
                    }
                    @case ('ldap') {
                        <ldap-source-form [form]="form()" />
                    }
                    @default {
                        <oauth-source-form [form]="form()" />
                    }
                }
            }
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      MatFormFieldModule,
      MatSelectModule,
      TranslatePipe,
      FormsModule,
      SamlSourceFormComponent,
      LdapSourceFormComponent,
      OauthSourceFormComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthSourceModalComponent, { className: "AuthSourceModalComponent", filePath: "src/app/overlays/auth-source-modal.component.ts", lineNumber: 115 });
})();

// src/app/domains/domain-state.service.ts
var DomainStateService = class _DomainStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  _changed = new BehaviorSubject(0);
  item = this._state.item;
  loading = this._loading.asObservable();
  users = combineLatest([
    this._changed,
    this.item
  ]).pipe(filter(([, item]) => item instanceof Js), switchMap(([, item]) => xa({ authority_id: item.id, limit: 1e3 })), map((response) => response.data.sort((a, b) => a.name.localeCompare(b.name))), catchError(() => []), shareReplay(1));
  auth_sources = combineLatest([this._changed, this.item]).pipe(filter(([, item]) => item instanceof Js), switchMap(([, item]) => {
    const q = { authority_id: item.id };
    return combineLatest([
      Nc(q).pipe(map((response) => response.data)),
      yc(q).pipe(map((response) => response.data)),
      Vu(q).pipe(map((response) => response.data))
    ]);
  }), map((sources) => {
    let list = [];
    sources.forEach((array) => list = list.concat(array));
    return list;
  }), catchError(() => []), shareReplay(1));
  applications = combineLatest([this._changed, this.item]).pipe(filter(([, item]) => item instanceof Js), switchMap(([, item]) => cu({ authority_id: item.id })), map((response) => response.data.sort((a, b) => a.name.localeCompare(b.name))), catchError(() => []), shareReplay(1));
  counts = combineLatest([this._changed, this.item]).pipe(filter(([, item]) => item instanceof Js), switchMap(async ([, item]) => {
    const q = { authority_id: item?.id };
    const details = await Promise.all([
      lastValueFrom(cu(q).pipe(map((response) => response.total))),
      lastValueFrom(combineLatest([
        Nc(q),
        yc(q),
        Vu(q)
      ]).pipe(map(([saml, oauth, ldap]) => saml.total + oauth.total + ldap.total))),
      lastValueFrom(xa(q).pipe(map((response) => response.total)))
    ]);
    const [applications, auth_sources, users] = details;
    return {
      applications,
      auth_sources: auth_sources || 0,
      users
    };
  }), shareReplay(1));
  get active_item() {
    return this._state.active_item;
  }
  async update(domain) {
    const item = await wu(domain.id, domain).toPromise();
    this._state.replaceItem(item);
  }
  async performAzureIntegration() {
    const item = this.active_item;
    if (!(item instanceof Js))
      return;
    const result = await lastValueFrom(N(`/api/engine/v2/admin_consent/${encodeURIComponent(item.id)}`)).catch((error) => {
      notifyError(i18n("DOMAINS.AZURE_INTEGRATION_ERROR", { error }));
      throw error;
    });
    if (result.url) {
      window.open(result.url, "_blank", "noopener noreferrer");
    }
  }
  /**
   * Open the modal to create a new system
   */
  async editApplication(item) {
    item = item || new Ls({ owner_id: this.active_item.id });
    const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
      data: {
        item,
        name: "DOMAINS.APPLICATION",
        save: (i) => {
          delete i.client_id;
          return i.id ? lu(i.id, i) : hu(i);
        }
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (!details)
      return;
    this._changed.next((/* @__PURE__ */ new Date()).valueOf());
  }
  /**
   * Remove application from domain
   * @param item Application to delete
   */
  async deleteApplication(item) {
    const details = await openConfirmModal({
      title: `Delete application`,
      content: `<p>Are you sure you want delete the application ${item.name}?</p><p>Configuration will be <strong>immediately</strong> updated</p>`,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details)
      return;
    details.loading("Deleting domain application...");
    const err = await fu(item.id).toPromise().catch((_) => _);
    details.close();
    if (err)
      return notifyError(`Error removing domain application. Error: ${err.responseText || err.message || err}`);
    notifySuccess("Successfully removed domain application.");
    this._changed.next((/* @__PURE__ */ new Date()).valueOf());
  }
  /**
   * Open the modal to create a new system
   */
  async editAuthSource(item) {
    const ref = this._dialog.open(AuthSourceModalComponent, {
      data: {
        auth_source: item,
        domain: this.active_item
      }
    });
    const details = await Promise.race([
      ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
      ref.afterClosed().toPromise()
    ]);
    if (!details)
      return;
    this._changed.next((/* @__PURE__ */ new Date()).valueOf());
  }
  /**
   * Remove application from domain
   * @param item Application to delete
   */
  async deleteAuthSource(item) {
    const details = await openConfirmModal({
      title: `Delete auth source`,
      content: `<p>Are you sure you want delete this auth source?</p><p>Deleting this will remove this auth source <strong>immediately</strong></p>`,
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (details.reason !== "done")
      return;
    details?.loading("Deleting domain auth source...");
    const method = item instanceof ro ? Hc : item instanceof to ? Sc : Ju;
    const err = await lastValueFrom(method(item.id)).catch((_) => _);
    details.close();
    if (err)
      return notifyError(`Error removing domain auth source. Error: ${err.responseText || err.message || err}`);
    notifySuccess("Successfully removed domain auth source.");
    this._changed.next((/* @__PURE__ */ new Date()).valueOf());
  }
  static \u0275fac = function DomainStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DomainStateService, factory: _DomainStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DomainStateService
};
//# sourceMappingURL=chunk-VIIHPAB5.js.map
