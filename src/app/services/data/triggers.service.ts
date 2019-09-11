
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';

import { BaseAPIService } from './base.service';

export interface IEngineTrigger {
    id: string;
    name: string;
    description?: string;
    conditions: string[][];
    actions: string[];
    important?: boolean;
    debounce_period?: number;
    created: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeTriggersService extends BaseAPIService<IEngineTrigger> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'trigger';
        this._singular = 'trigger';
        this._api_route = '/triggers';
    }

    protected processItem(raw_item: any) {
        const item: IEngineTrigger = {
            id: raw_item.id,
            name: raw_item.name,
            description: raw_item.description,
            conditions: raw_item.conditions,
            actions: raw_item.actions,
            debounce_period: raw_item.debounce_period,
            important: raw_item.important,
            created: raw_item.created_at * 1000
        };
        return item;
    }

    public getFormFields(item: IEngineTrigger) {
        const fields: IFormFieldOptions<any>[] = [
            { key: 'name', label: 'Name', value: '', type: 'input', required: true },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
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
