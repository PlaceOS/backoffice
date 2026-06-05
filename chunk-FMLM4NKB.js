import {
  Injectable,
  computed,
  resource,
  setClassMetadata,
  signal,
  xo,
  ɵɵdefineInjectable
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/mailing-lists/email-state.service.ts
var EmailStateService = class _EmailStateService {
  _loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _change = signal(
    0,
    ...ngDevMode ? [{ debugName: "_change" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _domain = signal(
    null,
    ...ngDevMode ? [{ debugName: "_domain" }] : (
      /* istanbul ignore next */
      []
    )
  );
  template_definitions = signal([]).asReadonly();
  templates = signal([]).asReadonly();
  domain = this._domain.asReadonly();
  loading = this._loading.asReadonly();
  _domain_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_domain_list" } : (
    /* istanbul ignore next */
    {}
  )), { loader: async () => xo({ limit: 100 }).then((r) => r.data).catch(() => []) }));
  domain_list = computed(
    () => this._domain_list.value() || [],
    ...ngDevMode ? [{ debugName: "domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setDomain(domain) {
    this._domain.set(domain);
  }
  getDomain() {
    return this._domain();
  }
  async loadTemplate(_id) {
    const domain = this.getDomain();
    if (!domain)
      return;
    const template = {};
    if (!template)
      return;
    return __spreadProps(__spreadValues({}, template), {
      subject: template.subject || "",
      html: template.html || "",
      text: template.text || ""
    });
  }
  async saveTemplate(template) {
    const domain = this.getDomain();
    if (!domain)
      return;
    const _details = __spreadProps(__spreadValues({}, template), {
      subject: template.subject || "",
      html: template.html || "",
      text: template.text || ""
    });
    this._change.set(Date.now());
  }
  static \u0275fac = function EmailStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailStateService, factory: _EmailStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  EmailStateService
};
//# sourceMappingURL=chunk-FMLM4NKB.js.map
