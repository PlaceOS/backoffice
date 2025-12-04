import {
  LocaleService
} from "./chunk-E7QDOMTV.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-Q7FFLWMX.js";

// src/app/ui/translate.pipe.ts
var TranslatePipe = class _TranslatePipe {
  _locale = inject(LocaleService);
  transform(value, args = {}, plural) {
    return this._locale.get(value, args, plural);
  }
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "translate"
    }]
  }], null, null);
})();

export {
  TranslatePipe
};
//# sourceMappingURL=chunk-5DKHD7PA.js.map
