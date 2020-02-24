import { ComposerService } from '@acaengine/composer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EngineUsersService, EngineUser, EngineUserQueryOptions } from '@acaengine/ts-client';
import { BehaviorSubject } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

import { FilterFn, DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

import * as dayjs from 'dayjs';
import * as Sentry from '@sentry/browser';

import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';

type ServiceItem = EngineUser;

@Injectable({
    providedIn: 'root'
})
export class BackofficeUsersService extends EngineUsersService {
    /** Name for a single user */
    readonly singular: string = 'user';
    /** Behavior subject with the currently available list of users */
    readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Active User */
    readonly user = new BehaviorSubject<ServiceItem>(null);
    /** State of loading the user */
    readonly state = new BehaviorSubject<string>('');
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = _ => true;
    /** Application Service */
    public parent: any;
    readonly can_create: boolean = false;
    readonly can_edit: boolean = true;

    constructor(
        private _composer: ComposerService,
        private http_unauth: HttpClient,
        private _dialog: MatDialog
    ) {
        super(undefined);
        const sub = this._composer.initialised.subscribe(state => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
    }

    /**
     * Get the available list of zones
     * @param predicate Function to filter the zone list on
     */
    public list(predicate: FilterFn<ServiceItem> = this._filter_fn): ServiceItem[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: EngineUserQueryOptions): Promise<ServiceItem[]> {
        return new Promise((resolve, reject) => {
            super.query(query_params).then(
                list => {
                    const old_list = this.list();
                    const new_list = [...old_list, ...list];
                    for (const item of new_list) {
                        const found = new_list.findIndex(i => i.id === item.id && i !== item);
                        if (found >= 0) {
                            new_list.splice(new_list.indexOf(item), 1);
                        }
                    }
                    this.listing.next(new_list);
                    resolve(list);
                },
                e => reject(e)
            );
        });
    }

    public load(): Promise<void> {
        return new Promise(resolve => {
            this.state.next('loading');
            this.show('current').then(
                user => {
                    if (user) {
                        this.user.next(user);
                        Sentry.configureScope((scope) => scope.setUser({ email: user.email }));
                        this.state.next('success');
                        resolve();
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
        const path = `${location.origin}${this.parent.setting('composer.route') ||
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
                    this._composer.auth.authorise().then((token) => {
                        console.log('Token:', token);
                        resolve();
                    });
                },
                err => {
                    if (err.status >= 400) {
                        this.state.next('error');
                    } else {
                        if (sessionStorage) {
                            const clientId = Md5.hashStr(`${location.origin}/oauth-resp.html`);
                            sessionStorage.setItem(`${clientId}_login`, 'true');
                        }
                        this._composer.auth.authorise();
                    }
                    reject();
                },
                () => this.load()
            );
        })
    }

    /**
     * Logout from the application
     */
    public logout() {
        this._composer.auth.logout();
    }

    /**
     * Open modal for editing an item
     * @param item Item to edit
     */
    public async openEditModal(item: EngineUser): Promise<string> {
        return '';
    }

    /**
     * Open confirmation modal for deleting an item
     * @param item Item to delete
     */
    public askDelete(item: EngineUser): Promise<string> {
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
                        item.delete().then(
                            () => resolve(),
                            () => reject('Request failed')
                        );
                    }
                })
            );
        });
    }
}
