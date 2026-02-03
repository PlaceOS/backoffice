import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AYXNAT23.js";
import {
  MatDialogClose,
  MatDialogModule
} from "./chunk-MNFEZLRO.js";
import {
  IconComponent
} from "./chunk-WIN2774F.js";
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
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TUZQ7R7Y.js";

// src/app/ui/fullscreen-modal-shell.component.ts
var _c0 = ["*"];
function FullscreenModalShellComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FullscreenModalShellComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "S");
    \u0275\u0275elementEnd();
  }
}
function FullscreenModalShellComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 8)(1, "button", 9);
    \u0275\u0275listener("click", function FullscreenModalShellComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save.emit());
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 11);
    \u0275\u0275conditionalCreate(7, FullscreenModalShellComponent_Conditional_9_Conditional_7_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirm_text() || \u0275\u0275pipeBind1(5, 2, "COMMON.SAVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.confirm_text() ? 7 : -1);
  }
}
function FullscreenModalShellComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
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
var FullscreenModalShellComponent = class _FullscreenModalShellComponent {
  loading = input("", ...ngDevMode ? [{ debugName: "loading" }] : []);
  heading = input("Fullscreen Modal", ...ngDevMode ? [{ debugName: "heading" }] : []);
  confirm_text = input("", ...ngDevMode ? [{ debugName: "confirm_text" }] : []);
  hide_confirm = input(false, ...ngDevMode ? [{ debugName: "hide_confirm" }] : []);
  save = output();
  static \u0275fac = function FullscreenModalShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FullscreenModalShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenModalShellComponent, selectors: [["fullscreen-modal-shell"], ["", "fs-modal-shell", ""]], inputs: { loading: [1, "loading"], heading: [1, "heading"], confirm_text: [1, "confirm_text"], hide_confirm: [1, "hide_confirm"] }, outputs: { save: "save" }, ngContentSelectors: _c0, decls: 12, vars: 3, consts: [["load_state", ""], [1, "bg-base-200", "flex", "h-screen", "w-screen", "flex-col", "items-center", "overflow-auto"], [1, "border-base-300", "bg-base-100", "fixed", "top-0", "mx-auto", "h-screen", "w-160", "max-w-full", "border-x"], [1, "border-base-100", "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-156", "max-w-full", "items-center", "justify-between", "rounded-sm", "border", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "z-0", "mx-auto", "h-1/2", "w-156", "max-w-full", "flex-1", "space-y-8", "p-2"], [1, "h-10", "w-full"], [1, "border-base-100", "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-156", "max-w-full", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", "pr-0", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex-1"], [1, "keycap"], [1, "flex", "h-1/2", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "p-12"], [3, "diameter"], [1, "text-center"]], template: function FullscreenModalShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "div", 2);
      \u0275\u0275elementStart(2, "header", 3)(3, "h2", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, FullscreenModalShellComponent_Conditional_5_Template, 3, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "main", 6);
      \u0275\u0275projection(7);
      \u0275\u0275element(8, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, FullscreenModalShellComponent_Conditional_9_Template, 8, 4, "footer", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, FullscreenModalShellComponent_ng_template_10_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.heading(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading() && !ctx.hide_confirm() ? 9 : -1);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
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
                <h2 class="text-xl font-medium">
                    {{ heading() }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-156 max-w-full flex-1 space-y-8 p-2"
            >
                <ng-content></ng-content>
                <div class="h-10 w-full"></div>
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="border-base-100 bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-156 max-w-full -translate-x-1/2 items-center justify-end rounded-sm border px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32 pr-0"
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
        </div>
        <ng-template #load_state>
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center justify-center p-12"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center">{{ loading() }}</p>
            </div>
        </ng-template>
    `,
      imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule
      ]
    }]
  }], null, { loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false }] }], confirm_text: [{ type: Input, args: [{ isSignal: true, alias: "confirm_text", required: false }] }], hide_confirm: [{ type: Input, args: [{ isSignal: true, alias: "hide_confirm", required: false }] }], save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenModalShellComponent, { className: "FullscreenModalShellComponent", filePath: "src/app/ui/fullscreen-modal-shell.component.ts", lineNumber: 78 });
})();

export {
  FullscreenModalShellComponent
};
//# sourceMappingURL=chunk-HVEA2SCZ.js.map
