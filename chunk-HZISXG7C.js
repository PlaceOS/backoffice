import {
  DomSanitizer
} from "./chunk-7ONBXR6Y.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-YCZTZCQV.js";

// src/app/ui/pipes/markdown.pipe.ts
var loadRenderer = () => import("./chunk-HCIFBQW5.js");
var MarkdownPipe = class _MarkdownPipe {
  sanitizer = inject(DomSanitizer);
  cache = /* @__PURE__ */ new Map();
  transform(value) {
    const markdown = value || "";
    if (!this.cache.has(markdown)) {
      this.cache.set(markdown, loadRenderer().then(({ renderMarkdown }) => renderMarkdown(markdown)).then((html) => this.sanitizer.bypassSecurityTrustHtml(html)));
    }
    return this.cache.get(markdown);
  }
  static \u0275fac = function MarkdownPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkdownPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdown", type: _MarkdownPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "markdown",
      standalone: true
    }]
  }], null, null);
})();

export {
  MarkdownPipe
};
//# debugId=c9292848-97e9-52e1-9707-ed46e1834d51
//# sourceMappingURL=chunk-HZISXG7C.js.map
