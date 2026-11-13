import {
  DateFromPipe
} from "./chunk-PWWITZ5J.js";
import {
  TranslatePipe
} from "./chunk-G7DGN64C.js";
import {
  TooltipDirective
} from "./chunk-ERJVBWAI.js";
import {
  DatePipe,
  NgTemplateOutlet
} from "./chunk-BRT76G6A.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";

// src/app/ui/item-timestamps.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
function ItemTimestampsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ItemTimestampsComponent_Conditional_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ItemTimestampsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ItemTimestampsComponent_Conditional_4_ng_container_3_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const value_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "COMMON.UPDATED_AT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", value_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c0, ctx_r0.updated_at()));
  }
}
function ItemTimestampsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "dateFrom");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const seconds_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind2(2, 2, seconds_r3 * 1e3, "mediumDate") + ", " + \u0275\u0275pipeBind2(3, 5, seconds_r3 * 1e3, "shortTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, seconds_r3 * 1e3), " ");
  }
}
var ItemTimestampsComponent = class _ItemTimestampsComponent {
  /** Unix time in seconds */
  created_at = input(
    0,
    ...ngDevMode ? [{ debugName: "created_at" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Unix time in seconds. Hidden when not set. */
  updated_at = input(
    0,
    ...ngDevMode ? [{ debugName: "updated_at" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function ItemTimestampsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemTimestampsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemTimestampsComponent, selectors: [["item-timestamps"]], inputs: { created_at: [1, "created_at"], updated_at: [1, "updated_at"] }, decls: 7, vars: 8, consts: [["value", ""], [1, "flex", "items-center", "text-sm", "font-medium"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "items-center"], ["appTooltipPosition", "right", 1, "select-text", 3, "appTooltip"]], template: function ItemTimestampsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ItemTimestampsComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
      \u0275\u0275conditionalCreate(4, ItemTimestampsComponent_Conditional_4_Template, 4, 7);
      \u0275\u0275template(5, ItemTimestampsComponent_ng_template_5_Template, 6, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const value_r2 = \u0275\u0275reference(6);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "COMMON.CREATED_AT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", value_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c0, ctx.created_at()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.updated_at() ? 4 : -1);
    }
  }, dependencies: [
    TooltipDirective,
    NgTemplateOutlet,
    DatePipe,
    DateFromPipe,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=item-timestamps.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTimestampsComponent, [{
    type: Component,
    args: [{ selector: "item-timestamps", template: `
        <div class="flex items-center text-sm font-medium">
            {{ 'COMMON.CREATED_AT' | translate }}
        </div>
        <ng-container
            *ngTemplateOutlet="value; context: { $implicit: created_at() }"
        />
        @if (updated_at()) {
            <div class="flex items-center text-sm font-medium">
                {{ 'COMMON.UPDATED_AT' | translate }}
            </div>
            <ng-container
                *ngTemplateOutlet="value; context: { $implicit: updated_at() }"
            />
        }
        <ng-template #value let-seconds>
            <div class="flex items-center">
                <span
                    class="select-text"
                    [appTooltip]="
                        (seconds * 1000 | date: 'mediumDate') +
                        ', ' +
                        (seconds * 1000 | date: 'shortTime')
                    "
                    appTooltipPosition="right"
                >
                    {{ seconds * 1000 | dateFrom }}
                </span>
            </div>
        </ng-template>
    `, imports: [
      TooltipDirective,
      DatePipe,
      DateFromPipe,
      TranslatePipe,
      NgTemplateOutlet
    ], styles: ["/* angular:styles/component:css;68474df045e6eb87;/home/runner/work/backoffice/backoffice/src/app/ui/item-timestamps.component.ts */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=item-timestamps.component.css.map */\n"] }]
  }], null, { created_at: [{ type: Input, args: [{ isSignal: true, alias: "created_at", required: false }] }], updated_at: [{ type: Input, args: [{ isSignal: true, alias: "updated_at", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemTimestampsComponent, { className: "ItemTimestampsComponent", filePath: "src/app/ui/item-timestamps.component.ts", lineNumber: 53 });
})();

export {
  ItemTimestampsComponent
};
//# debugId=8f14cca9-4dbf-5a8d-b4eb-17c5b1aaaba7
//# sourceMappingURL=chunk-UT4IZ5N4.js.map
