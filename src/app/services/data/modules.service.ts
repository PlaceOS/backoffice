
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseService } from './base.service';
import { IEngineDriver } from './drivers.service';
import { IEngineSystem } from './systems.service';

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
    created: number;
    updated: number;
}

@Injectable({
    providedIn: 'root'
})
export class ModulesService extends BaseService {

    constructor(protected http: CommsService) {
        super();
        this.model.name = 'devices';
        this.model.route = '/modules';
        this.subjects.list = new BehaviorSubject<IEngineModule[]>([]);
        this.observers.list = this.subjects.list.asObservable();
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
        return item;
    }

}
