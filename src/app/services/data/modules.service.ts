
import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';

import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { CustomDropdownFieldComponent } from '../../shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';

import * as dayjs from 'dayjs';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { buildValidateRange, validateIpAddress } from 'src/app/shared/utilities/validation.utilities';
import { EngineModulesService, EngineModule, EngineModuleQueryOptions } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';
import { FilterFn } from 'src/app/shared/utilities/types.utilities';

type ServiceItem = EngineModule;

@Injectable({
    providedIn: 'root'
})
export class BackofficeModulesService extends EngineModulesService {
    /** Name for a single user */
    readonly singular: string = 'device';
    /** Behavior subject with the currently available list of users */
    readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = (_) => true;
    /** Application Service */
    public parent: any;
    readonly can_create: boolean = true;
    readonly can_edit: boolean = true;

    constructor(private _composer: ComposerService) {
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

    public query(query_params?: EngineModuleQueryOptions): Promise<ServiceItem[]> {
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

    public getFormFields(item: EngineModule) {
        const edit = !!item.id;
        const fields: ADynamicFormField<any>[] = ([
            {
                key: 'owner_group', value: '', type: 'group', hide: !!item && edit, children: [
                    { key: 'dependency', label: 'Dependency', value: '', type: 'custom', content: CustomDropdownFieldComponent, metadata: { service: this.parent.Drivers }, required: true },
                    { key: 'edge', label: 'Edge', value: '', type: 'custom', content: CustomDropdownFieldComponent, metadata: { service: this.parent.Nodes }, settings: {readonly: !!item}, required: true },
                    { key: 'control_system', label: 'Control System', value: '', type: 'custom', content: CustomDropdownFieldComponent, metadata: { service: this.parent.Systems }, settings: { readonly: !!item}, required: true },
                ]
            },
            { key: 'ip', hide: !!item && edit, label: 'IP Address', value: '', type: 'input', validators: [validateIpAddress] },
            { key: 'port', hide: !!item && edit, label: 'Port', value: '', type: 'input', validators: [buildValidateRange(1, 65535)] },
            {
                key: 'options_group', value: '', type: 'group', hide: !!item && edit, children: [
                    { key: 'tls', label: 'TLS', value: '', type: 'checkbox' },
                    { key: 'udp', label: 'UDP', value: '', type: 'checkbox' },
                    { key: 'makebreak', label: 'Makebreak', value: '', type: 'checkbox' },
                    { key: 'ignore_connection', label: 'Ignore Connection', value: '', type: 'checkbox' },
                ]
            },
            { key: 'notes', label: 'Notes', value: '', type: 'textarea' },
            { key: 'settings', label: 'Settings', value: '', type: 'custom', settings: {flex: true}, content: CustomSettingsFieldComponent },
            { key: 'custom_name', label: 'Custom Name', value: '', type: 'input' },
        ] as IFormFieldOptions[])
            .map(i => new ADynamicFormField({
                ...i,
                children: i.children ? i.children.map(j => new ADynamicFormField(j)) : null as any
            }));
        /** Initialise fields and change listeners */
        for (const field of fields) {
            if (field.children && field.children.length) {
                field.children.forEach(f => {
                    f.control.setValue(item[f.key]);
                    f.control.valueChanges.subscribe(i => item[f.key] = i);
                });
            } else {
                field.control.setValue(item[field.key]);
                field.control.valueChanges.subscribe(i => item[field.key] = i);
            }
        }
        return fields;
    }

}
