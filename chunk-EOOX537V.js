// src/app/common/monaco.ts
var loading;
function ignoreStoppedWorkerErrors(environment) {
  const getWorker = environment?.getWorker;
  if (!getWorker) return;
  environment.getWorker = (worker_id, label) => {
    const worker = getWorker.call(environment, worker_id, label);
    void Promise.resolve(worker).then((created) => {
      let stopped = false;
      const terminate = created.terminate.bind(created);
      created.terminate = () => {
        stopped = true;
        terminate();
      };
      created.addEventListener("error", (event) => {
        if (stopped) event.preventDefault();
      });
    });
    return worker;
  };
}
function loadMonaco() {
  if (loading) return loading;
  if (window.monaco?.editor) return Promise.resolve();
  return loading ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    let finished = false;
    const timer = setTimeout(
      () => finish(new Error("Editor load timed out")),
      3e4
    );
    const finish = (error) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      if (script) {
        script.onload = null;
        script.onerror = null;
        if (error) script.remove();
      }
      if (error) reject(error);
      else resolve();
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
      loader(
        ["vs/editor/editor.main"],
        () => {
          ignoreStoppedWorkerErrors(globalThis.MonacoEnvironment);
          finish();
        },
        finish
      );
    };
    if (window.require) return loadEditor();
    script.src = new URL(
      "assets/monaco/min/vs/loader.js",
      document.baseURI
    ).href;
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
//# debugId=2f31de57-6577-5b4a-bb51-cc38d37d59d8
//# sourceMappingURL=chunk-EOOX537V.js.map
