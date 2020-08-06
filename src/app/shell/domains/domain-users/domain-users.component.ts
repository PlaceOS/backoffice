
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceDomain, queryUsers } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'domain-users',
    templateUrl: './domain-users.template.html',
    styleUrls: ['./domain-users.styles.scss']
})
export class DomainUsersComponent extends BaseDirective implements OnInit, OnChanges {
    @Input() public item: PlaceDomain;

    public model: any = {};

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.loadUsers();
            })
        );
        this.loadUsers();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadUsers();
        }
    }

    public loadUsers(offset: number = 0) {
        if (!this.item) { return; }
        queryUsers({ authority_id: this.item.id, offset }).subscribe((list) => {
            if (!offset) { this.model.list = []; }
            for (const item of (list || [])) {
                let found = false;
                for (const i of this.model.list) {
                    if (i.id === item.id) {
                        found = true;
                        break;
                    }
                }
                if (!found) { this.model.list.push(item); }
            }
        }, () => null);
    }
}
