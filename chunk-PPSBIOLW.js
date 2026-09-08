import {
  loadMonaco
} from "./chunk-UVS4UHCY.js";
import {
  BackofficeUsersService
} from "./chunk-AU73AJPX.js";
import {
  AsyncHandler
} from "./chunk-GQLTM7WR.js";
import {
  TranslatePipe
} from "./chunk-VRTCIQRQ.js";
import {
  Component,
  DestroyRef,
  Input,
  ViewChild,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-2GWPJS4J.js";

// src/app/ui/diff-viewer.component.ts
var _c0 = ["editor"];
function DiffViewerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 3);
    \u0275\u0275domListener("click", function DiffViewerComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resizeEditor());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "COMMON.EDITOR_LOAD_ERROR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "COMMON.RETRY"), " ");
  }
}
var DiffViewerComponent = class _DiffViewerComponent extends AsyncHandler {
  _users = inject(BackofficeUsersService);
  _destroy_ref = inject(DestroyRef);
  _load_id = 0;
  load_error = signal(
    false,
    ...ngDevMode ? [{ debugName: "load_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Original version of the document */
  original = input(
    "",
    ...ngDevMode ? [{ debugName: "original" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Newer version of the document */
  modified = input(
    "",
    ...ngDevMode ? [{ debugName: "modified" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Input language for syntax highlighting */
  lang = input(
    "yaml",
    ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _editor = null;
  _editor_el = viewChild(
    "editor",
    ...ngDevMode ? [{ debugName: "_editor_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngAfterViewInit() {
    this._createEditor();
  }
  ngOnChanges(changes) {
    if (changes.original || changes.modified) {
      this._updateModel();
    }
  }
  /** Update sizing of the editor after window has resized */
  resizeEditor() {
    this.timeout("resize", () => this._createEditor(), 100);
  }
  async _createEditor() {
    const load_id = ++this._load_id;
    this.load_error.set(false);
    try {
      await loadMonaco();
    } catch {
      if (!this._destroy_ref.destroyed && load_id === this._load_id) {
        this.load_error.set(true);
      }
      return;
    }
    if (this._destroy_ref.destroyed || load_id !== this._load_id)
      return;
    this.unsub("models");
    this.unsub("editor");
    this._editor = monaco.editor.createDiffEditor(this._editor_el().nativeElement, {
      fontFamily: `"Fira Code", monospace`,
      theme: !this._users.dark_mode ? "vs" : "vs-dark",
      readOnly: true
    });
    this.subscription("editor", () => this._editor.dispose());
    this._updateModel();
    monaco.editor.remeasureFonts();
  }
  _updateModel() {
    if (!this._editor)
      return;
    this.unsub("models");
    const m_model = monaco.editor.createModel(this.modified(), "text/plain");
    const o_model = monaco.editor.createModel(this.original(), "text/plain");
    this.subscription("models", () => {
      m_model.dispose();
      o_model.dispose();
    });
    this._editor.setModel({
      original: o_model,
      modified: m_model
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DiffViewerComponent_BaseFactory;
    return function DiffViewerComponent_Factory(__ngFactoryType__) {
      return (\u0275DiffViewerComponent_BaseFactory || (\u0275DiffViewerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DiffViewerComponent)))(__ngFactoryType__ || _DiffViewerComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiffViewerComponent, selectors: [["diff-viewer"]], viewQuery: function DiffViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._editor_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { original: [1, "original"], modified: [1, "modified"], lang: [1, "lang"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [["editor", ""], ["editor", "", 1, "select-initial", "relative", "h-128", "w-full", "border", "border-gray-300", 3, "resize"], ["role", "alert"], ["type", "button", 3, "click"]], template: function DiffViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DiffViewerComponent_Conditional_0_Template, 6, 6);
      \u0275\u0275domElementStart(1, "div", 1, 0);
      \u0275\u0275domListener("resize", function DiffViewerComponent_Template_div_resize_1_listener() {
        return ctx.resizeEditor();
      }, \u0275\u0275resolveWindow);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.load_error() ? 0 : -1);
    }
  }, dependencies: [TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiffViewerComponent, [{
    type: Component,
    args: [{ selector: "diff-viewer", template: `
        @if (load_error()) {
            <p role="alert">{{ 'COMMON.EDITOR_LOAD_ERROR' | translate }}</p>
            <button type="button" (click)="resizeEditor()">
                {{ 'COMMON.RETRY' | translate }}
            </button>
        }
        <div
            class="select-initial relative h-128 w-full border border-gray-300"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `, imports: [TranslatePipe] }]
  }], null, { original: [{ type: Input, args: [{ isSignal: true, alias: "original", required: false }] }], modified: [{ type: Input, args: [{ isSignal: true, alias: "modified", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], _editor_el: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiffViewerComponent, { className: "DiffViewerComponent", filePath: "src/app/ui/diff-viewer.component.ts", lineNumber: 39 });
})();

export {
  DiffViewerComponent
};
//# sourceMappingURL=chunk-PPSBIOLW.js.map
