import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-4ALOESAF.js";
import {
  notifyError
} from "./chunk-IQ5P3T5K.js";
import "./chunk-3GHPTDJZ.js";
import {
  MatRippleModule
} from "./chunk-6CBQWDU5.js";
import {
  TranslatePipe
} from "./chunk-EU4TWCRF.js";
import "./chunk-TALE6FQV.js";
import {
  MatRipple
} from "./chunk-TEK5TAH3.js";
import {
  Component,
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
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QMACIC7N.js";
import {
  Y,
  lastValueFrom,
  x
} from "./chunk-T6SXWR5P.js";
import "./chunk-VYXW4D3Z.js";

// src/app/admin/database-details.component.ts
function PlaceDatabaseDetailsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "ADMIN.DATABASE_REINDEX"), " ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function PlaceDatabaseDetailsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "ADMIN.DATABASE_BACKFILL"), " ");
  }
}
function PlaceDatabaseDetailsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function reindex(backfill2 = true) {
  const url = `${x()}/reindex${backfill2 ? "?backfill=true" : ""}`;
  return lastValueFrom(Y(url, null));
}
function backfill() {
  const url = `${x()}/backfill`;
  return lastValueFrom(Y(url, null));
}
var PlaceDatabaseDetailsComponent = class _PlaceDatabaseDetailsComponent {
  /** Whether backend is reindexing the database */
  reindexing = signal(false, ...ngDevMode ? [{ debugName: "reindexing" }] : []);
  /** Whether backend is reindexing the database */
  backfilling = signal(false, ...ngDevMode ? [{ debugName: "backfilling" }] : []);
  async reindex() {
    this.reindexing.set(true);
    await reindex().catch((err) => {
      notifyError(`Error reindexing database. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
    this.reindexing.set(false);
  }
  async backfill() {
    this.backfilling.set(true);
    await backfill().catch((err) => {
      notifyError(`Error backfilling database. Error: ${JSON.stringify(err.response || err.message || err)}`);
    });
    this.backfilling.set(false);
  }
  static \u0275fac = function PlaceDatabaseDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceDatabaseDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceDatabaseDetailsComponent, selectors: [["app-database-details"]], decls: 18, vars: 10, consts: [[1, "mb-4", "flex", "items-center", "justify-between", "space-x-2", "px-4"], [1, "text-2xl"], [1, "flex", "w-full", "space-x-4", "p-4"], [1, "border-base-200", "flex", "w-1/3", "flex-1", "flex-col", "space-y-2", "rounded-sm", "border", "p-2"], [1, "mx-auto", "max-w-64", "p-2", "text-center"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-0.5rem)]", 3, "click", "disabled"], [1, "my-1", "flex", "w-full", "justify-center"], ["diameter", "32"]], template: function PlaceDatabaseDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "PlaceOS Database");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_8_listener() {
        return ctx.reindex();
      });
      \u0275\u0275conditionalCreate(9, PlaceDatabaseDetailsComponent_Conditional_9_Template, 2, 3)(10, PlaceDatabaseDetailsComponent_Conditional_10_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 3)(12, "p", 4);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 5);
      \u0275\u0275listener("click", function PlaceDatabaseDetailsComponent_Template_button_click_15_listener() {
        return ctx.backfill();
      });
      \u0275\u0275conditionalCreate(16, PlaceDatabaseDetailsComponent_Conditional_16_Template, 2, 3)(17, PlaceDatabaseDetailsComponent_Conditional_17_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "ADMIN.DATABASE_REINDEX_MSG"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.reindexing());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.reindexing() ? 9 : 10);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, "ADMIN.DATABASE_BACKFILL_MSG"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.backfilling());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.backfilling() ? 16 : 17);
    }
  }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner, MatRippleModule, MatRipple, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 10em;\n  margin: 0.25em;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=database-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceDatabaseDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-database-details", template: `
        <div class="mb-4 flex items-center justify-between space-x-2 px-4">
            <div class="text-2xl">PlaceOS Database</div>
        </div>
        <div class="flex w-full space-x-4 p-4">
            <div
                class="border-base-200 flex w-1/3 flex-1 flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_REINDEX_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="reindexing()"
                    (click)="reindex()"
                >
                    @if (!reindexing()) {
                        {{ 'ADMIN.DATABASE_REINDEX' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
            <div
                class="border-base-200 flex w-1/3 flex-1 flex-col space-y-2 rounded-sm border p-2"
            >
                <p class="mx-auto max-w-64 p-2 text-center">
                    {{ 'ADMIN.DATABASE_BACKFILL_MSG' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    class="w-[calc(100%-0.5rem)]"
                    [disabled]="backfilling()"
                    (click)="backfill()"
                >
                    @if (!backfilling()) {
                        {{ 'ADMIN.DATABASE_BACKFILL' | translate }}
                    } @else {
                        <div class="my-1 flex w-full justify-center">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                    }
                </button>
            </div>
        </div>
    `, imports: [MatProgressSpinnerModule, TranslatePipe, MatRippleModule], styles: ["/* angular:styles/component:css;12eeaf2f97b0a02f824d213a17b33a48d1ee31074c7c7409a825ef75d2d1e217;/home/runner/work/backoffice/backoffice/src/app/admin/database-details.component.ts */\n:host {\n  padding-top: 1em;\n  display: flex;\n  flex-wrap: wrap;\n}\nbutton {\n  min-width: 10em;\n  margin: 0.25em;\n}\nmat-card {\n  margin: 0.5em;\n  text-align: center;\n}\n/*# sourceMappingURL=database-details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceDatabaseDetailsComponent, { className: "PlaceDatabaseDetailsComponent", filePath: "src/app/admin/database-details.component.ts", lineNumber: 94 });
})();
export {
  PlaceDatabaseDetailsComponent
};
//# sourceMappingURL=chunk-KHC4GPCA.js.map
