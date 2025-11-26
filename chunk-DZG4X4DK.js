import {
  BackofficeUsersService
} from "./chunk-EWUI732O.js";
import {
  $s,
  Injectable,
  Router,
  first,
  inject,
  setClassMetadata,
  toDate,
  ɵɵdefineInjectable
} from "./chunk-ZKZAJWA3.js";

// node_modules/date-fns/getUnixTime.js
function getUnixTime(date) {
  return Math.trunc(+toDate(date) / 1e3);
}

// src/app/ui/guards/authorised-admin.guard.ts
var AuthorisedAdminGuard = class _AuthorisedAdminGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(next, state) {
    await $s().pipe(first((_) => _)).toPromise();
    const user = await this._users.user.pipe(first((_) => !!_)).toPromise();
    const can_activate = user && user.sys_admin;
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  async canLoad(route, segments) {
    await $s().pipe(first((_) => _)).toPromise();
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
  getUnixTime,
  AuthorisedAdminGuard
};
//# sourceMappingURL=chunk-DZG4X4DK.js.map
