import {
  Router
} from "./chunk-CM34JU22.js";
import {
  BackofficeUsersService
} from "./chunk-YDHUXXBA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JFTEBBHC.js";
import {
  $u,
  first
} from "./chunk-55CIHLAT.js";

// src/app/ui/guards/authorised-admin.guard.ts
var AuthorisedAdminGuard = class _AuthorisedAdminGuard {
  _router = inject(Router);
  _users = inject(BackofficeUsersService);
  async canActivate(_next, _state) {
    await $u().pipe(first((_) => _)).toPromise();
    const user = await this._users.user.pipe(first((_) => !!_)).toPromise();
    const can_activate = user && user.sys_admin;
    if (!can_activate) {
      this._router.navigate(["/unauthorised"]);
    }
    return can_activate;
  }
  async canLoad(_route, _segments) {
    await $u().pipe(first((_) => _)).toPromise();
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
//# sourceMappingURL=chunk-MSTWBPVI.js.map
