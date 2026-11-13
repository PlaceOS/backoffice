import {
  DomainStateService
} from "./chunk-N4CMJTYC.js";
import "./chunk-YSDTASBD.js";
import {
  SimpleTableComponent
} from "./chunk-MBA33NAB.js";
import "./chunk-JNEMVL3M.js";
import "./chunk-5VEIPREF.js";
import "./chunk-UF4RIHSK.js";
import "./chunk-URQNJTMD.js";
import "./chunk-3CXGWY3Q.js";
import "./chunk-WKU6NAJG.js";
import "./chunk-QUCOHQEE.js";
import "./chunk-BT6T4Y5W.js";
import "./chunk-2NDQ6VEG.js";
import "./chunk-ML24CAVR.js";
import "./chunk-TOPLF626.js";
import "./chunk-7CBN7LBF.js";
import "./chunk-IKU4CZIN.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-RPCO7W3D.js";
import {
  ProgressBarComponent
} from "./chunk-XFWRCLJY.js";
import "./chunk-BPSZRBL2.js";
import "./chunk-5N7DC3QB.js";
import {
  notifyInfo
} from "./chunk-ZYXD5WKE.js";
import "./chunk-SHWF4MFV.js";
import "./chunk-32E64OOS.js";
import "./chunk-GR5HLJ6A.js";
import "./chunk-ZPWJKOG5.js";
import "./chunk-ZXDSRNPN.js";
import "./chunk-7CN2TEC2.js";
import "./chunk-I2BE2RKH.js";
import "./chunk-BE6PEWTW.js";
import "./chunk-JGF7XJRI.js";
import "./chunk-ENT6KTBQ.js";
import "./chunk-PUVLCN6F.js";
import "./chunk-OB35UHVX.js";
import "./chunk-YOF5WDB4.js";
import "./chunk-CZLJS5TO.js";
import {
  TranslatePipe
} from "./chunk-HBFI5TAK.js";
import {
  i18n
} from "./chunk-RQOHFMTH.js";
import "./chunk-LCM7Z6QA.js";
import {
  copyToClipboard
} from "./chunk-DGKMQHVX.js";
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
import "./chunk-XWSZBFF5.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/domains/domain-applications.component.ts
var _c0 = (a0) => ({ key: "name", name: "Name", content: a0 });
var _c1 = (a0, a1) => ({ key: "redirect_uri", name: a0, content: a1, size: "20rem" });
var _c2 = (a0, a1) => ({ key: "uid", name: a0, content: a1, size: "17rem" });
var _c3 = (a0, a1) => ({ key: "secret", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "scopes", name: "Scopes", content: a0 });
var _c5 = (a0, a1) => ({ key: "subsystems", name: a0, content: a1 });
var _c6 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, size: "6rem", sortable: false, content: a1 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c8 = () => [];
function DomainApplicationsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
  }
}
function DomainApplicationsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275property("href", row_r2.redirect_uri, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.redirect_uri, " ");
  }
}
function DomainApplicationsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.uid);
  }
}
function DomainApplicationsComponent_ng_template_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DOMAINS.SECRET_HIDDEN"));
  }
}
function DomainApplicationsComponent_ng_template_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.secret);
  }
}
function DomainApplicationsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_20_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.copySecret(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("mousedown", function DomainApplicationsComponent_ng_template_20_Template_button_mousedown_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, true));
    })("touchstart", function DomainApplicationsComponent_ng_template_20_Template_button_touchstart_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, true));
    })("mouseup", function DomainApplicationsComponent_ng_template_20_Template_button_mouseup_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, false));
    }, \u0275\u0275resolveWindow)("touchend", function DomainApplicationsComponent_ng_template_20_Template_button_touchend_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, false));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275conditionalCreate(10, DomainApplicationsComponent_ng_template_20_Conditional_10_Template, 3, 3, "span", 21);
    \u0275\u0275conditionalCreate(11, DomainApplicationsComponent_ng_template_20_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 4, "DOMAINS.COPY_SECRET"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 6, "DOMAINS.VIEW_SECRET"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r5.show_secret()[row_r5.id] ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.show_secret()[row_r5.id] ? 11 : -1);
  }
}
function DomainApplicationsComponent_ng_template_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subsystem_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subsystem_r7);
  }
}
function DomainApplicationsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, DomainApplicationsComponent_ng_template_22_For_2_Template, 2, 1, "span", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r8.subsystems || \u0275\u0275pureFunction0(0, _c8));
  }
}
function DomainApplicationsComponent_ng_template_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scope_r9);
  }
}
function DomainApplicationsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, DomainApplicationsComponent_ng_template_24_For_2_Template, 2, 1, "span", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.scopeList(row_r10));
  }
}
function DomainApplicationsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_26_Template_button_click_1_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editApplication(row_r12));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_26_Template_button_click_5_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeApplication(row_r12));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(2, 2, "DOMAINS.APPLICATION_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(6, 4, "DOMAINS.APPLICATION_REMOVE"));
  }
}
var DomainApplicationsComponent = class _DomainApplicationsComponent {
  _service = inject(DomainStateService);
  /** List of applications associated with the active domain */
  applications = this._service.applications;
  loading = this._service.loading;
  show_secret = signal(
    {},
    ...ngDevMode ? [{ debugName: "show_secret" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newApplication = () => this._service.editApplication();
  editApplication = (item) => this._service.editApplication(item);
  removeApplication = (item) => this._service.deleteApplication(item);
  scopeList = (item) => `${item.scopes || ""}`.split(/\s+/).filter((_) => !!_);
  get item() {
    return this._service.active_item;
  }
  copySecret(item) {
    this.setShowSecret(item.id, false);
    copyToClipboard(item.secret);
    notifyInfo(i18n("DOMAINS.COPIED_SECRET"));
  }
  setShowSecret(id, value) {
    if (!!this.show_secret()[id] === value)
      return;
    this.show_secret.update((state) => __spreadProps(__spreadValues({}, state), { [id]: value }));
  }
  static \u0275fac = function DomainApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainApplicationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainApplicationsComponent, selectors: [["domain-applications"]], decls: 28, vars: 48, consts: [["name_template", ""], ["redirect_template", ""], ["client_id_template", ""], ["secret_template", ""], ["subsystems_template", ""], ["scopes_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, "px-4", "pt-4"], ["btn", "", 1, "mb-4", "w-full", "sm:w-40", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4", "pb-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-360", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], ["target", "_blank", 1, "truncate", "p-4", "underline", 3, "href"], [1, "p-4", "font-mono", "text-xs"], [1, "flex", "items-center", "gap-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "appTooltip"], ["icon", "", "default", "", "ripple", "", 3, "mousedown", "touchstart", "mouseup", "touchend", "appTooltip"], [1, "font-mono", "text-xs"], [1, "bg-base-200", "rounded-sm", "p-2"], ["role", "list", "aria-label", "Subsystems", 1, "flex", "max-w-80", "flex-wrap", "gap-2", "p-2"], ["role", "listitem", 1, "chip"], ["role", "list", "aria-label", "Scopes", 1, "flex", "max-w-80", "flex-wrap", "gap-2", "p-2"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "error", "", "ripple", "", 3, "click", "appTooltip"]], template: function DomainApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "button", 9);
      \u0275\u0275listener("click", function DomainApplicationsComponent_Template_button_click_2_listener() {
        return ctx.newApplication();
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 10);
      \u0275\u0275element(6, "app-progress-bar", 11)(7, "simple-table", 12);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, DomainApplicationsComponent_ng_template_14_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, DomainApplicationsComponent_ng_template_16_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, DomainApplicationsComponent_ng_template_18_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, DomainApplicationsComponent_ng_template_20_Template, 12, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, DomainApplicationsComponent_ng_template_22_Template, 3, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(24, DomainApplicationsComponent_ng_template_24_Template, 3, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(26, DomainApplicationsComponent_ng_template_26_Template, 9, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r13 = \u0275\u0275reference(15);
      const redirect_template_r14 = \u0275\u0275reference(17);
      const client_id_template_r15 = \u0275\u0275reference(19);
      const secret_template_r16 = \u0275\u0275reference(21);
      const subsystems_template_r17 = \u0275\u0275reference(23);
      const scopes_template_r18 = \u0275\u0275reference(25);
      const actions_template_r19 = \u0275\u0275reference(27);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.APPLICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.applications)("columns", \u0275\u0275pureFunction7(40, _c7, \u0275\u0275pureFunction1(21, _c0, name_template_r13), \u0275\u0275pureFunction2(23, _c1, \u0275\u0275pipeBind1(8, 9, "DOMAINS.FIELD_REDIRECT_URI"), redirect_template_r14), \u0275\u0275pureFunction2(26, _c2, \u0275\u0275pipeBind1(9, 11, "DOMAINS.FIELD_CLIENT_ID"), client_id_template_r15), \u0275\u0275pureFunction2(29, _c3, \u0275\u0275pipeBind1(10, 13, "DOMAINS.FIELD_CLIENT_SECRET"), secret_template_r16), \u0275\u0275pureFunction1(32, _c4, scopes_template_r18), \u0275\u0275pureFunction2(34, _c5, \u0275\u0275pipeBind1(11, 15, "DOMAINS.APP_SUBSYSTEMS"), subsystems_template_r17), \u0275\u0275pureFunction2(37, _c6, \u0275\u0275pipeBind1(12, 17, "COMMON.ACTIONS"), actions_template_r19)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 19, "DOMAINS.APPLICATIONS_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    SimpleTableComponent,
    IconComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainApplicationsComponent, [{
    type: Component,
    args: [{ selector: "domain-applications", template: `
        <div class="flex h-full w-full flex-col">
            <div header class="px-4 pt-4">
                <button
                    btn
                    class="mb-4 w-full sm:w-40"
                    (click)="newApplication()"
                >
                    {{ 'DOMAINS.APPLICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4 pb-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                <simple-table
                    class="block min-w-360 text-sm"
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
                        {
                            key: 'scopes',
                            name: 'Scopes',
                            content: scopes_template,
                        },
                        {
                            key: 'subsystems',
                            name: 'DOMAINS.APP_SUBSYSTEMS' | translate,
                            content: subsystems_template,
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6rem',
                            sortable: false,
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.APPLICATIONS_EMPTY' | translate"
                />
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
            <div class="flex items-center gap-2 p-2">
                <button
                    icon
                    default
                    ripple
                    (click)="copySecret(row)"
                    [appTooltip]="'DOMAINS.COPY_SECRET' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    default
                    ripple
                    (mousedown)="setShowSecret(row.id, true)"
                    (touchstart)="setShowSecret(row.id, true)"
                    (window:mouseup)="setShowSecret(row.id, false)"
                    (window:touchend)="setShowSecret(row.id, false)"
                    [appTooltip]="'DOMAINS.VIEW_SECRET' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <div class="font-mono text-xs">
                    @if (!show_secret()[row.id]) {
                        <span class="bg-base-200 rounded-sm p-2">{{
                            'DOMAINS.SECRET_HIDDEN' | translate
                        }}</span>
                    }
                    @if (show_secret()[row.id]) {
                        <span>{{ row.secret }}</span>
                    }
                </div>
            </div>
        </ng-template>
        <ng-template #subsystems_template let-row="row">
            <div
                class="flex max-w-80 flex-wrap gap-2 p-2"
                role="list"
                aria-label="Subsystems"
            >
                @for (subsystem of row.subsystems || []; track subsystem) {
                    <span class="chip" role="listitem">{{ subsystem }}</span>
                }
            </div>
        </ng-template>
        <ng-template #scopes_template let-row="row">
            <div
                class="flex max-w-80 flex-wrap gap-2 p-2"
                role="list"
                aria-label="Scopes"
            >
                @for (scope of scopeList(row); track scope) {
                    <span class="chip" role="listitem">{{ scope }}</span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'DOMAINS.APPLICATION_EDIT' | translate"
                    (click)="editApplication(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'DOMAINS.APPLICATION_REMOVE' | translate"
                    (click)="removeApplication(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      SimpleTableComponent,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;17bc51cfbb521883;/home/runner/work/backoffice/backoffice/src/app/domains/domain-applications.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainApplicationsComponent, { className: "DomainApplicationsComponent", filePath: "src/app/domains/domain-applications.component.ts", lineNumber: 198 });
})();
export {
  DomainApplicationsComponent
};
//# debugId=7e331b67-6ae3-5b3b-b374-13d04c84c8c4
//# sourceMappingURL=chunk-TVOBGTB3.js.map
