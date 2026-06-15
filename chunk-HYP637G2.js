import {
  bn,
  qa,
  signal
} from "./chunk-N6UZRJAT.js";

// src/app/common/user-state.ts
var EMPTY_USER = new bn();
var _current_user = signal(
  null,
  ...ngDevMode ? [{ debugName: "_current_user" }] : (
    /* istanbul ignore next */
    []
  )
);
var current_user = _current_user.asReadonly();
setTimeout(async () => {
  try {
    if (jest)
      return;
  } catch {
  }
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    const user = await qa("current").catch(() => null);
    if (user) {
      _current_user.set(user);
      return;
    }
  }
}, 300);
function currentUser() {
  return _current_user() || EMPTY_USER;
}

export {
  current_user,
  currentUser
};
//# sourceMappingURL=chunk-HYP637G2.js.map
