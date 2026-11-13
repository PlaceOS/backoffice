import {
  SpinnerComponent
} from "./chunk-WWSSYZEA.js";
import {
  describeError
} from "./chunk-T3O7QHHC.js";
import {
  notifyError
} from "./chunk-2DKDRFBI.js";
import {
  FormFieldComponent
} from "./chunk-O2B7KTSR.js";
import "./chunk-SSVO7UC4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-5APMNGCP.js";
import {
  DialogTitleDirective
} from "./chunk-QSK7KYKQ.js";
import {
  DialogCloseDirective
} from "./chunk-SQMBYJ2Q.js";
import {
  DIALOG_DATA,
  DialogRef
} from "./chunk-762ECDWF.js";
import "./chunk-JJ65W2TY.js";
import "./chunk-LCM7Z6QA.js";
import "./chunk-DGKMQHVX.js";
import {
  IconComponent
} from "./chunk-JEKJ3JY5.js";
import "./chunk-QY7ZA5QE.js";
import "./chunk-ERJVBWAI.js";
import "./chunk-POM3EJZY.js";
import "./chunk-UVK6APTK.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  DestroyRef,
  Output,
  inject,
  output,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/overlays/duplicate-modal.component.ts
function DuplicateModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "p");
    \u0275\u0275text(2, "How many times would you like to duplicate this item?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-form-field")(4, "input", 5);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function DuplicateModalComponent_Conditional_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.times, $event) || (ctx_r1.times = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("max", ctx_r1.MAX_TIMES);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.times);
    \u0275\u0275control();
  }
}
function DuplicateModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Creating item duplicates... ");
    \u0275\u0275elementEnd();
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-spinner", 9);
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 10);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function DuplicateModalComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DuplicateModalComponent_Conditional_5_For_3_Conditional_3_Template, 1, 0, "app-spinner", 9)(4, DuplicateModalComponent_Conditional_5_For_3_Conditional_4_Template, 2, 0, "icon", 10)(5, DuplicateModalComponent_Conditional_5_For_3_Conditional_5_Template, 2, 0, "icon", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_25_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.item.name, " (", \u0275$index_25_r3 + 1, ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.status()[\u0275$index_25_r3] === "loading" ? 3 : ctx_r1.status()[\u0275$index_25_r3] === "done" ? 4 : 5);
  }
}
function DuplicateModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, DuplicateModalComponent_Conditional_5_Conditional_1_Template, 2, 0, "div", 6);
    \u0275\u0275repeaterCreate(2, DuplicateModalComponent_Conditional_5_For_3_Template, 6, 3, "div", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.done() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.temp());
  }
}
function DuplicateModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 12);
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function DuplicateModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.duplicate());
    });
    \u0275\u0275text(4, " Duplicate ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.validTimes());
  }
}
var DuplicateModalComponent = class _DuplicateModalComponent {
  _data = inject(DIALOG_DATA);
  _dialog_ref = inject(DialogRef);
  /** Whether the user closed the dialog */
  _closed = false;
  constructor() {
    inject(DestroyRef).onDestroy(() => this._closed = true);
  }
  /** Emitter for user action on the modal */
  event = output();
  MAX_TIMES = 50;
  /** Number of times to duplicate the given item */
  times = 1;
  /** Number of times to duplicate the given item */
  status = signal(
    {},
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether request is loading */
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Temporary array for generating UI elements */
  temp = signal(
    [],
    ...ngDevMode ? [{ debugName: "temp" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether duplication has completed */
  done = signal(
    false,
    ...ngDevMode ? [{ debugName: "done" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Item selected to be duplicated */
  get item() {
    return this._data.item;
  }
  /**
   * Create the specified number of duplicate items
   */
  validTimes() {
    const times = +this.times;
    return Number.isInteger(times) && times >= 1 && times <= this.MAX_TIMES;
  }
  async duplicate() {
    if (this.loading())
      return;
    if (!this.validTimes()) {
      return notifyError(`Number of duplicates must be a whole number from 1 to ${this.MAX_TIMES}`);
    }
    this.times = +this.times;
    this.loading.set(true);
    const ItemConstructor = this.item.constructor;
    const item = this._data.item;
    const list = [];
    this.temp.set(new Array(this.times).fill({}));
    for (let i = 0; i < this.times; i++) {
      if (this._closed)
        break;
      const new_item = new ItemConstructor(__spreadProps(__spreadValues({}, item), {
        id: "",
        name: `${item.name} (${i + 1})`
      }));
      this.setStatus(i, "loading");
      const saved_item = await this._data.save(new_item).catch((err) => {
        this.setStatus(i, `Error: ${describeError(err)}`);
        notifyError(this.status()[i]);
      });
      list.push(saved_item);
      if (this.status()[i] === "loading") {
        this.setStatus(i, "done");
      }
    }
    if (this._closed)
      return;
    const clean_list = list.filter((item2) => !!item2);
    this.event.emit({
      reason: "done",
      metadata: clean_list
    });
    this.done.set(true);
    setTimeout(() => this._dialog_ref.close(), 5e3);
  }
  setStatus(index, value) {
    this.status.update((status) => __spreadProps(__spreadValues({}, status), { [index]: value }));
  }
  static \u0275fac = function DuplicateModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DuplicateModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DuplicateModalComponent, selectors: [["app-duplicate-modal"]], outputs: { event: "event" }, decls: 7, vars: 2, consts: [["appDialogTitle", "", 1, "px-6", "pt-6", "pb-4", "text-xl", "font-medium"], [1, "max-h-[65vh]", "overflow-auto", "px-6"], [1, "flex", "flex-col", "items-center", "p-4", "text-center"], [1, "flex", "flex-col", "items-center", "px-2", "py-4"], [1, "flex", "items-center", "gap-2", "p-2"], ["name", "times", "type", "number", "min", "1", "step", "1", "placeholder", "Number of duplications", "required", "", 3, "ngModelChange", "max", "ngModel"], [1, "mb-4", "text-sm", "opacity-60"], [1, "odd:bg-base-200", "flex", "w-80", "items-center", "rounded", "px-4", "py-2"], [1, "flex-1", "truncate"], ["diameter", "24"], [1, "text-success"], [1, "text-error"], ["btn", "", "appDialogClose", "", 1, "inverse", "min-w-32"], ["btn", "", "name", "accept", 1, "min-w-32", 3, "click", "disabled"]], template: function DuplicateModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "h3", 0);
      \u0275\u0275text(2, " Duplicate Item ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275conditionalCreate(4, DuplicateModalComponent_Conditional_4_Template, 5, 2, "div", 2)(5, DuplicateModalComponent_Conditional_5_Template, 4, 1, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, DuplicateModalComponent_Conditional_6_Template, 5, 1, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(!ctx.loading() ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
    }
  }, dependencies: [
    DialogCloseDirective,
    DialogTitleDirective,
    SpinnerComponent,
    FormFieldComponent,
    IconComponent,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    RequiredValidator,
    MinValidator,
    MaxValidator,
    NgModel
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DuplicateModalComponent, [{
    type: Component,
    args: [{
      selector: "app-duplicate-modal",
      template: `
        <header>
            <h3 appDialogTitle class="px-6 pt-6 pb-4 text-xl font-medium">
                Duplicate Item
            </h3>
        </header>
        <div class="max-h-[65vh] overflow-auto px-6">
            @if (!loading()) {
                <div class="flex flex-col items-center p-4 text-center">
                    <p>How many times would you like to duplicate this item?</p>
                    <app-form-field>
                        <input
                            name="times"
                            type="number"
                            min="1"
                            [max]="MAX_TIMES"
                            step="1"
                            [(ngModel)]="times"
                            placeholder="Number of duplications"
                            required
                        />
                    </app-form-field>
                </div>
            } @else {
                <div class="flex flex-col items-center px-2 py-4">
                    @if (!done()) {
                        <div class="mb-4 text-sm opacity-60">
                            Creating item duplicates...
                        </div>
                    }
                    @for (itm of temp(); track $index; let i = $index) {
                        <div
                            class="odd:bg-base-200 flex w-80 items-center rounded px-4 py-2"
                        >
                            <div class="flex-1 truncate">
                                {{ item.name }} ({{ i + 1 }})
                            </div>
                            @if (status()[i] === 'loading') {
                                <app-spinner diameter="24" />
                            } @else if (status()[i] === 'done') {
                                <icon class="text-success">done</icon>
                            } @else {
                                <icon class="text-error">close</icon>
                            }
                        </div>
                    }
                </div>
            }
        </div>
        @if (!loading()) {
            <div class="flex items-center gap-2 p-2">
                <button btn class="inverse min-w-32" appDialogClose>
                    Cancel
                </button>
                <button
                    btn
                    name="accept"
                    class="min-w-32"
                    [disabled]="!validTimes()"
                    (click)="duplicate()"
                >
                    Duplicate
                </button>
            </div>
        }
    `,
      imports: [
        DialogCloseDirective,
        DialogTitleDirective,
        SpinnerComponent,
        FormFieldComponent,
        IconComponent,
        FormsModule
      ]
    }]
  }], () => [], { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DuplicateModalComponent, { className: "DuplicateModalComponent", filePath: "src/app/overlays/duplicate-modal.component.ts", lineNumber: 103 });
})();
export {
  DuplicateModalComponent
};
//# debugId=1b4d999e-3c6a-58d1-91d0-d972b63a1188
//# sourceMappingURL=chunk-LMXCGHNP.js.map
