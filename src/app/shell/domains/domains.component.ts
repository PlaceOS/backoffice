
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineDomain } from '@acaprojects/ts-composer';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss']
})
export class DomainsComponent extends BaseRootComponent<EngineDomain> {
    /** Number of triggers for the active system */
    public applications: number;
    /** Number of triggers for the active system */
    public auth_sources: number;
    /** Number of triggers for the active system */
    public users: number;

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Domains;
    }

    protected loadValues() {
        let query: any = { offset: 0, limit: 1, owner: this.item.id };
        // Get application count
        this._service.Applications.query(query)
            .then(() => this.applications = this._service.Applications.last_total);
        query = { offset: 0, limit: 1, authority_id: this.item.id };
        // Get auth source count
        this._service.AuthSources.query(query)
            .then(() => this.auth_sources = this._service.AuthSources.last_total);
        // Get users count
        this._service.Users.query(query)
            .then(() => this.users = this._service.Users.last_total);
    }
}
