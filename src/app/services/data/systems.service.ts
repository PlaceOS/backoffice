
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';
import { Validators } from '@angular/forms';

import { BaseAPIService } from './base.service';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';
import { CustomSettingsFieldComponent } from 'src/app/shared/components/custom-fields/settings-field/settings-field.component';
import { CustomDropdownFieldComponent } from 'src/app/shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';

import * as dayjs from 'dayjs';

export interface IEngineSystem {
    id?: string;
    edge_id?: string;
    name?: string;
    email?: string;
    description?: string;
    capacity?: number;
    feature?: string;
    modules?: string[];
    zones?: string[];
    settings?: any;
    bookable?: boolean;
    support_url?: string;
    installed_ui_devices?: number;
    display?: any;
    created?: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemsService extends BaseAPIService<IEngineSystem> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'system';
        this._singular = 'system';
        this._api_route = '/systems';
    }

    /**
     * Get function listing for system with the given query params
     * @param id ID of the system
     * @param fields Key, value pairs for query parameters
     * @param tries Retry value. DON'T USE
     */
    public funcs(id: string, fields?: any, tries: number = 0) {
        if (tries > 4) { return new Promise((rs, rj) => rj('Too many tries')); }
        const query = toQueryString(fields);
        const key = `funcs|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}/${id}/funcs${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        resolve(resp);
                        setTimeout(() => this._promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this._promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this._promises[key];
    }

    /**
     * Execute method of the given module of the system
     * @param id System ID
     * @param details Module and method details
     */
    public execute(id: string, details: any) {
        const key = `exec|${id}|${details}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}/${id}/exec`;
                if (!details || !details.method || !details.module) {
                    return reject(!details ? 'Invalid details passed to execute method' : (!details.method ? 'No method passed to execute' :  'No module passed to execute'));
                }
                const body = {
                    id,
                    index: details.index || 1,
                    method: details.method,
                    module: details.module,
                    args: details.args || []
                };
                this.http.post(url, body).subscribe(
                    (resp: any) => {
                        resolve(resp instanceof Array ? resp[0] : resp);
                        setTimeout(() => this._promises[key] = null, 200);
                    }, (err) => {
                        this._promises[key] = null;
                        reject(err instanceof Array ? err[0] : err);
                    });
            });
        }
        return this._promises[key];
    }

    /**
     * Get state of the given system module
     * @param id System ID
     * @param module Module name
     * @param index Module index
     */
    public state(id: string, module: string, index: number) {
        const query = toQueryString({ module, index });
        const key = `state|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}/${id}/state${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        resolve(resp);
                        setTimeout(() => this._promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this._promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this._promises[key];
    }

    /**
     * Remove module from given system
     * @param id System ID
     * @param module_id Module ID
     */
    public removeModule(id: string, module_id: string) {
        return this.task(id, 'remove', { module_id });
    }

    /**
     * Start all module from given system
     * @param id System ID
     * @param module_id Module ID
     */
    public start(id: string) {
        return this.task(id, 'start');
    }

    /**
     * Stop all module from given system
     * @param id System ID
     * @param module_id Module ID
     */
    public stop(id: string) {
        return this.task(id, 'stop');
    }

    protected processItem(raw_item: any) {
        const item: IEngineSystem = {
            id: raw_item.id,
            edge_id: raw_item.edge_id,
            name: raw_item.name,
            email: raw_item.email,
            description: raw_item.description,
            capacity: raw_item.capacity,
            feature: raw_item.feature,
            modules: raw_item.modules,
            zones: raw_item.zones,
            bookable: raw_item.bookable,
            support_url: raw_item.support_url,
            installed_ui_devices: raw_item.installed_ui_devices,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000
        };
        item.display = {
            created: dayjs(item.created).format()
        };
        return item;
    }

    public addTrigger(item: IEngineSystem) {
        return new Promise((rs, rj) => {
            this.parent.Overlay.open('select-item', { data: {
                service: this.parent.Triggers,
                name: 'trigger'
            } }, (event) => {
                if (event.type === 'Submit' && event.data.item) {
                    event.data.loading = true;
                    this.task(item.id, 'triggers', {
                        control_system_id: item.id,
                        enabled: true,
                        important: false,
                        trigger_id: event.data.item
                    }).then(() => {
                        event.close();
                        event.data.loading = false;
                        this.parent.notifySuccess(`Successfully added trigger to system`);
                        rs();
                    }, () => {
                        event.data.loading = false;
                        this.parent.notifyError(`Error adding trigger to system`);
                        rj();
                    });
                } else {
                    event.close();
                    rj();
                }
            });
        });
    }

    public logs(item: IEngineSystem) {
        if (!item || !item.id) { return; }
        this.parent.Overlay.open('view-system-logs', { data: { id: item.id } }, (e) => e.close());
    }

    public getFormFields(item: IEngineSystem) {
        const fields: IFormFieldOptions<any>[] = [
            {
                key: 'id_group', value: '', type: 'group', children: [
                    { key: 'name', label: 'Name', required: true, value: '', type: 'input' },
                    { key: 'email', label: 'Email', value: '', type: 'input' }
                ]
            },
            { key: 'support_url', label: 'Support URL', value: '', type: 'input', validators: [Validators.pattern('')] },
            {
                key: 'system_details', value: '', type: 'group', children: [
                    { key: 'installed_ui_devices', label: 'Number of Touch Panels', value: '', type: 'input', attributes: { type: 'number' }, validators: [Validators.pattern(/[0-9]*/g)] },
                    { key: 'capacity', label: 'Capacity', value: '', type: 'input', attributes: { type: 'number' }, validators: [Validators.pattern(/[0-9]*/g)] },
                    { key: 'bookable', label: 'Bookable Space', value: '', type: 'checkbox'},
                ]
            },
            { key: 'description', label: 'Description', value: '', type: 'textarea' },
            { key: 'settings', label: 'Settings', value: '', type: 'custom', settings: {flex: true}, content: CustomSettingsFieldComponent },
            {
                key: 'owner_group', value: '', type: 'group', hide: !!item, children: [
                    { key: 'zone_id', label: 'Zone', value: '', type: 'custom', content: CustomDropdownFieldComponent, metadata: { service: this.parent.Zones } },
                    { key: 'edge_id', label: 'Edge', value: '', type: 'custom', content: CustomDropdownFieldComponent, metadata: { service: this.parent.Nodes } }
                ]
            },
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
