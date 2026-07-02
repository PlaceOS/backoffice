import {
  MarkdownPipe
} from "./chunk-WYHBVUWQ.js";
import {
  SettingsFieldComponent
} from "./chunk-T6AJVKHA.js";
import {
  DomainStateService
} from "./chunk-YFYW4G5M.js";
import "./chunk-ORJAI5QA.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-KV3CZZ5A.js";
import {
  validateJSONString
} from "./chunk-S43ZXTP5.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-GILXWXRU.js";
import "./chunk-4SAVGYEQ.js";
import "./chunk-OEMHCWD4.js";
import "./chunk-4X4PTSQA.js";
import "./chunk-VRNJC5BQ.js";
import {
  Clipboard
} from "./chunk-GDZ4KU6N.js";
import "./chunk-IYBVLYEV.js";
import "./chunk-KJQGK2OM.js";
import {
  FormField,
  form,
  submit,
  validate
} from "./chunk-SCU2ZHTT.js";
import "./chunk-UVXXRHB2.js";
import "./chunk-WD33FJZ2.js";
import "./chunk-V64DN2T3.js";
import "./chunk-LL5BPSQ6.js";
import "./chunk-WAZQJR33.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-6AAMXG3P.js";
import "./chunk-RG3TS5UW.js";
import "./chunk-NOZWPHCR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-P45XEGRE.js";
import "./chunk-VH6NLWUW.js";
import "./chunk-RAEUAH5O.js";
import "./chunk-NFDUIW5Q.js";
import "./chunk-XQUTEU4C.js";
import "./chunk-NEJBMBL3.js";
import "./chunk-HLJBC2QQ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-AQMMFGML.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-BTCSHLQ6.js";
import "./chunk-Y4WYMPD6.js";
import "./chunk-5QDDRDNC.js";
import {
  AsyncHandler
} from "./chunk-OU4ZSGGA.js";
import {
  MatRippleModule
} from "./chunk-RHXWHY3G.js";
import "./chunk-IYFQDTHB.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-ZCVCPEH7.js";
import {
  IconComponent
} from "./chunk-2OXMVWQR.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-MXRJFREE.js";
import {
  MatRipple
} from "./chunk-M7TMFMYW.js";
import {
  AsyncPipe
} from "./chunk-VARF64W7.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  signal,
  zi,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/domains/domain-about.component.ts
function DomainAboutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 6);
    \u0275\u0275pipe(5, "markdown");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "hr", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 6, \u0275\u0275pipeBind1(5, 4, ctx_r0.item?.description)), \u0275\u0275sanitizeHtml);
  }
}
function DomainAboutComponent_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
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
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, DomainAboutComponent_Conditional_1_For_5_Template, 2, 1, "button", 9, \u0275\u0275repeaterTrackByIdentity);
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
function DomainAboutComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-form-field", 13);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.config)("readonly", false);
    \u0275\u0275control();
  }
}
function DomainAboutComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-form-field", 13);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formField", ctx_r0.form.internals)("readonly", false);
    \u0275\u0275control();
  }
}
function DomainAboutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section")(1, "mat-tab-group", 11);
    \u0275\u0275twoWayListener("selectedIndexChange", function DomainAboutComponent_Conditional_10_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.index, $event) || (ctx_r0.index = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(2, "mat-tab", 12);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "mat-tab", 12);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DomainAboutComponent_Conditional_10_Conditional_6_Template, 1, 2, "settings-form-field", 13);
    \u0275\u0275conditionalCreate(7, DomainAboutComponent_Conditional_10_Conditional_7_Template, 1, 2, "settings-form-field", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selectedIndex", ctx_r0.index);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 5, "DOMAINS.SETTINGS_CONFIG"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 7, "DOMAINS.SETTINGS_INTERNALS"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.index !== 1 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.index === 1 ? 7 : -1);
  }
}
var DomainAboutComponent = class _DomainAboutComponent extends AsyncHandler {
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
  /** Index of the active tab */
  index;
  _item = this._service.item;
  get item() {
    return this._item();
  }
  constructor() {
    super();
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
    await submit(this.form, async () => void 0);
    if (this.form().invalid())
      return notifyError(i18n("DOMAINS.SETTINGS_ERROR"));
    const domain = new zi(__spreadProps(__spreadValues({}, this.item), {
      config: JSON.parse(this.formModel().config),
      internals: JSON.parse(this.formModel().internals)
    }));
    await this._service.update(domain);
    notifySuccess(i18n("DOMAINS.SETTINGS_SAVED"));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAboutComponent, selectors: [["app-domain-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 9, consts: [[1, "border-base-200", "relative", "my-2", "flex", "w-1/2", "min-w-[20rem]", "flex-col", "rounded-sm", "border", "p-4"], [1, "bg-base-200", "mb-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "px-2"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "text-base-300", "my-4"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-sm", "font-medium"], ["matRipple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm"], ["matRipple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", 3, "click"], [1, "border-base-300", "border-x", "border-t", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], ["lang", "json", 3, "formField", "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DomainAboutComponent_Conditional_0_Template, 8, 8);
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
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "save");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, DomainAboutComponent_Conditional_10_Template, 8, 9, "section");
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.item?.description ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.email_domains?.length ? 1 : -1);
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
    FormField,
    MatRippleModule,
    MatRipple,
    IconComponent,
    MatTooltipModule,
    MatTooltip,
    TranslatePipe,
    AsyncPipe,
    MarkdownPipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainAboutComponent, [{
    type: Component,
    args: [{ selector: "app-domain-about", template: `
        @if (item?.description) {
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
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
                        matRipple
                        class="mono hover:bg-base-200 rounded-sm p-2 text-left text-sm"
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
                matRipple
                [matTooltip]="'COMMON.SAVE_CHANGES' | translate"
                (click)="saveChanges()"
            >
                <icon>save</icon>
            </button>
        </header>
        @if (form) {
            <section>
                <mat-tab-group
                    [(selectedIndex)]="index"
                    class="border-base-300 border-x border-t"
                >
                    <mat-tab [label]="'DOMAINS.SETTINGS_CONFIG' | translate" />
                    <mat-tab
                        [label]="'DOMAINS.SETTINGS_INTERNALS' | translate"
                    />
                </mat-tab-group>
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
    `, imports: [
      SettingsFieldComponent,
      MatTabsModule,
      FormField,
      MatRippleModule,
      IconComponent,
      MatTooltipModule,
      TranslatePipe,
      AsyncPipe,
      MarkdownPipe
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/domains/domain-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAboutComponent, { className: "DomainAboutComponent", filePath: "src/app/domains/domain-about.component.ts", lineNumber: 122 });
})();
export {
  DomainAboutComponent
};
//# sourceMappingURL=chunk-SV362QYL.js.map
