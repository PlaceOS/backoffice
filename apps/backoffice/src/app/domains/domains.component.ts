import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'new-domains-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-base-200  bg-base-100 "
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                title="Domains"
            ></item-sidebar>
            <div class="flex-1 w-1/2 h-full relative flex flex-col z-0">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    title="Domains"
                >
                    <button
                        btn
                        icon
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
                            type="Domain"
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
                    class="absolute bottom-2 left-2 sm:-left-9 w-12 h-12 flex items-center justify-center bg-secondary rounded-lg shadow z-30 text-secondary-content"
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
export class DomainsComponent extends AsyncHandler {
    public readonly name = 'domains';

    public open_menu = false;
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
