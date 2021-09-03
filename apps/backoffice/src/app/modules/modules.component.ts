import { Component } from '@angular/core';
import { querySystems, PlaceModule } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';

@Component({
    selector: 'app-modules',
    template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Modules"
                name="modules"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="module"
                route="modules"
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
export class ModulesComponent extends BaseClass {
    /** Number of systems for the active device */
    public system_count: number;
    /** Whether the list of devices should show only the disconnected devices */
    public only_disconnected: boolean;

    public readonly name = 'modules';

    public readonly show_options = this._service.show_options;

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            {
                id: 'systems',
                name: 'Systems',
                count: this.system_count,
                icon: { class: 'backoffice-documents' },
            },
            { id: 'history', name: 'Settings History', icon: { class: 'backoffice-clock' } },
        ].concat(this.extensions);
    }

    constructor(private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((item) => {
                this.loadValues(item as any);
                this.updateTabList();
            })
        );
        this.updateTabList();
    }

    protected async loadValues(item: PlaceModule) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, module_id: item.id };
        // Get system count
        this.system_count = (await querySystems(query).toPromise()).total;
    }
}
