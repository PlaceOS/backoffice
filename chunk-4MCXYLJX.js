import {
  BehaviorSubject,
  Injectable,
  map,
  of,
  ru,
  setClassMetadata,
  shareReplay,
  ɵɵdefineInjectable
} from "./chunk-C25AKIFS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/mailing-lists/email-state.service.ts
var EmailStateService = class _EmailStateService {
  _loading = new BehaviorSubject(false);
  _change = new BehaviorSubject(0);
  _domain = new BehaviorSubject(null);
  template_definitions = of([]);
  templates = of([]);
  domain = this._domain.asObservable();
  loading = this._loading.asObservable();
  domain_list = ru({ limit: 100 }).pipe(map((r) => r.data), shareReplay(1));
  constructor() {
  }
  setDomain(domain) {
    this._domain.next(domain);
  }
  getDomain() {
    return this._domain.getValue();
  }
  async loadTemplate(id) {
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
    const details = __spreadProps(__spreadValues({}, template), {
      subject: template.subject || "",
      html: template.html || "",
      text: template.text || ""
    });
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
  }], () => [], null);
})();

export {
  EmailStateService
};
//# sourceMappingURL=chunk-4MCXYLJX.js.map
