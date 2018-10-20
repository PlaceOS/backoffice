
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.template.html',
    styleUrls: ['./users.styles.scss']
})
export class UsersComponent extends BaseRootComponent {

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.service = 'Users';
        this.model.route = 'users';
    }

    protected loadValues() {

    }
}
