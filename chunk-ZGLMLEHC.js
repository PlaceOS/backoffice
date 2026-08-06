import {
  ObjectListFieldComponent
} from "./chunk-ORJAI5QA.js";
import {
  ActiveItemService,
  isValidUrl
} from "./chunk-OGXRMRZZ.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-4X4PTSQA.js";
import {
  HotkeysService
} from "./chunk-IYBVLYEV.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-KJQGK2OM.js";
import {
  FormField,
  form,
  required,
  submit,
  validate
} from "./chunk-SCU2ZHTT.js";
import {
  openConfirmModal
} from "./chunk-UVXXRHB2.js";
import {
  FullscreenModalShellComponent
} from "./chunk-V64DN2T3.js";
import {
  SettingsToggleComponent
} from "./chunk-RG3TS5UW.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-NOZWPHCR.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-VH6NLWUW.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-RAEUAH5O.js";
import {
  h
} from "./chunk-SCGNW5LY.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-AQMMFGML.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  waitForEvent
} from "./chunk-Y4WYMPD6.js";
import {
  AsyncHandler
} from "./chunk-OU4ZSGGA.js";
import {
  MatOption
} from "./chunk-RHXWHY3G.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ZCVCPEH7.js";
import {
  IconComponent
} from "./chunk-2OXMVWQR.js";
import {
  COMMA,
  ENTER,
  SPACE
} from "./chunk-M7TMFMYW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-VARF64W7.js";
import {
  Bc,
  Bi,
  Ci,
  Component,
  Du,
  EventEmitter,
  Gc,
  Ia,
  Injector,
  Input,
  Ji,
  Js,
  Ki,
  Lc,
  Nu,
  Ou,
  Output,
  Service,
  To,
  Wc,
  ac,
  cc,
  co,
  computed,
  d,
  effect,
  hc,
  inject,
  input,
  io,
  oc,
  oo,
  resource,
  setClassMetadata,
  signal,
  uo,
  wu,
  zi,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineService,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/domains/auth-sources.utilities.ts
function generateOAuthSourceForm(auth_source) {
  return {
    name: auth_source?.name || "",
    client_id: auth_source?.client_id || "",
    client_secret: auth_source?.client_secret || "",
    info_mappings: auth_source?.info_mappings || {},
    authorize_params: auth_source?.authorize_params || {},
    ensure_matching: auth_source?.ensure_matching || {},
    site: auth_source?.site || "",
    authorize_url: auth_source?.authorize_url || "",
    token_method: auth_source?.token_method || "post",
    auth_scheme: auth_source?.auth_scheme || "request_body",
    token_url: auth_source?.token_url || "",
    scope: auth_source?.scope || "",
    raw_info_url: auth_source?.raw_info_url || ""
  };
}
function applyOAuthSourceFormSchema(path) {
  required(path.name);
}
function generateSAMLSourceForm(auth_source) {
  if (!auth_source) {
    throw Error("No OAuth source passed to generate form fields");
  }
  return {
    name: auth_source.name || "",
    issuer: auth_source.issuer || "",
    idp_sso_target_url: auth_source.idp_sso_target_url || "",
    name_identifier_format: auth_source.name_identifier_format || "",
    assertion_consumer_service_url: auth_source.assertion_consumer_service_url || "",
    request_attributes: [...auth_source.request_attributes || []],
    idp_sso_target_url_runtime_params: auth_source.idp_sso_target_url_runtime_params || {},
    uid_attribute: auth_source.uid_attribute || "",
    idp_cert: auth_source.idp_cert || "",
    idp_cert_fingerprint: auth_source.idp_cert_fingerprint || "",
    attribute_service_name: auth_source.attribute_service_name || "",
    attribute_statements: auth_source.attribute_statements || {},
    idp_slo_target_url: auth_source.idp_slo_target_url || "",
    slo_default_relay_state: auth_source.slo_default_relay_state || ""
  };
}
function applySAMLSourceFormSchema(path) {
  required(path.name);
  required(path.issuer);
  required(path.idp_sso_target_url);
  required(path.assertion_consumer_service_url);
}
function generateLDAPSourceForm(auth_source) {
  if (!auth_source) {
    throw Error("No OAuth source passed to generate form fields");
  }
  return {
    name: auth_source.name || "",
    host: auth_source.host || "",
    port: auth_source.port || 0,
    auth_method: auth_source.auth_method || "plain",
    uid: auth_source.uid || "",
    base: auth_source.base || "",
    bind_dn: auth_source.bind_dn || "",
    password: auth_source.password || "",
    filter: auth_source.filter || ""
  };
}
function applyLDAPSourceFormSchema(path) {
  required(path.name);
  required(path.host);
  required(path.base);
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_1_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().name().invalid() && ctx_r0.form().name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "COMMON.FIELD_NAME"))("formField", ctx_r0.form().name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().name().invalid() ? 10 : -1);
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
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_3_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().host().invalid() && ctx_r0.form().host().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.LDAP_HOST"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "DOMAINS.LDAP_HOST"))("formField", ctx_r0.form().host);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().host().invalid() ? 10 : -1);
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.LDAP_PORT"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.LDAP_PORT"))("formField", ctx_r0.form().port);
    \u0275\u0275control();
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.LDAP_USER_ID"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.LDAP_USER_ID"))("formField", ctx_r0.form().uid);
    \u0275\u0275control();
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_7_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "mat-select", 12);
    \u0275\u0275repeaterCreate(6, LdapSourceFormComponent_Conditional_0_Conditional_7_For_7_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "DOMAINS.LDAP_AUTH_METHOD"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form().auth_method);
    \u0275\u0275control();
    \u0275\u0275advance();
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
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 14);
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_9_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().base().invalid() && ctx_r0.form().base().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.LDAP_BASE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "DOMAINS.LDAP_BASE"))("formField", ctx_r0.form().base);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().base().invalid() ? 10 : -1);
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.LDAP_BIND_DN"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.LDAP_BIND_DN"))("formField", ctx_r0.form().bind_dn);
    \u0275\u0275control();
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "COMMON.PASSWORD"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.PASSWORD"))("formField", ctx_r0.form().password);
    \u0275\u0275control();
  }
}
function LdapSourceFormComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.LDAP_FILTER"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.LDAP_FILTER"))("formField", ctx_r0.form().filter);
    \u0275\u0275control();
  }
}
function LdapSourceFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, LdapSourceFormComponent_Conditional_0_Conditional_1_Template, 11, 10, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, LdapSourceFormComponent_Conditional_0_Conditional_3_Template, 11, 10, "div", 1);
    \u0275\u0275conditionalCreate(4, LdapSourceFormComponent_Conditional_0_Conditional_4_Template, 7, 7, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275conditionalCreate(6, LdapSourceFormComponent_Conditional_0_Conditional_6_Template, 7, 7, "div", 1);
    \u0275\u0275conditionalCreate(7, LdapSourceFormComponent_Conditional_0_Conditional_7_Template, 8, 4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275conditionalCreate(9, LdapSourceFormComponent_Conditional_0_Conditional_9_Template, 11, 10, "div", 1);
    \u0275\u0275conditionalCreate(10, LdapSourceFormComponent_Conditional_0_Conditional_10_Template, 7, 7, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275conditionalCreate(12, LdapSourceFormComponent_Conditional_0_Conditional_12_Template, 7, 7, "div", 1);
    \u0275\u0275conditionalCreate(13, LdapSourceFormComponent_Conditional_0_Conditional_13_Template, 7, 7, "div", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().name ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().host ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().port ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().uid ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().auth_method ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().base ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().bind_dn ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().password ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().filter ? 13 : -1);
  }
}
var LdapSourceFormComponent = class _LdapSourceFormComponent {
  /** Signal form fields used for editing the LDAP source */
  form = input(
    void 0,
    ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of available authentication schemes */
  auth_methods = [
    { id: "plain", name: "Plain" },
    { id: "ssl", name: "SSL" },
    { id: "tls", name: "TLS" }
  ];
  static \u0275fac = function LdapSourceFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LdapSourceFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LdapSourceFormComponent, selectors: [["ldap-source-form"]], inputs: { form: [1, "form"] }, decls: 1, vars: 1, consts: [["ldap-source", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], [1, "field", "type"], ["for", "auth-source-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "host"], ["for", "port"], ["matInput", "", "type", "number", 3, "placeholder", "formField"], ["for", "uid"], ["for", "auth-method"], [3, "formField"], [3, "value"], ["for", "base"], ["for", "bind-dn"], ["for", "password"], ["for", "filter"]], template: function LdapSourceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LdapSourceFormComponent_Conditional_0_Template, 14, 9, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    FormField,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=ldap-source-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LdapSourceFormComponent, [{
    type: Component,
    args: [{ selector: "ldap-source-form", template: `
        @if (form()) {
            <form ldap-source class="flex flex-col" >
                @if (form().name) {
                    <div class="field">
                        <label
                            for="auth-source-name"
                            [class.error]="
                                    form().name().invalid() &&
                                    form().name().touched()
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form().name"
                            />
                            @if (form().name().invalid()) {
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
                    @if (form().host) {
                        <div class="field">
                            <label
                                for="host"
                                [class.error]="
                                    form().host().invalid() &&
                                    form().host().touched()
                                "
                            >
                                {{ 'DOMAINS.LDAP_HOST' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_HOST' | translate
                                    "
                                    [formField]="form().host"
                                />
                                @if (form().host().invalid()) {
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
                    @if (form().port) {
                        <div class="field">
                            <label for="port"
                                >{{ 'DOMAINS.LDAP_PORT' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    type="number"
                                    [placeholder]="
                                        'DOMAINS.LDAP_PORT' | translate
                                    "
                                    [formField]="form().port"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().uid) {
                        <div class="field">
                            <label for="uid"
                                >{{
                                    'DOMAINS.LDAP_USER_ID' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_USER_ID' | translate
                                    "
                                    [formField]="form().uid"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().auth_method) {
                        <div class="field type">
                            <label for="auth-method">
                                {{ 'DOMAINS.LDAP_AUTH_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form().auth_method"
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
                    @if (form().base) {
                        <div class="field">
                            <label
                                for="base"
                                [class.error]="
                                    form().base().invalid() &&
                                    form().base().touched()
                                "
                            >
                                {{ 'DOMAINS.LDAP_BASE' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_BASE' | translate
                                    "
                                    [formField]="form().base"
                                />
                                @if (form().base().invalid()) {
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
                    @if (form().bind_dn) {
                        <div class="field">
                            <label for="bind-dn"
                                >{{
                                    'DOMAINS.LDAP_BIND_DN' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_BIND_DN' | translate
                                    "
                                    [formField]="form().bind_dn"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().password) {
                        <div class="field">
                            <label for="password"
                                >{{ 'COMMON.PASSWORD' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
                                    [formField]="form().password"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().filter) {
                        <div class="field">
                            <label for="filter"
                                >{{ 'DOMAINS.LDAP_FILTER' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.LDAP_FILTER' | translate
                                    "
                                    [formField]="form().filter"
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
      FormField,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;a7de8c3ecbcd89c3f1331152a37c7d042790352749363904d1c463003bc6b7d8;/home/runner/work/backoffice/backoffice/src/app/ui/forms/ldap-source-form.component.ts */\n:host {\n  max-width: 100%;\n}\n/*# sourceMappingURL=ldap-source-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LdapSourceFormComponent, { className: "LdapSourceFormComponent", filePath: "src/app/ui/forms/ldap-source-form.component.ts", lineNumber: 234 });
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, OauthSourceFormComponent_Conditional_0_Conditional_1_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().name().invalid() && ctx_r0.form().name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "COMMON.FIELD_NAME"))("formField", ctx_r0.form().name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().name().invalid() ? 10 : -1);
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.CLIENT_ID"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.CLIENT_ID"))("formField", ctx_r0.form().client_id);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.CLIENT_SECRET"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.CLIENT_SECRET"))("formField", ctx_r0.form().client_secret);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.OAUTH_SITE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.OAUTH_SITE_PLACEHOLDER"))("formField", ctx_r0.form().site);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.OAUTH_SCOPES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.OAUTH_SCOPES"))("formField", ctx_r0.form().scope);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6)(5, "mat-select", 13);
    \u0275\u0275repeaterCreate(6, OauthSourceFormComponent_Conditional_0_Conditional_9_For_7_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "DOMAINS.OAUTH_TOKEN_METHOD"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form().token_method);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.token_methods);
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 15);
    \u0275\u0275text(2, " Authentication Scheme: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 6)(4, "mat-select", 13);
    \u0275\u0275repeaterCreate(5, OauthSourceFormComponent_Conditional_0_Conditional_10_For_6_Template, 3, 4, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r0.form().auth_scheme);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.auth_schemes);
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.OAUTH_TOKEN_URL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.OAUTH_TOKEN_URL"))("formField", ctx_r0.form().token_url);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.OAUTH_AUTHORISE_URL"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.OAUTH_AUTHORISE_URL"))("formField", ctx_r0.form().authorize_url);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.OAUTH_PROFILE_URL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.OAUTH_PROFILE_URL"))("formField", ctx_r0.form().raw_info_url);
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 19);
    \u0275\u0275twoWayListener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_15_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.info_mapping_list, $event) || (ctx_r0.info_mapping_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_15_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateMappings($event, "info_mappings"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.OAUTH_INFO_MAPPINGS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.info_mapping_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("fields", \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 19);
    \u0275\u0275twoWayListener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_16_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.auth_params_list, $event) || (ctx_r0.auth_params_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_16_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateMappings($event, "authorize_params", false, ["Parameter", "Value"]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.OAUTH_AUTHORISE_PARAMS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.auth_params_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("fields", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 19);
    \u0275\u0275twoWayListener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_17_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.ensure_matching_list, $event) || (ctx_r0.ensure_matching_list = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function OauthSourceFormComponent_Conditional_0_Conditional_17_Template_object_list_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateMappings($event, "ensure_matching", true, ["Parameter", "Value"]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.OAUTH_ENSURE_MATCHING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.ensure_matching_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0))("fields", \u0275\u0275pureFunction0(7, _c2));
    \u0275\u0275control();
  }
}
function OauthSourceFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275conditionalCreate(1, OauthSourceFormComponent_Conditional_0_Conditional_1_Template, 11, 10, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275conditionalCreate(3, OauthSourceFormComponent_Conditional_0_Conditional_3_Template, 7, 7, "div", 1);
    \u0275\u0275conditionalCreate(4, OauthSourceFormComponent_Conditional_0_Conditional_4_Template, 7, 7, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275conditionalCreate(6, OauthSourceFormComponent_Conditional_0_Conditional_6_Template, 7, 7, "div", 1);
    \u0275\u0275conditionalCreate(7, OauthSourceFormComponent_Conditional_0_Conditional_7_Template, 7, 7, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275conditionalCreate(9, OauthSourceFormComponent_Conditional_0_Conditional_9_Template, 8, 4, "div", 3);
    \u0275\u0275conditionalCreate(10, OauthSourceFormComponent_Conditional_0_Conditional_10_Template, 7, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, OauthSourceFormComponent_Conditional_0_Conditional_11_Template, 7, 7, "div", 1);
    \u0275\u0275elementStart(12, "div", 2);
    \u0275\u0275conditionalCreate(13, OauthSourceFormComponent_Conditional_0_Conditional_13_Template, 7, 7, "div", 1);
    \u0275\u0275conditionalCreate(14, OauthSourceFormComponent_Conditional_0_Conditional_14_Template, 7, 7, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, OauthSourceFormComponent_Conditional_0_Conditional_15_Template, 5, 8, "div", 4);
    \u0275\u0275conditionalCreate(16, OauthSourceFormComponent_Conditional_0_Conditional_16_Template, 5, 8, "div", 4);
    \u0275\u0275conditionalCreate(17, OauthSourceFormComponent_Conditional_0_Conditional_17_Template, 5, 8, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().name ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().client_id ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().client_secret ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().site ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().scope ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().token_method ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().auth_scheme ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().token_url ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().authorize_url ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().raw_info_url ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().info_mappings ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().authorize_params ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().ensure_matching ? 17 : -1);
  }
}
var OauthSourceFormComponent = class _OauthSourceFormComponent extends AsyncHandler {
  /** Signal form fields used for editing the OAuth source */
  form = input(
    void 0,
    ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formModel = input(
    void 0,
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  info_mapping_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "info_mapping_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of authorize params pairs */
  auth_params_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "auth_params_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of ensure_matching pairs */
  ensure_matching_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "ensure_matching_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnChanges(changes) {
    const form2 = this.form();
    if (changes.form && form2) {
      const model = this.formModel()();
      if (form2.info_mappings) {
        const map = model.info_mappings || {};
        this.info_mapping_list.set(Object.keys(map).map((key) => {
          return { PlaceOS: key, Remote: map[key] };
        }));
      }
      if (form2.authorize_params) {
        const map = model.authorize_params || {};
        this.auth_params_list.set(Object.keys(map).map((key) => {
          return { Parameter: key, Value: map[key] };
        }));
      }
      if (form2.ensure_matching) {
        const map = model.ensure_matching || {};
        this.ensure_matching_list.set(Object.keys(map).map((key) => {
          const value = map[key];
          return {
            Parameter: key,
            Value: Array.isArray(value) ? value.join(",") : value
          };
        }));
      }
    }
  }
  updateMappings(mappings, key, split = false, fields = ["PlaceOS", "Remote"]) {
    const map = {};
    for (const pair of mappings) {
      if (pair[fields[0]] && pair[fields[1]]) {
        map[pair[fields[0]]] = !split ? pair[fields[1]] : (pair[fields[1]] || "").split(",");
      }
    }
    this.formModel().update((model) => __spreadProps(__spreadValues({}, model), { [key]: map }));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OauthSourceFormComponent_BaseFactory;
    return function OauthSourceFormComponent_Factory(__ngFactoryType__) {
      return (\u0275OauthSourceFormComponent_BaseFactory || (\u0275OauthSourceFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_OauthSourceFormComponent)))(__ngFactoryType__ || _OauthSourceFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OauthSourceFormComponent, selectors: [["oauth-source-form"]], inputs: { form: [1, "form"], formModel: [1, "formModel"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["oauth-source", "", 1, "flex", "flex-col"], [1, "field"], [1, "fieldset"], [1, "field", "type"], [1, "field", "mb-4"], ["for", "auth-source-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "client-id"], ["for", "client-secret"], ["for", "site"], ["for", "scope"], ["for", "token-method"], [3, "formField"], [3, "value"], ["for", "auth-scheme"], ["for", "token-url"], ["for", "authorize-url"], ["for", "info-url"], [3, "ngModelChange", "ngModel", "ngModelOptions", "fields"]], template: function OauthSourceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, OauthSourceFormComponent_Conditional_0_Template, 18, 13, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    ObjectListFieldComponent,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    FormField,
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=oauth-source-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OauthSourceFormComponent, [{
    type: Component,
    args: [{ selector: "oauth-source-form", template: `
        @if (form()) {
            <form oauth-source class="flex flex-col">
                @if (form().name) {
                    <div class="field">
                        <label
                            for="auth-source-name"
                            [class.error]="
                                form().name().invalid() &&
                                form().name().touched()
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                [formField]="form().name"
                            />
                            @if (form().name().invalid()) {
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
                    @if (form().client_id) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.CLIENT_ID' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.CLIENT_ID' | translate
                                    "
                                    [formField]="form().client_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().client_secret) {
                        <div class="field">
                            <label for="client-secret"
                                >{{ 'DOMAINS.CLIENT_SECRET' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.CLIENT_SECRET' | translate
                                    "
                                    [formField]="form().client_secret"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().site) {
                        <div class="field">
                            <label for="site"
                                >{{ 'DOMAINS.OAUTH_SITE' | translate }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SITE_PLACEHOLDER'
                                            | translate
                                    "
                                    [formField]="form().site"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().scope) {
                        <div class="field">
                            <label for="scope"
                                >{{
                                    'DOMAINS.OAUTH_SCOPES' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_SCOPES' | translate
                                    "
                                    [formField]="form().scope"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().token_method) {
                        <div class="field type">
                            <label for="token-method"
                                >{{ 'DOMAINS.OAUTH_TOKEN_METHOD' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select [formField]="form().token_method">
                                    @for (type of token_methods; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().auth_scheme) {
                        <div class="field type">
                            <label for="auth-scheme">
                                Authentication Scheme:
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select [formField]="form().auth_scheme">
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
                @if (form().token_url) {
                    <div class="field">
                        <label for="token-url"
                            >{{ 'DOMAINS.OAUTH_TOKEN_URL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'DOMAINS.OAUTH_TOKEN_URL' | translate
                                "
                                [formField]="form().token_url"
                            />
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().authorize_url) {
                        <div class="field">
                            <label for="authorize-url"
                                >{{
                                    'DOMAINS.OAUTH_AUTHORISE_URL' | translate
                                }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_AUTHORISE_URL'
                                            | translate
                                    "
                                    [formField]="form().authorize_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().raw_info_url) {
                        <div class="field">
                            <label for="info-url"
                                >{{
                                    'DOMAINS.OAUTH_PROFILE_URL' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.OAUTH_PROFILE_URL' | translate
                                    "
                                    [formField]="form().raw_info_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().info_mappings) {
                    <div class="field mb-4">
                        <label for="client-secret"
                            >{{
                                'DOMAINS.OAUTH_INFO_MAPPINGS' | translate
                            }}:</label
                        >
                        <object-list-field
                            [(ngModel)]="info_mapping_list"
                            (ngModelChange)="
                                updateMappings($event, 'info_mappings')
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['PlaceOS', 'Remote']"
                        />
                    </div>
                }
                @if (form().authorize_params) {
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
                                    'authorize_params',
                                    false,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        />
                    </div>
                }
                @if (form().ensure_matching) {
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
                                    'ensure_matching',
                                    true,
                                    ['Parameter', 'Value']
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [fields]="['Parameter', 'Value']"
                        />
                    </div>
                }
            </form>
        }
    `, imports: [
      ObjectListFieldComponent,
      FormsModule,
      TranslatePipe,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
    ], styles: ["/* angular:styles/component:css;a7de8c3ecbcd89c3f1331152a37c7d042790352749363904d1c463003bc6b7d8;/home/runner/work/backoffice/backoffice/src/app/ui/forms/oauth-source-form.component.ts */\n:host {\n  max-width: 100%;\n}\n/*# sourceMappingURL=oauth-source-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], formModel: [{ type: Input, args: [{ isSignal: true, alias: "formModel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OauthSourceFormComponent, { className: "OauthSourceFormComponent", filePath: "src/app/ui/forms/oauth-source-form.component.ts", lineNumber: 300 });
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_2_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().name().invalid() && ctx_r0.form().name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "COMMON.FIELD_NAME"))("formField", ctx_r0.form().name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().name().invalid() ? 10 : -1);
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
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_3_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().issuer().invalid() && ctx_r0.form().issuer().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.SAML_ISSUER"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "DOMAINS.SAML_ISSUER"))("formField", ctx_r0.form().issuer);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().issuer().invalid() ? 10 : -1);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 8);
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_5_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().idp_sso_target_url().invalid() && ctx_r0.form().idp_sso_target_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.SAML_IDP_TARGET_URL"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "DOMAINS.SAML_IDP_TARGET_URL"))("formField", ctx_r0.form().idp_sso_target_url);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().idp_sso_target_url().invalid() ? 10 : -1);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, SamlSourceFormComponent_Conditional_0_Conditional_6_Conditional_7_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().name_identifier_format().invalid() && ctx_r0.form().name_identifier_format().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.SAML_NAME_ID_FORMAT"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "DOMAINS.SAML_NAME_ID_FORMAT"))("formField", ctx_r0.form().name_identifier_format);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().name_identifier_format().invalid() ? 7 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
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
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "object-list-field", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, SamlSourceFormComponent_Conditional_0_Conditional_7_Conditional_5_Template, 3, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().request_attributes().invalid() && ctx_r0.form().request_attributes().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.SAML_REQUEST_ATTRIBUTES"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form().request_attributes)("fields", \u0275\u0275pureFunction0(8, _c02));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().request_attributes().invalid() && ctx_r0.form().request_attributes().touched() ? 5 : -1);
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
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 13);
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_9_Conditional_10_Template, 3, 3, "mat-error");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form().assertion_consumer_service_url().invalid() && ctx_r0.form().assertion_consumer_service_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.SAML_ASSERTION_URL"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 8, "DOMAINS.SAML_ASSERTION_URL"))("formField", ctx_r0.form().assertion_consumer_service_url);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().assertion_consumer_service_url().invalid() ? 10 : -1);
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.SAML_CERT_FINGERPRINT"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.SAML_CERT_FINGERPRINT"))("formField", ctx_r0.form().idp_cert_fingerprint);
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "textarea", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.SAML_CERT_FULL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.SAML_CERT_FULL"))("formField", ctx_r0.form().idp_cert);
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.SAML_UID_ATTRIBUTE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.SAML_UID_ATTRIBUTE"))("formField", ctx_r0.form().uid_attribute);
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME"))("formField", ctx_r0.form().attribute_service_name);
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 19);
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
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.SAML_ATTRIBUTE_STATEMENTS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.attribute_statement_mappings);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c12))("fields", \u0275\u0275pureFunction0(7, _c22));
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "object-list-field", 19);
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
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "DOMAINS.SAML_IDP_SSO_RUNTIME_PARAMS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.runtime_param_list);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c12))("fields", \u0275\u0275pureFunction0(7, _c3));
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.SAML_IDP_SLO_TARGET_URL"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.SAML_IDP_SLO_TARGET_URL"))("formField", ctx_r0.form().idp_slo_target_url);
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5);
    \u0275\u0275element(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE"))("formField", ctx_r0.form().slo_default_relay_state);
    \u0275\u0275control();
  }
}
function SamlSourceFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, SamlSourceFormComponent_Conditional_0_Conditional_2_Template, 11, 10, "div", 2);
    \u0275\u0275conditionalCreate(3, SamlSourceFormComponent_Conditional_0_Conditional_3_Template, 11, 10, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1);
    \u0275\u0275conditionalCreate(5, SamlSourceFormComponent_Conditional_0_Conditional_5_Template, 11, 10, "div", 2);
    \u0275\u0275conditionalCreate(6, SamlSourceFormComponent_Conditional_0_Conditional_6_Template, 8, 10, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SamlSourceFormComponent_Conditional_0_Conditional_7_Template, 6, 9, "div", 3);
    \u0275\u0275elementStart(8, "div", 1);
    \u0275\u0275conditionalCreate(9, SamlSourceFormComponent_Conditional_0_Conditional_9_Template, 11, 10, "div", 2);
    \u0275\u0275conditionalCreate(10, SamlSourceFormComponent_Conditional_0_Conditional_10_Template, 7, 7, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, SamlSourceFormComponent_Conditional_0_Conditional_11_Template, 7, 7, "div", 2);
    \u0275\u0275elementStart(12, "div", 1);
    \u0275\u0275conditionalCreate(13, SamlSourceFormComponent_Conditional_0_Conditional_13_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(14, SamlSourceFormComponent_Conditional_0_Conditional_14_Template, 7, 7, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, SamlSourceFormComponent_Conditional_0_Conditional_15_Template, 5, 8, "div", 3);
    \u0275\u0275conditionalCreate(16, SamlSourceFormComponent_Conditional_0_Conditional_16_Template, 5, 8, "div", 3);
    \u0275\u0275elementStart(17, "div", 1);
    \u0275\u0275conditionalCreate(18, SamlSourceFormComponent_Conditional_0_Conditional_18_Template, 7, 7, "div", 2);
    \u0275\u0275conditionalCreate(19, SamlSourceFormComponent_Conditional_0_Conditional_19_Template, 7, 7, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().issuer ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().idp_sso_target_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().name_identifier_format ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().request_attributes ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().assertion_consumer_service_url ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().idp_cert_fingerprint ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().idp_cert ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().uid_attribute ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().attribute_service_name ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().attribute_statements ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().idp_sso_target_url_runtime_params ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form().idp_slo_target_url ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form().slo_default_relay_state ? 19 : -1);
  }
}
var SamlSourceFormComponent = class _SamlSourceFormComponent extends AsyncHandler {
  /** Signal form fields used for editing the SAML source */
  form = input(
    void 0,
    ...ngDevMode ? [{ debugName: "form" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formModel = input(
    void 0,
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of attribute statement pairs */
  attribute_statement_mappings = signal(
    [],
    ...ngDevMode ? [{ debugName: "attribute_statement_mappings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of runtime param pairs */
  runtime_param_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "runtime_param_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnChanges(changes) {
    const form2 = this.form();
    if (changes.form && form2) {
      const model = this.formModel()();
      if (form2.attribute_statements) {
        const map = model.attribute_statements || {};
        this.attribute_statement_mappings.set(Object.keys(map).map((key) => {
          return { name: key, mappings: map[key].join(",") };
        }));
      }
      if (form2.idp_sso_target_url_runtime_params) {
        const map = model.idp_sso_target_url_runtime_params || {};
        this.runtime_param_list.set(Object.keys(map).map((key) => {
          return { name: key, mapping: map[key] };
        }));
      }
    }
  }
  /**
   * Update the form control value for attribute statements
   * @param mappings Mapping listing
   */
  updateAttributeStatements(mappings) {
    this.timeout("mappings", () => {
      const map = {};
      for (const pair of mappings) {
        if (pair.name && pair.mappings) {
          map[pair.name] = (pair.mappings || "").split(",");
        }
      }
      this.formModel().update((model) => __spreadProps(__spreadValues({}, model), {
        attribute_statements: map
      }));
    }, 200);
  }
  /**
   * Update the form control value for runtime parameters
   * @param mappings Mapping listing
   */
  updateRuntimeParams(mappings) {
    this.timeout("mappings", () => {
      const map = {};
      for (const pair of mappings) {
        if (pair.name && pair.mapping) {
          map[pair.name] = pair.mapping;
        }
      }
      this.formModel().update((model) => __spreadProps(__spreadValues({}, model), {
        idp_sso_target_url_runtime_params: map
      }));
    }, 200);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SamlSourceFormComponent_BaseFactory;
    return function SamlSourceFormComponent_Factory(__ngFactoryType__) {
      return (\u0275SamlSourceFormComponent_BaseFactory || (\u0275SamlSourceFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SamlSourceFormComponent)))(__ngFactoryType__ || _SamlSourceFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SamlSourceFormComponent, selectors: [["saml-source-form"]], inputs: { form: [1, "form"], formModel: [1, "formModel"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["saml-source", "", 1, "flex", "flex-col"], [1, "fieldset"], [1, "field"], [1, "field", "mb-4"], ["for", "auth-source-name"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "issuer"], ["for", "idp-target"], ["for", "name-identifier-format"], ["for", "request-attributes"], [3, "formField", "fields"], [1, "error-message"], ["for", "assertion-url"], ["for", "cert-fingerprint"], ["for", "cert"], ["for", "uid-attribute"], ["for", "attribute-service-name"], ["for", "client-secret"], [3, "ngModelChange", "ngModel", "ngModelOptions", "fields"], ["for", "slo-target"], ["for", "slo-relay"]], template: function SamlSourceFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SamlSourceFormComponent_Conditional_0_Template, 20, 14, "form", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.form() ? 0 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    FormField,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    ObjectListFieldComponent,
    MatInputModule,
    MatInput,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  max-width: 100%;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--error);\n  font-size: 0.75em;\n  font-weight: 400;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=saml-source-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SamlSourceFormComponent, [{
    type: Component,
    args: [{ selector: "saml-source-form", template: `
        @if (form()) {
            <form saml-source class="flex flex-col">
                <div class="fieldset">
                    @if (form().name) {
                        <div class="field">
                            <label
                                for="auth-source-name"
                                [class.error]="
                                    form().name().invalid() &&
                                    form().name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    [formField]="form().name"
                                />
                                @if (form().name().invalid()) {
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
                    @if (form().issuer) {
                        <div class="field">
                            <label
                                for="issuer"
                                [class.error]="
                                    form().issuer().invalid() &&
                                    form().issuer().touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_ISSUER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_ISSUER' | translate
                                    "
                                    [formField]="form().issuer"
                                />
                                @if (form().issuer().invalid()) {
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
                    @if (form().idp_sso_target_url) {
                        <div class="field">
                            <label
                                for="idp-target"
                                [class.error]="
                                    form().idp_sso_target_url().invalid() &&
                                    form().idp_sso_target_url().touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_IDP_TARGET_URL' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_IDP_TARGET_URL'
                                            | translate
                                    "
                                    [formField]="form().idp_sso_target_url"
                                />
                                @if (form().idp_sso_target_url().invalid()) {
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
                    @if (form().name_identifier_format) {
                        <div class="field">
                            <label
                                for="name-identifier-format"
                                [class.error]="
                                    form().name_identifier_format().invalid() &&
                                    form().name_identifier_format().touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_NAME_ID_FORMAT' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_NAME_ID_FORMAT'
                                            | translate
                                    "
                                    [formField]="form().name_identifier_format"
                                />
                                @if (
                                    form().name_identifier_format().invalid()
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
                @if (form().request_attributes) {
                    <div class="field mb-4">
                        <label
                            for="request-attributes"
                            [class.error]="
                                form().request_attributes().invalid() &&
                                form().request_attributes().touched()
                            "
                        >
                            {{ 'DOMAINS.SAML_REQUEST_ATTRIBUTES' | translate }}:
                        </label>
                        <object-list-field
                            [formField]="form().request_attributes"
                            [fields]="['name', 'name_format', 'friendly_name']"
                        />
                        @if (
                            form().request_attributes().invalid() &&
                            form().request_attributes().touched()
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
                    @if (form().assertion_consumer_service_url) {
                        <div class="field">
                            <label
                                for="assertion-url"
                                [class.error]="
                                    form()
                                        .assertion_consumer_service_url()
                                        .invalid() &&
                                    form()
                                        .assertion_consumer_service_url()
                                        .touched()
                                "
                            >
                                {{ 'DOMAINS.SAML_ASSERTION_URL' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_ASSERTION_URL' | translate
                                    "
                                    [formField]="
                                        form().assertion_consumer_service_url
                                    "
                                />
                                @if (
                                    form()
                                        .assertion_consumer_service_url()
                                        .invalid()
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
                    @if (form().idp_cert_fingerprint) {
                        <div class="field">
                            <label for="cert-fingerprint"
                                >{{
                                    'DOMAINS.SAML_CERT_FINGERPRINT' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_CERT_FINGERPRINT'
                                            | translate
                                    "
                                    [formField]="form().idp_cert_fingerprint"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().idp_cert) {
                    <div class="field">
                        <label for="cert"
                            >{{ 'DOMAINS.SAML_CERT_FULL' | translate }}:</label
                        >
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="
                                    'DOMAINS.SAML_CERT_FULL' | translate
                                "
                                [formField]="form().idp_cert"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().uid_attribute) {
                        <div class="field">
                            <label for="uid-attribute"
                                >{{
                                    'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DOMAINS.SAML_UID_ATTRIBUTE' | translate
                                    "
                                    [formField]="form().uid_attribute"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().attribute_service_name) {
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
                                    [placeholder]="
                                        'DOMAINS.SAML_ATTRIBUTE_SERVICE_NAME'
                                            | translate
                                    "
                                    [formField]="form().attribute_service_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().attribute_statements) {
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
                        />
                    </div>
                }
                @if (form().idp_sso_target_url_runtime_params) {
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
                        />
                    </div>
                }
                <div class="fieldset">
                    @if (form().idp_slo_target_url) {
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
                                    [placeholder]="
                                        'DOMAINS.SAML_IDP_SLO_TARGET_URL'
                                            | translate
                                    "
                                    [formField]="form().idp_slo_target_url"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().slo_default_relay_state) {
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
                                    [placeholder]="
                                        'DOMAINS.SAML_SLO_DEFAULT_RELAY_STATE'
                                            | translate
                                    "
                                    [formField]="form().slo_default_relay_state"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
            </form>
        }
    `, imports: [
      MatFormFieldModule,
      FormField,
      TranslatePipe,
      FormsModule,
      ObjectListFieldComponent,
      MatInputModule
    ], styles: ["/* angular:styles/component:css;e3fe0ac1a7aea9ff8e552aa7adff00bda309fa6271efd1012dc94f7e3c575331;/home/runner/work/backoffice/backoffice/src/app/ui/forms/saml-source-form.component.ts */\n:host {\n  max-width: 100%;\n}\n.error-message {\n  color: var(--error);\n  font-size: 0.75em;\n  font-weight: 400;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=saml-source-form.component.css.map */\n"] }]
  }], null, { form: [{ type: Input, args: [{ isSignal: true, alias: "form", required: false }] }], formModel: [{ type: Input, args: [{ isSignal: true, alias: "formModel", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SamlSourceFormComponent, { className: "SamlSourceFormComponent", filePath: "src/app/ui/forms/saml-source-form.component.ts", lineNumber: 401 });
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
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.AUTHENTICATION_SOURCE_TYPE"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.active_type);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.AUTHENTICATION_SOURCE_SELECT"));
    \u0275\u0275control();
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
    \u0275\u0275property("form", ctx_r1.samlForm)("formModel", ctx_r1.samlFormModel);
  }
}
function AuthSourceModalComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ldap-source-form", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.ldapForm);
  }
}
function AuthSourceModalComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "oauth-source-form", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("form", ctx_r1.oauthForm)("formModel", ctx_r1.oauthFormModel);
  }
}
function AuthSourceModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuthSourceModalComponent_Conditional_3_Case_0_Template, 1, 2, "saml-source-form", 6)(1, AuthSourceModalComponent_Conditional_3_Case_1_Template, 1, 1, "ldap-source-form", 7)(2, AuthSourceModalComponent_Conditional_3_Case_2_Template, 1, 2, "oauth-source-form", 6);
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
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  oauthFormModel = signal(
    generateOAuthSourceForm(),
    ...ngDevMode ? [{ debugName: "oauthFormModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  oauthForm = form(this.oauthFormModel, applyOAuthSourceFormSchema);
  samlFormModel = signal(
    generateSAMLSourceForm(new Ji({ authority_id: this._data.domain.id })),
    ...ngDevMode ? [{ debugName: "samlFormModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  samlForm = form(this.samlFormModel, applySAMLSourceFormSchema);
  ldapFormModel = signal(
    generateLDAPSourceForm(new Bi({ authority_id: this._data.domain.id })),
    ...ngDevMode ? [{ debugName: "ldapFormModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ldapForm = form(this.ldapFormModel, applyLDAPSourceFormSchema);
  item = signal(
    null,
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  active_type = signal(
    null,
    ...ngDevMode ? [{ debugName: "active_type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  type = computed(
    () => this.item() instanceof Ji ? "saml" : this.item() instanceof Bi ? "ldap" : "oauth",
    ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
        this.item.set(new Ji(data));
        break;
      case "ldap":
        this.item.set(new Bi(data));
        break;
      default:
        this.item.set(new Ki(data));
        break;
    }
    this.initialiseForm();
  }
  updateMethod(item) {
    switch (this.type()) {
      case "saml":
        return item.id ? Gc(item.id, item) : Bc(item);
      case "ldap":
        return item.id ? Nu(item.id, item) : wu(item);
    }
    return item.id ? cc(item.id, item) : ac(item);
  }
  /**
   * Create item if new or update if exsiting
   */
  async save() {
    if (!await this.submitActiveForm()) {
      return;
    }
    this.loading.set("Saving authentication source...");
    const method = this.updateMethod(__spreadValues(__spreadValues({}, this.item().toJSON()), this.activeFormModel()));
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
    if (item instanceof Ki) {
      this.oauthFormModel.set(generateOAuthSourceForm(item));
    } else if (item instanceof Ji) {
      this.samlFormModel.set(generateSAMLSourceForm(item));
    } else if (item instanceof Bi) {
      this.ldapFormModel.set(generateLDAPSourceForm(item));
    }
  }
  async submitActiveForm() {
    switch (this.type()) {
      case "saml":
        await submit(this.samlForm, async () => void 0);
        return !this.samlForm().invalid();
      case "ldap":
        await submit(this.ldapForm, async () => void 0);
        return !this.ldapForm().invalid();
    }
    await submit(this.oauthForm, async () => void 0);
    return !this.oauthForm().invalid();
  }
  activeFormModel() {
    switch (this.type()) {
      case "saml":
        return this.samlFormModel();
      case "ldap":
        return this.ldapFormModel();
    }
    return this.oauthFormModel();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AuthSourceModalComponent_BaseFactory;
    return function AuthSourceModalComponent_Factory(__ngFactoryType__) {
      return (\u0275AuthSourceModalComponent_BaseFactory || (\u0275AuthSourceModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AuthSourceModalComponent)))(__ngFactoryType__ || _AuthSourceModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthSourceModalComponent, selectors: [["app-auth-source-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [[3, "save", "heading", "loading"], [1, "flex", "flex-col"], ["for", "type"], ["appearance", "outline"], ["name", "type", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "form", "formModel"], [3, "form"]], template: function AuthSourceModalComponent_Template(rf, ctx) {
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
                        <saml-source-form
                            [form]="samlForm"
                            [formModel]="samlFormModel"
                        />
                    }
                    @case ('ldap') {
                        <ldap-source-form [form]="ldapForm" />
                    }
                    @default {
                        <oauth-source-form
                            [form]="oauthForm"
                            [formModel]="oauthFormModel"
                        />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthSourceModalComponent, { className: "AuthSourceModalComponent", filePath: "src/app/overlays/auth-source-modal.component.ts", lineNumber: 124 });
})();

// src/app/domains/applications.utilities.ts
function generateApplicationFormModel(app) {
  const application = app;
  return {
    name: app?.name || "",
    scopes: app?.scopes || "",
    subsystems: application?.subsystems || [],
    skip_authorization: !!app?.skip_authorization,
    redirect_uri: app?.redirect_uri || "",
    client_id: app?.uid || "",
    preserve_client_id: false
  };
}
var applyApplicationFormSchema = (path) => {
  required(path.name);
  validate(path.redirect_uri, ({ value }) => isValidUrl(value()) ? void 0 : { kind: "url", message: "Invalid URL" });
};

// src/app/domains/application-form.component.ts
var _c03 = (a0) => ({ item: a0 });
var _c13 = () => ({ standalone: true });
function ApplicationFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ": ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 8);
    \u0275\u0275element(8, "input", 9);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "DOMAINS.APP_NAME_REQUIRED"));
  }
}
function ApplicationFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8);
    \u0275\u0275element(5, "input", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.APP_SCOPES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DOMAINS.APP_SCOPES"))("formField", ctx_r0.form.scopes);
    \u0275\u0275control();
  }
}
function ApplicationFormComponent_Conditional_1_Conditional_4_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 16);
    \u0275\u0275listener("removed", function ApplicationFormComponent_Conditional_1_Conditional_4_For_8_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeSubsystem(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c03, item_r4)));
  }
}
function ApplicationFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 13)(5, "mat-chip-grid", 14, 0);
    \u0275\u0275repeaterCreate(7, ApplicationFormComponent_Conditional_1_Conditional_4_For_8_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function ApplicationFormComponent_Conditional_1_Conditional_4_Template_input_matChipInputTokenEnd_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addSubsystem($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 5, "DOMAINS.APP_SUBSYSTEMS"), ":");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.subsystem_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 7, "DOMAINS.APP_SUBSYSTEMS"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function ApplicationFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8);
    \u0275\u0275element(5, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(6, "mat-error");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "DOMAINS.APP_REDIRECT_URL"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.redirect_uri);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "DOMAINS.APP_REDIRECT_URL_REQUIRED"));
  }
}
function ApplicationFormComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8);
    \u0275\u0275element(5, "input", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 5, "DOMAINS.APP_CLIENT_ID"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 7, "DOMAINS.APP_CLIENT_PLACEHOLDER"))("disabled", true)("ngModel", ctx_r0.client_id())("ngModelOptions", \u0275\u0275pureFunction0(9, _c13));
    \u0275\u0275control();
  }
}
function ApplicationFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, ApplicationFormComponent_Conditional_1_Conditional_2_Template, 12, 9, "div", 4);
    \u0275\u0275conditionalCreate(3, ApplicationFormComponent_Conditional_1_Conditional_3_Template, 7, 7, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ApplicationFormComponent_Conditional_1_Conditional_4_Template, 11, 9, "div", 4);
    \u0275\u0275conditionalCreate(5, ApplicationFormComponent_Conditional_1_Conditional_5_Template, 9, 7, "div", 4);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "settings-toggle", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(9, "settings-toggle", 6);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ApplicationFormComponent_Conditional_1_Conditional_11_Template, 7, 10, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.scopes ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.subsystems ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.redirect_uri ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 9, "DOMAINS.APP_SKIP"))("formField", ctx_r0.form.skip_authorization);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 11, "DOMAINS.APP_PRESERVE_ID"))("formField", ctx_r0.form.preserve_client_id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.redirect_uri ? 11 : -1);
  }
}
var ApplicationFormComponent = class _ApplicationFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _name = "DOMAINS.APPLICATION";
  _hotkey = inject(HotkeysService);
  _injector = inject(Injector);
  event = new EventEmitter();
  formModel = signal(
    generateApplicationFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyApplicationFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = signal(
    "",
    ...ngDevMode ? [{ debugName: "heading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  default_redirect_uri;
  client_id = signal(
    "",
    ...ngDevMode ? [{ debugName: "client_id" }] : (
      /* istanbul ignore next */
      []
    )
  );
  separators = [ENTER, COMMA, SPACE];
  subsystem_list = computed(
    () => this.formModel().subsystems || [],
    ...ngDevMode ? [{ debugName: "subsystem_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addSubsystem = (e) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    subsystems: addSignalChipItem(value.subsystems, e)
  }));
  removeSubsystem = (i) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    subsystems: removeSignalChipItem(value.subsystems, i)
  }));
  ngOnInit() {
    const item = this._data.item;
    const edit = !!item.id;
    this.heading.set(i18n(`DOMAINS.APPLICATION_${edit ? "EDIT" : "NEW"}`));
    const { redirect_uri } = this.formModel();
    this.default_redirect_uri = redirect_uri || "";
    effect(() => {
      const preserve = this.formModel().preserve_client_id;
      const redirect_value = `${this.formModel().redirect_uri || ""}`;
      const trimmed_value = redirect_value.trim();
      if (redirect_value !== trimmed_value) {
        this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
          redirect_uri: trimmed_value
        }));
      }
      const uri = preserve ? this.default_redirect_uri : trimmed_value;
      this.client_id.set(uri ? h.hashStr(uri) : "");
    }, { injector: this._injector });
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}_SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_item = item.id ? Js(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
        void 0
      ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
      const save_item = __spreadProps(__spreadValues({}, form_item), { uid: this.client_id() });
      delete save_item.client_id;
      try {
        const _item = await (save_item.id ? oo(save_item.id, save_item) : uo(save_item));
        this._dialog_ref.disableClose = false;
        this.event.emit({ reason: "done", metadata: { item: _item } });
        notifySuccess(i18n(`${this._name}_SAVE_SUCCESS`));
        this._dialog_ref.close();
      } catch (err) {
        this.loading.set(null);
        this._dialog_ref.disableClose = false;
        notifyError(i18n(`${this._name}_SAVE_ERROR`, {
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ApplicationFormComponent_BaseFactory;
    return function ApplicationFormComponent_Factory(__ngFactoryType__) {
      return (\u0275ApplicationFormComponent_BaseFactory || (\u0275ApplicationFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ApplicationFormComponent)))(__ngFactoryType__ || _ApplicationFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationFormComponent, selectors: [["application-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["chipList", ""], [3, "save", "heading", "loading"], ["application", "", 1, "flex", "flex-col"], [1, "fieldset"], [1, "field"], [1, "fieldset", "mb-4"], [1, "flex-1", 3, "label", "formField"], ["for", "application-name"], ["appearance", "outline"], ["matInput", "", "placeholder", "Application Name", 3, "formField"], ["for", "scopes"], ["matInput", "", 3, "placeholder", "formField"], ["for", "subsystems-input"], ["appearance", "outline", 1, "w-full"], ["aria-label", "Subsystem List"], ["id", "subsystems-input", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""], ["for", "redirect-uri"], ["matInput", "", "placeholder", "Redirect URI e.g. http://localhost:4200/oauth-resp.html", 3, "formField"], ["for", "client-id"], ["matInput", "", "name", "client-id", 3, "placeholder", "disabled", "ngModel", "ngModelOptions"]], template: function ApplicationFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function ApplicationFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, ApplicationFormComponent_Conditional_1_Template, 12, 13, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading())("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    MatFormFieldModule,
    MatFormField,
    MatError,
    MatChipsModule,
    MatChipGrid,
    MatChipInput,
    MatChipRemove,
    MatChipRow,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    SettingsToggleComponent,
    FormField,
    MatInputModule,
    MatInput,
    IconComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], styles: ["\nsettings-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=application-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationFormComponent, [{
    type: Component,
    args: [{ selector: "application-form", template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form application class="flex flex-col">
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="application-name"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>:
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        placeholder="Application Name"
                                        [formField]="form.name"
                                    />
                                    <mat-error>{{
                                        'DOMAINS.APP_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.scopes) {
                            <div class="field">
                                <label for="scopes"
                                    >{{
                                        'DOMAINS.APP_SCOPES' | translate
                                    }}:</label
                                >
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'DOMAINS.APP_SCOPES' | translate
                                        "
                                        [formField]="form.scopes"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.subsystems) {
                        <div class="field">
                            <label for="subsystems-input"
                                >{{
                                    'DOMAINS.APP_SUBSYSTEMS' | translate
                                }}:</label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Subsystem List"
                                >
                                    @for (
                                        item of subsystem_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="removeSubsystem(item)"
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
                                    id="subsystems-input"
                                    [placeholder]="
                                        'DOMAINS.APP_SUBSYSTEMS' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addSubsystem($event)
                                    "
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.redirect_uri) {
                        <div class="field">
                            <label for="redirect-uri"
                                >{{ 'DOMAINS.APP_REDIRECT_URL' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    placeholder="Redirect URI e.g. http://localhost:4200/oauth-resp.html"
                                    [formField]="form.redirect_uri"
                                />
                                <mat-error>{{
                                    'DOMAINS.APP_REDIRECT_URL_REQUIRED'
                                        | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        <settings-toggle
                            class="flex-1"
                            [label]="'DOMAINS.APP_SKIP' | translate"
                            [formField]="form.skip_authorization"
                        />
                        <settings-toggle
                            class="flex-1"
                            [label]="'DOMAINS.APP_PRESERVE_ID' | translate"
                            [formField]="form.preserve_client_id"
                        />
                    </div>
                    @if (form.redirect_uri) {
                        <div class="field">
                            <label for="client-id"
                                >{{ 'DOMAINS.APP_CLIENT_ID' | translate }}:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="client-id"
                                    [placeholder]="
                                        'DOMAINS.APP_CLIENT_PLACEHOLDER'
                                            | translate
                                    "
                                    [disabled]="true"
                                    [ngModel]="client_id()"
                                    [ngModelOptions]="{ standalone: true }"
                                />
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `, imports: [
      MatFormFieldModule,
      MatChipsModule,
      FormsModule,
      TranslatePipe,
      SettingsToggleComponent,
      FormField,
      MatInputModule,
      IconComponent,
      FullscreenModalShellComponent
    ], styles: ["/* angular:styles/component:css;0ad2801bf20fdba1813d81d82012ea077876a6eec759fec0061750263a0c4155;/home/runner/work/backoffice/backoffice/src/app/domains/application-form.component.ts */\nsettings-form-field {\n  margin-bottom: 1.5em;\n}\n/*# sourceMappingURL=application-form.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationFormComponent, { className: "ApplicationFormComponent", filePath: "src/app/domains/application-form.component.ts", lineNumber: 225 });
})();

// src/app/domains/domain-state.service.ts
var DomainStateService = class _DomainStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _changed = signal(
    0,
    ...ngDevMode ? [{ debugName: "_changed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = computed(
    () => this._state.item(),
    ...ngDevMode ? [{ debugName: "item" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = this._loading.asReadonly();
  _users = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_users" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof zi))
        return [];
      const response = await Ia({
        authority_id: item.id,
        limit: 1e3
      }).catch(() => ({ data: [] }));
      return response.data.sort((a, b) => a.name.localeCompare(b.name));
    }
  }));
  users = computed(
    () => this._users.value() || [],
    ...ngDevMode ? [{ debugName: "users" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _auth_sources = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_auth_sources" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof zi))
        return [];
      const q = { authority_id: item.id };
      const [saml, oauth, ldap] = await Promise.all([
        Lc(q).then((response) => response.data),
        oc(q).then((response) => response.data),
        Ou(q).then((response) => response.data)
      ]).catch(() => [[], [], []]);
      return [...saml, ...oauth, ...ldap];
    }
  }));
  auth_sources = computed(
    () => this._auth_sources.value() || [],
    ...ngDevMode ? [{ debugName: "auth_sources" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _applications = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_applications" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof zi))
        return [];
      const response = await io({
        authority_id: item.id
      }).catch(() => ({ data: [] }));
      return response.data.sort((a, b) => a.name.localeCompare(b.name));
    }
  }));
  applications = computed(
    () => this._applications.value() || [],
    ...ngDevMode ? [{ debugName: "applications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _counts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_counts" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => ({ item: this.item(), changed: this._changed() }),
    loader: async ({ params }) => {
      const { item } = params;
      if (!(item instanceof zi))
        return {};
      const q = { authority_id: item?.id };
      const details = await Promise.all([
        io(q).then((response) => response.total).catch(() => 0),
        Promise.all([
          Lc(q),
          oc(q),
          Ou(q)
        ]).then(([saml, oauth, ldap]) => saml.total + oauth.total + ldap.total).catch(() => 0),
        Ia(q).then((response) => response.total).catch(() => 0)
      ]);
      const [applications, auth_sources, users] = details;
      return {
        applications,
        auth_sources: auth_sources || 0,
        users
      };
    }
  }));
  counts = computed(
    () => this._counts.value() || {
      applications: 0,
      auth_sources: 0,
      users: 0
    },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get active_item() {
    return this._state.active_item;
  }
  async update(domain) {
    const item = await To(domain.id, domain);
    this._state.replaceItem(item);
  }
  async performAzureIntegration() {
    const item = this.active_item;
    if (!(item instanceof zi))
      return;
    const result = await d(`/api/engine/v2/admin_consent/${encodeURIComponent(item.id)}`).catch((error) => {
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
    item = item || new Ci({ owner_id: this.active_item.id });
    const ref = this._dialog.open(ApplicationFormComponent, {
      data: {
        item,
        name: "DOMAINS.APPLICATION",
        save: (i) => {
          delete i.client_id;
          return i.id ? oo(i.id, i) : uo(i);
        }
      }
    });
    const instance = ref.componentInstance;
    const details = await Promise.race([
      waitForEvent(instance.event, (_) => _.reason === "done"),
      waitForEvent(ref.afterClosed())
    ]);
    if (!details)
      return;
    this._changed.set((/* @__PURE__ */ new Date()).valueOf());
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
    const err = await co(item.id).catch((_) => _);
    details.close();
    if (err)
      return notifyError(`Error removing domain application. Error: ${err.responseText || err.message || err}`);
    notifySuccess("Successfully removed domain application.");
    this._changed.set((/* @__PURE__ */ new Date()).valueOf());
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
      waitForEvent(ref.componentInstance.event, (_) => _.reason === "done"),
      waitForEvent(ref.afterClosed())
    ]);
    if (!details)
      return;
    this._changed.set((/* @__PURE__ */ new Date()).valueOf());
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
    const method = item instanceof Ji ? Wc : item instanceof Ki ? hc : Du;
    const err = await method(item.id).catch((_) => _);
    details.close();
    if (err)
      return notifyError(`Error removing domain auth source. Error: ${err.responseText || err.message || err}`);
    notifySuccess("Successfully removed domain auth source.");
    this._changed.set((/* @__PURE__ */ new Date()).valueOf());
  }
  static \u0275fac = function DomainStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _DomainStateService, factory: _DomainStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainStateService, [{
    type: Service
  }], null, null);
})();

export {
  DomainStateService
};
//# sourceMappingURL=chunk-ZGLMLEHC.js.map
