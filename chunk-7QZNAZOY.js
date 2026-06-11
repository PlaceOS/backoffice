import {
  ItemSearchFieldComponent
} from "./chunk-UJLZHD3F.js";
import "./chunk-5EBMUX3Z.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WRAPQBH6.js";
import "./chunk-CEZ5W4YU.js";
import "./chunk-6FMO72CJ.js";
import "./chunk-IE6E7XHG.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KHVEC2ZJ.js";
import {
  notifyError,
  notifySuccess,
  notifyWarn
} from "./chunk-IQ5P3T5K.js";
import "./chunk-BHWNEOU7.js";
import "./chunk-LIKH2QKU.js";
import "./chunk-JJ5DNIGX.js";
import {
  MatRippleModule
} from "./chunk-LNZRUFDJ.js";
import "./chunk-5YQXJK7Z.js";
import {
  TranslatePipe
} from "./chunk-FJCFBSIQ.js";
import {
  IconComponent
} from "./chunk-YUNY6RXQ.js";
import {
  csvToJson,
  downloadFile,
  jsonToCsv
} from "./chunk-Y2VDX4KN.js";
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
  La,
  S,
  inject,
  setClassMetadata,
  signal,
  u,
  wa,
  za,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/zone-tree-export-modal.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ZoneTreeExportModalComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function ZoneTreeExportModalComponent_Conditional_14_For_2_Template_button_click_8_listener() {
      const zone_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSelected(zone_r2));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const zone_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", zone_r2.display_name || zone_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r2.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", zone_r2.children_count || 0, " children ");
  }
}
function ZoneTreeExportModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ZoneTreeExportModalComponent_Conditional_14_For_2_Template, 11, 3, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selected());
  }
}
function ZoneTreeExportModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p");
    \u0275\u0275text(2, "No parent zones selected.");
    \u0275\u0275elementEnd()();
  }
}
var ZoneTreeExportModalComponent = class _ZoneTreeExportModalComponent {
  _dialog_ref = inject(MatDialogRef);
  _data = inject(MAT_DIALOG_DATA);
  selected = signal(
    this._data.selected || [],
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  set selected_zone(zone) {
    if (!zone)
      return;
    if (!this.selected().some((_) => _.id === zone.id)) {
      this.selected.update((list) => [...list, zone]);
    }
  }
  get selected_zone() {
    return null;
  }
  query_fn = (query) => wa({
    q: query,
    include_children_count: true,
    limit: 100
  }).then((resp) => resp.data.map((zone) => {
    zone.extra = `${zone.children_count || 0} children`;
    return zone;
  }));
  exclude_fn = (zone) => this.selected().some((_) => _.id === zone.id);
  removeSelected(zone) {
    this.selected.update((list) => list.filter((_) => _.id !== zone.id));
  }
  export() {
    this._dialog_ref.close(this.selected());
  }
  static \u0275fac = function ZoneTreeExportModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoneTreeExportModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZoneTreeExportModalComponent, selectors: [["app-zone-tree-export-modal"]], decls: 19, vars: 6, consts: [[1, "bg-base-200", "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "grid", "h-[calc(100vh-7rem)]", "w-screen", "grid-cols-1", "gap-4", "overflow-hidden", "p-4", "lg:grid-cols-2"], [1, "flex", "min-h-0", "flex-col", "space-y-4"], [1, "text-sm", "opacity-70"], [1, "zone-parent-search", "block", "min-h-0", "flex-1", 3, "ngModelChange", "query_fn", "exclude", "ngModel", "display_list"], [1, "flex", "min-h-0", "flex-col", "space-y-2"], [1, "text-sm", "font-medium"], [1, "min-h-0", "flex-1", "space-y-2", "overflow-auto", "pr-1"], [1, "flex", "min-h-0", "flex-1", "flex-col", "items-center", "justify-center", "rounded-sm", "border", "border-dashed", "p-8", "text-center", "opacity-40"], [1, "border-base-200", "flex", "justify-end", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "bg-base-200", "flex", "items-center", "justify-between", "rounded-sm", "px-3", "py-2"], [1, "min-w-0"], [1, "truncate", "font-medium"], [1, "truncate", "text-xs", "opacity-60"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", 3, "click"]], template: function ZoneTreeExportModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2, "Export Zone Tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 2)(4, "icon");
      \u0275\u0275text(5, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "main", 3)(7, "section", 4)(8, "p", 5);
      \u0275\u0275text(9, " Select one or more parent zones. Export includes each selected zone followed by all children recursively. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "item-search-field", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ZoneTreeExportModalComponent_Template_item_search_field_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selected_zone, $event) || (ctx.selected_zone = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "section", 7)(12, "h4", 8);
      \u0275\u0275text(13, "Selected Parents");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, ZoneTreeExportModalComponent_Conditional_14_Template, 3, 0, "div", 9)(15, ZoneTreeExportModalComponent_Conditional_15_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "footer", 11)(17, "button", 12);
      \u0275\u0275listener("click", function ZoneTreeExportModalComponent_Template_button_click_17_listener() {
        return ctx.export();
      });
      \u0275\u0275text(18, " Export Selected ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("query_fn", ctx.query_fn)("exclude", ctx.exclude_fn);
      \u0275\u0275twoWayProperty("ngModel", ctx.selected_zone);
      \u0275\u0275property("display_list", true);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.selected().length ? 14 : 15);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.selected().length);
    }
  }, dependencies: [
    FormsModule,
    NgControlStatus,
    NgModel,
    IconComponent,
    ItemSearchFieldComponent,
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple
  ], styles: ["\n[_nghost-%COMP%]     .zone-parent-search .item-search-field {\n  height: 100%;\n  min-height: 0;\n}\n[_nghost-%COMP%]     .zone-parent-search .item-search-field > div {\n  height: 100% !important;\n  max-height: none;\n}\n/*# sourceMappingURL=zone-tree-export-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneTreeExportModalComponent, [{
    type: Component,
    args: [{ selector: "app-zone-tree-export-modal", template: `
        <div class="bg-base-200 flex items-center justify-between px-4 py-2">
            <h3 class="text-xl font-medium">Export Zone Tree</h3>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </div>
        <main
            class="grid h-[calc(100vh-7rem)] w-screen grid-cols-1 gap-4 overflow-hidden p-4 lg:grid-cols-2"
        >
            <section class="flex min-h-0 flex-col space-y-4">
                <p class="text-sm opacity-70">
                    Select one or more parent zones. Export includes each
                    selected zone followed by all children recursively.
                </p>
                <item-search-field
                    class="zone-parent-search block min-h-0 flex-1"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [(ngModel)]="selected_zone"
                    [display_list]="true"
                />
            </section>
            <section class="flex min-h-0 flex-col space-y-2">
                <h4 class="text-sm font-medium">Selected Parents</h4>
                @if (selected().length) {
                    <div class="min-h-0 flex-1 space-y-2 overflow-auto pr-1">
                        @for (zone of selected(); track zone.id) {
                            <div
                                class="bg-base-200 flex items-center justify-between rounded-sm px-3 py-2"
                            >
                                <div class="min-w-0">
                                    <div class="truncate font-medium">
                                        {{ zone.display_name || zone.name }}
                                    </div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ zone.id }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ zone.children_count || 0 }} children
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    (click)="removeSelected(zone)"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="flex min-h-0 flex-1 flex-col items-center justify-center rounded-sm border border-dashed p-8 text-center opacity-40"
                    >
                        <p>No parent zones selected.</p>
                    </div>
                }
            </section>
        </main>
        <footer class="border-base-200 flex justify-end border-t px-4 py-2">
            <button
                btn
                matRipple
                (click)="export()"
                [disabled]="!selected().length"
            >
                Export Selected
            </button>
        </footer>
    `, imports: [
      FormsModule,
      IconComponent,
      ItemSearchFieldComponent,
      MatDialogModule,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;730ad1e5560ac27fa8fb960a11074e3458c941d8ff5566687b7fea5e44d1669d;/home/runner/work/backoffice/backoffice/src/app/admin/zone-tree-export-modal.component.ts */\n:host ::ng-deep .zone-parent-search .item-search-field {\n  height: 100%;\n  min-height: 0;\n}\n:host ::ng-deep .zone-parent-search .item-search-field > div {\n  height: 100% !important;\n  max-height: none;\n}\n/*# sourceMappingURL=zone-tree-export-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZoneTreeExportModalComponent, { className: "ZoneTreeExportModalComponent", filePath: "src/app/admin/zone-tree-export-modal.component.ts", lineNumber: 109 });
})();

// src/app/admin/database-details.component.ts
function PlaceDatabaseDetailsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "ADMIN.DATABASE_REINDEX"), " ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function PlaceDatabaseDetailsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "ADMIN.DATABASE_BACKFILL"), " ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function PlaceDatabaseDetailsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Export Zone Tree ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function PlaceDatabaseDetailsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Import Zone Tree ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
var ZONE_TREE_CSV_FIELDS = [
  "id",
  "parent_id",
  "name",
  "display_name",
  "description",
  "tags",
  "location",
  "code",
  "type",
  "capacity",
  "map_id",
  "images",
  "timezone",
  "playlists",
  "triggers"
];
function zoneToExportItem(zone) {
  const data = zone.toJSON ? zone.toJSON() : __spreadValues({}, zone);
  data.parent_id = zone.parent_id || "";
  delete data.created_at;
  delete data.updated_at;
  delete data.version;
  delete data.children_count;
  delete data.count;
  delete data.settings;
  delete data.trigger_list;
  return data;
}
function zoneToImportItem(zone, parent_id) {
  const data = __spreadProps(__spreadValues({}, zone), { parent_id });
  delete data.id;
  delete data.created_at;
  delete data.updated_at;
  delete data.version;
  delete data.children_count;
  delete data.count;
  delete data.settings;
  delete data.trigger_list;
  return data;
}
function reindex(backfill2 = true) {
  const url = `${u()}/reindex${backfill2 ? "?backfill=true" : ""}`;
  return S(url, null);
}
function backfill() {
  const url = `${u()}/backfill`;
  return S(url, null);
}
async function queryAllZones(query_params = {}) {
  let response = await wa(__spreadProps(__spreadValues({}, query_params), { limit: 500 }));
  const zones = [...response.data];
  while (response.next) {
    response = await response.next();
    zones.push(...response.data);
  }
  return zones;
}
var PlaceDatabaseDetailsComponent = class _PlaceDatabaseDetailsComponent {
  _dialog = inject(MatDialog);
  /** Whether backend is reindexing the database */
  reindexing = signal(
    false,
    ...ngDevMode ? [{ debugName: "reindexing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether backend is reindexing the database */
  backfilling = signal(
    false,
    ...ngDevMode ? [{ debugName: "backfilling" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether zones are being exported */
  exporting_zones = signal(
    false,
    ...ngDevMode ? [{ debugName: "exporting_zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether zones are being imported */
  importing_zones = signal(
    false,
    ...ngDevMode ? [{ debugName: "importing_zones" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async reindex() {
    this.reindexing.set(true);
    await reindex().catch((err) => {
      notifyError(`Error reindexing database. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
    this.reindexing.set(false);
  }
  async backfill() {
    this.backfilling.set(true);
    await backfill().catch((err) => {
      notifyError(`Error backfilling database. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
    this.backfilling.set(false);
  }
  exportZoneTree() {
    const dialog_ref = this._dialog.open(ZoneTreeExportModalComponent, {
      data: { selected: [] },
      height: "100vh",
      maxHeight: "100vh",
      maxWidth: "100vw",
      panelClass: "fullscreen-modal",
      width: "100vw"
    });
    dialog_ref.afterClosed().subscribe((zones) => {
      if (!zones?.length)
        return;
      this.exportSelectedZoneTrees(zones);
    });
  }
  async importZoneTreeFile(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.importing_zones.set(true);
    try {
      const contents = await file.text();
      const separator = file.name.toLowerCase().endsWith(".tsv") ? "	" : ",";
      const zones = csvToJson(contents, separator);
      await this.importZoneTree(zones);
    } catch (err) {
      notifyError(`Error importing zone tree. Error: ${JSON.stringify(err.response || err.message || err)}`);
    }
    this.importing_zones.set(false);
  }
  async exportSelectedZoneTrees(parents) {
    this.exporting_zones.set(true);
    try {
      const zones = [];
      const visited = /* @__PURE__ */ new Set();
      for (const parent of parents) {
        await this.addZoneTreeToExport(parent.id, zones, visited);
      }
      downloadFile(`zone-tree-export-${(/* @__PURE__ */ new Date()).toISOString()}.csv`, jsonToCsv(zones, ZONE_TREE_CSV_FIELDS));
      notifySuccess(`Exported ${zones.length} zones.`);
    } catch (err) {
      notifyError(`Error exporting zone tree. Error: ${JSON.stringify(err.response || err.message || err)}`);
    }
    this.exporting_zones.set(false);
  }
  async addZoneTreeToExport(zone_id, zones, visited) {
    if (visited.has(zone_id))
      return;
    visited.add(zone_id);
    const zone = await za(zone_id);
    const children = await queryAllZones({ parent_id: zone_id });
    zones.push(zoneToExportItem(zone));
    for (const child of children) {
      await this.addZoneTreeToExport(child.id, zones, visited);
    }
  }
  async importZoneTree(zones) {
    if (!(zones instanceof Array) || !zones.length) {
      notifyWarn("Invalid zone tree CSV file.");
      return;
    }
    const id_map = /* @__PURE__ */ new Map();
    for (const zone of zones) {
      if (!zone.id)
        continue;
      const parent_id = zone.parent_id ? id_map.get(zone.parent_id) || "" : "";
      const created_zone = await La(zoneToImportItem(zone, parent_id));
      id_map.set(zone.id, created_zone.id);
    }
    notifySuccess(`Imported ${id_map.size} zones.`);
  }
  static \u0275fac = function PlaceDatabaseDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceDatabaseDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceDatabaseDetailsComponent, selectors: [["app-database-details"]], decls: 32, vars: 14, consts: [["zoneImportFile", ""], [1, "mb-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "grid", "w-full", "grid-cols-1", "gap-4", "p-4", "md:grid-cols-2"], [1, "border-base-200", "flex", "flex-col", "space-y-2", "rounded-sm", "border", "p-2"], [1, "mx-auto", "max-w-64", "p-2", "text-center"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-0.5rem)]", 3, "click", "disabled"], [1, "my-1", "flex", "w-full", "justify-center"], [1, "mx-auto", "max-w-72", "p-2", "text-center"], [1, "mx-auto", "max-w-80", "p-2", "text-center"], ["type", "file", "accept", "text/csv,text/tab-separated-values,.csv,.tsv", 1, "hidden", 3, "change"], ["diameter", "32"]], template: function PlaceDatabaseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275text(2, "PlaceOS Database");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_8_listener() {
        return ctx.reindex();
      });
      \u0275\u0275conditionalCreate(9, PlaceDatabaseDetailsComponent_Conditional_9_Template, 2, 3)(10, PlaceDatabaseDetailsComponent_Conditional_10_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "p", 5);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 6);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_15_listener() {
        return ctx.backfill();
      });
      \u0275\u0275conditionalCreate(16, PlaceDatabaseDetailsComponent_Conditional_16_Template, 2, 3)(17, PlaceDatabaseDetailsComponent_Conditional_17_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 4)(19, "p", 8);
      \u0275\u0275text(20, " Export zone tree structure as CSV. Select parents to export them followed by all children recursively. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 6);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_21_listener() {
        return ctx.exportZoneTree();
      });
      \u0275\u0275conditionalCreate(22, PlaceDatabaseDetailsComponent_Conditional_22_Template, 1, 0)(23, PlaceDatabaseDetailsComponent_Conditional_23_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 4)(25, "p", 9);
      \u0275\u0275text(26, " Import zone tree structure from CSV. Old zone IDs are mapped to new IDs and child parent IDs are substituted automatically. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 10, 0);
      \u0275\u0275listener("change", function PlaceDatabaseDetailsComponent_Template_input_change_27_listener($event) {
        return ctx.importZoneTreeFile($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 6);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        const zoneImportFile_r2 = \u0275\u0275reference(28);
        return \u0275\u0275resetView(zoneImportFile_r2.click());
      });
      \u0275\u0275conditionalCreate(30, PlaceDatabaseDetailsComponent_Conditional_30_Template, 1, 0)(31, PlaceDatabaseDetailsComponent_Conditional_31_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "ADMIN.DATABASE_REINDEX_MSG"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.reindexing());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.reindexing() ? 9 : 10);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "ADMIN.DATABASE_BACKFILL_MSG"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.backfilling());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.backfilling() ? 16 : 17);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.exporting_zones() || ctx.importing_zones());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.exporting_zones() ? 22 : 23);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.exporting_zones() || ctx.importing_zones());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.importing_zones() ? 30 : 31);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatRippleModule,
    MatRipple,
    MatDialogModule,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 10em;\n  margin: 0.25em;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=database-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceDatabaseDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-database-details", template: `
        <div class="mb-4 flex items-center justify-between space-x-2 px-4">
            <div class="text-2xl">PlaceOS Database</div>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_REINDEX_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="reindexing()"
                    (click)="reindex()"
                >
                    @if (!reindexing()) {
                        {{ 'ADMIN.DATABASE_REINDEX' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32" />
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_BACKFILL_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="backfilling()"
                    (click)="backfill()"
                >
                    @if (!backfilling()) {
                        {{ 'ADMIN.DATABASE_BACKFILL' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32" />
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-72 p-2 text-center">
                    Export zone tree structure as CSV. Select parents to export
                    them followed by all children recursively.
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="exporting_zones() || importing_zones()"
                    (click)="exportZoneTree()"
                >
                    @if (!exporting_zones()) {
                        Export Zone Tree
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32" />
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-80 p-2 text-center">
                    Import zone tree structure from CSV. Old zone IDs are mapped
                    to new IDs and child parent IDs are substituted
                    automatically.
                </p>
                <input
                    #zoneImportFile
                    class="hidden"
                    type="file"
                    accept="text/csv,text/tab-separated-values,.csv,.tsv"
                    (change)="importZoneTreeFile($event)"
                />
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="exporting_zones() || importing_zones()"
                    (click)="zoneImportFile.click()"
                >
                    @if (!importing_zones()) {
                        Import Zone Tree
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32" />
                        </div>
                    }
                </button>
            </div>
        </div>
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule
    ], styles: ["/* angular:styles/component:css;12eeaf2f97b0a02f824d213a17b33a48d1ee31074c7c7409a825ef75d2d1e217;/home/runner/work/backoffice/backoffice/src/app/admin/database-details.component.ts */\n:host {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton {\n  min-width: 10em;\n  margin: 0.25em;\n}\nmat-card {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=database-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceDatabaseDetailsComponent, { className: "PlaceDatabaseDetailsComponent", filePath: "src/app/admin/database-details.component.ts", lineNumber: 228 });
})();
export {
  PlaceDatabaseDetailsComponent
};
//# sourceMappingURL=chunk-7QZNAZOY.js.map
