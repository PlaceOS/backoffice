import {
  MarkdownPipe
} from "./chunk-YBXT3OEI.js";
import {
  DomainStateService
} from "./chunk-MAMFPY7F.js";
import "./chunk-GMKRGWIB.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-YBIBK3UQ.js";
import {
  SettingsFieldComponent
} from "./chunk-EIMCBAYP.js";
import "./chunk-YMHTGTAC.js";
import "./chunk-EOOX537V.js";
import "./chunk-JGUOPOO2.js";
import "./chunk-GAJW4KWA.js";
import "./chunk-V6SHQ5T3.js";
import "./chunk-2IQYSDB5.js";
import {
  validateJSONString
} from "./chunk-WKU6NAJG.js";
import "./chunk-TU5JPK72.js";
import "./chunk-QBEHGK7J.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-4CN23OQA.js";
import {
  Clipboard
} from "./chunk-K5IHFRPQ.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import "./chunk-BQR7GTXP.js";
import "./chunk-GR7PR5Q6.js";
import "./chunk-WDXKFFYO.js";
import "./chunk-FK3PXAKX.js";
import "./chunk-FSFNWGQP.js";
import "./chunk-RY3VY3I7.js";
import {
  FormField,
  form,
  submit,
  validate
} from "./chunk-W2EPZJRF.js";
import "./chunk-PSLPWDNG.js";
import "./chunk-HAWZID7H.js";
import "./chunk-2RUCGFPD.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-3SL5US3K.js";
import "./chunk-GZ3GGYHY.js";
import "./chunk-VLLM34JN.js";
import "./chunk-3SXDXCO7.js";
import "./chunk-HASFJPLN.js";
import "./chunk-7CC5FNME.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-QRPWL2EI.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AJCRFHSH.js";
import {
  TranslatePipe
} from "./chunk-4ZLGHXUI.js";
import {
  i18n
} from "./chunk-XJOCECBM.js";
import "./chunk-J5ZLUQMI.js";
import {
  tr
} from "./chunk-OTGYPXXQ.js";
import {
  IconComponent
} from "./chunk-NUJGQXME.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import {
  AsyncPipe
} from "./chunk-DKYBNEOC.js";
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
} from "./chunk-HGOGRFKW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/domains/domain-about.component.ts
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
function DomainAboutComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "settings-form-field", 14);
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
    \u0275\u0275elementStart(0, "settings-form-field", 14);
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
    \u0275\u0275elementStart(0, "section")(1, "mat-tab-group", 12);
    \u0275\u0275twoWayListener("selectedIndexChange", function DomainAboutComponent_Conditional_11_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.index, $event) || (ctx_r0.index = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(2, "mat-tab", 13);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "mat-tab", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DomainAboutComponent_Conditional_11_Conditional_6_Template, 1, 2, "settings-form-field", 14);
    \u0275\u0275conditionalCreate(7, DomainAboutComponent_Conditional_11_Conditional_7_Template, 1, 2, "settings-form-field", 14);
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
  index;
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAboutComponent, selectors: [["app-domain-about"]], decls: 12, vars: 10, consts: [[1, "h-full", "w-full", "overflow-auto", "p-4"], [1, "border-base-200", "relative", "my-2", "flex", "w-1/2", "min-w-[20rem]", "flex-col", "rounded-sm", "border", "p-4"], [1, "bg-base-200", "mb-2", "flex", "h-14", "w-full", "items-center", "justify-between", "rounded-sm", "px-2"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip", "disabled"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "selectable", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "text-base-300", "my-4"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-sm", "font-medium"], ["matRipple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", "select-text"], ["matRipple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", "select-text", 3, "click"], [1, "border-base-300", "border-x", "border-t", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], ["lang", "json", 3, "formField", "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(11, DomainAboutComponent_Conditional_11_Template, 8, 9, "section");
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
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(8, 8, "COMMON.SAVE_CHANGES"))("disabled", ctx.saving());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.form ? 11 : -1);
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
                            matRipple
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
                    matRipple
                    [matTooltip]="'COMMON.SAVE_CHANGES' | translate"
                    [disabled]="saving()"
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
                        <mat-tab
                            [label]="'DOMAINS.SETTINGS_CONFIG' | translate"
                        />
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
        </div>
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
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/domains/domain-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=domain-about.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAboutComponent, { className: "DomainAboutComponent", filePath: "src/app/domains/domain-about.component.ts", lineNumber: 127 });
})();
export {
  DomainAboutComponent
};
//# debugId=345e048d-01ce-5403-9b73-028345ee8946
//# sourceMappingURL=chunk-OOZ2MTWP.js.map
