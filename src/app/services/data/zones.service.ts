
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { CommsService } from '@acaprojects/ngx-composer';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';

import { BaseAPIService } from './base.service';
import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';

export interface IEngineZone {
    id: string;
    name: string;
    created: number;
    description?: string;
    tags?: string;
    tag_list?: string[];
    triggers?: any[];
    trigger_data?: any[];
    settings?: any;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeZonesService extends BaseAPIService<IEngineZone> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'zone';
        this._singular = 'zone';
        this._api_route = '/zones';
    }

    protected processItem(raw_item: any) {
        const item: IEngineZone = {
            id: raw_item.id,
            name: raw_item.name,
            tags: raw_item.tags,
            description: raw_item.description,
            triggers: raw_item.triggers,
            trigger_data: raw_item.trigger_data,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        item.tag_list = (item.tags || '').split(' ');
        return item;
    }

    public getFormFields(item: IEngineZone) {
        const fields: IFormFieldOptions<any>[] = [
            { key: 'name', label: 'Name', required: true, value: '', type: 'input' },
            { key: 'tags', label: 'Tags', value: '', type: 'input' },
            { key: 'support_url', label: 'Support URL', hide: !!item, value: '', type: 'input', validators: [Validators.pattern('')] },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
            { key: 'settings', label: 'Settings', value: '', type: 'custom', settings: { flex: true }, content: CustomSettingsFieldComponent }
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
