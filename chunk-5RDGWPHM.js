import {
  On
} from "./chunk-P3FA5CPP.js";
import {
  signal
} from "./chunk-RDM3X2TD.js";

// src/app/common/user-state.ts
var EMPTY_USER = new On();
var _current_user = signal(
  null,
  ...ngDevMode ? [{ debugName: "_current_user" }] : (
    /* istanbul ignore next */
    []
  )
);
var current_user = _current_user.asReadonly();
function setCurrentUser(user) {
  _current_user.set(user);
}
function currentUser() {
  return _current_user() || EMPTY_USER;
}

export {
  current_user,
  setCurrentUser,
  currentUser
};
//# sourceMappingURL=chunk-5RDGWPHM.js.map
