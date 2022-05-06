import { Component } from '@angular/core';
import { PlaceModule, querySystems } from '@placeos/ts-client';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';

@Component({
    selector: 'new-modules-view',
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
                <item-selection class="z-20" title="Modules" [route]="name"></item-selection>
            </div>
        </div>
    `,
    styles: [``],
})
export class NewModulesComponent extends BaseClass {
    /** Number of systems for the active device */
    public system_count: number;
    public readonly name = 'modules';

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
