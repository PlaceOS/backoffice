import {
  DiffViewerComponent
} from "./chunk-QZXMIA43.js";
import {
  ActiveItemService
} from "./chunk-QQIT5AXK.js";
import "./chunk-J533RESC.js";
import "./chunk-JK6QMDKK.js";
import "./chunk-5M3JBGAG.js";
import "./chunk-CUWQT2GL.js";
import "./chunk-CSI5PWUO.js";
import "./chunk-AE4ZXYXF.js";
import "./chunk-OG2MHJQA.js";
import "./chunk-35SVQSIJ.js";
import "./chunk-W2PUTAUI.js";
import "./chunk-HLQUVQDG.js";
import "./chunk-4ALOESAF.js";
import "./chunk-5DDHIM3Z.js";
import "./chunk-4QMCQ5KK.js";
import "./chunk-TZHB3H2C.js";
import "./chunk-5YKIVDAT.js";
import "./chunk-SW42XPF4.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-4ODMIZ7O.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-OXGNLB63.js";
import "./chunk-YIBSFQXI.js";
import "./chunk-3DWKKPWQ.js";
import "./chunk-HL4CJJK6.js";
import "./chunk-QS2ZRKNC.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import "./chunk-Y4JFOSQS.js";
import "./chunk-ITU7FLKB.js";
import "./chunk-KNPBCUJZ.js";
import "./chunk-263IF76L.js";
import "./chunk-4IZH7QGG.js";
import "./chunk-QXQNKIRF.js";
import "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import {
  MatOption
} from "./chunk-6CBQWDU5.js";
import {
  TranslatePipe
} from "./chunk-EU4TWCRF.js";
import "./chunk-TALE6FQV.js";
import "./chunk-TEK5TAH3.js";
import {
  Component,
  DatePipe,
  DestroyRef,
  FormsModule,
  Injector,
  NgControlStatus,
  NgModel,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
} from "./chunk-QMACIC7N.js";
import {
  Jc,
  ReplaySubject,
  debounceTime,
  map,
  of,
  switchMap,
  ta
} from "./chunk-T6SXWR5P.js";
import "./chunk-VYXW4D3Z.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toObservable(source, options) {
  if (ngDevMode && !options?.injector) {
    assertInInjectionContext(toObservable);
  }
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, { injector, manualCleanup: true });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, { equal });
  } else {
    state = signal({ kind: 1, value: options?.initialValue }, { equal });
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({ kind: 1, value }),
    error: (error) => {
      state.set({ kind: 2, error });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, { equal: options?.equal });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

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
function SettingsHistoryViewComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "diff-viewer", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("modified", (tmp_3_0 = ctx_r2.active_setting()) == null ? null : tmp_3_0.settings_string)("original", (tmp_4_0 = ctx_r2.old_setting()) == null ? null : tmp_4_0.settings_string);
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
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r2.history()) == null ? null : tmp_3_0.length) ? 0 : 1);
  }
}
var SettingsHistoryViewComponent = class _SettingsHistoryViewComponent {
  _service = inject(ActiveItemService);
  active_setting = signal(null, ...ngDevMode ? [{ debugName: "active_setting" }] : []);
  old_setting = signal(null, ...ngDevMode ? [{ debugName: "old_setting" }] : []);
  types = ["UNENCRYPTED", "SUPPORT", "ADMIN", "ENCRYPTED"];
  settings = toSignal(this._service.item.pipe(switchMap((i) => !i ? of({ data: [] }) : Jc({ parent_id: i.id })), map((_) => _.data)), { initialValue: [] });
  history = toSignal(toObservable(this.active_setting).pipe(debounceTime(300), switchMap((_) => !_ ? of([]) : ta(_.id))), { initialValue: [] });
  static \u0275fac = function SettingsHistoryViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsHistoryViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsHistoryViewComponent, selectors: [["settings-history-view"]], decls: 34, vars: 28, consts: [[1, "p-4"], [1, "flex", "items-center", "justify-between", "space-x-4"], ["appearance", "outline", 1, "h-13", "w-1/2", "max-w-lg", "flex-1"], [3, "ngModelChange", "ngModel", "disabled", "placeholder"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "pr-2", "text-right", "font-mono", "text-[0.625rem]", "leading-tight"], [3, "value"], [3, "ngModelChange", "ngModel", "placeholder"], [1, "w-full", "p-4"], [1, "flex", "w-full", "items-center", "justify-between", "gap-4"], [1, "text-right", "font-mono", "text-xs"], [3, "modified", "original"], [1, "w-full", "p-16", "text-center", "opacity-30"]], template: function SettingsHistoryViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-select", 3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("ngModelChange", function SettingsHistoryViewComponent_Template_mat_select_ngModelChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.old_setting.set($event));
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
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-form-field", 2)(18, "mat-select", 7);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("ngModelChange", function SettingsHistoryViewComponent_Template_mat_select_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.active_setting.set($event));
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
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(32, SettingsHistoryViewComponent_Conditional_32_Template, 2, 2, "div", 8)(33, SettingsHistoryViewComponent_Conditional_33_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.old_setting())("disabled", !ctx.active_setting() || !((tmp_1_0 = ctx.history()) == null ? null : tmp_1_0.length))("placeholder", \u0275\u0275pipeBind1(4, 12, "COMMON.SELECT_OLD_SETTING"));
      const value_r5 = ctx.old_setting();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.types[value_r5 == null ? null : value_r5.encryption_level]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 14, (value_r5 == null ? null : value_r5.updated_at) * 1e3, "MMM d, y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 17, (value_r5 == null ? null : value_r5.updated_at) * 1e3, "h:mm a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.history());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.active_setting())("placeholder", \u0275\u0275pipeBind1(19, 20, "COMMON.SELECT_NEW_SETTING"));
      const a_value_r6 = ctx.active_setting();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.types[a_value_r6 == null ? null : a_value_r6.encryption_level], " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 22, (a_value_r6 == null ? null : a_value_r6.updated_at) * 1e3, "MMM d, y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(29, 25, (a_value_r6 == null ? null : a_value_r6.updated_at) * 1e3, "h:mm a"), " ");
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
                    ></diff-viewer>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsHistoryViewComponent, { className: "SettingsHistoryViewComponent", filePath: "src/app/ui/settings-history-view.component.ts", lineNumber: 158 });
})();
export {
  SettingsHistoryViewComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.12
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-SAVMHXPC.js.map
