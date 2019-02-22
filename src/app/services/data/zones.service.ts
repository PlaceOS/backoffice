
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { IDynamicFieldOptions } from '@acaprojects/ngx-widgets';

import { BaseService } from './base.service';
import { ZoneModalComponent } from '../../overlays/zone-modal/zone-modal.component';
import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { FormValidators } from '../../shared/form-validators.class';

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
export class ZonesService extends BaseService<IEngineZone> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'zone';
        this.model.singular = 'zone';
        this.model.route = '/zones';
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: ZoneModalComponent });
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
        const fields: IDynamicFieldOptions<any>[] = [
            { key: 'name', label: 'Name', required: true, control_type: 'text' },
            { key: 'tags', label: 'Tags', control_type: 'text' },
            { key: 'support_url', label: 'Support URL', hide: !!item, control_type: 'text', validators: [FormValidators.url] },
            { key: 'description', label: 'Description', control_type: 'textarea' },
            { key: 'settings', label: 'Settings', control_type: 'custom', flex: true, cmp: CustomSettingsFieldComponent }
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
