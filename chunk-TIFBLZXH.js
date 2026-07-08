import {
  GroupStateService
} from "./chunk-EKIMAYN4.js";
import {
  groupPermissionLabels
} from "./chunk-DKLBPKQ4.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-MKANYIBS.js";
import "./chunk-KV3CZZ5A.js";
import "./chunk-7KMMGGPX.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-GILXWXRU.js";
import {
  ItemSearchFieldComponent
} from "./chunk-4SAVGYEQ.js";
import "./chunk-OEMHCWD4.js";
import "./chunk-4X4PTSQA.js";
import "./chunk-VRNJC5BQ.js";
import "./chunk-GDZ4KU6N.js";
import "./chunk-IYBVLYEV.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-SCU2ZHTT.js";
import "./chunk-UVXXRHB2.js";
import {
  SimpleTableComponent
} from "./chunk-WD33FJZ2.js";
import "./chunk-V64DN2T3.js";
import "./chunk-LL5BPSQ6.js";
import "./chunk-WAZQJR33.js";
import "./chunk-XAS7GUY2.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6AAMXG3P.js";
import "./chunk-RG3TS5UW.js";
import "./chunk-NOZWPHCR.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-P45XEGRE.js";
import "./chunk-VH6NLWUW.js";
import "./chunk-RAEUAH5O.js";
import "./chunk-NFDUIW5Q.js";
import "./chunk-FCNXEIL3.js";
import "./chunk-JHONGK5J.js";
import "./chunk-HLJBC2QQ.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-AQMMFGML.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-BTCSHLQ6.js";
import "./chunk-Y4WYMPD6.js";
import "./chunk-5QDDRDNC.js";
import "./chunk-OU4ZSGGA.js";
import {
  MatRippleModule
} from "./chunk-RHXWHY3G.js";
import "./chunk-IYFQDTHB.js";
import {
  TranslatePipe
} from "./chunk-ZCVCPEH7.js";
import {
  IconComponent
} from "./chunk-2OXMVWQR.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-MXRJFREE.js";
import {
  MatRipple
} from "./chunk-M7TMFMYW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VARF64W7.js";
import {
  Component,
  effect,
  inject,
  ja,
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
} from "./chunk-QSXZQV2A.js";
import "./chunk-KWSTWQNB.js";

