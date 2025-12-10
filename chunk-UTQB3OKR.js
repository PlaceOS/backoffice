import {
  AsyncHandler
} from "./chunk-VGLA4YGG.js";
import {
  Directive,
  ElementRef,
  Input,
  inject,
  input,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-AJKLM77M.js";
import {
  Ut,
  X,
  zt
} from "./chunk-ESVM3M45.js";

// src/app/ui/authenticated-image.directive.ts
var IMAGE_STORE = /* @__PURE__ */ new Map();
var AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  _image_el = inject(ElementRef);
  source = input(void 0, ...ngDevMode ? [{ debugName: "source" }] : []);
  ngOnChanges(changes) {
    if (changes.source && this.source())
      this._loadImage().catch();
  }
  async _loadImage() {
    if (!this._image_el || !Ut()) {
      return this.timeout("load", () => this._loadImage().catch(), 300);
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
    const tkn = X();
    document.cookie = `${tkn === "x-api-key" ? "api-key=" + encodeURIComponent(zt()) : "bearer_token=" + encodeURIComponent(tkn)};max-age=60;path=/api/;samesite=strict;${location.protocol === "https:" ? "secure;" : ""}`;
    const response = await fetch(source);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    IMAGE_STORE.set(source, url);
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
//# sourceMappingURL=chunk-UTQB3OKR.js.map
