
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';
import { IEngineDriver } from './drivers.service';
import { IEngineSystem } from './systems.service';

import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { CustomDropdownFieldComponent } from '../../shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';

import * as dayjs from 'dayjs';
import { IFormFieldOptions } from '@acaprojects/ngx-dynamic-forms';
import { buildValidateRange, validateIpAddress } from 'src/app/shared/utilities/validation.utilities';

export interface IEngineModule {
    id: string;
    dependency_id: string;
    system_id: string;
    edge_id: string;
    name: string;
    custom_name?: string;
    notes?: string;
    ip?: string;
    port?: string | number;
    tls?: boolean;
    udp?: boolean;
    uri?: string;
    makebreak?: boolean;
    edge: any;
    dependency: IEngineDriver;
    system: IEngineSystem;
    role?: number;
    running: boolean;
    connected?: boolean;
    ignore_connected?: boolean;
    settings?: any;
    display?: any;
    created: number;
    updated: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeModulesService extends BaseAPIService<IEngineModule> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'devices';
        this._singular = 'device';
        this._api_route = '/modules';
    }

    /**
     * Perform start task on the given module
     * @param id Module ID
     */
    public start(id: string) {
        return this.task(id, 'start');
    }

    /**
     * Perform stop task on the given module
     * @param id Module ID
     */
    public stop(id: string) {
        return this.task(id, 'stop');
    }

    protected process(raw_item: any) {
        const item: IEngineModule = {
            id: raw_item.id,
            dependency_id: raw_item.dependency_id,
            system_id: raw_item.control_system_id,
            edge_id: raw_item.edge_id,
            name: raw_item.name,
            custom_name: raw_item.custom_name,
            notes: raw_item.notes,
            ip: raw_item.ip,
            port: raw_item.port,
            tls: raw_item.tls,
            udp: raw_item.udp,
            uri: raw_item.uri,
            makebreak: raw_item.makebreak,
            edge: raw_item.edge,
            dependency: raw_item.dependency,
            system: raw_item.control_system,
            role: raw_item.role,
            running: raw_item.running,
            connected: raw_item.connected,
            ignore_connected: raw_item.ignore_connected,
            settings: raw_item.settings,
            created: raw_item.created_at * 1000,
            updated: raw_item.updated_at * 1000
        };
        if (!item.custom_name) {
            item.custom_name = `${item.dependency ? item.dependency.name : 'Blank'} - ${item.system ? item.system.name : 'Blank'}`;
        }
        item.display = {
            created: dayjs(item.created).format()
        };
        return item;
    }

    public getFormFields(item: IEngineModule, edit: boolean = false) {
        console.log('Item:', item);
        const fields: IFormFieldOptions<any>[] = [
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
        ];
        return fields;
    }

}
