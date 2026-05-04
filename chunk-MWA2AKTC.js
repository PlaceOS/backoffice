import {
  GroupStateService
} from "./chunk-WU3FRRWZ.js";
import {
  groupPermissionLabels
} from "./chunk-Y6QIPKJT.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-BL33ZEHA.js";
import {
  ItemSearchFieldComponent
} from "./chunk-LHURGCPM.js";
import "./chunk-J533RESC.js";
import "./chunk-VDOVHCUZ.js";
import "./chunk-2V5TWTO7.js";
import "./chunk-V5QDO25T.js";
import "./chunk-CYNTSSZZ.js";
import "./chunk-YK26JLC5.js";
import "./chunk-QTR32TTA.js";
import "./chunk-FJPPD2QF.js";
import {
  SimpleTableComponent
} from "./chunk-CHPLZLIO.js";
import "./chunk-AGMORATK.js";
import "./chunk-WJA6IVS3.js";
import "./chunk-3PZHMYR6.js";
import "./chunk-2N7FWMGW.js";
import "./chunk-FF4LYOF6.js";
import "./chunk-C2EHSMEV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HI6ZGSVN.js";
import "./chunk-6X5TKQ26.js";
import "./chunk-QRPF7APM.js";
import "./chunk-HIIV2XZN.js";
import "./chunk-QQS43L4S.js";
import "./chunk-KZF6VR3U.js";
import "./chunk-LYW23EPM.js";
import "./chunk-2I5OKOYD.js";
import "./chunk-6KNO3SVN.js";
import "./chunk-F3TF32RZ.js";
import "./chunk-IQ5P3T5K.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-66RYWCNF.js";
import {
  IconComponent
} from "./chunk-A3Z42SO5.js";
import "./chunk-WQLIN7ET.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-6AG37CM5.js";
import "./chunk-JC5YMAMK.js";
import "./chunk-CQWDZ2JU.js";
import "./chunk-ON7XH5SZ.js";
import {
  MatRippleModule
} from "./chunk-FC2K5SLV.js";
import {
  TranslatePipe
} from "./chunk-I3SKV5XF.js";
import {
  MatRipple
} from "./chunk-SIL4NKYL.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgModel,
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
} from "./chunk-RH6UOTOJ.js";
import {
  fh,
  map
} from "./chunk-Y5GQFF5E.js";
import "./chunk-KWSTWQNB.js";

// src/app/groups/group-users.component.ts
var _c0 = (a0, a1) => ({ key: "user", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0) => ({ key: "actions", name: " ", size: "7rem", content: a0 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/users", a0, "about"];
function GroupUsersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "a", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r2.user_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r2.user == null ? null : row_r2.user.name) || row_r2.user_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.user == null ? null : row_r2.user.email);
  }
}
function GroupUsersComponent_ng_template_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
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
function GroupUsersComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
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
function GroupUsersComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, GroupUsersComponent_ng_template_19_For_2_Template, 3, 3, "span", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, GroupUsersComponent_ng_template_19_Conditional_3_Template, 3, 3, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.permissionLabels(row_r4.permissions));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r4.permissionLabels(row_r4.permissions).length ? 3 : -1);
  }
}
function GroupUsersComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GroupUsersComponent_ng_template_21_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editPermissions(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function GroupUsersComponent_ng_template_21_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeUser(row_r7));
    });
    \u0275\u0275elementStart(7, "icon", 19);
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
  query_fn = (_) => fh({ q: _ }).pipe(map((resp) => resp.data));
  exclude_fn = (user, __) => !!this._service.active_item && !!this._current_users.find((_) => _.user_id === user.id);
  _current_users = [];
  constructor() {
    this.users.subscribe((users) => this._current_users = users);
  }
  static \u0275fac = function GroupUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupUsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupUsersComponent, selectors: [["group-users"]], decls: 23, vars: 39, consts: [["user_template", ""], ["permissions_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "items-center", "gap-2", "p-4"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "h-1/2", "min-h-0", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[56rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function GroupUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "item-search-field", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function GroupUsersComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addUser($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 6);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function GroupUsersComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkAddUsers());
      });
      \u0275\u0275elementStart(6, "icon", 7);
      \u0275\u0275text(7, "playlist_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 8);
      \u0275\u0275element(11, "mat-progress-bar", 9);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275element(13, "simple-table", 10);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, GroupUsersComponent_ng_template_17_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, GroupUsersComponent_ng_template_19_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, GroupUsersComponent_ng_template_21_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const user_template_r8 = \u0275\u0275reference(18);
      const permissions_template_r9 = \u0275\u0275reference(20);
      const actions_template_r10 = \u0275\u0275reference(22);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 13, "GROUPS.USER_SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 15, "GROUPS.USERS_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "GROUPS.USERS_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(12, 19, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.users)("columns", \u0275\u0275pureFunction3(35, _c3, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(14, 21, "GROUPS.FIELD_USER"), user_template_r8), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(15, 23, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r9), \u0275\u0275pureFunction1(33, _c2, actions_template_r10)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(16, 25, "GROUPS.USERS_EMPTY"));
    }
  }, dependencies: [
    CommonModule,
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
    AsyncPipe,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-users.component.css.map */"] });
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
                ></item-search-field>
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
            <section class="h-1/2 min-h-0 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[56rem] text-sm"
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
                ></simple-table>
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
                @for (label of permissionLabels(row.permissions); track label) {
                    <span class="bg-base-200 rounded px-2 py-1 text-xs">
                        {{ label | translate }}
                    </span>
                }
                @if (!permissionLabels(row.permissions).length) {
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
                    matRipple
                    [matTooltip]="'GROUPS.USER_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'GROUPS.USER_REMOVE' | translate"
                    (click)="removeUser(row)"
                >
                    <icon class="text-error">delete</icon>
                </button>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupUsersComponent, { className: "GroupUsersComponent", filePath: "src/app/groups/group-users.component.ts", lineNumber: 142 });
})();
export {
  GroupUsersComponent
};
//# sourceMappingURL=chunk-MWA2AKTC.js.map
