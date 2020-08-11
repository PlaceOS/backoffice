
import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'user-history',
    templateUrl: './user-history.template.html',
    styleUrls: ['./user-history.styles.scss']
})
export class UserHistoryComponent extends BaseDirective implements OnChanges, OnInit {
    @Input() public item: PlaceUser;

    public model: any = {};

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.ngOnChanges({ item: new SimpleChange(null, this.item, false) });
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item && this.item) {
            this.loadUserLogs();
        }
    }

    public loadUserLogs(offset: number = 0) {

    }
}
