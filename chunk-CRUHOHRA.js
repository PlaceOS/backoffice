import {
  GroupStateService
} from "./chunk-ZHKSMBVX.js";
import "./chunk-NO3QJPXO.js";
import "./chunk-DSIXUEND.js";
import "./chunk-MGQZ4D54.js";
import "./chunk-4SKKX7ZQ.js";
import "./chunk-UIY3M3NT.js";
import {
  SimpleTableComponent
} from "./chunk-RDQ6PHSS.js";
import {
  groupPermissionLabels
} from "./chunk-TKIVO3RR.js";
import {
  ItemSearchFieldComponent
} from "./chunk-365PTNYH.js";
import "./chunk-P3VSKMBR.js";
import "./chunk-TD66DK6G.js";
import "./chunk-3T4IGYDM.js";
import "./chunk-ATCOB3R7.js";
import "./chunk-7QWEFWP7.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-TS6UUEEQ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-UOJTYLOH.js";
import "./chunk-P3BK5ZDJ.js";
import "./chunk-CXFGSIWY.js";
import "./chunk-NNX74YD5.js";
import "./chunk-X2FZB35R.js";
import "./chunk-EQS235EG.js";
import "./chunk-M3XU23PA.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RFU37ATJ.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-J6AHPXMZ.js";
import "./chunk-PK5A7L3I.js";
import "./chunk-PLX4KB2H.js";
import "./chunk-V3CYZPSM.js";
import "./chunk-S7FMIV3Y.js";
import "./chunk-WZTE63Q5.js";
import "./chunk-GAHHDLCB.js";
import "./chunk-ASNLNZJP.js";
import "./chunk-MXHU44D4.js";
import {
  TranslatePipe
} from "./chunk-NBJYZGNA.js";
import "./chunk-AOPYKUKV.js";
import {
  eh
} from "./chunk-NMVMT4VD.js";
import {
  IconComponent
} from "./chunk-AWTACVQN.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-JIYYYGTQ.js";
import {
  MatRippleModule
} from "./chunk-6DV7MASG.js";
import {
  MatRipple
} from "./chunk-LWFSYFOG.js";
import "./chunk-ZNAEYXEF.js";
import "./chunk-UROHCZFR.js";
import "./chunk-4LBKZFUW.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OQOLG7V4.js";
import "./chunk-RQBZITXC.js";

