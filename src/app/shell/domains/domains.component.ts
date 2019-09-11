
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { toQueryString } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss']
})
export class DomainsComponent extends BaseRootComponent {

    constructor(protected service: ApplicationService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'domain';
        this.model.service = 'Domains';
        this.model.route = 'domains';
    }

    protected loadValues() {
        let query: any = { offset: 0, limit: 1, owner: this.model.item.id };
        const q = `total_${toQueryString(query)}`;
        // Get application count
        this.service.Applications.query(query)
            .then(() => this.model.applications = this.service.Applications.get(q));
        query = { offset: 0, limit: 1, authority_id: this.model.item.id };
        // Get auth source count
        this.service.AuthSources.query(query)
            .then(() => this.model.auth_sources = this.service.AuthSources.get(`total_${toQueryString(query)}`));
        // Get users count
        this.service.Users.query(query)
            .then(() => this.model.users = this.service.Users.get(`total_${toQueryString(query)}`));
    }
}
