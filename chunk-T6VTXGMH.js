import {
  d
} from "./chunk-OMHAHFWO.js";
import {
  FullscreenModalShellComponent
} from "./chunk-HVEA2SCZ.js";
import "./chunk-AYXNAT23.js";
import {
  BackofficeUsersService
} from "./chunk-FX7JK7RR.js";
import {
  VERSION
} from "./chunk-4W3B5TXE.js";
import "./chunk-W3LP6CHX.js";
import {
  format
} from "./chunk-D6PVNXBZ.js";
import "./chunk-LYW23EPM.js";
import "./chunk-4CBXDUSX.js";
import "./chunk-W3GXKXZC.js";
import {
  MAT_DIALOG_DATA,
  MatDialog
} from "./chunk-MNFEZLRO.js";
import "./chunk-XSCAXKGH.js";
import {
  AsyncHandler
} from "./chunk-3LEBC5GS.js";
import "./chunk-3DOKPZ3J.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-WIN2774F.js";
import "./chunk-MMIWWJ2B.js";
import {
  notifyError,
  notifyInfo
} from "./chunk-IQ5P3T5K.js";
import "./chunk-H5MOLNWN.js";
import "./chunk-PJJZ73WC.js";
import {
  TranslatePipe,
  i18n
} from "./chunk-WSRCHTK7.js";
import "./chunk-DT6XLHSE.js";
import "./chunk-KZU5VDTQ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  SlicePipe,
  copyToClipboard,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-TUZQ7R7Y.js";
import {
  N,
  lastValueFrom,
  x
} from "./chunk-74QWELJT.js";
import "./chunk-VYXW4D3Z.js";

