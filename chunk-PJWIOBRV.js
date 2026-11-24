import {
  newItem
} from "./chunk-TXVXL5KT.js";
import {
  UserAdminMetadataResponse,
  users_exports
} from "./chunk-PRQVSGD2.js";
import {
  orThrow
} from "./chunk-LD3K5ATK.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-6G3VFYSX.js";

// src/app/ui/pipes/user.pipe.ts
var USERS = /* @__PURE__ */ new Map();
var UserPipe = class _UserPipe {
  transform(id) {
    if (!id)
      return Promise.resolve({});
    let user = USERS.get(id);
    if (!user) {
      user = users_exports.show({ id }).then(orThrow).then((data) => newItem(UserAdminMetadataResponse, data)).catch(() => {
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
//# debugId=fc322525-e464-52a0-8543-cf5d72a52722
//# sourceMappingURL=chunk-PJWIOBRV.js.map
