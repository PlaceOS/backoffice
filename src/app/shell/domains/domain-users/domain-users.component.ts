
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EngineDomain } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'domain-users',
    templateUrl: './domain-users.template.html',
    styleUrls: ['./domain-users.styles.scss']
})
export class DomainUsersComponent extends BaseDirective implements OnInit, OnChanges {
    @Input() public item: EngineDomain;

    public model: any = {};

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.load();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        this.service.Users.query({ authority_id: this.item.id, offset }).then((list) => {
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
