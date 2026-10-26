import {
  takeUntilDestroyed
} from "./chunk-ZFPYWTFN.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  openConfirmModal
} from "./chunk-PHIAGKW7.js";
import {
  DialogTitleDirective
} from "./chunk-XQFILG7P.js";
import {
  LoadingLabelDirective
} from "./chunk-I3T2QIIC.js";
import {
  MatDialog,
  MatDialogRef
} from "./chunk-ZQLZS64A.js";
import {
  TranslatePipe
} from "./chunk-54SNORV3.js";
import {
  i18n
} from "./chunk-ANULHLOS.js";
import {
  IconComponent
} from "./chunk-NZZPTKBS.js";
import {
  MatRippleModule
} from "./chunk-PQUI6ASX.js";
import {
  MatRipple
} from "./chunk-OEQM55HS.js";
import {
  Component,
  DestroyRef,
  ElementRef,
  Input,
  Output,
  filter,
  inject,
  input,
  merge,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TCVU4336.js";

// src/app/ui/fullscreen-modal-shell.component.ts
var _c0 = ["*"];
function FullscreenModalShellComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FullscreenModalShellComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
  }
}
function FullscreenModalShellComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function FullscreenModalShellComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "S");
    \u0275\u0275elementEnd();
  }
}
function FullscreenModalShellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 7)(1, "button", 10);
    \u0275\u0275listener("click", function FullscreenModalShellComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save.emit());
    });
    \u0275\u0275elementStart(2, "div", 11)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 12);
    \u0275\u0275conditionalCreate(7, FullscreenModalShellComponent_Conditional_9_Conditional_7_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disable_confirm());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirm_text() || \u0275\u0275pipeBind1(5, 3, "COMMON.SAVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.confirm_text() ? 7 : -1);
  }
}
function FullscreenModalShellComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "p", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading());
  }
}
var EDIT_EVENTS = ["input", "change", "click", "keydown"];
var NAVIGATION_KEYS = /* @__PURE__ */ new Set([
  "Tab",
  "Escape",
  "Shift",
  "Control",
  "Alt",
  "Meta"
]);
var FullscreenModalShellComponent = class _FullscreenModalShellComponent {
  _dialog_ref = inject(MatDialogRef, { optional: true });
  _dialog = inject(MatDialog);
  _confirming = false;
  /** Set once the user edits a field, so closing asks before it drops them */
  touched = false;
  /**
   * Whether a form event may have changed a value. Selects, chips and +/-
   * counters change values without input events, so clicks on buttons or
   * selects and non-navigation keys count as edits too.
   */
  _isEdit(event) {
    const target = event.target;
    if (!target?.closest?.("main"))
      return false;
    if (event instanceof KeyboardEvent) {
      return !NAVIGATION_KEYS.has(event.key);
    }
    if (event.type === "click") {
      return !!target.closest('button, [role="combobox"]');
    }
    return true;
  }
  /** Text shown over the form while it saves. Closing is blocked meanwhile */
  loading = input(
    "",
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  heading = input(
    "Fullscreen Modal",
    ...ngDevMode ? [{ debugName: "heading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirm_text = input(
    "",
    ...ngDevMode ? [{ debugName: "confirm_text" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hide_confirm = input(
    false,
    ...ngDevMode ? [{ debugName: "hide_confirm" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Disable the save button, e.g. until required choices are made */
  disable_confirm = input(
    false,
    ...ngDevMode ? [{ debugName: "disable_confirm" }] : (
      /* istanbul ignore next */
      []
    )
  );
  save = output();
  constructor() {
    const host = inject(ElementRef).nativeElement;
    const mark = (event) => {
      if (this._isEdit(event))
        this.touched = true;
    };
    for (const type of EDIT_EVENTS) {
      host.addEventListener(type, mark, true);
    }
    inject(DestroyRef).onDestroy(() => {
      for (const type of EDIT_EVENTS) {
        host.removeEventListener(type, mark, true);
      }
    });
    const ref = this._dialog_ref;
    if (!ref)
      return;
    ref.disableClose = true;
    merge(ref.backdropClick(), ref.keydownEvents().pipe(filter((e) => e.key === "Escape"))).pipe(takeUntilDestroyed()).subscribe(() => this.close());
  }
  /** Close the modal, asking first if there are unsaved changes */
  async close() {
    if (!this._dialog_ref || this.loading() || this._confirming)
      return;
    if (this.touched) {
      this._confirming = true;
      const details = await openConfirmModal({
        title: i18n("COMMON.DISCARD_CHANGES"),
        content: i18n("COMMON.DISCARD_CHANGES_MSG"),
        icon: { type: "icon", content: "edit_off" },
        confirm_text: i18n("COMMON.DISCARD")
      }, this._dialog);
      this._confirming = false;
      if (details.reason !== "done")
        return;
      details.close();
    }
    this._dialog_ref.close();
  }
  static \u0275fac = function FullscreenModalShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FullscreenModalShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenModalShellComponent, selectors: [["fullscreen-modal-shell"], ["", "fs-modal-shell", ""]], inputs: { loading: [1, "loading"], heading: [1, "heading"], confirm_text: [1, "confirm_text"], hide_confirm: [1, "hide_confirm"], disable_confirm: [1, "disable_confirm"] }, outputs: { save: "save" }, ngContentSelectors: _c0, decls: 11, vars: 5, consts: [[1, "bg-base-200", "flex", "h-screen", "w-screen", "flex-col", "items-center", "overflow-auto"], [1, "border-base-300", "bg-base-100", "fixed", "top-0", "mx-auto", "h-screen", "w-160", "max-w-full", "border-x"], [1, "border-base-100", "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-156", "max-w-full", "items-center", "justify-between", "rounded-sm", "border", "px-4", "py-2"], ["appDialogTitle", "", 1, "text-xl", "font-medium"], ["icon", "", "matRipple", ""], [1, "z-0", "mx-auto", "flex", "min-h-1/2", "w-156", "max-w-full", "flex-1", "flex-col", "p-2"], [1, "min-h-16", "w-full"], [1, "border-base-100", "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-156", "max-w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border", "px-4", "py-2"], [1, "bg-base-100/80", "fixed", "inset-0", "z-20", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-12"], ["icon", "", "matRipple", "", 3, "click"], ["btn", "", "matRipple", "", 1, "w-32", "pr-0", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], [1, "keycap"], [3, "diameter"], [1, "text-center"]], template: function FullscreenModalShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "header", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, FullscreenModalShellComponent_Conditional_5_Template, 4, 3, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "main", 5);
      \u0275\u0275projection(7);
      \u0275\u0275conditionalCreate(8, FullscreenModalShellComponent_Conditional_8_Template, 1, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, FullscreenModalShellComponent_Conditional_9_Template, 8, 5, "footer", 7);
      \u0275\u0275conditionalCreate(10, FullscreenModalShellComponent_Conditional_10_Template, 4, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.heading(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.loading() && !ctx.hide_confirm() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.hide_confirm() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
    }
  }, dependencies: [
    LoadingLabelDirective,
    DialogTitleDirective,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    MatRippleModule,
    MatRipple,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenModalShellComponent, [{
    type: Component,
    args: [{
      selector: "fullscreen-modal-shell,[fs-modal-shell]",
      template: `
        <div
            class="bg-base-200 flex h-screen w-screen flex-col items-center overflow-auto"
        >
            <div
                class="border-base-300 bg-base-100 fixed top-0 mx-auto h-screen w-160 max-w-full border-x"
            ></div>
            <header
                class="border-base-100 bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-156 max-w-full items-center justify-between rounded-sm border px-4 py-2"
            >
                <h2 appDialogTitle class="text-xl font-medium">
                    {{ heading() }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        matRipple
                        [attr.aria-label]="'COMMON.CLOSE' | translate"
                        (click)="close()"
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            <main
                class="z-0 mx-auto flex min-h-1/2 w-156 max-w-full flex-1 flex-col p-2"
            >
                <ng-content />
                @if (!loading() && !hide_confirm()) {
                    <div class="min-h-16 w-full"></div>
                }
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="border-base-100 bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-156 max-w-full -translate-x-1/2 items-center justify-end rounded-sm border px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32 pr-0"
                        [disabled]="disable_confirm()"
                        (click)="save.emit()"
                    >
                        <div class="flex items-center space-x-2">
                            <div>
                                {{
                                    confirm_text() ||
                                        ('COMMON.SAVE' | translate)
                                }}
                            </div>
                            <div class="flex-1"></div>
                            @if (!confirm_text()) {
                                <div class="keycap">S</div>
                            }
                        </div>
                    </button>
                </footer>
            }
            @if (loading()) {
                <div
                    class="bg-base-100/80 fixed inset-0 z-20 flex flex-col items-center justify-center space-y-2 p-12"
                >
                    <mat-spinner [diameter]="32" />
                    <p class="text-center">{{ loading() }}</p>
                </div>
            }
        </div>
    `,
      imports: [
        LoadingLabelDirective,
        DialogTitleDirective,
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule
      ]
    }]
  }], () => [], { loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false }] }], confirm_text: [{ type: Input, args: [{ isSignal: true, alias: "confirm_text", required: false }] }], hide_confirm: [{ type: Input, args: [{ isSignal: true, alias: "hide_confirm", required: false }] }], disable_confirm: [{ type: Input, args: [{ isSignal: true, alias: "disable_confirm", required: false }] }], save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenModalShellComponent, { className: "FullscreenModalShellComponent", filePath: "src/app/ui/fullscreen-modal-shell.component.ts", lineNumber: 112 });
})();

export {
  FullscreenModalShellComponent
};
//# debugId=02999d9d-0110-52a1-8314-bff6e90112cf
//# sourceMappingURL=chunk-7SYIMFIR.js.map
