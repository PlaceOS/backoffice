import {
  BackofficeUsersService
} from "./chunk-XBHEJBLP.js";
import {
  Router
} from "./chunk-DVQI66VA.js";
import {
  waitForClientSignalValue,
  waitForSignalValue
} from "./chunk-UBLR53FR.js";
import {
  hasSupportSubsystem
} from "./chunk-6IWBYUDE.js";
import {
  Kr,
  Service,
  inject,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-DYV6NXUQ.js";

// src/app/ui/guards/authorised-admin.guard.ts
var AuthorisedAdminGuard = class _AuthorisedAdminGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await waitForClientSignalValue(Kr(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_);
    const can_activate = !!user && (user.sys_admin || !!_next.routeConfig?.data?.["allow_subsystem"] && hasSupportSubsystem());
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  async canLoad(_route, _segments) {
    await waitForClientSignalValue(Kr(), (_) => _);
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
//# sourceMappingURL=chunk-IV4R5XJB.js.map
