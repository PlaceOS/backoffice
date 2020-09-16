import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { querySystems, PlaceTrigger } from '@placeos/ts-client';

import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'app-triggers',
    templateUrl: './triggers.template.html',
    styleUrls: ['./triggers.styles.scss'],
})
export class TriggersComponent extends BaseClass {
    /** Number of system triggers */
    public system_count: number;

    public readonly name = 'triggers';

    public readonly show_options = this._service.show_options;

    constructor(protected _service: ActiveItemService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }));
    }

    protected async loadValues(item: PlaceTrigger) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, trigger_id: item.id };
        // Get trigger count
        this.system_count = (await querySystems(query).toPromise()).total;
    }
}
