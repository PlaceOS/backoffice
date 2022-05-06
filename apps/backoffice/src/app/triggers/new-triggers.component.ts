import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { listTriggerInstances, PlaceTrigger } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'new-triggers-view',
    template: `
        <div
            class="absolute inset-0 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <new-sidebar-menu
                class="sm:h-full bg-gray-200 dark:bg-neutral-800"
            ></new-sidebar-menu>
            <div class="flex-1 w-1/2 h-full relative flex flex-col-reverse">
                <item-display
                    name="system"
                    [route]="name"
                    [tabs]="tab_list"
                    class="h-1/2 w-full z-10"
                ></item-display>
                <item-selection class="z-20" title="Triggers" [route]="name"></item-selection>
            </div>
        </div>
    `,
    styles: [``],
})
export class NewTriggersComponent extends BaseClass {
    public readonly name = 'triggers';

    public instance_count = 0;
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
                id: 'instances',
                name: 'Instances',
                count: this.instance_count,
                icon: { class: 'backoffice-documents' },
            },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ActiveItemService,
        private _dialog: MatDialog
    ) {
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
        // Get trigger count
        this.instance_count = (
            await listTriggerInstances(item.id).toPromise()
        ).length;
        this.updateTabList();
    }
}
