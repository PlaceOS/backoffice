import { Component } from '@angular/core';
import { authority, PlaceDomain, queryApplications, queryUsers } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { AppComponentExtensions } from '../common/types';
import { extensionsForItem } from '../common/api';

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

    public readonly show_options = this._service.show_options;

    constructor(private _service: ActiveItemService) {
        super();
    }

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = [
            {
                id: 'about',
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
            {
                id: 'applications',
                name: 'Applications',
                count: this.applications || 0,
                icon: { class: 'backoffice-publish' },
            },
            {
                id: 'authentication',
                name: 'Authentication',
                count: this.auth_sources || 0,
                icon: { class: 'backoffice-lock-open' },
            },
            {
                id: 'users',
                name: 'Users',
                count: this.user_count || 0,
                icon: { class: 'backoffice-users' },
            },
        ].concat(this.extensions);
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.loadValues(item as any);
            })
        );
        this.updateTabList();
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
        this.updateTabList();
    }
}
