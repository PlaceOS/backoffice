import {
  ItemSearchFieldComponent
} from "./chunk-4SAVGYEQ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LL5BPSQ6.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-AQMMFGML.js";
import {
  AsyncHandler
} from "./chunk-OU4ZSGGA.js";
import {
  MatRippleModule
} from "./chunk-RHXWHY3G.js";
import {
  TranslatePipe
} from "./chunk-ZCVCPEH7.js";
import {
  IconComponent
} from "./chunk-2OXMVWQR.js";
import {
  MatRipple
} from "./chunk-M7TMFMYW.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VARF64W7.js";
import {
  Component,
  EventEmitter,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QSXZQV2A.js";

// src/app/overlays/select-item-modal.component.ts
var _c0 = (a0) => ({ item: a0 });
function SelectItemModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SelectItemModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3)(1, "item-search-field", 6);
    \u0275\u0275twoWayListener("ngModelChange", function SelectItemModalComponent_Conditional_5_Template_item_search_field_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.item, $event) || (ctx_r1.item = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("query_fn", ctx_r1.query_fn)("exclude", ctx_r1.filter_fn);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.item);
    \u0275\u0275property("display_list", true);
    \u0275\u0275control();
  }
}
function SelectItemModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 7);
    \u0275\u0275element(2, "mat-spinner", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.PROCESSING_REQUEST"), " ");
  }
}
function SelectItemModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 10);
    \u0275\u0275listener("click", function SelectItemModalComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.item);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ITEM_ADD_SELECTED"), " ");
  }
}
var SelectItemModalComponent = class _SelectItemModalComponent extends AsyncHandler {
  _data = inject(MAT_DIALOG_DATA);
  /** Emitter for user action on the modal */
  event = new EventEmitter();
  /** Whether the item is being editing */
  edit;
  /** Item to edit */
  item;
  /** Whether the item request is being processed */
  loading;
  filter_fn = () => false;
  get query_fn() {
    return this._data.query_fn;
  }
  get name() {
    return this._data.service_name;
  }
  submit() {
    this.loading = true;
    this.event.emit({ reason: "action", metadata: this.item });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectItemModalComponent_BaseFactory;
    return function SelectItemModalComponent_Factory(__ngFactoryType__) {
      return (\u0275SelectItemModalComponent_BaseFactory || (\u0275SelectItemModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectItemModalComponent)))(__ngFactoryType__ || _SelectItemModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectItemModalComponent, selectors: [["select-item-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 9, consts: [[1, "bg-base-200", "mx-2", "mt-2", "flex", "items-center", "justify-between", "rounded-sm", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "w-lg", "max-w-[calc(100vw-2rem)]", "px-2", "pt-2"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "p-16", "opacity-30"], [1, "border-base-200", "flex", "justify-end", "border-t", "px-4", "py-2"], [1, "block", "h-full", 3, "ngModelChange", "query_fn", "exclude", "ngModel", "display_list"], [1, "icon"], ["diameter", "32"], [1, "text"], ["btn", "", "matRipple", "", "type", "submit", 3, "click", "disabled"]], template: function SelectItemModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, SelectItemModalComponent_Conditional_4_Template, 3, 0, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, SelectItemModalComponent_Conditional_5_Template, 2, 4, "main", 3)(6, SelectItemModalComponent_Conditional_6_Template, 6, 3, "main", 4);
      \u0275\u0275conditionalCreate(7, SelectItemModalComponent_Conditional_7_Template, 4, 4, "footer", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "COMMON.ITEM_ADD", \u0275\u0275pureFunction1(7, _c0, ctx.name)), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 5 : 6);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading ? 7 : -1);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogClose,
    MatRippleModule,
    MatRipple,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    ItemSearchFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    IconComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectItemModalComponent, [{
    type: Component,
    args: [{ selector: "select-item-modal", template: `
        <div
            class="bg-base-200 mx-2 mt-2 flex items-center justify-between rounded-sm px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.ITEM_ADD' | translate: { item: name } }}
            </h3>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </div>
        @if (!loading) {
            <main class="h-[65vh] w-lg max-w-[calc(100vw-2rem)] px-2 pt-2">
                <item-search-field
                    class="block h-full"
                    [query_fn]="$any(query_fn)"
                    [exclude]="filter_fn"
                    [(ngModel)]="item"
                    [display_list]="true"
                />
            </main>
        } @else {
            <main
                class="flex w-full flex-col items-center justify-center p-16 opacity-30"
            >
                <div class="icon">
                    <mat-spinner diameter="32" />
                </div>
                <div class="text">
                    {{ 'COMMON.PROCESSING_REQUEST' | translate }}
                </div>
            </main>
        }
        @if (!loading) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button
                    btn
                    matRipple
                    type="submit"
                    (click)="submit()"
                    [disabled]="!item"
                >
                    {{ 'COMMON.ITEM_ADD_SELECTED' | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      ItemSearchFieldComponent,
      FormsModule,
      IconComponent
    ] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectItemModalComponent, { className: "SelectItemModalComponent", filePath: "src/app/overlays/select-item-modal.component.ts", lineNumber: 80 });
})();

export {
  SelectItemModalComponent
};
//# sourceMappingURL=chunk-HSWXDZWE.js.map
