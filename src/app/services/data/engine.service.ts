import { ComposerService } from '@placeos/composer';
import { Injectable } from '@angular/core';

import { BaseClass } from 'src/app/shared/globals/base.class';

@Injectable({
    providedIn: 'root'
})
export class EngineService extends BaseClass {
    constructor(private _composer: ComposerService) {
        super();
    }

    public async reindex(backfill: boolean = true) {
        const url = `${this._composer.auth.api_endpoint}/reindex${
            backfill ? '?backfill=true' : ''
        }`;
        return this._composer.http.post(url, null).toPromise();
    }

    public async backfill() {
        const url = `${this._composer.auth.api_endpoint}/backfill`;
        return this._composer.http.post(url, null).toPromise();
    }
}
