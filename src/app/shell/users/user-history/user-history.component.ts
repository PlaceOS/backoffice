
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../../shared/components/base.component';
import { IUser } from '../../../services/data/users.service';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'user-history',
    templateUrl: './user-history.template.html',
    styleUrls: ['./user-history.styles.scss']
})
export class UserHistoryComponent extends BaseComponent {
    @Input() public item: IUser;

    public model: any = {};

    constructor(private service: AppService) {
        super();
    }
    
    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.service.Logs.query({ offset: 0, user_id: this.item.id }).then((list) => {
                this.model.logs = list || [];
            }, () => null)
        }
    }
}
