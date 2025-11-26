import {
  ObjectListFieldComponent
} from "./chunk-VXYZPUB3.js";
import {
  SettingsFieldComponent
} from "./chunk-W7JULZ3J.js";
import {
  d
} from "./chunk-O72O3CR4.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent,
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  Clipboard,
  ExtensionOutletComponent,
  FullscreenModalShellComponent,
  ItemCreateUpdateModalComponent,
  SanitizePipe,
  SidebarMenuComponent,
  SimpleTableComponent,
  extensionsForItem,
  openConfirmModal,
  validateJSONString
} from "./chunk-JDP5FFMI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TYVAN3UY.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-EWUI732O.js";
import "./chunk-53JJL3R3.js";
import {
  IconComponent,
  MatOption,
  MatRipple,
  MatRippleModule
} from "./chunk-L3UICUJN.js";
import {
  TranslatePipe
} from "./chunk-V3NTFP3B.js";
import {
  AsyncHandler,
  AsyncPipe,
  Au,
  BehaviorSubject,
  Bo,
  Bs,
  Co,
  CommonModule,
  Component,
  DefaultValueAccessor,
  EventEmitter,
  Fo,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Injectable,
  Input,
  Jc,
  Ju,
  Ku,
  Lo,
  Ls,
  Mo,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NumberValueAccessor,
  Ou,
  Qs,
  Qu,
  ReactiveFormsModule,
  RequiredValidator,
  RouterModule,
  RouterOutlet,
  Validators,
  Vs,
  Zu,
  __spreadProps,
  __spreadValues,
  _c,
  catchError,
  combineLatest,
  computed,
  copyToClipboard,
  dc,
  ee,
  filter,
  first,
  i18n,
  inject,
  input,
  lastValueFrom,
  map,
  mc,
  ou,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  wu,
  xu,
  yc,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZKZAJWA3.js";

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
  type = computed(() => this.item() instanceof Bo ? "saml" : this.item() instanceof Fo ? "ldap" : "oauth", ...ngDevMode ? [{ debugName: "type" }] : []);
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
        this.item.set(new Bo(data));
        break;
      case "ldap":
        this.item.set(new Fo(data));
        break;
      default:
        this.item.set(new Lo(data));
        break;
    }
    this.initialiseForm();
  }
  updateMethod(item) {
    switch (this.type()) {
      case "saml":
        return item.id ? _c(item.id, item) : mc(item);
      case "ldap":
        return item.id ? Au(item.id, item) : wu(item);
    }
    return item.id ? Ju(item.id, item) : Ku(item);
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
    if (item instanceof Lo) {
      this.form.set(generateOAuthSourceForm(item));
    } else if (item instanceof Bo) {
      this.form.set(generateSAMLSourceForm(item));
    } else if (item instanceof Fo) {
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
  ]).pipe(filter(([_, item]) => item instanceof Co), switchMap(([_, item]) => Jc({ authority_id: item.id, limit: 1e3 })), map((_) => _.data.sort((a, b) => a.name.localeCompare(b.name))), catchError((_) => []), shareReplay(1));
  auth_sources = combineLatest([this._changed, this.item]).pipe(filter(([_, item]) => item instanceof Co), switchMap(([_, item]) => {
    const q = { authority_id: item.id };
    return combineLatest([
      dc(q).pipe(map((_2) => _2.data)),
      Qu(q).pipe(map((_2) => _2.data)),
      xu(q).pipe(map((_2) => _2.data))
    ]);
  }), map((_) => {
    let list = [];
    _.forEach((array) => list = list.concat(array));
    return list;
  }), catchError((_) => []), shareReplay(1));
  applications = combineLatest([this._changed, this.item]).pipe(filter(([_, item]) => item instanceof Co), switchMap(([_, item]) => Ls({ authority_id: item.id })), map((_) => _.data.sort((a, b) => a.name.localeCompare(b.name))), catchError((_) => []), shareReplay(1));
  counts = combineLatest([this._changed, this.item]).pipe(filter(([_, item]) => item instanceof Co), switchMap(async ([_, item]) => {
    const q = { authority_id: item?.id };
    const details = await Promise.all([
      lastValueFrom(Ls(q).pipe(map((_2) => _2.total))),
      lastValueFrom(combineLatest([
        dc(q),
        Qu(q),
        xu(q)
      ]).pipe(map(([saml, oauth, ldap]) => saml.total + oauth.total + ldap.total))),
      lastValueFrom(Jc(q).pipe(map((_2) => _2.total)))
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
    const item = await ou(domain.id, domain).toPromise();
    this._state.replaceItem(item);
  }
  async performAzureIntegration() {
    const item = this.active_item;
    if (!(item instanceof Co))
      return;
    const result = await lastValueFrom(ee(`/api/engine/v2/admin_consent/${encodeURIComponent(item.id)}`)).catch((error) => {
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
    item = item || new Mo({ owner_id: this.active_item.id });
    const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
      data: {
        item,
        name: "DOMAINS.APPLICATION",
        save: (i) => {
          delete i.client_id;
          return i.id ? Bs(i.id, i) : Vs(i);
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
    const err = await Qs(item.id).toPromise().catch((_) => _);
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
    const method = item instanceof Bo ? yc : item instanceof Lo ? Zu : Ou;
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

// src/app/domains/domain-about.component.ts
function DomainAboutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h3", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 8);
    \u0275\u0275pipe(5, "sanitize");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 4, ctx_r0.description), \u0275\u0275sanitizeHtml);
  }
}
function DomainAboutComponent_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DomainAboutComponent_Conditional_1_For_5_Template_button_click_0_listener() {
      const domain_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyEmailDomain(domain_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", domain_r3, " ");
  }
}
function DomainAboutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DomainAboutComponent_Conditional_1_For_5_Template, 2, 1, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "DOMAINS.EMAIL_DOMAINS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.item.email_domains);
  }
}
function DomainAboutComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-form-field", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("readonly", false);
  }
}
function DomainAboutComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-form-field", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("readonly", false);
  }
}
function DomainAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 5)(1, "mat-tab-group", 13);
    \u0275\u0275twoWayListener("selectedIndexChange", function DomainAboutComponent_Conditional_10_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.index, $event) || (ctx_r0.index = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(2, "mat-tab", 14);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "mat-tab", 14);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DomainAboutComponent_Conditional_10_Conditional_6_Template, 1, 1, "settings-form-field", 15);
    \u0275\u0275conditionalCreate(7, DomainAboutComponent_Conditional_10_Conditional_7_Template, 1, 1, "settings-form-field", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r0.index);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 6, "DOMAINS.SETTINGS_CONFIG"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 8, "DOMAINS.SETTINGS_INTERNALS"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.index !== 1 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.index === 1 ? 7 : -1);
  }
}
var DomainAboutComponent = class _DomainAboutComponent extends AsyncHandler {
  _service = inject(DomainStateService);
  _clipboard = inject(Clipboard);
  /** Form group for edit domain settings */
  form = new FormGroup({
    config: new FormControl("", [validateJSONString]),
    internals: new FormControl("", [validateJSONString])
  });
  /** Index of the active tab */
  index;
  get item() {
    return this._service.active_item;
  }
  /** HTML string for rendering the description */
  get description() {
    return d(this.item.description || "", { async: false });
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((_) => this.loadForm()));
  }
  copyEmailDomain(domain) {
    this._clipboard.copy(domain);
    notifySuccess(i18n("DOMAINS.COPIED_EMAIL_DOMAIN"));
  }
  /** Save changes to the form fields */
  async saveChanges() {
    if (!this.form.valid)
      return notifyError(i18n("DOMAINS.SETTINGS_ERROR"));
    const domain = new Co(__spreadProps(__spreadValues({}, this.item), {
      config: JSON.parse(this.form.value.config),
      internals: JSON.parse(this.form.value.internals)
    }));
    await this._service.update(domain);
    notifySuccess(i18n("DOMAINS.SETTINGS_SAVED"));
  }
  /** Load form fields for active item */
  loadForm() {
    if (!this.item)
      return;
    this.form.patchValue({
      internals: JSON.stringify(this.item.internals, void 0, 4),
      config: JSON.stringify(this.item.config, void 0, 4)
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DomainAboutComponent_BaseFactory;
    return function DomainAboutComponent_Factory(__ngFactoryType__) {
      return (\u0275DomainAboutComponent_BaseFactory || (\u0275DomainAboutComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DomainAboutComponent)))(__ngFactoryType__ || _DomainAboutComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAboutComponent, selectors: [["app-domain-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 9, consts: [[1, "relative", "my-2", "flex", "w-1/2", "min-w-[20rem]", "flex-col", "rounded", "border", "border-base-200", "p-4"], [1, "mb-2", "flex", "h-16", "w-full", "items-center", "justify-between", "rounded", "bg-base-200", "px-2", "text-lg", "font-medium"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "matRipple", "", 1, "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "formGroup"], [1, "w-full", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "my-4", "text-base-300"], [1, "absolute", "left-4", "top-0", "-translate-y-1/2", "rounded", "bg-base-100", "p-2", "text-sm", "font-medium"], ["matRipple", "", 1, "mono", "rounded", "p-2", "text-left", "text-sm", "hover:bg-base-200"], ["matRipple", "", 1, "mono", "rounded", "p-2", "text-left", "text-sm", "hover:bg-base-200", 3, "click"], [1, "border-x", "border-t", "border-base-300", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], ["formControlName", "config", "lang", "json", 3, "readonly"], ["formControlName", "internals", "lang", "json", 3, "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DomainAboutComponent_Conditional_0_Template, 7, 6);
      \u0275\u0275conditionalCreate(1, DomainAboutComponent_Conditional_1_Template, 6, 3, "div", 0);
      \u0275\u0275elementStart(2, "header", 1)(3, "h3", 2);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("click", function DomainAboutComponent_Template_button_click_6_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275elementStart(8, "icon", 4);
      \u0275\u0275text(9, "save");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, DomainAboutComponent_Conditional_10_Template, 8, 10, "section", 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional((ctx.item == null ? null : ctx.item.description) ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.item.email_domains == null ? null : ctx.item.email_domains.length) ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "COMMON.SETTINGS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 7, "COMMON.SAVE_CHANGES"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.form ? 10 : -1);
    }
  }, dependencies: [
    SettingsFieldComponent,
    MatTabsModule,
    MatTab,
    MatTabGroup,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatRippleModule,
    MatRipple,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    SanitizePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainAboutComponent, [{
    type: Component,
    args: [{ selector: "app-domain-about", template: `
        @if (item?.description) {
            <div class="w-full rounded border border-base-200">
                <h3 class="w-full rounded bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description | sanitize"
                ></div>
            </div>
            <hr class="my-4 text-base-300" />
        }
        @if (item.email_domains?.length) {
            <div
                class="relative my-2 flex w-1/2 min-w-[20rem] flex-col rounded border border-base-200 p-4"
            >
                <div
                    class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 p-2 text-sm font-medium"
                >
                    {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                </div>
                @for (domain of item.email_domains; track domain) {
                    <button
                        matRipple
                        class="mono rounded p-2 text-left text-sm hover:bg-base-200"
                        (click)="copyEmailDomain(domain)"
                    >
                        {{ domain }}
                    </button>
                }
            </div>
        }
        <header
            class="mb-2 flex h-16 w-full items-center justify-between rounded bg-base-200 px-2 text-lg font-medium"
        >
            <h3 class="px-2 text-lg font-medium">
                {{ 'COMMON.SETTINGS' | translate }}
            </h3>
            <button
                icon
                matRipple
                class="rounded bg-secondary text-secondary-content"
                [matTooltip]="'COMMON.SAVE_CHANGES' | translate"
                (click)="saveChanges()"
            >
                <icon class="text-2xl">save</icon>
            </button>
        </header>
        @if (form) {
            <section [formGroup]="form">
                <mat-tab-group
                    [(selectedIndex)]="index"
                    class="border-x border-t border-base-300"
                >
                    <mat-tab [label]="'DOMAINS.SETTINGS_CONFIG' | translate">
                    </mat-tab>
                    <mat-tab [label]="'DOMAINS.SETTINGS_INTERNALS' | translate">
                    </mat-tab>
                </mat-tab-group>
                @if (index !== 1) {
                    <settings-form-field
                        formControlName="config"
                        lang="json"
                        [readonly]="false"
                    ></settings-form-field>
                }
                @if (index === 1) {
                    <settings-form-field
                        formControlName="internals"
                        lang="json"
                        [readonly]="false"
                    ></settings-form-field>
                }
            </section>
        }
    `, imports: [
      SettingsFieldComponent,
      MatTabsModule,
      ReactiveFormsModule,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      TranslatePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAboutComponent, { className: "DomainAboutComponent", filePath: "src/app/domains/domain-about.component.ts", lineNumber: 119 });
})();

// src/app/domains/domain-applications.component.ts
var _c03 = (a0) => ({ key: "name", name: "Name", content: a0 });
var _c13 = (a0, a1) => ({ key: "redirect_uri", name: a0, content: a1, size: "20rem" });
var _c23 = (a0, a1) => ({ key: "uid", name: a0, content: a1, size: "17rem" });
var _c32 = (a0, a1) => ({ key: "secret", name: a0, content: a1 });
var _c4 = () => ({ key: "scopes", name: "Scopes" });
var _c5 = (a0) => ({ key: "actions", name: " ", size: "6rem", sortable: false, content: a0 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function DomainApplicationsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.name);
  }
}
function DomainApplicationsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275property("href", row_r3.redirect_uri, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.redirect_uri, " ");
  }
}
function DomainApplicationsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.uid);
  }
}
function DomainApplicationsComponent_ng_template_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DOMAINS.SECRET_HIDDEN"));
  }
}
function DomainApplicationsComponent_ng_template_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.secret);
  }
}
function DomainApplicationsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_19_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.copySecret(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("mousedown", function DomainApplicationsComponent_ng_template_19_Template_button_mousedown_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = true);
    })("touchstart", function DomainApplicationsComponent_ng_template_19_Template_button_touchstart_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = true);
    })("mouseup", function DomainApplicationsComponent_ng_template_19_Template_button_mouseup_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = false);
    }, \u0275\u0275resolveWindow)("touchend", function DomainApplicationsComponent_ng_template_19_Template_button_touchend_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = false);
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275conditionalCreate(10, DomainApplicationsComponent_ng_template_19_Conditional_10_Template, 3, 3, "span", 19);
    \u0275\u0275conditionalCreate(11, DomainApplicationsComponent_ng_template_19_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "DOMAINS.COPY_SECRET"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "DOMAINS.VIEW_SECRET"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r6.show_secret[row_r6.id] ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.show_secret[row_r6.id] ? 11 : -1);
  }
}
function DomainApplicationsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_21_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editApplication(row_r9));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_21_Template_button_click_5_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeApplication(row_r9));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "DOMAINS.APPLICATION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "DOMAINS.APPLICATION_REMOVE"));
  }
}
var DomainApplicationsComponent = class _DomainApplicationsComponent {
  _service = inject(DomainStateService);
  /** List of applications associated with the active domain */
  applications = this._service.applications;
  loading = this._service.loading;
  show_secret = {};
  newApplication = () => this._service.editApplication();
  editApplication = (item) => this._service.editApplication(item);
  removeApplication = (item) => this._service.deleteApplication(item);
  get item() {
    return this._service.active_item;
  }
  copySecret(item) {
    this.show_secret[item.id] = false;
    copyToClipboard(item.secret);
    notifyInfo(i18n("DOMAINS.COPIED_SECRET"));
  }
  static \u0275fac = function DomainApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainApplicationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainApplicationsComponent, selectors: [["domain-applications"]], decls: 23, vars: 40, consts: [["name_template", ""], ["redirect_template", ""], ["client_id_template", ""], ["secret_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-40", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[84rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], ["target", "_blank", 1, "truncate", "p-4", "underline", 3, "href"], [1, "p-4", "font-mono", "text-xs"], [1, "flex", "items-center", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 3, "mousedown", "touchstart", "mouseup", "touchend", "matTooltip"], [1, "p-2", "font-mono", "text-xs"], [1, "rounded", "bg-base-200", "p-2"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function DomainApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "button", 7);
      \u0275\u0275listener("click", function DomainApplicationsComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newApplication());
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 8);
      \u0275\u0275element(6, "mat-progress-bar", 9);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275element(8, "simple-table", 10);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, DomainApplicationsComponent_ng_template_13_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, DomainApplicationsComponent_ng_template_15_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, DomainApplicationsComponent_ng_template_17_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, DomainApplicationsComponent_ng_template_19_Template, 12, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, DomainApplicationsComponent_ng_template_21_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r10 = \u0275\u0275reference(14);
      const redirect_template_r11 = \u0275\u0275reference(16);
      const client_id_template_r12 = \u0275\u0275reference(18);
      const secret_template_r13 = \u0275\u0275reference(20);
      const actions_template_r14 = \u0275\u0275reference(22);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.APPLICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(7, 9, ctx.loading));
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.applications)("columns", \u0275\u0275pureFunction6(33, _c6, \u0275\u0275pureFunction1(19, _c03, name_template_r10), \u0275\u0275pureFunction2(21, _c13, \u0275\u0275pipeBind1(9, 11, "DOMAINS.FIELD_REDIRECT_URI"), redirect_template_r11), \u0275\u0275pureFunction2(24, _c23, \u0275\u0275pipeBind1(10, 13, "DOMAINS.FIELD_CLIENT_ID"), client_id_template_r12), \u0275\u0275pureFunction2(27, _c32, \u0275\u0275pipeBind1(11, 15, "DOMAINS.FIELD_CLIENT_SECRET"), secret_template_r13), \u0275\u0275pureFunction0(30, _c4), \u0275\u0275pureFunction1(31, _c5, actions_template_r14)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 17, "DOMAINS.APPLICATIONS_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainApplicationsComponent, [{
    type: Component,
    args: [{ selector: "domain-applications", template: `
        <div class="flex h-full w-full flex-col">
            <div header class="">
                <button
                    btn
                    class="mb-4 w-full sm:w-40"
                    (click)="newApplication()"
                >
                    {{ 'DOMAINS.APPLICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[84rem] text-sm"
                    [data]="applications"
                    [columns]="[
                        { key: 'name', name: 'Name', content: name_template },
                        {
                            key: 'redirect_uri',
                            name: 'DOMAINS.FIELD_REDIRECT_URI' | translate,
                            content: redirect_template,
                            size: '20rem',
                        },
                        {
                            key: 'uid',
                            name: 'DOMAINS.FIELD_CLIENT_ID' | translate,
                            content: client_id_template,
                            size: '17rem',
                        },
                        {
                            key: 'secret',
                            name: 'DOMAINS.FIELD_CLIENT_SECRET' | translate,
                            content: secret_template,
                        },
                        { key: 'scopes', name: 'Scopes' },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            sortable: false,
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.APPLICATIONS_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
            </div>
        </ng-template>
        <ng-template #redirect_template let-row="row">
            <a
                [href]="row.redirect_uri"
                target="_blank"
                class="truncate p-4 underline"
            >
                {{ row.redirect_uri }}
            </a>
        </ng-template>
        <ng-template #client_id_template let-row="row">
            <div class="p-4 font-mono text-xs">{{ row.uid }}</div>
        </ng-template>
        <ng-template #secret_template let-row="row">
            <div class="flex items-center p-2">
                <button
                    icon
                    matRipple
                    (click)="copySecret(row)"
                    [matTooltip]="'DOMAINS.COPY_SECRET' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    matRipple
                    (mousedown)="show_secret[row.id] = true"
                    (touchstart)="show_secret[row.id] = true"
                    (window:mouseup)="show_secret[row.id] = false"
                    (window:touchend)="show_secret[row.id] = false"
                    [matTooltip]="'DOMAINS.VIEW_SECRET' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <div class="p-2 font-mono text-xs">
                    @if (!show_secret[row.id]) {
                        <span class="rounded bg-base-200 p-2">{{
                            'DOMAINS.SECRET_HIDDEN' | translate
                        }}</span>
                    }
                    @if (show_secret[row.id]) {
                        <span>{{ row.secret }}</span>
                    }
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'DOMAINS.APPLICATION_EDIT' | translate"
                    (click)="editApplication(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'DOMAINS.APPLICATION_REMOVE' | translate"
                    (click)="removeApplication(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      CommonModule,
      TranslatePipe,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;e5d3b671a65f34748d18bf513755b471469c83f842c346a0ed26e12b155e98c7;/home/runner/work/backoffice/backoffice/src/app/domains/domain-applications.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainApplicationsComponent, { className: "DomainApplicationsComponent", filePath: "src/app/domains/domain-applications.component.ts", lineNumber: 166 });
})();

// src/app/domains/domain-authentication.component.ts
var _c04 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c14 = (a0, a1) => ({ key: "type", name: a0, size: "6rem", content: a1 });
var _c24 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6.5rem", sortable: false });
var _c33 = (a0, a1, a2) => [a0, a1, a2];
function DomainAuthenticationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.id);
  }
}
function DomainAuthenticationComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.type);
  }
}
function DomainAuthenticationComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_16_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editAuthSource(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainAuthenticationComponent_ng_template_16_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeAuthSource(row_r5));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "DOMAINS.AUTHENTICATION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "DOMAINS.AUTHENTICATION_REMOVE"));
  }
}
var DomainAuthenticationComponent = class _DomainAuthenticationComponent {
  _service = inject(DomainStateService);
  /** List of auth sources associated with the active domain */
  auth_sources = this._service.auth_sources;
  loading = this._service.loading;
  /** Mapping of auth sources to their type */
  source_types = {};
  newAuthSource = () => this._service.editAuthSource();
  editAuthSource = (source) => this._service.editAuthSource(source);
  removeAuthSource = (source) => this._service.deleteAuthSource(source);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function DomainAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainAuthenticationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAuthenticationComponent, selectors: [["domain-authentication"]], decls: 18, vars: 29, consts: [["name_template", ""], ["type_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-48", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[40rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], [1, "select-all", "text-xs", "opacity-30"], [1, "mono", "p-4", "text-sm", "uppercase"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function DomainAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
      \u0275\u0275listener("click", function DomainAuthenticationComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newAuthSource());
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275element(6, "mat-progress-bar", 7);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275element(8, "simple-table", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, DomainAuthenticationComponent_ng_template_12_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, DomainAuthenticationComponent_ng_template_14_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, DomainAuthenticationComponent_ng_template_16_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r7 = \u0275\u0275reference(13);
      const type_template_r8 = \u0275\u0275reference(15);
      const actions_template_r9 = \u0275\u0275reference(17);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.AUTHENTICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(7, 9, ctx.loading));
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.auth_sources)("columns", \u0275\u0275pureFunction3(25, _c33, \u0275\u0275pureFunction2(17, _c04, \u0275\u0275pipeBind1(9, 11, "COMMON.FIELD_NAME"), name_template_r7), \u0275\u0275pureFunction2(20, _c14, \u0275\u0275pipeBind1(10, 13, "DOMAINS.FIELD_TYPE"), type_template_r8), \u0275\u0275pureFunction1(23, _c24, actions_template_r9)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(11, 15, "DOMAINS.AUTHENTICATION_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-authentication.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainAuthenticationComponent, [{
    type: Component,
    args: [{ selector: "domain-authentication", template: `
        <div class="flex h-full w-full flex-col">
            <div header class="">
                <button
                    btn
                    class="mb-4 w-full sm:w-48"
                    (click)="newAuthSource()"
                >
                    {{ 'DOMAINS.AUTHENTICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async)"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[40rem] text-sm"
                    [data]="auth_sources"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'type',
                            name: 'DOMAINS.FIELD_TYPE' | translate,
                            size: '6rem',
                            content: type_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.AUTHENTICATION_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="select-all text-xs opacity-30">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #type_template let-row="row">
            <div class="mono p-4 text-sm uppercase">{{ row.type }}</div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'DOMAINS.AUTHENTICATION_EDIT' | translate"
                    (click)="editAuthSource(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'DOMAINS.AUTHENTICATION_REMOVE' | translate"
                    (click)="removeAuthSource(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      CommonModule,
      MatProgressBarModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-authentication.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-authentication.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAuthenticationComponent, { className: "DomainAuthenticationComponent", filePath: "src/app/domains/domain-authentication.component.ts", lineNumber: 110 });
})();

// src/app/domains/domain-users.component.ts
var _c05 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c15 = (a0, a1) => ({ key: "role", name: a0, content: a1, size: "6rem" });
var _c25 = (a0, a1) => [a0, a1];
function DomainUsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.email);
  }
}
function DomainUsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "code", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-20", !row_r2.sys_admin && !row_r2.support);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, row_r2.sys_admin ? "COMMON.USER_ADMIN" : row_r2.support ? "COMMON.USER_SUPPORT" : "COMMON.USER_BASIC"), " ");
  }
}
var DomainUsersComponent = class _DomainUsersComponent {
  _service = inject(DomainStateService);
  users = this._service.users;
  loading = this._service.loading;
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function DomainUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainUsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainUsersComponent, selectors: [["domain-users"]], decls: 11, vars: 23, consts: [["name_template", ""], ["role_template", ""], [1, "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], [1, "text-xs", "opacity-30"], [1, "p-4"], [1, "px-2", "py-1"]], template: function DomainUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "mat-progress-bar", 3);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275element(3, "simple-table", 4);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DomainUsersComponent_ng_template_7_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, DomainUsersComponent_ng_template_9_Template, 4, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r3 = \u0275\u0275reference(8);
      const role_template_r4 = \u0275\u0275reference(10);
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-0", !\u0275\u0275pipeBind1(2, 6, ctx.loading));
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.users)("columns", \u0275\u0275pureFunction2(20, _c25, \u0275\u0275pureFunction2(14, _c05, \u0275\u0275pipeBind1(4, 8, "DOMAINS.FIELD_USER"), name_template_r3), \u0275\u0275pureFunction2(17, _c15, \u0275\u0275pipeBind1(5, 10, "DOMAINS.FIELD_ROLE"), role_template_r4)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(6, 12, "DOMAINS.USER_LIST_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainUsersComponent, [{
    type: Component,
    args: [{ selector: "domain-users", template: `
        <div class="h-full w-full overflow-auto">
            <mat-progress-bar
                mode="indeterminate"
                class="w-full"
                [class.opacity-0]="!(loading | async)"
            ></mat-progress-bar>
            <simple-table
                class="block min-w-[32rem] text-sm"
                [data]="users"
                [columns]="[
                    {
                        key: 'name',
                        name: 'DOMAINS.FIELD_USER' | translate,
                        content: name_template,
                    },
                    {
                        key: 'role',
                        name: 'DOMAINS.FIELD_ROLE' | translate,
                        content: role_template,
                        size: '6rem',
                    },
                ]"
                [sortable]="true"
                [empty_message]="'DOMAINS.USER_LIST_EMPTY' | translate"
            ></simple-table>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="text-xs opacity-30">{{ row.email }}</div>
            </div>
        </ng-template>
        <ng-template #role_template let-row="row">
            <div class="p-4">
                <code
                    [class.opacity-20]="!row.sys_admin && !row.support"
                    class="px-2 py-1"
                >
                    {{
                        (row.sys_admin
                            ? 'COMMON.USER_ADMIN'
                            : row.support
                              ? 'COMMON.USER_SUPPORT'
                              : 'COMMON.USER_BASIC'
                        ) | translate
                    }}
                </code>
            </div>
        </ng-template>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      CommonModule,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-users.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-users.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainUsersComponent, { className: "DomainUsersComponent", filePath: "src/app/domains/domain-users.component.ts", lineNumber: 78 });
})();

// src/app/domains/domains.component.ts
function DomainsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 11);
    \u0275\u0275elementStart(3, "div", 12, 0);
    \u0275\u0275listener("scroll", function DomainsComponent_Conditional_11_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("extra_actions", ctx_r2.extra_actions)("type", \u0275\u0275pipeBind1(1, 7, "DOMAINS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list)("scrolled", ctx_r2.scroll() > 0);
  }
}
var DomainsComponent = class _DomainsComponent extends AsyncHandler {
  _service = inject(DomainStateService);
  _item = inject(ActiveItemService);
  name = "domains";
  open_menu = false;
  tab_list = [];
  extra_actions = [];
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  newItem = () => this._item.create();
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  ngOnInit() {
    this.extra_actions = [
      {
        label: "DOMAINS.AZURE_INTEGRATION",
        icon: "integration_instructions",
        action: () => this._service.performAzureIntegration()
      }
    ];
    this.updateTabList({});
    this.subscription("counts", this._service.counts.subscribe((c) => {
      this.updateTabList(c);
    }));
    this.subscription("items", this._service.item.subscribe((item) => this.item.set(item)));
  }
  updateTabList(count) {
    this.tab_list = [
      {
        id: "about",
        name: i18n("DOMAINS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "applications",
        name: i18n("DOMAINS.TAB_APPLICATIONS"),
        count: count.applications || 0,
        icon: { content: "login" }
      },
      {
        id: "authentication",
        name: i18n("DOMAINS.TAB_AUTHENTICATION"),
        count: count.auth_sources || 0,
        icon: { content: "lock_open" }
      },
      {
        id: "users",
        name: i18n("DOMAINS.TAB_USERS"),
        count: count.users || 0,
        icon: { content: "group" }
      }
    ].concat(this.extensions);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DomainsComponent_BaseFactory;
    return function DomainsComponent_Factory(__ngFactoryType__) {
      return (\u0275DomainsComponent_BaseFactory || (\u0275DomainsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DomainsComponent)))(__ngFactoryType__ || _DomainsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainsComponent, selectors: [["new-domains-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 13, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], [3, "can_edit", "item", "extra_actions", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function DomainsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function DomainsComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 4)(5, "item-selection", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function DomainsComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, DomainsComponent_Conditional_11_Template, 6, 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function DomainsComponent_Template_button_click_12_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(14, "icon", 9);
      \u0275\u0275text(15, "add");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance();
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 7, "DOMAINS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 9, "DOMAINS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 11, "DOMAINS.NEW"));
    }
  }, dependencies: [
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    MatRipple,
    RouterModule,
    RouterOutlet,
    ItemTablistComponent,
    ItemDetailsComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainsComponent, [{
    type: Component,
    args: [{ selector: "new-domains-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'DOMAINS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'DOMAINS.PLURAL' | translate"
                >
                    <button
                        btn
                        icon
                        class="mr-2 sm:hidden"
                        (click)="open_menu = true"
                    >
                        <icon>menu</icon>
                    </button>
                </item-selection>
                <div class="flex h-1/2 flex-1 flex-col">
                    @if (item()?.id) {
                        <item-details
                            [can_edit]="true"
                            [item]="item()"
                            [extra_actions]="extra_actions"
                            [type]="'DOMAINS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll() > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll.set(el.scrollTop)"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    }
                </div>
                <button
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                    [matTooltip]="'DOMAINS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
            </div>
        </div>
    `, imports: [
      IconComponent,
      MatTooltipModule,
      MatRipple,
      TranslatePipe,
      RouterModule,
      ItemTablistComponent,
      ItemDetailsComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainsComponent, { className: "DomainsComponent", filePath: "src/app/domains/domains.component.ts", lineNumber: 95 });
})();

// src/app/domains/domains.module.ts
var ROUTES = [
  {
    path: ":id",
    component: DomainsComponent,
    children: [
      { path: "about", component: DomainAboutComponent },
      { path: "applications", component: DomainApplicationsComponent },
      {
        path: "authentication",
        component: DomainAuthenticationComponent
      },
      { path: "users", component: DomainUsersComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppDomainsModule = class _AppDomainsModule {
  static \u0275fac = function AppDomainsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppDomainsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppDomainsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppDomainsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppDomainsModule,
  ROUTES
};
//# sourceMappingURL=chunk-VAICRN63.js.map
