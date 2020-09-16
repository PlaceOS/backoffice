import { Component } from '@angular/core';
import { PlaceDomain, queryApplications, queryUsers } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.template.html',
    styleUrls: ['./domains.styles.scss'],
})
export class DomainsComponent extends BaseClass {
    /** Number of triggers for the active system */
    public applications: number;
    /** Number of triggers for the active system */
    public auth_sources: number;
    /** Number of triggers for the active system */
    public user_count: number;

    public readonly name = 'domains';

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: ActiveItemService) {
        super();
    }

    protected async loadValues() {
        if (!this.item) {
            return;
        }
        let query: any = { offset: 0, limit: 1, owner: this.item.id };
        // Get application count
        this.applications = (await queryApplications(query).toPromise()).total;
        query = { offset: 0, limit: 1, authority_id: this.item.id };
        // Get auth source count
        // this._service.AuthSources.query(query).then(
        //     () => (this.auth_sources = this._service.AuthSources.last_total)
        // );
        // Get users count
        this.user_count = (await queryUsers(query).toPromise()).total;
    }
}
