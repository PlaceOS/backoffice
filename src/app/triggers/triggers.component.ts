import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { querySystems, PlaceTrigger } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';

import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'app-triggers',
    template: `
        <div
            class="flex-1 flex-col sm:flex-row flex h-full w-full relative"
        >
            <sidebar
                heading="Triggers"
                name="triggers"
                class="absolute top-0 left-0 h-12 w-full sm:h-full sm:static"
            ></sidebar>
            <item-display
                name="trigger"
                route="triggers"
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
export class TriggersComponent extends BaseClass {
    /** Number of system triggers */
    public system_count: number;

    public readonly name = 'triggers';

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
        ].concat(this.extensions);
    }

    constructor(protected _service: ActiveItemService, private _dialog: MatDialog) {
        super();
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

    protected async loadValues(item: PlaceTrigger) {
        if (!item) return;
        const query: any = { offset: 0, limit: 1, trigger_id: item.id };
        // Get trigger count
        this.system_count = (await querySystems(query).toPromise()).total;
        this.updateTabList();
    }
}
