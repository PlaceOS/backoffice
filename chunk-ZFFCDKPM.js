import {
  BackofficeUsersService
} from "./chunk-3VH5IDBT.js";
import {
  Router
} from "./chunk-O7OQ7JEW.js";
import {
  waitForClientSignalValue,
  waitForSignalValue
} from "./chunk-TEN3ABAY.js";
import {
  hasSupportSubsystem
} from "./chunk-LMUB4LUK.js";
import {
  Service,
  eo,
  inject,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-YPXZNU3N.js";

// src/app/ui/guards/authorised-user.guard.ts
var AuthorisedUserGuard = class _AuthorisedUserGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await waitForClientSignalValue(eo(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_);
    const can_activate = !!user && (user.sys_admin || user.support || !_next.data?.["role_only"] && hasSupportSubsystem());
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  async canLoad(_route, _segments) {
    await waitForClientSignalValue(eo(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_);
    const can_activate = !!user && (user.sys_admin || user.support || !_route.data?.["role_only"] && hasSupportSubsystem());
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  static \u0275fac = function AuthorisedUserGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorisedUserGuard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _AuthorisedUserGuard, factory: _AuthorisedUserGuard.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorisedUserGuard, [{
    type: Service
  }], null, null);
})();

export {
  AuthorisedUserGuard
};
//# sourceMappingURL=chunk-ZFFCDKPM.js.map
