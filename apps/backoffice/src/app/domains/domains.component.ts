import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'new-domains-view',
    template: `
        <div
            class="absolute inset-0 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <sidebar-menu
                class="sm:h-full bg-gray-200 dark:bg-neutral-800"
            ></sidebar-menu>
            <div class="flex-1 w-1/2 h-full relative flex flex-col">
                <item-selection [route]="name" title="Triggers" class="z-20"></item-selection>
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
                    class="absolute bottom-16 -left-9 w-12 h-12 flex items-center justify-center bg-primary dark:bg-pink rounded-lg shadow z-30 text-white"
                    matTooltip="New domain"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
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
export class DomainsComponent extends BaseClass {
    public readonly name = 'domains';

    public tab_list = [];

    public readonly newItem = () => this._item.create();

    public get item() {
        return this._service.active_item;
    }

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    constructor(
        private _service: DomainStateService,
        protected _item: ActiveItemService
    ) {
        super();
    }

    public updateTabList(count: Record<string, number>) {
        this.tab_list = [
            {
                id: 'about',
                name: 'About',
                icon: { class: 'backoffice-info-with-circle' },
            },
            {
                id: 'applications',
                name: 'Applications',
                count: count.applications || 0,
                icon: { class: 'backoffice-publish' },
            },
            {
                id: 'authentication',
                name: 'Authentication',
                count: count.auth_sources || 0,
                icon: { class: 'backoffice-lock-open' },
            },
            {
                id: 'users',
                name: 'Users',
                count: count.users || 0,
                icon: { class: 'backoffice-users' },
            },
        ].concat(this.extensions);
    }

    public ngOnInit(): void {
        this.updateTabList({});
        this.subscription(
            'item',
            this._service.counts.subscribe((c) => this.updateTabList(c as any))
        );
    }
}
