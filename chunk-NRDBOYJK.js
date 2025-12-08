import {
  AsyncHandler
} from "./chunk-RAVBIGYQ.js";
import {
  Directive,
  ElementRef,
  Input,
  Output,
  Renderer2,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-HTG7JMGL.js";
import {
  $s,
  Qa,
  filter,
  first,
  kt
} from "./chunk-72HWXKQ6.js";

// src/app/ui/binding.directive.ts
var BindingDirective = class _BindingDirective extends AsyncHandler {
  _element = inject(ElementRef);
  _renderer = inject(Renderer2);
  /** ID of the system to bind */
  sys = input("", ...ngDevMode ? [{ debugName: "sys" }] : []);
  /** Class name of the module to bind */
  mod = input("", ...ngDevMode ? [{ debugName: "mod" }] : []);
  /** Index of the system to bind */
  index = input(1, ...ngDevMode ? [{ debugName: "index" }] : []);
  /** Status variable to bind to */
  bind = input("", ...ngDevMode ? [{ debugName: "bind" }] : []);
  /** Method to execute */
  exec = input("", ...ngDevMode ? [{ debugName: "exec" }] : []);
  /** Method to execute */
  delay = input(100, ...ngDevMode ? [{ debugName: "delay" }] : []);
  /** Event to listen for on the parent */
  on_event = input("", ...ngDevMode ? [{ debugName: "on_event", alias: "onEvent" }] : [{ alias: "onEvent" }]);
  /** ID of the system to bind to */
  params = input(null, ...ngDevMode ? [{ debugName: "params" }] : []);
  ignore = input(false, ...ngDevMode ? [{ debugName: "ignore" }] : []);
  /** Current value of the binding */
  model = model(null, ...ngDevMode ? [{ debugName: "model" }] : []);
  /** Emitter for changes to the value of the binding */
  modelChange = output();
  _binding = false;
  _old_model = null;
  ngOnInit() {
    $s()?.pipe(first((_) => _)).subscribe((_) => this.bindVariable());
  }
  ngOnChanges(changes) {
    if (changes.sys || changes.mod || changes.bind) {
      this.bindVariable();
    }
    const model2 = this.model();
    if (changes.model && this._old_model !== model2 && this.model != null) {
      this._old_model = model2;
      this.execute();
    }
    const on_event = this.on_event();
    if (changes.on_event && on_event) {
      this.subscription("on_event", this._renderer.listen(this._element.nativeElement, on_event, () => this.execute()));
    }
  }
  /** Bind to set status variable */
  bindVariable() {
    if (kt() && this.bind() && this.sys() && this.mod() && !this._binding) {
      this.timeout("bind", () => {
        const module = Qa(this.sys(), this.mod(), this.index());
        const binding = module.binding(this.bind());
        this._binding = true;
        this.subscription("binding", binding.bind());
        this.subscription("on_changes", binding.listen().pipe(filter((_) => _ != null)).subscribe((value) => {
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
    if (kt() && this.exec() && this.sys() && this.mod() && !this._timers["execute"]) {
      this.timeout("execute", () => {
        const module = Qa(this.sys(), this.mod(), this.index());
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
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: [1, "sys"], mod: [1, "mod"], index: [1, "index"], bind: [1, "bind"], exec: [1, "exec"], delay: [1, "delay"], on_event: [1, "onEvent", "on_event"], params: [1, "params"], ignore: [1, "ignore"], model: [1, "model"] }, outputs: { model: "modelChange", modelChange: "modelChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirective, [{
    type: Directive,
    args: [{
      selector: "i[bind], [binding], co-bind"
    }]
  }], null, { sys: [{ type: Input, args: [{ isSignal: true, alias: "sys", required: false }] }], mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], bind: [{ type: Input, args: [{ isSignal: true, alias: "bind", required: false }] }], exec: [{ type: Input, args: [{ isSignal: true, alias: "exec", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], on_event: [{ type: Input, args: [{ isSignal: true, alias: "onEvent", required: false }] }], params: [{ type: Input, args: [{ isSignal: true, alias: "params", required: false }] }], ignore: [{ type: Input, args: [{ isSignal: true, alias: "ignore", required: false }] }], model: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }, { type: Output, args: ["modelChange"] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();

export {
  BindingDirective
};
//# sourceMappingURL=chunk-NRDBOYJK.js.map
