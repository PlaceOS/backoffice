
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PlaceUser, PlaceUserQueryOptions, removeUser, logout, authorise, currentUser, queryUsers } from '@placeos/ts-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

import { FilterFn, DialogEvent } from '../../shared/utilities/types.utilities';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from '../../overlays/confirm-modal/confirm-modal.component';

import * as dayjs from 'dayjs';
import * as Sentry from '@sentry/browser';
import { BaseClass } from 'src/app/shared/globals/base.class';
import { ApplicationService } from '../app.service';

type ServiceItem = PlaceUser;

@Injectable({
    providedIn: 'root'
})
export class BackofficeUsersService extends BaseClass {
    /** Name for a single user */
    public readonly singular: string = 'user';
    /** Behavior subject with the currently available list of users */
    public readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Active User */
    public readonly user = new BehaviorSubject<ServiceItem>(null);
    /** State of loading the user */
    public readonly state = new BehaviorSubject<string>('');

    public readonly can_create: boolean = false;
    public readonly can_edit: boolean = true;

    /** Whether dark mode is enabled */
    public get dark_mode(): boolean {
        if (
            !((this.user.getValue() || {}) as any).ui_theme &&
            !localStorage.getItem('BACKOFFICE.theme') &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            return true;
        }
        return (
            ((this.user.getValue() || {}) as any).ui_theme === 'dark' ||
            localStorage.getItem('BACKOFFICE.theme') === 'dark'
        );
    }
    public set dark_mode(state: boolean) {
        if (state) {
            localStorage.setItem('BACKOFFICE.theme', 'dark');
            this._service.set('dark_mode', state);
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('BACKOFFICE.theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = _ => true;

    constructor(
        private _service: ApplicationService,
        private http_unauth: HttpClient,
        private _dialog: MatDialog
    ) {
        super();
        this.load();
    }

    /**
     * Get the available list of zones
     * @param predicate Function to filter the zone list on
     */
    public list(predicate: FilterFn<PlaceUser> = this._filter_fn): PlaceUser[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: PlaceUserQueryOptions): Observable<PlaceUser[]> {
        return queryUsers(query_params)
    }

    public load(): Promise<void> {
        console.log('Load user');
        return new Promise(resolve => {
            this.state.next('loading');
            currentUser().toPromise().then(
                user => {
                    if (user) {
                        this.user.next(user);
                        this._service.set('user', user);
                        Sentry.configureScope(scope => scope.setUser({ email: user.email }));
                        this.state.next('success');
                        resolve();
                        console.log('Dark mode:', this.dark_mode);
                        this.dark_mode = this.dark_mode;
                    } else {
                        this.timeout('load', () => this.load().then(_ => resolve()), 600);
                    }
                },
                () => this.timeout('load', () => this.load().then(_ => resolve()), 600)
            );
        });
    }

    /**
     * Manually set the user access token
     * @param token Token to set
     * @param expiry Expiry time of the token
     */
    public setToken(token: string, expiry: number) {
        if (!expiry) {
            expiry = dayjs()
                .add(7, 'd')
                .valueOf();
        }
        const path = `${location.origin}${this._service.setting('composer.route') ||
            ''}/oauth-resp.html`;
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
    public login(fields: any = {}) {
        return new Promise((resolve, reject) => {
            this.state.next('loading');
            const query = toQueryString(fields);
            let headers = new HttpHeaders();
            headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http_unauth.post('/auth/signin', query, { headers }).subscribe(
                (res: any) => {
                    if (sessionStorage) {
                        const clientId = Md5.hashStr(`${location.origin}/oauth-resp.html`);
                        sessionStorage.setItem(`${clientId}_login`, 'true');
                    }
                    authorise().then(_ => resolve());
                },
                err => {
                    if (err.status >= 400) {
                        this.state.next('error');
                    } else {
                        if (sessionStorage) {
                            const clientId = Md5.hashStr(`${location.origin}/oauth-resp.html`);
                            sessionStorage.setItem(`${clientId}_login`, 'true');
                        }
                        authorise();
                    }
                    reject();
                },
                () => this.load()
            );
        });
    }

    /**
     * Logout from the application
     */
    public logout() {
        logout();
    }

    /**
     * Open confirmation modal for deleting an item
     * @param item Item to delete
     */
    public askDelete(item: PlaceUser): Promise<string> {
        return new Promise((resolve, reject) => {
            let complete = false;
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: 'Delete User?',
                        content: `Are you sure you want to delete this user?`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'confirm_ref',
                ref.componentInstance.event.subscribe((e: DialogEvent) => {
                    if (e.reason === 'done') {
                        complete = true;
                        removeUser(item.id).toPromise().then(
                            () => resolve(),
                            () => reject('Request failed')
                        );
                    }
                })
            );
        });
    }
}