// src/app/groups/group-users.component.ts
var _c0 = (a0, a1) => ({ key: "user", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0) => ({ key: "actions", name: " ", size: "7rem", content: a0 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/users", a0, "about"];
function GroupUsersComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "a", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r1.user_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.user?.name || row_r1.user_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.user?.email);
  }
}
function GroupUsersComponent_ng_template_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, label_r2), " ");
  }
}
function GroupUsersComponent_ng_template_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.NONE"));
  }
}
function GroupUsersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, GroupUsersComponent_ng_template_18_For_2_Template, 3, 3, "span", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, GroupUsersComponent_ng_template_18_Conditional_3_Template, 3, 3, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const labels_r4 = \u0275\u0275nextContext().permissionLabels(row_r3.permissions);
    \u0275\u0275advance();
    \u0275\u0275repeater(labels_r4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!labels_r4.length ? 3 : -1);
  }
}
function GroupUsersComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GroupUsersComponent_ng_template_20_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editPermissions(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function GroupUsersComponent_ng_template_20_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeUser(row_r6));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "GROUPS.USER_PERMISSIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "GROUPS.USER_REMOVE"));
  }
}
var GroupUsersComponent = class _GroupUsersComponent {
  _service = inject(GroupStateService);
  users = this._service.users;
  loading = this._service.loading;
  permissionLabels = groupPermissionLabels;
  addUser = (user) => this._service.addUser(user);
  bulkAddUsers = () => this._service.bulkAddUsers(this._current_users);
  removeUser = (row) => this._service.removeUser(row);
  editPermissions = (row) => this._service.editUserPermissions(row);
  query_fn = (_) => eh({
    q: _,
    authority_id: this._service.active_item?.authority_id
  }).then((resp) => resp.data);
  exclude_fn = (user, __) => {
    const authority_id = this._service.active_item?.authority_id;
    return !!this._service.active_item && (!!this._current_users.find((_) => _.user_id === user.id) || !!authority_id && user.authority_id !== authority_id);
  };
  _current_users = [];
  constructor() {
    effect(() => this._current_users = this.users());
  }
  static \u0275fac = function GroupUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupUsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupUsersComponent, selectors: [["group-users"]], decls: 22, vars: 38, consts: [["user_template", ""], ["permissions_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "items-center", "gap-2", "p-4"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "flex", "h-1/2", "min-h-0", "w-full", "flex-1", "flex-col", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-h-0", "w-full", "min-w-[56rem]", "flex-1", "text-sm", 3, "virtual_row_height", "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function GroupUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "item-search-field", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function GroupUsersComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        return ctx.addUser($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 6);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function GroupUsersComponent_Template_button_click_4_listener() {
        return ctx.bulkAddUsers();
      });
      \u0275\u0275elementStart(6, "icon", 7);
      \u0275\u0275text(7, "playlist_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 8);
      \u0275\u0275element(11, "mat-progress-bar", 9)(12, "simple-table", 10);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, GroupUsersComponent_ng_template_16_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(18, GroupUsersComponent_ng_template_18_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(20, GroupUsersComponent_ng_template_20_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const user_template_r8 = \u0275\u0275reference(17);
      const permissions_template_r9 = \u0275\u0275reference(19);
      const actions_template_r10 = \u0275\u0275reference(21);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 14, "GROUPS.USER_SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 16, "GROUPS.USERS_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 18, "GROUPS.USERS_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("virtual_row_height", 72)("data", ctx.users)("columns", \u0275\u0275pureFunction3(34, _c3, \u0275\u0275pureFunction2(26, _c0, \u0275\u0275pipeBind1(13, 20, "GROUPS.FIELD_USER"), user_template_r8), \u0275\u0275pureFunction2(29, _c1, \u0275\u0275pipeBind1(14, 22, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r9), \u0275\u0275pureFunction1(32, _c2, actions_template_r10)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(15, 24, "GROUPS.USERS_EMPTY"));
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
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-users.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupUsersComponent, [{
    type: Component,
    args: [{ selector: "group-users", template: `
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 p-4">
                <item-search-field
                    [placeholder]="'GROUPS.USER_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addUser($event)"
                />
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="'GROUPS.USERS_BULK' | translate"
                    (click)="bulkAddUsers()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'GROUPS.USERS_BULK' | translate }}
                </button>
            </section>
            <section
                class="flex h-1/2 min-h-0 w-full flex-1 flex-col overflow-auto px-4"
            >
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                />
                <simple-table
                    class="block min-h-0 w-full min-w-[56rem] flex-1 text-sm"
                    [virtual_row_height]="72"
                    [data]="users"
                    [columns]="[
                        {
                            key: 'user',
                            name: 'GROUPS.FIELD_USER' | translate,
                            content: user_template,
                        },
                        {
                            key: 'permissions',
                            name: 'GROUPS.FIELD_PERMISSIONS' | translate,
                            content: permissions_template,
                            size: '24rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '7rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'GROUPS.USERS_EMPTY' | translate"
                />
            </section>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="['/users', row.user_id, 'about']"
                >
                    {{ row.user?.name || row.user_id }}
                </a>
                <div class="text-xs opacity-30">{{ row.user?.email }}</div>
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
                        'COMMON.NONE' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'GROUPS.USER_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'GROUPS.USER_REMOVE' | translate"
                    (click)="removeUser(row)"
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
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/groups/group-users.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-users.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupUsersComponent, { className: "GroupUsersComponent", filePath: "src/app/groups/group-users.component.ts", lineNumber: 146 });
})();
export {
  GroupUsersComponent
};
//# debugId=108ef91b-caf4-531f-9938-1610441ad46b
//# sourceMappingURL=chunk-CRUHOHRA.js.map
