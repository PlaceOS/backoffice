import {
  DiffViewerComponent
} from "./chunk-DDSL2QAI.js";
import {
  ActiveItemService
} from "./chunk-3OAZTE3G.js";
import "./chunk-G7PKMVDI.js";
import "./chunk-RKY23HSE.js";
import "./chunk-7NDCHFOB.js";
import "./chunk-XVFVAW3Y.js";
import "./chunk-PCFI5QOQ.js";
import "./chunk-WWY5WMTY.js";
import "./chunk-JAMMTH5K.js";
import "./chunk-KJQGK2OM.js";
import "./chunk-LNIYAS5O.js";
import "./chunk-7JIOXWGJ.js";
import "./chunk-7GTI4RRT.js";
import "./chunk-BVAQ3KBJ.js";
import "./chunk-V3LOQHMH.js";
import "./chunk-I55NGSFI.js";
import "./chunk-MVHEPUBI.js";
import "./chunk-XAS7GUY2.js";
import "./chunk-SEO2LXOK.js";
import "./chunk-AHMBEMXE.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-6QZVPNC3.js";
import "./chunk-2SRIA4UK.js";
import "./chunk-X6EP7JXK.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-RYWQOUT3.js";
import "./chunk-N7YQCQZM.js";
import "./chunk-CM5KMOA2.js";
import "./chunk-BHFOE2YV.js";
import "./chunk-JKE4D5KH.js";
import "./chunk-XI4ZLZAC.js";
import "./chunk-HT5GXKXQ.js";
import "./chunk-TPDHL3PI.js";
import "./chunk-TH36Z5QV.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-J6BBXARK.js";
import "./chunk-EVUO4PXU.js";
import "./chunk-RMYYKPNF.js";
import "./chunk-ALQ3QZS6.js";
import {
  MatOption
} from "./chunk-TPBAO5IV.js";
import "./chunk-HQA27L6T.js";
import {
  TranslatePipe
} from "./chunk-ERVNLYZR.js";
import "./chunk-4HEIKSFD.js";
import "./chunk-Y2VDX4KN.js";
import "./chunk-YTRY35Y7.js";
import "./chunk-43FRBZB3.js";
import {
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3LH3QF7A.js";
import {
  Component,
  aa,
  computed,
  ia,
  inject,
  resource,
  setClassMetadata,
  signal,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LPT3PWXX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/settings-history-view.component.ts
function SettingsHistoryViewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6)(1, "div", 9)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.types[option_r1.encryption_level], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, option_r1.updated_at * 1e3, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, option_r1.updated_at * 1e3, "h:mm a"), " ");
  }
}
function SettingsHistoryViewComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6)(1, "div", 9)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.types[option_r3.encryption_level], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, option_r3.updated_at * 1e3, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, option_r3.updated_at * 1e3, "h:mm a"), " ");
  }
}
function SettingsHistoryViewComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "diff-viewer", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("modified", ctx_r1.active_setting()?.settings_string)("original", ctx_r1.old_setting()?.settings_string);
  }
}
function SettingsHistoryViewComponent_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SETTINGS_COMPARE_SELECT_MSG"), " ");
  }
}
function SettingsHistoryViewComponent_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SELECTED_FIRST_VERSION"), " ");
  }
}
function SettingsHistoryViewComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsHistoryViewComponent_Conditional_33_Conditional_0_Template, 3, 3, "div", 12)(1, SettingsHistoryViewComponent_Conditional_33_Conditional_1_Template, 3, 3, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.history()?.length ? 0 : 1);
  }
}
var SettingsHistoryViewComponent = class _SettingsHistoryViewComponent {
  _service = inject(ActiveItemService);
  active_setting = signal(
    null,
    ...ngDevMode ? [{ debugName: "active_setting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  old_setting = signal(
    null,
    ...ngDevMode ? [{ debugName: "old_setting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  types = ["UNENCRYPTED", "SUPPORT", "ADMIN", "ENCRYPTED"];
  _settings = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_settings" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this._service.item()?.id,
    loader: async ({ params: id }) => id ? (await ia({ parent_id: id })).data : []
  }));
  settings = computed(
    () => this._settings.value() || [],
    ...ngDevMode ? [{ debugName: "settings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _history = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_history" } : (
    /* istanbul ignore next */
    {}
  )), {
    params: () => this.active_setting()?.id,
    loader: async ({ params: id }) => id ? aa(id) : []
  }));
  history = computed(
    () => this._history.value() || [],
    ...ngDevMode ? [{ debugName: "history" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function SettingsHistoryViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsHistoryViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsHistoryViewComponent, selectors: [["settings-history-view"]], decls: 34, vars: 28, consts: [[1, "p-4"], [1, "flex", "items-center", "justify-between", "space-x-4"], ["appearance", "outline", 1, "h-13", "w-1/2", "max-w-lg", "flex-1"], [3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "pr-2", "text-right", "font-mono", "text-[0.625rem]", "leading-tight"], [3, "value"], [3, "ngModelChange", "ngModel", "placeholder"], [1, "w-full", "p-4"], [1, "flex", "w-full", "items-center", "justify-between", "gap-4"], [1, "text-right", "font-mono", "text-xs"], [3, "modified", "original"], [1, "w-full", "p-16", "text-center", "opacity-30"]], template: function SettingsHistoryViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-select", 3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("ngModelChange", function SettingsHistoryViewComponent_Template_mat_select_ngModelChange_3_listener($event) {
        return ctx.old_setting.set($event);
      });
      \u0275\u0275elementStart(5, "mat-select-trigger")(6, "div", 4)(7, "div");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "date");
      \u0275\u0275element(12, "br");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(15, SettingsHistoryViewComponent_For_16_Template, 10, 10, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 2)(18, "mat-select", 7);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("ngModelChange", function SettingsHistoryViewComponent_Template_mat_select_ngModelChange_18_listener($event) {
        return ctx.active_setting.set($event);
      });
      \u0275\u0275elementStart(20, "mat-select-trigger")(21, "div", 1)(22, "div");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 5);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "date");
      \u0275\u0275element(27, "br");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(30, SettingsHistoryViewComponent_For_31_Template, 10, 10, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(32, SettingsHistoryViewComponent_Conditional_32_Template, 2, 2, "div", 8)(33, SettingsHistoryViewComponent_Conditional_33_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.old_setting())("disabled", !ctx.active_setting() || !ctx.history()?.length)("placeholder", \u0275\u0275pipeBind1(4, 12, "COMMON.SELECT_OLD_SETTING"));
      \u0275\u0275control();
      const value_r4 = ctx.old_setting();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.types[value_r4?.encryption_level]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 14, value_r4?.updated_at * 1e3, "MMM d, y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 17, value_r4?.updated_at * 1e3, "h:mm a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.history());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.active_setting())("placeholder", \u0275\u0275pipeBind1(19, 20, "COMMON.SELECT_NEW_SETTING"));
      \u0275\u0275control();
      const a_value_r5 = ctx.active_setting();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.types[a_value_r5?.encryption_level], " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 22, a_value_r5?.updated_at * 1e3, "MMM d, y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(29, 25, a_value_r5?.updated_at * 1e3, "h:mm a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.settings());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.active_setting() && ctx.old_setting() ? 32 : 33);
    }
  }, dependencies: [
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
                        [ngModel]="old_setting()"
                        (ngModelChange)="old_setting.set($event)"
                        [disabled]="!active_setting() || !history()?.length"
                        [placeholder]="'COMMON.SELECT_OLD_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let value = old_setting();
                            <div
                                class="flex items-center justify-between gap-4"
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
                        @for (option of history(); track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex w-full items-center justify-between gap-4"
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
                        [ngModel]="active_setting()"
                        (ngModelChange)="active_setting.set($event)"
                        [placeholder]="'COMMON.SELECT_NEW_SETTING' | translate"
                    >
                        <mat-select-trigger>
                            @let a_value = active_setting();
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
                        @for (option of settings(); track option) {
                            <mat-option [value]="option">
                                <div
                                    class="flex w-full items-center justify-between gap-4"
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
            @if (active_setting() && old_setting()) {
                <div class="w-full p-4">
                    <diff-viewer
                        [modified]="active_setting()?.settings_string"
                        [original]="old_setting()?.settings_string"
                    />
                </div>
            } @else {
                @if (history()?.length) {
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
      DatePipe,
      TranslatePipe,
      DiffViewerComponent,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsHistoryViewComponent, { className: "SettingsHistoryViewComponent", filePath: "src/app/ui/settings-history-view.component.ts", lineNumber: 155 });
})();
export {
  SettingsHistoryViewComponent
};
//# sourceMappingURL=chunk-RKEI2IFJ.js.map
