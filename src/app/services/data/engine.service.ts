import { post, apiEndpoint } from '@placeos/ts-client';
import { Injectable } from '@angular/core';

import { BaseClass } from 'src/app/shared/globals/base.class';

@Injectable({
    providedIn: 'root'
})
export class PlaceService extends BaseClass {

    public reindex(backfill: boolean = true) {
        const url = `${apiEndpoint()}/reindex${
            backfill ? '?backfill=true' : ''
        }`;
        return post(url, null).toPromise();
    }

    public backfill() {
        const url = `${apiEndpoint()}/backfill`;
        return post(url, null).toPromise();
    }
}
