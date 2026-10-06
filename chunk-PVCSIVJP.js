import {
  AsyncHandler
} from "./chunk-SDGTGI2H.js";
import {
  Directive,
  ElementRef,
  Input,
  J,
  Mt,
  Xe,
  inject,
  input,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-M2N6S2L7.js";

// src/app/ui/authenticated-image.directive.ts
var IMAGE_STORE = /* @__PURE__ */ new Map();
var MAX_AUTH_WAIT_ATTEMPTS = 100;
var AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  _image_el = inject(ElementRef);
  source = input(
    void 0,
    ...ngDevMode ? [{ debugName: "source" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnChanges(changes) {
    if (changes.source && this.source())
      this._load();
  }
  _load(attempt = 0) {
    this._loadImage(attempt).catch((e) => console.warn("Failed to load image:", e));
  }
  async _loadImage(attempt) {
    if (!this._image_el || !Mt()) {
      if (attempt >= MAX_AUTH_WAIT_ATTEMPTS)
        return;
      return this.timeout("load", () => this._load(attempt + 1), 300);
    }
    const source = this.source();
    if (!source.includes("/api/engine/v2/uploads")) {
      this._image_el.nativeElement.src = source;
      return;
    }
    if (IMAGE_STORE.has(source)) {
      this._image_el.nativeElement.src = IMAGE_STORE.get(source);
      return;
    }
    const tkn = J();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(Xe()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    IMAGE_STORE.set(source, url);
    if (this.source() !== source)
      return;
    this._image_el.nativeElement.src = url;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AuthenticatedImageDirective_BaseFactory;
    return function AuthenticatedImageDirective_Factory(__ngFactoryType__) {
      return (\u0275AuthenticatedImageDirective_BaseFactory || (\u0275AuthenticatedImageDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AuthenticatedImageDirective)))(__ngFactoryType__ || _AuthenticatedImageDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AuthenticatedImageDirective, selectors: [["img", "auth", ""], ["video", "auth", ""]], inputs: { source: [1, "source"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatedImageDirective, [{
    type: Directive,
    args: [{
      selector: "img [auth],video [auth]"
    }]
  }], null, { source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }] });
})();

export {
  AuthenticatedImageDirective
};
//# sourceMappingURL=chunk-PVCSIVJP.js.map
