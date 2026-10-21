import {
  BackofficeUsersService
} from "./chunk-FKQAQZDB.js";
import {
  Router
} from "./chunk-UOJTYLOH.js";
import {
  hasSupportSubsystem
} from "./chunk-P3BK5ZDJ.js";
import {
  waitForClientSignalValue,
  waitForSignalValue
} from "./chunk-WZTE63Q5.js";
import {
  io
} from "./chunk-NMVMT4VD.js";
import {
  Service,
  inject,
  setClassMetadata,
  ɵɵdefineService
} from "./chunk-OQOLG7V4.js";

// src/app/ui/guards/authorised-user.guard.ts
var AuthorisedUserGuard = class _AuthorisedUserGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await waitForClientSignalValue(io(), (_) => _);
    const user = await waitForSignalValue(this._users.user, (_) => !!_).catch(() => null);
    const can_activate = !!user && (user.sys_admin || user.support || !_next.data?.["role_only"] && hasSupportSubsystem());
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
//# debugId=475e8022-5981-5f22-9e36-c1dad82b42f0
//# sourceMappingURL=chunk-LJAH66NP.js.map
