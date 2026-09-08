import {
  loadMonaco
} from "./chunk-UVS4UHCY.js";
import {
  SettingsService
} from "./chunk-B3TGTYBX.js";
import {
  AsyncHandler
} from "./chunk-Z6WA4HOG.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-YNW2ZIUP.js";
import {
  TranslatePipe
} from "./chunk-4WEZYQJI.js";
import {
  Component,
  DestroyRef,
  Input,
  ViewChild,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-4QIQTM3T.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/custom-fields/settings-field.component.ts
var _c0 = ["editor"];
function SettingsFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 3);
    \u0275\u0275domListener("click", function SettingsFieldComponent_Conditional_0_Template_button_click_3_listener() {
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
var SettingsFieldComponent = class _SettingsFieldComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  _destroy_ref = inject(DestroyRef);
  _load_id = 0;
  load_error = signal(
    false,
    ...ngDevMode ? [{ debugName: "load_error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether form field is readonly */
  readonly = input(
    true,
    ...ngDevMode ? [{ debugName: "readonly" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "disabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Resize */
  resize = input(
    void 0,
    ...ngDevMode ? [{ debugName: "resize" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Whether the field should fill the available height */
  fill = input(
    false,
    ...ngDevMode ? [{ debugName: "fill" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** List of decorations to apply to the editor */
  decorations = input(
    void 0,
    ...ngDevMode ? [{ debugName: "decorations" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Input language for syntax highlighting and error checking */
  lang = input(
    "yaml",
    ...ngDevMode ? [{ debugName: "lang" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Schema for input validation and key auto-completion */
  schema = input(
    void 0,
    ...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Current value for the */
  settings_string = " ";
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  _active_decorators = [];
  _theme = "light";
  /** Reference to the element container the monaco editor */
  element = viewChild(
    "editor",
    ...ngDevMode ? [{ debugName: "element" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** API object for the monaco editor */
  editor;
  ngOnInit() {
    this.timeout("resize", () => this.createEditor(), 100);
    this.interval("theme", () => {
      const theme = this._settings.get("theme");
      if (theme !== this._theme) {
        this._theme = theme;
        this.editor?.updateOptions({
          theme: theme !== "dark" ? "vs" : "vs-dark"
        });
      }
    }, 1e3);
  }
  ngOnChanges(changes) {
    if (changes.readonly && this.editor) {
      this.editor.updateOptions({ readOnly: !!this.readonly() });
    }
    if (changes.lang && this.editor) {
      this.editor.updateOptions({
        language: this.lang() || "yaml"
      });
    }
    if (changes.resize) {
      this.resizeEditor();
    }
    const schema = this.schema();
    if (changes.schema && schema) {
      this.setSchema(schema);
    }
    if (changes.decorations && this.editor) {
      this._active_decorators = this.editor.deltaDecorations(this._active_decorators, (this.decorations() || []).map((i) => __spreadValues({}, i)));
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.editor) {
      try {
        const model = this.editor.getModel();
        this.editor.dispose();
        model?.dispose();
      } catch {
      }
      this.editor = null;
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    if (this.disabled())
      return;
    if (this.settings_string !== new_value) {
      this.settings_string = new_value;
      if (this._onChange) {
        this._onChange(new_value);
      }
      this._onTouch?.(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.settings_string = `${value}`;
    if (this.editor) {
      this.editor.getModel().detectIndentation(true, 4);
      if (this.readonly()) {
        this.editor.updateOptions({ readOnly: false });
        this.editor.setValue(this.settings_string);
        this.editor.updateOptions({ readOnly: true });
      } else {
        this.editor.setValue(this.settings_string);
      }
    }
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
    this.editor?.updateOptions({ readOnly: this.readonly() || disabled });
  }
  /** Update sizing of the editor after window has resized */
  resizeEditor() {
    this.timeout("resize", () => this.createEditor(), 100);
  }
  /**
   * Create and render the monaco editor to the component
   */
  async createEditor() {
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
    const element = this.element();
    if (element && element.nativeElement) {
      if (this.editor) {
        const model = this.editor.getModel();
        this.editor.dispose();
        model?.dispose();
        this.editor = null;
      }
      this.editor = monaco.editor.create(element.nativeElement, {
        value: this.settings_string || "",
        language: this.lang() || "yaml",
        fontFamily: `"Fira Code", monospace`,
        lineNumbers: "on",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: this.readonly() || this.disabled(),
        automaticLayout: true,
        theme: this._settings.get("theme") !== "dark" ? "vs" : "vs-dark"
      });
      if (this.schema())
        this.setSchema(this.schema());
      this.editor.onDidChangeModelContent((e) => {
        this.setValue(this.editor.getValue());
        if (e.changes[0]?.text === '""') {
          this.editor.trigger("Show Autocomplete", "editor.action.triggerSuggest", {});
        }
      });
      this.editor.onDidBlurEditorText(() => this._onTouch?.(this.settings_string));
      this.timeout("decorations", () => {
        this._active_decorators = this.editor?.deltaDecorations(this._active_decorators, (this.decorations() || []).map((i) => __spreadValues({}, i))) || [];
      }, 50);
    }
  }
  setSchema(schema) {
    if (!this.editor)
      return;
    if (typeof schema !== "string") {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        enableSchemaRequest: true,
        validate: true,
        schemas: [
          {
            uri: "http://backoffice/schema/base.json",
            fileMatch: ["http://backoffice/schema"],
            schema
          }
        ]
      });
    } else {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        enableSchemaRequest: true,
        validate: true,
        schemas: [
          {
            uri: schema,
            fileMatch: ["http://backoffice/schema"]
          }
        ]
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SettingsFieldComponent_BaseFactory;
    return function SettingsFieldComponent_Factory(__ngFactoryType__) {
      return (\u0275SettingsFieldComponent_BaseFactory || (\u0275SettingsFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SettingsFieldComponent)))(__ngFactoryType__ || _SettingsFieldComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsFieldComponent, selectors: [["settings-form-field"], ["", "settings-field", ""]], viewQuery: function SettingsFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.element, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { readonly: [1, "readonly"], resize: [1, "resize"], fill: [1, "fill"], decorations: [1, "decorations"], lang: [1, "lang"], schema: [1, "schema"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SettingsFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 3, vars: 7, consts: [["editor", ""], ["editor", "", 1, "border-base-300", "relative", "w-full", "border", 3, "resize"], ["role", "alert"], ["type", "button", 3, "click"]], template: function SettingsFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SettingsFieldComponent_Conditional_0_Template, 6, 6);
      \u0275\u0275domElementStart(1, "div", 1, 0);
      \u0275\u0275domListener("resize", function SettingsFieldComponent_Template_div_resize_1_listener() {
        return ctx.resizeEditor();
      }, \u0275\u0275resolveWindow);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.load_error() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("h-128", !ctx.fill())("h-full", ctx.fill())("min-h-0", ctx.fill());
    }
  }, dependencies: [TranslatePipe], styles: ["\n[editor][_ngcontent-%COMP%], \n[editor][_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  -webkit-user-select: initial;\n  user-select: initial;\n}\n/*# sourceMappingURL=settings-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsFieldComponent, [{
    type: Component,
    args: [{ selector: "settings-form-field,[settings-field]", template: `
        @if (load_error()) {
            <p role="alert">{{ 'COMMON.EDITOR_LOAD_ERROR' | translate }}</p>
            <button type="button" (click)="resizeEditor()">
                {{ 'COMMON.RETRY' | translate }}
            </button>
        }
        <div
            class="border-base-300 relative w-full border"
            [class.h-128]="!fill()"
            [class.h-full]="fill()"
            [class.min-h-0]="fill()"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SettingsFieldComponent),
        multi: true
      }
    ], imports: [TranslatePipe], styles: ["/* angular:styles/component:css;ba34757712d3bc1afbf2aed649f6d5b4d1d22e7ddf36383130bbeab02758a07b;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/settings-field.component.ts */\n[editor],\n[editor] * {\n  -webkit-user-select: initial;\n  user-select: initial;\n}\n/*# sourceMappingURL=settings-field.component.css.map */\n"] }]
  }], null, { readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], resize: [{ type: Input, args: [{ isSignal: true, alias: "resize", required: false }] }], fill: [{ type: Input, args: [{ isSignal: true, alias: "fill", required: false }] }], decorations: [{ type: Input, args: [{ isSignal: true, alias: "decorations", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }], element: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsFieldComponent, { className: "SettingsFieldComponent", filePath: "src/app/ui/custom-fields/settings-field.component.ts", lineNumber: 61 });
})();

export {
  SettingsFieldComponent
};
//# sourceMappingURL=chunk-U7F644CE.js.map
