import { ComposerService } from '@acaprojects/ngx-composer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { EngineUsersService, EngineUser, EngineUserQueryOptions } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

import { FilterFn } from 'src/app/shared/utilities/types.utilities';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

import * as dayjs from 'dayjs';

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
    private _filter_fn: FilterFn<ServiceItem> = (_) => true;
    /** Application Service */
    public parent: any;

    constructor(private _composer: ComposerService, private http_unauth: HttpClient) {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
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
            super.query(query_params).then((list) => {
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
            }, e => reject(e));
        });
    }

    protected load(): Promise<void> {
        return new Promise((resolve) => {
            this.state.next('loading');
            this.show('current').then((user) => {
                if (user) {
                    this.user.next(user);
                    this.state.next('success');
                    resolve();
                } else {
                    this.timeout('load', () => this.load().then(_ => resolve()), 600);
                }
            }, () => this.timeout('load', () => this.load().then(_ => resolve()), 600));
        });
    }

    /**
     * Manually set the user access token
     * @param token Token to set
     * @param expiry Expiry time of the token
     */
    public setToken(token: string, expiry: number) {
        if (!expiry) { expiry = dayjs().add(7, 'd').valueOf(); }
        const path = `${location.origin}${this.parent.setting('composer.route') || ''}/oauth-resp.html`;
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
        this._subjects.state.next('loading');
        const query = toQueryString(fields);
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http_unauth.post('/auth/jwt/callback', query, { headers }).subscribe((res: any) => {
            if (res.status >= 200 && res.status < 400) {
                if (sessionStorage) {
                    const clientId = Md5.hashStr(`${location.origin}/oauth-resp.html`);
                    sessionStorage.setItem(`${clientId}_login`, 'true');
                }
                this._composer.auth.authorise();
            } else {
                this._subjects.state.next('invalid');
            }
        }, (err) => {
            if (err.status >= 400) {
                this._subjects.state.next('error');
            } else {
                if (sessionStorage) {
                    const clientId = Md5.hashStr(`${location.origin}/oauth-resp.html`);
                    sessionStorage.setItem(`${clientId}_login`, 'true');
                }
                this._composer.auth.authorise();
            }
        }, () => this.load());
    }

    /**
     * Logout from the application
     */
    public logout() {
        this._composer.auth.logout();
    }

    /**
     * Get form fields for the given item
     * @param item
     */
    public getFormFields(item: ServiceItem) {
        const fields: ADynamicFormField<any>[] = ([
            { key: 'name', label: 'Name', value: '', type: 'input' },
            { key: 'email', label: 'Email', attributes: {type: 'email'}, value: '', type: 'input', required: true, validators: [Validators.email] },
            { key: 'card_number', label: 'Card Number', value: '', type: 'input' },
            { key: 'sys_admin', label: 'System Admin', value: '', type: 'checkbox' },
            { key: 'support', label: 'Support', value: '', type: 'checkbox' },
            { key: 'password', label: 'Password', attributes: {type: 'password'}, value: '', type: 'input' },
            { key: 'confirm_password', label: 'Confirm Password', attributes: { type: 'password' }, metadata: { match: 'password'}, value: '', type: 'input' },
        ] as IFormFieldOptions[])
            .map(i => new ADynamicFormField(i));
        /** Initialise fields and change listeners */
        for (const field of fields) {
            field.control.setValue(item[field.key]);
            field.control.valueChanges.subscribe(i => item[field.key] = i);
        }
        return fields;
    }

}
