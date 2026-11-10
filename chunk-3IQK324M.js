import {
  ItemTimestampsComponent
} from "./chunk-IQD63O5A.js";
import "./chunk-D6MJKT74.js";
import "./chunk-S2SB26WJ.js";
import {
  ActiveItemService
} from "./chunk-TYSKS4PJ.js";
import "./chunk-6O5GBWTJ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-PNWJF2I5.js";
import {
  Clipboard
} from "./chunk-BZ6PXTOX.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-WA4AN4IZ.js";
import "./chunk-IN2BSCPT.js";
import {
  RouterLink
} from "./chunk-2HWH2YE2.js";
import {
  notifySuccess
} from "./chunk-XTVPLVG6.js";
import "./chunk-TQ7EZLBQ.js";
import "./chunk-GFMPFDY6.js";
import "./chunk-XGWAF3DT.js";
import "./chunk-6UTRGHRC.js";
import "./chunk-3VVTXJY2.js";
import "./chunk-5YKISWSJ.js";
import "./chunk-XTPJGJOH.js";
import "./chunk-F7KZU33Y.js";
import "./chunk-B46RMXOO.js";
import "./chunk-HK5JTNGN.js";
import {
  MatRippleModule
} from "./chunk-YFWFSNMM.js";
import {
  MatRipple
} from "./chunk-PH6YSF2Z.js";
import {
  TranslatePipe
} from "./chunk-Y2BF2IN5.js";
import {
  i18n
} from "./chunk-LD7JHF4N.js";
import {
  Vo
} from "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import "./chunk-3LASJ6UJ.js";
import "./chunk-EFCF425K.js";
import "./chunk-P6BC4TUJ.js";
import "./chunk-FZQRO6BV.js";
import "./chunk-MX6FO2VB.js";
import "./chunk-UAEA3DWF.js";
import {
  Component,
  computed,
  inject,
  resource,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DTROA6L2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/users/user-about.component.ts
var _c0 = (a0) => ["/domains", a0];
function UserAboutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "USERS.DELETED"), " ");
  }
}
function UserAboutComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "USERS.FIELD_DEPARTMENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.item?.department);
  }
}
function UserAboutComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "a", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const domain_value_r2 = \u0275\u0275readContextLet(25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "USERS.AUTHORITY_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, ctx_r0.item?.authority_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", domain_value_r2.name, " (", domain_value_r2.domain, ") ");
  }
}
function UserAboutComponent_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UserAboutComponent_Conditional_30_For_2_Template_button_click_0_listener() {
      const group_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyGroup(group_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r4, " ");
  }
}
function UserAboutComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, UserAboutComponent_Conditional_30_For_2_Template, 2, 1, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item.groups);
  }
}
function UserAboutComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "USERS.NO_GROUPS"), " ");
  }
}
var UserAboutComponent = class _UserAboutComponent {
  _service = inject(ActiveItemService);
  _clipboard = inject(Clipboard);
  _domain = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_domain" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this._service.item()?.authority_id,
    loader: async ({ params: id }) => id ? Vo(id).catch(() => null) : null
  }));
  domain = computed(
    () => this._domain.value() || null,
    ...ngDevMode ? [{ debugName: "domain" }] : (
      /* istanbul ignore next */
      []
    )
  );
  get item() {
    return this._service.active_item || {};
  }
  copyGroup(group) {
    this._clipboard.copy(group);
    notifySuccess(i18n("USERS.GROUP_COPIED"));
  }
  static \u0275fac = function UserAboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserAboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAboutComponent, selectors: [["user-about"]], decls: 33, vars: 45, consts: [[1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-4"], [1, "bg-error", "text-error-content", "rounded-full", "px-3", "py-1", "text-sm"], [1, "border-base-300", "flex", "items-center", "space-x-2", "rounded-3xl", "border", "p-2"], [1, "px-2"], [1, "rounded-2xl", "px-2", "py-1", "text-xs", "select-text"], [1, "mb-4", "flex", "space-x-2", "px-4"], [1, "border-base-200", "grid", "w-1/3", "flex-1", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "truncate", "text-sm", "underline", "select-text", 3, "href"], ["for", "groups", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-wrap"], [1, "opacity-30"], [3, "created_at", "updated_at"], [1, "select-text"], [1, "mono", "text-sm"], [1, "underline", "select-text", 3, "routerLink"], ["matRipple", "", 1, "mono", "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "select-text"], ["matRipple", "", 1, "mono", "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "select-text", 3, "click"]], template: function UserAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, UserAboutComponent_Conditional_1_Template, 3, 3, "span", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 2)(10, "div", 3);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 4);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "section", 5)(17, "div", 6)(18, "div", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div")(22, "a", 8);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(24, UserAboutComponent_Conditional_24_Template, 5, 4);
      \u0275\u0275declareLet(25);
      \u0275\u0275conditionalCreate(26, UserAboutComponent_Conditional_26_Template, 6, 8);
      \u0275\u0275elementStart(27, "div", 9);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, UserAboutComponent_Conditional_30_Template, 3, 0, "div", 10)(31, UserAboutComponent_Conditional_31_Template, 3, 3, "div", 11);
      \u0275\u0275element(32, "item-timestamps", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.deleted ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "USERS.ROLE_SUPPORT"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.item?.support === true)("text-success-content", ctx.item?.support === true)("bg-error", ctx.item?.support !== true)("text-error-content", ctx.item?.support !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 34, ctx.item?.support === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 36, "USERS.ROLE_ADMIN"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.item?.sys_admin === true)("text-success-content", ctx.item?.sys_admin === true)("bg-error", ctx.item?.sys_admin !== true)("text-error-content", ctx.item?.sys_admin !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 38, ctx.item?.sys_admin === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 40, "COMMON.FIELD_EMAIL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", "mailto:" + ctx.item?.email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item?.email, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.department ? 24 : -1);
      \u0275\u0275advance();
      const domain_value_r5 = \u0275\u0275storeLet(ctx.domain());
      \u0275\u0275advance();
      \u0275\u0275conditional(domain_value_r5 ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 43, "USERS.FIELD_GROUPS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.groups?.length ? 30 : 31);
      \u0275\u0275advance(2);
      \u0275\u0275property("created_at", ctx.item.created_at)("updated_at", ctx.item.updated_at);
    }
  }, dependencies: [
    ItemTimestampsComponent,
    MatRippleModule,
    MatRipple,
    RouterLink,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=user-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAboutComponent, [{
    type: Component,
    args: [{ selector: "user-about", template: `
        <section class="mb-4 flex flex-wrap items-center gap-2 px-4 py-4">
            @if (item?.deleted) {
                <span
                    class="bg-error text-error-content rounded-full px-3 py-1 text-sm"
                >
                    {{ 'USERS.DELETED' | translate }}
                </span>
            }
            <div
                class="border-base-300 flex items-center space-x-2 rounded-3xl border p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_SUPPORT' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs select-text"
                    [class.bg-success]="item?.support === true"
                    [class.text-success-content]="item?.support === true"
                    [class.bg-error]="item?.support !== true"
                    [class.text-error-content]="item?.support !== true"
                >
                    {{
                        (item?.support === true
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE'
                        ) | translate
                    }}
                </div>
            </div>
            <div
                class="border-base-300 flex items-center space-x-2 rounded-3xl border p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_ADMIN' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs select-text"
                    [class.bg-success]="item?.sys_admin === true"
                    [class.text-success-content]="item?.sys_admin === true"
                    [class.bg-error]="item?.sys_admin !== true"
                    [class.text-error-content]="item?.sys_admin !== true"
                >
                    {{
                        (item?.sys_admin === true
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE'
                        ) | translate
                    }}
                </div>
            </div>
        </section>
        <section class="mb-4 flex space-x-2 px-4">
            <div
                class="border-base-200 grid w-1/3 flex-1 gap-2 rounded-sm border p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.FIELD_EMAIL' | translate }}
                </div>
                <div>
                    <a
                        class="mono truncate text-sm underline select-text"
                        [href]="'mailto:' + item?.email"
                    >
                        {{ item?.email }}
                    </a>
                </div>
                @if (item?.department) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.FIELD_DEPARTMENT' | translate }}
                    </div>
                    <div class="select-text">{{ item?.department }}</div>
                }
                @let domain_value = domain();
                @if (domain_value) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.AUTHORITY_ID' | translate }}
                    </div>
                    <div class="mono text-sm">
                        <a
                            [routerLink]="['/domains', item?.authority_id]"
                            class="underline select-text"
                        >
                            {{ domain_value.name }} ({{ domain_value.domain }})
                        </a>
                    </div>
                }
                <div class="flex items-center text-sm font-medium" for="groups">
                    {{ 'USERS.FIELD_GROUPS' | translate }}
                </div>
                @if (item.groups?.length) {
                    <div class="-mx-1 flex flex-wrap">
                        @for (group of item.groups; track group) {
                            <button
                                matRipple
                                class="mono bg-base-200 m-1 rounded-sm px-2 py-1 text-[0.625rem] select-text"
                                (click)="copyGroup(group)"
                            >
                                {{ group }}
                            </button>
                        }
                    </div>
                } @else {
                    <div class="opacity-30">
                        {{ 'USERS.NO_GROUPS' | translate }}
                    </div>
                }
                <item-timestamps
                    [created_at]="item.created_at"
                    [updated_at]="item.updated_at"
                />
            </div>
        </section>
    `, imports: [
      ItemTimestampsComponent,
      TranslatePipe,
      MatRippleModule,
      RouterLink
    ], styles: ["/* angular:styles/component:css;43a52b5076d94d60;/home/runner/work/backoffice/backoffice/src/app/users/user-about.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=user-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAboutComponent, { className: "UserAboutComponent", filePath: "src/app/users/user-about.component.ts", lineNumber: 141 });
})();
export {
  UserAboutComponent
};
//# debugId=95a53044-c0dd-54c9-ab75-e0b794513029
//# sourceMappingURL=chunk-3IQK324M.js.map
