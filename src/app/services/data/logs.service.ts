
import { Injectable } from '@angular/core';
import { ComposerService } from '@acaengine/composer';
import { EngineSystem, EngineUser } from '@acaengine/ts-client';

import { BaseAPIService } from './base.service';

import * as dayjs from 'dayjs';

export interface IEngineLogEntry {
    id: string;
    name: string;
    notes?: string;
    suspected?: boolean;
    persisted?: boolean;
    installed_device?: boolean;
    ip?: string;
    user_id?: string;
    user?: EngineUser;
    system_id?: string;
    systems?: EngineSystem[];
    display?: any;
    created: number;
    last_checked: number;
    ended: number;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeLogsService extends BaseAPIService<IEngineLogEntry> {

    constructor(private _composer: ComposerService) {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
        this._name = 'log';
        this._api_route = '/logs';
    }

    public process(raw_item: any) {
        const item: IEngineLogEntry = {
            id: raw_item.id,
            name: raw_item.name,
            notes: raw_item.notes,
            suspected: raw_item.suspected,
            persisted: raw_item.persisted,
            installed_device: raw_item.installed_device,
            ip: raw_item.ip,
            user_id: raw_item.user_id,
            system_id: raw_item.system_id,
            systems: raw_item.systems,
            user: raw_item.user,
            display: {
                started: dayjs(raw_item.created_at * 1000).format(),
                ended: dayjs(raw_item.ended_at * 1000).format('MMM d, YYYY - hh:mm A')
            },
            created: raw_item.created_at * 1000,
            last_checked: raw_item.last_checked * 1000,
            ended: raw_item.ended_at * 1000
        };
        return item;
    }

}
