import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { BackofficeUsersService } from 'src/app/services/data/users.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorisedAdminGuard implements CanActivate, CanLoad {

    constructor(private _user_service: BackofficeUsersService) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this._user_service.user.getValue();
        return user && user.sys_admin;
    }

    public canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        const user = this._user_service.user.getValue();
        return user && user.sys_admin;
    }
}
