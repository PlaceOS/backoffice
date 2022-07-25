import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { BaseClass } from '../common/base.class';
import { ActiveItemService } from '../common/item.service';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'new-repositories-view',
    template: `
        <div
            class="absolute inset-0 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-neutral-600 bg-white dark:bg-neutral-700"
        >
            <new-sidebar-menu
                class="sm:h-full bg-gray-200 dark:bg-neutral-800"
            ></new-sidebar-menu>
            <div class="flex-1 w-1/2 h-full relative flex flex-col">
                <item-selection [route]="name" title="Repositories" class="z-20"></item-selection>
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
                            class="flex-1 h-1/2 w-full overflow-auto p-4 z-0"
                            (scroll)="scroll = el.scrollTop"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    </ng-container>
                </div>
                <button
                    class="absolute bottom-16 -left-9 w-12 h-12 flex items-center justify-center bg-primary dark:bg-pink rounded-lg shadow z-30 text-white"
                    matTooltip="New repository"
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
export class NewRepositoriesComponent extends BaseClass {
    public readonly name = 'repositories';

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
        this.tab_list = (this.driver_count < 0 || !this.driver_count
            ? [{ id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } }]
            : [
                  { id: 'about', name: 'About', icon: { class: 'backoffice-info-with-circle' } },
                  {
                      id: 'drivers',
                      name: 'Drivers',
                      count: this.driver_count,
                      icon: { class: 'backoffice-documents' },
                  },
              ]
        ).concat(this.extensions);
    }

    constructor(protected _service: RepositoriesStateService, protected _item: ActiveItemService) {
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
