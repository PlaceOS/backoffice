import { Component } from '@angular/core';
import { extensionsForItem } from '../common/api';
import { AsyncHandler } from '../common/async-handler.class';
import { ActiveItemService } from '../common/item.service';
import { i18n } from '../common/locale.service';
import { RepositoriesStateService } from './repositories-state.service';

@Component({
    selector: 'new-repositories-view',
    template: `
        <div
            class="absolute inset-0 flex items-center divide-y divide-base-200 bg-base-100 sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full"></sidebar-menu>
            <item-sidebar
                class="hidden sm:block"
                [route]="name"
                [title]="'REPOS.PLURAL' | translate"
            ></item-sidebar>
            <div class="relative z-0 flex h-full w-1/2 flex-1 flex-col">
                <item-selection
                    class="z-20 sm:hidden"
                    [route]="name"
                    [title]="'REPOS.PLURAL' | translate"
                >
                    <button
                        btn
                        icon
                        class="mr-2 sm:hidden"
                        (click)="open_menu = true"
                    >
                        <app-icon>menu</app-icon>
                    </button>
                </item-selection>
                <div class="flex h-1/2 flex-1 flex-col">
                    <ng-container *ngIf="item?.id">
                        <item-details
                            [can_edit]="true"
                            [item]="item"
                            [type]="'REPOS.SINGULAR' | translate"
                        ></item-details>
                        <item-tablist
                            [base]="name"
                            [tabs]="tab_list"
                            [scrolled]="scroll > 0"
                            class="z-10"
                        ></item-tablist>
                        <div
                            #el
                            class="relative z-0 h-1/2 w-full flex-1 overflow-auto p-4"
                            (scroll)="scroll = el.scrollTop"
                        >
                            <router-outlet></router-outlet>
                        </div>
                    </ng-container>
                </div>
                <button
                    class="absolute bottom-2 left-2 z-30 flex h-12 w-12 items-center justify-center rounded-lg border border-base-200 bg-secondary text-secondary-content shadow sm:-left-9"
                    [matTooltip]="'REPOS.NEW' | translate"
                    matTooltipPosition="right"
                    matRipple
                    (click)="newItem()"
                >
                    <app-icon class="text-3xl">add</app-icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RepositoriesComponent extends AsyncHandler {
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
                          name: i18n('REPOS.TAB_ABOUT'),
                          icon: { content: 'info' },
                      },
                  ]
                : [
                      {
                          id: 'about',
                          name: i18n('REPOS.TAB_ABOUT'),
                          icon: { content: 'info' },
                      },
                      {
                          id: 'drivers',
                          name: i18n('REPOS.TAB_DRIVERS'),
                          count: this.driver_count,
                          icon: { content: 'meeting_room' },
                      },
                  ]
        ).concat(this.extensions);
    }

    constructor(
        protected _service: RepositoriesStateService,
        protected _item: ActiveItemService,
    ) {
        super();
    }

    public async ngOnInit() {
        this.subscription(
            'item',
            this._service.driver_list.subscribe((list) => {
                this.driver_count = list ? list.length : -1;
                this.updateTabList();
            }),
        );
        this.updateTabList();
    }
}
