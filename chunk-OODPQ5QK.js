import {
  ZonesStateService
} from "./chunk-MLT4Q4KQ.js";
import "./chunk-PC3LTXJA.js";
import "./chunk-CAEEINOC.js";
import "./chunk-IJ7SWPKJ.js";
import "./chunk-YBGLQKCU.js";
import "./chunk-LVQJ6JUX.js";
import "./chunk-ACXRHHDC.js";
import "./chunk-ZMORPGE7.js";
import {
  SimpleTableComponent
} from "./chunk-MLUIXMIO.js";
import {
  groupPermissionLabels
} from "./chunk-FDHT3WOM.js";
import {
  ItemSearchFieldComponent
} from "./chunk-INR5SBJH.js";
import "./chunk-75QZBWCP.js";
import "./chunk-266GOI67.js";
import "./chunk-R3V5YJKZ.js";
import "./chunk-KZLWJTDG.js";
import "./chunk-QWYCVKRD.js";
import "./chunk-T3O7QHHC.js";
import "./chunk-I67FUPJX.js";
import "./chunk-F2UXRHVQ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-WDXKFFYO.js";
import "./chunk-HPS63TJZ.js";
import "./chunk-JIKSLL3H.js";
import "./chunk-QUK2HLQJ.js";
import "./chunk-W2EPZJRF.js";
import "./chunk-SBWE5ILJ.js";
import "./chunk-DQFIZL2Z.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HAWZID7H.js";
import {
  LoadingLabelDirective
} from "./chunk-S6TBIU6L.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2VSGNNLN.js";
import "./chunk-LKZDNNIZ.js";
import "./chunk-HIOLOCMM.js";
import "./chunk-KIA2WBKL.js";
import "./chunk-HASFJPLN.js";
import "./chunk-BS66IPO2.js";
import "./chunk-4K4B4UVA.js";
import "./chunk-LYNAN5CD.js";
import "./chunk-VOTOBPUF.js";
import {
  MatRippleModule
} from "./chunk-TUNU3FRP.js";
import {
  MatRipple
} from "./chunk-52KP2JDE.js";
import {
  TranslatePipe
} from "./chunk-XTQWFJN3.js";
import "./chunk-V4STGI54.js";
import "./chunk-AOPYKUKV.js";
import {
  Eu,
  Mt
} from "./chunk-3QDC3AOP.js";
import {
  IconComponent
} from "./chunk-GPNEKEBR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NHAMJPH5.js";
import "./chunk-6PPSOO7F.js";
import "./chunk-S7Y6NAJI.js";
import "./chunk-DKYBNEOC.js";
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
} from "./chunk-HGOGRFKW.js";
import "./chunk-RQBZITXC.js";

