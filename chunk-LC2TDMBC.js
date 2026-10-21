import {
  th
} from "./chunk-3QDC3AOP.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-TCVU4336.js";

// src/app/ui/pipes/user.pipe.ts
var USERS = /* @__PURE__ */ new Map();
var UserPipe = class _UserPipe {
  transform(id) {
    if (!id)
      return Promise.resolve({});
    let user = USERS.get(id);
    if (!user) {
      user = th(id).catch(() => {
        USERS.delete(id);
        return {};
      });
      USERS.set(id, user);
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
//# debugId=8196e5af-337a-5dd0-b976-d8259cc9108a
//# sourceMappingURL=chunk-LC2TDMBC.js.map
