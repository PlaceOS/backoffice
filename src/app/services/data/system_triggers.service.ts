
import { Injectable } from '@angular/core';
import { CommsService } from '@acaprojects/ngx-composer';

import { BaseAPIService } from './base.service';

import * as dayjs from 'dayjs';

export interface IEngineSystemTrigger {
    id: string;
    system_id: string;
    trigger_id: string;
    zone_id: string;
    name: string;
    description?: string;
    conditions: string[][];
    actions: string[];
    important?: boolean;
    enabled?: boolean;
    triggered?: boolean;
    trigger_count?: number;
    override?: any;
    webhook_secret?: string;
    binding?: string;
    system: { id: string, name: string };
    display?: any;
    created: number;
    updated: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemTriggersService extends BaseAPIService<IEngineSystemTrigger> {

    constructor(protected http: CommsService) {
        super(http);
        this._name = 'system_trigger';
        this._api_route = '/system_triggers';
    }

    protected process(raw_item: any) {
        const item: IEngineSystemTrigger = {
            id: raw_item.id,
            system_id: raw_item.control_system_id,
            trigger_id: raw_item.trigger_id,
            zone_id: raw_item.zone_id,
            name: raw_item.name,
            description: raw_item.description,
            conditions: raw_item.conditions,
            actions: raw_item.actions,
            important: raw_item.important,
            enabled: raw_item.enabled,
            triggered: raw_item.triggered,
            override: raw_item.override,
            webhook_secret: raw_item.webhook_secret,
            trigger_count: raw_item.trigger_count,
            binding: raw_item.binding,
            system: raw_item.control_system,
            created: raw_item.created_at * 1000,
            updated: raw_item.updated_at * 1000
        };
        item.display = {
            created: dayjs(item.created).format()
        };
        return item;
    }

}
