import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { Validators } from '@angular/forms';
import { EngineDomainsService, EngineDomain, HashMap } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';

import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { FilterFn } from 'src/app/shared/utilities/types.utilities';
import { EngineResourceQueryOptions } from '@acaprojects/ts-composer/dist/types/http/services/resources/resources.interface';
import { IOverlayEvent } from '@acaprojects/ngx-overlays';

type ServiceItem = EngineDomain;

@Injectable({
    providedIn: 'root'
})
export class BackofficeDomainsService extends EngineDomainsService {

    constructor(private _composer: ComposerService) {
        super(undefined);
        const sub = this._composer.initialised.subscribe(state => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
    }
    /** Name for a single user */
    readonly singular: string = 'driver';
    /** Behavior subject with the currently available list of drivers */
    readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Application Service */
    public parent: any;
    readonly can_create: boolean = true;
    readonly can_edit: boolean = true;
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = _ => true;

    /**
     * Get the available list of drivers
     * @param predicate Function to filter the driver list on
     */
    public list(predicate: FilterFn<ServiceItem> = this._filter_fn): ServiceItem[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: EngineResourceQueryOptions): Promise<ServiceItem[]> {
        return new Promise((resolve, reject) => {
            super.query(query_params).then(
                list => {
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
                },
                e => reject(e)
            );
        });
    }

    /**
     * Open modal for new item
     * @param prefill
     */
    public openNewModal(prefill?: HashMap): Promise<string> {
        return new Promise((resolve, reject) => {
            const item = new EngineDomain(this, { settings: {}, ...(prefill || {}) });
            const form = this.getFormFields(item);
            this.parent.Overlay.open(
                'edit-item',
                {
                    config: 'modal',
                    data: { item, form, name: this.singular }
                },
                (e: IOverlayEvent<EngineDomain>) => (e.type === 'finish' ? resolve(e.data.id) : reject()),
                _ => reject()
            );
        });
    }

    /**
     * Open modal for editing an item
     * @param item Item to edit
     */
    public openEditModal(item: EngineDomain): Promise<string> {
        return new Promise((resolve, reject) => {
            const form = this.getFormFields(item);
            this.parent.Overlay.open(
                'edit-item',
                {
                    config: 'modal',
                    data: { item, form, name: this.singular }
                },
                (e: IOverlayEvent<EngineDomain>) => {
                    e.type === 'finish' ? resolve(e.data.id) : reject();
                },
                _ => reject()
            );
        });
    }

    /**
     * Open confirmation modal for deleting an item
     * @param item Item to delete
     */
    public askDelete(item: EngineDomain): Promise<string> {
        return new Promise((resolve, reject) => {
            let complete = false;
            this.parent.Overlay.open(
                'confirm',
                {
                    config: 'modal',
                    data: {
                        title: 'Delete Domain?',
                        body: `Are you sure you want to delete this domain?`,
                        icon: { class: 'backoffice-trash' }
                    }
                },
                (e: IOverlayEvent<void>) => {
                    if (e.type === 'finish') {
                        complete = true;
                        item.delete().then(() => resolve(), () => reject('Request failed'));
                    }
                },
                () => (complete ? '' : reject('User cancelled'))
            );
        });
    }

    public getFormFields(item: ServiceItem) {
        const edit = !!item.id;
        const fields: ADynamicFormField<any>[] = ([
            { key: 'name', label: 'Name', type: 'input', value: '' },
            { key: 'domain', label: 'Domain', type: 'input', required: true, validators: [Validators.pattern('')], value: '' },
            { key: 'login_url', label: 'Login URL', type: 'input', validators: [Validators.pattern('')], value: '' },
            { key: 'logout_url', label: 'Logout URL', type: 'input', validators: [Validators.pattern('')], value: '' },
            {
                key: 'internals',
                label: 'Internals',
                type: 'custom',
                settings: { flex: true },
                content: CustomSettingsFieldComponent,
                value: ''
            },
            {
                key: 'config',
                label: 'Config',
                type: 'custom',
                settings: { flex: true },
                content: CustomSettingsFieldComponent,
                value: ''
            },
            { key: 'description', label: 'Description', type: 'textarea', value: '' }
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
                    f.control.setValue(item[f.key]);
                    f.control.valueChanges.subscribe(i => (item[f.key] = i));
                });
            } else {
                field.control.setValue(item[field.key]);
                field.control.valueChanges.subscribe(i => (item[field.key] = i));
            }
        }
        return fields;
    }
}
