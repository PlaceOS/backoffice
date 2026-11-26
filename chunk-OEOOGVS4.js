import {
  AsyncHandler
} from "./chunk-44FYJ5G4.js";
import {
  authority,
  setAuthCookie
} from "./chunk-V3DC4H2S.js";
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
} from "./chunk-6G3VFYSX.js";

// src/app/ui/authenticated-image.directive.ts
var MAX_AUTH_WAIT_ATTEMPTS = 100;
var AuthenticatedImageDirective = class _AuthenticatedImageDirective extends AsyncHandler {
  _image_el = inject(ElementRef);
  /** Stops the download of the current upload */
  _abort;
  /** Blob URL that this element shows, or empty */
  _object_url = "";
  source = input(
    void 0,
    ...ngDevMode ? [{ debugName: "source" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnChanges(changes) {
    if (!changes.source)
      return;
    this._release();
    if (this.source())
      this._load();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._release();
  }
  /** Stops the current download and frees the blob URL of the last one */
  _release() {
    this._abort?.abort();
    this._abort = void 0;
    if (this._object_url)
      URL.revokeObjectURL(this._object_url);
    this._object_url = "";
  }
  _load(attempt = 0) {
    this._loadImage(attempt).catch((e) => {
      if (e instanceof DOMException && e.name === "AbortError")
        return;
      console.warn("Failed to load image:", e);
    });
  }
  async _loadImage(attempt) {
    if (!this._image_el || !authority()) {
      if (attempt >= MAX_AUTH_WAIT_ATTEMPTS)
        return;
      return this.timeout("load", () => this._load(attempt + 1), 300);
    }
    const source = this.source();
    if (!source.includes("/api/engine/v2/uploads")) {
      this._image_el.nativeElement.src = source;
      return;
    }
    const abort = new AbortController();
    this._abort = abort;
    if (!await setAuthCookie("/api/")) {
      throw new Error("Not signed in");
    }
    const response = await fetch(source, { signal: abort.signal });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const blob = await response.blob();
    if (abort.signal.aborted)
      return;
    this._object_url = URL.createObjectURL(blob);
    this._image_el.nativeElement.src = this._object_url;
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
//# debugId=7469824b-6d7c-58aa-ba93-d57f014629b1
//# sourceMappingURL=chunk-OEOOGVS4.js.map
