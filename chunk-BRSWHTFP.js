import {
  GroupStateService
} from "./chunk-TRJ2XRTM.js";
import {
  groupPermissionLabels
} from "./chunk-C73Y7H3U.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TPD5UFBJ.js";
import "./chunk-ZJJKOGSE.js";
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
import "./chunk-SUN6RQVP.js";
import "./chunk-P7JOU2IV.js";
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
} from "./chunk-46M7K5TF.js";
import {
  Ah,
  map
} from "./chunk-55CIHLAT.js";
import "./chunk-KWSTWQNB.js";

// src/app/groups/group-zones.component.ts
var _c0 = (a0, a1) => ({ key: "zone", name: a0, content: a1 });
var _c1 = (a0, a1) => ({ key: "permissions", name: a0, content: a1, size: "24rem" });
var _c2 = (a0, a1) => ({ key: "deny", name: a0, content: a1, size: "6rem" });
var _c3 = (a0) => ({ key: "actions", name: " ", size: "7rem", content: a0 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/zones", a0, "about"];
function GroupZonesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c5, row_r2.zone_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r2.zone == null ? null : row_r2.zone.name) || row_r2.zone_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.zone_id);
  }
}
function GroupZonesComponent_ng_template_20_For_2_Template(rf, ctx) {
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
function GroupZonesComponent_ng_template_20_Conditional_3_Template(rf, ctx) {
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
function GroupZonesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, GroupZonesComponent_ng_template_20_For_2_Template, 3, 3, "span", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, GroupZonesComponent_ng_template_20_Conditional_3_Template, 3, 3, "span", 17);
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
function GroupZonesComponent_ng_template_22_Template(rf, ctx) {
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
function GroupZonesComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function GroupZonesComponent_ng_template_24_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editPermissions(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function GroupZonesComponent_ng_template_24_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeZone(row_r8));
    });
    \u0275\u0275elementStart(7, "icon", 22);
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
  query_fn = (_) => Ah({
    q: _,
    authority_id: this._service.active_item?.authority_id
  }).pipe(map((resp) => resp.data));
  exclude_fn = (zone, __) => {
    const authority_id = this._service.active_item?.authority_id;
    const zone_authority_id = zone.authority_id;
    return !!this._service.active_item && (!!this._current_zones.find((_) => _.zone_id === zone.id) || !!authority_id && !!zone_authority_id && zone_authority_id !== authority_id);
  };
  _current_zones = [];
  constructor() {
    this.zones.subscribe((zones) => this._current_zones = zones);
  }
  static \u0275fac = function GroupZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupZonesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupZonesComponent, selectors: [["group-zones"]], decls: 26, vars: 45, consts: [["zone_template", ""], ["permissions_template", ""], ["deny_template", ""], ["actions_template", ""], [1, "flex", "h-full", "min-w-0", "flex-col"], [1, "flex", "items-center", "gap-2", "p-4"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], ["btn", "", "matRipple", "", 1, "h-12", 3, "click", "matTooltip"], [1, "mr-2"], [1, "h-1/2", "min-h-0", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[64rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], [1, "flex", "flex-col", "px-4", "py-2"], [1, "text-sm", "underline", 3, "routerLink"], [1, "text-xs", "opacity-30"], [1, "flex", "flex-wrap", "gap-1", "px-4", "py-2"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], [1, "opacity-30"], [1, "px-4", "py-2"], [1, "inline-flex", "rounded", "px-2", "py-1", "text-xs", "font-medium"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"]], template: function GroupZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "item-search-field", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function GroupZonesComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addZone($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 7);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("click", function GroupZonesComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkAddZones());
      });
      \u0275\u0275elementStart(6, "icon", 8);
      \u0275\u0275text(7, "playlist_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "section", 9);
      \u0275\u0275element(11, "mat-progress-bar", 10);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275element(13, "simple-table", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, GroupZonesComponent_ng_template_18_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(20, GroupZonesComponent_ng_template_20_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(22, GroupZonesComponent_ng_template_22_Template, 4, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(24, GroupZonesComponent_ng_template_24_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const zone_template_r9 = \u0275\u0275reference(19);
      const permissions_template_r10 = \u0275\u0275reference(21);
      const deny_template_r11 = \u0275\u0275reference(23);
      const actions_template_r12 = \u0275\u0275reference(25);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 13, "GROUPS.ZONE_SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 15, "GROUPS.ZONES_BULK"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 17, "GROUPS.ZONES_BULK"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", \u0275\u0275pipeBind1(12, 19, ctx.loading) !== true);
      \u0275\u0275advance(2);
      \u0275\u0275property("data", ctx.zones)("columns", \u0275\u0275pureFunction4(40, _c4, \u0275\u0275pureFunction2(29, _c0, \u0275\u0275pipeBind1(14, 21, "GROUPS.FIELD_ZONE"), zone_template_r9), \u0275\u0275pureFunction2(32, _c1, \u0275\u0275pipeBind1(15, 23, "GROUPS.FIELD_PERMISSIONS"), permissions_template_r10), \u0275\u0275pureFunction2(35, _c2, \u0275\u0275pipeBind1(16, 25, "GROUPS.FIELD_DENY"), deny_template_r11), \u0275\u0275pureFunction1(38, _c3, actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(17, 27, "GROUPS.ZONES_EMPTY"));
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-zones.component.css.map */"] });
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
                ></item-search-field>
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
                    [class.opacity-0]="(loading | async) !== true"
                ></mat-progress-bar>
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
                ></simple-table>
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
                    matRipple
                    [matTooltip]="'GROUPS.ZONE_PERMISSIONS' | translate"
                    (click)="editPermissions(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    matRipple
                    [matTooltip]="'GROUPS.ZONE_REMOVE' | translate"
                    (click)="removeZone(row)"
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
    ], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/backoffice/backoffice/src/app/groups/group-zones.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=group-zones.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupZonesComponent, { className: "GroupZonesComponent", filePath: "src/app/groups/group-zones.component.ts", lineNumber: 163 });
})();
export {
  GroupZonesComponent
};
//# sourceMappingURL=chunk-BRSWHTFP.js.map
