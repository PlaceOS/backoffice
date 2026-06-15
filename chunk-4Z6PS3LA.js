import {
  SettingsFieldComponent
} from "./chunk-4SPDV2U2.js";
import {
  FullscreenModalShellComponent
} from "./chunk-Z5RBFVQV.js";
import {
  MAT_DIALOG_DATA
} from "./chunk-KHVEC2ZJ.js";
import {
  TranslatePipe
} from "./chunk-ZZM2ZLWR.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5TQT6AWS.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty
} from "./chunk-N6UZRJAT.js";

// src/app/overlays/view-response-modal.component.ts
var ViewResponseModalComponent = class _ViewResponseModalComponent {
  _data = inject(MAT_DIALOG_DATA);
  title = this._data.title || "";
  content_string = signal(
    null,
    ...ngDevMode ? [{ debugName: "content_string" }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    this.updateContentString();
  }
  updateContentString() {
    if (typeof this._data.content === "object") {
      this.content_string.set(JSON.stringify(this._data.content, void 0, 4));
    } else {
      try {
        this.content_string.set(JSON.stringify(JSON.parse(this._data.content), void 0, 4));
      } catch {
        this.content_string.set(this._data.content);
      }
    }
  }
  static \u0275fac = function ViewResponseModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewResponseModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewResponseModalComponent, selectors: [["app-view-response-modal"]], decls: 4, vars: 7, consts: [[3, "heading", "hide_confirm"], [1, "flex", "min-h-full", "flex-1", "flex-col"], [1, "min-h-0", "flex-1", 3, "ngModel", "readonly", "fill"]], template: function ViewResponseModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "settings-form-field", 2);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("heading", ctx.title || \u0275\u0275pipeBind1(1, 5, "COMMON.VIEW_RESPONSE"))("hide_confirm", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.content_string())("readonly", true)("fill", true);
      \u0275\u0275control();
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
            <div class="flex min-h-full flex-1 flex-col">
                <settings-form-field
                    class="min-h-0 flex-1"
                    [ngModel]="content_string()"
                    [readonly]="true"
                    [fill]="true"
                />
            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewResponseModalComponent, { className: "ViewResponseModalComponent", filePath: "src/app/overlays/view-response-modal.component.ts", lineNumber: 38 });
})();

export {
  ViewResponseModalComponent
};
//# sourceMappingURL=chunk-4Z6PS3LA.js.map
