import {
  waitForClientSignalValue
} from "./chunk-HS5WHROJ.js";
import {
  AsyncHandler
} from "./chunk-QRBYATLU.js";
import {
  Directive,
  El,
  ElementRef,
  Er,
  Input,
  Output,
  Renderer2,
  St,
  inject,
  input,
  linkedSignal,
  output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-N6UZRJAT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/ui/binding.directive.ts
var BindingDirective = class _BindingDirective extends AsyncHandler {
  _element = inject(ElementRef);
  _renderer = inject(Renderer2);
  /** ID of the system to bind */
  sys = input(
    "",
    ...ngDevMode ? [{ debugName: "sys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Class name of the module to bind */
  mod = input(
    "",
    ...ngDevMode ? [{ debugName: "mod" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Index of the system to bind */
  index = input(
    1,
    ...ngDevMode ? [{ debugName: "index" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Status variable to bind to */
  bind = input(
    "",
    ...ngDevMode ? [{ debugName: "bind" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Method to execute */
  exec = input(
    "",
    ...ngDevMode ? [{ debugName: "exec" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Method to execute */
  delay = input(
    100,
    ...ngDevMode ? [{ debugName: "delay" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Event to listen for on the parent */
  onEvent = input(
    "",
    ...ngDevMode ? [{ debugName: "onEvent" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** ID of the system to bind to */
  params = input(
    null,
    ...ngDevMode ? [{ debugName: "params" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ignore = input(
    false,
    ...ngDevMode ? [{ debugName: "ignore" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Current value of the binding */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  modelInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "modelInput" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "model" }));
  model = linkedSignal(
    this.modelInput,
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Emitter for changes to the value of the binding */
  modelChange = output();
  _binding = false;
  _old_model = null;
  ngOnInit() {
    waitForClientSignalValue(Er(), (_) => _).then(() => this.bindVariable());
  }
  ngOnChanges(changes) {
    if (changes.sys || changes.mod || changes.bind) {
      this.bindVariable();
    }
    const model = this.model();
    if (changes.modelInput && this._old_model !== model && this.model != null) {
      this._old_model = model;
      this.execute();
    }
    const on_event = this.onEvent();
    if (changes.onEvent && on_event) {
      this.subscription("onEvent", this._renderer.listen(this._element.nativeElement, on_event, () => this.execute()));
    }
  }
  /** Bind to set status variable */
  bindVariable() {
    if (St() && this.bind() && this.sys() && this.mod() && !this._binding) {
      this.timeout("bind", () => {
        const module = El(this.sys(), this.mod(), this.index());
        const binding = module.binding(this.bind());
        this._binding = true;
        this.subscription("binding", binding.bind());
        this.subscription("on_changes", binding.listen().subscribe((value) => {
          if (value == null)
            return;
          setTimeout(() => {
            this._binding = false;
            this.clearTimeout("bound");
            if (this.ignore())
              return;
            this.model.set(value);
            this._old_model = this.model();
            this.modelChange.emit(this.model());
          }, 10);
        }));
        this.timeout("bound", () => this._binding = false, 200);
      }, 20);
    }
  }
  /** Excute the set method on the module */
  execute() {
    if (St() && this.exec() && this.sys() && this.mod() && !this._timers["execute"]) {
      this.timeout("execute", () => {
        const module = El(this.sys(), this.mod(), this.index());
        let params = this.params();
        if (this.bind())
          params = this.params() || [this.model()];
        module.execute(this.exec(), params || []).then((result) => {
          if (!this.bind()) {
            this.model.set(result);
            this._old_model = this.model();
            this.modelChange.emit(this.model());
          }
        });
      }, this.delay());
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BindingDirective_BaseFactory;
    return function BindingDirective_Factory(__ngFactoryType__) {
      return (\u0275BindingDirective_BaseFactory || (\u0275BindingDirective_BaseFactory = \u0275\u0275getInheritedFactory(_BindingDirective)))(__ngFactoryType__ || _BindingDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: [1, "sys"], mod: [1, "mod"], index: [1, "index"], bind: [1, "bind"], exec: [1, "exec"], delay: [1, "delay"], onEvent: [1, "onEvent"], params: [1, "params"], ignore: [1, "ignore"], modelInput: [1, "model", "modelInput"] }, outputs: { modelChange: "modelChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirective, [{
    type: Directive,
    args: [{
      selector: "i[bind], [binding], co-bind"
    }]
  }], null, { sys: [{ type: Input, args: [{ isSignal: true, alias: "sys", required: false }] }], mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], bind: [{ type: Input, args: [{ isSignal: true, alias: "bind", required: false }] }], exec: [{ type: Input, args: [{ isSignal: true, alias: "exec", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], onEvent: [{ type: Input, args: [{ isSignal: true, alias: "onEvent", required: false }] }], params: [{ type: Input, args: [{ isSignal: true, alias: "params", required: false }] }], ignore: [{ type: Input, args: [{ isSignal: true, alias: "ignore", required: false }] }], modelInput: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();

export {
  BindingDirective
};
//# sourceMappingURL=chunk-GQZ6HCXF.js.map
