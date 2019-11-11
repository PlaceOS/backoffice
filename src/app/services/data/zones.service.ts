
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { IFormFieldOptions, ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { EngineZonesService, EngineZone, EngineZoneQueryOptions, HashMap } from '@acaprojects/ts-composer';
import { BehaviorSubject } from 'rxjs';

import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { FilterFn } from 'src/app/shared/utilities/types.utilities';
import { ComposerService } from '@acaprojects/ngx-composer';
import { IOverlayEvent } from '@acaprojects/ngx-overlays';

@Injectable({
    providedIn: 'root'
})
export class BackofficeZonesService extends EngineZonesService {
    /** Name for a single zone */
    readonly singular: string = 'zone';
    /** Behavior subject with the currently available list of zones */
    readonly listing = new BehaviorSubject<EngineZone[]>([]);
    /** Default method for filtering the available list */
    private _filter_fn: FilterFn<EngineZone> = (_) => true;
    /** Application Service */
    public parent: any;
    readonly can_create: boolean = true;
    readonly can_edit: boolean = true;

    constructor(protected _composer: ComposerService) {
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
    public list(predicate: FilterFn<EngineZone> = this._filter_fn): EngineZone[] {
        return (this.listing.getValue() || []).filter(predicate);
    }

    public query(query_params?: EngineZoneQueryOptions): Promise<EngineZone[]> {
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

    /**
     * Open modal for new item
     * @param prefill
     */
    public openNewModal(prefill?: HashMap): Promise<string> {
        return new Promise((resolve, reject) => {
            const item = new EngineZone(this, { settings: {}, ...(prefill || {}) });
            const form = this.getFormFields(item);
            this.parent.Overlay.open(
                'edit-item',
                {
                    config: 'modal',
                    data: { item, form, name: this.singular }
                },
                (e: IOverlayEvent<EngineZone>) => e.type === 'finish' ? resolve(e.data.id) : reject(),
                _ => reject()
            );
        });
    }

    /**
     * Open modal for editing an item
     * @param item Item to edit
     */
    public openEditModal(item: EngineZone): Promise<string> {
        return new Promise((resolve, reject) => {
            const form = this.getFormFields(item);
            this.parent.Overlay.open(
                'edit-item',
                {
                    config: 'modal',
                    data: { item, form, name: this.singular }
                },
                (e: IOverlayEvent<EngineZone>) => {
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
    public askDelete(item: EngineZone): Promise<string> {
        return new Promise((resolve, reject) => {
            let complete = false;
            this.parent.Overlay.open('confirm', {
                config: 'modal',
                data: {
                    title: 'Delete Zone?',
                    body: `Are you sure you want to delete this zone?<br>All systems will be <b>immediately deleted</b> if they are not in another zone.`,
                    icon: { class: 'material-icons', value: 'delete' }
                }
            }, (e: IOverlayEvent<void>) => {
                if (e.type === 'finish') {
                    complete = true;
                    item.delete().then(() => resolve(), () => reject('Request failed'));
                }
            }, () => complete ? '' : reject('User cancelled'));
        });
    }

    public getFormFields(item: EngineZone) {
        const fields: ADynamicFormField<any>[] = ([
            { key: 'name', label: 'Name', required: true, value: '', type: 'input' },
            { key: 'tags', label: 'Tags', value: '', type: 'input' },
            { key: 'support_url', label: 'Support URL', hide: !!item, value: '', type: 'input', validators: [Validators.pattern('')] },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
            { key: 'settings', label: 'Settings', value: '', type: 'custom', settings: { flex: true }, content: CustomSettingsFieldComponent }
        ] as IFormFieldOptions[])
            .map(i => new ADynamicFormField(i));
        /** Initialise fields and change listeners */
        for (const field of fields) {
            field.control.setValue(item[field.key]);
            field.control.valueChanges.subscribe(i => item[field.key] = i);
        }
        return fields;
    }

}
