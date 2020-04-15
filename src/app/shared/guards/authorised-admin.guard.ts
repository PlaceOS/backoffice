import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { ApplicationService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorisedAdminGuard implements CanActivate, CanLoad {

    constructor(private _service: ApplicationService, private _router: Router) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const user = this._service.get('user');
        const can_activate = user && user.sys_admin;
        if (!can_activate) { this._router.navigate(['/systems']); }
        return can_activate;
    }

    public canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
        const user = this._service.get('user');
        const can_load = user && user.sys_admin;
        if (!can_load) { this._router.navigate(['/systems']); }
        return can_load;
    }
}
