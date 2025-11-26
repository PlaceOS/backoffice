import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EWUI732O.js";
import {
  IconComponent,
  MatRipple,
  MatRippleModule
} from "./chunk-L3UICUJN.js";
import {
  TranslatePipe
} from "./chunk-V3NTFP3B.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  Vu,
  catchError,
  inject,
  of,
  qu,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ZKZAJWA3.js";

// src/app/ui/module-runtime-errors.modal.ts
function ModuleRuntimeErrorsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r0.errors)) == null ? null : tmp_2_0.join(" "), " ");
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.RUNTIME_ERRORS_NO"), " ");
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, ModuleRuntimeErrorsModalComponent_Conditional_7_Conditional_1_Template, 3, 3, "code");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalBranchCreate(3, ModuleRuntimeErrorsModalComponent_Conditional_7_Conditional_3_Template, 3, 3, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(2, 1, ctx_r0.errors)) == null ? null : tmp_1_0.length) ? 1 : 3);
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "MODULES.RUNTIME_ERRORS_LOADING"), " ");
  }
}
var ModuleRuntimeErrorsModalComponent = class _ModuleRuntimeErrorsModalComponent extends AsyncHandler {
  _module_id = inject(MAT_DIALOG_DATA);
  loading = false;
  id = new BehaviorSubject("");
  module = this.id.pipe(switchMap((id) => {
    this.loading = true;
    return qu(id);
  }), shareReplay(1));
  errors = this.module.pipe(switchMap(({ id }) => Vu(id).pipe(catchError(() => of([])))), tap(() => this.loading = false), shareReplay(1));
  ngOnInit() {
    this.id.next(this._module_id);
    this.subscription("errors", this.errors.subscribe());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ModuleRuntimeErrorsModalComponent_BaseFactory;
    return function ModuleRuntimeErrorsModalComponent_Factory(__ngFactoryType__) {
      return (\u0275ModuleRuntimeErrorsModalComponent_BaseFactory || (\u0275ModuleRuntimeErrorsModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ModuleRuntimeErrorsModalComponent)))(__ngFactoryType__ || _ModuleRuntimeErrorsModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleRuntimeErrorsModalComponent, selectors: [["module-runtime-errors-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 10, consts: [[1, "h-14"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-auto", "p-4"], [1, "flex", "h-64", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "flex", "h-64", "w-[24rem]", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], ["diameter", "32"], [1, "opacity-30"]], template: function ModuleRuntimeErrorsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "async");
      \u0275\u0275pipe(5, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ModuleRuntimeErrorsModalComponent_Conditional_6_Template, 3, 0, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, ModuleRuntimeErrorsModalComponent_Conditional_7_Template, 4, 3, "main", 3)(8, ModuleRuntimeErrorsModalComponent_Conditional_8_Template, 5, 3, "main", 4);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 4, "MODULES.RUNTIME_ERRORS_VIEW"), " - ", ((tmp_0_0 = \u0275\u0275pipeBind1(4, 6, ctx.module)) == null ? null : tmp_0_0.custom_name) || ((tmp_0_0 = \u0275\u0275pipeBind1(5, 8, ctx.module)) == null ? null : tmp_0_0.name), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 7 : 8);
    }
  }, dependencies: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    AsyncPipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleRuntimeErrorsModalComponent, [{
    type: Component,
    args: [{ selector: "module-runtime-errors-modal", template: `
        <header class="h-14">
            <h3 class="px-2">
                {{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }} -
                {{ (module | async)?.custom_name || (module | async)?.name }}
            </h3>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="max-h-[65vh] overflow-auto p-4">
                @if ((errors | async)?.length) {
                    <code>
                        {{
                            (errors | async)?.join(
                                '
                '
                            )
                        }}
                    </code>
                } @else {
                    <div
                        class="flex h-64 w-[24rem] flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        {{ 'MODULES.RUNTIME_ERRORS_NO' | translate }}
                    </div>
                }
            </main>
        } @else {
            <main
                class="flex h-64 w-[24rem] flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="opacity-30">
                    {{ 'MODULES.RUNTIME_ERRORS_LOADING' | translate }}
                </div>
            </main>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent,
      MatDialogModule,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleRuntimeErrorsModalComponent, { className: "ModuleRuntimeErrorsModalComponent", filePath: "src/app/ui/module-runtime-errors.modal.ts", lineNumber: 67 });
})();

export {
  ModuleRuntimeErrorsModalComponent
};
//# sourceMappingURL=chunk-WHS64WNZ.js.map
