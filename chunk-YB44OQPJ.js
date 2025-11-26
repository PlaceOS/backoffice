import {
  BindingDirective
} from "./chunk-TGG6YAE3.js";
import {
  SettingsFormComponent,
  SettingsHistoryViewComponent
} from "./chunk-T6SFOKDB.js";
import {
  ViewResponseModalComponent
} from "./chunk-D6EVRHUZ.js";
import "./chunk-45ZHSICB.js";
import {
  DebugOutputComponent
} from "./chunk-KUHIXTWR.js";
import "./chunk-VAIKCWTQ.js";
import "./chunk-W7JULZ3J.js";
import {
  d
} from "./chunk-O72O3CR4.js";
import {
  ItemDetailsComponent,
  ItemSelectionComponent,
  ItemSidebarComponent,
  ItemTablistComponent
} from "./chunk-ZQQKA6UB.js";
import {
  ActiveItemService,
  Clipboard,
  ExtensionOutletComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  PlaceDebugService,
  SanitizePipe,
  SidebarMenuComponent,
  SimpleTableComponent,
  extensionsForItem,
  openConfirmModal
} from "./chunk-JDP5FFMI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-TYVAN3UY.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatTooltip,
  MatTooltipModule,
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-EWUI732O.js";
import {
  DateFromPipe
} from "./chunk-53JJL3R3.js";
import {
  IconComponent,
  MatRipple,
  MatRippleModule
} from "./chunk-L3UICUJN.js";
import {
  TranslatePipe
} from "./chunk-V3NTFP3B.js";
import {
  $c,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  Injectable,
  NgControlStatus,
  NgModel,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SlicePipe,
  Tc,
  Uu,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  computed,
  cu,
  debounceTime,
  du,
  i18n,
  inject,
  lastValueFrom,
  lu,
  map,
  mu,
  nextValueFrom,
  of,
  pu,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZKZAJWA3.js";

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
    return cu({
      update_available: true,
      limit: 1e3
    }).pipe(catchError(() => of({ data: [], total: 0 })));
  }), map((_) => {
    _.data = _.data.filter((_2) => _2.commit !== _2.update_info.commit);
    _.data = _.data.sort((a, b) => a.name.localeCompare(b.name));
    this.selected_drivers = _.data.map((d2) => d2.id);
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
    await Promise.all(selected.map((driver) => driver.commit !== driver.update_info.commit ? lu(driver.id, __spreadProps(__spreadValues({}, driver), {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverUpdateListModalComponent, selectors: [["driver-update-list-modal"]], decls: 11, vars: 9, consts: [[1, "z-10", "mx-auto", "my-2", "w-[calc(100%-1rem)]", "rounded", "border", "border-base-100", "bg-base-200", "px-4", "py-2"], [1, "flex", "items-center", "space-x-4", "text-xl", "font-medium"], [1, "mono", "rounded", "bg-base-300", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "w-[80vw]", "max-w-[48rem]", "overflow-y-auto"], [1, "flex", "h-48", "w-[20rem]", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "z-10", "mx-auto", "my-2", "flex", "w-[calc(100%-1rem)]", "justify-end", "space-x-2", "rounded", "border", "border-base-100", "bg-base-200", "p-2"], [1, "mx-2", "w-[calc(100%-1rem)]", "rounded"], [1, "sticky", "top-0", "z-10", "text-left"], [1, "!bg-base-300"], [3, "change", "checked", "indeterminate"], [3, "ngModelChange", "ngModel"], [3, "matTooltip"], ["colspan", "4", 1, "opacity-30"], [3, "diameter"], ["btn", "", "matRipple", "", 3, "click", "disabled"]], template: function DriverUpdateListModalComponent_Template(rf, ctx) {
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
            class="z-10 mx-auto my-2 w-[calc(100%-1rem)] rounded border border-base-100 bg-base-200 px-4 py-2"
        >
            <h2 class="flex items-center space-x-4 text-xl font-medium">
                <div>{{ 'DRIVERS.UPDATE' | translate }}</div>
                @if (!loading) {
                    <code class="mono rounded bg-base-300 px-2 py-1 text-xs">
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
            <main class="max-h-[65vh] w-[80vw] max-w-[48rem] overflow-y-auto">
                <table class="mx-2 w-[calc(100%-1rem)] rounded">
                    <thead class="sticky top-0 z-10 text-left">
                        <tr class="!bg-base-300">
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
                class="z-10 mx-auto my-2 flex w-[calc(100%-1rem)] justify-end space-x-2 rounded border border-base-100 bg-base-200 p-2"
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
  updates_available = this._poll.pipe(switchMap(() => cu({ update_available: true, limit: 1 }).pipe(catchError(() => of({ data: [], total: 0 })))), map((d2) => d2.total > 1), shareReplay(1));
  modules = this.item.pipe(switchMap(async (item) => {
    if (!item)
      return { data: [] };
    this._loading.next(true);
    const details = await Uu({
      driver_id: item.id
    }).toPromise();
    this._loading.next(false);
    return details;
  }), map((d2) => d2.data), shareReplay(1));
  docs = this.item.pipe(debounceTime(100), switchMap(async (item) => {
    if (!item)
      return "";
    this._loading.next(true);
    const docs = await lastValueFrom(mu(item.id)).catch(() => "");
    this._loading.next(false);
    return docs;
  }), map((d2) => d2 || ""), shareReplay(1));
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
    const success = await lu(item.id, __spreadProps(__spreadValues({}, item), {
      commit: item.update_info.commit
    })).toPromise().catch((_) => null);
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
    const success = await du(item.id).toPromise().catch((_) => false);
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
    const success = await pu(item.id).toPromise().catch(() => false);
    success === false ? notifyError("Failed to reload driver.") : notifySuccess("Successfully reloaded driver.");
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
    const system = await Tc(this.active_item.id, device.id).toPromise().catch((err) => {
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

// src/app/drivers/driver-about.component.ts
var _c02 = (a0) => ["/repositories", a0, "about"];
function DriverAboutComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "a", 20);
    \u0275\u0275pipe(5, "safe");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "DRIVERS.DEFAULT_URI"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 5, ctx_r0.item().default_uri, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().default_uri);
  }
}
function DriverAboutComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "DRIVERS.DEFAULT_PORT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.item().default_port, " ");
  }
}
function DriverAboutComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 22);
    \u0275\u0275elementStart(1, "div", 23)(2, "h3", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 25);
    \u0275\u0275pipe(6, "sanitize");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.FIELD_DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(6, 4, ctx_r0.description()), \u0275\u0275sanitizeHtml);
  }
}
function DriverAboutComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section");
    \u0275\u0275element(1, "a-settings-form", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("merge", true)("id", ctx_r0.item().id)("settings", ctx_r0.item().settings);
  }
}
function DriverAboutComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DRIVERS.LOADING_SETTINGS"));
  }
}
var DriverAboutComponent = class _DriverAboutComponent extends AsyncHandler {
  _service = inject(DriverStateService);
  _clipboard = inject(Clipboard);
  updateDriver = () => this._service.updateDriver();
  recompile = () => this._service.recompileDriver();
  reload = () => this._service.reloadDriver();
  viewErrors = () => this._service.viewError();
  item = signal(void 0, ...ngDevMode ? [{ debugName: "item" }] : []);
  /** HTML string for rendering the description */
  description = computed(() => d(this.item().description || "", { async: false }), ...ngDevMode ? [{ debugName: "description" }] : []);
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => this.item.set(item)));
  }
  copyCommit() {
    this._clipboard.copy(this.item().commit);
    notifyInfo(i18n("COMMON.COMMIT_HASH_COPIED"));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DriverAboutComponent_BaseFactory;
    return function DriverAboutComponent_Factory(__ngFactoryType__) {
      return (\u0275DriverAboutComponent_BaseFactory || (\u0275DriverAboutComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DriverAboutComponent)))(__ngFactoryType__ || _DriverAboutComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverAboutComponent, selectors: [["driver-about"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 67, vars: 64, consts: [[1, "p-4"], [1, "mb-4", "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-x-2", "sm:space-y-0"], [1, "flex-1", "sm:w-1/3"], [1, "grid", "gap-2", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "mono", "text-sm", "underline", 3, "routerLink"], [1, "mono", "truncate", "text-sm"], [1, "flex", "items-center"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "grid", "gap-4", "rounded", "border", "border-base-200", "p-4"], [1, "flex", "items-center", "overflow-hidden"], ["matRipple", "", 3, "click"], [1, "inline-block", "max-w-full", "select-all", "truncate", "text-xs", 3, "matTooltip"], [1, "mono", "truncate", "text-sm", 3, "matTooltip"], [1, "mx-auto", "mt-2", "flex", "items-center", "justify-between", "space-x-2"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "my-4"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "select-all", "overflow-hidden", "underline"], ["target", "_blank", 1, "mono", "block", "w-full", "truncate", "text-sm", 3, "href"], [1, "mono", "text-sm"], [1, "my-4", "text-base-300"], [1, "w-full", "rounded", "border", "border-base-200"], [1, "w-full", "rounded", "bg-base-200", "p-4", "text-lg", "font-medium"], [1, "markdown", "w-full", "overflow-auto", "p-4", "text-sm", 3, "innerHTML"], [3, "merge", "id", "settings"], ["diameter", "48", 1, "mb-4"]], template: function DriverAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275conditionalCreate(4, DriverAboutComponent_Conditional_4_Template, 7, 8);
      \u0275\u0275conditionalCreate(5, DriverAboutComponent_Conditional_5_Template, 5, 4);
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "a", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 4);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "span", 8);
      \u0275\u0275pipe(22, "date");
      \u0275\u0275pipe(23, "date");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "dateFrom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 4);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 7)(30, "span", 8);
      \u0275\u0275pipe(31, "date");
      \u0275\u0275pipe(32, "date");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "dateFrom");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 2)(36, "div", 9)(37, "div", 4);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 10)(41, "button", 11);
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_41_listener() {
        return ctx.copyCommit();
      });
      \u0275\u0275elementStart(42, "code", 12);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 4);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 10)(48, "div", 13);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 14)(51, "button", 15);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_51_listener() {
        return ctx.updateDriver();
      });
      \u0275\u0275elementStart(53, "icon", 16);
      \u0275\u0275text(54, "update");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "button", 15);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_55_listener() {
        return ctx.recompile();
      });
      \u0275\u0275elementStart(57, "icon", 16);
      \u0275\u0275text(58, "build");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "button", 15);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275listener("click", function DriverAboutComponent_Template_button_click_59_listener() {
        return ctx.reload();
      });
      \u0275\u0275elementStart(61, "icon", 16);
      \u0275\u0275text(62, "refresh");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275conditionalCreate(63, DriverAboutComponent_Conditional_63_Template, 7, 6);
      \u0275\u0275element(64, "hr", 17);
      \u0275\u0275conditionalCreate(65, DriverAboutComponent_Conditional_65_Template, 2, 3, "section")(66, DriverAboutComponent_Conditional_66_Template, 5, 3, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_24_0;
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "6rem auto");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().default_uri ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.item().default_port ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 28, "REPOS.SINGULAR"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(62, _c02, ctx.item().repository_id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().repository_id);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 30, "DRIVERS.MODULE_NAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx.item()) == null ? null : tmp_7_0.module_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 32, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(22, 34, ctx.item().created_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(23, 37, ctx.item().created_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 40, ctx.item().created_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 42, "COMMON.UPDATED_AT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(31, 44, ctx.item().updated_at * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(32, 47, ctx.item().updated_at * 1e3, "shortTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 50, ctx.item().updated_at * 1e3), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("grid-template-columns", "5.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 52, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", ctx.item().commit);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().commit, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 54, "DRIVERS.FILENAME"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx.item().file_name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.item().file_name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(52, 56, "COMMON.UPDATE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(56, 58, "DRIVERS.RECOMPILE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(60, 60, "DRIVERS.RELOAD"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(((tmp_24_0 = ctx.item()) == null ? null : tmp_24_0.description) ? 63 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.item().settings ? 65 : 66);
    }
  }, dependencies: [
    IconComponent,
    MatRippleModule,
    MatRipple,
    SettingsFormComponent,
    MatTooltipModule,
    MatTooltip,
    CommonModule,
    RouterModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    TranslatePipe,
    SanitizePipe,
    DatePipe,
    DateFromPipe,
    SafePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nlabel[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverAboutComponent, [{
    type: Component,
    args: [{ selector: "driver-about", template: `
        <div class="p-4">
            <section
                class="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
            >
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="grid gap-2 rounded border border-base-200 p-4"
                        [style.gridTemplateColumns]="'6rem auto'"
                    >
                        @if (item().default_uri) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_URI' | translate }}
                            </div>
                            <div class="select-all overflow-hidden underline">
                                <a
                                    class="mono block w-full truncate text-sm"
                                    [href]="item().default_uri | safe: 'url'"
                                    target="_blank"
                                    >{{ item().default_uri }}</a
                                >
                            </div>
                        }
                        @if (item().default_port) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                            </div>
                            <div class="mono text-sm">
                                {{ item().default_port }}
                            </div>
                        }
                        <div class="flex items-center text-sm font-medium">
                            {{ 'REPOS.SINGULAR' | translate }}
                        </div>
                        <div>
                            <a
                                [routerLink]="[
                                    '/repositories',
                                    item().repository_id,
                                    'about',
                                ]"
                                class="mono text-sm underline"
                            >
                                {{ item().repository_id }}</a
                            >
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                        </div>
                        <div class="mono truncate text-sm">
                            {{ item()?.module_name }}
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.CREATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item().created_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().created_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().created_at * 1000 | dateFrom }}
                            </span>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.UPDATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item().updated_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().updated_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().updated_at * 1000 | dateFrom }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 sm:w-1/3">
                    <div
                        class="grid gap-4 rounded border border-base-200 p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.GIT_COMMIT' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <button matRipple (click)="copyCommit()">
                                <code
                                    class="inline-block max-w-full select-all truncate text-xs"
                                    [matTooltip]="item().commit"
                                >
                                    {{ item().commit }}
                                </code>
                            </button>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'DRIVERS.FILENAME' | translate }}
                        </div>
                        <div class="flex items-center overflow-hidden">
                            <div
                                class="mono truncate text-sm"
                                [matTooltip]="item().file_name"
                            >
                                {{ item().file_name }}
                            </div>
                        </div>
                        <div
                            class="mx-auto mt-2 flex items-center justify-between space-x-2"
                        >
                            <button
                                icon
                                matRipple
                                [matTooltip]="'COMMON.UPDATE' | translate"
                                (click)="updateDriver()"
                                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            >
                                <icon class="text-2xl">update</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'DRIVERS.RECOMPILE' | translate"
                                (click)="recompile()"
                                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            >
                                <icon class="text-2xl">build</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [matTooltip]="'DRIVERS.RELOAD' | translate"
                                (click)="reload()"
                                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                            >
                                <icon class="text-2xl">refresh</icon>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            @if (item()?.description) {
                <hr class="my-4 text-base-300" />
                <div class="w-full rounded border border-base-200">
                    <h3
                        class="w-full rounded bg-base-200 p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="description() | sanitize"
                    ></div>
                </div>
            }
            <hr class="my-4" />
            @if (item().settings) {
                <section>
                    <a-settings-form
                        [merge]="true"
                        [id]="item().id"
                        [settings]="item().settings"
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center justify-center">
                    <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                    <p>{{ 'DRIVERS.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      SettingsFormComponent,
      SanitizePipe,
      MatTooltipModule,
      CommonModule,
      DateFromPipe,
      RouterModule,
      SafePipe,
      MatProgressSpinnerModule
    ], styles: ["/* angular:styles/component:css;2341d022eeccbfbc301bc2dca3b9f0bfae8d7ab646528f04d01a78a95a40d258;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-about.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\nlabel {\n  width: 6rem;\n}\n/*# sourceMappingURL=driver-about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverAboutComponent, { className: "DriverAboutComponent", filePath: "src/app/drivers/driver-about.component.ts", lineNumber: 231 });
})();

// src/app/drivers/driver-devices.component.ts
var _c03 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/modules", a0];
var _c5 = (a0) => ({ count: a0 });
var _c6 = () => [];
var _c7 = (a0) => ["/systems", a0];
var _forTrack02 = ($index, $item) => $item.id;
function DriverModulesComponent_ng_template_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 14);
    \u0275\u0275twoWayListener("modelChange", function DriverModulesComponent_ng_template_14_Conditional_0_Template_i_modelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const row_r3 = \u0275\u0275nextContext().row;
      \u0275\u0275twoWayBindingSet(row_r3.connected, $event) || (row_r3.connected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275twoWayProperty("model", row_r3.connected);
    \u0275\u0275property("sys", row_r3.system.id)("mod", row_r3);
  }
}
function DriverModulesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DriverModulesComponent_ng_template_14_Conditional_0_Template, 1, 3, "i", 12);
    \u0275\u0275element(1, "div", 13);
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275conditional(row_r3.system ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-content", !row_r3.running)("bg-error", row_r3.running && !row_r3.connected)("bg-success", row_r3.running && row_r3.connected);
  }
}
function DriverModulesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, row_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.id, " ");
  }
}
function DriverModulesComponent_ng_template_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "DRIVERS.LOADING_SYSTEMS"));
  }
}
function DriverModulesComponent_ng_template_18_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const system_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c7, system_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", system_r8.display_name || system_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", system_r8.id, " ");
  }
}
function DriverModulesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function DriverModulesComponent_ng_template_18_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.loadSystems(row_r6));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function DriverModulesComponent_ng_template_18_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).row;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeModule(row_r6));
    });
    \u0275\u0275elementStart(7, "icon", 21);
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-menu", null, 3)(11, "div", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, DriverModulesComponent_ng_template_18_Conditional_14_Template, 5, 4, "div", 23);
    \u0275\u0275repeaterCreate(15, DriverModulesComponent_ng_template_18_For_16_Template, 6, 5, "a", 24, _forTrack02);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r9 = \u0275\u0275reference(10);
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 5, "DRIVERS.VIEW_SYSTEMS"))("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 7, "MODULES.DELETE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 9, "DRIVERS.SYSTEM_COUNT", \u0275\u0275pureFunction1(13, _c5, ctx_r6.systems[row_r6.id] == null ? null : ctx_r6.systems[row_r6.id].length), ctx_r6.systems[row_r6.id] == null ? null : ctx_r6.systems[row_r6.id].length), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.loading_systems ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.systems[row_r6.id] || \u0275\u0275pureFunction0(15, _c6));
  }
}
var DriverModulesComponent = class _DriverModulesComponent extends AsyncHandler {
  _service = inject(DriverStateService);
  loading_systems = false;
  /** Subject holding the value of the search */
  filter$ = new BehaviorSubject("");
  /** Whether systems are being loaded */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Currently active driver */
  item = this._service.item;
  /** List of systems associated with modules */
  systems = {};
  /** Whether systems are being loaded */
  /** List of modules */
  modules = combineLatest([
    this.filter$,
    this._service.modules
  ]).pipe(map((details) => {
    const [filters, modules] = details;
    const search = filters.toLowerCase();
    return filters ? modules.filter((mod) => mod.name.toLowerCase().includes(search) || mod.custom_name.toLowerCase().includes(search)) : modules;
  }));
  removeModule = (d2) => this._service.removeModule(d2);
  ngOnInit() {
    this.subscription("loading", this._service.loading.subscribe((l) => this.loading.set(l)));
  }
  async loadSystems(mod) {
    this.loading_systems = true;
    const systems = await $c({ module_id: mod.id }).pipe(map(({ data }) => data)).toPromise();
    this.systems[mod.id] = systems || [];
    this.loading_systems = false;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DriverModulesComponent_BaseFactory;
    return function DriverModulesComponent_Factory(__ngFactoryType__) {
      return (\u0275DriverModulesComponent_BaseFactory || (\u0275DriverModulesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DriverModulesComponent)))(__ngFactoryType__ || _DriverModulesComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverModulesComponent, selectors: [["driver-devices"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 28, consts: [["state_template", ""], ["name_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "p-4"], [1, "mb-4", "flex", "items-center"], ["appearance", "outline", 1, "h-12", "flex-1"], ["matPrefix", "", 1, "prefix"], [1, "relative", "-left-0.5", "text-2xl"], ["matInput", "", 1, "rounded-none", 3, "ngModelChange", "ngModel", "placeholder"], ["mode", "indeterminate", 1, "w-full"], [1, "block", "min-w-[32rem]", "text-sm", 3, "data", "columns", "sortable", "empty_message"], ["binding", "", "bind", "connected", 3, "model", "sys", "mod"], [1, "mx-auto", "h-2", "w-2", "rounded-full"], ["binding", "", "bind", "connected", 3, "modelChange", "model", "sys", "mod"], [1, "flex", "flex-col", "items-start", "px-4", "py-2", "leading-snug"], [1, "truncate", "underline", 3, "routerLink"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip", "matMenuTriggerFor"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "text-error"], [1, "mx-1", "-mt-1", "mb-1", "min-w-64", "rounded", "bg-base-200", "px-4", "py-2", "text-sm", "opacity-70"], [1, "flex", "items-center", "space-x-2", "p-2", "text-sm"], ["mat-menu-item", "", 1, "leading-tight", 3, "routerLink"], [3, "diameter"], [1, "flex", "h-full", "flex-col", "justify-center", "px-2", "leading-tight"], [1, "text-base"], [1, "text-xs", "opacity-30"]], template: function DriverModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "section", 5)(2, "mat-form-field", 6)(3, "div", 7)(4, "icon", 8);
      \u0275\u0275text(5, " search ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "input", 9);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275listener("ngModelChange", function DriverModulesComponent_Template_input_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter$.next($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "section");
      \u0275\u0275element(9, "mat-progress-bar", 10)(10, "simple-table", 11);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275template(14, DriverModulesComponent_ng_template_14_Template, 2, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, DriverModulesComponent_ng_template_16_Template, 5, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, DriverModulesComponent_ng_template_18_Template, 17, 16, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const state_template_r10 = \u0275\u0275reference(15);
      const name_template_r11 = \u0275\u0275reference(17);
      const actions_template_r12 = \u0275\u0275reference(19);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", "")("placeholder", \u0275\u0275pipeBind1(7, 8, "MODULES.SEARCH"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("opacity-0", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.modules)("columns", \u0275\u0275pureFunction3(24, _c3, \u0275\u0275pureFunction2(16, _c03, \u0275\u0275pipeBind1(11, 10, "MODULES.FIELD_STATE"), state_template_r10), \u0275\u0275pureFunction2(19, _c1, \u0275\u0275pipeBind1(12, 12, "DRIVERS.MODULE_NAME"), name_template_r11), \u0275\u0275pureFunction1(22, _c2, actions_template_r12)))("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 14, "DRIVERS.MODULES_EMPTY"));
    }
  }, dependencies: [
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterModule,
    RouterLink,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatTooltipModule,
    MatTooltip,
    SimpleTableComponent,
    MatProgressBarModule,
    MatProgressBar,
    MatFormFieldModule,
    MatFormField,
    MatPrefix,
    MatInputModule,
    MatInput,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    BindingDirective,
    TranslatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[role=table][_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 28rem;\n}\n/*# sourceMappingURL=driver-devices.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverModulesComponent, [{
    type: Component,
    args: [{ selector: "driver-devices", template: `
        <div class="p-4">
            <section class="mb-4 flex items-center">
                <mat-form-field appearance="outline" class="h-12 flex-1">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [ngModel]="''"
                        (ngModelChange)="filter$.next($event)"
                        matInput
                        [placeholder]="'MODULES.SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
            </section>
            <section>
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[32rem] text-sm"
                    [data]="modules"
                    [columns]="[
                        {
                            key: 'state',
                            name: 'MODULES.FIELD_STATE' | translate,
                            content: state_template,
                            size: '4rem',
                            sortable: false,
                        },
                        {
                            key: 'name',
                            name: 'DRIVERS.MODULE_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DRIVERS.MODULES_EMPTY' | translate"
                ></simple-table>
                <ng-template #state_template let-row="row">
                    @if (row.system) {
                        <i
                            binding
                            [(model)]="row.connected"
                            [sys]="row.system.id"
                            [mod]="row"
                            bind="connected"
                        ></i>
                    }
                    <div
                        class="mx-auto h-2 w-2 rounded-full"
                        [class.bg-base-content]="!row.running"
                        [class.bg-error]="row.running && !row.connected"
                        [class.bg-success]="row.running && row.connected"
                    ></div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/modules', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            matRipple
                            [matTooltip]="'DRIVERS.VIEW_SYSTEMS' | translate"
                            [matMenuTriggerFor]="menu"
                            (click)="loadSystems(row)"
                        >
                            <icon>visibility</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'MODULES.DELETE' | translate"
                            (click)="removeModule(row)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <div
                                class="mx-1 -mt-1 mb-1 min-w-64 rounded bg-base-200 px-4 py-2 text-sm opacity-70"
                            >
                                {{
                                    'DRIVERS.SYSTEM_COUNT'
                                        | translate
                                            : { count: systems[row.id]?.length }
                                            : systems[row.id]?.length
                                }}
                            </div>
                            @if (loading_systems) {
                                <div
                                    class="flex items-center space-x-2 p-2 text-sm"
                                >
                                    <mat-spinner [diameter]="32"></mat-spinner>
                                    <span>{{
                                        'DRIVERS.LOADING_SYSTEMS' | translate
                                    }}</span>
                                </div>
                            }
                            @for (
                                system of systems[row.id] || [];
                                track system.id
                            ) {
                                <a
                                    mat-menu-item
                                    class="leading-tight"
                                    [routerLink]="['/systems', system.id]"
                                >
                                    <div
                                        class="flex h-full flex-col justify-center px-2 leading-tight"
                                    >
                                        <div class="text-base">
                                            {{
                                                system.display_name ||
                                                    system.name
                                            }}
                                        </div>
                                        <div class="text-xs opacity-30">
                                            {{ system.id }}
                                        </div>
                                    </div>
                                </a>
                            }
                        </mat-menu>
                    </div>
                </ng-template>
            </section>
        </div>
    `, imports: [
      MatMenuModule,
      RouterModule,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatTooltipModule,
      SimpleTableComponent,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      IconComponent,
      RouterModule,
      BindingDirective
    ], styles: ["/* angular:styles/component:css;1a38b1fa1f84f264cfb28b0314248f73b1e027b346662f84798583f6ad76a27c;/home/runner/work/backoffice/backoffice/src/app/drivers/driver-devices.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[role=table] > div {\n  width: 100%;\n  min-width: 28rem;\n}\n/*# sourceMappingURL=driver-devices.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverModulesComponent, { className: "DriverModulesComponent", filePath: "src/app/drivers/driver-devices.component.ts", lineNumber: 207 });
})();

// src/app/drivers/driver-docs.component.ts
function DriverDocsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_string_r1 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, docs_string_r1), \u0275\u0275sanitizeHtml);
  }
}
function DriverDocsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 3);
    \u0275\u0275text(2, "comments_disabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No documentation available for this driver");
    \u0275\u0275elementEnd()();
  }
}
var DriverDocsComponent = class _DriverDocsComponent {
  _service = inject(DriverStateService);
  _router = inject(Router);
  docs = this._service.docs.pipe(map((s) => s ? d(s, { async: false }) : ""), map((_) => _.replace(/<code class="([^"]*)">\n/, '<code class="$1">')), shareReplay(1));
  async ngOnInit() {
    d.use({
      renderer: {
        code({ text, lang }) {
          const language = (lang || "").trim();
          const clean = text.replace(/^\n+/, "");
          return `<pre><code class="language-${language}">${clean}</code></pre>`;
        }
      }
    });
    const str = await nextValueFrom(this.docs);
    if (str)
      return;
    this._router.navigate([
      "/drivers",
      this._service.active_item.id,
      "about"
    ]);
  }
  static \u0275fac = function DriverDocsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverDocsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverDocsComponent, selectors: [["driver-docs"]], decls: 5, vars: 4, consts: [[1, "px-8", "py-4"], [1, "markdown", "items-start", 3, "innerHTML"], [1, "flex", "min-h-[calc(100vh-20rem)]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-xl", "bg-base-200", "opacity-30"], [1, "text-8xl"]], template: function DriverDocsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275declareLet(1);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275conditionalCreate(3, DriverDocsComponent_Conditional_3_Template, 2, 3, "div", 1)(4, DriverDocsComponent_Conditional_4_Template, 5, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      const docs_string_r2 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(2, 1, ctx.docs));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(docs_string_r2 ? 3 : 4);
    }
  }, dependencies: [CommonModule, IconComponent, AsyncPipe, SanitizePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverDocsComponent, [{
    type: Component,
    args: [{ selector: "driver-docs", template: `
        <div class="px-8 py-4">
            @let docs_string = docs | async;
            @if (docs_string) {
                <div
                    class="markdown items-start"
                    [innerHTML]="docs_string | sanitize"
                ></div>
            } @else {
                <div
                    class="flex min-h-[calc(100vh-20rem)] w-full flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 opacity-30"
                >
                    <icon class="text-8xl">comments_disabled</icon>
                    <p>No documentation available for this driver</p>
                </div>
            }
        </div>
    `, imports: [CommonModule, SanitizePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverDocsComponent, { className: "DriverDocsComponent", filePath: "src/app/drivers/driver-docs.component.ts", lineNumber: 35 });
})();

// src/app/drivers/drivers.component.ts
function DriversComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "item-details", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "item-tablist", 16);
    \u0275\u0275elementStart(3, "div", 17, 0);
    \u0275\u0275listener("scroll", function DriversComponent_Conditional_13_Template_div_scroll_3_listener() {
      \u0275\u0275restoreView(_r1);
      const el_r2 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scroll.set(el_r2.scrollTop));
    });
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("can_edit", true)("item", ctx_r2.item())("type", \u0275\u0275pipeBind1(1, 6, "DRIVERS.SINGULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("base", ctx_r2.name)("tabs", ctx_r2.tab_list())("scrolled", ctx_r2.scroll() > 0);
  }
}
function DriversComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function DriversComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showUpdateList());
    });
    \u0275\u0275elementStart(2, "icon", 12);
    \u0275\u0275text(3, "update");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "DRIVERS.UPDATE"));
  }
}
function DriversComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 13);
  }
}
function DriversComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-debug-output", 14);
  }
}
var DriversComponent = class _DriversComponent extends AsyncHandler {
  _service = inject(ActiveItemService);
  _drivers = inject(DriverStateService);
  _debug = inject(PlaceDebugService);
  name = "drivers";
  item = signal(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  scroll = signal(0, ...ngDevMode ? [{ debugName: "scroll" }] : []);
  open_menu = signal(false, ...ngDevMode ? [{ debugName: "open_menu" }] : []);
  device_count = signal(0, ...ngDevMode ? [{ debugName: "device_count" }] : []);
  tab_list = signal([], ...ngDevMode ? [{ debugName: "tab_list" }] : []);
  updates_available = this._drivers.updates_available;
  debug_position = this._debug.position;
  showUpdateList = () => this._drivers.showUpdateList();
  newItem = () => this._service.create();
  get extensions() {
    return extensionsForItem(this._service.active_item, this.name);
  }
  async updateTabList() {
    this.tab_list.set([
      {
        id: "about",
        name: i18n("DRIVERS.TAB_ABOUT"),
        icon: { content: "info" }
      },
      {
        id: "docs",
        name: i18n("DRIVERS.TAB_DOCS"),
        icon: { content: "docs" }
      },
      {
        id: "modules",
        name: i18n("DRIVERS.TAB_MODULES"),
        count: this.device_count() ?? "?",
        icon: { content: "tablet" }
      },
      {
        id: "history",
        name: i18n("DRIVERS.TAB_SETTINGS_HISTORY"),
        icon: { content: "schedule" }
      }
    ].concat(this.extensions));
    const docs = await nextValueFrom(this._drivers.docs);
    if (!docs)
      this.tab_list.update((l) => l.filter((_) => _.id !== "docs"));
  }
  ngOnInit() {
    this.subscription("item", this._service.item.subscribe((item) => {
      this.device_count.set(void 0);
      this.item.set(item);
      this.updateTabList();
      this.loadValues(item);
    }));
  }
  async loadValues(item) {
    if (!item)
      return;
    const query = { offset: 0, limit: 1, driver_id: item.id };
    this.device_count.set(await lastValueFrom(Uu(query).pipe(map(({ total }) => total))).catch((_) => 0));
    this.updateTabList();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DriversComponent_BaseFactory;
    return function DriversComponent_Factory(__ngFactoryType__) {
      return (\u0275DriversComponent_BaseFactory || (\u0275DriversComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DriversComponent)))(__ngFactoryType__ || _DriversComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriversComponent, selectors: [["new-drivers-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 18, consts: [["el", ""], [1, "absolute", "inset-0", "flex", "items-center", "divide-y", "divide-base-200", "bg-base-100", "sm:divide-x", "sm:divide-y-0"], [1, "sm:h-full", 3, "openChange", "open"], [1, "flex", "h-full", "w-px", "flex-1", "flex-col", "overflow-hidden"], [1, "flex", "h-px", "flex-1"], [1, "hidden", "sm:block", 3, "route", "title"], [1, "relative", "z-0", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "z-20", "sm:hidden", 3, "route", "title"], ["btn", "", "icon", "", 1, "mr-2", "sm:hidden", 3, "click"], [1, "flex", "h-1/2", "flex-1", "flex-col"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-16", "left-1", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-8", 3, "matTooltip"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-2", "left-2", "z-30", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-9", 3, "click", "matTooltip"], [1, "text-3xl"], ["below", ""], ["side", "", 1, "h-full", "max-w-[30rem]"], [3, "can_edit", "item", "type"], [1, "z-10", 3, "base", "tabs", "scrolled"], [1, "relative", "z-0", "h-1/2", "w-full", "flex-1", "overflow-auto", 3, "scroll"], ["matTooltipPosition", "right", "matRipple", "", 1, "absolute", "bottom-16", "left-1", "z-30", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg", "border", "border-base-200", "bg-secondary", "text-secondary-content", "shadow", "sm:-left-8", 3, "click", "matTooltip"]], template: function DriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "sidebar-menu", 2);
      \u0275\u0275twoWayListener("openChange", function DriversComponent_Template_sidebar_menu_openChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.open_menu, $event) || (ctx.open_menu = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "item-sidebar", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 6)(7, "item-selection", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function DriversComponent_Template_button_click_9_listener() {
        return ctx.open_menu.set(true);
      });
      \u0275\u0275elementStart(10, "icon");
      \u0275\u0275text(11, "menu");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275conditionalCreate(13, DriversComponent_Conditional_13_Template, 6, 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, DriversComponent_Conditional_14_Template, 4, 3, "button", 10);
      \u0275\u0275pipe(15, "async");
      \u0275\u0275elementStart(16, "button", 11);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function DriversComponent_Template_button_click_16_listener() {
        return ctx.newItem();
      });
      \u0275\u0275elementStart(18, "icon", 12);
      \u0275\u0275text(19, "add");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(20, DriversComponent_Conditional_20_Template, 1, 0, "app-debug-output", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, DriversComponent_Conditional_21_Template, 1, 0, "app-debug-output", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("open", ctx.open_menu);
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(5, 10, "DRIVERS.PLURAL"));
      \u0275\u0275advance(3);
      \u0275\u0275property("route", ctx.name)("title", \u0275\u0275pipeBind1(8, 12, "DRIVERS.PLURAL"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_5_0 = ctx.item()) == null ? null : tmp_5_0.id) ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(\u0275\u0275pipeBind1(15, 14, ctx.updates_available) ? 14 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 16, "DRIVERS.NEW"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.debug_position() === "below" ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.debug_position() === "side" ? 21 : -1);
    }
  }, dependencies: [
    CommonModule,
    DebugOutputComponent,
    IconComponent,
    MatRippleModule,
    MatRipple,
    MatTooltipModule,
    MatTooltip,
    ItemDetailsComponent,
    ItemTablistComponent,
    ItemSelectionComponent,
    ItemSidebarComponent,
    SidebarMenuComponent,
    RouterModule,
    RouterOutlet,
    AsyncPipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriversComponent, [{
    type: Component,
    args: [{ selector: "new-drivers-view", template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <item-sidebar
                        class="hidden sm:block"
                        [route]="name"
                        [title]="'DRIVERS.PLURAL' | translate"
                    ></item-sidebar>
                    <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                        <item-selection
                            class="z-20 sm:hidden"
                            [route]="name"
                            [title]="'DRIVERS.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (item()?.id) {
                                <item-details
                                    [can_edit]="true"
                                    [item]="item()"
                                    [type]="'DRIVERS.SINGULAR' | translate"
                                ></item-details>
                                <item-tablist
                                    [base]="name"
                                    [tabs]="tab_list()"
                                    [scrolled]="scroll() > 0"
                                    class="z-10"
                                ></item-tablist>
                                <div
                                    #el
                                    class="relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                    (scroll)="scroll.set(el.scrollTop)"
                                >
                                    <router-outlet></router-outlet>
                                </div>
                            }
                        </div>
                        @if (updates_available | async) {
                            <button
                                class="absolute bottom-16 left-1 z-30 flex h-10 w-10 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-8"
                                [matTooltip]="'DRIVERS.UPDATE' | translate"
                                matTooltipPosition="right"
                                matRipple
                                (click)="showUpdateList()"
                            >
                                <icon class="text-3xl">update</icon>
                            </button>
                        }
                        <button
                            class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                            [matTooltip]="'DRIVERS.NEW' | translate"
                            matTooltipPosition="right"
                            matRipple
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                    </div>
                </div>
                @if (debug_position() === 'below') {
                    <app-debug-output below></app-debug-output>
                }
            </div>
            @if (debug_position() === 'side') {
                <app-debug-output
                    side
                    class="h-full max-w-[30rem]"
                ></app-debug-output>
            }
        </div>
    `, imports: [
      CommonModule,
      DebugOutputComponent,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatTooltipModule,
      ItemDetailsComponent,
      ItemTablistComponent,
      ItemSelectionComponent,
      ItemSidebarComponent,
      SidebarMenuComponent,
      RouterModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriversComponent, { className: "DriversComponent", filePath: "src/app/drivers/drivers.component.ts", lineNumber: 126 });
})();

// src/app/drivers/drivers.module.ts
var ROUTES = [
  {
    path: ":id",
    component: DriversComponent,
    children: [
      { path: "about", component: DriverAboutComponent },
      { path: "docs", component: DriverDocsComponent },
      { path: "modules", component: DriverModulesComponent },
      { path: "extend/:id", component: ExtensionOutletComponent },
      { path: "history", component: SettingsHistoryViewComponent },
      { path: "**", redirectTo: "about" }
    ]
  },
  { path: "**", redirectTo: "-" }
];
var AppDriversModule = class _AppDriversModule {
  static \u0275fac = function AppDriversModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppDriversModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppDriversModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(ROUTES)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppDriversModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  AppDriversModule,
  ROUTES
};
//# sourceMappingURL=chunk-YB44OQPJ.js.map
