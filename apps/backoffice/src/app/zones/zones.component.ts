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
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar class="hidden sm:block" [route]="name" title="Zones"></item-sidebar>
            <div class="flex-1 w-1/2 h-full relative flex flex-col z-0">
                <item-selection class="z-20 sm:hidden" [route]="name" title="Zones">
                    <button
                        mat-icon-button
                        class="sm:hidden mr-2"
                        (click)="open_menu = true"
                    >
                        <app-icon className="backoffice-menu"></app-icon>
                    </button>
                </item-selection>
                <div class="flex flex-col flex-1 h-1/2">
                    <ng-container *ngIf="item?.id">
                        <item-details
                            [can_edit]="true"
                            [item]="item"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="flex-1 h-1/2 w-full overflow-auto p-4 z-0 relative"
                            (scroll)="scroll = el.scrollTop"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    </ng-container>
                </div>
                <button
                    class="absolute bottom-2 left-2 sm:-left-9 w-12 h-12 flex items-center justify-center bg-primary dark:bg-pink rounded-lg shadow z-30 text-white"
                    matTooltip="New zone"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <app-icon
                        [className]="'backoffice-plus'"
                        class="text-3xl"
                    ></app-icon>
                </button>
                <button
                    class="absolute bottom-16 left-2 sm:-left-8 w-10 h-10 flex items-center justify-center bg-primary dark:bg-pink rounded-lg shadow z-30 text-white"
                    matTooltip="Bulk add zones"
                    matTooltipPosition="right"
                    matRipple
                    (click)="bulkAdd()"
                >
                    <app-icon class="text-2xl">playlist_add</app-icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
})
export class ZonesComponent extends BaseClass {
    public readonly name = 'zones';
    public open_menu = false;

    public tab_list = [];

    public readonly newItem = () => this._item.create();
    public readonly bulkAdd = () => this._item.bulkAdd();

    public get item() {
        return this._service.active_item;
    }

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList(details: Record<string, number>) {
        this.tab_list = [
            {
                id: 'about',
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
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
            {
                id: 'history',
                name: 'Settings History',
                icon: { class: 'backoffice-clock' },
            },
        ].concat(this.extensions);
    }

    constructor(
        protected _service: ZonesStateService,
        protected _item: ActiveItemService,
        protected _route: ActivatedRoute,
        protected _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.counts.subscribe((details) =>
                this.updateTabList(details)
            )
        );
        this.updateTabList({});
    }
}
