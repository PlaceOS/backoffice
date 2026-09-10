import {
  ActiveItemService
} from "./chunk-DWV7RWHA.js";
import "./chunk-TOJLEO3Q.js";
import "./chunk-QZWPSKLY.js";
import "./chunk-DBFCGDY5.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-UUUKOQUD.js";
import "./chunk-LGCOJQOV.js";
import {
  RouterLink
} from "./chunk-5XY3WE42.js";
import "./chunk-UPJHMA72.js";
import "./chunk-BQISQ53F.js";
import "./chunk-HT5GXKXQ.js";
import {
  DateFromPipe
} from "./chunk-SOCQL3PR.js";
import "./chunk-TPDHL3PI.js";
import {
  Clipboard
} from "./chunk-DOBZHCJ3.js";
import "./chunk-PKJVK52W.js";
import "./chunk-Q2OAZ637.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-QWPPAGOZ.js";
import "./chunk-EPIXDTWN.js";
import "./chunk-4FMA4IVG.js";
import "./chunk-HAY6XAXW.js";
import {
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import "./chunk-Q2BV2GZB.js";
import "./chunk-NHXLW3Z3.js";
import "./chunk-WXUWESJ2.js";
import "./chunk-7NXN4G42.js";
import "./chunk-4XBU66YH.js";
import "./chunk-BTIO7C57.js";
import "./chunk-NL7TX5FO.js";
import {
  MatRippleModule
} from "./chunk-O5B6FUTE.js";
import "./chunk-JCXXAJP2.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-BZ4LRN4O.js";
import "./chunk-ETM3LPJ2.js";
import {
  MatRipple
} from "./chunk-ISKFUBZN.js";
import "./chunk-7A2HMJBQ.js";
import {
  DatePipe
} from "./chunk-U7MJINT7.js";
import {
  Component,
  Qo,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
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
} from "./chunk-Z45QSLBL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
    \u0275\u0275elementStart(3, "div", 14);
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
    \u0275\u0275elementStart(3, "div", 15)(4, "a", 16);
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
    \u0275\u0275elementStart(0, "button", 18);
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
    \u0275\u0275repeaterCreate(1, UserAboutComponent_Conditional_30_For_2_Template, 2, 1, "button", 17, \u0275\u0275repeaterTrackByIdentity);
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
function UserAboutComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "span", 13);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "dateFrom");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.UPDATED_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(5, 5, ctx_r0.item.updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(6, 8, ctx_r0.item.updated_at * 1e3, "shortTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, ctx_r0.item.updated_at * 1e3), " ");
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
    loader: async ({ params: id }) => id ? Qo(id).catch(() => null) : null
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAboutComponent, selectors: [["user-about"]], decls: 42, vars: 57, consts: [[1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2", "px-4", "py-4"], [1, "bg-error", "text-error-content", "rounded-full", "px-3", "py-1", "text-sm"], [1, "border-base-300", "flex", "items-center", "space-x-2", "rounded-3xl", "border", "p-2"], [1, "px-2"], [1, "rounded-2xl", "px-2", "py-1", "text-xs", "select-text"], [1, "mb-4", "flex", "space-x-2", "px-4"], [1, "border-base-200", "grid", "w-1/3", "flex-1", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "truncate", "text-sm", "underline", "select-text", 3, "href"], ["for", "groups", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-wrap"], [1, "opacity-30"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 1, "select-text", 3, "matTooltip"], [1, "select-text"], [1, "mono", "text-sm"], [1, "underline", "select-text", 3, "routerLink"], ["matRipple", "", 1, "mono", "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "select-text"], ["matRipple", "", 1, "mono", "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", "select-text", 3, "click"]], template: function UserAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(32, "div", 7);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "span", 13);
      \u0275\u0275pipe(37, "date");
      \u0275\u0275pipe(38, "date");
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(41, UserAboutComponent_Conditional_41_Template, 9, 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.deleted ? 1 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 34, "USERS.ROLE_SUPPORT"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.item?.support === true)("text-success-content", ctx.item?.support === true)("bg-error", ctx.item?.support !== true)("text-error-content", ctx.item?.support !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 36, ctx.item?.support === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 38, "USERS.ROLE_ADMIN"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.item?.sys_admin === true)("text-success-content", ctx.item?.sys_admin === true)("bg-error", ctx.item?.sys_admin !== true)("text-error-content", ctx.item?.sys_admin !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 40, ctx.item?.sys_admin === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 42, "COMMON.FIELD_EMAIL"), " ");
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
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 45, "USERS.FIELD_GROUPS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.groups?.length ? 30 : 31);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 47, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(37, 49, ctx.item.created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(38, 52, ctx.item.created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 55, ctx.item.created_at * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.updated_at ? 41 : -1);
    }
  }, dependencies: [
    MatTooltipModule,
    MatTooltip,
    MatRippleModule,
    MatRipple,
    RouterLink,
    TranslatePipe,
    DateFromPipe,
    DatePipe
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
                            [routerLink]="[
                                '/domains',
                                item?.authority_id,
                            ]"
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
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class="flex items-center">
                    <span
                        class="select-text"
                        [matTooltip]="
                            (item.created_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.created_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.created_at * 1000 | dateFrom }}
                    </span>
                </div>
                @if (item.updated_at) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.UPDATED_AT' | translate }}
                    </div>
                    <div class="flex items-center">
                        <span
                            class="select-text"
                            [matTooltip]="
                                (item.updated_at * 1000 | date: 'mediumDate') +
                                ', ' +
                                (item.updated_at * 1000 | date: 'shortTime')
                            "
                            matTooltipPosition="right"
                        >
                            {{ item.updated_at * 1000 | dateFrom }}
                        </span>
                    </div>
                }
            </div>
        </section>
    `, imports: [
      TranslatePipe,
      DateFromPipe,
      MatTooltipModule,
      MatRippleModule,
      RouterLink,
      DatePipe
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/users/user-about.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=user-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAboutComponent, { className: "UserAboutComponent", filePath: "src/app/users/user-about.component.ts", lineNumber: 178 });
})();
export {
  UserAboutComponent
};
//# sourceMappingURL=chunk-MBQ6QLQF.js.map
