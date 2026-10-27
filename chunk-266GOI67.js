import {
  DomSanitizer
} from "./chunk-DKYBNEOC.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-HGOGRFKW.js";

// src/app/ui/pipes/sanitise.pipe.ts
var SanitizePipe = class _SanitizePipe {
  sanitizer = inject(DomSanitizer);
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.sanitize(5 /* RESOURCE_URL */, value);
      case "url":
        return this.sanitizer.sanitize(4 /* URL */, value);
      case "script":
        return this.sanitizer.sanitize(3 /* SCRIPT */, value);
      case "style":
        return this.sanitizer.sanitize(2 /* STYLE */, value);
      default:
        return this.sanitizer.sanitize(1 /* HTML */, value);
    }
  }
  static \u0275fac = function SanitizePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SanitizePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sanitize", type: _SanitizePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanitizePipe, [{
    type: Pipe,
    args: [{
      name: "sanitize"
    }]
  }], null, null);
})();

export {
  SanitizePipe
};
//# debugId=168465dd-2c22-576c-80d5-65f7ff3813e9
//# sourceMappingURL=chunk-266GOI67.js.map
