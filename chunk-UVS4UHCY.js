// src/app/common/monaco.ts
var loading;
function loadMonaco() {
  if (loading)
    return loading;
  if (window.monaco?.editor)
    return Promise.resolve();
  return loading ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    let finished = false;
    const timer = setTimeout(() => finish(new Error("Editor load timed out")), 3e4);
    const finish = (error) => {
      if (finished)
        return;
      finished = true;
      clearTimeout(timer);
      if (script) {
        script.onload = null;
        script.onerror = null;
        if (error)
          script.remove();
      }
      if (error)
        reject(error);
      else
        resolve();
    };
    const loadEditor = () => {
      const loader = window.require;
      if (!loader)
        return finish(new Error("Editor loader is unavailable"));
      loader.config({
        paths: {
          vs: new URL("assets/monaco/min/vs", document.baseURI).href
        }
      });
      loader(["vs/editor/editor.main"], () => finish(), finish);
    };
    if (window.require)
      return loadEditor();
    script.src = new URL("assets/monaco/min/vs/loader.js", document.baseURI).href;
    script.onload = loadEditor;
    script.onerror = () => {
      script.remove();
      finish(new Error("Could not load the editor"));
    };
    document.head.appendChild(script);
  }).catch((error) => {
    window.require?.reset?.();
    loading = void 0;
    throw error;
  });
}

export {
  loadMonaco
};
//# sourceMappingURL=chunk-UVS4UHCY.js.map
