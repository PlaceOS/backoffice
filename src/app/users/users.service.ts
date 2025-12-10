import { Injectable, inject, signal } from '@angular/core';
import {
    PlaceUser,
    PlaceUserQueryOptions,
    currentUser,
    logout,
    onlineState,
    queryUsers,
} from '@placeos/ts-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Md5 } from 'ts-md5';

import { AsyncHandler } from '../common/async-handler.class';
import { SettingsService } from '../common/settings.service';
import { FilterFn } from '../common/types';

import * as Sentry from '@sentry/browser';
import { addDays } from 'date-fns';

type ServiceItem = PlaceUser;

@Injectable({
    providedIn: 'root',
})
export class BackofficeUsersService extends AsyncHandler {
    private _settings = inject(SettingsService);

    private _user_signal = signal<PlaceUser>(null);

    /** Name for a single user */
    public readonly singular: string = 'user';
    /** Behavior subject with the currently available list of users */
    public readonly listing = new BehaviorSubject<ServiceItem[]>([]);

    private _user = new BehaviorSubject<ServiceItem>(null);
    /** Active User */
    public readonly user = this._user.asObservable();
    /** Active User */
    public readonly current = () => this._user.getValue();

    /** Active User */
    public readonly currentSignal = () => this._user_signal;
    /** State of loading the user */
    public readonly state = new BehaviorSubject<string>('');

    public readonly can_create: boolean = false;
    public readonly can_edit: boolean = true;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        const os_dark = window?.matchMedia
            ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
            : false;
        const theme =
            localStorage.getItem('BACKOFFICE.theme') ??
            ((this._user.getValue() || {}) as Record<string, unknown>).ui_theme;
        return (theme && theme === 'dark') || (!theme && os_dark);
    }
    public set dark_mode(state: boolean) {
        if (state) {
            localStorage.setItem('BACKOFFICE.theme', 'dark');
            this._settings.post('dark_mode', state);
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('BACKOFFICE.theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = (_) => true;

    constructor() {
        super();
        onlineState()
            .pipe(first((_) => _))
            .subscribe(() => this.load());
    }

    /**
     * Get the available list of zones
     * @param predicate Function to filter the zone list on
     */
    public list(predicate: FilterFn<PlaceUser> = this._filter_fn): PlaceUser[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(
        query_params?: PlaceUserQueryOptions,
    ): Observable<PlaceUser[]> {
        return queryUsers(query_params).pipe(map((resp) => resp.data));
    }

    public load(): Promise<void> {
        return new Promise((resolve) => {
            this.state.next('loading');
            currentUser().subscribe({
                next: (user) => {
                    if (user) {
                        this._user.next(user);
                        this._user_signal.set(user);
                        Sentry.withScope((scope) =>
                            scope.setUser({ email: user.email }),
                        );
                        this.state.next('success');
                        this._initialised.next(true);
                        // Trigger dark mode getter to apply current theme
                        const _current_theme = this.dark_mode;
                        resolve();
                    } else {
                        this.timeout(
                            'load',
                            () => this.load().then((_) => resolve()),
                            600,
                        );
                    }
                },
                error: () =>
                    this.timeout(
                        'load',
                        () => this.load().then((_) => resolve()),
                        600,
                    ),
            });
        });
    }

    /**
     * Manually set the user access token
     * @param token Token to set
     * @param expiry Expiry time of the token
     */
    public setToken(token: string, expiry: number) {
        if (!expiry) {
            expiry = addDays(Date.now(), 7).valueOf();
        }
        const path = `${location.origin}${
            this._settings.get('composer.route') || ''
        }/oauth-resp.html`;
        if (localStorage) {
            const client_id = Md5.hashStr(path);
            localStorage.setItem(`${client_id}_access_token`, token);
            localStorage.setItem(`${client_id}_expires_at`, `${expiry}`);
            location.reload();
        }
        return path;
    }

    /**
     * Login with given credentials
     * @param fields Key value pairs of post parameters
     */
    public login(_fields: Record<string, unknown> = {}) {
        // Login functionality is handled by PlaceOS OAuth
    }

    /**
     * Logout from the application
     */
    public logout() {
        logout();
    }
}
