import {
  ZonesStateService
} from "./chunk-JPSHSO6N.js";
import "./chunk-42VRROUT.js";
import {
  groupPermissionLabels
} from "./chunk-MSMIBWWH.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-GEMSQ6RP.js";
import "./chunk-QLC3RA6W.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-XDPTKZ2J.js";
import {
  ItemSearchFieldComponent
} from "./chunk-H6LSDWLI.js";
import "./chunk-5EBMUX3Z.js";
import "./chunk-C7NP5PYP.js";
import "./chunk-HEHOJA6Z.js";
import "./chunk-KQ433EDT.js";
import "./chunk-JZPASCCB.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-64N44YTD.js";
import "./chunk-7EDKEAYJ.js";
import {
  SimpleTableComponent
} from "./chunk-VHPH2CGR.js";
import "./chunk-FI5QGMDU.js";
import "./chunk-WRAPQBH6.js";
import "./chunk-XTI3UY2I.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-3VJIC3YA.js";
import "./chunk-FURA3VPU.js";
import "./chunk-CEZ5W4YU.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLMLKCGG.js";
import "./chunk-6FMO72CJ.js";
import "./chunk-IE6E7XHG.js";
import "./chunk-V5GEKXNH.js";
import "./chunk-BXI7YY4Q.js";
import "./chunk-TVGX4KHG.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-KHVEC2ZJ.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-HS5WHROJ.js";
import "./chunk-LIKH2QKU.js";
import "./chunk-JJ5DNIGX.js";
import {
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe
} from "./chunk-XL23FFMP.js";
import {
  IconComponent
} from "./chunk-MQA7H2MF.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-6SWYUOAV.js";
import {
  MatRipple
} from "./chunk-2UI5N333.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  St,
  effect,
  inject,
  ou,
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
  ɵɵpureFunction4,
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
} from "./chunk-N6UZRJAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/zones/zone-groups.component.ts
var _c0 = (a0, a1) => ({ key: "group", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0, a1) => ({ key: "deny", name: a0, content: a1, size: "6rem" });
var _c3 = (a0) => ({ key: "actions", name: " ", size: "6.5rem", content: a0 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/groups", a0, "about"];
function ZoneGroupsComponent_ng_template_17_Template(rf, ctx) {
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
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c5, row_r1.group_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.group?.name || row_r1.group_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.group_id);
  }
}
function ZoneGroupsComponent_ng_template_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
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
function ZoneGroupsComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DEFAULT"));
  }
}
function ZoneGroupsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, ZoneGroupsComponent_ng_template_19_For_2_Template, 3, 3, "span", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, ZoneGroupsComponent_ng_template_19_Conditional_3_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.permissionLabels(row_r3.permissions));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.permissionLabels(row_r3.permissions).length ? 3 : -1);
  }
}
function ZoneGroupsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-error", row_r5.deny)("text-error-content", row_r5.deny)("bg-success", !row_r5.deny)("text-success-content", !row_r5.deny);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, row_r5.deny ? "COMMON.TRUE" : "COMMON.FALSE"), " ");
  }
}
function ZoneGroupsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneGroupsComponent_ng_template_23_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editPermissions(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ZoneGroupsComponent_ng_template_23_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeGroup(row_r7));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "ZONES.GROUP_PERMISSIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "ZONES.GROUP_REMOVE"));
  }
}
var ZoneGroupsComponent = class _ZoneGroupsComponent {
  _service = inject(ZonesStateService);
  groups = this._service.groups;
  loading = this._service.loading;
  permissionLabels = groupPermissionLabels;
  addGroup = (group) => this._service.addGroup(group);
  bulkAddGroups = () => this._service.bulkAddGroups(this._current_groups);
  removeGroup = (row) => this._service.removeGroup(row);
  editPermissions = (row) => this._service.editGroupPermissions(row);
  query_fn = (_) => ou({
    q: _,
    limit: 20,
    authority_id: this.authority_id
  }).then((resp) => resp.data);
  exclude_fn = (group, __) => {
    const authority_id = this.authority_id;
    return !!this._service.active_item && (!!this._current_groups.find((_) => _.group_id === group.id) || !!authority_id && group.authority_id !== authority_id);
  };
  get authority_id() {
    return this._service.active_item?.authority_id || St()?.id || void 0;
  }
  _current_groups = [];
  constructor() {
    effect(() => this._current_groups = this.groups());
  }
  static \u0275fac = function ZoneGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneGroupsComponent, selectors: [["zone-groups"]], decls: 25, vars: 43, consts: [["group_template", ""], ["permissions_template", ""], ["deny_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "gap-2", "px-4", "pt-4"], [1, "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "h-1/2", "min-h-0", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[64rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "px-4", "py-2"], [1, "inline-flex", "rounded", "px-2", "py-1", "text-xs", "font-medium"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function ZoneGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "item-search-field", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function ZoneGroupsComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        return ctx.addGroup($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(4, "button", 7);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function ZoneGroupsComponent_Template_button_click_4_listener() {
        return ctx.bulkAddGroups();
      });
      \u0275\u0275elementStart(6, "icon", 8);
      \u0275\u0275text(7, "playlist_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 9);
      \u0275\u0275element(11, "mat-progress-bar", 10)(12, "simple-table", 11);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, ZoneGroupsComponent_ng_template_17_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, ZoneGroupsComponent_ng_template_19_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, ZoneGroupsComponent_ng_template_21_Template, 4, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(23, ZoneGroupsComponent_ng_template_23_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const group_template_r8 = \u0275\u0275reference(18);
      const permissions_template_r9 = \u0275\u0275reference(20);
      const deny_template_r10 = \u0275\u0275reference(22);
      const actions_template_r11 = \u0275\u0275reference(24);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 13, "GROUPS.SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 15, "ZONES.GROUPS_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "ZONES.GROUPS_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.groups)("columns", \u0275\u0275pureFunction4(38, _c4, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(13, 19, "GROUPS.SINGULAR"), group_template_r8), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(14, 21, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r9), \u0275\u0275pureFunction2(33, _c2, \u0275\u0275pipeBind1(15, 23, "GROUPS.FIELD_DENY"), deny_template_r10), \u0275\u0275pureFunction1(36, _c3, actions_template_r11)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(16, 25, "ZONES.GROUPS_EMPTY"));
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
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-groups.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneGroupsComponent, [{
    type: Component,
    args: [{ selector: "zone-groups", template: `
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
                    [matTooltip]="'ZONES.GROUPS_BULK' | translate"
                    (click)="bulkAddGroups()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'ZONES.GROUPS_BULK' | translate }}
                </button>
            </section>
            <section class="h-1/2 min-h-0 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[64rem] text-sm"
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
                            key: 'deny',
                            name: 'GROUPS.FIELD_DENY' | translate,
                            content: deny_template,
                            size: '6rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6.5rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ZONES.GROUPS_EMPTY' | translate"
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
                    [matTooltip]="'ZONES.GROUP_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ZONES.GROUP_REMOVE' | translate"
                    (click)="removeGroup(row)"
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
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/zones/zone-groups.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-groups.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneGroupsComponent, { className: "ZoneGroupsComponent", filePath: "src/app/zones/zone-groups.component.ts", lineNumber: 168 });
})();
export {
  ZoneGroupsComponent
};
//# sourceMappingURL=chunk-ZV5YS73R.js.map
