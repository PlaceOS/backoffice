import {
  AdminDataService
} from "./chunk-VMUXKVOC.js";
import {
  DateFromPipe
} from "./chunk-PWWITZ5J.js";
import "./chunk-S2SB26WJ.js";
import {
  toQueryString
} from "./chunk-SDERNRDS.js";
import {
  SimpleTableComponent
} from "./chunk-JX3DYPLV.js";
import "./chunk-TPDHL3PI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import {
  confirmAndRun,
  openConfirmModal
} from "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import {
  ProgressBarComponent
} from "./chunk-DHD7TIH6.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-2DKDRFBI.js";
import "./chunk-UBUJ7KM4.js";
import {
  SettingsToggleComponent
} from "./chunk-A7VS2VYD.js";
import {
  SelectComponent
} from "./chunk-XLCDDNWX.js";
import {
  OptionComponent
} from "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import {
  FormField,
  form,
  required,
  submit
} from "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import {
  DIALOG_DATA,
  Dialog,
  DialogRef
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import {
  V,
  _,
  k,
  te,
  u
} from "./chunk-LCM7Z6QA.js";
import {
  escapeHtml
} from "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
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
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/signage-ai/signage-ai.fn.ts
var PATH = () => `${u()}/signage/ai`;
var SignageAIProvider = class {
  id;
  name;
  provider;
  authority_id;
  endpoint;
  location;
  default_model;
  allowed_models;
  enabled;
  is_default;
  quotas;
  created_at;
  updated_at;
  constructor(item = {}) {
    Object.assign(this, item);
  }
};
function search(params) {
  const query = toQueryString(params);
  return query ? `?${query}` : "";
}
async function querySignageAIProviders(params = {}) {
  const list = await _(
    `${PATH()}/providers${search(params)}`
  );
  return (list || []).map((item) => new SignageAIProvider(item));
}
async function saveSignageAIProvider(item) {
  const _a = item, { id } = _a, body = __objRest(_a, ["id"]);
  const result = id ? await te(`${PATH()}/providers/${encodeURIComponent(id)}`, body) : await k(`${PATH()}/providers`, body);
  return new SignageAIProvider(result);
}
function removeSignageAIProvider(id) {
  return V(`${PATH()}/providers/${encodeURIComponent(id)}`);
}
function testSignageAIProvider(id) {
  return k(
    `${PATH()}/providers/${encodeURIComponent(id)}/test`,
    {}
  );
}
function signageAIUsage(params = {}) {
  return _(`${PATH()}/usage${search(params)}`);
}

