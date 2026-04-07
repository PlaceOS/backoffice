import {
  d
} from "./chunk-OMHAHFWO.js";
import {
  SettingsFieldComponent
} from "./chunk-DTDVAUDI.js";
import {
  DomainStateService
} from "./chunk-TDQLZ4V2.js";
import "./chunk-U5M4ZHE2.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-AFHNIDCE.js";
import {
  SanitizePipe,
  validateJSONString
} from "./chunk-XLTJ4T7V.js";
import "./chunk-J533RESC.js";
import "./chunk-XOD6WJGY.js";
import "./chunk-AIHAF754.js";
import "./chunk-ND6UXKI3.js";
import "./chunk-OWJOYUIE.js";
import {
  Clipboard
} from "./chunk-BFHNQYWR.js";
import "./chunk-RKP6PC35.js";
import {
  toSignal
} from "./chunk-IF34OMLM.js";
import "./chunk-JIQ6FGOU.js";
import "./chunk-WHWJVSMC.js";
import "./chunk-E3PNC77F.js";
import "./chunk-YBTJMEJ7.js";
import "./chunk-44XOPICB.js";
import "./chunk-4NCGIIWF.js";
import "./chunk-TOOU46W3.js";
import "./chunk-V3YN7DYB.js";
import "./chunk-DCE2RQNA.js";
import "./chunk-3JWNFX4R.js";
import "./chunk-VJXF7KZU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-7C6AG3JT.js";
import "./chunk-LT47WTVV.js";
import "./chunk-RCORFESO.js";
import "./chunk-DOZGI6ZZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-HSU73SXZ.js";
import "./chunk-NYRBL7ZZ.js";
import {
  AsyncHandler
} from "./chunk-WOXAUFUX.js";
import "./chunk-57N53QWS.js";
import {
  IconComponent
} from "./chunk-NCFVLWM3.js";
import "./chunk-BYMT2HZ7.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-5FUDJCQW.js";
import {
  MatRippleModule
} from "./chunk-VR6A7KSI.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-WUSBQZCM.js";
import "./chunk-CAQMKDI5.js";
import {
  MatRipple
} from "./chunk-2XVJ4BI6.js";
import {
  Component,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  computed,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
} from "./chunk-BCGHR3SD.js";
import {
  to
} from "./chunk-XPRAFMHR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

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
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 4, ctx_r0.description()), \u0275\u0275sanitizeHtml);
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
    \u0275\u0275repeater(ctx_r0.item == null ? null : ctx_r0.item.email_domains);
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
  _item = toSignal(this._service.item, {
    initialValue: null
  });
  get item() {
    return this._item();
  }
  /** HTML string for rendering the description */
  description = computed(() => d(this.item?.description || "", { async: false }), ...ngDevMode ? [{ debugName: "description" }] : []);
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
  /** Save changes to the form fields */
  async saveChanges() {
    if (!this.form.valid)
      return notifyError(i18n("DOMAINS.SETTINGS_ERROR"));
    const domain = new to(__spreadProps(__spreadValues({}, this.item), {
      config: JSON.parse(this.form.value.config),
      internals: JSON.parse(this.form.value.internals)
    }));
    await this._service.update(domain);
    notifySuccess(i18n("DOMAINS.SETTINGS_SAVED"));
  }
  /** Load form fields for active item */
  loadForm() {
    const item = this.item;
    if (!item)
      return;
    this.form.patchValue({
      internals: JSON.stringify(item.internals, void 0, 4),
      config: JSON.stringify(item.config, void 0, 4)
    });
  }
  static \u0275fac = function DomainAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainAboutComponent, selectors: [["app-domain-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 9, consts: [[1, "border-base-200", "relative", "my-2", "flex", "w-1/2", "min-w-[20rem]", "flex-col", "rounded-sm", "border", "p-4"], [1, "bg-base-200", "mb-2", "flex", "h-16", "w-full", "items-center", "justify-between", "rounded-sm", "px-2", "text-lg", "font-medium"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "rounded-sm", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "formGroup"], [1, "border-base-200", "w-full", "rounded-sm", "border"], [1, "bg-base-200", "w-full", "rounded-sm", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [1, "text-base-300", "my-4"], [1, "bg-base-100", "absolute", "top-0", "left-4", "-translate-y-1/2", "rounded-sm", "p-2", "text-sm", "font-medium"], ["matRipple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm"], ["matRipple", "", 1, "mono", "hover:bg-base-200", "rounded-sm", "p-2", "text-left", "text-sm", 3, "click"], [1, "border-base-300", "border-x", "border-t", 3, "selectedIndexChange", "selectedIndex"], [3, "label"], ["formControlName", "config", "lang", "json", 3, "readonly"], ["formControlName", "internals", "lang", "json", 3, "readonly"]], template: function DomainAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275conditional((ctx.item == null ? null : ctx.item.email_domains == null ? null : ctx.item.email_domains.length) ? 1 : -1);
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
            <div class="border-base-200 w-full rounded-sm border">
                <h3
                    class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                >
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description() | sanitize"
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
            class="bg-base-200 mb-2 flex h-16 w-full items-center justify-between rounded-sm px-2 text-lg font-medium"
        >
            <h3 class="px-2 text-lg font-medium">
                {{ 'COMMON.SETTINGS' | translate }}
            </h3>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content rounded-sm"
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
                    class="border-base-300 border-x border-t"
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainAboutComponent, { className: "DomainAboutComponent", filePath: "src/app/domains/domain-about.component.ts", lineNumber: 122 });
})();
export {
  DomainAboutComponent
};
//# sourceMappingURL=chunk-XPP5OASV.js.map
