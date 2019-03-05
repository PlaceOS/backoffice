
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseService } from './base.service';
import { IDynamicFieldOptions } from '@acaprojects/ngx-widgets';
import { FormValidators } from '../../shared/form-validators.class';

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
export class ApplicationService extends BaseService<IEngineApplication> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'application';
        this.model.singular = 'application';
        this.model.route = '/applications';
    }

    get endpoint() {
        return `/auth/api${this.model.route}`;
    }

    protected processItem(raw_item: any) {
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
        const fields: IDynamicFieldOptions<any>[] = [
            { control_type: 'group', children: [
                { key: 'name', label: 'Name', required: true, control_type: 'text' },
                { key: 'scopes', label: 'Scopes', control_type: 'text' },
            ] },
            { key: 'skip_authorization', label: 'Skip Authorisation', control_type: 'toggle' },
            { key: 'redirect_uri', label: 'Redirect URI', hide: !!item, control_type: 'text', validators: [FormValidators.url] }
        ];
        this.updateFields(fields, item);
        return fields;
    }

}
