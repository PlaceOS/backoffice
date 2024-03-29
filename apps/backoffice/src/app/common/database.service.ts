import { post, apiEndpoint } from '@placeos/ts-client';
import { Injectable } from '@angular/core';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';

@Injectable({
    providedIn: 'root',
})
export class PlaceDatabase extends AsyncHandler {
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
