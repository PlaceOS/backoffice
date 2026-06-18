import {
  AdminDataService
} from "./chunk-7KVQPNRA.js";
import {
  Service,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-QSXZQV2A.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/admin/mailing-lists/email-state.service.ts
var EmailStateService = class _EmailStateService {
  _admin_data = inject(AdminDataService);
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
  _domain = this._admin_data.selectedDomain("mailing-list");
  template_definitions = signal([]).asReadonly();
  templates = signal([]).asReadonly();
  domain = this._domain.asReadonly();
  loading = this._loading.asReadonly();
  domain_list = this._admin_data.domain_list;
  setDomain(domain) {
    this._admin_data.setDomain("mailing-list", domain);
  }
  async selectDefaultDomain() {
    return this._admin_data.selectDefaultDomain("mailing-list");
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
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _EmailStateService, factory: _EmailStateService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailStateService, [{
    type: Service
  }], null, null);
})();

export {
  EmailStateService
};
//# sourceMappingURL=chunk-3NP5XGRR.js.map
