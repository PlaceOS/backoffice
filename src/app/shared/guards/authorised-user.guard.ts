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
import { first, delay, retryWhen, take, concatMap } from 'rxjs/operators';

import { ApplicationService } from '../../services/app.service';
import { BackofficeUsersService } from 'src/app/services/data/users.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard implements CanActivate, CanLoad {
    constructor(
        private _service: ApplicationService,
        private _router: Router,
        private _users: BackofficeUsersService
    ) {}

    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        await this._service.initialised.pipe(first((_) => _)).toPromise();
        const user: PlaceUser = await this._users.user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && (user.sys_admin || user.support);
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }

    public async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
        await this._service.initialised.pipe(first((_) => _)).toPromise();
        const user: PlaceUser = await this._users.user.pipe(first((_) => !!_)).toPromise();
        const can_activate = user && (user.sys_admin || user.support);
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }
}
