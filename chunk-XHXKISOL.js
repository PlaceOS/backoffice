import {
  DiffViewerComponent
} from "./chunk-IFKWMNPV.js";
import {
  ActiveItemService
} from "./chunk-IXLLVOM5.js";
import "./chunk-T5CBAHJS.js";
import "./chunk-J533RESC.js";
import "./chunk-EPSJ7BWT.js";
import "./chunk-UTQB3OKR.js";
import "./chunk-EJIIP22G.js";
import "./chunk-C7BMCHRG.js";
import "./chunk-OTJUA22E.js";
import "./chunk-XZLJQL74.js";
import "./chunk-UAQR3B5P.js";
import "./chunk-JCVHEY5H.js";
import "./chunk-VPDNCESF.js";
import "./chunk-B3GJUXQI.js";
import "./chunk-G652KOVV.js";
import "./chunk-Z7NA6H3I.js";
import "./chunk-DXEXLE3X.js";
import "./chunk-DPN7JUQC.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-LGSLM77D.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-6ATATSUD.js";
import "./chunk-HUPL3SA6.js";
import "./chunk-ZN4X52CQ.js";
import "./chunk-73F5SGZH.js";
import "./chunk-FKF5TFUM.js";
import "./chunk-W3LP6CHX.js";
import "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-H3NFP65B.js";
import "./chunk-ALEPO5ZJ.js";
import "./chunk-VGLA4YGG.js";
import "./chunk-EGRPP66T.js";
import "./chunk-XRZ4NHWV.js";
import "./chunk-OD44YKN7.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-SU4H5GJ6.js";
import {
  MatOption
} from "./chunk-RXOUTXM3.js";
import {
  TranslatePipe
} from "./chunk-XGWC243Z.js";
import "./chunk-5Y26MRIB.js";
import "./chunk-26CSHF2R.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-AJKLM77M.js";
import {
  BehaviorSubject,
  Wc,
  Yc,
  map,
  of,
  shareReplay,
  switchMap
} from "./chunk-ESVM3M45.js";
import "./chunk-VYXW4D3Z.js";

