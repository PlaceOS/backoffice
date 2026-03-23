import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-CMCD56FG.js";
import {
  lastValueFrom,
  qa
} from "./chunk-IXMJWBEL.js";

// src/app/ui/pipes/user.pipe.ts
var USERS = [];
var UserPipe = class _UserPipe {
  async transform(id) {
    if (!id)
      return {};
    let user = USERS.find((_) => _.id === id || _.email === id || _.card_number === id);
    if (!user) {
      user = await lastValueFrom(qa(id));
      USERS.push(user);
    }
    return user;
  }
  static \u0275fac = function UserPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

export {
  UserPipe
};
//# sourceMappingURL=chunk-NMBNJ43X.js.map
