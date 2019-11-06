
import { Injectable } from '@angular/core';
import { ComposerService } from '@acaprojects/ngx-composer';
import { EngineSystemTriggersService, EngineTrigger } from '@acaprojects/ts-composer';

type ServiceItem = EngineTrigger;

@Injectable({
    providedIn: 'root'
})
export class BackofficeSystemTriggersService extends EngineSystemTriggersService {
    /** Name for a single user */
    readonly singular: string = 'trigger';
    /** Application Service */
    public parent: any;

    constructor(private _composer: ComposerService) {
        super(undefined);
        const sub = this._composer.initialised.subscribe((state) => {
            if (state) {
                this.http = this._composer.http;
                sub.unsubscribe();
            }
        });
    }

}
