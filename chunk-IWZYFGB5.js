import {
  MarkdownPipe
} from "./chunk-VINI7ES4.js";
import {
  DomainStateService
} from "./chunk-AXWHMXV2.js";
import "./chunk-7YGAMZA3.js";
import {
  TabsComponent
} from "./chunk-R4FMIWHE.js";
import {
  SettingsFieldComponent
} from "./chunk-PCGLPD4F.js";
import "./chunk-EOOX537V.js";
import "./chunk-GVPYT7HY.js";
import "./chunk-BMBCYN44.js";
import "./chunk-5D2EQCRN.js";
import "./chunk-Y4WKCRF4.js";
import "./chunk-R5EDKAWG.js";
import "./chunk-V4RQEEEC.js";
import "./chunk-CZ3A2OHY.js";
import "./chunk-ZRL2MCOS.js";
import "./chunk-JBQNBPPI.js";
import {
  validateJSONString
} from "./chunk-WKU6NAJG.js";
import "./chunk-FF4ADQI6.js";
import "./chunk-NVIFDAFS.js";
import "./chunk-6PURSEHW.js";
import {
  Clipboard
} from "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import {
  readError
} from "./chunk-HS2B2TZM.js";
import "./chunk-PESDTUFQ.js";
import "./chunk-ZUAP4Y6Q.js";
import "./chunk-RN3AWFUF.js";
import "./chunk-SBKLZZRV.js";
import "./chunk-LL56AHAM.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import "./chunk-NGPG5OWB.js";
import "./chunk-IDLJ3PCR.js";
import "./chunk-RMI5N2H2.js";
import "./chunk-44FYJ5G4.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-HCAPZU5B.js";
import "./chunk-U6VSGXZ4.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-ZOC3VF7F.js";
import {
  FormField,
  form,
  submit,
  validate
} from "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import "./chunk-PRQVSGD2.js";
import "./chunk-LD3K5ATK.js";
import "./chunk-Y2QSYZTA.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import {
  AsyncPipe
} from "./chunk-BRT76G6A.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/domains/domain-about.component.ts
var _c0 = (a0, a1) => [a0, a1];
function DomainAboutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h3", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 8);
    \u0275\u0275pipe(5, "markdown");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "hr", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 6, \u0275\u0275pipeBind1(5, 4, ctx_r0.item?.description)), \u0275\u0275sanitizeHtml);
  }
}
function DomainAboutComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function DomainAboutComponent_Conditional_2_For_5_Template_button_click_0_listener() {
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
function DomainAboutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DomainAboutComponent_Conditional_2_For_5_Template, 2, 1, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "DOMAINS.EMAIL_DOMAINS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.item?.email_domains);
  }
}
function DomainAboutComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-form-field", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.config)("readonly", false);
    \u0275\u0275control();
  }
}
function DomainAboutComponent_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-form-field", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.internals)("readonly", false);
    \u0275\u0275control();
  }
}
function DomainAboutComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "app-tabs", 13, 0);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("selectedIndexChange", function DomainAboutComponent_Conditional_11_Template_app_tabs_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.index, $event) || (ctx_r0.index = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275conditionalCreate(6, DomainAboutComponent_Conditional_11_Conditional_6_Template, 1, 2, "settings-form-field", 15);
    \u0275\u0275conditionalCreate(7, DomainAboutComponent_Conditional_11_Conditional_7_Template, 1, 2, "settings-form-field", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tabs_r5 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("labels", \u0275\u0275pureFunction2(10, _c0, \u0275\u0275pipeBind1(3, 6, "DOMAINS.SETTINGS_CONFIG"), \u0275\u0275pipeBind1(4, 8, "DOMAINS.SETTINGS_INTERNALS")));
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r0.index);
    \u0275\u0275advance(4);
    \u0275\u0275property("id", tabs_r5.panelId(ctx_r0.index));
    \u0275\u0275attribute("aria-labelledby", tabs_r5.tabId(ctx_r0.index));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.index !== 1 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.index === 1 ? 7 : -1);
  }
}
var DomainAboutComponent = class _DomainAboutComponent {
  _service = inject(DomainStateService);
  _clipboard = inject(Clipboard);
  /** Signal model for edit domain settings */
  formModel = signal(
    {
      config: "",
      internals: ""
    },
    ...ngDevMode ? [{ debugName: "formModel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = form(this.formModel, (path) => {
    validate(path.config, ({ value }) => validateJSONString({ value: value() }) ? { kind: "json", message: "Invalid JSON" } : void 0);
    validate(path.internals, ({ value }) => validateJSONString({ value: value() }) ? { kind: "json", message: "Invalid JSON" } : void 0);
  });
  /** Whether a settings save is in flight */
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Index of the active tab */
  index = 0;
  _item = this._service.item;
  get item() {
    return this._item();
  }
  constructor() {
    effect(() => {
      if (this._item())
        this.loadForm();
    });
  }
  copyEmailDomain(domain) {
    this._clipboard.copy(domain);
    notifySuccess(i18n("DOMAINS.COPIED_EMAIL_DOMAIN"));
  }
  /** Save changes to the settings fields */
  async saveChanges() {
    if (this.saving())
      return;
    await submit(this.form, async () => void 0);
    if (this.form().invalid())
      return notifyError(i18n("DOMAINS.SETTINGS_ERROR"));
    this.saving.set(true);
    try {
      const { config, internals } = this.formModel();
      const domain = __spreadProps(__spreadValues({}, this.item), {
        config: JSON.parse(config || "{}"),
        internals: JSON.parse(internals || "{}")
      });
      await this._service.update(domain);
      notifySuccess(i18n("DOMAINS.SETTINGS_SAVED"));
    } catch (err) {
      notifyError(i18n("DOMAINS.SAVE_ERROR", { error: await readError(err) }));
    } finally {
      this.saving.set(false);
    }
  }
  /** Load settings fields for active item */
  loadForm() {
    const item = this.item;
    if (!item)
      return;
    this.formModel.set({
      internals: JSON.stringify(item.internals, void 0, 4),
      config: JSON.stringify(item.config, void 0, 4)
    });
  }
  static \u0275fac = function DomainAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAboutComponent, selectors: [["app-domain-about"]], decls: 12, vars: 10, consts: [["tabs", ""], [1, "h-full", "w-full", "overflow-auto", "p-4"], [1, "border-base-200", "relative", "my-2", "flex", "w-1/2", "min-w-[20rem]", "flex-col", "rounded-sm", "border", "p-4"], [1, "bg-base-200", "mb-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "px-2"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip", "disabled"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "text-base-300", "my-4"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-sm", "font-medium"], ["ripple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", "select-text"], ["ripple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", "select-text", 3, "click"], [1, "border-base-300", "border-x", "border-t", 3, "selectedIndexChange", "labels", "selectedIndex"], ["role", "tabpanel", 3, "id"], ["lang", "json", 3, "formField", "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, DomainAboutComponent_Conditional_1_Template, 8, 8);
      \u0275\u0275conditionalCreate(2, DomainAboutComponent_Conditional_2_Template, 6, 3, "div", 2);
      \u0275\u0275elementStart(3, "header", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("click", function DomainAboutComponent_Template_button_click_7_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275elementStart(9, "icon");
      \u0275\u0275text(10, "save");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, DomainAboutComponent_Conditional_11_Template, 8, 13, "section");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.description ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.email_domains?.length ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "COMMON.SETTINGS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(8, 8, "COMMON.SAVE_CHANGES"))("disabled", ctx.saving());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.form ? 11 : -1);
    }
  }, dependencies: [
    TooltipDirective,
    SettingsFieldComponent,
    TabsComponent,
    FormField,
    IconComponent,
    TranslatePipe,
    AsyncPipe,
    MarkdownPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainAboutComponent, [{
    type: Component,
    args: [{ selector: "app-domain-about", template: `
        <div class="h-full w-full overflow-auto p-4">
            @if (item?.description) {
                <div class="border-base-200 w-full rounded-sm border">
                    <h3
                        class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown selectable w-full overflow-auto p-4 text-sm"
                        [innerHTML]="item?.description | markdown | async"
                    ></div>
                </div>
                <hr class="text-base-300 my-4" />
            }
            @if (item?.email_domains?.length) {
                <div
                    class="border-base-200 relative my-2 flex w-1/2 min-w-[20rem] flex-col rounded-sm border p-4"
                >
                    <div
                        class="bg-base-100 absolute top-0 left-4 -translate-y-1/2 rounded-sm p-2 text-sm font-medium"
                    >
                        {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                    </div>
                    @for (domain of item?.email_domains; track domain) {
                        <button
                            ripple
                            class="mono hover:bg-base-200 rounded-sm p-2 text-left text-sm select-text"
                            (click)="copyEmailDomain(domain)"
                        >
                            {{ domain }}
                        </button>
                    }
                </div>
            }
            <header
                class="bg-base-200 mb-2 flex h-14 w-full items-center justify-between rounded-sm px-2"
            >
                <h3 class="px-2 text-lg font-medium">
                    {{ 'COMMON.SETTINGS' | translate }}
                </h3>
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'COMMON.SAVE_CHANGES' | translate"
                    [disabled]="saving()"
                    (click)="saveChanges()"
                >
                    <icon>save</icon>
                </button>
            </header>
            @if (form) {
                <section>
                    <app-tabs
                        #tabs
                        class="border-base-300 border-x border-t"
                        [labels]="[
                            'DOMAINS.SETTINGS_CONFIG' | translate,
                            'DOMAINS.SETTINGS_INTERNALS' | translate,
                        ]"
                        [(selectedIndex)]="index"
                    />
                    <div
                        role="tabpanel"
                        [id]="tabs.panelId(index)"
                        [attr.aria-labelledby]="tabs.tabId(index)"
                    >
                        @if (index !== 1) {
                            <settings-form-field
                                [formField]="form.config"
                                lang="json"
                                [readonly]="false"
                            />
                        }
                        @if (index === 1) {
                            <settings-form-field
                                [formField]="form.internals"
                                lang="json"
                                [readonly]="false"
                            />
                        }
                    </div>
                </section>
            }
        </div>
    `, imports: [
      TooltipDirective,
      SettingsFieldComponent,
      TabsComponent,
      FormField,
      IconComponent,
      TranslatePipe,
      AsyncPipe,
      MarkdownPipe
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/domains/domain-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAboutComponent, { className: "DomainAboutComponent", filePath: "src/app/domains/domain-about.component.ts", lineNumber: 129 });
})();
export {
  DomainAboutComponent
};
//# debugId=474b714c-7794-568c-81d3-1f5fc1b12f60
//# sourceMappingURL=chunk-IWZYFGB5.js.map
