
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { IDynamicFieldOptions } from '@acaprojects/ngx-widgets/components/form-controls/dynamic-form/dynamic-field.class';

import { BaseService } from './base.service';
import { IEngineDriver } from './drivers.service';
import { IEngineSystem } from './systems.service';

import { CustomSettingsFieldComponent } from '../../shared/components/custom-fields/settings-field/settings-field.component';
import { CustomItemDropdownFieldComponent } from '../../shared/components/custom-fields/item-dropdown-field/item-dropdown-field.component';
import { FormValidators } from '../../shared/form-validators.class';
import { DeviceModalComponent } from '../../overlays/device-modal/device-modal.component';

import * as moment from 'moment';

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
export class ModulesService extends BaseService<IEngineModule> {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'devices';
        this.model.singular = 'device';
        this.model.route = '/modules';
    }

    public load() {
        this.parent.Overlay.setupModal(`${this.model.name}-view`, { cmp: DeviceModalComponent });
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

    protected processItem(raw_item: any) {
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
            created: moment(item.created).fromNow()
        };
        return item;
    }

    public getFormFields(item: IEngineModule, edit: boolean = false) {
        console.log('Item:', item);
        const fields: IDynamicFieldOptions<any>[] = [
            {
                control_type: 'group', hide: !!item && edit, children: [
                    { key: 'dependency', label: 'Dependency', control_type: 'custom', cmp: CustomItemDropdownFieldComponent, metadata: { service: this.parent.Drivers }, required: true },
                    { key: 'edge', label: 'Edge', control_type: 'custom', cmp: CustomItemDropdownFieldComponent, metadata: { service: this.parent.Nodes }, readonly: !!item, required: true },
                    { key: 'control_system', label: 'Control System', control_type: 'custom', cmp: CustomItemDropdownFieldComponent, metadata: { service: this.parent.Systems }, readonly: !!item, required: true },
                ]
            },
            { key: 'ip', hide: !!item && edit, label: 'IP Address', control_type: 'text', validators: [FormValidators.ip] },
            { key: 'port', hide: !!item && edit, label: 'Port', control_type: 'text', validators: [FormValidators.numberRange(1, 65535)] },
            {
                control_type: 'group', hide: !!item && edit, children: [
                    { key: 'tls', label: 'TLS', control_type: 'toggle' },
                    { key: 'udp', label: 'UDP', control_type: 'toggle' },
                    { key: 'makebreak', label: 'Makebreak', control_type: 'toggle' },
                    { key: 'ignore_connection', label: 'Ignore Connection', control_type: 'toggle' },
                ]
            },
            { key: 'notes', label: 'Notes', control_type: 'textarea' },
            { key: 'settings', label: 'Settings', control_type: 'custom', flex: true, cmp: CustomSettingsFieldComponent },
            { key: 'custom_name', label: 'Custom Name', control_type: 'text' },
        ];

        if (item) {
            console.log('Process fields');
            this.updateFields(fields, item);
        }
        return fields;
    }

}
