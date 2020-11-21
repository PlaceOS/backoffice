import { Injectable } from '@angular/core';
import { listSystemTriggers, PlaceSystem, showMetadata } from '@placeos/ts-client';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';

@Injectable({
    providedIn: 'root',
})
export class SystemStateService {
    /** Observable of the counts of the active item */
    public counts = this._state.item.pipe(
        filter((item) => !!item),
        switchMap(async (item: PlaceSystem) => {
            const details = await Promise.all([
                listSystemTriggers(item.id)
                    .pipe(map((d) => d.total))
                    .toPromise(),
                showMetadata(item.id).toPromise(),
            ]);
            const [triggers, metadata] = details;
            return {
                devices: item.modules.length,
                zones: item.zones.length,
                triggers,
                metadata: metadata.length,
            };
        }),
        shareReplay()
    );
    /** Observable of the active item */
    public readonly item = this._state.item;
    /** Observable of the active item */
    public get active_item() {
        return this._state.active_item;
    };

    constructor(private _state: ActiveItemService) {}
}
