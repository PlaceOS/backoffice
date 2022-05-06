import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'new-systems-view',
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
                    route="systems"
                    [tabs]="tab_list"
                    class="h-1/2 w-full z-10"
                ></item-display>
                <item-selection class="z-20"></item-selection>
                <button
                    class="absolute bottom-16 -left-9 w-12 h-12 flex items-center justify-center bg-primary rounded-lg shadow z-30 text-white"
                    matTooltip="New system"
                >
                    <app-icon
                        [className]="'backoffice-plus'"
                        class="text-3xl"
                    ></app-icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
})
export class NewSystemsComponent extends BaseClass {
    public readonly name = 'systems';

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(counts: Record<string, number>) {
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
            {
                id: 'history',
                name: 'Settings History',
                icon: { class: 'backoffice-clock' },
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
