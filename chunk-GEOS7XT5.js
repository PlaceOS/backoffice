import {
  Component,
  ElementRef,
  Input,
  Output,
  inject,
  input,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6G3VFYSX.js";

// src/app/ui/controls/tabs.component.ts
function TabsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 1);
    \u0275\u0275domListener("click", function TabsComponent_For_1_Template_button_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedIndex.set($index_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("tabIndex", $index_r2 === ctx_r2.selectedIndex() ? 0 : -1);
    \u0275\u0275attribute("aria-selected", $index_r2 === ctx_r2.selectedIndex());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r4, " ");
  }
}
var TabsComponent = class _TabsComponent {
  _element = inject(ElementRef);
  /** Text of each tab */
  labels = input(
    [],
    ...ngDevMode ? [{ debugName: "labels" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Index of the selected tab */
  selectedIndex = model(
    0,
    ...ngDevMode ? [{ debugName: "selectedIndex" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onKeydown(event) {
    const count = this.labels().length;
    const current = this.selectedIndex();
    const next = {
      ArrowRight: (current + 1) % count,
      ArrowLeft: (current - 1 + count) % count,
      Home: 0,
      End: count - 1
    }[event.key] ?? -1;
    if (next < 0 || !count)
      return;
    event.preventDefault();
    this.selectedIndex.set(next);
    this._element.nativeElement.querySelectorAll("[role=tab]")[next]?.focus();
  }
  static \u0275fac = function TabsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsComponent, selectors: [["app-tabs"]], hostAttrs: ["role", "tablist", 1, "tabs"], hostBindings: function TabsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function TabsComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      });
    }
  }, inputs: { labels: [1, "labels"], selectedIndex: [1, "selectedIndex"] }, outputs: { selectedIndex: "selectedIndexChange" }, decls: 2, vars: 0, consts: [["type", "button", "role", "tab", "ripple", "", 1, "tab", 3, "tabIndex"], ["type", "button", "role", "tab", "ripple", "", 1, "tab", 3, "click", "tabIndex"]], template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, TabsComponent_For_1_Template, 2, 3, "button", 0, \u0275\u0275repeaterTrackByIndex);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.labels());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsComponent, [{
    type: Component,
    args: [{
      selector: "app-tabs",
      template: `
        @for (label of labels(); track $index) {
            <button
                type="button"
                role="tab"
                class="tab"
                ripple
                [attr.aria-selected]="$index === selectedIndex()"
                [tabIndex]="$index === selectedIndex() ? 0 : -1"
                (click)="selectedIndex.set($index)"
            >
                {{ label }}
            </button>
        }
    `,
      host: {
        role: "tablist",
        class: "tabs",
        "(keydown)": "onKeydown($event)"
      }
    }]
  }], null, { labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: false }] }], selectedIndex: [{ type: Input, args: [{ isSignal: true, alias: "selectedIndex", required: false }] }, { type: Output, args: ["selectedIndexChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsComponent, { className: "TabsComponent", filePath: "src/app/ui/controls/tabs.component.ts", lineNumber: 30 });
})();

export {
  TabsComponent
};
//# debugId=e48dcaa5-5439-5cb8-9bd8-2d5f8fcefbf3
//# sourceMappingURL=chunk-GEOS7XT5.js.map
