import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'new-repositories-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar class="hidden sm:block" [route]="name" title="Repositories"></item-sidebar>
            <div class="flex-1 w-1/2 h-full relative flex flex-col z-0">
                <item-selection class="z-20 sm:hidden" [route]="name" title="Repositories">
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
                            type="Repository"
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
                    matTooltip="New system"
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
export class RepositoriesComponent extends BaseClass {
    public readonly name = 'repositories';

    public open_menu = false;
    public driver_count = 0;
    public tab_list = [];

    public readonly newItem = () => this._item.create();

    public get item() {
        return this._service.active_item;
    }

    public get extensions() {
        return extensionsForItem(this._service.active_item, this.name);
    }

    public updateTabList() {
        this.tab_list = (
            this.driver_count < 0 || !this.driver_count
                ? [
                      {
                          id: 'about',
                          name: 'About',
                          icon: { class: 'backoffice-info-with-circle' },
                      },
                  ]
                : [
                      {
                          id: 'about',
                          name: 'About',
                          icon: { class: 'backoffice-info-with-circle' },
                      },
                      {
                          id: 'drivers',
                          name: 'Drivers',
                          count: this.driver_count,
                          icon: { class: 'backoffice-documents' },
                      },
                  ]
        ).concat(this.extensions);
    }

    constructor(
        protected _service: RepositoriesStateService,
        protected _item: ActiveItemService
    ) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'item',
            this._service.driver_list.subscribe((list) => {
                this.driver_count = list ? list.length : -1;
                this.updateTabList();
            })
        );
        this.updateTabList();
    }
}
