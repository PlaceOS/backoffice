import {
  SystemStateService
} from "./chunk-H2VKKVIZ.js";
import "./chunk-FFEL5HRK.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-MKANYIBS.js";
import "./chunk-2ICTMTXM.js";
import "./chunk-EXPZGR3V.js";
import "./chunk-PVJLZQ6X.js";
import "./chunk-J5QXA7JE.js";
import "./chunk-P2JPBNYN.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-GILXWXRU.js";
import {
  ItemSearchFieldComponent
} from "./chunk-CQSIAHG6.js";
import "./chunk-OEMHCWD4.js";
import "./chunk-4X4PTSQA.js";
import "./chunk-VRNJC5BQ.js";
import "./chunk-GDZ4KU6N.js";
import "./chunk-IYBVLYEV.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-SCU2ZHTT.js";
import "./chunk-UVXXRHB2.js";
import {
  SimpleTableComponent,
  moveItemInArray
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
import "./chunk-MPRMYGK2.js";
import "./chunk-A22U4R5S.js";
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
  computed,
  inject,
  ja,
  setClassMetadata,
  signal,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/systems/system-zones.component.ts
var _c0 = (a0, a1) => ({ key: "name", name: a0, content: a1, size: "14rem" });
var _c1 = (a0, a1) => ({ key: "description", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, show: a1 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = () => ({});
var _c5 = (a0) => ["/zones", a0];
function SystemZonesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.zone_issues(), " ");
  }
}
function SystemZonesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c5, row_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.id, " ");
  }
}
function SystemZonesComponent_ng_template_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.ZONE_DESCRIPTION_EMPTY"), " ");
  }
}
function SystemZonesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SystemZonesComponent_ng_template_23_Conditional_2_Template, 3, 3, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function SystemZonesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SystemZonesComponent_ng_template_25_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeZone(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 1, "SYSTEMS.ZONE_REMOVE"));
  }
}
var SystemZonesComponent = class _SystemZonesComponent {
  _service = inject(SystemStateService);
  order_changed = false;
  show_original = false;
  original_zones = this._service.zones;
  item_signal = this._service.item;
  changed = {};
  /** ID of a zone that the user wishes to add to the system */
  pending_zones = signal(
    [],
    ...ngDevMode ? [{ debugName: "pending_zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** ID of a zone that the user wishes to add to the system */
  zone_order = signal(
    [],
    ...ngDevMode ? [{ debugName: "zone_order" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether zones for active item are loading */
  loading = this._service.loading;
  /** List of zones assoicated with the active item */
  zones = computed(
    () => [
      ...this.original_zones(),
      ...this.pending_zones().map((_) => __spreadProps(__spreadValues({}, _), { pending: true }))
    ].sort((a, b) => this.zone_order().indexOf(a.id) - this.zone_order().indexOf(b.id)),
    ...ngDevMode ? [{ debugName: "zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changed_colours = computed(
    () => {
      const pending = this.pending_zones();
      const colours = {};
      this.zones().forEach((item, index) => {
        if (this.changed[item.id] || pending.find((_) => _.id === item.id)) {
          colours[index] = "var(--wal)";
        }
      });
      return colours;
    },
    ...ngDevMode ? [{ debugName: "changed_colours" }] : (
      /* istanbul ignore next */
      []
    )
  );
  zone_issues = computed(
    () => {
      const item = this.item_signal();
      const zones = this.original_zones();
      if (!item?.email && !item?.map_id)
        return "";
      const has_org = zones.find((_) => _.tags.includes("org"));
      const has_building = zones.find((_) => _.tags.includes("building"));
      const has_level = zones.find((_) => _.tags.includes("level"));
      if (has_org && has_building && has_level)
        return "";
      const missing = [];
      if (!has_org)
        missing.push("org");
      if (!has_building)
        missing.push("building");
      if (!has_level)
        missing.push("level");
      return `Zones with tags required for a room system are missing. [${missing.join(", ")}]`;
    },
    ...ngDevMode ? [{ debugName: "zone_issues" }] : (
      /* istanbul ignore next */
      []
    )
  );
  has_changes = computed(
    () => this.pending_zones().length > 0 || this.order_changed,
    ...ngDevMode ? [{ debugName: "has_changes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Query function for systems */
  query_fn = (_) => ja({ q: _ }).then((resp) => resp.data);
  exclude_fn = (zone, __) => this.item.zones.indexOf(zone.id) >= 0;
  removeZone = (z) => z.pending ? this.pending_zones.set(this.pending_zones().filter((_) => _.id !== z.id)) : this._service.removeZone(z);
  addPendingZone = (z) => this.pending_zones.update((pending) => [...pending, z]);
  savePendingZones = async () => {
    if (!this.pending_zones().length)
      return;
    await this._service.addZones(this.pending_zones());
    this.pending_zones.set([]);
  };
  saveZoneOrder = async () => {
    const zones = this.original_zones();
    const zone_order = this.zone_order();
    if (zones.every(({ id }, idx) => zone_order[idx] === id))
      return;
    await this._service.reorderZones(zone_order);
    this.order_changed = false;
    this.changed = {};
    this.zone_order.set([]);
  };
  async saveChanges() {
    await this.savePendingZones();
    await this.saveZoneOrder();
  }
  clearChanges() {
    this.order_changed = false;
    this.changed = {};
    this.zone_order.set([]);
    this.pending_zones.set([]);
  }
  get item() {
    return this._service.active_item;
  }
  async reorder([previous, current]) {
    const zones = [...this.zones()];
    moveItemInArray(zones, previous, current);
    this.changed[zones[previous].id] = true;
    this.zone_order.set(zones.map(({ id }) => id));
    this.order_changed = true;
  }
  static \u0275fac = function SystemZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemZonesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemZonesComponent, selectors: [["system-zones"]], decls: 27, vars: 44, consts: [["name_template", ""], ["description_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "mt-4", "mb-2", "flex", "items-center", "space-x-2", "px-4"], [1, "h-12", "flex-1", 3, "ngModelChange", "placeholder", "query_fn", "exclude", "clear_on_select", "ngModel"], [1, "mb-2", "flex", "items-center", "space-x-2", "px-4"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", "flex-1", 3, "mousedown", "touchstart", "mouseup", "touchend", "disabled"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click", "disabled"], [1, "mono", "bg-warning", "text-warning-content", "mb-2", "rounded-sm", "p-2", "text-center", "text-xs"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No zones for selected system", 1, "block", "min-w-180", "text-sm", 3, "ondrop", "data", "columns", "color", "can_reorder"], [1, "h-12", "w-full"], [1, "flex", "w-full", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "text-left", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "w-full", "overflow-hidden", "px-4", "py-2", "text-left", "text-xs", "select-text"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "matTooltip"]], template: function SystemZonesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "item-search-field", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275listener("ngModelChange", function SystemZonesComponent_Template_item_search_field_ngModelChange_2_listener($event) {
        return ctx.addPendingZone($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "section", 6)(5, "button", 7);
      \u0275\u0275listener("click", function SystemZonesComponent_Template_button_click_5_listener() {
        return ctx.clearChanges();
      });
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("mousedown", function SystemZonesComponent_Template_button_mousedown_8_listener() {
        return ctx.show_original = true;
      })("touchstart", function SystemZonesComponent_Template_button_touchstart_8_listener() {
        return ctx.show_original = true;
      })("mouseup", function SystemZonesComponent_Template_button_mouseup_8_listener() {
        return ctx.show_original = false;
      }, \u0275\u0275resolveWindow)("touchend", function SystemZonesComponent_Template_button_touchend_8_listener() {
        return ctx.show_original = false;
      }, \u0275\u0275resolveWindow);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function SystemZonesComponent_Template_button_click_11_listener() {
        return ctx.saveChanges();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, SystemZonesComponent_Conditional_14_Template, 2, 1, "div", 10);
      \u0275\u0275elementStart(15, "section", 11);
      \u0275\u0275element(16, "mat-progress-bar", 12);
      \u0275\u0275elementStart(17, "simple-table", 13);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("ondrop", function SystemZonesComponent_Template_simple_table_ondrop_17_listener($event) {
        return ctx.reorder($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "div", 14);
      \u0275\u0275template(21, SystemZonesComponent_ng_template_21_Template, 5, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, SystemZonesComponent_ng_template_23_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, SystemZonesComponent_ng_template_25_Template, 5, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const name_template_r6 = \u0275\u0275reference(22);
      const description_template_r7 = \u0275\u0275reference(24);
      const actions_template_r8 = \u0275\u0275reference(26);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 18, "SYSTEMS.ZONE_SEARCH"))("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn)("clear_on_select", true)("ngModel", null);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.has_changes());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "COMMON.CLEAR"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.has_changes());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 22, "SYSTEMS.VIEW_ORIGINAL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.has_changes());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 24, "COMMON.SAVE_CHANGES"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.zone_issues() ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("opacity-0", !ctx.loading().zones);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.show_original ? ctx.original_zones() : ctx.zones())("columns", \u0275\u0275pureFunction3(39, _c3, \u0275\u0275pureFunction2(30, _c0, \u0275\u0275pipeBind1(18, 26, "SYSTEMS.ZONE_FIELD_NAME"), name_template_r6), \u0275\u0275pureFunction2(33, _c1, \u0275\u0275pipeBind1(19, 28, "SYSTEMS.ZONE_FIELD_DESCRIPTION"), description_template_r7), \u0275\u0275pureFunction2(36, _c2, actions_template_r8, ctx.zones().length > 1)))("color", ctx.show_original ? \u0275\u0275pureFunction0(43, _c4) : ctx.changed_colours())("can_reorder", true);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[desc][_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=system-zones.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemZonesComponent, [{
    type: Component,
    args: [{ selector: "system-zones", template: `
        <div class="flex h-full w-full flex-col">
            <section class="mt-4 mb-2 flex items-center space-x-2 px-4">
                <item-search-field
                    [placeholder]="'SYSTEMS.ZONE_SEARCH' | translate"
                    class="h-12 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [clear_on_select]="true"
                    [ngModel]="null"
                    (ngModelChange)="addPendingZone($event)"
                />
            </section>
            <section class="mb-2 flex items-center space-x-2 px-4">
                <button
                    btn
                    matRipple
                    [disabled]="!has_changes()"
                    class="inverse flex-1"
                    (click)="clearChanges()"
                >
                    {{ 'COMMON.CLEAR' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="inverse flex-1"
                    [disabled]="!has_changes()"
                    (mousedown)="show_original = true"
                    (touchstart)="show_original = true"
                    (window:mouseup)="show_original = false"
                    (window:touchend)="show_original = false"
                >
                    {{ 'SYSTEMS.VIEW_ORIGINAL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="!has_changes()"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE_CHANGES' | translate }}
                </button>
            </section>
            @if (zone_issues()) {
                <div
                    class="mono bg-warning text-warning-content mb-2 rounded-sm p-2 text-center text-xs"
                >
                    {{ zone_issues() }}
                </div>
            }
            <section class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading().zones"
                />
                <simple-table
                    class="block min-w-180 text-sm"
                    [data]="show_original ? original_zones() : zones()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'SYSTEMS.ZONE_FIELD_NAME' | translate,
                            content: name_template,
                            size: '14rem',
                        },
                        {
                            key: 'description',
                            name: 'SYSTEMS.ZONE_FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '3.5rem',
                            content: actions_template,
                            show: zones().length > 1,
                        },
                    ]"
                    [color]="show_original ? {} : changed_colours()"
                    [can_reorder]="true"
                    (ondrop)="reorder($event)"
                    empty_message="No zones for selected system"
                />
                <div class="h-12 w-full"></div>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex w-full flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate text-left underline"
                            [routerLink]="['/zones', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #description_template let-data="data">
                    <div
                        class="w-full overflow-hidden px-4 py-2 text-left text-xs select-text"
                    >
                        {{ data }}
                        @if (!data) {
                            <span class="opacity-30">
                                {{
                                    'SYSTEMS.ZONE_DESCRIPTION_EMPTY' | translate
                                }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            error
                            matRipple
                            [matTooltip]="'SYSTEMS.ZONE_REMOVE' | translate"
                            (click)="removeZone(row)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      ItemSearchFieldComponent,
      FormsModule,
      RouterModule
    ], styles: ["/* angular:styles/component:css;ecfb195359fd26896655eac377b2218d46e1d508e4acda0e6448002e5599b056;/home/runner/work/backoffice/backoffice/src/app/systems/system-zones.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[desc] {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=system-zones.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemZonesComponent, { className: "SystemZonesComponent", filePath: "src/app/systems/system-zones.component.ts", lineNumber: 176 });
})();
export {
  SystemZonesComponent
};
//# sourceMappingURL=chunk-WPIECXKZ.js.map
