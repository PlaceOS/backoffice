import { Service, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from '@angular/router';
import { PlaceUser, onlineState } from '@placeos/ts-client';

import {
    waitForClientSignalValue,
    waitForSignalValue,
} from '../../common/signals';
import { BackofficeUsersService } from '../../users/users.service';

@Service()
export class AuthorisedAdminGuard {
    private _router = inject(Router);
    private _users = inject(BackofficeUsersService);

    public async canActivate(
        _next: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Promise<boolean | UrlTree> {
        await waitForClientSignalValue(onlineState(), (_) => _);
        const user: PlaceUser = await waitForSignalValue(
            this._users.user,
            (_) => !!_,
        );
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }

    public async canLoad(
        _route: Route,
        _segments: UrlSegment[],
    ): Promise<boolean> {
        await waitForClientSignalValue(onlineState(), (_) => _);
        const user: PlaceUser = await waitForSignalValue(
            this._users.user,
            (_) => !!_,
        );
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        return can_activate;
    }
}
