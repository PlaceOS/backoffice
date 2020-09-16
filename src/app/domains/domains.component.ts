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

    constructor(private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
        }))
    }

    protected async loadValues(item: PlaceDomain) {
        if (!item) return;
        let query: any = { offset: 0, limit: 1, owner: item.id };
        // Get application count
        this.applications = (await queryApplications(query).toPromise()).total;
        query = { offset: 0, limit: 1, authority_id: item.id };
        // Get auth source count
        // this._service.AuthSources.query(query).then(
        //     () => (this.auth_sources = this._service.AuthSources.last_total)
        // );
        // Get users count
        this.user_count = (await queryUsers(query).toPromise()).total;
    }
}
