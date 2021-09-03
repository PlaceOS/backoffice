import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';
import { ZonesStateService } from './zones-state.service';
import { HashMap } from '../common/types';

@Component({
    selector: 'app-zones',
    template: `
        <div class="flex-1 flex-col sm:flex-row flex h-full w-full relative">
            <sidebar
                heading="Zones"
                name="zones"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="zone"
                route="zones"
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
export class ZonesComponent extends BaseClass implements OnInit {
    public readonly name = 'zones';

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(details: HashMap<number>) {
        console.log('Details:', details);
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            {
                id: 'systems',
                name: 'Systems',
                count: details.systems,
                icon: { class: 'backoffice-documents' },
            },
            {
                id: 'triggers',
                name: 'Triggers',
                count: details.triggers,
                icon: { class: 'backoffice-stopwatch' },
            },
            {
                id: 'metadata',
                name: 'Metadata',
                count: details.metadata,
                icon: { class: 'backoffice-gist' },
            },
            {
                id: 'children',
                name: 'Children',
                count: details.children,
                icon: { class: 'backoffice-flow-tree' },
            },
            { id: 'history', name: 'Settings History', icon: { class: 'backoffice-clock' } },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ZonesStateService,
        protected _route: ActivatedRoute,
        protected _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.counts.subscribe((details) => this.updateTabList(details))
        );
        this.updateTabList({});
    }
}
