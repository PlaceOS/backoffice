import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-3EHCOJYI.js";
import {
  DomainStateService
} from "./chunk-NK3XS37E.js";
import "./chunk-IWSFHJ6U.js";
import "./chunk-WIPGRPVS.js";
import "./chunk-T5CBAHJS.js";
import "./chunk-J533RESC.js";
import "./chunk-EPSJ7BWT.js";
import "./chunk-UTQB3OKR.js";
import "./chunk-EJIIP22G.js";
import "./chunk-C7BMCHRG.js";
import "./chunk-OTJUA22E.js";
import "./chunk-XZLJQL74.js";
import {
  SimpleTableComponent
} from "./chunk-UAQR3B5P.js";
import "./chunk-JCVHEY5H.js";
import "./chunk-VPDNCESF.js";
import "./chunk-B3GJUXQI.js";
import "./chunk-G652KOVV.js";
import "./chunk-Z7NA6H3I.js";
import "./chunk-DXEXLE3X.js";
import "./chunk-DPN7JUQC.js";
import "./chunk-LGSLM77D.js";
import "./chunk-6ATATSUD.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HUPL3SA6.js";
import "./chunk-ZN4X52CQ.js";
import "./chunk-LSTVA7XY.js";
import "./chunk-BP22B5ME.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-H3NFP65B.js";
import "./chunk-ALEPO5ZJ.js";
import "./chunk-VGLA4YGG.js";
import "./chunk-EGRPP66T.js";
import {
  IconComponent
} from "./chunk-XRZ4NHWV.js";
import "./chunk-OD44YKN7.js";
import {
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import "./chunk-SU4H5GJ6.js";
import {
  MatRippleModule
} from "./chunk-RXOUTXM3.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-XGWC243Z.js";
import "./chunk-5Y26MRIB.js";
import {
  MatRipple
} from "./chunk-26CSHF2R.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  copyToClipboard,
  inject,
  setClassMetadata,
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
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AJKLM77M.js";
import "./chunk-ESVM3M45.js";
import "./chunk-VYXW4D3Z.js";

// src/app/domains/domain-applications.component.ts
var _c0 = (a0) => ({ key: "name", name: "Name", content: a0 });
var _c1 = (a0, a1) => ({ key: "redirect_uri", name: a0, content: a1, size: "20rem" });
var _c2 = (a0, a1) => ({ key: "uid", name: a0, content: a1, size: "17rem" });
var _c3 = (a0, a1) => ({ key: "secret", name: a0, content: a1 });
var _c4 = () => ({ key: "scopes", name: "Scopes" });
var _c5 = (a0) => ({ key: "actions", name: " ", size: "6rem", sortable: false, content: a0 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function DomainApplicationsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.name);
  }
}
function DomainApplicationsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275property("href", row_r3.redirect_uri, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.redirect_uri, " ");
  }
}
function DomainApplicationsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.uid);
  }
}
function DomainApplicationsComponent_ng_template_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
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
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.secret);
  }
}
function DomainApplicationsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_19_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.copySecret(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("mousedown", function DomainApplicationsComponent_ng_template_19_Template_button_mousedown_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = true);
    })("touchstart", function DomainApplicationsComponent_ng_template_19_Template_button_touchstart_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = true);
    })("mouseup", function DomainApplicationsComponent_ng_template_19_Template_button_mouseup_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = false);
    }, \u0275\u0275resolveWindow)("touchend", function DomainApplicationsComponent_ng_template_19_Template_button_touchend_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.show_secret[row_r6.id] = false);
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275conditionalCreate(10, DomainApplicationsComponent_ng_template_19_Conditional_10_Template, 3, 3, "span", 19);
    \u0275\u0275conditionalCreate(11, DomainApplicationsComponent_ng_template_19_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "DOMAINS.COPY_SECRET"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "DOMAINS.VIEW_SECRET"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r6.show_secret[row_r6.id] ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r6.show_secret[row_r6.id] ? 11 : -1);
  }
}
function DomainApplicationsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_21_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editApplication(row_r9));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DomainApplicationsComponent_ng_template_21_Template_button_click_5_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeApplication(row_r9));
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
  show_secret = {};
  newApplication = () => this._service.editApplication();
  editApplication = (item) => this._service.editApplication(item);
  removeApplication = (item) => this._service.deleteApplication(item);
  get item() {
    return this._service.active_item;
  }
  copySecret(item) {
    this.show_secret[item.id] = false;
    copyToClipboard(item.secret);
    notifyInfo(i18n("DOMAINS.COPIED_SECRET"));
  }
  static \u0275fac = function DomainApplicationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainApplicationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainApplicationsComponent, selectors: [["domain-applications"]], decls: 23, vars: 40, consts: [["name_template", ""], ["redirect_template", ""], ["client_id_template", ""], ["secret_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], ["header", "", 1, ""], ["btn", "", 1, "mb-4", "w-full", "sm:w-40", 3, "click"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-336", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm"], ["target", "_blank", 1, "truncate", "p-4", "underline", 3, "href"], [1, "p-4", "font-mono", "text-xs"], [1, "flex", "items-center", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 3, "mousedown", "touchstart", "mouseup", "touchend", "matTooltip"], [1, "p-2", "font-mono", "text-xs"], [1, "bg-base-200", "rounded-sm", "p-2"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function DomainApplicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "button", 7);
      \u0275\u0275listener("click", function DomainApplicationsComponent_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newApplication());
      });
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 8);
      \u0275\u0275element(6, "mat-progress-bar", 9);
      \u0275\u0275pipe(7, "async");
      \u0275\u0275element(8, "simple-table", 10);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, DomainApplicationsComponent_ng_template_13_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, DomainApplicationsComponent_ng_template_15_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, DomainApplicationsComponent_ng_template_17_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, DomainApplicationsComponent_ng_template_19_Template, 12, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, DomainApplicationsComponent_ng_template_21_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const name_template_r10 = \u0275\u0275reference(14);
      const redirect_template_r11 = \u0275\u0275reference(16);
      const client_id_template_r12 = \u0275\u0275reference(18);
      const secret_template_r13 = \u0275\u0275reference(20);
      const actions_template_r14 = \u0275\u0275reference(22);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "DOMAINS.APPLICATION_NEW"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(7, 9, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.applications)("columns", \u0275\u0275pureFunction6(33, _c6, \u0275\u0275pureFunction1(19, _c0, name_template_r10), \u0275\u0275pureFunction2(21, _c1, \u0275\u0275pipeBind1(9, 11, "DOMAINS.FIELD_REDIRECT_URI"), redirect_template_r11), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(10, 13, "DOMAINS.FIELD_CLIENT_ID"), client_id_template_r12), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(11, 15, "DOMAINS.FIELD_CLIENT_SECRET"), secret_template_r13), \u0275\u0275pureFunction0(30, _c4), \u0275\u0275pureFunction1(31, _c5, actions_template_r14)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 17, "DOMAINS.APPLICATIONS_EMPTY"));
    }
  }, dependencies: [
    SimpleTableComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    CommonModule,
    MatProgressBarModule,
    MatProgressBar,
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */"] });
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
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-336 text-sm"
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
                        { key: 'scopes', name: 'Scopes' },
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
                ></simple-table>
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
            <div class="flex items-center p-2">
                <button
                    icon
                    matRipple
                    (click)="copySecret(row)"
                    [matTooltip]="'DOMAINS.COPY_SECRET' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    matRipple
                    (mousedown)="show_secret[row.id] = true"
                    (touchstart)="show_secret[row.id] = true"
                    (window:mouseup)="show_secret[row.id] = false"
                    (window:touchend)="show_secret[row.id] = false"
                    [matTooltip]="'DOMAINS.VIEW_SECRET' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <div class="p-2 font-mono text-xs">
                    @if (!show_secret[row.id]) {
                        <span class="bg-base-200 rounded-sm p-2">{{
                            'DOMAINS.SECRET_HIDDEN' | translate
                        }}</span>
                    }
                    @if (show_secret[row.id]) {
                        <span>{{ row.secret }}</span>
                    }
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'DOMAINS.APPLICATION_EDIT' | translate"
                    (click)="editApplication(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="text-error"
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
      MatRippleModule,
      MatTooltipModule,
      CommonModule,
      TranslatePipe,
      MatProgressBarModule
    ], styles: ["/* angular:styles/component:css;e5d3b671a65f34748d18bf513755b471469c83f842c346a0ed26e12b155e98c7;/home/runner/work/backoffice/backoffice/src/app/domains/domain-applications.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  min-width: 56rem;\n}\n/*# sourceMappingURL=domain-applications.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainApplicationsComponent, { className: "DomainApplicationsComponent", filePath: "src/app/domains/domain-applications.component.ts", lineNumber: 166 });
})();
export {
  DomainApplicationsComponent
};
//# sourceMappingURL=chunk-D22YLXUE.js.map
