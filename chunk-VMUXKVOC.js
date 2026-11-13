import {
  Jo,
  Mt
} from "./chunk-LCM7Z6QA.js";
import {
  Service,
  setClassMetadata,
  signal,
  ɵɵdefineService
} from "./chunk-6G3VFYSX.js";

// src/app/admin/admin-data.service.ts
var AdminDataService = class _AdminDataService {
  _domain_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _selected_domains = /* @__PURE__ */ new Map();
  _filters = /* @__PURE__ */ new Map();
  _sorts = /* @__PURE__ */ new Map();
  _domain_request = null;
  domain_list = this._domain_list.asReadonly();
  selectedDomain(key) {
    let selected = this._selected_domains.get(key);
    if (!selected) {
      selected = signal(null);
      this._selected_domains.set(key, selected);
    }
    return selected;
  }
  filter(key) {
    let filter = this._filters.get(key);
    if (!filter) {
      filter = signal("");
      this._filters.set(key, filter);
    }
    return filter;
  }
  /** Table sort of an admin page, kept while the app is open */
  sort(key) {
    let sort = this._sorts.get(key);
    if (!sort) {
      sort = signal(null);
      this._sorts.set(key, sort);
    }
    return sort;
  }
  async loadDomains(limit = 500) {
    if (this._domain_list().length)
      return this._domain_list();
    if (this._domain_request)
      return this._domain_request;
    this._domain_request = Jo({ limit }).then((response) => response.data || []).catch(() => []).then((domains) => {
      this._domain_list.set(domains);
      return domains;
    }).finally(() => {
      this._domain_request = null;
    });
    return this._domain_request;
  }
  async selectDefaultDomain(key, options = {}) {
    const selected = this.selectedDomain(key);
    const domains = await this.loadDomains(options.limit);
    const active_selection = selected();
    if (active_selection && domains.some((domain) => domain.id === active_selection.id)) {
      return active_selection;
    }
    const current = Mt();
    const match = domains.find((domain) => domain.id === current.id);
    const next = match || (options.fallbackFirst ? domains[0] : null);
    selected.set(next || null);
    return selected();
  }
  setDomain(key, domain) {
    this.selectedDomain(key).set(domain);
  }
  replaceDomain(domain) {
    this._domain_list.update((list) => list.map((item) => item.id === domain.id ? domain : item));
    for (const selected of this._selected_domains.values()) {
      if (selected()?.id === domain.id)
        selected.set(domain);
    }
  }
  static \u0275fac = function AdminDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _AdminDataService, factory: _AdminDataService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDataService, [{
    type: Service
  }], null, null);
})();

export {
  AdminDataService
};
//# debugId=70ecbc32-263d-5c21-a13d-e8b1e2536627
//# sourceMappingURL=chunk-VMUXKVOC.js.map
