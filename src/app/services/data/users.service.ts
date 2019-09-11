import { CommsService } from '@acaprojects/ngx-composer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';

import { BaseAPIService } from './base.service';
import { filterList } from 'src/app/shared/utilities/general.utilities';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

import * as dayjs from 'dayjs';

export interface IUser {
    id: string;
    name: string;
    first_name?: string;
    last_name?: string;
    email: string;
    win_id?: string;
    type?: 'partner' | 'internal' | 'external';
    role?: string;
    state?: string;
    image: string;
    phone?: string;
    external?: boolean;
    staff_code?: string;
    organisation_id?: string;
    organisation_name?: string;
    organisation?: { id: string, name: string } | string;
    b_unit?: string;
    gravatar_hash?: string;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeUsersService extends BaseAPIService<IUser> {

    constructor(protected http: CommsService, private http_unauth: HttpClient) {
        super(http);
        this._name = 'user';
        this._singular = 'user';
        this._api_route = '/users';
        this.set('user', null);
        this.set('state', 'loading');
    }

    protected load(): Promise<void> {
        return new Promise((resolve) => {
            this.set('state', 'loading');
            this.show('current').then((user) => {
                if (user) {
                    this.set('user', user);
                    this.set('state', 'success');
                    resolve();
                } else {
                    this.timeout('load', () => this.load().then(_ => resolve()), 600);
                }
            }, () => this.timeout('load', () => this.load().then(_ => resolve()), 600));
        })
    }

    /**
     * Get current user
     */
    public current() {
        return this.get('user');
    }

    public setToken(token: string, expiry: number) {
        if (!expiry) { expiry = dayjs().add(7, 'd').valueOf(); }
        const path = `${location.origin}${this.parent.setting('composer.route') || ''}/oauth-resp.html`;
        if (localStorage) {
            const client_id = this.http.hash(path);
            localStorage.setItem(`${client_id}_access_token`, token);
            localStorage.setItem(`${client_id}_expires_at`, `${expiry}`);
            location.reload();
        }
        return path;
    }

    public getFilteredUsers(filter: string, items: IUser[] = this.list(), fields: string[] = ['name', 'email']) {
        return filterList(filter, items, fields);
    }

    /**
     * Login with given credentials
     * @param fields Key value pairs of post parameters
     */
    public login(fields: any = {}) {
        this._subjects.state.next('loading');
        const query = toQueryString(fields);
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http_unauth.post('/auth/jwt/callback', query, { headers }).subscribe((res: any) => {
            if (res.status >= 200 && res.status < 400) {
                if (sessionStorage) {
                    const clientId = this.http.hash(`${location.origin}/oauth-resp.html`);
                    sessionStorage.setItem(`${clientId}_login`, 'true');
                }
                this.http.tryLogin();
            } else {
                this._subjects.state.next('invalid');
            }
            return;
        }, (err) => {
            if (err.status >= 400) {
                this._subjects.state.next('error');
            } else {
                if (sessionStorage) {
                    const clientId = this.http.hash(`${location.origin}/oauth-resp.html`);
                    sessionStorage.setItem(`${clientId}_login`, 'true');
                }
                this.http.tryLogin();
            }
        }, () => this.load());
    }

    public logout() {
        this.http.logout();
    }

    /**
     * Convert user data to local format
     * @param user User data
     */
    protected process(user: any) {
        if (user) {
            const u_org = user.organisation;
            const org = {
                id: typeof u_org !== 'string' && u_org ? u_org.id : user.organisation_id,
                name: typeof u_org !== 'string' && u_org ? u_org.name : user.organisation_name || user.organisation,
            };
            const member: IUser = {
                id: user.id || user.email,
                win_id: user.email,
                name: user.name || `${user.first_name} ${user.last_name}`,
                first_name: user.first_name,
                last_name: user.last_name,
                type: user.title ? (user.title.toLowerCase() === 'partner' ? 'partner' : 'internal') : 'external',
                image: null,
                email: user.email,
                phone: user.phone || user.mobile,
                b_unit: user.department,
                organisation_id: org.id,
                organisation_name: org.name,
                staff_code: user.staff_code,
                gravatar_hash: this.http.hash(user.email || '')
            };
            if (member.id) {
                member.image = user.image || null;
            }
            return member;
        } else {
            return null;
        }
    }

    public getFormFields(item: IUser) {
        const fields: IFormFieldOptions<any>[] = [
            { key: 'name', label: 'Name', value: '', type: 'input' },
            { key: 'email', label: 'Email', attributes: {type: 'email'}, value: '', type: 'input', required: true, validators: [Validators.email] },
            { key: 'card_number', label: 'Card Number', value: '', type: 'input' },
            { key: 'sys_admin', label: 'System Admin', value: '', type: 'checkbox' },
            { key: 'support', label: 'Support', value: '', type: 'checkbox' },
            { key: 'password', label: 'Password', attributes: {type: 'password'}, value: '', type: 'input' },
            { key: 'confirm_password', label: 'Confirm Password', attributes: { type: 'password' }, metadata: { match: 'password'}, value: '', type: 'input' },
        ];

        if (item) {
            for (const i of fields) {
                if (item[i.key]) {
                    i.value = item[i.key];
                }
            }
        }
        return fields;
    }

}
