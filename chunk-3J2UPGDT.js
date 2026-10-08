import {
  required
} from "./chunk-LMCXBYGC.js";
import {
  AsyncHandler
} from "./chunk-NZ7ZPGVU.js";
import {
  SafePipe
} from "./chunk-Y7HZB3U4.js";
import {
  Component,
  DOCUMENT,
  Input,
  Output,
  ViewChild,
  computed,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵgetInheritedFactory,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵqueryAdvance,
  ɵɵsanitizeResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-RDM3X2TD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// src/app/admin/signage-plugins/signage-plugin-embed.component.ts
var _c0 = ["plugin_el"];
function SignagePluginEmbedComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 1, 0);
    \u0275\u0275pipe(2, "safe");
  }
  if (rf & 2) {
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(2, 1, ctx.href, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var SIGNAGE_PLUGIN_API_VERSION = "signage-plugin/v1";
function resolveSignagePluginUrl(uri, base_uri) {
  if (!uri)
    return null;
  try {
    const url = new URL(uri, base_uri);
    return ["http:", "https:"].includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}
var SignagePluginEmbedComponent = class _SignagePluginEmbedComponent extends AsyncHandler {
  _document = inject(DOCUMENT);
  plugin = input(
    null,
    ...ngDevMode ? [{ debugName: "plugin" }] : (
      /* istanbul ignore next */
      []
    )
  );
  config = input(
    null,
    ...ngDevMode ? [{ debugName: "config" }] : (
      /* istanbul ignore next */
      []
    )
  );
  play = input(
    0,
    ...ngDevMode ? [{ debugName: "play" }] : (
      /* istanbul ignore next */
      []
    )
  );
  details = model(
    null,
    ...ngDevMode ? [{ debugName: "details" }] : (
      /* istanbul ignore next */
      []
    )
  );
  schema = model(
    {},
    ...ngDevMode ? [{ debugName: "schema" }] : (
      /* istanbul ignore next */
      []
    )
  );
  status = model(
    "unknown",
    ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_error = output();
  _plugin_el = viewChild(
    "plugin_el",
    ...ngDevMode ? [{ debugName: "_plugin_el" }] : (
      /* istanbul ignore next */
      []
    )
  );
  plugin_url = computed(
    () => resolveSignagePluginUrl(this.plugin()?.uri, this._document.baseURI),
    ...ngDevMode ? [{ debugName: "plugin_url" }] : (
      /* istanbul ignore next */
      []
    )
  );
  _handle_messages = (e) => this._handleMessage(e);
  ngOnInit() {
    this._setupChannels();
  }
  ngOnChanges(changes) {
    if (changes.play && this.play())
      this.send("play");
    if (changes.config && this.config())
      this.send("config", this.config());
  }
  send(type, payload = null) {
    this._plugin_el()?.nativeElement?.contentWindow?.postMessage({ api: SIGNAGE_PLUGIN_API_VERSION, type, payload }, "*");
  }
  _setupChannels() {
    if (!this.plugin()?.uri)
      return;
    this.subscription("channel", () => window.removeEventListener("message", this._handle_messages));
    window.addEventListener("message", this._handle_messages);
  }
  _handleMessage(event) {
    const frame_window = this._plugin_el()?.nativeElement?.contentWindow;
    if (!frame_window || event.source !== frame_window)
      return;
    const msg = event.data;
    if (!msg || msg.api !== SIGNAGE_PLUGIN_API_VERSION || typeof msg.type !== "string")
      return;
    this.status.set(msg.type);
    switch (msg.type) {
      case "loaded":
        this.details.set(msg.payload);
        this.schema.set(msg.payload?.config_schema);
        break;
      case "error":
        this.plugin_error.emit(msg.payload);
        break;
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SignagePluginEmbedComponent_BaseFactory;
    return function SignagePluginEmbedComponent_Factory(__ngFactoryType__) {
      return (\u0275SignagePluginEmbedComponent_BaseFactory || (\u0275SignagePluginEmbedComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SignagePluginEmbedComponent)))(__ngFactoryType__ || _SignagePluginEmbedComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePluginEmbedComponent, selectors: [["signage-plugin-embed"]], viewQuery: function SignagePluginEmbedComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx._plugin_el, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { plugin: [1, "plugin"], config: [1, "config"], play: [1, "play"], details: [1, "details"], schema: [1, "schema"], status: [1, "status"] }, outputs: { details: "detailsChange", schema: "schemaChange", status: "statusChange", plugin_error: "plugin_error" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["plugin_el", ""], ["sandbox", "allow-scripts", "referrerpolicy", "no-referrer", 3, "src"]], template: function SignagePluginEmbedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SignagePluginEmbedComponent_Conditional_0_Template, 3, 4, "iframe", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.plugin_url()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [SafePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignagePluginEmbedComponent, [{
    type: Component,
    args: [{ selector: "signage-plugin-embed", template: `
        @if (plugin_url(); as plugin_url) {
            <iframe
                #plugin_el
                sandbox="allow-scripts"
                referrerpolicy="no-referrer"
                [src]="plugin_url.href | safe: 'resource'"
            >
            </iframe>
        }
    `, imports: [SafePipe] }]
  }], null, { plugin: [{ type: Input, args: [{ isSignal: true, alias: "plugin", required: false }] }], config: [{ type: Input, args: [{ isSignal: true, alias: "config", required: false }] }], play: [{ type: Input, args: [{ isSignal: true, alias: "play", required: false }] }], details: [{ type: Input, args: [{ isSignal: true, alias: "details", required: false }] }, { type: Output, args: ["detailsChange"] }], schema: [{ type: Input, args: [{ isSignal: true, alias: "schema", required: false }] }, { type: Output, args: ["schemaChange"] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }, { type: Output, args: ["statusChange"] }], plugin_error: [{ type: Output, args: ["plugin_error"] }], _plugin_el: [{ type: ViewChild, args: ["plugin_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePluginEmbedComponent, { className: "SignagePluginEmbedComponent", filePath: "src/app/admin/signage-plugins/signage-plugin-embed.component.ts", lineNumber: 104 });
})();

// src/app/admin/signage-plugins/signage-plugins.utilities.ts
function generateSignagePluginFormModel(plugin) {
  return {
    name: plugin?.name || "",
    description: plugin?.description || "",
    plugin_type: plugin?.plugin_type || "plugin",
    uri: plugin?.uri || "",
    playback_type: plugin?.playback_type || "static",
    enabled: plugin?.enabled ?? true,
    defaults: plugin?.defaults || {}
  };
}
var applySignagePluginFormSchema = (path) => {
  required(path.name);
  required(path.uri);
};
function probeSignagePlugin(uri, options = {}) {
  const url = resolveSignagePluginUrl(uri, document.baseURI);
  if (!url || options.signal?.aborted)
    return Promise.resolve(null);
  return new Promise((resolve) => {
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.referrerPolicy = "no-referrer";
    frame.style.cssText = "position: fixed; left: -10000px; width: 1px; height: 1px; border: 0;";
    const finish = (result) => {
      clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      options.signal?.removeEventListener("abort", onAbort);
      frame.remove();
      resolve(result);
    };
    const onAbort = () => finish(null);
    const onMessage = (event) => {
      if (event.source !== frame.contentWindow)
        return;
      const msg = event.data;
      if (msg?.api !== SIGNAGE_PLUGIN_API_VERSION)
        return;
      if (msg.type === "loaded") {
        const payload = msg.payload;
        const name = payload?.plugin?.name;
        if (typeof name !== "string" || !name.trim())
          return finish(null);
        const type = payload.plugin.type === "widget" ? "widget" : "plugin";
        finish(__spreadProps(__spreadValues({}, payload), { plugin: __spreadProps(__spreadValues({}, payload.plugin), { type }) }));
      } else if (msg.type === "error" && msg.payload?.fatal) {
        finish(null);
      }
    };
    const timer = setTimeout(onAbort, options.timeout_ms ?? 1e4);
    window.addEventListener("message", onMessage);
    options.signal?.addEventListener("abort", onAbort);
    frame.src = url.href;
    document.body.appendChild(frame);
  });
}
async function forEachWithLimit(items, limit, task) {
  let next = 0;
  const worker = async () => {
    while (next < items.length)
      await task(items[next++]);
  };
  const count = Math.max(1, Math.min(limit, items.length));
  await Promise.all(Array.from({ length: count }, worker));
}

export {
  SignagePluginEmbedComponent,
  generateSignagePluginFormModel,
  applySignagePluginFormSchema,
  probeSignagePlugin,
  forEachWithLimit
};
//# sourceMappingURL=chunk-3J2UPGDT.js.map