// src/app/overlays/changelog-modal.component.ts
function ChangelogModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(1, 1, ctx_r0.changelog, "html"), \u0275\u0275sanitizeHtml);
  }
}
function ChangelogModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 3);
    \u0275\u0275text(2, "playlist_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "COMMON.CHANGELOG_EMPTY"), " ");
  }
}
var ChangelogModalComponent = class _ChangelogModalComponent extends AsyncHandler {
  _data = inject(MAT_DIALOG_DATA);
  /** Whether the changelog is loading */
  loading;
  /** Changelog Markdown */
  item;
  /** HTML string for rendering the change log */
  get changelog() {
    return d(this._data.changelog || "", { async: false });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChangelogModalComponent_BaseFactory;
    return function ChangelogModalComponent_Factory(__ngFactoryType__) {
      return (\u0275ChangelogModalComponent_BaseFactory || (\u0275ChangelogModalComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChangelogModalComponent)))(__ngFactoryType__ || _ChangelogModalComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangelogModalComponent, selectors: [["changelog-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 5, consts: [[3, "heading", "hide_confirm"], [1, "markdown", "changelog", "items-start", 3, "innerHTML"], [1, "flex", "h-[50vh]", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], [1, "text-7xl"], [1, "text"]], template: function ChangelogModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275conditionalCreate(2, ChangelogModalComponent_Conditional_2_Template, 2, 4, "div", 1)(3, ChangelogModalComponent_Conditional_3_Template, 6, 3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 3, "COMMON.CHANGELOG"))("hide_confirm", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.changelog ? 2 : 3);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    IconComponent,
    SafePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangelogModalComponent, [{
    type: Component,
    args: [{ selector: "changelog-modal", template: `
        <fullscreen-modal-shell
            [heading]="'COMMON.CHANGELOG' | translate"
            [hide_confirm]="true"
        >
            @if (changelog) {
                <div
                    class="markdown changelog items-start"
                    [innerHTML]="changelog | safe: 'html'"
                ></div>
            } @else {
                <div
                    class="flex h-[50vh] w-full flex-col items-center justify-center space-y-4"
                >
                    <icon class="text-7xl">playlist_remove</icon>
                    <div class="text">
                        {{ 'COMMON.CHANGELOG_EMPTY' | translate }}
                    </div>
                </div>
            }
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SafePipe,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangelogModalComponent, { className: "ChangelogModalComponent", filePath: "src/app/overlays/changelog-modal.component.ts", lineNumber: 48 });
})();

// src/app/admin/details.component.ts
function PlaceDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 22);
    \u0275\u0275domListener("click", function PlaceDetailsComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changelog(ctx_r1.backoffice_logs()));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.VIEW_CHANGELOG"), " ");
  }
}
function PlaceDetailsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "code", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.backend_version(), " ");
  }
}
function PlaceDetailsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 22);
    \u0275\u0275domListener("click", function PlaceDetailsComponent_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changelog(ctx_r1.changelog_data()));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADMIN.VIEW_CHANGELOG"), " ");
  }
}
function PlaceDetailsComponent_Conditional_43_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 23)(1, "h3", 24);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 25)(4, "div", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div")(8, "code");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div")(15, "code");
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "div", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div")(21, "code");
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(23, "div", 26);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "div", 27);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const api_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", api_r4.service, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("grid-template-columns", "7.5rem auto");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "COMMON.GIT_COMMIT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(10, 13, api_r4.commit, 0, 8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 17, "COMMON.VERSION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(api_r4.version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "ADMIN.PLATFORM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(api_r4.platform_version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 21, "ADMIN.BUILT_AT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 23, api_r4.build_time, "MMM d, y, h:mm a"), " ");
  }
}
function PlaceDetailsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PlaceDetailsComponent_Conditional_43_For_1_Template, 29, 26, "div", 23, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.api_details());
  }
}
function PlaceDetailsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 21)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "ADMIN.BACKEND_SERVICES_EMPTY"), " ");
  }
}
var PlaceDetailsComponent = class _PlaceDetailsComponent extends AsyncHandler {
  _users = inject(BackofficeUsersService);
  _dialog = inject(MatDialog);
  _cdr = inject(ChangeDetectorRef);
  /** Current details about the API */
  api_details = signal([], ...ngDevMode ? [{ debugName: "api_details" }] : []);
  changelog_data = signal("", ...ngDevMode ? [{ debugName: "changelog_data" }] : []);
  backend_version = signal("", ...ngDevMode ? [{ debugName: "backend_version" }] : []);
  backoffice_logs = signal("", ...ngDevMode ? [{ debugName: "backoffice_logs" }] : []);
  get user() {
    return this._users.user;
  }
  get backoffice_version() {
    return VERSION?.stamp || "";
  }
  get backoffice_tag() {
    return VERSION?.tag || "";
  }
  get backoffice_hash() {
    return VERSION?.hash || "";
  }
  get backoffice_build() {
    return `${format(VERSION.time, "dd MMM yyyy")} at ${format(VERSION.time, " h:mma")}`;
  }
  ngOnInit() {
    this.loadApiDetails();
    this.loadPlatformDetails();
  }
  changelog(log) {
    this._dialog.open(ChangelogModalComponent, {
      data: { changelog: log }
    });
  }
  copy(name, content) {
    copyToClipboard(content);
    notifyInfo(i18n("ADMIN.COPIED", { name }));
  }
  async loadApiDetails() {
    const details = await lastValueFrom(N(`${x()}/cluster/versions`)).catch((err) => notifyError(i18n("ADMIN.BACKEND_SERVICES_ERROR", {
      error: JSON.stringify(err.response || err.message || err)
    })));
    this.api_details.set(details || []);
    this._cdr.detectChanges();
  }
  async loadPlatformDetails() {
    const { changelog, version } = await lastValueFrom(N(`${x()}/platform`)).catch((err) => {
      notifyError(i18n("ADMIN.BACKEND_SERVICES_ERROR", {
        error: JSON.stringify(err.response || err.message || err)
      }));
      throw err;
    });
    this.changelog_data.set(changelog.replace("# Changelog\n\n", ""));
    this.backend_version.set(version);
    this.backoffice_logs.set(await (await fetch("https://raw.githubusercontent.com/PlaceOS/backoffice/develop/CHANGELOG.md")).text());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlaceDetailsComponent_BaseFactory;
    return function PlaceDetailsComponent_Factory(__ngFactoryType__) {
      return (\u0275PlaceDetailsComponent_BaseFactory || (\u0275PlaceDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PlaceDetailsComponent)))(__ngFactoryType__ || _PlaceDetailsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceDetailsComponent, selectors: [["app-engine-details"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 45, vars: 25, consts: [[1, "my-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "text-2xl"], [1, "bg-base-200", "mb-4", "flex", "items-center", "space-x-2", "rounded-sm", "px-4", "py-2"], [1, "text-lg", "font-medium"], [1, "mono", "ml-2", "opacity-60"], [1, "flex-1"], [1, "p-2", "text-xs", "underline"], [1, "border-base-200", "mb-4", "inline-grid", "gap-2", "rounded-sm", "border", "p-4"], ["for", "version", 1, "flex", "items-center", "text-sm", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["matRipple", "", 3, "click"], ["name", "version"], ["matRipple", "", 1, "ml-2", 3, "click"], ["name", "tag"], ["for", "hash", 1, "flex", "items-center", "text-sm", "font-medium"], ["name", "hash", "tabindex", "0", "role", "button", 3, "click", "keyup.enter"], ["for", "build-time", 1, "flex", "items-center", "text-sm", "font-medium"], ["name", "build-time", "tabindex", "0", "role", "button", 1, "text-sm", 3, "click", "keyup.enter"], [1, "bg-base-200", "flex", "items-center", "space-x-4", "rounded-sm", "px-4", "py-2"], [1, "bg-base-300"], [1, "-mx-2", "flex", "flex-wrap", "py-2"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "p-24"], [1, "p-2", "text-xs", "underline", 3, "click"], [1, "border-base-200", "bg-base-100", "m-2", "min-w-[40%]", "flex-1", "overflow-hidden", "rounded-sm", "border"], [1, "mono", "border-base-200", "w-full", "border-b", "px-4", "py-2"], [1, "inline-grid", "gap-2", "p-4"], [1, "flex", "items-center", "text-sm", "font-medium"], [1, "text-sm"], [1, "border-base-300", "bg-base-200", "rounded-lg", "border", "p-4", "opacity-30"]], template: function PlaceDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Backoffice & PlaceOS Details");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(3, "div", 2)(4, "h3", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275domElementStart(7, "span", 4);
      \u0275\u0275text(8, "Backoffice");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(9, "div", 5);
      \u0275\u0275conditionalCreate(10, PlaceDetailsComponent_Conditional_10_Template, 3, 3, "button", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "section", 7)(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div", 9)(16, "button", 10);
      \u0275\u0275domListener("click", function PlaceDetailsComponent_Template_button_click_16_listener() {
        return ctx.copy("version", ctx.backoffice_version);
      });
      \u0275\u0275domElementStart(17, "code", 11);
      \u0275\u0275text(18);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "button", 12);
      \u0275\u0275domListener("click", function PlaceDetailsComponent_Template_button_click_19_listener() {
        return ctx.copy("tag", ctx.backoffice_tag);
      });
      \u0275\u0275domElementStart(20, "code", 13);
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(22, "div", 14);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div")(26, "code", 15);
      \u0275\u0275domListener("click", function PlaceDetailsComponent_Template_code_click_26_listener() {
        return ctx.copy("hash", ctx.backoffice_hash);
      })("keyup.enter", function PlaceDetailsComponent_Template_code_keyup_enter_26_listener() {
        return ctx.copy("hash", ctx.backoffice_hash);
      });
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "div", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "div", 17);
      \u0275\u0275domListener("click", function PlaceDetailsComponent_Template_div_click_31_listener() {
        return ctx.copy("build time", ctx.backoffice_build);
      })("keyup.enter", function PlaceDetailsComponent_Template_div_keyup_enter_31_listener() {
        return ctx.copy("build time", ctx.backoffice_build);
      });
      \u0275\u0275text(32);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "div", 18)(34, "div", 3);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275domElementStart(37, "span", 4);
      \u0275\u0275text(38, "API");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(39, PlaceDetailsComponent_Conditional_39_Template, 2, 1, "code", 19);
      \u0275\u0275domElement(40, "div", 5);
      \u0275\u0275conditionalCreate(41, PlaceDetailsComponent_Conditional_41_Template, 3, 3, "button", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "section", 20);
      \u0275\u0275conditionalCreate(43, PlaceDetailsComponent_Conditional_43_Template, 2, 0)(44, PlaceDetailsComponent_Conditional_44_Template, 4, 3, "div", 21);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "ADMIN.APPLICATION_DETAILS"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.backoffice_logs() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("grid-template-columns", "6.5rem auto");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "COMMON.VERSION"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.backoffice_version, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.backoffice_tag, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 19, "COMMON.GIT_COMMIT"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.backoffice_hash, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 21, "ADMIN.BUILD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.backoffice_build, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 23, "ADMIN.BACKEND_SERVICES"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.backend_version() ? 39 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.changelog_data() ? 41 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.api_details().length > 0 ? 43 : 44);
    }
  }, dependencies: [CommonModule, TranslatePipe, SlicePipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-engine-details", template: `
        <div class="my-4 flex items-center justify-between space-x-2">
            <div class="text-2xl">Backoffice & PlaceOS Details</div>
        </div>
        <div
            class="bg-base-200 mb-4 flex items-center space-x-2 rounded-sm px-4 py-2"
        >
            <h3 class="text-lg font-medium">
                {{ 'ADMIN.APPLICATION_DETAILS' | translate }}
                <span class="mono ml-2 opacity-60">Backoffice</span>
            </h3>
            <div class="flex-1"></div>
            @if (backoffice_logs()) {
                <button
                    class="p-2 text-xs underline"
                    (click)="changelog(backoffice_logs())"
                >
                    {{ 'ADMIN.VIEW_CHANGELOG' | translate }}
                </button>
            }
        </div>
        <section
            class="border-base-200 mb-4 inline-grid gap-2 rounded-sm border p-4"
            [style.gridTemplateColumns]="'6.5rem auto'"
        >
            <div class="flex items-center text-sm font-medium" for="version">
                {{ 'COMMON.VERSION' | translate }}
            </div>
            <div class="flex items-center space-x-2">
                <button matRipple (click)="copy('version', backoffice_version)">
                    <code name="version">
                        {{ backoffice_version }}
                    </code>
                </button>
                <button
                    matRipple
                    class="ml-2"
                    (click)="copy('tag', backoffice_tag)"
                >
                    <code name="tag">
                        {{ backoffice_tag }}
                    </code>
                </button>
            </div>
            <div class="flex items-center text-sm font-medium" for="hash">
                {{ 'COMMON.GIT_COMMIT' | translate }}
            </div>
            <div>
                <code
                    name="hash"
                    tabindex="0"
                    role="button"
                    (click)="copy('hash', backoffice_hash)"
                    (keyup.enter)="copy('hash', backoffice_hash)"
                >
                    {{ backoffice_hash }}
                </code>
            </div>
            <div class="flex items-center text-sm font-medium" for="build-time">
                {{ 'ADMIN.BUILD' | translate }}
            </div>
            <div
                name="build-time"
                class="text-sm"
                tabindex="0"
                role="button"
                (click)="copy('build time', backoffice_build)"
                (keyup.enter)="copy('build time', backoffice_build)"
            >
                {{ backoffice_build }}
            </div>
        </section>
        <div
            class="bg-base-200 flex items-center space-x-4 rounded-sm px-4 py-2"
        >
            <div class="text-lg font-medium">
                {{ 'ADMIN.BACKEND_SERVICES' | translate }}
                <span class="mono ml-2 opacity-60">API</span>
            </div>
            @if (backend_version()) {
                <code class="bg-base-300">
                    {{ backend_version() }}
                </code>
            }
            <div class="flex-1"></div>
            @if (changelog_data()) {
                <button
                    class="p-2 text-xs underline"
                    (click)="changelog(changelog_data())"
                >
                    {{ 'ADMIN.VIEW_CHANGELOG' | translate }}
                </button>
            }
        </div>
        <section class="-mx-2 flex flex-wrap py-2">
            @if (api_details().length > 0) {
                @for (api of api_details(); track $index) {
                    <div
                        class="border-base-200 bg-base-100 m-2 min-w-[40%] flex-1 overflow-hidden rounded-sm border"
                    >
                        <h3
                            class="mono border-base-200 w-full border-b px-4 py-2"
                        >
                            {{ api.service }}
                        </h3>
                        <div
                            class="inline-grid gap-2 p-4"
                            [style.gridTemplateColumns]="'7.5rem auto'"
                        >
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.GIT_COMMIT' | translate }}
                            </div>
                            <div>
                                <code>{{ api.commit | slice: 0 : 8 }}</code>
                            </div>
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.VERSION' | translate }}
                            </div>
                            <div>
                                <code>{{ api.version }}</code>
                            </div>
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ADMIN.PLATFORM' | translate }}
                            </div>
                            <div>
                                <code>{{ api.platform_version }}</code>
                            </div>
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ADMIN.BUILT_AT' | translate }}
                            </div>
                            <div class="text-sm">
                                {{ api.build_time | date: 'MMM d, y, h:mm a' }}
                            </div>
                        </div>
                    </div>
                }
            } @else {
                <div
                    class="flex w-full flex-col items-center justify-center p-24"
                >
                    <div
                        class="border-base-300 bg-base-200 rounded-lg border p-4 opacity-30"
                    >
                        {{ 'ADMIN.BACKEND_SERVICES_EMPTY' | translate }}
                    </div>
                </div>
            }
        </section>
    `, imports: [TranslatePipe, CommonModule], styles: ["/* angular:styles/component:css;a9c9b54ac1150998ce0ae85eb89bb6d8fd79aeab8edd84be4a671d3bf76cdf8a;/home/runner/work/backoffice/backoffice/src/app/admin/details.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=details.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceDetailsComponent, { className: "PlaceDetailsComponent", filePath: "src/app/admin/details.component.ts", lineNumber: 206 });
})();
export {
  PlaceDetailsComponent
};
//# sourceMappingURL=chunk-T6VTXGMH.js.map
