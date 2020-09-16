import { Component } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';

@Component({
    selector: 'app-users',
    templateUrl: './users.template.html',
    styleUrls: ['./users.styles.scss'],
})
export class UsersComponent extends BaseClass {
    public readonly name = 'users';

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    constructor(protected _service: ActiveItemService) {
        super();
    }
}
