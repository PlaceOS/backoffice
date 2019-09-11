import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from '../base.service';
import { User } from './user.class';
import { HashMap } from '../../../shared/utilities/types.utilities';

import * as dayjs from 'dayjs';

export interface ILoginOptions {
    /** URL to post login request to */
    url?: string;
    /** Whether form data is passed in the body of the request */
    form?: boolean;
    /** Custom headers to pass into the post request */
    headers?: HashMap<string>;
}

@Injectable({
    providedIn: 'root'
})
export class UsersService extends BaseAPIService<User> {
    constructor(protected http: CommsService, protected uhttp: HttpClient, protected location: Location) {
        super(http);
        this._name = 'Users';
        this._api_route = 'users';
        this._compare = (a, b) => !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
        this.set('current_user', new User(this, { id: 'local_user', name: 'Local User' }));
    }

    /** Currently logged in user */
    public get current(): User {
        return this.get('current_user');
    }

    /**
     * Sets the access token and expiry for the user
     * @param token OAuth bearer token
     * @param expiry Expiry epoch timestamp in ms
     * @param reload Whether to reload the page after setting tokens
     */
    public setToken(token: string, expiry?: number, reload: boolean = true) {
        if (!expiry) {
            expiry = dayjs()
                .add(7, 'd').endOf('d')
                .valueOf();
        }
        const path = `${location.origin}${this.parent.setting('composer.route') || ''}/oauth-resp.html`;
        const client_id = this.http.hash(path);
        if (sessionStorage) {
            sessionStorage.setItem(`${client_id}_access_token`, token);
            sessionStorage.setItem(`${client_id}_expires_at`, `${expiry}`);
        }
        if (localStorage) {
            localStorage.setItem(`${client_id}_access_token`, token);
            localStorage.setItem(`${client_id}_expires_at`, `${expiry}`);
        }
        if (reload) {
            this.location.go(this.location.path());
        }
        return path;
    }

    /**
     * Post login request to the API
     * @param query_params Key value pairs to pass into
     * @param options Options for the login request
     */
    public login(query_params: HashMap, options: ILoginOptions = {}): Promise<void> {
        if (!this._promises['login']) {
            this._promises['login'] = new Promise<void>((resolve, reject) => {
                this.set('status', 'loading');
                let headers = new HttpHeaders();
                if (!options || options.form !== false) {
                    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
                }
                const url = (options ? options.url : '') || '/auth/signin';
                this.uhttp.post(url, query_params, { headers }).subscribe(
                    _ => null,
                    e => reject(e),
                    () => {
                        this.http.tryLogin();
                        resolve();
                    }
                );
            });
        }
        return this._promises['login'];
    }

    /**
     * Logout of user and redirect to logout URL
     */
    public logout() {
        this.http.logout();
    }

    /**
     * Load initial data for the service
     */
    protected load(tries: number = 0): Promise<void> {
        this.set('status', 'loading');
        return new Promise<void>(resolve => {
            if (tries > 4) {
                this.set('status', 'invalid');
                return resolve();
            }
            this.show('current', { engine: true }).then(
                current_user => {
                    this.set('status', 'available');
                    this.set('current_user', current_user);
                    if (this.parent && this.parent.setting('app.user.grab_api_details')) {
                        this.show(current_user.email).then(
                            user => {
                                this.set('current_user', user);
                                if (this.parent.setting('app.user.update_location')) {
                                    this.interval('location', () => user.locate(), 5000);
                                }
                                resolve();
                            },
                            () => this.timeout('load', () => this.load(++tries).then(() => resolve()))
                        );
                    } else {
                        if (this.parent.setting('app.user.update_location')) {
                            this.interval('location', () => current_user.locate(), 5000);
                        }
                        resolve();
                    }
                },
                () => this.timeout('load', () => this.load(++tries).then(() => resolve()))
            );
        });
    }

    /**
     * Convert raw API data into a valid User Object
     * @param raw_item Raw API data
     */
    protected process(raw_data: any): User {
        return new User(this, raw_data);
    }
}