// src/app/groups/group-zones.component.ts
var _c0 = (a0, a1) => ({ key: "zone", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0, a1) => ({ key: "deny", name: a0, content: a1, size: "6rem" });
var _c3 = (a0) => ({ key: "actions", name: " ", size: "7rem", content: a0 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/zones", a0, "about"];
function GroupZonesComponent_ng_template_17_Template(rf, ctx) {
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c5, row_r1.zone_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.zone?.name || row_r1.zone_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.zone_id);
  }
}
function GroupZonesComponent_ng_template_19_For_2_Template(rf, ctx) {
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
function GroupZonesComponent_ng_template_19_Conditional_3_Template(rf, ctx) {
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
function GroupZonesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, GroupZonesComponent_ng_template_19_For_2_Template, 3, 3, "span", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, GroupZonesComponent_ng_template_19_Conditional_3_Template, 3, 3, "span", 17);
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
function GroupZonesComponent_ng_template_21_Template(rf, ctx) {
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
function GroupZonesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GroupZonesComponent_ng_template_23_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editPermissions(row_r7));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function GroupZonesComponent_ng_template_23_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeZone(row_r7));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "GROUPS.ZONE_PERMISSIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "GROUPS.ZONE_REMOVE"));
  }
}
var GroupZonesComponent = class _GroupZonesComponent {
  _service = inject(GroupStateService);
  zones = this._service.zones;
  loading = this._service.loading;
  permissionLabels = groupPermissionLabels;
  addZone = (zone) => this._service.addZone(zone);
  bulkAddZones = () => this._service.bulkAddZones(this._current_zones);
  removeZone = (row) => this._service.removeZone(row);
  editPermissions = (row) => this._service.editZonePermissions(row);
  query_fn = (_) => ja({
    q: _,
    authority_id: this._service.active_item?.authority_id
  }).then((resp) => resp.data);
  exclude_fn = (zone, __) => {
    const authority_id = this._service.active_item?.authority_id;
    const zone_authority_id = zone.authority_id;
    return !!this._service.active_item && (!!this._current_zones.find((_) => _.zone_id === zone.id) || !!authority_id && !!zone_authority_id && zone_authority_id !== authority_id);
  };
  _current_zones = [];
  constructor() {
    effect(() => this._current_zones = this.zones());
  }
  static \u0275fac = function GroupZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupZonesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupZonesComponent, selectors: [["group-zones"]], decls: 25, vars: 43, consts: [["zone_template", ""], ["permissions_template", ""], ["deny_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "items-center", "gap-2", "p-4"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "h-1/2", "min-h-0", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[64rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "px-4", "py-2"], [1, "inline-flex", "rounded", "px-2", "py-1", "text-xs", "font-medium"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function GroupZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "item-search-field", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function GroupZonesComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        return ctx.addZone($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(4, "button", 7);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function GroupZonesComponent_Template_button_click_4_listener() {
        return ctx.bulkAddZones();
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
      \u0275\u0275template(17, GroupZonesComponent_ng_template_17_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, GroupZonesComponent_ng_template_19_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, GroupZonesComponent_ng_template_21_Template, 4, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(23, GroupZonesComponent_ng_template_23_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const zone_template_r8 = \u0275\u0275reference(18);
      const permissions_template_r9 = \u0275\u0275reference(20);
      const deny_template_r10 = \u0275\u0275reference(22);
      const actions_template_r11 = \u0275\u0275reference(24);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 13, "GROUPS.ZONE_SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 15, "GROUPS.ZONES_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "GROUPS.ZONES_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", ctx.loading() !== true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.zones)("columns", \u0275\u0275pureFunction4(38, _c4, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(13, 19, "GROUPS.FIELD_ZONE"), zone_template_r8), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(14, 21, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r9), \u0275\u0275pureFunction2(33, _c2, \u0275\u0275pipeBind1(15, 23, "GROUPS.FIELD_DENY"), deny_template_r10), \u0275\u0275pureFunction1(36, _c3, actions_template_r11)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(16, 25, "GROUPS.ZONES_EMPTY"));
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
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-zones.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupZonesComponent, [{
    type: Component,
    args: [{ selector: "group-zones", template: `
        <div class="flex h-full min-w-0 flex-col">
            <section class="flex items-center gap-2 p-4">
                <item-search-field
                    [placeholder]="'GROUPS.ZONE_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addZone($event)"
                />
                <button
                    btn
                    matRipple
                    class="h-12"
                    [matTooltip]="'GROUPS.ZONES_BULK' | translate"
                    (click)="bulkAddZones()"
                >
                    <icon class="mr-2">playlist_add</icon>
                    {{ 'GROUPS.ZONES_BULK' | translate }}
                </button>
            </section>
            <section class="h-1/2 min-h-0 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                />
                <simple-table
                    class="block min-w-[64rem] text-sm"
                    [data]="zones"
                    [columns]="[
                        {
                            key: 'zone',
                            name: 'GROUPS.FIELD_ZONE' | translate,
                            content: zone_template,
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
                            size: '7rem',
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'GROUPS.ZONES_EMPTY' | translate"
                />
            </section>
        </div>
        <ng-template #zone_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <a
                    class="text-sm underline"
                    [routerLink]="['/zones', row.zone_id, 'about']"
                >
                    {{ row.zone?.name || row.zone_id }}
                </a>
                <div class="text-xs opacity-30">{{ row.zone_id }}</div>
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
                    [matTooltip]="'GROUPS.ZONE_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'GROUPS.ZONE_REMOVE' | translate"
                    (click)="removeZone(row)"
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
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/groups/group-zones.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-zones.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupZonesComponent, { className: "GroupZonesComponent", filePath: "src/app/groups/group-zones.component.ts", lineNumber: 163 });
})();
export {
  GroupZonesComponent
};
//# sourceMappingURL=chunk-TIFBLZXH.js.map
