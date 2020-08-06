import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { PlaceUser, currentUser } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { ApplicationService } from '../../services/app.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard implements CanActivate, CanLoad {

    private _user: PlaceUser;

    constructor(private _service: ApplicationService, private _router: Router) {}

    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        await this._service.initialised.pipe(first(_ => _)).toPromise();
        const user: PlaceUser = this._user || await currentUser().toPromise();
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        console.log('Can Activate:', can_activate);
        this._user = user;
        return can_activate;
    }

    public async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
        await this._service.initialised.pipe(first(_ => _)).toPromise();
        const user: PlaceUser = this._user || await currentUser().toPromise();
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        this._user = user;
        return can_activate;
    }
}
