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
import { EngineUser } from '@placeos/ts-client';
import { ComposerService } from '@placeos/composer';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthorisedUserGuard implements CanActivate, CanLoad {

    private _user: EngineUser;

    constructor(private _composer: ComposerService, private _router: Router) {}

    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        await this._composer.initialised.pipe(first(_ => _)).toPromise();
        const user: EngineUser = this._user || await this._composer.users.current();
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        this._user = user;
        return can_activate;
    }

    public async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
        await this._composer.initialised.pipe(first(_ => _)).toPromise();
        const user: EngineUser = this._user || await this._composer.users.current();
        const can_activate = user && user.sys_admin;
        if (!can_activate) {
            this._router.navigate(['/unauthorised']);
        }
        this._user = user;
        return can_activate;
    }
}
