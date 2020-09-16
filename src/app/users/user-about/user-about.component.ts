
import { Component, Input, OnInit } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'user-about',
    templateUrl: './user-about.template.html',
    styleUrls: ['./user-about.styles.scss']
})
export class UserAboutComponent extends BaseClass {

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {
        super();
    }
}
