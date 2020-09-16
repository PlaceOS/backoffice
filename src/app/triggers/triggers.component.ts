import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { querySystems } from '@placeos/ts-client';

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

    public get item() {
        return this._service.active_item as any;
    }

    constructor(protected _service: ActiveItemService, private _dialog: MatDialog) {
        super();
    }

    protected async loadValues() {
        const query: any = { offset: 0, limit: 1, trigger_id: this.item.id };
        // Get trigger count
        this.system_count = (await querySystems(query).toPromise()).total;
    }
}
