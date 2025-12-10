import {
  Router
} from "./chunk-DPN7JUQC.js";
import {
  BackofficeUsersService
} from "./chunk-77DSVYRA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-AJKLM77M.js";
import {
  Wo,
  first
} from "./chunk-ESVM3M45.js";

// src/app/ui/guards/authorised-admin.guard.ts
var AuthorisedAdminGuard = class _AuthorisedAdminGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await Wo().pipe(first((_) => _)).toPromise();
    const user = await this._users.user.pipe(first((_) => !!_)).toPromise();
    const can_activate = user && user.sys_admin;
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  async canLoad(_route, _segments) {
    await Wo().pipe(first((_) => _)).toPromise();
    const user = await this._users.user.pipe(first((_) => !!_)).toPromise();
    const can_activate = user && user.sys_admin;
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  static \u0275fac = function AuthorisedAdminGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthorisedAdminGuard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorisedAdminGuard, factory: _AuthorisedAdminGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorisedAdminGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthorisedAdminGuard
};
//# sourceMappingURL=chunk-7OIGIA5L.js.map