// src/app/zones/zone-groups.component.ts
var _c0 = (a0, a1) => ({ key: "group", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0, a1) => ({ key: "deny", name: a0, content: a1, size: "6rem" });
var _c3 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, size: "6.5rem", content: a1 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/groups", a0, "about"];
function ZoneGroupsComponent_ng_template_18_Template(rf, ctx) {
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
function ZoneGroupsComponent_ng_template_20_For_2_Template(rf, ctx) {
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
function ZoneGroupsComponent_ng_template_20_Conditional_3_Template(rf, ctx) {
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
function ZoneGroupsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, ZoneGroupsComponent_ng_template_20_For_2_Template, 3, 3, "span", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, ZoneGroupsComponent_ng_template_20_Conditional_3_Template, 3, 3, "span", 17);
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
function ZoneGroupsComponent_ng_template_22_Template(rf, ctx) {
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
function ZoneGroupsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ZoneGroupsComponent_ng_template_24_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.editPermissions(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ZoneGroupsComponent_ng_template_24_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.removeGroup(row_r7));
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
  query_fn = (_) => Eu({
    q: _,
    limit: 20,
    authority_id: this.authority_id
  }).then((resp) => resp.data);
  exclude_fn = (group, __) => {
    const authority_id = this.authority_id;
    return !!this._service.active_item && (!!this._current_groups.find((_) => _.group_id === group.id) || !!authority_id && group.authority_id !== authority_id);
  };
  get authority_id() {
    return this._service.active_item?.authority_id || Mt()?.id || void 0;
  }
  _current_groups = [];
  constructor() {
    effect(() => this._current_groups = this.groups());
  }
  static \u0275fac = function ZoneGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneGroupsComponent, selectors: [["zone-groups"]], decls: 26, vars: 47, consts: [["group_template", ""], ["permissions_template", ""], ["deny_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "gap-2", "px-4", "pt-4"], [1, "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "flex", "h-1/2", "min-h-0", "w-full", "flex-1", "flex-col", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-h-0", "w-full", "min-w-[64rem]", "flex-1", "text-sm", 3, "virtual_row_height", "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "px-4", "py-2"], [1, "inline-flex", "rounded", "px-2", "py-1", "text-xs", "font-medium"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function ZoneGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "item-search-field", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275listener("ngModelChange", function ZoneGroupsComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        return ctx.addGroup($event);
      });
      \u0275\u0275elementEnd();
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
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, ZoneGroupsComponent_ng_template_18_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, ZoneGroupsComponent_ng_template_20_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(22, ZoneGroupsComponent_ng_template_22_Template, 4, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(24, ZoneGroupsComponent_ng_template_24_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const group_template_r9 = \u0275\u0275reference(19);
      const permissions_template_r10 = \u0275\u0275reference(21);
      const deny_template_r11 = \u0275\u0275reference(23);
      const actions_template_r12 = \u0275\u0275reference(25);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 14, "GROUPS.SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 16, "ZONES.GROUPS_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 18, "ZONES.GROUPS_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invisible", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("virtual_row_height", 72)("data", ctx.groups)("columns", \u0275\u0275pureFunction4(42, _c4, \u0275\u0275pureFunction2(30, _c0, \u0275\u0275pipeBind1(13, 20, "GROUPS.SINGULAR"), group_template_r9), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(14, 22, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r10), \u0275\u0275pureFunction2(36, _c2, \u0275\u0275pipeBind1(15, 24, "GROUPS.FIELD_DENY"), deny_template_r11), \u0275\u0275pureFunction2(39, _c3, \u0275\u0275pipeBind1(16, 26, "COMMON.ACTIONS"), actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(17, 28, "ZONES.GROUPS_EMPTY"));
    }
  }, dependencies: [
    LoadingLabelDirective,
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
                />
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
            <section
                class="flex h-1/2 min-h-0 w-full flex-1 flex-col overflow-auto px-4"
            >
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                <simple-table
                    class="block min-h-0 w-full min-w-[64rem] flex-1 text-sm"
                    [virtual_row_height]="72"
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
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6.5rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ZONES.GROUPS_EMPTY' | translate"
                />
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
                @let labels = permissionLabels(row.permissions);
                @for (label of labels; track label) {
                    <span class="bg-base-200 rounded px-2 py-1 text-xs">
                        {{ label | translate }}
                    </span>
                }
                @if (!labels.length) {
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
      LoadingLabelDirective,
      FormsModule,
      IconComponent,
      ItemSearchFieldComponent,
      MatProgressBarModule,
      MatRippleModule,
      MatTooltipModule,
      RouterModule,
      SimpleTableComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;6b3bad7fe95d5122;/home/runner/work/backoffice/backoffice/src/app/zones/zone-groups.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=zone-groups.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneGroupsComponent, { className: "ZoneGroupsComponent", filePath: "src/app/zones/zone-groups.component.ts", lineNumber: 175 });
})();
export {
  ZoneGroupsComponent
};
//# debugId=7687fdb6-8da6-597f-a015-990fdec240a5
//# sourceMappingURL=chunk-OODPQ5QK.js.map
