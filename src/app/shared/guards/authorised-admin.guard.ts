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

import { ApplicationService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorisedAdminGuard implements CanActivate, CanLoad {

    constructor(private _service: ApplicationService) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this._service.get('user');
        return user && user.sys_admin;
    }

    public canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        const user = this._service.get('user');
        return user && user.sys_admin;
    }
}
