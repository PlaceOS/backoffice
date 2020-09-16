
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceDomain, queryUsers } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { map } from 'rxjs/operators';

@Component({
    selector: 'domain-users',
    templateUrl: './domain-users.template.html',
    styleUrls: ['./domain-users.styles.scss']
})
export class DomainUsersComponent extends BaseClass implements OnInit, OnChanges {
    @Input() public item: PlaceDomain;

    public model: any = {};


    public ngOnInit(): void {
        this.loadUsers();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadUsers();
        }
    }

    public loadUsers(offset: number = 0) {
        if (!this.item) { return; }
        queryUsers({ authority_id: this.item.id, offset }).pipe(map(resp => resp.data)).subscribe((list) => {
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
