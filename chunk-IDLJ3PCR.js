import {
  newItem
} from "./chunk-V3DC4H2S.js";
import {
  UserAdminMetadataResponse
} from "./chunk-PRQVSGD2.js";
import {
  signal
} from "./chunk-6G3VFYSX.js";

// src/app/common/user-state.ts
var EMPTY_USER = newItem(UserAdminMetadataResponse);
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
//# debugId=a3196cfc-6f22-59a3-a35f-a8b79154c3c5
//# sourceMappingURL=chunk-IDLJ3PCR.js.map
