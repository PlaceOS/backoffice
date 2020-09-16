import { Component } from '@angular/core';
import { PlaceDriver, queryModules } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.template.html',
    styleUrls: ['./drivers.styles.scss'],
})
export class DriversComponent extends BaseClass {
    /** Number of devices for the active system */
    public device_count: number;

    public readonly name = 'drivers';

    constructor(protected _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }))
    }

    protected async loadValues(item: PlaceDriver) {
        const query: any = { offset: 0, limit: 1, driver_id: item.id };
        this.device_count = (await queryModules(query).toPromise()).total;
    }
}
