import {
  Dn
} from "./chunk-LCM7Z6QA.js";
import {
  signal
} from "./chunk-OGAUD6Z3.js";

// src/app/common/user-state.ts
var EMPTY_USER = new Dn();
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
//# debugId=51b99fd0-54b4-53d8-bb97-04d74c75ae05
//# sourceMappingURL=chunk-32E64OOS.js.map
