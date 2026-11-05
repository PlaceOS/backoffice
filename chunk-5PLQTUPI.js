import {
  DomSanitizer
} from "./chunk-UAEA3DWF.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-DTROA6L2.js";

// src/app/ui/pipes/safe.pipe.ts
var SafePipe = class _SafePipe {
  sanitizer = inject(DomSanitizer);
  /**
   * Sanitizes the string allowing it to be injected into a template
   * @param value String to sanitize
   * @param type Type of value to trust. `resource` or `url`
   */
  transform(value, type) {
    return type === "resource" ? this.sanitizer.bypassSecurityTrustResourceUrl(value) : this.sanitizer.bypassSecurityTrustUrl(value);
  }
  static \u0275fac = function SafePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{
      name: "safe"
    }]
  }], null, null);
})();

export {
  SafePipe
};
//# debugId=e9954c93-4314-555d-80f7-2f22107673f9
//# sourceMappingURL=chunk-5PLQTUPI.js.map
