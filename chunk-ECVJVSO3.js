import {
  dismissToast,
  toasts
} from "./chunk-ZYXD5WKE.js";
import "./chunk-B36VAJ7U.js";
import {
  LiveAnnouncer,
  Overlay,
  TemplatePortal
} from "./chunk-3REUN4UT.js";
import "./chunk-XWSZBFF5.js";
import {
  Component,
  DestroyRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  effect,
  inject,
  setClassMetadata,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomTemplate,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-OGAUD6Z3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/ui/controls/toast-outlet.component.ts
var _c0 = ["panel"];
var _forTrack0 = ($index, $item) => $item.id;
function ToastOutletComponent_ng_template_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 6);
    \u0275\u0275domListener("click", function ToastOutletComponent_ng_template_0_For_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const toast_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.act(toast_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const toast_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", toast_r2.action, " ");
  }
}
function ToastOutletComponent_ng_template_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, ToastOutletComponent_ng_template_0_For_2_Conditional_3_Template, 2, 1, "button", 5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275classMap(toast_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(toast_r2.action ? 3 : -1);
  }
}
function ToastOutletComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, ToastOutletComponent_ng_template_0_For_2_Template, 4, 4, "div", 2, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.list());
  }
}
var ToastOutletComponent = class _ToastOutletComponent {
  _overlay = inject(Overlay);
  _announcer = inject(LiveAnnouncer);
  _panel = viewChild.required("panel", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_panel" } : (
    /* istanbul ignore next */
    {}
  )), { read: TemplateRef }));
  _overlay_ref = this._overlay.create({
    positionStrategy: this._overlay.position().global().centerHorizontally().bottom("0"),
    panelClass: "toast-pane"
  });
  /** Id of the newest toast shown so far */
  _last_id = -1;
  list = toasts;
  constructor() {
    const view_container = inject(ViewContainerRef);
    effect(() => {
      const list = this.list();
      const newest = list[list.length - 1];
      if (!newest) {
        this._overlay_ref.detach();
        return;
      }
      if (newest.id === this._last_id)
        return;
      this._last_id = newest.id;
      if (this._overlay_ref.hasAttached())
        this._overlay_ref.detach();
      this._overlay_ref.attach(new TemplatePortal(this._panel(), view_container));
      untracked(() => this._announcer.announce(newest.message, newest.type === "error" ? "assertive" : "polite"));
    });
    inject(DestroyRef).onDestroy(() => this._overlay_ref.dispose());
  }
  act(toast) {
    toast.on_action();
    dismissToast(toast.id);
  }
  static \u0275fac = function ToastOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastOutletComponent, selectors: [["app-toast-outlet"]], viewQuery: function ToastOutletComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._panel, _c0, 5, TemplateRef);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 2, vars: 0, consts: [["panel", ""], [1, "toast-stack"], [1, "toast", 3, "class"], [1, "toast"], [1, "toast-message"], ["type", "button"], ["type", "button", 3, "click"]], template: function ToastOutletComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domTemplate(0, ToastOutletComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastOutletComponent, [{
    type: Component,
    args: [{
      selector: "app-toast-outlet",
      template: `
        <ng-template #panel>
            <div class="toast-stack">
                @for (toast of list(); track toast.id) {
                    <div class="toast" [class]="toast.type">
                        <span class="toast-message">{{ toast.message }}</span>
                        @if (toast.action) {
                            <button type="button" (click)="act(toast)">
                                {{ toast.action }}
                            </button>
                        }
                    </div>
                }
            </div>
        </ng-template>
    `
    }]
  }], () => [], { _panel: [{ type: ViewChild, args: ["panel", __spreadProps(__spreadValues({}, {
    read: TemplateRef
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastOutletComponent, { className: "ToastOutletComponent", filePath: "src/app/ui/controls/toast-outlet.component.ts", lineNumber: 43 });
})();
export {
  ToastOutletComponent
};
//# debugId=9759ccdb-e540-5568-9f57-bbecdf39b5ac
//# sourceMappingURL=chunk-ECVJVSO3.js.map
