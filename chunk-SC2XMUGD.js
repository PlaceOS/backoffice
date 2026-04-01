import {
  SettingsFieldComponent
} from "./chunk-XOMGVKTV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IV4O2CJ5.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-WIRQ5XQH.js";
import {
  IconComponent
} from "./chunk-3SG4KASH.js";
import {
  MatRippleModule
} from "./chunk-BXUDL7Q7.js";
import {
  TranslatePipe
} from "./chunk-S7TGCPIQ.js";
import {
  MatRipple
} from "./chunk-ECV3GDTS.js";
import {
  Component,
  FormsModule,
  NgControlStatus,
  NgModel,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMUOHSRV.js";
import {
  fc,
  firstValueFrom,
  kc
} from "./chunk-U265RLGW.js";

// src/app/ui/module-runtime-errors-modal.component.ts
function ModuleRuntimeErrorsModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-form-field", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r0.formatted_errors())("readonly", true);
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "MODULES.RUNTIME_ERRORS_NO"), " ");
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275conditionalCreate(1, ModuleRuntimeErrorsModalComponent_Conditional_8_Conditional_1_Template, 1, 2, "settings-form-field", 6)(2, ModuleRuntimeErrorsModalComponent_Conditional_8_Conditional_2_Template, 3, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errors().length ? 1 : 2);
  }
}
function ModuleRuntimeErrorsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "MODULES.RUNTIME_ERRORS_LOADING"), " ");
  }
}
var ModuleRuntimeErrorsModalComponent = class _ModuleRuntimeErrorsModalComponent {
  _module_id = inject(MAT_DIALOG_DATA);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  module = signal(null, ...ngDevMode ? [{ debugName: "module" }] : []);
  errors = signal([], ...ngDevMode ? [{ debugName: "errors" }] : []);
  formatted_errors = computed(() => {
    const errors = this.errors();
    const parsed_errors = errors.map((error) => {
      try {
        return JSON.parse(error);
      } catch {
        return error;
      }
    });
    return JSON.stringify(parsed_errors, void 0, 4);
  }, ...ngDevMode ? [{ debugName: "formatted_errors" }] : []);
  constructor() {
    this._loadData();
  }
  async _loadData() {
    this.loading.set(true);
    try {
      const module = await firstValueFrom(fc(this._module_id));
      this.module.set(module);
      try {
        const errors = await firstValueFrom(kc(module.id));
        this.errors.set(errors);
      } catch {
        this.errors.set([]);
      }
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function ModuleRuntimeErrorsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleRuntimeErrorsModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleRuntimeErrorsModalComponent, selectors: [["module-runtime-errors-modal"]], decls: 10, vars: 6, consts: [[1, "border-base-100", "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "h-14", "w-[calc(100%-1rem)]", "max-w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2"], [1, "flex", "items-center", "space-x-2", "px-2", "text-xl", "font-medium"], [1, "bg-base-100", "rounded", "px-2", "py-1", "font-mono", "text-xs"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-160", "max-h-[70vh]", "w-[80vw]", "flex-col", "space-y-2", "overflow-auto", "p-4"], [1, "flex", "h-[70vh]", "w-[80vw]", "flex-col", "items-center", "justify-center"], ["lang", "json", 3, "ngModel", "readonly"], [1, "flex", "h-64", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], ["diameter", "32"], [1, "opacity-30"]], template: function ModuleRuntimeErrorsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "h3", 1)(2, "div");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, ModuleRuntimeErrorsModalComponent_Conditional_7_Template, 3, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ModuleRuntimeErrorsModalComponent_Conditional_8_Template, 3, 1, "main", 4)(9, ModuleRuntimeErrorsModalComponent_Conditional_9_Template, 5, 3, "main", 5);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "MODULES.RUNTIME_ERRORS_VIEW"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx.module()) == null ? null : tmp_1_0.custom_name) || ((tmp_1_0 = ctx.module()) == null ? null : tmp_1_0.name), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() ? 8 : 9);
    }
  }, dependencies: [
    MatProgressSpinnerModule,
    MatProgressSpinner,
    IconComponent,
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    FormsModule,
    NgControlStatus,
    NgModel,
    SettingsFieldComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleRuntimeErrorsModalComponent, [{
    type: Component,
    args: [{ selector: "module-runtime-errors-modal", template: `
        <header
            class="border-base-100 bg-base-200 sticky top-0 z-10 mx-auto my-2 flex h-14 w-[calc(100%-1rem)] max-w-full items-center justify-between rounded-sm border px-2"
        >
            <h3 class="flex items-center space-x-2 px-2 text-xl font-medium">
                <div>{{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }}</div>
                <div class="bg-base-100 rounded px-2 py-1 font-mono text-xs">
                    {{ module()?.custom_name || module()?.name }}
                </div>
            </h3>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex h-160 max-h-[70vh] w-[80vw] flex-col space-y-2 overflow-auto p-4"
            >
                @if (errors().length) {
                    <settings-form-field
                        [ngModel]="formatted_errors()"
                        [readonly]="true"
                        lang="json"
                    ></settings-form-field>
                } @else {
                    <div
                        class="flex h-64 flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        {{ 'MODULES.RUNTIME_ERRORS_NO' | translate }}
                    </div>
                }
            </main>
        } @else {
            <main
                class="flex h-[70vh] w-[80vw] flex-col items-center justify-center"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="opacity-30">
                    {{ 'MODULES.RUNTIME_ERRORS_LOADING' | translate }}
                </div>
            </main>
        }
    `, imports: [
      TranslatePipe,
      MatProgressSpinnerModule,
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      FormsModule,
      SettingsFieldComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleRuntimeErrorsModalComponent, { className: "ModuleRuntimeErrorsModalComponent", filePath: "src/app/ui/module-runtime-errors-modal.component.ts", lineNumber: 74 });
})();

export {
  ModuleRuntimeErrorsModalComponent
};
//# sourceMappingURL=chunk-SC2XMUGD.js.map
