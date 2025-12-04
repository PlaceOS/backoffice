import {
  DomSanitizer
} from "./chunk-SL7UBQ7L.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-Q7FFLWMX.js";

// src/app/ui/pipes/safe.pipe.ts
var SafePipe = class _SafePipe {
  sanitizer = inject(DomSanitizer);
  /**
   * Sanitizes the string allowing it to be injected into a template
   * @param value String to sanitize
   * @param type Type of value to sanitise. `resource`, `url`, `script`, `style` or `html`
   */
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "script":
        return this.sanitizer.bypassSecurityTrustScript(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
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
//# sourceMappingURL=chunk-GBLYF56R.js.map
