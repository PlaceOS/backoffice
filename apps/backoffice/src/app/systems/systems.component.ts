import { Component, OnInit } from '@angular/core';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';
import { SystemStateService } from './system-state.service';
import { HashMap } from '../common/types';

@Component({
    selector: 'app-systems',
    template: `
        <div class="flex-1 flex-col sm:flex-row flex h-full w-full relative">
            <sidebar
                heading="Systems"
                name="systems"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="system"
                route="systems"
                [tabs]="tab_list"
                class="flex-1 relative mt-12 sm:mt-0 w-full sm:w-1/2 "
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
export class SystemsComponent extends BaseClass implements OnInit {
    public readonly name = 'systems';

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(counts: HashMap<number>) {
        this.tab_list = [
            {
                id: 'about',
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
            {
                id: 'modules',
                name: 'Modules',
                count: counts.devices,
                icon: { class: 'backoffice-tablet' },
            },
            {
                id: 'zones',
                name: 'Zones',
                count: counts.zones,
                icon: { class: 'backoffice-layers' },
            },
            {
                id: 'triggers',
                name: 'Triggers',
                count: counts.triggers,
                icon: { class: 'backoffice-stopwatch' },
            },
            {
                id: 'metadata',
                name: 'Metadata',
                count: counts.metadata,
                icon: { class: 'backoffice-gist' },
            },
        ].concat(this.extensions);
    }

    constructor(protected _service: SystemStateService) {
        super();
    }

    public ngOnInit(): void {
        this.updateTabList({});
        this.subscription(
            'counts',
            this._service.counts.subscribe((counts) =>
                this.updateTabList(counts)
            )
        );
    }
}
