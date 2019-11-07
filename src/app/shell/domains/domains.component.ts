
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        (this as any).type = 'domain';
        (this as any).service_name = 'Domains';
        (this as any).cmp_route = 'domains';
    }

    protected loadValues() {
        let query: any = { offset: 0, limit: 1, owner: this.item.id };
        // Get application count
        this.service.Applications.query(query)
            .then(() => this.applications = this.service.Applications.last_total);
        query = { offset: 0, limit: 1, authority_id: this.item.id };
        // Get auth source count
        this.service.AuthSources.query(query)
            .then(() => this.auth_sources = this.service.AuthSources.last_total);
        // Get users count
        this.service.Users.query(query)
            .then(() => this.users = this.service.Users.last_total);
    }
}
