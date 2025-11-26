import {
  MetadataDisplayComponent
} from "./chunk-ZHA6555R.js";
import "./chunk-45ZHSICB.js";
import "./chunk-VAIKCWTQ.js";
import "./chunk-W7JULZ3J.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  Clipboard,
  ExtensionOutletComponent,
  SidebarMenuComponent,
  SimpleTableComponent,
  extensionsForItem
} from "./chunk-JDP5FFMI.js";
import {
  MatTooltip,
  MatTooltipModule,
  notifySuccess
} from "./chunk-EWUI732O.js";
import {
  DateFromPipe
} from "./chunk-53JJL3R3.js";
import {
  IconComponent,
  MatRipple,
  MatRippleModule
} from "./chunk-L3UICUJN.js";
import {
  TranslatePipe
} from "./chunk-V3NTFP3B.js";
import {
  AsyncHandler,
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  NgModule,
  RouterLink,
  RouterModule,
  RouterOutlet,
  debounceTime,
  distinctUntilChanged,
  filter,
  i18n,
  inject,
  iu,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZKZAJWA3.js";

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
    \u0275\u0275textInterpolate(ctx_r0.item == null ? null : ctx_r0.item.department);
  }
}
function UserAboutComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "a", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "USERS.AUTHORITY_ID"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, ctx_r0.item == null ? null : ctx_r0.item.authority_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (tmp_3_0 = \u0275\u0275pipeBind1(6, 6, ctx_r0.domain)) == null ? null : tmp_3_0.name, " (", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r0.domain)) == null ? null : tmp_3_0.domain, ") ");
  }
}
function UserAboutComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UserAboutComponent_Conditional_29_For_2_Template_button_click_0_listener() {
      const group_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyGroup(group_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r3, " ");
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
  domain = this._service.item.pipe(distinctUntilChanged(), debounceTime(300), filter((_) => !!_ && _.authority_id), switchMap((i) => iu(i.authority_id)), shareReplay(1));
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAboutComponent, selectors: [["user-about"]], decls: 41, vars: 57, consts: [[1, "mb-4", "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "rounded-3xl", "border", "border-base-300", "p-2"], [1, "px-2"], [1, "rounded-2xl", "px-2", "py-1", "text-xs"], [1, "mb-4", "flex", "space-x-2"], [1, "grid", "w-1/3", "flex-1", "gap-2", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "truncate", "text-sm", "underline", 3, "href"], ["for", "groups", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "-mx-1", "flex", "flex-wrap"], [1, "opacity-30"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "mono", "text-sm"], [1, "underline", 3, "routerLink"], ["matRipple", "", 1, "mono", "m-1", "rounded", "bg-base-200", "px-2", "py-1", "text-[0.625rem]"], ["matRipple", "", 1, "mono", "m-1", "rounded", "bg-base-200", "px-2", "py-1", "text-[0.625rem]", 3, "click"]], template: function UserAboutComponent_Template(rf, ctx) {
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
      \u0275\u0275conditionalCreate(24, UserAboutComponent_Conditional_24_Template, 8, 12);
      \u0275\u0275pipe(25, "async");
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
      \u0275\u0275classProp("bg-success", (ctx.item == null ? null : ctx.item.support) === true)("text-success-content", (ctx.item == null ? null : ctx.item.support) === true)("bg-error", (ctx.item == null ? null : ctx.item.support) !== true)("text-error-content", (ctx.item == null ? null : ctx.item.support) !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 35, (ctx.item == null ? null : ctx.item.support) === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 37, "USERS.ROLE_ADMIN"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-success", (ctx.item == null ? null : ctx.item.sys_admin) === true)("text-success-content", (ctx.item == null ? null : ctx.item.sys_admin) === true)("bg-error", (ctx.item == null ? null : ctx.item.sys_admin) !== true)("text-error-content", (ctx.item == null ? null : ctx.item.sys_admin) !== true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 39, (ctx.item == null ? null : ctx.item.sys_admin) === true ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 41, "COMMON.FIELD_EMAIL"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("href", "mailto:" + (ctx.item == null ? null : ctx.item.email), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item == null ? null : ctx.item.email, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.item == null ? null : ctx.item.department) ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(25, 43, ctx.domain) ? 24 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 45, "USERS.FIELD_GROUPS"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.item.groups == null ? null : ctx.item.groups.length) ? 29 : 30);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 47, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(36, 49, ctx.item.created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(37, 52, ctx.item.created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 55, ctx.item.created_at * 1e3), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item.updated_at ? 40 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatTooltipModule,
    MatTooltip,
    MatRippleModule,
    MatRipple,
    RouterLink,
    AsyncPipe,
    DatePipe,
    TranslatePipe,
    DateFromPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=user-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAboutComponent, [{
    type: Component,
    args: [{ selector: "user-about", template: `
        <section class="mb-4 flex items-center space-x-2">
            <div
                class="flex items-center space-x-2 rounded-3xl border border-base-300 p-2"
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
                class="flex items-center space-x-2 rounded-3xl border border-base-300 p-2"
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
        <section class="mb-4 flex space-x-2">
            <div
                class="grid w-1/3 flex-1 gap-2 rounded border border-base-200 p-4"
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
                @if (domain | async) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'USERS.AUTHORITY_ID' | translate }}
                    </div>
                    <div class="mono text-sm">
                        <a
                            [routerLink]="['/domains', item?.authority_id]"
                            class="underline"
                        >
                            {{ (domain | async)?.name }} ({{
                                (domain | async)?.domain
                            }})
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
                                class="mono m-1 rounded bg-base-200 px-2 py-1 text-[0.625rem]"
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
      CommonModule,
      TranslatePipe,
      DateFromPipe,
      MatTooltipModule,
      MatRippleModule,
      RouterLink
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/backoffice/backoffice/src/app/users/user-about.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=user-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAboutComponent, { className: "UserAboutComponent", filePath: "src/app/users/user-about.component.ts", lineNumber: 176 });
})();

// src/app/users/user-history.component.ts
var _c02 = (a0, a1) => ({ key: "start", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "end", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "systems", name: a0, content: a1 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function UserHistoryComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, date_r1, "MMM d, y, h:mm a"), " ");
  }
}
function UserHistoryComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const systems_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(systems_r2.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "USERS.VIEW_LOGS"));
  }
}
var UserHistoryComponent = class _UserHistoryComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  logs = signal([], ...ngDevMode ? [{ debugName: "logs" }] : []);
  get item() {
    return this._service.active_item;
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe(() => this.loadUserLogs()));
  }
  loadUserLogs(offset = 0) {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UserHistoryComponent_BaseFactory;
    return function UserHistoryComponent_Factory(__ngFactoryType__) {
      return (\u0275UserHistoryComponent_BaseFactory || (\u0275UserHistoryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserHistoryComponent)))(__ngFactoryType__ || _UserHistoryComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserHistoryComponent, selectors: [["user-history"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 25, consts: [["date_template", ""], ["sys_template", ""], [1, "block", "min-w-[64rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "p-4"]], template: function UserHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "simple-table", 2);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275template(5, UserHistoryComponent_ng_template_5_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, UserHistoryComponent_ng_template_7_Template, 6, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const date_template_r3 = \u0275\u0275reference(6);
      const sys_template_r4 = \u0275\u0275reference(8);
      \u0275\u0275property("data", ctx.logs())("columns", \u0275\u0275pureFunction3(21, _c3, \u0275\u0275pureFunction2(12, _c02, \u0275\u0275pipeBind1(1, 4, "USERS.FIELD_SESSION_START"), date_template_r3), \u0275\u0275pureFunction2(15, _c1, \u0275\u0275pipeBind1(2, 6, "USERS.FIELD_SESSION_END"), date_template_r3), \u0275\u0275pureFunction2(18, _c2, \u0275\u0275pipeBind1(3, 8, "USERS.FIELD_SYSTEMS_ACCESSED"), sys_template_r4)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(4, 10, "USERS.LOGS_EMPTY"));
    }
  }, dependencies: [CommonModule, SimpleTableComponent, TranslatePipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=user-history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserHistoryComponent, [{
    type: Component,
    args: [{ selector: "user-history", template: `
        <simple-table
            class="block min-w-[64rem] text-sm"
            [data]="logs()"
            [columns]="[
                {
                    key: 'start',
                    name: 'USERS.FIELD_SESSION_START' | translate,
                    content: date_template,
                },
                {
                    key: 'end',
                    name: 'USERS.FIELD_SESSION_END' | translate,
                    content: date_template,
                },
                {
                    key: 'systems',
                    name: 'USERS.FIELD_SYSTEMS_ACCESSED' | translate,
                    content: sys_template,
                },
            ]"
            [sortable]="true"
            [empty_message]="'USERS.LOGS_EMPTY' | translate"
        />
        <ng-template #date_template let-date="data">
            <div class="p-4">
                {{ date | date: 'MMM d, y, h:mm a' }}
            </div>
        </ng-template>
        <ng-template #sys_template let-systems="data">
            <div class="p-4">
                <div>{{ systems.length }}</div>
                <div>{{ 'USERS.VIEW_LOGS' | translate }}</div>
            </div>
        </ng-template>
    `, imports: [TranslatePipe, CommonModule, SimpleTableComponent], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/users/user-history.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=user-history.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserHistoryComponent, { className: "UserHistoryComponent", filePath: "src/app/users/user-history.component.ts", lineNumber: 64 });
})();

// src/app/users/user-metadata.component.ts
function UserMetadataComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "metadata-display", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", ctx_r0.item);
  }
}
var UserMetadataComponent = class _UserMetadataComponent {
  _service = inject(ActiveItemService);
  get item() {
    return this._service.active_item;
  }
  static \u0275fac = function UserMetadataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserMetadataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserMetadataComponent, selectors: [["user-metadata"]], decls: 1, vars: 1, consts: [[3, "item"]], template: function UserMetadataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserMetadataComponent_Conditional_0_Template, 1, 1, "metadata-display", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.item ? 0 : -1);
    }
  }, dependencies: [MetadataDisplayComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserMetadataComponent, [{
    type: Component,
    args: [{ selector: "user-metadata", template: `
        @if (item) {
            <metadata-display [item]="item" />
        }
    `, imports: [MetadataDisplayComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserMetadataComponent, { className: "UserMetadataComponent", filePath: "src/app/users/user-metadata.component.ts", lineNumber: 16 });
})();

// src/app/users/users.component.ts
function UsersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 13);
    \u0275\u0275elementStart(3, "div", 14, 0);
    \u0275\u0275listener("scroll", function UsersComponent_Conditional_11_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "USERS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list)("scrolled", ctx_r2.scroll() > 0);
  }
}
var UsersComponent = class _UsersComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  name = "users";
  open_menu = false;
  tab_list = [];
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  newItem = () => this._service.create();
  bulkAdd = () => this._service.bulkAdd();
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  updateTabList(details) {
    this.tab_list = [
      {
        id: "about",
        name: i18n("USERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "metadata",
        name: i18n("USERS.TAB_METADATA"),
        count: details?.metadata,
        icon: { content: "code_blocks" }
      },
      {
        id: "history",
        name: i18n("USERS.TAB_HISTORY"),
        icon: { content: "history" }
      }
    ].concat(this.extensions);
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => {
      this.item.set(item);
      this.updateTabList();
    }));
    this.updateTabList();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UsersComponent_BaseFactory;
    return function UsersComponent_Factory(__ngFactoryType__) {
      return (\u0275UsersComponent_BaseFactory || (\u0275UsersComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UsersComponent)))(__ngFactoryType__ || _UsersComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["new-users-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 16, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-16", "left-2", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-8", 3, "click", "matTooltip"], [1, "text-2xl"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", "p-4", 3, "scroll"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function UsersComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "item-sidebar", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 4)(5, "item-selection", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
        return ctx.open_menu = true;
      });
      \u0275\u0275elementStart(8, "icon");
      \u0275\u0275text(9, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, UsersComponent_Conditional_11_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_12_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(14, "icon", 9);
      \u0275\u0275text(15, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_16_listener() {
        return ctx.bulkAdd();
      });
      \u0275\u0275elementStart(18, "icon", 11);
      \u0275\u0275text(19, "playlist_add");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance();
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(3, 8, "USERS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(6, 10, "USERS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 12, "USERS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 14, "USERS.BULK"));
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterOutlet,
    ItemTablistComponent,
    ItemSidebarComponent,
    ItemDetailsComponent,
    ItemSelectionComponent,
    SidebarMenuComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "new-users-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'USERS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'USERS.PLURAL' | translate"
                >
                    <button
                        btn
                        icon
                        class="mr-2 sm:hidden"
                        (click)="open_menu = true"
                    >
                        <icon>menu</icon>
                    </button>
                </item-selection>
                <div class="flex h-1/2 flex-1 flex-col">
                    @if (item()?.id) {
                        <item-details
                            [can_edit]="true"
                            [item]="item()"
                            [type]="'USERS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll() > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll.set(el.scrollTop)"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    }
                </div>
                <button
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                    [matTooltip]="'USERS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <icon class="text-3xl">add</icon>
                </button>
                <button
                    class="absolute bottom-16 left-2 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-8"
                    [matTooltip]="'USERS.BULK' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="bulkAdd()"
                >
                    <icon class="text-2xl">playlist_add</icon>
                </button>
            </div>
        </div>
    `, imports: [
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      TranslatePipe,
      RouterModule,
      ItemTablistComponent,
      ItemSidebarComponent,
      ItemDetailsComponent,
      ItemSelectionComponent,
      SidebarMenuComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 102 });
})();

// src/app/users/users.module.ts
var ROUTES = [
  {
    path: ":id",
    component: UsersComponent,
    children: [
      { path: "about", component: UserAboutComponent },
      { path: "metadata", component: UserMetadataComponent },
      { path: "history", component: UserHistoryComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppUsersModule = class _AppUsersModule {
  static \u0275fac = function AppUsersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppUsersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppUsersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppUsersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppUsersModule,
  ROUTES
};
//# sourceMappingURL=chunk-J2I46KOD.js.map
