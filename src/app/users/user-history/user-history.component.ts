
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';

@Component({
    selector: 'user-history',
    templateUrl: './user-history.template.html',
    styleUrls: ['./user-history.styles.scss']
})
export class UserHistoryComponent extends BaseClass implements OnChanges {
    @Input() public item: PlaceUser;

    public model: any = {};

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item && this.item) {
            this.loadUserLogs();
        }
    }

    public loadUserLogs(offset: number = 0) {

    }
}
