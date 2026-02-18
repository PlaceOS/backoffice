import {
  ViewResponseModalComponent
} from "./chunk-RFBLPCVQ.js";
import {
  ActiveItemService
} from "./chunk-6QHLKPJW.js";
import {
  openConfirmModal
} from "./chunk-SMGQCLO4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AYXNAT23.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-F2SIRQ7I.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-VG6RDBFT.js";
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-MNFEZLRO.js";
import {
  IconComponent
} from "./chunk-WIN2774F.js";
import {
  notifyError,
  notifySuccess
} from "./chunk-IQ5P3T5K.js";
import {
  MatRippleModule
} from "./chunk-PJJZ73WC.js";
import {
  TranslatePipe
} from "./chunk-WSRCHTK7.js";
import {
  MatRipple
} from "./chunk-KZU5VDTQ.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  FormsModule,
  Injectable,
  NgControlStatus,
  NgModel,
  SlicePipe,
  inject,
  nextValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-TUZQ7R7Y.js";
import {
  BehaviorSubject,
  Fu,
  Mu,
  Nu,
  Uu,
  catchError,
  debounceTime,
  lastValueFrom,
  map,
  of,
  sa,
  shareReplay,
  switchMap,
  uc,
  zu
} from "./chunk-74QWELJT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/drivers/driver-update-list-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DriverUpdateListModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "DRIVERS.UPDATE_COUNT", \u0275\u0275pureFunction1(6, _c0, ((tmp_1_0 = \u0275\u0275pipeBind1(2, 1, ctx_r0.drivers_with_updates)) == null ? null : tmp_1_0.total) || 0)), " ");
  }
}
function DriverUpdateListModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "mat-checkbox", 11);
    \u0275\u0275listener("ngModelChange", function DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_0_For_1_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const driver_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleDriver(driver_r4.id, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "code", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "code", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const driver_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.selected_drivers.includes(driver_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", driver_r4.commit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(8, 6, driver_r4.commit, 0, 9));
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", driver_r4.commit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(12, 10, driver_r4.update_info.commit, 0, 9));
  }
}
function DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_0_For_1_Template, 13, 14, "tr", null, _forTrack0);
  }
  if (rf & 2) {
    const drivers_r5 = \u0275\u0275nextContext();
    \u0275\u0275repeater(drivers_r5.data);
  }
}
function DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "DRIVERS.NO_UPDATES"), " ");
  }
}
function DriverUpdateListModalComponent_Conditional_7_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_0_Template, 2, 0)(1, DriverUpdateListModalComponent_Conditional_7_Conditional_16_Conditional_1_Template, 4, 3, "tr");
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.total > 0 ? 0 : 1);
  }
}
function DriverUpdateListModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "table", 7)(2, "thead", 8)(3, "tr", 9)(4, "th")(5, "mat-checkbox", 10);
    \u0275\u0275listener("change", function DriverUpdateListModalComponent_Conditional_7_Template_mat_checkbox_change_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleAll($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275conditionalCreate(16, DriverUpdateListModalComponent_Conditional_7_Conditional_16_Template, 2, 1);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r0.all_selected)("indeterminate", ctx_r0.some_selected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "COMMON.FIELD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "COMMON.VERSION_CURRENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "COMMON.VERSION_LATEST"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(17, 12, ctx_r0.drivers_with_updates)) ? 16 : -1, tmp_6_0);
  }
}
function DriverUpdateListModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "DRIVERS.LOADING"));
  }
}
function DriverUpdateListModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 6)(1, "button", 15);
    \u0275\u0275listener("click", function DriverUpdateListModalComponent_Conditional_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateDrivers());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.selected_drivers.length <= 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 3, "DRIVERS.UPDATE_SELECTED"), " (", ctx_r0.selected_drivers.length, ") ");
  }
}
var DriverUpdateListModalComponent = class _DriverUpdateListModalComponent {
  _dialog_ref = inject(MatDialogRef);
  loading = "Loading drivers...";
  driver_count = 0;
  _change = new BehaviorSubject(0);
  drivers_with_updates = this._change.pipe(switchMap(() => {
    this.loading = "Loading drivers...";
    return Uu({
      update_available: true,
      limit: 1e3
    }).pipe(catchError(() => of({ data: [], total: 0 })));
  }), map((_) => {
    _.data = _.data.filter((_2) => _2.commit !== _2.update_info.commit);
    _.data = _.data.sort((a, b) => a.name.localeCompare(b.name));
    this.selected_drivers = _.data.map((d) => d.id);
    this.driver_count = _.total;
    this.loading = "";
    return _;
  }), shareReplay(1));
  selected_drivers = [];
  get all_selected() {
    return this.selected_drivers.length === this.driver_count;
  }
  get some_selected() {
    return this.selected_drivers.length > 0 && !this.all_selected;
  }
  toggleDriver(id, state) {
    this.selected_drivers = this.selected_drivers.filter((_) => _ !== id);
    if (state)
      this.selected_drivers.push(id);
  }
  async toggleAll(state) {
    console.log("Toggle all:", state);
    if (!state) {
      this.selected_drivers = [];
      return;
    }
    this.selected_drivers = (await nextValueFrom(this.drivers_with_updates)).data.map((_) => _.id);
  }
  async updateDrivers() {
    this.loading = "Updating drivers...";
    this._dialog_ref.disableClose = true;
    const drivers = await nextValueFrom(this.drivers_with_updates);
    const selected = drivers.data.filter((_) => this.selected_drivers.includes(_.id));
    await Promise.all(selected.map((driver) => driver.commit !== driver.update_info.commit ? Mu(driver.id, __spreadProps(__spreadValues({}, driver), {
      commit: driver.update_info.commit
    })).toPromise() : Promise.resolve())).catch((_) => {
      notifyError("Error updating drivers", _);
      this.loading = "";
      this._dialog_ref.disableClose = false;
    });
    notifySuccess(`Successfully updated ${selected.length} drivers`);
    this.loading = "";
    if (this.all_selected)
      this._dialog_ref.close();
    else
      this._change.next(Date.now());
  }
  static \u0275fac = function DriverUpdateListModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverUpdateListModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverUpdateListModalComponent, selectors: [["driver-update-list-modal"]], decls: 11, vars: 9, consts: [[1, "border-base-100", "bg-base-200", "z-10", "mx-auto", "my-2", "w-[calc(100%-1rem)]", "rounded-sm", "border", "px-4", "py-2"], [1, "flex", "items-center", "space-x-4", "text-xl", "font-medium"], [1, "mono", "bg-base-300", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-[80vw]", "max-w-3xl", "overflow-y-auto"], [1, "flex", "h-48", "w-[20rem]", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "border-base-100", "bg-base-200", "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "justify-end", "space-x-2", "rounded-sm", "border", "p-2"], [1, "mx-2", "w-[calc(100%-1rem)]", "rounded-sm"], [1, "sticky", "top-0", "z-10", "text-left"], [1, "bg-base-300!"], [3, "change", "checked", "indeterminate"], [3, "ngModelChange", "ngModel"], [3, "matTooltip"], ["colspan", "4", 1, "opacity-30"], [3, "diameter"], ["btn", "", "matRipple", "", 3, "click", "disabled"]], template: function DriverUpdateListModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1)(2, "div");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, DriverUpdateListModalComponent_Conditional_5_Template, 4, 8, "code", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, DriverUpdateListModalComponent_Conditional_6_Template, 3, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, DriverUpdateListModalComponent_Conditional_7_Template, 18, 14, "main", 4);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275conditionalBranchCreate(9, DriverUpdateListModalComponent_Conditional_9_Template, 5, 4, "div", 5);
      \u0275\u0275conditionalCreate(10, DriverUpdateListModalComponent_Conditional_10_Template, 4, 5, "footer", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "DRIVERS.UPDATE"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(8, 7, ctx.drivers_with_updates) && !ctx.loading ? 7 : 9);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.loading ? 10 : -1);
    }
  }, dependencies: [
    CommonModule,
    MatDialogModule,
    MatDialogClose,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatCheckboxModule,
    MatCheckbox,
    MatTooltipModule,
    MatTooltip,
    FormsModule,
    NgControlStatus,
    NgModel,
    AsyncPipe,
    SlicePipe,
    TranslatePipe
  ], styles: ["\n\nth[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=driver-update-list-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverUpdateListModalComponent, [{
    type: Component,
    args: [{ selector: "driver-update-list-modal", template: `
        <header
            class="border-base-100 bg-base-200 z-10 mx-auto my-2 w-[calc(100%-1rem)] rounded-sm border px-4 py-2"
        >
            <h2 class="flex items-center space-x-4 text-xl font-medium">
                <div>{{ 'DRIVERS.UPDATE' | translate }}</div>
                @if (!loading) {
                    <code class="mono bg-base-300 rounded-sm px-2 py-1 text-xs">
                        {{
                            'DRIVERS.UPDATE_COUNT'
                                | translate
                                    : {
                                          count:
                                              (drivers_with_updates | async)
                                                  ?.total || 0,
                                      }
                        }}
                    </code>
                }
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if ((drivers_with_updates | async) && !loading) {
            <main class="max-h-[65vh] w-[80vw] max-w-3xl overflow-y-auto">
                <table class="mx-2 w-[calc(100%-1rem)] rounded-sm">
                    <thead class="sticky top-0 z-10 text-left">
                        <tr class="bg-base-300!">
                            <th>
                                <mat-checkbox
                                    [checked]="all_selected"
                                    [indeterminate]="some_selected"
                                    (change)="toggleAll($event.checked)"
                                ></mat-checkbox>
                            </th>
                            <th>{{ 'COMMON.FIELD_NAME' | translate }}</th>
                            <th>{{ 'COMMON.VERSION_CURRENT' | translate }}</th>
                            <th>{{ 'COMMON.VERSION_LATEST' | translate }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if (drivers_with_updates | async; as drivers) {
                            @if (drivers.total > 0) {
                                @for (driver of drivers.data; track driver.id) {
                                    <tr>
                                        <td>
                                            <mat-checkbox
                                                [ngModel]="
                                                    selected_drivers.includes(
                                                        driver.id
                                                    )
                                                "
                                                (ngModelChange)="
                                                    toggleDriver(
                                                        driver.id,
                                                        $event
                                                    )
                                                "
                                            ></mat-checkbox>
                                        </td>
                                        <td>{{ driver.name }}</td>
                                        <td>
                                            <code
                                                [matTooltip]="driver.commit"
                                                >{{
                                                    driver.commit | slice: 0 : 9
                                                }}</code
                                            >
                                        </td>
                                        <td>
                                            <code
                                                [matTooltip]="driver.commit"
                                                >{{
                                                    driver.update_info.commit
                                                        | slice: 0 : 9
                                                }}</code
                                            >
                                        </td>
                                    </tr>
                                }
                            } @else {
                                <tr>
                                    <td colspan="4" class="opacity-30">
                                        {{ 'DRIVERS.NO_UPDATES' | translate }}
                                    </td>
                                </tr>
                            }
                        }
                    </tbody>
                </table>
            </main>
        } @else {
            <div
                class="flex h-48 w-[20rem] flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'DRIVERS.LOADING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="border-base-100 bg-base-200 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] justify-end space-x-2 rounded-sm border p-2"
            >
                <button
                    btn
                    matRipple
                    [disabled]="selected_drivers.length <= 0"
                    (click)="updateDrivers()"
                >
                    {{ 'DRIVERS.UPDATE_SELECTED' | translate }} ({{
                        selected_drivers.length
                    }})
                </button>
            </footer>
        }
    `, imports: [
      CommonModule,
      MatDialogModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatTooltipModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;bfea75da5568c24d161727cc6e48b5a7f41bd972439f7f1d75792b0c5010b588;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-update-list-modal.component.ts */\nth {\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=driver-update-list-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverUpdateListModalComponent, { className: "DriverUpdateListModalComponent", filePath: "src/app/drivers/driver-update-list-modal.component.ts", lineNumber: 157 });
})();

// src/app/drivers/driver-state.service.ts
var DriverStateService = class _DriverStateService {
  _state = inject(ActiveItemService);
  _dialog = inject(MatDialog);
  _loading = new BehaviorSubject(false);
  _last_error = new BehaviorSubject(null);
  _poll = new BehaviorSubject(0);
  item = this._state.active_item$;
  loading = this._loading.asObservable();
  updates_available = this._poll.pipe(switchMap(() => Uu({ update_available: true, limit: 1 }).pipe(catchError(() => of({ data: [], total: 0 })))), map((d) => d.total > 1), shareReplay(1));
  modules = this.item.pipe(switchMap(async (item) => {
    if (!item)
      return { data: [] };
    this._loading.next(true);
    const details = await uc({
      driver_id: item.id
    }).toPromise();
    this._loading.next(false);
    return details;
  }), map((d) => d.data), shareReplay(1));
  docs = this.item.pipe(debounceTime(100), switchMap(async (item) => {
    if (!item)
      return "";
    this._loading.next(true);
    const docs = await lastValueFrom(zu(item.id)).catch(() => "");
    this._loading.next(false);
    return docs;
  }), map((d) => d || ""), shareReplay(1));
  get active_item() {
    return this._state.active_item;
  }
  constructor() {
    this.item.subscribe(() => this._last_error.next(null));
  }
  showUpdateList() {
    this._dialog.open(DriverUpdateListModalComponent, {});
  }
  viewError() {
    const error = this._last_error.getValue();
    if (!error)
      return;
    this._dialog.open(ViewResponseModalComponent, {
      data: { title: "Driver Compilation Error", content: error }
    });
  }
  async updateDriver() {
    const item = this._state.active_item;
    if (!item.update_available)
      return notifyError("No update available.");
    const details = await openConfirmModal({
      title: `Update Driver`,
      content: `<p>Are you sure you want update this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
      icon: { type: "icon", content: "update" }
    }, this._dialog);
    if (!details || !details.reason)
      return details.close();
    details.loading("Updating driver...");
    const success = await Mu(item.id, __spreadProps(__spreadValues({}, item), {
      commit: item.update_info.commit
    })).toPromise().catch(() => null);
    if (!success) {
      notifyError("Failed to update driver.");
    }
    details.close();
  }
  async recompileDriver() {
    const item = this._state.active_item;
    const details = await openConfirmModal({
      title: `Recompile Driver`,
      content: `<p>Are you sure you want recompile this driver?</p>`,
      icon: { type: "icon", content: "build" }
    }, this._dialog);
    if (!details || !details.reason)
      return details.close();
    details.loading("Recompiling driver... This may take a while.");
    const success = await Nu(item.id).toPromise().catch(() => false);
    if (success === false) {
      notifyError("Failed to recompile driver.");
    }
    details.close();
  }
  async reloadDriver() {
    const item = this._state.active_item;
    const details = await openConfirmModal({
      title: `Reload Driver`,
      content: `<p>Are you sure you want reload this driver?</p>`,
      icon: { type: "icon", content: "refresh" }
    }, this._dialog);
    if (!details || !details.reason)
      return details.close();
    details.loading("Reload driver... This may take a while.");
    const success = await Fu(item.id).toPromise().catch(() => false);
    if (success === false) {
      notifyError("Failed to reload driver.");
    } else {
      notifySuccess("Successfully reloaded driver.");
    }
    details.close();
  }
  async removeModule(device) {
    const details = await openConfirmModal({
      title: "Remove module?",
      content: `Remove ${device.driver_id}?<br>`,
      extra: [
        "error",
        "Note that all associated data be deleted immediatedly."
      ],
      icon: { type: "icon", content: "delete" }
    }, this._dialog);
    if (!details || !details.reason)
      return;
    const system = await sa(this.active_item.id, device.id).toPromise().catch((err) => {
      notifyError(`Error removing module ${device.id}. Error: ${err.statusText || err.message || err}`);
    });
    details.close();
    if (!system)
      return;
    this._state.replaceItem(system);
    notifySuccess(`Successfully removed module.`);
  }
  static \u0275fac = function DriverStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DriverStateService, factory: _DriverStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DriverStateService
};
//# sourceMappingURL=chunk-OUULEUE4.js.map
