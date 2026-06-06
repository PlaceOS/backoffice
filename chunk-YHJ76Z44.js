import {
  Service,
  St,
  setClassMetadata,
  signal,
  xo,
  ɵɵdefineService
} from "./chunk-N6UZRJAT.js";

// src/app/admin/admin-data.service.ts
var AdminDataService = class _AdminDataService {
  _domain_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "_domain_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _loading_domains = signal(
    false,
    ...ngDevMode ? [{ debugName: "_loading_domains" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _domain_error = signal(
    null,
    ...ngDevMode ? [{ debugName: "_domain_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _selected_domains = /* @__PURE__ */ new Map();
  _filters = /* @__PURE__ */ new Map();
  _sorts = /* @__PURE__ */ new Map();
  _domain_request = null;
  domain_list = this._domain_list.asReadonly();
  loading_domains = this._loading_domains.asReadonly();
  domain_error = this._domain_error.asReadonly();
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
  sort(key) {
    let sort = this._sorts.get(key);
    if (!sort) {
      sort = signal(["", false]);
      this._sorts.set(key, sort);
    }
    return sort;
  }
  sortBy(key, new_field) {
    const sort = this.sort(key);
    const [field, asc] = sort();
    if (field === new_field) {
      sort.set(asc ? ["", false] : [new_field, true]);
    } else {
      sort.set([new_field, false]);
    }
  }
  async loadDomains(limit = 500) {
    if (this._domain_list().length)
      return this._domain_list();
    if (this._domain_request)
      return this._domain_request;
    this._loading_domains.set(true);
    this._domain_error.set(null);
    this._domain_request = xo({ limit }).then((response) => response.data || []).catch((error) => {
      this._domain_error.set(error);
      return [];
    }).then((domains) => {
      this._domain_list.set(domains);
      return domains;
    }).finally(() => {
      this._loading_domains.set(false);
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
    const current = St();
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
//# sourceMappingURL=chunk-YHJ76Z44.js.map
