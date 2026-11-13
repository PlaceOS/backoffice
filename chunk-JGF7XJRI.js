import {
  FormField
} from "./chunk-ENT6KTBQ.js";
import {
  Component,
  ContentChild,
  ElementRef,
  afterEveryRender,
  computed,
  contentChild,
  forwardRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryAdvance
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/form-field.component.ts
var _c0 = [[["", "prefix", ""]], "*", [["", "suffix", ""]], [["", "error", ""], ["", "hint", ""]]];
var _c1 = ["[prefix]", "*", "[suffix]", "[error], [hint]"];
var next_id = 0;
var FormFieldComponent = class _FormFieldComponent {
  _element = inject(ElementRef);
  subscript_id = `app-form-field-subscript-${next_id++}`;
  constructor() {
    afterEveryRender(() => this._describeControl());
  }
  _field = contentChild(FormField, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_field" } : (
    /* istanbul ignore next */
    {}
  )), { descendants: true }));
  /** Whether the signal form control is touched and invalid */
  invalid = computed(
    () => {
      const state = this._field()?.state();
      return !!state && state.touched() && state.invalid();
    },
    ...ngDevMode ? [{ debugName: "invalid" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Add the error and hint area to the control's `aria-describedby`. Screen
   * readers skip the error or hint that is hidden, so only the one that
   * shows is read. Other ids on the control are kept.
   */
  _describeControl() {
    const control = this._element.nativeElement.querySelector(".field-box :is(input, textarea, app-select)");
    if (!control)
      return;
    const ids = (control.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
    if (ids.includes(this.subscript_id))
      return;
    control.setAttribute("aria-describedby", [...ids, this.subscript_id].join(" "));
  }
  /** Focus the control on a click on the box outside of it */
  focusControl(event) {
    const target = event.target;
    if (!target.classList.contains("field-box"))
      return;
    this._element.nativeElement.querySelector("input, textarea, app-select")?.focus();
  }
  static \u0275fac = function FormFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFieldComponent, selectors: [["app-form-field"]], contentQueries: function FormFieldComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx._field, FormField, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostVars: 2, hostBindings: function FormFieldComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function FormFieldComponent_click_HostBindingHandler($event) {
        return ctx.focusControl($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275classProp("field-invalid", ctx.invalid());
    }
  }, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "field-box"], [1, "field-subscript", 3, "id"]], template: function FormFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275projection(2, 1);
      \u0275\u0275projection(3, 2);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 1);
      \u0275\u0275projection(5, 3);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("id", ctx.subscript_id);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{
      selector: "app-form-field",
      template: `
        <div class="field-box">
            <ng-content select="[prefix]" />
            <ng-content />
            <ng-content select="[suffix]" />
        </div>
        <div class="field-subscript" [id]="subscript_id">
            <ng-content select="[error], [hint]" />
        </div>
    `,
      host: {
        "[class.field-invalid]": "invalid()",
        "(click)": "focusControl($event)"
      }
    }]
  }], () => [], { _field: [{ type: ContentChild, args: [forwardRef(() => FormField), __spreadProps(__spreadValues({}, { descendants: true }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFieldComponent, { className: "FormFieldComponent", filePath: "src/app/ui/controls/form-field.component.ts", lineNumber: 44 });
})();

export {
  FormFieldComponent
};
//# debugId=591c6190-37c6-54a8-b5c9-ae959d5971bf
//# sourceMappingURL=chunk-JGF7XJRI.js.map
