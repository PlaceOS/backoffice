
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineUser } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.template.html',
    styleUrls: ['./users.styles.scss']
})
export class UsersComponent extends BaseRootComponent<EngineUser> {

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'user';
        (this as any).service_name = 'Users';
        (this as any).cmp_route = 'users';
    }

    protected loadValues() {

    }
}
