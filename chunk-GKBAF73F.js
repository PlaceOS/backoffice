import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import {
  DomainStateService
} from "./chunk-PEKU3JPS.js";
import "./chunk-525MXRFP.js";
import "./chunk-YFCKK2RZ.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-XDPTKZ2J.js";
import "./chunk-UJLZHD3F.js";
import "./chunk-5EBMUX3Z.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-C7NP5PYP.js";
import "./chunk-Q4KWDWQX.js";
import "./chunk-KQ433EDT.js";
import "./chunk-JZPASCCB.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-64N44YTD.js";
import "./chunk-KFDTJANW.js";
import {
  SimpleTableComponent
} from "./chunk-FCU3WVEC.js";
import "./chunk-RNDWB2WI.js";
import "./chunk-WRAPQBH6.js";
import "./chunk-QBKMLLEQ.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-3VJIC3YA.js";
import "./chunk-J5O27MHS.js";
import "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import "./chunk-6FMO72CJ.js";
import "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-FM3IA4KE.js";
import "./chunk-BCSV2YPE.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KHVEC2ZJ.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import "./chunk-JJ5DNIGX.js";
import {
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-JMC7E3RS.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import {
  copyToClipboard
} from "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  MatRipple
} from "./chunk-2UI5N333.js";
import "./chunk-5TQT6AWS.js";
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
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/domains/domain-applications.component.ts
var _c0 = (a0) => ({ key: "name", name: "Name", content: a0 });
var _c1 = (a0, a1) => ({ key: "redirect_uri", name: a0, content: a1, size: "20rem" });
var _c2 = (a0, a1) => ({ key: "uid", name: a0, content: a1, size: "17rem" });
var _c3 = (a0, a1) => ({ key: "secret", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "scopes", name: "Scopes", content: a0 });
var _c5 = (a0, a1) => ({ key: "subsystems", name: a0, content: a1 });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "6rem", sortable: false, content: a0 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
var _c8 = () => [];
function DomainApplicationsComponent_ng_template_13_Template(rf, ctx) {
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
function DomainApplicationsComponent_ng_template_15_Template(rf, ctx) {
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
function DomainApplicationsComponent_ng_template_17_Template(rf, ctx) {
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
function DomainApplicationsComponent_ng_template_19_Conditional_10_Template(rf, ctx) {
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
function DomainApplicationsComponent_ng_template_19_Conditional_11_Template(rf, ctx) {
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
function DomainApplicationsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_19_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.copySecret(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("mousedown", function DomainApplicationsComponent_ng_template_19_Template_button_mousedown_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, true));
    })("touchstart", function DomainApplicationsComponent_ng_template_19_Template_button_touchstart_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, true));
    })("mouseup", function DomainApplicationsComponent_ng_template_19_Template_button_mouseup_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, false));
    }, \u0275\u0275resolveWindow)("touchend", function DomainApplicationsComponent_ng_template_19_Template_button_touchend_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setShowSecret(row_r5.id, false));
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275conditionalCreate(10, DomainApplicationsComponent_ng_template_19_Conditional_10_Template, 3, 3, "span", 21);
    \u0275\u0275conditionalCreate(11, DomainApplicationsComponent_ng_template_19_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "DOMAINS.COPY_SECRET"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "DOMAINS.VIEW_SECRET"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r5.show_secret()[row_r5.id] ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r5.show_secret()[row_r5.id] ? 11 : -1);
  }
}
function DomainApplicationsComponent_ng_template_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subsystem_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subsystem_r7);
  }
}
function DomainApplicationsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-set", 22);
    \u0275\u0275repeaterCreate(1, DomainApplicationsComponent_ng_template_21_For_2_Template, 2, 1, "mat-chip", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r8.subsystems || \u0275\u0275pureFunction0(0, _c8));
  }
}
function DomainApplicationsComponent_ng_template_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scope_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(scope_r9);
  }
}
function DomainApplicationsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-set", 23);
    \u0275\u0275repeaterCreate(1, DomainApplicationsComponent_ng_template_23_For_2_Template, 2, 1, "mat-chip", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.scopeList(row_r10));
  }
}
function DomainApplicationsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_25_Template_button_click_1_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editApplication(row_r12));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_25_Template_button_click_5_listener() {
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
    this.show_secret.update((state) => __spreadProps(__spreadValues({}, state), { [id]: value }));
  }
  static \u0275fac = function DomainApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainApplicationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainApplicationsComponent, selectors: [["domain-applications"]], decls: 27, vars: 45, consts: [["name_template", ""], ["redirect_template", ""], ["client_id_template", ""], ["secret_template", ""], ["subsystems_template", ""], ["scopes_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-40", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-360", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], ["target", "_blank", 1, "truncate", "p-4", "underline", 3, "href"], [1, "p-4", "font-mono", "text-xs"], [1, "flex", "items-center", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "mousedown", "touchstart", "mouseup", "touchend", "matTooltip"], [1, "font-mono", "text-xs"], [1, "bg-base-200", "rounded-sm", "p-2"], ["aria-label", "Subsystems", 1, "block", "max-w-80", "p-2"], ["aria-label", "Scopes", 1, "block", "max-w-80", "p-2"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function DomainApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "button", 9);
      \u0275\u0275listener("click", function DomainApplicationsComponent_Template_button_click_2_listener() {
        return ctx.newApplication();
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 10);
      \u0275\u0275element(6, "mat-progress-bar", 11)(7, "simple-table", 12);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, DomainApplicationsComponent_ng_template_13_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, DomainApplicationsComponent_ng_template_15_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, DomainApplicationsComponent_ng_template_17_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, DomainApplicationsComponent_ng_template_19_Template, 12, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, DomainApplicationsComponent_ng_template_21_Template, 3, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, DomainApplicationsComponent_ng_template_23_Template, 3, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, DomainApplicationsComponent_ng_template_25_Template, 9, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r13 = \u0275\u0275reference(14);
      const redirect_template_r14 = \u0275\u0275reference(16);
      const client_id_template_r15 = \u0275\u0275reference(18);
      const secret_template_r16 = \u0275\u0275reference(20);
      const subsystems_template_r17 = \u0275\u0275reference(22);
      const scopes_template_r18 = \u0275\u0275reference(24);
      const actions_template_r19 = \u0275\u0275reference(26);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.APPLICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.applications)("columns", \u0275\u0275pureFunction7(37, _c7, \u0275\u0275pureFunction1(19, _c0, name_template_r13), \u0275\u0275pureFunction2(21, _c1, \u0275\u0275pipeBind1(8, 9, "DOMAINS.FIELD_REDIRECT_URI"), redirect_template_r14), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(9, 11, "DOMAINS.FIELD_CLIENT_ID"), client_id_template_r15), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(10, 13, "DOMAINS.FIELD_CLIENT_SECRET"), secret_template_r16), \u0275\u0275pureFunction1(30, _c4, scopes_template_r18), \u0275\u0275pureFunction2(32, _c5, \u0275\u0275pipeBind1(11, 15, "DOMAINS.APP_SUBSYSTEMS"), subsystems_template_r17), \u0275\u0275pureFunction1(35, _c6, actions_template_r19)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 17, "DOMAINS.APPLICATIONS_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    IconComponent,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    MatProgressBarModule,
    MatProgressBar,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */"] });
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
                    [class.opacity-0]="loading() !== true"
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
                            name: ' ',
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
                    matRipple
                    (click)="copySecret(row)"
                    [matTooltip]="'DOMAINS.COPY_SECRET' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    (mousedown)="setShowSecret(row.id, true)"
                    (touchstart)="setShowSecret(row.id, true)"
                    (window:mouseup)="setShowSecret(row.id, false)"
                    (window:touchend)="setShowSecret(row.id, false)"
                    [matTooltip]="'DOMAINS.VIEW_SECRET' | translate"
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
            <mat-chip-set class="block max-w-80 p-2" aria-label="Subsystems">
                @for (subsystem of row.subsystems || []; track subsystem) {
                    <mat-chip>{{ subsystem }}</mat-chip>
                }
            </mat-chip-set>
        </ng-template>
        <ng-template #scopes_template let-row="row">
            <mat-chip-set class="block max-w-80 p-2" aria-label="Scopes">
                @for (scope of scopeList(row); track scope) {
                    <mat-chip>{{ scope }}</mat-chip>
                }
            </mat-chip-set>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'DOMAINS.APPLICATION_EDIT' | translate"
                    (click)="editApplication(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
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
      MatChipsModule,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;e5d3b671a65f34748d18bf513755b471469c83f842c346a0ed26e12b155e98c7;/home/runner/work/backoffice/backoffice/src/app/domains/domain-applications.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainApplicationsComponent, { className: "DomainApplicationsComponent", filePath: "src/app/domains/domain-applications.component.ts", lineNumber: 193 });
})();
export {
  DomainApplicationsComponent
};
//# sourceMappingURL=chunk-GKBAF73F.js.map
