
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';

export interface IEngineApplication {
    id: string;
    uid: string;
    name: string;
    owner_id?: string;
    redirect_uri?: string;
    scopes: string;
    secret: string;
    skip_authorization: boolean;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeApplicationService extends BaseAPIService<IEngineApplication> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'application';
        this._singular = 'application';
        this._api_route = '/applications';
    }

    get endpoint() {
        return `/auth/api${this.route}`;
    }

    protected process(raw_item: any) {
        const item: IEngineApplication = {
            id: raw_item.id,
            uid: raw_item.uid,
            name: raw_item.name,
            owner_id: raw_item.owner_id,
            redirect_uri: raw_item.redirect_uri,
            scopes: raw_item.scopes,
            secret: raw_item.secret,
            skip_authorization: raw_item.skip_authorization,
            created: raw_item.created_at * 1000
        };
        return item;
    }

    public getFormFields(item: IEngineApplication) {
        const fields: IFormFieldOptions[] = [
            { key: '', type: 'group', children: [
                { key: 'name', label: 'Name', required: true, type: 'input', value: item.name },
                { key: 'scopes', label: 'Scopes', type: 'input', value: '' },
            ], value: '' },
            { key: 'skip_authorization', label: 'Skip Authorisation', type: 'checkbox', value: '' },
            { key: 'redirect_uri', label: 'Redirect URI', hide: !!item, type: 'input', value: '' }
        ];
        // this.updateFields(fields, item);
        return fields;
    }

}
