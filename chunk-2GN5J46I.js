import {
  DestroyRef,
  afterNextRender
} from "./chunk-6G3VFYSX.js";

// src/app/common/focus.ts
function refocusIfLost(injector, target) {
  if (injector.get(DestroyRef).destroyed) return;
  afterNextRender(
    () => {
      const active = document.activeElement;
      if (active && active !== document.body) return;
      target()?.focus();
    },
    { injector }
  );
}

export {
  refocusIfLost
};
//# debugId=e368972a-126a-5993-a039-84c3dbf3b007
//# sourceMappingURL=chunk-2GN5J46I.js.map