// src/app/admin/signage-ai/signage-ai-provider-modal.component.ts
function SignageAIProviderModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 2)(7, "label", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-form-field")(11, "input", 25);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 2)(13, "label", 26);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-form-field")(17, "textarea", 27);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 2)(19, "label", 28);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "app-form-field")(23, "input", 29);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 5);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "ADMIN.AI_PROVIDER_PROJECT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.project_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "ADMIN.AI_PROVIDER_CLIENT_EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.client_email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 13, "ADMIN.AI_PROVIDER_PRIVATE_KEY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.private_key);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 15, "ADMIN.AI_PROVIDER_LOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.location);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 17, "ADMIN.AI_PROVIDER_LOCATION_REQUIRED"), " ");
  }
}
function SignageAIProviderModalComponent_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "label", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-form-field")(6, "input", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 16)(8, "label", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-form-field")(12, "input", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "ADMIN.AI_PROVIDER_DEPLOYMENT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.deployment);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "ADMIN.AI_PROVIDER_API_VERSION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.api_version);
    \u0275\u0275control();
  }
}
function SignageAIProviderModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, SignageAIProviderModalComponent_Conditional_25_Conditional_6_Template, 13, 8, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "ADMIN.AI_PROVIDER_API_KEY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r0.form.api_key);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_azure() ? 6 : -1);
  }
}
var SIGNAGE_AI_CREDENTIAL_FIELDS = {
  OPENAI: ["api_key"],
  AZURE_OPENAI: ["api_key", "deployment", "api_version"],
  GOOGLE_VERTEX: ["project_id", "client_email", "private_key"]
};
var SignageAIProviderModalComponent = class _SignageAIProviderModalComponent {
  _data = inject(DIALOG_DATA);
  _dialog_ref = inject(DialogRef);
  item = this._data.item;
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form_model = signal(
    {
      id: this._data.item?.id || "",
      authority_id: this._data.item?.authority_id ?? "",
      name: this._data.item?.name || "",
      provider: this._data.item?.provider || "OPENAI",
      endpoint: this._data.item?.endpoint || "",
      location: this._data.item?.location || "",
      default_model: this._data.item?.default_model || "gpt-image-2.5-sunburst",
      enabled: this._data.item?.enabled ?? true,
      is_default: this._data.item?.is_default ?? false,
      user_per_day: this._data.item?.quotas?.user_per_day ?? 60,
      domain_per_month: this._data.item?.quotas?.domain_per_month ?? 2e3,
      // credentials, never returned by the API
      api_key: "",
      deployment: "",
      api_version: "",
      project_id: "",
      client_email: "",
      private_key: ""
    },
    ...ngDevMode ? [{ debugName: "form_model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.form_model, (path) => {
    required(path.name);
    required(path.provider);
    required(path.location, {
      when: ({ valueOf }) => valueOf(path.provider) === "GOOGLE_VERTEX"
    });
  });
  _credential_fields = computed(
    () => SIGNAGE_AI_CREDENTIAL_FIELDS[this.form_model().provider],
    ...ngDevMode ? [{ debugName: "_credential_fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_google = computed(
    () => this._credential_fields().includes("project_id"),
    ...ngDevMode ? [{ debugName: "is_google" }] : (
      /* istanbul ignore next */
      []
    )
  );
  is_azure = computed(
    () => this._credential_fields().includes("deployment"),
    ...ngDevMode ? [{ debugName: "is_azure" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async save() {
    await submit(this.form, async () => void 0);
    if (this.form().invalid())
      return;
    const model = this.form_model();
    const credentials = this._credentials(model);
    if (!model.id && !Object.keys(credentials).length) {
      notifyError(i18n("ADMIN.AI_PROVIDER_CREDENTIALS_REQUIRED"));
      return;
    }
    this.loading.set(i18n("ADMIN.AI_PROVIDER_SAVING"));
    const body = {
      id: model.id || void 0,
      name: model.name,
      provider: model.provider,
      authority_id: model.authority_id || null,
      // sent as an empty string rather than null when cleared: null means
      // "leave it alone", empty means "unset it"
      endpoint: model.endpoint,
      location: model.location,
      default_model: model.default_model,
      enabled: model.enabled,
      is_default: model.is_default,
      quotas: {
        user_per_day: +model.user_per_day,
        domain_per_month: +model.domain_per_month
      }
    };
    if (Object.keys(credentials).length)
      body.credentials = credentials;
    try {
      await saveSignageAIProvider(body);
    } catch (error) {
      return notifyError(`${i18n("ADMIN.AI_PROVIDER_SAVE_ERROR")}: ${await readError(error)}`);
    } finally {
      this.loading.set("");
    }
    notifySuccess(i18n("ADMIN.AI_PROVIDER_SAVE_SUCCESS"));
    this._dialog_ref.close(true);
  }
  _credentials(model) {
    const out = {};
    for (const field of SIGNAGE_AI_CREDENTIAL_FIELDS[model.provider]) {
      if (model[field])
        out[field] = model[field];
    }
    return out;
  }
  static \u0275fac = function SignageAIProviderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignageAIProviderModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageAIProviderModalComponent, selectors: [["app-signage-ai-provider-modal"]], decls: 57, vars: 40, consts: [[3, "save", "heading", "loading"], [1, "w-full"], [1, "flex", "flex-col"], ["for", "ai-name"], ["id", "ai-name", 3, "formField"], ["error", ""], ["for", "ai-provider", "id", "ai-provider-label"], ["id", "ai-provider", "aria-labelledby", "ai-provider-label", 3, "formField"], ["value", "OPENAI"], ["value", "AZURE_OPENAI"], ["value", "GOOGLE_VERTEX"], ["for", "ai-endpoint"], ["id", "ai-endpoint", 3, "formField"], ["for", "ai-default-model"], ["id", "ai-default-model", 3, "formField"], [1, "flex", "space-x-2"], [1, "flex", "flex-1", "flex-col"], ["for", "ai-user-per-day"], ["id", "ai-user-per-day", "type", "number", 3, "formField"], ["for", "ai-domain-per-month"], ["id", "ai-domain-per-month", "type", "number", 3, "formField"], [3, "formField"], ["for", "ai-project-id"], ["id", "ai-project-id", 3, "formField"], ["for", "ai-client-email"], ["id", "ai-client-email", 3, "formField"], ["for", "ai-private-key"], ["id", "ai-private-key", "rows", "4", 3, "formField"], ["for", "ai-location"], ["id", "ai-location", "placeholder", "us-central1", 3, "formField"], ["for", "ai-api-key"], ["id", "ai-api-key", 3, "formField"], ["for", "ai-deployment"], ["id", "ai-deployment", 3, "formField"], ["for", "ai-api-version"], ["id", "ai-api-version", 3, "formField"]], template: function SignageAIProviderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("save", function SignageAIProviderModalComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(2, "form", 1)(3, "div", 2)(4, "label", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "app-form-field")(8, "input", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 2)(13, "label", 6);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "app-form-field")(17, "app-select", 7);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(18, "app-option", 8);
      \u0275\u0275text(19, "OpenAI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "app-option", 9);
      \u0275\u0275text(21, "Azure OpenAI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "app-option", 10);
      \u0275\u0275text(23, "Google (Vertex)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(24, SignageAIProviderModalComponent_Conditional_24_Template, 27, 19)(25, SignageAIProviderModalComponent_Conditional_25_Template, 7, 5);
      \u0275\u0275elementStart(26, "div", 2)(27, "label", 11);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "app-form-field")(31, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 2)(33, "label", 13);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "app-form-field")(37, "input", 14);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 15)(39, "div", 16)(40, "label", 17);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "app-form-field")(44, "input", 18);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 16)(46, "label", 19);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "app-form-field")(50, "input", 20);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "settings-toggle", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "settings-toggle", 21);
      \u0275\u0275controlCreate();
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 20, ctx.item?.id ? "ADMIN.AI_PROVIDER_EDIT" : "ADMIN.AI_PROVIDER_NEW"))("loading", ctx.loading());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "ADMIN.AI_PROVIDER_NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.name);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 24, "ADMIN.AI_PROVIDER_NAME_REQUIRED"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 26, "ADMIN.AI_PROVIDER_VENDOR"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.provider);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.is_google() ? 24 : 25);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 28, "ADMIN.AI_PROVIDER_ENDPOINT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.endpoint);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 30, "ADMIN.AI_PROVIDER_MODEL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.default_model);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 32, "ADMIN.AI_PROVIDER_USER_QUOTA"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.user_per_day);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 34, "ADMIN.AI_PROVIDER_DOMAIN_QUOTA"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formField", ctx.form.domain_per_month);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("formField", ctx.form.enabled);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 36, "ADMIN.AI_PROVIDER_ENABLED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formField", ctx.form.is_default);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 38, "ADMIN.AI_PROVIDER_IS_DEFAULT"));
    }
  }, dependencies: [
    OptionComponent,
    SelectComponent,
    FormFieldComponent,
    FullscreenModalShellComponent,
    SettingsToggleComponent,
    FormField,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageAIProviderModalComponent, [{
    type: Component,
    args: [{ selector: "app-signage-ai-provider-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (item?.id ? 'ADMIN.AI_PROVIDER_EDIT' : 'ADMIN.AI_PROVIDER_NEW')
                    | translate
            "
            [loading]="loading()"
            (save)="save()"
        >
            <form class="w-full">
                <div class="flex flex-col">
                    <label for="ai-name">{{
                        'ADMIN.AI_PROVIDER_NAME' | translate
                    }}</label>
                    <app-form-field>
                        <input id="ai-name" [formField]="form.name" />
                        <div error>
                            {{ 'ADMIN.AI_PROVIDER_NAME_REQUIRED' | translate }}
                        </div>
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="ai-provider" id="ai-provider-label">{{
                        'ADMIN.AI_PROVIDER_VENDOR' | translate
                    }}</label>
                    <app-form-field>
                        <app-select
                            id="ai-provider"
                            aria-labelledby="ai-provider-label"
                            [formField]="form.provider"
                        >
                            <app-option value="OPENAI">OpenAI</app-option>
                            <app-option value="AZURE_OPENAI"
                                >Azure OpenAI</app-option
                            >
                            <app-option value="GOOGLE_VERTEX"
                                >Google (Vertex)</app-option
                            >
                        </app-select>
                    </app-form-field>
                </div>

                @if (is_google()) {
                    <div class="flex flex-col">
                        <label for="ai-project-id">{{
                            'ADMIN.AI_PROVIDER_PROJECT' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-project-id"
                                [formField]="form.project_id"
                            />
                        </app-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="ai-client-email">{{
                            'ADMIN.AI_PROVIDER_CLIENT_EMAIL' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-client-email"
                                [formField]="form.client_email"
                            />
                        </app-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="ai-private-key">{{
                            'ADMIN.AI_PROVIDER_PRIVATE_KEY' | translate
                        }}</label>
                        <app-form-field>
                            <textarea
                                id="ai-private-key"
                                rows="4"
                                [formField]="form.private_key"
                            ></textarea>
                        </app-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="ai-location">{{
                            'ADMIN.AI_PROVIDER_LOCATION' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-location"
                                [formField]="form.location"
                                placeholder="us-central1"
                            />
                            <div error>
                                {{
                                    'ADMIN.AI_PROVIDER_LOCATION_REQUIRED'
                                        | translate
                                }}
                            </div>
                        </app-form-field>
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="ai-api-key">{{
                            'ADMIN.AI_PROVIDER_API_KEY' | translate
                        }}</label>
                        <app-form-field>
                            <input id="ai-api-key" [formField]="form.api_key" />
                        </app-form-field>
                    </div>
                    @if (is_azure()) {
                        <div class="flex space-x-2">
                            <div class="flex flex-1 flex-col">
                                <label for="ai-deployment">{{
                                    'ADMIN.AI_PROVIDER_DEPLOYMENT' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="ai-deployment"
                                        [formField]="form.deployment"
                                    />
                                </app-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label for="ai-api-version">{{
                                    'ADMIN.AI_PROVIDER_API_VERSION' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="ai-api-version"
                                        [formField]="form.api_version"
                                    />
                                </app-form-field>
                            </div>
                        </div>
                    }
                }

                <div class="flex flex-col">
                    <label for="ai-endpoint">{{
                        'ADMIN.AI_PROVIDER_ENDPOINT' | translate
                    }}</label>
                    <app-form-field>
                        <input id="ai-endpoint" [formField]="form.endpoint" />
                    </app-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="ai-default-model">{{
                        'ADMIN.AI_PROVIDER_MODEL' | translate
                    }}</label>
                    <app-form-field>
                        <input
                            id="ai-default-model"
                            [formField]="form.default_model"
                        />
                    </app-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col">
                        <label for="ai-user-per-day">{{
                            'ADMIN.AI_PROVIDER_USER_QUOTA' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-user-per-day"
                                type="number"
                                [formField]="form.user_per_day"
                            />
                        </app-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label for="ai-domain-per-month">{{
                            'ADMIN.AI_PROVIDER_DOMAIN_QUOTA' | translate
                        }}</label>
                        <app-form-field>
                            <input
                                id="ai-domain-per-month"
                                type="number"
                                [formField]="form.domain_per_month"
                            />
                        </app-form-field>
                    </div>
                </div>
                <settings-toggle [formField]="form.enabled">{{
                    'ADMIN.AI_PROVIDER_ENABLED' | translate
                }}</settings-toggle>
                <settings-toggle [formField]="form.is_default">{{
                    'ADMIN.AI_PROVIDER_IS_DEFAULT' | translate
                }}</settings-toggle>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      OptionComponent,
      SelectComponent,
      FormFieldComponent,
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      TranslatePipe,
      FormField
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageAIProviderModalComponent, { className: "SignageAIProviderModalComponent", filePath: "src/app/admin/signage-ai/signage-ai-provider-modal.component.ts", lineNumber: 235 });
})();

// src/app/admin/signage-ai/signage-ai.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "provider", name: a0, content: a1, size: "10rem" });
var _c2 = (a0, a1) => ({ key: "default_model", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "updated_at", name: a0, content: a1, size: "10rem" });
var _c4 = (a0, a1) => ({ key: "enabled", name: a0, content: a1, size: "5.5rem" });
var _c5 = (a0, a1) => ({ key: "is_default", name: a0, content: a1, size: "5.5rem" });
var _c6 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, size: "9rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c8 = (a0, a1) => ({ key: "provider", name: a0, content: a1 });
var _c9 = (a0, a1) => ({ key: "model", name: a0, content: a1 });
var _c10 = (a0, a1) => ({ key: "jobs", name: a0, content: a1 });
var _c11 = (a0, a1) => ({ key: "candidates", name: a0, content: a1 });
var _c12 = (a0, a1) => ({ key: "images_produced", name: a0, content: a1 });
var _c13 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function SignageAIComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.provider_error(), " ");
  }
}
function SignageAIComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.usage_error(), " ");
  }
}
function SignageAIComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.domain?.name || row_r2.authority_id || "Any domain", " ");
  }
}
function SignageAIComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3);
  }
}
function SignageAIComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4);
  }
}
function SignageAIComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dateFrom");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, +data_r5 * 1e3));
  }
}
function SignageAIComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "icon", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", data_r6)("text-success-content", data_r6)("bg-error", !data_r6)("text-error-content", !data_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r6 ? "check" : "close");
  }
}
function SignageAIComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SignageAIComponent_ng_template_53_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.test(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "bolt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function SignageAIComponent_ng_template_53_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit(row_r8));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 29);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function SignageAIComponent_ng_template_53_Template_button_click_9_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(row_r8));
    });
    \u0275\u0275elementStart(11, "icon");
    \u0275\u0275text(12, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r0.testing())("appTooltip", \u0275\u0275pipeBind1(2, 4, "ADMIN.AI_PROVIDER_TEST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 6, "ADMIN.AI_PROVIDER_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(10, 8, "ADMIN.AI_PROVIDER_REMOVE"));
  }
}
var SignageAIComponent = class _SignageAIComponent {
  _dialog = inject(Dialog);
  _admin_data = inject(AdminDataService);
  loading = signal(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  providers = signal(
    [],
    ...ngDevMode ? [{ debugName: "providers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usage = signal(
    [],
    ...ngDevMode ? [{ debugName: "usage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  provider_error = signal(
    "",
    ...ngDevMode ? [{ debugName: "provider_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  usage_error = signal(
    "",
    ...ngDevMode ? [{ debugName: "usage_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  domain_list = this._admin_data.domain_list;
  provider_list = computed(
    () => this.providers().map((provider) => __spreadProps(__spreadValues({}, provider), {
      domain: this.domain_list().find((d) => d.id === provider.authority_id)
    })),
    ...ngDevMode ? [{ debugName: "provider_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    this.loading.set(i18n("ADMIN.AI_PROVIDERS_LOADING"));
    await this._admin_data.loadDomains();
    await this.load();
    this.loading.set("");
  }
  edit(item) {
    const ref = this._dialog.open(SignageAIProviderModalComponent, {
      data: { item }
    });
    ref.closed.subscribe(() => this.load());
  }
  testing = signal(
    "",
    ...ngDevMode ? [{ debugName: "testing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async test(item) {
    if (this.testing())
      return;
    const resp = await openConfirmModal({
      title: i18n("ADMIN.AI_PROVIDER_TEST_TITLE"),
      content: i18n("ADMIN.AI_PROVIDER_TEST_MSG", {
        name: escapeHtml(item.name)
      }),
      icon: { content: "bolt" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.close();
    this.testing.set(item.id);
    this.loading.set(i18n("ADMIN.AI_PROVIDER_TESTING"));
    const result = await testSignageAIProvider(item.id).catch(() => null);
    this.loading.set("");
    this.testing.set("");
    if (result?.ok) {
      notifySuccess(i18n("ADMIN.AI_PROVIDER_TEST_OK", {
        ms: `${result.latency_ms}`
      }));
    } else {
      notifyError(result?.error || i18n("ADMIN.AI_PROVIDER_TEST_FAILED"));
    }
  }
  async remove(item) {
    const removed = await confirmAndRun(this._dialog, {
      title: i18n("ADMIN.AI_PROVIDER_REMOVE_TITLE"),
      content: i18n("ADMIN.AI_PROVIDER_REMOVE_MSG", {
        name: escapeHtml(item.name)
      }),
      icon: { content: "delete_forever" }
    }, {
      loading: i18n("ADMIN.AI_PROVIDER_REMOVING"),
      action: () => removeSignageAIProvider(item.id),
      error: (reason) => `${i18n("ADMIN.AI_PROVIDER_REMOVE_FAILED")}: ${reason}`
    });
    if (removed)
      this.load();
  }
  async load() {
    this.loading.set(i18n("ADMIN.AI_PROVIDERS_LOADING"));
    this.provider_error.set("");
    this.usage_error.set("");
    const [provider_result, usage_result] = await Promise.allSettled([
      querySignageAIProviders(),
      signageAIUsage()
    ]);
    if (provider_result.status === "fulfilled") {
      this.providers.set(provider_result.value);
    } else {
      this.provider_error.set(i18n("ADMIN.AI_PROVIDERS_LOAD_FAILED"));
    }
    if (usage_result.status === "fulfilled") {
      this.usage.set(usage_result.value);
    } else {
      this.usage_error.set(i18n("ADMIN.AI_USAGE_LOAD_FAILED"));
    }
    this.loading.set("");
  }
  static \u0275fac = function SignageAIComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignageAIComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageAIComponent, selectors: [["app-signage-ai"]], decls: 55, vars: 111, consts: [["name_template", ""], ["code_template", ""], ["plain_template", ""], ["date_from_template", ""], ["bool_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "text-sm", "opacity-60"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "default", "", "ripple", "", 1, "text-xl", 3, "click", "appTooltip"], [1, "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "text-error/60", "bg-base-200", "w-full", "rounded-lg", "p-8", "text-center"], [1, "-mx-4", "overflow-x-auto", "px-4"], [1, "block", "w-max", "min-w-full", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "mt-8", "mb-2", "text-xl"], [1, "mb-2", "text-sm", "opacity-60"], [1, "-mx-4", "mb-8", "overflow-x-auto", "px-4"], [1, "block", "w-max", "min-w-full", "text-sm", 3, "data", "columns", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-xs", "opacity-30"], [1, "p-4"], [1, "flex", "h-full", "w-full", "items-center", "justify-center"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "disabled", "appTooltip"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"]], template: function SignageAIComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div")(3, "div", 8);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 9);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 10)(10, "button", 11);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("click", function SignageAIComponent_Template_button_click_10_listener() {
        return ctx.edit();
      });
      \u0275\u0275elementStart(13, "icon");
      \u0275\u0275text(14, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275element(16, "app-progress-bar", 13);
      \u0275\u0275conditionalCreate(17, SignageAIComponent_Conditional_17_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(18, "div", 15);
      \u0275\u0275element(19, "simple-table", 16);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 18);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(34, SignageAIComponent_Conditional_34_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(35, "div", 19);
      \u0275\u0275element(36, "simple-table", 20);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, SignageAIComponent_ng_template_43_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(45, SignageAIComponent_ng_template_45_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(47, SignageAIComponent_ng_template_47_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(49, SignageAIComponent_ng_template_49_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(51, SignageAIComponent_ng_template_51_Template, 4, 9, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(53, SignageAIComponent_ng_template_53_Template, 13, 10, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r9 = \u0275\u0275reference(44);
      const code_template_r10 = \u0275\u0275reference(46);
      const plain_template_r11 = \u0275\u0275reference(48);
      const date_from_template_r12 = \u0275\u0275reference(50);
      const bool_template_r13 = \u0275\u0275reference(52);
      const actions_template_r14 = \u0275\u0275reference(54);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 21, "ADMIN.AI_PROVIDERS_HEADER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 23, "ADMIN.AI_PROVIDERS_SCOPE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(11, 25, "ADMIN.AI_PROVIDER_ADD"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 27, "ADMIN.AI_PROVIDER_ADD"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.provider_error() ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.provider_error());
      \u0275\u0275property("data", ctx.provider_list())("columns", \u0275\u0275pureFunction7(82, _c7, \u0275\u0275pureFunction2(61, _c0, \u0275\u0275pipeBind1(20, 29, "ADMIN.AI_PROVIDER_NAME"), name_template_r9), \u0275\u0275pureFunction2(64, _c1, \u0275\u0275pipeBind1(21, 31, "ADMIN.AI_PROVIDER_VENDOR"), code_template_r10), \u0275\u0275pureFunction2(67, _c2, \u0275\u0275pipeBind1(22, 33, "ADMIN.AI_PROVIDER_MODEL"), code_template_r10), \u0275\u0275pureFunction2(70, _c3, \u0275\u0275pipeBind1(23, 35, "COMMON.UPDATED_AT"), date_from_template_r12), \u0275\u0275pureFunction2(73, _c4, \u0275\u0275pipeBind1(24, 37, "ADMIN.AI_PROVIDER_ENABLED"), bool_template_r13), \u0275\u0275pureFunction2(76, _c5, \u0275\u0275pipeBind1(25, 39, "ADMIN.AI_PROVIDER_IS_DEFAULT"), bool_template_r13), \u0275\u0275pureFunction2(79, _c6, \u0275\u0275pipeBind1(26, 41, "COMMON.ACTIONS"), actions_template_r14)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(27, 43, "ADMIN.AI_PROVIDERS_EMPTY"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 45, "ADMIN.AI_USAGE_HEADER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 47, "ADMIN.AI_USAGE_HINT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.usage_error() ? 34 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.usage_error());
      \u0275\u0275property("data", ctx.usage())("columns", \u0275\u0275pureFunction5(105, _c13, \u0275\u0275pureFunction2(90, _c8, \u0275\u0275pipeBind1(37, 49, "ADMIN.AI_PROVIDER_VENDOR"), code_template_r10), \u0275\u0275pureFunction2(93, _c9, \u0275\u0275pipeBind1(38, 51, "ADMIN.AI_PROVIDER_MODEL"), code_template_r10), \u0275\u0275pureFunction2(96, _c10, \u0275\u0275pipeBind1(39, 53, "ADMIN.AI_USAGE_JOBS"), plain_template_r11), \u0275\u0275pureFunction2(99, _c11, \u0275\u0275pipeBind1(40, 55, "ADMIN.AI_USAGE_ASKED"), plain_template_r11), \u0275\u0275pureFunction2(102, _c12, \u0275\u0275pipeBind1(41, 57, "ADMIN.AI_USAGE_MADE"), plain_template_r11)))("empty_message", \u0275\u0275pipeBind1(42, 59, "ADMIN.AI_USAGE_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
    DateFromPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageAIComponent, [{
    type: Component,
    args: [{ selector: "app-signage-ai", template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div>
                    <div class="text-2xl">
                        {{ 'ADMIN.AI_PROVIDERS_HEADER' | translate }}
                    </div>
                    <p class="text-sm opacity-60">
                        {{ 'ADMIN.AI_PROVIDERS_SCOPE' | translate }}
                    </p>
                </div>
                <div class="flex items-center space-x-2">
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        (click)="edit()"
                        [appTooltip]="'ADMIN.AI_PROVIDER_ADD' | translate"
                        [attr.aria-label]="'ADMIN.AI_PROVIDER_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div class="w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                @if (provider_error()) {
                    <div
                        class="text-error/60 bg-base-200 w-full rounded-lg p-8 text-center"
                    >
                        {{ provider_error() }}
                    </div>
                }
                <div class="-mx-4 overflow-x-auto px-4">
                    <simple-table
                        class="block w-max min-w-full text-sm"
                        [class.hidden]="provider_error()"
                        [data]="provider_list()"
                        [columns]="[
                            {
                                key: 'name',
                                name: 'ADMIN.AI_PROVIDER_NAME' | translate,
                                content: name_template,
                            },
                            {
                                key: 'provider',
                                name: 'ADMIN.AI_PROVIDER_VENDOR' | translate,
                                content: code_template,
                                size: '10rem',
                            },
                            {
                                key: 'default_model',
                                name: 'ADMIN.AI_PROVIDER_MODEL' | translate,
                                content: code_template,
                            },
                            {
                                key: 'updated_at',
                                name: 'COMMON.UPDATED_AT' | translate,
                                content: date_from_template,
                                size: '10rem',
                            },
                            {
                                key: 'enabled',
                                name: 'ADMIN.AI_PROVIDER_ENABLED' | translate,
                                content: bool_template,
                                size: '5.5rem',
                            },
                            {
                                key: 'is_default',
                                name:
                                    'ADMIN.AI_PROVIDER_IS_DEFAULT' | translate,
                                content: bool_template,
                                size: '5.5rem',
                            },
                            {
                                key: 'actions',
                                name: 'COMMON.ACTIONS' | translate,
                                hide_name: true,
                                content: actions_template,
                                size: '9rem',
                                sortable: false,
                            },
                        ]"
                        [sortable]="true"
                        [empty_message]="'ADMIN.AI_PROVIDERS_EMPTY' | translate"
                    />
                </div>

                <div class="mt-8 mb-2 text-xl">
                    {{ 'ADMIN.AI_USAGE_HEADER' | translate }}
                </div>
                <p class="mb-2 text-sm opacity-60">
                    {{ 'ADMIN.AI_USAGE_HINT' | translate }}
                </p>
                @if (usage_error()) {
                    <div
                        class="text-error/60 bg-base-200 w-full rounded-lg p-8 text-center"
                    >
                        {{ usage_error() }}
                    </div>
                }
                <div class="-mx-4 mb-8 overflow-x-auto px-4">
                    <simple-table
                        class="block w-max min-w-full text-sm"
                        [class.hidden]="usage_error()"
                        [data]="usage()"
                        [columns]="[
                            {
                                key: 'provider',
                                name: 'ADMIN.AI_PROVIDER_VENDOR' | translate,
                                content: code_template,
                            },
                            {
                                key: 'model',
                                name: 'ADMIN.AI_PROVIDER_MODEL' | translate,
                                content: code_template,
                            },
                            {
                                key: 'jobs',
                                name: 'ADMIN.AI_USAGE_JOBS' | translate,
                                content: plain_template,
                            },
                            {
                                key: 'candidates',
                                name: 'ADMIN.AI_USAGE_ASKED' | translate,
                                content: plain_template,
                            },
                            {
                                key: 'images_produced',
                                name: 'ADMIN.AI_USAGE_MADE' | translate,
                                content: plain_template,
                            },
                        ]"
                        [empty_message]="'ADMIN.AI_USAGE_EMPTY' | translate"
                    />
                </div>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.name }}</div>
                <div class="text-xs opacity-30">
                    {{ row.domain?.name || row.authority_id || 'Any domain' }}
                </div>
            </div>
        </ng-template>
        <ng-template #code_template let-data="data">
            <div class="p-4">
                <code>{{ data }}</code>
            </div>
        </ng-template>
        <ng-template #plain_template let-data="data">
            <div class="p-4">{{ data }}</div>
        </ng-template>
        <ng-template #date_from_template let-data="data">
            <div class="p-4">{{ +data * 1000 | dateFrom }}</div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div class="flex h-full w-full items-center justify-center">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-sm"
                    [class.bg-success]="data"
                    [class.text-success-content]="data"
                    [class.bg-error]="!data"
                    [class.text-error-content]="!data"
                >
                    <icon class="text-2xl">{{ data ? 'check' : 'close' }}</icon>
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    ripple
                    [disabled]="!!testing()"
                    [appTooltip]="'ADMIN.AI_PROVIDER_TEST' | translate"
                    (click)="test(row)"
                >
                    <icon>bolt</icon>
                </button>
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'ADMIN.AI_PROVIDER_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'ADMIN.AI_PROVIDER_REMOVE' | translate"
                    (click)="remove(row)"
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
      DateFromPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageAIComponent, { className: "SignageAIComponent", filePath: "src/app/admin/signage-ai/signage-ai.component.ts", lineNumber: 248 });
})();
export {
  SignageAIComponent
};
//# debugId=522b7a9a-4af9-5bdd-a117-1871100a64ad
//# sourceMappingURL=chunk-DDF66KPQ.js.map
