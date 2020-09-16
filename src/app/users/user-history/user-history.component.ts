
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'user-history',
    templateUrl: './user-history.template.html',
    styleUrls: ['./user-history.styles.scss']
})
export class UserHistoryComponent extends BaseClass {

    public model: any = {};

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {
        super();
    }
    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadUserLogs();
        }))
    }

    public loadUserLogs(offset: number = 0) {

    }
}
