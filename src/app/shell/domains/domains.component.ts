
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss']
})
export class DomainsComponent extends BaseRootComponent {

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.service = 'Domains';
        this.model.route = 'domains';
    }

    protected loadValues() {
        let query: any = { offset: 0, limit: 1, owner: this.model.item.id };
        const q = `total_${Utils.generateQueryString(query)}`;
        // Get application count
        this.service.Applications.query(query)
            .then(() => this.model.applications = this.service.Applications.get(q));
        query = { offset: 0, limit: 1, authority_id: this.model.item.id };
        // Get auth source count
        this.service.AuthSources.query(query)
            .then(() => this.model.auth_sources = this.service.AuthSources.get(`total_${Utils.generateQueryString(query)}`));
        // Get users count
        this.service.Users.query(query)
            .then(() => this.model.users = this.service.Users.get(`total_${Utils.generateQueryString(query)}`));
    }
}
