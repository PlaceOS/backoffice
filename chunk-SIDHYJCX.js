import {
  MarkdownPipe
} from "./chunk-R4BPIWI6.js";
import {
  DomainStateService
} from "./chunk-XPZVTTGR.js";
import "./chunk-QDXNUZX6.js";
import {
  TabsComponent
} from "./chunk-WW7UXSTZ.js";
import {
  SettingsFieldComponent
} from "./chunk-YKTQN25X.js";
import "./chunk-EOOX537V.js";
import "./chunk-OVCELRPG.js";
import "./chunk-GYIE66SW.js";
import "./chunk-DO2Q7VNO.js";
import "./chunk-GUFVJINE.js";
import "./chunk-3CXGWY3Q.js";
import {
  validateJSONString
} from "./chunk-WKU6NAJG.js";
import "./chunk-PTOKT7PW.js";
import "./chunk-M5B4HMCQ.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-IYFCSDMQ.js";
import {
  Clipboard
} from "./chunk-7CBN7LBF.js";
import "./chunk-M7QWVZ5D.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import "./chunk-GEDUPXB2.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-ZYXD5WKE.js";
import "./chunk-G2A4D7CX.js";
import "./chunk-32E64OOS.js";
import "./chunk-ZLRMIFQU.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import {
  FormField,
  form,
  submit,
  validate
} from "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-TUKKKEUM.js";
import {
  i18n
} from "./chunk-RWWXPWHW.js";
import {
  tr
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-3IK2VA5B.js";
import "./chunk-JRTGZB2U.js";
import {
  TooltipDirective
} from "./chunk-X2L3FRYF.js";
import "./chunk-POM3EJZY.js";
import "./chunk-B36VAJ7U.js";
import "./chunk-3REUN4UT.js";
import {
  AsyncPipe
} from "./chunk-XWSZBFF5.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/domains/domain-about.component.ts
var _c0 = (a0, a1) => [a0, a1];
function DomainAboutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 7);
    \u0275\u0275pipe(5, "markdown");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "hr", 8);
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
    \u0275\u0275elementStart(0, "button", 11);
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
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DomainAboutComponent_Conditional_2_For_5_Template, 2, 1, "button", 10, \u0275\u0275repeaterTrackByIdentity);
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
function DomainAboutComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-form-field", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.config)("readonly", false);
    \u0275\u0275control();
  }
}
function DomainAboutComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-form-field", 13);
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
    \u0275\u0275elementStart(0, "section")(1, "app-tabs", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("selectedIndexChange", function DomainAboutComponent_Conditional_11_Template_app_tabs_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.index, $event) || (ctx_r0.index = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DomainAboutComponent_Conditional_11_Conditional_4_Template, 1, 2, "settings-form-field", 13);
    \u0275\u0275conditionalCreate(5, DomainAboutComponent_Conditional_11_Conditional_5_Template, 1, 2, "settings-form-field", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("labels", \u0275\u0275pureFunction2(8, _c0, \u0275\u0275pipeBind1(2, 4, "DOMAINS.SETTINGS_CONFIG"), \u0275\u0275pipeBind1(3, 6, "DOMAINS.SETTINGS_INTERNALS")));
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r0.index);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.index !== 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.index === 1 ? 5 : -1);
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
      const domain = new tr(__spreadProps(__spreadValues({}, this.item), {
        config: JSON.parse(config || "{}"),
        internals: JSON.parse(internals || "{}")
      }));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAboutComponent, selectors: [["app-domain-about"]], decls: 12, vars: 10, consts: [[1, "h-full", "w-full", "overflow-auto", "p-4"], [1, "border-base-200", "relative", "my-2", "flex", "w-1/2", "min-w-[20rem]", "flex-col", "rounded-sm", "border", "p-4"], [1, "bg-base-200", "mb-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "px-2"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip", "disabled"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "text-base-300", "my-4"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-sm", "font-medium"], ["ripple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", "select-text"], ["ripple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", "select-text", 3, "click"], [1, "border-base-300", "border-x", "border-t", 3, "selectedIndexChange", "labels", "selectedIndex"], ["lang", "json", 3, "formField", "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, DomainAboutComponent_Conditional_1_Template, 8, 8);
      \u0275\u0275conditionalCreate(2, DomainAboutComponent_Conditional_2_Template, 6, 3, "div", 1);
      \u0275\u0275elementStart(3, "header", 2)(4, "h3", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("click", function DomainAboutComponent_Template_button_click_7_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275elementStart(9, "icon");
      \u0275\u0275text(10, "save");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, DomainAboutComponent_Conditional_11_Template, 6, 11, "section");
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
                        class="border-base-300 border-x border-t"
                        [labels]="[
                            'DOMAINS.SETTINGS_CONFIG' | translate,
                            'DOMAINS.SETTINGS_INTERNALS' | translate,
                        ]"
                        [(selectedIndex)]="index"
                    />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAboutComponent, { className: "DomainAboutComponent", filePath: "src/app/domains/domain-about.component.ts", lineNumber: 122 });
})();
export {
  DomainAboutComponent
};
//# debugId=04897148-9423-5182-abfe-6fa8d7eb6d67
//# sourceMappingURL=chunk-SIDHYJCX.js.map
