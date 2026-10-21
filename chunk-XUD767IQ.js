import {
  BackofficeUsersService
} from "./chunk-BISB7QAB.js";
import {
  Router
} from "./chunk-SYH7ZBC5.js";
import {
  hasSupportSubsystem
} from "./chunk-XTDO4IU7.js";
import {
  waitForClientSignalValue,
  waitForSignalValue
} from "./chunk-E63CPPEP.js";
import {
  io
} from "./chunk-3QDC3AOP.js";
import {
  Service,
  inject,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-TCVU4336.js";

// src/app/ui/guards/authorised-admin.guard.ts
var AuthorisedAdminGuard = class _AuthorisedAdminGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await waitForClientSignalValue(io(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_).catch(() => null);
    const can_activate = !!user && (user.sys_admin || !!_next.routeConfig?.data?.["allow_subsystem"] && hasSupportSubsystem());
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
//# debugId=42fa39f1-e88d-5d12-bf40-05a0df9436f8
//# sourceMappingURL=chunk-XUD767IQ.js.map
