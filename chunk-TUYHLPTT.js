import {
  mapLimit
} from "./chunk-M42MCM5M.js";
import {
  openConfirmModal
} from "./chunk-KZCXN3WX.js";
import "./chunk-QCF7OBQH.js";
import {
  ItemSearchFieldComponent
} from "./chunk-N5LR7YSP.js";
import "./chunk-ZQMAPC3A.js";
import "./chunk-B7F6FUDL.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-SPITTCPX.js";
import {
  readError
} from "./chunk-T3O7QHHC.js";
import "./chunk-5G4S7L2B.js";
import "./chunk-35WA4BE5.js";
import "./chunk-KBNVNIYI.js";
import "./chunk-YDXVJGO5.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NWZSQ647.js";
import {
  notifyError,
  notifySuccess,
  notifyWarn
} from "./chunk-5ZBBWEMN.js";
import "./chunk-GPHMWQA5.js";
import {
  AsyncHandler
} from "./chunk-E2Z2L4DB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-UXBWGFXU.js";
import "./chunk-W5N3U6FP.js";
import "./chunk-NTBPKOUQ.js";
import "./chunk-2OZGU35U.js";
import {
  csvToJson,
  downloadFile,
  jsonToCsv
} from "./chunk-AOPYKUKV.js";
import {
  aa,
  dh,
  gh,
  ha
} from "./chunk-NMVMT4VD.js";
import {
  IconComponent
} from "./chunk-DV66XVNJ.js";
import {
  MatRippleModule
} from "./chunk-BSFQAEYP.js";
import {
  MatRipple
} from "./chunk-KGK5S2XS.js";
import "./chunk-6LJH4E32.js";
import "./chunk-E4EJUBGE.js";
import "./chunk-BOUIQ3F6.js";
import "./chunk-2VXJJPLQ.js";
import "./chunk-7ONBXR6Y.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YCZTZCQV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

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
  query_fn = (query) => dh({
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
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ZoneTreeExportModalComponent_Template_item_search_field_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selected_zone, $event) || (ctx.selected_zone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
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
function PlaceDatabaseDetailsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Export Zone Tree ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
  }
}
function PlaceDatabaseDetailsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Import Zone Tree ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
  }
}
function PlaceDatabaseDetailsComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 17);
  }
}
function PlaceDatabaseDetailsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, PlaceDatabaseDetailsComponent_Conditional_26_Conditional_1_Template, 1, 0, "mat-spinner", 17);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.mqtt_running() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.mqtt_status_text());
  }
}
var MQTT_STATUS_POLL_MS = 2e3;
var MAX_ZONE_PAGES = 100;
var PARENT_IDS_PER_QUERY = 50;
var ZONE_CONCURRENCY = 4;
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
async function queryAllZones(query_params = {}) {
  let response = await dh(__spreadProps(__spreadValues({}, query_params), { limit: 500 }));
  const zones = [...response.data];
  for (let page = 1; response.next; page++) {
    if (page >= MAX_ZONE_PAGES)
      throw new Error(`Zone list exceeds ${MAX_ZONE_PAGES} pages`);
    response = await response.next();
    zones.push(...response.data);
  }
  return zones;
}
var PlaceDatabaseDetailsComponent = class _PlaceDatabaseDetailsComponent extends AsyncHandler {
  _dialog = inject(MatDialog);
  /** Where the last MQTT re-sync got to, if this user may see it */
  mqtt_status = signal(
    null,
    ...ngDevMode ? [{ debugName: "mqtt_status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether a re-sync is being requested */
  _mqtt_starting = signal(
    false,
    ...ngDevMode ? [{ debugName: "_mqtt_starting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether a re-sync is being requested or is running */
  mqtt_running = computed(
    () => this._mqtt_starting() || ["clearing", "resyncing"].includes(this.mqtt_status()?.state),
    ...ngDevMode ? [{ debugName: "mqtt_running" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mqtt_status_text = computed(
    () => {
      const status = this.mqtt_status();
      if (!status)
        return "";
      switch (status.state) {
        case "clearing":
          return "Clearing the MQTT brokers...";
        case "resyncing":
          return "Publishing to the MQTT brokers...";
        case "complete":
          return `Last re-sync finished ${new Date(status.finished_at).toLocaleString()}${status.clear ? `, after removing ${status.cleared} topics` : ""}.`;
        case "failed":
          return `Last re-sync failed: ${status.error || "unknown error"}`;
        default:
          return "No re-sync since the MQTT service started.";
      }
    },
    ...ngDevMode ? [{ debugName: "mqtt_status_text" }] : (
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
  ngOnInit() {
    this._loadMqttStatus();
  }
  /** Re-publishes everything to the MQTT brokers, clearing them first if asked */
  async resyncMqtt(clear) {
    if (clear) {
      const details = await openConfirmModal({
        title: "Clear & Re-sync MQTT",
        content: "Remove everything PlaceOS has published from the MQTT brokers, then publish it all again. Dashboards and alerts show nothing until it is published again. Continue?",
        icon: { type: "icon", content: "sync_problem" },
        confirm_text: "Clear & Re-sync"
      }, this._dialog);
      if (details.reason !== "done")
        return;
      details.close();
    }
    this._mqtt_starting.set(true);
    try {
      this.mqtt_status.set(await aa(clear));
      this._watchMqttStatus();
    } catch (err) {
      if (err?.status === 409) {
        notifyWarn("An MQTT re-sync is already running.");
        this._loadMqttStatus();
      } else {
        notifyError(`Error starting the MQTT re-sync. Error: ${await readError(err)}`);
      }
    }
    this._mqtt_starting.set(false);
  }
  async _loadMqttStatus() {
    try {
      this.mqtt_status.set(await ha());
      if (this.mqtt_running())
        this._watchMqttStatus();
    } catch {
      this.mqtt_status.set(null);
    }
  }
  /** Follows a running re-sync and says how it ended */
  _watchMqttStatus() {
    let checking = false;
    this.interval("mqtt_status", async () => {
      if (checking || document.hidden)
        return;
      checking = true;
      let status;
      try {
        status = await ha();
      } catch {
        return;
      } finally {
        checking = false;
      }
      this.mqtt_status.set(status);
      if (status.state === "complete") {
        this.clearInterval("mqtt_status");
        notifySuccess("MQTT re-sync complete.");
      } else if (status.state === "failed") {
        this.clearInterval("mqtt_status");
        notifyError(`MQTT re-sync failed. Error: ${status.error || "unknown error"}`);
      }
    }, MQTT_STATUS_POLL_MS);
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
      notifyError(`Error importing zone tree. Error: ${await readError(err)}`);
    }
    this.importing_zones.set(false);
  }
  async exportSelectedZoneTrees(parents) {
    this.exporting_zones.set(true);
    try {
      const zones = await this.zoneTreeExport(parents);
      downloadFile(`zone-tree-export-${(/* @__PURE__ */ new Date()).toISOString()}.csv`, jsonToCsv(zones, ZONE_TREE_CSV_FIELDS));
      notifySuccess(`Exported ${zones.length} zones.`);
    } catch (err) {
      notifyError(`Error exporting zone tree. Error: ${await readError(err)}`);
    }
    this.exporting_zones.set(false);
  }
  /**
   * The selected zones and every zone beneath them, walked one tree level
   * at a time so parents always come before their children.
   */
  async zoneTreeExport(parents) {
    const zones = [];
    const visited = /* @__PURE__ */ new Set();
    let level = parents;
    while (level.length) {
      const ids = [];
      for (const zone of level) {
        if (!zone?.id || visited.has(zone.id))
          continue;
        visited.add(zone.id);
        ids.push(zone.id);
        zones.push(zoneToExportItem(zone));
      }
      const chunks = [];
      for (let i = 0; i < ids.length; i += PARENT_IDS_PER_QUERY) {
        chunks.push(ids.slice(i, i + PARENT_IDS_PER_QUERY));
      }
      const children = await mapLimit(chunks, ZONE_CONCURRENCY, (chunk) => queryAllZones({ parent_id: chunk.join(",") }));
      level = children.flat();
    }
    return zones;
  }
  async importZoneTree(zones) {
    if (!(zones instanceof Array) || !zones.length) {
      notifyWarn("Invalid zone tree CSV file.");
      return;
    }
    const pending = zones.filter((zone) => !!zone.id);
    const file_ids = new Set(pending.map((zone) => zone.id));
    const children = /* @__PURE__ */ new Map();
    for (const zone of pending) {
      if (!zone.parent_id || !file_ids.has(zone.parent_id))
        continue;
      children.set(zone.parent_id, [
        ...children.get(zone.parent_id) || [],
        zone
      ]);
    }
    let level = pending.filter((zone) => !zone.parent_id || !file_ids.has(zone.parent_id));
    const id_map = /* @__PURE__ */ new Map();
    let created = 0;
    try {
      for (let depth = 0; level.length && depth < pending.length; depth++) {
        await mapLimit(level, ZONE_CONCURRENCY, async (zone) => {
          const parent_id = zone.parent_id ? id_map.get(zone.parent_id) || "" : "";
          const created_zone = await gh(zoneToImportItem(zone, parent_id));
          id_map.set(zone.id, created_zone.id);
          created++;
        });
        level = level.flatMap((zone) => children.get(zone.id) || []);
      }
    } catch (err) {
      notifyError(`Error importing zone tree. Created ${created} of ${zones.length} zones before the error. Error: ${await readError(err)}`);
      return;
    }
    const skipped = pending.length - created;
    notifySuccess(`Imported ${created} zones.${skipped ? ` Skipped ${skipped} zones with circular parent ids.` : ""}`);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceDatabaseDetailsComponent_BaseFactory;
    return function PlaceDatabaseDetailsComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceDatabaseDetailsComponent_BaseFactory || (\u0275PlaceDatabaseDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceDatabaseDetailsComponent)))(__ngFactoryType__ || _PlaceDatabaseDetailsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceDatabaseDetailsComponent, selectors: [["app-database-details"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 7, consts: [["zoneImportFile", ""], [1, "mb-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "grid", "w-full", "grid-cols-1", "gap-4", "p-4", "md:grid-cols-2"], [1, "border-base-200", "flex", "flex-col", "space-y-2", "rounded-sm", "border", "p-2"], [1, "mx-auto", "max-w-72", "p-2", "text-center"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-0.5rem)]", 3, "click", "disabled"], [1, "my-1", "flex", "w-full", "justify-center"], [1, "mx-auto", "max-w-80", "p-2", "text-center"], ["type", "file", "accept", "text/csv,text/tab-separated-values,.csv,.tsv", 1, "hidden", 3, "change"], ["mqtt-resync", "", 1, "border-base-200", "flex", "flex-col", "space-y-2", "rounded-sm", "border", "p-2", "md:col-span-2"], [1, "mx-auto", "max-w-120", "p-2", "text-center"], [1, "flex", "flex-wrap", "justify-center"], ["btn", "", "matRipple", "", "mqtt-resync-button", "", 3, "click", "disabled"], ["btn", "", "matRipple", "", "mqtt-clear-button", "", 1, "error", 3, "click", "disabled"], ["mqtt-status", "", 1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "text-sm", "opacity-80"], ["diameter", "32"], ["diameter", "20"]], template: function PlaceDatabaseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275text(2, "PlaceOS Database");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "p", 5);
      \u0275\u0275text(6, " Export zone tree structure as CSV. Select parents to export them followed by all children recursively. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_7_listener() {
        return ctx.exportZoneTree();
      });
      \u0275\u0275conditionalCreate(8, PlaceDatabaseDetailsComponent_Conditional_8_Template, 1, 0)(9, PlaceDatabaseDetailsComponent_Conditional_9_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 4)(11, "p", 8);
      \u0275\u0275text(12, " Import zone tree structure from CSV. Old zone IDs are mapped to new IDs and child parent IDs are substituted automatically. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9, 0);
      \u0275\u0275listener("change", function PlaceDatabaseDetailsComponent_Template_input_change_13_listener($event) {
        return ctx.importZoneTreeFile($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 6);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        const zoneImportFile_r2 = \u0275\u0275reference(14);
        return \u0275\u0275resetView(zoneImportFile_r2.click());
      });
      \u0275\u0275conditionalCreate(16, PlaceDatabaseDetailsComponent_Conditional_16_Template, 1, 0)(17, PlaceDatabaseDetailsComponent_Conditional_17_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10)(19, "p", 11);
      \u0275\u0275text(20, " Publish every module's state and every model's metadata to the MQTT brokers again. Clearing first removes everything PlaceOS has published, for when what the brokers hold has drifted from the modules; clients see nothing until it is published again. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 12)(22, "button", 13);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_22_listener() {
        return ctx.resyncMqtt(false);
      });
      \u0275\u0275text(23, " Re-sync MQTT ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 14);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_24_listener() {
        return ctx.resyncMqtt(true);
      });
      \u0275\u0275text(25, " Clear & Re-sync MQTT ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, PlaceDatabaseDetailsComponent_Conditional_26_Template, 4, 2, "div", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_7_0;
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.exporting_zones() || ctx.importing_zones());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.exporting_zones() ? 8 : 9);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.exporting_zones() || ctx.importing_zones());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.importing_zones() ? 16 : 17);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.mqtt_running());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.mqtt_running());
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_7_0 = ctx.mqtt_status()) ? 26 : -1, tmp_7_0);
    }
  }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, MatRippleModule, MatRipple, MatDialogModule], styles: ["\n[_nghost-%COMP%] {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 10em;\n  margin: 0.25em;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=database-details.component.css.map */"] });
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
            <div
                mqtt-resync
                class="border-base-200 flex flex-col space-y-2 rounded-sm border p-2 md:col-span-2"
            >
                <p class="mx-auto max-w-120 p-2 text-center">
                    Publish every module's state and every model's metadata to
                    the MQTT brokers again. Clearing first removes everything
                    PlaceOS has published, for when what the brokers hold has
                    drifted from the modules; clients see nothing until it is
                    published again.
                </p>
                <div class="flex flex-wrap justify-center">
                    <button
                        btn
                        matRipple
                        mqtt-resync-button
                        [disabled]="mqtt_running()"
                        (click)="resyncMqtt(false)"
                    >
                        Re-sync MQTT
                    </button>
                    <button
                        btn
                        matRipple
                        mqtt-clear-button
                        class="error"
                        [disabled]="mqtt_running()"
                        (click)="resyncMqtt(true)"
                    >
                        Clear &amp; Re-sync MQTT
                    </button>
                </div>
                @if (mqtt_status(); as status) {
                    <div
                        mqtt-status
                        class="flex items-center justify-center space-x-2 p-2 text-sm opacity-80"
                    >
                        @if (mqtt_running()) {
                            <mat-spinner diameter="20" />
                        }
                        <span>{{ mqtt_status_text() }}</span>
                    </div>
                }
            </div>
        </div>
    `, imports: [MatProgressSpinnerModule, MatRippleModule, MatDialogModule], styles: ["/* angular:styles/component:css;12eeaf2f97b0a02f824d213a17b33a48d1ee31074c7c7409a825ef75d2d1e217;/home/runner/work/backoffice/backoffice/src/app/admin/database-details.component.ts */\n:host {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton {\n  min-width: 10em;\n  margin: 0.25em;\n}\nmat-card {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=database-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceDatabaseDetailsComponent, { className: "PlaceDatabaseDetailsComponent", filePath: "src/app/admin/database-details.component.ts", lineNumber: 228 });
})();
export {
  PlaceDatabaseDetailsComponent
};
//# debugId=138976a0-3a36-58e1-8600-2e49384d8a2f
//# sourceMappingURL=chunk-TUYHLPTT.js.map
