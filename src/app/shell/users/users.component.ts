import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineUser } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.template.html',
    styleUrls: ['./users.styles.scss']
})
export class UsersComponent extends BaseRootComponent<EngineUser> {
    constructor(
        protected _service: ApplicationService,
        protected _route: ActivatedRoute,
        protected _router: Router
    ) {
        super(_service, _route, _router);
        this.service = this._service.Users as any;
    }
}
