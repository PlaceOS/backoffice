import { Component } from '@angular/core';
import { PlaceDriver, queryModules } from '@placeos/ts-client';

import { ActiveItemService } from '../common/item.service';
import { BaseClass } from '../common/base.class';
import { extensionsForItem } from '../common/api';

@Component({
    selector: 'app-drivers',
    template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Drivers"
                name="drivers"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="driver"
                route="drivers"
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
export class DriversComponent extends BaseClass {
    /** Number of devices for the active system */
    public device_count: number;

    public readonly name = 'drivers';

    public readonly show_options = this._service.show_options;

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
            { id: 'modules', name: 'Modules', count: this.device_count, icon: { class: 'backoffice-tablet' } }

        ].concat(this.extensions);
    }

    constructor(protected _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.loadValues(item as any);
            this.updateTabList();
        }));
        this.updateTabList();
    }

    protected async loadValues(item: PlaceDriver) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, driver_id: item.id };
        this.device_count = (await queryModules(query).toPromise()).total;
    }
}
