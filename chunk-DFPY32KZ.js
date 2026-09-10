import {
  BackofficeUsersService
} from "./chunk-DBFCGDY5.js";
import {
  Router
} from "./chunk-5XY3WE42.js";
import {
  waitForClientSignalValue,
  waitForSignalValue
} from "./chunk-UPJHMA72.js";
import {
  hasSupportSubsystem
} from "./chunk-PKJVK52W.js";
import {
  Service,
  eo,
  inject,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-Z45QSLBL.js";

// src/app/ui/guards/authorised-admin.guard.ts
var AuthorisedAdminGuard = class _AuthorisedAdminGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await waitForClientSignalValue(eo(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_);
    const can_activate = !!user && (user.sys_admin || !!_next.routeConfig?.data?.["allow_subsystem"] && hasSupportSubsystem());
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  async canLoad(_route, _segments) {
    await waitForClientSignalValue(eo(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_);
    const can_activate = !!user && (user.sys_admin || !!_route.data?.["allow_subsystem"] && hasSupportSubsystem());
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  static \u0275fac = function AuthorisedAdminGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorisedAdminGuard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({ token: _AuthorisedAdminGuard, factory: _AuthorisedAdminGuard.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorisedAdminGuard, [{
    type: Service
  }], null, null);
})();

export {
  AuthorisedAdminGuard
};
//# sourceMappingURL=chunk-DFPY32KZ.js.map
