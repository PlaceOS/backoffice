import {
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-BRT76G6A.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";

// src/app/ui/virtual-scroll.component.ts
var _c0 = ["scroll_container"];
var _c1 = ["*"];
var _c2 = (a0, a1) => ({ item: a0, index: a1 });
function _forTrack0($index, $item) {
  return $index + this.offset_start();
}
function VirtualScrollComponent_For_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VirtualScrollComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, VirtualScrollComponent_For_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_5_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", (ctx_r2.offset_start() + \u0275$index_5_r2) * ctx_r2.item_size() + "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.item_template())("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c2, item_r1, ctx_r2.offset_start() + \u0275$index_5_r2));
  }
}
var VirtualScrollComponent = class _VirtualScrollComponent {
  items = input(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item_size = input(
    0,
    ...ngDevMode ? [{ debugName: "item_size" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item_template = input(
    null,
    ...ngDevMode ? [{ debugName: "item_template" }] : (
      /* istanbul ignore next */
      []
    )
  );
  buffer = input(
    2,
    ...ngDevMode ? [{ debugName: "buffer" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scrolled = output();
  range = signal(
    0,
    ...ngDevMode ? [{ debugName: "range" }] : (
      /* istanbul ignore next */
      []
    )
  );
  offset = signal(
    0,
    ...ngDevMode ? [{ debugName: "offset" }] : (
      /* istanbul ignore next */
      []
    )
  );
  offset_start = computed(
    () => Math.max(this.offset() - this.buffer(), 0),
    ...ngDevMode ? [{ debugName: "offset_start" }] : (
      /* istanbul ignore next */
      []
    )
  );
  offset_end = computed(
    () => this.offset_start() + (this.range() + 2 * (this.buffer() || 2)),
    ...ngDevMode ? [{ debugName: "offset_end" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scroll_area = computed(
    () => this.items().length * this.item_size(),
    ...ngDevMode ? [{ debugName: "scroll_area" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _el = inject(ElementRef);
  _scroll_container_el = viewChild(
    "scroll_container",
    ...ngDevMode ? [{ debugName: "_scroll_container_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _resize_observer;
  _on_scroll = () => this.updateOffsets();
  ngAfterViewInit() {
    this.updateContainer();
    this._resize_observer = new ResizeObserver(() => this.updateContainer());
    this._resize_observer.observe(this._el.nativeElement);
    this._scroll_container_el()?.nativeElement.addEventListener("scroll", this._on_scroll, { passive: true });
  }
  ngOnDestroy() {
    this._resize_observer?.disconnect();
    this._scroll_container_el()?.nativeElement.removeEventListener("scroll", this._on_scroll);
  }
  /** Update the first visible item. Only writes state when it changes. */
  updateOffsets() {
    const el = this._scroll_container_el()?.nativeElement;
    if (!el)
      return;
    const offset = Math.floor(el.scrollTop / this.item_size());
    if (offset === this.offset())
      return;
    this.offset.set(offset);
    this.scrolled.emit([offset, offset + this.range()]);
  }
  updateContainer() {
    const el = this._el?.nativeElement;
    if (!el)
      return;
    const box = el.getBoundingClientRect();
    this.range.set(Math.ceil(box.height / this.item_size()));
  }
  scrollToIndex(index) {
    const el = this._scroll_container_el()?.nativeElement;
    if (!el)
      return;
    el.scrollTop = index * this.item_size();
    this.updateOffsets();
  }
  static \u0275fac = function VirtualScrollComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VirtualScrollComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualScrollComponent, selectors: [["virtual-scroll"]], viewQuery: function VirtualScrollComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._scroll_container_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { items: [1, "items"], item_size: [1, "item_size"], item_template: [1, "item_template"], buffer: [1, "buffer"] }, outputs: { scrolled: "scrolled" }, ngContentSelectors: _c1, decls: 7, vars: 6, consts: [["scroll_container", ""], [1, "relative", "h-full", "w-full", "overflow-auto"], ["scroll-fill", "", 1, "w-full"], [1, "absolute", "w-full", 3, "top"], [1, "absolute", "w-full"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function VirtualScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275repeaterCreate(3, VirtualScrollComponent_For_4_Template, 2, 7, "div", 3, _forTrack0, true);
      \u0275\u0275pipe(5, "slice");
      \u0275\u0275projection(6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("height", ctx.scroll_area() + "px");
      \u0275\u0275advance();
      \u0275\u0275repeater(\u0275\u0275pipeBind3(5, 2, ctx.items(), ctx.offset_start(), ctx.offset_end()));
    }
  }, dependencies: [NgTemplateOutlet, SlicePipe], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=virtual-scroll.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualScrollComponent, [{
    type: Component,
    args: [{ selector: "virtual-scroll", template: `
        <div #scroll_container class="relative h-full w-full overflow-auto">
            <div
                scroll-fill
                class="w-full"
                [style.height]="scroll_area() + 'px'"
            ></div>
            @for (
                item of items() | slice: offset_start() : offset_end();
                track $index + offset_start();
                let i = $index
            ) {
                <div
                    class="absolute w-full"
                    [style.top]="(offset_start() + i) * item_size() + 'px'"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            item_template();
                            context: { item, index: offset_start() + i }
                        "
                    />
                </div>
            }
            <ng-content />
        </div>
    `, imports: [NgTemplateOutlet, SlicePipe], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;43a52b5076d94d60;/home/runner/work/backoffice/backoffice/src/app/ui/virtual-scroll.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=virtual-scroll.component.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], item_size: [{ type: Input, args: [{ isSignal: true, alias: "item_size", required: false }] }], item_template: [{ type: Input, args: [{ isSignal: true, alias: "item_template", required: false }] }], buffer: [{ type: Input, args: [{ isSignal: true, alias: "buffer", required: false }] }], scrolled: [{ type: Output, args: ["scrolled"] }], _scroll_container_el: [{ type: ViewChild, args: ["scroll_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualScrollComponent, { className: "VirtualScrollComponent", filePath: "src/app/ui/virtual-scroll.component.ts", lineNumber: 57 });
})();

export {
  VirtualScrollComponent
};
//# debugId=6986ca4e-49a3-5043-aeac-101232f425c8
//# sourceMappingURL=chunk-UKX5GNV3.js.map
