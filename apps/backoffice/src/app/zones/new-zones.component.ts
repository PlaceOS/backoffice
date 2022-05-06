import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'new-zones-view',
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
                <item-selection class="z-20" title="Users" [route]="name"></item-selection>
            </div>
        </div>
    `,
    styles: [``],
})
export class NewZonesComponent extends BaseClass {
    public readonly name = 'users';

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(details: Record<string, number>) {
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
