import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { PlaceUser, onlineState } from '@placeos/ts-client';
import { first } from 'rxjs/operators';

import { BackofficeUsersService } from '../../users/users.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedAdminGuard {
    private _router = inject(Router);
    private _users = inject(BackofficeUsersService);

    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<boolean | UrlTree> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user: PlaceUser = await this._users.user
            .pipe(first((_) => !!_))
            .toPromise();
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }

    public async canLoad(
        route: Route,
        segments: UrlSegment[],
    ): Promise<boolean> {
        await onlineState()
            .pipe(first((_) => _))
            .toPromise();
        const user: PlaceUser = await this._users.user
            .pipe(first((_) => !!_))
            .toPromise();
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }
}
