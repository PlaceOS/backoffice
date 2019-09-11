
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';
import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { CustomDropdownFieldComponent } from '../../shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';

export interface IEngineDriver {
    id: string;
    name: string;
    class_name: string;
    module_name: string;
    role: string;
    created: number;
    description?: string;
    default?: number;
    settings?: any;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeDriversService extends BaseAPIService<IEngineDriver> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'driver';
        this._singular = 'driver';
        this._api_route = '/dependencies';
    }

    /**
     * Perform reload task on the given driver
     * @param id Module ID
     */
    public reload(id: string) {
        return this.task(id, 'reload');
    }

    protected process(raw_item: any) {
        const item: IEngineDriver = {
            id: raw_item.id,
            name: raw_item.name,
            class_name: raw_item.class_name,
            module_name: raw_item.module_name,
            role: raw_item.role,
            description: raw_item.description,
            settings: raw_item.settings,
            default: raw_item.default,
            created: raw_item.created_at * 1000
        };
        return item;
    }

    public getFormFields(item: IEngineDriver) {
        const fields: IFormFieldOptions<any>[] = [
            { key: 'zone_id', label: 'Zone', hide: !!item, value: '', type: 'custom', content: CustomDropdownFieldComponent, metadata: { service: this.parent.Zones } },
            { key: 'name', label: 'Name', value: '', type: 'input' },
            { key: 'role', label: 'Role', hide: !!item, value: '', type: 'dropdown', metadata: { options: ['Logic', 'Device', 'Service', 'SSH'] } },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
            { key: 'module_name', label: 'Module Name', value: '', type: 'input' },
            { key: 'default', label: 'Default', value: '', type: 'input' },
            { key: 'ignore_connected', label: 'Ignore Connected', value: '', type: 'group' },
            { key: 'settings', label: 'Settings', value: '', type: 'custom', settings: { flex: true }, content: CustomSettingsFieldComponent, validators: [] },
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
