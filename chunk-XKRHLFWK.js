import {
  SettingsFieldComponent
} from "./chunk-BOZWZSBC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-42ELPS7F.js";
import {
  MAT_DIALOG_DATA
} from "./chunk-OSF25IC4.js";
import {
  TranslatePipe
} from "./chunk-MLPBELPV.js";
import {
  Component,
  FormsModule,
  NgControlStatus,
  NgModel,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty
} from "./chunk-E55B7SJP.js";

// src/app/overlays/view-response-modal.component.ts
var ViewResponseModalComponent = class _ViewResponseModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  title = this._data.title || "";
  content_string;
  constructor() {
    this.updateContentString();
  }
  updateContentString() {
    if (typeof this._data.content === "object") {
      this.content_string = JSON.stringify(this._data.content, void 0, 4);
    } else {
      try {
        this.content_string = JSON.stringify(JSON.parse(this._data.content), void 0, 4);
      } catch {
        this.content_string = this._data.content;
      }
    }
  }
  static \u0275fac = function ViewResponseModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewResponseModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewResponseModalComponent, selectors: [["app-view-response-modal"]], decls: 3, vars: 6, consts: [[3, "heading", "hide_confirm"], [3, "ngModel", "readonly"]], template: function ViewResponseModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275element(2, "settings-form-field", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.title || \u0275\u0275pipeBind1(1, 4, "COMMON.VIEW_RESPONSE"))("hide_confirm", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.content_string)("readonly", true);
    }
  }, dependencies: [
    FullscreenModalShellComponent,
    SettingsFieldComponent,
    FormsModule,
    NgControlStatus,
    NgModel,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResponseModalComponent, [{
    type: Component,
    args: [{ selector: "app-view-response-modal", template: `
        <fullscreen-modal-shell
            [heading]="title || ('COMMON.VIEW_RESPONSE' | translate)"
            [hide_confirm]="true"
        >
            <settings-form-field [ngModel]="content_string" [readonly]="true" />
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SettingsFieldComponent,
      FormsModule,
      TranslatePipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewResponseModalComponent, { className: "ViewResponseModalComponent", filePath: "src/app/overlays/view-response-modal.component.ts", lineNumber: 31 });
})();

export {
  ViewResponseModalComponent
};
//# sourceMappingURL=chunk-XKRHLFWK.js.map
