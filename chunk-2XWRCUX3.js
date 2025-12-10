import {
  SettingsService
} from "./chunk-KVAUHFWR.js";
import {
  AsyncHandler
} from "./chunk-VGLA4YGG.js";
import {
  Component,
  Input,
  NG_VALUE_ACCESSOR,
  ViewChild,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵviewQuerySignal
} from "./chunk-AJKLM77M.js";
import {
  __spreadValues
} from "./chunk-VYXW4D3Z.js";

// src/app/ui/custom-fields/settings-field.component.ts
var _c0 = ["editor"];
var MODEL = {};
var SettingsFieldComponent = class _SettingsFieldComponent extends AsyncHandler {
  _settings = inject(SettingsService);
  /** Whether form field is readonly */
  readonly = input(true, ...ngDevMode ? [{ debugName: "readonly" }] : []);
  /** Resize */
  resize = input(void 0, ...ngDevMode ? [{ debugName: "resize" }] : []);
  /** List of decorations to apply to the editor */
  decorations = input(void 0, ...ngDevMode ? [{ debugName: "decorations" }] : []);
  /** Input language for syntax highlighting and error checking */
  lang = input("yaml", ...ngDevMode ? [{ debugName: "lang" }] : []);
  /** Schema for input validation and key auto-completion */
  schema = input(void 0, ...ngDevMode ? [{ debugName: "schema" }] : []);
  /** Current value for the */
  settings_string = " ";
  /** Form control on change handler */
  _onChange;
  /** Form control on touch handler */
  _onTouch;
  _active_decorators = [];
  _theme = "light";
  /** Reference to the element container the monaco editor */
  element = viewChild("editor", ...ngDevMode ? [{ debugName: "element" }] : []);
  /** API object for the monaco editor */
  editor;
  constructor() {
    super();
    if (!MODEL) {
      MODEL = {
        json: monaco.editor.createModel("", "json", monaco.Uri.parse(`http://backoffice/schema.json`)),
        yaml: monaco.editor.createModel("", "yaml", monaco.Uri.parse(`http://backoffice/schema.yaml`))
      };
    }
  }
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
    if (this.editor) {
      try {
        this.editor.dispose();
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
    if (this.settings_string !== new_value) {
      this.settings_string = new_value;
      if (this._onChange) {
        this._onChange(new_value);
      }
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
  /** Update sizing of the editor after window has resized */
  resizeEditor() {
    this.timeout("resize", () => this.createEditor(), 100);
  }
  /**
   * Create and render the monaco editor to the component
   */
  createEditor() {
    const element = this.element();
    if (element && element.nativeElement) {
      if (this.editor) {
        this.editor.dispose();
        this.editor = null;
      }
      this.editor = monaco.editor.create(element.nativeElement, {
        value: this.settings_string || "",
        language: this.lang() || "yaml",
        model: MODEL[this.lang() || "yaml"],
        fontFamily: `"Fira Code", monospace`,
        lineNumbers: "on",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: this.readonly(),
        theme: this._settings.get("theme") !== "dark" ? "vs" : "vs-dark"
      });
      this.editor.onDidChangeModelContent((e) => {
        this.setValue(this.editor.getValue());
        if (e.changes[0]?.text === '""') {
          this.editor.trigger("Show Autocomplete", "editor.action.triggerSuggest", {});
        }
      });
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
  static \u0275fac = function SettingsFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsFieldComponent, selectors: [["settings-form-field"], ["", "settings-field", ""]], viewQuery: function SettingsFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.element, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { readonly: [1, "readonly"], resize: [1, "resize"], decorations: [1, "decorations"], lang: [1, "lang"], schema: [1, "schema"] }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SettingsFieldComponent),
      multi: true
    }
  ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["editor", ""], ["editor", "", 1, "border-base-300", "relative", "h-128", "w-full", "border", 3, "resize"]], template: function SettingsFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 1, 0);
      \u0275\u0275domListener("resize", function SettingsFieldComponent_Template_div_resize_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resizeEditor());
      }, \u0275\u0275resolveWindow);
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[editor][_ngcontent-%COMP%], \n[editor][_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  -webkit-user-select: initial;\n  user-select: initial;\n}\n/*# sourceMappingURL=settings-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsFieldComponent, [{
    type: Component,
    args: [{ selector: "settings-form-field,[settings-field]", template: `
        <div
            class="border-base-300 relative h-128 w-full border"
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
    ], imports: [], styles: ["/* angular:styles/component:css;ba34757712d3bc1afbf2aed649f6d5b4d1d22e7ddf36383130bbeab02758a07b;/home/runner/work/backoffice/backoffice/src/app/ui/custom-fields/settings-field.component.ts */\n[editor],\n[editor] * {\n  -webkit-user-select: initial;\n  user-select: initial;\n}\n/*# sourceMappingURL=settings-field.component.css.map */\n"] }]
  }], () => [], { readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], resize: [{ type: Input, args: [{ isSignal: true, alias: "resize", required: false }] }], decorations: [{ type: Input, args: [{ isSignal: true, alias: "decorations", required: false }] }], lang: [{ type: Input, args: [{ isSignal: true, alias: "lang", required: false }] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }], element: [{ type: ViewChild, args: ["editor", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsFieldComponent, { className: "SettingsFieldComponent", filePath: "src/app/ui/custom-fields/settings-field.component.ts", lineNumber: 50 });
})();

export {
  SettingsFieldComponent
};
//# sourceMappingURL=chunk-2XWRCUX3.js.map
