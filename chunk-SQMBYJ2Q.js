import {
  DialogRef
} from "./chunk-762ECDWF.js";
import {
  Directive,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵɵattribute,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/dialog.ts
var DialogCloseDirective = class _DialogCloseDirective {
  _ref = inject(DialogRef, {
    optional: true
  });
  /** Result of the dialog */
  result = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "result" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appDialogClose" }));
  type = input(
    "button",
    ...ngDevMode ? [{ debugName: "type" }] : (
      /* istanbul ignore next */
      []
    )
  );
  close() {
    this._ref?.close(this.result());
  }
  static \u0275fac = function DialogCloseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogCloseDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DialogCloseDirective, selectors: [["", "appDialogClose", ""]], hostVars: 1, hostBindings: function DialogCloseDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DialogCloseDirective_click_HostBindingHandler() {
        return ctx.close();
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("type", ctx.type());
    }
  }, inputs: { result: [1, "appDialogClose", "result"], type: [1, "type"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogCloseDirective, [{
    type: Directive,
    args: [{
      selector: "[appDialogClose]",
      host: {
        "[attr.type]": "type()",
        "(click)": "close()"
      }
    }]
  }], null, { result: [{ type: Input, args: [{ isSignal: true, alias: "appDialogClose", required: false }] }], type: [{ type: Input, args: [{ isSignal: true, alias: "type", required: false }] }] });
})();

export {
  DialogCloseDirective
};
//# debugId=7ba0a01d-9e11-520f-894c-49e608bb40fb
//# sourceMappingURL=chunk-SQMBYJ2Q.js.map
