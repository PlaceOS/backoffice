import {
  ActiveItemService
} from "./chunk-ZP7RYZSS.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-XDPTKZ2J.js";
import "./chunk-UJLZHD3F.js";
import "./chunk-5EBMUX3Z.js";
import "./chunk-C7NP5PYP.js";
import {
  DateFromPipe
} from "./chunk-EFMG3TWP.js";
import {
  Clipboard
} from "./chunk-KQ433EDT.js";
import "./chunk-JZPASCCB.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-64N44YTD.js";
import "./chunk-VRIRLPBG.js";
import "./chunk-FCU3WVEC.js";
import "./chunk-XJBZPO3W.js";
import "./chunk-WRAPQBH6.js";
import "./chunk-RSXXMA3P.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink
} from "./chunk-TTOMUWPB.js";
import "./chunk-J5O27MHS.js";
import "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import "./chunk-6FMO72CJ.js";
import "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-7BO5UI6W.js";
import "./chunk-KFHMAOSB.js";
import "./chunk-HYP637G2.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KHVEC2ZJ.js";
import {
  notifySuccess
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
} from "./chunk-ZZM2ZLWR.js";
import "./chunk-YUNY6RXQ.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  MatRipple
} from "./chunk-2UI5N333.js";
import {
  DatePipe
} from "./chunk-5TQT6AWS.js";
import {
  Ao,
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
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/users/user-about.component.ts
var _c0 = (a0) => ["/domains", a0];
function UserAboutComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
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
function UserAboutComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "a", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const domain_value_r2 = \u0275\u0275readContextLet(24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "USERS.AUTHORITY_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, ctx_r0.item?.authority_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", domain_value_r2.name, " (", domain_value_r2.domain, ") ");
  }
}
function UserAboutComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UserAboutComponent_Conditional_29_For_2_Template_button_click_0_listener() {
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
function UserAboutComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, UserAboutComponent_Conditional_29_For_2_Template, 2, 1, "button", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item.groups);
  }
}
function UserAboutComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "USERS.NO_GROUPS"), " ");
  }
}
function UserAboutComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
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
    loader: async ({ params: id }) => id ? Ao(id).catch(() => null) : null
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAboutComponent, selectors: [["user-about"]], decls: 41, vars: 56, consts: [[1, "mb-4", "flex", "items-center", "space-x-2", "px-4", "py-4"], [1, "border-base-300", "flex", "items-center", "space-x-2", "rounded-3xl", "border", "p-2"], [1, "px-2"], [1, "rounded-2xl", "px-2", "py-1", "text-xs"], [1, "mb-4", "flex", "space-x-2", "px-4"], [1, "border-base-200", "grid", "w-1/3", "flex-1", "gap-2", "rounded-sm", "border", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "truncate", "text-sm", "underline", 3, "href"], ["for", "groups", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-wrap"], [1, "opacity-30"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "mono", "text-sm"], [1, "underline", 3, "routerLink"], ["matRipple", "", 1, "mono", "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]"], ["matRipple", "", 1, "mono", "bg-base-200", "m-1", "rounded-sm", "px-2", "py-1", "text-[0.625rem]", 3, "click"]], template: function UserAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 1)(9, "div", 2);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "section", 4)(16, "div", 5)(17, "div", 6);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div")(21, "a", 7);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, UserAboutComponent_Conditional_23_Template, 5, 4);
      \u0275\u0275declareLet(24);
      \u0275\u0275conditionalCreate(25, UserAboutComponent_Conditional_25_Template, 6, 8);
      \u0275\u0275elementStart(26, "div", 8);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(29, UserAboutComponent_Conditional_29_Template, 3, 0, "div", 9)(30, UserAboutComponent_Conditional_30_Template, 3, 3, "div", 10);
      \u0275\u0275elementStart(31, "div", 6);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11)(35, "span", 12);
      \u0275\u0275pipe(36, "date");
      \u0275\u0275pipe(37, "date");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, UserAboutComponent_Conditional_40_Template, 9, 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 33, "USERS.ROLE_SUPPORT"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.item?.support === true)("text-success-content", ctx.item?.support === true)("bg-error", ctx.item?.support !== true)("text-error-content", ctx.item?.support !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 35, ctx.item?.support === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 37, "USERS.ROLE_ADMIN"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", ctx.item?.sys_admin === true)("text-success-content", ctx.item?.sys_admin === true)("bg-error", ctx.item?.sys_admin !== true)("text-error-content", ctx.item?.sys_admin !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 39, ctx.item?.sys_admin === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 41, "COMMON.FIELD_EMAIL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", "mailto:" + ctx.item?.email, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item?.email, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item?.department ? 23 : -1);
      \u0275\u0275advance();
      const domain_value_r5 = \u0275\u0275storeLet(ctx.domain());
      \u0275\u0275advance();
      \u0275\u0275conditional(domain_value_r5 ? 25 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 44, "USERS.FIELD_GROUPS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.groups?.length ? 29 : 30);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 46, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(36, 48, ctx.item.created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(37, 51, ctx.item.created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 54, ctx.item.created_at * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.updated_at ? 40 : -1);
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
        <section class="mb-4 flex items-center space-x-2 px-4 py-4">
            <div
                class="border-base-300 flex items-center space-x-2 rounded-3xl border p-2"
            >
                <div class="px-2">{{ 'USERS.ROLE_SUPPORT' | translate }}</div>
                <div
                    class="rounded-2xl px-2 py-1 text-xs"
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
                    class="rounded-2xl px-2 py-1 text-xs"
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
                        class="mono truncate text-sm underline"
                        [href]="'mailto:' + item?.email"
                    >
                        {{ item?.email }}
                    </a>
                </div>
                @if (item?.department) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.FIELD_DEPARTMENT' | translate }}
                    </div>
                    <div>{{ item?.department }}</div>
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
                            class="underline"
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
                                class="mono bg-base-200 m-1 rounded-sm px-2 py-1 text-[0.625rem]"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAboutComponent, { className: "UserAboutComponent", filePath: "src/app/users/user-about.component.ts", lineNumber: 169 });
})();
export {
  UserAboutComponent
};
//# sourceMappingURL=chunk-XEB3NG55.js.map
