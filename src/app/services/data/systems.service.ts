import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { Validators } from '@angular/forms';
import { EngineSystemsService, EngineSystem, EngineSystemsQueryOptions, HashMap } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';

import { CustomSettingsFieldComponent } from 'src/app/shared/components/custom-fields/settings-field/settings-field.component';
import { CustomDropdownFieldComponent } from 'src/app/shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';
import { FilterFn } from 'src/app/shared/utilities/types.utilities';
import { IOverlayEvent } from '@acaprojects/ngx-overlays';

type ServiceItem = EngineSystem;

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemsService extends EngineSystemsService {
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
    readonly singular: string = 'system';
    /** Behavior subject with the currently available list of users */
    readonly listing = new BehaviorSubject<ServiceItem[]>([]);
    /** Application Service */
    public parent: any;
    readonly can_create: boolean = true;
    readonly can_edit: boolean = true;
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<ServiceItem> = _ => true;

    /**
     * Get the available list of zones
     * @param predicate Function to filter the zone list on
     */
    public list(predicate: FilterFn<ServiceItem> = this._filter_fn): ServiceItem[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: EngineSystemsQueryOptions): Promise<ServiceItem[]> {
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

    public logs(item: EngineSystem) {
        if (!item || !item.id) {
            return;
        }
        this.parent.Overlay.open('view-system-logs', { data: { id: item.id } }, e => e.close());
    }

    /**
     * Open modal for new item
     * @param prefill
     */
    public openNewModal(prefill?: HashMap): Promise<string> {
        return new Promise((resolve, reject) => {
            const item = new EngineSystem(this, { settings: {}, ...(prefill || {}) });
            const form = this.getFormFields(item);
            this.parent.Overlay.open(
                'edit-item',
                {
                    config: 'modal',
                    data: { item, form, name: this.singular }
                },
                (e: IOverlayEvent<ServiceItem>) => {
                    e.type === 'finish' ? resolve(e.data.id) : reject();
                },
                _ => reject()
            );
        });
    }

    /**
     * Open modal for editing an item
     * @param item Item to edit
     */
    public openEditModal(item: EngineSystem): Promise<string> {
        return new Promise((resolve, reject) => {
            const form = this.getFormFields(item);
            this.parent.Overlay.open(
                'edit-item',
                {
                    config: 'modal',
                    data: { item, form, name: this.singular }
                },
                (e: IOverlayEvent<ServiceItem>) => {
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
    public askDelete(item: EngineSystem): Promise<string> {
        return new Promise((resolve, reject) => {
            let complete = false;
            this.parent.Overlay.open('confirm', {
                config: 'modal',
                data: {
                    title: 'Delete System?',
                    body: `Are you sure you want to delete this system?<br>All modules will be <b>immediately deleted</b> if they are not in another systems.`,
                    icon: { class: 'material-icons', value: 'delete' }
                }
            }, (e: IOverlayEvent<void>) => {
                if (e.type === 'finish') {
                    complete = true;
                    item.delete().then(() => resolve(), () => reject('Request failed'));
                }
            }, () => {
                if (!complete){
                    reject('User cancelled');
                }
            });
        });
    }

    public getFormFields(item: EngineSystem) {
        const fields: ADynamicFormField<any>[] = ([
            {
                key: 'zone_id',
                label: 'Zone',
                value: '',
                type: 'custom',
                content: CustomDropdownFieldComponent,
                metadata: { service: this.parent.Zones }
            },
            {
                key: 'edge_id',
                label: 'Edge',
                value: '',
                type: 'custom',
                content: CustomDropdownFieldComponent,
                metadata: { service: this.parent.Nodes }
            },
            { key: 'name', label: 'Name', required: true, value: '', type: 'input', settings: { flex: true }, flex: true },
            { key: 'email', label: 'Email', value: '', type: 'input', settings: { flex: true }, validators: [Validators.email] },
            {
                key: 'support_url',
                label: 'Support URL',
                value: '',
                type: 'input',
                validators: [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g)]
            },
            {
                key: 'installed_ui_devices',
                label: '# of Touch Panels',
                value: '',
                type: 'input',
                attributes: { type: 'number' },
                validators: [Validators.pattern(/[0-9]*/g)]
            },
            {
                key: 'capacity',
                label: 'Capacity',
                value: '',
                type: 'input',
                attributes: { type: 'number' },
                validators: [Validators.pattern(/[0-9]*/g)]
            },
            { key: 'bookable', label: 'Bookable Space', value: '', type: 'checkbox' },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
            {
                key: 'settings',
                label: 'Settings',
                value: '',
                type: 'custom',
                settings: { flex: true },
                content: CustomSettingsFieldComponent
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