// src/app/ui/settings-history-view.component.ts
function SettingsHistoryViewComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 1)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.types[option_r2.encryption_level], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, option_r2.updated_at * 1e3, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, option_r2.updated_at * 1e3, "h:mm a"), " ");
  }
}
function SettingsHistoryViewComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 1)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.types[option_r4.encryption_level], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, option_r4.updated_at * 1e3, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, option_r4.updated_at * 1e3, "h:mm a"), " ");
  }
}
function SettingsHistoryViewComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "diff-viewer", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("modified", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.active_setting)) == null ? null : tmp_3_0.settings_string)("original", (tmp_4_0 = \u0275\u0275pipeBind1(3, 4, ctx_r2.old_setting)) == null ? null : tmp_4_0.settings_string);
  }
}
function SettingsHistoryViewComponent_Conditional_39_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SETTINGS_COMPARE_SELECT_MSG"), " ");
  }
}
function SettingsHistoryViewComponent_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SELECTED_FIRST_VERSION"), " ");
  }
}
function SettingsHistoryViewComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsHistoryViewComponent_Conditional_39_Conditional_0_Template, 3, 3, "div", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, SettingsHistoryViewComponent_Conditional_39_Conditional_2_Template, 3, 3, "div", 10);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.history$)) == null ? null : tmp_3_0.length) ? 0 : 2);
  }
}
var SettingsHistoryViewComponent = class _SettingsHistoryViewComponent {
  _service = inject(ActiveItemService);
  active_setting = new BehaviorSubject(null);
  old_setting = new BehaviorSubject(null);
  types = ["UNENCRYPTED", "SUPPORT", "ADMIN", "ENCRYPTED"];
  settings$ = this._service.item.pipe(switchMap((i) => !i ? of({ data: [] }) : Wc({ parent_id: i.id })), map((_) => _.data), shareReplay(1));
  history$ = this.active_setting.pipe(switchMap((_) => !_ ? of([]) : Yc(_.id)));
  static \u0275fac = function SettingsHistoryViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsHistoryViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsHistoryViewComponent, selectors: [["settings-history-view"]], decls: 40, vars: 38, consts: [[1, "p-4"], [1, "flex", "items-center", "justify-between", "space-x-4"], ["appearance", "outline", 1, "h-13", "w-1/2", "max-w-lg", "flex-1"], ["ngModel", "", 3, "ngModelChange", "disabled", "placeholder"], [1, "pr-2", "text-right", "font-mono", "text-[0.625rem]", "leading-tight"], [3, "value"], ["ngModel", "", 3, "ngModelChange", "placeholder"], [1, "w-full", "p-4"], [1, "text-right", "font-mono", "text-xs"], [3, "modified", "original"], [1, "w-full", "p-16", "text-center", "opacity-30"]], template: function SettingsHistoryViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-select", 3);
      \u0275\u0275pipe(4, "async");
      \u0275\u0275pipe(5, "async");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275listener("ngModelChange", function SettingsHistoryViewComponent_Template_mat_select_ngModelChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.old_setting.next($event));
      });
      \u0275\u0275elementStart(7, "mat-select-trigger")(8, "div", 1)(9, "div");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "date");
      \u0275\u0275element(14, "br");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(17, SettingsHistoryViewComponent_For_18_Template, 10, 10, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(19, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "mat-form-field", 2)(21, "mat-select", 6);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275listener("ngModelChange", function SettingsHistoryViewComponent_Template_mat_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.active_setting.next($event));
      });
      \u0275\u0275elementStart(23, "mat-select-trigger")(24, "div", 1)(25, "div");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 4);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "date");
      \u0275\u0275element(30, "br");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(33, SettingsHistoryViewComponent_For_34_Template, 10, 10, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275pipe(35, "async");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(36, SettingsHistoryViewComponent_Conditional_36_Template, 4, 6, "div", 7);
      \u0275\u0275pipe(37, "async");
      \u0275\u0275pipe(38, "async");
      \u0275\u0275conditionalBranchCreate(39, SettingsHistoryViewComponent_Conditional_39_Template, 3, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", \u0275\u0275pipeBind1(4, 10, ctx.active_setting) !== void 0 || !((tmp_0_0 = \u0275\u0275pipeBind1(5, 12, ctx.history$)) == null ? null : tmp_0_0.length))("placeholder", \u0275\u0275pipeBind1(6, 14, "COMMON.SELECT_OLD_SETTING"));
      const value_r5 = ctx.old_setting.getValue();
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.types[value_r5 == null ? null : value_r5.encryption_level]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 16, (value_r5 == null ? null : value_r5.updated_at) * 1e3, "MMM d, y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 19, (value_r5 == null ? null : value_r5.updated_at) * 1e3, "h:mm a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 22, ctx.history$));
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 24, "COMMON.SELECT_NEW_SETTING"));
      const a_value_r6 = ctx.active_setting.getValue();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.types[a_value_r6 == null ? null : a_value_r6.encryption_level], " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 26, (a_value_r6 == null ? null : a_value_r6.updated_at) * 1e3, "MMM d, y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(32, 29, (a_value_r6 == null ? null : a_value_r6.updated_at) * 1e3, "h:mm a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pipeBind1(35, 32, ctx.settings$));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(37, 34, ctx.active_setting) && \u0275\u0275pipeBind1(38, 36, ctx.old_setting) ? 36 : 39);
    }
  }, dependencies: [
    CommonModule,
    DiffViewerComponent,
    MatFormFieldModule,
    MatFormField,
    MatSelectModule,
    MatSelect,
    MatSelectTrigger,
    MatOption,
    FormsModule,
    NgControlStatus,
    NgModel,
    AsyncPipe,
    DatePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsHistoryViewComponent, [{
    type: Component,
    args: [{ selector: "settings-history-view", template: `
        <div class="p-4">
            <div class="flex items-center justify-between space-x-4">
                <mat-form-field
                    appearance="outline"
                    class="h-13 w-1/2 max-w-lg flex-1"
                >
                    <mat-select
                        ngModel
                        (ngModelChange)="old_setting.next($event)"
                        [disabled]="
                            (active_setting | async) !== undefined ||
                            !(history$ | async)?.length
                        "
                        [placeholder]="'COMMON.SELECT_OLD_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let value = old_setting.getValue();
                            <div
                                class="flex items-center justify-between space-x-4"
                            >
                                <div>{{ types[value?.encryption_level] }}</div>
                                <div
                                    class="pr-2 text-right font-mono text-[0.625rem] leading-tight"
                                >
                                    {{
                                        value?.updated_at * 1000
                                            | date: 'MMM d, y'
                                    }}<br />{{
                                        value?.updated_at * 1000
                                            | date: 'h:mm a'
                                    }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of history$ | async; track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex items-center justify-between space-x-4"
                                >
                                    <div>
                                        {{ types[option.encryption_level] }}
                                    </div>
                                    <div class="text-right font-mono text-xs">
                                        {{
                                            option.updated_at * 1000
                                                | date: 'MMM d, y'
                                        }}<br />{{
                                            option.updated_at * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                <mat-form-field
                    appearance="outline"
                    class="h-13 w-1/2 max-w-lg flex-1"
                >
                    <mat-select
                        ngModel
                        (ngModelChange)="active_setting.next($event)"
                        [placeholder]="'COMMON.SELECT_NEW_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let a_value = active_setting.getValue();
                            <div
                                class="flex items-center justify-between space-x-4"
                            >
                                <div>
                                    {{ types[a_value?.encryption_level] }}
                                </div>
                                <div
                                    class="pr-2 text-right font-mono text-[0.625rem] leading-tight"
                                >
                                    {{
                                        a_value?.updated_at * 1000
                                            | date: 'MMM d, y'
                                    }}<br />{{
                                        a_value?.updated_at * 1000
                                            | date: 'h:mm a'
                                    }}
                                </div>
                            </div>
                        </mat-select-trigger>
                        @for (option of settings$ | async; track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex items-center justify-between space-x-4"
                                >
                                    <div>
                                        {{ types[option.encryption_level] }}
                                    </div>
                                    <div class="text-right font-mono text-xs">
                                        {{
                                            option.updated_at * 1000
                                                | date: 'MMM d, y'
                                        }}<br />{{
                                            option.updated_at * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if ((active_setting | async) && (old_setting | async)) {
                <div class="w-full p-4">
                    <diff-viewer
                        [modified]="(active_setting | async)?.settings_string"
                        [original]="(old_setting | async)?.settings_string"
                    ></diff-viewer>
                </div>
            } @else {
                @if ((history$ | async)?.length) {
                    <div class="w-full p-16 text-center opacity-30">
                        {{ 'COMMON.SETTINGS_COMPARE_SELECT_MSG' | translate }}
                    </div>
                } @else {
                    <div class="w-full p-16 text-center opacity-30">
                        {{ 'COMMON.SELECTED_FIRST_VERSION' | translate }}
                    </div>
                }
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      DiffViewerComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsHistoryViewComponent, { className: "SettingsHistoryViewComponent", filePath: "src/app/ui/settings-history-view.component.ts", lineNumber: 160 });
})();
export {
  SettingsHistoryViewComponent
};
//# sourceMappingURL=chunk-XHXKISOL.js.map
