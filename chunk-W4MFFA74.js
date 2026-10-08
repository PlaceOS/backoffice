import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-PT5AMIUU.js";
import {
  isValidDomain
} from "./chunk-F45UEFFY.js";
import {
  addSignalChipItem,
  getInvalidSignalFields,
  removeSignalChipItem
} from "./chunk-OKMGGQII.js";
import {
  FormField,
  form,
  pattern,
  required,
  submit
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
  MatInput,
  MatInputModule
} from "./chunk-WVKNYC6X.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-IGQAWJ6Y.js";
import "./chunk-TUWOEI35.js";
import {
  notifyError,
  notifySuccess,
  notifyWarn
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
import "./chunk-PSYHHKS3.js";
import "./chunk-GORY6HKE.js";
import "./chunk-SXYVSUAR.js";
import {
  Ko,
  Zo,
  oi
} from "./chunk-P3FA5CPP.js";
import {
  IconComponent
} from "./chunk-Y7HZB3U4.js";
import "./chunk-5NTI54SQ.js";
import "./chunk-YEGFHODJ.js";
import "./chunk-ZVFWHHSJ.js";
import "./chunk-H4IW3C2Y.js";
import {
  COMMA,
  ENTER,
  SPACE
} from "./chunk-DZQDK6ER.js";
import "./chunk-FVPQ6H6W.js";
import "./chunk-QHKUHZUG.js";
import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
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
  ɵɵgetInheritedFactory,
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
var _c0 = (a0) => ({ item: a0 });
function DomainFormComponent_Conditional_1_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 6);
    \u0275\u0275element(7, "input", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, DomainFormComponent_Conditional_1_Conditional_2_Conditional_9_Template, 3, 3, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "mat-error");
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "DOMAINS.DOMAIN_REQUIRED"));
  }
}
function DomainFormComponent_Conditional_1_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 11);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_1_Conditional_4_Conditional_7_Template, 3, 3, "mat-error");
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
    \u0275\u0275elementStart(0, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_1_Conditional_5_Conditional_7_Template, 3, 3, "mat-error");
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
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 6);
    \u0275\u0275element(5, "textarea", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
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
function DomainFormComponent_Conditional_1_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 19);
    \u0275\u0275listener("removed", function DomainFormComponent_Conditional_1_Conditional_7_For_9_Template_mat_chip_row_removed_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeEmailDomain(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
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
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 2, "COMMON.ITEM_REMOVE", \u0275\u0275pureFunction1(5, _c0, item_r4)));
  }
}
function DomainFormComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17)(5, "mat-chip-grid", null, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, DomainFormComponent_Conditional_1_Conditional_7_For_9_Template, 7, 7, "mat-chip-row", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 18);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("matChipInputTokenEnd", function DomainFormComponent_Conditional_1_Conditional_7_Template_input_matChipInputTokenEnd_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addEmailDomain($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chipList_r5 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r0.form.email_domains().invalid() && ctx_r0.form.email_domains().touched());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "DOMAINS.EMAIL_DOMAINS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 10, "DOMAINS.EMAIL_DOMAINS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.email_domain_list());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "DOMAINS.EMAIL_DOMAINS"))("matChipInputFor", chipList_r5)("matChipInputSeparatorKeyCodes", ctx_r0.separators)("matChipInputAddOnBlur", true);
  }
}
function DomainFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, DomainFormComponent_Conditional_1_Conditional_2_Template, 10, 10, "div", 4);
    \u0275\u0275conditionalCreate(3, DomainFormComponent_Conditional_1_Conditional_3_Template, 10, 12, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DomainFormComponent_Conditional_1_Conditional_4_Template, 8, 10, "div", 4);
    \u0275\u0275conditionalCreate(5, DomainFormComponent_Conditional_1_Conditional_5_Template, 8, 10, "div", 4);
    \u0275\u0275conditionalCreate(6, DomainFormComponent_Conditional_1_Conditional_6_Template, 7, 7, "div", 4);
    \u0275\u0275conditionalCreate(7, DomainFormComponent_Conditional_1_Conditional_7_Template, 12, 14, "div", 4);
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
var DomainFormComponent = class _DomainFormComponent extends AsyncHandler {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  _hotkey = inject(HotkeysService);
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
  /** List of separator characters for tags */
  separators = [ENTER, COMMA, SPACE];
  addEmailDomain = (e) => {
    if (!e?.value)
      return;
    if (!isValidDomain(e.value))
      return notifyWarn("Invalid email");
    this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
      email_domains: addSignalChipItem(value.email_domains, e)
    }));
  };
  removeEmailDomain = (i) => this.formModel.update((value) => __spreadProps(__spreadValues({}, value), {
    email_domains: removeSignalChipItem(value.email_domains, i)
  }));
  email_domain_list = computed(
    () => this.formModel().email_domains || [],
    ...ngDevMode ? [{ debugName: "email_domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.subscription("save_item_key", this._hotkey.listen(["KeyS"], () => this.submit()));
  }
  async submit() {
    await submit(this.form, async () => {
      const item = this._data.item;
      this.loading.set(i18n(`${this._name}.SAVING`));
      this._dialog_ref.disableClose = true;
      const item_json = item.toJSON ? item.toJSON() : item;
      const form_item = item.id ? oi(__spreadValues(__spreadValues({}, item_json), this.formModel()), [
        void 0
      ]) : __spreadValues(__spreadValues({}, item_json), this.formModel());
      try {
        const _item = await (form_item.id ? Ko(form_item.id, form_item) : Zo(form_item));
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
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DomainFormComponent_BaseFactory;
    return function DomainFormComponent_Factory(__ngFactoryType__) {
      return (\u0275DomainFormComponent_BaseFactory || (\u0275DomainFormComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DomainFormComponent)))(__ngFactoryType__ || _DomainFormComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainFormComponent, selectors: [["domain-form"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["chipList", ""], [3, "save", "heading", "loading"], ["domain", "", 1, "flex", "flex-col"], [1, "fieldset"], [1, "field"], ["for", "domain-name"], ["appearance", "outline"], ["matInput", "", "id", "domain-name", 3, "placeholder", "formField"], ["for", "domain"], ["matInput", "", "id", "domain", 3, "placeholder", "formField"], ["for", "login-url"], ["matInput", "", "id", "login-url", 3, "placeholder", "formField"], ["for", "logout-url"], ["matInput", "", "id", "logout-url", 3, "placeholder", "formField"], ["for", "description"], ["matInput", "", "id", "description", 3, "placeholder", "formField"], ["for", "email-domains-input"], ["appearance", "outline", 1, "w-full"], ["id", "email-domains-input", 3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], [1, "max-w-md", "truncate"], ["type", "button", "matChipRemove", ""]], template: function DomainFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 1);
      \u0275\u0275listener("save", function DomainFormComponent_Template_fullscreen_modal_shell_save_0_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(1, DomainFormComponent_Conditional_1_Template, 8, 6, "form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.heading)("loading", ctx.loading());
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
    MatInputModule,
    MatInput,
    FormField,
    IconComponent,
    FullscreenModalShellComponent,
    TranslatePipe
  ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=domain-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainFormComponent, [{
    type: Component,
    args: [{ selector: "domain-form", template: `
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="domain-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <mat-error>
                                            {{
                                                'DOMAINS.NAME_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    }
                                </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        id="domain"
                                        [placeholder]="
                                            'DOMAINS.NAME_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.domain"
                                    />
                                    <mat-error>{{
                                        'DOMAINS.DOMAIN_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="login-url"
                                    [placeholder]="
                                        'DOMAINS.LOGIN_URL' | translate
                                    "
                                    [formField]="form.login_url"
                                />
                                @if (form.login_url().invalid()) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LOGIN_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    id="logout-url"
                                    [placeholder]="
                                        'DOMAINS.LOGOUT_URL' | translate
                                    "
                                    [formField]="form.logout_url"
                                />
                                @if (form.logout_url().invalid()) {
                                    <mat-error>
                                        {{
                                            'DOMAINS.LOGOUT_URL_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">{{
                                'COMMON.FIELD_DESCRIPTION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    [attr.aria-label]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                >
                                    @for (
                                        item of email_domain_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="removeEmailDomain(item)"
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
                                    id="email-domains-input"
                                    [placeholder]="
                                        'DOMAINS.EMAIL_DOMAINS' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addEmailDomain($event)
                                    "
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
      MatInputModule,
      TranslatePipe,
      FormField,
      IconComponent,
      FullscreenModalShellComponent
    ], styles: ["/* angular:styles/component:css;04b7a7094a437298576db2a062c3593f3d6712155227875ebf15729043ce208e;/home/runner/work/backoffice/backoffice/src/app/domains/domain-form.component.ts */\nmat-checkbox {\n  margin-top: 2.5em;\n  margin-bottom: 1.5em;\n}\n@media screen and (max-width: 640px) {\n  mat-checkbox {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=domain-form.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainFormComponent, { className: "DomainFormComponent", filePath: "src/app/domains/domain-form.component.ts", lineNumber: 281 });
})();
export {
  DomainFormComponent
};
//# sourceMappingURL=chunk-W4MFFA74.js.map
