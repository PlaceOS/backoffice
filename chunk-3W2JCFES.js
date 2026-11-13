import {
  ChipListComponent
} from "./chunk-REL7BG6R.js";
import "./chunk-7UHZOKRJ.js";
import {
  isValidDomain
} from "./chunk-WKU6NAJG.js";
import {
  mergeFormItem,
  onSaveHotkey,
  submitFormDialog
} from "./chunk-NA6URCKI.js";
import {
  FullscreenModalShellComponent
} from "./chunk-5PVJFQI3.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-AEEAYNFO.js";
import "./chunk-BGDKOWYJ.js";
import "./chunk-ARF53UMV.js";
import "./chunk-WWSSYZEA.js";
import "./chunk-T3O7QHHC.js";
import {
  notifyWarn
} from "./chunk-2DKDRFBI.js";
import "./chunk-UBUJ7KM4.js";
import "./chunk-CH2YF4Y7.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import {
  FormField,
  form,
  pattern,
  required
} from "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-QSK7KYKQ.js";
import "./chunk-SQMBYJ2Q.js";
import {
  DIALOG_DATA,
  DialogRef
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  i18n
} from "./chunk-JJ65W2TY.js";
import {
  Xo,
  Yo
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  EventEmitter,
  Output,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/domains/domains.utilities.ts
function generateDomainFormModel(domain) {
  return {
    name: domain?.name || "",
    domain: domain?.domain || "",
    login_url: domain?.login_url || "",
    logout_url: domain?.logout_url || "",
    config: domain?.config || "",
    internals: domain?.internals || "",
    description: domain?.description || "",
    email_domains: domain?.email_domains || []
  };
}
var applyDomainFormSchema = (path) => {
  required(path.name);
  required(path.domain);
  pattern(path.domain, /^([a-zA-Z0-9._-])+$/);
};

// src/app/domains/domain-form.component.ts
var _c0 = () => ["Enter", ",", " "];
function DomainFormComponent_Conditional_1_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.NAME_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-form-field")(7, "input", 5);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, DomainFormComponent_Conditional_1_Conditional_2_Conditional_9_Template, 3, 3, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.name().invalid() && ctx_r0.form.name().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "COMMON.FIELD_NAME"))("formField", ctx_r0.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.name().invalid() ? 9 : -1);
  }
}
function DomainFormComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 8);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.domain().invalid() && ctx_r0.form.domain().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "DOMAINS.NAME_PLACEHOLDER"))("formField", ctx_r0.form.domain);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "DOMAINS.DOMAIN_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_1_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.LOGIN_URL_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 10);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_1_Conditional_4_Conditional_7_Template, 3, 3, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.login_url().invalid() && ctx_r0.form.login_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.LOGIN_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "DOMAINS.LOGIN_URL"))("formField", ctx_r0.form.login_url);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.login_url().invalid() ? 7 : -1);
  }
}
function DomainFormComponent_Conditional_1_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "DOMAINS.LOGOUT_URL_REQUIRED"), " ");
  }
}
function DomainFormComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "input", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_1_Conditional_5_Conditional_7_Template, 3, 3, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.logout_url().invalid() && ctx_r0.form.logout_url().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "DOMAINS.LOGOUT_URL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 8, "DOMAINS.LOGOUT_URL"))("formField", ctx_r0.form.logout_url);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.logout_url().invalid() ? 7 : -1);
  }
}
function DomainFormComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field")(5, "textarea", 14);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "COMMON.FIELD_DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "COMMON.FIELD_DESCRIPTION"))("formField", ctx_r0.form.description);
    \u0275\u0275control();
  }
}
function DomainFormComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-form-field", 16)(5, "app-chip-list", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("valueChange", function DomainFormComponent_Conditional_1_Conditional_7_Template_app_chip_list_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setEmailDomains($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.email_domains().invalid() && ctx_r0.form.email_domains().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, "DOMAINS.EMAIL_DOMAINS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "DOMAINS.EMAIL_DOMAINS"))("separators", \u0275\u0275pureFunction0(13, _c0))("value", ctx_r0.formModel().email_domains);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 11, "DOMAINS.EMAIL_DOMAINS"));
  }
}
function DomainFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, DomainFormComponent_Conditional_1_Conditional_2_Template, 10, 10, "div", 3);
    \u0275\u0275conditionalCreate(3, DomainFormComponent_Conditional_1_Conditional_3_Template, 10, 12, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DomainFormComponent_Conditional_1_Conditional_4_Template, 8, 10, "div", 3);
    \u0275\u0275conditionalCreate(5, DomainFormComponent_Conditional_1_Conditional_5_Template, 8, 10, "div", 3);
    \u0275\u0275conditionalCreate(6, DomainFormComponent_Conditional_1_Conditional_6_Template, 7, 7, "div", 3);
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_1_Conditional_7_Template, 8, 14, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.form.name ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.domain ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.login_url ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.logout_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.description ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.form.email_domains ? 7 : -1);
  }
}
var DomainFormComponent = class _DomainFormComponent {
  _dialog_ref = inject(DialogRef);
  _data = inject(DIALOG_DATA);
  _name = "DOMAINS";
  event = new EventEmitter();
  formModel = signal(
    generateDomainFormModel(this._data.item),
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, applyDomainFormSchema);
  loading = signal(
    null,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = i18n(`${this._name}.${this._data.item.id ? "EDIT" : "NEW"}`);
  /**
   * Update the email domains from the chip list.
   * New items that are not valid domains are dropped with a warning.
   */
  setEmailDomains(list) {
    const current = this.formModel().email_domains;
    const email_domains = list.filter((item) => current.includes(item) || isValidDomain(item));
    if (email_domains.length < list.length)
      notifyWarn("Invalid email");
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), { email_domains }));
  }
  constructor() {
    onSaveHotkey(() => this.submit());
  }
  async submit() {
    await submitFormDialog(this.form, {
      loading: this.loading,
      event: this.event,
      close: () => this._dialog_ref.close()
    }, `${this._name}.`, () => {
      const form_item = mergeFormItem(this._data.item, this.formModel());
      return form_item.id ? Yo(form_item.id, form_item) : Xo(form_item);
    });
  }
  static \u0275fac = function DomainFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainFormComponent, selectors: [["domain-form"]], outputs: { event: "event" }, decls: 2, vars: 3, consts: [[3, "save", "heading", "loading"], ["domain", "", 1, "flex", "flex-col"], [1, "fieldset"], [1, "field"], ["for", "domain-name"], ["id", "domain-name", 3, "placeholder", "formField"], ["error", ""], ["for", "domain"], ["id", "domain", 3, "placeholder", "formField"], ["for", "login-url"], ["id", "login-url", 3, "placeholder", "formField"], ["for", "logout-url"], ["id", "logout-url", 3, "placeholder", "formField"], ["for", "description"], ["id", "description", 3, "placeholder", "formField"], ["for", "email-domains-input"], [1, "w-full"], ["inputId", "email-domains-input", 3, "valueChange", "placeholder", "separators", "value"]], template: function DomainFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275listener("save", function DomainFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, DomainFormComponent_Conditional_1_Template, 8, 6, "form", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form ? 1 : -1);
    }
  }, dependencies: [
    FormFieldComponent,
    ChipListComponent,
    FormField,
    FullscreenModalShellComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainFormComponent, [{
    type: Component,
    args: [{
      selector: "domain-form",
      template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form domain class="flex flex-col">
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="domain-name"
                                    [class.error]="
                                        form.name().invalid() &&
                                        form.name().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <app-form-field>
                                    <input
                                        id="domain-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <div error>
                                            {{
                                                'DOMAINS.NAME_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                </app-form-field>
                            </div>
                        }
                        @if (form.domain) {
                            <div class="field">
                                <label
                                    for="domain"
                                    [class.error]="
                                        form.domain().invalid() &&
                                        form.domain().touched()
                                    "
                                >
                                    {{ 'DOMAINS.NAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="domain"
                                        [placeholder]="
                                            'DOMAINS.NAME_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.domain"
                                    />
                                    <div error>
                                        {{
                                            'DOMAINS.DOMAIN_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.login_url) {
                        <div class="field">
                            <label
                                for="login-url"
                                [class.error]="
                                    form.login_url().invalid() &&
                                    form.login_url().touched()
                                "
                            >
                                {{ 'DOMAINS.LOGIN_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="login-url"
                                    [placeholder]="
                                        'DOMAINS.LOGIN_URL' | translate
                                    "
                                    [formField]="form.login_url"
                                />
                                @if (form.login_url().invalid()) {
                                    <div error>
                                        {{
                                            'DOMAINS.LOGIN_URL_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                }
                            </app-form-field>
                        </div>
                    }
                    @if (form.logout_url) {
                        <div class="field">
                            <label
                                for="logout-url"
                                [class.error]="
                                    form.logout_url().invalid() &&
                                    form.logout_url().touched()
                                "
                            >
                                {{ 'DOMAINS.LOGOUT_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="logout-url"
                                    [placeholder]="
                                        'DOMAINS.LOGOUT_URL' | translate
                                    "
                                    [formField]="form.logout_url"
                                />
                                @if (form.logout_url().invalid()) {
                                    <div error>
                                        {{
                                            'DOMAINS.LOGOUT_URL_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                }
                            </app-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <app-form-field>
                                <textarea
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
                        </div>
                    }
                    @if (form.email_domains) {
                        <div class="field">
                            <label
                                for="email-domains-input"
                                [class.error]="
                                    form.email_domains().invalid() &&
                                    form.email_domains().touched()
                                "
                            >
                                {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="email-domains-input"
                                    [attr.aria-label]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                    [placeholder]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [value]="formModel().email_domains"
                                    (valueChange)="setEmailDomains($event)"
                                />
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
      imports: [
        FormFieldComponent,
        ChipListComponent,
        TranslatePipe,
        FormField,
        FullscreenModalShellComponent
      ]
    }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainFormComponent, { className: "DomainFormComponent", filePath: "src/app/domains/domain-form.component.ts", lineNumber: 206 });
})();
export {
  DomainFormComponent
};
//# debugId=002826e4-c4b0-51f0-845a-cafb5029c29f
//# sourceMappingURL=chunk-3W2JCFES.js.map
