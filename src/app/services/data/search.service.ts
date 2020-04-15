
import { Injectable } from '@angular/core';
import { ComposerService } from '@placeos/composer';

import { BaseAPIService } from './base.service';

import * as dayjs from 'dayjs';

export interface IEngineSearchResult {
    id: string;
    name: string;
    type: string;
    created: number;
    display?: any;
}

@Injectable({
    providedIn: 'root'
})
export class BackofficeSearchService extends BaseAPIService<IEngineSearchResult> {

    constructor(private _composer: ComposerService) {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
        this._name = 'search';
        this._api_route = '/search';
    }

    public deleteItem() { return new Promise((rs, rj) => rj('No show for this service')); }
    public updateItem() { return new Promise<any>((rs, rj) => rj('No show for this service')); }
    public add() { return new Promise<any>((rs, rj) => rj('No show for this service')); }
    public show() { return new Promise<any>((rs, rj) => rj('No show for this service')); }

    protected process(raw_item: any) {
        const item: IEngineSearchResult = {
            id: raw_item.id,
            name: raw_item.name,
            type: raw_item.type,
            created: raw_item.created_at * 1000
        };
        item.display = {
            created: dayjs(item.created).format()
        };
        return item;
    }

}
