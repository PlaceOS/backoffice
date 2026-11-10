import {
  SimpleTableComponent
} from "./chunk-P3JIVHGO.js";
import {
  groupPermissionLabels
} from "./chunk-VGVLFPXY.js";
import {
  ItemSearchFieldComponent
} from "./chunk-EKQU7VBO.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-2HWH2YE2.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PZ6AYSMX.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-T674EZ22.js";
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
  IconComponent
} from "./chunk-RCJ4J7SQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3LASJ6UJ.js";
import {
  Component,
  Input,
  ViewChild,
  computed,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-DTROA6L2.js";

// src/app/groups/group-membership.component.ts
var _c0 = ["member_template"];
var _c1 = ["permissions_template"];
var _c2 = ["deny_template"];
var _c3 = ["actions_template"];
var _c4 = (a0, a1) => ["/", a0, a1, "about"];
function GroupMembershipComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275nextContext();
    const opts_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(3, _c4, opts_r2.route, opts_r2.member_id(row_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opts_r2.member_name(row_r1), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", opts_r2.member_detail(row_r1), " ");
  }
}
function GroupMembershipComponent_ng_template_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, label_r3), " ");
  }
}
function GroupMembershipComponent_ng_template_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const opts_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, opts_r2.no_permissions));
  }
}
function GroupMembershipComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, GroupMembershipComponent_ng_template_17_For_2_Template, 3, 3, "span", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, GroupMembershipComponent_ng_template_17_Conditional_3_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const labels_r5 = \u0275\u0275nextContext().permissionLabels(row_r4.permissions);
    \u0275\u0275advance();
    \u0275\u0275repeater(labels_r5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!labels_r5.length ? 3 : -1);
  }
}
function GroupMembershipComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-error", row_r6.deny)("text-error-content", row_r6.deny)("bg-success", !row_r6.deny)("text-success-content", !row_r6.deny);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, row_r6.deny ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function GroupMembershipComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GroupMembershipComponent_ng_template_21_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.members().editPermissions(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function GroupMembershipComponent_ng_template_21_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.members().remove(row_r8));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const opts_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, opts_r2.one + "_PERMISSIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, opts_r2.one + "_REMOVE"));
  }
}
var GroupMembershipComponent = class _GroupMembershipComponent {
  members = input.required(
    ...ngDevMode ? [{ debugName: "members" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the membership rows are loading or saving */
  loading = input(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  permissionLabels = groupPermissionLabels;
  rows = computed(
    () => this.members().options.rows(),
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _member = viewChild(
    "member_template",
    ...ngDevMode ? [{ debugName: "_member" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _permissions = viewChild(
    "permissions_template",
    ...ngDevMode ? [{ debugName: "_permissions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _deny = viewChild(
    "deny_template",
    ...ngDevMode ? [{ debugName: "_deny" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _actions = viewChild(
    "actions_template",
    ...ngDevMode ? [{ debugName: "_actions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  columns = computed(
    () => {
      const opts = this.members().options;
      return [
        {
          key: opts.member_key,
          name: i18n(opts.column),
          content: this._member()
        },
        {
          key: "permissions",
          name: i18n("GROUPS.FIELD_PERMISSIONS"),
          content: this._permissions(),
          size: "24rem"
        },
        {
          key: "deny",
          name: i18n("GROUPS.FIELD_DENY"),
          content: this._deny(),
          size: "6rem",
          show: !!opts.show_deny
        },
        {
          key: "actions",
          name: i18n("COMMON.ACTIONS"),
          hide_name: true,
          size: "7rem",
          content: this._actions()
        }
      ];
    },
    ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    )
  );
  query_fn = (q) => this.members().options.query(q, this.members().options.authority_id());
  exclude_fn = (item) => this.members().exclude(item);
  static \u0275fac = function GroupMembershipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupMembershipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupMembershipComponent, selectors: [["group-membership"]], viewQuery: function GroupMembershipComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._member, _c0, 5)(ctx._permissions, _c1, 5)(ctx._deny, _c2, 5)(ctx._actions, _c3, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(4);
    }
  }, inputs: { members: [1, "members"], loading: [1, "loading"] }, decls: 23, vars: 25, consts: [["member_template", ""], ["permissions_template", ""], ["deny_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "items-center", "gap-2", "p-4"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "flex", "h-1/2", "min-h-0", "w-full", "flex-1", "flex-col", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-h-0", "w-full", "flex-1", "text-sm", 3, "virtual_row_height", "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "px-4", "py-2"], [1, "inline-flex", "rounded", "px-2", "py-1", "text-xs", "font-medium"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function GroupMembershipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275declareLet(0);
      \u0275\u0275elementStart(1, "div", 4)(2, "section", 5)(3, "item-search-field", 6);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function GroupMembershipComponent_Template_item_search_field_ngModelChange_3_listener($event) {
        return ctx.members().add($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 7);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275listener("click", function GroupMembershipComponent_Template_button_click_5_listener() {
        return ctx.members().bulkAdd();
      });
      \u0275\u0275elementStart(7, "icon", 8);
      \u0275\u0275text(8, "playlist_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 9);
      \u0275\u0275element(12, "mat-progress-bar", 10)(13, "simple-table", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, GroupMembershipComponent_ng_template_15_Template, 5, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(17, GroupMembershipComponent_ng_template_17_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(19, GroupMembershipComponent_ng_template_19_Template, 4, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(21, GroupMembershipComponent_ng_template_21_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const opts_r10 = \u0275\u0275storeLet(ctx.members().options);
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 17, opts_r10.search))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 19, opts_r10.many + "_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 21, opts_r10.many + "_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275classMap(opts_r10.show_deny ? "min-w-[64rem]" : "min-w-[56rem]");
      \u0275\u0275property("virtual_row_height", 72)("data", ctx.rows())("columns", ctx.columns())("sortable", true)("empty_message", \u0275\u0275pipeBind1(14, 23, opts_r10.many + "_EMPTY"));
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    IconComponent,
    ItemSearchFieldComponent,
    MatProgressBarModule,
    MatProgressBar,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    RouterModule,
    RouterLink,
    SimpleTableComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-membership.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupMembershipComponent, [{
    type: Component,
    args: [{ selector: "group-membership", template: `
        @let opts = members().options;
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 p-4">
                <item-search-field
                    [placeholder]="opts.search | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="members().add($event)"
                />
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="opts.many + '_BULK' | translate"
                    (click)="members().bulkAdd()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ opts.many + '_BULK' | translate }}
                </button>
            </section>
            <section
                class="flex h-1/2 min-h-0 w-full flex-1 flex-col overflow-auto px-4"
            >
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-h-0 w-full flex-1 text-sm"
                    [class]="opts.show_deny ? 'min-w-[64rem]' : 'min-w-[56rem]'"
                    [virtual_row_height]="72"
                    [data]="rows()"
                    [columns]="columns()"
                    [sortable]="true"
                    [empty_message]="opts.many + '_EMPTY' | translate"
                />
            </section>
        </div>
        <ng-template #member_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="[
                        '/',
                        opts.route,
                        opts.member_id(row),
                        'about',
                    ]"
                >
                    {{ opts.member_name(row) }}
                </a>
                <div class="text-xs opacity-30">
                    {{ opts.member_detail(row) }}
                </div>
            </div>
        </ng-template>
        <ng-template #permissions_template let-row="row">
            <div class="flex flex-wrap gap-1 px-4 py-2">
                @let labels = permissionLabels(row.permissions);
                @for (label of labels; track label) {
                    <span class="bg-base-200 rounded px-2 py-1 text-xs">
                        {{ label | translate }}
                    </span>
                }
                @if (!labels.length) {
                    <span class="opacity-30">{{
                        opts.no_permissions | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #deny_template let-row="row">
            <div class="px-4 py-2">
                <span
                    class="inline-flex rounded px-2 py-1 text-xs font-medium"
                    [class.bg-error]="row.deny"
                    [class.text-error-content]="row.deny"
                    [class.bg-success]="!row.deny"
                    [class.text-success-content]="!row.deny"
                >
                    {{
                        (row.deny ? 'COMMON.TRUE' : 'COMMON.FALSE') | translate
                    }}
                </span>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="opts.one + '_PERMISSIONS' | translate"
                    (click)="members().editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="opts.one + '_REMOVE' | translate"
                    (click)="members().remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      FormsModule,
      IconComponent,
      ItemSearchFieldComponent,
      MatProgressBarModule,
      MatRippleModule,
      MatTooltipModule,
      RouterModule,
      SimpleTableComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;2ecc597e703c830d;/home/runner/work/backoffice/backoffice/src/app/groups/group-membership.component.ts */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-membership.component.css.map */\n"] }]
  }], null, { members: [{ type: Input, args: [{ isSignal: true, alias: "members", required: true }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], _member: [{ type: ViewChild, args: ["member_template", { isSignal: true }] }], _permissions: [{ type: ViewChild, args: ["permissions_template", { isSignal: true }] }], _deny: [{ type: ViewChild, args: ["deny_template", { isSignal: true }] }], _actions: [{ type: ViewChild, args: ["actions_template", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupMembershipComponent, { className: "GroupMembershipComponent", filePath: "src/app/groups/group-membership.component.ts", lineNumber: 163 });
})();

export {
  GroupMembershipComponent
};
//# debugId=47fe9474-3483-5f15-8be9-5b5286ac1d4e
//# sourceMappingURL=chunk-IHRXQ2BP.js.map
