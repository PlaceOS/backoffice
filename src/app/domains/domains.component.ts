import { Component } from '@angular/core';
import { PlaceDomain, queryApplications, queryLDAPSources, queryOAuthSources, querySAMLSources, queryUsers } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';

@Component({
    selector: 'app-domains',
    template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Domains"
                name="domains"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="domain"
                route="domains"
                [tabs]="tab_list"
                class="flex-1 relative mt-12 sm:mt-0"
            ></item-display>
        </div>
    `,
    styles: [
        `
            sidebar {
                transition: height 300ms;
            }
            @media screen and (min-width: 640px) {
                sidebar {
                    width: 20em !important;
                }
            }
        `,
    ],
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
        let query: any = { offset: 0, limit: 1, authority: item.id };
        // Get application count
        this.applications = (await queryApplications(query).toPromise()).total;
        query = { offset: 0, limit: 1, authority_id: item.id };
        // Get auth source count
        this.auth_sources = (await Promise.all([
            queryOAuthSources({ authority: item.id, limit: 1 } as any)
                .toPromise(),
            querySAMLSources({ authority: item.id, limit: 1 } as any)
                .toPromise(),
            queryLDAPSources({ authority: item.id, limit: 1 } as any)
                .toPromise(),
        ])).reduce((c, i) => c + (i.total || 0), 0);
        // Get users count
        this.user_count = (await queryUsers(query).toPromise()).total;
        this.updateTabList();
    }
}
