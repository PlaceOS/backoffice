import {
  SimpleTableComponent
} from "./chunk-A7H3VPGN.js";
import {
  AdminDomainSelectComponent
} from "./chunk-YYC573KB.js";
import {
  refocusIfLost
} from "./chunk-2GN5J46I.js";
import {
  AdminDataService
} from "./chunk-5D2EQCRN.js";
import {
  mapLimit
} from "./chunk-JBQNBPPI.js";
import {
  openConfirmModal
} from "./chunk-6PURSEHW.js";
import "./chunk-ARF53UMV.js";
import "./chunk-24SP3OZG.js";
import {
  readError
} from "./chunk-HS2B2TZM.js";
import {
  ProgressBarComponent
} from "./chunk-4BOXZ4WO.js";
import {
  place_exports
} from "./chunk-ZUAP4Y6Q.js";
import {
  collectPages
} from "./chunk-SBKLZZRV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-LL56AHAM.js";
import {
  notifyError,
  notifyInfo,
  notifySuccess
} from "./chunk-V2X4XHND.js";
import "./chunk-V3DC4H2S.js";
import "./chunk-OTF7M54K.js";
import "./chunk-U6VSGXZ4.js";
import "./chunk-CH2YF4Y7.js";
import "./chunk-ZOC3VF7F.js";
import "./chunk-SSVO7UC4.js";
import "./chunk-5APMNGCP.js";
import "./chunk-ODMV6TQA.js";
import {
  Dialog
} from "./chunk-762ECDWF.js";
import {
  TranslatePipe
} from "./chunk-LUXSIEQ6.js";
import {
  i18n
} from "./chunk-2BK6GMG5.js";
import {
  systems_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow,
  orThrowPage
} from "./chunk-LD3K5ATK.js";
import {
  escapeHtml
} from "./chunk-Y2QSYZTA.js";
import {
  IconComponent
} from "./chunk-ZCU5RNS5.js";
import "./chunk-QY7ZA5QE.js";
import {
  TooltipDirective
} from "./chunk-TX7UOGZW.js";
import "./chunk-GB3VUBDQ.js";
import "./chunk-QNK6X2WC.js";
import "./chunk-BRT76G6A.js";
import {
  Component,
  Injector,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-6G3VFYSX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/resource-imports.component.ts
var _c0 = ["heading"];
var _c1 = (a0, a1) => ({ key: "display_name", name: a0, content: a1 });
var _c2 = (a0, a1) => ({ key: "email", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "imported", name: a0, content: a1, size: "5.5rem" });
var _c4 = (a0, a1) => ({ key: "actions", name: a0, hide_name: true, content: a1, sortable: false, size: "6.25rem" });
var _c5 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c6 = (a0) => ["/systems", a0, "about"];
function ResourceImportsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function ResourceImportsComponent_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadDomains(true));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "ADMIN.DOMAINS_LOAD_ERROR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-busy", ctx_r1.domains_loading())("aria-disabled", ctx_r1.domains_loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "COMMON.RETRY"), " ");
  }
}
function ResourceImportsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function ResourceImportsComponent_Conditional_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadResourceList(true));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.load_error());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-busy", ctx_r1.loading())("aria-disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.RETRY"), " ");
  }
}
function ResourceImportsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r4);
  }
}
function ResourceImportsComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275classProp("bg-error", !data_r5)("bg-success", data_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5 ? "done" : "close");
  }
}
function ResourceImportsComponent_ng_template_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.nickname, " ");
  }
}
function ResourceImportsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ResourceImportsComponent_ng_template_30_Conditional_4_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.display_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.nickname !== row_r6.display_name ? 4 : -1);
  }
}
function ResourceImportsComponent_ng_template_32_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().row;
    \u0275\u0275property("appTooltip", \u0275\u0275pipeBind1(1, 2, "ADMIN.RESOURCE_IMPORTS_VIEW"))("routerLink", \u0275\u0275pureFunction1(4, _c6, row_r8.system_id));
  }
}
function ResourceImportsComponent_ng_template_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 29)(1, "icon");
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd()();
  }
}
function ResourceImportsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ResourceImportsComponent_ng_template_32_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.importResource(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "publish");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, ResourceImportsComponent_ng_template_32_Conditional_5_Template, 4, 6, "a", 28)(6, ResourceImportsComponent_ng_template_32_Conditional_6_Template, 3, 0, "button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r8.imported || !ctx_r1.domain())("appTooltip", \u0275\u0275pipeBind1(2, 3, "ADMIN.RESOURCE_IMPORTS_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(row_r8.system_id ? 5 : 6);
  }
}
var IMPORT_LIMIT = 5;
var EMAIL_CHUNK_SIZE = 100;
var ResourceImportsComponent = class _ResourceImportsComponent {
  _dialog = inject(Dialog);
  _admin_data = inject(AdminDataService);
  _injector = inject(Injector);
  _heading = viewChild(
    "heading",
    ...ngDevMode ? [{ debugName: "_heading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The domain that names the imported systems. The staff API has no
   * domain input: it lists the rooms of the tenant of the host.
   */
  domain = this._admin_data.selectedDomain("resource-imports");
  resource_list = signal(
    [],
    ...ngDevMode ? [{ debugName: "resource_list" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Why the rooms did not load. Imports stay off until they load */
  load_error = signal(
    "",
    ...ngDevMode ? [{ debugName: "load_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether no domains loaded. An import needs a domain. */
  domains_failed = signal(
    false,
    ...ngDevMode ? [{ debugName: "domains_failed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  domains_loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "domains_loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Import in flight for each room email, so a room gets one system */
  _importing = /* @__PURE__ */ new Map();
  /**
   * Load the domains for the picker, and select the default domain. The
   * error, with its Retry button, stays until the domains load.
   * @param retry From the Retry button. When the domains load, the button
   * goes, so the heading gets the focus.
   */
  async loadDomains(retry = false) {
    if (this.domains_loading())
      return;
    this.domains_loading.set(true);
    const domain = await this._admin_data.selectDefaultDomain("resource-imports").finally(() => this.domains_loading.set(false));
    const failed = !domain && !this._admin_data.domain_list().length;
    this.domains_failed.set(failed);
    if (retry && !failed)
      refocusIfLost(this._injector, () => this._heading()?.nativeElement);
  }
  ngOnInit() {
    this.loadDomains();
    this.loadResourceList();
  }
  async importMissingResources() {
    const domain = this.domain();
    if (!domain)
      return;
    const list = this.resource_list();
    const missing = list.filter((_) => !_.imported);
    if (!missing.length) {
      return notifyInfo(i18n("ADMIN.RESOURCE_IMPORTS_ALL_WARNING"));
    }
    const resp = await openConfirmModal({
      title: i18n("ADMIN.RESOURCE_IMPORTS_ALL_TITLE"),
      content: `
                <p class="mb-4">${i18n("ADMIN.RESOURCE_IMPORTS_ALL_MSG", {
        count: missing.length
      })}</p>
                <ul class="list-disc ml-4 text-left px-8 text-sm">${missing.map((_) => `<li>${escapeHtml(_.display_name)}</li>`).join("")}</ul>
                `,
      icon: { type: "icon", content: "publish" },
      confirm_text: "Import"
    }, this._dialog);
    if (resp?.reason !== "done")
      return;
    resp.loading(i18n("ADMIN.RESOURCE_IMPORTS_ALL_LOADING"));
    let failed = 0;
    await mapLimit(missing, IMPORT_LIMIT, async (resource) => {
      if (!await this.importResource(resource, false))
        failed += 1;
    });
    resp.close();
    if (failed) {
      notifyError(i18n("ADMIN.RESOURCE_IMPORTS_ALL_ERROR", { count: failed }));
    }
    if (missing.length > failed) {
      notifySuccess(i18n("ADMIN.RESOURCE_IMPORTS_ALL_SUCCESS", {
        count: missing.length - failed
      }));
    }
  }
  /**
   * Create a system for the resource.
   * Returns whether the import succeeded.
   */
  importResource(resource, notify = true) {
    const pending = this._importing.get(resource.email);
    if (pending)
      return pending;
    const run = this._importResource(resource, notify).finally(() => this._importing.delete(resource.email));
    this._importing.set(resource.email, run);
    return run;
  }
  async _importResource(resource, notify) {
    const domain = this.domain();
    if (!domain)
      return false;
    const current = this.resource_list().find((item) => item.email === resource.email);
    if (current?.imported)
      return true;
    const system = await systems_exports.create({
      body: {
        name: `[${domain.name}] ${resource.display_name}`,
        email: resource.email,
        display_name: resource.display_name,
        capacity: resource.capacity
      }
    }).then(orThrow).catch(async (error) => {
      if (notify) {
        notifyError(i18n("ADMIN.RESOURCE_IMPORTS_ERROR", {
          name: resource.display_name,
          error: await readError(error)
        }));
      }
      return null;
    });
    if (!system)
      return false;
    this.resource_list.update((list) => list.map((item) => item.email === resource.email ? __spreadProps(__spreadValues({}, item), { system_id: system.id, imported: true }) : item));
    if (notify) {
      notifySuccess(i18n("ADMIN.RESOURCE_IMPORTS_SUCCESS", {
        name: resource.display_name
      }));
    }
    return true;
  }
  /**
   * Load the rooms and check which ones have a system.
   * @param retry From the Retry button. When the rooms load, the button
   * goes, so the heading gets the focus.
   */
  async loadResourceList(retry = false) {
    if (this.loading())
      return;
    if (retry && !this.domain())
      this.loadDomains();
    this.resource_list.set([]);
    this.loading.set(true);
    const rooms = await place_exports.query({}).then(orThrow).catch(async (err) => {
      this.load_error.set(`Failed to load rooms. Error: ${await readError(err)}`);
      return null;
    });
    if (!rooms) {
      this.loading.set(false);
      return;
    }
    const list = rooms.map((_) => ({
      id: _.id || "",
      booking_type: _.bookingType,
      capacity: _.capacity,
      display_name: _.displayName || "",
      email: _.emailAddress || "",
      is_accessible: _.isWheelChairAccessible ?? false,
      nickname: _.nickname || "",
      phone: _.phone || "",
      tags: _.tags || [],
      imported: false,
      system_id: ""
    }));
    const emails = list.map((_) => _.email).filter((_) => _);
    const system_ids = /* @__PURE__ */ new Map();
    try {
      for (let i = 0; i < emails.length; i += EMAIL_CHUNK_SIZE) {
        const systems = await collectPages(systems_exports.findByEmail({
          in: emails.slice(i, i + EMAIL_CHUNK_SIZE)
        }).then(orThrowPage));
        for (const system of systems) {
          const email = system.email?.toLowerCase();
          if (email && !system_ids.has(email))
            system_ids.set(email, system.id);
        }
      }
    } catch (err) {
      this.load_error.set(`Failed to check imported resources. Error: ${await readError(err)}`);
      this.loading.set(false);
      return;
    }
    for (const resource of list) {
      const system_id = system_ids.get(resource.email.toLowerCase());
      if (system_id) {
        resource.imported = true;
        resource.system_id = system_id;
      }
    }
    this.load_error.set("");
    this.resource_list.set(list);
    this.loading.set(false);
    if (retry)
      refocusIfLost(this._injector, () => this._heading()?.nativeElement);
  }
  static \u0275fac = function ResourceImportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResourceImportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceImportsComponent, selectors: [["resource-imports"]], viewQuery: function ResourceImportsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._heading, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 34, vars: 48, consts: [["heading", ""], ["email_template", ""], ["bool_template", ""], ["name_template", ""], ["actions_template", ""], [1, "flex", "h-full", "w-full", "flex-col"], [1, "my-4", "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "px-4"], ["tabindex", "-1", 1, "text-2xl", "outline-none", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-solid"], [1, "flex", "min-w-0", "flex-wrap", "items-center", "gap-2"], ["id", "resource-imports-prefix", 1, "text-sm", "opacity-60"], ["key", "resource-imports", "labelled_by", "resource-imports-prefix", "field_class", "no-subscript w-56 max-w-full"], ["icon", "", "default", "", "ripple", "", 1, "text-xl", 3, "click", "disabled", "appTooltip"], [1, "h-1/2", "w-full", "flex-1", "overflow-auto", "px-4"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], ["role", "alert", 1, "bg-base-200", "mb-4", "flex", "items-center", "gap-4", "rounded-sm", "p-4"], [1, "mb-4", "block", "min-w-5xl", "text-sm", 3, "data", "columns", "sortable", "empty_message"], ["role", "alert", 1, "text-sm"], ["btn", "", "ripple", "", 1, "clear", 3, "click"], [1, "flex-1"], ["btn", "", "ripple", "", 3, "click"], [1, "mono", "p-4", "text-xs"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", "text-white"], [1, "flex", "items-center", "justify-between", "space-x-2", "px-4", "py-2"], [1, "flex", "flex-1", "flex-col"], [1, "w-full", "truncate"], [1, "text-xs", "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2", "p-2"], ["icon", "", "default", "", "ripple", "", 3, "click", "disabled", "appTooltip"], ["icon", "", "default", "", "ripple", "", 3, "appTooltip", "routerLink"], ["icon", "", "default", "", "disabled", ""]], template: function ResourceImportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7, 0);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 8)(7, "span", 9);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "admin-domain-select", 10);
      \u0275\u0275conditionalCreate(11, ResourceImportsComponent_Conditional_11_Template, 6, 8);
      \u0275\u0275elementStart(12, "button", 11);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function ResourceImportsComponent_Template_button_click_12_listener() {
        return ctx.importMissingResources();
      });
      \u0275\u0275elementStart(15, "icon");
      \u0275\u0275text(16, "download");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 12);
      \u0275\u0275element(18, "app-progress-bar", 13);
      \u0275\u0275conditionalCreate(19, ResourceImportsComponent_Conditional_19_Template, 6, 6, "div", 14);
      \u0275\u0275element(20, "simple-table", 15);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275template(26, ResourceImportsComponent_ng_template_26_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(28, ResourceImportsComponent_ng_template_28_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(30, ResourceImportsComponent_ng_template_30_Template, 5, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(32, ResourceImportsComponent_ng_template_32_Template, 7, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const email_template_r9 = \u0275\u0275reference(27);
      const bool_template_r10 = \u0275\u0275reference(29);
      const name_template_r11 = \u0275\u0275reference(31);
      const actions_template_r12 = \u0275\u0275reference(33);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, "ADMIN.RESOURCE_IMPORTS_HEADER"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "ADMIN.RESOURCE_IMPORTS_PREFIX"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.domains_failed() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.domain() || !ctx.resource_list()?.length)("appTooltip", \u0275\u0275pipeBind1(13, 17, "ADMIN.RESOURCE_IMPORTS_ALL"));
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 19, "ADMIN.RESOURCE_IMPORTS_ALL"));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invisible", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.load_error() ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.resource_list())("columns", \u0275\u0275pureFunction4(43, _c5, \u0275\u0275pureFunction2(31, _c1, \u0275\u0275pipeBind1(21, 21, "COMMON.FIELD_NAME"), name_template_r11), \u0275\u0275pureFunction2(34, _c2, \u0275\u0275pipeBind1(22, 23, "COMMON.FIELD_EMAIL"), email_template_r9), \u0275\u0275pureFunction2(37, _c3, \u0275\u0275pipeBind1(23, 25, "ADMIN.RESOURCE_IMPORTS_IMPORTED"), bool_template_r10), \u0275\u0275pureFunction2(40, _c4, \u0275\u0275pipeBind1(24, 27, "COMMON.ACTIONS"), actions_template_r12)))("sortable", true)("empty_message", ctx.loading() || ctx.load_error() ? "" : \u0275\u0275pipeBind1(25, 29, "ADMIN.RESOURCE_IMPORTS_EMPTY"));
    }
  }, dependencies: [
    ProgressBarComponent,
    TooltipDirective,
    AdminDomainSelectComponent,
    IconComponent,
    RouterModule,
    RouterLink,
    SimpleTableComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourceImportsComponent, [{
    type: Component,
    args: [{ selector: "resource-imports", template: `
        <div class="flex h-full w-full flex-col">
            <!-- On a phone the controls go below the title -->
            <div
                class="my-4 flex flex-wrap items-center justify-between gap-2 px-4"
            >
                <h2
                    #heading
                    tabindex="-1"
                    class="text-2xl outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid"
                >
                    {{ 'ADMIN.RESOURCE_IMPORTS_HEADER' | translate }}
                </h2>
                <div class="flex min-w-0 flex-wrap items-center gap-2">
                    <!-- The rooms do not depend on the domain, so a change does not load them again -->
                    <span
                        id="resource-imports-prefix"
                        class="text-sm opacity-60"
                    >
                        {{ 'ADMIN.RESOURCE_IMPORTS_PREFIX' | translate }}
                    </span>
                    <admin-domain-select
                        key="resource-imports"
                        labelled_by="resource-imports-prefix"
                        field_class="no-subscript w-56 max-w-full"
                    />
                    @if (domains_failed()) {
                        <span role="alert" class="text-sm">
                            {{ 'ADMIN.DOMAINS_LOAD_ERROR' | translate }}
                        </span>
                        <button
                            btn
                            ripple
                            class="clear"
                            [attr.aria-busy]="domains_loading()"
                            [attr.aria-disabled]="domains_loading()"
                            (click)="loadDomains(true)"
                        >
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    }
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        [disabled]="!domain() || !resource_list()?.length"
                        (click)="importMissingResources()"
                        [appTooltip]="'ADMIN.RESOURCE_IMPORTS_ALL' | translate"
                        [attr.aria-label]="
                            'ADMIN.RESOURCE_IMPORTS_ALL' | translate
                        "
                    >
                        <icon>download</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.invisible]="!loading()"
                />
                @if (load_error()) {
                    <div
                        role="alert"
                        class="bg-base-200 mb-4 flex items-center gap-4 rounded-sm p-4"
                    >
                        <p class="flex-1">{{ load_error() }}</p>
                        <button
                            btn
                            ripple
                            [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="loadResourceList(true)"
                        >
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    </div>
                }
                <simple-table
                    class="mb-4 block min-w-5xl text-sm"
                    [data]="resource_list()"
                    [columns]="[
                        {
                            key: 'display_name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'email',
                            name: 'COMMON.FIELD_EMAIL' | translate,
                            content: email_template,
                        },
                        {
                            key: 'imported',
                            name: 'ADMIN.RESOURCE_IMPORTS_IMPORTED' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            sortable: false,
                            size: '6.25rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        loading() || load_error()
                            ? ''
                            : ('ADMIN.RESOURCE_IMPORTS_EMPTY' | translate)
                    "
                />
                <ng-template #email_template let-data="data">
                    <div class="mono p-4 text-xs">{{ data }}</div>
                </ng-template>
                <ng-template #bool_template let-data="data">
                    <div
                        [class.bg-error]="!data"
                        [class.bg-success]="data"
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                    >
                        <icon>{{ data ? 'done' : 'close' }}</icon>
                    </div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex items-center justify-between space-x-2 px-4 py-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <div class="w-full truncate">
                                {{ row.display_name }}
                            </div>
                            @if (row.nickname !== row.display_name) {
                                <div class="text-xs opacity-30">
                                    {{ row.nickname }}
                                </div>
                            }
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            ripple
                            (click)="importResource(row)"
                            [disabled]="row.imported || !domain()"
                            [appTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_IMPORT' | translate
                            "
                        >
                            <icon>publish</icon>
                        </button>
                        @if (row.system_id) {
                            <a
                                icon
                                default
                                ripple
                                [appTooltip]="
                                    'ADMIN.RESOURCE_IMPORTS_VIEW' | translate
                                "
                                [routerLink]="[
                                    '/systems',
                                    row.system_id,
                                    'about',
                                ]"
                            >
                                <icon>visibility</icon>
                            </a>
                        } @else {
                            <button icon default disabled>
                                <icon>visibility</icon>
                            </button>
                        }
                    </div>
                </ng-template>
            </div>
        </div>
    `, imports: [
      ProgressBarComponent,
      TooltipDirective,
      AdminDomainSelectComponent,
      IconComponent,
      RouterModule,
      TranslatePipe,
      SimpleTableComponent
    ] }]
  }], null, { _heading: [{ type: ViewChild, args: ["heading", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceImportsComponent, { className: "ResourceImportsComponent", filePath: "src/app/admin/resource-imports.component.ts", lineNumber: 251 });
})();
export {
  ResourceImportsComponent
};
//# debugId=07d60949-5a0b-597e-b964-a5d528226b38
//# sourceMappingURL=chunk-HPOYBVAG.js.map
