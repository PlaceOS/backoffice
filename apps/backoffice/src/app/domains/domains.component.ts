import { Component } from '@angular/core';
import { PlaceDomain, queryApplications, queryLDAPSources, queryOAuthSources, querySAMLSources, queryUsers } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';
import { DomainStateService } from './domain-state.service';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';

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
                class="flex-1 relative mt-12 sm:mt-0 w-full sm:w-1/2"
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

    constructor(private _service: DomainStateService) {
        super();
    }

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(count: HashMap<number>) {
        this.tab_list = [
            {
                id: 'about',
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
            {
                id: 'applications',
                name: 'Applications',
                count: count.applications || 0,
                icon: { class: 'backoffice-publish' },
            },
            {
                id: 'authentication',
                name: 'Authentication',
                count: count.auth_sources || 0,
                icon: { class: 'backoffice-lock-open' },
            },
            {
                id: 'users',
                name: 'Users',
                count: count.users || 0,
                icon: { class: 'backoffice-users' },
            },
        ].concat(this.extensions);
    }

    public ngOnInit(): void {
        this.updateTabList({});
        this.subscription(
            'item',
            this._service.counts.subscribe((c) => this.updateTabList(c as any))
        );
    }
}
