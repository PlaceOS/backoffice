import {
  MatDialogRef
} from "./chunk-ZQLZS64A.js";
import {
  Directive,
  inject,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdomProperty
} from "./chunk-TCVU4336.js";

// src/app/ui/dialog-title.directive.ts
var next_id = 0;
var DialogTitleDirective = class _DialogTitleDirective {
  id = `app-dialog-title-${next_id++}`;
  _container = inject(MatDialogRef, { optional: true })?._containerInstance;
  // Deferred like MatDialogTitle, so the dialog's host binding does not
  // change while it is being checked
  ngOnInit() {
    Promise.resolve().then(() => this._container?._addAriaLabelledBy(this.id));
  }
  ngOnDestroy() {
    Promise.resolve().then(() => this._container?._removeAriaLabelledBy(this.id));
  }
  static \u0275fac = function DialogTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogTitleDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DialogTitleDirective, selectors: [["", "appDialogTitle", ""]], hostVars: 1, hostBindings: function DialogTitleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id);
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[appDialogTitle]",
      host: { "[id]": "id" }
    }]
  }], null, null);
})();

export {
  DialogTitleDirective
};
//# debugId=51e40ee3-f9bd-5711-bc97-3a6e785c177f
//# sourceMappingURL=chunk-XQFILG7P.js.map
