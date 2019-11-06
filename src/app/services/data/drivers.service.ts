import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { EngineDriver, EngineDriversService, EngineDriverQueryOptions } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';

import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { CustomDropdownFieldComponent } from '../../shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';
import { FilterFn } from 'src/app/shared/utilities/types.utilities';

type ServiceItem = EngineDriver;

@Injectable({
    providedIn: 'root'
})
export class BackofficeDriversService extends EngineDriversService {
    /** Name for a single user */
    readonly singular: string = 'driver';
    /** Behavior subject with the currently available list of drivers */
    readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Application Service */
    public parent: any;
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = _ => true;

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
     * Get the available list of drivers
     * @param predicate Function to filter the driver list on
     */
    public list(predicate: FilterFn<ServiceItem> = this._filter_fn): ServiceItem[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: EngineDriverQueryOptions): Promise<ServiceItem[]> {
        return new Promise((resolve, reject) => {
            super.query(query_params).then(
                list => {
                    const old_list = this.list();
                    const new_list = [...list];
                    for (const item of old_list) {
                        const found = new_list.find(i => item.id === i.id);
                        if (!found) {
                            new_list.push(item);
                        }
                    }
                    this.listing.next(new_list);
                    resolve(list);
                },
                e => reject(e)
            );
        });
    }

    public getFormFields(item: ServiceItem) {
        const edit = !!item.id;
        const fields: ADynamicFormField<any>[] = ([
            {
                key: 'zone_id',
                label: 'Zone',
                hide: !!item,
                value: '',
                type: 'custom',
                content: CustomDropdownFieldComponent,
                metadata: { service: this.parent.Zones }
            },
            { key: 'name', label: 'Name', value: '', type: 'input' },
            {
                key: 'role',
                label: 'Role',
                hide: !!item,
                value: '',
                type: 'dropdown',
                metadata: { options: ['Logic', 'Device', 'Service', 'SSH'] }
            },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
            { key: 'module_name', label: 'Module Name', value: '', type: 'input' },
            { key: 'default', label: 'Default', value: '', type: 'input' },
            { key: 'ignore_connected', label: 'Ignore Connected', value: '', type: 'group' },
            {
                key: 'settings',
                label: 'Settings',
                value: '',
                type: 'custom',
                settings: { flex: true },
                content: CustomSettingsFieldComponent,
                validators: []
            }
        ] as IFormFieldOptions[]).map(
            i =>
                new ADynamicFormField({
                    ...i,
                    children: i.children ? i.children.map(j => new ADynamicFormField(j)) : (null as any)
                })
        );
        /** Initialise fields and change listeners */
        for (const field of fields) {
            if (field.children && field.children.length) {
                field.children.forEach(f => {
                    field.control.setValue(item[f.key]);
                    field.control.valueChanges.subscribe(i => (item[f.key] = i));
                });
            } else {
                field.control.setValue(item[field.key]);
                field.control.valueChanges.subscribe(i => (item[field.key] = i));
            }
        }
        return fields;
    }
}
