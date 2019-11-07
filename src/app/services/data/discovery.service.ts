
import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';
import { EngineDriver } from '@acaprojects/ts-composer';

import { BaseAPIService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class BackofficeDiscoveryService extends BaseAPIService<EngineDriver> {

    constructor(private _composer: ComposerService) {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
        this._name = 'driver';
        this._api_route = '/discovery';
    }

    /**
     * Perform reload task on the given driver
     * @param id Module ID
     */
    public scan() {
        return this.show('scan');
    }

    protected process(raw_item: any) {
        return new EngineDriver(this.parent.Drivers, raw_item);
    }

}
