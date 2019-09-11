
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';
import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';
import { Validators } from '@angular/forms';

export interface IEngineDomain {
    id: string;
    name: string;
    display_name?: string;
    description?: string;
    domain: string;
    login_url: string;
    logout_url: string;
    config?: any;
    internals?: any;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeDomainsService extends BaseAPIService<IEngineDomain> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'domain';
        this._singular = 'domain';
        this._api_route = '/domains';
    }

    public route() {
        return `/auth/api${this._api_route}`;
    }

    protected processItem(raw_item: any) {
        const item: IEngineDomain = {
            id: raw_item.id,
            name: raw_item.name,
            display_name: `${raw_item.name}(${raw_item.dom})`,
            domain: raw_item.dom,
            description: raw_item.description,
            login_url: raw_item.login_url,
            logout_url: raw_item.logout_url,
            config: raw_item.config,
            internals: raw_item.internals,
            created: raw_item.created_at * 1000
        };
        return item;
    }

    public getFormFields(item: IEngineDomain) {
        const fields: IFormFieldOptions[] = [
            {
                key: 'details_group',
                type: 'group',
                children: [
                    { key: 'name', label: 'Name', type: 'input', value: '' },
                    { key: 'domain', label: 'Domain', type: 'input', required: true, validators: [Validators.pattern('')], value: '' },
                ], value: ''
            },
            { key: 'login_url', label: 'Login URL', type: 'input', validators: [Validators.pattern('')], value: '' },
            { key: 'logout_url', label: 'Logout URL', type: 'input', validators: [Validators.pattern('')], value: '' },
            {
                key: 'config_group',
                type: 'group',
                children: [
                    { key: 'internals', label: 'Internals', type: 'custom', settings: { flex: true }, content: CustomSettingsFieldComponent, value: '' },
                    { key: 'config', label: 'Config', type: 'custom', settings: { flex: true}, content: CustomSettingsFieldComponent, value: '' },
                ], value: ''
            },
            { key: 'description', label: 'Description', type: 'textarea', value: '' }
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
