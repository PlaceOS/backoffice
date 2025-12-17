import {
  BackofficeUsersService
} from "./chunk-LSTVA7XY.js";
import {
  AsyncHandler
} from "./chunk-VGLA4YGG.js";
import {
  Component,
  Input,
  ViewChild,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵviewQuerySignal
} from "./chunk-AJKLM77M.js";

// src/app/ui/diff-viewer.component.ts
var _c0 = ["editor"];
var DiffViewerComponent = class _DiffViewerComponent extends AsyncHandler {
  _users = inject(BackofficeUsersService);
  /** Original version of the document */
  original = input("", ...ngDevMode ? [{ debugName: "original" }] : []);
  /** Newer version of the document */
  modified = input("", ...ngDevMode ? [{ debugName: "modified" }] : []);
  /** Input language for syntax highlighting */
  lang = input("yaml", ...ngDevMode ? [{ debugName: "lang" }] : []);
  _editor = null;
  _editor_el = viewChild("editor", ...ngDevMode ? [{ debugName: "_editor_el" }] : []);
  ngOnInit() {
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
  _createEditor() {
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
    const m_model = monaco.editor.createModel(this.modified(), "text/plain");
    const o_model = monaco.editor.createModel(this.original(), "text/plain");
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
  }, inputs: { original: [1, "original"], modified: [1, "modified"], lang: [1, "lang"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["editor", ""], ["editor", "", 1, "select-initial", "relative", "h-128", "w-full", "border", "border-gray-300", 3, "resize"]], template: function DiffViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 1, 0);
      \u0275\u0275domListener("resize", function DiffViewerComponent_Template_div_resize_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resizeEditor());
      }, \u0275\u0275resolveWindow);
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiffViewerComponent, [{
    type: Component,
    args: [{ selector: "diff-viewer", template: `
        <div
            class="select-initial relative h-128 w-full border border-gray-300"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `, imports: [] }]
  }], null, { original: [{ type: Input, args: [{ isSignal: true, alias: "original", required: false }] }], modified: [{ type: Input, args: [{ isSignal: true, alias: "modified", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], _editor_el: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiffViewerComponent, { className: "DiffViewerComponent", filePath: "src/app/ui/diff-viewer.component.ts", lineNumber: 29 });
})();

export {
  DiffViewerComponent
};
//# sourceMappingURL=chunk-W3MQJTBE.js.map
