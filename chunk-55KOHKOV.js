import {
  UsersStateService
} from "./chunk-OJS555A5.js";
import {
  groupPermissionLabels
} from "./chunk-C73Y7H3U.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TPD5UFBJ.js";
import "./chunk-LV4GBI7Q.js";
import "./chunk-J533RESC.js";
import "./chunk-Y4CFRGFT.js";
import "./chunk-7GTPBWD4.js";
import {
  ItemSearchFieldComponent
} from "./chunk-KZO2OZUY.js";
import "./chunk-5DYDWWDW.js";
import "./chunk-PFP5GBI7.js";
import "./chunk-WGBPIGQD.js";
import "./chunk-TG7MI555.js";
import "./chunk-UHEQKETH.js";
import "./chunk-KMTGRH5S.js";
import "./chunk-MKUNKECS.js";
import {
  SimpleTableComponent
} from "./chunk-MUO7ALH5.js";
import "./chunk-MRAJXLIZ.js";
import "./chunk-DTCPP7I4.js";
import "./chunk-SYFVYOP6.js";
import "./chunk-FDVXWCJC.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-SH4SZQVY.js";
import "./chunk-TYZFLJYX.js";
import "./chunk-4ZFVXULA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-DKBIML2S.js";
import "./chunk-6HFZ2LJV.js";
import "./chunk-AVP547Y3.js";
import "./chunk-T6JVNKEV.js";
import "./chunk-MJCCW474.js";
import "./chunk-HV6WAF26.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-NKHB33NT.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-OMTFMYK4.js";
import "./chunk-Z3EKRGVK.js";
import "./chunk-5P6RE4SY.js";
import {
  MatRippleModule
} from "./chunk-IZKGHFEC.js";
import "./chunk-OKKLVLNZ.js";
import {
  TranslatePipe
} from "./chunk-YQWUAWSB.js";
import {
  IconComponent
} from "./chunk-ZHEO2T5Y.js";
import "./chunk-WL7ZLVLT.js";
import {
  MatRipple
} from "./chunk-3WFHRON7.js";
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
} from "./chunk-46M7K5TF.js";
import {
  Vc,
  map
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/users/user-groups.component.ts
var _c0 = (a0, a1) => ({ key: "group", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0) => ({ key: "actions", name: " ", size: "7rem", content: a0 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/groups", a0, "about"];
function UserGroupsComponent_ng_template_17_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r2.group_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r2.group == null ? null : row_r2.group.name) || row_r2.group_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.group_id);
  }
}
function UserGroupsComponent_ng_template_19_For_2_Template(rf, ctx) {
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
function UserGroupsComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DEFAULT"));
  }
}
function UserGroupsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, UserGroupsComponent_ng_template_19_For_2_Template, 3, 3, "span", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, UserGroupsComponent_ng_template_19_Conditional_3_Template, 3, 3, "span", 16);
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
function UserGroupsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function UserGroupsComponent_ng_template_21_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editPermissions(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function UserGroupsComponent_ng_template_21_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeGroup(row_r7));
    });
    \u0275\u0275elementStart(7, "icon", 19);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "USERS.GROUP_PERMISSIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "USERS.GROUP_REMOVE"));
  }
}
var UserGroupsComponent = class _UserGroupsComponent {
  _service = inject(UsersStateService);
  groups = this._service.groups;
  loading = this._service.loading;
  permissionLabels = groupPermissionLabels;
  addGroup = (group) => this._service.addGroup(group);
  bulkAddGroups = () => this._service.bulkAddGroups(this._current_groups);
  removeGroup = (row) => this._service.removeGroup(row);
  editPermissions = (row) => this._service.editGroupPermissions(row);
  query_fn = (_) => Vc({
    q: _,
    limit: 20,
    authority_id: this._service.active_item?.authority_id
  }).pipe(map((resp) => resp.data));
  exclude_fn = (group, __) => {
    const authority_id = this._service.active_item?.authority_id;
    return !!this._service.active_item && (!!this._current_groups.find((_) => _.group_id === group.id) || !!authority_id && group.authority_id !== authority_id);
  };
  _current_groups = [];
  constructor() {
    this.groups.subscribe((groups) => this._current_groups = groups);
  }
  static \u0275fac = function UserGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserGroupsComponent, selectors: [["user-groups"]], decls: 23, vars: 39, consts: [["group_template", ""], ["permissions_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "gap-2", "px-4", "pt-4"], [1, "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "h-1/2", "min-h-0", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[56rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function UserGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "item-search-field", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function UserGroupsComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addGroup($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 6);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function UserGroupsComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkAddGroups());
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
      \u0275\u0275template(17, UserGroupsComponent_ng_template_17_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, UserGroupsComponent_ng_template_19_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, UserGroupsComponent_ng_template_21_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const group_template_r8 = \u0275\u0275reference(18);
      const permissions_template_r9 = \u0275\u0275reference(20);
      const actions_template_r10 = \u0275\u0275reference(22);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 13, "GROUPS.SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 15, "USERS.GROUPS_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "USERS.GROUPS_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(12, 19, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.groups)("columns", \u0275\u0275pureFunction3(35, _c3, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(14, 21, "GROUPS.SINGULAR"), group_template_r8), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(15, 23, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r9), \u0275\u0275pureFunction1(33, _c2, actions_template_r10)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(16, 25, "USERS.GROUPS_EMPTY"));
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=user-groups.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupsComponent, [{
    type: Component,
    args: [{ selector: "user-groups", template: `
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex gap-2 px-4 pt-4">
                <item-search-field
                    [placeholder]="'GROUPS.SEARCH' | translate"
                    class="flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addGroup($event)"
                ></item-search-field>
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="'USERS.GROUPS_BULK' | translate"
                    (click)="bulkAddGroups()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'USERS.GROUPS_BULK' | translate }}
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
                    [data]="groups"
                    [columns]="[
                        {
                            key: 'group',
                            name: 'GROUPS.SINGULAR' | translate,
                            content: group_template,
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
                    [empty_message]="'USERS.GROUPS_EMPTY' | translate"
                ></simple-table>
            </section>
        </div>
        <ng-template #group_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="['/groups', row.group_id, 'about']"
                >
                    {{ row.group?.name || row.group_id }}
                </a>
                <div class="text-xs opacity-30">{{ row.group_id }}</div>
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
                        'COMMON.DEFAULT' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [matTooltip]="'USERS.GROUP_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'USERS.GROUP_REMOVE' | translate"
                    (click)="removeGroup(row)"
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
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/users/user-groups.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=user-groups.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserGroupsComponent, { className: "UserGroupsComponent", filePath: "src/app/users/user-groups.component.ts", lineNumber: 142 });
})();
export {
  UserGroupsComponent
};
//# sourceMappingURL=chunk-55KOHKOV.js.map
