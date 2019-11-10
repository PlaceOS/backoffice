
import { Injectable } from '@angular/core';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { EngineTriggersService, EngineTrigger } from '@acaprojects/ts-composer';
import { ComposerService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { FilterFn } from 'src/app/shared/utilities/types.utilities';
import { EngineResourceQueryOptions } from '@acaprojects/ts-composer/dist/types/http/services/resources/resources.interface';

type ServiceItem = EngineTrigger;

@Injectable({
    providedIn: 'root'
})
export class BackofficeTriggersService extends EngineTriggersService {
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

    public query(query_params?: EngineResourceQueryOptions): Promise<ServiceItem[]> {
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

    public getFormFields(item: ServiceItem) {
        const edit = !!item.id;
        const fields: ADynamicFormField<any>[] = ([
            { key: 'name', label: 'Name', value: '', type: 'input', required: true },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
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
